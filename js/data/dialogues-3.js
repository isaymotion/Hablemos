/* Eight more dialogues for the Speaking page (listen, shadow, role-play). Release 0.11.0.
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Shape: window.DIALOGUES = (window.DIALOGUES || []).concat([ { id, level, title, roles: ['You', 'Other'], you: 0, lines: [[speakerIndex, spanish, english, tuVariant?]] } ])
   tuVariant = the same line in tú, shown when the register setting is informal. Only the lines of the clinician or staff member have one,
   and only where tú changes the line. The teen dialogue is in tú throughout, so it has no variants.
   Ids are permanent: append new dialogues only after release. Listening questions for these ids are in listen-questions-5.js. */
window.DIALOGUES = (window.DIALOGUES || []).concat([
{ id: "ward-orientation", level: "A1", title: "A nurse shows a new patient the unit", roles: ["You (nurse)", "Patient"], you: 0, lines: [
[0, `Buenos días, Carmen. Bienvenida a la unidad. Yo la llevo a su cuarto.`, `Good morning, Carmen. Welcome to the unit. I will take you to your room.`, `Buenos días, Carmen. Bienvenida a la unidad. Yo te llevo a tu cuarto.`],
[1, `Gracias. ¿Dónde está el baño?`, `Thank you. Where is the bathroom?`],
[0, `El baño está aquí, al lado de su cuarto. Esta es su cama.`, `The bathroom is here, next to your room. This is your bed.`, `El baño está aquí, al lado de tu cuarto. Esta es tu cama.`],
[1, `¿Y si necesito ayuda?`, `And if I need help?`],
[0, `Oprima este botón. La enfermera viene enseguida.`, `Press this button. The nurse comes right away.`, `Oprime este botón. La enfermera viene enseguida.`],
[1, `¿A qué hora son las comidas?`, `What time are the meals?`],
[0, `El desayuno es a las ocho, el almuerzo a las doce y la cena a las seis.`, `Breakfast is at eight, lunch at twelve and dinner at six.`],
[1, `¿Puedo tomar agua entre las comidas?`, `Can I drink water between meals?`],
[0, `Sí, puede tomar agua cuando quiera. Aquí está el agua.`, `Yes, you can drink water whenever you want. Here is the water.`, `Sí, puedes tomar agua cuando quieras. Aquí está el agua.`],
[1, `¿Cuándo puede venir mi hija?`, `When can my daughter come?`],
[0, `Las visitas son por la tarde. Su hija puede venir a las cuatro.`, `Visits are in the afternoon. Your daughter can come at four.`, `Las visitas son por la tarde. Tu hija puede venir a las cuatro.`],
[1, `Muy bien. Gracias, enfermera.`, `Very good. Thank you, nurse.`]
]},
{ id: "pain-check", level: "A1", title: "Asking where it hurts and how much", roles: ["You (nurse)", "Patient"], you: 0, lines: [
[0, `Buenos días, Luis. ¿Le duele algo?`, `Good morning, Luis. Does anything hurt?`, `Buenos días, Luis. ¿Te duele algo?`],
[1, `Sí, me duele la espalda.`, `Yes, my back hurts.`],
[0, `¿Dónde exactamente? Muéstreme con la mano.`, `Where exactly? Show me with your hand.`, `¿Dónde exactamente? Muéstrame con la mano.`],
[1, `Aquí, abajo.`, `Here, low down.`],
[0, `Del cero al diez, ¿cuánto le duele? Cero es nada y diez es el peor dolor.`, `From zero to ten, how much does it hurt? Zero is nothing and ten is the worst pain.`, `Del cero al diez, ¿cuánto te duele? Cero es nada y diez es el peor dolor.`],
[1, `Ahora siento un siete.`, `Right now I feel a seven.`],
[0, `¿Desde cuándo le duele?`, `Since when does it hurt?`, `¿Desde cuándo te duele?`],
[1, `Desde ayer.`, `Since yesterday.`],
[0, `¿Le duele más cuando camina?`, `Does it hurt more when you walk?`, `¿Te duele más cuando caminas?`],
[1, `Sí, y también cuando me siento.`, `Yes, and also when I sit down.`],
[0, `Gracias. Voy a avisar a la doctora. Descanse un momento.`, `Thank you. I am going to tell the doctor. Rest for a moment.`, `Gracias. Voy a avisar a la doctora. Descansa un momento.`],
[1, `Gracias, enfermera.`, `Thank you, nurse.`]
]},
{ id: "medication-teachback", level: "A2", title: "Teaching a new medicine and asking the patient to say it back", roles: ["You (nurse)", "Patient"], you: 0, lines: [
[0, `Buenos días, Rosa. La doctora le recetó una medicina nueva. Quiero explicársela.`, `Good morning, Rosa. The doctor prescribed a new medicine for you. I want to explain it to you.`, `Buenos días, Rosa. La doctora te recetó una medicina nueva. Quiero explicártela.`],
[1, `Gracias. ¿Cómo la tomo?`, `Thank you. How do I take it?`],
[0, `Tome una pastilla en la mañana, con comida.`, `Take one pill in the morning, with food.`, `Toma una pastilla en la mañana, con comida.`],
[1, `¿Y si se me olvida?`, `And if I forget?`],
[0, `Si se le olvida, tómela cuando se acuerde. No tome dos pastillas juntas.`, `If you forget, take it when you remember. Do not take two pills together.`, `Si se te olvida, tómala cuando te acuerdes. No tomes dos pastillas juntas.`],
[0, `Puede darle un poco de sueño o dolor de estómago. Si algo le preocupa, llámenos.`, `It can give you a little sleepiness or a stomachache. If anything worries you, call us.`, `Puede darte un poco de sueño o dolor de estómago. Si algo te preocupa, llámanos.`],
[1, `Entiendo.`, `I understand.`],
[0, `Ahora, para estar segura de que me expliqué bien, ¿me puede decir cómo va a tomarla?`, `Now, to be sure I explained well, can you tell me how you are going to take it?`, `Ahora, para estar segura de que me expliqué bien, ¿me puedes decir cómo vas a tomarla?`],
[1, `Una pastilla en la mañana, con comida.`, `One pill in the morning, with food.`],
[0, `Muy bien. ¿Y qué hace si se le olvida?`, `Very good. And what do you do if you forget?`, `Muy bien. ¿Y qué haces si se te olvida?`],
[1, `La tomo cuando me acuerdo, pero no dos juntas.`, `I take it when I remember, but not two together.`],
[0, `Perfecto. Gracias por repetirlo. Si tiene dudas, pregunte cuando quiera.`, `Perfect. Thank you for repeating it. If you have questions, ask whenever you want.`, `Perfecto. Gracias por repetirlo. Si tienes dudas, pregunta cuando quieras.`]
]},
{ id: "phone-family-update", level: "A2", title: "Calling a patient's sister, with his permission", roles: ["You (doctor)", "Sister"], you: 0, lines: [
[0, `Buenas tardes. ¿Hablo con Marta, la hermana de Tomás?`, `Good afternoon. Am I speaking with Marta, Tomás's sister?`],
[1, `Sí, soy yo. ¿Le pasó algo a mi hermano?`, `Yes, it is me. Did something happen to my brother?`],
[0, `No se preocupe, está tranquilo. Soy la doctora Navarro. Tomás me dio permiso para llamarla.`, `Do not worry, he is calm. I am Dr. Navarro. Tomás gave me permission to call you.`, `No te preocupes, está tranquilo. Soy la doctora Navarro. Tomás me dio permiso para llamarte.`],
[1, `Gracias a Dios. ¿Cómo está?`, `Thank God. How is he?`],
[0, `Está mejor. Duerme bien y come bien. Hoy habló con el equipo con calma.`, `He is better. He sleeps well and eats well. Today he talked with the team calmly.`],
[1, `¿Cuándo sale del hospital?`, `When does he leave the hospital?`],
[0, `Todavía no lo sabemos. Tal vez en unos cinco días. Le voy a avisar.`, `We do not know yet. Maybe in about five days. I am going to let you know.`, `Todavía no lo sabemos. Tal vez en unos cinco días. Te voy a avisar.`],
[1, `¿Puedo visitarlo?`, `Can I visit him?`],
[0, `Sí, las visitas son de cuatro a seis. Tomás dice que le gustaría verla.`, `Yes, visits are from four to six. Tomás says he would like to see you.`, `Sí, las visitas son de cuatro a seis. Tomás dice que le gustaría verte.`],
[1, `¿Puedo llevarle ropa?`, `Can I bring him clothes?`],
[0, `Claro. Puede traerla en una bolsa y dejarla en la oficina de enfermería.`, `Of course. You can bring it in a bag and leave it at the nursing office.`, `Claro. Puedes traerla en una bolsa y dejarla en la oficina de enfermería.`],
[1, `Perfecto. Gracias por llamarme, doctora.`, `Perfect. Thank you for calling me, doctor.`]
]},
{ id: "sleep-hygiene-plan", level: "B1", title: "Agreeing a sleep plan with a patient who works nights", roles: ["You (doctor)", "Patient"], you: 0, lines: [
[0, `Esteban, hablemos de su sueño. Usted trabaja de noche, ¿verdad?`, `Esteban, let us talk about your sleep. You work at night, right?`, `Esteban, hablemos de tu sueño. Tú trabajas de noche, ¿verdad?`],
[1, `Sí, de diez de la noche a seis de la mañana. Llego a casa y no puedo dormir.`, `Yes, from ten at night to six in the morning. I get home and cannot sleep.`],
[0, `¿Qué hace cuando llega a casa?`, `What do you do when you get home?`, `¿Qué haces cuando llegas a casa?`],
[1, `Veo el celular un rato, tomo café y después me acuesto, pero me despierto a cada rato.`, `I look at my phone for a while, drink coffee and then lie down, but I wake up all the time.`],
[0, `Entonces le propongo algunos cambios. Primero, evite el café después de la medianoche.`, `Then I propose some changes. First, avoid coffee after midnight.`, `Entonces te propongo algunos cambios. Primero, evita el café después de la medianoche.`],
[1, `Eso puedo hacerlo. Pero con el ruido de día es difícil dormir.`, `I can do that. But with the daytime noise it is hard to sleep.`],
[0, `Es verdad. ¿Podría poner cortinas oscuras y usar tapones para los oídos?`, `That is true. Could you put up dark curtains and use earplugs?`, `Es verdad. ¿Podrías poner cortinas oscuras y usar tapones para los oídos?`],
[1, `Sí, mi esposa ya compró unas cortinas.`, `Yes, my wife already bought some curtains.`],
[0, `Qué bien. Intente dormir a la misma hora todos los días, incluso en sus días libres, y deje el celular fuera del cuarto.`, `Great. Try to sleep at the same time every day, even on your days off, and leave the phone outside the room.`, `Qué bien. Intenta dormir a la misma hora todos los días, incluso en tus días libres, y deja el celular fuera del cuarto.`],
[1, `Lo del celular me va a costar, pero lo voy a intentar.`, `The phone part will be hard for me, but I am going to try.`],
[0, `Si quiere, empecemos solo con dos cambios esta semana: el café y el celular. ¿Qué le parece?`, `If you want, let us start with only two changes this week: the coffee and the phone. What do you think?`, `Si quieres, empecemos solo con dos cambios esta semana: el café y el celular. ¿Qué te parece?`],
[1, `Me parece bien. Empiezo hoy.`, `That sounds good to me. I start today.`]
]},
{ id: "teen-first-visit", level: "B1", title: "A first visit with a 14-year-old: school, worries and confidentiality", roles: ["You (doctor)", "Teen"], you: 0, lines: [
[0, `Hola, Valeria. Soy la doctora Navarro. Gracias por venir. ¿Cómo te sientes hoy?`, `Hi, Valeria. I am Dr. Navarro. Thank you for coming. How do you feel today?`],
[1, `Un poco nerviosa. No sé qué decir.`, `A little nervous. I do not know what to say.`],
[0, `Es normal. No hay respuestas malas. ¿Cómo te va en la escuela?`, `That is normal. There are no wrong answers. How is school going for you?`],
[1, `Más o menos. Me cuesta concentrarme y a veces no quiero ir.`, `So-so. It is hard for me to concentrate and sometimes I do not want to go.`],
[0, `¿Hay algo que te preocupe en la escuela, con los maestros o con tus compañeros?`, `Is there something that worries you at school, with the teachers or with your classmates?`],
[1, `Mis amigas ya no me hablan. Me da mucha ansiedad pensar en eso.`, `My friends do not talk to me anymore. Thinking about it gives me a lot of anxiety.`],
[0, `Lo siento, debe ser difícil. Antes de seguir, quiero explicarte algo sobre la confidencialidad.`, `I am sorry, that must be hard. Before we go on, I want to explain something to you about confidentiality.`],
[1, `¿Qué es eso?`, `What is that?`],
[0, `Lo que me cuentes se queda entre nosotras. No se lo voy a decir a tus papás sin hablar contigo primero.`, `What you tell me stays between us. I am not going to tell your parents without talking with you first.`],
[1, `¿De verdad? ¿Nunca?`, `Really? Never?`],
[0, `Hay una excepción. Si pienso que estás en peligro, o que alguien te hace daño, tengo que pedir ayuda para protegerte. Pero primero te lo diría a ti.`, `There is one exception. If I think you are in danger, or that someone is hurting you, I have to ask for help to protect you. But I would tell you first.`],
[1, `Está bien. Entiendo. Creo que sí puedo hablar.`, `All right. I understand. I think I can talk.`]
]},
{ id: "delusion-without-arguing", level: "B2", title: "A patient is sure the neighbors watch him: no arguing, no agreeing, and a safety question", roles: ["You (doctor)", "Patient"], you: 0, lines: [
[0, `Buenos días, Pablo. Hoy quiero entender mejor cómo ha estado en su casa.`, `Good morning, Pablo. Today I want to understand better how things have been at your home.`, `Buenos días, Pablo. Hoy quiero entender mejor cómo has estado en tu casa.`],
[1, `Doctora, los vecinos me vigilan. Ponen aparatos en la pared para escucharme.`, `Doctor, the neighbors watch me. They put devices in the wall to listen to me.`],
[0, `Se nota que lo está pasando muy mal. Cuénteme más sobre lo que ha notado.`, `I can tell you are having a very hard time. Tell me more about what you have noticed.`, `Se nota que lo estás pasando muy mal. Cuéntame más sobre lo que has notado.`],
[1, `Oigo ruidos por las noches y los veo mirando por la ventana. Usted no me cree, ¿verdad?`, `I hear noises at night and I see them looking out the window. You do not believe me, right?`],
[0, `No puedo decirle que lo veo igual, pero sé que para usted es muy real y que le da miedo.`, `I cannot tell you that I see it the same way, but I know that for you it is very real and that it scares you.`, `No puedo decirte que lo veo igual, pero sé que para ti es muy real y que te da miedo.`],
[1, `Entonces, ¿me cree o no?`, `So, do you believe me or not?`],
[0, `Sé que usted siente mucho miedo y que casi no duerme. De eso estoy segura, y quiero ayudarle.`, `I know that you feel very afraid and that you hardly sleep. Of that I am sure, and I want to help you.`, `Sé que sientes mucho miedo y que casi no duermes. De eso estoy segura, y quiero ayudarte.`],
[1, `A veces me dan ganas de ir a reclamarles.`, `Sometimes I feel like going to confront them.`],
[0, `Gracias por decírmelo. Quiero preguntarle algo sobre la seguridad: ¿ha pensado en hacerle daño a alguien o en hacerse daño usted?`, `Thank you for telling me. I want to ask you something about safety: have you thought about hurting anyone, or about hurting yourself?`, `Gracias por decírmelo. Quiero preguntarte algo sobre la seguridad: ¿has pensado en hacerle daño a alguien o en hacerte daño tú?`],
[1, `No, a nadie. Solo quiero que me dejen tranquilo.`, `No, no one. I only want them to leave me in peace.`],
[0, `Me alegra saberlo. Si esas ganas se vuelven más fuertes, llámeme y no vaya solo a hablar con ellos.`, `I am glad to know that. If those urges get stronger, call me and do not go alone to talk to them.`, `Me alegra saberlo. Si esas ganas se vuelven más fuertes, llámame y no vayas solo a hablar con ellos.`],
[1, `Está bien. ¿Y qué hacemos con lo de dormir?`, `All right. And what do we do about the sleeping?`]
]},
{ id: "discharge-family-meeting", level: "B2", title: "A discharge plan with a patient and his wife", roles: ["You (doctor)", "Patient", "Wife"], you: 0, lines: [
[0, `Arturo, Silvia, gracias por estar aquí. Hoy repasamos el plan para cuando Arturo salga del hospital.`, `Arturo, Silvia, thank you for being here. Today we go over the plan for when Arturo leaves the hospital.`],
[1, `Estoy listo, doctora. Quiero volver a casa.`, `I am ready, doctor. I want to go home.`],
[0, `Me alegra. Primero, hablemos de las señales de alerta. Silvia, usted lo conoce bien. ¿Qué cambios notaría si empieza a recaer?`, `I am glad. First, let us talk about warning signs. Silvia, you know him well. What changes would you notice if he starts to relapse?`, `Me alegra. Primero, hablemos de las señales de alerta. Silvia, tú lo conoces bien. ¿Qué cambios notarías si empieza a recaer?`],
[2, `Si no duerme, si se encierra en el cuarto o si deja de comer.`, `If he does not sleep, if he shuts himself in the room or if he stops eating.`],
[0, `Exacto. Arturo, si usted nota alguna de esas señales, ¿qué va a hacer?`, `Exactly. Arturo, if you notice any of those signs, what are you going to do?`, `Exacto. Arturo, si tú notas alguna de esas señales, ¿qué vas a hacer?`],
[1, `Se lo digo a Silvia y llamo a la clínica ese mismo día.`, `I tell Silvia and I call the clinic that same day.`],
[0, `Muy bien. Su próxima cita es el jueves a las diez de la mañana, aquí en la clínica. Es muy importante que venga.`, `Very good. Your next appointment is Thursday at ten in the morning, here at the clinic. It is very important that you come.`, `Muy bien. Tu próxima cita es el jueves a las diez de la mañana, aquí en la clínica. Es muy importante que vengas.`],
[2, `¿Y si pasa algo en la noche, cuando la clínica está cerrada?`, `And if something happens at night, when the clinic is closed?`],
[0, `Pueden llamar al 988 a cualquier hora y oprimir el 2 para hablar en español.`, `You can call 988 at any hour and press 2 to speak in Spanish.`],
[0, `Si Arturo piensa en quitarse la vida y no puede mantenerse seguro, llamen al 911 o vayan a emergencias.`, `If Arturo thinks about ending his life and cannot stay safe, call 911 or go to the emergency room.`],
[1, `Entendido. ¿Y la medicina? ¿La sigo tomando aunque me sienta bien?`, `Understood. And the medicine? Do I keep taking it even if I feel well?`],
[0, `Sí, siga tomándola y no la deje sin hablar conmigo antes.`, `Yes, keep taking it and do not stop it without talking with me first.`, `Sí, sigue tomándola y no la dejes sin hablar conmigo antes.`]
]}
]);
