#!/usr/bin/env node
/* Data check for js/data/grammar-cloze-*.js (Hablemos 0.7.0, #/cloze). Works with any subset of the a1 / a2 / b1 / b2 files.
   Usage: node cloze_check.js /home/claude/hablemos   → prints counts per level and lesson, then CLOZE OK or the errors (exit 1). */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = process.argv[2] || '/home/claude/hablemos';
const dir = path.join(root, 'js/data');
const files = fs.readdirSync(dir).filter((f) => /^grammar-cloze-[a-z0-9]+\.js$/.test(f)).sort();
const errs = [], warns = [];
if (!files.length) errs.push('no js/data/grammar-cloze-*.js file');

// The syllabus of the pass 8 brief: level → lesson ids (existing and new). Items may use any of them except the reviews.
const SYL = {
  A1: 'sounds ser-estar gender-agreement tu-usted questions negation numbers-dates articles-contractions subject-pronouns hay-estar possessives demonstratives ' +
    'basic-prepositions muy-mucho tener-expressions ir-a-future stem-changing irregular-yo querer-poder-necesitar time-frequency family-household review-a1',
  A2: 'present-tense reflexive-feelings gustar-doler past-timelines commands-instructions body-symptoms medicines-dosing preterite-regular preterite-irregular imperfect ' +
    'preterite-vs-imperfect hace-desde present-perfect direct-object-pronouns indirect-object-pronouns por-para present-progressive saber-conocer obligation-advice ' +
    'comparatives connectors-basic review-a2',
  B1: 'subjunctive-basics regional-variety spanglish softeners values faith-folk idioms-distress false-friends interpreting subjunctive-wishes subjunctive-emotion-doubt ' +
    'subjunctive-time-purpose negative-commands-pronouns future-conditional pluperfect reported-speech relative-clauses se-impersonal se-accidental verbs-of-change ' +
    'periphrases diminutives prepositional-verbs review-b1',
  B2: 'imperfect-subjunctive si-clauses conditional-perfect-regret subjunctive-concession passive-and-se ser-estar-adjectives lo-neutro future-of-probability ' +
    'discourse-markers casual-speech advanced-pronouns chart-and-form-spanish review-b2'
};
const LEVEL_OF = {};
Object.entries(SYL).forEach(([lv, s]) => s.split(' ').forEach((id) => (LEVEL_OF[id] = lv)));
const LEVELS = Object.keys(SYL);
// A1 and A2 must cover every grammar lesson with 5 items (sounds and the reviews excepted).
const MUST = { A1: SYL.A1.split(' ').filter((id) => id !== 'sounds' && !/^review-/.test(id)), A2: SYL.A2.split(' ').filter((id) => !/^review-/.test(id)) };

