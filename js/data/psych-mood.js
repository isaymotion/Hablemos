/* Mood episode checker: DSM-5-TR major depressive, manic and hypomanic episode criteria in Spanish, with
   the PHQ-9 and the Mood Disorder Questionnaire (MDQ) as add-on screens. Hablemos (Spanish).
   STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Criteria are paraphrased from the manual. The PHQ-9 and MDQ items below are INTERVIEW PARAPHRASES (how a
   clinician would ask each item in conversation, usted), NOT the published Spanish instruments; for a documented
   score administer the published Spanish PHQ-9 (phqscreeners.com) or the validated Spanish MDQ (Sanchez-Moreno
   et al. 2008). Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = Spanish (usted); items also carry
   `c` = tú form, used only to build the phrase section. `en` = English meaning, `n` = clinician note.
   Lines with R('sectionId:index') reuse phrases from PSYCH_SECTIONS. Nothing here stores patient information. */
(function () {
  const ref = (r) => { const [sid, i] = r.split(':'); const s = (window.PSYCH_SECTIONS || []).find((x) => x.id === sid); return s ? s.phrases[+i] : null; };
  const R = (r, extra) => { const p = ref(r); return Object.assign({ tl: p ? p.f : '', en: p ? p.en.replace(/^[A-Z] · /, '') : '', n: p ? p.n : '' }, extra || {}); };
  const G = 'Say the feminine form for a woman: ';

  /* Major depressive episode: A1–A2 are the gate (at least one), A1–A9 need five, two weeks, nearly every day. */
  const MDE = [
    { n: 1, gate: true, b: 'Mood', en: 'Depressed mood most of the day, nearly every day', q: R('depression:1') },
    { n: 2, gate: true, b: 'Interest', en: 'Markedly diminished interest or pleasure in almost all activities', q: R('depression:2') },
    { n: 3, b: 'A', en: 'Significant weight or appetite change', q: R('depression:11') },
    { n: 4, b: 'S', en: 'Insomnia or hypersomnia nearly every day', q: R('depression:5', { n: 'Sleep: insomnia or hypersomnia. Early waking suggests melancholic features. ' + G + 'dormida.' }) },
    { n: 5, b: 'P', en: 'Psychomotor agitation or retardation, observable by others', q: R('depression:12', { n: 'Psychomotor retardation or agitation, observable by others. ' + G + 'inquieta.' }) },
    { n: 6, b: 'E', en: 'Fatigue or loss of energy', q: R('depression:9', { n: 'Energy. ' + G + 'cansada.' }) },
    { n: 7, b: 'G', en: 'Worthlessness or excessive or inappropriate guilt', q: R('depression:8', { n: 'Guilt or worthlessness. If the guilt is fixed and out of proportion (an unforgivable sin, having ruined the family), ask about psychotic features. ' + G + 'a sí misma.' }) },
    { n: 8, b: 'C', en: 'Diminished ability to think or concentrate, or indecisiveness', q: R('depression:10') },
    { n: 9, b: 'S', en: 'Recurrent thoughts of death, suicidal ideation, plan, or attempt', q: R('depression:13'), risk: true }
  ];
  /* Manic or hypomanic episode: A is the gate (elevated/expansive or irritable mood with increased energy); B1–B7 need three (four if only irritable). */
  const MANIC = [
    { n: 1, b: 'D', en: 'Distractibility', q: R('mania:3') },
    { n: 2, b: 'I', en: 'Excessive involvement in activities with painful consequences', q: R('mania:4') },
    { n: 3, b: 'G', en: 'Inflated self-esteem or grandiosity', q: R('mania:5') },
    { n: 4, b: 'F', en: 'Flight of ideas or racing thoughts', q: R('mania:6') },
    { n: 5, b: 'A', en: 'Increase in goal-directed activity or psychomotor agitation', q: R('mania:7', { n: 'Activity: goal-directed activity or psychomotor agitation. ' + G + 'activa, quieta.' }) },
    { n: 6, b: 'S', en: 'Decreased need for sleep', q: R('mania:8', { n: 'Sleep: decreased need, not insomnia. Ask "¿Cuántas horas?" and whether they felt rested. ' + G + 'cansada.' }) },
    { n: 7, b: 'T', en: 'More talkative than usual or pressure to keep talking', q: R('mania:9', { n: 'Talkativeness or pressured speech. ' + G + 'interrumpirla.' }) }
  ];
  const MANIC_GATE = [
    { id: 'elevated', en: 'Elevated or expansive mood', q: R('mania:0', { n: 'Gate · elevated or expansive mood. ' + G + 'eufórica.' }) },
    { id: 'irritable', en: 'Irritable mood only', q: R('mania:1') }
  ];
  const EXTRA = {
    mde: [R('depression:16'), R('depression:17'), R('depression:18', { n: 'Bipolar screen. Ask every depressed patient before prescribing an antidepressant; if yes, go to the DIGFAST section. ' + G + 'acelerada.' }), R('depression:19'), R('depression:20', { n: 'Mixed features: three or more manic symptoms during the depressive episode. ' + G + 'acelerada, inquieta.' }), R('depression:21'), R('depression:22')],
    manic: [R('mania:2'), R('mania:10'), R('mania:11', { n: 'Hospitalization or marked impairment makes it mania regardless of duration. "Internar" = to admit; "ingresar" in Spain. ' + G + 'la internaron.' }), R('mania:12'), R('mania:13'), R('mania:14')]
  };

  /* PHQ-9 as interview paraphrases (usted in tl, tú in c). Stem: over the last two weeks, how often… 0 not at all, 1 several days, 2 more than half the days, 3 nearly every day. */
  const PHQ9 = {
    title: 'PHQ-9 (depression severity)',
    stem: { tl: 'Le voy a preguntar por algunas cosas de las últimas dos semanas. Para cada una, dígame si no le ha pasado, si le ha pasado varios días, más de la mitad de los días, o casi todos los días.', c: 'Te voy a preguntar por algunas cosas de las últimas dos semanas. Para cada una, dime si no te ha pasado, si te ha pasado varios días, más de la mitad de los días, o casi todos los días.', en: 'I am going to ask you about some things from the last two weeks. For each one, tell me whether it has not happened, happened several days, more than half the days, or nearly every day.' },
    opts: [['Nunca', 0], ['Varios días', 1], ['Más de la mitad de los días', 2], ['Casi todos los días', 3]],
    items: [
      { tl: 'En estas dos semanas, ¿ha tenido poco interés o pocas ganas de hacer las cosas?', c: 'En estas dos semanas, ¿has tenido poco interés o pocas ganas de hacer las cosas?', en: 'In these two weeks, have you had little interest or little desire to do things?' },
      { tl: '¿Se ha sentido triste, decaído o sin esperanza?', c: '¿Te has sentido triste, decaído o sin esperanza?', en: 'Have you felt sad, down, or hopeless?', n: G + 'decaída.' },
      { tl: '¿Le ha costado dormirse o seguir dormido, o ha estado durmiendo demasiado?', c: '¿Te ha costado dormirte o seguir dormido, o has estado durmiendo demasiado?', en: 'Has it been hard to fall asleep or stay asleep, or have you been sleeping too much?', n: G + 'dormida.' },
      { tl: '¿Se ha sentido cansado o con poca energía?', c: '¿Te has sentido cansado o con poca energía?', en: 'Have you felt tired or had little energy?', n: G + 'cansada.' },
      { tl: '¿Ha tenido poco apetito, o ha estado comiendo de más?', c: '¿Has tenido poco apetito, o has estado comiendo de más?', en: 'Have you had little appetite, or have you been overeating?' },
      { tl: '¿Se ha sentido mal consigo mismo, como que ha fallado o que le ha quedado mal a su familia o a sí mismo?', c: '¿Te has sentido mal contigo mismo, como que has fallado o que le has quedado mal a tu familia o a ti mismo?', en: 'Have you felt bad about yourself, as if you have failed or let your family or yourself down?', n: G + 'consigo misma, a sí misma. "Quedarle mal a alguien" = to let someone down (Mexican); "decepcionar" is understood everywhere.' },
      { tl: '¿Le ha costado concentrarse, por ejemplo para leer o para ver la televisión?', c: '¿Te ha costado concentrarte, por ejemplo para leer o para ver la tele?', en: 'Has it been hard to concentrate, for example to read or to watch television?' },
      { tl: '¿Ha notado, o le han dicho, que se mueve o habla más despacio de lo normal? ¿O al contrario, que está tan inquieto que no puede quedarse en un solo lugar?', c: '¿Has notado, o te han dicho, que te mueves o hablas más despacio de lo normal? ¿O al contrario, que estás tan inquieto que no puedes quedarte en un solo lugar?', en: 'Have you noticed, or been told, that you move or speak more slowly than usual? Or the opposite, that you are so restless you cannot stay in one place?', n: G + 'inquieta.' },
      { tl: '¿Ha pensado que estaría mejor muerto, o ha pensado en hacerse daño?', c: '¿Has pensado que estarías mejor muerto, o has pensado en hacerte daño?', en: 'Have you thought that you would be better off dead, or thought of hurting yourself?', n: 'If yes, go to the Suicide risk section now. ' + G + 'muerta.', risk: true }
    ],
    impairment: { tl: 'Si algo de esto le ha pasado, ¿qué tanto le ha dificultado trabajar, hacer las cosas de la casa o llevarse bien con los demás?', c: 'Si algo de esto te ha pasado, ¿qué tanto te ha dificultado trabajar, hacer las cosas de la casa o llevarte bien con los demás?', en: 'If any of this has happened to you, how much has it made it harder to work, take care of things at home, or get along with other people?', opts: ['Nada difícil', 'Algo difícil', 'Muy difícil', 'Extremadamente difícil'] },
    bands: (n) => (n >= 20 ? 'severe (20–27)' : n >= 15 ? 'moderately severe (15–19)' : n >= 10 ? 'moderate (10–14)' : n >= 5 ? 'mild (5–9)' : 'minimal (0–4)'),
    note: 'Interview paraphrases, not the published instrument. For a documented score administer the published Spanish PHQ-9 (free; Spanish for the US at phqscreeners.com). Total 0–27: minimal 0–4, mild 5–9, moderate 10–14, moderately severe 15–19, severe 20–27. A score of 10 or more is the usual cut-off for probable major depression; item 9 positive always needs a suicide risk assessment. Severity scale, not a diagnosis.'
  };

  /* MDQ as interview paraphrases. 13 yes/no items; positive = 7 or more yes AND several at the same time AND moderate or serious problem. */
  const MDQ = {
    title: 'MDQ (bipolar screen)',
    stem: { tl: 'Quiero preguntarle si alguna vez ha tenido una época en que no se sentía como usted mismo, y en la que…', c: 'Quiero preguntarte si alguna vez has tenido una época en que no te sentías como tú mismo, y en la que…', en: 'I want to ask whether there has ever been a period when you did not feel like your usual self, and in which…', n: G + 'usted misma / tú misma.' },
    items: [
      { tl: '…se sentía tan bien o tan acelerado que otras personas pensaron que usted no era el de siempre, o que eso le trajo problemas?', c: '…te sentías tan bien o tan acelerado que otras personas pensaron que no eras el de siempre, o que eso te trajo problemas?', en: '…you felt so good or so hyper that other people thought you were not your usual self, or it got you into trouble?', n: G + 'acelerada, la de siempre.' },
      { tl: '…estaba tan irritable que les gritaba a las personas o empezaba peleas o discusiones?', c: '…estabas tan irritable que les gritabas a las personas o empezabas peleas o discusiones?', en: '…you were so irritable that you shouted at people or started fights or arguments?' },
      { tl: '…se sentía mucho más seguro de sí mismo que de costumbre?', c: '…te sentías mucho más seguro de ti mismo que de costumbre?', en: '…you felt much more self-confident than usual?', n: G + 'segura de sí misma.' },
      { tl: '…dormía mucho menos que de costumbre y de verdad no le hacía falta?', c: '…dormías mucho menos que de costumbre y de verdad no te hacía falta?', en: '…you slept much less than usual and really did not miss it?' },
      { tl: '…hablaba mucho más, o más rápido, que de costumbre?', c: '…hablabas mucho más, o más rápido, que de costumbre?', en: '…you talked much more, or faster, than usual?' },
      { tl: '…los pensamientos le pasaban muy rápido por la cabeza, o no podía frenar la mente?', c: '…los pensamientos te pasaban muy rápido por la cabeza, o no podías frenar la mente?', en: '…thoughts went through your head very fast, or you could not slow your mind down?' },
      { tl: '…se distraía tan fácilmente con lo que había a su alrededor que le costaba concentrarse?', c: '…te distraías tan fácilmente con lo que había a tu alrededor que te costaba concentrarte?', en: '…you were so easily distracted by what was around you that it was hard to concentrate?' },
      { tl: '…tenía mucha más energía que de costumbre?', c: '…tenías mucha más energía que de costumbre?', en: '…you had much more energy than usual?' },
      { tl: '…estaba mucho más activo, o hacía muchas más cosas que de costumbre?', c: '…estabas mucho más activo, o hacías muchas más cosas que de costumbre?', en: '…you were much more active, or did many more things than usual?', n: G + 'activa.' },
      { tl: '…era mucho más sociable o extrovertido que de costumbre, por ejemplo, llamaba a sus amigos a medianoche?', c: '…eras mucho más sociable o extrovertido que de costumbre, por ejemplo, llamabas a tus amigos a medianoche?', en: '…you were much more sociable or outgoing than usual, for example calling your friends in the middle of the night?', n: G + 'extrovertida.' },
      { tl: '…tenía mucho más interés en el sexo que de costumbre?', c: '…tenías mucho más interés en el sexo que de costumbre?', en: '…you were much more interested in sex than usual?' },
      { tl: '…hizo cosas que no eran típicas de usted, o que otras personas pudieron ver como exageradas, imprudentes o peligrosas?', c: '…hiciste cosas que no eran típicas de ti, o que otras personas pudieron ver como exageradas, imprudentes o peligrosas?', en: '…you did things that were not typical of you, or that other people might have seen as excessive, foolish, or risky?' },
      { tl: '…gastó dinero de tal manera que usted o su familia tuvieron problemas?', c: '…gastaste dinero de tal manera que tú o tu familia tuvieron problemas?', en: '…you spent money in a way that got you or your family into trouble?' }
    ],
    same: { tl: 'Si contestó que sí a más de una: ¿varias de estas cosas le han pasado en la misma época, al mismo tiempo?', c: 'Si contestaste que sí a más de una: ¿varias de estas cosas te han pasado en la misma época, al mismo tiempo?', en: 'If you answered yes to more than one: have several of these happened to you during the same period, at the same time?' },
    problem: { tl: '¿Qué tanto problema le causaron estas cosas, por ejemplo para trabajar, con la familia, con el dinero o con la ley?', c: '¿Qué tanto problema te causaron estas cosas, por ejemplo para trabajar, con la familia, con el dinero o con la ley?', en: 'How much of a problem did these things cause you, for example with work, family, money, or the law?', opts: ['Ningún problema', 'Un problema menor', 'Un problema moderado', 'Un problema serio'] },
    note: 'Interview paraphrases, not the published instrument. For a documented score administer the validated Spanish MDQ (Sanchez-Moreno et al. 2008; © University of Texas Medical Branch, free for clinical and educational use). Positive screen: 7 or more yes, several in the same period, and a moderate or serious problem. A positive MDQ is not a diagnosis of bipolar disorder; it means take a careful history of past episodes before starting an antidepressant.'
  };

  window.PSYCH_MOOD = { mde: MDE, manic: MANIC, manicGate: MANIC_GATE, extra: EXTRA, phq9: PHQ9, mdq: MDQ };

  /* Publish the paraphrases as a phrase section, so they get search, flashcards, the handout and audio. */
  const ph = (en, it, n) => { const o = { en: en, f: it.tl, c: it.c }; const note = [n, it.n].filter(Boolean).join(' '); if (note) o.n = note; return o; };
  const sec = { id: 'mood-screens', group: 'Interview', title: 'Depression and bipolar screens in Spanish (paraphrases)', draft: true,
    intro: 'Interview paraphrases of the nine PHQ-9 items with the four frequency choices, and of the thirteen MDQ items with the same-period and problem questions. They show how a clinician asks each item conversationally; they are not the published instruments and give no documented score. The checker in Psychiatry → Mood episode scores them for teaching. For a score that goes in the chart administer the published Spanish PHQ-9 (Kroenke, Spitzer and Williams 2001; free, Spanish for the US at phqscreeners.com) or the validated Spanish MDQ (Hirschfeld et al. 2000; Spanish validation Sanchez-Moreno et al. 2008; © University of Texas Medical Branch, free for clinical and educational use). Both are screens, not diagnoses.',
    phrases: [ph(PHQ9.stem.en, PHQ9.stem, PHQ9.opts.map((o) => o[0]).join(' / '))]
      .concat(PHQ9.items.map((it, i) => ph('PHQ-9 ' + (i + 1) + '. ' + it.en, it)))
      .concat([ph(PHQ9.impairment.en, PHQ9.impairment, PHQ9.impairment.opts.join(' / '))])
      .concat([ph(MDQ.stem.en, MDQ.stem)])
      .concat(MDQ.items.map((it, i) => ph('MDQ ' + (i + 1) + '. ' + it.en, it)))
      .concat([ph(MDQ.same.en, MDQ.same), ph(MDQ.problem.en, MDQ.problem, MDQ.problem.opts.join(' / '))]) };
  if (window.PSYCH_SECTIONS) PSYCH_SECTIONS.push(sec);
})();
