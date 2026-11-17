/* Numbers, dates and time (Hablemos 0.8.0). Used by #/numbers (js/numbers.js).
   DRAFT FOR REVIEW by a native Spanish-speaking clinician before use. US / Mexican baseline; clinician and nurse lines use usted.
   Shape: window.ES_NUMBERS = {
     groups: [{ id, title, note, rows: [[label, es, tricky?]] }],
     clinical: [[es, en, question, answer, [wrong, wrong, wrong]]] }.
   label: what the learner reads ("16", "2:30", "½ tablet", "988"). es: how it is said, plain Spanish (spoken and recorded).
   tricky = 1 marks a form learners often get wrong; the quiz asks those rows twice as often.
   Within a group no label may also be a correct reading of another row's es (the quiz takes distractors from the same
   group): alternative wordings go in the group note, never in a second row.
   note: plain text; <i>…</i> and <b>…</b> are allowed for Spanish words.
   clinical: a sentence a patient, relative or nurse might say; the learner hears es and answers the English question.
   answer and the three wrong answers are English and all different. Doses are ordinary prescribed schedules only.
   Group ids are permanent (scores are saved under them): append only after release. */
window.ES_NUMBERS = {
  groups: [
    { id: 'n0-15', title: 'Numbers 0 to 15', note: 'Uno becomes <i>un</i> before a masculine noun and <i>una</i> before a feminine one: <i>un día, una pastilla</i>. Eleven to fifteen have their own words. Listen closely for <i>dos</i> (2) and <i>doce</i> (12), <i>seis</i> (6) and <i>siete</i> (7), <i>cuatro</i> (4) and <i>catorce</i> (14).', rows: [
      ['0', 'cero'], ['1', 'uno'], ['2', 'dos'], ['3', 'tres'], ['4', 'cuatro'], ['5', 'cinco'], ['6', 'seis'], ['7', 'siete'],
      ['8', 'ocho'], ['9', 'nueve'], ['10', 'diez'], ['11', 'once', 1], ['12', 'doce', 1], ['13', 'trece', 1], ['14', 'catorce', 1], ['15', 'quince', 1]
    ] },
    { id: 'n16-29', title: 'Numbers 16 to 29', note: 'From 16 to 29 each number is one word. Some carry a written accent: <i>dieciséis, veintidós, veintitrés, veintiséis</i>. Before a masculine noun 21 becomes <i>veintiún</i>: <i>veintiún años</i>; before a feminine noun, <i>veintiuna semanas</i>.', rows: [
      ['16', 'dieciséis', 1], ['18', 'dieciocho'], ['19', 'diecinueve'], ['20', 'veinte'], ['21', 'veintiuno', 1], ['22', 'veintidós', 1],
      ['23', 'veintitrés', 1], ['24', 'veinticuatro'], ['25', 'veinticinco'], ['26', 'veintiséis', 1], ['28', 'veintiocho'], ['29', 'veintinueve']
    ] },
    { id: 'tens', title: 'Tens: 30 to 99', note: 'From 31 on a number is three words joined by <i>y</i>: <i>treinta y uno</i>, never one word. <i>Sesenta</i> (60) and <i>setenta</i> (70) sound alike in a fast answer: if it matters, ask <i>¿sesenta o setenta?</i>', rows: [
      ['30', 'treinta'], ['31', 'treinta y uno', 1], ['40', 'cuarenta'], ['50', 'cincuenta'], ['60', 'sesenta', 1], ['67', 'sesenta y siete', 1],
      ['70', 'setenta', 1], ['76', 'setenta y seis', 1], ['80', 'ochenta'], ['90', 'noventa'], ['99', 'noventa y nueve']
    ] },
    { id: 'hundreds', title: 'Hundreds', note: 'Exactly 100 is <i>cien</i>; from 101 to 199 it is <i>ciento</i>: <i>ciento uno, ciento cincuenta</i>, with no <i>y</i> after ciento. Three hundreds are irregular: <i>quinientos</i> (500), <i>setecientos</i> (700) and <i>novecientos</i> (900). From 200 the hundreds agree with a feminine noun: <i>doscientas personas</i>.', rows: [
      ['100', 'cien', 1], ['101', 'ciento uno', 1], ['150', 'ciento cincuenta'], ['200', 'doscientos'], ['300', 'trescientos'], ['400', 'cuatrocientos'],
      ['500', 'quinientos', 1], ['700', 'setecientos', 1], ['800', 'ochocientos'], ['900', 'novecientos', 1], ['250 people', 'doscientas cincuenta personas', 1]
    ] },
    { id: 'thousands', title: 'Thousands, years and a million', note: 'One thousand is just <i>mil</i>, with no <i>un</i>: <i>mil quinientos</i>. Years are read as whole numbers: 1998 is <i>mil novecientos noventa y ocho</i>, 2026 is <i>dos mil veintiséis</i>. A million takes <i>de</i> before a noun: <i>un millón de dólares</i>.', rows: [
      ['1,000', 'mil', 1], ['1,500', 'mil quinientos', 1], ['2,000', 'dos mil'], ['2,500', 'dos mil quinientos'], ['5,000', 'cinco mil'], ['10,000', 'diez mil'],
      ['1975', 'mil novecientos setenta y cinco'], ['1998', 'mil novecientos noventa y ocho', 1], ['2001', 'dos mil uno'], ['2026', 'dos mil veintiséis', 1],
      ['$1,000,000', 'un millón de dólares', 1]
    ] },
    { id: 'ordinals', title: 'First, second, third', note: '<i>Primero</i> and <i>tercero</i> drop the final o before a masculine noun: <i>el primer piso, el tercer piso</i>. Ordinals agree with the noun: <i>la primera vez, la cuarta semana</i>. Above ten most people use the plain number: <i>el piso once</i>. In Mexico the ground floor is <i>la planta baja</i>, so <i>el primer piso</i> is usually one floor up: ask.', rows: [
      ['1st floor', 'el primer piso', 1], ['the first time', 'la primera vez'], ['2nd appointment', 'la segunda cita'], ['3rd floor', 'el tercer piso', 1],
      ['4th week', 'la cuarta semana'], ['5th day', 'el quinto día'], ['6th grade', 'sexto grado'], ['7th', 'séptimo', 1], ['9th', 'noveno', 1], ['10th', 'décimo', 1]
    ] },
    { id: 'clock', title: 'Telling the time', note: 'One o\'clock is singular, <i>es la una</i>; every other hour is plural, <i>son las dos</i>. At a time is <i>a la una, a las tres</i>. Quarter past is <i>y cuarto</i>, half past is <i>y media</i>. For quarter to you will hear <i>las seis menos cuarto</i> and, very often in Mexico, <i>un cuarto para las seis</i> or <i>faltan quince para las seis</i>: all mean 5:45. In the same way, 11:50 is also <i>diez para las doce</i>. Add <i>de la mañana, de la tarde, de la noche</i> for a.m. and p.m. Appointment slips often use the 24-hour clock: 16:00 is <i>las cuatro de la tarde</i>, and you may hear <i>las dieciséis horas</i>.', rows: [
      ['1:00', 'es la una', 1], ['2:00', 'son las dos'], ['2:30', 'son las dos y media'], ['4:15', 'son las cuatro y cuarto'], ['5:45', 'son las seis menos cuarto', 1],
      ['8:10', 'son las ocho y diez'], ['11:50', 'son las doce menos diez', 1], ['7:00 a.m.', 'las siete de la mañana'], ['1:30 p.m.', 'la una y media de la tarde', 1],
      ['9:00 p.m.', 'las nueve de la noche'], ['16:00 on a slip', 'las cuatro de la tarde', 1], ['noon', 'el mediodía', 1], ['midnight', 'la medianoche', 1]
    ] },
    { id: 'days-months', title: 'Days and months', note: 'Days and months are written in lowercase in Spanish. <i>El lunes</i> means on Monday (this one); <i>los lunes</i> means on Mondays (every week): no word for on. <i>Junio</i> and <i>julio</i> sound close: confirm with the month number. <i>Septiembre</i> is also spelled <i>setiembre</i>.', rows: [
      ['on Monday', 'el lunes', 1], ['on Mondays', 'los lunes', 1], ['Tuesday', 'martes'], ['Wednesday', 'miércoles', 1], ['Friday', 'viernes'], ['Saturday', 'sábado', 1],
      ['Sunday', 'domingo'], ['January', 'enero'], ['February', 'febrero'], ['June', 'junio', 1], ['July', 'julio', 1], ['September', 'septiembre']
    ] },
    { id: 'dates', title: 'Dates', note: 'A date is <i>el</i> + number + <i>de</i> + month: <i>el quince de julio</i>. The first of the month is <i>el primero</i> (some speakers say <i>el uno</i>); every other day is a plain number: <i>el dos, el veintiuno</i>. The year follows <i>de</i>: <i>de dos mil veintiséis</i>. Many patients write the day first, so 3/4 may mean 3 April: say the month aloud and confirm.', rows: [
      ['May 1', 'el primero de mayo', 1], ['the 2nd', 'el dos'], ['March 3, 2026', 'el tres de marzo de dos mil veintiséis', 1],
      ['3/4/2026 (day/month)', 'el tres de abril de dos mil veintiséis', 1], ['July 15', 'el quince de julio'], ['September 16', 'el dieciséis de septiembre'],
      ['the 21st', 'el veintiuno', 1], ['December 24', 'el veinticuatro de diciembre'], ['October 12, 1985', 'el doce de octubre de mil novecientos ochenta y cinco'],
      ['9/8/1990 (day/month)', 'el nueve de agosto de mil novecientos noventa', 1]
    ] },
    { id: 'spans', title: 'How long, how often, at what age', note: '<i>Hace</i> + time means ago: <i>hace tres meses</i>. <i>Desde hace</i> + time means for, and it is still going on. Many speakers count days inclusively: <i>ocho días</i> is a week and <i>quince días</i> is two weeks. <i>Una quincena</i> is about two weeks, often a pay period. In Mexico <i>cada tercer día</i> means every other day, not every third day: confirm with <i>¿un día sí y un día no?</i> For age, <i>a los</i> + number + <i>años</i>: <i>a los veintiún años</i>.', rows: [
      ['a week ago', 'hace ocho días', 1], ['two weeks ago', 'hace quince días', 1], ['two weeks (half a month)', 'una quincena', 1], ['three months ago', 'hace tres meses'],
      ['a year and a half ago', 'hace un año y medio'], ['for two days (and still)', 'desde hace dos días'], ['for six months', 'durante seis meses'],
      ['every day', 'todos los días'], ['twice a week', 'dos veces por semana'], ['every other day (Mexico)', 'cada tercer día', 1],
      ['at age 19', 'a los diecinueve años'], ['at age 21', 'a los veintiún años', 1]
    ] },
    { id: 'doses', title: 'Doses and schedules', note: '<i>Media pastilla</i> is half a tablet; <i>una pastilla y media</i> is one and a half. <i>Al día</i> and <i>por día</i> both mean a day; twice a day is often said as <i>por la mañana y por la noche</i>. Before a masculine noun, 1 is <i>un</i>: <i>un miligramo</i>. For decimals, Mexico and the US say <i>punto</i> (<i>cero punto cinco</i>); many other countries say <i>coma</i> (<i>cero coma cinco</i>): both mean 0.5. Always read a dose back and check it against the label.', rows: [
      ['½ tablet', 'media pastilla', 1], ['1½ tablets', 'una pastilla y media', 1], ['2 tablets', 'dos pastillas'], ['once a day', 'una vez al día'],
      ['twice a day', 'dos veces al día'], ['every 8 hours', 'cada ocho horas'], ['every 12 hours', 'cada doce horas', 1], ['in the morning', 'por la mañana'],
      ['at bedtime', 'antes de dormir'], ['1 mg', 'un miligramo', 1], ['0.5 mg', 'cero punto cinco miligramos', 1], ['50 mg', 'cincuenta miligramos']
    ] },
    { id: 'phones-scales', title: 'Phone numbers, scales and rooms', note: 'Say 988 digit by digit: <i>nueve ocho ocho</i>; for Spanish, callers press 2 (<i>oprima dos</i>). In Mexico and much of Latin America phone numbers are read in pairs: <i>cincuenta y cinco, doce…</i> Read the number back in pairs to confirm. Explain a scale before you ask: <i>del cero al diez, donde cero es nada y diez es lo peor</i>. 100% is <i>cien por ciento</i>. Some nurses read a blood pressure with <i>entre</i> instead of <i>sobre</i>.', rows: [
      ['988', 'nueve ocho ocho', 1], ['press 2', 'oprima dos'], ['55 12 34 56 78', 'cincuenta y cinco, doce, treinta y cuatro, cincuenta y seis, setenta y ocho', 1],
      ['from 0 to 10', 'del cero al diez'], ['7 out of 10', 'un siete de diez'], ['50%', 'cincuenta por ciento'], ['100%', 'cien por ciento', 1],
      ['Room 312', 'la habitación trescientos doce'], ['Bed 4', 'la cama cuatro'], ['Bed 14', 'la cama catorce', 1],
      ['38.5 °C', 'treinta y ocho punto cinco grados'], ['BP 120/80', 'ciento veinte sobre ochenta']
    ] }
  ],
  clinical: [
    ['Duermo como tres horas cada noche.', 'I sleep about three hours a night.', 'How long does the patient sleep?', 'About 3 hours a night', ['About 13 hours a night', 'About 2 hours a night', 'About 8 hours a night']],
    ['Llevo quince días sin poder dormir bien.', 'I have not been able to sleep well for two weeks.', 'How long has the sleep problem lasted?', 'About two weeks', ['Fifteen weeks', 'Five days', 'About a week']],
    ['Empecé a oír voces a los diecinueve años.', 'I started hearing voices at nineteen.', 'At what age did the voices start?', '19', ['9', '16', '29']],
    ['Mi cita es el martes a las diez y media.', 'My appointment is on Tuesday at ten thirty.', 'When is the appointment?', 'Tuesday at 10:30', ['Thursday at 10:30', 'Tuesday at 10:15', 'Tuesday at 12:30']],
    ['Mi papá tiene setenta años.', 'My father is seventy.', 'How old is the father?', '70', ['60', '17', '77']],
    ['Tómese media pastilla por la mañana.', 'Take half a tablet in the morning.', 'What did the nurse say to take, and when?', 'Half a tablet in the morning', ['One and a half tablets in the morning', 'Half a tablet at night', 'Two tablets in the morning']],
    ['Mi mamá toma una pastilla y media en la noche.', 'My mother takes one and a half tablets at night.', 'What does the mother take at night?', 'One and a half tablets', ['Half a tablet', 'One tablet', 'Two and a half tablets']],
    ['Me tomo como seis cervezas al día.', 'I drink about six beers a day.', 'How much does the patient drink?', 'About 6 beers a day', ['About 7 beers a day', 'About 16 beers a day', 'About 6 beers a week']],
    ['Nací el tres de abril de mil novecientos ochenta y dos.', 'I was born on April 3, 1982.', 'What is the date of birth?', 'April 3, 1982', ['March 4, 1982', 'April 3, 1972', 'April 13, 1982']],
    ['El paciente lleva doce días en el hospital.', 'The patient has been in the hospital for twelve days.', 'How long has the patient been in the hospital?', '12 days', ['2 days', '20 days', '12 weeks']],
    ['Si se siente en peligro, puede llamar al nueve ocho ocho y oprimir el dos para español.', 'If you feel in danger, you can call 988 and press 2 for Spanish.', 'What number and option did the nurse give?', '988, then press 2', ['911, then press 2', '988, then press 1', '998, then press 2']],
    ['La depresión me empezó hace un año y medio.', 'The depression started a year and a half ago.', 'When did the depression start?', 'A year and a half ago', ['A year ago', 'Half a year ago', 'Two and a half years ago']],
    ['Hace ocho días que no come bien.', 'He has not eaten well for a week.', 'How long has he not been eating well?', 'About a week', ['Eight weeks', 'About two weeks', 'Eighteen days']],
    ['Tiene que volver a la clínica el primero de junio.', 'You have to come back to the clinic on June 1.', 'When is the return visit?', 'June 1', ['July 1', 'June 11', 'June 3']],
    ['Le toca la medicina cada ocho horas.', 'The medicine is due every eight hours.', 'How often is the medicine given?', 'Every 8 hours', ['Every 12 hours', 'Eight times a day', 'Every 4 hours']],
    ['Su cita es a las tres menos cuarto de la tarde.', 'Your appointment is at a quarter to three in the afternoon.', 'What time is the appointment?', '2:45 p.m.', ['3:15 p.m.', '3:45 p.m.', '2:15 p.m.']],
    ['Mi hijo tiene dieciséis años.', 'My son is sixteen.', 'How old is the son?', '16', ['6', '17', '26']],
    ['Tomo dos pastillas al día, una en la mañana y una en la noche.', 'I take two tablets a day, one in the morning and one at night.', 'How does the patient take the tablets?', 'Two a day: one morning, one night', ['Twelve a day', 'Two in the morning', 'One at night only']],
    ['Los sábados me tomo como doce cervezas.', 'On Saturdays I drink about twelve beers.', 'How much does the patient drink on Saturdays?', 'About 12 beers', ['About 2 beers', 'About 20 beers', 'About 12 beers every day']],
    ['Fumo una cajetilla al día, como veinte cigarros.', 'I smoke a pack a day, about twenty cigarettes.', 'How much does the patient smoke?', 'About 20 cigarettes a day', ['About 12 cigarettes a day', 'About 2 cigarettes a day', 'About 20 cigarettes a week']],
    ['El paciente de la cama catorce no ha dormido.', 'The patient in bed fourteen has not slept.', 'Which bed is the nurse talking about?', 'Bed 14', ['Bed 4', 'Bed 40', 'Bed 24']],
    ['La señora del cuarto trescientos doce quiere hablar con usted.', 'The lady in room three twelve wants to talk to you.', 'Which room?', 'Room 312', ['Room 302', 'Room 213', 'Room 320']],
    ['La última vez que tomé fue hace tres días.', 'The last time I drank was three days ago.', 'When was the last drink?', 'Three days ago', ['Three weeks ago', 'In three days', 'Thirteen days ago']],
    ['Me hospitalizaron por primera vez en dos mil quince.', 'I was first hospitalized in 2015.', 'When was the first hospitalization?', '2015', ['2005', '2050', '2016']],
    ['Me tomé la pastilla a la una y media.', 'I took the tablet at one thirty.', 'When did the patient take the tablet?', 'At 1:30', ['At 12:30', 'At 2:30', 'At 1:15']],
    ['Del cero al diez, mi ansiedad está en ocho.', 'From zero to ten, my anxiety is at eight.', 'What score does the patient give the anxiety?', '8 out of 10', ['10 out of 10', '3 out of 10', '6 out of 10']],
    ['Los signos vitales se toman a las seis de la mañana.', 'Vital signs are taken at six in the morning.', 'When are vital signs taken?', '6:00 a.m.', ['6:00 p.m.', '7:00 a.m.', 'Every 6 hours']],
    ['Nos vemos en la clínica en dos semanas, el jueves veinte.', 'We will see you at the clinic in two weeks, on Thursday the 20th.', 'When is the follow-up?', 'Thursday the 20th, in two weeks', ['Tuesday the 20th, in two weeks', 'Thursday the 12th, in two weeks', 'Thursday the 20th, in two months']],
    ['Mi mamá viene a visitarme los domingos.', 'My mom comes to visit me on Sundays.', 'When does the mother visit?', 'Every Sunday', ['This Sunday only', 'Every Saturday', 'Every day']],
    ['Tómese la pastilla cada tercer día.', 'Take the tablet every other day.', 'How often should the tablet be taken (Mexican usage)?', 'Every other day', ['Three times a day', 'Every day', 'Once a week']],
    ['Tengo veintiún años.', 'I am twenty-one.', 'How old is the patient?', '21', ['20', '31', '12']],
    ['El doctor le subió la dosis a cincuenta miligramos.', 'The doctor raised the dose to fifty milligrams.', 'What is the new dose?', '50 mg', ['15 mg', '60 mg', '5 mg']],
    ['Lo trajeron a urgencias a las once y media de la noche.', 'They brought him to the emergency room at eleven thirty at night.', 'When did he arrive?', '11:30 p.m.', ['11:30 a.m.', '12:30 a.m.', '11:15 p.m.']],
    ['Mi teléfono es el cincuenta y cinco, sesenta y siete, doce, treinta, ochenta.', 'My phone number is 55 67 12 30 80.', 'What is the phone number?', '55 67 12 30 80', ['55 77 12 30 80', '55 67 02 30 80', '55 67 12 13 80']],
    ['Desde hace seis meses oigo voces.', 'I have been hearing voices for six months.', 'How long has the patient heard voices?', 'For six months, and still', ['For seven months', 'For six weeks', 'Six months ago, then they stopped']],
    ['Me ponen la inyección cada mes, el día quince.', 'They give me the injection every month, on the fifteenth.', 'When is the injection given?', 'Monthly, on the 15th', ['Every 15 days', 'Monthly, on the 5th', 'Every 5 months']],
    ['La niña tiene doce años y está en sexto grado.', 'The girl is twelve and in sixth grade.', 'How old is the girl?', '12', ['2', '20', '6']],
    ['Su cita quedó para el tres de marzo a las nueve.', 'Your appointment is set for March 3 at nine.', 'When is the appointment?', 'March 3 at 9:00', ['May 3 at 9:00', 'March 13 at 9:00', 'March 3 at 7:00']],
    ['Ya van tres noches que se levanta a las cuatro de la mañana.', 'For three nights now he has been getting up at four in the morning.', 'What time does he get up?', '4:00 a.m.', ['3:00 a.m.', '4:00 p.m.', '5:00 a.m.']],
    ['Llevo dos años sin tomar.', 'I have not had a drink in two years.', 'How long has the patient been without alcohol?', 'Two years', ['Twelve years', 'Two months', 'Since age two']]
  ]
};
