/* Nurse case simulations for Hablemos (Spanish), played as the unit NURSE: role: 'nurse'.
   STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Appends to window.PSYCH_CASES (same shape as psych-cases.js). Field names stay `tl`, `en`, `score`, `fb`.
   Nurse lines use usted with all three patients. The nurse says what to the patient or family at each moment;
   reports to the doctor are made in English (SBAR), so the feedback lists what to report.
   No medicine names or doses in the nurse's Spanish lines. All patients are fictional.
   Ids: nurse-admit (Mateo), nurse-meds (Brayan), nurse-night (Ramiro). For nurse cases summary.findings = what to chart and report,
   summary.mse = a short nursing note in English. Ward rules differ: check your unit's policy. */
window.PSYCH_CASES = (window.PSYCH_CASES || []).concat([
  {
    id: `nurse-admit`,
    role: `nurse`,
    title: `Nurse: Mateo arrives on the unit`,
    level: `A2`,
    setting: `Inpatient psychiatry unit, the evening of admission, after the doctor's assessment. Mateo, 19, a warehouse worker, hears voices and believes a coworker put a "trabajo" (a curse) on him. He was admitted after barricading his bedroom door. His mother, Doña Rosa, speaks only Spanish and carries a bag with his things. You are the evening nurse. Explain before you do anything, offer choices, and pass any new risk to the doctor.`,
    steps: [
      { who: `Doña Rosa`,
        line: [`Buenas noches. El doctor nos dijo que viniéramos a esta unidad. Este es mi hijo, Mateo.`, `Good evening. The doctor told us to come to this unit. This is my son, Mateo.`],
        choices: [
          { tl: `¿Su hijo es violento?`, en: `Is your son violent?`, score: 0, fb: `Talking about him in front of him, and about violence, frightens both of them. You assess risk by watching and asking him, not with a first remark like this.` },
          { tl: `Buenas noches, señora. Soy ___, su enfermero / enfermera de esta noche. Mucho gusto, Mateo. Bienvenidos. Les voy a explicar todo antes de hacer algo.`, en: `Good evening, ma'am. I'm ___, your nurse tonight. Nice to meet you, Mateo. Welcome. I will explain everything before I do anything.`, score: 2, fb: `Good. You greet both of them, give your name and role, and promise to explain first. A suspicious patient trusts a person with a name more than a uniform. Speak to Mateo himself, not only to his mother.` },
          { tl: `Sí, pasen por aquí.`, en: `Yes, come this way.`, score: 1, fb: `Polite, but they still do not know who you are. Introduce yourself before you lead them anywhere.` }
        ] },
      { who: `Mateo`,
        line: [`(Con la capucha puesta.) Yo ni quería venir.`, `(Hood up.) I didn't even want to come.`],
        choices: [
          { tl: `Gracias por venir, Mateo. ¿Cómo prefiere que le diga? ¿Mateo, o de otra forma?`, en: `Thank you for coming, Mateo. What do you prefer I call you? Mateo, or something else?`, score: 2, fb: `Good. You thank him for coming, use usted, and ask how he wants to be addressed. A small choice at the start gives back some control.` },
          { tl: `Hola, Mateo. ¿Cómo quieres que te diga? Yo te hablo de tú, ¿va?`, en: `Hi, Mateo. What do you want me to call you? I'll talk to you with tú, okay?`, score: 1, fb: `Friendly, and many young people like tú. But a frightened, suspicious patient may find it too familiar from a stranger. Start with usted and ask first which he prefers.` },
          { tl: `Ya está aquí. Ya no hay nada que hacer.`, en: `You're here now. There's nothing to be done.`, score: 0, fb: `This sounds like a trap and confirms his fear that he has no choice. Never answer his reluctance with a closed door.` }
        ] },
      { who: `Doña Rosa`,
        line: [`Aquí traigo su ropa y sus cosas.`, `Here I brought his clothes and his things.`],
        choices: [
          { tl: `(Abre la bolsa sin decir nada.)`, en: `(Opens the bag without saying anything.)`, score: 0, fb: `A search without a word looks exactly like what a suspicious patient fears. It can provoke anger and damages trust in the first hour.` },
          { tl: `Gracias, Doña Rosa. Ahora voy a revisar la bolsa, con la ayuda de Mateo.`, en: `Thank you, Doña Rosa. Now I'm going to check the bag, with Mateo's help.`, score: 1, fb: `You say what you will do and include him, but you do not ask, and you give no reason. Ask, explain why, and say it is the same for everyone.` },
          { tl: `Gracias, Doña Rosa. ¿Puedo revisar la bolsa con ustedes? Es una revisión de rutina, la hacemos con todos los pacientes que llegan, para que todos estén seguros.`, en: `Thank you, Doña Rosa. May I check the bag with you? It is a routine check, we do it with every patient who arrives, so that everyone is safe.`, score: 2, fb: `Good. You ask permission, give the reason, say it applies to everyone, and do it together. Explain before you do: this is the core of a respectful belongings check. Follow your unit's list of what is kept.` }
        ] },
      { who: `Mateo`,
        line: [`(Aprieta la bolsa.) ¿Y mi teléfono? ¿Me lo van a quitar? ¿Mi mamá puede venir a verme?`, `(Grips the bag.) And my phone? Are you going to take it? Can my mom come to see me?`],
        choices: [
          { tl: `No, aquí no se puede tener teléfono. Así son las reglas.`, en: `No, you can't have a phone here. Those are the rules.`, score: 0, fb: `A flat answer, and it may not even match your unit's rules. It sounds like a punishment. Say what you know, and do not invent rules.` },
          { tl: `Le voy a explicar cómo funcionan el teléfono y las visitas en esta unidad. Su mamá puede venir según las reglas de visita. Le doy los horarios ahora.`, en: `I'm going to explain how the phone and visits work on this unit. Your mother can come according to the visiting rules. I'll give you the times now.`, score: 2, fb: `Good. You answer both questions honestly without promising what the unit rules or the doctor decide. Check your unit's policy on phones and visits, and give the times in writing.` },
          { tl: `Eso se lo explican mañana.`, en: `They'll explain that tomorrow.`, score: 1, fb: `It answers nothing tonight, and his first evening is when he needs predictability. Give him the basics now.` }
        ] },
      { who: `Mateo`,
        line: [`(Bajito.) ¿Ustedes también están con ellos? ¿Con los de mi trabajo?`, `(Quietly.) Are you with them too? The ones from my work?`],
        choices: [
          { tl: `Entiendo que tiene mucho miedo. Aquí estamos para cuidarlo y mantenerlo seguro. Si algo lo asusta, dígame, por favor.`, en: `I understand you are very afraid. We are here to take care of you and keep you safe. If something scares you, tell me, please.`, score: 2, fb: `Good. You name his fear, say plainly what staff are for, and invite him to tell you more. You neither argue with the belief nor confirm it.` },
          { tl: `No se preocupe.`, en: `Don't worry.`, score: 1, fb: `Kind, but empty. It passes over his fear. Acknowledge it in one sentence and say what you are here to do.` },
          { tl: `Nadie está con nadie. Eso son ideas suyas.`, en: `Nobody is with anybody. Those are your ideas.`, score: 0, fb: `Arguing with the belief makes him trust you less and ends the conversation. Say what you can say truthfully: you are here to keep him safe.` }
        ] },
      { who: `Mateo`,
        line: [`(Mira la pared.) Ahorita las oigo. Dicen que soy un inútil. Que mejor desaparezca.`, `(Looks at the wall.) I can hear them right now. They say I'm useless. That I should disappear.`],
        choices: [
          { tl: `No les haga caso.`, en: `Don't pay attention to them.`, score: 0, fb: `This denies his experience and skips the risk question. He will stop telling staff what the voices say, and that is the information that keeps him safe.` },
          { tl: `Qué difícil. Vamos a ver su cuarto.`, en: `That's hard. Let's go see your room.`, score: 1, fb: `You show some care, but you let a new command go by. Voices that tell him to disappear need a direct question and a report.` },
          { tl: `Gracias por decírmelo, Mateo. ¿Las voces le dicen que se haga daño? ¿Ha pensado en hacerse daño? Se lo voy a decir al doctor. Voy a estar cerca.`, en: `Thank you for telling me, Mateo. Do the voices tell you to hurt yourself? Have you thought about hurting yourself? I will tell the doctor. I'll be close by.`, score: 2, fb: `Good. You thank him, ask directly about harm, and say you will report it. Asking does not plant the idea. Voices that command, or any thought of self-harm, go to the doctor now, not at the next round.` }
        ] },
      { who: `Doña Rosa`,
        line: [`Enfermero, me da miedo dejarlo solo. ¿Puedo venir mañana? ¿Y si se asusta en la noche?`, `Nurse, I'm afraid to leave him alone. Can I come tomorrow? And what if he gets scared at night?`],
        choices: [
          { tl: `No se preocupe, váyase tranquila a su casa.`, en: `Don't worry, go home calmly.`, score: 0, fb: `Empty reassurance dismisses her and answers neither question. She is a partner in his care. Tell her how to visit and how he can get help.` },
          { tl: `Es normal que le preocupe, Doña Rosa. Las visitas son según las reglas de la unidad, y le doy los horarios por escrito. Mateo, si algo lo asusta de noche, oprima este botón de llamada. Hay enfermeros toda la noche.`, en: `It's normal for you to worry, Doña Rosa. Visits follow the unit's rules, and I'll give you the times in writing. Mateo, if something scares you at night, press this call button. There are nurses all night.`, score: 2, fb: `Good. You acknowledge her worry, answer the visiting question without promising beyond the unit rules, and show him the call button. Show the button in person. For consent or teaching with her, ask for a qualified interpreter (Title VI).` },
          { tl: `Pregunte los horarios en la recepción.`, en: `Ask about visiting hours at the front desk.`, score: 1, fb: `It answers part of her question and sends her away. Mateo still does not know how to call a nurse tonight.` }
        ] },
      { who: `Mateo`,
        line: [`¿Y ahora qué va a pasar?`, `So what happens now?`],
        choices: [
          { tl: `Esta noche, a descansar. Le enseño su cuarto y la estación de enfermería. Las enfermeras pasamos a ver a todos los pacientes durante la noche. Mañana lo ve el doctor. Si su mamá quiere hablar con el doctor, se puede pedir un intérprete.`, en: `Tonight, rest. I'll show you your room and the nurses' station. We nurses check on all the patients during the night. Tomorrow the doctor will see you. If your mother wants to talk with the doctor, we can ask for an interpreter.`, score: 2, fb: `Good. Short, concrete information makes a strange place predictable. You explain the checks as routine for everyone, so they feel less like spying, and you offer an interpreter for his mother.` },
          { tl: `Mañana le explican todo.`, en: `Tomorrow they'll explain everything.`, score: 1, fb: `True, but it leaves him with no picture of tonight. Say what will happen in the next hours.` },
          { tl: `Ya verá. Todo depende de cómo se porte.`, en: `You'll see. It all depends on how you behave.`, score: 0, fb: `A veiled warning. It sounds like a threat and confirms that this is a hostile place.` }
        ] }
    ],
    summary: {
      findings: [`Arrived with his mother, Doña Rosa (Spanish only); preferred form of address asked and recorded`,
        `Belongings checked with permission, with a reason, together with him and his mother; items kept per the unit's list`,
        `Phone and visiting rules explained; times given in writing`,
        `Suspicious: asked whether staff are "con ellos" (his coworkers); not argued with or confirmed`,
        `Auditory hallucinations present on arrival (derogatory, telling him to disappear): asked directly about self-harm and reported to the doctor`,
        `Mother worried about leaving him: visiting explained, call button shown, interpreter offered for talks with the doctor`],
      mse: `Nursing note: 19M, hood up, guarded, glancing at the wall. Speech soft and sparse. Mood not stated; affect restricted and wary. Persecutory ideas (staff may be allied with coworkers). Auditory hallucinations on arrival with derogatory content and a command to disappear. Accepted choices and took part in the belongings check. Insight poor. Report the command voices and any self-harm statement to the doctor now. Routine checks explained. Mother informed about visits.`
    }
  },
  {
    id: `nurse-meds`,
    role: `nurse`,
    title: `Nurse: Brayan and the evening medicine`,
    level: `B1`,
    setting: `Inpatient psychiatry unit, day 3, the evening medicine round. Brayan, 24, a DJ and rideshare driver admitted with a manic episode (methamphetamine use too), talks fast and walks the corridor. He says he feels better than ever. He has refused blood draws. You are the evening nurse with his evening medicine. Check who he is, listen first, give simple true information, never trick or threaten, and report a refusal to the doctor.`,
    steps: [
      { who: `Brayan`,
        line: [`¡Qué onda! Hoy me siento de lujo. Se me están ocurriendo mil mezclas nuevas.`, `What's up! I feel amazing today. A thousand new mixes keep coming to me.`],
        choices: [
          { tl: `Buenas noches. Soy ___, su enfermero / enfermera de esta noche. Qué bueno que tiene tantas ideas. Es la hora de su medicina de la noche. Antes, ¿me dice su nombre completo, por favor?`, en: `Good evening. I'm ___, your nurse tonight. It's good that you have so many ideas. It's time for your evening medicine. First, will you tell me your full name, please?`, score: 2, fb: `Good. You greet him, reflect his energy without feeding it, and check his identity by asking him to say his name. Do not say the name for him and wait for a yes. Compare with the wristband as your unit requires.` },
          { tl: `Hola, Brayan. Aquí está su medicina. Tómesela, por favor.`, en: `Hi, Brayan. Here is your medicine. Please take it.`, score: 1, fb: `Clear, but you skip the identity check and the person. A patient who is elevated may answer to any name. Ask him to state his name.` },
          { tl: `Cálmese y siéntese, por favor. Está molestando a los demás.`, en: `Calm down and sit, please. You're bothering the others.`, score: 0, fb: `A reprimand as the first line starts a power struggle with a manic patient. If noise is a problem, ask gently later and give the reason.` }
        ] },
      { who: `Brayan`,
        line: [`Brayan, el DJ. ¿Y esa medicina para qué es? Yo me siento perfecto.`, `Brayan, the DJ. And what is that medicine for? I feel perfect.`],
        choices: [
          { tl: `Es la que le mandó el doctor.`, en: `It's the one the doctor ordered for you.`, score: 1, fb: `True, but it does not answer his question. A patient who understands what a medicine is for takes it more often.` },
          { tl: `Es para curarlo de la locura.`, en: `It's to cure you of the craziness.`, score: 0, fb: `Avoid "locura". It stigmatizes and makes him defensive, and it is not an accurate description.` },
          { tl: `Gracias por decirme su nombre, Brayan. Es una medicina para que su ánimo y su energía se mantengan parejos, y para que pueda dormir mejor. La recetó el doctor.`, en: `Thank you for telling me your name, Brayan. It is a medicine to keep your mood and energy even, and so that you can sleep better. The doctor prescribed it.`, score: 2, fb: `Good. Everyday words, true, and short: what it is for and who ordered it. Do not name the diagnosis or argue that he is ill unless the doctor has asked you to.` }
        ] },
      { who: `Brayan`,
        line: [`No, gracias. Esta noche no me la tomo. Ya estoy curado.`, `No, thanks. I'm not taking it tonight. I'm cured already.`],
        choices: [
          { tl: `Si no se la toma, no va a salir de aquí.`, en: `If you don't take it, you won't leave here.`, score: 0, fb: `A threat. It may feel like it works tonight, but it destroys trust and it is not informed agreement. Discharge is the doctor's decision.` },
          { tl: `Gracias por decírmelo con claridad, Brayan. No lo voy a obligar. ¿Me permite preguntarle qué es lo que no le gusta de la medicina?`, en: `Thank you for telling me clearly, Brayan. I won't force you. May I ask what it is that you don't like about the medicine?`, score: 2, fb: `Good. You accept the refusal calmly, say you will not force him, and ask permission to hear his reason. A refusal often hides a side effect or a fear.` },
          { tl: `Es orden del doctor.`, en: `It's the doctor's order.`, score: 1, fb: `True, but an appeal to authority does not answer him. Find out his reason first.` }
        ] },
      { who: `Brayan`,
        line: [`Me siento lento, como en una nube. Me tiemblan las manos y no puedo mezclar bien. Tengo mucha sed y voy mucho al baño. Y no quiero que me piquen otra vez para sacarme sangre.`, `I feel slow, like in a cloud. My hands shake and I can't mix right. I'm very thirsty and I go to the bathroom a lot. And I don't want them to stick me again to draw blood.`],
        choices: [
          { tl: `Eso es normal. Todos se acostumbran.`, en: `That's normal. Everybody gets used to it.`, score: 1, fb: `Some effects do ease, but you close the topic without finding out more. A tremor needs a few questions and a report, not only reassurance.` },
          { tl: `Gracias por contármelo, es muy importante. ¿Ha tenido náuseas, vómito o diarrea? ¿El temblor está peor que ayer?`, en: `Thank you for telling me, it's very important. Have you had nausea, vomiting or diarrhea? Is the tremor worse than yesterday?`, score: 2, fb: `Good. You take the complaint seriously and ask simple follow-up questions. A tremor that is getting worse, or vomiting, diarrhea, or unsteady walking, goes to the doctor at once. Do not promise that the blood test will be skipped. Report his fear of the draw and let the doctor talk about it.` },
          { tl: `Son excusas. Todos los pacientes dicen lo mismo.`, en: `Those are excuses. All patients say the same thing.`, score: 0, fb: `Dismissing his complaint ends the conversation, and the symptoms he names could be real side effects that the doctor needs to know about.` }
        ] },
      { who: `Brayan`,
        line: [`Náuseas no, y el temblor igual que ayer. Mejor ya no la quiero. Total, ¿qué cambia si le digo al doctor? Y si no me la tomo, ¿qué, me van a inyectar como en urgencias?`, `No nausea, and the tremor is the same as yesterday. I'd rather not have it. What changes if I tell the doctor anyway? And if I don't take it, what, are you going to inject me like in the ER?`],
        choices: [
          { tl: `Lo que siente puede ser efecto de la medicina, y el doctor puede revisar eso. Hoy no lo voy a presionar. No es un castigo. Voy a anotar que no la tomó y se lo voy a decir al doctor.`, en: `What you feel can be an effect of the medicine, and the doctor can look into that. I won't pressure you tonight. It isn't a punishment. I'll write down that you didn't take it and tell the doctor.`, score: 2, fb: `Good. You give simple true information (side effects can often be managed), you do not press, you say openly that you will chart and report, and you answer his fear without threats. Do not promise or predict what the doctor will order.` },
          { tl: `Si se la toma, mañana puede usar el teléfono más tiempo. Si no, el doctor le va a ordenar una inyección.`, en: `If you take it, tomorrow you can use the phone longer. If not, the doctor will order an injection.`, score: 0, fb: `This mixes a bribe with a threat. Bargaining with privileges and threatening an injection are coercion. They confirm his fear from the ER and make every later round harder.` },
          { tl: `Está bien, no se la tome. Hasta mañana.`, en: `Fine, don't take it. See you tomorrow.`, score: 1, fb: `You respect the refusal, but you leave it there. A refused dose is always recorded and reported, and he still needs an answer to his fear.` }
        ] },
      { who: `Brayan`,
        line: [`Bueno... pero ahorita no. ¿Me van a estar molestando toda la noche?`, `Okay... but not right now. Are you going to bother me all night?`],
        choices: [
          { tl: `Voy a regresar cada diez minutos hasta que se la tome.`, en: `I'll come back every ten minutes until you take it.`, score: 0, fb: `This is pressure, not an offer. Repeated visits that aim at one answer feel like harassment and make refusal stronger.` },
          { tl: `Está bien. Buenas noches.`, en: `All right. Good night.`, score: 1, fb: `Calm, but you leave no door open. Say that you will come back and that he can change his mind.` },
          { tl: `No lo voy a molestar. Voy a pasar más tarde a ver cómo sigue. Si cambia de idea, me dice o oprime el botón de llamada.`, en: `I won't bother you. I'll come by later to see how you're doing. If you change your mind, tell me or press the call button.`, score: 2, fb: `Good. Coming back later and leaving the door open is part of respecting a refusal, not pressure. Follow your unit's policy on timing and on waking a patient.` }
        ] },
      { who: `Brayan`,
        line: [`¿Y le va a decir al doctor? ¿Me van a dejar salir de aquí?`, `And are you going to tell the doctor? Are you going to let me leave here?`],
        choices: [
          { tl: `Seguro el doctor le ordena la misma medicina, así que mejor tómesela.`, en: `The doctor will surely order the same medicine, so you'd better take it.`, score: 0, fb: `This predicts the doctor's decision and takes away his reason to talk to him. It also turns his refusal into an argument again.` },
          { tl: `Sí, se lo voy a decir: que hoy no la tomó, y lo que me contó del temblor, de sentirse lento y de la sed. El doctor lo va a revisar y va a hablar con usted. Cuándo sale lo decide el doctor con usted.`, en: `Yes, I'll tell him: that you didn't take it tonight, and what you told me about the tremor, feeling slow and the thirst. The doctor will check you and talk with you. When you leave is decided by the doctor together with you.`, score: 2, fb: `Good. You say openly what you will report and who decides about leaving. Report in English by SBAR: who and where he is, the refusal and his reasons, tremor unchanged, thirst and urination, no nausea, vomiting or diarrhea (asked), his fear of injection and of blood draws, and that you asked for a doctor review about the medicine and the blood test.` },
          { tl: `Sí, le aviso al doctor.`, en: `Yes, I'll let the doctor know.`, score: 1, fb: `Reporting is right, but he asked two questions. Tell him what you will report and who decides about leaving, so he sees why it is worth talking to the doctor.` }
        ] }
    ],
    summary: {
      findings: [`Day 3: still elevated, fast speech, says he is cured and does not need medicine`,
        `Identity checked by asking him to state his name, as well as by the wristband`,
        `Reasons for refusal: feels slow and foggy, hand tremor unchanged, thirst and frequent urination, fear of blood draws, fear of an injection`,
        `Asked about nausea, vomiting and diarrhea: none; tremor not worse than yesterday`,
        `Refused the evening dose: not pressed, no bargaining, no hidden medicine; refusal charted and reported to the doctor with his reasons`,
        `Nurse to return later to offer the medicine again; he can ask at any time`],
      mse: `Nursing note: 24M, restless, pacing, talkative, cooperative with questions. Speech rapid. Mood "de lujo"; affect elevated. Grandiose, minimizing illness. Accepted a short talk about the medicine, then refused the dose. Mild hand tremor. Insight poor. Report: refusal, side-effect complaints, fear of restraint and of blood draws. Ask the doctor to review the medicine and the blood test plan.`
    }
  },
  {
    id: `nurse-night`,
    role: `nurse`,
    title: `Nurse: Ramiro at night, watching alcohol withdrawal`,
    level: `B1`,
    setting: `Medical unit, about 2 a.m. on his second night in the hospital. Ramiro, 52, a construction worker who lives alone, was admitted after a withdrawal seizure. His daughter Marisol visited earlier. You are the night nurse on your round. He is sweating and his hands shake. You can call the doctor on duty from the bedside. Check him, ask the same withdrawal questions every round, and call the doctor at once when he gets worse.`,
    steps: [
      { who: `Ramiro`,
        line: [`(Medio dormido, se sobresalta.) ¿Quién es? ... ¿Qué hora es?`, `(Half asleep, startles.) Who is it? ... What time is it?`],
        choices: [
          { tl: `¡Ramiro, despierte! (Prende la luz grande y lo sacude del hombro.)`, en: `Ramiro, wake up! (Turns on the big light and shakes his shoulder.)`, score: 0, fb: `Startling a patient in withdrawal can raise fear and agitation. Approach from where he can see you, say his name softly, and do not shake him.` },
          { tl: `Ramiro, soy ___, su enfermero / enfermera de esta noche. Son como las dos de la mañana. Está en el hospital, en la unidad médica. ¿Le prendo una luz suave para verlo mejor?`, en: `Ramiro, I'm ___, your nurse tonight. It's about two in the morning. You are in the hospital, on the medical unit. May I turn on a soft light so I can see you better?`, score: 2, fb: `Good. Your name, the time and the place in plain words: gentle orientation belongs in every night check in withdrawal. Asking before a soft light respects him, and better light means fewer misread shadows.` },
          { tl: `Solo vengo a ver cómo está. ¿Le prendo la luz?`, en: `I'm just coming to see how you are. May I turn on the light?`, score: 1, fb: `Polite, but he does not know who you are or where he is. Give your name, the time and the place first.` }
        ] },
      { who: `Ramiro`,
        line: [`No puedo dormir. Estoy sudando todo y mire cómo me tiemblan las manos. Me da mucho miedo, no sé por qué.`, `I can't sleep. I'm sweating all over and look how my hands shake. I'm very scared, I don't know why.`],
        choices: [
          { tl: `Gracias por decírmelo. Le voy a preguntar cómo se siente el cuerpo. ¿Tiene náuseas o dolor de cabeza? ¿La angustia está más fuerte que en la tarde?`, en: `Thank you for telling me. I'm going to ask how your body feels. Do you have nausea or a headache? Is the anxiety stronger than it was in the afternoon?`, score: 2, fb: `Good. Ask the same withdrawal questions at each round (tremor, sweating, nausea, headache, anxiety, then what he sees, hears and feels) and compare with the last round. A change is what you report.` },
          { tl: `Es normal, dejó de tomar. Aguántese.`, en: `It's normal, you stopped drinking. Put up with it.`, score: 0, fb: `Withdrawal can get worse and become dangerous. Telling him to put up with it skips the assessment and makes him less likely to tell you when it gets worse.` },
          { tl: `Le traigo una toalla y ropa seca.`, en: `I'll bring you a towel and dry clothes.`, score: 1, fb: `Comfort care matters, but do it after you check his symptoms. A sweating, shaking, frightened patient needs assessing first.` }
        ] },
      { who: `Ramiro`,
        line: [`Un poco de náusea, y la cabeza pesada. ... Oiga, ¿no hay un montón de bichos en la cortina? ... No, a lo mejor me los imagino.`, `A little nausea, and my head feels heavy. ... Hey, aren't there a bunch of bugs on the curtain? ... No, maybe I'm imagining them.`],
        choices: [
          { tl: `Sí, tiene razón. Ahorita los espanto, no se preocupe.`, en: `Yes, you're right. I'll scare them off right now, don't worry.`, score: 0, fb: `Agreeing that the bugs are there confirms the misperception and can add to his confusion. Do not confirm it, and do not argue with it.` },
          { tl: `¿Abrimos la cortina y vemos juntos?`, en: `Shall we open the curtain and look together?`, score: 1, fb: `Better light can help with a misread shadow, but first ask what he sees, and whether he also feels or hears things. You need those answers for your report.` },
          { tl: `Yo no veo bichos, pero usted sí los vio. ¿Cómo son? ¿Todavía los ve? ¿Siente algo en la piel o escucha sonidos o voces que no deberían estar?`, en: `I don't see bugs, but you saw them. What are they like? Do you still see them? Do you feel something on your skin, or hear sounds or voices that shouldn't be there?`, score: 2, fb: `Good. You say honestly what you see without arguing, then check seeing, feeling and hearing. New perceptual changes on the second night of withdrawal are an early warning of withdrawal delirium.` }
        ] },
      { who: `Ramiro`,
        line: [`Veo como que algo se mueve, y siento hormigas en los brazos. Voces no oigo. (Mira alrededor.) ¿Dónde estoy? ¿Es de día?`, `I see something moving, and I feel ants on my arms. I don't hear voices. (Looks around.) Where am I? Is it daytime?`],
        choices: [
          { tl: `Ramiro, ¿no se acuerda? Se lo dije hace un momento. Ponga atención.`, en: `Ramiro, don't you remember? I told you a moment ago. Pay attention.`, score: 0, fb: `Scolding a confused patient shames him and does not test anything. Repeat the facts kindly.` },
          { tl: `Está en el hospital, en la unidad médica. Es de noche, como las dos de la mañana. ¿Me dice qué día cree que es?`, en: `You are in the hospital, on the medical unit. It is night, about two in the morning. Can you tell me what day you think it is?`, score: 2, fb: `Good. You give the correct facts and then check orientation with one easy question. Record what he answers. Disorientation on the second night, with new perceptual changes, is a sign that withdrawal is getting worse.` },
          { tl: `Está en el hospital.`, en: `You're in the hospital.`, score: 1, fb: `Correct, but you do not check whether he can say the day or the place himself. Orientation is part of every round.` }
        ] },
      { who: `Ramiro`,
        line: [`(Intenta pararse.) Me voy a mi casa. Un traguito y se me quita.`, `(Tries to get up.) I'm going home. One little drink and it goes away.`],
        choices: [
          { tl: `Entiendo que se siente muy mal y quiere un trago. Lo que siente, el sudor, el temblor y ver cosas, viene de dejar el alcohol, y aquí se puede tratar. Salir solo a esta hora no es seguro. ¿Se queda conmigo un momento?`, en: `I understand that you feel very bad and you want a drink. What you feel, the sweating, the tremor and seeing things, comes from stopping alcohol, and it can be treated here. Going out alone at this hour is not safe. Will you stay with me a moment?`, score: 2, fb: `Good. You name the craving without judging, explain the symptoms simply, give the safety reason, and ask him to stay. He is shaky and had a seizure, so a fall or leaving alone is a real risk.` },
          { tl: `Si se sale, llamo a seguridad y lo amarramos.`, en: `If you go out, I'll call security and tie you down.`, score: 0, fb: `A threat raises fear and agitation. Restraint is never a threat. Any decision about it follows the doctor's assessment, the law, and your hospital's policy.` },
          { tl: `No se puede ir. Es la regla.`, en: `You can't leave. It's the rule.`, score: 1, fb: `A limit with no reason and no plan rarely settles a frightened patient. Say why, and say what you will do next.` }
        ] },
      { who: `Ramiro`,
        line: [`No se vaya, por favor... siento que me estoy volviendo loco.`, `Don't leave, please... I feel like I'm going crazy.`],
        choices: [
          { tl: `Todo va a estar bien. Ya se le pasa.`, en: `Everything will be fine. It will pass soon.`, score: 1, fb: `Meant kindly, but empty. It does not explain what is happening and it does not say that you will stay.` },
          { tl: `Hay otros pacientes y no puedo quedarme. Llámeme si pasa algo.`, en: `There are other patients and I can't stay. Call me if something happens.`, score: 0, fb: `Leaving a frightened patient who shows early signs of delirium alone risks a fall, leaving the unit, and worse confusion. If you must step away, ask a colleague to stay with him.` },
          { tl: `Me quedo aquí con usted. Da miedo, ¿verdad? Lo que siente es por dejar el alcohol. No se está volviendo loco, y se trata. Le bajo la cama y le dejo el botón de llamada aquí. No se levante solo.`, en: `I'm staying here with you. It's scary, isn't it? What you feel is from stopping alcohol. You are not going crazy, and it can be treated. I'll lower the bed and leave the call button here. Don't get up alone.`, score: 2, fb: `Good. You stay, name the fear, explain in plain words that it is withdrawal and treatable, and make the bed safe: low bed, call button within reach, no standing alone. Offer water only if the orders allow it.` }
        ] },
      { who: `Ramiro`,
        line: [`(Muy agitado, sudando, mira la cortina.) ¡Ahí están otra vez, me suben por la cama! ¿Dónde está Marisol? ¡Quiero a mi hija!`, `(Very agitated, sweating, looks at the curtain.) There they are again, they're climbing up the bed! Where is Marisol? I want my daughter!`],
        choices: [
          { tl: `Voy a esperar a la ronda de la mañana para avisarle al doctor, para no molestarlo de noche.`, en: `I'll wait for the morning round to tell the doctor, so as not to bother him at night.`, score: 0, fb: `Waiting until morning with new perceptual changes, disorientation and worse agitation can let delirium develop. Do not let worry about disturbing the doctor soften or delay the call.` },
          { tl: `Voy a llamar al doctor ahora mismo. Me quedo con usted. Está en el hospital y estoy aquí, Ramiro.`, en: `I'm going to call the doctor right now. I'm staying with you. You are in the hospital and I'm here, Ramiro.`, score: 2, fb: `Good. You tell him what you are doing, stay with him, and orient him. Call from the bedside or ask a colleague to call. Report in English by SBAR: who and where he is; withdrawal seizure and heavy daily drinking, second night, last drink about two days ago; sweating and tremor worse, now seeing bugs and feeling ants, disoriented to place and time, agitated, asking for his daughter; vital signs now; ask for review now and for orders.` },
          { tl: `Respire hondo, ya se le pasa. Voy a pedir a una compañera que lo vigile.`, en: `Breathe deeply, it will pass soon. I'll ask a colleague to watch you.`, score: 1, fb: `Asking for help is good, but this is a change that needs the doctor on duty now. Do not wait to see whether it passes.` }
        ] }
    ],
    summary: {
      findings: [`Second night of alcohol withdrawal after a withdrawal seizure: sweating and tremor, mild nausea, heavy head, anxiety, restlessness; craving, asked to go home for a drink`,
        `New perceptual changes: bugs seen on the curtain (he doubted it himself), a crawling feeling on the arms; no voices`,
        `Orientation checked: needed facts again, disoriented to place and time as he worsened`,
        `Worse and more agitated: doctor on duty called at once, with a structured report, for review of the withdrawal treatment`,
        `Nursing: soft light, orientation, no arguing with or confirming the bugs, bed low, call button within reach, no standing alone, a nurse stays with him; recheck perception and orientation each round`],
      mse: `Nursing note: 52M, diaphoretic, tremulous, anxious, restless. Speech normal at first, then pressured with fear. Mood afraid; affect anxious. Visual and tactile misperceptions (bugs, ants), no auditory hallucinations. Orientation fell during the round. Wanted to leave to drink. Responded to calm reassurance and to staying with him. Report any change from the last round at once. Early warning sign of withdrawal delirium.`
    }
  }
]);
