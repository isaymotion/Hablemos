/* Spanish conjugation by rule, with a small table of irregular verbs. DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   ESConj.verb(inf, opts) returns { formId: spanish } for one verb. inf is the citation form from js/data/verbs.js:
   a plain verb (dormir), a reflexive verb (sentirse) or a verb with a fixed tail (dejar de, dar de alta, hacerse daño).
   opts carries the verb's flags from the data file:
     st    stem change in stressed syllables: 'ie' (e→ie), 'ue' (o→ue), 'i' (e→i, -ir only), 'uue' (u→ue: jugar).
           -ir verbs with a stem change also take the weak change (e→i, o→u) in the preterite (él, ellos), the gerund,
           the imperfect subjunctive and the nosotros present subjunctive: sintió, durmiendo, pidiera, sintamos.
     irr   key in IRR for a compound of an irregular verb (mantener → 'tener', distraerse → 'traer'). Verbs whose own
           name is a key (tener, ir…) need no flag.
     acc   -iar / -uar verb that stresses the i or u: confío, continúa, gradúe.
     p3    only third-person forms (doler, gustar: me duele, le gustan).
     noCmd no command forms (marearse, poder: they are not said as commands).
   Form ids: '<tense>.<person>' for tense in pres pret impf perf fut cond subj isubj and person in 1s 2s 3s 1p 3p
   (yo, tú, él/ella/usted, nosotros, ellos/ustedes); imp.ud imp.tu imp.uds (affirmative commands), neg.ud neg.tu
   (negative commands), ger (gerund), part (past participle). Vosotros is left out on purpose (US / Mexican baseline).
   ESConj.FORMS describes every form: { id, label, tense, p, group, level }. */
