#!/usr/bin/env node
/* Hablemos 0.9.0 dictionary example sentences check. Usage: node tests/examples_check.js <app folder>
   Loads every js/data/dict-*.js (in index.html order) and every js/data/examples-*.js that exists, then checks:
   - each file loads alone; header has DRAFT FOR REVIEW line
   - row shape [key, es, en, lv, hit?]; key = first two fields of a real dictionary line; no key twice across files
   - es 4 to 12 words, ends with . ? or !, opening ¿ / ¡ matched; lv A1|A2|B1|B2; en non-empty
   - headword or hit found in es exactly once as whole words (case-insensitive, accent-sensitive); hit occurs once
   - no sentence twice; forbidden strings
   Prints: EXAMPLES OK <rows> <files> A1=<n> A2=<n> B1=<n> B2=<n>  (exit 1 with a list of problems otherwise). */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = process.argv[2];
if (!root) { console.error('usage: node examples_check.js <app folder>'); process.exit(2); }
const dir = path.join(root, 'js', 'data');
const bad = [];
const fail = (m) => bad.push(m);

let order = [];
try {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  order = [...html.matchAll(/js\/data\/(dict-[\w-]+\.js)/g)].map((m) => m[1]);
} catch (e) { /* fall back below */ }
const allDict = fs.readdirSync(dir).filter((f) => /^dict-.*\.js$/.test(f)).sort();
const dictFiles = order.concat(allDict.filter((f) => !order.includes(f)));
const exFiles = fs.readdirSync(dir).filter((f) => /^examples-\d+\.js$/.test(f)).sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]));
if (!dictFiles.length) { console.error('no dict files'); process.exit(1); }

const run = (list) => { const c = vm.createContext({}); c.window = c; list.forEach((f) => vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), c, { filename: f })); return c; };
const keys = new Set();
const dc = run(dictFiles);
(dc.DICT_RAW || []).join('\n').split('\n').forEach((line) => {
  line = line.trim();
  if (!line || line.startsWith('#')) return;
  const p = line.split('|').map((s) => (s || '').trim());
  if (p[0] && p[1]) keys.add(p[0] + '|' + p[1]);
});

const FORBID = ['Dok', 'Tagalog', 'Filipino', 'Mariveles', 'NCMH', '1553', 'barangay', 'shabu', 'betel', 'MMH-', 'Aling', 'Mang', 'JLPT', 'romaji', 'furigana', 'JA.', '《'];
const FORBID_WORD = ['po', 'kayo', 'opo', 'ninyo', 'N5', 'N4', 'N3', 'N2'];
const JP = /[぀-ヿ㐀-鿿]/;
const L = '\\p{L}\\p{N}';
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const count = (hay, needle) => {
  if (!needle) return 0;
  const re = new RegExp('(?<![' + L + '])' + esc(needle.trim()).replace(/\s+/g, '\\s+') + '(?![' + L + '])', 'giu');
  return (hay.match(re) || []).length;
};
const LVS = ['A1', 'A2', 'B1', 'B2'];
const lvCount = { A1: 0, A2: 0, B1: 0, B2: 0 };
const seenKey = new Map(), seenEs = new Map();
let rows = 0;

for (const f of exFiles) {
  const src = fs.readFileSync(path.join(dir, f), 'utf8');
  if (!src.includes('DRAFT FOR REVIEW by a native Spanish-speaking clinician')) fail(f + ': header lacks the DRAFT FOR REVIEW line');
  let c;
  try { c = run([f]); } catch (e) { fail(f + ': does not load alone: ' + e.message); continue; }
  if (!Array.isArray(c.DICT_EX) || !c.DICT_EX.length) { fail(f + ': no DICT_EX rows'); continue; }
  c.DICT_EX.forEach((r, i) => {
    const w = f + ' row ' + (i + 1) + (Array.isArray(r) ? ' (' + r[0] + ')' : '');
    rows++;
    if (!Array.isArray(r) || r.length < 4 || r.length > 5) return fail(w + ': shape must be [key, es, en, lv, hit?]');
    const [key, es, en, lv, hit] = r;
    if (![key, es, en, lv].every((x) => typeof x === 'string')) return fail(w + ': fields must be strings');
    if (hit !== undefined && typeof hit !== 'string') fail(w + ': hit must be a string');
    if (!keys.has(key)) fail(w + ': key is not the first two fields of a dictionary line');
    if (seenKey.has(key)) fail(w + ': key also in ' + seenKey.get(key)); else seenKey.set(key, f);
    const n = es.trim().split(/\s+/).length;
    if (n < 4 || n > 12) fail(w + ': es has ' + n + ' words');
    if (!/[.?!]$/.test(es)) fail(w + ': es must end with . ? or !');
    if ((es.match(/¿/g) || []).length !== (es.match(/\?/g) || []).length) fail(w + ': ¿ ? not matched');
    if ((es.match(/¡/g) || []).length !== (es.match(/!/g) || []).length) fail(w + ': ¡ ! not matched');
    if (!LVS.includes(lv)) fail(w + ': bad lv ' + lv); else lvCount[lv]++;
    if (!en.trim()) fail(w + ': en empty');
    if (/"/.test(es + en)) fail(w + ': straight double quote');
    const head = key.split('|')[0];
    const target = hit ? hit : head;
    const k = count(es, target);
    if (k !== 1) fail(w + ': ' + (hit ? 'hit' : 'headword') + ' "' + target + '" found ' + k + ' times in es');
    const sk = es.trim().toLowerCase();
    if (seenEs.has(sk)) fail(w + ': sentence also used by ' + seenEs.get(sk)); else seenEs.set(sk, w);
    const all = es + ' ' + en + ' ' + (hit || '');
    FORBID.forEach((s) => { if (all.includes(s)) fail(w + ': forbidden string ' + s); });
    FORBID_WORD.forEach((s) => { if (new RegExp('(?<![' + L + '])' + s + '(?![' + L + '])', 'u').test(all)) fail(w + ': forbidden word ' + s); });
    if (JP.test(all)) fail(w + ': Japanese characters');
  });
}
if (!exFiles.length) fail('no js/data/examples-*.js found');
if (bad.length) { console.error(bad.slice(0, 80).join('\n')); if (bad.length > 80) console.error('… ' + (bad.length - 80) + ' more'); console.error('EXAMPLES FAILED ' + bad.length); process.exit(1); }
console.log('EXAMPLES OK ' + rows + ' ' + exFiles.length + ' A1=' + lvCount.A1 + ' A2=' + lvCount.A2 + ' B1=' + lvCount.B1 + ' B2=' + lvCount.B2);
