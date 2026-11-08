/* Reading passages with glossary and comprehension questions.
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician once populated.
   Shape: window.READING = [ { id, level, title (Spanish), titleEn, tl: [Spanish paragraphs], en: [English paragraphs, same count], gloss: [[spanish, english]], q: [[question (Spanish), [options], correctIndex, explanation]], psych?: true } ] */
window.READING = [
{
id: "mi-familia", level: "A1", title: "Mi familia", titleEn: "My family",
tl: [
"Me llamo Rosa Delgado y tengo cuarenta y dos años. Vivo en una casa pequeña con mi esposo, Manuel, y mis tres hijos. Somos de México, pero ahora vivimos en Texas.",
"Mi esposo trabaja en la construcción. Yo trabajo en una escuela, en la cocina. Mi hija mayor, Daniela, tiene diecisiete años y estudia en la preparatoria. Mi hijo Mateo tiene doce años. La bebé, Lupita, tiene dos años.",
"Mi mamá también vive con nosotros. Se llama Carmen y tiene setenta años. Ella cuida a la bebé cuando nosotros trabajamos. Tiene diabetes y toma pastillas todos los días.",
"Los domingos vamos a la iglesia por la mañana. Después, toda la familia come en la casa. Mi mamá prepara pozole o caldo de pollo. Mis hermanos y mis primos también vienen a la comida. Es el mejor día de la semana."
],
en: [
"My name is Rosa Delgado and I am forty-two years old. I live in a small house with my husband, Manuel, and my three children. We are from Mexico, but now we live in Texas.",
"My husband works in construction. I work at a school, in the kitchen. My oldest daughter, Daniela, is seventeen and goes to high school. My son Mateo is twelve. The baby, Lupita, is two.",
"My mother also lives with us. Her name is Carmen and she is seventy years old. She takes care of the baby when we work. She has diabetes and takes pills every day.",
"On Sundays we go to church in the morning. Afterward, the whole family eats at home. My mother makes pozole or chicken soup. My brothers and my cousins also come to the meal. It is the best day of the week."
],
gloss: [["esposo","husband"],["hijos","children"],["construcción","construction"],["preparatoria","high school (Mexico, US Spanish)"],["cuidar","to take care of"],["iglesia","church"],["comida","the main midday meal (also: food)"],["primos","cousins"]],
q: [
["¿Dónde trabaja Rosa?",["En una escuela","En la construcción","En una iglesia"],0,"Rosa works in a school kitchen. Her husband works in construction."],
["¿Cuántos años tiene Mateo?",["Diecisiete","Dos","Doce"],2,"Mateo is twelve. Daniela is seventeen and Lupita is two."],
["¿Quién cuida a la bebé?",["La hija mayor","La abuela Carmen","El esposo"],1,"Rosa's mother, Carmen, cares for the baby while the parents work."],
["¿Qué hace la familia los domingos?",["Va a la iglesia y luego come junta","Trabaja en la escuela","Viaja a México"],0,"They go to church, then eat together at home."]
]
},
{
id: "la-cita", level: "A1", title: "La cita en la clínica", titleEn: "The appointment at the clinic",
tl: [
"Hoy tengo una cita en la clínica a las nueve de la mañana. Llego quince minutos antes. La clínica está en la calle Quinta, cerca del parque.",
"En la entrada hay una recepción. La señorita me dice: «Buenos días. ¿Su nombre, por favor?». Le doy mi nombre y mi fecha de nacimiento. Ella me pide mi tarjeta del seguro y una identificación.",
"Me da un formulario y un bolígrafo. Escribo mi dirección y mi teléfono. Luego me siento en la sala de espera. Hay sillas, revistas y una televisión pequeña.",
"Después de diez minutos, una enfermera abre la puerta. Dice: «Carlos Mendoza». Yo me levanto. La enfermera sonríe y dice: «Pase por aquí, por favor». Me pesa y me toma la presión. Luego espero al doctor en el consultorio."
],
en: [
"Today I have an appointment at the clinic at nine in the morning. I arrive fifteen minutes early. The clinic is on Fifth Street, near the park.",
"At the entrance there is a front desk. The young woman says to me: “Good morning. Your name, please?” I give her my name and my date of birth. She asks me for my insurance card and an ID.",
"She gives me a form and a pen. I write my address and my phone number. Then I sit in the waiting room. There are chairs, magazines and a small television.",
"After ten minutes, a nurse opens the door. She says: “Carlos Mendoza.” I stand up. The nurse smiles and says: “Come this way, please.” She weighs me and takes my blood pressure. Then I wait for the doctor in the exam room."
],
gloss: [["la cita","the appointment"],["el seguro","insurance"],["la tarjeta","the card"],["la sala de espera","the waiting room"],["el formulario","the form"],["la enfermera","the nurse"],["el consultorio","the exam room, office"],["la presión","blood pressure"],["la fecha de nacimiento","date of birth"]],
q: [
["¿A qué hora es la cita?",["A las diez","A las nueve","A las cinco"],1,"The appointment is at nine. He arrives fifteen minutes early."],
["¿Qué le pide la recepcionista?",["Su tarjeta del seguro","Su bolígrafo","Su dinero"],0,"She asks for the insurance card and an ID."],
["¿Dónde espera Carlos?",["En el parque","En el consultorio desde el principio","En la sala de espera"],2,"He waits in the waiting room first, then in the exam room."],
["¿Qué hace la enfermera?",["Llama su nombre y toma su presión","Escribe el formulario","Le da la medicina"],0,"The nurse calls his name, weighs him and takes his blood pressure."]
]
},
{
id: "la-farmacia", level: "A2", title: "En la farmacia", titleEn: "At the pharmacy",
tl: [
"El señor Aguirre llega a la farmacia con una receta nueva. Le da la receta y su tarjeta del seguro al farmacéutico. El farmacéutico busca la medicina y dice que va a tardar diez minutos.",
"Cuando vuelve, le muestra la botella. En la etiqueta dice: «Risperidona 1 mg. Tome una tableta por la boca cada 12 horas con comida. Puede causar sueño». El farmacéutico explica: «Tome una en la mañana y otra en la noche, siempre con comida».",
"«No maneje si tiene mucho sueño», dice. «Guarde la botella lejos de los niños. Si se le olvida una dosis, tómela cuando se acuerde, pero no tome dos juntas».",
"El señor Aguirre pregunta: «¿Y si me siento bien? ¿Puedo dejarla?». El farmacéutico contesta: «No deje de tomarla sin hablar con su doctor. Usted se siente mejor gracias a la medicina. Si la deja de repente, los problemas pueden volver».",
"Antes de irse, el farmacéutico le da un folleto en español y el número de teléfono de la farmacia. «Si tiene preguntas, llámenos», le dice."
],
en: [
"Mr. Aguirre arrives at the pharmacy with a new prescription. He gives the prescription and his insurance card to the pharmacist. The pharmacist looks for the medicine and says it will take ten minutes.",
"When he comes back, he shows him the bottle. The label says: “Risperidone 1 mg. Take one tablet by mouth every 12 hours with food. May cause drowsiness.” The pharmacist explains: “Take one in the morning and another at night, always with food.”",
"“Do not drive if you are very sleepy,” he says. “Keep the bottle away from children. If you forget a dose, take it when you remember, but do not take two together.”",
"Mr. Aguirre asks: “And if I feel well? Can I stop it?” The pharmacist answers: “Do not stop taking it without talking to your doctor. You feel better thanks to the medicine. If you stop suddenly, the problems can come back.”",
"Before leaving, the pharmacist gives him a leaflet in Spanish and the pharmacy's phone number. “If you have questions, call us,” he says."
],
gloss: [["la receta","the prescription"],["la etiqueta","the label"],["la tableta, la pastilla","the tablet, the pill"],["cada 12 horas","every 12 hours"],["con comida","with food"],["la dosis","the dose"],["no deje de tomarla","do not stop taking it"],["se le olvida","you forget (it slips your mind)"],["de repente","suddenly"],["el folleto","the leaflet"]],
q: [
["¿Cada cuánto debe tomar la medicina el señor Aguirre?",["Cada 12 horas","Una vez a la semana","Cada 24 horas"],0,"The label says every 12 hours: once in the morning and once at night."],
["¿Cómo debe tomar la medicina?",["Sin comida","Con comida","Solo en la noche"],1,"Always with food."],
["¿Qué debe hacer si se le olvida una dosis?",["Tomar dos juntas","Dejar la medicina","Tomarla cuando se acuerde"],2,"Take it when he remembers, but never two doses together."],
["¿Por qué no debe dejar la medicina?",["Porque los problemas pueden volver","Porque es muy cara","Porque la farmacia lo pide"],0,"Stopping suddenly can bring the symptoms back, even if he feels well."]
]
},
{
id: "mi-hijo-cambio", level: "A2", psych: true, title: "Mi hijo cambió", titleEn: "My son changed",
tl: [
"Mi hijo Andrés tiene diecinueve años. Hace tres meses era un muchacho alegre. Trabajaba en un taller con su tío y salía con sus amigos los fines de semana.",
"Primero dejó de salir. Después empezó a dormir poco. Pasa la noche despierto y el día encerrado en su cuarto. Casi no come. Antes comía conmigo todos los días, pero ahora dice que no tiene hambre.",
"Hace un mes dejó de ir al trabajo. Su tío me llamó y me dijo que Andrés ya no contestaba el teléfono. Yo le pregunté qué le pasaba, pero no me quiso decir nada.",
"Lo que más me preocupa es que habla solo. Lo oigo por la puerta, como si hablara con otra persona. Una vez le pregunté con quién hablaba y me dijo: «Con nadie, mamá. Déjame en paz». Después me dijo que oye voces que hablan de él.",
"No sé qué hacer. Tengo miedo, pero también quiero que mi hijo esté bien. Quiero que lo vea un doctor. ¿Nos puede ayudar?"
],
en: [
"My son Andrés is nineteen years old. Three months ago he was a cheerful young man. He worked at a shop with his uncle and went out with his friends on weekends.",
"First he stopped going out. Then he began to sleep little. He stays up at night and spends the day shut in his room. He hardly eats. Before, he ate with me every day, but now he says he is not hungry.",
"A month ago he stopped going to work. His uncle called me and told me that Andrés no longer answered the phone. I asked him what was wrong, but he did not want to tell me anything.",
"What worries me most is that he talks to himself. I hear him through the door, as if he were talking to another person. Once I asked him who he was talking to and he said: “To nobody, Mom. Leave me alone.” Later he told me he hears voices talking about him.",
"I do not know what to do. I am afraid, but I also want my son to be well. I want a doctor to see him. Can you help us?"
],
gloss: [["alegre","cheerful"],["el taller","workshop, repair shop"],["dejó de salir","he stopped going out"],["despierto","awake"],["encerrado","shut in"],["habla solo","he talks to himself"],["las voces","voices"],["me preocupa","it worries me"],["déjame en paz","leave me alone"]],
q: [
["¿Cómo era Andrés hace tres meses?",["Era triste y callado","Era alegre y salía con amigos","Estaba en el hospital"],1,"Three months ago he was cheerful, worked and went out with friends."],
["¿Qué cambió primero?",["Dejó de ir al trabajo","Empezó a oír voces","Dejó de salir"],2,"The order was: stopped going out, then slept little, then stopped working a month ago."],
["¿Qué es lo que más preocupa a la mamá?",["Que come mucho","Que habla solo y oye voces","Que trabaja demasiado"],1,"Talking alone and hearing voices worry her most."],
["¿Qué quiere la mamá?",["Que Andrés cambie de trabajo","Que Andrés viaje","Que un doctor lo vea"],2,"She wants a doctor to see her son."]
]
},
{
id: "carta-de-marisol", level: "B1", psych: true, title: "La carta de Marisol", titleEn: "Marisol's letter",
tl: [
"Estimado doctor: Me llamo Marisol y le escribo esta carta porque me da pena hablar de esto en persona. Es sobre mi papá, que tiene cincuenta y ocho años. Mi papá siempre ha tomado, pero antes sólo los fines de semana.",
"Desde que murió mi abuela, hace dos años, toma todos los días. Empieza en la tarde y a veces no para hasta que se duerme en el sillón. Mi mamá le pide que lo deje y él se enoja. Dice que puede dejarlo cuando quiera, pero nunca lo ha logrado.",
"Hace unas semanas, mi papá dijo que iba a dejar de tomar. Al segundo día, por la mañana, le temblaban tanto las manos que no podía sostener la taza de café. Estaba sudando, no podía comer y decía que sentía el corazón muy rápido. Tomó un trago y se calmó un poco.",
"Dos días después pasó algo peor. Estaba en la cocina cuando se cayó al suelo y empezó a sacudirse. Mi mamá gritó y yo llamé al 911. Duró como dos minutos. En el hospital nos dijeron que fue una convulsión por dejar el alcohol de golpe.",
"Ahora mi papá dice que nunca va a volver a tomar, pero a nosotras nos da miedo. Queremos que reciba ayuda y que no se sienta solo. ¿Qué podemos hacer? Gracias por leer mi carta. Marisol."
],
en: [
"Dear doctor: My name is Marisol and I am writing you this letter because I feel embarrassed to talk about this in person. It is about my father, who is fifty-eight years old. My father has always drunk, but before it was only on weekends.",
"Since my grandmother died two years ago, he drinks every day. He starts in the afternoon and sometimes does not stop until he falls asleep in the armchair. My mother asks him to quit and he gets angry. He says he can quit whenever he wants, but he has never managed to.",
"A few weeks ago, my father said he was going to stop drinking. On the second day, in the morning, his hands shook so much that he could not hold his coffee cup. He was sweating, he could not eat, and he said his heart felt very fast. He had a drink and calmed down a little.",
"Two days later something worse happened. He was in the kitchen when he fell to the floor and began to shake. My mother screamed and I called 911. It lasted about two minutes. At the hospital they told us it was a seizure from stopping alcohol suddenly.",
"Now my father says he will never drink again, but it scares us. We want him to get help and not feel alone. What can we do? Thank you for reading my letter. Marisol."
],
gloss: [["me da pena","I feel embarrassed (Mexico, Central America)"],["tomar","to drink alcohol (also: to take)"],["dejarlo","to quit it"],["temblar","to shake, tremble"],["sudar","to sweat"],["un trago","a drink, a shot"],["sacudirse","to shake, jerk"],["la convulsión","the seizure"],["de golpe","all at once, suddenly"],["sostener","to hold, support"]],
q: [
["¿Por qué Marisol escribe una carta?",["Porque no tiene teléfono","Porque le da pena hablar en persona","Porque el doctor se lo pidió"],1,"“Me da pena” means she feels embarrassed to speak about it face to face."],
["¿Desde cuándo toma todos los días el papá?",["Desde que murió la abuela","Desde hace una semana","Desde que era joven"],0,"He started drinking daily after his mother died, two years ago."],
["¿Qué le pasó al papá el segundo día sin alcohol?",["Se enojó con su esposa","Durmió muy bien","Le temblaban las manos y sudaba"],2,"Shaking, sweating and a fast heart are morning withdrawal signs. A drink made him feel better, which is typical."],
["¿Qué pasó después en la cocina?",["Tuvo una convulsión","Se cortó la mano","Llamó al hospital él solo"],0,"He had a seizure that lasted about two minutes. Marisol called 911."]
]
},
{
id: "hoja-de-alta", level: "B1", psych: true, title: "Hoja de alta para la familia", titleEn: "Discharge sheet for the family",
tl: [
"Su familiar sale del hospital hoy. Esta hoja explica cómo ayudar en casa. Léala con calma y pregunte si algo no está claro.",
"La medicina. Su familiar debe tomar la medicina todos los días, a la misma hora. Una pastilla en la mañana y otra en la noche, con comida. No debe dejarla aunque se sienta mejor. Los primeros días puede tener sueño, la boca seca o mareos. Si estos efectos son fuertes, llame a la clínica. No cambie la dosis por su cuenta.",
"Señales de alarma. Busque ayuda pronto si su familiar duerme muy poco por varias noches, deja de comer, se aísla, oye voces, cree que lo quieren dañar, o habla de hacerse daño o de morir. Si hay peligro inmediato, llame al 911.",
"La línea 988. Si su familiar o usted necesitan hablar con alguien, llamen al 988. Es gratis, está abierta las 24 horas y tiene atención en español: oprima 2. Guarde las medicinas bajo llave y quite de la casa cualquier objeto peligroso.",
"La cita de seguimiento. Su cita es dentro de siete días. Traiga todas las medicinas en sus botellas y una lista de preguntas. Si no puede venir, llame para cambiar la cita. No la cancele sin avisar."
],
en: [
"Your family member leaves the hospital today. This sheet explains how to help at home. Read it calmly and ask if anything is not clear.",
"The medicine. Your family member must take the medicine every day at the same time. One pill in the morning and another at night, with food. They should not stop it even if they feel better. In the first days they may feel sleepy, have a dry mouth or feel dizzy. If these effects are strong, call the clinic. Do not change the dose on your own.",
"Warning signs. Seek help soon if your family member sleeps very little for several nights, stops eating, withdraws from others, hears voices, believes people want to harm them, or talks about hurting themselves or dying. If there is immediate danger, call 911.",
"The 988 line. If your family member or you need to talk to someone, call 988. It is free, open 24 hours, and has Spanish service: press 2. Lock up the medicines and remove any dangerous objects from the home.",
"The follow-up appointment. Your appointment is in seven days. Bring all the medicines in their bottles and a list of questions. If you cannot come, call to change the appointment. Do not cancel without telling us."
],
gloss: [["la hoja de alta","discharge sheet"],["los mareos","dizziness"],["por su cuenta","on your own"],["las señales de alarma","warning signs"],["aislarse","to withdraw, isolate oneself"],["hacerse daño","to hurt oneself"],["bajo llave","locked up"],["el seguimiento","follow-up"],["oprima 2","press 2"]],
q: [
["¿Cuándo debe tomar la medicina el paciente?",["Solo cuando se siente mal","Todos los días a la misma hora","Una vez por semana"],1,"Daily, at the same time, even if the patient feels better."],
["¿Qué debe hacer la familia si los efectos de la medicina son fuertes?",["Cambiar la dosis","Llamar a la clínica","Dejar la medicina"],1,"Call the clinic. Never change the dose alone."],
["¿Cuál es una señal de alarma?",["Dormir ocho horas","Comer con la familia","Hablar de hacerse daño o de morir"],2,"Talk of self-harm or death is a warning sign. Call 911 if there is immediate danger."],
["¿Cómo se pide atención en español en el 988?",["Se oprime 2","Se oprime 9","Se manda un correo"],0,"At 988, press 2 for Spanish."]
]
},
{
id: "la-llamada", level: "B1", psych: true, title: "La llamada", titleEn: "The call",
tl: [
"Era casi la medianoche cuando María tomó el teléfono. Llevaba tres días sin dormir bien y esa noche había pensado en quitarse la vida. Tenía miedo de sus propios pensamientos. Marcó el 988.",
"Una voz grabada dijo: «Para español, oprima 2». María oprimió el 2 y esperó unos segundos. Luego contestó una consejera: «Línea 988, habla Sofía. Gracias por llamar. ¿Cómo se llama usted?».",
"La consejera no tenía prisa. Le dijo a María que estaba ahí para escucharla. Le preguntó: «¿Qué pasó hoy?». María lloró un rato antes de contestar. Contó que había perdido su trabajo y que se sentía una carga para sus hijos.",
"Después la consejera hizo preguntas directas: «¿Tiene pensamientos de quitarse la vida? ¿Tiene un plan? ¿Tiene pastillas o algún arma a la mano?». María dijo que sí tenía pensamientos, pero que no iba a hacer nada esa noche. La consejera le pidió que guardara las pastillas en otro cuarto.",
"Al final hicieron un plan: hablar con su hermana por la mañana, pedir una cita con un doctor y volver a llamar si empeoraba. María colgó más tranquila. No todo estaba resuelto, pero ya no estaba sola."
],
en: [
"It was almost midnight when María picked up the phone. She had not slept well for three days and that night she had thought about taking her own life. She was afraid of her own thoughts. She dialed 988.",
"A recorded voice said: “For Spanish, press 2.” María pressed 2 and waited a few seconds. Then a counselor answered: “988 line, this is Sofía. Thank you for calling. What is your name?”",
"The counselor was in no hurry. She told María she was there to listen. She asked: “What happened today?” María cried for a while before answering. She said she had lost her job and felt like a burden to her children.",
"Then the counselor asked direct questions: “Are you having thoughts of killing yourself? Do you have a plan? Do you have pills or a weapon within reach?” María said she did have thoughts, but that she was not going to do anything tonight. The counselor asked her to put the pills in another room.",
"At the end they made a plan: talk to her sister in the morning, ask for an appointment with a doctor, and call again if she got worse. María hung up calmer. Not everything was solved, but she was no longer alone."
],
gloss: [["quitarse la vida","to take one's own life"],["marcar","to dial"],["oprimir","to press (a button)"],["la consejera","the counselor"],["no tenía prisa","she was in no hurry"],["una carga","a burden"],["a la mano","within reach"],["el arma","the weapon"],["empeorar","to get worse"],["colgar","to hang up"]],
q: [
["¿Por qué llamó María al 988?",["Pensó en quitarse la vida","Quería una cita de dentista","Perdió su teléfono"],0,"She had thought about suicide and was afraid of her own thoughts."],
["¿Qué hizo María para hablar en español?",["Colgó y llamó otra vez","Esperó sin oprimir nada","Oprimió el 2"],2,"The recording said to press 2 for Spanish."],
["¿Qué preguntó la consejera sobre las pastillas y las armas?",["Si estaban cerca de María","Si eran caras","Si eran de su hermana"],0,"“A la mano” means within reach. Asking about access to means is part of the safety questions."],
["¿Qué plan hicieron?",["Esperar una semana","Hablar con su hermana, pedir una cita y llamar si empeoraba","Cambiar de trabajo esa noche"],1,"The plan: sister in the morning, a doctor's appointment, and call back if worse."]
]
},
{
id: "nervios-y-trabajo", level: "B1", psych: true, title: "Nervios y trabajo", titleEn: "Nerves and work",
tl: [
"Me llamo Yolanda y llegué a este país hace cuatro años. Dejé mi pueblo en Michoacán y a mi hija, que tenía cinco años. Vine para trabajar y mandar dinero a mi familia.",
"Trabajo en un hotel, limpiando cuartos por la mañana, y en un restaurante por la noche. Duermo cuatro o cinco horas. Mando dinero a mi mamá cada mes. Casi no veo a mis amigas y extraño mucho a mi hija, que se quedó con mi mamá.",
"Desde hace un año tengo nervios. Me duele la cabeza, siento el estómago apretado y no puedo parar de pensar. Mi mamá dice que es de tanto preocuparme. Yo creo que es de tanto trabajar.",
"Un martes, en el hotel, de repente me faltó el aire. El corazón me latía muy rápido, me temblaban las manos y sentí que me iba a morir. Salí al pasillo y me senté en el piso. Una compañera me trajo agua. Pasaron veinte minutos y poco a poco me tranquilicé.",
"No fui al doctor. Tengo miedo de que me pregunten por mis papeles y de que me deporten. Pero ayer una amiga me dijo que en la clínica no preguntan por papeles para atenderme y que mi información es privada. Quiero ir, pero todavía tengo miedo."
],
en: [
"My name is Yolanda and I came to this country four years ago. I left my town in Michoacán and my daughter, who was five years old. I came to work and send money to my family.",
"I work at a hotel, cleaning rooms in the morning, and at a restaurant at night. I sleep four or five hours. I send money to my mother every month. I hardly see my friends and I miss my daughter a lot, who stayed with my mother.",
"For a year I have had nervios. My head hurts, my stomach feels tight and I cannot stop thinking. My mother says it is from worrying so much. I think it is from working so much.",
"One Tuesday, at the hotel, I suddenly could not breathe. My heart was beating very fast, my hands were shaking and I felt I was going to die. I went out to the hallway and sat on the floor. A coworker brought me water. Twenty minutes passed and little by little I calmed down.",
"I did not go to the doctor. I am afraid they will ask me about my papers and that I will be deported. But yesterday a friend told me that at the clinic they do not ask about papers to treat me and that my information is private. I want to go, but I am still afraid."
],
gloss: [["los nervios","nerves (a common label for anxiety and distress)"],["extrañar","to miss (someone)"],["apretado","tight"],["me faltó el aire","I could not catch my breath"],["latir","to beat (heart)"],["temblar","to shake"],["tranquilizarse","to calm down"],["los papeles","immigration papers (colloquial)"],["deportar","to deport"],["mandar dinero","to send money home"]],
q: [
["¿Por qué vino Yolanda a este país?",["Para estudiar","Para trabajar y mandar dinero","Para visitar a su hija"],1,"She came to work and send money to her family."],
["¿Qué significa «tengo nervios» para Yolanda?",["Tiene dolor de cabeza, estómago apretado y preocupación","Tiene una infección","Tiene mucho sueño por la mañana"],0,"“Nervios” is her word for anxiety symptoms: headache, tight stomach, constant worry."],
["¿Qué sintió Yolanda en el hotel?",["Hambre y sueño","Falta de aire, corazón rápido y miedo de morir","Alegría y energía"],1,"These are typical panic attack symptoms. They lasted about twenty minutes."],
["¿Por qué no fue al doctor?",["No tiene tiempo","Su mamá no quiere","Tiene miedo de que le pregunten por sus papeles"],2,"Fear of immigration consequences keeps many patients from care. Her friend says the clinic keeps information private."]
]
},
{
id: "el-curandero", level: "B2", psych: true, title: "El curandero y la clínica", titleEn: "The healer and the clinic",
tl: [
"Joel tiene veintidós años. Hace dos meses empezó a decir que alguien le había hecho un mal. No dormía, no quería comer y decía que sentía una sombra en el cuarto. Su abuela pensó que era un susto fuerte, o que alguien le había hecho un daño.",
"La familia decidió llevarlo primero con un curandero, don Ramiro, que vive a una hora del pueblo. Don Ramiro le hizo una limpia con hierbas y un huevo, rezó y le dio un té. Dijo que Joel tenía un susto y que debía descansar. Esa noche Joel durmió un poco mejor.",
"Pero una semana después los síntomas regresaron y empeoraron. Joel dijo que oía voces que lo insultaban. Entonces su mamá, Elvira, recordó que una comadre había ido a una clínica de salud mental. Elvira no quería dejar lo que decía don Ramiro, pero tenía miedo.",
"En la clínica, la doctora escuchó a la familia con respeto. Preguntó qué pensaban ellos sobre la causa del problema y no dijo que estaban equivocados. Explicó que ella veía una enfermedad llamada psicosis, que afecta al cerebro y que se puede tratar con medicina y apoyo. Joel y su familia escucharon con atención.",
"Al final, la familia decidió hacer las dos cosas. Joel toma su medicina todos los días y su abuela sigue rezando por él. La doctora dijo que no hay problema con la oración ni con los tés, mientras no reemplacen la medicina. Para la familia, la salud tiene explicaciones del cuerpo y también del espíritu, y las dos importan."
],
en: [
"Joel is twenty-two years old. Two months ago he began to say that someone had put a curse on him. He was not sleeping, did not want to eat and said he felt a shadow in the room. His grandmother thought it was a strong susto, or that someone had done him harm.",
"The family decided to take him first to a healer, don Ramiro, who lives an hour from the town. Don Ramiro did a cleansing (limpia) with herbs and an egg, prayed and gave him a tea. He said Joel had a susto and needed to rest. That night Joel slept a little better.",
"But a week later the symptoms came back and got worse. Joel said he heard voices insulting him. Then his mother, Elvira, remembered that a close family friend had gone to a mental health clinic. Elvira did not want to give up what don Ramiro said, but she was afraid.",
"At the clinic, the doctor listened to the family with respect. She asked what they thought was the cause of the problem and did not say they were wrong. She explained that she saw an illness called psychosis, which affects the brain and can be treated with medicine and support. Joel and his family listened carefully.",
"In the end, the family decided to do both. Joel takes his medicine every day and his grandmother keeps praying for him. The doctor said there is no problem with prayer or teas, as long as they do not replace the medicine. For the family, health has explanations of the body and also of the spirit, and both matter."
],
gloss: [["el curandero","traditional healer"],["la limpia","cleansing ritual"],["el susto","fright illness (soul loss, folk concept)"],["hacer un daño, un mal","to put a curse or harm on someone"],["la comadre","close family friend, child's godmother"],["rezar","to pray"],["empeorar","to get worse"],["la psicosis","psychosis"],["equivocado","mistaken, wrong"],["reemplazar","to replace"]],
q: [
["¿A quién llevó primero la familia a Joel?",["A un curandero","A la clínica","A la escuela"],0,"They went to don Ramiro first. Many families try traditional care first."],
["¿Qué pasó una semana después?",["Joel se curó","Los síntomas empeoraron y oía voces","Joel viajó con su abuela"],1,"The symptoms returned and got worse, with insulting voices."],
["¿Cómo actuó la doctora con la familia?",["Dijo que estaban equivocados","Les pidió que olvidaran a don Ramiro","Escuchó con respeto y preguntó qué pensaban"],2,"She asked about their explanation and did not dismiss it. This builds trust."],
["¿Qué decidió la familia al final?",["Hacer las dos cosas","Dejar la medicina","Dejar el rezo"],0,"Medicine daily plus prayer. Prayer and teas are fine if they do not replace the medicine."]
]
},
{
id: "dichos", level: "B2", title: "Dichos que usan los pacientes", titleEn: "Sayings patients use",
tl: [
"Muchos pacientes explican lo que sienten con refranes. «Más vale pájaro en mano que ciento volando» significa que es mejor tener algo seguro que arriesgarse por algo mejor. Un paciente lo dice para explicar por qué no quiere cambiar de medicina. «A quien madruga Dios lo ayuda» significa que trabajar temprano trae suerte. Alguien con insomnio puede decirlo con tristeza: se levanta a las cuatro, pero no se siente ayudado.",
"«Dime con quién andas y te diré quién eres» significa que uno se parece a sus amigos. Un padre lo usa cuando está preocupado por las compañías de su hijo. «No hay mal que por bien no venga» significa que de las cosas malas puede salir algo bueno. Una paciente que perdió su trabajo y ahora busca ayuda puede decirlo con esperanza.",
"«El que no llora no mama» significa que si uno no pide, no recibe. Muchos pacientes lo creen y piden ayuda con mucho dolor o con dramatismo. Otros piensan lo contrario y callan su dolor. «Camarón que se duerme se lo lleva la corriente» significa que hay que estar alerta para no perder la oportunidad. Un paciente que trabaja sin descanso lo dice para justificar que no puede parar.",
"«Al mal tiempo, buena cara» significa que hay que sonreír cuando las cosas van mal. Es común en pacientes que sufren y no lo muestran. «Dios aprieta pero no ahorca» significa que Dios manda pruebas difíciles, pero no más de lo que uno puede aguantar. Da esperanza a muchos pacientes. Pregunte igual por el suicidio: una persona puede decir esta frase y sentir que ya no aguanta más.",
"«Mal de muchos, consuelo de tontos» significa que saber que otros sufren lo mismo no quita el dolor propio. Un paciente lo dice cuando le dicen que «todos tienen problemas». «No hay mal que dure cien años» significa que todo problema termina algún día. Es una frase de esperanza, y también puede ayudar a la persona a hablar de qué cambiaría si el mal terminara."
],
en: [
"Many patients explain what they feel with sayings. “A bird in the hand is worth a hundred flying” means it is better to have something certain than to risk it for something better. A patient says it to explain why they do not want to change medicines. “God helps the one who rises early” means that working early brings luck. Someone with insomnia may say it sadly: they get up at four, but they do not feel helped.",
"“Tell me who you walk with and I will tell you who you are” means a person resembles their friends. A parent uses it when worried about their son's company. “There is no bad that does not bring good” means something good can come out of bad things. A patient who lost a job and now seeks help may say it with hope.",
"“He who does not cry does not nurse” means that if you do not ask, you do not receive. Many patients believe it and ask for help with a lot of pain or drama. Others believe the opposite and keep their pain quiet. “A shrimp that falls asleep is carried away by the current” means you must stay alert so you do not lose the opportunity. A patient who works without rest says it to justify that they cannot stop.",
"“In bad weather, a good face” means you should smile when things go badly. It is common in patients who suffer and do not show it. “God squeezes but does not strangle” means God sends hard tests, but not more than a person can bear. It gives many patients hope. Ask about suicide anyway: a person can say this phrase and feel they cannot bear any more.",
"“Misery of many, comfort of fools” means knowing that others suffer the same does not remove your own pain. A patient says it when told that “everybody has problems.” “No evil lasts a hundred years” means every problem ends some day. It is a phrase of hope, and it can also help the person talk about what would change if the trouble ended."
],
gloss: [["el refrán, el dicho","proverb, saying"],["arriesgarse","to take a risk"],["madrugar","to get up early"],["mamar","to nurse (suckle)"],["la corriente","the current"],["aguantar","to put up with, bear"],["ahorcar","to hang, strangle"],["el consuelo","comfort"],["la esperanza","hope"],["callar","to keep quiet"]],
q: [
["¿Qué significa «El que no llora no mama»?",["Que hay que pedir ayuda para recibirla","Que los bebés no deben llorar","Que hay que callar el dolor"],0,"If you do not ask, you do not receive. It is about asking for help."],
["Un paciente dice «Dios aprieta pero no ahorca». ¿Qué debe hacer el clínico?",["Dejar de preguntar","Dar las gracias y cambiar de tema","Preguntar igual por el suicidio"],2,"The phrase gives hope, but it can also hide a person who feels they cannot bear more."],
["«Camarón que se duerme se lo lleva la corriente» se usa para...",["decir que hay que descansar más","justificar que no se puede parar de trabajar","hablar de comida"],1,"It means stay alert or lose the chance. Overworked patients use it to explain why they cannot stop."],
["«Mal de muchos, consuelo de tontos» significa que...",["otros sufren, pero eso no quita mi dolor","todos deben tener el mismo problema","hay que consolar a los tontos"],0,"Knowing others suffer the same does not ease your own pain."]
]
}
];
