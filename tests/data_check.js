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
let audio = 0; try { const m = JSON.parse(fs.readFileSync(path.join(root, 'audio/manifest.json'), 'utf8')); audio = (m.keys || []).length; } catch (e) {}
const texts = (() => { try { return JSON.parse(fs.readFileSync(path.join(root, 'tools/texts.json'), 'utf8')).length; } catch (e) { return 0; } })();
if (texts && audio < texts) warns.push((texts - audio) + ' texts without audio until the audio job runs');
const vers = new Set([ctx.APP_META.version, (ctx.APP_CHANGELOG[0] || {}).version, (fs.readFileSync(path.join(root, 'sw.js'), 'utf8').match(/PREFIX \+ '(\d+\.\d+\.\d+)'/) || [])[1]]);
if (vers.size !== 1) errs.push('versions disagree: ' + [...vers].join(', '));
warns.forEach((w) => console.log('WARN ' + w));
errs.forEach((e) => console.log('ERROR ' + e));
console.log(JSON.stringify({ version: ctx.APP_META.version, sections: S.length, phrases: S.reduce((n, s) => n + s.phrases.length, 0), answers: items, flow: (ctx.PSYCH_FLOW || []).length, mse: (ctx.PSYCH_MSE || []).length, texts, audio }));
console.log(errs.length ? 'DATA FAIL' : 'DATA OK');
process.exit(errs.length ? 1 : 0);
