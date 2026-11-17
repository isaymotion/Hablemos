#!/usr/bin/env node
/* Data check for js/data/grammar-transform-*.js (Hablemos 0.7.0, #/transform).
   Usage: node transform_check.js /home/claude/hablemos   → prints TRANSFORM OK or the errors (exit 1). */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = process.argv[2] || '/home/claude/hablemos';
const dir = path.join(root, 'js/data');
const files = fs.readdirSync(dir).filter((f) => /^grammar-transform-\d+\.js$/.test(f)).sort();
const errs = [];
if (!files.length) errs.push('no js/data/grammar-transform-*.js file');
const ctx = vm.createContext({}); ctx.window = ctx;
files.forEach((f) => {
  const src = fs.readFileSync(path.join(dir, f), 'utf8');
  if (!/DRAFT FOR REVIEW by a native Spanish-speaking clinician/.test(src)) errs.push(f + ': header lacks the DRAFT FOR REVIEW line');
  if (!/permanent/.test(src)) errs.push(f + ': header does not say ids are permanent');
  try { vm.runInContext(src, ctx, { filename: f }); } catch (e) { errs.push(f + ': does not load: ' + e.message); }
  // Forbidden strings (whole words for the short ones), Japanese script.
  const words = /\b(po|kayo|opo|ninyo|Dok|Tagalog|Filipino|Mariveles|NCMH|barangay|shabu|betel|Aling|Mang|JLPT|N5|N4|N3|N2|romaji|furigana)\b/;
  const subs = ['1553', 'MMH-', '《', 'JA.'];
  src.split('\n').forEach((line, i) => {
    const m = words.exec(line); if (m) errs.push(f + ':' + (i + 1) + ' forbidden word ' + m[0]);
    subs.forEach((s) => { if (line.includes(s)) errs.push(f + ':' + (i + 1) + ' forbidden string ' + s); });
    if (/[぀-ヿ㐀-鿿]/.test(line)) errs.push(f + ':' + (i + 1) + ' Japanese script');
    if (/\b(loco|loca|adicto|adicta|drogadicto)\b/i.test(line)) errs.push(f + ':' + (i + 1) + ' stigmatizing word');
    if (/\b(suic[ií]d|m[aá]t(ate|ese|ense)|c[oó]rt(ate|ese)|lastímese|h[aá]gase daño)/i.test(line)) errs.push(f + ':' + (i + 1) + ' unsafe form');
  });
});
const G = ctx.GRAMMAR_TRANSFORM;
const LEVELS = ['A1', 'A2', 'B1', 'B2'];
const TYPES = ['neg', 'question', 'plural', 'gender', 'usted-tu', 'ir-a', 'past-pret', 'past-imp', 'perfect', 'progressive', 'command', 'neg-command',
  'pronoun-do', 'pronoun-io', 'join', 'hace', 'compare', 'subj-wish', 'subj-time', 'reported', 'se-imp', 'conditional-polite', 'si-unreal', 'passive-se', 'regret', 'concession'];
const LESSON_IDS = ('sounds ser-estar gender-agreement tu-usted questions negation numbers-dates present-tense reflexive-feelings gustar-doler past-timelines ' +
  'commands-instructions body-symptoms medicines-dosing subjunctive-basics regional-variety spanglish softeners values faith-folk idioms-distress false-friends interpreting ' +
  'articles-contractions subject-pronouns hay-estar possessives demonstratives basic-prepositions muy-mucho tener-expressions ir-a-future stem-changing irregular-yo ' +
  'querer-poder-necesitar time-frequency family-household review-a1 ' +
  'preterite-regular preterite-irregular imperfect preterite-vs-imperfect hace-desde present-perfect direct-object-pronouns indirect-object-pronouns por-para ' +
  'present-progressive saber-conocer obligation-advice comparatives connectors-basic review-a2 ' +
  'subjunctive-wishes subjunctive-emotion-doubt subjunctive-time-purpose negative-commands-pronouns future-conditional pluperfect reported-speech relative-clauses ' +
  'se-impersonal se-accidental verbs-of-change periphrases diminutives prepositional-verbs review-b1 ' +
  'imperfect-subjunctive si-clauses conditional-perfect-regret subjunctive-concession passive-and-se ser-estar-adjectives lo-neutro future-of-probability ' +
  'discourse-markers casual-speech advanced-pronouns chart-and-form-spanish review-b2').split(' ');
