/* Listening questions on the dialogues and readings (Hablemos 0.9.0). Used by #/listen?tab=story (js/listen.js) and App.listenLink.
   DRAFT FOR REVIEW by a native Spanish-speaking clinician before use (the questions are English; they must match what the Spanish says).
   Shape: window.LISTEN_Q = Object.assign(window.LISTEN_Q || {}, { '<dialogue or reading id>': [[question, [4 options], answerIndex, why], …] });
   Keys are DIALOGUES ids (js/data/dialogues.js: 3 questions each) and READING ids (js/data/reading.js: 3 or 4 each, none repeating the
   reading's own q). Case simulations may be keyed 'case-<PSYCH_CASES id>'. The learner hears the whole text first without seeing it,
   so the questions ask what is said. One right option; answerIndex 0 to 3. Ids are permanent: append only after release. */
window.LISTEN_Q = Object.assign(window.LISTEN_Q || {}, {
  /* ---------- dialogues (js/data/dialogues.js) ---------- */
  'meet': [
    ["What does the patient ask the doctor to call her?", ["Mrs. Ríos", "Elena", "Doña Elena", "Her full name"], 1, "She says, \"Dígame Elena, por favor\": call me Elena, please."],
    ["Who came with the patient today?", ["Her daughter", "Her sister", "Her mother", "Her husband"], 3, "She says, \"Él es mi esposo, Luis\": this is my husband, Luis."],
    ["Where does the patient's daughter live?", ["Near them", "With them", "In Mexico", "In another city"], 0, "The patient says, \"Mi hija vive cerca de nosotros\": my daughter lives near us."]
  ],
  'check-in': [
    ["What is the patient's date of birth?", ["March 2, 1975", "December 12, 1975", "March 12, 1975", "March 12, 1965"], 2, "He says \"el doce de marzo de mil novecientos setenta y cinco\": March 12, 1975."],
    ["Why has the patient come today?", ["He needs a new prescription", "He has a bad headache", "He needs a letter for work", "He cannot sleep and feels very sad"], 3, "He says, \"No puedo dormir y me siento muy triste.\""],
    ["When will the nurse call him?", ["In two minutes", "In ten minutes", "In twelve minutes", "In an hour"], 1, "The front desk says, \"La enfermera lo llama en diez minutos.\""]
  ],
  'pharmacy': [
    ["What is the new medicine for?", ["Depression and anxiety", "Sleep and pain", "Blood pressure", "Hearing voices"], 0, "The pharmacist says, \"Sirve para la depresión y la ansiedad.\""],
    ["How should the patient take it?", ["One tablet every night", "Two tablets every morning", "One tablet every morning, with food", "One tablet with every meal"], 2, "The pharmacist says, \"Una tableta cada mañana, con comida.\""],
    ["What should the patient do after forgetting a dose?", ["Take two the next day", "Skip it and wait for the next one", "Call the doctor at once", "Take it when remembered, but never two together"], 3, "\"Tómela cuando se acuerde. Pero no tome dos juntas.\""]
  ],
  'family-call': [
    ["Why can the doctor talk with the sister?", ["The patient gave permission", "The sister is her legal guardian", "It is an emergency", "The sister called the clinic first"], 0, "The doctor says, \"Su hermana me dio permiso para hablar con usted.\""],
    ["How long has the change lasted, and when did it start?", ["About two weeks, since she moved", "About a month, since she got sick", "About two months, since she lost her job", "About two years, since a death in the family"], 2, "\"Desde hace dos meses, más o menos. Empezó cuando perdió su trabajo.\""],
    ["What did the patient once say to her sister?", ["That she wanted to move away", "That she hears voices", "That she wants to work again", "That she was tired of everything"], 3, "The sister says, \"Una vez dijo que estaba cansada de todo.\""]
  ],
  'explain-med': [
    ["What does the doctor say the new medicine is for?", ["To help him sleep", "To lower his anxiety at work", "To treat pain", "To calm the voices and the thoughts that scare him"], 3, "\"Sirve para calmar las voces y los pensamientos que le dan miedo.\""],
    ["Which side effects does the doctor mention?", ["Sleepiness, more appetite and weight, stiff muscles", "Headache, nausea and dizziness", "Dry mouth and blurred vision", "Trouble sleeping and weight loss"], 0, "Sleepiness, especially at first; more appetite and weight; muscle stiffness."],
    ["How long will the patient take the medicine?", ["Two weeks", "Until the voices stop", "At least several months", "Only on bad days"], 2, "\"Por lo menos varios meses.\" He must not stop it without talking to the doctor."]
  ],
  'follow-up': [
    ["When is the next appointment?", ["Tuesday at five", "Thursday at ten in the morning", "Thursday at two in the afternoon", "Tuesday at ten in the morning"], 1, "\"El jueves a las diez de la mañana hay lugar.\" She works until five on Tuesdays."],
    ["What problem does the patient have with getting there?", ["She has no insurance", "She works on Thursdays", "She has no one to watch her children", "She has no car"], 3, "\"Pero no tengo carro. Mi esposo trabaja.\" The doctor offers free transportation."],
    ["What should she do if she has thoughts of hurting herself?", ["Wait for the appointment", "Call the clinic in the morning", "Call 988 and press 2", "Tell her husband"], 2, "\"Si tiene pensamientos de hacerse daño, llame al 988 y oprima 2.\" Someone is there 24 hours."]
  ],
  'teen': [
    ["Where is Diego's mother during the talk?", ["Outside", "In the room", "At work", "At home"], 0, "The doctor says, \"Tu mamá está afuera.\""],
    ["Until what time does Diego use his phone at night?", ["Until midnight", "Until ten", "All night, until six", "Until two or three in the morning"], 3, "\"Sí, hasta las dos o tres de la mañana. Veo videos y juego.\""],
    ["How is school going for Diego?", ["Very well", "He changed schools", "He no longer does homework and hardly goes to class", "He goes every day but cannot concentrate"], 2, "\"Ya no hago la tarea y casi no voy a clase.\""]
  ],
  'don-chuy': [
    ["Where is don Chuy from?", ["Jalisco", "Zacatecas", "Michoacán", "Texas"], 1, "\"Soy de Zacatecas, pero llevo cuarenta años aquí.\""],
    ["When did his wife die?", ["Three years ago", "Forty years ago", "Three months ago", "Seven years ago"], 0, "\"Mi esposa murió hace tres años.\""],
    ["What did he have for breakfast?", ["Coffee and sweet bread", "Oatmeal and juice", "Nothing, he was not hungry", "Eggs with beans and tortillas, and a coffee"], 3, "\"Unos huevos con frijoles y tortillas, y un café.\""]
  ],

  /* ---------- readings (js/data/reading.js) ---------- */
  'mi-familia': [
    ["Where does the family live now?", ["In Mexico", "In Texas", "In California", "In Arizona"], 1, "\"Somos de México, pero ahora vivimos en Texas.\""],
    ["What work does Rosa's husband do?", ["He works in construction", "He works in a school kitchen", "He drives a truck", "He works in a hotel"], 0, "\"Mi esposo trabaja en la construcción.\""],
    ["What health problem does Rosa's mother have?", ["High blood pressure", "Asthma", "Bad knees", "Diabetes"], 3, "\"Tiene diabetes y toma pastillas todos los días.\""]
  ],
  'la-cita': [
    ["How early does Carlos arrive?", ["Five minutes early", "Fifteen minutes early", "Thirty minutes early", "Right on time"], 1, "\"Llego quince minutos antes.\""],
    ["Where is the clinic?", ["On Main Street, near the church", "Next to a school", "On Fifth Street, near the park", "Inside the hospital"], 2, "\"La clínica está en la calle Quinta, cerca del parque.\""],
    ["What does Carlos write on the form?", ["His symptoms", "His medicines", "His job", "His address and phone number"], 3, "\"Escribo mi dirección y mi teléfono.\""],
    ["What is in the waiting room?", ["Chairs, magazines and a small TV", "Only a few chairs", "A coffee machine", "Toys for children"], 0, "\"Hay sillas, revistas y una televisión pequeña.\""]
  ],
  'la-farmacia': [
    ["How long does the pharmacist say the prescription will take?", ["Five minutes", "Twenty minutes", "Ten minutes", "An hour"], 2, "He says it will take ten minutes."],
    ["What should Mr. Aguirre not do if he is very sleepy?", ["Eat", "Drive", "Work", "Drink water"], 1, "\"No maneje si tiene mucho sueño.\""],
    ["Where should he keep the bottle?", ["In the refrigerator", "In the car", "By his bed", "Away from children"], 3, "\"Guarde la botella lejos de los niños.\""],
    ["What does the pharmacist give him before he leaves?", ["A leaflet in Spanish and the pharmacy's phone number", "A free sample", "An appointment card", "A pill box"], 0, "He gives him a leaflet in Spanish and the pharmacy's number: \"Si tiene preguntas, llámenos.\""]
  ],
  'mi-hijo-cambio': [
    ["Who did Andrés work with?", ["His father", "His uncle", "His friends", "His cousin"], 1, "He worked at a shop with his uncle."],
    ["When did Andrés stop going to work?", ["A week ago", "Three months ago", "A month ago", "A year ago"], 2, "\"Hace un mes dejó de ir al trabajo.\""],
    ["What does Andrés answer when his mother asks who he is talking to?", ["A friend on the phone", "God", "His uncle", "Nobody, and to leave him alone"], 3, "«Con nadie, mamá. Déjame en paz»."]
  ],
  'carta-de-marisol': [
    ["How old is Marisol's father?", ["Forty-eight", "Fifty-eight", "Sixty-eight", "Thirty-eight"], 1, "Marisol writes that her father is fifty-eight years old."],
    ["What does he say when his wife asks him to quit?", ["That he can quit whenever he wants", "That he will quit next month", "That he needs help", "That he does not drink much"], 0, "He gets angry and says he can quit whenever he wants, but he never has."],
    ["How long did the seizure last?", ["A few seconds", "About ten minutes", "About two minutes", "About half an hour"], 2, "It lasted about two minutes; Marisol called 911."],
    ["What does the family want now?", ["That he moves out", "That he stays in the hospital for a month", "That he stops working", "That he gets help and does not feel alone"], 3, "\"Queremos que reciba ayuda y que no se sienta solo.\""]
  ],
  'hoja-de-alta': [
    ["Which effects may appear in the first days?", ["Fever and a rash", "Sleepiness, a dry mouth or dizziness", "Hunger and weight loss", "Headache and cough"], 1, "In the first days the patient may feel sleepy, have a dry mouth or feel dizzy."],
    ["When is the follow-up appointment?", ["In seven days", "In three days", "In two weeks", "In a month"], 0, "The sheet says the appointment is in seven days."],
    ["What should the family bring to the appointment?", ["Only the insurance card", "Only this sheet", "Blood test results", "All the medicines in their bottles and a list of questions"], 3, "Bring all the medicines in their bottles and a list of questions."],
    ["What should the family do at home for safety?", ["Keep the patient in bed", "Take away the phone", "Lock up the medicines and remove dangerous objects", "Never leave the house"], 2, "Lock up the medicines and remove any dangerous objects from the home."]
  ],
  'la-llamada': [
    ["What time was it when María picked up the phone?", ["Early in the morning", "Almost midnight", "Around noon", "Six in the evening"], 1, "It was almost midnight."],
    ["What was the counselor's name?", ["Sofía", "María", "Elena", "Rosa"], 0, "The counselor answers, \"Línea 988, habla Sofía.\""],
    ["What had happened to María?", ["Her sister had moved away", "She had an accident", "She had lost her job and felt like a burden to her children", "She had a fight with her husband"], 2, "She had lost her job and felt like a burden to her children."],
    ["How did María feel when she hung up?", ["Exactly the same", "Angry with the counselor", "Ready to go to the hospital", "Calmer, and no longer alone"], 3, "She hung up calmer: not everything was solved, but she was no longer alone."]
  ],
  'nervios-y-trabajo': [
    ["Whom did Yolanda leave behind in her town?", ["Her husband", "Her son, then ten", "Her daughter, then five", "Her parents"], 2, "She left her daughter, who was five, with her mother."],
    ["How many hours does Yolanda sleep?", ["Four or five", "Six or seven", "Eight", "Two or three"], 0, "She works at a hotel and a restaurant and sleeps four or five hours."],
    ["What did a friend tell her about the clinic?", ["It is open only at night", "They do not ask about papers, and her information is private", "She needs an appointment months ahead", "They only see emergencies"], 1, "Her friend said they do not ask about papers to treat her and her information is private."]
  ],
  'el-curandero': [
    ["What did Joel's grandmother first think was wrong?", ["A strong susto, or that someone had done him harm", "A brain illness", "Too much work", "Drugs"], 0, "His grandmother thought it was a strong susto, or that someone had done him harm."],
    ["What did don Ramiro do for Joel?", ["He gave him pills", "He sent him to the hospital", "He told the family to wait", "A limpia with herbs and an egg, a prayer and a tea"], 3, "Don Ramiro did a limpia with herbs and an egg, prayed and gave him a tea."],
    ["What did the doctor say about prayer and teas?", ["They must stop", "They work better than medicine", "They are fine as long as they do not replace the medicine", "They are dangerous"], 2, "There is no problem with prayer or teas, as long as they do not replace the medicine."]
  ],
  'dichos': [
    ["Why might a patient say \"Más vale pájaro en mano que cien volando\"?", ["To ask for a new medicine", "To explain not wanting to change medicines", "To complain about the doctor", "To talk about a pet"], 1, "Something certain is better than risking it for something better: the patient does not want to change medicines."],
    ["Who uses \"Dime con quién andas y te diré quién eres\" in the text?", ["A parent worried about a son's friends", "A patient talking about the doctor", "A nurse", "A teacher"], 0, "A parent uses it when worried about the son's company."],
    ["\"Al mal tiempo, buena cara\" is common in which patients?", ["Patients who shout", "Children", "Patients who suffer and do not show it", "Patients with insomnia"], 2, "It is common in patients who suffer and do not show it."],
    ["With \"No hay mal que dure cien años\", what can the clinician do?", ["Tell the patient to wait", "Change the subject", "Correct the saying", "Ask what would change if the trouble ended"], 3, "It is a phrase of hope, and it can help the person talk about what would change if the trouble ended."]
  ]
});
