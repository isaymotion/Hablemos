// Hablemos 0.9.0: data check for the listening practice (#/listen).
// Usage: node tests/listen_check.js /path/to/hablemos
// Checks js/data/sound-pairs.js (shapes, both words differ, no pair twice in either order, every type in the guide) and every
// js/data/listen-questions*.js that exists (keys are real DIALOGUES / READING ids from every dialogues*.js and reading*.js, or
// case-<PSYCH_CASES id>; 3 to 4 questions; 4 distinct options; index in range; why non-empty), plus forbidden strings.
// Prints: LISTEN OK <pairs> <texts with questions> <questions>   (exit 1 on failure)
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = process.argv[2] || path.join(__dirname, '..', '..', 'hablemos');
const dataDir = path.join(root, 'js', 'data');
const errs = [];
const fail = (m) => errs.push(m);
const ctx = vm.createContext({}); ctx.window = ctx;
const load = (f) => { try { vm.runInContext(fs.readFileSync(path.join(dataDir, f), 'utf8'), ctx, { filename: f }); } catch (e) { fail(f + ': ' + e.message); } };
const files = fs.existsSync(dataDir) ? fs.readdirSync(dataDir).sort() : [];
// Base file first (dialogues.js assigns; dialogues-2.js appends), then -2, -3 … in number order.
const num = (f) => { const m = /-(\d+)\.js$/.exec(f); return m ? +m[1] : 0; };
const byPrefix = (re) => files.filter((f) => re.test(f)).sort((x, y) => num(x) - num(y));
['dialogues', 'reading'].forEach((b) => byPrefix(new RegExp('^' + b + '(-\\d+)?\\.js$')).forEach(load));
if (files.includes('psych-cases.js')) load('psych-cases.js');
const isStr = (s) => typeof s === 'string' && s.trim().length > 0;

/* ---------- Sound pairs ---------- */
let nPairs = 0;
if (!files.includes('sound-pairs.js')) fail('js/data/sound-pairs.js is missing');
else {
  load('sound-pairs.js');
  const SP = ctx.SOUND_PAIRS;
  if (!SP || !Array.isArray(SP.guide) || !Array.isArray(SP.items)) fail('SOUND_PAIRS must be { guide: [], items: [] }');
  else {
    const types = new Set();
    SP.guide.forEach((g, i) => {
      if (!Array.isArray(g) || g.length !== 3 || !g.every(isStr)) return fail('guide[' + i + '] must be [type, title, explanation]');
      if (types.has(g[0])) fail('guide type twice: ' + g[0]);
      types.add(g[0]);
      const sentences = g[2].split(/(?<=[.!?])\s+(?=[A-Z¿¡])/).filter(Boolean).length;
      if (sentences !== 2) fail('guide ' + g[0] + ': explanation should be two sentences (found ' + sentences + ')');
    });
    const seen = new Map(), used = new Set();
    SP.items.forEach((it, i) => {
      const at = 'items[' + i + ']';
      if (!Array.isArray(it) || (it.length !== 5 && it.length !== 6)) return fail(at + ' must be [type, a, ea, b, eb, note?]');
      if (!it.slice(0, 5).every(isStr)) return fail(at + ': type, a, ea, b and eb must be non-empty strings');
      if (it.length === 6 && !isStr(it[5])) fail(at + ': note must be a non-empty string when given');
      if (!types.has(it[0])) fail(at + ': type "' + it[0] + '" is not in the guide');
      used.add(it[0]);
      const a = it[1].trim(), b = it[3].trim();
      if (a === b || a.toLowerCase() === b.toLowerCase()) fail(at + ': both words are the same (' + a + ')');
      if (it[2].trim() === it[4].trim()) fail(at + ': both English glosses are the same (' + it[2] + ')');
      if (/\s/.test(a) || /\s/.test(b)) fail(at + ': a and b should be single words');
      const k = [a.toLowerCase(), b.toLowerCase()].sort().join('|');
      if (seen.has(k)) fail(at + ': pair ' + a + ' / ' + b + ' repeats items[' + seen.get(k) + ']');
      else seen.set(k, i);
    });
    types.forEach((t) => { if (!used.has(t)) fail('guide type ' + t + ' has no items'); });
    nPairs = SP.items.length;
    if (nPairs < 60) fail('only ' + nPairs + ' sound pairs (expected about 70)');
  }
}

