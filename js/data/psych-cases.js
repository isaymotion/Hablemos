/* Interactive case simulations (PSYCH_CASES) and patient-response interpretation drills (PSYCH_INTERP).
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish text; registers are
   f = usted (formal), c = tú (informal). Clinician lines in the cases use usted.
   All patients are fictional. Medication names and doses mentioned in teaching text are examples only.
   PSYCH_CASES: [ { id, title, level, setting, steps: [ { who, line: [spanish, english], choices: [ { tl, en, score, fb } ] } ], summary: { findings, mse } } ]
     score: 2 = best, 1 = acceptable, 0 = avoid. fb = feedback. Each step has exactly 3 choices (2, 1, 0).
     Ids: mateo, lupe, brayan, don-chuy, ramiro, agitated (required by the de-escalation view), yesenia.
   PSYCH_INTERP: [ [spanish patient statement, english, clinical meaning / what to ask next] ]
   Example PSYCH_INTERP element:  ['No tengo ganas de nada.', 'I have no desire to do anything.', 'Anhedonia or low energy. Clarify which.']
   Example PSYCH_CASES step:
     { who: 'Madre', line: ['Doctor, ayúdenos, mi hijo ya no sale de su cuarto.', "Doctor, help us, my son doesn't leave his room anymore."],
       choices: [ { tl: 'Gracias por traerlo. ¿Puedo hablar primero con él a solas?', en: 'Thank you for bringing him. May I speak with him alone first?', score: 2, fb: 'Respectful; plans to see the patient alone.' } ] } */
