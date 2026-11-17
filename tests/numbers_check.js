#!/usr/bin/env node
/* Data check for Numbers, dates and time (Hablemos 0.8.0): js/data/numbers.js (window.ES_NUMBERS) and js/numbers.js.
   Usage: node numbers_check.js /path/to/hablemos
   Checks: shape, the 12 group ids, 10 to 16 rows per group, about 130 rows, 40 clinical items; every purely numeric
   row (label "16", "1,500", "1998") against an independent number-to-Spanish-words function; spelling of the forms
   learners get wrong; within a group no repeated label or Spanish, and no two clock rows for the same time; clinical
   items have 3 wrong answers, all distinct and different from the answer; no unsafe or forbidden strings.
   Prints NUMBERS OK <groups> <rows> <clinical>, exit 1 on failure. */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = process.argv[2] || '/home/claude/hablemos';
const errs = [];
const err = (m) => errs.push(m);

const file = path.join(root, 'js/data/numbers.js');
const src = fs.readFileSync(file, 'utf8');
const ctx = vm.createContext({}); ctx.window = ctx;
vm.runInContext(src, ctx, { filename: file });
const N = ctx.ES_NUMBERS;
if (!N || !Array.isArray(N.groups) || !Array.isArray(N.clinical)) { console.error('ES_NUMBERS missing or malformed'); process.exit(1); }
if (!/DRAFT FOR REVIEW by a native Spanish-speaking clinician/.test(src.slice(0, 600))) err('header lacks the DRAFT FOR REVIEW line');

/* ---------- Independent number to Spanish words (0 to 999,999; the brief needs 0 to 9999) ---------- */
const UNITS = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'quince',
  'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis',
  'veintisiete', 'veintiocho', 'veintinueve'];
const TENS = { 3: 'treinta', 4: 'cuarenta', 5: 'cincuenta', 6: 'sesenta', 7: 'setenta', 8: 'ochenta', 9: 'noventa' };
const HUND = { 1: 'ciento', 2: 'doscientos', 3: 'trescientos', 4: 'cuatrocientos', 5: 'quinientos', 6: 'seiscientos', 7: 'setecientos', 8: 'ochocientos', 9: 'novecientos' };
function below100(n) { if (n < 30) return UNITS[n]; const t = Math.floor(n / 10), u = n % 10; return TENS[t] + (u ? ' y ' + UNITS[u] : ''); }
function below1000(n) {
  if (n < 100) return below100(n);
  if (n === 100) return 'cien';
  const h = Math.floor(n / 100), r = n % 100;
  return HUND[h] + (r ? ' ' + below100(r) : '');
}
// Before "mil", uno is apocopated (veintiún mil, un... but 1000 itself is plain "mil").
const apoc = (s) => s.replace(/veintiuno$/, 'veintiún').replace(/(^|\s)uno$/, '$1un');
function toEs(n) {
  if (!Number.isInteger(n) || n < 0 || n > 999999) throw new Error('out of range ' + n);
  if (n < 1000) return below1000(n);
  const th = Math.floor(n / 1000), r = n % 1000;
  return (th === 1 ? 'mil' : apoc(below1000(th)) + ' mil') + (r ? ' ' + below1000(r) : '');
}
// Self-test of the function on known forms.
[[0, 'cero'], [16, 'dieciséis'], [21, 'veintiuno'], [22, 'veintidós'], [23, 'veintitrés'], [26, 'veintiséis'], [31, 'treinta y uno'], [100, 'cien'],
  [101, 'ciento uno'], [115, 'ciento quince'], [500, 'quinientos'], [700, 'setecientos'], [900, 'novecientos'], [1000, 'mil'], [1001, 'mil uno'],
  [1998, 'mil novecientos noventa y ocho'], [2026, 'dos mil veintiséis'], [9999, 'nueve mil novecientos noventa y nueve'], [21000, 'veintiún mil']]
  .forEach(([n, w]) => { if (toEs(n) !== w) err('self-test: toEs(' + n + ') = ' + toEs(n) + ', expected ' + w); });

