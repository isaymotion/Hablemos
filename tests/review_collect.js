#!/usr/bin/env node
/* Hablemos native-speaker review: collect every Spanish draft into JSON rows.
   Usage: node tests/review_collect.js <app dir> > rows.json
   Then: python3 tests/review_build.py rows.json  (writes hablemos-review-2026-11.xlsx)
   Output: { "Phrases", "Replies", "Tools", "Strings", "Cases", "Interp", "Discharge cases", "MSE cases", "Lessons",
   "Readings", "Dialogues", "Dictionary" }, one array of row objects per sheet, keys = column headers.
   The Where column is the key used to apply a fix back into the data files:
     p:<sectionId>:<index>  -> phrase f/c in js/data/psych-phrases.js (or the module that pushed the section)
     a:common:<groupId>:<i> / a:<sectionId>:<i> -> js/data/psych-answers.js
     pa:<sectionId>:<index>:<i> -> inline `answers` on that phrase
     mood.* sud.* wd.* deesc.* discharge.* -> that module file (readable path into the object)
     c:<caseId>:<step>:line / c:<caseId>:<step>:<choice> -> PSYCH_CASES in js/data/psych-cases.js (0-based step and choice)
     i:<index> -> PSYCH_INTERP in js/data/psych-cases.js
     dc:<caseId>:<fieldId>:<qIdx> (ans) / dc:<caseId>:<fieldId>:quote -> js/data/psych-discharge-cases.js
     mc:<caseId>:cc / mc:<caseId>:cc:opt<j> / mc:<caseId>:<domainId>:<qIdx> / mc:<caseId>:<domainId>:ev:<j> / ...:quote -> js/data/psych-mse-cases.js
     l:<lessonId>:ex:<i> (i-th <div class="ex"> in body) / l:<lessonId>:quiz:<i> -> js/data/lessons.js; placement:<i> -> PLACEMENT in js/data/meta.js
     r:<readingId>:title / r:<readingId>:p<i> / r:<readingId>:gloss:<i> / r:<readingId>:q:<i> -> js/data/reading.js
     d:<dialogueId>:<i> -> line i of that dialogue in js/data/dialogues.js (Tú variant = 4th element)
     dict:<file>:<headword> -> that line in js/data/<file>.js (headword + English identify the line; multi-sense words repeat the headword). */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.resolve(process.argv[2] || '.');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const ctx = { console, TextEncoder, Buffer, navigator: {}, location: { hash: '' }, document: null };
ctx.window = ctx; vm.createContext(ctx);
const srcs = [...html.matchAll(/<script src="((?:js\/data|data|js\/lang|js\/audio-key)[^"]+)"/g)].map((m) => m[1]);
for (const f of srcs) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });

const S = ctx.PSYCH_SECTIONS || [], A = ctx.PSYCH_ANSWERS || { common: [], sections: {} };
const out = { Phrases: [], Replies: [], Tools: [], Strings: [] };
const seenEs = new Set(); // every Spanish string already on the Phrases sheet (for Tools dedup)

/* Phrases */
S.forEach((s) => s.phrases.forEach((p, i) => {
  out.Phrases.push({ Where: 'p:' + s.id + ':' + i, Section: s.title, English: p.en || '', Usted: p.f || '', 'Tú': p.c || '', Note: p.n || '', Regional: p.r || '', Fix: '', Comment: '' });
  seenEs.add(p.f); seenEs.add(p.c);
  (p.answers || []).forEach((a, j) => out.Replies.push({ Where: 'pa:' + s.id + ':' + i + ':' + j, 'Group/Section': s.title + ' (inline, phrase ' + i + ')', Spanish: a[0] || '', English: a[1] || '', Note: a[2] || '', Fix: '', Comment: '' }));
}));

