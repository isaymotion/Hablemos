#!/usr/bin/env node
/* Collects every Spanish string the app can speak and writes tools/texts.json:
   [{ key, text }]. key = audio file name (see js/audio-key.js; the same function is used here). */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.join(__dirname, '..');
const ctx = { window: {}, console, TextEncoder, Buffer };
ctx.window = ctx;
vm.createContext(ctx);
const load = (f) => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
const files = ['js/data/dict-core.js', 'js/data/dict-everyday.js', 'js/data/dict-clinical.js', 'js/data/dict-more.js', 'js/data/lessons.js', 'js/data/lessons-2.js', 'js/data/lessons-3.js', 'js/data/lessons-4.js', 'js/data/lessons-5.js', 'js/data/lessons-6.js', 'js/data/lesson-extra-1.js', 'js/data/lesson-extra-2.js', 'js/data/word-pairs-1.js', 'js/data/word-pairs-2.js', 'js/data/numbers.js', 'js/data/picture-bodymap.js', 'js/data/picture-sets-body.js', 'js/data/picture-sets-home.js', 'js/data/picture-sets-town.js', 'js/data/picture-sets-animals.js', 'js/data/picture-sets-machines.js', 'js/data/picture-sets-food.js', 'js/data/picture-sets-clothes.js', 'js/data/picture-sets-nature.js', 'js/data/picture-sets-daily.js', 'js/data/reading.js', 'js/data/dialogues.js', 'js/data/psych-phrases.js', 'js/data/psych-cases.js', 'js/data/psych-flow.js', 'js/data/psych-deesc.js', 'js/data/psych-discharge.js', 'js/data/psych-discharge-cases.js', 'js/data/psych-admit-mse.js', 'js/data/psych-mse-cases.js', 'js/data/psych-mse-sheet.js', 'js/data/psych-sud.js', 'js/data/psych-withdrawal.js', 'js/data/psych-mood.js', 'js/data/psych-shea.js', 'js/data/psych-answers.js',
  'js/data/grammar-cloze-a1.js', 'js/data/grammar-cloze-a2.js', 'js/data/grammar-cloze-b1.js', 'js/data/grammar-cloze-b2.js', 'js/data/grammar-transform-1.js', 'js/data/verbs.js',
  'js/data/reading-2.js', 'js/data/dialogues-2.js', 'js/data/examples-1.js', 'js/data/examples-2.js', 'js/data/examples-3.js', 'js/data/examples-4.js', 'js/data/sound-pairs.js',
  'js/data/psych-phrases-nurse.js', 'js/data/psych-eot.js', 'js/data/psych-answers-nurse.js', 'js/data/psych-answers-eot.js', 'js/data/psych-cases-karla.js', 'js/data/psych-cases-dona-carmen.js', 'js/data/psych-cases-nurse.js', 'js/data/psych-cases-ocd.js', 'js/data/psych-cases-ptsd.js', 'js/data/psych-cases-panic.js', 'js/data/psych-cases-camila.js', 'js/data/psych-interp-2.js', 'js/data/psych-discharge-cases-karla.js', 'js/data/psych-discharge-cases-dona-carmen.js', 'js/data/psych-discharge-cases-don-chuy.js', 'js/data/psych-discharge-cases-panic.js', 'js/data/psych-mse-cases-lupe.js', 'js/data/psych-mse-cases-ramiro.js', 'js/data/psych-mse-cases-yesenia.js', 'js/data/psych-mse-cases-ocd.js', 'js/data/psych-mse-cases-ptsd.js', 'js/data/psych-mse-cases-panic.js', 'js/data/psych-mse-cases-camila.js', 'js/data/psych-eot-cases-ocd.js', 'js/data/psych-eot-cases-ptsd.js', 'js/data/psych-eot-cases-panic.js', 'js/data/psych-eot-cases-camila.js', 'js/data/psych-nurse-tools.js', 'js/data/psych-nurse-tools-2.js',
  'js/data/meta.js', 'js/audio-key.js'];
