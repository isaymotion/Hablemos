/* Lesson extras part 1 (0.8.0): common mistakes, more examples and a "More practice" quiz for the first 12 original lessons
   (A1 sounds to A2 commands-instructions, in lesson order; the lesson page shows them after the body and runs the quiz after the lesson's own).
   DRAFT FOR REVIEW by a native Spanish-speaking clinician before use. Spanish is plain text (US/Mexican baseline, usted with adults).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongEs, rightEs, whyEn], ...3],  // wrongEs is shown struck through, never spoken or recorded
     more: [[es, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'sounds': {
    mistakes: [
      [`¿Como esta usted?`, `¿Cómo está usted?`, `The accents matter: como means "as" and esta means "this", while cómo and está are the question word and the verb.`],
      [`Mi hijo tiene cinco anos.`, `Mi hijo tiene cinco años.`, `Never drop the tilde on ñ: ano means anus, and año means year.`],
      [`Si, tomo la medicina.`, `Sí, tomo la medicina.`, `Sí with an accent means yes; si without it means if.`]
    ],
    more: [
      [`¿Habló con su familia ayer?`, `Did you speak with your family yesterday?`],
      [`Sí, me duele la cabeza.`, `Yes, my head hurts.`],
      [`¿Sabe si esta pastilla es para dormir?`, `Do you know if this pill is for sleeping?`],
      [`El perro de mi vecino ladra mucho.`, `My neighbor's dog barks a lot.`],
      [`Mañana cumplo cuarenta años.`, `Tomorrow I turn forty.`],
      [`Él tiene tu número de teléfono.`, `He has your phone number.`]
    ],
    quiz: [
      [`Where is the stress in "hospital"?`, [`HOS-pi-tal`, `hos-PI-tal`, `hos-pi-TAL`], 2, `The word ends in the consonant l, so the stress falls on the last syllable.`],
      [`Which word is written correctly?`, [`tambien`, `también`, `tambíen`], 1, `Words ending in n are stressed on the next-to-last syllable, so stress on the last needs the written accent.`],
      [`In "Él toma café", what does the accent on él do?`, [`It makes the word mean "he", not "the"`, `It makes the word mean "she"`, `Nothing, it is only decoration`], 0, `Él with an accent is the pronoun he; el without it is the article the.`],
      [`How do you pronounce the h in "hijo"?`, [`Like the English h`, `It is silent`, `Like the Spanish j`], 1, `The Spanish h is always silent.`],
      [`The j in "jaqueca" sounds most like`, [`the English y`, `the j in "jam"`, `a harsh English h`], 2, `Spanish j sounds like a harsh h, made in the back of the mouth.`],
      [`"Caro" and "carro" differ in`, [`a single tap versus a rolled r`, `the stress only`, `nothing, they sound the same`], 0, `One r is a quick tap and rr is rolled, so they are different words.`]
    ]
  },
  'ser-estar': {
    mistakes: [
      [`Soy cansado hoy.`, `Estoy cansado hoy.`, `Being tired today is a state, so it takes estar.`],
      [`Mi mamá es en el hospital.`, `Mi mamá está en el hospital.`, `Location takes estar, even for people.`],
      [`Hoy está jueves.`, `Hoy es jueves.`, `Days, dates and times take ser.`]
    ],
    more: [
      [`Su hijo está dormido en la sala de espera.`, `Your son is asleep in the waiting room.`],
      [`La doctora Navarro es psiquiatra y está en el consultorio dos.`, `Dr. Navarro is a psychiatrist and is in office two.`],
      [`Estoy asustada porque no sé dónde estoy.`, `I am scared because I do not know where I am.`],
      [`Mi vecino es de Puebla y está de vacaciones.`, `My neighbor is from Puebla and is on vacation.`],
      [`Mi padre es médico, pero ahora está jubilado.`, `My father is a doctor, but now he is retired.`],
      [`Mi hermana es muy alegre, pero hoy está triste.`, `My sister is very cheerful, but today she is sad.`]
    ],
    quiz: [
      [`"Mi hermana ___ de Oaxaca."`, [`es`, `está`, `son`], 0, `Origin takes ser.`],
      [`"Mañana ___ miércoles."`, [`está`, `son`, `es`], 2, `The day of the week takes ser.`],
      [`"Don Jorge ___ muy confundido esta mañana."`, [`es`, `está`, `soy`], 1, `A state at a given moment takes estar.`],
      [`Which sentence is correct?`, [`La farmacia está en la esquina.`, `La farmacia es en la esquina.`, `La farmacia hay en la esquina.`], 0, `The location of a thing takes estar.`],
      [`What does "Es muy nervioso" suggest?`, [`He is nervous right now`, `He is a nurse`, `Nervousness is part of his usual personality`], 2, `Ser with an adjective describes a lasting trait, not a state.`],
      [`"¿Qué hora ___?"`, [`está`, `es`, `son`], 1, `Ask the time with ser in the singular: ¿Qué hora es?`]
    ]
  },
  'gender-agreement': {
    mistakes: [
      [`Mi hija está muy cansado.`, `Mi hija está muy cansada.`, `The adjective matches the noun: hija is feminine, so cansada.`],
      [`Tengo mucho ansiedad.`, `Tengo mucha ansiedad.`, `Ansiedad is feminine, so mucho becomes mucha.`],
      [`Las pastillas son blancos.`, `Las pastillas son blancas.`, `A plural feminine noun needs a plural feminine adjective.`]
    ],
    more: [
      [`Mi esposa está muy cansada y casi no come.`, `My wife is very tired and hardly eats.`],
      [`Las pastillas pequeñas son para la ansiedad.`, `The small pills are for anxiety.`],
      [`Mi hijo está callado y muy retraído desde hace semanas.`, `My son has been quiet and very withdrawn for weeks.`],
      [`La casa nueva es grande y muy luminosa.`, `The new house is big and very bright.`],
      [`Mi abuelo es alto y muy simpático.`, `My grandfather is tall and very friendly.`],
      [`Estas flores amarillas son para mi mamá.`, `These yellow flowers are for my mom.`]
    ],
    quiz: [
      [`"Mi hermana está muy ___."`, [`preocupado`, `preocupada`, `preocupados`], 1, `Hermana is feminine singular, so the adjective ends in -a.`],
      [`Which noun is masculine?`, [`el día`, `la mano`, `la ansiedad`], 0, `Día is an exception: it ends in -a but is masculine.`],
      [`Which sentence is correct?`, [`Los síntomas son fuerte.`, `Las síntomas son fuertes.`, `Los síntomas son fuertes.`], 2, `Síntoma is masculine, and a plural noun takes a plural adjective.`],
      [`"Mi mamá y mi tía están ___."`, [`asustadas`, `asustados`, `asustada`], 0, `Two feminine people take the feminine plural.`],
      [`Which word is feminine?`, [`el corazón`, `el miedo`, `la enfermedad`], 2, `Nouns ending in -dad are feminine.`],
      [`Which phrase is correct?`, [`una enfermera jovena`, `una enfermera joven`, `un enfermera joven`], 1, `Joven does not change for gender, and enfermera takes una.`]
    ]
  },
  'tu-usted': {
    mistakes: [
      [`¿Cómo estás, doña Rosa?`, `¿Cómo está, doña Rosa?`, `Doña and an older woman call for usted, so the verb ends in -á, not -ás.`],
      [`Siéntese y dime qué le pasa.`, `Siéntese y dígame qué le pasa.`, `Do not mix usted and tú in one sentence: pick one and keep it.`],
      [`¿Usted tienes hijos?`, `¿Usted tiene hijos?`, `Usted takes the third-person verb ending, so tiene, not tienes.`]
    ],
    more: [
      [`Doña Rosa, ¿quiere que su hija esté con usted?`, `Doña Rosa, do you want your daughter to be with you?`],
      [`Brayan, ¿cómo te sientes hoy? ¿Dormiste bien?`, `Brayan, how do you feel today? Did you sleep well?`],
      [`Señor, ¿me permite tomarle la presión?`, `Sir, may I take your blood pressure?`],
      [`Disculpe, ¿sabe dónde está la farmacia?`, `Excuse me, do you know where the pharmacy is?`],
      [`Oye, ¿vienes a comer con nosotros?`, `Hey, are you coming to eat with us?`],
      [`Ramiro, ¿me puedes pasar el agua?`, `Ramiro, can you pass me the water?`]
    ],
    quiz: [
      [`Which sentence is right for an older patient?`, [`¿Cómo está hoy, don Chuy?`, `¿Cómo estás hoy, don Chuy?`, `¿Cómo eres hoy, don Chuy?`], 0, `An older man gets usted, so está.`],
      [`"Usted ___ con su hermana."`, [`vivo`, `vive`, `vives`], 1, `Usted takes the same verb form as he or she.`],
      [`Which verb ending signals tú?`, [`-o`, `-a / -e`, `-as / -es`], 2, `Tú forms end in -as or -es in the present.`],
      [`"¿___ puedo ayudar, señora?"`, [`Le`, `Te`, `Se`], 0, `Le is the pronoun for usted.`],
      [`Which sentence keeps usted all the way through?`, [`Siéntate y dígame qué pasó.`, `Siéntese y cuéntame qué pasó.`, `Siéntese y cuénteme qué pasó.`], 2, `Siéntese and cuénteme are both usted commands.`],
      [`Which question is right for a teenage patient?`, [`¿Cómo le va en la escuela?`, `¿Cómo te va en la escuela?`, `¿Cómo me va en la escuela?`], 1, `A teenager is addressed with tú, so te.`]
    ]
  },
  'questions': {
    mistakes: [
      [`¿Cuánto años tiene?`, `¿Cuántos años tiene?`, `Cuánto agrees with the noun: años is masculine plural, so cuántos.`],
      [`Cuándo empezó?`, `¿Cuándo empezó?`, `A Spanish question opens with ¿ as well as closing with ?.`],
      [`¿Qué es su número de teléfono?`, `¿Cuál es su número de teléfono?`, `To ask for a specific piece of information with ser, use cuál, not qué.`]
    ],
    more: [
      [`¿Qué medicinas toma actualmente?`, `What medicines do you take at present?`],
      [`¿A qué hora se acuesta normalmente?`, `What time do you usually go to bed?`],
      [`¿Con quién habla cuando se siente mal?`, `Who do you talk to when you feel bad?`],
      [`¿A qué hora abre la farmacia?`, `What time does the pharmacy open?`],
      [`¿De dónde es usted?`, `Where are you from?`],
      [`¿Cuánto cuesta la consulta?`, `How much does the visit cost?`]
    ],
    quiz: [
      [`"¿___ hermanos tiene?"`, [`Cuánto`, `Cuántos`, `Cuántas`], 1, `Hermanos is masculine plural, so cuántos.`],
      [`"¿___ es su dirección?"`, [`Qué`, `Cuándo`, `Cuál`], 2, `Cuál asks for a specific item of information.`],
      [`Which question is written correctly?`, [`¿Cómo se siente hoy?`, `Cómo se siente hoy?`, `¿Como se siente hoy?`], 0, `It needs the opening ¿ and the accent on cómo.`],
      [`You want to ask about several people. Which is best?`, [`¿Quiénes viven con usted?`, `¿Quién viven con usted?`, `¿Quiénes vive con usted?`], 0, `Quiénes and viven are both plural.`],
      [`Which question is the open one?`, [`¿Duerme bien?`, `¿Ha dormido?`, `¿Cómo ha dormido esta semana?`], 2, `Cómo invites a description; the others invite sí or no.`],
      [`How do you ask "Where are you from?" with usted?`, [`¿Dónde es usted?`, `¿De dónde es usted?`, `¿Dónde está de usted?`], 1, `Origin is asked with de dónde and ser.`]
    ]
  },
  'negation': {
    mistakes: [
      [`Tengo no energía.`, `No tengo energía.`, `No goes before the verb.`],
      [`No tengo cualquier problema.`, `No tengo ningún problema.`, `After no, "any" is ningún, not cualquier.`],
      [`Yo también no duermo.`, `Yo tampoco duermo.`, `"Me neither" is tampoco; también means "too" and is for agreeing with a positive.`]
    ],
    more: [
      [`No he oído ninguna voz.`, `I have not heard any voices.`],
      [`Ya no tomo la medicina porque me daba sueño.`, `I no longer take the medicine because it made me sleepy.`],
      [`Mi esposo tampoco duerme bien.`, `My husband does not sleep well either.`],
      [`Nadie contestó el teléfono.`, `Nobody answered the phone.`],
      [`No tengo tiempo ni dinero para viajar.`, `I have neither time nor money to travel.`],
      [`Todavía no llega el camión.`, `The bus has not arrived yet.`]
    ],
    quiz: [
      [`"Nadie me llama" means`, [`No one calls me`, `I call no one`, `Everyone calls me`], 0, `Nadie is "no one" and is the subject.`],
      [`Which sentence is correct?`, [`Nadie no vino.`, `No vino nadie.`, `Vino no nadie.`], 1, `After the verb, no comes first and nadie follows; before the verb, drop no.`],
      [`"Ya no tengo miedo" means`, [`I am not afraid anymore`, `I am not afraid yet`, `I am never afraid`], 0, `Ya no means "no longer".`],
      [`"Yo tampoco" means`, [`me too`, `me only`, `me neither`], 2, `Tampoco is the negative "either".`],
      [`Which sentence means "I have not eaten yet"?`, [`Nunca he comido.`, `Ya no he comido.`, `Todavía no he comido.`], 2, `Todavía no means "not yet".`],
      [`"No como nada desde ayer" means`, [`I ate everything yesterday`, `I have not eaten anything since yesterday`, `I never eat anything`], 1, `Desde ayer marks the starting point of not eating.`]
    ]
  },
  'numbers-dates': {
    mistakes: [
      [`Tengo treinta cinco años.`, `Tengo treinta y cinco años.`, `From 31 on, join tens and units with y.`],
      [`Tengo veintiuno años.`, `Tengo veintiún años.`, `Uno shortens to un before a masculine noun: veintiún años.`],
      [`Me despierto a la tres de la mañana.`, `Me despierto a las tres de la mañana.`, `Use las for every hour except one o'clock, which is a la una.`]
    ],
    more: [
      [`Mi cita es el martes a las nueve y media de la mañana.`, `My appointment is Tuesday at nine thirty in the morning.`],
      [`Pesa sesenta y siete kilos y mide un metro setenta.`, `He weighs 67 kilos and is 1.70 meters tall.`],
      [`Tomo la pastilla dos veces al día, a las ocho de la mañana y a las ocho de la noche.`, `I take the pill twice a day, at eight in the morning and at eight at night.`],
      [`Mi hijo cumple dieciséis años el veinte de septiembre.`, `My son turns sixteen on September 20.`],
      [`La clínica abre a las siete y cierra a las cinco de la tarde.`, `The clinic opens at seven and closes at five in the afternoon.`],
      [`Vivo en el piso doce, apartamento veintiuno.`, `I live on the twelfth floor, apartment twenty-one.`]
    ],
    quiz: [
      [`What number is "cuarenta y uno"?`, [`41`, `14`, `401`], 0, `Cuarenta is 40 and uno is 1.`],
      [`"Veintiún" is used before`, [`a feminine noun`, `a masculine noun such as años`, `no noun at all`], 1, `Uno shortens to un before masculine nouns.`],
      [`A form from Mexico says 12/05/2024. Which date is most likely meant?`, [`December 5`, `May 5`, `May 12`], 2, `Most of Latin America writes day first, then month.`],
      [`"Son las siete y media de la tarde" is`, [`7:30 p.m.`, `7:30 a.m.`, `6:30 p.m.`], 0, `Y media adds thirty minutes and de la tarde means p.m.`],
      [`Which number is "setenta"?`, [`60`, `70`, `17`], 1, `Sesenta is 60 and setenta is 70; repeat the number back to be sure.`],
      [`A patient says "Duermo como cinco horas." What does "como cinco" mean?`, [`a comparison`, `exactly five`, `about five`], 2, `Here como means "about".`]
    ]
  },
  'present-tense': {
    mistakes: [
      [`¿Cuántas horas dorme?`, `¿Cuántas horas duerme?`, `Dormir changes o to ue in the stressed syllable.`],
      [`Yo no tiengo energía.`, `No tengo energía.`, `The yo form of tener is tengo; the e to ie change belongs to tiene, not to yo.`],
      [`Yo estoy tomo la medicina.`, `Estoy tomando la medicina.`, `After estar, the verb takes -ando or -iendo, not the present form.`]
    ],
    more: [
      [`¿Cuántas copas toma en una semana normal?`, `How many drinks do you have in a normal week?`],
      [`¿Entiende lo que le explico?`, `Do you understand what I am explaining?`],
      [`Siento un nudo en el estómago cuando salgo de casa.`, `I feel a knot in my stomach when I leave the house.`],
      [`Mi hija vuelve de la escuela a las tres.`, `My daughter comes home from school at three.`],
      [`Yo cocino y mi esposo lava los trastes.`, `I cook and my husband washes the dishes.`],
      [`Nosotros dormimos en la sala porque hace calor.`, `We sleep in the living room because it is hot.`]
    ],
    quiz: [
      [`Which is the yo form of "salir"?`, [`salgo`, `salo`, `sale`], 0, `Salir has an irregular yo form: salgo.`],
      [`Which is the usted form of "pensar"?`, [`pienso`, `piensa`, `pensa`], 1, `Pensar changes e to ie, and usted takes -a.`],
      [`Which is correct for "we want"?`, [`quieremos`, `quiéremos`, `queremos`], 2, `Nosotros keeps the regular stem: queremos.`],
      [`"¿Está durmiendo bien?" asks about`, [`how the patient sleeps these days`, `the patient's childhood sleep`, `tomorrow's sleep`], 0, `Estar plus -iendo asks about what is going on now.`],
      [`"Mi mamá no ___ comer." (poder)`, [`puedo`, `pueden`, `puede`], 2, `Mi mamá takes the he or she form: puede.`],
      [`Which is the yo form of "hacer"?`, [`hazo`, `hago`, `hace`], 1, `Hacer is irregular in the yo form: hago.`]
    ]
  },
  'reflexive-feelings': {
    mistakes: [
      [`Yo siento triste.`, `Me siento triste.`, `Sentirse needs the reflexive pronoun: me siento.`],
      [`Estoy miedo de la oscuridad.`, `Me da miedo la oscuridad.`, `Fear "gives itself" to the person; estar does not work with miedo.`],
      [`Yo quité el hambre.`, `Se me quitó el hambre.`, `The appetite goes away by itself: the hunger is the subject, and se me shows it happened to you.`]
    ],
    more: [
      [`Desde que murió mi mamá, me siento vacío.`, `Since my mom died, I feel empty.`],
      [`Se me junta todo y me dan ganas de gritar.`, `Everything piles up and I feel like screaming.`],
      [`¿Se le hace difícil salir de la casa?`, `Is it hard for you to leave the house?`],
      [`Me da gusto verlo.`, `I am glad to see you.`],
      [`Se me descompuso el celular.`, `My phone broke down on me.`],
      [`Me siento muy contenta con mi nuevo trabajo.`, `I feel very happy with my new job.`]
    ],
    quiz: [
      [`Which sentence means "I feel anxious"?`, [`Me siento ansioso.`, `Se siento ansioso.`, `Siento me ansioso.`], 0, `The reflexive pronoun me goes before siento.`],
      [`"Me dan ganas de gritar" means`, [`I give screams`, `They scream at me`, `I feel like screaming`], 2, `Me dan ganas de means "I feel like".`],
      [`"Se me olvidó la cita" tells you`, [`the patient blames someone else`, `the forgetting happened without intent`, `the patient refuses to come`], 1, `Se me puts the event on the person without blame.`],
      [`"Se me va el hambre cuando estoy nervioso" suggests`, [`the patient eats more when nervous`, `appetite drops when nervous`, `the patient is never nervous`], 1, `Se me va means the appetite goes away.`],
      [`"No me siento bien" means`, [`I do not feel well`, `I do not feel anything`, `I do not smell well`], 0, `Sentirse bien is "to feel well", and no negates it.`],
      [`"Me da vergüenza pedir ayuda" shows`, [`anger at the doctor`, `pain in the body`, `shame about asking for help`], 2, `Vergüenza is shame.`]
    ]
  },
  'gustar-doler': {
    mistakes: [
      [`Me duele las manos.`, `Me duelen las manos.`, `The verb agrees with the thing that hurts, and manos is plural.`],
      [`Yo no gusto los gritos.`, `No me gustan los gritos.`, `Gustar works backwards: the person is me, and the thing liked is the subject.`],
      [`¿Usted duele la cabeza?`, `¿Le duele la cabeza?`, `The person is an indirect object (le), not the subject of doler.`]
    ],
    more: [
      [`¿Le duele más cuando respira hondo?`, `Does it hurt more when you breathe deeply?`],
      [`Me cuesta quedarme dormida.`, `It is hard for me to fall asleep.`],
      [`¿Le preocupa algo en especial?`, `Is something in particular worrying you?`],
      [`A mis hijos les encanta el pozole.`, `My kids love pozole.`],
      [`Me hace falta una pluma.`, `I need a pen.`],
      [`A mi hermana no le gustan las películas de miedo.`, `My sister does not like scary movies.`]
    ],
    quiz: [
      [`In "Les molesta el ruido", who is bothered?`, [`They`, `I`, `We`], 0, `Les stands for they or you all.`],
      [`Which sentence is correct?`, [`Le duele los oídos.`, `Le duelen los oídos.`, `Les duele los oídos.`], 1, `Oídos is plural, so the verb is duelen.`],
      [`In "A mi mamá le gusta caminar", the subject is`, [`mamá`, `caminar`, `le`], 1, `The thing that pleases, caminar, is the subject.`],
      [`How do you ask "Does anything worry you?" with usted?`, [`¿Le preocupa algo?`, `¿Usted preocupa algo?`, `¿Te preocupa algo?`], 0, `Le goes with usted.`],
      [`"Ya no le importa nada a mi hijo" means`, [`My son is important`, `My son brings nothing`, `Nothing matters to my son anymore`], 2, `Ya no means "no longer" and importar works like gustar.`],
      [`"A mi papá le ___ las rodillas."`, [`duele`, `dolen`, `duelen`], 2, `Rodillas is plural, so the verb is duelen.`]
    ]
  },
  'past-timelines': {
    mistakes: [
      [`El lunes mi esposa dejaba de comer.`, `El lunes mi esposa dejó de comer.`, `A single change on a named day takes the preterite.`],
      [`Antes yo salí con mis amigos todos los fines de semana.`, `Antes yo salía con mis amigos todos los fines de semana.`, `A past habit takes the imperfect.`],
      [`Estoy triste hace dos meses.`, `Estoy triste desde hace dos meses.`, `To say how long a state has lasted, use desde hace, not hace alone.`]
    ],
    more: [
      [`¿Cómo dormía antes de perder el trabajo?`, `How did you sleep before you lost your job?`],
      [`Mi hijo dejó de ir a la escuela el mes pasado.`, `My son stopped going to school last month.`],
      [`Llevo tres días sin salir de mi cuarto.`, `I have gone three days without leaving my room.`],
      [`De niña, vivía con mis abuelos en el rancho.`, `As a girl, I lived with my grandparents on the ranch.`],
      [`Ayer fuimos al mercado y compramos fruta.`, `Yesterday we went to the market and bought fruit.`],
      [`Mi papá trabajó en una fábrica durante veinte años.`, `My dad worked in a factory for twenty years.`]
    ],
    quiz: [
      [`"De joven nadaba todos los días" tells you`, [`he swam once`, `he will swim`, `he used to swim`], 2, `The imperfect describes a past habit.`],
      [`"Ayer ___ a mi hermana." (one call)`, [`llamé`, `llamaba`, `llamo`], 0, `A single event yesterday takes the preterite.`],
      [`"Vivo aquí desde 2019" means`, [`I moved away in 2019`, `I have lived here since 2019`, `I will live here in 2019`], 1, `Desde marks the starting point of a situation that continues.`],
      [`"Hace cinco años murió mi papá" means`, [`my dad died five years ago`, `my dad will die in five years`, `my dad has been dying for five years`], 0, `Hace plus a time word, with a past verb, means "ago".`],
      [`"Cuando llegué, mi hijo ___." (he was sleeping)`, [`durmió`, `duerme`, `dormía`], 2, `The imperfect gives the background state when something else happened.`],
      [`Which sentence tells about one event?`, [`Siempre tomaba café.`, `Ayer tomé café.`, `Antes tomaba café.`], 1, `The preterite marks a single completed event.`]
    ]
  },
  'commands-instructions': {
    mistakes: [
      [`Toma la pastilla con comida, señor.`, `Tome la pastilla con comida, señor.`, `Señor calls for an usted command: -ar verbs end in -e.`],
      [`No dígame que no.`, `No me diga que no.`, `In a negative command the pronoun goes before the verb.`],
      [`Se siente aquí, por favor.`, `Siéntese aquí, por favor.`, `A positive command attaches the pronoun and needs an accent; se siente is a statement.`]
    ],
    more: [
      [`Tome esta pastilla con un vaso de agua.`, `Take this pill with a glass of water.`],
      [`Cuénteme qué pasó antes de llegar al hospital.`, `Tell me what happened before you came to the hospital.`],
      [`Avíseme si se siente mareado o con mucho sueño.`, `Let me know if you feel dizzy or very sleepy.`],
      [`Pase y tome asiento, por favor.`, `Come in and have a seat, please.`],
      [`Firme aquí, por favor.`, `Sign here, please.`],
      [`Espere un momento; ahorita lo atiendo.`, `Wait a moment; I will see you right away.`]
    ],
    quiz: [
      [`What is the usted command for "escribir"?`, [`escriba`, `escribe`, `escribir`], 0, `-ir verbs take -a in the usted command.`],
      [`"No se levante" means`, [`He gets up`, `Get up`, `Do not get up`], 2, `No plus the command form is a negative command.`],
      [`"Llámeme si empeora" begins with`, [`I call`, `Call me`, `Call him`], 1, `Llame plus me is "call me".`],
      [`A sign on a form reads "Favor de ___ aquí."`, [`esperar`, `espere`, `esperando`], 0, `Favor de is followed by the infinitive.`],
      [`"¿Le parece si hablamos a solas?" is`, [`an order`, `a polite invitation asking for agreement`, `a question about the time`], 1, `¿Le parece si…? invites the patient to agree.`],
      [`Which command is for a teenager?`, [`Siéntese aquí.`, `Siéntense aquí.`, `Siéntate aquí.`], 2, `Siéntate is the tú command.`]
    ]
  }
});
