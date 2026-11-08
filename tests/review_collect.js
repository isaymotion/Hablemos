#!/usr/bin/env node
/* Hablemos native-speaker review: collect every Spanish draft into JSON rows.
   Usage: node tests/review_collect.js <app dir> > rows.json
   Then: python3 tests/review_build.py rows.json  (writes hablemos-review-2026-11.xlsx)
   Output: { "Phrases": [...], "Replies": [...], "Tools": [...], "Strings": [...] }, one object per row,
   keys = column headers. The Where column is the key used to apply a fix back into the data files:
     p:<sectionId>:<index>  -> phrase f/c in js/data/psych-phrases.js (or the module that pushed the section)
     a:common:<groupId>:<i> / a:<sectionId>:<i> -> js/data/psych-answers.js
     pa:<sectionId>:<index>:<i> -> inline `answers` on that phrase
     mood.* sud.* wd.* deesc.* discharge.* -> that module file (readable path into the object). */
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

process.stdout.write(JSON.stringify(out, null, 1));
process.stderr.write(Object.entries(out).map(([k, v]) => k + ' ' + v.length).join(', ') + '\n');
