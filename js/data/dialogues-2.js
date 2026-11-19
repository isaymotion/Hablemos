/* More dialogues for the Speaking page (listen, shadow, role-play). Release 0.9.0.
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Shape: window.DIALOGUES = (window.DIALOGUES || []).concat([ { id, level, title, roles: ['You', 'Other'], you: 0, lines: [[speakerIndex, spanish, english, tuVariant?]] } ])
   tuVariant = the same line in tú, shown when the register setting is informal. Only the lines of the clinician or staff member have one.
   Ids are permanent: append new dialogues only after release. Listening questions for these ids are in listen-questions-3.js. */
window.DIALOGUES = (window.DIALOGUES || []).concat([
{ id: "appointment-call", level: "A1", title: "A phone call to make an appointment", roles: ["You (front desk)", "Caller"], you: 0, lines: [
[0, `Clínica de salud mental, buenos días. ¿En qué puedo ayudarle?`, `Mental health clinic, good morning. How can I help you?`, `Clínica de salud mental, buenos días. ¿En qué puedo ayudarte?`],
[1, `Buenos días. Quiero hacer una cita con la doctora Navarro.`, `Good morning. I want to make an appointment with Dr. Navarro.`],
[0, `Claro. ¿Cuál es su nombre, por favor?`, `Of course. What is your name, please?`, `Claro. ¿Cuál es tu nombre, por favor?`],
[1, `Me llamo Lupe Ortiz.`, `My name is Lupe Ortiz.`],
[0, `Gracias, señora Ortiz. ¿Puede venir el martes a las nueve y media?`, `Thank you, Mrs. Ortiz. Can you come on Tuesday at nine thirty?`, `Gracias, Lupe. ¿Puedes venir el martes a las nueve y media?`],
[1, `El martes no puedo. Trabajo por la mañana. ¿Hay lugar el miércoles por la tarde?`, `I cannot on Tuesday. I work in the morning. Is there room on Wednesday afternoon?`],
[0, `Sí, el miércoles veinte a las tres de la tarde hay lugar. ¿Le sirve?`, `Yes, on Wednesday the twentieth at three in the afternoon there is room. Does that work?`, `Sí, el miércoles veinte a las tres de la tarde hay lugar. ¿Te sirve?`],
[1, `Sí, a las tres está bien.`, `Yes, three o'clock is fine.`],
[0, `Perfecto. ¿Me da su número de teléfono, por favor?`, `Perfect. Will you give me your phone number, please?`, `Perfecto. ¿Me das tu número de teléfono, por favor?`],
[1, `Es el cinco, cinco, cero, dos, uno, ocho, cuatro, siete.`, `It is five, five, zero, two, one, eight, four, seven.`],
[0, `Gracias. Traiga su tarjeta del seguro y llegue diez minutos antes.`, `Thank you. Bring your insurance card and arrive ten minutes early.`, `Gracias. Trae tu tarjeta del seguro y llega diez minutos antes.`],
[1, `Muy bien. Miércoles veinte, a las tres. Gracias.`, `Very good. Wednesday the twentieth, at three. Thank you.`]
]},
{ id: "vitals-allergies", level: "A1", title: "Vital signs and allergies with a patient", roles: ["You (nurse)", "Patient"], you: 0, lines: [
[0, `Buenos días, señor Ramiro. Soy la enfermera. Voy a tomarle la presión.`, `Good morning, Mr. Ramiro. I am the nurse. I am going to take your blood pressure.`, `Buenos días, Ramiro. Soy la enfermera. Voy a tomarte la presión.`],
[1, `Buenos días. Está bien.`, `Good morning. That is fine.`],
[0, `Siéntese, por favor. Ponga el brazo aquí.`, `Please sit down. Put your arm here.`, `Siéntate, por favor. Pon el brazo aquí.`],
[1, `¿Me va a doler?`, `Is it going to hurt?`],
[0, `No, solo aprieta un poco. Su presión está bien: ciento veinte sobre ochenta.`, `No, it only squeezes a little. Your pressure is fine: one twenty over eighty.`, `No, solo aprieta un poco. Tu presión está bien: ciento veinte sobre ochenta.`],
[0, `Ahora la temperatura. Abra la boca y ponga esto debajo de la lengua.`, `Now the temperature. Open your mouth and put this under your tongue.`, `Ahora la temperatura. Abre la boca y pon esto debajo de la lengua.`],
[0, `Tiene treinta y seis y medio. No tiene fiebre.`, `It is thirty-six and a half. You do not have a fever.`, `Tienes treinta y seis y medio. No tienes fiebre.`],
[0, `Una pregunta importante. ¿Es alérgico a alguna medicina?`, `One important question. Are you allergic to any medicine?`, `Una pregunta importante. ¿Eres alérgico a alguna medicina?`],
[1, `Sí, soy alérgico a la penicilina. Me salen ronchas.`, `Yes, I am allergic to penicillin. I get hives.`],
[0, `Gracias. ¿Tiene alergia a algún alimento?`, `Thank you. Do you have an allergy to any food?`, `Gracias. ¿Tienes alergia a algún alimento?`],
[1, `No, a ningún alimento.`, `No, to no food.`],
[0, `Muy bien. Ya terminé. La doctora viene en cinco minutos.`, `Very good. I am finished. The doctor will come in five minutes.`]
]},
{ id: "sleep-appetite", level: "A2", title: "Sleep and appetite at a follow-up visit", roles: ["You (doctor)", "Patient"], you: 0, lines: [
[0, `Buenas tardes, Yesenia. ¿Cómo ha estado desde la última cita?`, `Good afternoon, Yesenia. How have you been since the last visit?`, `Buenas tardes, Yesenia. ¿Cómo has estado desde la última cita?`],
[1, `Un poco mejor, doctora, pero todavía duermo mal.`, `A little better, doctor, but I still sleep badly.`],
[0, `¿A qué hora se acuesta y a qué hora se duerme?`, `What time do you go to bed and what time do you fall asleep?`, `¿A qué hora te acuestas y a qué hora te duermes?`],
[1, `Me acuesto a las diez, pero me duermo hasta la una. Y me despierto a las cinco.`, `I go to bed at ten, but I do not fall asleep until one. And I wake up at five.`],
[0, `¿Se siente descansada en la mañana?`, `Do you feel rested in the morning?`, `¿Te sientes descansada en la mañana?`],
[1, `No, me levanto muy cansada. Duermo como cuatro horas.`, `No, I get up very tired. I sleep about four hours.`],
[0, `¿Y el apetito? ¿Cómo está comiendo?`, `And your appetite? How are you eating?`, `¿Y el apetito? ¿Cómo estás comiendo?`],
[1, `Como poco. Antes desayunaba todos los días, pero ahora solo tomo un café.`, `I eat little. Before, I had breakfast every day, but now I only have a coffee.`],
[0, `¿Ha bajado de peso?`, `Have you lost weight?`, `¿Has bajado de peso?`],
[1, `Sí, creo que tres kilos en un mes.`, `Yes, I think three kilos in a month.`],
[0, `¿Toma la medicina todas las noches?`, `Do you take the medicine every night?`, `¿Tomas la medicina todas las noches?`],
[1, `La tomo, pero a veces la olvido.`, `I take it, but sometimes I forget it.`]
]},
{ id: "mother-intake", level: "A2", title: "A mother describes her son's changes", roles: ["You (doctor)", "Mother"], you: 0, lines: [
[0, `Buenos días, señora. Gracias por venir con su hijo. Ahora quiero escuchar lo que usted ha visto.`, `Good morning, ma'am. Thank you for coming with your son. Now I want to hear what you have seen.`, `Buenos días, señora. Gracias por venir con tu hijo. Ahora quiero escuchar lo que tú has visto.`],
[1, `Buenos días, doctora. Brayan ya no es el mismo. Empezó hace tres meses.`, `Good morning, doctor. Brayan is no longer the same. It started three months ago.`],
[0, `¿Qué ha cambiado?`, `What has changed?`],
[1, `Antes salía con sus amigos y jugaba fútbol. Ahora se queda en su cuarto todo el día.`, `Before, he went out with his friends and played soccer. Now he stays in his room all day.`],
[0, `¿Cómo duerme y cómo come?`, `How does he sleep and how does he eat?`],
[1, `Duerme de día y de noche anda despierto. Casi no come con nosotros.`, `He sleeps in the day and is awake at night. He hardly eats with us.`],
[0, `¿Ha hablado de cosas raras? ¿Ha dicho que oye voces o que alguien lo vigila?`, `Has he talked about strange things? Has he said he hears voices or that someone is watching him?`],
[1, `Una vez dijo que los vecinos hablaban de él. Yo me asusté mucho.`, `Once he said the neighbors were talking about him. I got very scared.`],
[0, `Es difícil para usted, lo sé. ¿Ha usado alcohol o drogas, que usted sepa?`, `It is hard for you, I know. Has he used alcohol or drugs, as far as you know?`, `Es difícil para ti, lo sé. ¿Ha usado alcohol o drogas, que tú sepas?`],
[1, `No sé. Una vez su ropa olía a marihuana, pero él dice que no fuma.`, `I do not know. Once his clothes smelled like marijuana, but he says he does not smoke.`],
[0, `¿Ha dicho algo de hacerse daño o de no querer vivir?`, `Has he said anything about hurting himself or not wanting to live?`],
[1, `No, nunca, gracias a Dios. Pero está muy enojado y a veces grita.`, `No, never, thank God. But he is very angry and sometimes yells.`]
]},
{ id: "voluntary-admission", level: "B1", title: "Explaining a voluntary admission and the unit rules", roles: ["You (doctor)", "Patient"], you: 0, lines: [
[0, `Mateo, después de lo que hemos hablado, le recomiendo quedarse en la unidad unos días.`, `Mateo, after what we have talked about, I recommend that you stay on the unit for a few days.`, `Mateo, después de lo que hemos hablado, te recomiendo quedarte en la unidad unos días.`],
[1, `¿Es obligatorio? No quiero que me encierren.`, `Is it required? I do not want them to lock me up.`],
[0, `No es obligatorio. Es un ingreso voluntario, o sea que usted decide si firma.`, `It is not required. It is a voluntary admission, meaning you decide whether to sign.`, `No es obligatorio. Es un ingreso voluntario, o sea que tú decides si firmas.`],
[1, `¿Y si cambio de opinión?`, `And if I change my mind?`],
[0, `Puede pedir el alta por escrito. El equipo lo evalúa y le explica los pasos.`, `You can ask for discharge in writing. The team evaluates you and explains the steps.`, `Puedes pedir el alta por escrito. El equipo te evalúa y te explica los pasos.`],
[1, `¿Qué reglas hay aquí?`, `What rules are there here?`],
[0, `Las comidas son a horas fijas y las visitas son por la tarde, de cuatro a seis.`, `Meals are at set times and visits are in the afternoon, from four to six.`],
[0, `Su celular se guarda en la oficina, pero puede llamar a su familia desde el teléfono de la unidad.`, `Your cell phone is kept in the office, but you can call your family from the unit phone.`, `Tu celular se guarda en la oficina, pero puedes llamar a tu familia desde el teléfono de la unidad.`],
[0, `Le pedimos que respete la privacidad de los otros pacientes y que no salga de la unidad sin avisar.`, `We ask that you respect the privacy of the other patients and not leave the unit without telling us.`, `Te pedimos que respetes la privacidad de los otros pacientes y que no salgas de la unidad sin avisar.`],
[1, `Está bien. ¿Puedo ver a mi mamá mañana?`, `All right. Can I see my mom tomorrow?`],
[0, `Sí, claro. Si firma aquí, aviso a la enfermera para que llame a su mamá.`, `Yes, of course. If you sign here, I will tell the nurse so that she calls your mom.`, `Sí, claro. Si firmas aquí, aviso a la enfermera para que llame a tu mamá.`],
[1, `Entonces firmo. Gracias por explicarme.`, `Then I will sign. Thank you for explaining to me.`]
]},
{ id: "safety-checkin", level: "B1", title: "A safety check-in the morning after admission", roles: ["You (doctor)", "Patient"], you: 0, lines: [
[0, `Buenos días, Jorge. ¿Cómo pasó la noche?`, `Good morning, Jorge. How was your night?`, `Buenos días, Jorge. ¿Cómo pasaste la noche?`],
[1, `Dormí poco. Me desperté varias veces y pensé mucho en mi familia.`, `I slept little. I woke up several times and thought a lot about my family.`],
[0, `Es normal sentirse así la primera noche. Hoy quiero preguntarle algo importante.`, `It is normal to feel that way the first night. Today I want to ask you something important.`, `Es normal sentirse así la primera noche. Hoy quiero preguntarte algo importante.`],
[0, `¿Ha pensado en quitarse la vida?`, `Have you thought about ending your life?`, `¿Has pensado en quitarte la vida?`],
[1, `Anoche sí, un rato. Hoy no tanto.`, `Last night, yes, for a while. Today not so much.`],
[0, `Gracias por decírmelo. ¿Está teniendo esos pensamientos ahora?`, `Thank you for telling me. Are you having those thoughts now?`, `Gracias por decírmelo. ¿Estás teniendo esos pensamientos ahora?`],
[1, `Ahora no. Pero me da miedo que vuelvan.`, `Not now. But I am afraid they will come back.`],
[0, `¿Tiene un plan o la intención de actuar según esos pensamientos?`, `Do you have a plan or the intention to act on those thoughts?`, `¿Tienes un plan o la intención de actuar según esos pensamientos?`],
[1, `No, no tengo ningún plan. Quiero mejorar.`, `No, I do not have any plan. I want to get better.`],
[0, `Me alegra oírlo. Si los pensamientos vuelven, dígaselo enseguida a la enfermera o a mí.`, `I am glad to hear it. If the thoughts come back, tell the nurse or me right away.`, `Me alegra oírlo. Si los pensamientos vuelven, díselo enseguida a la enfermera o a mí.`],
[1, `¿Alguien va a estar pendiente de mí?`, `Will someone be looking out for me?`],
[0, `Sí. El equipo va a estar pendiente de usted todo el día. No está solo.`, `Yes. The team will keep watch over you all day. You are not alone.`, `Sí. El equipo va a estar pendiente de ti todo el día. No estás solo.`]
]},
{ id: "family-meeting", level: "B2", title: "A family meeting before discharge", roles: ["You (doctor)", "Doña Rosa (grandmother)", "Lety (patient)"], you: 0, lines: [
[0, `Doña Rosa, gracias por venir. Hoy quiero explicarles cómo sigue el tratamiento de Lety antes de que le den el alta.`, `Doña Rosa, thank you for coming. Today I want to explain to you how Lety's treatment continues before she is discharged.`],
[1, `Doctora, se lo digo con respeto, pero no creo que mi nieta esté enferma de la mente. A ella le hicieron un mal.`, `Doctor, I say it with respect, but I do not believe my granddaughter is mentally ill. Someone did her harm.`],
[0, `Entiendo, doña Rosa. En muchas familias se piensa que un mal puede causar esto. Lo respeto, y no quiero que se sienta juzgada.`, `I understand, doña Rosa. In many families people think a curse can cause this. I respect that, and I do not want you to feel judged.`, `Entiendo, doña Rosa. En muchas familias se piensa que un mal puede causar esto. Lo respeto, y no quiero que te sientas juzgada.`],
[1, `Entonces, ¿usted dice que son puras ideas de ella?`, `So, you are saying they are just her ideas?`],
[0, `No, no son ideas inventadas. Lety ha sufrido de verdad. Lo que le pasó es un episodio psicótico, una enfermedad que tiene tratamiento.`, `No, they are not made-up ideas. Lety has truly suffered. What happened to her is a psychotic episode, an illness that has treatment.`],
[2, `Yo oía voces, abuela. No estaba inventando nada. No podía dormir.`, `I heard voices, grandma. I was not making anything up. I could not sleep.`],
[1, `Eso sí lo vi, mija. Y es verdad que desde que toma la medicina duerme mejor.`, `That I did see, dear. And it is true that since she started the medicine she sleeps better.`],
[0, `Eso es lo que esperábamos. Aunque usted piense que hay otra causa, la medicina ayuda al cerebro a calmarse.`, `That is what we hoped for. Even if you think there is another cause, the medicine helps the brain to calm down.`, `Eso es lo que esperábamos. Aunque tú pienses que hay otra causa, la medicina ayuda al cerebro a calmarse.`],
[0, `Si la familia quiere que un curandero la acompañe, no hay problema, siempre que Lety siga tomando su medicina.`, `If the family wants a healer to be with her, there is no problem, as long as Lety keeps taking her medicine.`, `Si la familia quiere que un curandero la acompañe, no hay problema, siempre que Lety siga tomando su medicina.`],
[1, `Eso me parece justo. Yo solo quiero que mi nieta mejore.`, `That seems fair to me. I only want my granddaughter to get better.`],
[0, `Es lo que queremos todos. Les pido que me avisen si Lety deja de tomarla o si vuelve a oír voces.`, `It is what we all want. I ask you to let me know if Lety stops taking it or if she hears voices again.`],
[2, `Yo la voy a tomar, abuela. Quiero sentirme bien.`, `I am going to take it, grandma. I want to feel well.`]
]},
{ id: "interpreter-session", level: "B2", title: "Working through an interpreter with an indirect answer", roles: ["You (doctor)", "Interpreter", "Patient"], you: 0, lines: [
[0, `Buenos días. Gracias por venir. Antes de empezar, por favor interprete todo lo que se diga, sin resumir ni agregar.`, `Good morning. Thank you for coming. Before we start, please interpret everything that is said, without summarizing or adding.`, `Buenos días. Gracias por venir. Antes de empezar, por favor interpreta todo lo que se diga, sin resumir ni agregar.`],
[1, `Por supuesto, doctora. Si algo no se entiende, se lo aviso.`, `Of course, doctor. If something is not understood, I will tell you.`],
[1, `Señor Ramiro, soy el intérprete. Voy a repetir todo lo que se diga, y lo que usted cuente queda en confidencialidad.`, `Mr. Ramiro, I am the interpreter. I will repeat everything that is said, and what you tell us stays confidential.`],
[2, `Buenos días. Está bien.`, `Good morning. That is fine.`],
[0, `Señor Ramiro, ¿cómo se ha sentido de ánimo en las últimas semanas?`, `Mr. Ramiro, how have you been feeling in your mood in the last few weeks?`, `Señor Ramiro, ¿cómo te has sentido de ánimo en las últimas semanas?`],
[2, `Pues, uno aguanta, doctora. Así es la vida. Hay que echarle ganas.`, `Well, one puts up with it, doctor. That is life. You have to keep trying.`],
[1, `Aviso del intérprete: el señor no contestó con un sí o un no. Habló de aguantar y de echarle ganas, una forma indirecta de hablar de algo difícil.`, `Interpreter's note: the gentleman did not answer yes or no. He spoke of putting up with things and of trying hard, an indirect way of talking about something difficult.`],
[0, `Gracias por avisarme. Señor Ramiro, cuando dice que uno aguanta, ¿qué es lo que más le pesa?`, `Thank you for letting me know. Mr. Ramiro, when you say that one puts up with it, what weighs on you the most?`, `Gracias por avisarme. Señor Ramiro, cuando dices que uno aguanta, ¿qué es lo que más te pesa?`],
[2, `El trabajo, y en la casa las cosas no andan bien. A veces no tengo ganas de nada.`, `Work, and at home things are not going well. Sometimes I do not feel like doing anything.`],
[0, `Gracias por confiar en mí. Voy a hacerle una pregunta directa, porque es importante: ¿ha pensado en quitarse la vida?`, `Thank you for trusting me. I am going to ask you a direct question, because it is important: have you thought about ending your life?`, `Gracias por confiar en mí. Voy a hacerte una pregunta directa, porque es importante: ¿has pensado en quitarte la vida?`],
[2, `Pues... a veces pienso que sería mejor no despertar. Pero no he pensado en hacer nada.`, `Well... sometimes I think it would be better not to wake up. But I have not thought about doing anything.`],
[1, `Doctora, el señor dice que a veces desea no despertar, pero que no ha pensado en hacer nada.`, `Doctor, the gentleman says that sometimes he wishes not to wake up, but that he has not thought about doing anything.`]
]}
]);
