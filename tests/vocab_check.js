#!/usr/bin/env node
/* Hablemos 0.8.0 vocabulary quiz and topic sets check. Usage: node tests/vocab_check.js <app folder>
   Loads the dictionary (js/data/dict-*.js through js/core.js), every sentence source, js/cloze.js (App.fillBlank),
   js/data/topic-sets.js and js/vocab.js in a sandbox, then checks:
   - TOPIC_SETS: 16 to 20 sets, ids unique and well formed, titles, 12 to 18 words each, every word the first two
     fields of a dictionary line exactly, no word or headword twice in a set, no two words of a set sharing an English
     gloss (so the matching game has one right answer), no stigmatizing words.
   - Quiz options: for every Vocabulary and Clinical vocabulary deck and every mode, built questions have 4 distinct
     options and no wrong option is another sense of the answer's headword or shares an English gloss with the answer.
   - In context: blanked sentence has exactly one ＿＿＿, the sentence is 4 to 14 words, options are single words of the
     answer's part of speech; type-it judge: exact, accent-less ("accents") and wrong answers.
   - Forbidden strings in the two new files.
   Prints: VOCAB OK <sets> <words>, then the In context coverage per deck group. Exit 1 on failure. */
const vm = require('vm'), fs = require('fs'), path = require('path');
const dir = path.resolve(process.argv[2] || '.');
const fail = [];
const bad = (m) => { if (fail.length < 60) fail.push(m); };

const c = vm.createContext({ console, setTimeout, clearTimeout, URLSearchParams });
c.window = c; c.navigator = {}; c.localStorage = { getItem: () => null, setItem: () => {} };
const run = (rel) => { const p = path.join(dir, rel); if (!fs.existsSync(p)) return false; vm.runInContext(fs.readFileSync(p, 'utf8'), c, { filename: rel }); return true; };
const html = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
const srcs = [...html.matchAll(/<script src="([^"]+)"/g)].map((m) => m[1]).filter((s) => /^js\/(data\/|lang|audio-key|core)/.test(s) && !/topic-sets/.test(s));
const extras = fs.readdirSync(path.join(dir, 'js/data')).filter((f) => /^lesson-extra-.*\.js$/.test(f)).map((f) => 'js/data/' + f).filter((f) => !srcs.includes(f));
// data files first (in page order, lesson extras before meta.js), then the engine pieces we need
const metaAt = srcs.indexOf('js/data/meta.js');
const order = metaAt >= 0 ? srcs.slice(0, metaAt).concat(extras, srcs.slice(metaAt)) : srcs.concat(extras);
order.forEach(run);
if (!run('js/data/topic-sets.js')) bad('js/data/topic-sets.js missing');
run('js/cloze.js');
if (!run('js/vocab.js')) bad('js/vocab.js missing');
const App = c.App;
if (!App || !App.DICT) { console.error('VOCAB FAIL: dictionary did not load'); process.exit(1); }

// ---------- topic sets ----------
const norm = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').trim();
const gloss = (en) => norm(en).replace(/\([^)]*\)/g, ' ').split(/[,;/]/).map((s) => s.replace(/\s+/g, ' ').trim().replace(/^(to|a|an|the) /, '')).filter(Boolean);
const byKey = new Map(App.DICT.map((e) => [e.tl + '|' + e.en, e]));
const SETS = c.TOPIC_SETS;
let words = 0;
if (!Array.isArray(SETS)) bad('TOPIC_SETS is not an array');
else {
  if (SETS.length < 16 || SETS.length > 20) bad('TOPIC_SETS has ' + SETS.length + ' sets (16 to 20)');
  const ids = new Set();
  SETS.forEach((s, k) => {
    const at = 'set ' + (s && s.id || k);
    if (!s || typeof s.id !== 'string' || !/^[a-z][a-z0-9-]*$/.test(s.id)) bad(at + ': bad id');
    if (ids.has(s.id)) bad(at + ': duplicate id'); ids.add(s.id);
    if (typeof s.title !== 'string' || !s.title.trim()) bad(at + ': no title');
    if (typeof s.clin !== 'boolean') bad(at + ': clin must be true or false');
    if (!Array.isArray(s.words)) { bad(at + ': no words'); return; }
    if (s.words.length < 12 || s.words.length > 18) bad(at + ': ' + s.words.length + ' words (12 to 18)');
    const seenW = new Set(), seenH = new Set(), ents = [];
    s.words.forEach((w) => {
      words++;
      if (seenW.has(w)) bad(at + ': "' + w + '" twice'); seenW.add(w);
      const e = byKey.get(w);
      if (!e) { bad(at + ': "' + w + '" is not a dictionary line (headword|English exactly)'); return; }
      if (seenH.has(e.ftl)) bad(at + ': headword "' + e.tl + '" twice'); seenH.add(e.ftl);
      if (e.cat === 'stigma') bad(at + ': stigmatizing word "' + e.tl + '"');
      ents.push(e);
    });
    for (let i = 0; i < ents.length; i++) for (let j = i + 1; j < ents.length; j++) {
      const a = gloss(ents[i].en), b = gloss(ents[j].en);
      if (a.some((p) => b.includes(p))) bad(at + ': "' + ents[i].tl + '" and "' + ents[j].tl + '" share an English gloss');
    }
    if (App.vocabSetWords && App.vocabSetWords(s).length !== ents.length) bad(at + ': the app resolves a different number of words');
  });
}

