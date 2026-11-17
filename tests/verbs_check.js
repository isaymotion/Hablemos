/* Hablemos verb trainer check: node verbs_check.js /path/to/hablemos
   Loads js/conjugate.js and js/data/verbs.js, compares hand-written expected forms (written from Spanish grammar, not
   from the engine), then checks that every verb builds every form it should, with no undefined, no bad joins, and that
   the safety-hidden forms are absent. Prints VERBS OK <verbs> <forms>. */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = process.argv[2] || path.join(__dirname, '..', '..', 'hablemos');
const ctx = vm.createContext({}); ctx.window = ctx;
for (const f of ['js/conjugate.js', 'js/data/verbs.js']) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
const C = ctx.ESConj, V = ctx.ES_VERBS;
const errs = [];
const err = (m) => errs.push(m);
const byInf = Object.fromEntries(V.map((v) => [v.inf, v]));
const formsOf = (inf) => { const v = byInf[inf]; if (!v) { err('missing verb in data: ' + inf); return {}; } return C.verb(v.inf, v); };

// [infinitive, form id, expected]
const X = [
  // regular -ar / -er / -ir
  ['hablar', 'pres.1s', 'hablo'], ['hablar', 'pres.2s', 'hablas'], ['hablar', 'pres.1p', 'hablamos'], ['hablar', 'pret.1s', 'hablé'], ['hablar', 'pret.3s', 'habló'],
  ['hablar', 'pret.3p', 'hablaron'], ['hablar', 'impf.1p', 'hablábamos'], ['hablar', 'fut.3s', 'hablará'], ['hablar', 'cond.1s', 'hablaría'], ['hablar', 'subj.3s', 'hable'],
  ['hablar', 'isubj.1s', 'hablara'], ['hablar', 'isubj.1p', 'habláramos'], ['hablar', 'ger', 'hablando'], ['hablar', 'part', 'hablado'], ['hablar', 'perf.3p', 'han hablado'],
  ['hablar', 'imp.ud', 'hable'], ['hablar', 'imp.tu', 'habla'], ['hablar', 'imp.uds', 'hablen'], ['hablar', 'neg.tu', 'no hables'], ['hablar', 'neg.ud', 'no hable'],
  ['comer', 'pres.3s', 'come'], ['comer', 'pret.1s', 'comí'], ['comer', 'pret.3p', 'comieron'], ['comer', 'impf.3s', 'comía'], ['comer', 'subj.1p', 'comamos'],
  ['comer', 'isubj.3p', 'comieran'], ['comer', 'ger', 'comiendo'], ['comer', 'perf.1s', 'he comido'],
  ['vivir', 'pres.1p', 'vivimos'], ['vivir', 'pret.2s', 'viviste'], ['vivir', 'fut.1p', 'viviremos'], ['vivir', 'subj.3p', 'vivan'], ['vivir', 'imp.tu', 'vive'],
  ['tomar', 'pret.3s', 'tomó'], ['tomar', 'pres.1s', 'tomo'], ['tomar', 'neg.ud', 'no tome'],
  // stem changes
  ['pensar', 'pres.1s', 'pienso'], ['pensar', 'pres.1p', 'pensamos'], ['pensar', 'subj.3s', 'piense'], ['cerrar', 'imp.ud', 'cierre'],
  ['entender', 'pres.3p', 'entienden'], ['perder', 'pret.1s', 'perdí'],
  ['dormir', 'pres.1s', 'duermo'], ['dormir', 'pres.1p', 'dormimos'], ['dormir', 'pret.3s', 'durmió'], ['dormir', 'pret.3p', 'durmieron'], ['dormir', 'pret.1s', 'dormí'],
  ['dormir', 'ger', 'durmiendo'], ['dormir', 'subj.1p', 'durmamos'], ['dormir', 'isubj.1s', 'durmiera'], ['dormir', 'imp.tu', 'duerme'], ['dormir', 'neg.tu', 'no duermas'],
  ['sentirse', 'pres.1s', 'me siento'], ['sentirse', 'pret.3s', 'se sintió'], ['sentirse', 'ger', 'sintiéndose'], ['sentirse', 'subj.1p', 'nos sintamos'],
  ['sentirse', 'imp.ud', 'siéntase'], ['sentirse', 'perf.1s', 'me he sentido'], ['sentirse', 'impf.3p', 'se sentían'],
  ['preferir', 'pres.2s', 'prefieres'], ['preferir', 'pret.3s', 'prefirió'],
  ['pedir', 'pres.1s', 'pido'], ['pedir', 'pres.1p', 'pedimos'], ['pedir', 'pret.3p', 'pidieron'], ['pedir', 'ger', 'pidiendo'], ['pedir', 'subj.1p', 'pidamos'], ['pedir', 'imp.ud', 'pida'],
  ['repetir', 'pres.3s', 'repite'], ['servir', 'pret.3s', 'sirvió'], ['vestirse', 'imp.ud', 'vístase'],
  ['volver', 'pres.3p', 'vuelven'], ['volver', 'part', 'vuelto'], ['volver', 'imp.ud', 'vuelva'],
  ['recordar', 'pres.1s', 'recuerdo'], ['recordar', 'pres.1p', 'recordamos'], ['encontrar', 'pres.1s', 'encuentro'], ['contar', 'imp.ud', 'cuente'],
  ['doler', 'pres.3s', 'duele'], ['doler', 'pres.3p', 'duelen'], ['doler', 'pret.3s', 'dolió'], ['temblar', 'pres.3p', 'tiemblan'],
  ['jugar', 'pres.1s', 'juego'], ['jugar', 'pret.1s', 'jugué'], ['jugar', 'subj.3s', 'juegue'], ['jugar', 'subj.1p', 'juguemos'],
  ['seguir', 'pres.1s', 'sigo'], ['seguir', 'pres.3s', 'sigue'], ['seguir', 'pret.3s', 'siguió'], ['seguir', 'subj.3s', 'siga'], ['seguir', 'ger', 'siguiendo'],
  ['corregir', 'pres.1s', 'corrijo'], ['corregir', 'subj.3s', 'corrija'], ['arrepentirse', 'pret.3s', 'se arrepintió'], ['sugerir', 'pret.3s', 'sugirió'], ['advertir', 'ger', 'advirtiendo'],
  // spelling changes
  ['buscar', 'pret.1s', 'busqué'], ['buscar', 'subj.1s', 'busque'], ['explicar', 'imp.ud', 'explique'], ['llegar', 'pret.1s', 'llegué'], ['pagar', 'subj.3p', 'paguen'],
  ['empezar', 'pres.1s', 'empiezo'], ['empezar', 'pret.1s', 'empecé'], ['empezar', 'subj.3s', 'empiece'], ['almorzar', 'pret.1s', 'almorcé'], ['almorzar', 'pres.3s', 'almuerza'],
  ['comenzar', 'pret.1s', 'comencé'], ['negar', 'pret.1s', 'negué'], ['negar', 'pres.3s', 'niega'],
  ['escoger', 'pres.1s', 'escojo'], ['escoger', 'imp.ud', 'escoja'], ['exigir', 'pres.1s', 'exijo'],
  ['conocer', 'pres.1s', 'conozco'], ['conocer', 'subj.3s', 'conozca'], ['conocer', 'pres.2s', 'conoces'], ['ofrecer', 'pres.1s', 'ofrezco'], ['agradecer', 'pres.1s', 'agradezco'],
  ['nacer', 'pres.1s', 'nazco'], ['parecer', 'subj.3s', 'parezca'], ['reconocer', 'pret.3s', 'reconoció'], ['convencer', 'pres.1s', 'convenzo'],
  ['conducir', 'pres.1s', 'conduzco'], ['conducir', 'pret.1s', 'conduje'], ['conducir', 'pret.3s', 'condujo'], ['conducir', 'pret.3p', 'condujeron'], ['conducir', 'neg.ud', 'no conduzca'],
  ['traducir', 'pret.3s', 'tradujo'], ['traducir', 'isubj.3s', 'tradujera'],
  ['leer', 'pret.3s', 'leyó'], ['leer', 'pret.3p', 'leyeron'], ['leer', 'pret.1s', 'leí'], ['leer', 'pret.2s', 'leíste'], ['leer', 'ger', 'leyendo'], ['leer', 'part', 'leído'], ['leer', 'isubj.1s', 'leyera'],
  ['creer', 'pret.3s', 'creyó'], ['creer', 'part', 'creído'],
  ['oír', 'pres.1s', 'oigo'], ['oír', 'pres.2s', 'oyes'], ['oír', 'pres.1p', 'oímos'], ['oír', 'pret.3s', 'oyó'], ['oír', 'ger', 'oyendo'], ['oír', 'part', 'oído'], ['oír', 'fut.1s', 'oiré'], ['oír', 'subj.3s', 'oiga'], ['oír', 'imp.tu', 'oye'],
  ['caerse', 'pret.1s', 'me caí'], ['caerse', 'pret.3s', 'se cayó'], ['caerse', 'pres.1s', 'me caigo'], ['recaer', 'pret.1s', 'recaí'], ['recaer', 'pret.3s', 'recayó'], ['recaer', 'pres.1s', 'recaigo'],
  ['construir', 'pres.1s', 'construyo'], ['construir', 'pres.1p', 'construimos'], ['construir', 'pret.3s', 'construyó'], ['construir', 'ger', 'construyendo'], ['construir', 'part', 'construido'],
  ['disminuir', 'pret.3s', 'disminuyó'],
  ['confiar', 'pres.1s', 'confío'], ['confiar', 'pres.1p', 'confiamos'], ['confiar', 'subj.3s', 'confíe'], ['enviar', 'pres.3s', 'envía'], ['continuar', 'imp.ud', 'continúe'], ['graduarse', 'pres.3s', 'se gradúa'],
  // irregular yo, preterites, futures, participles, commands
  ['tener', 'pres.1s', 'tengo'], ['tener', 'pres.2s', 'tienes'], ['tener', 'pret.1s', 'tuve'], ['tener', 'pret.3s', 'tuvo'], ['tener', 'fut.1s', 'tendré'], ['tener', 'subj.1p', 'tengamos'], ['tener', 'imp.tu', 'ten'], ['tener', 'isubj.1s', 'tuviera'],
  ['estar', 'pres.1s', 'estoy'], ['estar', 'pret.1s', 'estuve'], ['estar', 'subj.3s', 'esté'], ['estar', 'pres.3p', 'están'],
  ['hacer', 'pres.1s', 'hago'], ['hacer', 'pret.1s', 'hice'], ['hacer', 'pret.3s', 'hizo'], ['hacer', 'fut.1s', 'haré'], ['hacer', 'part', 'hecho'], ['hacer', 'imp.tu', 'haz'], ['hacer', 'subj.3s', 'haga'], ['hacer', 'cond.3s', 'haría'],
  ['decir', 'pres.1s', 'digo'], ['decir', 'pres.3s', 'dice'], ['decir', 'pret.1s', 'dije'], ['decir', 'pret.3p', 'dijeron'], ['decir', 'fut.1s', 'diré'], ['decir', 'part', 'dicho'], ['decir', 'ger', 'diciendo'], ['decir', 'imp.tu', 'di'], ['decir', 'isubj.3s', 'dijera'],
  ['poder', 'pres.1s', 'puedo'], ['poder', 'pret.1s', 'pude'], ['poder', 'fut.1s', 'podré'], ['poder', 'cond.3s', 'podría'], ['poder', 'ger', 'pudiendo'],
  ['poner', 'pres.1s', 'pongo'], ['poner', 'pret.1s', 'puse'], ['poner', 'fut.1s', 'pondré'], ['poner', 'part', 'puesto'], ['poner', 'imp.tu', 'pon'],
  ['ponerse', 'imp.ud', 'póngase'], ['ponerse', 'imp.tu', 'ponte'], ['ponerse', 'pres.1s', 'me pongo'],
  ['venir', 'pres.1s', 'vengo'], ['venir', 'pres.3s', 'viene'], ['venir', 'pret.1s', 'vine'], ['venir', 'pret.3s', 'vino'], ['venir', 'fut.1s', 'vendré'], ['venir', 'imp.tu', 'ven'], ['venir', 'ger', 'viniendo'],
  ['querer', 'pres.1s', 'quiero'], ['querer', 'pret.1s', 'quise'], ['querer', 'pret.3s', 'quiso'], ['querer', 'fut.1s', 'querré'],
  ['saber', 'pres.1s', 'sé'], ['saber', 'pret.1s', 'supe'], ['saber', 'fut.1s', 'sabré'], ['saber', 'subj.3s', 'sepa'],
  ['traer', 'pres.1s', 'traigo'], ['traer', 'pret.1s', 'traje'], ['traer', 'pret.3p', 'trajeron'], ['traer', 'ger', 'trayendo'], ['traer', 'part', 'traído'],
  ['salir', 'pres.1s', 'salgo'], ['salir', 'fut.1s', 'saldré'], ['salir', 'imp.tu', 'sal'], ['salir', 'pret.3s', 'salió'],
  ['ser', 'pres.1s', 'soy'], ['ser', 'pres.2s', 'eres'], ['ser', 'pret.1s', 'fui'], ['ser', 'impf.1p', 'éramos'], ['ser', 'subj.3s', 'sea'], ['ser', 'imp.tu', 'sé'], ['ser', 'isubj.3s', 'fuera'],
  ['ir', 'pres.1s', 'voy'], ['ir', 'pret.3s', 'fue'], ['ir', 'impf.3s', 'iba'], ['ir', 'subj.3s', 'vaya'], ['ir', 'imp.tu', 've'], ['ir', 'ger', 'yendo'], ['ir', 'fut.1s', 'iré'],
  ['irse', 'imp.tu', 'vete'], ['irse', 'imp.ud', 'váyase'], ['irse', 'neg.tu', 'no te vayas'], ['irse', 'pret.3s', 'se fue'],
  ['haber', 'pres.3s', 'ha'], ['haber', 'pres.1s', 'he'], ['haber', 'pret.3s', 'hubo'], ['haber', 'fut.3s', 'habrá'], ['haber', 'subj.3s', 'haya'],
  ['dar', 'pres.1s', 'doy'], ['dar', 'pret.1s', 'di'], ['dar', 'pret.3s', 'dio'], ['dar', 'subj.3s', 'dé'], ['dar', 'imp.ud', 'dé'], ['dar', 'isubj.1s', 'diera'],
  ['ver', 'pres.1s', 'veo'], ['ver', 'pret.1s', 'vi'], ['ver', 'pret.3s', 'vio'], ['ver', 'impf.1s', 'veía'], ['ver', 'part', 'visto'], ['ver', 'subj.3s', 'vea'],
  ['escribir', 'part', 'escrito'], ['describir', 'part', 'descrito'], ['abrir', 'part', 'abierto'], ['cubrir', 'part', 'cubierto'], ['descubrir', 'part', 'descubierto'],
  ['romper', 'part', 'roto'], ['resolver', 'part', 'resuelto'], ['devolver', 'part', 'devuelto'], ['morir', 'part', 'muerto'], ['morir', 'pret.3s', 'murió'], ['morir', 'ger', 'muriendo'],
  ['mantener', 'pres.1s', 'mantengo'], ['mantener', 'pres.3s', 'mantiene'], ['mantener', 'pret.3s', 'mantuvo'], ['mantener', 'imp.tu', 'mantén'], ['mantener', 'fut.1s', 'mantendré'],
  ['obtener', 'pret.1s', 'obtuve'], ['sostener', 'imp.ud', 'sostenga'], ['suponer', 'pret.1s', 'supuse'], ['suponer', 'part', 'supuesto'], ['proponer', 'pres.1s', 'propongo'],
  ['prevenir', 'pret.3s', 'previno'], ['prevenir', 'pres.3s', 'previene'], ['distraerse', 'pres.1s', 'me distraigo'], ['distraerse', 'pret.3s', 'se distrajo'],
  ['andar', 'pret.1s', 'anduve'], ['valer', 'pres.1s', 'valgo'], ['valer', 'fut.3s', 'valdrá'],
  // reflexives and pronoun placement
  ['acostarse', 'pres.1s', 'me acuesto'], ['acostarse', 'imp.tu', 'acuéstate'], ['acostarse', 'imp.ud', 'acuéstese'], ['acostarse', 'neg.ud', 'no se acueste'], ['acostarse', 'ger', 'acostándose'],
  ['levantarse', 'pres.3s', 'se levanta'], ['levantarse', 'imp.ud', 'levántese'], ['levantarse', 'pret.1s', 'me levanté'],
  ['preocuparse', 'neg.ud', 'no se preocupe'], ['preocuparse', 'neg.tu', 'no te preocupes'], ['preocuparse', 'imp.ud', 'preocúpese'], ['preocuparse', 'impf.1s', 'me preocupaba'],
  ['dormirse', 'pret.3s', 'se durmió'], ['dormirse', 'imp.tu', 'duérmete'], ['dormirse', 'pres.1s', 'me duermo'], ['dormirse', 'perf.1p', 'nos hemos dormido'],
  ['sentarse', 'imp.ud', 'siéntese'], ['sentarse', 'imp.tu', 'siéntate'], ['sentarse', 'pres.1s', 'me siento'], ['calmarse', 'imp.ud', 'cálmese'], ['calmarse', 'imp.tu', 'cálmate'],
  ['quedarse', 'imp.ud', 'quédese'], ['despertarse', 'pres.3s', 'se despierta'], ['bañarse', 'perf.1s', 'me he bañado'], ['llamarse', 'pres.3s', 'se llama'],
  // fixed tails
  ['dejar de', 'pret.1s', 'dejé de'], ['dejar de', 'neg.ud', 'no deje de'], ['dar de alta', 'fut.1p', 'daremos de alta'], ['dar de alta', 'pret.3p', 'dieron de alta']
];
let checked = 0;
for (const [inf, id, want] of X) {
  const got = formsOf(inf)[id];
  checked++;
  if (got !== want) err(inf + ' ' + id + ': expected "' + want + '", got "' + got + '"');
}
if (X.length < 150) err('only ' + X.length + ' expected forms');