if (fs.existsSync(path.join(root, 'js/lang.js'))) files.push('js/lang.js'); // ctx.LANG.testLine = settings voice test line
files.forEach(load);

const out = new Map();
const add = (t) => {
  if (!t || typeof t !== 'string') return;
  t = t.trim();
  if (!t || !/[a-zA-ZñÑáéíóúüÁÉÍÓÚÜ]/.test(t)) return;
  const key = ctx.AudioKey(t);
  if (!out.has(key)) out.set(key, t);
};

(ctx.DICT_RAW || []).join('\n').split('\n').forEach((line) => { line = line.trim(); if (line && !line.startsWith('#')) add(line.split('|')[0]); });
(ctx.DIALOGUES || []).forEach((d) => d.lines.forEach((l) => { add(l[1]); if (l[3]) add(l[3]); }));
(ctx.READING || []).forEach((r) => r.tl.forEach(add));
(ctx.LESSONS || []).forEach((l) => { const re = /<div class="ex"><b>([^<]+)<\/b>/g; let m; while ((m = re.exec(l.body))) add(m[1].replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&')); });
(ctx.PSYCH_SECTIONS || []).forEach((s) => s.phrases.forEach((p) => { add(p.f); add(p.c); (p.answers || []).forEach((a) => add(a[0])); }));
(ctx.PSYCH_CASES || []).forEach((c) => c.steps.forEach((s) => { add(s.line[0]); s.choices.forEach((x) => add(x.tl)); }));
(ctx.PSYCH_INTERP || []).forEach((x) => add(x[0]));
// Point board and listening drill replies (numbers 0-10 on the board are spoken by the device voice).
if (ctx.PSYCH_ANSWERS) { ctx.PSYCH_ANSWERS.common.forEach((g) => g.items.forEach((it) => add(it[0]))); Object.values(ctx.PSYCH_ANSWERS.sections).forEach((l) => l.forEach((it) => add(it[0]))); }
(ctx.PSYCH_EOT_CASES || []).forEach((c) => Object.values(c.fields).forEach((f) => Object.values(f.ans || {}).forEach((a) => add(a[0]))));   // 0.10.0 end-of-treatment review cases
(ctx.PSYCH_DISCHARGE_CASES || []).forEach((c) => Object.values(c.fields).forEach((f) => Object.values(f.ans || {}).forEach((a) => add(a[0]))));
add('Sí, doctor.'); // default discharge practice answer
(ctx.PSYCH_MSE_SHEET ? ctx.PSYCH_MSE_SHEET.sections : []).forEach((s) => (s.blocks || []).forEach((b) => b.items.forEach((it) => add(it.tl)))); // MSE interviewer sheet lines not already in PSYCH_SECTIONS
(ctx.PSYCH_MSE_CASES || []).forEach((c) => { if (c.cc) add(c.cc.ans[0]); Object.values(c.domains).forEach((d) => Object.values(d.ans || {}).forEach((a) => add(a[0]))); });
// 0.7.0 grammar drills: the completed fill-the-blank sentence (same App.fillBlank as js/cloze.js), the model answer of
// every transform item, and the verb trainer's infinitives and example sentences (conjugated forms use the device voice).
ctx.App = ctx.App || {};
load('js/cloze.js');
(ctx.GRAMMAR_CLOZE || []).forEach((x) => add(ctx.App.fillBlank(x.s, x.a)));
(ctx.GRAMMAR_TRANSFORM || []).forEach((x) => add(x.to));
(ctx.ES_VERBS || []).forEach((v) => { add(v.inf); (v.ex || []).forEach((e) => add(e[0])); });
// 0.8.0: lesson extras (the right line of each mistake and the extra examples; never the wrong line), word pairs (each
// word and, for collocations, the phrase), numbers (every row and clinic sentence), picture words (every word with its
// article, every listen-and-point sentence; never the regional note r) and the body map questions and pain words.
const arr = (x) => (Array.isArray(x) ? x : []);
Object.values(ctx.LESSON_EXTRA || {}).forEach((x) => { arr(x.mistakes).forEach((m) => add(m[1])); arr(x.more).forEach((m) => add(m[0])); });
arr(ctx.WORD_PAIRS).forEach((p) => { add(p.a); add(p.b); if (p.type === 'col') add(p.a + ' ' + p.b); });
arr((ctx.ES_NUMBERS || {}).groups).forEach((g) => arr(g.rows).forEach((r) => add(r[1])));
arr((ctx.ES_NUMBERS || {}).clinical).forEach((x) => add(x[0]));
arr(ctx.PICTURE_SETS).forEach((s) => { arr(s.parts).forEach((p) => p && add(p.w)); arr(s.say).forEach((x) => x && add(x.es)); });
if (ctx.PICTURE_BODYMAP) { arr(ctx.PICTURE_BODYMAP.ask).forEach((x) => add(x.es)); arr(ctx.PICTURE_BODYMAP.words).forEach((x) => add(x.es)); }
// 0.9.0: dictionary example sentences and both words of every sound pair (the new readings and dialogues are swept above).
arr(ctx.DICT_EX).forEach((x) => x && add(x[1]));
arr((ctx.SOUND_PAIRS || {}).items).forEach((x) => { add(x[1]); add(x[3]); });
add((ctx.LANG && ctx.LANG.testLine) || 'Buenos días. ¿Cómo se siente hoy?'); // settings voice test

// Substance use screener: lines are templates ({s} substance, {w} withdrawal symptoms, {u} unit) filled at run time
// for the chosen substance, so record every line as it is spoken for every substance, not only the first substance.
const SUD = ctx.PSYCH_SUD;
if (SUD) SUD.substances.forEach((sub) => {
  const say = (p) => { if (p && p.tl && !p.tl.startsWith('(')) add(SUD.fill(p.tl, sub)); };
  [].concat(SUD.open, SUD.criteriaFor(sub), SUD.remission, sub.ask || [], sub.psychoed || [],
    SUD.mi.flatMap((s) => s.lines), SUD.nurse.steps.flatMap((s) => s.lines)).forEach(say);
  Object.values(SUD.screens).forEach((sc) => sc.items.forEach(say));
});

// Safety net for newer modules: sweep every psychiatry data export for Spanish fields (tl, f, c) so a screen
// added later is recorded even if nobody adds it above. Template lines ({…}) are handled per module.
const TL_KEYS = new Set(['tl', 'f', 'c']);
const sweep = (o, seen) => {
  if (!o || typeof o !== 'object' || seen.has(o)) return;
  seen.add(o);
  if (Array.isArray(o)) { o.forEach((x) => sweep(x, seen)); return; }
  Object.entries(o).forEach(([k, v]) => {
    if (typeof v === 'string') { if (TL_KEYS.has(k) && !v.startsWith('(') && !/[{}<>]/.test(v)) add(v); }
    else sweep(v, seen);
  });
};
const seenObj = new Set();
Object.keys(ctx).filter((k) => /^(PSYCH_|SHEA_)/.test(k)).forEach((k) => sweep(ctx[k], seenObj));
// Lines other apps play from this audio pack (one per line, # for comments). See tools/import-msetrainer.js.
const extra = path.join(__dirname, 'extra-texts');
if (fs.existsSync(extra)) fs.readdirSync(extra).filter((f) => f.endsWith('.txt')).forEach((f) => fs.readFileSync(path.join(extra, f), 'utf8').split('\n').forEach((l) => { if (!l.startsWith('#')) add(l); }));

const list = [...out.entries()].map(([key, text]) => ({ key, text })).sort((a, b) => a.key.localeCompare(b.key));
fs.writeFileSync(path.join(__dirname, 'texts.json'), JSON.stringify(list, null, 0));
console.log('Collected', list.length, 'texts');