/* Replies */
(A.common || []).forEach((g) => g.items.forEach((a, i) => out.Replies.push({ Where: 'a:common:' + g.id + ':' + i, 'Group/Section': 'General: ' + g.title, Spanish: a[0] || '', English: a[1] || '', Note: a[2] || '', Fix: '', Comment: '' })));
Object.entries(A.sections || {}).forEach(([sid, list]) => { const s = S.find((x) => x.id === sid); list.forEach((a, i) => out.Replies.push({ Where: 'a:' + sid + ':' + i, 'Group/Section': s ? s.title : sid, Spanish: a[0] || '', English: a[1] || '', Note: a[2] || '', Fix: '', Comment: '' })); });

/* Tools: Spanish that lives only in the tool modules */
const toolSeen = new Set();
const tool = (where, es, en, note) => {
  if (typeof es !== 'string' || !/[a-záéíóúñ]/i.test(es) || seenEs.has(es) || toolSeen.has(es)) return;
  toolSeen.add(es);
  if (/\{(s|sa|w|u)\}/.test(es)) note = (note ? note + '; ' : '') + 'template: {s} {sa} {w} {u} are filled per substance (the filled alcohol version is on the Phrases sheet)';
  out.Tools.push({ Where: where, Spanish: es, English: en || '', Note: note || '', Fix: '', Comment: '' });
};
const line = (where, o) => { if (!o) return; const n = typeof o.n === 'string' ? o.n : ''; tool(where + '.tl', o.tl, o.en, n); if (o.c) tool(where + '.c', o.c, o.en, 'tú form' + (n ? '; ' + n : '')); };
const opts = (where, list) => (list || []).forEach((o, i) => tool(where + '[' + i + ']', Array.isArray(o) ? o[0] : o, '', 'option label'));

const M = ctx.PSYCH_MOOD;
if (M) {
  line('mood.phq9.stem', M.phq9.stem); opts('mood.phq9.opts', M.phq9.opts);
  M.phq9.items.forEach((it, i) => line('mood.phq9.items[' + i + ']', it));
  line('mood.phq9.impairment', M.phq9.impairment); opts('mood.phq9.impairment.opts', M.phq9.impairment.opts);
  line('mood.mdq.stem', M.mdq.stem); M.mdq.items.forEach((it, i) => line('mood.mdq.items[' + i + ']', it));
  line('mood.mdq.same', M.mdq.same); line('mood.mdq.problem', M.mdq.problem); opts('mood.mdq.problem.opts', M.mdq.problem.opts);
  [].concat(M.mde, M.manic, M.manicGate, M.extra.mde, M.extra.manic).forEach((c, i) => { const q = c.q || c; if (q && q.tl) line('mood.criteria[' + i + ']', q); });
}
const SUD = ctx.PSYCH_SUD;
if (SUD) {
  SUD.substances.forEach((sub) => {
    tool('sud.' + sub.id + '.w', sub.w, sub.wen, 'withdrawal symptoms, fills {w}');
    tool('sud.' + sub.id + '.s', sub.s, sub.en, 'bare noun, fills {s}'); tool('sud.' + sub.id + '.sa', sub.sa, sub.en, 'noun with article, fills {sa}');
    tool('sud.' + sub.id + '.unit', sub.unit, sub.unitEn, 'unit, fills {u}');
    (sub.ask || []).forEach((p, i) => line('sud.' + sub.id + '.ask[' + i + ']', p));
    (sub.psychoed || []).forEach((p, i) => line('sud.' + sub.id + '.psychoed[' + i + ']', p));
  });
  Object.entries(SUD.screens || {}).forEach(([k, sc]) => sc.items.forEach((it, i) => { line('sud.screens.' + k + '.items[' + i + ']', it); opts('sud.screens.' + k + '.items[' + i + '].opts', it.opts); }));
  [].concat(SUD.open || [], SUD.criteria || [], SUD.gambling || [], SUD.remission || []).forEach((p, i) => line('sud.templates[' + i + ']', p));
  (SUD.mi || []).forEach((m, i) => (m.lines || []).forEach((p, j) => line('sud.mi[' + i + '].lines[' + j + ']', p)));
  ((SUD.nurse || {}).steps || []).forEach((m, i) => (m.lines || []).forEach((p, j) => line('sud.nurse.steps[' + i + '].lines[' + j + ']', p)));
}
const WD = ctx.PSYCH_WD;
if (WD) {
  ['CIWA', 'COWS'].forEach((k) => (WD[k].items || []).forEach((it) => line('wd.' + k + '.' + it.k, it)));
  line('wd.PAWSS.threshold', WD.PAWSS.threshold); WD.PAWSS.items.forEach((it, i) => line('wd.PAWSS.items[' + i + ']', it));
  (WD.CASES || []).forEach((c, i) => tool('wd.CASES[' + i + '].tl', c.tl, '', 'quote in case "' + c.id + '"'));
  ['ALC_ASK', 'ALC_EXPLAIN', 'CAN_ASK', 'CAN_CRIT', 'CAN_CD', 'CHS_ASK', 'CAN_EXPLAIN', 'OPI_ASK', 'OPI_EXPLAIN', 'AGIT_LINES', 'SPECIAL_ASK'].forEach((k) => (WD[k] || []).forEach((p, i) => line('wd.' + k + '[' + i + ']', p)));
  ((WD.NURSE || {}).steps || []).forEach((st, i) => (st.lines || []).forEach((p, j) => { if (p && typeof p === 'object') line('wd.NURSE.steps[' + i + '].lines[' + j + ']', p); }));
}
const DE = ctx.PSYCH_DEESC;
if (DE) {
  DE.behaviors.forEach((b, i) => { tool('deesc.behaviors[' + i + '].tl', b.tl, b.en, 'behavior label'); tool('deesc.behaviors[' + i + '].say', b.say, '', 'how the patient/staff describe it'); });
  if (typeof DE.escLine === 'string' && /[áéíóúñ¿¡]/.test(DE.escLine)) tool('deesc.escLine', DE.escLine, '', '');
}
const DI = ctx.PSYCH_DISCHARGE;
if (DI) {
  Object.entries(DI.answers || {}).forEach(([k, v]) => [].concat(v).forEach((a, i) => tool('discharge.answers.' + k + '[' + i + ']', Array.isArray(a) ? a[0] : a, Array.isArray(a) ? a[1] : '', '')));
  DI.fields.forEach((f) => f.picks.forEach((p, i) => { if (/[áéíóúñ¿¡]|\b(el|la|los|las|de|del|sin|con|no|ni)\b/.test(p) && !/\b(no|with|or)\b/i.test(p)) tool('discharge.' + f.id + '.picks[' + i + ']', p, '', 'pick label'); }));
}