// Every verb builds every non-hidden form.
const HIDDEN = ['imp.ud', 'imp.tu', 'imp.uds', 'neg.ud', 'neg.tu', 'subj.1p'];
const SAFE = ['suicidarse', 'matarse', 'morir', 'morirse', 'lastimarse', 'cortarse', 'hacerse daño', 'pegar', 'golpear'];
const CMD = ['imp.ud', 'imp.tu', 'imp.uds', 'neg.ud', 'neg.tu'];
const ids = C.FORMS.map((f) => f.id);
let nForms = 0;
const seenInf = new Set();
V.forEach((v, i) => {
  const tag = '#' + i + ' ' + v.inf;
  if (seenInf.has(v.inf)) err(tag + ': duplicate'); seenInf.add(v.inf);
  if (!v.inf || !v.en || !['A1', 'A2', 'B1', 'B2', 'C'].includes(v.lv)) err(tag + ': bad inf / en / lv');
  if (v.lv === 'C' && !v.clin) err(tag + ': clinical set without clin');
  if (!Array.isArray(v.ex) || v.ex.length !== 2 || v.ex.some((e) => !Array.isArray(e) || e.length !== 2 || !e[0] || !e[1])) err(tag + ': needs two [spanish, english] examples');
  (v.ex || []).forEach(([es]) => { if (/\?$/.test(es) && !/¿/.test(es)) err(tag + ': missing ¿ in ' + es); if (/!$/.test(es) && !/¡/.test(es)) err(tag + ': missing ¡ in ' + es); });
  const f = C.verb(v.inf, v);
  if (!f) { err(tag + ': no forms'); return; }
  const hidden = C.HIDE[v.inf] || [];
  for (const id of ids) {
    const val = f[id];
    const person = (id.split('.')[1] || '');
    const expectAbsent = hidden.includes(id) || (v.p3 && ((person && !['3s', '3p'].includes(person)) || /^(imp|neg)\./.test(id))) || ((v.noCmd || (C.IRR[v.inf.replace(/se$/, '')] || {}).noCmd) && CMD.includes(id)) || (v.inf === 'haber' && /^perf\./.test(id));
    if (expectAbsent) { if (val != null) err(tag + ': ' + id + ' should be absent, got ' + val); continue; }
    if (typeof val !== 'string' || !val) { err(tag + ': ' + id + ' missing'); continue; }
    nForms++;
    if (/undefined|null|NaN/.test(val)) err(tag + ': ' + id + ' = ' + val);
    if (/\s{2,}|^\s|\s$/.test(val)) err(tag + ': spacing in ' + id + ' = "' + val + '"');
    const w = val.split(' ');
    w.forEach((x) => {
      if (/([aeiouáéíóú])\1\1/.test(x)) err(tag + ': tripled vowel in ' + id + ' = ' + val);
      if (/(ii|uu|áá|éé|íí|óó|úú|íi|ií|yy|zz|jj|gg|qq|hh)/.test(x)) err(tag + ': bad join in ' + id + ' = ' + val);
      if ((x.match(/[áéíóú]/g) || []).length > 1) err(tag + ': two accents in ' + id + ' = ' + val);
      if (/q[^u]|q$|z[ei]/.test(x)) err(tag + ': spelling (qu / ce, ci) in ' + id + ' = ' + val);
    });
    if (/^(imp)\./.test(id) && v.inf.endsWith('se') && !/(se|te)( |$)/.test(val)) err(tag + ': reflexive command without attached pronoun: ' + val);
  }
  if (SAFE.includes(v.inf)) HIDDEN.forEach((id) => { if (f[id] != null) err(tag + ': SAFETY ' + id + ' is built'); });
});
// Safety list in the engine covers every required verb, even ones not in the data.
SAFE.forEach((inf) => { const h = C.HIDE[inf] || []; HIDDEN.forEach((id) => { if (!h.includes(id)) err('HIDE for ' + inf + ' lacks ' + id); }); const f = C.verb(inf, inf === 'morir' || inf === 'morirse' ? { st: 'ue' } : {}); HIDDEN.forEach((id) => { if (f && f[id] != null) err('SAFETY ' + inf + ' builds ' + id); }); });

