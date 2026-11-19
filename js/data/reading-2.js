/* More reading passages (pass 10), appended to window.READING.
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Shape: { id, level, title (Spanish), titleEn, tl: [Spanish paragraphs], en: [English paragraphs, same count],
            gloss: [[spanish, english]], q: [[question (English), [options], correctIndex, explanation]], psych?: true }
   Ids are permanent: append only after release. Listening questions for these ids: listen-questions-2.js. */
window.READING = (window.READING || []).concat([
{
id: "un-dia-en-el-hospital", level: "A1", title: "Un día en el hospital", titleEn: "A day in the hospital",
tl: [
"Me llamo Jorge y estoy en el hospital. Hoy es mi tercer día. Mi cuarto es pequeño, pero está limpio. Tengo una cama, una mesa y una ventana.",
"A las siete de la mañana una enfermera me toma la presión y me da la medicina. A las ocho desayunamos en el comedor. Hay pan, huevos y café con leche. Después hablo con la doctora Navarro. Ella me pregunta si duermo bien y cómo me siento.",
"A las once hay un grupo en la sala. Hablamos, dibujamos o caminamos en el patio. A la una comemos. Por la tarde veo la televisión, leo o descanso. A las cuatro viene mi hermana a visitarme.",
"A las nueve de la noche tomo mi medicina otra vez. Me lavo los dientes y me acuesto. Aquí hay horarios, y eso me ayuda. Hoy me siento un poco mejor."
],
en: [
"My name is Jorge and I am in the hospital. Today is my third day. My room is small, but it is clean. I have a bed, a table and a window.",
"At seven in the morning a nurse takes my blood pressure and gives me my medicine. At eight we have breakfast in the dining room. There is bread, eggs and coffee with milk. Then I talk with Dr. Navarro. She asks me if I sleep well and how I feel.",
"At eleven there is a group in the day room. We talk, draw or walk in the yard. At one we have lunch. In the afternoon I watch television, read or rest. At four my sister comes to visit me.",
"At nine at night I take my medicine again. I brush my teeth and go to bed. Here there are schedules, and that helps me. Today I feel a little better."
],
gloss: [["la enfermera","the nurse"],["la presión","blood pressure"],["desayunar","to have breakfast"],["el comedor","the dining room"],["el grupo","the group (session)"],["el patio","the yard, courtyard"],["descansar","to rest"],["visitar","to visit"],["acostarse","to go to bed"],["el horario","the schedule"]],
q: [
["Which person gives Jorge his medicine in the morning?",["The doctor","His sister","A nurse"],2,"At seven a nurse takes his blood pressure and gives him his medicine."],
["What does Jorge do at eleven?",["He goes to a group","He has lunch","He sees his sister"],0,"At eleven there is a group in the day room."],
["What time does his sister visit?",["At one","At four","At nine"],1,"His sister comes at four in the afternoon."],
["How does Jorge feel at the end of the day?",["Worse than before","Very angry","A little better"],2,"He says he feels a little better. The schedule helps him."]
]
},
{
id: "mensaje-a-mi-hermana", level: "A1", title: "Un mensaje a mi hermana", titleEn: "A message to my sister",
tl: [
"Hola, Lety. ¿Estás en casa? Mañana tengo mi primera cita en la clínica. Es a las dos de la tarde.",
"Tengo un poco de miedo. No conozco a la doctora. ¿Puedes venir conmigo? La clínica está en la calle Hidalgo, cerca del mercado.",
"Tengo que llevar mi tarjeta del seguro y mis medicinas. También quiero llevar una lista de preguntas. A veces, en la cita, no recuerdo nada.",
"Gracias, hermana. Tú siempre me ayudas. Te quiero mucho. Yesenia",
"Hola, Yesenia. Sí, voy contigo. Paso por ti a la una y media. ¡Tranquila! Vas a estar bien. Yo te espero afuera o entro contigo, como tú quieras."
],
en: [
"Hi, Lety. Are you home? Tomorrow I have my first appointment at the clinic. It is at two in the afternoon.",
"I am a little afraid. I do not know the doctor. Can you come with me? The clinic is on Hidalgo Street, near the market.",
"I have to bring my insurance card and my medicines. I also want to bring a list of questions. Sometimes, at the appointment, I do not remember anything.",
"Thank you, sister. You always help me. I love you very much. Yesenia",
"Hi, Yesenia. Yes, I will go with you. I will pick you up at one thirty. Relax! You are going to be fine. I can wait outside or come in with you, whichever you want."
],
gloss: [["la primera cita","the first appointment"],["conmigo","with me"],["la tarjeta del seguro","the insurance card"],["la lista","the list"],["a veces","sometimes"],["recordar","to remember"],["paso por ti","I will come by for you"],["tranquila","calm, relax (to a woman)"],["afuera","outside"],["como tú quieras","however you want"]],
q: [
["What day and time is Yesenia's appointment?",["Tomorrow at two in the afternoon","Today at two in the afternoon","Tomorrow at one thirty"],0,"The appointment is tomorrow at two. One thirty is when Lety will pick her up."],
["Why is Yesenia nervous?",["She lost her card","She does not know the doctor","She does not like the market"],1,"She says she is a little afraid because she does not know the doctor."],
["What will Yesenia bring?",["Only her phone","A friend and some food","Her insurance card, her medicines and a list of questions"],2,"She has to bring her card and medicines, and she wants a list of questions."],
["What does Lety answer?",["She cannot come","She will come and pick her up","She will meet her at the market"],1,"Lety says yes, she will go with her and pick her up at one thirty."]
]
},
{
id: "la-sala-de-espera", level: "A1", title: "La sala de espera", titleEn: "The waiting room",
tl: [
"Estoy en la sala de espera de la clínica. Es una sala grande con muchas sillas azules. Hay ocho personas. Hay un niño con su mamá y dos señores mayores.",
"En la pared hay un reloj y una pantalla con números. Mi número es el catorce. Ahora la pantalla dice doce. Tengo que esperar un poco.",
"A mi lado hay una señora con un bebé. El bebé llora, pero la señora está tranquila. Ella me pregunta: «¿Es su primera vez aquí?». Yo digo que sí.",
"Una enfermera abre la puerta y dice un nombre. No es mi nombre. Todos miramos la pantalla. Después de cinco minutos, la pantalla dice catorce. La enfermera dice: «¿Ramiro?».",
"Me levanto y sigo a la enfermera. Estoy un poco nervioso, pero respiro despacio. Pronto veo a la doctora."
],
en: [
"I am in the clinic waiting room. It is a big room with many blue chairs. There are eight people. There is a boy with his mother and two older men.",
"On the wall there is a clock and a screen with numbers. My number is fourteen. Right now the screen says twelve. I have to wait a little.",
"Next to me there is a woman with a baby. The baby is crying, but the woman is calm. She asks me: “Is this your first time here?” I say yes.",
"A nurse opens the door and says a name. It is not my name. We all look at the screen. After five minutes, the screen says fourteen. The nurse says: “Ramiro?”",
"I get up and follow the nurse. I am a little nervous, but I breathe slowly. Soon I see the doctor."
],
gloss: [["la sala de espera","the waiting room"],["las sillas","the chairs"],["la pantalla","the screen"],["esperar","to wait"],["a mi lado","next to me"],["llorar","to cry"],["tranquilo/a","calm"],["levantarse","to get up"],["seguir","to follow"],["respirar","to breathe"]],
q: [
["How many people are in the waiting room?",["Fourteen","Twelve","Eight"],2,"There are eight people. Fourteen is Ramiro's number and twelve is the number on the screen at first."],
["What is Ramiro's number?",["Fourteen","Twelve","Five"],0,"His number is fourteen."],
["Which person is next to Ramiro?",["A nurse with a name list","A woman with a baby","A man with a boy"],1,"A woman with a baby sits next to him and asks if it is his first time."],
["What does Ramiro do when the nurse calls him?",["He asks for water","He leaves the clinic","He gets up and follows her"],2,"He gets up, follows the nurse and breathes slowly because he is nervous."]
]
},
{
id: "diario-de-sueno", level: "A2", title: "Mi diario de sueño", titleEn: "My sleep diary",
tl: [
"Lunes. Anoche me acosté a las once, pero no pude dormir. Pensé en el trabajo y miré el teléfono hasta la una. Me desperté a las seis, muy cansada.",
"Martes y miércoles. Tomé café a las cuatro de la tarde y dormí mal otra vez. Me desperté tres veces en la noche. El miércoles tuve dolor de cabeza todo el día.",
"Jueves. Hice un cambio: no tomé café después del mediodía y caminé media hora por la tarde. Me acosté a las diez y media y apagué el teléfono. Dormí casi seis horas.",
"Viernes y sábado. Dormí mejor. Me desperté solo una vez y volví a dormirme. El sábado me levanté más tranquila y con más energía.",
"Domingo. Voy a llevar este diario a mi cita con la doctora. Ella quiere saber a qué hora me acuesto, a qué hora me levanto y cuántas veces me despierto."
],
en: [
"Monday. Last night I went to bed at eleven, but I could not sleep. I thought about work and looked at my phone until one. I woke up at six, very tired.",
"Tuesday and Wednesday. I had coffee at four in the afternoon and slept badly again. I woke up three times in the night. On Wednesday I had a headache all day.",
"Thursday. I made a change: I did not have coffee after noon and I walked half an hour in the afternoon. I went to bed at ten thirty and turned off my phone. I slept almost six hours.",
"Friday and Saturday. I slept better. I woke up only once and went back to sleep. On Saturday I got up calmer and with more energy.",
"Sunday. I am going to take this diary to my appointment with the doctor. She wants to know what time I go to bed, what time I get up and how many times I wake up."
],
gloss: [["acostarse","to go to bed"],["despertarse","to wake up"],["cansada","tired (feminine)"],["el mediodía","noon"],["apagar","to turn off"],["volver a dormirse","to fall asleep again"],["levantarse","to get up"],["con más energía","with more energy"],["el diario","the diary"],["dormir mal","to sleep badly"]],
q: [
["Why could the writer not sleep on Monday?",["She was thinking about work and looking at her phone","She had a headache","She drank coffee at four"],0,"She thought about work and looked at her phone until one."],
["What happened on Wednesday?",["She slept almost six hours","She had a headache all day","She went for a walk"],1,"After bad sleep she had a headache all day on Wednesday."],
["What did she change on Thursday?",["She went to bed later","She stopped working","No coffee after noon, a walk, and phone off"],2,"She skipped coffee after noon, walked half an hour and turned off her phone."],
["What does the doctor want to know?",["When she goes to bed, gets up and wakes at night","What she eats for dinner","How much coffee costs"],0,"The doctor wants her bedtime, wake-up time and how many times she wakes up."]
]
},
{
id: "carta-de-la-escuela", level: "A2", title: "Una carta de la escuela", titleEn: "A letter from school",
tl: [
"Estimada familia de Brayan: Les escribimos para hablar de su hijo. Brayan es un estudiante amable y sus maestros lo quieren mucho. Pero este mes notamos algunos cambios.",
"Brayan faltó a clase seis veces y llegó tarde muchas veces. Antes entregaba sus tareas a tiempo, pero ahora casi no las entrega. En clase está muy cansado y a veces duerme en el pupitre. Sus notas bajaron mucho en dos materias.",
"También notamos que ya no almuerza con sus amigos. La semana pasada una maestra lo vio llorando en el pasillo. Cuando ella le preguntó qué pasaba, él dijo que no era nada.",
"Queremos ayudarlo. Por favor, hable con Brayan y pregúntele cómo se siente. Si usted quiere, puede hablar con la consejera de la escuela. Ella puede dar nombres de clínicas si Brayan necesita ver a un doctor.",
"Nuestra reunión con los padres es el próximo jueves a las cuatro de la tarde. Si no puede venir, llame a la oficina. Hablar de esto no es un castigo. Es una manera de cuidar a su hijo. Atentamente, la escuela secundaria."
],
en: [
"Dear Brayan's family: We are writing to talk about your son. Brayan is a kind student and his teachers like him very much. But this month we noticed some changes.",
"Brayan missed class six times and arrived late many times. Before, he handed in his homework on time, but now he hardly hands it in. In class he is very tired and sometimes sleeps at his desk. His grades dropped a lot in two subjects.",
"We also noticed that he no longer eats lunch with his friends. Last week a teacher saw him crying in the hallway. When she asked him what was wrong, he said it was nothing.",
"We want to help him. Please talk with Brayan and ask him how he feels. If you want, you can talk with the school counselor. She can give names of clinics if Brayan needs to see a doctor.",
"Our meeting with parents is next Thursday at four in the afternoon. If you cannot come, call the office. Talking about this is not a punishment. It is a way of caring for your son. Sincerely, the high school."
],
gloss: [["faltar a clase","to miss class"],["llegar tarde","to arrive late"],["las tareas","the homework"],["entregar","to hand in"],["las notas","the grades"],["almorzar","to eat lunch"],["el pasillo","the hallway"],["la consejera","the counselor"],["la reunión","the meeting"],["el castigo","the punishment"]],
q: [
["Which person or group wrote the letter?",["A doctor","The school","Brayan's friends"],1,"The school writes to Brayan's family about changes this month."],
["Which change is NOT mentioned in the letter?",["He gets worse grades","He misses class and is tired","He fights with other students"],2,"The letter mentions absences, lateness, tiredness, lower grades and no lunch with friends. It does not mention fights."],
["What did a teacher see last week?",["Brayan eating with friends","Brayan crying in the hallway","Brayan sleeping at home"],1,"She saw him crying in the hallway. He told her it was nothing."],
["What does the school ask the family to do?",["Punish Brayan","Change schools","Talk with Brayan and come to the meeting, or call the office"],2,"They ask the family to talk with Brayan and come Thursday, or call if they cannot. The meeting is not a punishment."]
]
},
{
id: "medicina-nueva", level: "A2", psych: true, title: "Su medicina nueva", titleEn: "Your new medicine",
tl: [
"Hoy empieza una medicina nueva. Su doctora la recetó para ayudarle con la tristeza y la ansiedad. Lea esta hoja con calma y guárdela en un lugar fácil de ver.",
"Cómo tomarla. Tome la medicina todos los días a la misma hora, como dice la etiqueta. Tómela con comida si le cae mal al estómago. Si olvida una pastilla, tómela cuando se acuerde, pero no tome dos pastillas juntas. No la deje de repente.",
"Qué puede sentir. En las primeras semanas puede tener náuseas, dolor de cabeza, sueño o la boca seca. Casi siempre estos efectos son leves y pasan en unos días. La medicina no hace efecto el primer día. Muchas personas empiezan a sentirse mejor después de algunas semanas.",
"Llame a la clínica si tiene una reacción fuerte: hinchazón en la cara, sarpullido o mucha agitación. También llame si se siente peor, si tiene pensamientos de hacerse daño o si no puede dormir por varias noches. Si es una emergencia, llame al 911. Para hablar con alguien en español, llame al 988 y oprima 2.",
"No tome alcohol con esta medicina sin hablar con su doctora. Guarde la botella lejos de los niños. Venga a su próxima cita aunque se sienta bien. Su doctora quiere saber cómo le va."
],
en: [
"Today you start a new medicine. Your doctor prescribed it to help you with sadness and anxiety. Read this sheet calmly and keep it in a place where you can see it.",
"How to take it. Take the medicine every day at the same time, as the label says. Take it with food if it upsets your stomach. If you forget a pill, take it when you remember, but do not take two pills together. Do not stop it suddenly.",
"What you may feel. In the first weeks you may have nausea, a headache, sleepiness or a dry mouth. These effects are almost always mild and pass in a few days. The medicine does not work on the first day. Many people begin to feel better after a few weeks.",
"Call the clinic if you have a strong reaction: swelling of the face, a rash or a lot of agitation. Also call if you feel worse, if you have thoughts of hurting yourself or if you cannot sleep for several nights. If it is an emergency, call 911. To talk with someone in Spanish, call 988 and press 2.",
"Do not drink alcohol with this medicine without talking to your doctor. Keep the bottle away from children. Come to your next appointment even if you feel well. Your doctor wants to know how you are doing."
],
gloss: [["la etiqueta","the label"],["la pastilla","the pill"],["de repente","suddenly"],["las náuseas","nausea"],["leves","mild"],["hacer efecto","to take effect, to work"],["la hinchazón","swelling"],["el sarpullido","rash"],["la agitación","agitation"],["hacerse daño","to hurt oneself"]],
q: [
["What should you do if you forget a pill?",["Take two pills next time","Take it when you remember, but never two together","Stop the medicine"],1,"Take it when you remember. Never take two pills together."],
["How long until the medicine starts to work?",["After a few weeks","On the first day","Never"],0,"It does not work on the first day. Many people feel better after a few weeks."],
["Which problem needs a call to the clinic?",["A dry mouth in the first days","Mild sleepiness","Swelling of the face"],2,"Swelling of the face, a rash or strong agitation are strong reactions. A dry mouth and sleepiness are common and mild."],
["What should you do when you feel well?",["Come to your next appointment anyway","Stop the medicine","Cancel your appointments"],0,"Keep the appointment even if you feel well. The doctor wants to know how you are doing."]
]
},
{
id: "dos-casas-en-el-corazon", level: "B1", title: "Dos casas en el corazón", titleEn: "Two homes in the heart",
tl: [
"Mi nieta Lety me pidió que le contara mi historia. Yo nací en un rancho pequeño de Zacatecas. Teníamos pocas cosas, pero la casa siempre estaba llena de gente. Cuando salí de allá, tenía veintiocho años y dos hijos chiquitos.",
"El viaje fue largo y muy duro. Tuve miedo muchas veces y lloré más de lo que quise. Mi hermana me había dicho que el primer año sería lo más difícil, y tenía razón. Aquí no entendía el idioma y extrañaba hasta el sonido de los gallos por la mañana.",
"Por las noches me quedaba despierta pensando en mi mamá. Le había prometido volver pronto, pero pasaron los años. Cuando ella murió, yo no pude despedirme. Esa tristeza todavía me pesa. Por mucho tiempo me dolía el pecho y no sabía por qué. Ahora creo que era la nostalgia.",
"Poco a poco hice una vida nueva. Aprendí a cocinar con lo que había aquí, pero en Navidad siempre hacía los tamales de mi mamá. Fui a la iglesia, hice amigas y encontré trabajo. Mis hijos crecieron y me dieron nietos.",
"Hoy tengo dos casas en el corazón. Cuando extraño mi pueblo, cierro los ojos y recuerdo el olor de la tierra después de la lluvia. Le digo a mi nieta: «Puedes querer a los dos lugares. Eso no es una traición, es una riqueza»."
],
en: [
"My granddaughter Lety asked me to tell her my story. I was born on a small ranch in Zacatecas. We had few things, but the house was always full of people. When I left there, I was twenty-eight years old and had two little children.",
"The trip was long and very hard. I was afraid many times and I cried more than I wanted to. My sister had told me that the first year would be the hardest, and she was right. Here I did not understand the language and I even missed the sound of the roosters in the morning.",
"At night I stayed awake thinking about my mother. I had promised her I would come back soon, but the years passed. When she died, I could not say goodbye. That sadness still weighs on me. For a long time my chest hurt and I did not know why. Now I think it was homesickness.",
"Little by little I made a new life. I learned to cook with what there was here, but at Christmas I always made my mother's tamales. I went to church, I made friends and I found work. My children grew up and gave me grandchildren.",
"Today I have two homes in my heart. When I miss my town, I close my eyes and remember the smell of the earth after the rain. I tell my granddaughter: “You can love both places. That is not a betrayal, it is a richness.”"
],
gloss: [["el rancho","the ranch, small farm"],["chiquitos","little ones (Mexico)"],["extrañar","to miss"],["el gallo","the rooster"],["prometer","to promise"],["despedirse","to say goodbye"],["pesar","to weigh (on someone)"],["la nostalgia","homesickness"],["poco a poco","little by little"],["la traición","the betrayal"]],
q: [
["Why does the grandmother tell her story?",["A doctor asked for it","Her granddaughter asked her to","She is writing a book"],1,"Her granddaughter Lety asked her to tell her story."],
["What did her sister warn her about?",["The first year would be the hardest","She would never find work","The trip would be short"],0,"Her sister had said the first year would be the hardest, and she was right."],
["What happened when her mother died?",["She was able to visit her","She could not say goodbye","She moved back home"],1,"She could not say goodbye, and that sadness still weighs on her. The chest pain she had for a long time was homesickness."],
["What does she mean by “two homes in the heart”?",["She owns two houses","She wants to move back","She can love both her old and her new place"],2,"She says loving both places is not a betrayal. It is a richness."]
]
},
{
id: "grupo-de-apoyo", level: "B1", psych: true, title: "El grupo de apoyo", titleEn: "The support group",
tl: [
"El primer martes del mes hay un grupo de apoyo en español para familiares de personas con enfermedad mental. Se reúne en la biblioteca del hospital, de seis a siete y media de la noche. Es gratis y no hace falta cita. Lupe fue por primera vez la semana pasada.",
"Lupe casi no entró. Pensaba que los demás la iban a juzgar. Su hijo estuvo hospitalizado en marzo, y en su familia nadie hablaba del tema. Pero una señora en la puerta le sonrió y le dijo: «Pase, aquí todas hemos tenido miedo».",
"La trabajadora social explicó las reglas. Lo que se dice en el grupo no sale del grupo. Nadie tiene que hablar si no quiere. No se dan consejos médicos, pero sí se comparten experiencias. Cuando le tocó a Lupe, solo dijo su nombre y lloró un poco. Nadie la apuró.",
"Otras personas contaron cómo habían aprendido a hablar con sus familiares sin pelear. Un señor dijo que había dejado de decirle a su hija «échale ganas», porque ella ya lo estaba intentando con todas sus fuerzas. Una abuela habló de cómo cuidarse: dormir, comer y pedir ayuda a los demás.",
"Al terminar, Lupe se sintió menos sola. Apuntó el teléfono del grupo y decidió volver el mes que viene. Sabe que su hijo es quien está en tratamiento, pero también sabe que ella necesita apoyo. «Cuidar a alguien enfermo cansa», le dijo la trabajadora social, «y usted también merece que la cuiden»."
],
en: [
"On the first Tuesday of the month there is a Spanish-language support group for family members of people with mental illness. It meets in the hospital library, from six to seven thirty in the evening. It is free and you do not need an appointment. Lupe went for the first time last week.",
"Lupe almost did not go in. She thought the others would judge her. Her son was hospitalized in March, and in her family nobody talked about it. But a woman at the door smiled at her and said: “Come in, here we have all been afraid.”",
"The social worker explained the rules. What is said in the group stays in the group. Nobody has to speak if they do not want to. No medical advice is given, but experiences are shared. When it was Lupe's turn, she only said her name and cried a little. Nobody rushed her.",
"Other people told how they had learned to talk with their relatives without fighting. One man said he had stopped telling his daughter “give it your all,” because she was already trying with all her strength. A grandmother spoke about taking care of yourself: sleeping, eating and asking others for help.",
"When it ended, Lupe felt less alone. She wrote down the group's phone number and decided to come back next month. She knows her son is the one in treatment, but she also knows she needs support. “Taking care of someone who is ill is tiring,” the social worker told her, “and you also deserve to be cared for.”"
],
gloss: [["el grupo de apoyo","the support group"],["los familiares","family members, relatives"],["no hace falta","it is not necessary"],["juzgar","to judge"],["hospitalizado","hospitalized"],["la trabajadora social","the social worker"],["le tocó a Lupe","it was Lupe's turn"],["apurar","to rush, hurry"],["échale ganas","give it your all (Mexico)"],["merecer","to deserve"]],
q: [
["How often does the group meet?",["Every Tuesday","The first Tuesday of each month","Whenever the doctor calls"],1,"The group meets on the first Tuesday of the month in the hospital library."],
["Why did Lupe almost not go in?",["She did not have an appointment","The room was full","She thought the others would judge her"],2,"She feared being judged. In her family nobody talked about her son's hospital stay."],
["Which is a rule of the group?",["What is said stays in the group","Everyone must speak","The group gives medical advice"],0,"What is said in the group stays in the group. Nobody must speak, and no medical advice is given."],
["Why does Lupe decide to go back?",["Her son asked her to","She felt less alone and knows she needs support too","She got a new prescription"],1,"She felt less alone and understood that caregivers also deserve care."]
]
},
{
id: "los-nervios-no-son-debilidad", level: "B2", psych: true, title: "Los nervios no son una debilidad", titleEn: "Nerves are not a weakness",
tl: [
"Pocas palabras se oyen tanto en las salas de espera de nuestras clínicas como «los nervios». Es un término que sirve para casi todo: el insomnio, el corazón acelerado, la tristeza que no se va, la sensación de que algo malo va a pasar. Quien dice que está mal de los nervios rara vez dice que tiene depresión o ansiedad.",
"No se trata solo de vocabulario. Durante generaciones, en muchas comunidades se ha creído que hablar de la salud mental equivale a admitir una debilidad. Por eso las familias esperan hasta que la situación es insostenible, y los pacientes llegan a la consulta con el cuerpo agotado, pero sin atreverse a nombrar lo que sienten.",
"Los médicos también tenemos nuestra parte de responsabilidad. Si descartamos «los nervios» como una queja vaga, el paciente se calla. Si, en cambio, preguntamos qué significa para él y desde cuándo le pasa, la conversación se abre. Respetar la palabra del paciente no impide que lleguemos, juntos, a un diagnóstico.",
"Tampoco hay que idealizar la expresión. Decir que alguien «sufre de los nervios» puede servir para evitar la palabra enfermedad y, con ella, el tratamiento. Una persona puede pasar años aguantando síntomas que habrían mejorado con terapia o medicación, solo porque nadie se atrevió a llamarlos por su nombre.",
"¿Qué podemos hacer? Hablar de la salud mental en la mesa, en la iglesia y en el trabajo con la misma naturalidad con que hablamos de la diabetes. Escuchar sin juzgar. Y recordar que pedir ayuda no es rendirse, sino una de las decisiones más valientes que puede tomar quien lleva mucho tiempo cargando solo."
],
en: [
"Few words are heard as often in the waiting rooms of our clinics as “los nervios.” It is a term that works for almost everything: insomnia, a racing heart, sadness that does not go away, the feeling that something bad is going to happen. Whoever says they are sick with nerves rarely says they have depression or anxiety.",
"It is not only a matter of vocabulary. For generations, many communities have believed that talking about mental health amounts to admitting a weakness. For that reason families wait until the situation is unsustainable, and patients come to the visit with an exhausted body but without daring to name what they feel.",
"We doctors also bear part of the responsibility. If we dismiss “los nervios” as a vague complaint, the patient goes quiet. If, instead, we ask what it means to them and since when it has been happening, the conversation opens up. Respecting the patient's word does not prevent us from reaching a diagnosis together.",
"Nor should we idealize the expression. Saying that someone “suffers from nerves” can serve to avoid the word illness and, with it, treatment. A person can spend years putting up with symptoms that would have improved with therapy or medication, only because nobody dared to call them by their name.",
"What can we do? Talk about mental health at the table, at church and at work as naturally as we talk about diabetes. Listen without judging. And remember that asking for help is not giving up, but one of the bravest decisions that a person can make who has been carrying a burden alone for a long time."
],
gloss: [["los nervios","nerves (a common label for anxiety and distress)"],["acelerado","racing, speeded up"],["la debilidad","weakness"],["insostenible","unsustainable"],["agotado","exhausted"],["atreverse a","to dare to"],["descartar","to dismiss, rule out"],["aguantar","to put up with, endure"],["rendirse","to give up"],["cargar","to carry"]],
q: [
["What is true about the phrase “los nervios”?",["It names only one illness","It covers many symptoms and feelings","Doctors invented it"],1,"The author says it is used for insomnia, a racing heart, lasting sadness and a sense of dread."],
["Why do families wait so long to seek help?",["Clinics are far away","Doctors are rude","They see mental health talk as admitting weakness"],2,"Many communities have believed that talking about mental health means admitting weakness."],
["What does the author suggest doctors do?",["Ask what “los nervios” means to the patient","Avoid the word completely","Give a diagnosis at once"],0,"Asking what it means and since when opens the conversation. It does not stop a diagnosis."],
["What risk does the author see in the expression?",["It can delay treatment by avoiding the word illness","It makes patients angry","It is only used by older people"],0,"Using only “nervios” can mean years of symptoms that therapy or medication could have helped."]
]
},
{
id: "mi-recuperacion", level: "B2", psych: true, title: "Mi recuperación", titleEn: "My recovery",
tl: [
"Hace un año yo estaba seguro de que alguien me vigilaba por las ventanas y de que mis pensamientos se oían en la calle. No dormía y apenas comía. Para mí todo era real, y por eso me enojaba cuando mi familia me decía que fuera al doctor. Hoy sé que estaba enfermo, aunque en ese momento no lo podía ver.",
"Pasé dos semanas en el hospital. Las primeras noches me dio miedo y vergüenza. Pero el personal me trataba con respeto, y la doctora me explicó que lo que viví se llama psicosis y que, con tratamiento, muchas personas mejoran bastante. No me prometió que sería fácil, y se lo agradezco.",
"La recuperación no fue una línea recta. Al principio la medicina me daba sueño y subí de peso, y un par de veces pensé en dejarla. Se lo conté a mi doctora en lugar de hacerlo a escondidas, y juntos ajustamos el tratamiento. También tuve días malos en los que las voces volvían un poco, y aprendí que eso no significaba que hubiera fracasado.",
"Poco a poco volví a las cosas que me gustan. Empecé a trabajar medio tiempo en una tienda de bicicletas y a jugar fútbol los domingos. Mi familia aprendió a escucharme sin discutir con lo que yo creía, y yo aprendí a avisarles cuando algo no estaba bien.",
"No digo que todo esté resuelto. Sigo yendo a mis citas y tomando mi medicina, y sé que el estrés y la falta de sueño pueden afectarme. Pero hoy tengo planes, y hace un año eso me parecía imposible. Si usted está pasando por algo parecido, pida ayuda pronto. Hay camino de regreso."
],
en: [
"A year ago I was sure that someone was watching me through the windows and that my thoughts could be heard in the street. I did not sleep and I hardly ate. To me everything was real, and that is why I got angry when my family told me to go to the doctor. Today I know I was ill, even though at that moment I could not see it.",
"I spent two weeks in the hospital. The first nights I felt fear and shame. But the staff treated me with respect, and the doctor explained that what I went through is called psychosis and that, with treatment, many people improve a lot. She did not promise me it would be easy, and I am grateful for that.",
"Recovery was not a straight line. At first the medicine made me sleepy and I gained weight, and a couple of times I thought about stopping it. I told my doctor instead of doing it behind her back, and together we adjusted the treatment. I also had bad days when the voices came back a little, and I learned that this did not mean I had failed.",
"Little by little I went back to the things I like. I started working part time at a bicycle shop and playing soccer on Sundays. My family learned to listen to me without arguing with what I believed, and I learned to tell them when something was not right.",
"I am not saying everything is solved. I keep going to my appointments and taking my medicine, and I know that stress and lack of sleep can affect me. But today I have plans, and a year ago that seemed impossible. If you are going through something similar, ask for help early. There is a way back."
],
gloss: [["vigilar","to watch over, keep watch on"],["apenas","hardly"],["la vergüenza","shame, embarrassment"],["la psicosis","psychosis"],["una línea recta","a straight line"],["a escondidas","secretly, behind someone's back"],["ajustar","to adjust"],["fracasar","to fail"],["medio tiempo","part time"],["discutir","to argue"]],
q: [
["What did the narrator believe a year ago?",["He had lost his job","Someone was watching him and his thoughts could be heard","His family wanted to move"],1,"He was sure he was being watched and that his thoughts were heard in the street."],
["What did the doctor tell him about treatment?",["It would be easy and quick","It would not be needed","Many people improve, but she did not promise it would be easy"],2,"She said many people improve a lot with treatment, without promising it would be easy."],
["What did he do when he thought about stopping the medicine?",["He told his doctor and they adjusted the treatment","He stopped it quietly","He changed hospitals"],0,"He told his doctor instead of stopping in secret, and they adjusted the treatment together."],
["What does he learn about the days when the voices came back?",["They meant he was getting worse for good","They did not mean he had failed","They only happen in the hospital"],1,"Recovery was not a straight line. Bad days did not mean he had failed."]
]
}
]);