(function (root) {
  const PERS = ['1s', '2s', '3s', '1p', '3p'];
  const PRON = { '1s': 'me', '2s': 'te', '3s': 'se', '1p': 'nos', '3p': 'se' };
  const SUBJ_PRON = { '1s': 'yo', '2s': 'tú', '3s': 'él, ella, usted', '1p': 'nosotros', '3p': 'ellos, ustedes' };
  const END = {
    pres: { ar: ['o', 'as', 'a', 'amos', 'an'], er: ['o', 'es', 'e', 'emos', 'en'], ir: ['o', 'es', 'e', 'imos', 'en'] },
    pret: { ar: ['é', 'aste', 'ó', 'amos', 'aron'], er: ['í', 'iste', 'ió', 'imos', 'ieron'], ir: ['í', 'iste', 'ió', 'imos', 'ieron'] },
    impf: { ar: ['aba', 'abas', 'aba', 'ábamos', 'aban'], er: ['ía', 'ías', 'ía', 'íamos', 'ían'], ir: ['ía', 'ías', 'ía', 'íamos', 'ían'] },
    subj: { ar: ['e', 'es', 'e', 'emos', 'en'], er: ['a', 'as', 'a', 'amos', 'an'], ir: ['a', 'as', 'a', 'amos', 'an'] },
    fut: ['é', 'ás', 'á', 'emos', 'án'], cond: ['ía', 'ías', 'ía', 'íamos', 'ían'],
    strong: ['e', 'iste', 'o', 'imos', 'ieron']   // tuve, hice, dije… (no written accents)
  };
  const HABER = ['he', 'has', 'ha', 'hemos', 'han'];

  /* Irregular verbs. Arrays are yo, tú, él, nosotros, ellos. yo: irregular yo form; the present subjunctive is built
     from it in every person (tengo → tenga, tengamos) unless subj is given. pret: strong preterite stem or the full
     preterite. fut: future and conditional stem. tu: affirmative tú command. drop: forms that are not used. */
  const IRR = {
    ser: { pres: ['soy', 'eres', 'es', 'somos', 'son'], pret: ['fui', 'fuiste', 'fue', 'fuimos', 'fueron'], impf: ['era', 'eras', 'era', 'éramos', 'eran'], subj: ['sea', 'seas', 'sea', 'seamos', 'sean'], tu: 'sé' },
    estar: { pres: ['estoy', 'estás', 'está', 'estamos', 'están'], pret: 'estuv', subj: ['esté', 'estés', 'esté', 'estemos', 'estén'] },
    ir: { pres: ['voy', 'vas', 'va', 'vamos', 'van'], pret: ['fui', 'fuiste', 'fue', 'fuimos', 'fueron'], impf: ['iba', 'ibas', 'iba', 'íbamos', 'iban'], subj: ['vaya', 'vayas', 'vaya', 'vayamos', 'vayan'], tu: 've', ger: 'yendo' },
    haber: { pres: HABER, pret: 'hub', fut: 'habr', subj: ['haya', 'hayas', 'haya', 'hayamos', 'hayan'], noCmd: true, drop: ['perf'] },
    dar: { yo: 'doy', pret: ['di', 'diste', 'dio', 'dimos', 'dieron'], subj: ['dé', 'des', 'dé', 'demos', 'den'] },
    ver: { yo: 'veo', pret: ['vi', 'viste', 'vio', 'vimos', 'vieron'], impf: ['veía', 'veías', 'veía', 'veíamos', 'veían'], part: 'visto', tu: 've' },
    saber: { yo: 'sé', pret: 'sup', fut: 'sabr', subj: ['sepa', 'sepas', 'sepa', 'sepamos', 'sepan'] },
    'oír': { pres: ['oigo', 'oyes', 'oye', 'oímos', 'oyen'], yo: 'oigo' },
    tener: { yo: 'tengo', st: 'ie', pret: 'tuv', fut: 'tendr', tu: 'ten' },
    venir: { yo: 'vengo', st: 'ie', pret: 'vin', fut: 'vendr', tu: 'ven' },
    decir: { yo: 'digo', st: 'i', pret: 'dij', fut: 'dir', part: 'dicho', tu: 'di' },
    hacer: { yo: 'hago', pret: 'hic', pret3s: 'hizo', fut: 'har', part: 'hecho', tu: 'haz' },
    poner: { yo: 'pongo', pret: 'pus', fut: 'pondr', part: 'puesto', tu: 'pon' },
    salir: { yo: 'salgo', fut: 'saldr', tu: 'sal' },
    poder: { st: 'ue', pret: 'pud', fut: 'podr', ger: 'pudiendo', noCmd: true },
    querer: { st: 'ie', pret: 'quis', fut: 'querr', noCmd: true },
    traer: { yo: 'traigo', pret: 'traj' },
    caer: { yo: 'caigo' },
    valer: { yo: 'valgo', fut: 'valdr', noCmd: true },
    andar: { pret: 'anduv' },
    morir: { st: 'ue', part: 'muerto' }
  };

  /* Safety (decided for Hablemos to mirror HIDE in Hanashimashō's conjugate.js). For these verbs the command forms and
     the nosotros present subjunctive (the "let's" form) are never built, so they are never shown, drilled or recorded.
     The other forms stay: patients say "se quiso matar" or "murió mi papá" and clinicians must understand them.
     Keyed by the citation form. The last three are extra choices of this build: no "inject!", "use!" or "vomit!". */
  const CMD_KEYS = ['imp.ud', 'imp.tu', 'imp.uds', 'neg.ud', 'neg.tu', 'subj.1p'];
  const HIDE = {};
  ['suicidarse', 'matarse', 'matar', 'morir', 'morirse', 'lastimarse', 'lastimar', 'cortarse', 'hacerse daño', 'pegar', 'golpear', 'inyectarse', 'consumir', 'vomitar']
    .forEach((k) => (HIDE[k] = CMD_KEYS));

  const ACC = { a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú' };
  const unAcc = (s) => s.replace(/[áéíóú]/g, (c) => ({ á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u' }[c]));
  const replaceLast = (s, ch, rep) => { const i = s.lastIndexOf(ch); return i < 0 ? s : s.slice(0, i) + rep + s.slice(i + 1); };

  // Stem change in a stressed syllable (strong) or the -ir weak change.
  function changed(stem, st, weak) {
    if (!st) return stem;
    if (st === 'ie') return replaceLast(stem, 'e', weak ? 'i' : 'ie');
    if (st === 'ue') return replaceLast(stem, 'o', weak ? 'u' : 'ue');
    if (st === 'i') return replaceLast(stem, 'e', 'i');
    if (st === 'uue') return weak ? stem : replaceLast(stem, 'u', 'ue');
    return stem;
  }
  // Spelling type of a verb, from its infinitive: keeps the sound of the stem's last consonant.
  function spelling(word, cls, stem, irr) {
    if (cls === 'ar') return /car$/.test(word) ? 'c-qu' : /gar$/.test(word) ? 'g-gu' : /zar$/.test(word) ? 'z-c' : '';
    if (/guir$/.test(word)) return 'gu-g';
    if (/qu[ei]r$/.test(word)) return '';
    if (/g[ei]r$/.test(word)) return 'g-j';
    if (/c[ei]r$/.test(word)) return irr && irr.yo ? '' : /[aeiou]c[ei]r$/.test(word) ? 'c-zc' : 'c-z';
    if (/uir$/.test(word)) return 'uy';
    if (/[aeo]$/.test(stem)) return 'vowel';
    return '';
  }
  // Join a stem and an ending, applying the spelling change.
  function join(stem, end, sp) {
    switch (sp) {
      case 'c-qu': if (/^[eé]/.test(end)) stem = stem.slice(0, -1) + 'qu'; break;
      case 'g-gu': if (/^[eé]/.test(end) && /g$/.test(stem)) stem = stem + 'u'; break;
      case 'z-c': if (/^[eé]/.test(end)) stem = stem.slice(0, -1) + 'c'; break;
      case 'g-j': if (/^[ao]/.test(end) && /g$/.test(stem)) stem = stem.slice(0, -1) + 'j'; break;
      case 'gu-g': if (/^[ao]/.test(end) && /gu$/.test(stem)) stem = stem.slice(0, -1); break;
      case 'c-zc': if (/^[ao]/.test(end) && /c$/.test(stem)) stem = stem.slice(0, -1) + 'zc'; break;
      case 'c-z': if (/^[ao]/.test(end) && /c$/.test(stem)) stem = stem.slice(0, -1) + 'z'; break;
      case 'uy': if (/u$/.test(stem)) { if (/^[aeo]/.test(end)) stem += 'y'; else if (/^i[aeoó]/.test(end)) end = 'y' + end.slice(1); } break;
      case 'vowel': if (/[aeo]$/.test(stem)) { if (/^i[aeoó]/.test(end)) end = 'y' + end.slice(1); else if (/^i/.test(end)) end = 'í' + end.slice(1); } break;
    }
    return stem + end;
  }
  // -iar / -uar verbs that stress the i or u: confí-, continú-.
  const accStem = (stem) => stem.replace(/[iu](?=[^aeiou]*$)/, (c) => ACC[c]);

  /* Vowel nuclei of a word, for placing the written accent when a pronoun is attached (siéntese, acuéstate).
     The u of que, qui, gue, gui is silent; two strong vowels (a, e, o) are separate syllables. */
  const isV = (w, i) => /[aeiouáéíóúü]/.test(w[i]) && !(w[i] === 'u' && /[qg]/.test(w[i - 1] || '') && /[eiéí]/.test(w[i + 1] || ''));
  function nuclei(w) {
    const out = [];
    for (let i = 0; i < w.length; i++) {
      if (!isV(w, i)) continue;
      let j = i;
      while (j + 1 < w.length && isV(w, j + 1) && !(/[aeoáéó]/.test(w[j]) && /[aeoáéó]/.test(w[j + 1])) && !/[íú]/.test(w[j + 1]) && !/[íú]/.test(w[j])) j++;
      out.push([i, j]);
      i = j;
    }
    return out;
  }
  function attach(w, cl) {
    if (/[áéíóú]/.test(w) && nuclei(w).length > 1) return w + cl;
    if (/[áéíóú]/.test(w)) w = unAcc(w);   // dé + se: a monosyllable loses its accent
    const n = nuclei(w);
    if (n.length < 2 || !/[aeiouns]$/.test(w)) return w + cl;
    const [a, b] = n[n.length - 2];
    let k = -1;
    for (let i = a; i <= b; i++) if (/[aeo]/.test(w[i])) k = i;
    if (k < 0) k = b;
    return w.slice(0, k) + ACC[w[k]] + w.slice(k + 1) + cl;
  }

  // Split a citation form into verb, reflexive flag and tail: "hacerse daño" → hacer, true, "daño".
  function parse(inf) {
    const parts = String(inf).trim().split(/\s+/);
    let word = parts[0];
    const tail = parts.slice(1).join(' ');
    const refl = /(ar|er|ir|ír)se$/.test(word);
    if (refl) word = word.slice(0, -2);
    return { word, refl, tail };
  }
  function irrFor(word, key) {
    if (key && IRR[key]) return { e: IRR[key], pre: word.slice(0, word.length - key.length) };
    if (IRR[word]) return { e: IRR[word], pre: '' };
    return null;
  }

  // The bare verb (no pronoun, no tail).
  function bare(word, o) {
    const ir = irrFor(word, o.irr), I = ir ? ir.e : {}, pre = ir ? ir.pre : '';
    const P = (s) => (s == null ? s : Array.isArray(s) ? s.map((x) => pre + x) : pre + s);
    const cls = /ar$/.test(word) ? 'ar' : /er$/.test(word) ? 'er' : 'ir';
    const stem = word.slice(0, -2);
    const st = o.st || I.st || '';
    const sp = spelling(unAcc(word), cls, stem, I);
    const weakIr = cls === 'ir' && !!st;
    const strongStem = o.acc ? accStem(stem) : changed(stem, st, false);
    const weakStem = weakIr ? changed(stem, st, true) : stem;
    const f = {};
    const put = (t, arr) => PERS.forEach((p, i) => { if (arr[i] != null) f[t + '.' + p] = arr[i]; });
    const strongP = (i) => i !== 3;

    // Present
    const pres = I.pres ? P(I.pres) : PERS.map((p, i) => join(strongP(i) ? strongStem : stem, END.pres[cls][i], sp));
    if (I.yo && !I.pres) pres[0] = P(I.yo);
    put('pres', pres);
    // Preterite
    let pret;
    const strongPret = I.pret && !Array.isArray(I.pret) ? P(I.pret) : /ducir$/.test(word) ? stem.slice(0, -1) + 'j' : '';
    if (Array.isArray(I.pret)) pret = P(I.pret);
    else if (strongPret) {
      pret = END.strong.map((e, i) => strongPret + (i === 4 && /j$/.test(strongPret) ? 'eron' : e));
      if (I.pret3s) pret[2] = P(I.pret3s);
    } else pret = PERS.map((p, i) => join(i === 2 || i === 4 ? weakStem : stem, END.pret[cls][i], sp));
    put('pret', pret);
    // Imperfect
    put('impf', I.impf ? P(I.impf) : END.impf[cls].map((e) => stem + e));
    // Future and conditional
    const fs = I.fut ? P(I.fut) : unAcc(word);
    put('fut', END.fut.map((e) => fs + e));
    put('cond', END.cond.map((e) => fs + e));
    // Present subjunctive
    let subj;
    if (I.subj) subj = P(I.subj);
    else if (I.yo) { const ys = P(I.yo).replace(/o$/, ''); subj = END.subj[cls].map((e) => ys + e); }
    else subj = PERS.map((p, i) => join(strongP(i) ? strongStem : weakStem, END.subj[cls][i], sp));
    put('subj', subj);
    // Imperfect subjunctive (-ra), from the ellos preterite: durmieron → durmiera, durmiéramos
    const base = pret[4].replace(/ron$/, '');
    const baseNos = base.replace(/[aeiou](?=[^aeiou]*$)/, (c) => ACC[c]);
    put('isubj', [base + 'ra', base + 'ras', base + 'ra', baseNos + 'ramos', base + 'ran']);
    // Gerund and participle
    f.ger = I.ger ? P(I.ger) : join(weakStem, cls === 'ar' ? 'ando' : 'iendo', sp);
    f.part = I.part ? P(I.part)
      : /olver$/.test(word) ? word.replace(/olver$/, 'uelto')
      : /scribir$/.test(word) ? word.replace(/scribir$/, 'scrito')
      : /brir$/.test(word) ? word.replace(/brir$/, 'bierto')
      : /romper$/.test(word) ? word.replace(/romper$/, 'roto')
      : join(stem, cls === 'ar' ? 'ado' : 'ido', sp === 'vowel' ? sp : '');
    // Present perfect
    if (!(I.drop || []).includes('perf')) put('perf', HABER.map((h) => h + ' ' + f.part));
    // Commands: tú from the él present (or the irregular), the rest from the subjunctive
    if (!o.noCmd && !I.noCmd) {
      let tu = I.tu ? I.tu : pres[2];
      if (I.tu && pre && nuclei(I.tu).length === 1 && /[aeiouns]$/.test(I.tu) && !/[áéíóú]/.test(I.tu)) tu = I.tu.replace(/[aeiou]/, (c) => ACC[c]);
      f['imp.tu'] = I.tu ? pre + tu : tu;
      f['imp.ud'] = subj[2]; f['imp.uds'] = subj[4];
      f['neg.ud'] = subj[2]; f['neg.tu'] = subj[1];
    }
    return f;
  }

  function build(inf, o) {
    o = o || {};
    const { word, refl, tail } = parse(inf);
    const b = bare(word, o);
    if (!b) return null;
    const f = {};
    const T = (s) => (tail ? s + ' ' + tail : s);
    Object.keys(b).forEach((k) => {
      const v = b[k], [t, p] = k.split('.');
      if (o.p3 && p && p !== '3s' && p !== '3p') return;
      if (o.p3 && /^(imp|neg)$/.test(t)) return;
      if (t === 'imp') f[k] = T(refl ? attach(v, k === 'imp.tu' ? 'te' : 'se') : v);
      else if (t === 'neg') f[k] = T('no ' + (refl ? (k === 'neg.tu' ? 'te ' : 'se ') : '') + v);
      else if (k === 'ger') f[k] = T(refl ? attach(v, 'se') : v);
      else if (k === 'part') f[k] = T(v);
      else f[k] = T(refl ? PRON[p] + ' ' + v : v);
    });
    return f;
  }
  function verb(inf, opts) {
    const f = build(inf, opts);
    if (f) (HIDE[String(inf).trim()] || []).forEach((k) => delete f[k]);
    return f;
  }

  // Tense groups (drill filter) and forms.
  const GROUPS = [['present', 'Present'], ['past', 'Past'], ['future', 'Future and conditional'], ['subj', 'Subjunctive'], ['cmd', 'Commands'], ['nonfinite', 'Gerund and participle']];
  const TENSES = [
    ['pres', 'Present', 'presente', 'present', 'A1'], ['pret', 'Preterite', 'pretérito', 'past', 'A2'], ['impf', 'Imperfect', 'imperfecto', 'past', 'A2'],
    ['perf', 'Present perfect', 'pretérito perfecto', 'past', 'A2'], ['fut', 'Future', 'futuro', 'future', 'B1'], ['cond', 'Conditional', 'condicional', 'future', 'B1'],
    ['subj', 'Present subjunctive', 'presente de subjuntivo', 'subj', 'B1'], ['isubj', 'Imperfect subjunctive', 'imperfecto de subjuntivo', 'subj', 'B2']
  ];
  const OTHER = [
    ['imp.ud', 'Command, usted', 'imperativo (usted)', 'cmd', 'A2'], ['imp.tu', 'Command, tú', 'imperativo (tú)', 'cmd', 'A2'], ['imp.uds', 'Command, ustedes', 'imperativo (ustedes)', 'cmd', 'B1'],
    ['neg.ud', 'Negative command, usted', 'imperativo negativo (usted)', 'cmd', 'B1'], ['neg.tu', 'Negative command, tú', 'imperativo negativo (tú)', 'cmd', 'B1'],
    ['ger', 'Gerund', 'gerundio', 'nonfinite', 'A2'], ['part', 'Past participle', 'participio', 'nonfinite', 'A2']
  ];
  const FORMS = [];
  TENSES.forEach(([t, label, es, group, level]) => PERS.forEach((p) => FORMS.push({ id: t + '.' + p, label: label + ' · ' + SUBJ_PRON[p], tenseLabel: label, es, tense: t, p, group, level })));
  OTHER.forEach(([id, label, es, group, level]) => FORMS.push({ id, label, tenseLabel: label, es, tense: id, p: '', group, level }));

  root.ESConj = { verb, FORMS, TENSES, GROUPS, PERSONS: PERS, SUBJ_PRON, HIDE, IRR, attach, parse };
})(typeof window !== 'undefined' ? window : globalThis);
