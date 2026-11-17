#!/usr/bin/env node
/* Hablemos 0.8.0 word pairs data check. Usage: node tests/pairs_check.js <app folder>
   Loads js/data/word-pairs-*.js alone (each must load by itself) and together, then checks:
   - shape: id p-<lv>-NNN matching lv, lv A1|A2|B1|B2, type opp|syn|col, a/ea/b/eb non-empty strings, syn has note, col has en
   - ids unique, 70 per level, numbered 001..070 per level; type counts about 28 / 14 / 28 (±4)
   - a != b; no pair twice in either direction (whole data set)
   - within a level+type: no duplicate b; no b equal to another pair's a (partner ambiguity)
   - within a level (any type): a word is never both an `a` and a `b` (match rounds mix types)
   - collocations: a + ' ' + b has no double spaces; b does not start with the last word of a
   - Spanish sanity: no straight double quote inside strings, ¿ … ? and ¡ … ! balanced, no stray ASCII apostrophe
   - forbidden strings (pass8 brief) in every field
   Prints: PAIRS OK 280 opp=<n> syn=<n> col=<n>  (exit 1 with a list of problems otherwise). */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = process.argv[2];
if (!root) { console.error('usage: node pairs_check.js <app folder>'); process.exit(2); }
const dir = path.join(root, 'js', 'data');
const files = fs.readdirSync(dir).filter((f) => /^word-pairs-\d+\.js$/.test(f)).sort();
const bad = [];
const fail = (m) => bad.push(m);
if (!files.length) { console.error('no js/data/word-pairs-*.js in ' + dir); process.exit(1); }

const load = (list) => { const c = vm.createContext({}); c.window = c; list.forEach((f) => vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), c, { filename: f })); return c.WORD_PAIRS; };
files.forEach((f) => { try { const w = load([f]); if (!Array.isArray(w) || !w.length) fail(f + ': does not define a WORD_PAIRS array'); } catch (e) { fail(f + ': does not load alone: ' + e.message); } });
for (const f of files) {
  const src = fs.readFileSync(path.join(dir, f), 'utf8');
  if (!src.includes('DRAFT FOR REVIEW by a native Spanish-speaking clinician')) fail(f + ': header lacks the DRAFT FOR REVIEW line');
  if (!/permanent/i.test(src)) fail(f + ': header does not say ids are permanent');
}
let P;
try { P = load(files); } catch (e) { console.error('load failed: ' + e.message); process.exit(1); }

const LVS = ['A1', 'A2', 'B1', 'B2'], TYPES = ['opp', 'syn', 'col'];
const WANT = { opp: 28, syn: 14, col: 28 }, SLACK = 4;
const low = (s) => String(s).trim().toLowerCase();
const FORBID = ['Dok', 'Tagalog', 'Filipino', 'Mariveles', 'NCMH', '1553', 'barangay', 'shabu', 'betel', 'MMH-', 'Aling', 'Mang', 'JLPT', 'romaji', 'furigana', 'JA.', '《'];
const FORBID_WORD = ['po', 'kayo', 'opo', 'ninyo', 'N5', 'N4', 'N3', 'N2'];   // whole words only (opo would hit "soportar", po "poco")
const STIGMA = ['loco', 'loca', 'adicto', 'adicta', 'drogadicto', 'drogadicta'];
const UNSAFE = /suicid|matarse|lastimarse|cortarse|hacerse daño|quitarse la vida|morir/i;
const JP = /[぀-ヿ㐀-鿿]/;

