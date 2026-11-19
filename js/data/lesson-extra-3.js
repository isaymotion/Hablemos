/* Lesson extras part 3 (0.11.0): common mistakes, more examples and a "More practice" quiz for the 15 A1 lessons of lessons-2.js
   (articles-contractions to review-a1, in lesson order; the lesson page shows them after the body and runs the quiz after the lesson's own).
   DRAFT FOR REVIEW by a native Spanish-speaking clinician before use. Spanish is plain text (US/Mexican baseline, usted with adults).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongEs, rightEs, whyEn], ...3],  // wrongEs is shown struck through, never spoken or recorded
     more: [[es, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'articles-contractions': {
    mistakes: [
      [`Vengo del la clínica.`, `Vengo de la clínica.`, `Only de + el joins into del. De + la stays as two words.`],
      [`El mano me duele.`, `La mano me duele.`, `Mano ends in -o but is feminine, so it takes la.`],
      [`Es la problema más grande.`, `Es el problema más grande.`, `Problema ends in -a but is masculine, so it takes el.`]
    ],
    more: [
      [`El médico le receta un medicamento nuevo.`, `The doctor prescribes a new medication for you.`],
      [`¿Le ayuda la música cuando está nervioso?`, `Does music help you when you are nervous?`],
      [`¿El dolor es constante o va y viene?`, `Is the pain constant, or does it come and go?`],
      [`El café está caliente.`, `The coffee is hot.`],
      [`Mi hermano vuelve del trabajo a las seis.`, `My brother comes back from work at six.`],
      [`Los sábados vamos al mercado.`, `On Saturdays we go to the market.`]
    ],
    quiz: [
      [`Which completes "Salgo ___ hospital a las cinco"?`, [`de el`, `de la`, `del`], 2, `De + el always becomes del.`],
      [`Which phrase is correct?`, [`el mano derecha`, `la mano derecha`, `el mano derecho`], 1, `Mano is feminine, so la mano derecha.`],
      [`A patient mentions a sister for the first time: "Tengo ___ hermana en Texas."`, [`la`, `una`, `el`], 1, `A new person takes una. La would mean a sister you already talked about.`],
      [`What does "Voy a la farmacia del hospital" mean?`, [`I am going to the hospital's pharmacy.`, `I am leaving the hospital's pharmacy.`, `I am going to the hospital.`], 0, `De + el = del, so la farmacia del hospital is the pharmacy of the hospital.`],
      [`Which sentence uses hambre with el correctly?`, [`El hambre es fuerte.`, `La hambre es fuerte.`, `El hambre es fuerto.`], 0, `Hambre takes el in the singular, and the adjective stays feminine: fuerte.`],
      [`"Los jueves" means`, [`this Thursday`, `last Thursday`, `on Thursdays`], 2, `Los + a day means every week on that day.`]
    ]
  },
  'subject-pronouns': {
    mistakes: [
      [`Ellos es mis hijos.`, `Ellos son mis hijos.`, `The verb must match the pronoun: ellos goes with son.`],
      [`Nosotros vive en Texas.`, `Nosotros vivimos en Texas.`, `Nosotros needs the -imos ending: vivimos.`],
      [`Mi tía y mi mamá viven aquí. Ellos son enfermeras.`, `Mi tía y mi mamá viven aquí. Ellas son enfermeras.`, `Two women are ellas. Ellos is for men or a mixed group.`]
    ],
    more: [
      [`¿Ustedes quieren hablar con el doctor?`, `Do you (all) want to speak with the doctor?`],
      [`Ella llora mucho, pero él no habla.`, `She cries a lot, but he does not speak.`],
      [`Nosotros no sabemos qué le pasa.`, `We do not know what is wrong with him.`],
      [`Yo trabajo de día y él trabaja de noche.`, `I work in the day and he works at night.`],
      [`¿Tú vienes a la fiesta?`, `Are you coming to the party? (to a friend)`],
      [`Ellas llegan a las cinco.`, `They arrive at five. (a group of women)`]
    ],
    quiz: [
      [`Which sentence uses the pronoun for contrast?`, [`Tomo la pastilla.`, `Yo tomo la pastilla, pero ella no.`, `Tomo la pastilla de noche.`], 1, `Yo and ella are kept to set two people against each other.`],
      [`"Nosotros ___ en un apartamento." (vivir)`, [`vivo`, `vive`, `vivimos`], 2, `Nosotros takes the ending -imos.`],
      [`"Ellos ___ mis hermanos."`, [`soy`, `son`, `es`], 1, `Ellos goes with son.`],
      [`Which pronoun replaces "mi hermana y mi mamá"?`, [`ellas`, `ellos`, `nosotras`], 0, `Two women are ellas. Nosotras would include the speaker.`],
      [`You speak to a nurse and a doctor together: "¿___ tienen tiempo?"`, [`Usted`, `Tú`, `Ustedes`], 2, `Tienen is plural, and the formal plural you is ustedes.`],
      [`Which sentence matches yo with its verb?`, [`Yo soy enfermera.`, `Yo es enfermera.`, `Yo somos enfermera.`], 0, `Yo goes with soy.`]
    ]
  },
  'hay-estar': {
    mistakes: [
      [`¿Hay su hija en casa?`, `¿Está su hija en casa?`, `Su hija is a known person, so use estar. Hay is for things that are new or not specific.`],
      [`Las llaves hay en la mesa.`, `Las llaves están en la mesa.`, `Las llaves is a known thing and the sentence gives its place, so use están.`],
      [`Hay muchos camas libres.`, `Hay muchas camas libres.`, `Muchas agrees with camas, which is feminine plural. Hay itself does not change.`]
    ],
    more: [
      [`¿Hay algún medicamento que no puede tomar?`, `Is there any medication that you cannot take?`],
      [`¿Dónde está su cuarto en la casa?`, `Where is your room in the house?`],
      [`No hay nadie que le ayude con los niños.`, `There is no one who helps you with the children.`],
      [`Hay un parque cerca de mi casa.`, `There is a park near my house.`],
      [`Las llaves están en la cocina.`, `The keys are in the kitchen.`],
      [`¿Hay leche en el refrigerador?`, `Is there milk in the refrigerator?`]
    ],
    quiz: [
      [`"___ tres sillas en la sala."`, [`Están`, `Hay`, `Es`], 1, `Three chairs with no article are new information, so hay.`],
      [`"¿Dónde ___ su hermano?"`, [`hay`, `está`, `son`], 1, `Su hermano is a known person and you ask where, so está.`],
      [`Which sentence treats the glasses as known things on the table?`, [`Mis lentes están en la mesa.`, `Hay mis lentes en la mesa.`, `Es mis lentes en la mesa.`], 0, `Mis lentes is known, so use están.`],
      [`"¿___ un baño aquí?"`, [`Está`, `Es`, `Hay`], 2, `You ask whether a restroom exists, with un, so hay.`],
      [`What does "No hay nadie que me ayude" mean?`, [`There is no one who helps me.`, `Nobody knows my help.`, `I am not helping anyone.`], 0, `No hay nadie means there is no one.`],
      [`"La doctora ___ en el consultorio tres."`, [`hay`, `son`, `está`], 2, `A known person and her location take está.`]
    ]
  },
  'possessives': {
    mistakes: [
      [`Mi tía vive aquí, pero mis tía trabaja lejos.`, `Mi tía vive aquí, pero mi tía trabaja lejos.`, `Tía is singular, so the possessive is mi, not mis.`],
      [`Nuestro hijas son pequeñas.`, `Nuestras hijas son pequeñas.`, `Nuestro changes to match the noun: hijas is feminine plural, so nuestras.`],
      [`Es el teléfono de mí hermana.`, `Es el teléfono de mi hermana.`, `The possessive mi has no accent. Mí with an accent is a pronoun, as in para mí.`]
    ],
    more: [
      [`¿Su familia le ayuda con la medicina?`, `Does your family help you with the medicine?`],
      [`Mis pensamientos no me dejan dormir.`, `My thoughts do not let me sleep.`],
      [`Su presión está normal hoy.`, `Your blood pressure is normal today.`],
      [`Mi trabajo empieza a las siete.`, `My work starts at seven.`],
      [`Nuestros vecinos son muy amables.`, `Our neighbors are very kind.`],
      [`Tu cuarto está muy limpio.`, `Your room is very clean. (to a child)`]
    ],
    quiz: [
      [`"___ hijos viven en Texas." (our)`, [`Nuestro`, `Nuestras`, `Nuestros`], 2, `Hijos is masculine plural, so nuestros.`],
      [`"¿Dónde está ___ medicina, señor?" (usted)`, [`tu`, `su`, `mi`], 1, `With usted use su.`],
      [`Which means "her pills"?`, [`su pastillas`, `sus pastillas`, `nuestro pastillas`], 1, `The possessive matches pastillas, which is plural, so sus.`],
      [`Which sentence uses one aunt correctly?`, [`Mi tía vive aquí.`, `Mis tía vive aquí.`, `Mi tías vive aquí.`], 0, `One aunt takes mi and a singular noun.`],
      [`Which makes clear that the keys are hers?`, [`las llaves de ella`, `las llaves de yo`, `las llaves de nosotros`], 0, `De ella names the owner. De yo does not exist in Spanish.`],
      [`"Mi mamá y mi papá, ___ casa es grande." (their)`, [`tu`, `sus`, `su`], 2, `Casa is singular, so su. Sus is for several things owned.`]
    ]
  },
  'demonstratives': {
    mistakes: [
      [`Ese noche no dormí.`, `Esa noche no dormí.`, `Noche is feminine, so the demonstrative is esa.`],
      [`Estos pastillas son nuevas.`, `Estas pastillas son nuevas.`, `Pastillas is feminine plural, so estas.`],
      [`Eso es mi mamá.`, `Esa es mi mamá.`, `Eso, esto and aquello are for unnamed things or ideas. For a person, use esa or esta.`]
    ],
    more: [
      [`Esta medicina es para la ansiedad.`, `This medicine is for anxiety.`],
      [`¿Eso que oye pasa de día o de noche?`, `Does what you hear happen by day or at night?`],
      [`Esos mareos, ¿empezaron con la pastilla nueva?`, `Those dizzy spells, did they start with the new pill?`],
      [`Esta silla es cómoda.`, `This chair is comfortable.`],
      [`Aquellas casas son muy viejas.`, `Those houses over there are very old.`],
      [`Ese señor es mi vecino.`, `That man is my neighbor.`]
    ],
    quiz: [
      [`"___ pastillas son nuevas." (these, near me)`, [`Este`, `Estas`, `Esto`], 1, `Pastillas is feminine plural, so estas.`],
      [`"___ noche no dormí." (that night)`, [`Ese`, `Esa`, `Esto`], 1, `Noche is feminine singular, so esa.`],
      [`Which word points at something far from both people?`, [`este`, `ese`, `aquel`], 2, `Aquel is the far one.`],
      [`How do you say "That is my sister" about a woman?`, [`Esa es mi hermana.`, `Eso es mi hermana.`, `Ese es mi hermana.`], 0, `For a person use the matching feminine form: esa.`],
      [`"Esos mareos" means`, [`those dizzy spells`, `this dizziness`, `that dizzy spell`], 0, `Esos is plural, so those, and mareos is plural.`],
      [`Which is the plural of "esta silla"?`, [`estos sillas`, `esta sillas`, `estas sillas`], 2, `Both words become plural and stay feminine: estas sillas.`]
    ]
  },
  'basic-prepositions': {
    mistakes: [
      [`Vivo a Texas.`, `Vivo en Texas.`, `Use en to say where you live or are. A is for movement toward a place.`],
      [`Conozco a la clínica.`, `Conozco la clínica.`, `The personal a goes only before people, not places or things.`],
      [`Busco a mis llaves.`, `Busco mis llaves.`, `Keys are things, so there is no personal a.`]
    ],
    more: [
      [`¿Tiene dolor en el pecho o en la espalda?`, `Do you have pain in your chest or in your back?`],
      [`Necesito hablar con la trabajadora social.`, `I need to speak with the social worker.`],
      [`No salgo de casa sin mi esposo.`, `I do not leave the house without my husband.`],
      [`El autobús sale de la estación a las ocho.`, `The bus leaves the station at eight.`],
      [`Mi mamá llega del trabajo a las seis.`, `My mom gets home from work at six.`],
      [`Tomo el café sin azúcar.`, `I drink my coffee without sugar.`]
    ],
    quiz: [
      [`"Mañana vamos ___ la farmacia."`, [`de`, `en`, `a`], 2, `Use a for going to a place.`],
      [`"Mi dolor está ___ la espalda."`, [`a`, `en`, `con`], 1, `En says where something is.`],
      [`Which sentence has no personal a?`, [`Veo a mi hermana.`, `Busco mis llaves.`, `Llamo a mi hijo.`], 1, `Keys are things, so there is no personal a.`],
      [`"Tomo el café ___ azúcar." (without)`, [`sin`, `con`, `en`], 0, `Sin means without.`],
      [`Which sentence puts the personal a before the doctor?`, [`Conozco a la doctora.`, `Conozco la doctora.`, `Conozco de la doctora.`], 0, `The doctor is a specific person, so the personal a is needed.`],
      [`"Hablo ___ mi hijo por teléfono."`, [`en`, `sin`, `con`], 2, `Hablar con means to speak with someone.`]
    ]
  },
  'muy-mucho': {
    mistakes: [
      [`Me duele muy.`, `Me duele mucho.`, `After a verb use mucho. Muy always needs an adjective or adverb after it.`],
      [`Hay mucho gente en la sala.`, `Hay mucha gente en la sala.`, `Gente is feminine, so mucha.`],
      [`Mucho gracias.`, `Muchas gracias.`, `Gracias is feminine plural, so muchas.`]
    ],
    more: [
      [`Mi mamá se preocupa demasiado.`, `My mom worries too much.`],
      [`Tengo muchos mareos por la mañana.`, `I have a lot of dizzy spells in the morning.`],
      [`¿Está muy ansioso hoy?`, `Are you very anxious today?`],
      [`Hace mucho calor hoy.`, `It is very hot today.`],
      [`Mi vecina es muy amable.`, `My neighbor is very kind.`],
      [`Tengo poco tiempo, pero bastante hambre.`, `I have little time, but I am quite hungry.`]
    ],
    quiz: [
      [`"Mi vecina es ___ amable."`, [`mucho`, `muy`, `mucha`], 1, `Before an adjective use muy.`],
      [`"Hace ___ calor."`, [`muy`, `mucho`, `mucha`], 1, `Calor is a masculine noun, so mucho.`],
      [`"Hay ___ gente en la sala."`, [`mucho`, `muchos`, `mucha`], 2, `Gente is feminine singular, so mucha.`],
      [`Which means "I have a lot of dizzy spells"?`, [`Tengo muchos mareos.`, `Tengo muy mareos.`, `Tengo mucho mareos.`], 0, `Mareos is masculine plural, so muchos.`],
      [`Which one sounds mild, like "a little"?`, [`un poco`, `poco`, `demasiado`], 0, `Un poco is mild. Poco sounds negative, and demasiado means too much.`],
      [`"Toma ___ pastillas." (too many)`, [`demasiado`, `demasiada`, `demasiadas`], 2, `Demasiadas agrees with pastillas, feminine plural.`]
    ]
  },
  'tener-expressions': {
    mistakes: [
      [`Estoy sed.`, `Tengo sed.`, `Thirst is a noun you have, so use tener.`],
      [`Tengo ganas a llorar.`, `Tengo ganas de llorar.`, `The pattern is tener ganas de + infinitive.`],
      [`Ella tengo fiebre.`, `Ella tiene fiebre.`, `Ella needs the form tiene. Tengo goes only with yo.`]
    ],
    more: [
      [`¿Tiene fiebre o escalofríos?`, `Do you have a fever or chills?`],
      [`Tengo mucha vergüenza de pedir ayuda.`, `I am very embarrassed to ask for help.`],
      [`Mi mamá tiene náuseas por la medicina.`, `My mom has nausea from the medicine.`],
      [`Tengo prisa porque mi hija sale a las tres.`, `I am in a hurry because my daughter gets out at three.`],
      [`Hoy tenemos calor en la casa.`, `Today we are hot in the house.`],
      [`¿Cuántos años tienen sus hijos?`, `How old are your children?`]
    ],
    quiz: [
      [`How do you say "She is thirsty"?`, [`Es sed.`, `Tiene sed.`, `Está sed.`], 1, `Thirst takes tener.`],
      [`"Mi hijo ___ ocho años."`, [`tiene`, `es`, `está`], 0, `Age takes tener.`],
      [`"No ___ ganas de comer."`, [`soy`, `estoy`, `tengo`], 2, `Tener ganas de means to feel like.`],
      [`Which sentence says you are very thirsty?`, [`Tengo mucha sed.`, `Tengo muy sed.`, `Estoy mucha sed.`], 0, `Sed is a noun, so mucha.`],
      [`What does "Tenemos prisa" mean?`, [`We are cold.`, `We are in a hurry.`, `We are afraid.`], 1, `Tener prisa means to be in a hurry.`],
      [`Which sentence misuses estar for fear?`, [`Tengo sueño.`, `Tengo frío.`, `Estoy miedo.`], 2, `Fear takes tener: tengo miedo.`]
    ]
  },
  'ir-a-future': {
    mistakes: [
      [`Yo va a llamar a mi hija.`, `Yo voy a llamar a mi hija.`, `The form of ir must match the person: yo goes with voy.`],
      [`Mis hijos va a venir el sábado.`, `Mis hijos van a venir el sábado.`, `Mis hijos is plural, so ir becomes van.`],
      [`Voy a hablaré con la doctora.`, `Voy a hablar con la doctora.`, `After ir a, use the plain infinitive. Do not add a future ending.`]
    ],
    more: [
      [`Vamos a revisar sus medicinas hoy.`, `We are going to review your medicines today.`],
      [`¿Va a necesitar ayuda con el transporte?`, `Are you going to need help with transportation?`],
      [`Voy a pedirle un análisis de sangre.`, `I am going to order a blood test for you.`],
      [`Mañana voy a trabajar hasta tarde.`, `Tomorrow I am going to work late.`],
      [`¿Van a cenar con nosotros?`, `Are you (all) going to have dinner with us?`],
      [`Este fin de semana vamos a visitar a mi tía.`, `This weekend we are going to visit my aunt.`]
    ],
    quiz: [
      [`"Mi hija ___ a venir mañana."`, [`va`, `voy`, `vas`], 0, `Mi hija is third person singular, so va.`],
      [`"¿Ustedes ___ a cenar aquí?"`, [`vamos`, `van`, `va`], 1, `Ustedes goes with van.`],
      [`Which means "I am going to call my daughter"?`, [`Voy llamar a mi hija.`, `Llamo a voy mi hija.`, `Voy a llamar a mi hija.`], 2, `The pattern is voy + a + infinitive.`],
      [`"Mis hijos ___ a salir."`, [`va`, `van`, `vamos`], 1, `Mis hijos is plural, so van.`],
      [`What does "Esta noche voy a dormir mejor" mean?`, [`Tonight I am going to sleep better.`, `Last night I slept well.`, `I never sleep at night.`], 0, `Voy a + infinitive looks forward, and esta noche is tonight.`],
      [`Which sentence adds a wrong future ending after voy a?`, [`Vamos a ver.`, `Voy a esperar.`, `Voy a hablaré.`], 2, `After voy a, use the infinitive: voy a hablar.`]
    ]
  },
  'stem-changing': {
    mistakes: [
      [`Yo quero ayuda.`, `Yo quiero ayuda.`, `Querer changes e to ie in the yo form.`],
      [`Ella cerra la puerta.`, `Ella cierra la puerta.`, `Cerrar changes e to ie in every form except nosotros.`],
      [`Ellos empezan a las nueve.`, `Ellos empiezan a las nueve.`, `Empezar changes e to ie in the ellos form too.`]
    ],
    more: [
      [`¿Siente dolor cuando se mueve?`, `Do you feel pain when you move?`],
      [`¿Cuántas horas duerme su hijo?`, `How many hours does your son sleep?`],
      [`Mi mamá no recuerda el nombre de su doctor.`, `My mom does not remember her doctor's name.`],
      [`Almuerzo a las doce.`, `I have lunch at twelve.`],
      [`Mi hija juega en el parque.`, `My daughter plays in the park.`],
      [`Nosotros volvemos a casa a las seis.`, `We go back home at six.`]
    ],
    quiz: [
      [`"Ella ___ a las nueve." (empezar)`, [`empesa`, `empieza`, `empeza`], 1, `Empezar changes e to ie.`],
      [`"Yo ___ ayuda." (querer)`, [`quiero`, `quero`, `quieres`], 0, `The yo form of querer is quiero.`],
      [`"Ella ___ a las doce." (almorzar)`, [`almorza`, `almorzo`, `almuerza`], 2, `Almorzar changes o to ue.`],
      [`"¿Cuántas horas ___ su hijo?" (dormir)`, [`duerme`, `dorme`, `dormimos`], 0, `Su hijo is third person, so duerme.`],
      [`Which form is regular, with no stem change?`, [`vuelvo`, `volvemos`, `vuelve`], 1, `Nosotros keeps the regular stem: volvemos.`],
      [`Which sentence has a wrong form of recordar?`, [`Recuerdo su cara.`, `Pienso en usted.`, `Yo no recordo su nombre.`], 2, `The yo form of recordar is recuerdo.`]
    ]
  },
  'irregular-yo': {
    mistakes: [
      [`Yo pono mis pastillas aquí.`, `Yo pongo mis pastillas aquí.`, `Poner has the irregular yo form pongo.`],
      [`Yo conoso a su hija.`, `Yo conozco a su hija.`, `Conocer has the irregular yo form conozco.`],
      [`Yo vo a la clínica.`, `Yo voy a la clínica.`, `Ir has the irregular yo form voy.`]
    ],
    more: [
      [`Salgo poco de casa desde hace un mes.`, `I have gone out of the house very little for a month.`],
      [`No oigo bien del oído derecho.`, `I do not hear well in my right ear.`],
      [`Hago todo despacio porque me siento sin fuerza.`, `I do everything slowly because I feel without strength.`],
      [`Pongo la mesa a las siete.`, `I set the table at seven.`],
      [`Traigo el pan para la cena.`, `I am bringing the bread for dinner.`],
      [`Conozco muy bien este barrio.`, `I know this neighborhood very well.`]
    ],
    quiz: [
      [`"Yo ___ a mi vecina." (conocer)`, [`conozo`, `conozco`, `conoco`], 1, `Conocer has the yo form conozco.`],
      [`"Yo ___ la cena a las siete." (hacer)`, [`hago`, `haco`, `hace`], 0, `Hacer has the yo form hago.`],
      [`"Yo ___ la mesa." (poner)`, [`pono`, `pone`, `pongo`], 2, `Poner has the yo form pongo.`],
      [`"Yo ___ de casa a las ocho." (salir)`, [`salo`, `salgo`, `sale`], 1, `Salir has the yo form salgo.`],
      [`"Yo ___ la respuesta." (I know the fact)`, [`conozco`, `sabo`, `sé`], 2, `Saber has the odd yo form sé, for facts.`],
      [`Which sentence gives the right form of dar?`, [`Doy un paseo.`, `Dogo un paseo.`, `Do un paseo.`], 0, `Dar has the yo form doy.`]
    ]
  },
  'querer-poder-necesitar': {
    mistakes: [
      [`No podo dormir.`, `No puedo dormir.`, `Poder changes o to ue in the yo form: puedo.`],
      [`Quiero hablando con usted.`, `Quiero hablar con usted.`, `After querer use the infinitive, not the -ando form.`],
      [`Mi hijo no quiero comer.`, `Mi hijo no quiere comer.`, `Mi hijo is third person, so quiere. Quiero goes only with yo.`]
    ],
    more: [
      [`¿Necesita un intérprete?`, `Do you need an interpreter?`],
      [`No quiero tomar más pastillas.`, `I do not want to take more pills.`],
      [`¿Puede describir el dolor?`, `Can you describe the pain?`],
      [`Quiero ir a casa.`, `I want to go home.`],
      [`Mi esposo no puede manejar de noche.`, `My husband cannot drive at night.`],
      [`Necesitamos comprar leche.`, `We need to buy milk.`]
    ],
    quiz: [
      [`"No ___ dormir." (poder)`, [`puedo`, `podo`, `puede`], 0, `With yo, poder is puedo.`],
      [`"Mi hijo no ___ comer." (querer)`, [`quieren`, `quiere`, `quiero`], 1, `Mi hijo is third person singular, so quiere.`],
      [`"¿___ un intérprete?" (to an adult patient)`, [`Necesito`, `Necesitamos`, `Necesita`], 2, `Usted goes with necesita.`],
      [`Which sentence joins querer and ir with no extra word?`, [`Quiero a ir a casa.`, `Quiero ir a casa.`, `Quiero de ir a casa.`], 1, `No extra word goes between querer and the infinitive.`],
      [`Which means "I need to rest"?`, [`Necesito descansar.`, `Necesito que descansar.`, `Necesito a descansar.`], 0, `Necesito + infinitive needs no extra word.`],
      [`Which politely asks "Can you describe the pain?"`, [`¿Describe puede el dolor?`, `¿Puedo describir el dolor?`, `¿Puede describir el dolor?`], 2, `¿Puede + infinitive? is the polite request, with usted.`]
    ]
  },
  'time-frequency': {
    mistakes: [
      [`Son la una y media.`, `Es la una y media.`, `One o'clock is singular, so use es la una, even with y media.`],
      [`Son las ocho y cuarta.`, `Son las ocho y cuarto.`, `Cuarto means a quarter and is masculine, so y cuarto.`],
      [`Tomo la pastilla dos vez al día.`, `Tomo la pastilla dos veces al día.`, `After dos the plural is veces.`]
    ],
    more: [
      [`¿Cuántas veces al día tiene el dolor?`, `How many times a day do you have the pain?`],
      [`Tomo la pastilla cada noche a las nueve.`, `I take the pill every night at nine.`],
      [`Casi siempre me despierto a las tres.`, `I almost always wake up at three.`],
      [`El autobús pasa cada diez minutos.`, `The bus comes every ten minutes.`],
      [`La clase empieza a las siete y media.`, `The class starts at seven thirty.`],
      [`Los sábados desayunamos tarde.`, `On Saturdays we have breakfast late.`]
    ],
    quiz: [
      [`How do you say 4:30?`, [`Son las cuatro y media.`, `Es las cuatro y media.`, `Son la cuatro y media.`], 0, `Hours above one take son las.`],
      [`"Voy a la clínica ___ lunes." (every Monday)`, [`el`, `en`, `los`], 2, `Los lunes means on Mondays, again and again.`],
      [`Which means "almost always"?`, [`casi nunca`, `casi siempre`, `a veces`], 1, `Casi siempre is almost always.`],
      [`What time is "las siete y cuarto"?`, [`7:15`, `7:45`, `6:45`], 0, `Y cuarto is a quarter past.`],
      [`Which means "every day"?`, [`todos día`, `cada día`, `cada días`], 1, `Cada is followed by a singular noun: cada día.`],
      [`"Dos veces ___ semana."`, [`de la`, `al`, `a la`], 2, `Semana is feminine, so a la semana.`]
    ]
  },
  'family-household': {
    mistakes: [
      [`Mi tía es el hermano de mi mamá.`, `Mi tío es el hermano de mi mamá.`, `A brother of your mother is a tío. Tía is a woman.`],
      [`Mi esposo y yo estamos casado.`, `Mi esposo y yo estamos casados.`, `Two people need the plural ending: casados.`],
      [`Mis padre viven aquí.`, `Mis padres viven aquí.`, `Mis needs a plural noun: padres.`]
    ],
    more: [
      [`¿Su pareja sabe que usted está aquí?`, `Does your partner know you are here?`],
      [`¿Quién cuida a los niños cuando usted trabaja?`, `Who takes care of the children when you work?`],
      [`Mi hijo mayor vive con su abuela.`, `My oldest son lives with his grandmother.`],
      [`Mi cuñada cocina muy bien.`, `My sister-in-law cooks very well.`],
      [`Mis primos viven en la casa de al lado.`, `My cousins live in the house next door.`],
      [`Mi suegro vive en el cuarto de atrás.`, `My father-in-law lives in the back room.`]
    ],
    quiz: [
      [`Your husband's mother is your`, [`cuñada`, `suegra`, `abuela`], 1, `Suegra is the mother-in-law.`],
      [`"Mi esposo y yo estamos ___."`, [`casado`, `casada`, `casados`], 2, `A couple takes the plural: casados.`],
      [`Your mother's brother is your`, [`tío`, `primo`, `abuelo`], 0, `Tío is uncle.`],
      [`Which sentence makes both words plural for my parents?`, [`Mis padre viven aquí.`, `Mis padres viven aquí.`, `Mi padres viven aquí.`], 1, `Mis and padres are both plural.`],
      [`What does "pareja" mean?`, [`partner`, `relative`, `cousin`], 0, `Pareja is a partner or a couple.`],
      [`Your sister's husband is your`, [`suegro`, `primo`, `cuñado`], 2, `Cuñado is the brother-in-law.`]
    ]
  },
  'review-a1': {
    mistakes: [
      [`Tengo muy hambre.`, `Tengo mucha hambre.`, `Hambre is a noun, so use mucha, not muy.`],
      [`Ella no quiere a comer.`, `Ella no quiere comer.`, `Querer goes straight to the infinitive, with no a.`],
      [`Mis hijos son en la sala de espera.`, `Mis hijos están en la sala de espera.`, `Location takes estar, even for people.`]
    ],
    more: [
      [`¿Quién está en casa con usted por la noche?`, `Who is at home with you at night?`],
      [`Mi hijo tiene mucho miedo de ir a la escuela.`, `My son is very afraid of going to school.`],
      [`Necesito tomar la pastilla dos veces al día.`, `I need to take the pill twice a day.`],
      [`Mi tía vive con nosotros desde enero.`, `My aunt has lived with us since January.`],
      [`Hoy voy a cenar con mis padres.`, `Today I am going to have dinner with my parents.`],
      [`Este café está muy caliente.`, `This coffee is very hot.`]
    ],
    quiz: [
      [`"Mi mamá ___ cincuenta años."`, [`es`, `tiene`, `está`], 1, `Age takes tener.`],
      [`"Mis pastillas ___ en la bolsa."`, [`están`, `hay`, `son`], 0, `Known pills and their location take están.`],
      [`Which sentence joins querer and dormir with no extra word?`, [`Quiero a dormir.`, `Quiero dormir.`, `Quiero de dormir.`], 1, `Querer goes straight to the infinitive.`],
      [`"Llamo ___ mi hermana todos los días."`, [`de`, `en`, `a`], 2, `A sister is a specific person, so the personal a is needed.`],
      [`What does "esa noche" mean?`, [`that night`, `this night`, `every night`], 0, `Esa points to something already mentioned or near you.`],
      [`Which is correct for 2:15?`, [`Son las dos menos cuarto.`, `Es las dos y cuarto.`, `Son las dos y cuarto.`], 2, `Hours above one take son las, and y cuarto adds fifteen minutes.`]
    ]
  }
});
