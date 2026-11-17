/* Lessons, part 5: the thirteen B2 lessons of release 0.7.0.
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Shape: window.LESSONS = (window.LESSONS || []).concat([ { id, level: 'B2', unit, title, summary, body: HTML, quiz: [[question, [4 options], correctIndex, explanation]], draft: true, after: '<lesson id>', review?: true } ]);
   Body HTML subset: <p>, <h3>, <ul><li>, <table><tr><th><td>, <div class="ex"><b>Spanish (plain text, recorded)</b><span>English</span></div>, <div class="note">, <i>, <s>.
   Quizzes have 7 items (12 in review-b2). correctIndex is zero-based.
   Ids are permanent: append only after release. The first lesson follows review-b1, which lives in lessons-4.js. */
window.LESSONS = (window.LESSONS || []).concat([
  {
  id: 'imperfect-subjunctive', level: 'B2', unit: 'Hypotheses and regret', title: `Imperfect subjunctive: quisiera, ojalá tuviera, como si`,
  summary: `Build the -ra forms and use them for polite wishes, wishes contrary to fact, and past requests.`,
  body: `<p>Patients use the imperfect subjunctive to say what they wish were true and is not: "Ojalá tuviera más energía." It also softens your own requests: "Quisiera hacerle unas preguntas." You need to <b>say</b> quisiera and the common frames, and to <b>understand</b> the rest.</p>
<h3>How to build it</h3>
<p>Take the <i>ellos</i> form of the preterite, drop <i>-ron</i>, and add the endings <i>-ra, -ras, -ra, -ramos, -ran</i>. In the <i>nosotros</i> form the stressed vowel gets a written accent. The older <i>-se</i> forms (<i>tuviese</i>) mean the same; you will mostly read them.</p>
<table><tr><th>Infinitive</th><th>Ellos, preterite</th><th>Imperfect subjunctive (yo)</th></tr><tr><td>hablar</td><td>hablaron</td><td>hablara</td></tr><tr><td>tener</td><td>tuvieron</td><td>tuviera</td></tr><tr><td>dormir</td><td>durmieron</td><td>durmiera</td></tr><tr><td>ser, ir</td><td>fueron</td><td>fuera</td></tr><tr><td>decir</td><td>dijeron</td><td>dijera</td></tr><tr><td>oír</td><td>oyeron</td><td>oyera</td></tr><tr><td>poder</td><td>pudieron</td><td>pudiera</td></tr></table>
<p>Nosotros: <i>habláramos, tuviéramos, durmiéramos, fuéramos</i>.</p>
<h3>When it is used</h3>
<ul><li><b>Ojalá + imperfect</b>: a wish about the present that is not true. <i>Ojalá fuera más fácil.</i></li><li><b>Quisiera</b>: a polite "I would like". Safe for you to say.</li><li><b>Como si</b>: "as if", always imperfect (or pluperfect) subjunctive.</li><li><b>After a past main verb</b>: <i>Quería que, Le pedí que, Esperaba que</i> + imperfect.</li></ul>
<div class="ex"><b>Quisiera hacerle unas preguntas.</b><span>I would like to ask you a few questions.</span></div>
<div class="ex"><b>Ojalá tuviera más energía.</b><span>I wish I had more energy.</span></div>
<div class="ex"><b>Ojalá pudiera dormir toda la noche.</b><span>I wish I could sleep all night.</span></div>
<div class="ex"><b>Esperaba que el medicamento funcionara más rápido.</b><span>I was hoping the medicine would work faster.</span></div>
<div class="ex"><b>Siento como si nadie me entendiera.</b><span>I feel as if nobody understood me.</span></div>
<div class="ex"><b>Me gustaría que mis hijos vinieran más seguido.</b><span>I would like my children to visit more often.</span></div>
<div class="ex"><b>Mi esposo me pidió que viniera sola.</b><span>My husband asked me to come alone.</span></div>
<div class="ex"><b>Ella habla como si no me oyera.</b><span>She talks as if she did not hear me.</span></div>
<div class="ex"><b>Le pedí a la enfermera que viniera a las ocho.</b><span>I asked the nurse to come at eight.</span></div>
<div class="ex"><b>Ojalá fuera tan fácil como parece.</b><span>I wish it were as easy as it seems.</span></div>
<div class="note">Clinical tip: <i>Ojalá fuera</i>, <i>Ojalá tuviera</i> and <i>como si nadie me entendiera</i> tell you what the patient lacks: energy, sleep, support, being understood. Reflect it back: <i>Entonces le gustaría tener más energía.</i> Wishes about not being alive are different: ask directly, as in the suicide section of the phrasebook.</div>
<h3>Common mistakes</h3>
<p><s>Quería que viene.</s> → <b>Quería que viniera.</b> After a past verb of wanting, use the imperfect subjunctive.</p>
<p><s>Ojalá tendría más energía.</s> → <b>Ojalá tuviera más energía.</b> The conditional never follows ojalá.</p>
<p><s>Si tuvieramos tiempo.</s> → <b>Si tuviéramos tiempo.</b> The nosotros form needs the written accent.</p>`,
  quiz: [
    [`Which is the imperfect subjunctive of "tener" (yo)?`, [`tenga`, `tuviera`, `tuve`, `tendría`], 1, `Tuvieron → tuviera. Tenga is the present subjunctive.`],
    [`A patient has no energy and says: "Ojalá ___ más energía." She wishes she had it now.`, [`tengo`, `tenía`, `tuviera`, `tendré`], 2, `A wish contrary to present reality uses ojalá + imperfect subjunctive.`],
    [`"Le pedí que ___ a las ocho." (I asked her to come at eight.)`, [`vendrá`, `viene`, `vino`, `viniera`], 3, `A past request takes que + imperfect subjunctive: viniera.`],
    [`What does "Quisiera hacerle unas preguntas" express?`, [`A polite request: I would like to ask you some questions`, `A past habit`, `A command`, `A fact about yesterday`], 0, `Quisiera is a polite "I would like".`],
    [`"Habla como si no me ___." Which form completes it?`, [`oye`, `oyera`, `oiría`, `oirá`], 1, `Como si takes the imperfect subjunctive. Oír has oyeron, so oyera.`],
    [`Which sentence is correct?`, [`Ojalá fuera más fácil.`, `Ojalá sería más fácil.`, `Ojalá es más fácil.`, `Ojalá fue más fácil.`], 0, `Ojalá + imperfect subjunctive. The conditional is not used after ojalá.`],
    [`What is the imperfect subjunctive (yo) of "decir"?`, [`dijiera`, `decira`, `dijera`, `diciera`], 2, `Dijeron drops the i after j: dijera.`]
  ],
  draft: true,
  after: 'review-b1'
  },
  {
  id: 'si-clauses', level: 'B2', unit: 'Hypotheses and regret', title: `Si-clauses: real, unreal present, unreal past`,
  summary: `Match the verb in the si-part with the verb in the result part, and hear who blames themselves.`,
  body: `<p>"Si hubiera pedido ayuda antes…" is the sentence of regret, and "Si yo no estuviera, mi familia estaría mejor" can be a patient's way of saying they are a burden. The pairing of tenses is fixed, so learn three patterns. <b>Say</b> the real pattern; <b>understand</b> the unreal ones, and say the simple ones.</p>
<h3>Three patterns</h3>
<table><tr><th>Type</th><th>Si-part</th><th>Result part</th><th>Example</th></tr><tr><td>Real or likely</td><td>present</td><td>present, future or command</td><td>Si toma la medicina, se sentirá mejor.</td></tr><tr><td>Unreal present (not true now)</td><td>imperfect subjunctive</td><td>conditional</td><td>Si tuviera trabajo, estaría más tranquilo.</td></tr><tr><td>Unreal past (did not happen)</td><td>hubiera + participle</td><td>habría + participle</td><td>Si lo hubiera sabido, habría venido antes.</td></tr></table>
<p>Never put the conditional or the present subjunctive right after <i>si</i>. The word <i>si</i> without an accent means "if"; <i>sí</i> means "yes".</p>
<div class="ex"><b>Si toma la medicina todos los días, se sentirá mejor.</b><span>If you take the medicine every day, you will feel better.</span></div>
<div class="ex"><b>Si no puede dormir, avíseme.</b><span>If you cannot sleep, let me know.</span></div>
<div class="ex"><b>Si se siente en peligro, llame al 988 (oprima 2).</b><span>If you feel in danger, call 988 (press 2).</span></div>
<div class="ex"><b>Si fuera usted, hablaría con su familia.</b><span>If I were you, I would talk to your family.</span></div>
<div class="ex"><b>Si tuviera más apoyo, estaría menos ansiosa.</b><span>If I had more support, I would be less anxious.</span></div>
<div class="ex"><b>Si yo no estuviera, mi familia estaría mejor.</b><span>If I were not here, my family would be better off.</span></div>
<div class="ex"><b>Si hubiera tomado la medicina, no habría tenido la crisis.</b><span>If I had taken the medicine, I would not have had the crisis.</span></div>
<div class="ex"><b>Si me hubieran avisado, habría ido.</b><span>If they had told me, I would have gone.</span></div>
<div class="ex"><b>Si mañana hace buen tiempo, vamos a caminar.</b><span>If the weather is good tomorrow, we will go for a walk.</span></div>
<div class="ex"><b>Si tuviera dinero, compraría la medicina hoy.</b><span>If I had money, I would buy the medicine today.</span></div>
<p><i>Si fuera usted</i> is natural between friends. As a clinician, prefer <i>Le recomiendo que…</i> and keep the unreal forms mostly for understanding.</p>
<div class="note">Clinical tip: <i>Si yo no estuviera, mi familia estaría mejor</i> is a hypothetical about the patient's absence, a common way to voice burden. Do not answer the grammar. Ask directly about thoughts of suicide, using the app's risk questions, then explore what the patient imagines for the family.</div>
<h3>Common mistakes</h3>
<p><s>Si tendría tiempo, hablaría más.</s> → <b>Si tuviera tiempo, hablaría más.</b> After si, use the imperfect subjunctive, not the conditional.</p>
<p><s>Si lo habría sabido, habría venido.</s> → <b>Si lo hubiera sabido, habría venido.</b> The si-part of an unreal past is hubiera + participle.</p>
<p><s>Si tomará la medicina, se sentirá mejor.</s> → <b>Si toma la medicina, se sentirá mejor.</b> Real conditions use the present after si, never the future.</p>`,
  quiz: [
    [`"If you take it every day, you will feel better." Which is correct?`, [`Si lo tomará todos los días, se sentirá mejor.`, `Si lo toma todos los días, se sentirá mejor.`, `Si lo tomaría todos los días, se sentirá mejor.`, `Si lo tomara todos los días, se sentirá mejor.`], 1, `A real condition uses the present after si and the future in the result.`],
    [`The patient has no job now: "Si ___ trabajo, estaría más tranquilo."`, [`tengo`, `tuviera`, `tendría`, `tendré`], 1, `Not true now, so si + imperfect subjunctive, with the conditional in the result.`],
    [`Yesterday he did not take the medicine and had a crisis: "Si ___ la medicina, no habría tenido una crisis."`, [`toma`, `tomará`, `hubiera tomado`, `habría tomado`], 2, `Unreal past: hubiera + participle in the si-part. Habría tomado cannot follow si.`],
    [`Which sentence is correct?`, [`Si tendría tiempo, hablaría más.`, `Si tengo tiempo, hablaría más.`, `Si tuviera tiempo, hablo más.`, `Si tuviera tiempo, hablaría más.`], 3, `Imperfect subjunctive in the si-part and the conditional in the result.`],
    [`"Si fuera usted, hablaría con su familia." What does the speaker say?`, [`If you were here, you would talk to your family.`, `If I were you, I would talk to your family.`, `If you talk to your family, I will be glad.`, `You talked to your family yesterday.`], 1, `Si fuera usted = if I were you.`],
    [`A patient says: "Si yo no estuviera, mi familia estaría mejor." What is the best next step?`, [`Ask directly about thoughts of suicide`, `Agree that the family needs rest`, `Move on to sleep questions`, `Correct the grammar`], 0, `It voices burden and can be passive suicidal ideation. Ask directly.`],
    [`Which sentence means "If they had told me, I would have gone"?`, [`Si me avisan, voy.`, `Si me hubieran avisado, habría ido.`, `Si me avisaran, iría.`, `Si me avisarán, iré.`], 1, `An unreal past needs hubieran + participle and habría + participle.`]
  ],
  draft: true,
  after: 'imperfect-subjunctive'
  },
  {
  id: 'conditional-perfect-regret', level: 'B2', unit: 'Hypotheses and regret', title: `Regret and guilt: habría, debería haber, ojalá hubiera`,
  summary: `Recognise how guilt and regret are voiced in depression and grief, and say a few safe replies.`,
  body: `<p>"Debería haber pedido ayuda." "Ojalá hubiera llegado antes." These are how guilt, regret and self-blame sound in depression and in grief. You must <b>understand</b> them at once. You can also <b>say</b> a few supportive replies, such as "Usted hizo lo que pudo."</p>
<h3>Three building blocks</h3>
<table><tr><th>Form</th><th>Pattern</th><th>Meaning</th></tr><tr><td>Conditional perfect</td><td>habría + participle</td><td>would have done</td></tr><tr><td>Should have</td><td>debería haber + participle (also debí + infinitive perfect)</td><td>I should have done it</td></tr><tr><td>Wish about the past</td><td>ojalá hubiera + participle</td><td>I wish I had done it</td></tr></table>
<p>Irregular participles matter: <i>hecho, dicho, visto, puesto, escrito, vuelto, abierto, muerto</i>. Pronouns attach to <i>haber</i>: <i>debí haberme dado cuenta</i>. You also meet <i>hubiera</i> in the si-part of the last lesson: <i>Si hubiera llegado antes…</i></p>
<div class="ex"><b>Debería haber pedido ayuda antes.</b><span>I should have asked for help sooner.</span></div>
<div class="ex"><b>Ojalá hubiera estado con ella ese día.</b><span>I wish I had been with her that day.</span></div>
<div class="ex"><b>Si hubiera llegado antes, todavía estaría con nosotros.</b><span>If I had arrived sooner, he would still be with us.</span></div>
<div class="ex"><b>Debí haberme dado cuenta.</b><span>I should have realized.</span></div>
<div class="ex"><b>Habría hecho cualquier cosa por ella.</b><span>I would have done anything for her.</span></div>
<div class="ex"><b>Ojalá no hubiera nacido.</b><span>I wish I had never been born.</span></div>
<div class="ex"><b>Habría venido, pero no tenía transporte.</b><span>I would have come, but I had no transportation.</span></div>
<div class="ex"><b>Ojalá hubiera estudiado más.</b><span>I wish I had studied more.</span></div>
<div class="ex"><b>Usted no habría podido saberlo.</b><span>You could not have known.</span></div>
<div class="ex"><b>Usted hizo lo que pudo con lo que sabía entonces.</b><span>You did what you could with what you knew then.</span></div>
<div class="ex"><b>Yo no lo habría dicho así.</b><span>I would not have said it that way.</span></div>
<h3>Hearing guilt</h3>
<p>In grief, guilt is often about something small and specific: the call not made, the late arrival, the missed sign. Ordinary grief can include it. Pervasive self-blame, worthlessness and a wish never to have lived point toward depression. A line such as <i>Ojalá no hubiera nacido</i> is also a possible sign of passive suicidal thoughts.</p>
<div class="note">Clinical tip: do not rush to reassure with <i>No fue su culpa</i> before you have listened. First reflect: <i>Siente que pudo haber hecho algo distinto.</i> Then, if the patient says life is not worth living or wishes not to exist, ask directly about suicide. For a bereaved relative, <i>Usted no habría podido saberlo</i> is true more often than not, but say it only when it fits the facts.</div>
<h3>Common mistakes</h3>
<p><s>Si lo habría sabido, habría venido.</s> → <b>Si lo hubiera sabido, habría venido.</b> No conditional after si.</p>
<p><s>Debería haber pudido.</s> → <b>Debería haber podido.</b> The participle of poder is podido.</p>
<p><s>Debería haber decido.</s> → <b>Debería haber dicho.</b> The participle of decir is irregular: dicho.</p>`,
  quiz: [
    [`What does "Debería haber pedido ayuda" mean?`, [`I should ask for help`, `I would ask for help`, `I should have asked for help`, `I had asked for help`], 2, `Debería haber + participle = should have done.`],
    [`Mi hijo murió y yo no llegué a tiempo. "Ojalá ___ llegado antes."`, [`habría`, `hubiera`, `había`, `he`], 1, `Ojalá + hubiera + participle voices regret about the past.`],
    [`"Habría venido, pero no tenía transporte." Did the person come?`, [`Yes, by bus`, `No, the person did not come`, `Yes, later`, `We cannot tell`], 1, `Habría venido says what would have happened. The person did not come.`],
    [`Which is the correct participle in "Debería haber ___ algo"? (said)`, [`decido`, `dijo`, `decía`, `dicho`], 3, `The participle of decir is dicho.`],
    [`A widow says: "Si hubiera llamado antes a la ambulancia, él estaría vivo." What does this show?`, [`A plan`, `Guilt and self-blame, common in grief`, `A hallucination`, `Thought insertion`], 1, `It is regret and self-blame, which grief often includes. Listen for how pervasive it is.`],
    [`Which sentence says "You could not have known"?`, [`Usted no habría pudido saberlo.`, `Usted no hubo podido saberlo.`, `Usted no habría podido saberlo.`, `Usted no habiendo podido saberlo.`], 2, `Habría podido: conditional perfect with the participle podido.`],
    [`Which sentence is correct?`, [`Si lo habría sabido, habría venido.`, `Si lo hubiera sabido, habría venido.`, `Si lo sabría, habría venido.`, `Si lo sé, habría venido.`], 1, `Hubiera + participle in the si-part; habría + participle in the result.`]
  ],
  draft: true,
  after: 'si-clauses'
  },
  {
  id: 'subjunctive-concession', level: 'B2', unit: 'Advanced structures', title: `Aunque, por más que, a pesar de que, sin que`,
  summary: `Choose indicative for a known fact and subjunctive for "even if" or an unknown, and use sin que.`,
  body: `<p>"Aunque me siento mejor, sigo con miedo" and "Aunque se sienta mejor, siga tomándola" use the same word with different moods, and the mood changes the meaning. Patients also say things like "por más que lo intento, no puedo." You need to <b>say</b> aunque with both moods and <b>understand</b> the rest.</p>
<h3>Aunque: fact or hypothesis?</h3>
<p>With the <b>indicative</b>, the speaker treats the fact as true and known: "although". With the <b>subjunctive</b>, the fact is uncertain, in the future, or does not matter: "even if".</p>
<table><tr><th>Mood</th><th>Meaning</th><th>Example</th></tr><tr><td>aunque + indicative</td><td>although (known fact)</td><td>Aunque está lloviendo, vamos al parque.</td></tr><tr><td>aunque + present subjunctive</td><td>even if (uncertain or future)</td><td>Aunque llueva, iremos al parque.</td></tr><tr><td>aunque + imperfect subjunctive</td><td>even if (unlikely or past hypothetical)</td><td>Aunque tomara la medicina, no mejoraría.</td></tr></table>
<h3>Other concessive frames</h3>
<ul><li><b>Por más que</b> (no matter how much): <i>Por más que lo intento, no puedo dormir.</i> It takes the indicative for a real experience and the subjunctive for "however much you try".</li><li><b>A pesar de que</b> (despite the fact that): usually indicative for a known fact.</li><li><b>Sin que</b> (without): always the subjunctive.</li></ul>
<div class="ex"><b>Aunque me siento mejor, sigo con miedo.</b><span>Although I feel better, I am still afraid.</span></div>
<div class="ex"><b>Aunque se sienta mejor, siga tomando la medicina.</b><span>Even if you feel better, keep taking the medicine.</span></div>
<div class="ex"><b>Por más que lo intento, no puedo dormir.</b><span>No matter how hard I try, I cannot sleep.</span></div>
<div class="ex"><b>A pesar de que toma la medicina, sigue con insomnio.</b><span>Even though you take the medicine, you still have insomnia.</span></div>
<div class="ex"><b>Salió del cuarto sin que nadie lo viera.</b><span>He left the room without anyone seeing him.</span></div>
<div class="ex"><b>Aunque tomara la medicina, no mejoraría tan rápido.</b><span>Even if you took the medicine, you would not improve that fast.</span></div>
<div class="ex"><b>No deje la medicina sin que su doctora lo sepa.</b><span>Do not stop the medicine without your doctor knowing.</span></div>
<div class="ex"><b>Aunque llueva, iremos al parque.</b><span>Even if it rains, we will go to the park.</span></div>
<div class="ex"><b>Aunque estoy cansada, quiero seguir hablando.</b><span>Although I am tired, I want to keep talking.</span></div>
<div class="ex"><b>Aunque tenga fiebre, quiero ir a trabajar.</b><span>Even if I have a fever, I want to go to work.</span></div>
<div class="note">Clinical tip: patients often use <i>aunque</i> with the indicative to name a barrier they know well: <i>Aunque quiero tomarla, me da náuseas.</i> Ask about the barrier. When you tell a patient to continue treatment, use the subjunctive: <i>Aunque se sienta mejor</i>. It covers the day they feel better.</div>
<h3>Common mistakes</h3>
<p><s>Aunque se siente mejor mañana, siga tomándola.</s> → <b>Aunque se sienta mejor mañana, siga tomándola.</b> A future, uncertain feeling takes the subjunctive.</p>
<p><s>Salió sin que nadie lo vio.</s> → <b>Salió sin que nadie lo viera.</b> Sin que always takes the subjunctive, here the imperfect.</p>
<p><s>Aunque me sienta triste hoy, ya llevo meses así.</s> → <b>Aunque me siento triste hoy, ya llevo meses así.</b> The sadness is a known fact, so use the indicative.</p>`,
  quiz: [
    [`"Hoy tomé la medicina y estoy mejor. Aunque ___ mejor, sigo con miedo." What goes in the blank?`, [`me sienta`, `me sentiría`, `me sienta bien`, `me siento`], 3, `The improvement is a known fact, so the indicative: me siento.`],
    [`Doctor: "Quizá mañana se sienta mejor. Aunque ___ mejor, no deje la medicina."`, [`se siente`, `se sienta`, `se sintió`, `se sentía`], 1, `The feeling is uncertain and in the future, so the subjunctive: se sienta.`],
    [`"Salió del cuarto sin que nadie lo ___."`, [`vio`, `veía`, `ve`, `viera`], 3, `Sin que takes the subjunctive; the main verb is past, so viera.`],
    [`A patient reports a fact: "Tomo la medicina todos los días." Which doctor sentence uses it as a fact?`, [`A pesar de que tome la medicina, sigue con insomnio.`, `A pesar de que tomara la medicina, sigue con insomnio.`, `A pesar de que tomaría la medicina, sigue con insomnio.`, `A pesar de que toma la medicina, sigue con insomnio.`], 3, `A known fact after a pesar de que takes the indicative.`],
    [`"Aunque llueva, iremos al parque" means`, [`We will go whether or not it rains.`, `It is raining now, but we go.`, `We will not go if it rains.`, `It rained yesterday and we went.`], 0, `Aunque + subjunctive = even if. The rain is only a possibility.`],
    [`"Aunque está lloviendo, vamos al parque." What does the speaker know?`, [`It is raining now.`, `It may rain tomorrow.`, `It never rains.`, `It will rain next week.`], 0, `Indicative after aunque marks a known, present fact.`],
    [`Which sentence means "He leaves without anyone knowing"?`, [`Sale sin que nadie lo sabe.`, `Sale sin nadie lo sepa.`, `Sale sin que nadie lo sepa.`, `Sale sin que nadie lo sabría.`], 2, `Sin que + present subjunctive.`]
  ],
  draft: true,
  after: 'conditional-perfect-regret'
  },
  {
  id: 'passive-and-se', level: 'B2', unit: 'Advanced structures', title: `Passive voice and se: ser, se pasiva, estar + participle`,
  summary: `Tell apart an action (fue ingresado), a general rule (se necesita) and a result (está internado).`,
  body: `<p>Charts, discharge sheets and news reports use the passive: "Fue ingresado el lunes." In speech Spanish prefers <i>se</i>, a third-person plural verb, or <i>estar</i> for a result. You should <b>say</b> the <i>se</i> forms and <i>estar</i> + participle, and <b>understand</b> <i>ser</i> + participle.</p>
<h3>Three ways to avoid saying who did it</h3>
<table><tr><th>Structure</th><th>Use</th><th>Example</th></tr><tr><td>ser + participle</td><td>an action, mostly written or formal; the participle agrees</td><td>Los resultados fueron entregados ayer.</td></tr><tr><td>se + verb</td><td>a general fact or rule; the verb agrees with the thing</td><td>Se necesitan dos firmas.</td></tr><tr><td>estar + participle</td><td>a state that results from an action; the participle agrees</td><td>La puerta está cerrada.</td></tr><tr><td>3rd person plural</td><td>"they did it", unknown agent, spoken</td><td>Lo trajeron sus vecinos.</td></tr></table>
<p>Compare <i>La puerta fue cerrada</i> (someone closed it) with <i>La puerta está cerrada</i> (it is closed now). A <i>se</i> sentence with a person as object uses the personal <i>a</i> and stays singular: <i>Se admitió a los pacientes</i>.</p>
<div class="ex"><b>Aquí se habla español.</b><span>Spanish is spoken here.</span></div>
<div class="ex"><b>La medicina se toma con comida.</b><span>The medicine is taken with food.</span></div>
<div class="ex"><b>Estos medicamentos se venden con receta.</b><span>These medicines are sold with a prescription.</span></div>
<div class="ex"><b>El paciente fue ingresado el lunes.</b><span>The patient was admitted on Monday.</span></div>
<div class="ex"><b>Fue traído por la policía.</b><span>He was brought in by the police.</span></div>
<div class="ex"><b>Está internada desde el martes.</b><span>She has been hospitalized since Tuesday.</span></div>
<div class="ex"><b>El formulario ya está firmado.</b><span>The form is already signed.</span></div>
<div class="ex"><b>Los resultados serán entregados a su médico.</b><span>The results will be delivered to your doctor.</span></div>
<div class="ex"><b>Lo trajeron sus vecinos anoche.</b><span>His neighbors brought him in last night.</span></div>
<div class="ex"><b>La tienda se cierra a las nueve.</b><span>The store closes at nine.</span></div>
<div class="ex"><b>Se necesitan dos testigos.</b><span>Two witnesses are needed.</span></div>
<div class="note">Clinical tip: a patient who says <i>Me trajeron</i> or <i>Fui traída</i> may not have come willingly. Notice the passive and ask <i>¿Quién la trajo? ¿Usted quería venir?</i> This helps with insight, consent and safety. Also, <i>está medicado</i> and <i>está internado</i> describe a present state, so they fit a handoff.</div>
<p>In everyday speech you will hear the third-person plural more than the passive: <i>Me dieron cita para el lunes</i> (They gave me an appointment for Monday). Use it when the agent is obvious or not important.</p>
<h3>Common mistakes</h3>
<p><s>Se necesita dos firmas.</s> → <b>Se necesitan dos firmas.</b> With se, the verb agrees with the thing needed.</p>
<p><s>Los resultados fue entregados.</s> → <b>Los resultados fueron entregados.</b> Ser agrees with the subject, and so does the participle.</p>
<p><s>El formulario es firmado.</s> → <b>El formulario está firmado.</b> For a result or state, use estar + participle.</p>`,
  quiz: [
    [`"La puerta está cerrada" mainly describes`, [`a result that is true now`, `an action in the past`, `a future plan`, `a daily habit`], 0, `Estar + participle describes a state after an action.`],
    [`"Se ___ dos firmas." (Two signatures are needed.)`, [`necesita`, `necesitamos`, `necesitan`, `necesitas`], 2, `With se, the verb agrees with the thing: dos firmas, plural.`],
    [`Which sentence means "Spanish is spoken here"?`, [`Aquí es hablado español.`, `Aquí se habla español.`, `Aquí está hablado español.`, `Aquí hablamos se español.`], 1, `The se passive is the natural form.`],
    [`"Los resultados ___ entregados ayer."`, [`fueron`, `fue`, `serán`, `es`], 0, `Past action, plural subject: fueron.`],
    [`"El formulario está firmado" means`, [`The form will be signed.`, `The form is signed.`, `The form was being signed.`, `The form signs people.`], 1, `Estar + participle: the state of being signed.`],
    [`In "La medicina se toma con comida", who takes the medicine?`, [`Only the nurse`, `Only the doctor`, `Anyone who takes it, in general`, `The medicine takes itself`], 2, `The se passive states a general rule without naming an agent.`],
    [`Which phrase says the patient is now in hospital, as a state?`, [`Fue ingresada.`, `Se ingresó.`, `La ingresarán.`, `Está ingresada.`], 3, `Está ingresada describes the present state. Fue ingresada tells about the action.`]
  ],
  draft: true,
  after: 'subjunctive-concession'
  },
  {
  id: 'ser-estar-adjectives', level: 'B2', unit: 'Advanced structures', title: `Adjectives that change meaning: listo, aburrido, malo, vivo, despierto`,
  summary: `Ser gives a trait, estar gives a state, and for these adjectives the meaning itself changes.`,
  body: `<p>"Estoy aburrido" and "soy aburrido" are not the same, and in a mental status exam the difference matters: <i>está despierto</i> is about arousal, <i>es despierto</i> is about being quick. A wrong verb can turn "I am bored" into "I am boring". Learn these pairs to <b>say</b> them, and to <b>understand</b> them quickly.</p>
<h3>The pairs</h3>
<table><tr><th>Adjective</th><th>With ser (trait)</th><th>With estar (state)</th></tr><tr><td>listo</td><td>smart</td><td>ready</td></tr><tr><td>aburrido</td><td>boring</td><td>bored</td></tr><tr><td>malo</td><td>bad, mean</td><td>sick (in many regions); spoiled</td></tr><tr><td>vivo</td><td>sharp, quick</td><td>alive</td></tr><tr><td>despierto</td><td>alert, bright</td><td>awake</td></tr><tr><td>orgulloso</td><td>proud, arrogant by nature</td><td>proud of something now</td></tr><tr><td>seguro</td><td>safe</td><td>sure</td></tr><tr><td>cansado</td><td>tiring</td><td>tired</td></tr></table>
<div class="ex"><b>Mi hijo es muy listo.</b><span>My son is very smart.</span></div>
<div class="ex"><b>¿Está listo para hablar?</b><span>Are you ready to talk?</span></div>
<div class="ex"><b>Estoy aburrido todo el tiempo.</b><span>I am bored all the time.</span></div>
<div class="ex"><b>¿Está despierta la paciente?</b><span>Is the patient awake?</span></div>
<div class="ex"><b>Mi papá está malo desde ayer.</b><span>My dad has been sick since yesterday.</span></div>
<div class="ex"><b>Mi vecino es malo con los niños.</b><span>My neighbor is mean to the children.</span></div>
<div class="ex"><b>Es una niña muy despierta.</b><span>She is a very bright child.</span></div>
<div class="ex"><b>Estoy orgullosa de mi hija.</b><span>I am proud of my daughter.</span></div>
<div class="ex"><b>Mi abuelo es muy orgulloso y no pide ayuda.</b><span>My grandfather is very proud and does not ask for help.</span></div>
<div class="ex"><b>¿Está seguro de que quiere irse?</b><span>Are you sure you want to leave?</span></div>
<div class="ex"><b>¿Es seguro tomar este medicamento con alcohol?</b><span>Is it safe to take this medicine with alcohol?</span></div>
<div class="note">Clinical tip: <i>Estar malo</i> for "sick" is common in Mexico, the Caribbean and elsewhere; other speakers say <i>estar enfermo</i>. A patient who says <i>Estoy aburrido de todo</i> may be describing loss of interest, so ask <i>¿Ya no disfruta lo que antes le gustaba?</i> And chart alertness with <i>despierto</i> or <i>somnoliento</i>, not <i>listo</i>.</div>
<p>Two more pairs: <i>Es vivo</i> means sharp or quick, <i>Está vivo</i> means alive. For illness, some speakers prefer <i>enfermo</i> to <i>malo</i>. When in doubt, ask <i>¿Quiere decir que está enfermo?</i></p>
<h3>Common mistakes</h3>
<p><s>Mi hija está muy lista; saca buenas notas.</s> → <b>Mi hija es muy lista; saca buenas notas.</b> A lasting trait (smart) uses ser; está lista would mean "is ready".</p>
<p><s>Soy aburrido porque no tengo nada que hacer.</s> → <b>Estoy aburrido porque no tengo nada que hacer.</b> A state of boredom uses estar. Soy aburrido means "I am boring".</p>
<p><s>El paciente es despierto.</s> → <b>El paciente está despierto.</b> For awake now, use estar; es despierto means quick-witted.</p>`,
  quiz: [
    [`"Mi hijo es listo" means`, [`My son is ready.`, `My son is tired.`, `My son is awake.`, `My son is smart.`], 3, `Ser + listo = smart. Estar + listo = ready.`],
    [`"Estoy aburrida." The speaker is`, [`boring`, `bored`, `tired of herself`, `sick`], 1, `Estar + aburrido = bored.`],
    [`How do you ask whether the patient is awake right now?`, [`¿Es despierto?`, `¿Es despierta?`, `¿Está despierto?`, `¿Será despierto?`], 2, `Awake now is a state, so estar.`],
    [`"¿Está seguro de que quiere irse?" asks`, [`Are you sure you want to leave?`, `Is it safe for you to leave?`, `Are you secure at home?`, `Is it certain that I leave?`], 0, `Estar seguro = to be sure. Ser seguro describes safety.`],
    [`"Ella es orgullosa" most likely describes`, [`a feeling right now`, `her mood today`, `her character: proud, not asking for help`, `her age`], 2, `Ser + orgulloso describes a trait. Estar orgullosa de is feeling proud of something.`],
    [`"Mi papá está malo desde ayer." What does this say?`, [`He is a bad person.`, `He is sick.`, `He is bored.`, `He is awake.`], 1, `Estar malo means sick in many regions.`],
    [`"Es una niña muy despierta" says that she is`, [`awake at the moment`, `ready to go`, `bright and quick`, `alive`], 2, `Ser + despierto describes a bright, alert person.`]
  ],
  draft: true,
  after: 'passive-and-se'
  },
  {
  id: 'lo-neutro', level: 'B2', unit: 'Advanced structures', title: `Lo neutro: lo que, lo importante, lo de`,
  summary: `Use lo for "the thing that", "the ... part" and "the matter of", and hear what patients point to without naming it.`,
  body: `<p>Patients often point to a painful thing without naming it: "Lo de mi hijo", "lo que pasó", "lo único que quiero es dormir." The neuter <i>lo</i> is how Spanish says "the thing that" and "the part that". You should <b>say</b> <i>lo que</i>, <i>lo + adjective</i> and <i>lo de</i> in simple sentences, and <b>understand</b> longer ones.</p>
<h3>Four common uses</h3>
<table><tr><th>Pattern</th><th>Meaning</th><th>Example</th></tr><tr><td>lo que</td><td>what, the thing that</td><td>Lo que más me preocupa es el sueño.</td></tr><tr><td>lo + adjective</td><td>the ... thing, the ... part</td><td>Lo importante es que no está solo.</td></tr><tr><td>lo de + noun or event</td><td>the matter of, what happened with</td><td>Lo de su trabajo fue difícil.</td></tr><tr><td>lo + adjective/adverb + que</td><td>how ...</td><td>No sabe lo difícil que es.</td></tr></table>
<p>Other useful frames: <i>todo lo que</i> (everything that), <i>lo único que</i> (the only thing that), <i>lo mejor es que</i> (the best thing is that). After a recommendation, <i>lo mejor es que</i> takes the subjunctive: <i>Lo mejor es que venga mañana.</i> For a fact it takes the indicative: <i>Lo bueno es que ya terminó.</i></p>
<div class="ex"><b>Lo que más me preocupa es el sueño.</b><span>What worries me most is sleep.</span></div>
<div class="ex"><b>Cuénteme lo que pasó.</b><span>Tell me what happened.</span></div>
<div class="ex"><b>Lo importante es que usted no está solo.</b><span>The important thing is that you are not alone.</span></div>
<div class="ex"><b>Lo mejor es que venga mañana.</b><span>The best thing is for you to come tomorrow.</span></div>
<div class="ex"><b>¿Cómo va lo de su trabajo?</b><span>How is the matter of your job going?</span></div>
<div class="ex"><b>Lo de ayer fue muy difícil para mí.</b><span>What happened yesterday was very hard for me.</span></div>
<div class="ex"><b>No sabe lo difícil que es.</b><span>You do not know how hard it is.</span></div>
<div class="ex"><b>Todo lo que dice me ayuda a entender.</b><span>Everything you say helps me understand.</span></div>
<div class="ex"><b>Lo único que quiero es dormir.</b><span>The only thing I want is to sleep.</span></div>
<div class="ex"><b>Lo malo es que no tengo con quién hablar.</b><span>The bad thing is that I have no one to talk to.</span></div>
<div class="note">Clinical tip: <i>lo de</i> points to something both people may already know. When a patient says <i>Lo de mi hijo</i> or <i>Lo de aquella noche</i>, do not guess. Ask <i>¿A qué se refiere con lo de su hijo?</i> or <i>¿Quiere contarme más sobre eso?</i> It may be a loss, an arrest, an assault or an attempt, and you need the patient's own words.</div>
<h3>Common mistakes</h3>
<p><s>La importante es que duerma.</s> → <b>Lo importante es que duerma.</b> The neuter article lo, not la or el, before an adjective used as a noun.</p>
<p><s>Todo que dice me ayuda.</s> → <b>Todo lo que dice me ayuda.</b> Use todo lo que for "everything that".</p>
<p><s>No sabe cuánto difícil es.</s> → <b>No sabe lo difícil que es.</b> Use lo + adjective + que for "how hard it is".</p>`,
  quiz: [
    [`"Lo importante es que duerma" means`, [`The important thing is that you sleep.`, `The important person sleeps.`, `It is important sleep.`, `He sleeps importantly.`], 0, `Lo + adjective = the ... thing.`],
    [`"___ que más me duele es la espalda."`, [`El`, `La`, `Eso`, `Lo`], 3, `Lo que = what, the thing that.`],
    [`A patient says "lo de mi hijo". What is the best response?`, [`Ask what they refer to`, `Assume the son is sick`, `Change the topic`, `Say that the son is fine`], 0, `Lo de points to something unnamed. Ask what it is.`],
    [`"No sabe ___ difícil que es."`, [`el`, `la`, `lo`, `que`], 2, `Lo + adjective + que = how hard.`],
    [`"Todo ___ dice me ayuda." (Everything you say helps me.)`, [`el que`, `qué`, `que`, `lo que`], 3, `Todo lo que = everything that.`],
    [`The doctor advises: "Lo mejor es que ___ mañana."`, [`viene`, `venga`, `vino`, `venía`], 1, `After a recommendation, lo mejor es que takes the subjunctive.`],
    [`"Lo único que quiero es dormir" means`, [`I want to sleep twice.`, `I am the only one who sleeps.`, `The only thing I want is to sleep.`, `I never sleep.`], 2, `Lo único que = the only thing that.`]
  ],
  draft: true,
  after: 'ser-estar-adjectives'
  },
  {
  id: 'future-of-probability', level: 'B2', unit: 'Advanced structures', title: `Future of probability: será, estará, habrá llegado`,
  summary: `Hear a guess as a guess: the future and conditional also mean "probably" in the present and past.`,
  body: `<p>"Mi esposo estará enojado" is not a fact about tomorrow. It is a guess about now: "My husband must be angry." A patient's guess is not the same as knowledge, and "será que…" is a guess, not a fact. You should <b>say</b> simple guesses and <b>understand</b> all of these forms.</p>
<h3>Four forms of guessing</h3>
<table><tr><th>Form</th><th>Time of the guess</th><th>Example</th></tr><tr><td>future</td><td>now</td><td>Estará cansada. She must be tired.</td></tr><tr><td>future perfect (habrá + participle)</td><td>before now</td><td>Habrá llegado. He must have arrived.</td></tr><tr><td>conditional</td><td>a past moment</td><td>Estaría dormida. She was probably asleep.</td></tr><tr><td>será que + clause</td><td>a question: could it be that</td><td>¿Será que no durmió?</td></tr></table>
<p>The context shows which meaning you have. <i>Mañana lloverá</i> is a real future; <i>Serán las tres</i> is a guess about the time now. <i>Será que</i> is also how someone wonders aloud.</p>
<div class="ex"><b>Serán las tres de la tarde.</b><span>It must be about three in the afternoon.</span></div>
<div class="ex"><b>Estará cansada por el turno de anoche.</b><span>She is probably tired from last night's shift.</span></div>
<div class="ex"><b>¿Tendrá fiebre?</b><span>Does he have a fever, I wonder?</span></div>
<div class="ex"><b>Mi esposo estará preocupado.</b><span>My husband must be worried.</span></div>
<div class="ex"><b>¿Será que dejó de dormir por el ruido?</b><span>Could it be that you stopped sleeping because of the noise?</span></div>
<div class="ex"><b>Habrá perdido el autobús.</b><span>He must have missed the bus.</span></div>
<div class="ex"><b>Mis hijos habrán pensado que soy un mal padre.</b><span>My children must have thought I am a bad father.</span></div>
<div class="ex"><b>Estaría dormida cuando llamaron.</b><span>She was probably asleep when they called.</span></div>
<div class="ex"><b>Serían las diez cuando llegó la ambulancia.</b><span>It was probably around ten when the ambulance arrived.</span></div>
<div class="ex"><b>¿Dónde estará mi receta?</b><span>Where can my prescription be?</span></div>
<div class="ex"><b>Tendrá unos cuarenta años.</b><span>He must be about forty.</span></div>
<div class="note">Clinical tip: a guess voiced as a future form is not evidence. <i>Mi esposo estará enojado</i> or <i>Mis hijos habrán pensado que soy un mal padre</i> tells you about the patient's worry and self-image. Ask <i>¿Se lo dijo él? ¿Cómo lo sabe?</i> to separate a belief with evidence from guilt or suspicion. In the chart, write "patient assumes" and quote the guess.</div>
<h3>Common mistakes</h3>
<p><s>Mi esposo estaría enojado ahora.</s> → <b>Mi esposo estará enojado ahora.</b> A guess about now uses the future; the conditional guesses about a past moment.</p>
<p><s>Serán las tres ayer.</s> → <b>Serían las tres.</b> For a guess about a past moment, use the conditional.</p>
<p><s>Perdería el autobús.</s> → <b>Habrá perdido el autobús.</b> To guess about a recent past event, use habrá + participle, not the bare conditional.</p>`,
  quiz: [
    [`"Estará cansado" means`, [`He is probably tired.`, `He will be tired tomorrow.`, `He was tired.`, `He should be tired.`], 0, `The future of probability guesses about now.`],
    [`"Habrá llegado" means`, [`He will arrive.`, `He must have arrived.`, `He arrives.`, `He would arrive.`], 1, `Future perfect = a guess about something already done.`],
    [`"Serán las tres" most likely means`, [`It will be three.`, `It was exactly three.`, `It must be about three.`, `It is not three.`], 2, `The future of probability guesses at the present time.`],
    [`"Serían las diez cuando llegó la ambulancia" tells you that`, [`it was exactly ten`, `it will be ten`, `it was probably around ten`, `it is probably ten`], 2, `The conditional guesses about a time in the past.`],
    [`A patient says: "Mi esposo estará enojado." How do you chart it?`, [`Husband is angry.`, `Patient assumes her husband is angry.`, `Husband is not angry.`, `Patient is angry.`], 1, `It is a guess, not a confirmed fact.`],
    [`Which sentence means "He must have missed the bus"?`, [`Habrá perdido el autobús.`, `Ha perdido el autobús.`, `Perdió el autobús.`, `Perdería el autobús.`], 0, `Habrá + participle expresses a guess about something past.`],
    [`"¿Dónde estará mi receta?" means`, [`Where will my prescription be tomorrow?`, `Where was my prescription?`, `Where can my prescription be?`, `Where is the prescription office?`], 2, `The future in a question wonders about the present.`]
  ],
  draft: true,
  after: 'lo-neutro'
  },
  {
  id: 'discourse-markers', level: 'B2', unit: 'Understanding real speech', title: `Discourse markers: pues, o sea, es que, a ver, fíjese que`,
  summary: `Small words tell you when a patient is about to explain, excuse, hesitate or change topic.`,
  body: `<p>"Es que no tengo cómo pagarla." The words <i>es que</i> announce an explanation or an excuse, and the reason that follows is often the real reason for non-adherence. Markers carry little dictionary meaning but a lot of clinical information. <b>Say</b> bueno, entonces, a ver and o sea; <b>understand</b> es que, fíjese que, este and mire.</p>
<h3>What each one signals</h3>
<table><tr><th>Marker</th><th>What it does</th><th>Say or understand</th></tr><tr><td>pues</td><td>well, so; softens or continues</td><td>both</td></tr><tr><td>o sea</td><td>I mean; restates or explains</td><td>both</td></tr><tr><td>bueno</td><td>well; hesitation, or accepting</td><td>both</td></tr><tr><td>entonces</td><td>so, then; moves the story on</td><td>say</td></tr><tr><td>a ver</td><td>let's see; starts a task or a question</td><td>say</td></tr><tr><td>es que</td><td>the thing is; explanation or excuse</td><td>understand</td></tr><tr><td>fíjese que</td><td>you see; introduces news or an excuse (Mexico)</td><td>understand</td></tr><tr><td>este…</td><td>um; a filler while thinking (Mexico)</td><td>understand</td></tr><tr><td>mire, oiga</td><td>look, listen; gets attention</td><td>understand</td></tr></table>
<div class="ex"><b>A ver, cuénteme cómo ha dormido.</b><span>Let's see, tell me how you have slept.</span></div>
<div class="ex"><b>Es que no tengo cómo pagar la medicina.</b><span>The thing is, I have no way to pay for the medicine.</span></div>
<div class="ex"><b>Fíjese que no pude venir la semana pasada.</b><span>You see, I could not come last week.</span></div>
<div class="ex"><b>Este… no sé cómo decirlo.</b><span>Um, I do not know how to say it.</span></div>
<div class="ex"><b>O sea, ¿usted dejó de tomarla hace dos semanas?</b><span>So you mean you stopped taking it two weeks ago?</span></div>
<div class="ex"><b>Pues, más o menos.</b><span>Well, so-so.</span></div>
<div class="ex"><b>Entonces, ¿qué pasó después?</b><span>So, what happened after that?</span></div>
<div class="ex"><b>Mire, doctora, yo quiero mejorar, pero…</b><span>Look, doctor, I want to get better, but...</span></div>
<div class="ex"><b>Bueno, ya veremos.</b><span>Well, we will see.</span></div>
<div class="ex"><b>Pues nada, ahí vamos.</b><span>Well, nothing much, we are getting by.</span></div>
<div class="note">Clinical tip: after <i>es que</i> or <i>fíjese que</i>, stop and listen. The reason that follows (money, fear of side effects, family, work) is what you need to solve. Reply without blame: <i>Gracias por decírmelo. ¿Qué le ayudaría?</i> A long <i>este…</i> or <i>pues…</i> before a sensitive answer can also mean shame. Wait before you ask the next question.</div>
<p>You can also use markers to guide the interview. <i>Bueno</i> closes a topic, <i>entonces</i> asks for the next step, and <i>a ver</i> signals that you are about to ask or do something, which keeps a long interview from feeling abrupt. In writing, a marker sits at the start and is followed by a comma.</p>
<h3>Common mistakes</h3>
<p><s>Es qué no tengo tiempo.</s> → <b>Es que no tengo tiempo.</b> No written accent: this que is not a question word.</p>
<p><s>Haber, cuénteme qué pasó.</s> → <b>A ver, cuénteme qué pasó.</b> The marker is two words, a ver. Haber is a verb.</p>
<p><s>Osea, usted dejó la medicina.</s> → <b>O sea, usted dejó la medicina.</b> O sea is also two words.</p>`,
  quiz: [
    [`"Es que no tengo cómo pagar" usually signals`, [`an explanation or excuse`, `a question`, `a command`, `a greeting`], 0, `Es que introduces the reason, often an excuse.`],
    [`"A ver, cuénteme" means`, [`Have a look, tell me`, `Let's see, tell me`, `There is, tell me`, `You will see, tell me`], 1, `A ver starts a task: let's see.`],
    [`"O sea" means`, [`or so`, `I do not know`, `I mean, in other words`, `of course`], 2, `O sea restates or clarifies.`],
    [`In Mexico, "este…" in the middle of a sentence is`, [`a filler while thinking`, `the word "this" in a list`, `a goodbye`, `a diagnosis`], 0, `Este… works like um.`],
    [`A patient says: "Fíjese que no pude comprarla." What is the best reply?`, [`Say it is the patient's fault`, `Acknowledge it and ask what got in the way`, `Write non-adherent and move on`, `Repeat the prescription`], 1, `The marker introduces a reason. Listen to the reason.`],
    [`Which is written correctly?`, [`Haber, cuénteme.`, `Aver, cuénteme.`, `A ver, cuénteme.`, `A ber, cuénteme.`], 2, `A ver is two words.`],
    [`"Entonces, ¿qué pasó después?" means`, [`Then, what happened afterward?`, `Entrances happened after.`, `What happened before?`, `Why did you leave?`], 0, `Entonces moves the story on: so, then.`]
  ],
  draft: true,
  after: 'future-of-probability'
  },
  {
  id: 'casual-speech', level: 'B2', unit: 'Understanding real speech', title: `Casual speech: pa', 'tá, cansao and other reductions`,
  summary: `Recognise reduced informal forms in Caribbean, northern Mexican and US speech. Understand, do not copy.`,
  body: `<p>Real patients do not speak textbook Spanish. They say <i>cansao</i>, <i>pa'</i>, <i>'tá</i>. This lesson is about <b>understanding</b>. <b>Understand, do not copy</b>: if you imitate these forms it can sound like mocking, and it can offend. Answer in clear, standard Spanish. All regional statements here are general tendencies, not rules about any one person.</p>
<h3>Common reductions</h3>
<table><tr><th>Heard (informal spelling)</th><th>Full form</th><th>English</th></tr><tr><td>pa', pa'l</td><td>para, para el</td><td>for, to; to the</td></tr><tr><td>'tá, 'toy, 'tamos</td><td>está, estoy, estamos</td><td>is, I am, we are</td></tr><tr><td>cansao, dormío, perdío</td><td>cansado, dormido, perdido</td><td>tired, asleep, lost</td></tr><tr><td>to', na'</td><td>todo, nada</td><td>everything, nothing</td></tr><tr><td>vamo', lo' niño'</td><td>vamos, los niños</td><td>let's go, the children</td></tr><tr><td>nomás</td><td>no más, solamente</td><td>only, just</td></tr><tr><td>pos, ái, ya mero</td><td>pues, ahí, ya casi</td><td>well, there, almost</td></tr></table>
<h3>Where you may hear them</h3>
<ul><li><b>Caribbean</b> (Puerto Rico, the Dominican Republic, Cuba; a general tendency): the s is often aspirated or dropped (<i>lo' niño'</i>), the d of <i>-ado</i> disappears (<i>cansao</i>), and in some areas final r can sound like l (<i>dolol</i> for <i>dolor</i>).</li><li><b>Northern Mexico and the US border</b> (a general tendency): <i>nomás, pos, ahorita, ya mero</i>, and Spanglish items from the previous lessons.</li><li><b>Everywhere</b>: <i>pa'</i> for <i>para</i>, <i>to'</i> for <i>todo</i>, in fast speech.</li></ul>
<div class="ex"><b>Estoy cansao de to'.</b><span>I am tired of everything.</span></div>
<div class="ex"><b>Voy pa'l hospital mañana.</b><span>I am going to the hospital tomorrow.</span></div>
<div class="ex"><b>No 'toy durmiendo na'.</b><span>I am not sleeping at all.</span></div>
<div class="ex"><b>¿Cómo 'tá la nena?</b><span>How is the little girl?</span></div>
<div class="ex"><b>Me duele to'l cuerpo.</b><span>My whole body hurts.</span></div>
<div class="ex"><b>Nomás me tomé una pastilla.</b><span>I only took one pill.</span></div>
<div class="ex"><b>Pos no sé, la verdad.</b><span>Well, I do not know, honestly.</span></div>
<div class="ex"><b>Mijo, ya mero llego.</b><span>Son, I will be there soon.</span></div>
<div class="ex"><b>Vamo' a ver, doctor.</b><span>Let's see, doctor.</span></div>
<div class="ex"><b>Ta bien, no se preocupe.</b><span>It is fine, do not worry.</span></div>
<div class="note">Clinical tip: speak and chart in standard Spanish and English. Quote the patient's exact words only when the words matter, for example a delusion, a threat or a statement about suicide. If you do not understand, say <i>Perdone, no le entendí bien. ¿Me lo puede repetir más despacio?</i> and do not pretend to understand. Reduced speech is not a sign of low education or of confusion.</div>
<h3>Common mistakes</h3>
<p><s>¿Está cansao, don Chuy?</s> → <b>¿Está cansado, don Chuy?</b> Do not copy the reduced form: it can sound like mockery.</p>
<p><s>Gracias pa' venir.</s> → <b>Gracias por venir.</b> Pa' stands for para, not por.</p>
<p><s>Paciente 'tá cansao.</s> → <b>Paciente está cansado.</b> Chart in standard language.</p>`,
  quiz: [
    [`"Cansao" is a reduced form of`, [`cansado`, `cansancio`, `casado`, `cansada`], 0, `The d of -ado often drops: cansado → cansao.`],
    [`"Voy pa'l hospital" means`, [`I go for the hospital's price`, `I am going to the hospital`, `I come from the hospital`, `I live in the hospital`], 1, `Pa'l = para el.`],
    [`A patient says "cansao". What should you say yourself?`, [`Cansao, igual`, `Cansá`, `Tan cansao`, `Está cansado, ¿verdad?`], 3, `Understand it but answer in standard Spanish. Copying sounds like mockery.`],
    [`"No 'toy durmiendo na'" means`, [`I am sleeping a lot.`, `I am not sleeping at all.`, `I am not sleeping at night only.`, `I am sleeping alone.`], 1, `'toy = estoy, na' = nada.`],
    [`"Nomás me tomé una pastilla" means`, [`I took a pill only.`, `I did not take a pill.`, `I took more than one pill.`, `I took a pill for no reason.`], 0, `Nomás = solamente, only.`],
    [`"Pos no sé" means`, [`I do not know where`, `Well, I do not know`, `I know it`, `I used to know`], 1, `Pos is a reduced form of pues.`],
    [`In your chart, a patient said "Paciente 'tá cansao". The best way to write the note is`, [`Paciente 'tá cansao.`, `Paciente tá cansao.`, `Paciente está cansado.`, `Paciente is tired and speaks badly.`], 2, `Chart in standard language unless the exact wording matters.`]
  ],
  draft: true,
  after: 'discourse-markers'
  },
  {
  id: 'advanced-pronouns', level: 'B2', unit: 'Understanding real speech', title: `Pronouns you will hear: leísmo, redundant pronouns, voseo, vosotros`,
  summary: `Recognise doubled pronouns, le for people, vos and vosotros, and keep to standard forms yourself.`,
  body: `<p>Patients and interpreters bring other pronoun habits: <i>le vi</i>, <i>vos tenés</i>, <i>vosotros habéis</i>. For all of these, <b>understand</b> first; keep to standard forms yourself. The doubled pronoun (<i>le dije a mi hijo</i>) is standard and worth <b>saying</b>.</p>
<h3>Doubled pronouns (say these)</h3>
<p>Spanish repeats the indirect object: <i>le</i> appears even when the person is named. With two pronouns, <i>le/les + lo/la</i> becomes <i>se lo/la</i>: <i>se lo dije</i>, never <i>le lo dije</i>. Emphasis also repeats: <i>a mí me duele</i>.</p>
<h3>Forms to recognise</h3>
<table><tr><th>Feature</th><th>Heard</th><th>Standard here</th><th>Where (tendency)</th></tr><tr><td>Leísmo</td><td>Le vi ayer.</td><td>Lo vi ayer.</td><td>Spain and some Andean regions</td></tr><tr><td>Doubled object</td><td>Lo vi a mi papá.</td><td>Vi a mi papá.</td><td>Río de la Plata, Andes</td></tr><tr><td>Voseo</td><td>Vos tenés, vení, sentate</td><td>Usted tiene, venga, siéntese</td><td>Argentina, Uruguay, Central America</td></tr><tr><td>Vosotros</td><td>Vosotros habéis, venid</td><td>Ustedes han, vengan</td><td>Spain</td></tr></table>
<p>For a clinician, <i>usted</i> and <i>ustedes</i> work everywhere. Do not use <i>vos</i> or <i>vosotros</i> unless you know the region well, but know the forms.</p>
<div class="ex"><b>A mí me duele mucho la cabeza.</b><span>My head hurts a lot.</span></div>
<div class="ex"><b>Le dije a mi hijo que no viniera.</b><span>I told my son not to come.</span></div>
<div class="ex"><b>Se lo conté a mi hermana.</b><span>I told my sister.</span></div>
<div class="ex"><b>Le vi ayer en la clínica.</b><span>I saw him yesterday at the clinic.</span></div>
<div class="ex"><b>Lo vi a mi papá ayer en el hospital.</b><span>I saw my dad yesterday at the hospital.</span></div>
<div class="ex"><b>¿Vos querés que te ayude?</b><span>Do you want me to help you?</span></div>
<div class="ex"><b>Vení, sentate un momento.</b><span>Come, sit down for a moment.</span></div>
<div class="ex"><b>¿Cómo os encontráis hoy?</b><span>How are you all feeling today?</span></div>
<div class="ex"><b>¿Habéis desayunado?</b><span>Have you all had breakfast?</span></div>
<div class="ex"><b>Ustedes tienen que descansar.</b><span>You all need to rest.</span></div>
<div class="note">Clinical tip: if a patient uses <i>vos</i>, you may keep <i>usted</i>. It is respectful and clear. If a Spain-trained interpreter says <i>vosotros</i> in a US clinic, that is their regional habit; do not read it as a mistake. If you are not sure who a pronoun refers to (<i>le</i> can mean him, her, you), check: <i>¿Le dijo a su hijo o a su esposo?</i></div>
<h3>Common mistakes</h3>
<p><s>Le lo dije a mi hijo.</s> → <b>Se lo dije a mi hijo.</b> Le + lo becomes se lo.</p>
<p><s>Vos tienes que descansar.</s> → <b>Vos tenés que descansar.</b> Vos takes its own verb forms; or use tú tienes. Do not mix.</p>
<p><s>¿Ustedes tenéis hambre?</s> → <b>¿Ustedes tienen hambre?</b> Ustedes takes the third-person plural; tenéis goes with vosotros.</p>`,
  quiz: [
    [`In "Se lo dije a mi hermana", what does "se" stand for?`, [`herself`, `le (to her)`, `himself`, `us`], 1, `Le + lo becomes se lo.`],
    [`Which is the voseo form of "you have"?`, [`tienes`, `tiene`, `tenés`, `tenéis`], 2, `Vos tenés. Tenéis is for vosotros.`],
    [`"Le vi ayer" in a Spain-style leísta speaker means`, [`I saw him yesterday.`, `I saw you (pl.) yesterday.`, `They saw me yesterday.`, `I will see him tomorrow.`], 0, `Leísmo uses le as a direct object for a person: lo vi.`],
    [`Where is "vosotros" a normal pronoun?`, [`Mexico`, `Spain`, `Puerto Rico`, `Colombia`], 1, `Vosotros is used in Spain.`],
    [`Which sentence is correct for "You all need to rest" in a US clinic?`, [`Ustedes tenéis que descansar.`, `Ustedes tenés que descansar.`, `Ustedes tienen que descansar.`, `Ustedes tenemos que descansar.`], 2, `Ustedes + third-person plural.`],
    [`"A mí me duele la cabeza" repeats mí and me. Why?`, [`It is a mistake`, `It adds emphasis and is standard`, `It means my head hurts someone else`, `It is only written Spanish`], 1, `Repeating the pronoun is standard and emphasises who feels it.`],
    [`Which sentence is correct?`, [`Le dije a mi hijo que viniera.`, `Les dije a mi hijo que viniera.`, `Lo dije a mi hijo que viniera.`, `Me dije a mi hijo que viniera.`], 0, `Le agrees with the one hijo; this is the doubled indirect object.`]
  ],
  draft: true,
  after: 'casual-speech'
  },
  {
  id: 'chart-and-form-spanish', level: 'B2', unit: 'Understanding real speech', title: `Reading consent forms and discharge sheets: formal written Spanish`,
  summary: `Understand deberá, se le informará and nominalisations, and say the same thing in plain Spanish.`,
  body: `<p>A consent form is not meant to be heard. Its formal written Spanish may sound unfamiliar even to a native speaker with limited schooling, so a signature is not proof of understanding. You must <b>understand</b> the formal forms and <b>say</b> the plain version aloud. Do not read a form to a patient as it is written.</p>
<h3>Formal forms and what they mean</h3>
<table><tr><th>Formal written form</th><th>Plain Spanish</th><th>Meaning</th></tr><tr><td>Deberá acudir</td><td>Tiene que venir</td><td>You must come</td></tr><tr><td>Se le informará</td><td>Le vamos a avisar</td><td>You will be told</td></tr><tr><td>La administración del medicamento</td><td>Cómo tomar la medicina</td><td>taking the medicine</td></tr><tr><td>En caso de presentar mareo</td><td>Si se siente mareado</td><td>if you feel dizzy</td></tr><tr><td>Queda prohibido</td><td>No se puede</td><td>it is not allowed</td></tr><tr><td>Podrá retirar su consentimiento</td><td>Puede cambiar de opinión</td><td>you can withdraw consent</td></tr></table>
<p>Typical features: <i>se</i> + future (<i>se le entregará</i>), the future for orders (<i>deberá</i>), nouns made from verbs (<i>la suspensión</i> for stopping), and phrases like <i>en caso de</i>, <i>a fin de</i> and <i>así como</i>.</p>
<h3>A sample discharge sheet</h3>
<p>This sample is invented. The formal lines, as the sheet might read:</p>
<ul><li><i>Se le ha dado de alta el día de hoy.</i></li><li><i>Deberá acudir a su cita de seguimiento en un plazo de siete días.</i></li><li><i>La administración del medicamento se realizará una vez al día, por la noche.</i></li><li><i>En caso de presentar somnolencia excesiva o mareo intenso, deberá comunicarse con la clínica.</i></li><li><i>Queda prohibido el consumo de alcohol durante el tratamiento.</i></li><li><i>Se le entregará una copia de este documento.</i></li><li><i>En caso de emergencia, llame al 988 (oprima 2) o acuda al servicio de urgencias.</i></li></ul>
<p>Say it in plain Spanish:</p>
<div class="ex"><b>Hoy le dieron de alta.</b><span>Today you were discharged.</span></div>
<div class="ex"><b>Tiene que venir a su cita dentro de siete días.</b><span>You have to come to your appointment within seven days.</span></div>
<div class="ex"><b>Tome la medicina una vez al día, por la noche.</b><span>Take the medicine once a day, at night.</span></div>
<div class="ex"><b>Si se siente muy dormido o muy mareado, llámenos.</b><span>If you feel very sleepy or very dizzy, call us.</span></div>
<div class="ex"><b>No tome alcohol mientras use esta medicina.</b><span>Do not drink alcohol while you use this medicine.</span></div>
<div class="ex"><b>Le vamos a dar una copia de este papel.</b><span>We are going to give you a copy of this paper.</span></div>
<div class="ex"><b>Si es una emergencia, llame al 988 (oprima 2) o venga a urgencias.</b><span>If it is an emergency, call 988 (press 2) or come to the emergency room.</span></div>
<div class="ex"><b>Entiendo que puedo retirar mi consentimiento en cualquier momento.</b><span>I understand that I can withdraw my consent at any time.</span></div>
<div class="ex"><b>¿Me puede decir con sus palabras lo que va a hacer?</b><span>Can you tell me in your own words what you are going to do?</span></div>
<div class="note">Clinical tip: use teach-back. After you explain, ask <i>¿Me puede decir con sus palabras…?</i> and do not ask only <i>¿Entendió?</i> Use a certified interpreter for consent, not a family member. Some patients cannot read well and are embarrassed; offer <i>¿Quiere que se lo lea yo?</i></div>
<h3>Common mistakes</h3>
<p><s>Deberá a acudir a su cita.</s> → <b>Deberá acudir a su cita.</b> Deber + infinitive, with no a.</p>
<p><s>Se le entregarán una copia.</s> → <b>Se le entregará una copia.</b> With se, the verb agrees with the thing: una copia, singular.</p>
<p><s>En caso de presenta mareo.</s> → <b>En caso de presentar mareo.</b> En caso de takes an infinitive.</p>`,
  quiz: [
    [`"Deberá acudir a su cita" means`, [`You may attend.`, `You must go to your appointment.`, `You went to your appointment.`, `You should have gone.`], 1, `Deberá + infinitive is a formal obligation.`],
    [`"Se le entregará una copia" means`, [`You will be given a copy.`, `You gave a copy.`, `A copy was lost.`, `You must copy it.`], 0, `Se le + future: a formal way to say what will be given to you.`],
    [`"La administración del medicamento" refers to`, [`the hospital office`, `giving or taking the medicine`, `the drug company`, `the price`], 1, `It is a noun made from administrar.`],
    [`Which is the best way to check that a patient understood a consent form?`, [`Ask "¿Entendió?" and wait for a yes`, `Ask the patient to explain it in their own words`, `Have a relative sign it`, `Read it faster`], 1, `Teach-back checks real understanding. A yes is not proof.`],
    [`"Queda prohibido el alcohol" means`, [`Alcohol is not allowed.`, `Alcohol is recommended.`, `Alcohol is remaining.`, `Alcohol is cheap.`], 0, `Queda prohibido = it is prohibited.`],
    [`"En caso de presentar mareo" means`, [`because of dizziness in the past`, `if you have dizziness`, `without dizziness`, `after dizziness`], 1, `En caso de + infinitive = if you have.`],
    [`Which plain Spanish says "Se recomienda suspender la conducción"?`, [`Maneje más.`, `Maneje con cuidado.`, `No maneje.`, `Maneje de noche.`], 2, `Suspender la conducción = stop driving.`]
  ],
  draft: true,
  after: 'advanced-pronouns'
  },
  {
  id: 'review-b2', level: 'B2', unit: 'Review', title: `Review: B2 summary and commonest confusions`,
  summary: `One table for the whole level, the confusions that remain, and a mixed quiz of 12.`,
  body: `<p>At B2 you listen for guilt, wishes and guesses, you choose the right mood, and you read formal documents. This lesson puts it on one page. Remember which points you <b>say</b> and which you only <b>understand</b>.</p>
<h3>B2 at a glance</h3>
<table><tr><th>Point</th><th>Model sentence</th></tr><tr><td>Imperfect subjunctive</td><td>Ojalá tuviera más energía.</td></tr><tr><td>Real si-clause</td><td>Si toma la medicina, se sentirá mejor.</td></tr><tr><td>Unreal present</td><td>Si tuviera trabajo, estaría más tranquilo.</td></tr><tr><td>Unreal past</td><td>Si hubiera pedido ayuda, habría empezado antes.</td></tr><tr><td>Regret</td><td>Debería haber llamado antes.</td></tr><tr><td>Aunque</td><td>Aunque se sienta mejor, siga tomándola.</td></tr><tr><td>Passive and se</td><td>Se necesitan dos firmas. El formulario está firmado.</td></tr><tr><td>Ser or estar</td><td>Es aburrido. Estoy aburrida.</td></tr><tr><td>Lo</td><td>Lo importante es que no está solo.</td></tr><tr><td>Guess</td><td>Estará cansada. Habrá llegado.</td></tr><tr><td>Markers</td><td>Es que no tengo cómo pagarla.</td></tr><tr><td>Casual speech (understand)</td><td>Estoy cansao de to'.</td></tr><tr><td>Pronouns (understand)</td><td>Se lo dije a mi hijo. Vos tenés.</td></tr><tr><td>Forms (understand)</td><td>Deberá acudir. Se le entregará una copia.</td></tr></table>
<h3>Commonest confusions</h3>
<ul><li><b>Si + conditional</b>: never. Use the imperfect or pluperfect subjunctive after si.</li><li><b>Aunque</b>: indicative for a known fact, subjunctive for "even if".</li><li><b>Ser and estar</b>: ser for a trait, estar for a state (<i>despierto, listo, aburrido</i>).</li><li><b>Es que</b> versus <b>es qué</b>: no accent when it announces a reason.</li><li><b>A ver</b> versus <i>haber</i>: two words for the marker.</li><li><b>A guess versus a fact</b>: estará, habrá, será que are guesses.</li><li><b>Say versus understand</b>: do not copy pa', cansao, vos, vosotros or formal forms.</li></ul>
<div class="ex"><b>Ojalá pudiera dormir toda la noche.</b><span>I wish I could sleep all night.</span></div>
<div class="ex"><b>Si hubiera llegado antes, todavía estaría con nosotros.</b><span>If I had arrived sooner, he would still be with us.</span></div>
<div class="ex"><b>Aunque me siento mejor, sigo con miedo.</b><span>Although I feel better, I am still afraid.</span></div>
<div class="ex"><b>Estoy aburrido todo el tiempo.</b><span>I am bored all the time.</span></div>
<div class="ex"><b>Lo que más me preocupa es el sueño.</b><span>What worries me most is sleep.</span></div>
<div class="ex"><b>Mi esposo estará preocupado.</b><span>My husband must be worried.</span></div>
<div class="ex"><b>Fíjese que no pude comprar la medicina.</b><span>You see, I could not buy the medicine.</span></div>
<div class="ex"><b>Tiene que venir a su cita dentro de siete días.</b><span>You have to come to your appointment within seven days.</span></div>
<div class="note">Clinical tip: the same few forms recur in distress: <i>ojalá</i>, <i>si hubiera</i>, <i>debería haber</i>, <i>será que</i>, <i>es que</i>. When you hear one, name the feeling behind it (wish, regret, guess, excuse), then ask a short open question.</div>`,
  quiz: [
    [`"Me mira como si no me ___." Which form completes it?`, [`entiende`, `entendió`, `entendiera`, `entendería`], 2, `Como si takes the imperfect subjunctive.`],
    [`"Si ___ más apoyo, no me sentiría tan sola." (She does not have support now.)`, [`tengo`, `tuviera`, `tendría`, `tendré`], 1, `Unreal present: si + imperfect subjunctive.`],
    [`What does "Debería haber llamado antes" mean?`, [`I should call earlier`, `I should have called earlier`, `I would have called earlier`, `I called earlier`], 1, `Debería haber + participle = should have done.`],
    [`"No sé si lloverá. Aunque ___, vendré."`, [`llueve`, `llovió`, `llovía`, `llueva`], 3, `The rain is uncertain and in the future: subjunctive.`],
    [`"El formulario ya está firmado" means`, [`The form is signed already.`, `The form will be signed.`, `Someone is signing the form.`, `The form has no signature.`], 0, `Estar + participle: the result.`],
    [`Which sentence says the patient is awake now?`, [`El paciente es despierto.`, `El paciente está despierto.`, `El paciente es despertado.`, `El paciente será despierto.`], 1, `A state, so estar.`],
    [`"___ que más me preocupa es el sueño."`, [`La`, `El`, `Eso`, `Lo`], 3, `Lo que = the thing that.`],
    [`"Habrá llegado" means`, [`He must have arrived.`, `He will arrive.`, `He arrived for sure.`, `He is arriving.`], 0, `Future perfect of probability.`],
    [`Which is written correctly?`, [`Es qué no tengo tiempo.`, `Haber, cuénteme.`, `A ver, cuénteme.`, `Osea, cuénteme.`], 2, `A ver is two words, and es que has no accent.`],
    [`"Voy pa'l hospital" means`, [`I go to the hospital.`, `I come from the hospital.`, `I pay the hospital.`, `I work at the hospital.`], 0, `Pa'l = para el. Understand it, do not copy it.`],
    [`Which is the voseo form of "you have"?`, [`tienes`, `tiene`, `tenéis`, `tenés`], 3, `Vos tenés. Tenéis is vosotros.`],
    [`"Deberá acudir a su cita" means`, [`You must come to your appointment.`, `You may skip your appointment.`, `You came to your appointment.`, `You did not come.`], 0, `Deberá + infinitive is a formal obligation.`]
  ],
  draft: true,
  after: 'chart-and-form-spanish',
  review: true
  }
]);
