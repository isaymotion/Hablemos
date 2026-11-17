// Hablemos 0.8.0 picture words data check.
// Usage: node pictures_check.js <app folder> [reference folder, default /home/claude/isaymotion/japanese]
// Loads every js/data/picture-sets-*.js that exists, js/data/picture-bodymap.js, pictures/art-*.js; when the reference app folder
// exists, compares each set with the reference set of the same id (same ids, kind, art, part count, identical x, y per position).
// Checks shapes, unique set ids and part ids, no duplicate w in a set, diagram art present and pins inside it, cards emoji rules,
// every say.p a part of its set, 6 to 10 say per set, levels (set A1 | A2, part A1 | A2 | B1, at most a quarter B1), the draft
// header, forbidden strings and no Japanese characters. Prints `PICTURES OK <sets> <parts> <say>` or the errors (exit 1).
const fs = require('fs'), path = require('path'), vm = require('vm');
const dir = process.argv[2] || '.';
const refDir = process.argv[3] || '/home/claude/isaymotion/japanese';
const errs = [], warns = [];
const err = (m) => errs.push(m), warn = (m) => warns.push(m);
const load = (file, ctx) => { const src = fs.readFileSync(file, 'utf8'); vm.runInContext(src, ctx, { filename: file }); return src; };
const mkctx = () => { const c = vm.createContext({}); c.window = c; return c; };
const list = (sub, re) => { const d = path.join(dir, sub); return fs.existsSync(d) ? fs.readdirSync(d).filter((f) => re.test(f)).sort().map((f) => path.join(d, f)) : []; };

const forbidden = [/\bpo\b/, /\bkayo\b/, /\bopo\b/, /\bninyo\b/, /\bDok\b/, /Tagalog/, /Filipino/, /Mariveles/, /NCMH/, /1553/, /barangay/i, /shabu/i, /betel/i, /MMH-/, /\bAling\b/, /\bMang\b/,
  /JLPT/, /\bN[2-5]\b/, /romaji/i, /furigana/i, /\bJA\./];
const JP = /[　-ヿ㐀-䶿一-鿿ｦ-ﾟ《》]/;
const stigma = /\b(loco|loca|locos|adicto|adicta|drogadicto|drogadicta)\b/i;
const scan = (file, src) => {
  forbidden.forEach((r) => { if (r.test(src)) err(`${path.basename(file)}: forbidden pattern ${r}`); });
  const m = src.match(JP); if (m) err(`${path.basename(file)}: Japanese character ${m[0]}`);
};

// ---- art ----
const art = mkctx();
const artFiles = list('pictures', /^art-[\w-]+\.js$/);
if (!artFiles.length) err('no pictures/art-*.js found');
artFiles.forEach((f) => { try { scan(f, load(f, art)); } catch (e) { err(`${path.basename(f)}: ${e.message}`); } });
const ART = art.PICTURE_ART || {};
Object.entries(ART).forEach(([k, a]) => {
  if (!a || !Array.isArray(a.vb) || a.vb.length !== 2 || typeof a.svg !== 'string') err(`art ${k}: bad shape`);
  else if (/<(svg|text|style|script|image)\b/i.test(a.svg)) err(`art ${k}: forbidden element in svg`);
});

// ---- sets ----
const setFiles = list('js/data', /^picture-sets-[\w-]+\.js$/);
if (!setFiles.length) err('no js/data/picture-sets-*.js found');
const all = [];
setFiles.forEach((f) => {
  const src = fs.readFileSync(f, 'utf8');
  scan(f, src);
  if (!/DRAFT FOR REVIEW by a native Spanish-speaking clinician/.test(src)) err(`${path.basename(f)}: header missing DRAFT line`);
  const c = mkctx();
  try { vm.runInContext(src, c, { filename: f }); } catch (e) { err(`${path.basename(f)}: ${e.message}`); return; }
  const group = path.basename(f).replace(/^picture-sets-|\.js$/g, '');
  (c.PICTURE_SETS || []).forEach((s) => { all.push({ s, f: path.basename(f), group }); });
});