window.PSYCH_CASES = [
  {
    id: "mateo",
    title: "First-episode psychosis",
    level: "B1",
    setting: "Outpatient clinic. Mateo, 19, a warehouse worker, is brought by his mother, Doña Rosa, who speaks only Spanish. He sits with his hood up and glances at the wall.",
    steps: [
      { who: "Doña Rosa",
        line: ["Doctor, ayúdenos, mi hijo ya no sale de su cuarto. Ya ni come con nosotros.", "Doctor, please help us, my son doesn't leave his room anymore. He doesn't even eat with us."],
        choices: [
          { tl: "Gracias por traerlo, Doña Rosa. ¿Puedo hablar primero con Mateo a solas y después con usted?", en: "Thank you for bringing him, Doña Rosa. May I speak with Mateo alone first, and then with you?", score: 2, fb: "Good. You thank the mother, plan to see the patient alone, and promise her a turn." },
          { tl: "¿Qué le pasó?", en: "What happened to him?", score: 1, fb: "Acceptable, but the patient should also get a chance to speak for himself." },
          { tl: "¿Su hijo está loco?", en: "Is your son crazy?", score: 0, fb: "Avoid \"loco\". It stigmatizes, frightens the family, and makes the patient defensive." }
        ] },
      { who: "Mateo",
        line: ["Yo no estoy enfermo. Los que tienen el problema son ellos.", "I'm not sick. They are the ones with the problem."],
        choices: [
          { tl: "¿A quiénes se refiere cuando dice \"ellos\"?", en: "Who do you mean by \"they\"?", score: 2, fb: "Good. You follow his words with curiosity. This invites him to describe the persecutory content without a fight." },
          { tl: "Bueno. ¿Cómo ha estado durmiendo?", en: "Okay. How have you been sleeping?", score: 1, fb: "A safe question, but you missed an opening to hear his own account." },
          { tl: "Sí está enfermo. Necesita tomar medicina.", en: "Yes, you are sick. You need to take medicine.", score: 0, fb: "Confronting insight this early damages rapport. Build trust first." }
        ] },
      { who: "Mateo",
        line: ["Los vecinos me vigilan. Los oigo por la pared, hablan de mí. Y un compañero del trabajo me hizo un trabajo, una brujería.", "The neighbors watch me. I hear them through the wall, they talk about me. And a coworker did a \"trabajo\" on me, witchcraft."],
        choices: [
          { tl: "Gracias por contármelo. Quiero entender cómo lo vive usted. ¿Qué dicen los vecinos de usted?", en: "Thank you for telling me. I want to understand how you experience it. What do the neighbors say about you?", score: 2, fb: "Good. You accept his explanation as his experience, neither confirming nor arguing, and ask for the content of the voices." },
          { tl: "¿Cuándo empezó todo esto?", en: "When did all this start?", score: 1, fb: "Useful history, but ask about the content while he is talking." },
          { tl: "La brujería no existe, Mateo.", en: "Witchcraft doesn't exist, Mateo.", score: 0, fb: "Arguing with a belief shuts him down. In many families brujería is a shared explanatory model, so ask about it later with respect." }
        ] },
      { who: "Mateo",
        line: ["Dicen que soy un inútil, que mejor desaparezca. A veces me dan órdenes.", "They say I'm useless, that I should disappear. Sometimes they give me orders."],
        choices: [
          { tl: "¿Qué órdenes le dan? ¿Le dicen que se haga daño o que le haga daño a alguien?", en: "What orders do they give you? Do they tell you to hurt yourself or someone else?", score: 2, fb: "Essential. Commanding voices need an immediate safety question about harm to self and others." },
          { tl: "¿La voz es de hombre o de mujer?", en: "Is the voice a man's or a woman's?", score: 1, fb: "Relevant detail, but risk comes first." },
          { tl: "No les haga caso.", en: "Don't pay attention to them.", score: 0, fb: "This dismisses him and skips the risk assessment." }
        ] },
      { who: "Mateo",
        line: ["Me dicen que me tire del techo. No lo voy a hacer... creo.", "They tell me to jump off the roof. I won't do it... I think."],
        choices: [
          { tl: "Gracias por decírmelo. ¿Ha pensado en quitarse la vida? ¿Ha hecho algún preparativo?", en: "Thank you for telling me. Have you thought about killing yourself? Have you made any preparations?", score: 2, fb: "Good. You thank him, then ask directly about suicidal thoughts and preparation." },
          { tl: "¿Qué tan seguido las oye?", en: "How often do you hear them?", score: 1, fb: "Useful, but clarify suicidal intent first." },
          { tl: "Qué bueno que no lo va a hacer.", en: "Good that you're not going to do it.", score: 0, fb: "\"Creo\" (I think) is ambivalence. Explore it. Do not accept reassurance." }
        ] },
      { who: "Doña Rosa",
        line: ["Primero lo llevé con un curandero. Dijo que le hicieron un mal. Yo no sé, doctor.", "First I took him to a curandero. He said someone did him harm. I don't know, doctor."],
        choices: [
          { tl: "La entiendo, Doña Rosa. Rezar y tomar medicina pueden ir juntos. ¿Qué cambios ha visto en Mateo desde entonces?", en: "I understand, Doña Rosa. Prayer and medicine can go together. What changes have you seen in Mateo since then?", score: 2, fb: "Good. You respect her explanation, include faith in the plan, and gather collateral. This improves trust and adherence." },
          { tl: "Ya veo. ¿Cuánto tiempo lleva así?", en: "I see. How long has he been like this?", score: 1, fb: "Needed information, but acknowledge her belief and effort first." },
          { tl: "Los curanderos no sirven para esto. Eso no es un mal.", en: "Curanderos are no use for this. It isn't a curse.", score: 0, fb: "Dismissing her beliefs can push the family away from care. She also needs to feel she did the right thing by seeking help." }
        ] }
    ],
    summary: {
      findings: ["Three months of withdrawal and functional decline (stays in his room)",
        "Persecutory delusions (neighbors, a coworker's brujería) and derogatory third-person voices",
        "Command hallucinations to disappear and to jump from the roof, with passive suicidal ideation and ambivalence: full risk assessment, likely admission",
        "Poor insight",
        "Family explanatory model (brujería, curandero): respect it and include the mother in the plan"],
      mse: "19M, hooded, poorly groomed, guarded, glancing at the wall as if attending to internal stimuli. Speech soft and sparse. Mood not stated; affect restricted. Thought process mostly linear. Thought content: persecutory delusions; passive SI with command hallucinations to jump. Perception: auditory hallucinations, third-person, derogatory, command type. Cognition grossly intact. Insight poor. Judgment impaired."
    }
  },
  {
    id: "lupe",
    title: "Depression and suicide risk",
    level: "B1",
    setting: "Emergency department. Lupe, 46, a hotel housekeeper and mother of three, was brought by her sister after taking a handful of the sister's pills. She is separated from her husband and speaks quietly.",
    steps: [
      { who: "Lupe",
        line: ["Estoy muy cansada, doctora. Son los nervios, ya no puedo con nada.", "I'm so tired, doctor. It's my nerves, I can't handle anything anymore."],
        choices: [
          { tl: "Gracias por venir, Lupe. Cuénteme qué ha pasado desde que empezaron los nervios.", en: "Thank you for coming, Lupe. Tell me what has happened since the nerves started.", score: 2, fb: "Good. You treat \"nervios\" as an idiom of distress and ask an open question about context." },
          { tl: "¿Le duele algo?", en: "Does anything hurt?", score: 1, fb: "Reasonable, but it keeps the talk on the body and closes the door on her story." },
          { tl: "Los nervios no son una enfermedad.", en: "Nerves are not an illness.", score: 0, fb: "This invalidates her way of naming her suffering." }
        ] },
      { who: "Lupe",
        line: ["Desde que mi esposo se fue. No duermo, casi no como. Me siento culpable con mis hijos.", "Since my husband left. I don't sleep, I barely eat. I feel guilty toward my children."],
        choices: [
          { tl: "Lamento mucho lo que está pasando. ¿Cómo han estado su sueño y su apetito? ¿Ya no disfruta lo que antes le gustaba?", en: "I'm very sorry for what you're going through. How have your sleep and appetite been? Have you stopped enjoying what you used to like?", score: 2, fb: "Good. You show empathy first, then screen for sleep, appetite, and loss of interest." },
          { tl: "¿Cuántos hijos tiene?", en: "How many children do you have?", score: 1, fb: "Shows interest, but it does not move the assessment forward." },
          { tl: "Tiene que ser fuerte por sus hijos.", en: "You have to be strong for your children.", score: 0, fb: "This adds to her guilt and shuts down what she is feeling." }
        ] },
      { who: "Lupe",
        line: ["Ya no aguanto, doctora. A veces pienso que mis hijos estarían mejor sin mí.", "I can't take it anymore, doctor. Sometimes I think my children would be better off without me."],
        choices: [
          { tl: "Cuando dice que ya no aguanta, ¿ha pensado en quitarse la vida?", en: "When you say you can't take it anymore, have you thought about ending your life?", score: 2, fb: "Excellent. \"Ya no aguanto\" and \"mejor sin mí\" are cues. Ask directly, in plain words. Asking does not plant the idea." },
          { tl: "Voy a pedirle algo para ayudarla a dormir.", en: "I'll order something to help you sleep.", score: 1, fb: "Treatment may help, but it comes after you know her risk." },
          { tl: "No piense así, sus hijos la necesitan.", en: "Don't think that way, your children need you.", score: 0, fb: "This shuts down disclosure and can deepen her sense of being a burden." }
        ] },
      { who: "Lupe",
        line: ["Sí... la semana pasada me tomé un puñado de las pastillas de mi hermana. Me arrepentí y le hablé a ella.", "Yes... last week I took a handful of my sister's pills. I regretted it and called her."],
        choices: [
          { tl: "Gracias por confiar en mí. ¿Todavía piensa en hacerse daño? ¿Hay pastillas o un arma de fuego en su casa o en la casa de su familia?", en: "Thank you for trusting me. Do you still think about hurting yourself? Are there pills or a firearm in your home or your family's home?", score: 2, fb: "Good. You thank her, check current intent, and ask the means question about both medicines and firearms." },
          { tl: "¿Cómo se siente hoy en general?", en: "How do you feel today in general?", score: 1, fb: "A soft question, but it misses the chance to assess current intent and access to means." },
          { tl: "Eso es pecado, Lupe.", en: "That is a sin, Lupe.", score: 0, fb: "Her faith may protect her. Using it to shame her at this moment makes her hide things." }
        ] },
      { who: "Lupe",
        line: ["Mi hermano tiene una pistola en la casa. Pero yo no soy así... Dios no lo permitiría.", "My brother keeps a pistol at the house. But I'm not like that... God wouldn't allow it."],
        choices: [
          { tl: "Su fe puede ayudarla. Aun así, ¿le parece bien que su hermano se lleve la pistola y que su hermana guarde las medicinas? Y puede llamar o mandar un texto al 988, a cualquier hora. Oprima 2 para español.", en: "Your faith can help you. Still, would it be okay if your brother takes the pistol away and your sister keeps the medicines? You can also call or text 988 at any hour. Press 2 for Spanish.", score: 2, fb: "Good. You use her faith as a strength, plan means restriction with family, and give the 988 line with the Spanish option." },
          { tl: "Eso me tranquiliza. La veo la próxima semana.", en: "That reassures me. I'll see you next week.", score: 1, fb: "Follow-up matters, but \"God wouldn't allow it\" is not a safety plan. Means restriction is still needed." },
          { tl: "Si usted cree en Dios, no hay riesgo.", en: "If you believe in God, there is no risk.", score: 0, fb: "Faith lowers risk but does not remove it, and she has just attempted. Do not take reassurance in place of a plan." }
        ] }
    ],
    summary: {
      findings: ["Severe depressive episode after her husband left: low mood, poor sleep and appetite, guilt, hopelessness",
        "Perceived burdensomeness and a suicide attempt by overdose last week, with regret and a call for help",
        "Means: a pistol at her brother's house and her sister's medicines; remove or lock both",
        "Protective factors: her children, her sister, her faith",
        "Needs a written safety plan in Spanish and the 988 line (press 2)"],
      mse: "46F, tired-appearing, tearful, cooperative. Speech soft, slowed. Mood \"muy cansada\"; affect depressed, congruent. Thought process linear. Thought content: guilt, hopelessness, passive and recent active suicidal thoughts with a recent attempt; no psychotic features elicited. Cognition grossly intact. Insight fair. Judgment fair."
    }
  },
  {
    id: "brayan",
    title: "Manic episode",
    level: "B2",
    setting: "Emergency department. Brayan, 24, a DJ and rideshare driver, is brought by his girlfriend, Yadira. He keeps standing up and talks fast.",
    steps: [
      { who: "Yadira",
        line: ["Doctor, no ha dormido en cinco noches. Se gastó cuatro mil dólares en equipo de DJ y dice que Dios lo eligió.", "Doctor, he hasn't slept in five nights. He spent four thousand dollars on DJ equipment and says God chose him."],
        choices: [
          { tl: "Gracias por traerlo, Yadira. Brayan, ¿cómo ha dormido estos días y cómo está de energía?", en: "Thank you for bringing him, Yadira. Brayan, how have you slept these days and how is your energy?", score: 2, fb: "Good. You thank the partner and open with sleep, the key feature to confirm in mania." },
          { tl: "¿Cuánto dinero tiene de ahorros?", en: "How much savings do you have?", score: 1, fb: "Spending matters, but the question is too narrow as an opener and may feel like an audit." },
          { tl: "Seguro solo se fue de fiesta.", en: "He probably just went out partying.", score: 0, fb: "This minimizes five sleepless nights and a serious change from his usual self." }
        ] },
      { who: "Brayan",
        line: ["Dormir es perder el tiempo, doctor. Con dos horas tengo energía de sobra. Dios me eligió para llevar la música a todo el mundo.", "Sleeping is a waste of time, doctor. With two hours I have energy to spare. God chose me to take music to the whole world."],
        choices: [
          { tl: "Se le nota con mucha energía y muchos planes. ¿Cuántas noches lleva así y qué ha comprado en estos días?", en: "I can see you have a lot of energy and a lot of plans. How many nights has it been like this and what have you bought these days?", score: 2, fb: "Good. You acknowledge him without arguing, then ask about duration, decreased need for sleep, and spending." },
          { tl: "¿A qué se dedica usted?", en: "What do you do for work?", score: 1, fb: "Safe, but it can feed the grandiose talk without gathering what you need." },
          { tl: "Eso no es posible, Brayan.", en: "That isn't possible, Brayan.", score: 0, fb: "Arguing with grandiosity escalates a manic patient and ends the interview." }
        ] },
      { who: "Brayan",
        line: ["Sí gasté en el equipo, pero es una inversión. Me va a regresar diez veces.", "Yes, I spent money on the equipment, but it's an investment. It will pay me back ten times."],
        choices: [
          { tl: "Entiendo que para usted es una inversión. Para cuidar su salud, necesito preguntarle: esta semana, ¿ha tomado alcohol o usado alguna sustancia, como cristal o mota?", en: "I understand that for you it is an investment. To care for your health I need to ask: this week, have you had alcohol or used any substance, like crystal or weed?", score: 2, fb: "Good. You accept his view, give the reason for the question, and name specific substances without accusing him. Stimulants can cause or worsen a manic picture." },
          { tl: "¿Usa drogas?", en: "Do you use drugs?", score: 1, fb: "The topic is right, but a vague, blunt question gets a quick \"no\". Name substances and explain why you ask." },
          { tl: "Seguro se drogó, por eso está así.", en: "You must have gotten high, that's why you're like this.", score: 0, fb: "An accusation. It breaks trust and also closes your differential too early." }
        ] },
      { who: "Brayan",
        line: ["Un par de veces cristal, para aguantar. Pero eso no es el problema. Estoy bien, no necesito pastillas.", "A couple of times crystal, to keep going. But that's not the problem. I'm fine, I don't need pills."],
        choices: [
          { tl: "Gracias por ser sincero, eso me ayuda. ¿Qué le preocuparía de tomar una medicina que le ayude a dormir?", en: "Thank you for being honest, that helps me. What would worry you about taking a medicine that helps you sleep?", score: 2, fb: "Good. You thank him for the disclosure and explore his concern about medicine, which opens a conversation about adherence." },
          { tl: "Necesita tomar la medicina, doctor lo dice.", en: "You need to take the medicine, the doctor says so.", score: 1, fb: "The goal is right but the order is not persuasive. Ask what worries him first." },
          { tl: "Si no toma las pastillas, no lo dejamos salir.", en: "If you don't take the pills, we won't let you leave.", score: 0, fb: "A threat is not informed consent. Use persuasion and explain risks and benefits." }
        ] }
    ],
    summary: {
      findings: ["About one week of elevated and irritable mood, little sleep (about 2 hours), grandiosity with religious content, pressured speech",
        "Excessive spending ($4,000) and flight of ideas",
        "Methamphetamine use twice this week can cause or mimic mania: get a drug screen and ask about earlier episodes",
        "Probable bipolar I disorder, current manic episode, with a possible substance contribution",
        "Insight poor"],
      mse: "24M, restless, hyperactive, standing often. Speech rapid and pressured. Mood \"bien\"; affect expansive and irritable. Thought process: flight of ideas. Thought content: grandiose, religious (chosen by God). No hallucinations elicited. Cognition grossly intact. Insight poor. Judgment impaired."
    }
  },
  {
    id: "don-chuy",
    title: "Delirium in an older adult",
    level: "B1",
    setting: "Medical floor, evening. Don Chuy (Jesús), 78, a retired farmworker, is pulling at the sheet and looking at the window. His daughter, Lety, is at the bedside.",
    steps: [
      { who: "Don Chuy",
        line: ["¿Quién es usted? ¿Dónde estoy? ¡Hay niños en la ventana!", "Who are you? Where am I? There are children in the window!"],
        choices: [
          { tl: "Don Chuy, soy la doctora. Está en el hospital y está seguro. Estoy aquí para ayudarlo.", en: "Don Chuy, I'm the doctor. You are in the hospital and you are safe. I'm here to help you.", score: 2, fb: "Good. Calm, simple orientation and reassurance: who you are, where he is, and that he is safe." },
          { tl: "No hay niños en la ventana, Don Chuy.", en: "There are no children in the window, Don Chuy.", score: 1, fb: "A gentle correction is acceptable, but start with who you are and where he is." },
          { tl: "Vamos a amarrarlo para que no se levante.", en: "We're going to tie him down so he doesn't get up.", score: 0, fb: "Restraint is a last resort and often worsens delirium. Try reorientation and a calm room first." }
        ] },
      { who: "Lety",
        line: ["Doctora, ayer estaba bien, hasta me reconoció y platicaba. Desde anoche está así. Casi no toma agua y se queja al orinar.", "Doctor, yesterday he was fine, he even recognized me and chatted. Since last night he's been like this. He barely drinks water and complains when he urinates."],
        choices: [
          { tl: "Eso me ayuda mucho, Lety. ¿Ha tenido fiebre, dolor al orinar o alguna medicina nueva? Y antes de esto, ¿su memoria era normal?", en: "That helps me a lot, Lety. Has he had fever, pain when urinating, or any new medicine? And before this, was his memory normal?", score: 2, fb: "Good. Collateral is key. Sudden onset over hours with fluctuation points to delirium. Dementia is gradual. You also look for causes: infection, dehydration, drugs." },
          { tl: "¿Cuántos años tiene su papá?", en: "How old is your father?", score: 1, fb: "Harmless, but you can get age from the chart. Use her time to learn onset and course." },
          { tl: "Es la edad, Lety. Seguro es demencia.", en: "It's his age, Lety. It must be dementia.", score: 0, fb: "An acute change is not \"just\" dementia. Missing delirium means missing a treatable cause." }
        ] },
      { who: "Don Chuy",
        line: ["Pues... estoy en Michoacán, en la milpa. ¿Ya llegó mi compadre?", "Well... I'm in Michoacán, in the cornfield. Has my compadre arrived yet?"],
        choices: [
          { tl: "Está bien, Don Chuy. ¿Sabe en qué lugar estamos y qué día es más o menos? Después le pido que diga los días de la semana al revés, empezando por el domingo.", en: "That's all right, Don Chuy. Do you know where we are and about what day it is? Then I'll ask you to say the days of the week backward, starting with Sunday.", score: 2, fb: "Good. You test orientation kindly and then attention, the core deficit in delirium. In dementia, attention is usually preserved early, while in primary psychosis orientation and attention are usually intact." },
          { tl: "¿Cómo se llama su hija?", en: "What is your daughter's name?", score: 1, fb: "Tests orientation to person, but it is not enough, and it does not test attention." },
          { tl: "No, Don Chuy, está equivocado.", en: "No, Don Chuy, you're wrong.", score: 0, fb: "This shames him and does not test anything. Keep a calm tone and use simple questions." }
        ] }
    ],
    summary: {
      findings: ["Acute onset over hours with a fluctuating course",
        "Disorientation to place and time, inattention, and visual hallucinations (children in the window)",
        "Daughter reports poor intake and urinary symptoms: likely UTI and dehydration",
        "Most consistent with delirium: find and treat the cause, avoid restraints, review sedating medicines"],
      mse: "78M, restless, picking at the sheet. Speech fragmented, mildly disorganized. Mood not assessed; affect labile. Thought process tangential. Perception: visual hallucinations. Disoriented to place and time (believes he is in Michoacán). Attention impaired (cannot do days backward). Insight absent. Judgment impaired."
    }
  },
  {
    id: "ramiro",
    title: "Alcohol withdrawal and motivation",
    level: "B2",
    setting: "Medical unit, day 1 after an ER visit. Ramiro, 52, a construction worker who lives alone, is sweaty and shaky. His daughter, Marisol, drove him in.",
    steps: [
      { who: "Ramiro",
        line: ["Doctora, ando bien malilla. Me tiemblan las manos y estoy sudando. Necesito un trago.", "Doctor, I feel really bad. My hands shake and I'm sweating. I need a drink."],
        choices: [
          { tl: "Gracias por decírmelo, Ramiro. ¿Cuándo fue su último trago y cuánto toma al día?", en: "Thank you for telling me, Ramiro. When was your last drink and how much do you drink in a day?", score: 2, fb: "Good. Timing of the last drink and the daily amount are the two questions that tell you how severe withdrawal can become." },
          { tl: "¿Quiere que le dé algo para los nervios?", en: "Do you want me to give you something for your nerves?", score: 1, fb: "Treatment may be needed, but first establish the cause and severity." },
          { tl: "Eso le pasa por tomar tanto.", en: "That's what you get for drinking so much.", score: 0, fb: "Blame lowers honesty. Ask about use without judgment." }
        ] },
      { who: "Ramiro",
        line: ["Una botella chica de tequila al día. Hace como dos días fue el último. Cada mañana, la cruda no me deja.", "A pint of tequila a day. My last one was about two days ago. Every morning, the hangover won't let me be."],
        choices: [
          { tl: "Gracias por ser sincero. Cuando ha dejado de tomar antes, ¿ha tenido temblores, sudor, náuseas, ha visto u oído cosas que no están, o ha tenido alguna convulsión?", en: "Thank you for being honest. When you've stopped drinking before, have you had tremors, sweating, nausea, seen or heard things that weren't there, or had a seizure?", score: 2, fb: "Good. You thank him, then ask about withdrawal symptoms and past seizures or delirium tremens. A history of seizures predicts severe withdrawal." },
          { tl: "¿Cuántos años lleva tomando?", en: "How many years have you been drinking?", score: 1, fb: "Useful for history, but ask first about withdrawal and seizures because they are urgent." },
          { tl: "Es un borracho, necesita dejarlo ya.", en: "You're a drunk, you need to quit now.", score: 0, fb: "Stigmatizing language. Describe the use; do not label the person." }
        ] },
      { who: "Ramiro",
        line: ["Sí, hace años me dieron ataques, y ayer otra vez. Me dio mucho miedo. Mi hija Marisol lloró mucho.", "Yes, years ago I had fits, and yesterday again. It scared me a lot. My daughter Marisol cried a lot."],
        choices: [
          { tl: "Se nota que ese susto le importó. Del 0 al 10, ¿qué tan importante es para usted dejar el alcohol? ¿Y qué lo pone en ese número y no en uno más bajo?", en: "I can see that scare mattered to you. From 0 to 10, how important is it to you to stop drinking? And what puts you at that number and not a lower one?", score: 2, fb: "Good. You reflect his feeling, use the importance ruler, and ask why not lower, so he argues for change in his own words (motivational interviewing)." },
          { tl: "Qué bueno que su hija estaba con usted.", en: "It's good your daughter was with you.", score: 1, fb: "Supportive, but you missed the chance to explore his own motivation." },
          { tl: "Si ya se asustó, ahora sí tiene que dejarlo.", en: "Since you got scared, now you have to quit.", score: 0, fb: "An order. It invites resistance. Let him name his reasons for changing." }
        ] }
    ],
    summary: {
      findings: ["Severe alcohol use disorder: about a pint of tequila daily, morning drinking, last drink about 48 hours ago",
        "Tremor and sweating, with a withdrawal seizure and an earlier seizure history: high risk for complicated withdrawal",
        "Needs a symptom-triggered benzodiazepine protocol and thiamine",
        "Motivation is rising (fear, daughter's distress); also assess mood and passive death wish"],
      mse: "52M, diaphoretic, tremulous, anxious, cooperative. Speech normal. Mood \"malilla\"; affect anxious. Thought process linear. Thought content: fear after the seizure, wish to drink; no hallucinations at this time. Oriented. Insight fair. Judgment fair."
    }
  },
  {
    id: "agitated",
    title: "Agitated patient: de-escalation",
    level: "B1",
    setting: "Emergency department. Jorge, 38, was brought by police after shouting at a bus stop. He is sweating, pacing, and clenching his fists, and says people are following him. Stimulant intoxication versus psychosis. An officer stands nearby. Choose your words step by step, following the de-escalation checklist.",
    steps: [
      { who: "Jorge",
        line: ["¡No se me acerquen! ¡Me andan siguiendo! ¡Todos!", "Don't come near me! They're following me! Everyone!"],
        choices: [
          { tl: "Me quedo aquí, no me voy a acercar. Soy la doctora, y solo yo voy a hablar con usted.", en: "I'll stay here, I won't come closer. I'm the doctor, and only I will be speaking with you.", score: 2, fb: "Good. You keep your distance (respect personal space), introduce yourself, and make clear that one staff member speaks." },
          { tl: "Por favor, tranquilícese.", en: "Please calm down.", score: 1, fb: "Calm, but \"calm down\" alone rarely works. Introduce yourself and keep your distance first." },
          { tl: "¡Cálmese ahora mismo!", en: "Calm down right now!", score: 0, fb: "Shouting an order escalates the situation." }
        ] },
      { who: "Jorge",
        line: ["¡Me quieren hacer daño! ¡Quiero irme de aquí!", "They want to hurt me! I want to leave here!"],
        choices: [
          { tl: "Entiendo que se siente en peligro y quiere irse. Cuénteme qué está pasando.", en: "I understand you feel in danger and want to leave. Tell me what's going on.", score: 2, fb: "Good. You reflect his feeling and invite him to talk. Listening lowers arousal." },
          { tl: "¿Por qué grita?", en: "Why are you yelling?", score: 1, fb: "A challenge-style question. Reflecting the feeling works better than asking him to justify it." },
          { tl: "Nadie lo está siguiendo.", en: "Nobody is following you.", score: 0, fb: "Arguing with a belief while he is aroused adds fuel. Acknowledge the fear, not the content." }
        ] },
      { who: "Jorge",
        line: ["Llevo días sin dormir... Tengo la boca seca, no confío en nadie aquí.", "I've gone days without sleeping... My mouth is dry, I don't trust anyone here."],
        choices: [
          { tl: "Entiendo que le cuesta confiar. ¿Le ofrezco agua, o prefiere pasar a un cuarto más tranquilo?", en: "I understand it's hard to trust. Can I offer you water, or would you prefer a quieter room?", score: 2, fb: "Good. Simple language and two acceptable choices give him control. Water and a quiet room lower stimulation." },
          { tl: "Tome agua y siéntese ahí.", en: "Drink some water and sit there.", score: 1, fb: "Reasonable offers, but they are commands. Offer choices instead." },
          { tl: "Si no se calma, llamo a seguridad.", en: "If you don't calm down, I'll call security.", score: 0, fb: "A threat. It raises fear and the chance of violence." }
        ] },
      { who: "Oficial",
        line: ["Doctora, cerró el puño. ¿Lo sujetamos entre varios?", "Doctor, he made a fist. Should we hold him down together?"],
        choices: [
          { tl: "Todavía no, oficial. Quédense un poco atrás y déjenme seguir hablando con él.", en: "Not yet, officer. Please stay back a little and let me keep talking with him.", score: 2, fb: "Good. You keep one voice, give the team a clear plan, and keep a safe response ready if talking fails." },
          { tl: "Esperen, déjenme pensar.", en: "Wait, let me think.", score: 1, fb: "Buys time, but gives no instruction. Tell the team what to do." },
          { tl: "Sí, agárrenlo ya.", en: "Yes, grab him now.", score: 0, fb: "A hands-on hold is for imminent danger, after verbal de-escalation fails. It can make a frightened person worse." }
        ] },
      { who: "Jorge",
        line: ["(Aprieta el puño.) ¡Que nadie me toque!", "(Clenches his fist.) Nobody touch me!"],
        choices: [
          { tl: "No voy a tocarlo. Pero no puedo permitir que alguien salga lastimado, ni usted ni nosotros. Quiero ayudarlo a calmarse.", en: "I won't touch you. But I can't allow anyone to get hurt, not you and not us. I want to help you calm down.", score: 2, fb: "Good. A clear limit with the reason, no threat, and an offer of help." },
          { tl: "No haga eso, por favor.", en: "Please don't do that.", score: 1, fb: "A limit, but vague. Say what is not allowed and why, and offer help." },
          { tl: "Si levanta la mano, lo amarramos.", en: "If you raise your hand, we'll tie you up.", score: 0, fb: "A threat is not a limit. It usually escalates." }
        ] },
      { who: "Jorge",
        line: ["(Respira hondo y se sienta.) Ya. ¿Y ahora?", "(Breathes deeply and sits.) Okay. Now what?"],
        choices: [
          { tl: "Gracias por sentarse, lo hizo muy bien. ¿Prefiere quedarse aquí o pasar al cuarto tranquilo?", en: "Thank you for sitting, you did very well. Do you prefer to stay here or go to the quiet room?", score: 2, fb: "Good. You praise the calm behavior and offer a choice." },
          { tl: "Bien.", en: "Good.", score: 1, fb: "Missed the chance to reinforce the calm behavior." },
          { tl: "Ya era hora.", en: "About time.", score: 0, fb: "Shaming can restart the escalation." }
        ] },
      { who: "Jorge",
        line: ["Sigo muy alterado... no puedo parar.", "I still feel very worked up... I can't stop."],
        choices: [
          { tl: "Hay una medicina que puede ayudarle a calmarse. ¿La prefiere en pastilla o en líquido? Si no, hablamos de otra opción.", en: "There is a medicine that can help you calm down. Do you prefer a pill or a liquid? If not, we can talk about another option.", score: 2, fb: "Good. Explain how the medicine helps, offer oral medication with a choice, and keep an injection for when oral fails and safety is at risk. Teaching example only: lorazepam 2 mg by mouth is a common option. Then check vitals and a toxicology screen." },
          { tl: "Intente dormir un rato.", en: "Try to sleep for a while.", score: 1, fb: "He is telling you he still feels unsettled. Offer help rather than suggest he fix it alone." },
          { tl: "Le vamos a poner una inyección.", en: "We're going to give you an injection.", score: 0, fb: "Offer oral medication and a choice first. An injection is for when oral medication is refused and the risk remains." }
        ] }
    ],
    summary: {
      findings: ["Acute agitation with paranoia, sweating and pacing; stimulant intoxication versus psychosis is the working question",
        "Responded to de-escalation: space, one speaker, simple language, reflecting feelings, choices, a clear limit without threats",
        "Accepted oral medication after a choice was offered",
        "Next: vitals, glucose, toxicology, medical screening, collateral, and a debrief with him later"],
      mse: "38M, initially agitated, pacing, sweating, fists clenched. Speech loud, pressured. Mood \"asustado\"; affect fearful and irritable, calmer later. Thought content: persecutory beliefs (being followed). Perception: not clear. Accepted limits and medication choice. Insight poor. Judgment impaired."
    }
  },
  {
    id: "yesenia",
    title: "Opioid use disorder and motivational interviewing",
    level: "B2",
    setting: "Inpatient unit, day 2. Yesenia, 31, a nail technician with two children, was admitted after overdosing on fentanyl pills. Her mother brought her in. She avoids eye contact.",
    steps: [
      { who: "Yesenia",
        line: ["Mi mamá me obligó a venir. No sé para qué.", "My mother made me come. I don't know why."],
        choices: [
          { tl: "Gracias por venir, Yesenia. No estoy aquí para juzgarla. ¿Le parece si platicamos de cómo ha estado y de lo que usted quiera contarme?", en: "Thank you for coming, Yesenia. I'm not here to judge you. Would it be okay to talk about how you've been, and whatever you want to share with me?", score: 2, fb: "Good. A non-judgmental opening: you thank her, say you won't judge, ask permission, and let her lead." },
          { tl: "¿Qué sustancias usa?", en: "What substances do you use?", score: 1, fb: "The topic is right, but it is too fast and gives her no choice." },
          { tl: "¿Usted se droga?", en: "Do you do drugs?", score: 0, fb: "A blunt accusation. It raises shame and closes the conversation." }
        ] },
      { who: "Yesenia",
        line: ["Me lastimé la espalda en el trabajo y me dieron oxicodona. Cuando se acabó, empecé con las azules.", "I hurt my back at work and they gave me oxycodone. When it ran out, I started with the blue ones."],
        choices: [
          { tl: "Eso debió ser muy difícil, el dolor y luego las azules. ¿Cómo las usa: las fuma, las inhala o se las inyecta? ¿Cuántas al día?", en: "That must have been very hard, the pain and then the blue ones. How do you use them: smoke, snort, or inject? How many a day?", score: 2, fb: "Good. You empathize, normalize how it began, and ask route and amount in specific terms. \"Las azules\" are usually counterfeit M30 pills that contain fentanyl." },
          { tl: "¿Desde cuándo las toma?", en: "Since when have you been taking them?", score: 1, fb: "Relevant, but route and amount determine overdose risk and the treatment dose." },
          { tl: "Entonces es una adicta.", en: "So you're an addict.", score: 0, fb: "Labels stigmatize. Describe the behavior and the harm; do not label the person." }
        ] },
      { who: "Yesenia",
        line: ["Las fumo. Como seis o siete al día. Si no, me da la enfermedad: sudor, dolor, diarrea.", "I smoke them. About six or seven a day. If I don't, I get sick: sweating, pain, diarrhea."],
        choices: [
          { tl: "Gracias por decírmelo con tanta claridad. ¿Alguna vez ha tenido una sobredosis, o se ha puesto tan mal que no despertaba?", en: "Thank you for telling me so clearly. Have you ever had an overdose, or gotten so sick you couldn't wake up?", score: 2, fb: "Good. You thank her, then ask about overdose history, the strongest risk factor for another one." },
          { tl: "¿Ha intentado dejarlo?", en: "Have you tried to stop?", score: 1, fb: "Helpful, but safety questions about overdose come first." },
          { tl: "Seis o siete es demasiado, se va a morir.", en: "Six or seven is too many, you're going to die.", score: 0, fb: "Fear-based statements do not build rapport. She likely already knows." }
        ] },
      { who: "Yesenia",
        line: ["Una vez. Mi amiga me echó el Narcan y desperté en la ambulancia. Me dio mucho miedo.", "Once. My friend gave me Narcan and I woke up in the ambulance. It scared me a lot."],
        choices: [
          { tl: "Qué susto. Qué bueno que su amiga estaba ahí. Ahora, ¿tiene naloxona en casa? ¿Su mamá sabe dónde está y cómo usarla?", en: "What a scare. I'm glad your friend was there. Now, do you have naloxone at home? Does your mother know where it is and how to use it?", score: 2, fb: "Good. You validate the fear and move to prevention: access to naloxone and who else knows how to use it." },
          { tl: "¿Cuándo fue eso, más o menos?", en: "About when was that?", score: 1, fb: "A fair factual question, but it misses the prevention step." },
          { tl: "Debió pensar en sus hijos antes de usar eso.", en: "You should have thought of your children before using that.", score: 0, fb: "Shaming. It increases guilt and makes disclosure less likely." }
        ] },
      { who: "Yesenia",
        line: ["No tengo. Mi mamá no sabe nada, y los niños están en la casa.", "I don't have any. My mother doesn't know anything, and the kids are at home."],
        choices: [
          { tl: "Entonces se la damos hoy. Es un spray nasal: se acuesta a la persona, se pone en una fosa nasal, se llama al 911, y si no responde en dos o tres minutos, se da otra dosis. ¿Me lo puede repetir con sus palabras?", en: "Then we'll give you one today. It's a nasal spray: lay the person down, put it in one nostril, call 911, and if there is no response in two or three minutes, give another dose. Can you repeat that to me in your own words?", score: 2, fb: "Good. Simple naloxone teaching with a teach-back to check understanding. Include family members in the teaching." },
          { tl: "Le doy un folleto sobre naloxona.", en: "I'll give you a pamphlet about naloxone.", score: 1, fb: "A handout helps, but it does not replace hands-on teaching and teach-back." },
          { tl: "No debería tener fentanilo cerca de sus hijos.", en: "You shouldn't have fentanyl near your children.", score: 0, fb: "True, but said this way it shames. Focus on safety actions she can take." }
        ] },
      { who: "Yesenia",
        line: ["Quiero dejarlo por mis hijos. Pero tengo pesadillas y sin eso no duermo. Y no quiero hablar de lo que pasó, no ahora.", "I want to quit for my kids. But I have nightmares and without it I can't sleep. And I don't want to talk about what happened, not now."],
        choices: [
          { tl: "No tiene que contarme nada que no quiera. Gracias por decirme de las pesadillas, también se pueden tratar. Del 0 al 10, ¿qué tan importante es para usted dejar las azules?", en: "You don't have to tell me anything you don't want to. Thank you for telling me about the nightmares, they can be treated too. From 0 to 10, how important is it to you to stop the blue ones?", score: 2, fb: "Good. You respect her boundary around the trauma (no need for details), name the PTSD symptoms as treatable, and ask the importance ruler." },
          { tl: "Entiendo. ¿Qué le ayuda a dormir?", en: "I understand. What helps you sleep?", score: 1, fb: "Fine, but you leave out her motivation, which is what you can build on." },
          { tl: "Tiene que contarme lo que pasó, es importante.", en: "You have to tell me what happened, it's important.", score: 0, fb: "Pressing for trauma details before trust is built can cause distress. Let her set the pace." }
        ] },
      { who: "Yesenia",
        line: ["Un ocho. Por mis niños. Pero confianza... un tres, la verdad.", "An eight. For my kids. But confidence... a three, honestly."],
        choices: [
          { tl: "Un ocho es mucho, y es por sus hijos. Un tres también cuenta: ¿por qué un tres y no un cero? ¿Qué le ayudaría a subir ese número? Hay un medicamento, buprenorfina, que quita la enfermedad y las ganas, y puede ayudarla.", en: "An eight is a lot, and it's for your children. A three counts too: why a three and not a zero? What would help raise that number? There is a medicine, buprenorphine, that takes away the sickness and the cravings, and it can help.", score: 2, fb: "Good. You affirm the importance, ask the confidence ruler question (why not lower), and offer medication for opioid use disorder. Teaching example only: buprenorphine-naloxone 16 mg daily." },
          { tl: "Tiene que confiar más en sí misma.", en: "You have to trust yourself more.", score: 1, fb: "Encouragement without a plan does not move confidence. Ask what would help." },
          { tl: "Con un tres no va a lograrlo.", en: "With a three, you won't make it.", score: 0, fb: "Discouraging. Low confidence is a starting point, and it can grow with support and medication." }
        ] }
    ],
    summary: {
      findings: ["Opioid use disorder, severe: counterfeit fentanyl pills (las azules/M30) smoked, 6 to 7 a day, after oxycodone for a back injury",
        "Withdrawal between doses and one prior overdose reversed with naloxone",
        "Nightmares suggest PTSD from a past assault; she does not want details now",
        "Importance 8/10, confidence 3/10: start buprenorphine-naloxone (example 16 mg daily)",
        "Naloxone kit and teaching for her and her mother, plus a bridge clinic appointment"],
      mse: "31F, avoids eye contact initially, then engaged. Speech normal. Mood \"asustada\"; affect anxious, congruent. Thought process linear. Thought content: motivated to quit for her children; no suicidal or psychotic content elicited. Perception intact. Cognition grossly intact. Insight fair. Judgment fair."
    }
  }
];

