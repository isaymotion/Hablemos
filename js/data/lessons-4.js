/* Lessons, part 4: the 15 B1 grammar lessons added in 0.7.0.
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Shape: window.LESSONS = (window.LESSONS || []).concat([ { id, level: 'B1', unit, title, summary, body: HTML, quiz: [[question, [options], correctIndex, explanation]], draft: true, after: '<lesson id>', review?: true } ]);
   Example lines inside body: <div class="ex"><b>Spanish sentence</b><span>English</span></div> (the b text is plain Spanish and is recorded); <div class="note">...</div>; <table>; <h3>; <p>; <ul>.
   Ids are permanent: append only after release. Quizzes have 7 items (12 in review-b1).
   Order: subjunctive-wishes, subjunctive-emotion-doubt, subjunctive-time-purpose, negative-commands-pronouns, future-conditional, pluperfect, reported-speech, relative-clauses, se-impersonal, se-accidental, verbs-of-change, periphrases, diminutives, prepositional-verbs, review-b1. */
window.LESSONS = (window.LESSONS || []).concat([
  {
  id: 'subjunctive-wishes', level: 'B1', unit: 'Subjunctive in use', title: `Wishes, requests and advice: querer que, esperar que, recomendar que`,
  summary: `Use que plus the subjunctive when one person wants, hopes, asks or advises something of another person.`,
  body: `<p>On the ward you tell people what you hope for and what you recommend, and patients tell you what they want from you and from their family. Most of these sentences use <i>que</i> plus the subjunctive. It sounds gentler than a bare command, and you will hear it all day: <i>Quiero que me dejen en paz.</i></p>
<h3>The rule: two people, two verbs</h3>
<p>When the person who wants and the person who acts are different, use <b>que</b> and the present subjunctive. When they are the same person, use the infinitive: <i>Quiero dormir</i> (I want to sleep), but <i>Quiero que usted duerma</i> (I want you to sleep).</p>
<table><tr><th>Trigger</th><th>Example</th><th>Meaning</th></tr><tr><td>querer que</td><td>Quiero que duerma mejor.</td><td>I want you to sleep better.</td></tr><tr><td>esperar que</td><td>Espero que se sienta mejor.</td><td>I hope you feel better.</td></tr><tr><td>pedir que</td><td>Le pido que venga el lunes.</td><td>I ask you to come on Monday.</td></tr><tr><td>recomendar que</td><td>Le recomiendo que tome la pastilla con comida.</td><td>I recommend that you take the pill with food.</td></tr><tr><td>necesitar que</td><td>Necesito que me diga cuánto toma al día.</td><td>I need you to tell me how much you take a day.</td></tr><tr><td>ojalá (que)</td><td>Ojalá que la medicina le ayude.</td><td>I hope the medicine helps you.</td></tr></table>
<p>Some subjunctives are irregular: <b>estar → esté, dar → dé, ir → vaya, saber → sepa, ser → sea</b>. Esté and dé keep a written accent.</p>
<div class="ex"><b>Quiero que me cuente qué pasó.</b><span>I want you to tell me what happened.</span></div>
<div class="ex"><b>Le recomiendo que tome la pastilla con comida.</b><span>I recommend that you take the pill with food.</span></div>
<div class="ex"><b>Espero que duerma mejor esta noche.</b><span>I hope you sleep better tonight.</span></div>
<div class="ex"><b>Necesito que me diga cuántas pastillas toma al día.</b><span>I need you to tell me how many pills you take a day.</span></div>
<div class="ex"><b>Le pido que no maneje si se siente mareado.</b><span>I ask you not to drive if you feel dizzy.</span></div>
<div class="ex"><b>¿Quiere que llame a su familia?</b><span>Do you want me to call your family?</span></div>
<div class="ex"><b>Prefiero que mi hija esté conmigo.</b><span>I prefer that my daughter be with me.</span></div>
<div class="ex"><b>Mi esposa quiere que yo vaya al doctor.</b><span>My wife wants me to go to the doctor.</span></div>
<div class="ex"><b>Ojalá que la medicina le ayude.</b><span>I hope the medicine helps you.</span></div>
<div class="ex"><b>La doctora sugiere que vuelva en una semana.</b><span>The doctor suggests that you come back in a week.</span></div>
<div class="note">Clinical tip: ask about goals with this frame. <i>¿Qué quiere que cambie con este tratamiento?</i> invites the patient to say what matters. Families often speak in it too: <i>Mi familia quiere que me quede en casa</i> tells you whose wish is driving the visit.</div>
<h3>Common mistakes</h3>
<p><s>Quiero que usted toma la pastilla</s> → <b>Quiero que usted tome la pastilla</b>. After querer que the verb is subjunctive, not the present indicative.</p>
<p><s>Espero que usted se siente mejor</s> → <b>Espero que usted se sienta mejor</b>. Esperar que also takes the subjunctive; sentir changes e to ie and then takes -a.</p>
<p><s>Quiero que duerma mejor</s> (meaning "I want to sleep better") → <b>Quiero dormir mejor</b>. With one person doing both, use the infinitive and no que.</p>`,
  quiz: [
    [`Quiero que usted ___ esta pastilla por la noche.`, [`toma`, `tomar`, `tome`, `tomó`], 2, `Querer que is followed by the subjunctive: tome.`],
    [`How does a patient say "I want to sleep better" (the patient is the one who sleeps)?`, [`Quiero que duerma mejor`, `Quiero dormir mejor`, `Quiero que dormir mejor`, `Quiero durmiendo mejor`], 1, `The same person wants and sleeps, so use the infinitive without que.`],
    [`Ojalá que la medicina le ___.`, [`ayude`, `ayuda`, `ayudar`, `ayudó`], 0, `Ojalá que takes the subjunctive: ayude.`],
    [`Le recomiendo que ___ a su familia.`, [`llamar`, `llama`, `llamó`, `llame`], 3, `Recomendar que takes the subjunctive: llame.`],
    [`How do you ask "Do you want me to call your family?"`, [`¿Quiere llamar a su familia?`, `¿Quiere que llamo a su familia?`, `¿Quiere que llame a su familia?`, `¿Quiere que llamar a su familia?`], 2, `Two different people (you and I), so que plus the subjunctive. The first option asks whether the patient wants to call.`],
    [`Espero que usted se ___ mejor mañana.`, [`siente`, `sienta`, `sentir`, `sintió`], 1, `Esperar que takes the subjunctive: sienta.`],
    [`Mi esposa quiere que yo ___ al doctor.`, [`voy`, `ir`, `fui`, `vaya`], 3, `Ir is irregular in the subjunctive: vaya.`]
  ],
  draft: true,
  after: 'subjunctive-basics'
  },
  {
  id: 'subjunctive-emotion-doubt', level: 'B1', unit: 'Subjunctive in use', title: `Emotion and doubt: me preocupa que, es posible que, no creo que`,
  summary: `Feelings and doubts take the subjunctive; certainty takes the indicative. Creo que and no creo que work differently.`,
  body: `<p>An interview mixes facts with feelings and doubts. <i>Me preocupa que no coma</i> shows the patient you care. <i>No creo que me ayuden</i> may tell you the patient feels hopeless. The mood of the verb depends on one thing: is the speaker reacting or doubting, or is the speaker sure?</p>
<h3>Emotion, doubt and possibility: subjunctive</h3>
<table><tr><th>Trigger</th><th>Example</th></tr><tr><td>me preocupa que</td><td>Me preocupa que no duerma.</td></tr><tr><td>me alegra que</td><td>Me alegra que esté aquí.</td></tr><tr><td>siento que (I am sorry that)</td><td>Siento que sufra tanto.</td></tr><tr><td>tengo miedo de que</td><td>Tengo miedo de que mis hijos me dejen.</td></tr><tr><td>es posible / es probable que</td><td>Es posible que la medicina le dé sueño.</td></tr><tr><td>dudo que / no creo que</td><td>No creo que me entiendan.</td></tr><tr><td>quizás / tal vez</td><td>Quizás venga mañana.</td></tr></table>
<h3>Certainty: indicative</h3>
<p>When the speaker is sure, the verb is indicative: <b>creo que, pienso que, estoy seguro de que, es verdad que</b>. The key pair is <b>creo que</b> (indicative) and <b>no creo que</b> (subjunctive). The negative creates doubt, and doubt triggers the subjunctive.</p>
<div class="ex"><b>Me preocupa que no coma bien.</b><span>It worries me that you are not eating well.</span></div>
<div class="ex"><b>Me alegra que esté aquí hoy.</b><span>I am glad you are here today.</span></div>
<div class="ex"><b>Siento que sufra tanto.</b><span>I am sorry that you suffer so much.</span></div>
<div class="ex"><b>Es posible que la medicina le dé sueño.</b><span>It is possible that the medicine makes you sleepy.</span></div>
<div class="ex"><b>Es probable que esto mejore con el tiempo.</b><span>It is likely that this will improve with time.</span></div>
<div class="ex"><b>Creo que la medicina le está ayudando.</b><span>I think the medicine is helping you.</span></div>
<div class="ex"><b>No creo que me ayuden.</b><span>I do not think they will help me.</span></div>
<div class="ex"><b>Dudo que me entiendan.</b><span>I doubt they understand me.</span></div>
<div class="ex"><b>Estoy seguro de que mi hermana viene mañana.</b><span>I am sure my sister is coming tomorrow.</span></div>
<div class="ex"><b>Quizás venga mañana.</b><span>Maybe he will come tomorrow.</span></div>
<div class="note">Clinical tip: <i>No creo que me ayuden</i> or <i>Dudo que esto sirva</i> are doubts about treatment and sometimes hopelessness. Ask what is behind them: <i>¿Qué le hace pensar eso?</i> Also note that <i>Siento que no valgo nada</i> is different. Here <i>siento que</i> means "I feel that" and takes the indicative. It is a feeling of worthlessness to explore.</div>
<h3>Common mistakes</h3>
<p><s>No creo que usted tiene depresión</s> → <b>No creo que usted tenga depresión</b>. No creo que expresses doubt, so use the subjunctive.</p>
<p><s>Creo que usted tenga ansiedad</s> → <b>Creo que usted tiene ansiedad</b>. Creo que without a negative states what you think, so use the indicative.</p>
<p><s>Dudo que viene</s> → <b>Dudo que venga</b>. Dudar que always takes the subjunctive.</p>`,
  quiz: [
    [`Creo que usted ___ mucho estrés.`, [`tenga`, `tiene`, `tener`, `teniendo`], 1, `Creo que states a belief, so the indicative tiene is used.`],
    [`No creo que el tratamiento me ___.`, [`ayuda`, `ayudar`, `ayude`, `ayudando`], 2, `No creo que expresses doubt and takes the subjunctive.`],
    [`Es posible que la medicina le ___ sueño.`, [`da`, `dé`, `dando`, `dar`], 1, `Es posible que takes the subjunctive: dé, with an accent.`],
    [`Me preocupa que usted no ___ bien.`, [`duerma`, `duerme`, `dormir`, `durmiendo`], 0, `A reaction of worry takes the subjunctive: duerma.`],
    [`Which sentence expresses doubt?`, [`Creo que es ansiedad.`, `Es verdad que es ansiedad.`, `Estoy seguro de que es ansiedad.`, `Dudo que sea ansiedad.`], 3, `Dudar que expresses doubt and takes the subjunctive (sea). The others state certainty.`],
    [`Estoy seguro de que mi hermana ___ mañana.`, [`venga`, `viene`, `vengan`, `venir`], 1, `Estoy seguro de que expresses certainty, so the indicative viene is used.`],
    [`Dudo que ellos me ___.`, [`entiendan`, `entienden`, `entender`, `entendido`], 0, `Dudar que takes the subjunctive: entiendan.`]
  ],
  draft: true,
  after: 'subjunctive-wishes'
  },
  {
  id: 'subjunctive-time-purpose', level: 'B1', unit: 'Subjunctive in use', title: `Time and purpose: cuando, hasta que, antes de que, para que`,
  summary: `After cuando and similar words, use the subjunctive for a future event and the indicative for a habit or a past event.`,
  body: `<p>Safety plans and discharge instructions are about the future: <i>Cuando sienta que no puede más, llame al 988.</i> The subjunctive after <i>cuando</i> is how you tell someone what to do when something happens that has not happened yet. This is one of the most useful B1 patterns on a ward.</p>
<h3>Future or not yet: subjunctive. Habit or past: indicative.</h3>
<table><tr><th>Word</th><th>Habit or past (indicative)</th><th>Future (subjunctive)</th></tr><tr><td>cuando</td><td>Cuando me siento mal, no como.</td><td>Cuando se sienta mal, llame.</td></tr><tr><td>en cuanto</td><td>En cuanto me despierto, tomo la pastilla.</td><td>Tome la pastilla en cuanto se despierte.</td></tr><tr><td>hasta que</td><td>Espero hasta que llega mi hija.</td><td>Espere hasta que llegue su hija.</td></tr><tr><td>después de que</td><td>Después de que como, me acuesto.</td><td>Después de que coma, descanse.</td></tr></table>
<p>Two words always take the subjunctive: <b>para que</b> (so that) and <b>antes de que</b> (before). If the subject does not change, use the infinitive: <i>antes de dormir, para dormir</i>.</p>
<div class="ex"><b>Cuando sienta que no puede más, llame al 988 y oprima 2 para español.</b><span>When you feel you cannot go on, call 988 and press 2 for Spanish.</span></div>
<div class="ex"><b>Cuando salga del hospital, venga a la clínica en una semana.</b><span>When you leave the hospital, come to the clinic in a week.</span></div>
<div class="ex"><b>Tome la pastilla en cuanto se despierte.</b><span>Take the pill as soon as you wake up.</span></div>
<div class="ex"><b>No deje la medicina hasta que hablemos.</b><span>Do not stop the medicine until we talk.</span></div>
<div class="ex"><b>Llámeme antes de que se acabe la medicina.</b><span>Call me before the medicine runs out.</span></div>
<div class="ex"><b>Le doy una receta para que tenga medicina para un mes.</b><span>I am giving you a prescription so that you have medicine for a month.</span></div>
<div class="ex"><b>Cuando me siento triste, no quiero comer.</b><span>When I feel sad, I do not want to eat.</span></div>
<div class="ex"><b>Voy a esperar hasta que llegue mi hija.</b><span>I am going to wait until my daughter arrives.</span></div>
<div class="ex"><b>Siempre tomo café cuando me despierto.</b><span>I always have coffee when I wake up.</span></div>
<div class="ex"><b>Cuando llegue a casa, voy a cenar.</b><span>When I get home, I am going to have dinner.</span></div>
<div class="note">Clinical tip: a safety plan is a chain of cuando sentences. <i>Cuando note las señales, haga esto. Cuando no mejore, llame a esta persona.</i> Ask the patient to say the plan back in their own words. Notice the difference in questions: <i>¿Qué hace cuando se siente así?</i> (habit, indicative) asks about the past pattern, and <i>¿Qué va a hacer cuando se sienta así?</i> (future, subjunctive) asks about the plan.</div>
<h3>Common mistakes</h3>
<p><s>Cuando llega a casa, llámeme</s> → <b>Cuando llegue a casa, llámeme</b>. The arrival has not happened yet, so use the subjunctive.</p>
<p><s>Llame antes de que viene</s> → <b>Llame antes de que venga</b>. Antes de que always takes the subjunctive.</p>
<p><s>Le doy una cita para que sabemos cómo le va</s> → <b>Le doy una cita para que sepamos cómo le va</b>. Para que always takes the subjunctive; saber is irregular (sepa, sepamos).</p>`,
  quiz: [
    [`Cuando ___ a casa, avise a su familia.`, [`llega`, `llegando`, `llegue`, `llegó`], 2, `The arrival is in the future, so the subjunctive llegue is used.`],
    [`Todos los días, cuando me ___, tomo la pastilla.`, [`despierte`, `despierto`, `despertar`, `despertaré`], 1, `A daily habit takes the indicative: despierto.`],
    [`Espere aquí hasta que el doctor lo ___.`, [`llame`, `llama`, `llamó`, `llamando`], 0, `The call has not happened yet, so use the subjunctive llame.`],
    [`Antes de ___ la pastilla, coma algo.`, [`tome`, `tomo`, `que tomo`, `tomar`], 3, `The subject is the same, so use the infinitive after antes de.`],
    [`Le doy una cita para que ___ cómo le va.`, [`sabemos`, `saber`, `sepamos`, `supimos`], 2, `Para que takes the subjunctive: sepamos.`],
    [`¿Qué hace cuando se ___ así? (asking about the usual pattern)`, [`sienta`, `siente`, `sintió`, `sentirse`], 1, `A habit after cuando takes the indicative: siente.`],
    [`En cuanto se ___, siéntese.`, [`marea`, `marearse`, `maree`, `mareó`], 2, `The dizziness is in the future, so the subjunctive maree is used.`]
  ],
  draft: true,
  after: 'subjunctive-emotion-doubt'
  },
  {
  id: 'negative-commands-pronouns', level: 'B1', unit: 'Subjunctive in use', title: `Negative commands and pronouns: tómela, no la tome`,
  summary: `Negative commands use the subjunctive, and pronouns go before them but attach to the end of positive commands.`,
  body: `<p>Medicine instructions are full of pronouns: <i>Tómela con comida. No la tome con alcohol.</i> The pronoun moves, and a written accent appears. Learn the pattern once and you can give and understand most instructions on the ward.</p>
<h3>Where the pronoun goes</h3>
<p>A negative command is the usted subjunctive with the pronoun in front of the verb. A positive command attaches the pronoun to the end, and the word keeps its stress with a written accent.</p>
<table><tr><th>Positive</th><th>Negative</th><th>Meaning</th></tr><tr><td>Tómela.</td><td>No la tome.</td><td>Take it. / Do not take it.</td></tr><tr><td>Siéntese.</td><td>No se siente.</td><td>Sit down. / Do not sit down.</td></tr><tr><td>Levántese.</td><td>No se levante.</td><td>Get up. / Do not get up.</td></tr><tr><td>Dígame.</td><td>No me diga.</td><td>Tell me. / Do not tell me.</td></tr><tr><td>Dígamelo.</td><td>No me lo diga.</td><td>Tell it to me. / Do not tell it to me.</td></tr><tr><td>Déme.</td><td>No me dé.</td><td>Give me. / Do not give me.</td></tr></table>
<p>With two pronouns, the order is always <b>me, te, se, nos</b> first and <b>lo, la, los, las</b> second. With tú (teens and children): <i>Tómala, no la tomes.</i></p>
<div class="ex"><b>Tómela con comida.</b><span>Take it with food.</span></div>
<div class="ex"><b>No la tome con alcohol.</b><span>Do not take it with alcohol.</span></div>
<div class="ex"><b>Déme su brazo, por favor.</b><span>Give me your arm, please.</span></div>
<div class="ex"><b>No se levante todavía.</b><span>Do not get up yet.</span></div>
<div class="ex"><b>No se quede solo esta noche.</b><span>Do not stay alone tonight.</span></div>
<div class="ex"><b>Llámeme si tiene preguntas.</b><span>Call me if you have questions.</span></div>
<div class="ex"><b>No deje de tomarla sin hablar con nosotros.</b><span>Do not stop taking it without talking to us.</span></div>
<div class="ex"><b>Dígamelo con confianza.</b><span>Tell it to me with trust.</span></div>
<div class="ex"><b>No se preocupe, aquí estamos para ayudarle.</b><span>Do not worry, we are here to help you.</span></div>
<div class="ex"><b>Respira conmigo y no te vayas.</b><span>Breathe with me and do not leave.</span></div>
<div class="note">Clinical tip: a negative command works better with a reason and a positive alternative. <i>No se quede solo esta noche; pídale a alguien de confianza que lo acompañe.</i> Written accents matter on labels: <i>tómela</i> and <i>tomela</i> look different to a reader who is learning the pattern.</div>
<h3>Common mistakes</h3>
<p><s>No tómela</s> → <b>No la tome</b>. In a negative command the pronoun goes before the verb, and the verb is the subjunctive.</p>
<p><s>Tomela con agua</s> → <b>Tómela con agua</b>. The stress stays on the same syllable as in tome, so it needs a written accent.</p>
<p><s>Dígalo me</s> → <b>Dígamelo</b>. Pronouns attach in the order me, then lo, as one word after the verb.</p>`,
  quiz: [
    [`How do you say "Do not take it (la pastilla) with alcohol"?`, [`No tómela con alcohol`, `No la tomar con alcohol`, `No la tome con alcohol`, `No la tomas con alcohol`], 2, `A negative command is the subjunctive with the pronoun before the verb.`],
    [`How do you say "Take it (la pastilla) with food"?`, [`La tome con comida`, `Tome la con comida`, `Tomela con comida`, `Tómela con comida`], 3, `A positive command attaches the pronoun and needs the accent.`],
    [`How do you say "Sit down, please"?`, [`Siéntese, por favor`, `Siente se, por favor`, `Se sentarse, por favor`, `Siéntase, por favor`], 0, `Sentarse in the usted command is siéntese. Siéntase would be from sentirse (to feel).`],
    [`How do you say "Do not stay alone tonight"?`, [`No quédese solo esta noche`, `No se quede solo esta noche`, `No se queda solo esta noche`, `Quédese no solo esta noche`], 1, `A negative command is no + pronoun + subjunctive: no se quede.`],
    [`How do you say "Tell it to me"?`, [`Dígalo me`, `Me lo diga`, `Dígame lo`, `Dígamelo`], 3, `Pronouns attach in order, me then lo, with an accent: dígamelo.`],
    [`How do you say "Do not get up yet"?`, [`No se levante todavía`, `No levántese todavía`, `No se levanta todavía`, `Levántese no todavía`], 0, `Negative command: no + se + levante.`],
    [`Why does tómela have a written accent?`, [`It marks a question`, `It marks the plural`, `It keeps the stress of tome on the same syllable`, `It marks the past tense`], 2, `Adding a pronoun moves the stress, so the accent keeps it where it was.`]
  ],
  draft: true,
  after: 'subjunctive-time-purpose'
  },
  {
  id: 'future-conditional', level: 'B1', unit: 'Tenses and reporting', title: `Future and conditional: tendrá, podría, debería, me gustaría`,
  summary: `Use the future for plans and promises and the conditional for polite requests and advice.`,
  body: `<p>In speech, Spanish often uses <i>ir a</i> for the future. Still, the future tense appears in appointments, results and formal instructions (<i>La doctora lo verá el lunes</i>), and the conditional is the polite voice of the clinic: <i>¿Podría decirme…? Me gustaría hacerle unas preguntas.</i></p>
<h3>Future and conditional forms</h3>
<p>Add the endings to the whole infinitive. Future: <b>-é, -ás, -á, -emos, -án</b>. Conditional: <b>-ía, -ías, -ía, -íamos, -ían</b>. Some verbs change the stem, and the same stem serves both tenses.</p>
<table><tr><th>Infinitive</th><th>Stem</th><th>Future (él / usted)</th><th>Conditional (yo / usted)</th></tr><tr><td>tomar</td><td>tomar-</td><td>tomará</td><td>tomaría</td></tr><tr><td>tener</td><td>tendr-</td><td>tendrá</td><td>tendría</td></tr><tr><td>poder</td><td>podr-</td><td>podrá</td><td>podría</td></tr><tr><td>hacer</td><td>har-</td><td>hará</td><td>haría</td></tr><tr><td>decir</td><td>dir-</td><td>dirá</td><td>diría</td></tr><tr><td>venir</td><td>vendr-</td><td>vendrá</td><td>vendría</td></tr><tr><td>salir, poner, saber, querer</td><td>saldr-, pondr-, sabr-, querr-</td><td>saldrá, pondrá</td><td>saldría, sabría</td></tr></table>
<p>Use the future for what will happen at the clinic and for promises you can keep. Use the conditional for requests, wishes and advice. In everyday Mexican speech <i>ir a</i> often replaces the future (<i>Vamos a llamarle mañana</i>), but you will still read and hear the future in formal instructions and results.</p>
<div class="ex"><b>Le llamaremos mañana con los resultados.</b><span>We will call you tomorrow with the results.</span></div>
<div class="ex"><b>La doctora lo verá en una semana.</b><span>The doctor will see you in a week.</span></div>
<div class="ex"><b>Tendrá que volver el lunes.</b><span>You will have to come back on Monday.</span></div>
<div class="ex"><b>¿Podría decirme cuánto toma al día?</b><span>Could you tell me how much you take a day?</span></div>
<div class="ex"><b>Me gustaría hacerle unas preguntas.</b><span>I would like to ask you a few questions.</span></div>
<div class="ex"><b>Debería hablar con su familia sobre esto.</b><span>You should talk to your family about this.</span></div>
<div class="ex"><b>Le sugeriría empezar con terapia.</b><span>I would suggest starting with therapy.</span></div>
<div class="ex"><b>Me gustaría dormir sin pastillas.</b><span>I would like to sleep without pills.</span></div>
<div class="ex"><b>Mañana hará frío.</b><span>Tomorrow it will be cold.</span></div>
<div class="ex"><b>Yo en su lugar descansaría un poco.</b><span>If I were you, I would rest a little.</span></div>
<div class="note">Clinical tip: the conditional makes advice and requests gentler: <i>¿Podría… ?</i> and <i>Debería…</i> sound softer than <i>Puede… </i> and <i>Tiene que…</i>. Be careful with the future as a promise. <i>Todo saldrá bien</i> can sound false to a patient in crisis. <i>Vamos a trabajar juntos en esto</i> is honest and warm.</div>
<h3>Common mistakes</h3>
<p><s>Yo teneré una cita</s> → <b>Yo tendré una cita</b>. Tener has the irregular stem tendr-.</p>
<p><s>Cuando era niño, jugaría afuera todos los días</s> → <b>Cuando era niño, jugaba afuera todos los días</b>. English "would" for a past habit is the imperfect in Spanish, not the conditional.</p>
<p><s>La doctora haceré la receta</s> → <b>La doctora hará la receta</b>. Hacer has the stem har-, and the ending must match the person.</p>`,
  quiz: [
    [`What is the future of tener for yo?`, [`teneré`, `tendría`, `tendré`, `tenga`], 2, `Tener has the stem tendr-: tendré.`],
    [`Which form means "Could you tell me…?"`, [`¿Podrá decirme…?`, `¿Podría decirme…?`, `¿Pudo decirme…?`, `¿Poder decirme…?`], 1, `Podría is the conditional, the polite form of a request. Podrá means "will you be able".`],
    [`How do you say "We will call you tomorrow"?`, [`Le llamábamos mañana`, `Le llamamos ayer`, `Le llamado mañana`, `Le llamaremos mañana`], 3, `Llamar + -emos gives the future: llamaremos.`],
    [`Cuando era niño, ___ afuera todos los días.`, [`jugaba`, `jugaría`, `jugaré`, `juegue`], 0, `A habit in the past uses the imperfect: jugaba.`],
    [`Me ___ hacerle unas preguntas. (I would like to)`, [`gustará`, `gusto`, `gustaría`, `gustó`], 2, `Me gustaría is the conditional used for polite wishes.`],
    [`What is the future of hacer for ella?`, [`hacerá`, `haría`, `haga`, `hará`], 3, `Hacer has the stem har-: hará. Haría is the conditional.`],
    [`How do you say "You should talk to your family"?`, [`Debería hablar con su familia`, `Debía hablaron con su familia`, `Deberé hablar con su familia`, `Debe hablando con su familia`], 0, `Debería + infinitive gives polite advice.`]
  ],
  draft: true,
  after: 'negative-commands-pronouns'
  },
  {
  id: 'pluperfect', level: 'B1', unit: 'Tenses and reporting', title: `Before the past: había tomado, había dejado`,
  summary: `Use había plus the participle for what had already happened before another past moment.`,
  body: `<p>A good history is a timeline. Patients and families say what happened first and what came next: <i>Ya había dejado la medicina cuando llegó a urgencias.</i> The pluperfect (había + participle) is the tool for the earlier event.</p>
<h3>Forms</h3>
<p>Use the imperfect of <i>haber</i> and a participle (-ado for -ar verbs, -ido for -er and -ir verbs).</p>
<table><tr><th>Person</th><th>Form</th><th>Example</th></tr><tr><td>yo</td><td>había tomado</td><td>Ya había tomado la pastilla.</td></tr><tr><td>tú</td><td>habías dormido</td><td>¿Habías dormido antes?</td></tr><tr><td>usted, él, ella</td><td>había comido</td><td>No había comido nada.</td></tr><tr><td>nosotros</td><td>habíamos hablado</td><td>Ya habíamos hablado.</td></tr><tr><td>ustedes, ellos</td><td>habían salido</td><td>Ya habían salido.</td></tr></table>
<p>Irregular participles: <b>hecho, dicho, visto, escrito, puesto, vuelto, abierto, roto</b>. Useful words: <b>ya</b> (already), <b>todavía no</b> (not yet), <b>nunca</b> (never), <b>antes</b> (before).</p>
<p>The pluperfect usually appears with a second verb in the preterite that gives the later moment: <i>Había dejado la medicina cuando llegó.</i> Pronouns go before <i>había</i>, and nothing comes between <i>había</i> and the participle: <i>ya se había tomado, no me lo habían dicho</i>.</p>
<div class="ex"><b>¿Había tenido esta ansiedad antes?</b><span>Had you had this anxiety before?</span></div>
<div class="ex"><b>Nunca me había sentido tan mal.</b><span>I had never felt so bad.</span></div>
<div class="ex"><b>Ya había dejado la medicina cuando llegó a urgencias.</b><span>He had already stopped the medicine when he arrived in the ER.</span></div>
<div class="ex"><b>¿Ya se había tomado la pastilla antes de venir?</b><span>Had you already taken the pill before coming?</span></div>
<div class="ex"><b>Había dormido bien hasta que empezaron las pesadillas.</b><span>I had slept well until the nightmares started.</span></div>
<div class="ex"><b>Me habían dicho que era normal.</b><span>They had told me it was normal.</span></div>
<div class="ex"><b>La familia no había notado nada raro.</b><span>The family had not noticed anything unusual.</span></div>
<div class="ex"><b>Cuando llegué a la clínica, la doctora ya había salido.</b><span>When I got to the clinic, the doctor had already left.</span></div>
<div class="ex"><b>Todavía no habíamos hablado de eso.</b><span>We had not talked about that yet.</span></div>
<div class="ex"><b>Mi hijo ya había comido cuando llegamos.</b><span>My son had already eaten when we arrived.</span></div>
<div class="note">Clinical tip: use the pluperfect to build a timeline with collateral. <i>¿Qué había pasado antes de que dejara de dormir?</i> and <i>¿Había tenido algo parecido alguna vez?</i> ask for the earlier event. The pluperfect also helps you hear a missed history: <i>Ya había intentado dejar el alcohol</i> signals a prior attempt to ask about.</div>
<h3>Common mistakes</h3>
<p><s>Cuando llegué, ya he comido</s> → <b>Cuando llegué, ya había comido</b>. If the reference point is in the past, use había, not he.</p>
<p><s>Había hacido la cita</s> → <b>Había hecho la cita</b>. Hacer has the irregular participle hecho.</p>
<p><s>Tenía tomado la pastilla</s> → <b>Había tomado la pastilla</b>. Tener is not the helping verb here; use haber.</p>`,
  quiz: [
    [`What is the participle of hacer?`, [`hacido`, `hecho`, `haciendo`, `hizo`], 1, `Hacer has the irregular participle hecho.`],
    [`Cuando llegamos, el paciente ya ___ la medicina.`, [`ha dejado`, `deja`, `dejaría`, `había dejado`], 3, `An event before another past moment takes the pluperfect: había dejado.`],
    [`Antes de ese día, nunca me ___ sentido así.`, [`había`, `he`, `habré`, `hay`], 0, `The reference point is in the past, so había is used.`],
    [`Which form means "had told"?`, [`dijeron`, `han dicho`, `habían dicho`, `dirían`], 2, `Habían + dicho is the pluperfect: had told.`],
    [`What is the participle of ver?`, [`veído`, `viendo`, `vio`, `visto`], 3, `Ver has the irregular participle visto.`],
    [`Ya ___ comido cuando usted llamó. (we)`, [`hemos`, `habíamos`, `habremos`, `hay`], 1, `The earlier past event takes habíamos.`],
    [`Hasta ese día, todavía no ___ hablado de eso.`, [`hemos`, `habremos`, `hay`, `habíamos`], 3, `Hasta ese día sets a past reference point, so habíamos is used.`]
  ],
  draft: true,
  after: 'future-conditional'
  },
  {
  id: 'reported-speech', level: 'B1', unit: 'Tenses and reporting', title: `Reported speech: dice que, dijo que, me dijo que tomara`,
  summary: `Report what other people said, with the tense shifts, so you can handle collateral history and what patients were told.`,
  body: `<p>Much of what you learn arrives second-hand: <i>Su esposa dice que usted no duerme. Mi hijo me dijo que estaba muy triste.</i> Collateral history is reported speech. You must hear who said what, and you must report it without making it sound like your own conclusion.</p>
<h3>The tense shift</h3>
<p>If the reporting verb is in the present (<i>dice que</i>), the verb inside does not change. If it is in the past (<i>dijo que</i>), the tense moves back.</p>
<table><tr><th>What was said</th><th>Reported (past)</th></tr><tr><td>Estoy triste. (present)</td><td>Dijo que estaba triste.</td></tr><tr><td>Dejé la medicina. (preterite)</td><td>Dijo que había dejado la medicina.</td></tr><tr><td>Vendré mañana. (future)</td><td>Dijo que vendría al día siguiente.</td></tr><tr><td>Tome la pastilla. (command)</td><td>Me dijo que tomara la pastilla.</td></tr><tr><td>¿Durmió bien? (yes/no question)</td><td>Preguntó si había dormido bien.</td></tr></table>
<p>For a reported command use <b>que</b> plus the imperfect subjunctive (<i>tomara, manejara, volviera</i>). You only need to recognize it at this level: take the ellos form of the preterite (<i>tomaron</i>), drop <i>-ron</i>, and add <b>-ra</b>. The person also changes: "Me siento mal" becomes <i>dijo que se sentía mal</i>.</p>
<div class="ex"><b>Su esposa dice que usted no duerme por las noches.</b><span>Your wife says that you do not sleep at night.</span></div>
<div class="ex"><b>Su hijo me dijo que usted estaba muy triste.</b><span>Your son told me you were very sad.</span></div>
<div class="ex"><b>Ella me contó que había dejado la medicina.</b><span>She told me she had stopped the medicine.</span></div>
<div class="ex"><b>El doctor me dijo que tomara la pastilla por la noche.</b><span>The doctor told me to take the pill at night.</span></div>
<div class="ex"><b>Me dijeron que no manejara.</b><span>They told me not to drive.</span></div>
<div class="ex"><b>La enfermera preguntó si había dormido.</b><span>The nurse asked if I had slept.</span></div>
<div class="ex"><b>Dijo que vendría mañana.</b><span>He said he would come tomorrow.</span></div>
<div class="ex"><b>Su hermano dice que oye voces por la noche.</b><span>His brother says that he hears voices at night.</span></div>
<div class="ex"><b>Mi mamá me dijo que me cuidara.</b><span>My mother told me to take care of myself.</span></div>
<div class="ex"><b>Ayer dijo que estaba bien.</b><span>Yesterday he said he was fine.</span></div>
<div class="note">Clinical tip: always name the source. <i>Su esposa dice que usted duerme poco. ¿Qué piensa usted?</i> keeps the family's view separate from the patient's and gives the patient a chance to answer. Do not say <i>Todos dicen que…</i>, which sounds like a group against the patient.</div>
<h3>Common mistakes</h3>
<p><s>La enfermera preguntó que había dormido</s> → <b>La enfermera preguntó si había dormido</b>. A reported yes/no question uses si, not que.</p>
<p><s>El doctor me dijo que tomo la pastilla</s> → <b>El doctor me dijo que tomara la pastilla</b>. A reported instruction uses the subjunctive, not the present.</p>
<p><s>Ella dijo que me siento mal</s> → <b>Ella dijo que se sentía mal</b>. Reporting changes the person (me to se) and the tense (siento to sentía).</p>`,
  quiz: [
    [`Su esposa dice que usted no ___ por las noches.`, [`duerma`, `duerme`, `dormir`, `durmiendo`], 1, `After a present reporting verb the indicative stays: duerme.`],
    [`Me dijeron que no ___. (they told me not to drive)`, [`manejo`, `manejé`, `manejar`, `manejara`], 3, `A reported command uses que plus the imperfect subjunctive: manejara.`],
    [`La enfermera preguntó ___ había dormido.`, [`de`, `si`, `a`, `por`], 1, `A reported yes/no question uses si.`],
    [`"Vendré mañana." Dijo que ___ al día siguiente.`, [`vendría`, `vendré`, `viene`, `venga`], 0, `The future shifts to the conditional: vendría.`],
    [`How do you say "The doctor told me to take the pill at night"?`, [`El doctor me dijo que tomo la pastilla por la noche`, `El doctor me dijo que tomé la pastilla por la noche`, `El doctor me dijo que tomara la pastilla por la noche`, `El doctor me dijo que tomaré la pastilla por la noche`], 2, `A reported instruction takes the imperfect subjunctive: tomara.`],
    [`Which is the best way to share collateral with the patient?`, [`Su esposa dice que usted duerme poco. ¿Qué piensa usted?`, `Usted duerme poco, es un hecho.`, `Todos dicen que usted está mal.`, `Su esposa miente, ¿verdad?`], 0, `Name the source and ask for the patient's view.`],
    [`"Me siento mal." Ella dijo que ___.`, [`me siento mal`, `se sentía mal`, `te sientes mal`, `nos sentimos mal`], 1, `The person and the tense change: se sentía mal.`]
  ],
  draft: true,
  after: 'pluperfect'
  },
  {
  id: 'relative-clauses', level: 'B1', unit: 'Tenses and reporting', title: `Relative clauses: que, quien, donde, lo que`,
  summary: `Join ideas with que, quien, donde and lo que, and use the subjunctive when the person or thing is unknown or does not exist.`,
  body: `<p>Relative words let you build longer, more natural sentences: <i>la pastilla que toma en la noche, la persona con quien vive, lo que le pasa</i>. They also reveal supports and risks: <i>¿Hay alguien en quien confíe?</i> asks about a trusted person, and the mood of the verb shows whether you expect an answer.</p>
<h3>The main words</h3>
<table><tr><th>Word</th><th>Use</th><th>Example</th></tr><tr><td>que</td><td>the usual word, for people and things</td><td>La pastilla que toma es para dormir.</td></tr><tr><td>quien, quienes</td><td>people, mainly after a preposition</td><td>La persona con quien vive es su hermana.</td></tr><tr><td>donde</td><td>place</td><td>La clínica donde lo atendieron queda cerca.</td></tr><tr><td>lo que</td><td>"what" or "the thing that"</td><td>Cuénteme lo que le pasa.</td></tr><tr><td>el que, la que, los que</td><td>"the one who", "those who"</td><td>Los que toman esta medicina a veces sienten sueño.</td></tr></table>
<h3>Known or unknown: indicative or subjunctive</h3>
<p>If the person or thing exists and you know it, use the indicative: <i>Tengo una amiga que me escucha.</i> If it is unknown, wished for or does not exist, use the subjunctive: <i>Necesito un doctor que hable español. No hay nadie que me entienda.</i></p>
<div class="ex"><b>La pastilla que toma en la noche es para dormir.</b><span>The pill you take at night is for sleeping.</span></div>
<div class="ex"><b>¿Quién es la persona con quien vive?</b><span>Who is the person you live with?</span></div>
<div class="ex"><b>¿Hay alguien en quien usted confíe?</b><span>Is there someone you trust?</span></div>
<div class="ex"><b>Cuénteme lo que le pasa.</b><span>Tell me what is happening to you.</span></div>
<div class="ex"><b>Lo que más me preocupa es que no duerme.</b><span>What worries me most is that you are not sleeping.</span></div>
<div class="ex"><b>No hay nadie que me entienda.</b><span>There is no one who understands me.</span></div>
<div class="ex"><b>Busco un doctor que hable español.</b><span>I am looking for a doctor who speaks Spanish.</span></div>
<div class="ex"><b>Tengo una amiga que me escucha siempre.</b><span>I have a friend who always listens to me.</span></div>
<div class="ex"><b>La casa donde nací está en Puebla.</b><span>The house where I was born is in Puebla.</span></div>
<div class="ex"><b>El libro que leo es muy largo.</b><span>The book I am reading is very long.</span></div>
<div class="note">Clinical tip: a patient who says <i>No hay nadie que me entienda</i> or <i>No tengo a nadie en quien confiar</i> is describing isolation, which is a risk factor. Follow up gently: <i>¿Quién fue la última persona que le escuchó de verdad?</i> Then ask who could be a support now.</div>
<h3>Common mistakes</h3>
<p><s>Dígame que le pasa</s> → <b>Dígame lo que le pasa</b>. Use lo que for "what" inside a statement; qué is for questions.</p>
<p><s>La persona que vive con</s> → <b>La persona con quien vive</b>. After a preposition, use quien (or el que): the preposition cannot hang at the end.</p>
<p><s>No hay nadie que me entiende</s> → <b>No hay nadie que me entienda</b>. A person who does not exist takes the subjunctive.</p>`,
  quiz: [
    [`Cuénteme ___ le pasa.`, [`que`, `lo que`, `quien`, `donde`], 1, `Lo que means "what" in a statement.`],
    [`La persona con ___ vive es su hermana.`, [`donde`, `lo que`, `que`, `quien`], 3, `After a preposition, use quien for a person.`],
    [`La casa ___ nací está en Puebla.`, [`que`, `quien`, `donde`, `lo que`], 2, `Donde refers to a place.`],
    [`No hay nadie que me ___.`, [`entiende`, `entender`, `entienda`, `entendió`], 2, `A person who does not exist takes the subjunctive: entienda.`],
    [`Necesito un doctor que ___ español, pero no conozco a ninguno.`, [`habla`, `hablar`, `habló`, `hable`], 3, `The doctor is unknown, so the subjunctive hable is used.`],
    [`Tengo una amiga que me ___ siempre.`, [`escuche`, `escucha`, `escuchar`, `escuchando`], 1, `The friend exists and is known, so the indicative escucha is used.`],
    [`How do you say "What worries me is…"?`, [`Que me preocupa es…`, `Lo que me preocupa es…`, `Lo cual me preocupa es…`, `Quien me preocupa es…`], 1, `Lo que starts a clause meaning "what".`]
  ],
  draft: true,
  after: 'reported-speech'
  },
  {
  id: 'se-impersonal', level: 'B1', unit: 'Se and change', title: `Impersonal se: se dice, se puede, se recomienda`,
  summary: `Use se plus a third-person verb for "one", "people" and general rules: signs, instructions and what is said in a community.`,
  body: `<p>Signs, forms and instructions rarely name a person: <i>Aquí se habla español. No se puede fumar. Se recomienda tomar la medicina con comida.</i> The same pattern lets patients report beliefs without owning them: <i>Se dice que el susto enferma.</i></p>
<h3>The pattern</h3>
<p>Put <b>se</b> before a third-person verb. If a noun follows, the verb agrees with it: singular noun, singular verb; plural noun, plural verb. With an infinitive, the verb stays singular.</p>
<table><tr><th>Pattern</th><th>Example</th><th>Meaning</th></tr><tr><td>se + singular verb</td><td>Se necesita una cita.</td><td>An appointment is needed.</td></tr><tr><td>se + plural verb</td><td>Se toman dos pastillas al día.</td><td>Two pills are taken a day.</td></tr><tr><td>se + verb + infinitive</td><td>No se puede fumar aquí.</td><td>One cannot smoke here.</td></tr><tr><td>se dice que</td><td>Se dice que el susto enferma.</td><td>It is said that fright makes you ill.</td></tr></table>
<div class="ex"><b>Aquí se habla español.</b><span>Spanish is spoken here.</span></div>
<div class="ex"><b>Se recomienda tomar la medicina con comida.</b><span>It is recommended to take the medicine with food.</span></div>
<div class="ex"><b>No se puede fumar dentro del hospital.</b><span>Smoking is not allowed inside the hospital.</span></div>
<div class="ex"><b>Las visitas se permiten de las dos a las cuatro.</b><span>Visits are allowed from two to four.</span></div>
<div class="ex"><b>Se necesita una cita para ver a la doctora.</b><span>An appointment is needed to see the doctor.</span></div>
<div class="ex"><b>Se toma una pastilla por la noche.</b><span>One pill is taken at night.</span></div>
<div class="ex"><b>Se dice que el susto puede enfermar a una persona.</b><span>It is said that a fright can make a person ill.</span></div>
<div class="ex"><b>En mi pueblo se cree que el mal de ojo enferma a los niños.</b><span>In my town people believe the evil eye makes children ill.</span></div>
<div class="ex"><b>¿Cómo se llama esta medicina?</b><span>What is this medicine called?</span></div>
<div class="ex"><b>Se duerme mejor con una rutina.</b><span>One sleeps better with a routine.</span></div>
<div class="note">Clinical tip: <i>se dice que</i> and <i>se cree que</i> let a patient share a folk belief safely, and they let you ask without judging: <i>¿Qué se dice en su familia sobre esto?</i> This is better than <i>¿Usted cree en eso?</i> when you are deciding whether a belief is cultural or a delusion. The sign <i>Se habla español</i> is a promise; make sure it is true for the person at the desk.</div>
<h3>Common mistakes</h3>
<p><s>Se toma dos pastillas</s> → <b>Se toman dos pastillas</b>. The verb agrees with the plural noun that follows.</p>
<p><s>No puede fumar aquí</s> → <b>No se puede fumar aquí</b>. For a general rule, use se; without it, the sentence addresses one person.</p>
<p><s>Es dicho que el susto enferma</s> → <b>Se dice que el susto enferma</b>. The impersonal "it is said" is se dice, not a literal passive.</p>`,
  quiz: [
    [`Aquí ___ español.`, [`hablan`, `se hablan`, `se habla`, `es hablado`], 2, `Se habla is the pattern for a sign: se + singular verb.`],
    [`Las visitas se ___ de las dos a las cuatro.`, [`permiten`, `permite`, `permitir`, `permites`], 0, `The noun las visitas is plural, so the verb is plural.`],
    [`How do you say "One cannot smoke here"?`, [`No puede fumar aquí`, `No se puede fumar aquí`, `No se pueden fumar aquí`, `No es puede fumar aquí`], 1, `Se + puede + infinitive: the verb stays singular before an infinitive.`],
    [`___ que el susto enferma.`, [`Se dicen`, `Es dicho`, `Dices`, `Se dice`], 3, `Se dice que means "it is said that".`],
    [`Why use "se dice que" in an interview?`, [`It gives a command`, `It makes the verb plural`, `It reports a belief without owning it`, `It changes the tense`], 2, `It lets the patient or family say what is believed without making it a personal claim.`],
    [`Se ___ una cita para ver a la doctora.`, [`necesita`, `necesitan`, `necesito`, `necesitas`], 0, `The noun una cita is singular.`],
    [`¿Cómo se ___ esta medicina?`, [`llaman`, `llamo`, `llamas`, `llama`], 3, `Esta medicina is singular, so llama is used.`]
  ],
  draft: true,
  after: 'relative-clauses'
  },
  {
  id: 'se-accidental', level: 'B1', unit: 'Se and change', title: `Accidental se: se me olvidó, se me cayó, se le acabó`,
  summary: `Use se plus me, te, le, nos or les to say that something happened to you, without blame.`,
  body: `<p>This is how patients report missed doses and lost things: <i>Se me olvidó la medicina.</i> The sentence says "the medicine forgot itself to me": it happened, and it was not a choice. Compare <i>Olvidé la medicina</i>, which owns the mistake. Both are fine, but the first is how most patients speak, and it tells you how to ask without blame.</p>
<h3>The pattern</h3>
<p><b>se + me / te / le / nos / les + verb</b>. The verb is in the third person and agrees with the thing that happened, not with the person.</p>
<table><tr><th>Person</th><th>Example</th><th>Meaning</th></tr><tr><td>me</td><td>Se me olvidó la pastilla.</td><td>I forgot the pill.</td></tr><tr><td>te</td><td>Se te cayeron los lentes.</td><td>You dropped your glasses.</td></tr><tr><td>le (usted, él, ella)</td><td>Se le acabó la medicina.</td><td>You ran out of medicine.</td></tr><tr><td>nos</td><td>Se nos hizo tarde.</td><td>We ran late.</td></tr><tr><td>les</td><td>Se les perdió la receta.</td><td>They lost the prescription.</td></tr></table>
<p>The common verbs are <b>olvidar, caer, acabar, perder, romper, ocurrir, quedar</b>. For plural things, the verb is plural: <i>se me olvidaron las pastillas</i>.</p>
<div class="ex"><b>Se me olvidó tomar la pastilla.</b><span>I forgot to take the pill.</span></div>
<div class="ex"><b>Se me olvidaron las pastillas en casa.</b><span>I forgot my pills at home.</span></div>
<div class="ex"><b>¿Se le olvidó alguna dosis esta semana?</b><span>Did you forget any dose this week?</span></div>
<div class="ex"><b>A mi mamá se le acabó la medicina.</b><span>My mother ran out of medicine.</span></div>
<div class="ex"><b>Se me perdió la receta.</b><span>I lost the prescription.</span></div>
<div class="ex"><b>¿Se le acabó la medicina antes de la cita?</b><span>Did you run out of medicine before the appointment?</span></div>
<div class="ex"><b>Se me cayó el vaso.</b><span>I dropped the glass.</span></div>
<div class="ex"><b>Se nos hizo tarde.</b><span>We ran late.</span></div>
<div class="ex"><b>Se me quedó el teléfono en casa.</b><span>I left my phone at home.</span></div>
<div class="ex"><b>Se me ocurrió una idea.</b><span>An idea occurred to me.</span></div>
<div class="note">Clinical tip: ask about missed doses with this pattern. <i>¿Se le olvidó alguna vez la medicina?</i> is easy to answer honestly. Do not accept it as the whole story, though. Follow with <i>¿Hubo días en que decidió no tomarla?</i> and <i>¿Le cayó mal la medicina?</i>, because some missed doses are side effects or fear of dependence, not forgetting. Ask without blame.</div>
<h3>Common mistakes</h3>
<p><s>Se me olvidaron la pastilla</s> → <b>Se me olvidó la pastilla</b>. The verb agrees with the thing forgotten (singular here), not with me.</p>
<p><s>Me se olvidó la receta</s> → <b>Se me olvidó la receta</b>. Se always comes first, then me, te, le.</p>
<p><s>Se me olvidé</s> → <b>Se me olvidó</b>. The verb is third person; I is expressed by me.</p>`,
  quiz: [
    [`How do you say "I forgot my pills" without blame?`, [`Se me olvidó las pastillas`, `Me se olvidaron las pastillas`, `Olvidaron las pastillas`, `Se me olvidaron las pastillas`], 3, `The plural verb agrees with las pastillas, and se comes before me.`],
    [`Se le ___ la medicina a mi mamá. (ran out)`, [`acabaron`, `acabé`, `acabó`, `acabas`], 2, `The verb agrees with la medicina: acabó.`],
    [`Se me ___ los lentes.`, [`cayó`, `cayeron`, `caí`, `cayendo`], 1, `Los lentes is plural, so cayeron.`],
    [`Why do patients say "se me olvidó"?`, [`It frames the event as an accident, not a choice`, `It is the past of se`, `It is always plural`, `It is only formal`], 0, `The pattern shows that something happened to the speaker.`],
    [`What is the correct word order?`, [`Me se olvidó`, `Se me olvidó`, `Se olvidó me`, `Olvidó se me`], 1, `Se always comes first, then me.`],
    [`How do you ask "Did you forget any dose?" to a patient?`, [`¿Me olvidó alguna dosis?`, `¿Le se olvidó alguna dosis?`, `¿Se le olvidó alguna dosis?`, `¿Se olvidó le alguna dosis?`], 2, `Se + le + olvidó, agreeing with una dosis.`],
    [`Se nos ___ tarde.`, [`hizo`, `hicimos`, `hice`, `hicieron`], 0, `The verb agrees with it (the time): hizo.`]
  ],
  draft: true,
  after: 'se-impersonal'
  },
  {
  id: 'verbs-of-change', level: 'B1', unit: 'Se and change', title: `Verbs of change: ponerse, volverse, quedarse, hacerse`,
  summary: `Choose the right verb for "to become": temporary reactions, lasting changes, resulting states and chosen goals.`,
  body: `<p>English says "get" or "become" for everything. Spanish chooses. The choice tells you whether a change is temporary or lasting, which is useful when you ask about onset and course: <i>Se pone nervioso</i> (it comes and goes) and <i>Se volvió desconfiado</i> (the person changed) are different histories.</p>
<h3>Which verb?</h3>
<table><tr><th>Verb</th><th>Use</th><th>Example</th></tr><tr><td>ponerse + adjective</td><td>temporary reaction or mood</td><td>Se puso pálido.</td></tr><tr><td>volverse + adjective</td><td>a lasting change in character, often gradual</td><td>Se volvió desconfiado.</td></tr><tr><td>quedarse + adjective or phrase</td><td>a state that results from an event</td><td>Se quedó solo. Me quedé sin trabajo.</td></tr><tr><td>hacerse + noun or adjective</td><td>by effort or choice, or with time</td><td>Quiere hacerse enfermera.</td></tr><tr><td>convertirse en + noun</td><td>a full transformation</td><td>Su tristeza se convirtió en enojo.</td></tr></table>
<p>Ponerse and volverse take adjectives that agree with the subject: <i>se puso nerviosa, se volvió callado</i>. Quedarse also takes phrases with <i>sin</i>: <i>quedarse sin dinero, quedarse sin fuerzas</i>.</p>
<div class="ex"><b>Se pone muy nervioso cuando sale de casa.</b><span>He gets very nervous when he leaves the house.</span></div>
<div class="ex"><b>Mi hijo se puso agresivo anoche.</b><span>My son became aggressive last night.</span></div>
<div class="ex"><b>Se puso pálido y empezó a sudar.</b><span>He turned pale and began to sweat.</span></div>
<div class="ex"><b>¿Se ha vuelto más irritable en los últimos meses?</b><span>Have you become more irritable in recent months?</span></div>
<div class="ex"><b>Después del accidente se volvió muy desconfiado.</b><span>After the accident he became very distrustful.</span></div>
<div class="ex"><b>Se quedó solo después de que falleció su esposa.</b><span>He was left alone after his wife passed away.</span></div>
<div class="ex"><b>Me quedé sin trabajo en marzo.</b><span>I lost my job in March.</span></div>
<div class="ex"><b>Me quedé dormido en la sala de espera.</b><span>I fell asleep in the waiting room.</span></div>
<div class="ex"><b>Mi hija quiere hacerse enfermera.</b><span>My daughter wants to become a nurse.</span></div>
<div class="ex"><b>Su tristeza se convirtió en enojo.</b><span>His sadness turned into anger.</span></div>
<div class="note">Clinical tip: ask which verb fits. <i>¿Se pone así a veces, o se ha vuelto así de forma constante?</i> distinguishes a reaction from a change in baseline. When a family says <i>se volvió desconfiado</i> or <i>se quedó muy callado</i>, ask what the person was like before and when the change began.</div>
<h3>Common mistakes</h3>
<p><s>Se hizo nervioso</s> → <b>Se puso nervioso</b>. A temporary state uses ponerse; hacerse is for goals and identity.</p>
<p><s>Me volví triste ayer</s> → <b>Me puse triste ayer</b>. Volverse is for a lasting change, not one day's mood.</p>
<p><s>Me hice dormido</s> → <b>Me quedé dormido</b>. Falling asleep is a resulting state, so use quedarse.</p>`,
  quiz: [
    [`Se ___ muy nervioso antes de las citas. (it comes and goes)`, [`pone`, `vuelve`, `queda`, `hace`], 0, `A temporary reaction uses ponerse.`],
    [`Después del accidente su personalidad cambió: se ___ muy desconfiado y ya no es el mismo.`, [`puso`, `quedó`, `volvió`, `hizo`], 2, `A lasting change in character uses volverse.`],
    [`Me ___ sin trabajo en marzo.`, [`puse`, `quedé`, `volví`, `hice`], 1, `A state resulting from an event uses quedarse.`],
    [`Mi hija quiere ___ enfermera.`, [`ponerse`, `volverse`, `quedarse`, `hacerse`], 3, `A career or goal uses hacerse.`],
    [`Se ___ dormido en la sala de espera.`, [`puso`, `hizo`, `quedó`, `volvió`], 2, `Falling asleep uses quedarse dormido.`],
    [`Su tristeza se ___ en enojo.`, [`puso`, `hizo`, `quedó`, `convirtió`], 3, `Convertirse en + noun is a full transformation.`],
    [`Se ___ pálido cuando vio la aguja.`, [`volvió`, `hizo`, `puso`, `convirtió`], 2, `A brief reaction in color uses ponerse.`]
  ],
  draft: true,
  after: 'se-accidental'
  },
  {
  id: 'periphrases', level: 'B1', unit: 'Se and change', title: `Verb phrases: acabar de, volver a, dejar de, seguir, soler`,
  summary: `Say "just did", "again", "stopped", "still", "usually" and "about to" with short verb phrases.`,
  body: `<p>Several short phrases carry timing and change, and they are common in a history: <i>¿Ha vuelto a escuchar voces? ¿Ha dejado de disfrutar lo que le gustaba? Sigo tomando la pastilla.</i> They add one small word between the verbs, and that small word is the most common error.</p>
<h3>The phrases</h3>
<table><tr><th>Phrase</th><th>Meaning</th><th>Example</th></tr><tr><td>acabar de + infinitive</td><td>just did</td><td>Acabo de tomar la medicina.</td></tr><tr><td>volver a + infinitive</td><td>do again</td><td>Volví a escuchar las voces.</td></tr><tr><td>dejar de + infinitive</td><td>stop doing</td><td>Dejé de dormir bien.</td></tr><tr><td>seguir + gerund</td><td>still, keep on</td><td>Sigo tomando la pastilla.</td></tr><tr><td>soler + infinitive</td><td>usually do</td><td>Suelo despertarme a las tres.</td></tr><tr><td>estar a punto de + infinitive</td><td>about to</td><td>Estaba a punto de llamar.</td></tr><tr><td>empezar a / ponerse a + infinitive</td><td>begin to (ponerse a is sudden)</td><td>Se puso a llorar.</td></tr></table>
<p>These phrases combine with other tenses (<i>ha dejado de, había vuelto a</i>). Pronouns go before the first verb or attach to the infinitive or gerund: <i>La voy a tomar / Voy a tomarla; La sigo tomando / Sigo tomándola.</i></p>
<div class="ex"><b>Acabo de tomar la medicina.</b><span>I just took the medicine.</span></div>
<div class="ex"><b>¿Ha vuelto a escuchar voces?</b><span>Have you heard voices again?</span></div>
<div class="ex"><b>Dejé de tomar la pastilla porque me daba sueño.</b><span>I stopped taking the pill because it made me sleepy.</span></div>
<div class="ex"><b>¿Ha dejado de disfrutar las cosas que le gustaban?</b><span>Have you stopped enjoying the things you liked?</span></div>
<div class="ex"><b>¿Sigue bebiendo alcohol?</b><span>Are you still drinking alcohol?</span></div>
<div class="ex"><b>Suelo despertarme a las tres de la mañana.</b><span>I usually wake up at three in the morning.</span></div>
<div class="ex"><b>Estaba a punto de llamar a la clínica cuando usted llamó.</b><span>I was about to call the clinic when you called.</span></div>
<div class="ex"><b>¿Cuándo empezó a sentirse así?</b><span>When did you start to feel this way?</span></div>
<div class="ex"><b>Se puso a llorar sin razón.</b><span>She suddenly began to cry for no reason.</span></div>
<div class="ex"><b>Suelo cenar tarde.</b><span>I usually have dinner late.</span></div>
<div class="note">Clinical tip: <i>dejar de</i> and <i>volver a</i> are screening tools. <i>¿Ha dejado de disfrutar…?</i> asks about anhedonia, <i>¿Ha vuelto a…?</i> asks about relapse, and <i>¿Ha dejado de tomar…?</i> asks about adherence. Use <i>seguir</i> to ask about ongoing use: <i>¿Sigue tomando…?</i></div>
<h3>Common mistakes</h3>
<p><s>Dejé tomar la pastilla</s> → <b>Dejé de tomar la pastilla</b>. Dejar needs de before the infinitive.</p>
<p><s>Volví ver las sombras</s> → <b>Volví a ver las sombras</b>. Volver needs a before the infinitive.</p>
<p><s>Sigo tomar la pastilla</s> → <b>Sigo tomando la pastilla</b>. Seguir is followed by the gerund (-ando, -iendo), not the infinitive.</p>`,
  quiz: [
    [`How do you say "I just took the pill"?`, [`Acabé tomar la pastilla`, `Acabo tomando la pastilla`, `Acabo de tomar la pastilla`, `Acabo a tomar la pastilla`], 2, `Acabar de + infinitive means "just did".`],
    [`How do you ask "Have you heard voices again?"`, [`¿Ha vuelto escuchar voces?`, `¿Ha vuelto a escuchar voces?`, `¿Ha vuelto escuchando voces?`, `¿Ha vuelto de escuchar voces?`], 1, `Volver a + infinitive means "do again".`],
    [`How do you say "I stopped taking the pill"?`, [`Dejé de tomar la pastilla`, `Dejé tomar la pastilla`, `Dejé a tomar la pastilla`, `Dejé tomando la pastilla`], 0, `Dejar de + infinitive means "stop doing".`],
    [`How do you say "I still take the pill"?`, [`Sigo a tomar la pastilla`, `Sigo tomar la pastilla`, `Sigo de tomar la pastilla`, `Sigo tomando la pastilla`], 3, `Seguir takes the gerund.`],
    [`Which sentence means "I usually wake up at three"?`, [`Suelo a despertarme a las tres`, `Suelo despertarme a las tres`, `Soy despertarme a las tres`, `Sueño despertarme a las tres`], 1, `Soler + infinitive means "usually" with no preposition.`],
    [`"Estaba a punto de llamar" means`, [`She had just called`, `She called again`, `She was about to call`, `She stopped calling`], 2, `Estar a punto de means "to be about to".`],
    [`"Se puso a llorar" means`, [`He cried again`, `He stopped crying`, `He was crying all day`, `He suddenly began to cry`], 3, `Ponerse a + infinitive means to begin suddenly.`]
  ],
  draft: true,
  after: 'verbs-of-change'
  },
  {
  id: 'diminutives', level: 'B1', unit: 'Words and forms', title: `Diminutives and intensifiers: -ito, ahorita, -ísimo`,
  summary: `Learn how -ito softens and understates, and how -ísimo and -ote intensify, so you hear the real size of a symptom.`,
  body: `<p>Diminutives are everywhere in clinical Spanish. <i>Un momentito. Una pastillita. Un dolorcito.</i> They can show warmth, shrink a problem or soften a request. Hearing which one is in use tells you how much weight the patient gives a symptom.</p>
<h3>Forms</h3>
<table><tr><th>Ending</th><th>Use</th><th>Example</th></tr><tr><td>-ito / -ita</td><td>small, kind, softened (most words)</td><td>un ratito, una casita</td></tr><tr><td>-cito / -cita</td><td>after words ending in -n, -r or -e</td><td>corazoncito, mujercita</td></tr><tr><td>spelling change</td><td>c to qu, g to gu, z to c</td><td>poco → poquito, amigo → amiguito, lápiz → lapicito</td></tr><tr><td>ahorita</td><td>Mexican: now, in a moment, just now</td><td>Ahorita viene la doctora.</td></tr><tr><td>-ísimo / -ísima</td><td>very, extremely</td><td>cansadísima, tristísimo</td></tr><tr><td>-ote / -ota</td><td>big, often rough or pejorative</td><td>grandote</td></tr></table>
<p>Diminutives also appear in names and family words (<i>Lupita, abuelita, hijito</i>) and in how adults speak to children. With an older patient, a diminutive that sounds warm to you may sound childish to them, so follow the patient's lead.</p>
<div class="ex"><b>Un momentito, por favor.</b><span>Just a moment, please.</span></div>
<div class="ex"><b>¿Le duele un poquito o muchísimo?</b><span>Does it hurt a little or a great deal?</span></div>
<div class="ex"><b>Ahorita viene la doctora.</b><span>The doctor will be here in a moment.</span></div>
<div class="ex"><b>Tengo un dolorcito aquí.</b><span>I have a little pain here.</span></div>
<div class="ex"><b>Es una pastillita para dormir.</b><span>It is a little pill for sleeping.</span></div>
<div class="ex"><b>Me siento tristísimo desde hace semanas.</b><span>I have felt extremely sad for weeks.</span></div>
<div class="ex"><b>Estoy cansadísima.</b><span>I am extremely tired.</span></div>
<div class="ex"><b>Mi nietecita vive conmigo.</b><span>My little granddaughter lives with me.</span></div>
<div class="ex"><b>Vamos a tomar un cafecito.</b><span>Let us have a little coffee.</span></div>
<div class="ex"><b>Ya casi acabo, nomás un ratito más.</b><span>I am almost done, just a little while longer.</span></div>
<div class="note">Clinical tip: patients often shrink what hurts: <i>un dolorcito, unos nervios, una tristecita</i>. Do not take the small word for the real size. Ask for a number: <i>¿Del cero al diez, cuánto le duele?</i> Also, <i>ahorita</i> can mean now or much later. Ask <i>¿Ahorita cuándo, en cinco minutos o más tarde?</i> when timing matters. When you use diminutives yourself, keep the dose and name of a medicine exact: <i>una pastillita</i> is warm, but the dose must be said clearly.</div>
<h3>Common mistakes</h3>
<p><s>pocito</s> → <b>poquito</b>. To keep the hard c sound before -ito, spell c as qu.</p>
<p><s>mujerito</s> → <b>mujercita</b>. After a word ending in -r, -n or -e, use -cito or -cita.</p>
<p><s>Estoy muy cansadísimo</s> → <b>Estoy cansadísimo</b>. Cansadísimo already means "very very tired", so muy is not added. Use muy cansado or cansadísimo, not both.</p>`,
  quiz: [
    [`What is the diminutive of "poco"?`, [`pocito`, `poquito`, `pocoito`, `poquitito`], 1, `C changes to qu to keep the sound: poquito.`],
    [`What does -ísimo mean in "cansadísimo"?`, [`a little`, `again`, `very, extremely`, `almost`], 2, `-ísimo is a superlative ending.`],
    [`Why ask a follow-up question after "ahorita viene"?`, [`It can mean now or much later`, `It is rude`, `It means yesterday`, `It is always formal`], 0, `In Mexican Spanish, ahorita is vague about timing.`],
    [`A patient says "Tengo un dolorcito aquí." What do you do?`, [`Assume it is mild`, `End the visit`, `Ignore it`, `Ask for details and a 0 to 10 rating`], 3, `A diminutive may understate the problem.`],
    [`What is the diminutive of "corazón"?`, [`corazonito`, `corazonsito`, `corazoncito`, `corazonquito`], 2, `After a word ending in -n, the ending is -cito.`],
    [`What is the superlative of "triste" (masculine)?`, [`tristoísimo`, `tristísimo`, `tristesísimo`, `tristísmo`], 1, `Drop the final e and add -ísimo: tristísimo.`],
    [`How do you say "I am extremely tired" (a woman)?`, [`Estoy cansadísima`, `Estoy muy cansadísima`, `Estoy cansadita muy`, `Estoy cansadaísima`], 0, `-ísima already means extremely, so there is no muy.`]
  ],
  draft: true,
  after: 'periphrases'
  },
  {
  id: 'prepositional-verbs', level: 'B1', unit: 'Words and forms', title: `Verbs with prepositions: pensar en, soñar con, depender de`,
  summary: `Many Spanish verbs need a fixed preposition. Learn the common ones with the questions you ask.`,
  body: `<p>English and Spanish choose different prepositions. <i>Think about</i> is <i>pensar en</i>, <i>dream of</i> is <i>soñar con</i>, <i>depend on</i> is <i>depender de</i>. These verbs are everywhere in a psychiatric interview: <i>¿Piensa mucho en el pasado? ¿Con qué sueña? ¿En quién confía?</i></p>
<h3>Verbs to learn together with their preposition</h3>
<table><tr><th>Verb + preposition</th><th>Example</th><th>Meaning</th></tr><tr><td>pensar en</td><td>Pienso en mis hijos.</td><td>I think about my children.</td></tr><tr><td>soñar con</td><td>Sueño con mi mamá.</td><td>I dream about my mother.</td></tr><tr><td>depender de</td><td>Mi ánimo depende de cómo duermo.</td><td>My mood depends on how I sleep.</td></tr><tr><td>confiar en</td><td>Confío en mi hermana.</td><td>I trust my sister.</td></tr><tr><td>tratar de</td><td>Trato de dormir.</td><td>I try to sleep.</td></tr><tr><td>acordarse de</td><td>Me acuerdo de ese día.</td><td>I remember that day.</td></tr><tr><td>darse cuenta de</td><td>Me di cuenta de que algo no estaba bien.</td><td>I realized something was wrong.</td></tr><tr><td>preocuparse por</td><td>Me preocupo por mis hijos.</td><td>I worry about my children.</td></tr></table>
<p>Before <b>que</b> the preposition stays: <i>Me di cuenta <b>de</b> que…, Estoy seguro <b>de</b> que…</i> Do not drop it in careful speech.</p>
<div class="ex"><b>¿Piensa mucho en el pasado?</b><span>Do you think a lot about the past?</span></div>
<div class="ex"><b>¿Con qué sueña? ¿Sueña con lo que pasó?</b><span>What do you dream about? Do you dream about what happened?</span></div>
<div class="ex"><b>Confío en mi hermana.</b><span>I trust my sister.</span></div>
<div class="ex"><b>Trato de dormir, pero no puedo.</b><span>I try to sleep, but I cannot.</span></div>
<div class="ex"><b>No me acuerdo de lo que pasó.</b><span>I do not remember what happened.</span></div>
<div class="ex"><b>Me di cuenta de que algo no estaba bien.</b><span>I realized something was not right.</span></div>
<div class="ex"><b>Mi ánimo depende de cómo duermo.</b><span>My mood depends on how I sleep.</span></div>
<div class="ex"><b>Me preocupo por mis hijos.</b><span>I worry about my children.</span></div>
<div class="ex"><b>Depende del clima.</b><span>It depends on the weather.</span></div>
<div class="ex"><b>Pienso en mis vacaciones.</b><span>I am thinking about my vacation.</span></div>
<div class="note">Clinical tip: these questions are open and easy. <i>¿En qué piensa cuando no puede dormir?</i> and <i>¿Con qué sueña?</i> invite a narrative about worries and nightmares. <i>No me acuerdo de…</i> is a useful phrase to hear for memory and trauma, but ask what the patient does remember. Note that <i>recordar</i> needs no preposition: <i>Recuerdo ese día.</i></div>
<h3>Common mistakes</h3>
<p><s>Pienso de mi familia</s> → <b>Pienso en mi familia</b>. Pensar en is for thinking about; pensar de asks for an opinion.</p>
<p><s>Soñé de mi madre</s> → <b>Soñé con mi madre</b>. The preposition for dreams is con, not de.</p>
<p><s>Trato dormir</s> → <b>Trato de dormir</b>. Tratar needs de before an infinitive.</p>`,
  quiz: [
    [`Sueño ___ mi madre casi todas las noches.`, [`de`, `en`, `con`, `por`], 2, `Soñar con is the fixed phrase.`],
    [`Confío ___ mi hermana.`, [`en`, `de`, `con`, `a`], 0, `Confiar en.`],
    [`Trato ___ dormir, pero no puedo.`, [`a`, `en`, `por`, `de`], 3, `Tratar de + infinitive means to try.`],
    [`Me di cuenta ___ que algo pasaba.`, [`a`, `de`, `en`, `con`], 1, `Darse cuenta de, and the de stays before que.`],
    [`Mi ánimo depende ___ cómo duermo.`, [`de`, `en`, `a`, `por`], 0, `Depender de.`],
    [`Me acuerdo ___ ese día.`, [`a`, `en`, `de`, `por`], 2, `Acordarse de.`],
    [`Pienso ___ mis hijos todo el día.`, [`de`, `en`, `a`, `por`], 1, `Pensar en means to think about.`]
  ],
  draft: true,
  after: 'diminutives'
  },
  {
  id: 'review-b1', level: 'B1', unit: 'Review', title: `Review: B1 grammar at a glance`,
  summary: `The B1 points with one model sentence each, the commonest confusions, mixed examples and a 12-question quiz.`,
  review: true,
  body: `<p>This lesson pulls the B1 grammar together. In an interview these forms carry the key information: who wants what, what the patient fears or doubts, what happened before, who said it and what to do next.</p>
<h3>B1 at a glance</h3>
<table><tr><th>Point</th><th>Model sentence</th></tr><tr><td>Subjunctive basics, wishes, advice</td><td>Le recomiendo que tome la pastilla con comida.</td></tr><tr><td>Emotion and doubt</td><td>Me preocupa que no duerma. No creo que me ayuden.</td></tr><tr><td>Time and purpose</td><td>Cuando sienta que no puede más, llame al 988.</td></tr><tr><td>Negative commands and pronouns</td><td>Tómela con comida. No la tome con alcohol.</td></tr><tr><td>Future and conditional</td><td>La doctora lo verá el lunes. ¿Podría decirme su edad?</td></tr><tr><td>Pluperfect</td><td>Ya había dejado la medicina cuando llegó.</td></tr><tr><td>Reported speech</td><td>Su esposa dice que usted no duerme.</td></tr><tr><td>Relative clauses</td><td>Cuénteme lo que le pasa.</td></tr><tr><td>Impersonal se</td><td>Aquí se habla español.</td></tr><tr><td>Accidental se</td><td>Se me olvidó la pastilla.</td></tr><tr><td>Verbs of change</td><td>Se puso nervioso. Se volvió desconfiado.</td></tr><tr><td>Verb phrases</td><td>¿Ha dejado de disfrutar lo que le gustaba?</td></tr><tr><td>Diminutives</td><td>Un dolorcito puede ser un dolor muy fuerte.</td></tr><tr><td>Verbs with prepositions</td><td>Pienso en mis hijos. Sueño con mi madre.</td></tr><tr><td>Softeners</td><td>¿Le parece si empezamos?</td></tr></table>
<h3>Commonest confusions</h3>
<p><b>Creo que / no creo que.</b> Creo que takes the indicative (<i>Creo que tiene razón</i>). No creo que takes the subjunctive (<i>No creo que tenga razón</i>).</p>
<p><b>Cuando with a habit or with the future.</b> A habit or a past event uses the indicative (<i>Cuando me siento mal, no como</i>). A future event uses the subjunctive (<i>Cuando se sienta mal, llame</i>).</p>
<p><b>Se me olvidó / olvidé.</b> <i>Olvidé la receta</i> owns the mistake. <i>Se me olvidó la receta</i> says it happened to me. Both are correct; the second is the usual way patients speak.</p>
<p><b>Ponerse / volverse / quedarse.</b> Ponerse is a temporary reaction (<i>se puso nervioso</i>), volverse a lasting change (<i>se volvió desconfiado</i>), quedarse a resulting state (<i>se quedó solo</i>).</p>
<div class="ex"><b>Quiero que usted duerma mejor.</b><span>I want you to sleep better.</span></div>
<div class="ex"><b>Es posible que la medicina le dé sueño.</b><span>It is possible that the medicine makes you sleepy.</span></div>
<div class="ex"><b>No se quede solo esta noche.</b><span>Do not stay alone tonight.</span></div>
<div class="ex"><b>Su hijo me dijo que usted estaba muy triste.</b><span>Your son told me you were very sad.</span></div>
<div class="ex"><b>¿Hay alguien en quien usted confíe?</b><span>Is there someone you trust?</span></div>
<div class="ex"><b>Se me olvidaron las pastillas en casa.</b><span>I forgot my pills at home.</span></div>
<div class="ex"><b>Dejé de tomar la pastilla porque me daba sueño.</b><span>I stopped taking the pill because it made me sleepy.</span></div>
<div class="ex"><b>Una preguntita: ¿ha vuelto a tener esos pensamientos?</b><span>A small question: have you had those thoughts again?</span></div>
<div class="note">Clinical tip: when a patient says something with a soft word or an indirect form (<i>un dolorcito, se me olvidó, no creo que me ayuden</i>), ask one more question. The form shows how the patient frames the problem; the follow-up shows how big it is.</div>`,
  quiz: [
    [`Le recomiendo que ___ la pastilla con comida.`, [`toma`, `tomar`, `tome`, `tomó`], 2, `Recomendar que takes the subjunctive: tome.`],
    [`No creo que la medicina me ___.`, [`ayuda`, `ayude`, `ayudar`, `ayudando`], 1, `No creo que expresses doubt and takes the subjunctive.`],
    [`Cuando ___ que no puede más, llame al 988 y oprima 2.`, [`siente`, `sentir`, `sintió`, `sienta`], 3, `A future event after cuando takes the subjunctive: sienta.`],
    [`How do you say "Do not take it (la pastilla) with alcohol"?`, [`No la tome con alcohol`, `No tómela con alcohol`, `No la tomar con alcohol`, `No la tomas con alcohol`], 0, `A negative command is no + pronoun + subjunctive.`],
    [`Which form means "Could you tell me…?"`, [`¿Podrá decirme…?`, `¿Podría decirme…?`, `¿Pudo decirme…?`, `¿Poder decirme…?`], 1, `Podría is the conditional for a polite request.`],
    [`Cuando llegamos, el paciente ya ___ la medicina.`, [`ha dejado`, `deja`, `había dejado`, `dejaría`], 2, `An earlier past event takes the pluperfect: había dejado.`],
    [`Me dijeron que no ___. (they told me not to drive)`, [`manejo`, `manejé`, `manejar`, `manejara`], 3, `A reported command takes que plus the imperfect subjunctive.`],
    [`No hay nadie que me ___.`, [`entienda`, `entiende`, `entender`, `entendió`], 0, `A person who does not exist takes the subjunctive.`],
    [`Aquí ___ español.`, [`hablan`, `se hablan`, `se habla`, `es hablado`], 2, `Impersonal se: se + singular verb.`],
    [`Se me ___ las pastillas.`, [`olvidó`, `olvidaron`, `olvidé`, `olvidaste`], 1, `The verb agrees with las pastillas.`],
    [`Which sentence is entirely correct?`, [`Me hice nervioso, dejé tomar la pastilla y pienso de mi familia`, `Me puse nervioso, dejé tomar la pastilla y pienso en mi familia`, `Me puse nervioso, dejé de tomar la pastilla y pienso con mi familia`, `Me puse nervioso, dejé de tomar la pastilla y pienso en mi familia`], 3, `Ponerse for a temporary reaction, dejar de + infinitive, pensar en.`],
    [`A patient says "Tengo un dolorcito nomás." What is the best next line?`, [`Entonces no es nada.`, `¿Me permite una preguntita? Del cero al diez, ¿cuánto le duele?`, `Deje de quejarse.`, `No tiene que decirme más.`], 1, `A diminutive can understate, so ask gently for a number.`]
  ],
  draft: true,
  after: 'prepositional-verbs'
  }
]);