/* ---------- Listening questions ---------- */
const lqFiles = byPrefix(/^listen-questions(-\d+)?\.js$/);
if (!lqFiles.length) fail('no js/data/listen-questions*.js');
const ids = new Set();
(ctx.DIALOGUES || []).forEach((d) => d && ids.add(d.id));
(ctx.READING || []).forEach((r) => r && ids.add(r.id));
(ctx.PSYCH_CASES || []).forEach((c) => c && ids.add('case-' + c.id));
let nTexts = 0, nQs = 0;
const keyFile = new Map();
const idxCount = [0, 0, 0, 0];
lqFiles.forEach((f) => {
  const before = Object.assign({}, ctx.LISTEN_Q || {});
  const c2 = vm.createContext({}); c2.window = c2;
  try { vm.runInContext(fs.readFileSync(path.join(dataDir, f), 'utf8'), c2, { filename: f }); } catch (e) { return fail(f + ': ' + e.message); }
  const LQ = c2.LISTEN_Q;
  if (!LQ || typeof LQ !== 'object') return fail(f + ': does not set window.LISTEN_Q');
  Object.entries(LQ).forEach(([id, qs]) => {
    const at = f + ' ' + id;
    if (keyFile.has(id)) fail(at + ': key also in ' + keyFile.get(id));
    keyFile.set(id, f);
    if (!ids.has(id)) fail(at + ': not a dialogue, reading or case-<id> that exists');
    if (!Array.isArray(qs) || qs.length < 3 || qs.length > 4) return fail(at + ': needs 3 to 4 questions');
    nTexts++;
    const qset = new Set();
    qs.forEach((q, k) => {
      const qa = at + ' q' + (k + 1);
      if (!Array.isArray(q) || q.length !== 4) return fail(qa + ': must be [question, [4 options], answerIndex, why]');
      const [qt, opts, a, why] = q;
      if (!isStr(qt)) fail(qa + ': empty question');
      if (qset.has(qt)) fail(qa + ': question repeated'); qset.add(qt);
      if (!Array.isArray(opts) || opts.length !== 4 || !opts.every(isStr)) return fail(qa + ': needs 4 non-empty options');
      if (new Set(opts.map((o) => o.trim().toLowerCase())).size !== 4) fail(qa + ': options are not distinct');
      if (!Number.isInteger(a) || a < 0 || a > 3) fail(qa + ': answer index out of range');
      else idxCount[a]++;
      if (!isStr(why)) fail(qa + ': why is empty');
      nQs++;
    });
  });
  ctx.LISTEN_Q = Object.assign(before, LQ);
});
// A reading's own q must not be repeated as a listening question.
(ctx.READING || []).forEach((r) => {
  const own = new Set((r.q || []).map((q) => String(q[0]).trim().toLowerCase()));
  ((ctx.LISTEN_Q || {})[r.id] || []).forEach((q) => { if (own.has(String(q[0]).trim().toLowerCase())) fail(r.id + ': repeats the reading\'s own question "' + q[0] + '"'); });
});
if (nQs >= 12 && idxCount.some((n) => n === 0)) fail('right answers never at some index: ' + idxCount.join(' '));

/* ---------- Forbidden strings ---------- */
const FORBID = [/\bpo\b/, /\bkayo\b/, /\bopo\b/, /\bninyo\b/, /\bDok\b/, /Tagalog/, /Filipino/, /Mariveles/, /NCMH/, /1553/, /barangay/i, /shabu/i, /betel/i, /MMH-/, /\bAling\b/, /\bMang\b/,
  /《/, /[぀-ヿ一-鿿]/, /JLPT/, /\bN[2-5]\b/, /romaji/i, /furigana/i, /\bJA\./];
['sound-pairs.js'].concat(lqFiles).forEach((f) => {
  if (!files.includes(f)) return;
  const src = fs.readFileSync(path.join(dataDir, f), 'utf8');
  FORBID.forEach((re) => { if (re.test(src)) fail(f + ': forbidden string ' + re); });
  if (!/DRAFT FOR REVIEW by a native Spanish-speaking clinician/.test(src)) fail(f + ': missing the draft header');
});
const lj = path.join(root, 'js', 'listen.js');
if (fs.existsSync(lj)) { const src = fs.readFileSync(lj, 'utf8'); FORBID.forEach((re) => { if (re.test(src)) fail('js/listen.js: forbidden string ' + re); }); }

if (errs.length) { console.error(errs.slice(0, 60).join('\n')); console.error('LISTEN FAIL ' + errs.length + ' problem(s)'); process.exit(1); }
console.log('LISTEN OK ' + nPairs + ' ' + nTexts + ' ' + nQs);
