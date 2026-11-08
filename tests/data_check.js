#!/usr/bin/env node
/* Hablemos data check. Usage: node tests/data_check.js <app dir>. Prints counts and DATA OK, or the problems and exit 1. */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.resolve(process.argv[2] || '.');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const ctx = { console, TextEncoder, Buffer, navigator: {}, location: { hash: '' }, document: null };
ctx.window = ctx; vm.createContext(ctx);
const srcs = [...html.matchAll(/<script src="((?:js\/data|data|js\/lang|js\/audio-key)[^"]+)"/g)].map((m) => m[1]);
for (const f of srcs) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
const errs = [], warns = [];
const S = ctx.PSYCH_SECTIONS || [], A = ctx.PSYCH_ANSWERS || { common: [], sections: {} };
const ids = new Set(S.map((s) => s.id));
S.forEach((s) => {
  if (!s.id || !s.group || !s.title) errs.push('section without id/group/title: ' + JSON.stringify(s).slice(0, 60));
  if (!s.draft && !(ctx.SHEA_TRAINER && ctx.SHEA_TRAINER.reviewed)) warns.push('section ' + s.id + ' is not marked draft');
  s.phrases.forEach((p, i) => {
    if (!p.en || !p.f || !p.c) errs.push(s.id + ':' + i + ' needs en, f and c');
    if (/\b(po|kayo|ninyo|opo)\b/i.test(p.f + ' ' + p.c)) errs.push(s.id + ':' + i + ' contains Tagalog');
    if (p.answers && !p.answers.every((a) => Array.isArray(a) && a.length >= 2)) errs.push(s.id + ':' + i + ' bad answers');
  });
});
const ref = (r, where) => { const [sid, i] = r.split(':'); const s = S.find((x) => x.id === sid); if (s && !s.phrases[+i]) errs.push(where + ': bad index ' + r); return !!s; };
(ctx.PSYCH_FLOW || []).concat(ctx.PSYCH_FLOW_EXTRA || []).forEach((st) => {
  st.sections.forEach((sid) => { if (!ids.has(sid)) errs.push('flow ' + st.id + ': missing section ' + sid); });
  st.key.forEach((r) => { if (!ref(r, 'flow ' + st.id)) errs.push('flow ' + st.id + ': key refers to missing section ' + r); });
});
(ctx.PSYCH_MSE || []).forEach((d) => d.ask.concat(d.terms).forEach((r) => ref(r, 'mse ' + d.domain)));
Object.keys(A.sections).forEach((sid) => { if (!ids.has(sid)) errs.push('answers for unknown section ' + sid); });
const noAns = S.filter((s) => !(A.sections[s.id] || []).length && !s.phrases.some((p) => p.answers)).map((s) => s.id);
if (noAns.length) warns.push('sections with only general replies on the point board (' + noAns.length + '): ' + noAns.join(', '));
const items = A.common.reduce((n, g) => n + g.items.length, 0) + Object.values(A.sections).reduce((n, l) => n + l.length, 0);
Object.keys(ctx.SHEA_LINKS || {}).forEach((k) => { if (!ids.has(k) && !/^(wd-|mse-|sud-)/.test(k)) warns.push('SHEA_LINKS for section not yet written: ' + k); });
/* Pass 4 clinical tools: shapes the views read, refs resolve, templates fill, no Tagalog anywhere in spoken fields. */
const tl = (s, where) => { if (typeof s === 'string' && /\b(po|kayo|ninyo|opo|nganga|shabu)\b/i.test(s)) errs.push(where + ' contains Tagalog: ' + s.slice(0, 50)); };
const sweep = (o, where, seen) => { if (!o || typeof o !== 'object' || seen.has(o)) return; seen.add(o); if (Array.isArray(o)) return o.forEach((x, i) => sweep(x, where + '[' + i + ']', seen));
  Object.entries(o).forEach(([k, v]) => { if (['tl', 'f', 'c', 'say'].includes(k)) tl(v, where + '.' + k); else sweep(v, where + '.' + k, seen); }); };