const ctx = vm.createContext({}); ctx.window = ctx;
files.forEach((f) => {
  const src = fs.readFileSync(path.join(dir, f), 'utf8');
  if (!/DRAFT FOR REVIEW by a native Spanish-speaking clinician/.test(src)) errs.push(f + ': header lacks the DRAFT FOR REVIEW line');
  if (!/permanent/.test(src)) errs.push(f + ': header does not say ids are permanent');
  if (!/window\.GRAMMAR_CLOZE = \(window\.GRAMMAR_CLOZE \|\| \[\]\)\.concat\(\[/.test(src)) errs.push(f + ': does not append with window.GRAMMAR_CLOZE = (window.GRAMMAR_CLOZE || []).concat([');
  const before = (ctx.GRAMMAR_CLOZE || []).length;
  try { vm.runInContext(src, ctx, { filename: f }); } catch (e) { errs.push(f + ': does not load: ' + e.message); }
  if ((ctx.GRAMMAR_CLOZE || []).length === before) errs.push(f + ': adds no items');
  // Forbidden strings (whole words for the short ones), Japanese script, stigmatizing and unsafe forms.
  const words = /\b(po|kayo|opo|ninyo|Dok|Tagalog|Filipino|Mariveles|NCMH|barangay|shabu|betel|Aling|Mang|JLPT|N5|N4|N3|N2|romaji|furigana)\b/;
  const subs = ['1553', 'MMH-', '《', '》', 'JA.'];
  src.split('\n').forEach((line, i) => {
    const m = words.exec(line); if (m) errs.push(f + ':' + (i + 1) + ' forbidden word ' + m[0]);
    subs.forEach((s) => { if (line.includes(s)) errs.push(f + ':' + (i + 1) + ' forbidden string ' + s); });
    if (/[぀-ヿ㐀-鿿]/.test(line)) errs.push(f + ':' + (i + 1) + ' Japanese script');
    if (/\b(loco|loca|locos|locas|adicto|adicta|drogadicto|drogadicta)\b/i.test(line)) errs.push(f + ':' + (i + 1) + ' stigmatizing word');
    if (/\b(suic[ií]d[ae]te|suic[ií]dese|m[aá]t(ate|ese|ense|émonos)|c[oó]rt(ate|ese|émonos)|lastím(ate|ese|émonos)|h[aá]g(ase|anse) daño|vamos a (matarnos|morir|suicidarnos|lastimarnos|cortarnos)|muérase|muérete)\b/i.test(line)) errs.push(f + ':' + (i + 1) + ' unsafe form');
  });
});

// Mirror of App.fillBlank in js/cloze.js (kept identical: the recorded clip key depends on it).
const fillBlank = (s, a) => {
  s = String(s == null ? '' : s); a = String(a == null ? '' : a);
  const at = s.indexOf('＿');
  if (at < 0) return s.replace(/ {2,}/g, ' ').trim();
  const prev = s.slice(0, at).replace(/\s+$/, '');
  const start = !prev || /[¿¡.!?…:—–-]$/.test(prev) || /^[«"“(]+$/.test(prev);
  const word = start && a ? a.charAt(0).toUpperCase() + a.slice(1) : a;
  return (s.slice(0, at) + word + s.slice(at + 1)).replace(/ {2,}/g, ' ').trim();
};
// Check that the view's copy is still the same function body.
try {
  const view = fs.readFileSync(path.join(root, 'js/cloze.js'), 'utf8');
  const body = (src) => { const m = /fillBlank = \(s, a\) => \{([\s\S]*?)\n\s*\};/.exec(src); return m ? m[1].replace(/\s+/g, ' ').trim() : null; };
  const a = body(view), b = body(fs.readFileSync(__filename, 'utf8'));
  if (!a) warns.push('js/cloze.js: App.fillBlank not found'); else if (a !== b) errs.push('js/cloze.js: App.fillBlank differs from the copy in cloze_check.js');
} catch (e) { warns.push('js/cloze.js not readable: ' + e.message); }

const str = (x) => typeof x === 'string' && x.trim() !== '';
const G = ctx.GRAMMAR_CLOZE;
const perLv = {}, perL = {}, posCount = {};
if (!Array.isArray(G)) errs.push('window.GRAMMAR_CLOZE is not an array');
else {
  const seen = new Set(), sents = new Map(), seq = {};
  G.forEach((x, k) => {
    const w = (x && x.id) || '#' + k;
    if (!x || typeof x !== 'object') return errs.push(w + ': not an object');
    const keys = Object.keys(x).sort().join(',');
    if (keys !== 'a,en,id,l,lv,opts,s,why') errs.push(w + ': keys ' + keys);
    if (!LEVELS.includes(x.lv)) errs.push(w + ': lv ' + x.lv);
    seq[x.lv] = (seq[x.lv] || 0) + 1;
    const want = 'c-' + String(x.lv).toLowerCase() + '-' + String(seq[x.lv]).padStart(3, '0');
    if (x.id !== want) errs.push(w + ': id out of sequence, expected ' + want);
    if (seen.has(x.id)) errs.push(w + ': duplicate id'); seen.add(x.id);
    if (!LEVEL_OF[x.l]) errs.push(w + ': lesson id not in the syllabus: ' + x.l);
    else if (/^review-/.test(x.l)) errs.push(w + ': items do not go on review lessons: ' + x.l);
    else if (LEVEL_OF[x.l] !== x.lv) errs.push(w + ': lesson ' + x.l + ' is ' + LEVEL_OF[x.l] + ', item is ' + x.lv);
    perLv[x.lv] = (perLv[x.lv] || 0) + 1;
    perL[x.l] = (perL[x.l] || 0) + 1;
    // Sentence: exactly one ＿, standing as its own word (no letter or digit touching it), no other underscore-like marks.
    if (!str(x.s)) errs.push(w + ': s');
    else {
      const n = x.s.split('＿').length - 1;
      if (n !== 1) errs.push(w + ': s has ' + n + ' blanks');
      if (/[\p{L}\p{N}]＿|＿[\p{L}\p{N}]/u.test(x.s)) errs.push(w + ': the blank touches a letter: ' + x.s);
      if (/_|＿＿/.test(x.s)) errs.push(w + ': stray underscore');
      if (/\s{2,}|\s[.,?!:;]|^\s|\s$/.test(x.s)) errs.push(w + ': spacing in s');
      if (/[<>]/.test(x.s)) errs.push(w + ': HTML in s');
      if (x.s.split('¿').length !== x.s.split('?').length) errs.push(w + ': ¿ ? do not pair');
      if (x.s.split('¡').length !== x.s.split('!').length) errs.push(w + ': ¡ ! do not pair');
      // A blank right after a mid-sentence ¿ or ¡ would be capitalised by fillBlank, which is wrong after a comma.
      if (/[,;]\s*[¿¡]\s*＿/.test(x.s)) errs.push(w + ': blank after a mid-sentence ¿ or ¡ (fillBlank would capitalise it)');
      const k2 = x.s.toLowerCase();
      if (sents.has(k2)) errs.push(w + ': duplicate sentence of ' + sents.get(k2)); else sents.set(k2, x.id);
    }
    // Options: 4 distinct strings, the answer among them, none containing the blank, none equal after case folding.
    if (!Array.isArray(x.opts) || x.opts.length !== 4 || !x.opts.every(str)) errs.push(w + ': opts must be 4 strings');
    else {
      if (new Set(x.opts).size !== 4 || new Set(x.opts.map((o) => o.toLowerCase().trim())).size !== 4) errs.push(w + ': opts not distinct');
      if (!x.opts.includes(x.a)) errs.push(w + ': a is not among opts');
      x.opts.forEach((o) => { if (o !== o.trim() || /＿|\s{2,}/.test(o)) errs.push(w + ': option spacing: ' + o); });
      const p = x.opts.indexOf(x.a); posCount[p] = (posCount[p] || 0) + 1;
    }
    if (!str(x.a)) errs.push(w + ': a');
    // The filled sentence: starts with a capital (after ¿ ¡), ends with . ? ! and has no leftover blank.
    if (str(x.s) && str(x.a)) {
      const full = fillBlank(x.s, x.a);
      if (/＿/.test(full)) errs.push(w + ': blank left in the filled sentence');
      if (!/^[«"“(¿¡]*[A-ZÁÉÍÓÚÑÜ]/.test(full)) errs.push(w + ': filled sentence does not start with a capital: ' + full);
      if (!/[.?!]$/.test(full)) errs.push(w + ': filled sentence does not end with . ? or !: ' + full);
    }
    if (!str(x.en) || /[¿¡＿]/.test(x.en) || !/[.?!]$/.test(x.en)) errs.push(w + ': en must be one English sentence ending in . ? or !');
    if (!str(x.why) || !/[.]$/.test(x.why) || /—/.test(x.why)) errs.push(w + ': why must be one sentence ending with a full stop, no em-dash');
    else if ((x.why.match(/[.!?]\s+[A-ZÁÉÍÓÚÑ]/g) || []).length > 0) errs.push(w + ': why has more than one sentence');
  });
  // Coverage: A1 and A2 lessons with 5 items each, when that level's file is present.
  Object.entries(MUST).forEach(([lv, ids]) => {
    if (!perLv[lv]) return;
    ids.forEach((id) => { if ((perL[id] || 0) !== 5) errs.push(lv + ' lesson ' + id + ' has ' + (perL[id] || 0) + ' items (want 5)'); });
  });
  // Answer position should vary.
  const tot = Object.values(posCount).reduce((a, b) => a + b, 0);
  [0, 1, 2, 3].forEach((p) => { if (tot >= 20 && (posCount[p] || 0) < tot * 0.15) warns.push('answer position ' + (p + 1) + ' is used for only ' + (posCount[p] || 0) + ' of ' + tot + ' items'); });
}

console.log('Files: ' + files.join(', '));
console.log('Items per level: ' + LEVELS.map((lv) => lv + ' ' + (perLv[lv] || 0)).join(', ') + ' (total ' + (Array.isArray(G) ? G.length : 0) + ')');
LEVELS.forEach((lv) => {
  const ids = Object.keys(perL).filter((id) => LEVEL_OF[id] === lv);
  if (ids.length) console.log('  ' + lv + ': ' + ids.map((id) => id + ' ' + perL[id]).join(', '));
});
console.log('Answer position: ' + [0, 1, 2, 3].map((p) => (p + 1) + ':' + (posCount[p] || 0)).join(' '));
warns.forEach((w) => console.log('WARN ' + w));
if (errs.length) { errs.slice(0, 80).forEach((e) => console.log('ERR ' + e)); console.log(errs.length + ' error(s)'); process.exit(1); }
console.log('CLOZE OK');
