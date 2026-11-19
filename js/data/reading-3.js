/* More reading passages (pass 12), appended to window.READING.
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Shape: { id, level, title (Spanish), titleEn, tl: [Spanish paragraphs], en: [English paragraphs, same count],
            gloss: [[spanish, english]], q: [[question (English), [options], correctIndex, explanation]], psych?: true }
   Ids are permanent: append only after release. Listening questions for these ids: listen-questions-4.js. */
window.READING = (window.READING || []).concat([
{
id: "mi-barrio", level: "A1", title: "Mi barrio", titleEn: "My neighborhood",
tl: [
"Me llamo Rosa y vivo en un barrio tranquilo. Mi casa es pequeña y tiene un jardín con flores. Mi vecina se llama Elena y es muy amable.",
"En mi calle hay una tienda, una panadería y una iglesia. También hay un parque con árboles grandes. Los niños juegan allí por la tarde.",
"Todos los días camino por el parque. Salgo a las diez de la mañana y camino media hora. Primero saludo a la señora de la panadería. Luego compro pan y vuelvo a casa.",
"Caminar me ayuda. Me siento más tranquila y duermo mejor. Mi barrio es sencillo, pero me gusta mucho."
],
en: [
"My name is Rosa and I live in a quiet neighborhood. My house is small and has a garden with flowers. My neighbor is called Elena and she is very kind.",
"On my street there is a store, a bakery and a church. There is also a park with big trees. The children play there in the afternoon.",
"Every day I walk through the park. I go out at ten in the morning and walk for half an hour. First I greet the lady at the bakery. Then I buy bread and go back home.",
"Walking helps me. I feel calmer and I sleep better. My neighborhood is simple, but I like it a lot."
],
gloss: [["el barrio","the neighborhood"],["tranquilo","quiet, calm"],["el jardín","the garden"],["la vecina","the (female) neighbor"],["amable","kind"],["la panadería","the bakery"],["el parque","the park"],["caminar","to walk"],["saludar","to greet"],["sencillo","simple"]],
q: [
["Which place is NOT on Rosa's street?",["A bakery","A hospital","A church"],1,"Her street has a store, a bakery and a church. A hospital is not mentioned."],
["What time does Rosa go out to walk?",["At ten in the morning","At four in the afternoon","At night"],0,"She goes out at ten in the morning."],
["What does Rosa do first on her walk?",["She buys bread","She greets the lady at the bakery","She plays with the children"],1,"First she greets the lady at the bakery, and then she buys bread."],
["How does walking make Rosa feel?",["Tired","Worried","Calmer"],2,"She says she feels calmer and sleeps better."]
]
},
{
id: "la-enfermera-de-noche", level: "A1", title: "La enfermera de noche", titleEn: "The night nurse",
tl: [
"Me llamo Dolores y soy enfermera. Trabajo de noche en un hospital. Llego a las siete de la tarde y salgo a las siete de la mañana.",
"Primero hablo con la enfermera del día. Ella me dice cómo están los pacientes. Después reviso los medicamentos y preparo mi carro.",
"A las nueve doy las medicinas de la noche. Por la noche camino por el pasillo y miro cada cuarto. Algunos pacientes duermen. Otros no pueden dormir y hablan un poco conmigo.",
"A las seis de la mañana tomo la presión a los pacientes. Luego escribo mis notas. Cuando llego a casa, desayuno, me baño y duermo todo el día."
],
en: [
"My name is Dolores and I am a nurse. I work at night in a hospital. I arrive at seven in the evening and leave at seven in the morning.",
"First I talk with the day nurse. She tells me how the patients are. Then I check the medications and get my cart ready.",
"At nine I give the evening medicines. During the night I walk down the hallway and look into each room. Some patients sleep. Others cannot sleep and talk with me a little.",
"At six in the morning I take the patients' blood pressure. Then I write my notes. When I get home, I have breakfast, take a shower and sleep all day."
],
gloss: [["la enfermera","the nurse"],["de noche","at night, on the night shift"],["revisar","to check"],["el medicamento","the medication"],["el carro","the cart"],["el pasillo","the hallway"],["el cuarto","the room"],["la presión","blood pressure"],["las notas","the notes (charting)"],["bañarse","to take a bath or shower"]],
q: [
["What time does Dolores arrive at the hospital?",["At seven in the morning","At nine at night","At seven in the evening"],2,"She arrives at seven in the evening and leaves at seven in the morning."],
["Who tells her how the patients are?",["The day nurse","The doctor","A patient"],0,"The day nurse tells her how the patients are."],
["What does she do at six in the morning?",["She gives the evening medicines","She takes the patients' blood pressure","She goes home to sleep"],1,"At six she takes the patients' blood pressure. Then she writes notes."],
["When does Dolores sleep?",["At night, at the hospital","In the evening","During the day, at home"],2,"After she gets home she has breakfast, showers and sleeps all day."]
]
},
{
id: "la-primera-cita", level: "A2", psych: true, title: "La primera cita", titleEn: "The first appointment",
tl: [
"Hoy fue mi primera cita en la clínica de salud mental. Estaba muy nerviosa. Llegué quince minutos antes y llené unos papeles en la sala de espera. Mi esposo vino conmigo, pero esperó afuera.",
"La doctora me recibió con una sonrisa y me dijo que podía hablar con calma. Me preguntó por qué había venido. Le conté que hace tres meses duermo muy mal, que me siento triste casi todos los días y que ya no tengo ganas de salir.",
"También me preguntó por mi familia, por mi trabajo y por mi salud. Me explicó que algunas preguntas eran personales, pero que todo lo que yo le dijera era confidencial. Me ayudó mucho oír eso.",
"Al final, la doctora me dijo que mi problema tiene tratamiento. Vamos a empezar con terapia y, si es necesario, con una medicina. Me dio otra cita para dentro de dos semanas.",
"Cuando salí, me sentía cansada, pero más ligera. Pensé que hablar había sido difícil, pero también necesario. Mi esposo me abrazó y fuimos a comer algo."
],
en: [
"Today was my first appointment at the mental health clinic. I was very nervous. I arrived fifteen minutes early and filled out some forms in the waiting room. My husband came with me, but he waited outside.",
"The doctor welcomed me with a smile and told me I could take my time speaking. She asked me why I had come. I told her that for three months I have been sleeping very badly, that I feel sad almost every day and that I no longer feel like going out.",
"She also asked me about my family, my work and my health. She explained that some questions were personal, but that everything I told her was confidential. It helped me a lot to hear that.",
"At the end, the doctor told me that my problem has treatment. We are going to start with therapy and, if it is necessary, with a medicine. She gave me another appointment in two weeks.",
"When I left, I felt tired, but lighter. I thought that talking had been hard, but also necessary. My husband hugged me and we went to get something to eat."
],
gloss: [["la cita","the appointment"],["nervioso","nervous"],["llenar los papeles","to fill out the forms"],["con calma","calmly, without rushing"],["triste","sad"],["tener ganas de","to feel like (doing)"],["confidencial","confidential"],["el tratamiento","the treatment"],["ligero","light"],["abrazar","to hug"]],
q: [
["How long has the patient been sleeping badly?",["Three weeks","Three months","Two weeks"],1,"She says she has slept very badly for three months."],
["Why did the doctor explain that everything was confidential?",["Because the questions were personal","Because her husband was in the room","Because the forms were lost"],0,"Some questions were personal, so the doctor assured her they were confidential."],
["What did the doctor say about the patient's problem?",["It has no cure","It has treatment","It is not serious"],1,"The doctor said her problem has treatment, starting with therapy."],
["How did the patient feel when she left?",["Tired, but lighter","Angry","Very afraid"],0,"She felt tired, but lighter, and thought talking had been necessary."]
]
},
{
id: "instrucciones-de-la-medicina", level: "A2", psych: true, title: "Las instrucciones de la medicina", titleEn: "The medicine instructions",
tl: [
"Mi papá, don Ernesto, tiene setenta años y toma tres medicinas. Yo soy su hija Silvia y le ayudo a organizar todo, porque él se confunde con los horarios. Quiero explicar cómo lo hacemos.",
"Por la mañana, con el desayuno, él toma una pastilla blanca para el ánimo. Es una vez al día, siempre a la misma hora. Por la noche, antes de dormir, toma otra pastilla pequeña para el sueño.",
"La tercera medicina es para la presión y también es en la mañana. Usamos una caja con los días de la semana. Cada domingo yo pongo las pastillas en la caja, y así él ve qué le toca cada día.",
"La doctora nos dijo que no debemos cambiar las dosis sin hablar con ella. Si mi papá olvida una pastilla, no debe tomar dos al día siguiente. Debe llamar a la clínica y preguntar qué hacer.",
"También anotamos en un calendario cómo se siente cada día. Si tiene mareos, mucho sueño o algo raro, lo escribimos y se lo mostramos a la doctora en la próxima cita."
],
en: [
"My dad, don Ernesto, is seventy years old and takes three medicines. I am his daughter Silvia and I help him organize everything, because he gets confused with the schedules. I want to explain how we do it.",
"In the morning, with breakfast, he takes a white pill for his mood. It is once a day, always at the same time. At night, before going to sleep, he takes another small pill for sleep.",
"The third medicine is for blood pressure and it is also in the morning. We use a box with the days of the week. Every Sunday I put the pills in the box, and that way he can see what he has to take each day.",
"The doctor told us that we must not change the doses without talking to her. If my dad forgets a pill, he must not take two the next day. He should call the clinic and ask what to do.",
"We also write on a calendar how he feels each day. If he has dizziness, a lot of sleepiness or anything strange, we write it down and show it to the doctor at the next appointment."
],
gloss: [["la pastilla","the pill"],["el horario","the schedule"],["confundirse","to get confused"],["el ánimo","the mood"],["la presión","blood pressure"],["la caja","the box"],["la dosis","the dose"],["olvidar","to forget"],["el mareo","dizziness"],["anotar","to write down"]],
q: [
["Why does Silvia organize her father's medicines?",["He lives far away","He gets confused with the schedules","He does not like doctors"],1,"Her father gets confused with the schedules, so she helps him."],
["When does don Ernesto take the pill for sleep?",["With breakfast","Before going to sleep","On Sundays only"],1,"He takes the small pill for sleep at night, before going to bed."],
["What does Silvia do every Sunday?",["She calls the doctor","She buys new medicine","She puts the pills in the weekly box"],2,"Every Sunday she puts the pills in the box with the days of the week."],
["What should he do if he forgets a pill?",["Call the clinic and ask","Take two the next day","Stop all his medicines"],0,"The doctor said he must not take two. He should call the clinic and ask what to do."]
]
},
{
id: "el-fin-de-semana", level: "A2", title: "El fin de semana", titleEn: "The weekend",
tl: [
"Los sábados en mi casa son tranquilos. Me levanto un poco más tarde que de costumbre y preparo el desayuno para toda la familia. Mi esposo hace café y los niños ponen la mesa.",
"Por la mañana vamos al mercado. Compramos fruta, verduras y tortillas frescas. A mis hijos les gusta comprar un helado, aunque todavía es temprano. Mi hija Lupita siempre quiere llevar el dinero para pagar ella misma.",
"Por la tarde, mi mamá viene a comer con nosotros. Cocino su plato favorito, que es arroz con pollo. Después de comer, los niños juegan en el patio y los adultos platicamos en la sala.",
"El domingo vamos a la iglesia y luego visitamos a mis suegros. Si hace buen tiempo, hacemos un picnic en el parque. Si llueve, nos quedamos en casa y vemos una película.",
"Por la noche, preparo la ropa y las mochilas para el lunes. Me gustan los fines de semana porque estamos todos juntos y no tenemos prisa."
],
en: [
"Saturdays at my house are quiet. I get up a little later than usual and make breakfast for the whole family. My husband makes coffee and the kids set the table.",
"In the morning we go to the market. We buy fruit, vegetables and fresh tortillas. My kids like to buy an ice cream, even though it is still early. My daughter Lupita always wants to carry the money to pay by herself.",
"In the afternoon, my mom comes to eat with us. I cook her favorite dish, which is rice with chicken. After eating, the kids play in the yard and the adults chat in the living room.",
"On Sunday we go to church and then we visit my in-laws. If the weather is nice, we have a picnic in the park. If it rains, we stay home and watch a movie.",
"At night, I get the clothes and backpacks ready for Monday. I like weekends because we are all together and we are not in a hurry."
],
gloss: [["de costumbre","as usual"],["poner la mesa","to set the table"],["el mercado","the market"],["fresco","fresh"],["el helado","the ice cream"],["platicar","to chat (Mexico)"],["los suegros","the in-laws"],["el picnic","the picnic"],["la mochila","the backpack"],["tener prisa","to be in a hurry"]],
q: [
["What does the family do on Saturday morning?",["They go to church","They go to the market","They visit the in-laws"],1,"On Saturday morning they go to the market."],
["What does the narrator cook for her mother?",["Rice with chicken","Tortillas with beans","Soup"],0,"Her mother's favorite dish is rice with chicken."],
["What does the family do on Sunday if it rains?",["They go to the park anyway","They stay home and watch a movie","They go to the market again"],1,"If it rains, they stay home and watch a movie."],
["Why does she like weekends?",["She does not have to cook","The children are at school","The family is together and not in a hurry"],2,"She likes them because they are all together and have no rush."]
]
},
{
id: "volver-a-la-escuela", level: "B1", psych: true, title: "Volver a la escuela", titleEn: "Going back to school",
tl: [
"Mi hija Daniela tiene quince años. Hace cuatro meses dejó de ir a la escuela porque cada mañana le dolía el estómago y sentía que no podía respirar. Al principio pensamos que era pereza, pero pronto entendimos que era ansiedad. Fue una época muy difícil para toda la familia.",
"La doctora nos explicó que obligarla a volver de golpe no era buena idea. Nos propuso un plan por etapas. Primero, Daniela solo iba hasta la puerta de la escuela y regresaba a casa. Después, entró unos minutos a hablar con la consejera.",
"Más tarde asistió a una clase al día, la que menos le preocupaba. Cada semana añadíamos un poco más, siempre con su permiso. Cuando se ponía muy nerviosa, usaba las técnicas de respiración que aprendió en terapia, y la consejera le dejaba salir unos minutos al pasillo.",
"Hubo días en que dio un paso atrás, y eso nos asustaba. La doctora nos recordó que los tropiezos son normales y que lo importante es seguir intentándolo. Yo aprendí a no preguntarle cada día si estaba lista, sino a decirle que confiaba en ella.",
"Hoy Daniela asiste a la escuela cuatro días por semana. Todavía se pone nerviosa a veces, pero ya sabe qué hacer. Ayer me dijo que quiere volver a jugar en el equipo de voleibol. Yo me quedé sin palabras, y estoy muy orgullosa de ella."
],
en: [
"My daughter Daniela is fifteen. Four months ago she stopped going to school because every morning her stomach hurt and she felt she could not breathe. At first we thought it was laziness, but soon we understood that it was anxiety. It was a very hard time for the whole family.",
"The doctor explained to us that forcing her to go back all at once was not a good idea. She suggested a plan in stages. First, Daniela only went to the school door and came back home. Then she went in for a few minutes to talk with the counselor.",
"Later she attended one class a day, the one that worried her least. Each week we added a little more, always with her permission. When she got very nervous, she used the breathing techniques she learned in therapy, and the counselor let her step out into the hallway for a few minutes.",
"There were days when she took a step back, and that scared us. The doctor reminded us that setbacks are normal and that what matters is to keep trying. I learned not to ask her every day whether she was ready, but to tell her that I trusted her.",
"Today Daniela goes to school four days a week. She still gets nervous sometimes, but she knows what to do. Yesterday she told me she wants to play on the volleyball team again. I was left speechless, and I am very proud of her."
],
gloss: [["la ansiedad","anxiety"],["la pereza","laziness"],["de golpe","all at once"],["por etapas","in stages"],["la consejera","the (school) counselor"],["la respiración","breathing"],["dar un paso atrás","to take a step back"],["el tropiezo","the setback"],["confiar en","to trust"],["orgulloso","proud"]],
q: [
["Why did Daniela stop going to school?",["She was lazy","She had bodily symptoms of anxiety each morning","She changed schools"],1,"Every morning her stomach hurt and she felt she could not breathe. The family later understood it was anxiety."],
["What was the doctor's advice about returning?",["Go back all at once","Wait a full year","Return in stages"],2,"The doctor said that forcing her back all at once was not a good idea and proposed stages."],
["What did Daniela do when she became very nervous?",["She used breathing techniques and could step out","She went home immediately","She skipped the class"],0,"She used breathing techniques from therapy, and the counselor let her step out for a few minutes."],
["How did the mother change her own behavior?",["She stopped talking to Daniela","She asked every day if Daniela was ready","She told Daniela she trusted her"],2,"She stopped asking daily if Daniela was ready and told her she trusted her."]
]
},
{
id: "el-turno-de-noche", level: "B1", psych: true, title: "El turno de noche", titleEn: "The night shift",
tl: [
"Me llamo Raúl y tengo dos trabajos. De lunes a viernes trabajo de noche en una bodega, de diez a seis de la mañana. Los sábados y domingos reparto comida por la tarde. Necesito el dinero, porque mi esposa y yo estamos pagando la renta y las deudas del año pasado.",
"El problema es que casi no duermo. Cuando llego a casa, hay ruido, los niños se levantan y no puedo descansar. Duermo tres o cuatro horas, a pedazos. Con el tiempo me volví más irritable. Grito por cualquier cosa y después me siento culpable.",
"Hace un mes casi tuve un accidente manejando de regreso a casa porque se me cerraban los ojos. Me asusté mucho. Ese día decidí pedir ayuda y fui a la clínica de mi barrio.",
"La doctora me explicó que dormir tan poco afecta el estado de ánimo, la memoria y la concentración. Me preguntó si me sentía triste o con preocupaciones constantes, y le dije que sí. No me dio una solución mágica, pero me ayudó a hacer un plan.",
"Ahora trato de dormir en un cuarto oscuro y con la puerta cerrada, y mi esposa se encarga de los niños por las mañanas. También estoy pensando en dejar el trabajo de los fines de semana. No es fácil, pero entiendo que mi salud también cuenta."
],
en: [
"My name is Raúl and I have two jobs. From Monday to Friday I work nights at a warehouse, from ten to six in the morning. On Saturdays and Sundays I deliver food in the afternoon. I need the money, because my wife and I are paying the rent and last year's debts.",
"The problem is that I hardly sleep. When I get home, there is noise, the kids get up and I cannot rest. I sleep three or four hours, in pieces. Over time I became more irritable. I yell about anything and afterward I feel guilty.",
"A month ago I almost had an accident driving home because my eyes were closing. I got very scared. That day I decided to ask for help and I went to my neighborhood clinic.",
"The doctor explained to me that sleeping so little affects mood, memory and concentration. She asked me if I felt sad or had constant worries, and I told her yes. She did not give me a magic solution, but she helped me make a plan.",
"Now I try to sleep in a dark room with the door closed, and my wife takes care of the kids in the mornings. I am also thinking about leaving the weekend job. It is not easy, but I understand that my health counts too."
],
gloss: [["el turno","the shift"],["la bodega","the warehouse"],["repartir","to deliver"],["la deuda","the debt"],["a pedazos","in pieces, in broken stretches"],["irritable","irritable"],["sentirse culpable","to feel guilty"],["manejar","to drive (Latin America)"],["la concentración","concentration"],["encargarse de","to take charge of"]],
q: [
["Why does Raúl have two jobs?",["He needs money for rent and debts","He is bored","His wife asked him to"],0,"He needs the money to pay the rent and last year's debts."],
["Why does Raúl sleep so little?",["He has too many nightmares","He drinks too much coffee","Noise and the children keep him from resting"],2,"At home there is noise and the children get up, so he sleeps in pieces."],
["What made Raúl decide to ask for help?",["He nearly had an accident while driving","He lost his job","A friend told him to"],0,"He almost had an accident because his eyes were closing, and he got scared."],
["What does the doctor say about sleeping too little?",["It only makes you tired","It can affect mood, memory and concentration","It has no effect on adults"],1,"She explained that it affects mood, memory and concentration."]
]
},
{
id: "la-abuela-se-pierde", level: "B1", psych: true, title: "La abuela se pierde", titleEn: "Grandmother gets lost",
tl: [
"Mi abuela Teresa tiene setenta y ocho años y siempre fue una mujer muy organizada. Hace un año empezamos a notar cosas extrañas. Repetía las mismas preguntas varias veces en la misma tarde y dejaba la estufa prendida. A veces no encontraba sus lentes, que estaban en el refrigerador.",
"Al principio pensamos que era normal por la edad. Pero un día salió a la tienda de la esquina, que conoce desde hace cuarenta años, y no supo cómo volver. Un vecino la trajo a casa. Ella estaba asustada y nosotros también.",
"Mi mamá la llevó a una cita con el médico. Le hicieron preguntas y unos estudios. El médico dijo que había que descartar otras causas, como falta de vitaminas, problemas de la tiroides o depresión, y que quizás necesitaba ver a un especialista de la memoria.",
"Mientras esperamos los resultados, hemos hecho cambios en casa. Pusimos una libreta junto al teléfono con los números importantes y un reloj grande en la cocina. Ya no la dejamos salir sola, y ella se enojó mucho al principio.",
"Lo más difícil es ver que a veces no me reconoce bien. Pero cuando le pongo su música favorita, sonríe y canta toda la letra. Estamos aprendiendo a tener paciencia y a disfrutar los buenos momentos."
],
en: [
"My grandmother Teresa is seventy-eight years old and she was always a very organized woman. A year ago we began to notice strange things. She repeated the same questions several times in the same afternoon and left the stove on. Sometimes she could not find her glasses, which were in the refrigerator.",
"At first we thought it was normal for her age. But one day she went out to the corner store, which she has known for forty years, and did not know how to get back. A neighbor brought her home. She was frightened and so were we.",
"My mom took her to an appointment with the doctor. They asked her questions and did some tests. The doctor said that other causes had to be ruled out, such as a lack of vitamins, thyroid problems or depression, and that she might need to see a memory specialist.",
"While we wait for the results, we have made changes at home. We put a notebook next to the phone with the important numbers and a big clock in the kitchen. We no longer let her go out alone, and she got very angry at first.",
"The hardest thing is to see that sometimes she does not recognize me well. But when I put on her favorite music, she smiles and sings all the words. We are learning to be patient and to enjoy the good moments."
],
gloss: [["organizado","organized"],["repetir","to repeat"],["la estufa","the stove"],["los lentes","the glasses"],["la esquina","the corner"],["descartar","to rule out"],["la tiroides","the thyroid"],["los resultados","the results"],["la libreta","the notebook"],["reconocer","to recognize"]],
q: [
["Which early sign did the family notice?",["She stopped eating","She repeated the same questions","She did not want visitors"],1,"She repeated the same questions several times in one afternoon."],
["What happened when Teresa went to the corner store?",["She did not know how to get home","She forgot her money","She met an old friend"],0,"She did not know how to return, and a neighbor brought her home."],
["Why did the doctor mention vitamins, thyroid and depression?",["Because they cause only physical problems","To rule out other possible causes","Because she needs new medicine today"],1,"The doctor wanted to rule out other causes of memory problems."],
["What helps Teresa feel happy?",["Watching television","Going out alone","Her favorite music"],2,"When the narrator puts on her favorite music, she smiles and sings all the words."]
]
},
{
id: "entre-dos-idiomas", level: "B2", psych: true, title: "Entre dos idiomas", titleEn: "Between two languages",
tl: [
"Llevo quince años trabajando como intérprete en una clínica de salud mental, y todavía me sorprende cuánto puede cambiar una frase al cruzar de un idioma a otro. Mi trabajo parece sencillo: oír, entender y repetir en la otra lengua. En la práctica, cada palabra carga una historia, y no siempre cabe en la traducción.",
"Un ejemplo frecuente es la palabra «nervios». Si la traduzco como «anxiety», el médico escribe un diagnóstico que quizás el paciente no reconoce como suyo. Si dejo «nerves», el médico no sabe si hablamos de una queja corporal, de un estado emocional o de ambos. Por eso, cuando es posible, explico brevemente qué entiende la persona por esa palabra.",
"También cuenta lo que no se dice. Muchos pacientes responden con rodeos o con un «más o menos» cuando la pregunta toca algo doloroso. Un intérprete descuidado podría resumir todo eso en un simple «no». Yo trato de conservar la duda, el silencio y el tono, porque esos detalles le dicen mucho al clínico.",
"Hay otra tentación peligrosa: ayudar de más. Cuando el paciente se confunde o se contradice, es fácil arreglar su frase para que suene lógica. Pero esa confusión puede ser un dato clínico. Mi deber es transmitir lo que se dijo, no lo que habría sido más cómodo oír.",
"Al final de cada consulta me quedo con una sensación extraña, entre la satisfacción y la duda. Sé que algo siempre se pierde, y mi esfuerzo es que se pierda lo menos posible. Quizás por eso valoro tanto a los médicos que me preguntan, antes de empezar, cómo prefieren que trabajemos juntos."
],
en: [
"I have worked as an interpreter at a mental health clinic for fifteen years, and I am still surprised by how much a sentence can change when it crosses from one language to another. My job seems simple: listen, understand and repeat in the other language. In practice, every word carries a story, and it does not always fit in the translation.",
"A frequent example is the word “nervios.” If I translate it as “anxiety,” the doctor writes a diagnosis that the patient may not recognize as their own. If I leave “nerves,” the doctor does not know whether we are talking about a bodily complaint, an emotional state or both. So, when possible, I briefly explain what the person means by that word.",
"What is not said also counts. Many patients answer with detours or with a “more or less” when the question touches something painful. A careless interpreter could summarize all of that as a simple “no.” I try to keep the doubt, the silence and the tone, because those details tell the clinician a lot.",
"There is another dangerous temptation: helping too much. When the patient gets confused or contradicts themselves, it is easy to fix their sentence so that it sounds logical. But that confusion can be clinical data. My duty is to convey what was said, not what it would have been more comfortable to hear.",
"At the end of each visit I am left with a strange feeling, between satisfaction and doubt. I know that something is always lost, and my effort is that as little as possible is lost. Perhaps that is why I value so much the doctors who ask me, before starting, how they prefer that we work together."
],
gloss: [["el intérprete","the interpreter"],["cargar","to carry"],["caber","to fit"],["los nervios","nerves (a common label for distress)"],["queja corporal","bodily complaint"],["el rodeo","detour, roundabout answer"],["descuidado","careless"],["conservar","to keep, preserve"],["contradecirse","to contradict oneself"],["el deber","the duty"]],
q: [
["What is the interpreter's main point in the first paragraph?",["Interpreting is easy work","Words carry stories that do not always translate","Doctors speak too fast"],1,"She says each word carries a story and does not always fit in the translation."],
["Why does she avoid translating “nervios” in only one way?",["Both choices can mislead the doctor or the patient","The word has no meaning in English","Patients dislike the word"],0,"“Anxiety” may not match the patient's view, and “nerves” may leave the doctor unsure what it covers."],
["Why does she keep hesitations and silences?",["To make the visit longer","Because they give the clinician useful information","To avoid translating"],1,"She says those details tell the clinician a lot."],
["What does she mean by the danger of “helping too much”?",["Interpreting for free","Teaching the patient English","Fixing the patient's confused words so they sound logical"],2,"Fixing a confused sentence hides what may be clinical data."]
]
},
{
id: "despues-del-choque", level: "B2", psych: true, title: "Después del choque", titleEn: "After the crash",
tl: [
"Hace ocho meses tuve un accidente de coche. Salí con heridas leves y todos dijeron que había tenido suerte. Yo también lo creía, pero las semanas siguientes me demostraron que el cuerpo sana más rápido que la mente. No quiero entrar en detalles de lo que pasó. Basta decir que, durante mucho tiempo, no pude olvidarlo.",
"Al principio, el problema era el sueño. Me despertaba sobresaltada, con el corazón acelerado, y después no podía volver a dormir. De día, un frenazo en la calle o el sonido de una sirena me bastaba para sentirme otra vez allí. Dejé de manejar y empecé a evitar las avenidas grandes. Mi mundo se fue encogiendo.",
"Mi hermana fue quien insistió en que buscara ayuda. Al principio me resistí, porque pensaba que lo mío no era tan grave como lo de otras personas. La doctora me corrigió con amabilidad: no se trata de comparar sufrimientos, sino de reconocer lo que a mí me estaba pasando. Me explicó que mi reacción era comprensible y que tenía tratamiento.",
"Empecé terapia y, poco a poco, aprendí a calmar el cuerpo cuando aparece el miedo. También hicimos un plan para volver a manejar de manera gradual: primero como pasajera, luego en calles tranquilas y por último en la avenida que más temía. La primera vez que llegué al trabajo en mi propio carro, lloré de alivio.",
"No diría que estoy curada, pero hoy el recuerdo ya no me domina. Hay días buenos y días más pesados, y he aprendido a aceptar ambos. Si alguien que lea esto ha pasado por algo parecido, quiero decirle que pedir ayuda no es una derrota. En mi caso, fue el principio de volver a ser yo."
],
en: [
"Eight months ago I had a car accident. I came out with minor injuries and everyone said I had been lucky. I believed it too, but the following weeks showed me that the body heals faster than the mind. I do not want to go into detail about what happened. It is enough to say that, for a long time, I could not forget it.",
"At first, the problem was sleep. I woke up startled, with a racing heart, and then I could not fall asleep again. By day, a screech of brakes on the street or the sound of a siren was enough to make me feel back there. I stopped driving and began to avoid big avenues. My world kept shrinking.",
"My sister was the one who insisted that I look for help. At first I resisted, because I thought mine was not as serious as what other people go through. The doctor corrected me kindly: it is not about comparing suffering, but about recognizing what was happening to me. She explained that my reaction was understandable and that it had treatment.",
"I started therapy and, little by little, I learned to calm my body when fear appears. We also made a plan to return to driving gradually: first as a passenger, then on quiet streets and finally on the avenue I feared most. The first time I got to work in my own car, I cried with relief.",
"I would not say I am cured, but today the memory no longer controls me. There are good days and heavier days, and I have learned to accept both. If someone reading this has gone through something similar, I want to tell them that asking for help is not a defeat. In my case, it was the beginning of being myself again."
],
gloss: [["leve","minor, mild"],["sanar","to heal"],["sobresaltado","startled"],["el frenazo","screech of brakes"],["encogerse","to shrink"],["resistirse","to resist, hold out"],["comprensible","understandable"],["gradual","gradual"],["el alivio","the relief"],["la derrota","the defeat"]],
q: [
["What does the narrator learn in the weeks after the accident?",["Her injuries were serious","The mind can take longer to heal than the body","She should not talk about it"],1,"She says the body heals faster than the mind."],
["Which change shows that her world was shrinking?",["She changed jobs","She stopped driving and avoided big avenues","She moved to another city"],1,"She stopped driving and began to avoid big avenues."],
["Why did she resist seeking help at first?",["She thought her problem was not as serious as others'","She did not trust her sister","She could not pay"],0,"She thought hers was not as serious as what other people go through."],
["How did she return to driving?",["She did it all at once","Gradually, from passenger to the avenue she feared most","She never returned to driving"],1,"The plan went from passenger, to quiet streets, to the avenue she feared most."]
]
}
]);