const seenAll = new Set(); Object.keys(ctx).filter((k) => /^PSYCH_/.test(k)).forEach((k) => sweep(ctx[k], k, seenAll));
const M = ctx.PSYCH_MOOD || {}, mood = (M.mde || []).length;
if (mood) {
  if (M.mde.length !== 9 || M.manic.length !== 7 || M.manicGate.length !== 2) errs.push('mood: expected 9 MDE, 7 manic, 2 gate criteria');
  M.mde.concat(M.manic, M.manicGate, M.extra.mde, M.extra.manic).forEach((c, i) => { const q = c.q || c; if (!q.tl || !q.en) errs.push('mood: criterion ' + i + ' has no Spanish line (unresolved ref?)'); });
  if (M.phq9.items.length !== 9 || M.phq9.opts.length !== 4 || M.mdq.items.length !== 13) errs.push('mood: PHQ-9 needs 9 items and 4 options, MDQ 13 items');
  if (!ids.has('mood-screens')) errs.push('mood: section mood-screens not published');
}
const SUD = ctx.PSYCH_SUD || {}, subs = (SUD.substances || []).length;
if (subs) {
  if (SUD.criteria.length !== 11 || SUD.gambling.length !== 9) errs.push('sud: need 11 criteria and 9 gambling criteria');
  if (SUD.substances.some((x) => /betel|nganga|shabu/i.test(x.id + x.label))) errs.push('sud: betel/shabu left in');
  SUD.substances.forEach((sub) => { if (!sub.s || !sub.sa || !sub.unit || !sub.codes || !sub.ask.length || !sub.psychoed.length) errs.push('sud: substance ' + sub.id + ' incomplete');
    [].concat(SUD.open, SUD.criteriaFor(sub), SUD.remission, sub.ask, sub.psychoed, SUD.mi.flatMap((m) => m.lines), SUD.nurse.steps.flatMap((m) => m.lines)).forEach((p) => { const t = SUD.fill(p.tl, sub); if (/[{}]/.test(t)) errs.push('sud: unfilled placeholder for ' + sub.id + ': ' + t.slice(0, 60)); }); });
  ['sud-screen', 'sud-gambling', 'sud-screens', 'mi'].forEach((k) => { if (!ids.has(k)) errs.push('sud: section ' + k + ' not published'); });
  if (!SUD.screens.alcohol || SUD.screens.alcohol.items.length !== 3 || !SUD.screens.tobacco || SUD.screens.tobacco.items.length !== 6) errs.push('sud: AUDIT-C needs 3 items, Fagerström 6');
}
const WD = ctx.PSYCH_WD || {}, wd = (WD.ALC_ASK || []).length;
if (wd) {
  if (WD.CIWA.items.length !== 10 || WD.CAN_CRIT.length !== 7 || WD.PAWSS.items.length !== 9) errs.push('wd: CIWA-Ar 10 items, cannabis 7 criteria, PAWSS 9 items + threshold');
  if (!WD.COWS || WD.COWS.items.length !== 11) errs.push('wd: COWS needs 11 items');
  if (!(WD.OPI_ASK || []).length || !(WD.OPI_EXPLAIN || []).length || !WD.OPI_REF) errs.push('wd: opioid set (OPI_ASK, OPI_EXPLAIN, OPI_REF) missing');
  if (!WD.QUICK.opioid || !WD.QUICK.opioid.length) errs.push('wd: QUICK.opioid missing');
  ['wd-alcohol', 'wd-cannabis', 'wd-opioid', 'wd-agitation'].forEach((k) => { if (!ids.has(k)) errs.push('wd: section ' + k + ' not published'); });
  JSON.stringify(WD).replace(/\\u[0-9a-f]{4}/g, '').match(/MMH-|NCMH|1553|Mariveles|MMWGH/g) && errs.push('wd: Philippine references left in');
}
const DE = ctx.PSYCH_DEESC || {}, de = (DE.steps || []).length;
if (de) {
  if (DE.steps.length !== 12 || DE.behaviors.length !== 9 || DE.after.length !== 5 || DE.escalation.length !== 3 || DE.outcomes.length !== 3) errs.push('deesc: need 12 steps, 9 behaviors, 5 phases, 3 tiers, 3 outcomes');
  if (!DE.escLine || !(DE.signatures || []).length || (DE.debrief || []).length < 2) errs.push('deesc: escLine, signatures and debrief refs are required by the views');
  DE.steps.forEach((st, i) => { if (!st.say.length) errs.push('deesc: step ' + (i + 1) + ' has no phrase'); st.say.forEach((r) => ref(r, 'deesc step ' + (i + 1))); });
  DE.after.forEach((a) => a.say.forEach((r) => ref(r, 'deesc after ' + a.title))); DE.debrief.forEach((r) => ref(r, 'deesc debrief'));
  const dz = S.find((x) => x.id === 'deescalation'); if (dz && dz.phrases[0].en !== 'I\'m here to help you.') errs.push('deesc: original deescalation phrases were moved');
  if (/NAOD|NOD|POD|RA 11036/.test(JSON.stringify(DE))) errs.push('deesc: Philippine roles left in');
}
const DI = ctx.PSYCH_DISCHARGE || {}, di = (DI.fields || []).length;
if (di) {
  if (!ids.has('discharge')) errs.push('discharge: section not published');
  DI.fields.forEach((f) => { if (f.refs.length !== f.ask.length) errs.push('discharge: field ' + f.id + ' refs/ask mismatch'); f.refs.forEach((r) => ref(r, 'discharge ' + f.id)); if (!f.picks.every((x) => typeof x === 'string')) errs.push('discharge: picks must be strings in ' + f.id); });
  if (!(ctx.PSYCH_FLOW_EXTRA || []).some((x) => x.id === 'discharge')) errs.push('discharge: PSYCH_FLOW_EXTRA entry missing');
  if (/1553|NCMH|MMH-/.test(JSON.stringify(DI))) errs.push('discharge: Philippine references left in');
}
/* Pass 5 practice cases: simulations, interpretation drill, discharge and admission MSE cases (grader = App.dischargeGrade, ported). */
const grade = (cf, picks) => { const need = cf.need || [], ok = cf.ok || [], hit = [], miss = [], wrong = [], covered = new Set();
  need.forEach((n) => { const alts = Array.isArray(n) ? n : [n]; const found = alts.filter((a) => picks.has(a)); found.forEach((a) => covered.add(a)); if (found.length) hit.push(found[0]); else miss.push(alts[0]); });
  picks.forEach((p) => { if (!covered.has(p) && !ok.includes(p)) wrong.push(p); }); return { score: !miss.length && !wrong.length ? 2 : hit.length ? 1 : 0 }; };
