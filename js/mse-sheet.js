/* MSE interviewer sheet view: the two-page Spanish MSE question sheet (OPD and wards), on screen and printable. */
(function () {
  const { esc, icons } = App;
  const V = App.views;
  const S = () => App.state;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const D = () => window.PSYCH_MSE_SHEET;

  function ref(r) {
    const [sid, i] = r.split(':');
    const s = PSYCH_SECTIONS.find((x) => x.id === sid);
    return s && s.phrases[+i];
  }
  function item(it) {
    if (it.r) { const p = ref(it.r); return p ? { tl: p.f, en: p.en.replace(/^[A-Z] · /, ''), ut: true, b: it.b, arrow: it.arrow } : null; }
    return it;
  }
  const UT = '<span class="ms-ut" title="Phrase from the app">HB</span>';

  /* Pages 3 and 4: substance use screening and brief intervention, built from PSYCH_SUD so the wording stays in one place.
     Alcohol is the worked example; titles and notes are Spanish with English glosses, like the MSE pages. */
  function sudSections() {
    const d = window.PSYCH_SUD; if (!d || !(d.substances || []).length) return [];
    const sub = (id) => d.substances.find((x) => x.id === id);
    const alc = sub('alcohol'), tob = sub('tobacco'), can = sub('cannabis'), meth = sub('meth'), coc = sub('cocaine'), opi = sub('opioids'), oth = sub('other'), gam = sub('gambling');
    const fillEn = (t, sb) => (d.fillEn ? d.fillEn(t, sb) : String(t).replace(/\{sa\}|\{s\}/g, sb.en).replace(/\{u\}/g, sb.unit));
    const fill = (p, sb) => ({ tl: d.fill(p.tl, sb), en: fillEn(p.en, sb), ut: true });
    const scr = (items) => items.map((it) => ({ tl: it.tl, en: it.en, ut: true, sub: it.opts.map((o) => o[1] + ' ' + o[0]).join(' · ') }));
    const mi = (stepId, idx) => idx.map((i) => fill(d.mi.find((x) => x.id === stepId).lines[i], alc));
    const psy = (sb) => sb.psychoed.map((p) => fill(p, sb));
    return [
      { id: 'sud-open', title: 'Alcohol, drogas, apuestas: apertura', en: 'Substance use screen', ut: true, blocks: [
        { items: d.open.slice(0, 3).map((p) => fill(p, alc)) },
        { h: 'Otras drogas', items: [fill(meth.ask[0], meth), fill(opi.ask[0], opi), fill(oth.ask[0], oth)] } ],
        note: 'Anote: sustancia, gravedad, especificador, código. Confidencial y para el tratamiento; no prometa que nunca se comparte con la policía o inmigración. El screener de la app (Psychiatry → Substance use) hace el conteo.' },
      { id: 'sud-crit', title: 'Los 11 criterios (DSM-5-TR)', en: 'Past 12 months · 2+ = disorder', ut: true, blocks: [
        { items: d.criteria.map((c) => Object.assign(fill(c, alc), { b: String(c.n) })) } ],
        note: d.rule(alc) + '. Cambie "alcohol" por tabaco, marihuana, metanfetamina, cocaína, opioides o el nombre de la droga. La tolerancia y la abstinencia no cuentan para medicamentos tomados según la receta. Remisión: ningún criterio salvo las ganas de consumir durante ≥3 meses (temprana) o ≥12 meses (sostenida).' },
      { id: 'sud-alcohol', title: 'Alcohol', en: 'Alcohol · AUDIT-C', ut: true, blocks: [
        { items: alc.ask.map((p) => fill(p, alc)) },
        { h: 'AUDIT-C (0–12; positivo ≥4 hombres, ≥3 mujeres)', items: scr(d.screens.alcohol.items) } ],
        note: 'Trago estándar (EE. UU.) = 12 oz de cerveza, 5 oz de vino, 1.5 oz de licor; una caguama (32 oz) ≈ 2.5–3 tragos. Consumo diario y abundante, último trago hace 6–48 h → vigilar la abstinencia (temblor, sudor, pulso rápido, confusión, convulsiones).' },
      { id: 'sud-tobacco', title: 'Tabaco y vape', en: 'Tobacco · Fagerström', ut: true, blocks: [
        { items: [fill(tob.ask[0], tob), fill(tob.ask[1], tob)] },
        { h: 'Fagerström (0–10: 0–2 baja, 3–4 baja–moderada, 5–7 moderada, 8–10 alta)', items: scr(d.screens.tobacco.items) } ] },
      { id: 'sud-opioids', title: 'Opioides y fentanilo', en: 'Opioids · overdose · naloxone', ut: true, blocks: [
        { items: opi.ask.slice(1).map((p) => fill(p, opi)) },
        { h: 'Naloxona y tratamiento', items: [fill(opi.psychoed[0], opi), fill(opi.psychoed[2], opi), fill(opi.psychoed[3], opi)] } ],
        note: 'El fentanilo está en casi todas las pastillas y polvos de la calle. Dé o recete naloxona (Narcan) antes de que el paciente se vaya. La buprenorfina (Suboxone) o la metadona reducen las muertes por sobredosis a menos de la mitad; ofrézcalas el mismo día. COWS: Psychiatry → Withdrawal.' },
      { id: 'sud-gambling', title: 'Apuestas', en: 'Gambling disorder · 9 criteria, 4+', ut: true, blocks: [
        { items: [fill(gam.ask[0], gam), fill(gam.ask[2], gam)] },
        { items: d.gambling.map((c) => Object.assign(fill(c, gam), { b: String(c.n) })) } ],
        note: 'Leve 4–5, moderado 6–7, grave 8–9; episódico o persistente; F63.0. Deuda grande → pregunte por suicidio. Autoexclusión, bloqueo de apps y sitios, que alguien de confianza maneje las tarjetas.' },
      { id: 'sud-mi', title: 'Entrevista motivacional', en: 'Brief intervention · OARS', ut: true, blocks: [['permission', [0, 1, 3]], ['reflect', [0, 1, 3]], ['rulers', [0, 1, 3, 4]], ['feedback', [0, 1, 3]], ['plan', [0, 1, 2, 3, 5]], ['notready', [0, 2, 3]], ['close', [0, 1, 2]]].map(([id, idx]) => ({ h: d.mi.find((x) => x.id === id).title, items: mi(id, idx) })),
        note: 'No diga "adicto". Usted escucha; el paciente da las razones. Reglas: pregunte "¿por qué no más bajo?", nunca "¿por qué no más alto?".' },
      { id: 'sud-psy1', title: 'Psicoeducación: alcohol, marihuana, metanfetamina', en: 'Elicit–provide–elicit', ut: true, blocks: [
        { h: 'Alcohol', items: psy(alc) },
        { h: 'Marihuana', items: psy(can) },
        { h: 'Metanfetamina (cristal)', items: psy(meth) } ],
        note: 'Dé solo uno o dos datos, los que apliquen a este paciente, después de pedir permiso.' },
      { id: 'sud-psy2', title: 'Psicoeducación: tabaco, cocaína, apuestas', en: '', ut: true, blocks: [
        { h: 'Tabaco', items: psy(tob) },
        { h: 'Cocaína y crack', items: psy(coc) },
        { h: 'Apuestas', items: psy(gam) } ] },
      { id: 'sud-nurse', title: 'Enfermería: tamizaje y consejo breve', en: 'Nurse script', ut: true, blocks: d.nurse.steps.map((st) => ({ h: st.title, items: st.lines.map((p) => fill(p, alc)) })),
        note: 'Escalate: ' + d.nurse.escalate + ' (Pending nursing review.)' }
    ];
  }

  function renderSection(sec, showEn) {
    const head = '<h2><span>' + esc(sec.title) + '</span><span class="ms-en">' + esc(sec.en || '') + (sec.ut ? ' ' + UT : '') + '</span></h2>';
    if (sec.obs) {
      return '<section class="ms-sec" id="ms-' + sec.id + '">' + head + '<div class="ms-obs">' + sec.obs.map(([k, v]) => '<span><b>' + esc(k) + ':</b> ' + esc(v) + '</span>').join('') + '</div></section>';
    }
    const body = sec.blocks.map((bl) => (bl.h ? '<h3>' + esc(bl.h) + '</h3>' : '') + '<ul>' + bl.items.map(item).filter(Boolean).map((it) =>
      '<li class="' + (it.b ? 'k' : '') + '">' + (it.b ? '<span class="ms-b">' + esc(it.b) + '</span>' : '') + '<span class="ms-tl">' + esc(it.tl) + '</span>' +
      (it.arrow ? ' <span class="ms-arrow">' + esc(it.arrow) + '</span>' : '') + (it.ut && !sec.ut ? ' ' + UT : '') +
      ' ' + App.sayBtn(it.tl) + (it.sub ? '<div class="ms-sub-opts">' + esc(it.sub) + '</div>' : '') + (showEn && it.en ? '<div class="ms-gloss">' + esc(it.en) + '</div>' : '') + '</li>').join('') + '</ul>').join('');
    return '<section class="ms-sec' + (sec.risk ? ' risk' : '') + (sec.ut ? ' ut' : '') + '" id="ms-' + sec.id + '">' + head + body + (sec.note ? '<div class="ms-note">' + esc(sec.note) + '</div>' : '') + '</section>';
  }

  V.mseSheet = (el) => {
    if (!((window.PSYCH_MSE_SHEET || {}).sections || []).length) return App.notYet(el, 'MSE interviewer sheet', 'The printable MSE interviewer sheet', true);
    const d = D();
    const inst = (window.APP_META && APP_META.institution) || {};
    const showEn = !!S().settings.mseSheetEn;
    const byId = {}; d.sections.concat(sudSections()).forEach((s) => (byId[s.id] = s));
    const hasSud = sudSections().length > 0;
    const allPages = hasSud ? d.pages.concat([[['sud-open', 'sud-crit'], ['sud-alcohol', 'sud-tobacco'], ['sud-opioids', 'sud-gambling']], [['sud-mi'], ['sud-psy1'], ['sud-psy2', 'sud-nurse']]]) : d.pages;
    const subs = d.pageSubtitles || [d.subtitle, d.reminder, 'Consumo de sustancias: criterios DSM-5-TR, AUDIT-C, Fagerström, opioides y naloxona, apuestas', 'Intervención breve: entrevista motivacional, psicoeducación, guion de enfermería'];
    const H = window.HOSPITAL || {};
    const pages = allPages.map((cols, pi) =>
      '<div class="ms-page">' +
      '<div class="ms-head"><div><div class="ms-title">' + esc(d.title) + '</div><div class="ms-sub">' + esc(subs[pi] || '') + '</div></div>' +
      '<div class="ms-right"><b>' + esc(inst.name || '') + '</b>' + (H.program ? '<br>' + esc(H.program) : '') + '</div></div>' +
      '<div class="ms-cols">' + cols.map((c) => '<div class="ms-col">' + c.map((id) => renderSection(byId[id], showEn)).join('') + '</div>').join('') + '</div>' +
      '<div class="ms-foot"><span>' + esc(d.disclaimer) + '</span><span>' + esc(d.pageWord || 'Page') + ' ' + (pi + 1) + ' / ' + allPages.length + '</span></div></div>').join('');

    el.innerHTML = crumb([['Psychiatry', '#/psych'], ['MSE interviewer sheet']]) +
      '<span class="eyebrow">Print · clinic and wards</span><h1>MSE interviewer sheet</h1>' +
      '<p class="muted">Every screening question for the ' + LANG.name + ' MSE on two pages: opening, mood, depression, suicide, mania, hallucinations, delusions, violence, substance use, anxiety, cognition, insight and judgment. Formal register (usted); the HB mark shows phrases that are also in the app with audio.</p>' +
      '<div class="ho-controls row" style="margin-bottom:14px">' +
      '<button class="btn sm primary" id="msPrint">Print</button>' +
      '<label class="ho-chk"><input type="checkbox" id="msEn"' + (showEn ? ' checked' : '') + '> Show English</label>' +
      '<a class="btn sm ghost" href="#/psych/handout">Other handouts</a></div>' +
      '<style>@media print { @page { margin: 9mm; } }</style><div class="ms-sheet' + (showEn ? ' ms-en-on' : '') + '">' + pages + '</div>';
    el.querySelector('#msPrint').onclick = () => window.print();
    el.querySelector('#msEn').onchange = (e) => { S().settings.mseSheetEn = e.target.checked; App.save(); V.mseSheet(el); };
  };
})();