const SEG = typeof Intl !== 'undefined' && Intl.Segmenter ? new Intl.Segmenter('en', { granularity: 'grapheme' }) : null;
const graphemes = (s) => (SEG ? [...SEG.segment(s)].length : [...s].length);
const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const ARTICLE = /^(el|la|los|las) /;
const ids = new Set();
let nParts = 0, nSay = 0, noArticle = 0;
all.forEach(({ s, f, group }) => {
  const where = `${f} ${s && s.id}`;
  if (!s || typeof s !== 'object') { err(`${f}: a set is not an object`); return; }
  ['id', 'group', 'title', 'lv', 'kind', 'intro'].forEach((k) => { if (typeof s[k] !== 'string' || !s[k].trim()) err(`${where}: missing ${k}`); });
  if (ids.has(s.id)) err(`${where}: duplicate set id`); ids.add(s.id);
  if (s.group !== group) err(`${where}: group ${s.group} is not the file's group ${group}`);
  if (!['A1', 'A2'].includes(s.lv)) err(`${where}: set lv ${s.lv}`);
  if (!['diagram', 'cards'].includes(s.kind)) err(`${where}: kind ${s.kind}`);
  const a = s.kind === 'diagram' ? ART[s.art] : null;
  if (s.kind === 'diagram' && !a) err(`${where}: art ${s.art} not found in pictures/art-*.js`);
  const parts = Array.isArray(s.parts) ? s.parts : [];
  if (parts.length < 6) err(`${where}: only ${parts.length} parts`);
  const pids = new Set(), ws = new Set();
  let b1 = 0;
  parts.forEach((p, i) => {
    const pw = `${where} part ${i + 1} (${p && p.id})`;
    if (!p || typeof p !== 'object') { err(`${pw}: not an object`); return; }
    if (typeof p.id !== 'string' || !SLUG.test(p.id)) err(`${pw}: id must be a plain slug`);
    if (pids.has(p.id)) err(`${pw}: duplicate part id`); pids.add(p.id);
    if (typeof p.w !== 'string' || !p.w.trim()) err(`${pw}: missing w`);
    else { const k = p.w.trim().toLowerCase(); if (ws.has(k)) err(`${pw}: duplicate w "${p.w}"`); ws.add(k); if (!ARTICLE.test(p.w)) noArticle++; if (stigma.test(p.w)) err(`${pw}: stigmatizing word`); }
    if (typeof p.en !== 'string' || !p.en.trim()) err(`${pw}: missing en`);
    if (!['A1', 'A2', 'B1'].includes(p.lv)) err(`${pw}: lv ${p.lv}`);
    if (p.lv === 'B1') b1++;
    if (p.r != null && (typeof p.r !== 'string' || !p.r.trim() || p.r.length > 80)) err(`${pw}: r must be a short string`);
    if (s.kind === 'diagram') {
      if (typeof p.x !== 'number' || typeof p.y !== 'number') err(`${pw}: x, y must be numbers`);
      else if (a && (p.x < 0 || p.y < 0 || p.x > a.vb[0] || p.y > a.vb[1])) err(`${pw}: pin outside the art (${p.x}, ${p.y})`);
    } else {
      if (typeof p.pic !== 'string' || !p.pic) err(`${pw}: cards part needs pic`);
      else {
        if (graphemes(p.pic) !== 1) err(`${pw}: pic must be ONE emoji`);
        if (/‍/.test(p.pic)) err(`${pw}: pic has a ZWJ sequence`);
        if (/[\u{1F3FB}-\u{1F3FF}]/u.test(p.pic)) err(`${pw}: pic has a skin tone`);
        if (/[\u{1F1E6}-\u{1F1FF}]/u.test(p.pic)) err(`${pw}: pic is a flag`);
      }
    }
  });
  if (b1 > parts.length / 4) err(`${where}: ${b1} of ${parts.length} parts are B1 (at most a quarter)`);
  nParts += parts.length;
  const say = Array.isArray(s.say) ? s.say : [];
  if (say.length < 6 || say.length > 10) err(`${where}: ${say.length} say sentences (6 to 10)`);
  const seenEs = new Set();
  say.forEach((x, i) => {
    const sw = `${where} say ${i + 1}`;
    if (!x || typeof x.es !== 'string' || !x.es.trim()) { err(`${sw}: missing es`); return; }
    if (typeof x.en !== 'string' || !x.en.trim()) err(`${sw}: missing en`);
    if (!pids.has(x.p)) err(`${sw}: p ${x.p} is not a part of the set`);
    if (seenEs.has(x.es)) err(`${sw}: duplicate sentence`); seenEs.add(x.es);
    if (!/[.?!"]$/.test(x.es.trim())) warn(`${sw}: sentence has no final punctuation`);
    if (/[?]/.test(x.es) && !/¿/.test(x.es)) err(`${sw}: ? without ¿`);
    if (/!/.test(x.es) && !/¡/.test(x.es)) err(`${sw}: ! without ¡`);
    if (stigma.test(x.es)) err(`${sw}: stigmatizing word`);
  });
  nSay += say.length;
});
if (noArticle) warn(`${noArticle} parts have no el / la / los / las (fine for verbs, adjectives and colors)`);

// ---- body map ----
const bmFile = path.join(dir, 'js/data/picture-bodymap.js');
if (!fs.existsSync(bmFile)) err('js/data/picture-bodymap.js missing');
else {
  const src = fs.readFileSync(bmFile, 'utf8'); scan(bmFile, src);
  if (!/DRAFT FOR REVIEW by a native Spanish-speaking clinician/.test(src)) err('picture-bodymap.js: header missing DRAFT line');
  const c = mkctx();
  try {
    vm.runInContext(src, c, { filename: bmFile });
    const B = c.PICTURE_BODYMAP || {};
    if (!Array.isArray(B.sets) || !B.sets.length) err('bodymap: sets missing');
    else B.sets.forEach((id) => { if (!ids.has(id)) err(`bodymap: set ${id} is not loaded`); });
    const okList = (k, n) => { const l = B[k]; if (!Array.isArray(l) || l.length !== n) err(`bodymap: ${k} must have ${n} items`); else l.forEach((x, i) => { if (!x || !x.es || !x.en) err(`bodymap ${k} ${i + 1}: es and en required`); }); };
    okList('ask', 8); okList('words', 10);
    if (/caras|carita|faces|wong|baker/i.test(src.replace(/no faces scale/i, ''))) err('bodymap: looks like a faces scale');
  } catch (e) { err(`picture-bodymap.js: ${e.message}`); }
}

// ---- reference comparison (optional) ----
let compared = 0;
const refSets = path.join(refDir, 'js/data');
if (fs.existsSync(refSets)) {
  const rc = mkctx();
  fs.readdirSync(refSets).filter((f) => /^picture-sets-[\w-]+\.js$/.test(f)).forEach((f) => { try { load(path.join(refSets, f), rc); } catch (e) { warn(`reference ${f}: ${e.message}`); } });
  const ref = new Map((rc.PICTURE_SETS || []).map((s) => [s.id, s]));
  all.forEach(({ s }) => {
    const r = ref.get(s.id);
    if (!r) { err(`${s.id}: no reference set with this id`); return; }
    compared++;
    if (r.kind !== s.kind) err(`${s.id}: kind ${s.kind}, reference ${r.kind}`);
    if (r.group !== s.group) err(`${s.id}: group ${s.group}, reference ${r.group}`);
    if ((r.art || null) !== (s.art || null)) err(`${s.id}: art ${s.art}, reference ${r.art}`);
    if (r.parts.length !== s.parts.length) err(`${s.id}: ${s.parts.length} parts, reference ${r.parts.length}`);
    if (s.kind === 'diagram') s.parts.forEach((p, i) => { const q = r.parts[i]; if (q && (q.x !== p.x || q.y !== p.y)) err(`${s.id} part ${i + 1} (${p.id}): x, y ${p.x}, ${p.y} differ from the reference ${q.x}, ${q.y}`); });
  });
  // Reference sets of a loaded group that are missing here.
  const groups = new Set(all.map((x) => x.group));
  ref.forEach((r, id) => { if (groups.has(r.group) && !ids.has(id)) err(`set ${id} (group ${r.group}) is in the reference but missing here`); });
}

warns.forEach((w) => console.log('warn: ' + w));
if (errs.length) { errs.forEach((e) => console.log('ERROR: ' + e)); console.log(errs.length + ' error(s)'); process.exit(1); }
console.log(`PICTURES OK ${all.length} ${nParts} ${nSay}` + (compared ? ` (compared ${compared} with the reference)` : ''));
