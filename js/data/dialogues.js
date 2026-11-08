/* Dialogues for the Speaking page (listen, shadow, role-play).
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician once populated.
   Shape: window.DIALOGUES = [ { id, level, title, roles: ['You', 'Other'], you: 0, lines: [[speakerIndex, spanish, english, tuVariant?]] } ]  tuVariant = the same line in tú, shown when the register setting is informal. */
window.DIALOGUES = [
{ id: "meet", level: "A1", title: "Meeting a new patient and her husband", roles: ["You (doctor)", "Patient", "Husband"], you: 0, lines: [
[0, "Buenos días. Soy la doctora Navarro. ¿Cómo se llama usted?", "Good morning. I am Dr. Navarro. What is your name?", "Buenos días. Soy la doctora Navarro. ¿Cómo te llamas?"],
[1, "Buenos días, doctora. Me llamo Elena Ríos.", "Good morning, doctor. My name is Elena Ríos."],
[0, "Mucho gusto, señora Ríos. ¿Cómo prefiere que le diga?", "Nice to meet you, Mrs. Ríos. What do you prefer that I call you?", "Mucho gusto, Elena. ¿Cómo prefieres que te diga?"],
[1, "Dígame Elena, por favor.", "Call me Elena, please."],
[0, "Muy bien, Elena. ¿Quién la acompaña hoy?", "Very good, Elena. Who is with you today?", "Muy bien, Elena. ¿Quién te acompaña hoy?"],
[1, "Él es mi esposo, Luis.", "This is my husband, Luis."],
[2, "Mucho gusto, doctora.", "Nice to meet you, doctor."],
[0, "Mucho gusto, señor Ríos. Gracias por venir con su esposa.", "Nice to meet you, Mr. Ríos. Thank you for coming with your wife.", "Mucho gusto, señor Ríos. Gracias por venir con tu esposa."],
[1, "Luis vive conmigo. Mi hija vive cerca de nosotros.", "Luis lives with me. My daughter lives near us."],
[0, "Bien. Primero quiero conocerla un poco. ¿Está bien?", "Good. First I want to get to know you a little. Is that all right?", "Bien. Primero quiero conocerte un poco. ¿Está bien?"]
]},
{ id: "check-in", level: "A1", title: "At the front desk", roles: ["You (front desk)", "Patient"], you: 0, lines: [
[0, "Buenas tardes. ¿Cuál es su nombre completo?", "Good afternoon. What is your full name?", "Buenas tardes. ¿Cuál es tu nombre completo?"],
[1, "Hugo Salinas Vega.", "Hugo Salinas Vega."],
[0, "Gracias. ¿Cuál es su fecha de nacimiento?", "Thank you. What is your date of birth?", "Gracias. ¿Cuál es tu fecha de nacimiento?"],
[1, "Es el doce de marzo de mil novecientos setenta y cinco.", "It is March twelfth, nineteen seventy-five."],
[0, "¿Tiene seguro médico? ¿Me da su tarjeta, por favor?", "Do you have health insurance? Will you give me your card, please?", "¿Tienes seguro médico? ¿Me das tu tarjeta, por favor?"],
[1, "Sí, aquí está. También tengo mi licencia.", "Yes, here it is. I also have my license."],
[0, "Perfecto. ¿Cuál es el motivo de su visita hoy?", "Perfect. What is the reason for your visit today?", "Perfecto. ¿Cuál es el motivo de tu visita hoy?"],
[1, "No puedo dormir y me siento muy triste.", "I cannot sleep and I feel very sad."],
[0, "Entiendo. Siéntese en la sala de espera. La enfermera lo llama en diez minutos.", "I understand. Please sit in the waiting room. The nurse will call you in ten minutes.", "Entiendo. Siéntate en la sala de espera. La enfermera te llama en diez minutos."],
[1, "Gracias, doctor.", "Thank you, doctor."]
]},
{ id: "pharmacy", level: "A2", title: "A new prescription at the pharmacy", roles: ["You (patient)", "Pharmacist"], you: 0, lines: [
[0, "Buenas tardes. Tengo una receta nueva.", "Good afternoon. I have a new prescription."],
[1, "Buenas tardes. Déjeme ver. Es sertralina de 50 miligramos.", "Good afternoon. Let me see. It is sertraline, 50 milligrams."],
[0, "¿Para qué sirve esta medicina?", "What is this medicine for?"],
[1, "Sirve para la depresión y la ansiedad. Tarda unas semanas en hacer efecto.", "It is for depression and anxiety. It takes a few weeks to work."],
[0, "¿Cómo la tomo?", "How do I take it?"],
[1, "Una tableta cada mañana, con comida.", "One tablet every morning, with food."],
[0, "¿Qué pasa si se me olvida una dosis?", "What happens if I forget a dose?"],
[1, "Tómela cuando se acuerde. Pero no tome dos juntas.", "Take it when you remember. But do not take two together."],
[0, "¿Y si me siento bien? ¿Puedo dejarla?", "And if I feel well? Can I stop it?"],
[1, "No deje de tomarla sin hablar con su doctor. Si tiene dudas, llámenos.", "Do not stop taking it without talking to your doctor. If you have questions, call us."]
]},
{ id: "family-call", level: "A2", title: "Calling a patient's sister", roles: ["You (doctor)", "Sister"], you: 0, lines: [
[0, "Buenas tardes. Habla la doctora Navarro, de la clínica. ¿Habla con la señora Beatriz?", "Good afternoon. This is Dr. Navarro from the clinic. Am I speaking with Mrs. Beatriz?", "Buenas tardes. Habla la doctora Navarro, de la clínica. ¿Hablo con Beatriz?"],
[1, "Sí, soy yo. ¿Le pasó algo a mi hermana?", "Yes, it is me. Did something happen to my sister?"],
[0, "No, no pasó nada grave. Su hermana me dio permiso para hablar con usted. ¿Tiene unos minutos?", "No, nothing serious happened. Your sister gave me permission to talk with you. Do you have a few minutes?", "No, no pasó nada grave. Tu hermana me dio permiso para hablar contigo. ¿Tienes unos minutos?"],
[1, "Sí, claro. Dígame.", "Yes, of course. Tell me."],
[0, "Quiero saber cómo la ha visto usted. ¿Qué ha cambiado?", "I want to know how you have seen her. What has changed?", "Quiero saber cómo la has visto. ¿Qué ha cambiado?"],
[1, "Casi no duerme y ya no sale de su casa. Antes era muy alegre.", "She hardly sleeps and no longer leaves her house. Before, she was very cheerful."],
[0, "¿Desde cuándo pasa esto?", "Since when has this been happening?"],
[1, "Desde hace dos meses, más o menos. Empezó cuando perdió su trabajo.", "For about two months, more or less. It started when she lost her job."],
[0, "¿Ha dicho alguna vez que quiere hacerse daño o morirse?", "Has she ever said she wants to hurt herself or die?", "¿Ha dicho alguna vez que quiere hacerse daño o morirse?"],
[1, "Una vez dijo que estaba cansada de todo. Me asusté mucho.", "Once she said she was tired of everything. I got very scared."],
[0, "Gracias por decírmelo. Es importante. Usted ayuda mucho a su hermana.", "Thank you for telling me. It is important. You help your sister a lot.", "Gracias por decírmelo. Es importante. Tú ayudas mucho a tu hermana."]
]},
{ id: "explain-med", level: "B1", title: "Explaining risperidone", roles: ["You (doctor)", "Patient", "Mother"], you: 0, lines: [
[0, "Voy a explicarle su medicina nueva. Se llama risperidona. Sirve para calmar las voces y los pensamientos que le dan miedo.", "I am going to explain your new medicine. It is called risperidone. It helps calm the voices and the thoughts that scare you.", "Voy a explicarte tu medicina nueva. Se llama risperidona. Sirve para calmar las voces y los pensamientos que te dan miedo."],
[1, "¿Y cómo la tomo?", "And how do I take it?"],
[0, "Una tableta en la noche, con comida. Todos los días, a la misma hora.", "One tablet at night, with food. Every day, at the same time.", "Una tableta en la noche, con comida. Todos los días, a la misma hora."],
[2, "¿Va a dar sueño?", "Will it make him sleepy?"],
[0, "Puede dar sueño, sobre todo al principio. También puede subir el apetito y el peso, o dar rigidez en los músculos. Si siente esto, avíseme.", "It can cause sleepiness, especially at first. It can also raise appetite and weight, or cause muscle stiffness. If you feel this, let me know.", "Puede dar sueño, sobre todo al principio. También puede subir el apetito y el peso, o dar rigidez en los músculos. Si sientes esto, avísame."],
[1, "¿Cuánto tiempo la voy a tomar?", "How long will I take it?"],
[0, "Por lo menos varios meses. No la deje, aunque se sienta mejor, sin hablar conmigo.", "At least several months. Do not stop it, even if you feel better, without talking to me.", "Por lo menos varios meses. No la dejes, aunque te sientas mejor, sin hablar conmigo."],
[2, "Yo me encargo de que la tome, doctora.", "I will make sure he takes it, doctor."],
[0, "Gracias, señora. Ahora, para estar seguro de que expliqué bien: ¿cómo va a tomar la medicina?", "Thank you, ma'am. Now, to be sure I explained well: how will you take the medicine?", "Gracias, señora. Ahora, para estar seguro de que expliqué bien: ¿cómo vas a tomar la medicina?"],
[1, "Una tableta en la noche, con comida, todos los días. Y le aviso si me siento raro.", "One tablet at night, with food, every day. And I tell you if I feel strange."]
]},
{ id: "follow-up", level: "A2", title: "Making the follow-up appointment", roles: ["You (doctor)", "Patient"], you: 0, lines: [
[0, "Quiero verla otra vez en dos semanas. ¿Qué día le conviene?", "I want to see you again in two weeks. What day is good for you?", "Quiero verte otra vez en dos semanas. ¿Qué día te conviene?"],
[1, "Los martes trabajo hasta las cinco. ¿Puede ser el jueves?", "On Tuesdays I work until five. Can it be Thursday?"],
[0, "El jueves a las diez de la mañana hay lugar. ¿Le sirve?", "Thursday at ten in the morning there is room. Does that work?", "El jueves a las diez de la mañana hay lugar. ¿Te sirve?"],
[1, "Sí, perfecto. Pero no tengo carro. Mi esposo trabaja.", "Yes, perfect. But I do not have a car. My husband works."],
[0, "¿Cómo va a venir? Puedo pedir transporte gratis con su seguro.", "How will you get here? I can request free transportation through your insurance.", "¿Cómo vas a venir? Puedo pedir transporte gratis con tu seguro."],
[1, "Sí, por favor. Eso me ayuda mucho.", "Yes, please. That helps me a lot."],
[0, "Si se siente peor antes de esa fecha, llame a la clínica o venga a urgencias.", "If you feel worse before that date, call the clinic or come to the emergency room.", "Si te sientes peor antes de esa fecha, llama a la clínica o ven a urgencias."],
[0, "Si tiene pensamientos de hacerse daño, llame al 988 y oprima 2. Hay alguien las 24 horas.", "If you have thoughts of hurting yourself, call 988 and press 2. Someone is there 24 hours.", "Si tienes pensamientos de hacerte daño, llama al 988 y oprime 2. Hay alguien las 24 horas."],
[1, "Gracias, doctora. Lo voy a apuntar.", "Thank you, doctor. I will write it down."]
]},
{ id: "teen", level: "B1", title: "Talking with a 16-year-old", roles: ["You (doctor)", "Teen"], you: 0, lines: [
[0, "Hola, Diego. Tu mamá está afuera. Aquí podemos hablar tú y yo. ¿Está bien?", "Hi, Diego. Your mom is outside. Here you and I can talk. Is that okay?"],
[1, "Bueno. Está bien.", "Okay. Fine."],
[0, "¿Cómo has dormido últimamente?", "How have you been sleeping lately?"],
[1, "Mal. Me acuesto tarde y me despierto cansado.", "Badly. I go to bed late and I wake up tired."],
[0, "¿Qué haces antes de dormir? ¿Usas el celular?", "What do you do before sleeping? Do you use your phone?"],
[1, "Sí, hasta las dos o tres de la mañana. Veo videos y juego.", "Yes, until two or three in the morning. I watch videos and play games."],
[0, "¿Y cómo te va en la escuela?", "And how is school going?"],
[1, "No muy bien. Ya no hago la tarea y casi no voy a clase.", "Not very well. I do not do homework anymore and I almost never go to class."],
[0, "¿Cómo te has sentido de ánimo? ¿Triste, enojado, vacío?", "How have you been feeling in your mood? Sad, angry, empty?"],
[1, "A veces triste. A veces no siento nada.", "Sometimes sad. Sometimes I feel nothing."],
[0, "Gracias por decírmelo. ¿Has pensado en hacerte daño o en no seguir viviendo?", "Thank you for telling me. Have you thought about hurting yourself or not wanting to live?"]
]},
{ id: "don-chuy", level: "B1", title: "Orienting an older man", roles: ["You (doctor)", "Don Chuy"], you: 0, lines: [
[0, "Buenos días, don Chuy. ¿Cómo amaneció usted?", "Good morning, don Chuy. How did you wake up?", "Buenos días, don Chuy. ¿Cómo amaneciste?"],
[1, "Buenos días, doctora. Pues ahí, con mis achaques.", "Good morning, doctor. Well, getting by, with my aches."],
[0, "Don Chuy, ¿de dónde es usted?", "Don Chuy, where are you from?", "Don Chuy, ¿de dónde eres?"],
[1, "Soy de Zacatecas, pero llevo cuarenta años aquí.", "I am from Zacatecas, but I have been here forty years."],
[0, "¿Y tiene familia aquí?", "And do you have family here?", "¿Y tienes familia aquí?"],
[1, "Sí, mis dos hijos y siete nietos. Mi esposa murió hace tres años.", "Yes, my two sons and seven grandchildren. My wife died three years ago."],
[0, "Lo siento mucho, don Chuy. ¿Sabe qué día es hoy?", "I am very sorry, don Chuy. Do you know what day it is today?", "Lo siento mucho, don Chuy. ¿Sabes qué día es hoy?"],
[1, "Déjeme pensar. Es jueves, ¿no? Sí, jueves.", "Let me think. It is Thursday, right? Yes, Thursday."],
[0, "Muy bien. ¿Y qué desayunó esta mañana?", "Very good. And what did you have for breakfast this morning?", "Muy bien. ¿Y qué desayunaste esta mañana?"],
[1, "Unos huevos con frijoles y tortillas, y un café.", "Some eggs with beans and tortillas, and a coffee."],
[0, "Qué rico. Gracias por platicar conmigo, don Chuy.", "How nice. Thank you for chatting with me, don Chuy.", "Qué rico. Gracias por platicar conmigo, don Chuy."]
]}
];