window.PSYCH_INTERP = [
  ["Es que ando con los nervios.", "It's that I've got nervios (it's my nerves).", "Cultural idiom of distress. Ask what \"nervios\" means to them: worry, panic, sadness, shaking? Then screen for anxiety, depression, and trauma."],
  ["Me dio un ataque de nervios.", "I had an ataque de nervios.", "Often an episode of intense distress with crying, shaking, or screaming after a stressor. Clarify the trigger, whether it felt out of control, and screen for panic and suicide risk."],
  ["Me asusté mucho y desde entonces no soy el mismo. Es susto.", "I got scared and since then I'm not the same. It's susto.", "Cultural syndrome after a frightening event. Ask about trauma, sleep, appetite, and mood. Respect the explanation and screen for PTSD and depression."],
  ["A mi niño le echaron mal de ojo.", "Someone gave my child the evil eye.", "Folk illness that may explain crying, fever, or poor feeding. Do not dismiss it. Ask about symptoms and check for medical illness."],
  ["Ya me quiero ir con Dios.", "I just want to go be with God.", "Possible passive death wish or religious coping. Ask directly: do you mean wanting to die? Ask about plans and means."],
  ["Quisiera no despertar.", "I wish I wouldn't wake up.", "Passive death wish. Ask directly about suicidal thoughts, plans, and means."],
  ["Ya no aguanto.", "I can't take it anymore.", "Distress with possible suicidal meaning. Clarify what she can't bear, then ask directly about suicide."],
  ["No tengo ganas de nada.", "I don't feel like doing anything.", "Anhedonia, low energy, or hopelessness. Clarify which and screen for depression and suicide."],
  ["Me siento muy decaída.", "I feel very run down.", "Common word for low mood or fatigue. Ask about sleep, appetite, interest, and thoughts of death. Rule out medical causes."],
  ["Tengo mucho coraje.", "I have a lot of anger.", "Often anger tied to a grievance, and sometimes linked to a physical or emotional reaction. Ask about the source, about wanting to hurt someone, and screen for depression and trauma."],
  ["Me están haciendo un trabajo.", "Someone is doing a spell on me.", "May be a cultural belief or a delusion. Ask whether the family shares it, how it affects daily life, and look for other psychotic symptoms."],
  ["Siento que me vigilan.", "I feel like they are watching me.", "Possible paranoia. Ask who, why, and what he does about it. Ask about voices and about any plan to protect himself or harm others."],
  ["Se me va la onda.", "I lose my train of thought.", "May mean inattention, dissociation, absence episodes, or confusion. Ask about timing, substances, head injury, and seizures."],
  ["Ando bien malilla.", "I'm feeling really lousy.", "Mexican slang for feeling sick; among people who use substances it usually means withdrawal (la malilla). Ask about last use, which substance, and the symptoms."],
  ["Siento que me va a dar algo.", "I feel like something is going to happen to me.", "Possible panic attack or fear of losing control. Ask about palpitations, shortness of breath, fear of dying, and onset. Rule out cardiac causes."],
  ["Me siento como ida.", "I feel like I'm out of it.", "Depersonalization, dissociation, intoxication, or medical cause. Ask what it feels like, when it started, and about trauma and substances."],
  ["Oigo que me llaman.", "I hear them calling me.", "Possible hallucination, or a culturally normal experience of a loved one calling after a death. Ask whose voice, when, whether others hear it, and whether it commands anything."],
  ["Me hablan los santos.", "The saints speak to me.", "May be religious experience or a hallucination. Ask what they say, how the person and the family understand it, and whether commands or impairment are present."],
  ["No sirvo para nada.", "I'm good for nothing.", "Worthlessness: a depressive cognition and a suicide risk factor. Ask about hopelessness and suicidal thoughts."],
  ["Me falta el aire.", "I can't catch my breath.", "Can be medical (asthma, heart, lung) or panic. Check vitals first, then ask about panic and anxiety."],
  ["Tengo mucha presión.", "I'm under a lot of pressure.", "May mean stress or high blood pressure. Clarify which. Ask about work, money, immigration, and family stressors."],
  ["Ya me cansé.", "I'm already tired of it.", "May mean being tired of life. Ask directly: tired of what? Ask about wanting to die and about plans."],
  ["Me quiero morir, pero no lo haría.", "I want to die, but I wouldn't do it.", "Passive suicidal ideation with a stated barrier. Explore the barrier (family, faith) and ask about plan, intent, means, and past attempts."],
  ["Siento el pecho pesado, como si algo me apretara.", "My chest feels heavy, like something is squeezing it.", "Somatic expression of distress (depression or anxiety), but rule out cardiac causes first."],
  ["Hablo solo.", "I talk to myself.", "May be self-talk, a response to voices, or sign of a thought disorder. Ask what is said and whether anyone answers."],
  ["Soy una carga para mi familia.", "I'm a burden to my family.", "Perceived burdensomeness is a major suicide risk factor. Ask directly about suicidal thoughts."],
  ["Me siento vacío.", "I feel empty.", "May mean depression, emotional numbness, dissociation, or chronic emptiness. Clarify and screen for suicidal thoughts."],
  ["Se me cierra el mundo.", "The world is closing in on me.", "Hopelessness or a feeling of being trapped. Clarify the stressor and ask about suicidal thoughts."],
  ["Tomo para olvidar.", "I drink to forget.", "Alcohol used to cope with painful memories or mood. Screen for trauma, depression, and the amount and pattern of use."],
  ["Me pongo bien ansioso cuando salgo.", "I get really anxious when I go out.", "Possible panic, agoraphobia, social anxiety, or fear of immigration enforcement. Ask what he fears and avoids."],
  ["No me quiero quedar sola.", "I don't want to be left alone.", "May signal fear for safety, suicidal risk, or panic. Ask what she is afraid will happen if alone."],
  ["Sí, sí, doctor, ya entendí.", "Yes, yes, doctor, I understood.", "May reflect politeness or respect rather than understanding. Use teach-back: ask the patient to explain the plan in their own words."]
];
