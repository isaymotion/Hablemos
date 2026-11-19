#!/usr/bin/env node
/* Data check for js/data/listen-reply-*.js (Hablemos 0.11.0, #/reply, js/reply.js).
   Usage: node reply_check.js /home/claude/hablemos
   → REPLY OK <n> everyday=.. clinical=..  or the problems (exit 1). With no data file: REPLY OK 0 (exit 0). */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = process.argv[2] || '/home/claude/hablemos';
const dir = path.join(root, 'js/data');
const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => /^listen-reply-[\w-]+\.js$/.test(f)).sort() : [];
if (!files.length) { console.log('REPLY OK 0'); process.exit(0); }

const LVS = ['A1', 'A2', 'B1', 'B2'];
const JA = /[぀-ヿ㐀-鿿ｦ-ﾟ]/;
const errs = [];
const ctx = vm.createContext({}); ctx.window = ctx;
const from = {};
files.forEach((f) => {
  const before = (ctx.LISTEN_REPLY || []).length;
  try { vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), ctx, { filename: f }); } catch (e) { errs.push(f + ': does not load: ' + e.message); return; }
  const list = ctx.LISTEN_REPLY || [];
  if (list.length === before) errs.push(f + ': adds no items');
  for (let k = before; k < list.length; k++) from[k] = f;
});
const all = Array.isArray(ctx.LISTEN_REPLY) ? ctx.LISTEN_REPLY : [];
const isStr = (x) => typeof x === 'string' && x.trim() !== '';
const seen = new Set(), seenSay = new Set(), count = { everyday: 0, clinical: 0 };
all.forEach((x, k) => {
  const at = (from[k] || '?') + ' #' + k + (x && x.id ? ' ' + x.id : '');
  if (!x || typeof x !== 'object') return errs.push(at + ': not an object');
  if (!/^r-\d{3}$/.test(x.id || '')) errs.push(at + ': bad id');
  else { if (seen.has(x.id)) errs.push(at + ': duplicate id'); seen.add(x.id); }
  if (!LVS.includes(x.lv)) errs.push(at + ': lv must be A1..B2');
  if (typeof x.clin !== 'boolean') errs.push(at + ': clin must be true or false');
  else count[x.clin ? 'clinical' : 'everyday']++;
  ['who', 'say', 'en', 'why'].forEach((f) => { if (!isStr(x[f])) errs.push(at + ': missing ' + f); });
  if (isStr(x.say)) { const s = x.say.trim(); if (seenSay.has(s)) errs.push(at + ': duplicate say'); seenSay.add(s); }
  if (!Array.isArray(x.opts) || x.opts.length !== 4) errs.push(at + ': needs exactly 4 opts');
  else {
    x.opts.forEach((o, j) => {
      if (!o || !isStr(o.es)) errs.push(at + ': opt ' + j + ' lacks es');
      if (!o || !isStr(o.en)) errs.push(at + ': opt ' + j + ' lacks en');
      if (o && 'ja' in o) errs.push(at + ': opt ' + j + ' has a ja field');
    });
    const es = x.opts.map((o) => (o && o.es ? o.es.trim() : ''));
    if (new Set(es).size !== es.length) errs.push(at + ': duplicate options');
  }
  if (!Number.isInteger(x.a) || x.a < 0 || x.a >= (Array.isArray(x.opts) ? x.opts.length : 0)) errs.push(at + ': a out of range');
  const texts = [x.who, x.say, x.en, x.why].concat(Array.isArray(x.opts) ? x.opts.flatMap((o) => (o ? [o.es, o.en] : [])) : []);
  if (texts.some((t) => typeof t === 'string' && JA.test(t))) errs.push(at + ': Japanese characters');
});
if (errs.length) { errs.forEach((e) => console.log(e)); console.log(errs.length + ' problem(s) in ' + all.length + ' items'); process.exit(1); }
console.log('REPLY OK ' + all.length + ' everyday=' + count.everyday + ' clinical=' + count.clinical);
