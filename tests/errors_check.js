#!/usr/bin/env node
/* Data check for js/data/grammar-errors-*.js (Hablemos 0.11.0, #/errors, js/errors.js).
   Usage: node errors_check.js /home/claude/hablemos
   → ERRORS OK <n> A1=.. A2=.. B1=.. B2=..  or the problems (exit 1). With no data file: ERRORS OK 0 (exit 0). */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = process.argv[2] || '/home/claude/hablemos';
const dir = path.join(root, 'js/data');
const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => /^grammar-errors-[\w-]+\.js$/.test(f)).sort() : [];
if (!files.length) { console.log('ERRORS OK 0'); process.exit(0); }

const LVS = ['A1', 'A2', 'B1', 'B2'];
const TYPES = ['ser-estar', 'gender', 'agreement', 'article', 'verb-form', 'tense', 'mood', 'preposition', 'pronoun', 'word-choice', 'false-friend', 'accent'];
const JA = /[぀-ヿ㐀-鿿ｦ-ﾟ]/;
const errs = [];
const ctx = vm.createContext({}); ctx.window = ctx;
const from = {};
files.forEach((f) => {
  const before = (ctx.GRAMMAR_ERRORS || []).length;
  try { vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), ctx, { filename: f }); } catch (e) { errs.push(f + ': does not load: ' + e.message); return; }
  const list = ctx.GRAMMAR_ERRORS || [];
  if (list.length === before) errs.push(f + ': adds no items');
  for (let k = before; k < list.length; k++) from[k] = f;
});
const all = Array.isArray(ctx.GRAMMAR_ERRORS) ? ctx.GRAMMAR_ERRORS : [];
const isStr = (x) => typeof x === 'string' && x.trim() !== '';
const words = (s) => String(s).trim().split(/ +/);
const seen = new Set(), seenBad = new Set(), count = { A1: 0, A2: 0, B1: 0, B2: 0 };
all.forEach((x, k) => {
  const at = (from[k] || '?') + ' #' + k + (x && x.id ? ' ' + x.id : '');
  if (!x || typeof x !== 'object') return errs.push(at + ': not an object');
  if (!/^e-(a1|a2|b1|b2)-\d{3}$/.test(x.id || '')) errs.push(at + ': bad id');
  else {
    if (seen.has(x.id)) errs.push(at + ': duplicate id');
    seen.add(x.id);
    if (x.id.slice(2, 4).toUpperCase() !== x.lv) errs.push(at + ': id level does not match lv ' + x.lv);
  }
  if (!LVS.includes(x.lv)) errs.push(at + ': lv must be A1..B2');
  else count[x.lv]++;
  if (!TYPES.includes(x.type)) errs.push(at + ': unknown type ' + x.type);
  ['bad', 'fix', 'en', 'why'].forEach((f) => { if (!isStr(x[f])) errs.push(at + ': missing ' + f); });
  if (x.l != null && !isStr(x.l)) errs.push(at + ': l must be a lesson id string');
  ['bad', 'fix', 'en', 'why', 'l'].forEach((f) => { if (typeof x[f] === 'string' && JA.test(x[f])) errs.push(at + ': Japanese characters in ' + f); });
  if (!isStr(x.bad) || !isStr(x.fix)) return;
  if (/ {2,}/.test(x.bad.trim())) errs.push(at + ': double space in bad');
  const a = words(x.bad), b = words(x.fix);
  if (!Number.isInteger(x.i) || x.i < 0 || x.i >= a.length) errs.push(at + ': i out of range (0..' + (a.length - 1) + ')');
  if (x.bad.trim() === x.fix.trim()) return errs.push(at + ': bad and fix are the same');
  if (seenBad.has(x.bad.trim())) errs.push(at + ': duplicate bad sentence');
  seenBad.add(x.bad.trim());
  // The difference: one contiguous word span [p, a.length - s) in bad, replaced by [p, b.length - s) of fix.
  let p = 0; while (p < a.length && p < b.length && a[p] === b[p]) p++;
  let s = 0; while (s < a.length - p && s < b.length - p && a[a.length - 1 - s] === b[b.length - 1 - s]) s++;
  const wasEnd = a.length - s, was = a.slice(p, wasEnd), now = b.slice(p, b.length - s);
  if (!was.length && !now.length) errs.push(at + ': no word differs (only spacing?)');
  if (!Number.isInteger(x.i)) return;
  if (was.length) {
    if (x.i < p || x.i >= wasEnd) errs.push(at + ': i=' + x.i + ' (' + a[x.i] + ') is not in the changed span ' + p + '..' + (wasEnd - 1) + ' (' + was.join(' ') + ')');
  } else if (x.i !== p - 1 && x.i !== p) errs.push(at + ': missing word goes after word ' + (p - 1) + ', but i=' + x.i);
  if (was.length > 3 || now.length > 3) errs.push(at + ': changed span too long (' + was.join(' ') + ' → ' + now.join(' ') + ')');
});
if (errs.length) { errs.forEach((e) => console.log(e)); console.log(errs.length + ' problem(s) in ' + all.length + ' items'); process.exit(1); }
console.log('ERRORS OK ' + all.length + ' ' + LVS.map((l) => l + '=' + count[l]).join(' '));