/* ---------- Groups ---------- */
const IDS = ['n0-15', 'n16-29', 'tens', 'hundreds', 'thousands', 'ordinals', 'clock', 'days-months', 'dates', 'spans', 'doses', 'phones-scales'];
const ids = N.groups.map((g) => g.id);
if (JSON.stringify(ids) !== JSON.stringify(IDS)) err('group ids ' + JSON.stringify(ids));
let rows = 0, numeric = 0;
const norm = (s) => String(s).toLowerCase().replace(/[.,;:!?¡¿\s]+/g, ' ').trim();
N.groups.forEach((g) => {
  if (!g.title || typeof g.title !== 'string') err(g.id + ': no title');
  if (!g.note || typeof g.note !== 'string') err(g.id + ': no note');
  if ((g.note || '').replace(/<\/?(i|b)>/g, '').match(/[<>]/)) err(g.id + ': note has a tag other than <i> or <b>');
  if (!Array.isArray(g.rows) || g.rows.length < 10 || g.rows.length > 16) err(g.id + ': ' + (g.rows || []).length + ' rows (10 to 16)');
  const seenL = new Set(), seenE = new Set(), clockMins = new Map();
  (g.rows || []).forEach((r, i) => {
    rows++;
    const where = g.id + '[' + i + '] ' + JSON.stringify(r[0]);
    if (!Array.isArray(r) || r.length < 2 || r.length > 3 || typeof r[0] !== 'string' || typeof r[1] !== 'string' || !r[0].trim() || !r[1].trim()) { err(where + ': bad row'); return; }
    if (r.length === 3 && r[2] !== 1) err(where + ': tricky flag must be 1');
    if (seenL.has(norm(r[0]))) err(where + ': label repeated in the group'); seenL.add(norm(r[0]));
    if (seenE.has(norm(r[1]))) err(where + ': Spanish repeated in the group'); seenE.add(norm(r[1]));
    if (r[1] !== r[1].trim() || /\s{2}/.test(r[1])) err(where + ': stray spaces');
    if (/^[A-ZÁÉÍÓÚÑ]/.test(r[1])) err(where + ': Spanish starts with a capital (rows are plain phrases)');
    // Purely numeric labels ("16", "1,500", "2026") must read exactly as the independent function says.
    // (phones-scales reads numbers digit by digit or in pairs, so those are checked below instead.)
    if (g.id === 'phones-scales' && /^\d+$/.test(r[0])) { const dg = r[0].split('').map((d) => UNITS[+d]).join(' '); if (r[1] !== dg) err(where + ': digit by digit should be "' + dg + '"'); numeric++; }
    else if (/^\d{1,3}(,\d{3})*$|^\d+$/.test(r[0])) {
      const n = +r[0].replace(/,/g, '');
      if (n <= 999999) { numeric++; if (r[1] !== toEs(n)) err(where + ': "' + r[1] + '" but expected "' + toEs(n) + '"'); }
    }
    // Clock rows: no two rows for the same time on a 12-hour dial.
    const m = g.id === 'clock' && r[0].match(/^(\d{1,2}):(\d{2})/);
    if (m) { const k = ((+m[1]) % 12) * 60 + (+m[2]); if (clockMins.has(k)) err(where + ': same time as ' + clockMins.get(k)); clockMins.set(k, r[0]); }
  });
});
// Phone numbers in pairs: "55 12 34" -> "cincuenta y cinco, doce, treinta y cuatro".
N.groups.forEach((g) => g.rows.forEach((r) => { if (/^\d{2}( \d{2})+$/.test(r[0])) { numeric++; const w = r[0].split(' ').map((x) => toEs(+x)).join(', '); if (r[1] !== w) err(g.id + ' ' + r[0] + ': pairs should read "' + w + '"'); } }));
if (rows < 120 || rows > 160) err('total rows ' + rows + ' (about 130)');

/* ---------- Spelling of the forms learners get wrong (somewhere in rows) ---------- */
const allEs = N.groups.flatMap((g) => g.rows.map((r) => r[1])).concat(N.clinical.map((c) => c[0]));
const blob = allEs.join(' | ');
['dieciséis', 'veintidós', 'veintitrés', 'veintiséis', 'quinientos', 'setecientos', 'novecientos', 'veintiún años', 'son las dos y media', 'el primero de mayo',
  'es la una', 'menos cuarto', 'mediodía', 'medianoche', 'miércoles', 'sábado', 'hace quince días', 'hace ocho días', 'quincena', 'cada tercer día',
  'media pastilla', 'una pastilla y media', 'dos veces al día', 'cada ocho horas', 'cero punto cinco', 'nueve ocho ocho', 'del cero al diez', 'por ciento',
  'doscientas', 'un millón de', 'el primer piso', 'el tercer piso', 'la primera vez', 'los lunes', 'el lunes', 'el tres de marzo de dos mil veintiséis']
  .forEach((w) => { if (!blob.includes(w)) err('missing required form: ' + w); });
