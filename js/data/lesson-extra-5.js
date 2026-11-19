/* Lesson extras part 5 (0.11.0): common mistakes, more examples and a "More practice" quiz for the 15 B1 lessons in lessons-4.js
   (subjunctive-wishes to review-b1, in lesson order; the lesson page shows them after the body and runs the quiz after the lesson's own).
   DRAFT FOR REVIEW by a native Spanish-speaking clinician before use. Spanish is plain text (US/Mexican baseline, usted with adults).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongEs, rightEs, whyEn], ...3],  // wrongEs is shown struck through, never spoken or recorded; different from the lesson's own mistakes
     more: [[es, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'subjunctive-wishes': {
    mistakes: [
      [`Le recomiendo que usted va al hospital.`, `Le recomiendo que usted vaya al hospital.`, `Recomendar que takes the subjunctive, and ir is irregular: vaya.`],
      [`Ojalá que la medicina le ayuda.`, `Ojalá que la medicina le ayude.`, `Ojalá always takes the subjunctive, never the present indicative.`],
      [`Quiero que usted sabe la verdad.`, `Quiero que usted sepa la verdad.`, `Querer que takes the subjunctive, and saber is irregular: sepa.`]
    ],
    more: [
      [`Le sugiero que traiga una lista de sus medicinas.`, `I suggest that you bring a list of your medicines.`],
      [`Quiero que me avise si tiene efectos secundarios.`, `I want you to let me know if you have side effects.`],
      [`Esperamos que su hijo se recupere pronto.`, `We hope your son recovers soon.`],
      [`Mi mamá quiere que yo coma más verduras.`, `My mom wants me to eat more vegetables.`],
      [`Ojalá que mañana no llueva.`, `I hope it does not rain tomorrow.`],
      [`Te pido que cierres la puerta, mi amor.`, `I am asking you to close the door, sweetheart.`]
    ],
    quiz: [
      [`Le pido que ___ el lunes a las nueve.`, [`venga`, `viene`, `venir`], 0, `Pedir que takes the subjunctive: venga.`],
      [`Espero que usted ___ mejor pronto.`, [`está`, `esté`, `estar`], 1, `Esperar que takes the subjunctive. Estar is irregular and keeps a written accent: esté.`],
      [`Quiero que ustedes ___ la verdad.`, [`saben`, `saber`, `sepan`], 2, `Querer que takes the subjunctive, and saber is irregular: sepan.`],
      [`How do you say "I want you to rest"?`, [`Quiero que descanse`, `Quiero que descansa`, `Quiero descansa`], 0, `Two people are involved, so use que plus the subjunctive: descanse.`],
      [`Which sentence means "I want to leave" (the same person wants and leaves)?`, [`Quiero que salgo`, `Quiero salir`, `Quiero que salir`], 1, `One person does both, so use the infinitive and no que.`],
      [`Mi hermana quiere que yo le ___ el número del doctor.`, [`doy`, `dar`, `dé`], 2, `Querer que takes the subjunctive. Dar is irregular: dé, with an accent.`]
    ]
  },
  'subjunctive-emotion-doubt': {
    mistakes: [
      [`Me alegra que usted está aquí.`, `Me alegra que usted esté aquí.`, `A feeling about something takes the subjunctive: esté.`],
      [`Es posible que la medicina no le ayuda.`, `Es posible que la medicina no le ayude.`, `Es posible que expresses possibility, so it takes the subjunctive.`],
      [`Estoy seguro de que mi hijo venga mañana.`, `Estoy seguro de que mi hijo viene mañana.`, `Being sure is certainty, so the verb is indicative: viene.`]
    ],
    more: [
      [`Tengo miedo de que la medicina me haga daño.`, `I am afraid that the medicine will harm me.`],
      [`Es probable que necesite una receta nueva.`, `You will probably need a new prescription.`],
      [`Creo que su ansiedad empeora por las noches.`, `I think your anxiety gets worse at night.`],
      [`Dudo que llegue a tiempo con este tráfico.`, `I doubt he will arrive on time with this traffic.`],
      [`Siento que no pueda venir a la fiesta.`, `I am sorry that you cannot come to the party.`],
      [`Tal vez salgamos temprano mañana.`, `Maybe we will leave early tomorrow.`]
    ],
    quiz: [
      [`No creo que ___ tiempo para esperar.`, [`tenemos`, `tengamos`, `tener`], 1, `No creo que expresses doubt and takes the subjunctive: tengamos.`],
      [`Es verdad que usted ___ mucho estrés.`, [`tenga`, `tener`, `tiene`], 2, `Es verdad que states a fact, so the indicative tiene is used.`],
      [`Me alegra que su hijo ___ aquí.`, [`esté`, `está`, `estar`], 0, `A feeling takes the subjunctive: esté.`],
      [`Dudo que el doctor ___ hoy.`, [`viene`, `venga`, `venir`], 1, `Dudar que takes the subjunctive: venga.`],
      [`Which sentence shows certainty?`, [`No creo que sea diabetes.`, `Es posible que sea diabetes.`, `Estoy seguro de que es diabetes.`], 2, `Estoy seguro de que states certainty and takes the indicative. The others show doubt or possibility.`],
      [`Me preocupa que mi mamá ___ sola.`, [`viva`, `vive`, `vivir`], 0, `A worry takes the subjunctive: viva.`]
    ]
  },
  'subjunctive-time-purpose': {
    mistakes: [
      [`Hasta que llega el doctor, espere aquí.`, `Hasta que llegue el doctor, espere aquí.`, `The doctor has not arrived yet, so hasta que takes the subjunctive.`],
      [`Antes de que tomar la pastilla, coma algo.`, `Antes de tomar la pastilla, coma algo.`, `When the same person does both actions, use antes de plus the infinitive, not que.`],
      [`Después de que come, tome la pastilla.`, `Después de que coma, tome la pastilla.`, `The eating has not happened yet, so después de que takes the subjunctive.`]
    ],
    more: [
      [`Cuando termine la sesión, le doy su próxima cita.`, `When the session ends, I will give you your next appointment.`],
      [`Avíseme en cuanto empiece a sentirse peor.`, `Let me know as soon as you start to feel worse.`],
      [`Le explico el plan para que usted decida.`, `I am explaining the plan so that you can decide.`],
      [`Cuando llegue el verano, vamos a viajar.`, `When summer comes, we are going to travel.`],
      [`Espera aquí hasta que pase el camión.`, `Wait here until the bus goes by.`],
      [`Siempre me lavo las manos antes de comer.`, `I always wash my hands before eating.`]
    ],
    quiz: [
      [`Avíseme en cuanto ___ peor.`, [`se siente`, `sentirse`, `se sienta`], 2, `The worsening has not happened yet, so en cuanto takes the subjunctive.`],
      [`Le doy la receta para que ___ la medicina hoy.`, [`compre`, `compra`, `comprar`], 0, `Para que always takes the subjunctive: compre.`],
      [`Todas las noches, cuando mi esposo ___, apagamos la tele.`, [`llegue`, `llega`, `llegar`], 1, `A habit after cuando takes the indicative: llega.`],
      [`Espere hasta que ___ su turno.`, [`es`, `ser`, `sea`], 2, `The turn has not come yet, so hasta que takes the subjunctive: sea.`],
      [`Antes de que usted ___, quiero darle un folleto.`, [`se vaya`, `se va`, `irse`], 0, `Antes de que always takes the subjunctive: se vaya.`],
      [`Antes de ___ al consultorio, llene este formulario.`, [`entró`, `entrar`, `que entra`], 1, `The same person acts in both parts, so use antes de plus the infinitive.`]
    ]
  },
  'negative-commands-pronouns': {
    mistakes: [
      [`No muévete.`, `No te muevas.`, `A negative command puts the pronoun before the verb and uses the subjunctive (tú form: no te muevas).`],
      [`No lo se diga a nadie.`, `No se lo diga a nadie.`, `With two pronouns, se always comes before lo.`],
      [`No se vayas, hijo.`, `No te vayas, hijo.`, `Se goes with the usted form (no se vaya). With tú and children, use te: no te vayas.`]
    ],
    more: [
      [`No maneje después de tomarla.`, `Do not drive after taking it.`],
      [`Pídame ayuda si la necesita.`, `Ask me for help if you need it.`],
      [`Escríbalo en este papel y tráigalo a la cita.`, `Write it on this paper and bring it to the appointment.`],
      [`Ábrame la puerta, por favor.`, `Open the door for me, please.`],
      [`No me lo cuente ahora, estoy ocupada.`, `Do not tell me now, I am busy.`],
      [`Cierra la puerta y no hagas ruido.`, `Close the door and do not make noise.`]
    ],
    quiz: [
      [`How do you say "Do not tell anyone"?`, [`No lo se diga a nadie`, `No se lo diga a nadie`, `No dígaselo a nadie`], 1, `A negative command puts the pronouns before the verb, with se before lo.`],
      [`How do you say "Write it here"?`, [`Lo escriba aquí`, `Escribalo aquí`, `Escríbalo aquí`], 2, `A positive command attaches the pronoun and needs a written accent: escríbalo.`],
      [`How do you say "Do not drive tonight"?`, [`No maneje esta noche`, `Maneje no esta noche`, `No manejo esta noche`], 0, `A negative command is no plus the subjunctive: no maneje.`],
      [`How do you tell a child "Do not leave"?`, [`No vete`, `No te vayas`, `No te vas`], 1, `The negative tú command is no plus te plus the subjunctive: no te vayas.`],
      [`How do you say "Give it to me" (usted)?`, [`Déme lo`, `Dámelo`, `Démelo`], 2, `Dar in the usted command is dé. Add me and lo, and the accent stays on the stressed syllable: démelo.`],
      [`How do you say "Do not call her tonight"?`, [`No la llame esta noche`, `No llámela esta noche`, `No la llama esta noche`], 0, `A negative command is no plus the pronoun plus the subjunctive: no la llame.`]
    ]
  },
  'future-conditional': {
    mistakes: [
      [`La doctora le decirá los resultados mañana.`, `La doctora le dirá los resultados mañana.`, `Decir has the irregular stem dir-: dirá.`],
      [`Mi hija vendra mañana.`, `Mi hija vendrá mañana.`, `The future ending of a word like vendrá carries a written accent on the last syllable.`],
      [`Ellos salderán temprano.`, `Ellos saldrán temprano.`, `Salir has the irregular stem saldr-: saldrán.`]
    ],
    more: [
      [`Los resultados estarán listos el viernes.`, `The results will be ready on Friday.`],
      [`¿Podría describir el dolor con otras palabras?`, `Could you describe the pain in other words?`],
      [`Yo no tomaría esa medicina sin hablar con su médico.`, `I would not take that medicine without talking to your doctor.`],
      [`Mañana lloverá por la tarde.`, `Tomorrow it will rain in the afternoon.`],
      [`¿Podría abrir la ventana, por favor?`, `Could you open the window, please?`],
      [`Me encantaría conocer su pueblo.`, `I would love to see your town.`]
    ],
    quiz: [
      [`What is the future of decir for ella?`, [`decirá`, `dijo`, `dirá`], 2, `Decir has the stem dir-: dirá.`],
      [`What is the future of salir for yo?`, [`saldré`, `saldría`, `saliré`], 0, `Salir has the stem saldr-: saldré.`],
      [`Which form is the conditional of poder for usted?`, [`podrá`, `podría`, `pude`], 1, `Podría is the conditional. Podrá is the future.`],
      [`Yo en su lugar ___ con mi familia. (I would talk)`, [`hablé`, `hablando`, `hablaría`], 2, `The conditional gives advice: hablaría.`],
      [`La doctora ___ la receta mañana. (will write)`, [`escribirá`, `escribió`, `escribiendo`], 0, `A future plan takes the future: escribirá.`],
      [`De niños, nosotros ___ en el río. (we used to swim)`, [`nadaremos`, `nadábamos`, `nadaríamos`], 1, `A habit in the past uses the imperfect: nadábamos.`]
    ]
  },
  'pluperfect': {
    mistakes: [
      [`Ya había escribido la nota.`, `Ya había escrito la nota.`, `Escribir has the irregular participle escrito.`],
      [`Los niños ya había comido.`, `Los niños ya habían comido.`, `Había must agree with the subject: los niños needs habían.`],
      [`Había se tomado la pastilla.`, `Se había tomado la pastilla.`, `The pronoun goes before había, not between had and the participle.`]
    ],
    more: [
      [`¿Había tomado alcohol antes de la consulta?`, `Had you had alcohol before the appointment?`],
      [`La paciente ya había visto a otro psiquiatra.`, `The patient had already seen another psychiatrist.`],
      [`Los síntomas habían empezado antes de la operación.`, `The symptoms had started before the surgery.`],
      [`Cuando llegamos, el cine ya había cerrado.`, `When we arrived, the movie theater had already closed.`],
      [`Nunca había visto tanta nieve.`, `I had never seen so much snow.`],
      [`Mi abuela ya había preparado la comida.`, `My grandmother had already prepared the food.`]
    ],
    quiz: [
      [`What is the participle of escribir?`, [`escribido`, `escrito`, `escribiendo`], 1, `Escribir has the irregular participle escrito.`],
      [`What is the participle of poner?`, [`puesto`, `ponido`, `ponió`], 0, `Poner has the irregular participle puesto.`],
      [`Los niños ya ___ comido cuando llegamos.`, [`había`, `han`, `habían`], 2, `The verb agrees with los niños: habían.`],
      [`Nunca ___ visto algo así antes de ese día.`, [`he`, `había`, `habré`], 1, `Antes de ese día is a past reference point, so había is used.`],
      [`¿Ya ___ usted desayunado cuando salió de casa?`, [`había`, `ha`, `hay`], 0, `The breakfast came before another past moment: había.`],
      [`Which sentence has the right word order?`, [`Había se dormido`, `Se dormido había`, `Se había dormido`], 2, `The pronoun goes before había.`]
    ]
  },
  'reported-speech': {
    mistakes: [
      [`Me dijo que tomar la pastilla.`, `Me dijo que tomara la pastilla.`, `After que, the verb must be conjugated. A reported instruction uses the imperfect subjunctive.`],
      [`Preguntó si cuándo empezaron los síntomas.`, `Preguntó cuándo empezaron los síntomas.`, `A question word already introduces the question, so do not add si.`],
      [`Me dijo de que no quería ir.`, `Me dijo que no quería ir.`, `Decir takes que directly. Do not add de.`]
    ],
    more: [
      [`Su vecina dice que usted sale de noche sin avisar.`, `Your neighbor says that you go out at night without telling anyone.`],
      [`El paciente dijo que no se sentía seguro en su casa.`, `The patient said he did not feel safe at home.`],
      [`La trabajadora social preguntó si tenía dónde quedarse.`, `The social worker asked whether he had somewhere to stay.`],
      [`Mi jefe dijo que llegaría tarde.`, `My boss said he would arrive late.`],
      [`Ella preguntó dónde estaba el baño.`, `She asked where the bathroom was.`],
      [`Me prometió que me llamaría.`, `He promised he would call me.`]
    ],
    quiz: [
      [`Mi hermana me dijo que ___ cansada.`, [`estaba`, `esté`, `estar`], 0, `Past reporting verb: the present estoy becomes estaba.`],
      [`Which is the correct way to report "¿Cuándo empezó?"`, [`Preguntó si cuándo empezó`, `Preguntó de cuándo que empezó`, `Preguntó cuándo empezó`], 2, `The question word stays and nothing is added.`],
      [`"Vuelva mañana." Me dijo que ___ al día siguiente.`, [`vuelve`, `volviera`, `volver`], 1, `A reported command uses the imperfect subjunctive: volviera.`],
      [`"Tengo miedo." Dijo que ___ miedo.`, [`tenía`, `tengo`, `tendré`], 0, `The person and the tense shift: tenía.`],
      [`Which report of "No vendré" is correct?`, [`Me dijo de que no vendría`, `Me dijo de no vendría`, `Me dijo que no vendría`], 2, `Decir takes que, with no de.`],
      [`"Ya comí." Dijo que ya ___.`, [`comerá`, `había comido`, `comería`], 1, `The preterite shifts to the pluperfect: había comido.`]
    ]
  },
  'relative-clauses': {
    mistakes: [
      [`La clínica que me atendieron queda cerca.`, `La clínica donde me atendieron queda cerca.`, `For a place, use donde (or en la que). Que alone does not work because the place is not the subject or object.`],
      [`Todo que me dijo es cierto.`, `Todo lo que me dijo es cierto.`, `After todo, use lo que for "everything that".`],
      [`Las personas que vive conmigo son mis tíos.`, `Las personas que viven conmigo son mis tíos.`, `The verb after que agrees with the noun it describes: las personas, so viven.`]
    ],
    more: [
      [`¿Hay algún medicamento que le haya caído mal?`, `Is there any medicine that has not agreed with you?`],
      [`Los familiares que viven con usted también pueden venir.`, `The relatives who live with you can come too.`],
      [`Lo que usted siente es muy común.`, `What you feel is very common.`],
      [`Busco una casa que tenga jardín.`, `I am looking for a house that has a yard.`],
      [`La señora que vende tamales es mi vecina.`, `The lady who sells tamales is my neighbor.`],
      [`Lo que más me gusta es caminar.`, `What I like most is walking.`]
    ],
    quiz: [
      [`Todo ___ me dijo es cierto.`, [`que`, `lo que`, `quien`], 1, `After todo, use lo que.`],
      [`La clínica ___ me atendieron queda lejos.`, [`donde`, `quien`, `lo que`], 0, `Donde refers to a place.`],
      [`Busco una casa que ___ jardín. (I do not know one yet)`, [`tiene`, `tener`, `tenga`], 2, `The house is unknown, so use the subjunctive: tenga.`],
      [`Tengo un vecino que ___ español. (I know he speaks it)`, [`hable`, `habla`, `hablar`], 1, `The neighbor exists and is known, so use the indicative: habla.`],
      [`El hombre con ___ hablé es su tío.`, [`quien`, `que lo`, `lo que`], 0, `After a preposition, use quien for a person.`],
      [`No hay ninguna farmacia que ___ abierta a esta hora.`, [`está`, `estar`, `esté`], 2, `A thing that does not exist takes the subjunctive: esté.`]
    ]
  },
  'se-impersonal': {
    mistakes: [
      [`Aquí no se puedes fumar.`, `Aquí no se puede fumar.`, `Impersonal se always takes the third person singular: puede.`],
      [`¿Cómo dice se pastilla en inglés?`, `¿Cómo se dice pastilla en inglés?`, `Se goes before the verb in a question.`],
      [`Se viven mejor sin estrés.`, `Se vive mejor sin estrés.`, `There is no plural noun, so the verb stays singular: vive.`]
    ],
    more: [
      [`Aquí se atiende a las familias sin cita.`, `Families are seen here without an appointment.`],
      [`Se recomienda no beber alcohol con esta medicina.`, `It is recommended not to drink alcohol with this medicine.`],
      [`Se ofrecen servicios de interpretación gratis.`, `Interpreter services are offered free of charge.`],
      [`Se vende pan dulce en esa esquina.`, `Sweet bread is sold on that corner.`],
      [`¿Cómo se dice "thank you" en español?`, `How do you say "thank you" in Spanish?`],
      [`En mi casa se cena temprano.`, `In my house, people have dinner early.`]
    ],
    quiz: [
      [`Se ___ servicios de interpretación gratis.`, [`ofrece`, `ofrecer`, `ofrecen`], 2, `The noun servicios is plural, so the verb is plural.`],
      [`No se ___ entrar sin cita.`, [`puede`, `pueden`, `puedes`], 0, `Se plus puede plus an infinitive: the verb stays singular.`],
      [`Se ___ muchos tamales en diciembre.`, [`come`, `comen`, `como`], 1, `The noun tamales is plural, so comen.`],
      [`How do you say "How do you say pill in Spanish?"`, [`¿Cómo dice se pastilla en español?`, `¿Cómo es dicho pastilla en español?`, `¿Cómo se dice pastilla en español?`], 2, `Se goes before the verb: se dice.`],
      [`Se ___ mejor cuando hay compañía.`, [`vive`, `viven`, `vivimos`], 0, `There is no plural noun, so use the singular: vive.`],
      [`Se ___ que el café ayuda a despertar.`, [`creen`, `cree`, `creer`], 1, `Se cree que is the fixed impersonal form: it is believed that.`]
    ]
  },
  'se-accidental': {
    mistakes: [
      [`A mi hija se me perdió el celular.`, `A mi hija se le perdió el celular.`, `The pronoun must match the person it happened to: la hija is le.`],
      [`Se me no olvidó la pastilla.`, `No se me olvidó la pastilla.`, `No goes before the whole se me verb group.`],
      [`Se me han olvidado la cita.`, `Se me ha olvidado la cita.`, `The helping verb agrees with the thing forgotten: una cita is singular, so ha.`]
    ],
    more: [
      [`Se me acabaron las pastillas el viernes.`, `I ran out of pills on Friday.`],
      [`¿Se le perdió la receta, señora?`, `Did you lose the prescription, ma'am?`],
      [`A mi papá se le olvida tomar la medicina por la tarde.`, `My dad forgets to take his medicine in the afternoon.`],
      [`Se me rompió el celular.`, `My phone broke on me.`],
      [`Se nos descompuso el carro en la carretera.`, `Our car broke down on the highway.`],
      [`Se me fue el autobús.`, `I missed the bus.`]
    ],
    quiz: [
      [`A mi hija se le ___ el celular.`, [`perdió`, `perdí`, `perdiste`], 0, `The verb agrees with el celular: perdió.`],
      [`Se me ___ las llaves en la clínica.`, [`quedó`, `quedé`, `quedaron`], 2, `Las llaves is plural, so the verb is quedaron.`],
      [`Se nos ___ el carro en la carretera.`, [`descompusimos`, `descompuso`, `descompusieron`], 1, `El carro is singular: descompuso.`],
      [`How do you say "I did not forget the pill"?`, [`No se me olvidó la pastilla`, `Se me no olvidó la pastilla`, `Me no se olvidó la pastilla`], 0, `No goes first, then se me, then the verb.`],
      [`¿___ olvidó alguna dosis, señora?`, [`Le se`, `Me se`, `Se le`], 2, `Se comes first, then le for usted.`],
      [`Se me ___ las citas de esta semana.`, [`olvidó`, `olvidaron`, `olvidaste`], 1, `Las citas is plural, so olvidaron.`]
    ]
  },
  'verbs-of-change': {
    mistakes: [
      [`Mi sobrino se puso médico.`, `Mi sobrino se hizo médico.`, `A profession reached by effort uses hacerse, not ponerse.`],
      [`Se convirtió muy enojado.`, `Se puso muy enojado.`, `Convertirse needs en plus a noun (se convirtió en un hombre enojado). For a mood, use ponerse.`],
      [`Me puse sin fuerzas.`, `Me quedé sin fuerzas.`, `Sin fuerzas is a resulting state, so use quedarse.`]
    ],
    more: [
      [`Se puso inquieto cuando le hablaron del alta.`, `He became restless when they talked to him about discharge.`],
      [`Desde el divorcio se quedó muy callada.`, `Since the divorce she has been very quiet.`],
      [`Con los años se volvió más ansioso.`, `Over the years he has become more anxious.`],
      [`Mi hermano se hizo abogado.`, `My brother became a lawyer.`],
      [`Me puse roja de la vergüenza.`, `I turned red with embarrassment.`],
      [`Se quedaron sin luz toda la noche.`, `They were without electricity all night.`]
    ],
    quiz: [
      [`Mi sobrino quiere ___ médico.`, [`ponerse`, `hacerse`, `quedarse`], 1, `A profession uses hacerse.`],
      [`Con los años mi papá se ___ muy callado y ya no habla como antes.`, [`puso`, `hizo`, `volvió`], 2, `A lasting change in character uses volverse.`],
      [`Me ___ roja de la vergüenza.`, [`puse`, `hice`, `convertí`], 0, `A short reaction uses ponerse.`],
      [`Se ___ sin fuerzas después de la operación.`, [`puso`, `quedó`, `volvió`], 1, `Quedarse sin plus a noun describes a resulting state.`],
      [`Su pena se ___ en rabia.`, [`quedó`, `puso`, `convirtió`], 2, `Convertirse en plus a noun is a full transformation.`],
      [`Cuando vio al doctor, el niño se ___ muy serio. (briefly)`, [`puso`, `hizo`, `convirtió`], 0, `A passing reaction uses ponerse.`]
    ]
  },
  'periphrases': {
    mistakes: [
      [`Acabo tomar la pastilla.`, `Acabo de tomar la pastilla.`, `Acabar needs de before the infinitive.`],
      [`Estoy a punto a llorar.`, `Estoy a punto de llorar.`, `The phrase is estar a punto de plus an infinitive, not a.`],
      [`Empecé dormir mal.`, `Empecé a dormir mal.`, `Empezar needs a before the infinitive.`]
    ],
    more: [
      [`Acabo de ver a su hija en la sala de espera.`, `I just saw your daughter in the waiting room.`],
      [`¿Sigue teniendo pesadillas?`, `Do you still have nightmares?`],
      [`Dejó de comer cuando murió su esposo.`, `He stopped eating when his wife died.`],
      [`Mi esposa suele levantarse temprano.`, `My wife usually gets up early.`],
      [`Sigue lloviendo desde ayer.`, `It has kept raining since yesterday.`],
      [`Mañana voy a volver a intentarlo.`, `Tomorrow I am going to try again.`]
    ],
    quiz: [
      [`Acabamos ___ llegar a la clínica.`, [`a`, `en`, `de`], 2, `Acabar de plus an infinitive means "just did".`],
      [`¿Sigue ___ pesadillas?`, [`teniendo`, `tener`, `tenido`], 0, `Seguir takes the gerund: teniendo.`],
      [`Mi esposa ___ levantarse temprano. (usually)`, [`acaba`, `suele`, `deja`], 1, `Soler plus an infinitive means "usually".`],
      [`No pudo volver ___ caminar sola.`, [`de`, `en`, `a`], 2, `Volver a plus an infinitive means "do again".`],
      [`Dejé ___ fumar hace dos años.`, [`de`, `a`, `en`], 0, `Dejar de plus an infinitive means "stop doing".`],
      [`Ella ___ a llorar cuando oyó la noticia. (suddenly began)`, [`quedó`, `se puso`, `siguió`], 1, `Ponerse a plus an infinitive means to begin suddenly.`]
    ]
  },
  'diminutives': {
    mistakes: [
      [`lapizito`, `lapicito`, `Words ending in z change z to c before -ito.`],
      [`pastilita`, `pastillita`, `The diminutive of pastilla keeps both l letters: pastillita.`],
      [`Mi mamá está tristísimo.`, `Mi mamá está tristísima.`, `-ísimo agrees in gender: tristísima for a woman.`]
    ],
    more: [
      [`Respire despacito, por favor.`, `Breathe slowly, please.`],
      [`Nomás tomo unas copitas los fines de semana.`, `I only have a few little drinks on weekends.`],
      [`Mi niña tiene una fiebrecita desde ayer.`, `My little girl has had a slight fever since yesterday.`],
      [`Mi abuelita hace unas tortillas riquísimas.`, `My grandma makes extremely tasty tortillas.`],
      [`Espérame tantito, ya voy.`, `Wait for me a bit, I am coming. (Tantito is common in Mexico.)`],
      [`Qué bonita casita tienen.`, `What a pretty little house you have.`]
    ],
    quiz: [
      [`What is the diminutive of "pastilla"?`, [`pastilita`, `pastillita`, `pastillaito`], 1, `Keep both l letters and add -ita: pastillita.`],
      [`What is the diminutive of "lápiz"?`, [`lapizito`, `lápito`, `lapicito`], 2, `Z changes to c: lapicito.`],
      [`How do you say "The soup is extremely good"?`, [`La sopa está buenísima`, `La sopa está muy buenísima`, `La sopa está buenasísima`], 0, `-ísima already means extremely and agrees with sopa, so no muy.`],
      [`A patient says "Nomás tomo unas copitas." What is the best next line?`, [`Entonces no hay problema.`, `¿Cuántas copas toma en una semana normal?`, `No le creo.`], 1, `A diminutive may understate, so ask for a number without judging.`],
      [`What is the diminutive of "amigo"?`, [`amigito`, `amigoito`, `amiguito`], 2, `G changes to gu to keep the hard g sound: amiguito.`],
      [`Mi mamá está ___. (very sad)`, [`tristísima`, `tristísimo`, `tristesísima`], 0, `-ísima agrees with mamá.`]
    ]
  },
  'prepositional-verbs': {
    mistakes: [
      [`Confío a mi hermana.`, `Confío en mi hermana.`, `Confiar takes en: confiar en.`],
      [`Depende en el clima.`, `Depende del clima.`, `Depender takes de, and de plus el becomes del.`],
      [`Me preocupo con mis hijos.`, `Me preocupo por mis hijos.`, `Preocuparse takes por.`]
    ],
    more: [
      [`¿Sueña seguido con el accidente?`, `Do you often dream about the accident?`],
      [`Dependo de mi hija para venir a las citas.`, `I depend on my daughter to come to appointments.`],
      [`¿Se dio cuenta de cuándo empezó el temblor?`, `Did you notice when the tremor started?`],
      [`Me casé con mi mejor amigo.`, `I married my best friend.`],
      [`Siempre me olvido de apagar la luz.`, `I always forget to turn off the light.`],
      [`Voy a pensar en su oferta.`, `I am going to think about your offer.`]
    ],
    quiz: [
      [`Me casé ___ mi mejor amigo.`, [`a`, `de`, `con`], 2, `Casarse con.`],
      [`¿Se acuerda ___ lo que soñó?`, [`de`, `en`, `con`], 0, `Acordarse de.`],
      [`Dependo ___ mi hija para venir.`, [`en`, `de`, `por`], 1, `Depender de.`],
      [`Confíe ___ mí, estoy aquí para ayudarle.`, [`a`, `de`, `en`], 2, `Confiar en.`],
      [`Siempre me olvido ___ apagar la luz.`, [`de`, `a`, `en`], 0, `Olvidarse de.`],
      [`¿Sueña seguido ___ el accidente?`, [`de`, `con`, `en`], 1, `Soñar con.`]
    ]
  },
  'review-b1': {
    mistakes: [
      [`Espero que usted puede venir el lunes.`, `Espero que usted pueda venir el lunes.`, `Esperar que takes the subjunctive, and poder changes its stem: pueda.`],
      [`Dejé a tomar la medicina.`, `Dejé de tomar la medicina.`, `Dejar needs de before the infinitive.`],
      [`Me hice triste cuando vi la noticia.`, `Me puse triste cuando vi la noticia.`, `A temporary mood uses ponerse. Hacerse is for goals and identity.`]
    ],
    more: [
      [`Cuando termine el tratamiento, vamos a revisar cómo se siente.`, `When the treatment ends, we are going to review how you feel.`],
      [`Su hija dijo que usted se había caído en la cocina.`, `Your daughter said you had fallen in the kitchen.`],
      [`Se me acabó la medicina y dejé de tomarla.`, `I ran out of medicine and stopped taking it.`],
      [`Ojalá que mañana haga buen tiempo.`, `I hope the weather is nice tomorrow.`],
      [`Mi hermano se hizo ingeniero.`, `My brother became an engineer.`],
      [`Sueño con volver a mi pueblo.`, `I dream of going back to my town.`]
    ],
    quiz: [
      [`Espero que usted ___ venir el lunes.`, [`pueda`, `puede`, `poder`], 0, `Esperar que takes the subjunctive: pueda.`],
      [`Cuando ___ a casa, llámeme. (future)`, [`llega`, `llegue`, `llegó`], 1, `A future event after cuando takes the subjunctive: llegue.`],
      [`Su hija dijo que usted se ___ caído.`, [`ha`, `hay`, `había`], 2, `The past reporting verb leads to the pluperfect: se había caído.`],
      [`Which sentence has the right verb phrase?`, [`Dejé de tomar la medicina`, `Dejé tomar la medicina`, `Dejé a tomar la medicina`], 0, `Dejar de plus an infinitive.`],
      [`Se me ___ las llaves en el hospital.`, [`quedó`, `quedaron`, `quedé`], 1, `Las llaves is plural, so quedaron.`],
      [`Sueño ___ volver a mi pueblo.`, [`de`, `en`, `con`], 2, `Soñar con.`]
    ]
  }
});