/* Strings */
const ST = ctx.STRINGS || {};
if (ST.es) Object.keys(ST.es).forEach((k) => out.Strings.push({ Key: k, English: (ST.en || {})[k] || '', 'Spanish draft': ST.es[k], Fix: '', Comment: '' }));

/* Pass 5: case simulations, interpretation drill, discharge and admission MSE practice cases */
out.Cases = []; out.Interp = []; out['Discharge cases'] = []; out['MSE cases'] = [];
const esy = (s) => typeof s === 'string' && /[a-záéíóúñ¿¡]/i.test(s);
(ctx.PSYCH_CASES || []).forEach((c) => c.steps.forEach((st, i) => {
  out.Cases.push({ Where: 'c:' + c.id + ':' + i + ':line', Case: c.title, Speaker: st.who || '', Spanish: st.line[0] || '', English: st.line[1] || '', Note: '', Fix: '', Comment: '' });
  (st.choices || []).forEach((ch, j) => out.Cases.push({ Where: 'c:' + c.id + ':' + i + ':' + j, Case: c.title, Speaker: 'You (clinician)', Spanish: ch.tl || '', English: ch.en || '', Note: 'choice scored ' + ch.score + (ch.score === 2 ? ' (best)' : '') + (ch.fb ? '. ' + ch.fb : ''), Fix: '', Comment: '' }));
}));
(ctx.PSYCH_INTERP || []).forEach((it, i) => out.Interp.push({ Where: 'i:' + i, Spanish: it[0] || '', English: it[1] || '', Note: it[2] || '', Fix: '', Comment: '' }));
const DI_FIELDS = ((ctx.PSYCH_DISCHARGE || {}).fields || []);
(ctx.PSYCH_DISCHARGE_CASES || []).forEach((c) => Object.entries(c.fields || {}).forEach(([fid, f]) => {
  const field = DI_FIELDS.find((x) => x.id === fid);
  Object.entries(f.ans || {}).forEach(([q, a]) => {
    const ask = field && field.ask[+q];
    out['Discharge cases'].push({ Where: 'dc:' + c.id + ':' + fid + ':' + q, Case: c.title, Field: field ? field.label : fid, Speaker: a[2] || 'Patient', 'Asked (English)': ask ? ask.en : '', Spanish: a[0] || '', English: a[1] || '', Fix: '', Comment: '' });
  });
  if (esy(f.quote)) out['Discharge cases'].push({ Where: 'dc:' + c.id + ':' + fid + ':quote', Case: c.title, Field: field ? field.label : fid, Speaker: 'Chart quote', 'Asked (English)': '', Spanish: f.quote, English: '', Fix: '', Comment: '' });
}));
const AD_DOMS = ((ctx.PSYCH_ADMIT_MSE || {}).domains || []);
const refEn = (ref) => { if (typeof ref !== 'string') return ''; const [sid, idx] = ref.split(':'); const s = S.find((x) => x.id === sid); const p = s && s.phrases[+idx]; return p ? p.en : ref; };
(ctx.PSYCH_MSE_CASES || []).forEach((c) => {
  const M = out['MSE cases'];
  if (c.cc) {
    M.push({ Where: 'mc:' + c.id + ':cc', Case: c.title, Domain: 'Chief complaint', Speaker: (c.cc.ans || [])[2] || 'Patient', 'Asked (English)': refEn(c.cc.ask), Spanish: (c.cc.ans || [])[0] || '', English: (c.cc.ans || [])[1] || '', Note: '', Fix: '', Comment: '' });
    (c.cc.opts || []).forEach((o, j) => { if (esy(o[0])) M.push({ Where: 'mc:' + c.id + ':cc:opt' + j, Case: c.title, Domain: 'Chief complaint', Speaker: 'Documentation option', 'Asked (English)': '', Spanish: o[0], English: '', Note: (o[1] ? 'correct option. ' : 'wrong option. ') + (o[2] || ''), Fix: '', Comment: '' }); });
  }
  Object.entries(c.domains || {}).forEach(([did, d]) => {
    const dom = AD_DOMS.find((x) => x.id === did); const label = dom ? dom.label : did;
    Object.entries(d.ans || {}).forEach(([q, a]) => M.push({ Where: 'mc:' + c.id + ':' + did + ':' + q, Case: c.title, Domain: label, Speaker: a[2] || 'Patient', 'Asked (English)': dom ? refEn(dom.ask[+q]) : '', Spanish: a[0] || '', English: a[1] || '', Note: '', Fix: '', Comment: '' }));
    if (d.ev) (d.ev.opts || []).forEach((o, j) => { if (esy(o[0])) M.push({ Where: 'mc:' + c.id + ':' + did + ':ev:' + j, Case: c.title, Domain: label, Speaker: 'Evidence option', 'Asked (English)': 'Which line shows: ' + d.ev.find, Spanish: o[0], English: '', Note: o[1] ? 'correct option' : 'wrong option', Fix: '', Comment: '' }); });
    if (esy(d.quote)) M.push({ Where: 'mc:' + c.id + ':' + did + ':quote', Case: c.title, Domain: label, Speaker: 'Chart quote', 'Asked (English)': '', Spanish: d.quote, English: '', Note: '', Fix: '', Comment: '' });
  });
});