// Common misspellings and wrong forms, as whole words.
const BAD = [/\bdiez y seis\b/, /\bdieciseis\b/, /\bveintidos\b/, /\bveintitres\b/, /\bveintiseis\b/, /\bveinte y\b/, /\bcinco ?cientos\b/, /\bsiete ?cientos\b/, /\bnueve ?cientos\b/,
  /\bun mil\b/, /\bveintiuno años\b/, /\bveintiun\b/, /\bciento y\b/, /\bcien (uno|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|veinte|treinta|cincuenta)\b/,
  /\btreintiuno\b/, /\buno (año|día|mes|miligramo)s?\b/, /\bmiercoles\b/, /\bsabado\b/, /\bmedio dia\b/, /\bmedia noche\b/, /\bdias\b/, /\bmas\b/,
  /\bLunes\b|\bMartes\b|\bEnero\b|\bFebrero\b|\bMayo\b|\bJunio\b|\bJulio\b/, /\bson la una\b/, /\bes las\b/, /\bel uno de\b/, /\bdos mil y\b/];
allEs.forEach((s) => BAD.forEach((re) => { if (re.test(s)) err('wrong form ' + re + ' in: ' + s); }));

/* ---------- Clinical ---------- */
if (N.clinical.length !== 40) err('clinical: ' + N.clinical.length + ' items (40)');
const seenC = new Set();
N.clinical.forEach((c, i) => {
  const where = 'clinical[' + i + ']';
  if (!Array.isArray(c) || c.length !== 5 || ![0, 1, 2, 3].every((k) => typeof c[k] === 'string' && c[k].trim()) || !Array.isArray(c[4])) { err(where + ': bad shape'); return; }
  const [es, en, q, a, w] = c;
  if (seenC.has(es)) err(where + ': sentence repeated'); seenC.add(es);
  if (w.length !== 3 || w.some((x) => typeof x !== 'string' || !x.trim())) err(where + ': needs exactly 3 wrong answers');
  const opts = [a].concat(w).map(norm);
  if (new Set(opts).size !== 4) err(where + ': answer and wrong answers are not all different ' + JSON.stringify([a].concat(w)));
  if (!/[.?!]$/.test(es) || !/^[¿¡A-ZÁÉÍÓÚÑ]/.test(es)) err(where + ': Spanish should be a full sentence');
  if (!/[.?!]$/.test(en)) err(where + ': English should be a full sentence');
  if (!/\?$/.test(q)) err(where + ': question should end with ?');
  if (/[ñáéíóú¿¡]/i.test(q + a + w.join(''))) err(where + ': question or options look Spanish');
});

/* ---------- Safety and forbidden strings (data and view) ---------- */
const view = fs.readFileSync(path.join(root, 'js/numbers.js'), 'utf8');
const txt = src + '\n' + view;
[/\bpo\b/, /\bkayo\b/, /\bopo\b/, /\bninyo\b/, /\bDok\b/, /Tagalog/, /Filipino/, /Mariveles/, /NCMH/, /1553/, /barangay/i, /shabu/i, /betel/i, /MMH-/, /\bAling\b/, /\bMang\b/,
  /《/, /[぀-ヿ一-鿿]/, /JLPT/, /\bN[2-5]\b/, /romaji/i, /furigana/i, /\bJA\./, /\b(loco|adicto|drogadicto)\b/i, /JA_COUNTERS/]
  .forEach((re) => { if (re.test(txt)) err('forbidden string ' + re); });
// No command / let's / encouraging forms of the risk verbs, and no overdose-type wording.
[/\b(suicíd|mát|muér|lastím|córt)[a-z]*(se|te|nos)\b/i, /\bhág(a|ase|anse)(se)? daño\b/i, /\bvamos a (suicidarnos|matarnos|morirnos|lastimarnos|cortarnos)\b/i,
  /\b(sobredosis|todas las pastillas|toda la caja|el frasco entero|doble dosis)\b/i, /\boverdose\b/i]
  .forEach((re) => { if (re.test(src)) err('unsafe wording ' + re); });
// Dose rows: only ordinary amounts (at most 2 tablets, at most 4 times a day, mg under 1000).
N.groups.filter((g) => g.id === 'doses').forEach((g) => g.rows.forEach((r) => {
  const t = r[0].match(/^(\d+)\s*tablets?/); if (t && +t[1] > 2) err('doses: ' + r[0] + ' is more than an ordinary dose');
  const mg = r[0].match(/^([\d.]+)\s*mg/); if (mg && +mg[1] >= 1000) err('doses: ' + r[0] + ' too large');
}));
// Crisis line only as 988.
if (/\b(911|1-800|800-273)\b/.test(src.replace(/'911, then press 2'/, ''))) err('crisis line other than 988 used as a right answer');

if (errs.length) { console.error(errs.join('\n')); console.error(errs.length + ' problem(s)'); process.exit(1); }
if (numeric < 40) { console.error('only ' + numeric + ' numeric rows verified'); process.exit(1); }
console.log('NUMBERS OK ' + N.groups.length + ' ' + rows + ' ' + N.clinical.length);
