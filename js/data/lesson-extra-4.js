/* Lesson extras part 4 (0.11.0): common mistakes, more examples and a "More practice" quiz for the 15 A2 lessons in lessons-3.js
   (preterite-regular to review-a2, in lesson order; the lesson page shows them after the body and runs the quiz after the lesson's own).
   DRAFT FOR REVIEW by a native Spanish-speaking clinician before use. Spanish is plain text (US/Mexican baseline, usted with adults).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongEs, rightEs, whyEn], ...3],  // wrongEs is shown struck through, never spoken or recorded
     more: [[es, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'preterite-regular': {
    mistakes: [
      [`Mi hijo se despertió a las seis.`, `Mi hijo se despertó a las seis.`, `The usted, él and ella ending of -ar verbs is -ó. The ending -ió belongs to -er and -ir verbs.`],
      [`Ellos leieron la carta.`, `Ellos leyeron la carta.`, `Between two vowels the i of the ending becomes y: leyeron, oyeron, cayeron.`],
      [`Ayer yo piensé en llamarla.`, `Ayer yo pensé en llamarla.`, `Stem-changing -ar verbs keep the plain stem in the preterite: pensé, not piensé.`]
    ],
    more: [
      [`¿Cuándo tomó la última pastilla?`, `When did you take the last pill?`],
      [`Su hermano llamó a la ambulancia anoche.`, `Your brother called the ambulance last night.`],
      [`¿Lloró mucho después de la discusión?`, `Did you cry a lot after the argument?`],
      [`El sábado lavé la ropa y limpié la casa.`, `On Saturday I washed the clothes and cleaned the house.`],
      [`Mi vecino vendió su carro la semana pasada.`, `My neighbor sold his car last week.`],
      [`Ayer escribí una carta a mi hija.`, `Yesterday I wrote a letter to my daughter.`]
    ],
    quiz: [
      [`Mi hijo ___ la cena anoche.`, [`cocinó`, `cociné`, `cocinaron`], 0, `Mi hijo is one person (third person), so cocinó.`],
      [`Anoche yo ___ una revista en la sala de espera.`, [`leyó`, `leí`, `leyeron`], 1, `Yo form of leer in the preterite: leí, with an accent.`],
      [`¿Qué ___ ustedes ayer?`, [`comió`, `comiste`, `comieron`], 2, `Ustedes takes the -ieron ending: comieron.`],
      [`Yo ___ a mi hijo en la escuela.`, [`busqué`, `buscé`, `buscó`], 0, `Verbs in -car change c to qu in the yo form: busqué.`],
      [`Tú ___ muy tarde anoche.`, [`llegué`, `llegaste`, `llegó`], 1, `Tú ending in the preterite is -aste: llegaste.`],
      [`"Ella oyó un ruido" means`, [`She hears a noise`, `She will hear a noise`, `She heard a noise`], 2, `Oyó is the preterite of oír, so it is a finished event in the past.`]
    ]
  },
  'preterite-irregular': {
    mistakes: [
      [`Ella no pudió dormir.`, `Ella no pudo dormir.`, `Irregular preterite verbs take -o (not -ió) for usted, él and ella: pudo, tuvo, puso.`],
      [`Ayer yo supí la noticia.`, `Ayer yo supe la noticia.`, `Saber has the irregular stem sup- and the yo ending is -e, with no accent.`],
      [`Mi hijo me traió la receta.`, `Mi hijo me trajo la receta.`, `Traer has the stem traj- and takes -o: trajo. Its ustedes form is trajeron.`]
    ],
    more: [
      [`¿Pudo comer algo en la mañana?`, `Were you able to eat something in the morning?`],
      [`El doctor me dio una cita para el jueves.`, `The doctor gave me an appointment for Thursday.`],
      [`¿Estuvo solo cuando pasó?`, `Were you alone when it happened?`],
      [`Anoche hicimos tamales para toda la familia.`, `Last night we made tamales for the whole family.`],
      [`Mis primos vinieron de Texas para la fiesta.`, `My cousins came from Texas for the party.`],
      [`Ayer fuimos al mercado y compramos fruta.`, `Yesterday we went to the market and bought fruit.`]
    ],
    quiz: [
      [`Mi hermana ___ conmigo a la cita.`, [`vino`, `vine`, `venió`], 0, `One person (mi hermana) takes vino. Vine is yo.`],
      [`Ayer nosotros ___ dos horas en la sala de espera.`, [`estuvo`, `estuvimos`, `estaron`], 1, `Nosotros form of estar in the preterite: estuvimos.`],
      [`Yo ___ la bolsa en la mesa.`, [`poní`, `pusí`, `puse`], 2, `Poner has the irregular stem pus-: puse.`],
      [`Ella no ___ venir porque estaba muy enferma.`, [`pudo`, `podió`, `puedo`], 0, `Poder has the stem pud- and takes -o: pudo.`],
      [`The preterite of "tener" for ellos is`, [`tuvo`, `tuvieron`, `tenieron`], 1, `Tener has the stem tuv-, and ellos takes -ieron: tuvieron.`],
      [`"Fuimos a la clínica" means`, [`We were at the clinic`, `We will go to the clinic`, `We went to the clinic`], 2, `Fuimos is from ir here: we went. It is a finished action.`]
    ]
  },
  'imperfect': {
    mistakes: [
      [`Antes yo ibaba a trabajar en autobús.`, `Antes yo iba a trabajar en autobús.`, `Ir is irregular in the imperfect: iba, ibas, íbamos. It does not take -aba after the stem.`],
      [`Era las tres cuando llegó mi hija.`, `Eran las tres cuando llegó mi hija.`, `The hour is plural from two o'clock on, so the verb is plural: eran las tres. Only one o'clock is singular (era la una).`],
      [`Antes yo vía a mi hijo cada semana.`, `Antes yo veía a mi hijo cada semana.`, `Ver keeps its e in the imperfect: veía, veías, veíamos.`]
    ],
    more: [
      [`¿Qué hacía para relajarse antes?`, `What did you do to relax before?`],
      [`Me despertaba muchas veces cada noche.`, `I woke up many times each night.`],
      [`¿Cuántos cigarros fumaba al día?`, `How many cigarettes did you smoke a day?`],
      [`De niña, jugaba en la calle con mis primos.`, `As a girl, I played in the street with my cousins.`],
      [`Mi abuela siempre cantaba mientras cocinaba.`, `My grandmother always sang while she cooked.`],
      [`Hacía mucho frío y llovía.`, `It was very cold and it was raining.`]
    ],
    quiz: [
      [`Cuando éramos niños, ___ al río los domingos.`, [`íbamos`, `fuimos`, `vamos`], 0, `A repeated past habit takes the imperfect: íbamos.`],
      [`Mi mamá siempre ___ mientras cocinaba.`, [`cantó`, `cantaba`, `cantará`], 1, `Siempre and mientras describe a habit and background, so the imperfect: cantaba.`],
      [`¿Cuántas horas ___ usted antes?`, [`durmió`, `duerme`, `dormía`], 2, `Antes asks about the past baseline: dormía.`],
      [`What is the imperfect of "ser" for ellos?`, [`eran`, `fueron`, `son`], 0, `Ser in the imperfect: era, eras, era, éramos, eran.`],
      [`"Veía a mi mamá cada semana" means`, [`I saw my mother once last week`, `I used to see my mother every week`, `I will see my mother every week`], 1, `Cada semana with the imperfect is a repeated past habit.`],
      [`Which ending do -ar verbs take in the imperfect?`, [`-ía`, `-ó`, `-aba`], 2, `-ar verbs use -aba. The ending -ía is for -er and -ir verbs.`]
    ]
  },
  'preterite-vs-imperfect': {
    mistakes: [
      [`Cuando era niña, me caí de un árbol y me rompía el brazo.`, `Cuando era niña, me caí de un árbol y me rompí el brazo.`, `Breaking the arm is one finished event in a sequence, so it takes the preterite.`],
      [`Fueron las tres de la mañana cuando me desperté.`, `Eran las tres de la mañana cuando me desperté.`, `The clock time in the past is background, so it takes the imperfect: eran las tres.`],
      [`Ayer fui al mercado y compraba verduras.`, `Ayer fui al mercado y compré verduras.`, `Two finished actions in a row both take the preterite.`]
    ],
    more: [
      [`Estaba solo en casa cuando oí pasos.`, `I was alone at home when I heard footsteps.`],
      [`Antes bebía los fines de semana, pero el año pasado dejé de beber.`, `I used to drink on weekends, but last year I stopped drinking.`],
      [`Se cayó mientras bajaba la escalera.`, `He fell while he was going down the stairs.`],
      [`Llovía mucho, así que me quedé en casa.`, `It was raining a lot, so I stayed at home.`],
      [`Cuando llegamos, mi mamá ya dormía.`, `When we arrived, my mother was already sleeping.`],
      [`Mi esposo llegó a las seis y cenamos juntos.`, `My husband arrived at six and we had dinner together.`]
    ],
    quiz: [
      [`Yo hacía la cena cuando mi hijo ___.`, [`llegó`, `llegué`, `llegarán`], 0, `The sudden event that interrupts the scene takes the preterite. Mi hijo is third person: llegó.`],
      [`___ las tres de la mañana cuando me desperté.`, [`Fueron`, `Eran`, `Serán`], 1, `Clock time in the past takes the imperfect: eran.`],
      [`El año pasado ___ mi trabajo y me puse muy triste.`, [`perdía`, `perderé`, `perdí`], 2, `A single event with a clear time takes the preterite: perdí.`],
      [`Todos los días mi papá ___ a las cinco.`, [`se levantaba`, `se levantó`, `se levantará`], 0, `Todos los días is a habit, so the imperfect: se levantaba.`],
      [`Ayer ___ al doctor y me dio una receta.`, [`iba`, `fui`, `iré`], 1, `A finished action yesterday takes the preterite: fui.`],
      [`Which phrase means "I got scared" at one moment?`, [`Tenía miedo`, `Tendré miedo`, `Tuve miedo`], 2, `Tuve miedo (preterite) is a moment of fear. Tenía miedo is a state.`]
    ]
  },
  'hace-desde': {
    mistakes: [
      [`Llevo dos semanas tomar esta pastilla.`, `Llevo dos semanas tomando esta pastilla.`, `Llevar + an amount of time takes a gerund (tomando) or sin + infinitive.`],
      [`Perdí mi trabajo desde hace dos meses.`, `Perdí mi trabajo hace dos meses.`, `A finished event with "ago" takes hace, not desde hace. Desde hace is for something that still goes on.`],
      [`Estoy aquí desde hace ayer.`, `Estoy aquí desde ayer.`, `Desde hace needs an amount of time (dos horas). With a point in time like ayer, use desde.`]
    ],
    more: [
      [`¿Desde cuándo no come bien?`, `Since when have you not been eating well?`],
      [`Hace tres semanas que mi esposa no habla con nadie.`, `For three weeks my wife has not talked to anyone.`],
      [`Mi hijo lleva dos días sin dormir.`, `My son has gone two days without sleeping.`],
      [`Trabajo aquí desde hace diez años.`, `I have worked here for ten years.`],
      [`Mi mamá cumplió ochenta años hace un mes.`, `My mother turned eighty a month ago.`],
      [`Conozco a mi vecina desde 2015.`, `I have known my neighbor since 2015.`]
    ],
    quiz: [
      [`Vivo en esta casa ___ 2018.`, [`desde`, `hace`, `llevo`], 0, `Desde goes with a point in time: since 2018.`],
      [`Mi esposo no habla ___ tres días.`, [`desde`, `desde hace`, `de`], 1, `Desde hace + an amount of time: for three days.`],
      [`Llegué al hospital ___ dos horas.`, [`desde`, `desde hace`, `hace`], 2, `A finished event with "ago" takes hace: hace dos horas.`],
      [`¿___ tiempo lleva tomando esta medicina?`, [`Cuánto`, `Cuántos`, `Cuándo`], 0, `¿Cuánto tiempo lleva...? asks how long.`],
      [`"Hace un mes que dejé de fumar" means`, [`I have been smoking for a month`, `I quit smoking a month ago`, `I will quit smoking in a month`], 1, `Hace + time with a preterite means a month ago.`],
      [`Mi hijo lleva dos días sin ___.`, [`comió`, `como`, `comer`], 2, `After sin, use the infinitive: sin comer.`]
    ]
  },
  'present-perfect': {
    mistakes: [
      [`Ella ha escribido una carta.`, `Ella ha escrito una carta.`, `Escribir has an irregular participle: escrito. Others: abierto, puesto, vuelto, roto.`],
      [`Mis hijos han volvido a casa.`, `Mis hijos han vuelto a casa.`, `Volver has an irregular participle: vuelto.`],
      [`Yo ha tomado la pastilla.`, `Yo he tomado la pastilla.`, `Haber must agree with the subject: yo he. Ha is for usted, él and ella.`]
    ],
    more: [
      [`¿Ha pensado en dejar de tomar la medicina?`, `Have you thought about stopping the medicine?`],
      [`¿Ha perdido peso este mes?`, `Have you lost weight this month?`],
      [`¿Alguien de su familia ha tenido problemas parecidos?`, `Has anyone in your family had similar problems?`],
      [`Hoy he trabajado desde las seis.`, `Today I have worked since six.`],
      [`Mis hijos nunca han visitado México.`, `My children have never visited Mexico.`],
      [`Todavía no hemos cenado.`, `We have not had dinner yet.`]
    ],
    quiz: [
      [`What is the participle of "escribir"?`, [`escrito`, `escribido`, `escribiendo`], 0, `Escrito is irregular, like hecho, dicho and visto.`],
      [`Mis hijos nunca ___ visitado México.`, [`tienen`, `han`, `son`], 1, `The perfect uses haber. With ellos: han.`],
      [`Which sentence says "We have already arrived"?`, [`Han no llegado.`, `Ha llegamos.`, `Ya hemos llegado.`], 2, `Haber + participle, with the subject matching: nosotros hemos llegado.`],
      [`¿Han ___ la puerta de la clínica? (abrir)`, [`abierto`, `abrido`, `abriendo`], 0, `Abrir has an irregular participle: abierto.`],
      [`What is the participle of "volver"?`, [`volvido`, `vuelto`, `volviendo`], 1, `Vuelto is irregular: the o becomes ue.`],
      [`"Nunca he tomado esa medicina" means`, [`I never take that medicine now`, `I will never take that medicine`, `I have never taken that medicine`], 2, `Nunca he + participle is a lifetime experience: I have never taken it.`]
    ]
  },
  'direct-object-pronouns': {
    mistakes: [
      [`Lo tome con comida, señora.`, `Tómelo con comida, señora.`, `With an affirmative command the pronoun attaches to the end and the verb takes a written accent: tómelo.`],
      [`He lo tomado.`, `Lo he tomado.`, `In the perfect, the pronoun goes before haber. Nothing goes between he and the participle.`],
      [`Estoy lo llamando ahora.`, `Lo estoy llamando ahora.`, `With a gerund, the pronoun goes before estar (lo estoy llamando) or attaches to the gerund (estoy llamándolo).`]
    ],
    more: [
      [`Esta pastilla, ¿la toma con el desayuno?`, `This pill, do you take it with breakfast?`],
      [`¿Los efectos secundarios? Los noté el segundo día.`, `The side effects? I noticed them on the second day.`],
      [`Lo escucho, don Mario. Cuénteme.`, `I am listening, Don Mario. Tell me.`],
      [`¿El periódico? Lo leí en la mañana.`, `The newspaper? I read it in the morning.`],
      [`Mis vecinos son amables; los saludo todos los días.`, `My neighbors are friendly; I greet them every day.`],
      [`Te llamo más tarde, mamá.`, `I will call you later, Mom.`]
    ],
    quiz: [
      [`Las cartas, ___ escribí ayer.`, [`las`, `los`, `la`], 0, `Cartas is feminine plural, so las.`],
      [`¿Me escucha, don Mario? Sí, ___ escucho.`, [`la`, `lo`, `las`], 1, `Don Mario is a man, so lo.`],
      [`Which command is correct for "Take it" (la pastilla)?`, [`La tome.`, `Tome la.`, `Tómela.`], 2, `An affirmative command attaches the pronoun: tómela, with an accent.`],
      [`Mi mamá me llama y yo ___ llamo también.`, [`la`, `lo`, `me`], 0, `Mi mamá is a woman, so la.`],
      [`¿Los zapatos? No ___ encuentro.`, [`la`, `los`, `lo`], 1, `Zapatos is masculine plural, so los.`],
      [`In "Nos ve el doctor", "nos" means`, [`them`, `you all`, `us`], 2, `Nos is the pronoun for us.`]
    ]
  },
  'indirect-object-pronouns': {
    mistakes: [
      [`Las pastillas, se lo di a mi mamá.`, `Las pastillas, se las di a mi mamá.`, `Se stands for the person. The second pronoun matches the thing given: las pastillas, so las.`],
      [`Me ella dio la pastilla.`, `Ella me dio la pastilla.`, `The pronoun goes directly before the verb, so the subject comes first: ella me dio.`],
      [`Lo me da mi hija.`, `Me lo da mi hija.`, `When two pronouns come together, the indirect one (me, te, le, nos) goes first: me lo.`]
    ],
    more: [
      [`Le voy a mandar los resultados por correo.`, `I am going to send you the results by mail.`],
      [`¿Le cuenta a alguien cómo se siente?`, `Do you tell anyone how you feel?`],
      [`Le receté otra medicina porque la primera no le ayudó.`, `I prescribed you another medicine because the first one did not help you.`],
      [`Mi hermano me prestó su carro.`, `My brother lent me his car.`],
      [`Le compré un regalo a mi nieta.`, `I bought my granddaughter a gift.`],
      [`Nos trajeron la cuenta enseguida.`, `They brought us the check right away.`]
    ],
    quiz: [
      [`Mi mamá ___ compró un abrigo a mi hijo.`, [`le`, `lo`, `les`], 0, `One person who receives it (mi hijo): le.`],
      [`Los regalos, se ___ di a mis nietos.`, [`la`, `los`, `lo`], 1, `Se is the people. The second pronoun matches regalos, masculine plural: los.`],
      [`Mi hija ___ da las pastillas (a mí).`, [`te`, `le`, `me`], 2, `Me is the indirect object pronoun for me.`],
      [`"Les escribí una carta a mis tíos." Who is "les"?`, [`My aunts and uncles`, `My letter`, `Me`], 0, `Les stands for the people who receive the letter.`],
      [`In "Se lo expliqué", "lo" is`, [`the person`, `the thing explained`, `me`], 1, `Se is the person, and lo is the thing that was explained.`],
      [`Which order is correct?`, [`Lo me dio.`, `Dio me lo.`, `Me lo dio.`], 2, `Indirect pronoun first, then direct, both before the verb: me lo dio.`]
    ]
  },
  'por-para': {
    mistakes: [
      [`Camino para una hora todos los días.`, `Camino por una hora todos los días.`, `How long something lasts takes por: por una hora.`],
      [`Trabajo por una clínica pequeña.`, `Trabajo para una clínica pequeña.`, `The employer or organization you work for takes para.`],
      [`Le mandé la receta para correo.`, `Le mandé la receta por correo.`, `The means or channel (por correo, por teléfono) takes por.`]
    ],
    more: [
      [`Esta pastilla es para la ansiedad.`, `This pill is for anxiety.`],
      [`Llame por teléfono si tiene preguntas.`, `Call by phone if you have questions.`],
      [`Le dieron la cita para el martes.`, `They gave you the appointment for Tuesday.`],
      [`Compré flores para mi mamá.`, `I bought flowers for my mother.`],
      [`Pagué cien pesos por esta camisa.`, `I paid one hundred pesos for this shirt.`],
      [`Estudio para ser enfermera.`, `I am studying to be a nurse.`]
    ],
    quiz: [
      [`Esta crema es ___ la piel seca.`, [`para`, `por`, `de`], 0, `What something is for takes para.`],
      [`Llame ___ teléfono si tiene preguntas.`, [`para`, `por`, `en`], 1, `The means of communication takes por.`],
      [`Pagué cien pesos ___ la camisa.`, [`para`, `a`, `por`], 2, `Por also means in exchange for: por la camisa.`],
      [`Compré flores ___ mi mamá.`, [`para`, `por`, `con`], 0, `The person who receives something takes para.`],
      [`Dejé de trabajar ___ la enfermedad.`, [`para`, `por`, `desde`], 1, `The illness is the cause, so por.`],
      [`Tengo una cita ___ el martes.`, [`por`, `de`, `para`], 2, `A deadline or set date takes para: para el martes.`]
    ]
  },
  'present-progressive': {
    mistakes: [
      [`Me estoy sentiendo mejor.`, `Me estoy sintiendo mejor.`, `Sentir changes its stem in the gerund (e to i): sintiendo, like pidiendo and diciendo.`],
      [`Estoy oiendo voces.`, `Estoy oyendo voces.`, `After a vowel the i of -iendo becomes y: oyendo, leyendo, trayendo.`],
      [`Sigo tomo la pastilla.`, `Sigo tomando la pastilla.`, `Seguir needs a gerund after it: sigo tomando.`]
    ],
    more: [
      [`¿Está llorando mucho últimamente?`, `Have you been crying a lot lately?`],
      [`¿Está comiendo tres veces al día?`, `Are you eating three times a day?`],
      [`¿Sigue viendo cosas que otras personas no ven?`, `Do you still see things that other people do not see?`],
      [`Mi hija está estudiando para un examen.`, `My daughter is studying for an exam.`],
      [`Estoy esperando el autobús.`, `I am waiting for the bus.`],
      [`Los niños están jugando afuera.`, `The children are playing outside.`]
    ],
    quiz: [
      [`What is the gerund of "pedir"?`, [`pidiendo`, `pediendo`, `pidando`], 0, `The e changes to i: pidiendo.`],
      [`Mis hijos ___ jugando afuera.`, [`es`, `están`, `tienen`], 1, `Estar + gerund. With ellos: están.`],
      [`"Sigo sin dormir" means`, [`I am about to sleep`, `I slept well`, `I still cannot sleep`], 2, `Seguir sin + infinitive means to still not do something.`],
      [`¿Está ___ mucho últimamente? (llorar)`, [`llorando`, `lloriendo`, `llorado`], 0, `-ar verbs take -ando: llorando.`],
      [`What is the gerund of "traer"?`, [`traiendo`, `trayendo`, `trayando`], 1, `After a vowel the i becomes y: trayendo.`],
      [`Which sentence means "I am reading"?`, [`Soy leyendo.`, `Tengo leyendo.`, `Estoy leyendo.`], 2, `Estar + gerund.`]
    ]
  },
  'saber-conocer': {
    mistakes: [
      [`Conozco que usted está cansado.`, `Sé que usted está cansado.`, `Conocer does not take que + a fact. Use saber for information.`],
      [`Conozco tu hermano.`, `Conozco a tu hermano.`, `Conocer needs the personal a before a person.`],
      [`Sé la Ciudad de México muy bien.`, `Conozco la Ciudad de México muy bien.`, `Being familiar with a place takes conocer.`]
    ],
    more: [
      [`¿Sabe cómo se llama su medicina?`, `Do you know what your medicine is called?`],
      [`¿Sabe en qué mes estamos?`, `Do you know what month it is?`],
      [`¿Conoce a sus vecinos?`, `Do you know your neighbors?`],
      [`Mi tía conoce muy bien Oaxaca.`, `My aunt knows Oaxaca very well.`],
      [`Sé nadar, pero no sé manejar.`, `I know how to swim, but I do not know how to drive.`],
      [`¿Ya conoces a mi primo?`, `Have you met my cousin yet?`]
    ],
    quiz: [
      [`Yo ___ nadar muy bien.`, [`sé`, `conozco`, `sabo`], 0, `A skill takes saber, and the yo form is sé.`],
      [`Mi tía ___ muy bien la Ciudad de México.`, [`sabe`, `conoce`, `conozco`], 1, `A place you are familiar with takes conocer: conoce.`],
      [`¿___ que hoy es lunes?`, [`Conoce`, `Conozco`, `Sabe`], 2, `A fact takes saber. With usted: sabe.`],
      [`No ___ a esa señora.`, [`conozco`, `sé`, `sabe`], 0, `A person takes conocer, with the personal a: no conozco a esa señora.`],
      [`¿Ya ___ a mi primo? (tú)`, [`sabes`, `conoces`, `conozco`], 1, `Tú form of conocer: conoces.`],
      [`"No sé manejar" means`, [`I do not know the driver`, `I never drove`, `I do not know how to drive`], 2, `Saber + infinitive means to know how to do something.`]
    ]
  },
  'obligation-advice': {
    mistakes: [
      [`Hay que tomo las pastillas.`, `Hay que tomar las pastillas.`, `Hay que is always followed by the infinitive.`],
      [`Tengo que a trabajar mañana.`, `Tengo que trabajar mañana.`, `Tener que goes straight to the infinitive. Do not add a.`],
      [`Los niños tiene que dormir temprano.`, `Los niños tienen que dormir temprano.`, `Tener changes with the subject: los niños tienen.`]
    ],
    more: [
      [`Debe tomar el medicamento a la misma hora cada día.`, `You should take the medicine at the same time every day.`],
      [`No debe dejar la pastilla sin hablar con su doctor.`, `You should not stop the pill without talking to your doctor.`],
      [`Tiene que venir en ayunas para el análisis.`, `You have to come fasting for the test.`],
      [`Tenemos que salir temprano para no llegar tarde.`, `We have to leave early so we do not arrive late.`],
      [`Hay que pagar la renta el primero del mes.`, `The rent has to be paid on the first of the month.`],
      [`No debes tocar eso, está caliente.`, `You should not touch that, it is hot.`]
    ],
    quiz: [
      [`Hay que ___ mucha agua.`, [`tomar`, `tomo`, `toma`], 0, `Hay que is followed by the infinitive.`],
      [`Los niños ___ que dormir temprano.`, [`tiene`, `tienen`, `debe`], 1, `Los niños is plural: tienen que.`],
      [`No ___ manejar si toma esta pastilla.`, [`tiene que`, `es importante`, `debe`], 2, `No debe is the prohibition. The other options do not forbid it.`],
      [`Tenemos ___ salir temprano.`, [`que`, `por`, `para`], 0, `Tener que + infinitive.`],
      [`"Debe descansar" is`, [`a general rule with no subject`, `advice to rest`, `a request to rest later`], 1, `Deber + infinitive gives advice: you should rest.`],
      [`Usted debe ___ más agua.`, [`bebe`, `bebiendo`, `beber`], 2, `Deber takes the infinitive directly.`]
    ]
  },
  'comparatives': {
    mistakes: [
      [`Duermo tanto horas como antes.`, `Duermo tantas horas como antes.`, `Tanto agrees with the noun that follows: tantas horas.`],
      [`Hoy me duele menos de ayer.`, `Hoy me duele menos que ayer.`, `Use que to compare with a word. De is only for numbers (menos de cuatro horas).`],
      [`Hoy duermo más bien que ayer.`, `Hoy duermo mejor que ayer.`, `The comparative of bien (well) is mejor, not más bien.`]
    ],
    more: [
      [`¿Tiene más energía que el mes pasado?`, `Do you have more energy than last month?`],
      [`Ahora estoy más tranquila que cuando llegué.`, `Now I am calmer than when I arrived.`],
      [`Mi ánimo está igual que la semana pasada.`, `My mood is the same as last week.`],
      [`Mi primo es más alto que yo.`, `My cousin is taller than I am.`],
      [`Este camino es más corto que el otro.`, `This road is shorter than the other one.`],
      [`No hace tanto calor como ayer.`, `It is not as hot as yesterday.`]
    ],
    quiz: [
      [`Hoy duermo ___ que ayer. (better)`, [`mejor`, `más bien`, `más bueno`], 0, `The comparative of bien is mejor.`],
      [`Mi primo es ___ alto que yo.`, [`tan`, `más`, `tanto`], 1, `Más + adjective + que: taller than.`],
      [`Tengo ___ pastillas como mi mamá.`, [`tan`, `tantos`, `tantas`], 2, `Tanto agrees with a feminine plural noun: tantas pastillas.`],
      [`No hace ___ calor como ayer.`, [`tanto`, `tan`, `más`], 0, `Calor is a noun here, so tanto. Tan goes before an adjective.`],
      [`Mi hermana nació después que yo. Ella es ___.`, [`mayor`, `menor`, `mejor`], 1, `Menor means younger.`],
      [`Which phrase means "the best"?`, [`el bien`, `el más bien`, `el mejor`], 2, `El mejor is the superlative of bueno.`]
    ]
  },
  'connectors-basic': {
    mistakes: [
      [`Dígame porque dejó la medicina.`, `Dígame por qué dejó la medicina.`, `In an indirect question, the two words por qué are used. Porque is only the answer, "because".`],
      [`Me duele la cabeza, sino tomé una pastilla.`, `Me duele la cabeza, así que tomé una pastilla.`, `Sino only corrects a negative. To give a result, use así que.`],
      [`Estoy nervioso, asi que no duermo.`, `Estoy nervioso, así que no duermo.`, `Así needs its written accent.`]
    ],
    more: [
      [`Tomo la pastilla en la noche, pero a veces se me olvida.`, `I take the pill at night, but sometimes I forget.`],
      [`No quiero medicina, sino hablar con alguien.`, `I do not want medicine, but rather to talk with someone.`],
      [`Me siento mejor cuando camino un rato.`, `I feel better when I walk for a while.`],
      [`Hoy no fui al mercado porque llovió.`, `Today I did not go to the market because it rained.`],
      [`Quiero ir al cine, pero no tengo dinero.`, `I want to go to the movies, but I have no money.`],
      [`¿Prefiere pollo o pescado?`, `Do you prefer chicken or fish?`]
    ],
    quiz: [
      [`Mi hijo trabaja ___ estudia.`, [`y`, `sino`, `porque`], 0, `Y joins two actions: works and studies.`],
      [`No quiero medicina, ___ hablar con alguien.`, [`pero`, `sino`, `porque`], 1, `After a negative, "but rather" is sino.`],
      [`Hoy no fui al mercado ___ llovió.`, [`así que`, `aunque`, `porque`], 2, `Porque gives the reason.`],
      [`Se me acabó la pastilla, ___ fui a la farmacia.`, [`así que`, `sino`, `porque`], 0, `Así que introduces the result: so.`],
      [`Dígame ___ dejó de tomar la medicina.`, [`porque`, `por qué`, `por que`], 1, `An indirect question uses por qué, in two words with an accent.`],
      [`¿Prefiere pollo ___ pescado?`, [`y`, `e`, `o`], 2, `O offers a choice: chicken or fish.`]
    ]
  },
  'review-a2': {
    mistakes: [
      [`Los niños ha dormido mal.`, `Los niños han dormido mal.`, `Haber agrees with the subject: los niños han. Ha is for one person.`],
      [`Estoy peor de ayer.`, `Estoy peor que ayer.`, `Compare with que. De is only for numbers.`],
      [`Ella dijió que se sentía mal.`, `Ella dijo que se sentía mal.`, `Decir is irregular in the preterite: dijo, with -o and no extra i.`]
    ],
    more: [
      [`¿Cuándo fue la última vez que se sintió bien?`, `When was the last time you felt well?`],
      [`Mi hermana me llevaba a las citas, pero ahora trabaja.`, `My sister used to take me to my appointments, but now she works.`],
      [`¿Le dijeron cuánto tiempo debe tomar la pastilla?`, `Did they tell you how long you should take the pill?`],
      [`Hace una hora que espero el autobús.`, `I have been waiting for the bus for an hour.`],
      [`Anoche cenamos y vimos una película.`, `Last night we had dinner and watched a movie.`],
      [`Mi abuelo conocía a todos en el pueblo.`, `My grandfather knew everyone in the town.`]
    ],
    quiz: [
      [`Mi hermana ___ en el hospital desde hace tres días.`, [`está`, `estuvo`, `estará`], 0, `Desde hace describes something still true, so the present: está.`],
      [`¿Ya ___ usted las pastillas?`, [`he tomado`, `ha tomado`, `han tomado`], 1, `Usted takes ha: ha tomado.`],
      [`La doctora ___ explicó todo a mi esposa.`, [`la`, `lo`, `le`], 2, `Mi esposa is the person who receives the explanation, so le.`],
      [`Estoy ___ nervioso como ayer.`, [`tan`, `más`, `tanto`], 0, `Equality: tan + adjective + como.`],
      [`Ayer yo ___ la cena y mi hija lavó los platos.`, [`cocinaba`, `cociné`, `cocinaría`], 1, `A finished action in a sequence takes the preterite: cociné.`],
      [`Mi hijo ___ tres años cuando empezó a hablar.`, [`tuvo`, `tiene`, `tenía`], 2, `Age in the past takes the imperfect: tenía.`]
    ]
  }
});
