// Lesson extras check (0.8.0). Usage: node tests/extras_check.js [app folder]  (default /home/claude/hablemos)
// Loads all js/data/lessons*.js and every js/data/lesson-extra-*.js that exists, then checks keys, shapes, counts,
// quiz indexes, distinct options, no repeats of lesson examples or quiz questions, forbidden strings, index spread.
const vm = require('vm'), fs = require('fs'), path = require('path');
const root = process.argv[2] || '/home/claude/hablemos';
const dir = path.join(root, 'js/data');
const c = vm.createContext({}); c.window = c;
const files = fs.readdirSync(dir);
/* lessons.js assigns window.LESSONS and must load first (as in index.html); the other parts append. */
const lessonFiles = files.filter(f => /^lessons.*\.js$/.test(f)).sort((a, b) => (a === 'lessons.js' ? -1 : b === 'lessons.js' ? 1 : a < b ? -1 : 1));
const extraFiles = files.filter(f => /^lesson-extra-\d+\.js$/.test(f)).sort();
const errs = [];
const err = m => errs.push(m);
/* Parts 1 and 2 were released (0.8.0) while this check saw only the 23 original lessons; their five repeats of another lesson's generic line are warnings (ids are permanent). */
const warn = m => console.log('warn: ' + m), OLD = t => /^lesson-extra-[12]\.js/.test(t);
for (const f of lessonFiles) vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), c, { filename: f });
const lessons = c.LESSONS || [];
const byId = {}; lessons.forEach(l => byId[l.id] = l);
const norm = s => String(s).toLowerCase().replace(/[¿?¡!.,;:]/g, '').replace(/\s+/g, ' ').trim();
const lessonEx = new Set(), lessonQ = new Set();
lessons.forEach(l => {
  const re = /<div class="ex"><b>(.*?)<\/b>/g; let m;
  while ((m = re.exec(l.body))) lessonEx.add(norm(m[1]));
  (l.quiz || []).forEach(q => lessonQ.add(norm(q[0])));
});
if (!extraFiles.length) err('no js/data/lesson-extra-*.js found');
const forbidden = [/\bpo\b/, /\bkayo\b/, /\bopo\b/, /\bninyo\b/, /\bDok\b/, /Tagalog/, /Filipino/, /Mariveles/, /NCMH/, /1553/, /barangay/i, /shabu/i, /betel/i, /MMH-/, /\bAling\b/, /\bMang\b/,
  /[　-ヿ一-鿿《》]/, /JLPT/, /\bN[2-5]\b/, /romaji/i, /furigana/i, /\bJA\./];
const seen = {}; let nL = 0, nM = 0, nMore = 0, nQ = 0; const spread = [0, 0, 0];
for (const f of extraFiles) {
  const src = fs.readFileSync(path.join(dir, f), 'utf8');
  forbidden.forEach(r => { if (r.test(src)) err(`${f}: forbidden pattern ${r}`); });
  if (!/DRAFT FOR REVIEW by a native Spanish-speaking clinician/.test(src)) err(`${f}: header missing DRAFT line`);
  const cx = vm.createContext({}); cx.window = cx;
  try { vm.runInContext(src, cx, { filename: f }); } catch (e) { err(`${f}: ${e.message}`); continue; }
  const X = cx.LESSON_EXTRA || {};
  const local = [0, 0, 0];
  for (const id of Object.keys(X)) {
    const t = `${f}:${id}`; const lines = new Set();
    if (!byId[id]) { err(`${t}: not a lesson id`); continue; }
    if (seen[id]) err(`${t}: also in ${seen[id]}`); seen[id] = f;
    const x = X[id]; nL++;
    if (!x.mistakes || x.mistakes.length !== 3) err(`${t}: need 3 mistakes`);
    if (!x.more || x.more.length !== 6) err(`${t}: need 6 more`);
    if (!x.quiz || x.quiz.length !== 6) err(`${t}: need 6 quiz`);
    (x.mistakes || []).forEach((m, i) => {
      nM++;
      if (!Array.isArray(m) || m.length !== 3 || m.some(s => typeof s !== 'string' || !s.trim())) return err(`${t}: mistake ${i} shape`);
      if (m[0].trim() === m[1].trim()) err(`${t}: mistake ${i} wrong equals right`);
    });
    (x.more || []).forEach((m, i) => {
      nMore++;
      if (!Array.isArray(m) || m.length !== 2 || m.some(s => typeof s !== 'string' || !s.trim())) return err(`${t}: more ${i} shape`);
      const n = norm(m[0]);
      if (lessonEx.has(n)) (OLD(t) ? warn : err)(`${t}: more ${i} repeats a lesson example: ${m[0]}`);
      if (lines.has(n)) err(`${t}: more ${i} duplicated`); lines.add(n);
      if (/<|>/.test(m[0] + m[1])) err(`${t}: more ${i} has markup`);
    });
    (x.quiz || []).forEach((q, i) => {
      nQ++;
      if (!Array.isArray(q) || q.length !== 4 || typeof q[0] !== 'string' || !Array.isArray(q[1]) || q[1].length !== 3 || typeof q[3] !== 'string' || !q[3].trim()) return err(`${t}: quiz ${i} shape`);
      if (!Number.isInteger(q[2]) || q[2] < 0 || q[2] > 2) return err(`${t}: quiz ${i} index out of range`);
      if (new Set(q[1].map(o => o.trim())).size !== 3) err(`${t}: quiz ${i} options not distinct`);
      if (q[1].some(o => typeof o !== 'string' || !o.trim())) err(`${t}: quiz ${i} empty option`);
      const n = norm(q[0]);
      if (lessonQ.has(n)) (OLD(t) ? warn : err)(`${t}: quiz ${i} repeats a lesson quiz question`);
      if (lines.has('q' + n)) err(`${t}: quiz ${i} duplicated`); lines.add('q' + n);
      spread[q[2]]++; local[q[2]]++;
    });
  }
  const tot = local[0] + local[1] + local[2];
  if (tot) local.forEach((n, k) => { if (n / tot < 0.25 || n / tot > 0.42) err(`${f}: index ${k} used ${n}/${tot} times (uneven)`); });
}
const tot = spread[0] + spread[1] + spread[2];
if (tot) spread.forEach((n, k) => { if (n / tot < 0.28 || n / tot > 0.38) err(`index ${k} used ${n}/${tot} times overall`); });
if (errs.length) { console.error(errs.join('\n')); console.error(`EXTRAS FAILED (${errs.length})`); process.exit(1); }
console.log(`EXTRAS OK ${nL} ${nM} ${nMore} ${nQ} (index spread ${spread.join('/')})`);