const CASES = ctx.PSYCH_CASES || [], INTERP = ctx.PSYCH_INTERP || [];
CASES.forEach((c) => {
  if (!c.id || !c.title || !c.level || !c.setting || !c.summary || !c.summary.findings || !c.summary.mse) errs.push('case ' + c.id + ' missing id/title/level/setting/summary');
  if (!(c.steps || []).length) errs.push('case ' + c.id + ' has no steps');
  (c.steps || []).forEach((s, i) => {
    if (!s.who || !Array.isArray(s.line) || s.line.length < 2) errs.push('case ' + c.id + ' step ' + i + ' needs who + line [es, en]');
    if (!(s.choices || []).length || s.choices.filter((x) => x.score === 2).length !== 1) errs.push('case ' + c.id + ' step ' + i + ' needs exactly one score-2 choice');
    (s.choices || []).forEach((x, k) => { if (!x.tl || !x.en || !x.fb || ![0, 1, 2].includes(x.score)) errs.push('case ' + c.id + ' step ' + i + ' choice ' + k + ' incomplete'); });
  });
});
if (CASES.length && !CASES.some((c) => c.id === 'agitated')) errs.push('cases: id "agitated" is linked from the de-escalation and withdrawal views');
if (new Set(CASES.map((c) => c.id)).size !== CASES.length) errs.push('cases: duplicate ids');
INTERP.forEach((it, i) => { if (!Array.isArray(it) || it.length < 3 || !it[0] || !it[1] || !it[2]) errs.push('interp ' + i + ' needs [es, en, meaning]'); tl(it[0], 'interp ' + i); });
if (new Set(INTERP.map((x) => x[0])).size !== INTERP.length) errs.push('interp: duplicate Spanish lines');
const DC = ctx.PSYCH_DISCHARGE_CASES || [], MC = ctx.PSYCH_MSE_CASES || [];
const checkModel = (tag, cf, def) => {
  const picks = [].concat(...(cf.need || []).map((n) => (Array.isArray(n) ? n : [n])), cf.ok || [], Object.keys(cf.wrong || {}));
  picks.forEach((p) => { if (!def.picks.includes(p)) errs.push(tag + ' pick not on form: ' + p); });
  if (!(cf.need || []).length) errs.push(tag + ' no required picks');
  Object.keys(cf.ans || {}).forEach((k) => { if (!/^\d+$/.test(k) || +k >= def.ask.length) errs.push(tag + ' answer index ' + k); const a = cf.ans[k]; if (!Array.isArray(a) || !a[0] || !a[1]) errs.push(tag + ' answer ' + k + ' needs [es, en]'); else tl(a[0], tag + ' ans ' + k); });
  (cf.key || []).forEach((k) => { if (k >= def.ask.length || !(cf.ans || {})[k]) errs.push(tag + ' key question ' + k); });
  if (!cf.doc || !cf.why) errs.push(tag + ' missing doc/why');
  if (def.kind !== 'observe' && !Object.keys(cf.ans || {}).length) errs.push(tag + ' ask field without answers');
  if (cf.ev && (cf.ev.opts.filter((o) => o[1]).length !== 1 || !cf.ev.find || !cf.ev.why)) errs.push(tag + ' evidence needs find, why and exactly one correct option');
  const model = new Set((cf.need || []).map((n) => (Array.isArray(n) ? n[0] : n)));
  if (grade(cf, model).score !== 2) errs.push(tag + ' model does not grade 2');
};
DC.forEach((c) => {
  if (!c.id || !c.title || !c.level || !c.dx || !c.setting || !(c.chart || []).length) errs.push('dcase ' + c.id + ' missing id/title/level/dx/setting/chart');
  if (!c.decision || typeof c.decision.discharge !== 'boolean' || !c.decision.why) errs.push('dcase ' + c.id + ' missing decision');
  DI.fields.filter((f) => f.kind !== 'sign').forEach((f) => { if (!c.fields[f.id]) errs.push('dcase ' + c.id + ' missing field ' + f.id); });
  Object.entries(c.fields || {}).forEach(([id, cf]) => { const f = DI.fields.find((x) => x.id === id); if (!f) return errs.push('dcase ' + c.id + ' unknown field ' + id); checkModel('dcase ' + c.id + '.' + id, cf, f); });
});
const AM = ctx.PSYCH_ADMIT_MSE || { domains: [] };
MC.forEach((c) => {
  if (!c.id || !c.title || !c.level || !c.dx || !c.setting || !(c.chart || []).length) errs.push('mcase ' + c.id + ' missing id/title/level/dx/setting/chart');
  if (!c.cc || !ref(c.cc.ask, 'mcase ' + c.id + ' cc') || !Array.isArray(c.cc.ans) || c.cc.ans.length < 3 || (c.cc.opts || []).filter((o) => o[1]).length !== 1 || c.cc.opts.some((o) => !o[2])) errs.push('mcase ' + c.id + ' chief complaint needs ask ref, ans [es, en, who], opts with one correct and a why each');
  if (!DC.some((x) => x.id === c.id)) errs.push('mcase ' + c.id + ' has no matching discharge case');
  AM.domains.forEach((d) => { if (!c.domains[d.id]) errs.push('mcase ' + c.id + ' missing domain ' + d.id); });
  Object.entries(c.domains || {}).forEach(([id, cd]) => { const d = AM.domains.find((x) => x.id === id); if (!d) return errs.push('mcase ' + c.id + ' unknown domain ' + id); checkModel('mcase ' + c.id + '.' + id, cd, d); });
});
let audio = 0; try { const m = JSON.parse(fs.readFileSync(path.join(root, 'audio/manifest.json'), 'utf8')); audio = (m.keys || []).length; } catch (e) {}
const texts = (() => { try { return JSON.parse(fs.readFileSync(path.join(root, 'tools/texts.json'), 'utf8')).length; } catch (e) { return 0; } })();
if (texts && audio < texts) warns.push((texts - audio) + ' texts without audio until the audio job runs');
const vers = new Set([ctx.APP_META.version, (ctx.APP_CHANGELOG[0] || {}).version, (fs.readFileSync(path.join(root, 'sw.js'), 'utf8').match(/PREFIX \+ '(\d+\.\d+\.\d+)'/) || [])[1]]);
if (vers.size !== 1) errs.push('versions disagree: ' + [...vers].join(', '));
warns.forEach((w) => console.log('WARN ' + w));
errs.forEach((e) => console.log('ERROR ' + e));
console.log(JSON.stringify({ version: ctx.APP_META.version, sections: S.length, phrases: S.reduce((n, s) => n + s.phrases.length, 0), answers: items, flow: (ctx.PSYCH_FLOW || []).length, mse: (ctx.PSYCH_MSE || []).length, mood, substances: subs, wd, deesc: de, discharge: di, cases: CASES.length, interp: INTERP.length, dcases: DC.length, mcases: MC.length, texts, audio }));
console.log(errs.length ? 'DATA FAIL' : 'DATA OK');
process.exit(errs.length ? 1 : 0);