// Forbidden strings (brief).
const txt = fs.readFileSync(path.join(root, 'js/data/verbs.js'), 'utf8') + fs.readFileSync(path.join(root, 'js/conjugate.js'), 'utf8') + (fs.existsSync(path.join(root, 'js/verbs.js')) ? fs.readFileSync(path.join(root, 'js/verbs.js'), 'utf8') : '');
[/\bpo\b/, /\bkayo\b/, /\bopo\b/, /\bninyo\b/, /\bDok\b/, /Tagalog/, /Filipino/, /Mariveles/, /NCMH/, /1553/, /barangay/i, /shabu/i, /betel/i, /MMH-/, /\bAling\b/, /\bMang\b/, /《/, /[぀-ヿ一-鿿]/, /JLPT/, /\bN[2-5]\b/, /romaji/i, /furigana/i, /\bJA\./, /\b(loco|adicto|drogadicto)\b/i]
  .forEach((re) => { if (re.test(txt)) err('forbidden string ' + re); });

if (errs.length) { console.error(errs.join('\n')); console.error('FAIL ' + errs.length + ' problem(s); ' + checked + ' expectations checked'); process.exit(1); }
console.log('VERBS OK ' + V.length + ' ' + nForms + ' (' + checked + ' hand-written expectations)');