// The typed-answer normalisation of js/transform.js (case, spaces, commas, ¿ ¡ ? ! . … ignored).
const normT = (s) => String(s || '').normalize('NFC').toLowerCase().replace(/[’']/g, "'").replace(/[¿¡?!.,;:…"]/g, ' ').replace(/\s+/g, ' ').trim();
const str = (x) => typeof x === 'string' && x.trim() !== '';
const sentenceOk = (s) => /^[¿¡]?[A-ZÁÉÍÓÚÑ]/.test(s) && /[.?!]$/.test(s) && !/\s{2,}|\s[.,?!]/.test(s) && (s.split('¿').length === s.split('?').length) && (s.split('¡').length === s.split('!').length);
if (!Array.isArray(G)) errs.push('window.GRAMMAR_TRANSFORM is not an array');
else {
  const per = {}, seen = new Set();
  G.forEach((x, k) => {
    const w = (x && x.id) || '#' + k;
    if (!x || typeof x !== 'object') return errs.push(w + ': not an object');
    const keys = Object.keys(x).sort().join(',');
    if (keys !== 'alt,en,from,id,instr,l,lv,to,type,wrong') errs.push(w + ': keys ' + keys);
    if (!LEVELS.includes(x.lv)) errs.push(w + ': lv ' + x.lv);
    per[x.lv] = (per[x.lv] || 0) + 1;
    const want = 't-' + String(x.lv).toLowerCase() + '-' + String(per[x.lv]).padStart(3, '0');
    if (x.id !== want) errs.push(w + ': id out of sequence, expected ' + want);
    if (seen.has(x.id)) errs.push(w + ': duplicate id'); seen.add(x.id);
    if (!TYPES.includes(x.type)) errs.push(w + ': unknown type ' + x.type);
    if (!str(x.instr) || !/[.?)…]$/.test(x.instr)) errs.push(w + ': instr');
    const from = Array.isArray(x.from) ? x.from : [x.from];
    if (Array.isArray(x.from) && x.from.length !== 2) errs.push(w + ': from array must have two sentences');
    if (Array.isArray(x.from) && x.type !== 'join' && x.type !== 'compare' && x.type !== 'subj-time' && x.type !== 'concession') errs.push(w + ': from array on a non-joining type');
    from.forEach((s) => { if (!str(s) || !sentenceOk(s)) errs.push(w + ': from not a sentence: ' + s); });
    const nw = from.join(' ').split(/\s+/).length;
    if (nw < 2 || nw > 9) errs.push(w + ': from has ' + nw + ' words (keep it short)');
    if (!str(x.to) || !sentenceOk(x.to)) errs.push(w + ': to not a sentence: ' + x.to);
    if (!Array.isArray(x.alt) || !x.alt.every(str)) errs.push(w + ': alt must be an array of strings');
    if (!Array.isArray(x.wrong) || x.wrong.length !== 3 || !x.wrong.every(str)) errs.push(w + ': wrong must be exactly 3 strings');
    (x.alt || []).concat(x.wrong || []).forEach((s) => { if (str(s) && !sentenceOk(s)) errs.push(w + ': not a sentence: ' + s); });
    const all = [x.to].concat(x.alt || [], x.wrong || []);
    if (new Set(all).size !== all.length) errs.push(w + ': to / alt / wrong not distinct');
    const fromN = from.map(normT), fromJ = normT(from.join(' '));
    all.forEach((s) => { if (from.includes(s)) errs.push(w + ': equals from: ' + s); });
    // A right answer must not be typed by copying from (the typed check ignores punctuation).
    [x.to].concat(x.alt || []).forEach((s) => { if (fromN.includes(normT(s)) || normT(s) === fromJ) errs.push(w + ': right answer normalises to from: ' + s); });
    // A wrong option must not be accepted by the typed check (it would be a second right answer).
    const good = new Set([x.to].concat(x.alt || []).map(normT));
    (x.wrong || []).forEach((s) => { if (good.has(normT(s))) errs.push(w + ': wrong option normalises to a right answer: ' + s); });
    const goodN = [x.to].concat(x.alt || []).map(normT);
    if (new Set(goodN).size !== goodN.length) errs.push(w + ': two right answers differ only by case or punctuation');
    if (!str(x.en) || /[¿¡]/.test(x.en)) errs.push(w + ': en');
    if (!LESSON_IDS.includes(x.l)) errs.push(w + ': lesson id not in the syllabus: ' + x.l);
  });
  LEVELS.forEach((lv) => { if (per[lv] !== 40) errs.push(lv + ': ' + (per[lv] || 0) + ' items, expected 40'); });
  // Level fit (types allowed per level).
  const FIT = { A1: ['neg', 'question', 'plural', 'gender', 'usted-tu', 'ir-a'],
    A2: ['past-pret', 'past-imp', 'perfect', 'progressive', 'command', 'neg-command', 'pronoun-do', 'pronoun-io', 'join', 'hace', 'compare'],
    B1: ['subj-wish', 'subj-time', 'reported', 'se-imp', 'conditional-polite', 'neg-command'],
    B2: ['si-unreal', 'regret', 'passive-se', 'reported', 'concession'] };
  G.forEach((x) => { if (FIT[x.lv] && !FIT[x.lv].includes(x.type)) errs.push(x.id + ': type ' + x.type + ' does not fit ' + x.lv); });
}
if (errs.length) { console.log(errs.slice(0, 80).join('\n')); console.log(errs.length + ' error(s)'); process.exit(1); }
console.log('TRANSFORM OK (' + G.length + ' items in ' + files.join(', ') + ')');