/* Pass 6: lessons (example lines + quiz items), placement, readings, dialogues, dictionary */
out.Lessons = []; out.Readings = []; out.Dialogues = []; out.Dictionary = [];
const unesc = (s) => String(s || '').replace(/<[^>]+>/g, '').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').trim();
(ctx.LESSONS || []).forEach((l) => {
  const re = /<div class="ex">([\s\S]*?)<\/div>/g; let m, i = 0;
  while ((m = re.exec(l.body))) {
    const b = /<b>([\s\S]*?)<\/b>/.exec(m[1]); const span = /<span>([\s\S]*?)<\/span>/.exec(m[1]);
    out.Lessons.push({ Where: 'l:' + l.id + ':ex:' + i, Lesson: l.title, Kind: 'example', Spanish: unesc(b ? b[1] : m[1]), English: unesc(span ? span[1] : ''), Options: '', Fix: '', Comment: '' });
    i++;
  }
  (l.quiz || []).forEach((q, k) => out.Lessons.push({ Where: 'l:' + l.id + ':quiz:' + k, Lesson: l.title, Kind: 'quiz', Spanish: unesc(q[0]), English: 'Answer: ' + unesc((q[1] || [])[q[2]]) + (q[3] ? '. ' + unesc(q[3]) : ''), Options: (q[1] || []).map(unesc).join(' | '), Fix: '', Comment: '' }));
});
(ctx.PLACEMENT || []).forEach((q, i) => out.Lessons.push({ Where: 'placement:' + i, Lesson: 'Placement test (' + q[0] + ')', Kind: 'placement', Spanish: unesc(q[1]), English: 'Answer: ' + unesc((q[2] || [])[q[3]]), Options: (q[2] || []).map(unesc).join(' | '), Fix: '', Comment: '' }));
(ctx.READING || []).forEach((r) => {
  const R = out.Readings;
  R.push({ Where: 'r:' + r.id + ':title', Reading: r.titleEn || r.id, Kind: 'title', Spanish: r.title || '', English: r.titleEn || '', Note: '', Fix: '', Comment: '' });
  (r.tl || []).forEach((p, i) => R.push({ Where: 'r:' + r.id + ':p' + i, Reading: r.titleEn || r.id, Kind: 'paragraph ' + (i + 1), Spanish: p, English: (r.en || [])[i] || '', Note: '', Fix: '', Comment: '' }));
  (r.gloss || []).forEach((g, i) => R.push({ Where: 'r:' + r.id + ':gloss:' + i, Reading: r.titleEn || r.id, Kind: 'gloss', Spanish: g[0] || '', English: g[1] || '', Note: '', Fix: '', Comment: '' }));
  (r.q || []).forEach((q, i) => R.push({ Where: 'r:' + r.id + ':q:' + i, Reading: r.titleEn || r.id, Kind: 'question', Spanish: q[0] || '', English: 'Answer: ' + ((q[1] || [])[q[2]] || ''), Note: 'options: ' + (q[1] || []).join(' | ') + (q[3] ? '. ' + q[3] : ''), Fix: '', Comment: '' }));
});
(ctx.DIALOGUES || []).forEach((d) => (d.lines || []).forEach((ln, i) => out.Dialogues.push({ Where: 'd:' + d.id + ':' + i, Dialogue: d.title, Speaker: (d.roles || [])[ln[0]] || String(ln[0]), Spanish: ln[1] || '', English: ln[2] || '', 'Tú variant': ln[3] || '', Fix: '', Comment: '' })));
const dictFiles = [...html.matchAll(/<script src="js\/data\/(dict-[^"]+)\.js"/g)].map((m) => m[1]);
(ctx.DICT_RAW || []).forEach((block, fi) => {
  const file = dictFiles[fi] || ('dict-' + fi); let cat = '';
  String(block).split('\n').forEach((line) => {
    line = line.trim(); if (!line) return;
    if (line.startsWith('#')) { cat = line.replace(/^#\s*/, ''); return; }
    const f = line.split('|').map((x) => x.trim());
    out.Dictionary.push({ Where: 'dict:' + file + ':' + f[0], Spanish: f[0] || '', English: f[1] || '', POS: f[2] || '', Category: f[3] || cat, Root: f[4] || '', Note: f[5] || '', Fix: '', Comment: '' });
  });
});

process.stdout.write(JSON.stringify(out, null, 1));
process.stderr.write(Object.entries(out).map(([k, v]) => k + ' ' + v.length).join(', ') + '\n');