// ---------- quiz questions ----------
const decks = App.decks().filter((d) => d.group === 'Vocabulary' || d.group === 'Clinical vocabulary');
if (!App.vocabMakeQs) bad('App.vocabMakeQs missing');
else {
  const dictOf = (id) => App.dictById[id];
  decks.forEach((d) => {
    const ws = d.ids.map(dictOf).filter(Boolean);
    ['meaning', 'recall', 'context'].forEach((m) => {
      for (let rep = 0; rep < 3; rep++) {
        const qs = App.vocabMakeQs(ws, m, 20);
        qs.forEach((q) => {
          const at = d.id + ':' + m + ' "' + q.q + '"';
          if (!Array.isArray(q.opts) || q.opts.length !== 4) { bad(at + ': ' + (q.opts || []).length + ' options'); return; }
          if (new Set(q.opts.map(norm)).size !== 4) bad(at + ': options not distinct ' + q.opts.join(' / '));
          const e = q.word || dictOf(q.cardId);
          const hg = (x) => App.DICT.filter((y) => y.ftl === x.ftl).reduce((a, y) => a.concat(gloss(y.en)), gloss(x.en));
          const ge = hg(e);
          q.opts.slice(1).forEach((o) => {
            const xs = App.DICT.filter((x) => (m === 'meaning' ? x.en === o : x.tl === o));
            if (!xs.length) bad(at + ': option "' + o + '" not in the dictionary');
            if (m === 'meaning' && gloss(o).some((p) => ge.includes(p))) bad(at + ': wrong option "' + o + '" shares a gloss with ' + e.en);
            const cx = xs.find((x) => x.ftl === e.ftl || (m !== 'meaning' && hg(x).some((p) => ge.includes(p))));
            if (cx) bad(at + ': wrong option "' + o + '" could be right (' + cx.tl + ' = ' + cx.en + ')');
          });
          if (m === 'context') {
            if ((q.q.match(/＿＿＿/g) || []).length !== 1) bad(at + ': not exactly one blank');
            const n = q.after.split(/\s+/).filter((t) => /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]/.test(t)).length;
            if (n < 4 || n > 14) bad(at + ': sentence of ' + n + ' words');
            q.opts.forEach((o) => { if (/\s/.test(o)) bad(at + ': multi-word option "' + o + '"'); });
            const ok = App.DICT.filter((x) => q.opts.slice(1).includes(x.tl)).every((x) => q.opts.slice(1).every((o) => App.DICT.some((y) => y.tl === o && y.pos === e.pos)));
            if (!ok) bad(at + ': an option has another part of speech');
          }
        });
      }
    });
  });
}

// ---------- type it ----------
if (!App.vocabJudge) bad('App.vocabJudge missing');
else {
  const find = (tl, en) => App.DICT.find((e) => e.tl === tl && (!en || e.en === en));
  const tests = [['corazón', 'corazón', 'right'], ['corazón', 'Corazon', 'accents'], ['corazón', 'el corazón.', 'right'], ['corazón', 'cabeza', 'wrong'], ['niño', 'nino', 'accents'], ['aquí', 'acá', 'right']];
  tests.forEach(([tl, typed, want]) => { const e = find(tl); if (!e) return; const got = App.vocabJudge(typed, e).v; if (got !== want) bad('type it: "' + typed + '" for ' + tl + ' gave ' + got + ', expected ' + want); });
}

// ---------- forbidden strings ----------
const FORBID = [/\bpo\b/, /\bkayo\b/, /\bopo\b/, /\bninyo\b/, /\bDok\b/, /Tagalog/, /Filipino/, /Mariveles/, /NCMH/, /1553/, /barangay/i, /shabu/i, /betel/i, /MMH-/, /\bAling\b/, /\bMang\b/, /《/, /[぀-ヿ一-鿿]/, /JLPT/, /\bN[2-5]\b/, /romaji/i, /furigana/i, /\bJA\./];
['js/vocab.js', 'js/data/topic-sets.js'].forEach((f) => {
  const p = path.join(dir, f); if (!fs.existsSync(p)) return;
  const t = fs.readFileSync(p, 'utf8');
  FORBID.forEach((re) => { if (re.test(t)) bad(f + ': forbidden string ' + re); });
});

if (fail.length) { console.error('VOCAB FAIL\n- ' + fail.join('\n- ')); process.exit(1); }
console.log('VOCAB OK ' + SETS.length + ' ' + words);
const cc = App.vocabContextCount ? App.vocabContextCount() : {};
const all = App.DICT.filter((e) => App.vocabContextOf && App.vocabContextOf(e)).length;
console.log('In context: ' + all + ' of ' + App.DICT.length + ' dictionary words have a sentence (' + (App.vocabSentences ? App.vocabSentences().length : '?') + ' sentences in the pool).');
Object.entries(cc).forEach(([g, [w, n, able]]) => console.log('  ' + g + ': ' + w + ' of ' + n + ' words (' + able + ' single content words eligible)'));
decks.forEach((d) => { const ws = d.ids.map((id) => App.dictById[id]).filter(Boolean); const k = new Set(ws.filter((e) => App.vocabContextOf(e)).map((e) => e.ftl)).size; console.log('    ' + d.id + ' ' + k + '/' + ws.length + (k < 8 ? ' (mode hidden)' : '')); });
