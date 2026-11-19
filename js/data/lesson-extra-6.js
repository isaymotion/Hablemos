/* Lesson extras part 6 (0.11.0): common mistakes, more examples and a "More practice" quiz for the 13 B2 lessons of lessons-5.js
   (imperfect subjunctive to review-b2, in lesson order; the lesson page shows them after the body and runs the quiz after the lesson's own).
   DRAFT FOR REVIEW by a native Spanish-speaking clinician before use. Spanish is plain text (US/Mexican baseline, usted with adults).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongEs, rightEs, whyEn], ...3],  // wrongEs is shown struck through, never spoken or recorded
     more: [[es, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'imperfect-subjunctive': {
    mistakes: [
      [`Habla como si no tiene prisa.`, `Habla como si no tuviera prisa.`, `Como si always takes the imperfect (or pluperfect) subjunctive, never the present indicative.`],
      [`Ojalá tenieran más tiempo.`, `Ojalá tuvieran más tiempo.`, `The stem comes from the preterite (tuvieron), not from the infinitive tener.`],
      [`Esperaba que ella dijiera la verdad.`, `Esperaba que ella dijera la verdad.`, `Dijeron ends in -eron, so the i is lost and the form is dijera.`]
    ],
    more: [
      [`Quisiera saber cómo se ha sentido esta semana.`, `I would like to know how you have been feeling this week.`],
      [`El doctor me recomendó que descansara más.`, `The doctor recommended that I rest more.`],
      [`Ojalá me dejaran salir hoy.`, `I wish they would let me leave today.`],
      [`Ojalá hiciera menos frío.`, `I wish it were less cold.`],
      [`Quisiera una taza de café, por favor.`, `I would like a cup of coffee, please.`],
      [`Mi vecina habla como si fuera la dueña de la calle.`, `My neighbor talks as if she owned the street.`]
    ],
    quiz: [
      [`Which is the imperfect subjunctive of "hacer" (yo)?`, [`hacera`, `hiciera`, `hizo`], 1, `Take hicieron, drop -ron, and add -ra: hiciera.`],
      [`"Ojalá ___ más tiempo para hablar." (We wish we had it now.)`, [`tendremos`, `tendríamos`, `tuviéramos`], 2, `Ojalá takes the subjunctive, and a wish about the present uses the imperfect: tuviéramos.`],
      [`"Mi doctora quería que yo ___ más agua."`, [`tomara`, `tomo`, `tomaré`], 0, `After a past verb of wanting, the next verb is in the imperfect subjunctive.`],
      [`Which sentence correctly says "She talks as if she were tired"?`, [`Habla como si está cansada.`, `Habla como si estaría cansada.`, `Habla como si estuviera cansada.`], 2, `Como si takes the imperfect subjunctive.`],
      [`What does "quisiera" do in "Quisiera ver a mi hijo"?`, [`It makes the wish polite and softer than quiero`, `It puts the wish in the past`, `It says the wish already came true`], 0, `Quisiera is the polite way to say "I would like".`],
      [`Which nosotros form is written correctly?`, [`tuvieramos`, `tuviéramos`, `tuvíeramos`], 1, `The stressed vowel in the nosotros form takes the written accent: tuviéramos.`]
    ]
  },
  'si-clauses': {
    mistakes: [
      [`Si fuera usted, hablaré con su familia.`, `Si fuera usted, hablaría con su familia.`, `An unreal si-part in the imperfect subjunctive pairs with the conditional, not the future.`],
      [`Si había pedido ayuda, habría mejorado.`, `Si hubiera pedido ayuda, habría mejorado.`, `The si-part of an unreal past is hubiera + participle, not the imperfect había.`],
      [`Si tiene dolor, tomaría una pastilla.`, `Si tiene dolor, tome una pastilla.`, `A real condition in the present takes a present, a future or a command in the result part, not the conditional.`]
    ],
    more: [
      [`Si no toma la pastilla hoy, avise a la clínica.`, `If you do not take the pill today, let the clinic know.`],
      [`Si tuviera una pesadilla, ¿se lo diría a alguien?`, `If you had a nightmare, would you tell someone?`],
      [`Si mi mamá hubiera vivido más cerca, la habría cuidado yo.`, `If my mother had lived closer, I would have cared for her.`],
      [`Si llueve mañana, no salimos.`, `If it rains tomorrow, we will not go out.`],
      [`Si tuviera un carro, llegaría al trabajo más rápido.`, `If I had a car, I would get to work faster.`],
      [`Si hubiera salido más temprano, habría alcanzado el autobús.`, `If I had left earlier, I would have caught the bus.`]
    ],
    quiz: [
      [`"If I had a car, I would go to the clinic." Which is correct?`, [`Si tendría carro, iría a la clínica.`, `Si tuviera carro, iría a la clínica.`, `Si tengo carro, iría a la clínica.`], 1, `The si-part is the imperfect subjunctive and the result is the conditional.`],
      [`"Si no ___ venir mañana, llámeme." (a real possibility)`, [`puede`, `pudiera`, `podrá`], 0, `A real condition uses the present after si, never the future.`],
      [`"Si me hubieras llamado, te ___ ayudado."`, [`habré`, `habría`, `había`], 1, `The result of an unreal past is habría + participle.`],
      [`Which sentence is a real, likely situation?`, [`Si tuviera tiempo, vendría.`, `Si hubiera tenido tiempo, habría venido.`, `Si tiene tiempo, venga.`], 2, `The present after si, with a command, is the real pattern.`],
      [`"Si hubiera sabido" is about`, [`something that did not happen in the past`, `something likely tomorrow`, `something true now`], 0, `Hubiera + participle in the si-part looks back at a past that did not happen.`],
      [`Which pair is right?`, [`si = yes, sí = if`, `both mean if`, `si = if, sí = yes`], 2, `Without an accent, si is "if"; with an accent, sí is "yes".`]
    ]
  },
  'conditional-perfect-regret': {
    mistakes: [
      [`Debería haber escribido la carta.`, `Debería haber escrito la carta.`, `The participle of escribir is irregular: escrito.`],
      [`Ojalá habría venido antes.`, `Ojalá hubiera venido antes.`, `A wish about the past uses hubiera + participle, never habría.`],
      [`Debí haber me dado cuenta.`, `Debí haberme dado cuenta.`, `The pronoun attaches to the end of haber.`]
    ],
    more: [
      [`Debería haber vuelto a la clínica antes.`, `I should have gone back to the clinic sooner.`],
      [`Ojalá hubiera visto las señales.`, `I wish I had seen the signs.`],
      [`Habría querido despedirme de ella.`, `I would have liked to say goodbye to her.`],
      [`Habría ido a la fiesta, pero estaba enfermo.`, `I would have gone to the party, but I was sick.`],
      [`Debería haber traído un paraguas.`, `I should have brought an umbrella.`],
      [`Ojalá hubiera salido más temprano.`, `I wish I had left earlier.`]
    ],
    quiz: [
      [`"Debería haber vuelto" means`, [`I should have come back`, `I will come back`, `I would like to come back soon`], 0, `Debería haber + participle is "should have".`],
      [`Which participle is correct? "Habría ___ la puerta." (opened)`, [`abrido`, `abierto`, `abrito`], 1, `Abrir has an irregular participle: abierto.`],
      [`"Ojalá no ___ dicho eso." (I wish I had not said that.)`, [`habré`, `habría`, `hubiera`], 2, `A wish about the past uses hubiera + participle.`],
      [`A man says: "Debí haberlo visto venir." He is`, [`predicting the future`, `expressing regret about something past`, `giving an order`], 1, `Debí haber + participle looks back with regret.`],
      [`Which sentence is a wish about the past?`, [`Ojalá hubiera hablado con él.`, `Ojalá hable con él.`, `Ojalá hablara con él.`], 0, `Hubiera + participle goes back to the past; the other forms are about now or later.`],
      [`What is the best first reply to "Debí haberme dado cuenta"?`, [`Eso es una tontería.`, `No pasa nada, no se preocupe.`, `Siente que pudo haber hecho algo distinto.`], 2, `Reflect the feeling first. Quick reassurance or dismissal can close the conversation.`]
    ]
  },
  'subjunctive-concession': {
    mistakes: [
      [`Sin que usted lo pide, le traen la cena.`, `Sin que usted lo pida, le traen la cena.`, `Sin que always takes the subjunctive.`],
      [`Aunque lloverá, iremos al parque.`, `Aunque llueva, iremos al parque.`, `For "even if" about the future, use the present subjunctive, not the future indicative.`],
      [`Aunque duerma ocho horas anoche, sigo cansada.`, `Aunque dormí ocho horas anoche, sigo cansada.`, `Last night is a known fact, so aunque takes the indicative; the present subjunctive cannot describe a finished past.`]
    ],
    more: [
      [`Aunque las voces no estén ahora, avíseme si regresan.`, `Even if the voices are not there now, tell me if they come back.`],
      [`Aunque ya duerma mejor, no suspenda la medicina sin hablar con su doctora.`, `Even if you already sleep better, do not stop the medicine without talking to your doctor.`],
      [`Aunque la pastilla me da sueño, la tomo todas las noches.`, `Although the pill makes me sleepy, I take it every night.`],
      [`Aunque sea tarde, te espero.`, `Even if it is late, I will wait for you.`],
      [`Aunque estoy cansado, voy a la fiesta.`, `Although I am tired, I am going to the party.`],
      [`No salió de casa sin que su mamá lo supiera.`, `He did not leave the house without his mother knowing.`]
    ],
    quiz: [
      [`"Aunque ___ tarde, la farmacia está abierta." (The speaker knows it is late.)`, [`es`, `sea`, `fuera`], 0, `A known fact takes the indicative.`],
      [`"Aunque yo ___ el dinero, no lo gastaría."`, [`tengo`, `tuviera`, `tendré`], 1, `A hypothetical "even if" in this frame takes the imperfect subjunctive.`],
      [`"Sin que usted ___, le traen la comida."`, [`lo pide`, `pedirá`, `lo pida`], 2, `Sin que always takes the subjunctive.`],
      [`"Aunque llueva" means`, [`it rained yesterday`, `because it is raining`, `even if it rains`], 2, `The present subjunctive after aunque means "even if".`],
      [`Which patient sentence names a barrier the patient knows?`, [`Aunque quiero tomarla, me da náuseas.`, `Aunque quiera tomarla, me dé náuseas.`, `Aunque querré tomarla, me da náuseas.`], 0, `A real, known fact takes the indicative; the other options are not grammatical.`],
      [`"Por más que lo intento, no puedo" means`, [`I try, so I can`, `No matter how much I try, I cannot`, `I will not try`], 1, `Por más que means "no matter how much".`]
    ]
  },
  'passive-and-se': {
    mistakes: [
      [`Se admitieron a los pacientes.`, `Se admitió a los pacientes.`, `When the people are a direct object with personal a, the se verb stays singular.`],
      [`La puerta fue abrida por el guardia.`, `La puerta fue abierta por el guardia.`, `Abrir has an irregular participle: abierto, abierta.`],
      [`La paciente está ingresado desde ayer.`, `La paciente está ingresada desde ayer.`, `The participle agrees with the subject: paciente is feminine, so ingresada.`]
    ],
    more: [
      [`Las citas se programan por teléfono.`, `Appointments are scheduled by phone.`],
      [`El alta fue firmada por la doctora.`, `The discharge was signed by the doctor.`],
      [`La paciente está sedada y tranquila.`, `The patient is sedated and calm.`],
      [`Se alquilan cuartos.`, `Rooms for rent.`],
      [`La carta fue escrita a mano.`, `The letter was written by hand.`],
      [`Aquí no se permite fumar.`, `Smoking is not allowed here.`]
    ],
    quiz: [
      [`Which means "Rooms for rent"?`, [`Se alquilan cuartos.`, `Se alquilar cuartos.`, `Se alquilo cuartos.`], 0, `Se + a verb in the third person, agreeing with cuartos.`],
      [`"La carta fue ___ ayer." (written)`, [`escribida`, `escrita`, `escrito`], 1, `Escribir has the irregular participle escrito, and with ser it agrees with carta: escrita.`],
      [`Which sentence says the door is open as a result, with no actor?`, [`La puerta fue abierta.`, `La puerta se abre.`, `La puerta está abierta.`], 2, `Estar + participle describes a present state.`],
      [`"Me dieron cita para el lunes" uses`, [`a third-person plural: they gave me`, `the passive with ser`, `a command`], 0, `The third person plural is a common way to leave out who did it.`],
      [`Which sentence says "English is spoken here"?`, [`Se hablan inglés aquí.`, `Aquí se habla inglés.`, `Aquí se hablamos inglés.`], 1, `Inglés is singular, so the verb is singular.`],
      [`"Está internado" in a handoff means`, [`He refused treatment`, `He will go home`, `He is hospitalized now`], 2, `Estar + participle gives the current state.`]
    ]
  },
  'ser-estar-adjectives': {
    mistakes: [
      [`¿Está seguro tomar este medicamento con alcohol?`, `¿Es seguro tomar este medicamento con alcohol?`, `"Safe to do something" uses ser; estar seguro means a person is sure.`],
      [`Mi mamá es muy cansada hoy.`, `Mi mamá está muy cansada hoy.`, `Tired today is a state, so use estar; es cansada would mean she is tiring.`],
      [`Mi abuela todavía es viva.`, `Mi abuela todavía está viva.`, `Alive always takes estar.`]
    ],
    more: [
      [`La paciente está muy aburrida en la sala de espera.`, `The patient is very bored in the waiting room.`],
      [`¿Está seguro de que quiere dejar el tratamiento?`, `Are you sure you want to stop the treatment?`],
      [`Mi hijo está malo y no quiere comer.`, `My son is sick and does not want to eat.`],
      [`Este libro es muy aburrido.`, `This book is very boring.`],
      [`Mi hermano es muy vivo: siempre encuentra la manera.`, `My brother is very sharp: he always finds a way.`],
      [`Mi esposo es muy listo para los números, pero hoy está muy cansado.`, `My husband is very good with numbers, but today he is very tired.`]
    ],
    quiz: [
      [`"La película es aburrida" means the film is`, [`boring`, `bored`, `sad`], 0, `Ser + aburrido describes the thing as boring.`],
      [`"Estoy listo" most likely means`, [`I am smart`, `I am ready`, `I am lazy`], 1, `Estar listo means ready.`],
      [`"Mi vecino es muy vivo" means`, [`He is alive`, `He is awake`, `He is sharp and quick`], 2, `Ser vivo describes a quick, sharp person; alive uses estar.`],
      [`How do you say "She is awake now"?`, [`Está despierta ahora.`, `Es despierta ahora.`, `Es despertada.`], 0, `Awake right now is a state, so estar.`],
      [`"¿Es seguro manejar con esta medicina?" asks`, [`Are you sure you drive?`, `Is it safe to drive with this medicine?`, `Are you safe?`], 1, `Ser seguro followed by an infinitive means "it is safe to".`],
      [`"Mi abuela todavía está viva" says`, [`My grandmother is still awake`, `My grandmother is still sharp`, `My grandmother is still alive`], 2, `Estar vivo means alive.`]
    ]
  },
  'lo-neutro': {
    mistakes: [
      [`Cuénteme lo qué pasó.`, `Cuénteme lo que pasó.`, `Here que joins two clauses and is not stressed, so it has no written accent.`],
      [`Eso es lo cual me dijo.`, `Eso es lo que me dijo.`, `After es, use lo que for "what"; lo cual refers back to a whole idea and cannot start this clause.`],
      [`Lo que quiero es que me escucha.`, `Lo que quiero es que me escuche.`, `After querer que, the verb is in the subjunctive.`]
    ],
    more: [
      [`Lo que siente es normal después de una pérdida.`, `What you feel is normal after a loss.`],
      [`Lo de su hija debe de ser muy duro.`, `What happened with your daughter must be very hard.`],
      [`Lo primero es que se sienta segura aquí.`, `The first thing is for you to feel safe here.`],
      [`Lo bueno es que ya es viernes.`, `The good thing is that it is already Friday.`],
      [`Me encanta lo bien que cocina mi abuela.`, `I love how well my grandmother cooks.`],
      [`Eso es todo lo que sé.`, `That is everything I know.`]
    ],
    quiz: [
      [`"Lo bueno es que ya terminó" means`, [`The good one ended`, `The good thing is that it ended`, `The good man ended`], 1, `Lo + adjective means "the ... thing".`],
      [`"Me sorprende ___ rápido que habla."`, [`la`, `lo`, `el`], 1, `Lo + adjective or adverb + que means "how ...".`],
      [`"Lo que dice" means`, [`the one who says`, `how he says`, `what he or she says`], 2, `Lo que means "what" or "the thing that".`],
      [`Which means "everything I know"?`, [`todo lo que sé`, `todo que sé`, `todo lo qué sé`], 0, `Use todo lo que, with no accent on que.`],
      [`"Lo primero es que descanse" says`, [`The first person rests`, `He rested first`, `The first thing is for you to rest`], 2, `Lo primero is "the first thing"; the subjunctive follows a recommendation.`],
      [`Which sentence is right for "What I want is for you to listen to me"?`, [`Lo que quiero es que me escuche.`, `Lo que quiero es que me escucha.`, `Lo qué quiero es que me escuche.`], 0, `Que is unstressed here and querer que takes the subjunctive.`]
    ]
  },
  'future-of-probability': {
    mistakes: [
      [`Tenerá unos cuarenta años.`, `Tendrá unos cuarenta años.`, `Tener has an irregular future stem: tendr-.`],
      [`Habrá llegar ya.`, `Habrá llegado ya.`, `The future perfect is habrá + participle, not the infinitive.`],
      [`Mis hijos habrá pensado que soy un mal padre.`, `Mis hijos habrán pensado que soy un mal padre.`, `Habrá must agree with the subject: hijos is plural, so habrán.`]
    ],
    more: [
      [`Estará muy asustado en una cama que no conoce.`, `He must be very scared in a bed he does not know.`],
      [`¿Habrá tomado la pastilla esta mañana?`, `I wonder if she took the pill this morning.`],
      [`Tendrá miedo de venir solo.`, `He is probably afraid to come alone.`],
      [`Ya habrán llegado a Puebla.`, `They must have arrived in Puebla by now.`],
      [`¿Quién será a esta hora?`, `Who can that be at this hour?`],
      [`Estará lloviendo allá.`, `It must be raining there.`]
    ],
    quiz: [
      [`"Tendrá unos treinta años" means`, [`He must be about thirty`, `He had thirty years`, `He will turn thirty tomorrow`], 0, `A future form can be a guess about now.`],
      [`"¿Habrá tomado la pastilla?" asks`, [`Will he take the pill?`, `I wonder if he has taken the pill`, `Take the pill!`], 1, `Habrá + participle is a guess about something already done.`],
      [`"Ya habrán llegado" means`, [`They are arriving tomorrow`, `They had not arrived`, `They must have arrived already`], 2, `The future perfect guesses about the recent past.`],
      [`Which is a guess about right now?`, [`Estará en casa ahora.`, `Estuvo en casa ayer.`, `Estaba en casa.`], 0, `The future of probability points to the present.`],
      [`Which is a guess about a past moment?`, [`Estará dormido.`, `Estaría dormido cuando llamé.`, `Estuvo dormido.`], 1, `The conditional guesses about a past moment.`],
      [`Which sentence says "He probably has a fever"?`, [`Tenerá fiebre.`, `Tenrá fiebre.`, `Tendrá fiebre.`], 2, `The irregular future stem of tener is tendr-.`]
    ]
  },
  'discourse-markers': {
    mistakes: [
      [`Esté… no sé cómo decirlo.`, `Este… no sé cómo decirlo.`, `The filler este has no accent; esté is a verb form.`],
      [`Entonces, que pasó después?`, `Entonces, ¿qué pasó después?`, `A question needs the opening ¿ and the accent on qué.`],
      [`Pués, más o menos.`, `Pues, más o menos.`, `Pues is one syllable and has no written accent.`]
    ],
    more: [
      [`A ver, ¿cuántas horas durmió anoche?`, `Let's see, how many hours did you sleep last night?`],
      [`Pues, la verdad, he estado muy triste.`, `Well, to be honest, I have been very sad.`],
      [`Es que me da pena decírselo.`, `The thing is, I feel embarrassed to tell you.`],
      [`Bueno, nos vemos el lunes.`, `Well, see you on Monday.`],
      [`O sea, ¿no vas a ir a la fiesta?`, `So you mean you are not going to the party?`],
      [`Fíjate que se me olvidó el celular.`, `You see, I forgot my phone.`]
    ],
    quiz: [
      [`"Fíjese que se me olvidó" mostly introduces`, [`a question`, `an excuse or news`, `a command`], 1, `Fíjese que opens an explanation, an excuse or news.`],
      [`Which is the filler "um" in Mexico?`, [`esté…`, `estén…`, `este…`], 2, `The filler este has no accent.`],
      [`You are about to take the patient's blood pressure. Which marker fits?`, [`A ver, le voy a tomar la presión.`, `Es que le voy a tomar la presión.`, `Fíjese que le voy a tomar la presión.`], 0, `A ver signals that you are about to do something.`],
      [`A patient pauses with "pues… este…" before answering about drinking. What do you do?`, [`Finish the sentence for them`, `Wait and give them time`, `Change the topic at once`], 1, `A pause can mean shame or difficulty; waiting is kind and useful.`],
      [`How is the marker "well" written?`, [`Pues, más o menos.`, `Pués, más o menos.`, `Puès, más o menos.`], 0, `Pues has no accent.`],
      [`"Mire, doctora" is`, [`a goodbye`, `an order to look`, `a way to get someone's attention`], 2, `Mire works like "look" or "listen" to get attention.`]
    ]
  },
  'casual-speech': {
    mistakes: [
      [`Paciente refiere que no duerme na' y que come poco pa' no engordar.`, `Paciente refiere que no duerme nada y que come poco para no engordar.`, `A chart note uses full standard forms. Keep reduced words only inside quotation marks, when the exact words matter.`],
      [`"Ya mero llego" quiere decir "Ya no llego".`, `"Ya mero llego" quiere decir "Ya casi llego".`, `Ya mero means "almost" or "very soon" in Mexico and parts of the US; it does not mean "no longer".`],
      [`"Dolol" es otra palabra, no dolor.`, `"Dolol" es como algunas personas dicen "dolor".`, `In some Caribbean speech a final r can sound like l, so dolol is dolor, said another way. It is a tendency, not a rule for every speaker.`]
    ],
    more: [
      [`Doctora, no 'toy comiendo na' desde el lunes.`, `Doctor, I have not been eating at all since Monday.`],
      [`Pos me dio mucho miedo y ya no quise salir.`, `Well, I got very scared and did not want to go out anymore.`],
      [`Perdone, ¿me lo puede repetir más despacio?`, `Excuse me, can you repeat that more slowly?`],
      [`Nomás dame cinco minutos y ya salgo.`, `Just give me five minutes and I will be out.`],
      [`Ya mero es Navidad.`, `It is almost Christmas.`],
      [`¿Pa' dónde va, doña?`, `Where are you headed, ma'am?`]
    ],
    quiz: [
      [`"Pa' mi mamá" means`, [`for my mom`, `about my dad`, `from my mom`], 0, `Pa' is a reduction of para.`],
      [`"Ya mero llega" means`, [`He is not coming`, `He is almost here`, `He just left`], 1, `Ya mero means almost or very soon.`],
      [`A patient says "dolol". Most likely this is`, [`a word you do not know`, `a medicine`, `dolor, with a final l sound`], 2, `In some regions a final r can sound like l.`],
      [`"Na'" in "no hay na'" stands for`, [`nada`, `nadie`, `nunca`], 0, `Na' is a reduced nada.`],
      [`You did not understand a fast sentence. What is best?`, [`Nod and move on`, `Say "Perdone, ¿me lo puede repetir más despacio?"`, `Imitate the patient's accent to be friendly`], 1, `Ask politely. Do not pretend to understand and do not imitate.`],
      [`Reduced speech in a patient is`, [`a sign of confusion`, `a reason to speak louder`, `a normal feature of spoken Spanish`], 2, `Reduced forms are normal in fast, relaxed speech everywhere.`]
    ]
  },
  'advanced-pronouns': {
    mistakes: [
      [`Me dé la receta, por favor.`, `Deme la receta, por favor.`, `With an affirmative command, the pronoun attaches to the end of the verb.`],
      [`A mí duele la cabeza.`, `A mí me duele la cabeza.`, `The doubled form keeps both a mí and me; a mí alone is not enough.`],
      [`Les dije a mi hijo que viniera.`, `Le dije a mi hijo que viniera.`, `One person takes le; les is for two or more.`]
    ],
    more: [
      [`Dígame qué le preocupa más.`, `Tell me what worries you most.`],
      [`Se lo expliqué a su esposo.`, `I explained it to your husband.`],
      [`A ella le cuesta dormir.`, `She has trouble sleeping.`],
      [`Te lo dije ayer, ¿verdad?`, `I told you yesterday, right?`],
      [`¿Me pasa la sal, por favor?`, `Could you pass me the salt, please?`],
      [`A nosotros nos encanta la comida de allá.`, `We love the food from there.`]
    ],
    quiz: [
      [`"Dígame" means`, [`Tell me`, `Tell him`, `I tell you`], 0, `The pronoun me attaches to the usted command.`],
      [`In "Se lo di a mi hijo", lo stands for`, [`my son`, `the thing I gave`, `I`], 1, `Lo is the direct object, the thing; se replaces le.`],
      [`Which is standard for "I told my parents"?`, [`Los dije a mis papás.`, `Se dije a mis papás.`, `Les dije a mis papás.`], 2, `The indirect object for two people is les.`],
      [`Which is the usted command for "Give me the pill"?`, [`Deme la pastilla.`, `Me dé la pastilla.`, `Dame la pastilla.`], 0, `Usted command plus attached me: deme.`],
      [`In Spain, "¿Habéis comido?" speaks to`, [`one adult patient`, `several people, informally`, `a child only`], 1, `Vosotros is the informal plural of Spain.`],
      [`"Sentate" in voseo asks someone to`, [`feel`, `stand up`, `sit down`], 2, `Sentate is the voseo command of sentarse.`]
    ]
  },
  'chart-and-form-spanish': {
    mistakes: [
      [`Queda prohibido a fumar en esta área.`, `Queda prohibido fumar en esta área.`, `Prohibido takes an infinitive directly, with no a.`],
      [`Se le dará un folleto a fin de que mejora su sueño.`, `Se le dará un folleto a fin de que mejore su sueño.`, `A fin de que takes the subjunctive.`],
      [`Deberá comunicarse a la clínica.`, `Deberá comunicarse con la clínica.`, `Comunicarse takes con, not a.`]
    ],
    more: [
      [`El paciente deberá presentarse en ayunas.`, `The patient must come fasting.`],
      [`Se solicita la firma del paciente o de su representante legal.`, `The signature of the patient or the legal representative is requested.`],
      [`En caso de olvidar una dosis, no tome una doble.`, `If you forget a dose, do not take a double one.`],
      [`Se ruega guardar silencio.`, `Please keep quiet.`],
      [`Queda prohibido el paso a personas ajenas.`, `No entry for unauthorized people.`],
      [`Favor de mostrar una identificación en la entrada.`, `Please show identification at the entrance.`]
    ],
    quiz: [
      [`"Se ruega guardar silencio" means`, [`Please keep quiet`, `Silence is a prayer`, `He asks for silence`], 0, `Se ruega + infinitive is a formal written "please".`],
      [`Which is the plain version of "Queda prohibido el paso"?`, [`Puede pasar.`, `No se puede pasar.`, `Pase usted primero.`], 1, `Queda prohibido means "it is not allowed".`],
      [`"Deberá presentarse en ayunas" means`, [`You must come with a family member`, `You must come in the morning`, `You must come without eating`], 2, `En ayunas means fasting.`],
      [`"En caso de olvidar una dosis" means`, [`If you forget a dose`, `In the case of a large dose`, `Because of the dose`], 0, `En caso de + infinitive means "if".`],
      [`"Se solicita su firma" means`, [`You requested a signature`, `Your signature is requested`, `Your signature is forbidden`], 1, `Se + verb is a passive: your signature is requested.`],
      [`Which formal sentence is correct for "Smoking is not allowed"?`, [`Queda prohibido de fumar.`, `Queda prohibido a fumar.`, `Queda prohibido fumar.`], 2, `Prohibido takes the infinitive with no preposition.`]
    ]
  },
  'review-b2': {
    mistakes: [
      [`Si hubiera sabido, habré venido.`, `Si hubiera sabido, habría venido.`, `The result of an unreal past is habría + participle, not the future perfect.`],
      [`Eso es todo que sé.`, `Eso es todo lo que sé.`, `Use todo lo que for "everything that".`],
      [`Quisiera que me ayudaría.`, `Quisiera que me ayudara.`, `After quisiera que, use the imperfect subjunctive, never the conditional.`]
    ],
    more: [
      [`Debería haber vuelto antes a la clínica, doctora.`, `I should have come back to the clinic sooner, doctor.`],
      [`Lo de su pareja le ha afectado mucho, ¿verdad?`, `What happened with your partner has affected you a lot, hasn't it?`],
      [`Se le entregará una copia del plan de tratamiento.`, `You will be given a copy of the treatment plan.`],
      [`Estará lloviendo en Monterrey ahora.`, `It must be raining in Monterrey now.`],
      [`Si tuviera más tiempo, aprendería a tocar la guitarra.`, `If I had more time, I would learn to play the guitar.`],
      [`Es que se me hizo tarde.`, `The thing is, I ran late.`]
    ],
    quiz: [
      [`"Ojalá tuviera más ayuda" expresses`, [`a wish about the present that is not true`, `a promise`, `a past fact`], 0, `Ojalá + imperfect subjunctive is a wish about now.`],
      [`"Si lo hubiera sabido, ___ venido."`, [`habré`, `habría`, `había`], 1, `The unreal past result is habría + participle.`],
      [`"Habrá llegado" is`, [`a promise to arrive`, `a past fact`, `a guess that he probably arrived`], 2, `The future perfect is a guess.`],
      [`Which sentence says the form is signed now, as a state?`, [`El formulario está firmado.`, `El formulario fue firmado.`, `El formulario se firma.`], 0, `Estar + participle is a state.`],
      [`"Es que no tengo tiempo" usually signals`, [`a command`, `an explanation or excuse`, `a greeting`], 1, `Es que announces a reason.`],
      [`"Pa'l" stands for`, [`por el`, `para la`, `para el`], 2, `Pa'l is the reduced form of para el.`]
    ]
  }
});
