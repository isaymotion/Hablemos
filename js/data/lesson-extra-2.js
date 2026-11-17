/* Lesson extras part 2 (0.8.0): common mistakes, more examples and a "More practice" quiz for 11 existing lessons
   (body-symptoms, medicines-dosing, subjunctive-basics and the culture lessons; the lesson page shows them after the body
   and runs the quiz after the lesson's own).
   DRAFT FOR REVIEW by a native Spanish-speaking clinician before use.
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongEs, rightEs, whyEn], ...3],   // wrongEs is shown struck through, never spoken or recorded
     more: [[es, en], ...6],                          // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });      // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'body-symptoms': {
    mistakes: [
      [`Me duele mi cabeza.`, `Me duele la cabeza.`, `With body parts Spanish uses the article, not mi or tu, because the pronoun me already shows whose body part it is.`],
      [`Soy mareado cuando me levanto.`, `Me siento mareado cuando me levanto.`, `Dizziness is a passing state, so use estar or sentirse, not ser.`],
      [`Tengo una dolor en el pecho.`, `Tengo un dolor en el pecho.`, `Dolor is masculine, so it takes un, not una.`]
    ],
    more: [
      [`Siento que se me cierra la garganta cuando estoy nerviosa.`, `I feel my throat tighten when I am nervous.`],
      [`¿El dolor se queda en el pecho o se va al brazo?`, `Does the pain stay in your chest or go to your arm?`],
      [`Me hormiguean las manos y los pies cuando me asusto.`, `My hands and feet tingle when I get frightened.`],
      [`Me duele la espalda de estar tanto tiempo sentado.`, `My back hurts from sitting so long.`],
      [`Mi hija se cayó y se rompió el brazo.`, `My daughter fell and broke her arm.`],
      [`Tengo la piel muy seca en las manos.`, `The skin on my hands is very dry.`]
    ],
    quiz: [
      [`Which sentence says "My head hurts"?`, [`Mi cabeza duele.`, `Me duele la cabeza.`, `Tengo duele la cabeza.`], 1, `Doler works like gustar: me duele plus the body part with its article.`],
      [`What are "las palpitaciones"?`, [`Awareness of a racing or pounding heartbeat`, `Pain in the legs`, `Ringing in the ears`], 0, `Palpitaciones are the feeling of the heart racing, skipping or pounding.`],
      [`A patient says "Siento una punzada en el pecho." What kind of pain is this?`, [`A heavy pressure`, `A burning feeling`, `A sharp, stabbing pain`], 2, `Una punzada is a stab or sharp jab; a weight is un peso and burning is ardor.`],
      [`What does "¿Desde cuándo tiene este dolor?" ask?`, [`Where the pain is`, `How strong the pain is`, `How long the patient has had the pain`], 2, `Desde cuándo asks for the starting point in time.`],
      [`A patient says "Me duele el corazón" after a loss. What is a good approach?`, [`Say the pain is only in the mind`, `Take the complaint seriously, check the body, then ask about grief, sleep and mood`, `Write a heart diagnosis and ask nothing more`], 1, `Physical complaints are real and are often also the way distress is expressed.`],
      [`Which word is "vomiting"?`, [`el vómito`, `el mareo`, `el hormigueo`], 0, `Vómito is vomiting, mareo is dizziness and hormigueo is tingling.`]
    ]
  },
  'medicines-dosing': {
    mistakes: [
      [`Tome una pastilla después comer.`, `Tome una pastilla después de comer.`, `Después needs de before an infinitive; English "after eating" has no matching little word.`],
      [`Tome una cápsula por mañana y otra por noche.`, `Tome una cápsula por la mañana y otra por la noche.`, `Parts of the day take the article: por la mañana, por la tarde, por la noche.`],
      [`Tiene que llenar la receta en la farmacia.`, `Tiene que surtir la receta en la farmacia.`, `Llenar la receta copies English "fill a prescription"; in Mexico the usual verb is surtir, and elsewhere despachar or dispensar.`]
    ],
    more: [
      [`¿Se le olvidó tomar la medicina alguna vez esta semana?`, `Did you forget to take the medicine at any point this week?`],
      [`Esta pastilla puede darle sueño, así que tómela antes de dormir.`, `This pill can make you sleepy, so take it before bed.`],
      [`¿Cuántas pastillas le quedan en el frasco?`, `How many pills do you have left in the bottle?`],
      [`Guarde las pastillas en un lugar seco, lejos de los niños.`, `Keep the pills in a dry place, away from children.`],
      [`Tengo que ir a la farmacia a recoger la receta.`, `I have to go to the pharmacy to pick up the prescription.`],
      [`El jarabe sabe muy dulce.`, `The syrup tastes very sweet.`]
    ],
    quiz: [
      [`"Antes de dormir" means`, [`after waking up`, `with breakfast`, `before going to sleep`], 2, `Antes de plus an infinitive means before doing something.`],
      [`What is "la dosis"?`, [`The time of day`, `The amount of medicine to take each time`, `A side effect`], 1, `Dosis is the amount; the timing is the frequency.`],
      [`A patient takes a pill at 8 a.m., 4 p.m. and midnight. Which instruction matches?`, [`Cada ocho horas`, `Una vez al día`, `Cada doce horas`], 0, `Cada ocho horas spaces the doses evenly through the day and night.`],
      [`What is "el parche"?`, [`The patch`, `The pill`, `The drops`], 0, `Parche is a patch worn on the skin.`],
      [`A patient says "Tomo mi remedio." What is a good follow-up?`, [`Tell the patient to stop it first, then ask what it was`, `Write "no other medicines" without asking`, `¿Es una pastilla de la receta, un té o un producto natural?`], 2, `Remedio can mean many things, so ask what it is without judging.`],
      [`"Dos veces al día" means`, [`every two hours`, `twice a day`, `two days a week`], 1, `Veces al día counts the doses in a day, not the spacing.`]
    ]
  },
  'subjunctive-basics': {
    mistakes: [
      [`Quiero que usted toma la medicina por la noche.`, `Quiero que usted tome la medicina por la noche.`, `After quiero que, with a different subject, the verb is in the subjunctive: tome.`],
      [`Quiero que hablo con usted un momento.`, `Quiero hablar con usted un momento.`, `When the subject does not change (I want, I talk), use the infinitive, not que plus a verb.`],
      [`Cuando sale del hospital, venga a su cita.`, `Cuando salga del hospital, venga a su cita.`, `Cuando with a future event uses the subjunctive; the indicative would describe a habit.`]
    ],
    more: [
      [`Le recomiendo que hable con su familia sobre cómo se siente.`, `I recommend that you talk with your family about how you feel.`],
      [`Quiero que me avise si la medicina le cae mal.`, `I want you to let me know if the medicine does not agree with you.`],
      [`Es importante que venga a todas sus citas.`, `It is important that you come to all your appointments.`],
      [`Ojalá mañana no llueva.`, `I hope it does not rain tomorrow.`],
      [`Mi mamá quiere que yo coma más verduras.`, `My mom wants me to eat more vegetables.`],
      [`Voy a esperar aquí hasta que usted salga.`, `I will wait here until you come out.`]
    ],
    quiz: [
      [`Which is right? "It is important that you eat something in the morning."`, [`Es importante que usted coma algo en la mañana.`, `Es importante que usted come algo en la mañana.`, `Es importante que usted comió algo en la mañana.`], 0, `Es importante que takes the subjunctive: coma.`],
      [`Which is right for "I hope the medicine works soon"?`, [`Ojalá funciona pronto la medicina.`, `Ojalá funcionó pronto la medicina.`, `Ojalá funcione pronto la medicina.`], 2, `Ojalá is followed by the subjunctive.`],
      [`What is the usted subjunctive of "venir"?`, [`viene`, `venga`, `vino`], 1, `Take vengo, drop the -o, add -a: venga.`],
      [`Which sentence means "I want to sleep better"?`, [`Quiero que dormir mejor.`, `Quiero dormir mejor.`, `Quiero que duermo mejor.`], 1, `With one subject, use quiero plus the infinitive.`],
      [`"Le explico el plan para que usted entienda" means`, [`I explain the plan so that you understand`, `I explain the plan because you understand`, `I explain the plan although you understand`], 0, `Para que introduces a purpose.`],
      [`A patient says "No creo que me ayuden." This most likely shows`, [`certainty that help will come`, `a request for help`, `doubt that help will come`], 2, `No creo que plus the subjunctive expresses doubt; ask what makes the patient doubt it.`]
    ]
  },
  'regional-variety': {
    mistakes: [
      [`Con ese apellido, usted debe ser mexicano, ¿verdad?`, `¿De dónde es usted?`, `A surname does not tell the country or the dialect; ask the patient.`],
      [`Vosotros tenéis que descansar.`, `Ustedes tienen que descansar.`, `Vosotros is used in Spain; in Latin America the plural you is ustedes, even for friends.`],
      [`¿Coge el autobús para venir?`, `¿Toma el autobús para venir?`, `Coger is ordinary in Spain but vulgar in Mexico and several other countries; tomar is safe everywhere.`]
    ],
    more: [
      [`¿Siente más coraje o más tristeza?`, `Do you feel more anger or more sadness?`],
      [`¿Está trabajando ahorita?`, `Are you working right now?`],
      [`¿Con quién platica cuando se siente mal?`, `Who do you talk to when you feel bad?`],
      [`Mañana tengo que llevar el carro al taller.`, `Tomorrow I have to take the car to the shop.`],
      [`¿Me da el número de su celular?`, `Can you give me your cell phone number?`],
      [`¿Vos querés tomar agua?`, `Do you want to drink some water? (voseo)`]
    ],
    quiz: [
      [`Which word for "cell phone" is the most widespread in Latin America?`, [`móvil`, `celular`, `ordenador`], 1, `Celular is common across Latin America; móvil is typical of Spain.`],
      [`Why is "coger" risky in much of Latin America?`, [`It means to fall`, `It is only used with children`, `It can have a vulgar sexual meaning`], 2, `Use tomar, and notice how the patient says it.`],
      [`In most of Latin America, how does the z in "zapato" sound?`, [`Like an s`, `Like th in "think"`, `Like a k`], 0, `Seseo: z, ce and ci sound like s.`],
      [`How do you find out where a patient is from?`, [`Guess from the surname`, `Assume from the clinic's neighborhood`, `Ask politely`], 2, `Names and neighborhoods do not predict origin, so ask.`],
      [`Which word is the plural "you" in Latin America?`, [`ustedes`, `vosotros`, `vos`], 0, `Ustedes serves as the plural for formal and informal speech.`],
      [`"Platicar" means`, [`to argue`, `to talk, to chat`, `to ride`], 1, `Platicar is common in Mexico and Central America for conversar.`]
    ]
  },
  'spanglish': {
    mistakes: [
      [`Usted mezcla inglés y español. ¿Se siente confundido?`, `¿Prefiere hablar en español o en inglés, o mezclamos?`, `Mixing languages is normal for bilingual people and is not a sign of confusion.`],
      [`No se dice "lonche", se dice "almuerzo".`, `Entiendo. ¿A qué hora almorzó hoy?`, `Do not correct the patient's words; understand them and reply in standard Spanish.`],
      [`¿Quiere hacer el appointment para el viernes?`, `¿Quiere sacar la cita para el viernes?`, `Use the standard word cita yourself; copying mixed words can confuse patients and sounds like mimicry.`]
    ],
    more: [
      [`Entiendo lo que dice. Puede usar las palabras que quiera, en español o en inglés.`, `I understand what you say. You can use any words you like, in Spanish or English.`],
      [`¿En qué idioma le resulta más fácil hablar de lo que sintió?`, `In which language is it easier for you to talk about what you felt?`],
      [`¿Su familia habla español o inglés en casa?`, `Does your family speak Spanish or English at home?`],
      [`Mi hijo me explica las cartas del banco en inglés.`, `My son explains the letters from the bank to me in English.`],
      [`En el trabajo hablo inglés, pero en casa hablamos español.`, `At work I speak English, but at home we speak Spanish.`],
      [`Mi tía me dijo que ya pagó la renta.`, `My aunt told me she already paid the rent.`]
    ],
    quiz: [
      [`What does "rentar" mean in US Spanish?`, [`To run`, `To repair`, `To rent`], 2, `Rentar comes from English "rent"; the standard verb is alquilar.`],
      [`Which is the standard Spanish word for a work "break"?`, [`descanso`, `rotura`, `barra`], 0, `Descanso (or pausa) replaces the Spanglish el break.`],
      [`Which finding points to thought disorder rather than code-switching?`, [`Using English for work terms`, `Loose associations in both languages`, `Switching to Spanish for family stories`], 1, `Disorganization shows in every language the patient speaks.`],
      [`A patient says a word you do not know. What is the best response?`, [`Ask ¿Qué quiere decir con eso?`, `Guess and keep going`, `Pretend you understood`], 0, `Asking shows respect and avoids a wrong assumption.`],
      [`Why might a patient switch to Spanish when talking about family?`, [`The patient is hiding something`, `The memories and feelings are tied to that language`, `The patient is confused`], 1, `People often use the language in which the experience happened.`],
      [`Which question respects the patient's language choice?`, [`¿Por qué mezcla los idiomas?`, `¿Puede hablar solo en español?`, `¿En qué idioma se siente más cómodo?`], 2, `Offering the choice is respectful; asking why can sound like criticism.`]
    ]
  },
  'softeners': {
    mistakes: [
      [`Dígame ya por qué está aquí.`, `¿Me puede decir qué lo trae hoy?`, `A bare command with ya sounds abrupt; a polite question opens the conversation.`],
      [`Solo un poquito de tristeza, entonces no hay problema.`, `¿Cuánta tristeza siente, del cero al diez?`, `A diminutive may understate; ask for details and a number instead of taking the soft word as the severity.`],
      [`Quítese la camisa.`, `Con permiso, voy a escucharle el corazón. ¿Puede levantarse la camisa?`, `Say what you will do and ask permission before an exam; a bare command can feel intrusive.`]
    ],
    more: [
      [`¿Le parece bien si hablamos un rato a solas?`, `Would it be all right if we talk alone for a while?`],
      [`Disculpe la pregunta, pero necesito saber si toma alcohol.`, `Excuse the question, but I need to know whether you drink alcohol.`],
      [`Nomás cuénteme con calma qué pasó.`, `Just tell me calmly what happened.`],
      [`¿Me permite pasar?`, `May I come in?`],
      [`Perdone la molestia, ¿sabe dónde está el baño?`, `Sorry to bother you, do you know where the restroom is?`],
      [`Espéreme un momentito, ya vengo.`, `Wait for me a moment, I will be right back.`]
    ],
    quiz: [
      [`"Perdone la molestia" is used to`, [`apologize for bothering someone`, `refuse a request`, `end the visit`], 0, `It is a polite way to start a request or a question.`],
      [`"¿Le parece si…?" means`, [`Do you look like…?`, `Would it be all right if…?`, `Does it seem you are sick?`], 1, `It proposes something and invites the patient to agree or not.`],
      [`A patient says "nomás un poquito de miedo". What is the best next step?`, [`Accept it as mild`, `Change the subject`, `Ask how often, how strong and what it stops them from doing`], 2, `Soft words often understate, so ask for details.`],
      [`Which is the gentlest way to start a chest exam?`, [`Levántese la camisa.`, `Con permiso, voy a escuchar su corazón.`, `Necesito su camisa afuera.`], 1, `Say what you will do and ask permission first.`],
      [`What does a diminutive like "un momentito" usually do?`, [`Gives the exact time`, `Shows anger`, `Softens the request`], 2, `Diminutives soften and add warmth, but they do not measure time.`],
      [`Why use the patient's name and title before interrupting?`, [`It shows respect before you change the flow`, `It saves time`, `It is a legal requirement`], 0, `A name and title keep the interruption polite.`]
    ]
  },
  'values': {
    mistakes: [
      [`Como usted es latina, seguro quiere que su familia decida todo.`, `¿Quién quiere que participe en las decisiones de su tratamiento?`, `Cultural values are patterns, not rules; ask each patient who they want involved.`],
      [`Entonces sí entendió, ¿verdad? Muy bien.`, `¿Me puede decir con sus palabras cómo va a tomar la medicina?`, `A yes may show respect, not understanding; ask for teach-back with an open question.`],
      [`Vamos directo al grano, no tengo mucho tiempo.`, `Antes de empezar, ¿cómo está usted? ¿Cómo está su familia?`, `Many patients trust a clinician more after a warm, personal start (personalismo).`]
    ],
    more: [
      [`¿Hay alguien en su familia que le ayude con la medicina?`, `Is there someone in your family who helps you with your medicine?`],
      [`¿Quiere que alguien de su familia venga a la próxima cita?`, `Do you want someone from your family to come to the next appointment?`],
      [`Gracias por contarme eso. Sé que no es fácil hablar de estas cosas.`, `Thank you for telling me that. I know it is not easy to talk about these things.`],
      [`Los domingos comemos todos juntos en casa de mi abuela.`, `On Sundays we all eat together at my grandmother's house.`],
      [`Mi mamá siempre me pregunta si ya comí.`, `My mom always asks me whether I have eaten.`],
      [`Le presento a mi tía, que vive con nosotros.`, `Let me introduce my aunt, who lives with us.`]
    ],
    quiz: [
      [`A patient smiles and says "Todo bien", but looks tense. What is a good next step?`, [`Accept it and end the visit`, `Tell the patient to stop smiling`, `Ask an open question about how things really are`], 2, `Simpatía can hide distress, so an open, gentle question helps.`],
      [`"Respeto" in the interview means you should`, [`use first names only`, `use usted and titles`, `avoid eye contact`], 1, `Usted and titles show respect for age and role.`],
      [`Why may a patient hide painful thoughts from a new clinician?`, [`There is little confianza yet`, `The patient has none`, `The patient speaks no Spanish`], 0, `Trust builds with time, so go slowly and warmly.`],
      [`What is the best use of cultural values in an interview?`, [`To ask better questions`, `To predict each patient's answers`, `To skip the history`], 0, `Values are patterns; each patient is an individual.`],
      [`A daughter says "My mother does not need to know the diagnosis." What is the first step?`, [`Follow the daughter's wish`, `Ask the patient privately what she wants to know`, `Hide the diagnosis from both`], 1, `The patient decides what she wants to know and who is told.`],
      [`A patient says "Mi esposo decide." What do you do?`, [`Speak only to the husband`, `Say that this is wrong`, `Ask respectfully what the patient herself thinks`], 2, `Respect the family role and still hear the patient's own view.`]
    ]
  },
  'faith-folk': {
    mistakes: [
      [`¿Usted cree en esas brujerías?`, `¿Qué cree usted que le causó esto?`, `A mocking question closes the conversation; an open question learns the patient's explanation.`],
      [`Eso es solo superstición. No vaya con el curandero.`, `¿Ha ido con un curandero o ha tomado algún remedio? Me ayuda saberlo para cuidarle bien.`, `Judging a healer ends trust; ask with curiosity and focus on safety.`],
      [`Eso que oye no es real. Es su enfermedad.`, `Cuénteme más sobre eso. ¿Cómo es para usted?`, `Do not label an experience as illness at once; some families see a late relative after a death as normal grief.`]
    ],
    more: [
      [`¿Qué hace usted en casa cuando se siente mal de los nervios?`, `What do you do at home when you feel bad with your nerves?`],
      [`¿Sus rezos o su iglesia le ayudan en estos momentos?`, `Do your prayers or your church help you at these times?`],
      [`¿Qué remedios caseros ha usado para el dolor de estómago de su niño?`, `What home remedies have you used for your child's stomachache?`],
      [`Mi abuela prepara un té de manzanilla cuando nos duele el estómago.`, `My grandmother makes chamomile tea when our stomachs hurt.`],
      [`Vamos a la iglesia todos los domingos.`, `We go to church every Sunday.`],
      [`En la botánica de mi barrio venden velas y hierbas.`, `In the botánica in my neighborhood they sell candles and herbs.`]
    ],
    quiz: [
      [`What is a "botánica"?`, [`A hospital ward`, `A shop that sells herbs, candles and religious items`, `A type of bank`], 1, `Many people go there for products and advice.`],
      [`What is "susto"?`, [`An illness some people attribute to a sudden fright`, `A sunburn`, `A sleep medicine`], 0, `Ask what the patient thinks it is and how it affects them.`],
      [`A woman sometimes feels her late husband near her two months after his death. Her church sees this as normal and there are no other symptoms. What is a good response?`, [`Diagnose psychosis`, `Ignore it`, `Ask about it with curiosity and consider normal grief`], 2, `Such experiences can be part of grief, so ask about distress and function.`],
      [`Which finding makes a belief about a hex more concerning?`, [`Days without sleep, voices and a fixed belief the family does not share`, `A candle lit at home`, `A church that shares the belief`], 0, `Fixed, unshared beliefs with other symptoms and impairment need further assessment.`],
      [`Why are azarcón and greta a concern?`, [`They are antidepressants`, `They are illegal to mention`, `They may contain lead`], 2, `Some home remedies for empacho contain lead.`],
      [`"Un trabajo" in this context means`, [`a job`, `a hex placed by someone`, `a school task`], 1, `Ask the patient what it means for them and who is involved.`]
    ]
  },
  'idioms-distress': {
    mistakes: [
      [`No se preocupe, todos decimos "ya no puedo más".`, `Cuando dice que ya no puede más, ¿ha pensado en quitarse la vida?`, `Do not explain a distress phrase away; ask directly and calmly.`],
      [`Usted tiene depresión, ¿verdad?`, `¿Qué quiere decir con "estoy decaído"?`, `Patients use their own words, so ask what the words mean before putting a label on them.`],
      [`Un ataque de nervios es un ataque de pánico, así que lo voy a anotar así.`, `Cuénteme cómo fue ese ataque de nervios. ¿Qué pasó antes? ¿Cuánto duró?`, `An ataque de nervios may or may not meet criteria for panic; ask for the details.`]
    ],
    more: [
      [`Me siento como apagado, sin ganas de ver a nadie.`, `I feel switched off, with no desire to see anyone.`],
      [`Se me nubla la mente y pierdo el hilo de lo que decía.`, `My mind clouds over and I lose the thread of what I was saying.`],
      [`Dice que se siente vacío. ¿Me puede explicar cómo es ese vacío?`, `You say you feel empty. Can you explain what that emptiness is like?`],
      [`Me dio mucha pena llegar tarde.`, `I felt very embarrassed about arriving late.`],
      [`Estoy hecho polvo después de trabajar todo el día.`, `I am worn out after working all day.`],
      [`Tengo los nervios de punta antes del examen.`, `My nerves are on edge before the exam.`]
    ],
    quiz: [
      [`"Ando con los nervios de punta" most suggests`, [`feeling very tense or on edge`, `feeling calm`, `feeling sleepy`], 0, `It describes tension; ask how long and how it affects daily life.`],
      [`A patient says "Ya no puedo más." What is the best next step?`, [`Say that everyone feels that way`, `Offer a sleeping pill`, `Ask calmly what this means, including thoughts of ending their life`], 2, `Distress idioms can hide risk, so ask directly.`],
      [`A patient says "Me duele el alma." What is a good first step?`, [`Order a scan of the chest`, `Ask about recent loss, grief and mood`, `Say it is only a figure of speech`], 1, `It often describes grief or emotional pain.`],
      [`Idioms of distress vary by country. What does this mean for the interview?`, [`Use one dictionary for all`, `Assume they mean the same everywhere`, `Ask what the words mean to this patient`], 2, `The same phrase can mean different things in different places.`],
      [`A patient says "Se me nubla la mente." What is the best response?`, [`Call it psychosis`, `Ask when it happens, how long it lasts and what is going on then`, `Say not to worry`], 1, `The phrase may describe worry, dissociation or medical causes, so ask for details.`],
      [`"Estoy desanimado" most suggests`, [`low mood or discouragement`, `anger`, `hearing voices`], 0, `Desanimado is low mood or loss of heart; ask about sleep, appetite and interest.`]
    ]
  },
  'false-friends': {
    mistakes: [
      [`¿Está constipado desde hace tres días?`, `¿Está estreñido desde hace tres días?`, `Constipado means a head cold in many countries; estreñido is constipation.`],
      [`¿Cuándo realizó que estaba enfermo?`, `¿Cuándo se dio cuenta de que estaba enfermo?`, `Realizar means to carry out; "to realize" is darse cuenta.`],
      [`Mi familia me soporta mucho.`, `Mi familia me apoya mucho.`, `Soportar means to put up with; "to support" is apoyar.`]
    ],
    more: [
      [`¿Ha tomado alcohol hoy? ¿Ha estado borracho esta semana?`, `Have you had alcohol today? Have you been drunk this week?`],
      [`¿Tiene estreñimiento o diarrea?`, `Do you have constipation or diarrhea?`],
      [`Mi hermano está muy acelerado: casi no duerme y habla sin parar.`, `My brother is very revved up: he hardly sleeps and talks nonstop.`],
      [`Fui a la biblioteca a sacar un libro.`, `I went to the library to borrow a book.`],
      [`Necesito un jabón y una toalla.`, `I need soap and a towel.`],
      [`La carpeta azul tiene sus papeles.`, `The blue folder has your papers.`]
    ],
    quiz: [
      [`Which word means "library"?`, [`librería`, `libraría`, `biblioteca`], 2, `Librería is a bookshop.`],
      [`Which word means "soap"?`, [`jabón`, `sopa`, `ropa`], 0, `Sopa is soup and ropa is clothes.`],
      [`Which English word is closest to "compromiso con el tratamiento"?`, [`compromise`, `commitment`, `contract`], 1, `Compromiso is commitment; a compromise is un acuerdo.`],
      [`"El paciente discutió con su hermano" means`, [`the patient calmly discussed it with his brother`, `the patient argued with his brother`, `the patient discovered his brother`], 1, `Discutir means to argue; to discuss calmly is hablar de.`],
      [`Which verb is natural for "Take off the patch"?`, [`Quítese el parche.`, `Remueva el parche.`, `Introduzca el parche.`], 0, `Quitar is to remove; remover means to stir.`],
      [`"Un largo viaje" is`, [`a large trip`, `a late trip`, `a long trip`], 2, `Largo means long; large is grande.`]
    ]
  },
  'interpreting': {
    mistakes: [
      [`Su hijo de diez años puede traducir, ¿verdad?`, `Vamos a usar un intérprete certificado para que su hijo no tenga que traducir.`, `Children should not interpret except in a true emergency with no other option.`],
      [`Como habla un poco de inglés, no necesita intérprete.`, `Usted tiene derecho a un intérprete sin costo. ¿Lo quiere?`, `Limited English still calls for an offer of a qualified interpreter, free of charge.`],
      [`Mi español es suficiente para evaluar su seguridad.`, `Para evaluar bien su seguridad, vamos a usar un intérprete médico certificado.`, `Risk assessment is a high-stakes interview that needs a certified interpreter unless you are qualified in Spanish.`]
    ],
    more: [
      [`Soy la doctora Navarro. Esta persona es la intérprete y va a decir todo lo que digamos.`, `I am Dr. Navarro. This person is the interpreter and will say everything we say.`],
      [`Todo lo que usted diga es confidencial, también con el intérprete.`, `Everything you say is confidential, including with the interpreter.`],
      [`Si algo no se entiende, dígame y lo repetimos.`, `If something is not understood, tell me and we will repeat it.`],
      [`¿Me puede escribir la dirección?`, `Can you write the address for me?`],
      [`No entendí la palabra. ¿Qué significa?`, `I did not understand the word. What does it mean?`],
      [`El teléfono no se escucha bien. ¿Puede acercarse al micrófono?`, `The phone is hard to hear. Can you move closer to the microphone?`]
    ],
    quiz: [
      [`A patient's husband offers to translate and answers for her. What is a good response?`, [`Let him continue`, `Thank him, offer a certified interpreter and speak with her alone at some point`, `Ask him to leave without explanation`], 1, `Family may give history but should not filter the patient's own account.`],
      [`While the interpreter speaks, you should look at`, [`the interpreter`, `the screen`, `the patient`], 2, `Face the patient and speak to the patient in first person.`],
      [`For a rating scale in Spanish, you should`, [`use the published Spanish translation`, `translate each item yourself`, `ask the interpreter to improvise`], 0, `A paraphrased item is a different item.`],
      [`The interpreter says a term has no direct equivalent. What do you do?`, [`Ask the interpreter to explain the concept`, `Skip the term`, `Use a family member instead`], 0, `Flagged terms are a reason to explore meaning.`],
      [`A bilingual nurse offers to interpret. When is this appropriate?`, [`When she is free`, `When the patient likes her`, `When she is qualified and assigned as an interpreter`], 2, `Only qualified, assigned interpreters should interpret.`],
      [`The patient's speech is disorganized. The interpreter should`, [`tidy up the sentences`, `interpret exactly, keeping the disorganization`, `summarize`], 1, `The way the patient speaks is clinical data.`]
    ]
  }
});