const ids = new Set();
const seenPair = new Map();
const count = {}; LVS.forEach((lv) => { count[lv] = { all: 0, opp: 0, syn: 0, col: 0 }; });
P.forEach((p, i) => {
  const at = (p && p.id) || '#' + i;
  if (!p || typeof p !== 'object') return fail(at + ': not an object');
  ['id', 'lv', 'type', 'a', 'ea', 'b', 'eb'].forEach((k) => { if (typeof p[k] !== 'string' || !p[k].trim()) fail(at + ': missing ' + k); });
  if (!LVS.includes(p.lv)) fail(at + ': bad lv ' + p.lv);
  if (!TYPES.includes(p.type)) fail(at + ': bad type ' + p.type);
  const m = /^p-(a1|a2|b1|b2)-(\d{3})$/.exec(p.id || '');
  if (!m) fail(at + ': id does not match p-<lv>-NNN');
  else if (m[1].toUpperCase() !== p.lv) fail(at + ': id level differs from lv ' + p.lv);
  if (ids.has(p.id)) fail(at + ': duplicate id'); ids.add(p.id);
  if (p.type === 'syn' && !(typeof p.note === 'string' && p.note.trim().length > 10)) fail(at + ': syn pair without a note');
  if (p.type === 'col' && !(typeof p.en === 'string' && p.en.trim())) fail(at + ': col pair without en');
  if (low(p.a) === low(p.b)) fail(at + ': a equals b');
  const key = [low(p.a), low(p.b)].sort().join(' | ');
  if (seenPair.has(key)) fail(at + ': same pair as ' + seenPair.get(key)); else seenPair.set(key, p.id);
  if (count[p.lv]) { count[p.lv].all++; if (count[p.lv][p.type] != null) count[p.lv][p.type]++; }
  const fields = ['a', 'ea', 'b', 'eb', 'note', 'en'].filter((k) => typeof p[k] === 'string');
  fields.forEach((k) => {
    const s = p[k];
    FORBID.forEach((w) => { if (s.includes(w)) fail(at + '.' + k + ': forbidden string ' + w); });
    FORBID_WORD.forEach((w) => { if (new RegExp('(^|[^\\p{L}\\d])' + w + '($|[^\\p{L}\\d])', 'u').test(s)) fail(at + '.' + k + ': forbidden word ' + w); });
    if (JP.test(s)) fail(at + '.' + k + ': Japanese characters');
    if (s.includes('"')) fail(at + '.' + k + ': straight double quote');
    if (/\s{2,}/.test(s) || s !== s.trim()) fail(at + '.' + k + ': extra spaces');
    if ((s.match(/¿/g) || []).length !== (s.match(/\?/g) || []).length) fail(at + '.' + k + ': unbalanced ¿ ?');
    if ((s.match(/¡/g) || []).length !== (s.match(/!/g) || []).length) fail(at + '.' + k + ': unbalanced ¡ !');
  });
  ['a', 'b'].forEach((k) => {
    const s = p[k] || '';
    if (/'/.test(s)) fail(at + '.' + k + ': ASCII apostrophe in Spanish');
    STIGMA.forEach((w) => { if (new RegExp('(^|[^\\p{L}])' + w + '($|[^\\p{L}])', 'iu').test(s)) fail(at + '.' + k + ': stigmatizing word ' + w); });
  });
  if (UNSAFE.test([p.a, p.b, p.type === 'col' ? p.a + ' ' + p.b : ''].join(' '))) fail(at + ': self-harm or death wording in a pair');
  if (p.type === 'col') {
    const lastA = low(p.a).split(' ').pop(), firstB = low(p.b).split(' ')[0];
    if (lastA === firstB) fail(at + ': b repeats the last word of a (' + firstB + ')');
  }
});

// Level checks: counts, numbering, ambiguity.
LVS.forEach((lv) => {
  const c = count[lv];
  if (c.all !== 70) fail(lv + ': ' + c.all + ' pairs (want 70)');
  TYPES.forEach((t) => { if (Math.abs(c[t] - WANT[t]) > SLACK) fail(lv + ': ' + c[t] + ' ' + t + ' (want about ' + WANT[t] + ')'); });
  const nums = P.filter((p) => p.lv === lv).map((p) => +p.id.slice(-3)).sort((x, y) => x - y);
  nums.forEach((n, i) => { if (n !== i + 1) fail(lv + ': ids not numbered 001..' + String(nums.length).padStart(3, '0') + ' (at ' + n + ')'); });
  const inLv = P.filter((p) => p.lv === lv);
  const As = new Map(), Bs = new Map();
  inLv.forEach((p) => { As.set(low(p.a), (As.get(low(p.a)) || []).concat(p.id)); Bs.set(low(p.b), (Bs.get(low(p.b)) || []).concat(p.id)); });
  // A word may be the `a` of several pairs (the drills treat all its partners as right), but never both an a and a b.
  As.forEach((list, w) => { if (Bs.has(w)) fail(lv + ': "' + w + '" is an a (' + list.join(', ') + ') and a b (' + Bs.get(w).join(', ') + ')'); });
  TYPES.forEach((t) => {
    const ps = inLv.filter((p) => p.type === t), seenB = new Map();
    ps.forEach((p) => { const b = low(p.b); if (seenB.has(b)) fail(lv + ' ' + t + ': b "' + p.b + '" in ' + seenB.get(b) + ' and ' + p.id); else seenB.set(b, p.id); });
    if (ps.length < 4) fail(lv + ' ' + t + ': fewer than 4 pairs, the quiz cannot make options');
    // Each pair needs 3 wrong options of its level and type that are not partners of its a.
    ps.forEach((p) => {
      const partners = new Set(P.filter((x) => low(x.a) === low(p.a)).map((x) => low(x.b)).concat(P.filter((x) => low(x.b) === low(p.a)).map((x) => low(x.a))));
      const opts = new Set(ps.filter((x) => x !== p && !partners.has(low(x.b)) && low(x.b) !== low(p.a)).map((x) => low(x.b)));
      if (opts.size < 3) fail(p.id + ': fewer than 3 distractors');
    });
  });
});

if (bad.length) { console.error('PAIRS FAIL (' + bad.length + ')\n  ' + bad.slice(0, 80).join('\n  ')); process.exit(1); }
const tot = (t) => LVS.reduce((n, lv) => n + count[lv][t], 0);
console.log('PAIRS OK ' + P.length + ' opp=' + tot('opp') + ' syn=' + tot('syn') + ' col=' + tot('col') + ' (' + files.join(', ') + ')');
