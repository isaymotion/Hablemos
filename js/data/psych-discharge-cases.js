/* Discharge practice cases: fictional patients for the discharge assessment.
   STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Hablemos (Spanish). Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish text; registers are
   f = usted (formal), c = tú (informal). Patient answers are natural spoken Spanish with an English translation.
   Shape: window.PSYCH_DISCHARGE_CASES = [ { id, title, level, dx, decision: { discharge, why }, setting, chart: [..],
     fields: { <PSYCH_DISCHARGE field id>: {
       obs: 'what the learner observes (English)',
       ans: { questionIndex: [spanish, english, speaker?] },   // patient's answer to field.ask[questionIndex]; speaker only when it is a family member
       key: [questionIndex], need: [pick or [any-of picks]], ok: [extra acceptable picks], wrong: { pick: why },
       doc: 'model documentation line', why: 'teaching note', quote?: 'mood field only' } } } ]
   Ids: mateo, lupe, brayan, ramiro, yesenia (same ids as the admission MSE cases and the case simulations).
   Patients are fictional; doses are teaching examples only. Crisis line is 988 (oprima 2 for Spanish). */
window.PSYCH_DISCHARGE_CASES = [
 {
  id: "mateo",
  title: "Voices quiet, mother ready to supervise",
  level: "B1",
  dx: "Schizophrenia",
  decision: { discharge: true, why: "Discharge today. The voices faded by week 3, he has no suicidal or homicidal ideas, he sleeps well, and his mother will keep and give the medicine. He still wonders a little about the coworker, so his insight is partial, but he accepts the medicine and the follow-up. Warning signs and the 988 card are in the plan." },
  setting: "Ward, morning of planned discharge. Mateo, 19, warehouse worker, first admission. His mother, Doña Rosa, speaks only Spanish and is waiting with a bag of his clothes.",
  chart: [
   "Admitted 4 weeks ago after barricading his bedroom door. For 3 months he had stopped leaving his room, heard the neighbors talking through the wall, and believed a coworker had put “un trabajo” (a curse) on him. Commanding voices told him to disappear. His mother first took him to a curandero.",
   "Admission MSE: guarded, unkempt, thought blocking, persecutory ideas, command auditory hallucinations, insight grade 1.",
   "Course: risperidone started and raised to 2 mg at night. Voices faded by week 3. Mild leg restlessness in week 2 after a dose increase, better since the dose moved to bedtime. No restraint. No falls. Sleep chart 7 to 8 hours for the last 10 nights.",
   "Plan (teaching example): risperidone 2 mg tab at bedtime. Clinic follow-up in 2 weeks. Doña Rosa keeps and gives the medicine. Card with 988 (oprima 2 for Spanish)."
  ],
  fields: {
   behavior: {
    obs: "Hair combed, clean sweatshirt. Sits quietly beside his mother. Eye contact is steady. Speaks softly and answers each question.",
    ans: {
     0: ["Bien, doctor. Con ganas de llegar a mi casa.", "Fine, doctor. Wanting to get home."],
     1: ["Sí, claro. No hay problema.", "Yes, of course. No problem."]
    },
    need: ["Calm", "Cooperative", "Good eye contact", ["Well groomed", "Fairly groomed"]],
    wrong: {
     Guarded: "Guarded was his admission state. Today he answers openly.",
     Withdrawn: "He engages and answers. Document what you see today, not the admission picture."
    },
    doc: "Calm, cooperative, good eye contact, fairly groomed; speaks softly",
    why: "Compare with the admission MSE: guarded and unkempt then, calm and groomed now. The change itself supports discharge."
   },
   mood: {
    obs: "Smiles a little when his mother talks about the family dog. Expression changes, but it is a bit narrow.",
    ans: {
     0: ["Mejor. Ya duermo y ya no oigo cosas. Estoy más tranquilo.", "Better. I sleep now and I don't hear things anymore. I'm calmer."],
     1: ["Tranquilo, más que nada. Un poquito preocupado por regresar al trabajo.", "Calm, mostly. A little worried about going back to work."],
     2: ["Como un siete.", "About a seven."]
    },
    quote: "Mejor. Ya duermo y ya no oigo cosas. Estoy más tranquilo. (Better. I sleep now and I don't hear things anymore. I'm calmer.)",
    need: ["Euthymic mood", "Congruent affect", "Restricted affect"],
    ok: ["Full range affect"],
    wrong: {
     "Anxious mood": "His worry about work is realistic and mild. It is not his main mood. Put it in the details.",
     "Flat affect": "Flat means almost no expression. He smiles and looks worried at fitting moments."
    },
    doc: "“Mejor. Ya duermo y ya no oigo cosas. Estoy más tranquilo.” (Better. I sleep now and I don't hear things anymore. I'm calmer.) Mood 7/10. Euthymic mood, congruent, mildly restricted affect; realistic worry about returning to work",
    why: "Quote his words for mood. Affect is what you see: it fits his mood and varies, but a little less than expected. “Restricted” (or “full range” if you saw more) is fair."
   },
   process: {
    obs: "Tells his story in order, with a clear beginning, middle, and end.",
    ans: {
     0: ["Estuve como tres meses encerrado en mi cuarto. Oía a los vecinos hablar de mí y pensaba que un compañero del trabajo me había hecho un trabajo. Puse la cama contra la puerta y mi mamá llamó a la ambulancia. Aquí me dieron la pastilla y poco a poco las voces se fueron quitando.", "I was shut in my room for about three months. I heard the neighbors talking about me and thought a coworker had put a curse on me. I pushed my bed against the door and my mom called the ambulance. Here they gave me the pill and little by little the voices went away."],
     1: ["Quiero descansar unos días en la casa y luego hablar con mi jefe para ver si me regresa a la bodega, aunque sea medio tiempo.", "I want to rest a few days at home and then talk with my boss to see if he takes me back at the warehouse, even part-time."]
    },
    need: ["Goal-directed", "Coherent and relevant"],
    doc: "Goal-directed, coherent and relevant",
    why: "A clear account of the admission and a realistic plan (rest first, then part-time work) show a goal-directed, coherent process."
   },
   positive: {
    obs: "Not seen talking to himself or looking at the wall. The nurses' notes agree: no responding to voices for 10 days.",
    ans: {
     0: ["Ya no. Alguna vez, de noche, me parece un murmullo muy leve, pero ya no entiendo nada y no me asusta.", "Not anymore. Once in a while at night there is a very faint murmur, but I can't make out anything and it doesn't scare me."],
     1: ["Ya no, nadie.", "Not anymore, no one."],
     2: ["No, nada.", "No, nothing."],
     3: ["A veces todavía me pregunto si sí me hizo algo ese compañero. Pero ya no me da miedo y ya no pienso tanto en eso.", "Sometimes I still wonder if that coworker really did something to me. But I'm not afraid anymore and I don't think about it as much."],
     4: ["Mi mamá dice que fue un mal. Los doctores dicen que fue la enfermedad. Yo creo que sí me enfermé, pero no sé si todo fue la enfermedad.", "My mom says it was an evil. The doctors say it was the illness. I think I did get sick, but I don't know if all of it was the illness."],
     5: ["No, ya no me dicen nada. Antes me decían que desapareciera.", "No, they don't tell me anything now. Before, they told me to disappear."]
    },
    key: [0, 3, 5],
    need: ["Residual persecutory ideas, less intense", "Not responding to internal stimuli"],
    ok: ["Residual auditory hallucinations, less frequent"],
    wrong: {
     "No hallucinations elicited": "He mentions a faint murmur at night, rarely. Let him finish and document it. It is the baseline for relapse monitoring.",
     "Delusions persist": "The belief is much weaker: no fear, no action on it, and he can say it may be the illness.",
     "Delusions no longer held": "He still wonders about the coworker. Do not call it fully gone.",
     "Command auditory hallucinations, persist (reassess discharge)": "The commands stopped. Ask directly (question 5) so you can document that."
    },
    doc: "Residual persecutory ideas, less intense (still wonders about the coworker, no fear, no action); faint night murmur, rare, no content; commands stopped; not responding to internal stimuli",
    why: "“Ya no” is often followed by “pero a veces…”. Let the patient finish. Ask about the command voices separately: they were the admission risk."
   },
   negative: {
    obs: "Ward notes: goes to groups, plays cards with two other patients, showers daily. Speech normal in amount.",
    ans: {
     0: ["Sí, me gusta el dominó y la cancha de basquetbol.", "Yes, I like dominoes and the basketball court."],
     1: ["Sí, con Luis y con otro muchacho. Al principio no hablaba con nadie.", "Yes, with Luis and another young man. At first I didn't talk to anyone."],
     2: ["Poco a poco. Antes no tenía ganas de nada, ahorita sí, pero todavía me cuesta arrancar.", "Little by little. Before I didn't feel like doing anything. Now I do, but it's still hard to get started."],
     3: ["Sí, me baño todos los días.", "Yes, I shower every day."]
    },
    need: [["Mild blunting", "None noted"]],
    wrong: {
     Avolition: "He joins groups and is getting his drive back. Mild difficulty starting is not avolition.",
     Asociality: "He plays cards and talks with other patients.",
     "Poor self-care": "He showers daily and is well groomed."
    },
    doc: "Mild blunting; motivation returning, social contact and self-care good",
    why: "Motivation, social contact, and self-care are good. The slightly limited expression and “hard to get started” fit mild blunting. “None noted” is also acceptable."
   },
   suicide: {
    ans: {
     0: ["No, doctor.", "No, doctor."],
     1: ["No. Cuando estaba mal sí quería desaparecer, pero ahora no.", "No. When I was sick I did want to disappear, but not now."],
     2: ["Le digo a mi mamá y venimos al hospital. También tengo la tarjeta del 988.", "I tell my mom and we come to the hospital. I also have the 988 card."]
    },
    key: [0, 2],
    need: [["Denies suicidal ideation, plan, or intent", "None"]],
    doc: "Denies suicidal ideation, plan, or intent; earlier wish to “disappear” followed the command voices and has stopped; will tell his mother and use 988 if thoughts return",
    why: "His earlier wish to disappear came with the commands. Ask about it directly and write the plan: who he tells and what he does."
   },
   homicide: {
    ans: {
     0: ["No, para nada.", "No, not at all."],
     1: ["No. Con el compañero ya no siento coraje. Me da pena haber pensado eso de él.", "No. I'm not angry at the coworker anymore. I feel bad about thinking that of him."]
    },
    key: [1],
    need: [["Denies homicidal ideation", "None"]],
    doc: "Denies homicidal ideation, including toward the coworker named on admission",
    why: "Ask about the person named in the delusion, not only “anyone”."
   },
   orientation: {
    ans: {
     0: ["Jueves, a principios de noviembre.", "Thursday, early November."],
     1: ["En el hospital, en la unidad de psiquiatría.", "In the hospital, in the psychiatry unit."],
     2: ["Usted es la doctora que me atiende.", "You are the doctor who treats me."]
    },
    need: ["Oriented to time, place, and person (×3)"],
    doc: "Oriented to time, place, and person (×3)",
    why: "Correct day and month, place, and person."
   },
   memory: {
    ans: {
     0: ["Pelota, árbol, llave.", "Ball, tree, key."],
     1: ["Pelota, llave y árbol.", "Ball, key, and tree."],
     2: ["Huevo con frijoles y una tortilla.", "Eggs with beans and a tortilla."],
     3: ["Hace como cuatro semanas.", "About four weeks ago."],
     4: ["En Puebla, pero me vine chiquito.", "In Puebla, but I came when I was little."]
    },
    need: ["Intact immediate, recent, and remote memory"],
    doc: "Intact immediate (3/3), recent (3/3 recall, breakfast, admission date), and remote memory",
    why: "The order of the recalled words does not matter. Three of three is intact."
   },
   insight: {
    ans: {
     0: ["Porque me encerré y oía voces. Mi mamá se asustó.", "Because I shut myself in and heard voices. My mom got scared."],
     1: ["Sí, dicen que es esquizofrenia. No sé bien por qué me dio, pero sí sé que estuve enfermo.", "Yes, they say it's schizophrenia. I don't know exactly why it happened, but I do know I was sick."],
     2: ["Sí, la pastilla en la noche, porque las voces se quitaron con ella. No sé si toda la vida, pero por ahora sí.", "Yes, the pill at night, because the voices went away with it. I don't know about my whole life, but for now yes."],
     3: ["Pues se podrían regresar las voces.", "Well, the voices could come back."]
    },
    key: [1, 2],
    need: ["Fair", "Grade 4: aware, cause unknown in self"],
    ok: ["Grade 5: intellectual insight"],
    wrong: {
     Good: "He still wonders whether the coworker did something. Insight is partial.",
     "Grade 6: true emotional insight": "Grade 6 means the insight changes behavior over time. It has not been tested yet outside the hospital.",
     "Grade 1: complete denial": "Grade 1 was his admission state. He now accepts he was ill and accepts the medicine."
    },
    doc: "Fair (grade 4): accepts that he was ill and links the medicine to the voices stopping; unsure of the cause (still wonders about the coworker); accepts treatment for now",
    why: "A big step from grade 1. He accepts the illness and the medicine, but “no sé si todo fue la enfermedad” keeps him at 4. Respecting his mother's explanation while teaching about the illness helps the whole family."
   },
   judgment: {
    ans: {
     0: ["Le digo a mi mamá y vamos a la clínica antes de que se acabe.", "I tell my mom and we go to the clinic before it runs out."],
     1: ["Se lo digo a mi mamá enseguida y regresamos aquí. No me voy a encerrar otra vez.", "I tell my mom right away and we come back here. I won't shut myself in again."],
     2: ["Avisaría a la gente y saldría con calma. Buscaría a un encargado.", "I would warn people and leave calmly. I would look for someone in charge."]
    },
    need: ["Intact test judgment", "Intact social judgment"],
    ok: ["Good"],
    doc: "Good: intact test and social judgment",
    why: "Realistic plans for running out of medicine and for returning voices show intact social judgment."
   },
   sleep: {
    obs: "Ward sleep chart: 7 to 8 hours a night for the last 10 nights.",
    ans: {
     0: ["Bien. Me duermo como a las diez y me levanto a las seis.", "Well. I fall asleep around ten and get up at six."],
     1: ["No, ya duermo de corrido.", "No, I sleep straight through now."],
     2: ["Un poquito en la mañana, nada más.", "A little in the morning, that's all."]
    },
    need: ["Good", "7–8 hours, uninterrupted"],
    ok: ["Daytime sedation"],
    wrong: {
     "Difficulty initiating sleep": "He falls asleep around ten without trouble.",
     "Frequent awakenings": "He sleeps through, and the chart agrees."
    },
    doc: "Good, 7–8 hours, uninterrupted (sleep chart for 10 nights); mild morning drowsiness only",
    why: "Poor sleep was part of his early illness, so steady sleep matters. Add it to the warning signs for the family."
   },
   adverse: {
    obs: "Chart: no restraint, no falls, no medical illness. Nurses recorded mild leg restlessness in week 2 after a dose increase. No stiffness or tremor.",
    ans: {
     0: ["Al principio sentía como inquietud en las piernas, que no podía estarme quieto. Ahorita es muy poquito, sobre todo en la tarde. Rigidez no.", "At first I felt restless in my legs, like I couldn't sit still. Now it's very little, mostly in the afternoon. No stiffness."],
     1: ["No, nada.", "No, nothing."]
    },
    key: [0],
    need: ["Akathisia"],
    wrong: {
     None: "He described leg restlessness, and the nurses charted it. Document it so the clinic can watch it.",
     "Extrapyramidal symptoms": "He denies stiffness or shaking. Restlessness alone is akathisia.",
     Sedation: "He reports only a little morning drowsiness. His main complaint is restlessness."
    },
    doc: "Mild akathisia (leg restlessness, week 2, much improved with bedtime dosing); no EPS; no restraint, no falls, no medical illness",
    why: "Adverse events come from the patient and from the chart. Akathisia is easy to miss and a common reason young people stop antipsychotics. Tell the clinic so they can adjust."
   },
   diagnosis: {
    ans: {
     0: ["Esquizofrenia. Sí, ya me lo explicaron. Me da un poco de miedo la palabra.", "Schizophrenia. Yes, they already explained it. The word scares me a little."],
     1: ["Sí, eso fue lo que me pasó, oír y creer cosas que no eran.", "Yes, that is what happened to me, hearing and believing things that weren't real."],
     2: ["Mi mamá piensa que fue un trabajo, y que el curandero dijo que sí. Pero me alivia que no sea mi culpa.", "My mom thinks it was a curse, and the curandero said so. But it's a relief that it's not my fault."]
    },
    need: ["Schizophrenia, first episode, currently in partial remission"],
    wrong: {
     "Schizophrenia, first episode, currently in acute episode": "The voices have faded and he is much better. A faint residual murmur and a weak residual idea mean partial remission.",
     "Schizophrenia, multiple episodes, currently in partial remission": "This is his first episode and first admission."
    },
    doc: "Schizophrenia, first episode, currently in partial remission",
    why: "First admission, so first episode. Rare faint murmurs and a weak residual idea mean partial, not full, remission. His mother's belief about “un trabajo” is a chance to explain the illness to both of them with respect for their culture."
   },
   medications: {
    ans: {
     0: ["Sí, una pastilla en la noche.", "Yes, one pill at night."],
     2: ["Todas las noches, una pastilla, aunque me sienta bien. Mi mamá la guarda y me la da.", "Every night, one pill, even if I feel well. My mom keeps it and gives it to me."],
     3: ["Mi mamá la recoge en la farmacia del seguro. Dice que cuesta poco.", "My mom picks it up at the pharmacy. She says it's cheap."],
     4: ["Sí. Antes pensaba que ya con sentirme bien bastaba.", "Yes. Before, I thought feeling well was enough."]
    },
    key: [2],
    need: ["Risperidone ___ mg tab, ___", "Teach-back done, correct", "Family supervises medication"],
    wrong: {
     "Teach-back incorrect, re-taught": "His teach-back was right: one pill every night, even when he feels well.",
     "Benztropine ___ mg tab, ___": "He has no EPS, only mild akathisia. Do not add a drug that was never prescribed on this chart."
    },
    doc: "Risperidone 2 mg tab, 1 tab at bedtime (teaching example); teach-back correct (every night, even when well); mother keeps and gives the medicine; supply and cost checked",
    why: "Teach-back catches errors before they go home. Here he is correct. Also check who gets the medicine and who pays, because cost and pickup are common reasons a first-episode patient stops."
   },
   aftercare: {
    ans: {
     0: ["Sí, doctora. Mi mamá lo apunta.", "Yes, doctor. My mom writes it down."],
     1: ["Yo, doctora. Yo le guardo las pastillas y se las doy cada noche.", "Me, doctor. I keep the pills and give them to him every night.", "Doña Rosa (mother)"],
     2: ["Sí. Cuando se empezó a enfermar no dormía y se encerraba. Eso es lo que voy a vigilar.", "Yes. When he started to get sick he wasn't sleeping and he shut himself in. That's what I will watch for.", "Doña Rosa (mother)"],
     3: ["Gracias. Lo guardo en el teléfono y en la cartera.", "Thank you. I'll keep it in my phone and in my wallet.", "Doña Rosa (mother)"]
    },
    need: ["Outpatient follow-up in 1–2 weeks", "Follow-up appointment date and clinic given in writing", "Family oriented on warning signs"],
    wrong: {
     "Long-acting injectable schedule given": "He is on an oral medicine only.",
     "Transferred to ___ unit due to ___": "He is going home with his mother."
    },
    doc: "Clinic follow-up in 2 weeks, date and place given in writing (mother has it); mother keeps and gives medicine nightly; family oriented on warning signs (sleep loss, shutting himself in, voices); 988 (oprima 2 for Spanish) card given; Spanish-speaking clinician or interpreter at follow-up",
    why: "Doña Rosa named the early signs herself (no sleep, shutting himself in). Put them in the plan. Because she speaks only Spanish, confirm the clinic can work in Spanish or has an interpreter."
   }
  }
 }
,
 {
  id: "lupe",
  title: "After the attempt, with a safety plan",
  level: "B2",
  dx: "Major depressive disorder, severe",
  decision: { discharge: true, why: "Discharge today, with a written safety plan in Spanish. She denies current suicidal thoughts and has no plan. Her brother has removed the pistol from the house, her sister keeps the medicines, and she can name whom she will call. Follow-up is within a week and 988 is on her phone. If she described intent, a plan, or access to means, discharge would be deferred." },
  setting: "Ward, afternoon before planned discharge. Lupe (Guadalupe), 46, hotel housekeeper, mother of three, separated. Her sister Carmen is visiting. Her brother is coming at 5 p.m.",
  chart: [
   "Admitted 12 days ago after taking a handful of her sister's sleeping pills after her husband left (“ya no aguantaba”). Weeks of poor sleep, “nervios”, crying, no appetite, guilt about the children. Prior untreated depressive episode about 8 years ago.",
   "Admission MSE: tearful, psychomotor slowing, depressed mood, constricted affect, hopeless, suicidal thoughts with intent on admission, insight fair. Pistol at home belonging to her husband.",
   "Course: sertraline started and raised to 100 mg. Nausea in week 1, gone. No restraint. No falls. Sleep chart 5 to 6 hours. Her priest visited twice, which she valued.",
   "Plan (teaching example): sertraline 100 mg tab every morning. Clinic follow-up in 5 days, then psychotherapy in Spanish. Pistol removed by her brother (confirmed by phone). Sister keeps and gives the medicines. Written safety plan and 988 card."
  ],
  fields: {
   behavior: {
    obs: "Clean uniform from home, hair tied back. Sits upright, speaks in a low voice, eye contact fair. A little slow but engaged.",
    ans: {
     0: ["Un poco mejor, doctora. Con ganas de ver a mis hijos.", "A little better, doctor. Wanting to see my children."],
     1: ["Sí, adelante.", "Yes, go ahead."]
    },
    need: ["Calm", "Cooperative", ["Well groomed", "Fairly groomed"]],
    ok: ["Good eye contact"],
    wrong: {
     Withdrawn: "On admission she barely spoke. Today she answers and engages.",
     "Psychomotor retardation": "That was clear on admission. Today she is only a little slow, which is not retardation."
    },
    doc: "Calm, cooperative, fairly groomed, fair eye contact, mildly slowed but engaged (improved from admission)",
    why: "Compare with admission: tearful and slowed then, groomed and engaged now. Improvement in behavior alone does not mean the risk has gone, so go on to the suicide questions."
   },
   mood: {
    obs: "Eyes fill when she mentions her youngest daughter. Smiles briefly when Carmen jokes. Expression is less than expected.",
    ans: {
     0: ["Más tranquila. Todavía me da tristeza, sobre todo en la tarde, pero ya no es como antes.", "Calmer. I still feel sad, especially in the afternoon, but it's not like before."],
     1: ["Triste, más que nada. Y preocupada por mis hijos.", "Sad, mostly. And worried about my children."],
     2: ["Como un cinco. Cuando entré era un uno.", "About a five. When I came in it was a one."]
    },
    quote: "Más tranquila. Todavía me da tristeza, sobre todo en la tarde, pero ya no es como antes. (Calmer. I still feel sad, especially in the afternoon, but it's not like before.)",
    need: ["Dysphoric mood", "Congruent affect", "Restricted affect"],
    wrong: {
     "Euthymic mood": "She still reports sadness and rates her mood 5/10.",
     "Flat affect": "Flat means almost no expression. She cries and smiles at fitting moments.",
     "Anxious mood": "Her worry about the children is a theme, but sadness is the main mood."
    },
    doc: "“Más tranquila. Todavía me da tristeza, sobre todo en la tarde, pero ya no es como antes.” (Calmer. I still feel sad, especially in the afternoon, but it's not like before.) Mood 5/10 (1/10 on admission). Dysphoric mood, congruent, restricted affect",
    why: "Mood is her own words and a number. Improved from 1/10 but not well. That is expected at this point and fits discharge only if risk is low and the plan is strong."
   },
   process: {
    obs: "Speech slow and quiet but organized. Answers match the question.",
    ans: {
     0: ["Mi esposo se fue y yo sentí que no valía nada. Tomé las pastillas de mi hermana. Me desperté en el hospital. Aquí he hablado mucho con la doctora y con la psicóloga y me ha ayudado.", "My husband left and I felt worthless. I took my sister's pills. I woke up in the hospital. Here I've talked a lot with the doctor and the psychologist and it has helped."],
     1: ["Me voy a quedar con mi hermana unas semanas. Quiero ver a mis hijos y regresar poco a poco al trabajo en el hotel.", "I'm going to stay with my sister for a few weeks. I want to see my children and go back to work at the hotel little by little."]
    },
    need: ["Goal-directed", "Coherent and relevant"],
    doc: "Goal-directed, coherent and relevant; slowed rate",
    why: "A clear account with realistic plans, including where she will stay. Her plan to stay with her sister also supports safety."
   },
   positive: {
    obs: "No sign of responding to internal stimuli.",
    ans: {
     0: ["No, doctora, nada de eso.", "No, doctor, nothing like that."],
     1: ["No.", "No."],
     2: ["No.", "No."],
     3: ["No. Lo que sentía es que yo era una carga para mis hijos, no que alguien me quisiera hacer daño.", "No. What I felt was that I was a burden to my children, not that someone wanted to hurt me."],
     4: ["Pensaba que mis hijos estarían mejor sin mí. Ya veo que no. Me extrañaron mucho.", "I thought my children would be better off without me. I see now that's not true. They missed me a lot."]
    },
    key: [3, 4],
    need: ["No hallucinations elicited", "Not responding to internal stimuli"],
    wrong: {
     "Delusions persist": "“Better off without me” was a depressive belief. She now sees it was wrong.",
     "Residual persecutory ideas, less intense": "She never felt persecuted. The theme was guilt and being a burden."
    },
    doc: "No hallucinations elicited; not responding to internal stimuli; no delusions; earlier belief that her children would be better without her has resolved",
    why: "Ask about the admission belief by name. “Better off without me” can be a depressive thought or close to a delusion, and its change matters for risk."
   },
   negative: {
    obs: "Ward notes: attends groups but sits at the edge. Showers and dresses herself. Eats about half of her meals.",
    ans: {
     0: ["Un poco. Me gustó la clase de pintura. Antes nada me gustaba.", "A little. I liked the painting class. Before, nothing was fun."],
     1: ["Sí, con una señora que también tiene hijos. Pero me canso rápido.", "Yes, with a lady who also has children. But I get tired quickly."],
     2: ["Todavía me cuesta, pero ya tengo más ganas que al principio.", "It's still hard, but I have more desire than at the start."],
     3: ["Sí, todos los días.", "Yes, every day."]
    },
    need: ["Anhedonia"],
    ok: ["Mild blunting"],
    wrong: {
     "None noted": "She says she enjoys things only a little. Anhedonia is improving but still present.",
     "Poor self-care": "She bathes and dresses every day."
    },
    doc: "Reduced interest and energy (anhedonia), improving; enjoys painting; self-care adequate",
    why: "In depression these are not “negative symptoms” of psychosis. They are anhedonia and low energy, and they track recovery. Self-care is intact."
   },
   suicide: {
    ans: {
     0: ["No, doctora. Ya no. Todavía me da vergüenza lo que hice. Me doy cuenta de que lo hice sin pensar en mis hijos.", "No, doctor. Not anymore. I'm still ashamed of what I did. I realize I did it without thinking of my children."],
     1: ["No, ningún plan. Mi hermano ya sacó la pistola de la casa y mi hermana tiene todas las pastillas.", "No, no plan. My brother already took the pistol out of the house and my sister has all the pills."],
     2: ["Se lo digo a mi hermana Carmen o a mi hermano. Si es de noche, llamo al 988 y oprimo el 2 para hablar en español. Está en mi plan escrito.", "I tell my sister Carmen or my brother. If it's at night, I call 988 and press 2 to talk in Spanish. It's in my written plan."]
    },
    key: [0, 1, 2],
    need: [["Denies suicidal ideation, plan, or intent", "None"]],
    wrong: {
     "Passive death wish, no plan or intent": "She denies it, and she can explain why. Do not add a symptom she did not report. Do ask, and keep the question open for the follow-up visit.",
     "Active suicidal ideation (reassess discharge)": "She denies active thoughts and has no access to the means she named."
    },
    doc: "Denies suicidal ideation, plan, or intent; attempt 12 days ago (overdose of sister's medicines); means removed (pistol out of the house by brother, confirmed by phone; medicines kept by sister); reasons for living (children); safety plan made with names and 988 (oprima 2)",
    why: "Ask all three questions. “No” is only the start: write the means restriction, the protective factors, and the plan she says in her own words. The first weeks after discharge carry the highest risk, so early follow-up matters."
   },
   homicide: {
    ans: {
     0: ["No, nunca. Yo no soy así.", "No, never. I'm not like that."],
     1: ["Estuve muy enojada con mi esposo, tenía coraje. Pero no quiero hacerle daño. Quiero que me deje en paz y ya.", "I was very angry at my husband, I had coraje. But I don't want to hurt him. I just want him to leave me in peace."]
    },
    key: [1],
    need: [["Denies homicidal ideation", "None"]],
    doc: "Denies homicidal ideation; anger at her husband acknowledged, no intent to harm",
    why: "Anger at a partner after a separation is common. Ask about the specific person, and note that the pistol is out of the house."
   },
   orientation: {
    ans: {
     0: ["Es miércoles. Estamos a mediados de noviembre.", "It's Wednesday. We're in the middle of November."],
     1: ["En el hospital, en el piso de psiquiatría.", "In the hospital, on the psychiatry floor."],
     2: ["Usted es la doctora.", "You are the doctor."]
    },
    need: ["Oriented to time, place, and person (×3)"],
    doc: "Oriented to time, place, and person (×3)",
    why: "Correct day, place, and person."
   },
   memory: {
    ans: {
     0: ["Pelota, árbol, llave.", "Ball, tree, key."],
     1: ["Pelota, árbol... y llave. Me tardé un poquito.", "Ball, tree... and key. It took me a moment."],
     2: ["Pan dulce con café y un yogur.", "Sweet bread with coffee and a yogurt."],
     3: ["Hace como doce días, un martes.", "About twelve days ago, on a Tuesday."],
     4: ["En Zacatecas.", "In Zacatecas."]
    },
    need: ["Intact immediate, recent, and remote memory"],
    doc: "Intact immediate, recent (3/3, slow to recall the third word), and remote memory",
    why: "Slow recall is common in depression and is not memory impairment. Three of three is intact."
   },
   insight: {
    ans: {
     0: ["Porque tomé las pastillas. No aguantaba la tristeza y la soledad.", "Because I took the pills. I couldn't bear the sadness and loneliness."],
     1: ["Sí, es una depresión. Antes pensaba que era falta de fe. El padre y la psicóloga me explicaron que es una enfermedad y que Dios no se enoja por eso.", "Yes, it's a depression. Before I thought it was a lack of faith. The priest and the psychologist explained it's an illness and that God isn't angry about it."],
     2: ["Sí, aunque me sienta mejor. Hace años dejé el tratamiento y volví a caer.", "Yes, even if I feel better. Years ago I stopped treatment and fell again."],
     3: ["Que la tristeza regresa y puedo volver a pensar en lo mismo.", "That the sadness returns and I could think of the same thing again."]
    },
    key: [1, 2],
    need: ["Good", ["Grade 5: intellectual insight", "Grade 6: true emotional insight"]],
    wrong: {
     Poor: "She names the illness, the treatment, and the risk of stopping.",
     "Grade 3: blames others/external factors": "She says it is an illness. She does not blame only her husband leaving."
    },
    doc: "Good (grade 5): recognizes depression as an illness, links stopping treatment to relapse, plans to continue medicine and therapy; faith and illness no longer in conflict for her",
    why: "Her faith was a barrier at first, and the priest helped. Using a patient's own support network is a strength for the safety plan."
   },
   judgment: {
    ans: {
     0: ["Llamo a la clínica o le digo a mi hermana para ir por más antes de que se acabe.", "I call the clinic or tell my sister so we get more before it runs out."],
     1: ["Voces no oigo, doctora, pero si los pensamientos feos vuelven, llamo a mi hermana o al 988.", "I don't hear voices, doctor, but if the bad thoughts come back, I call my sister or 988."],
     2: ["Saldría sin correr, con calma, y avisaría a alguien.", "I would leave without running, calmly, and tell someone."]
    },
    need: ["Intact test judgment", "Intact social judgment"],
    ok: ["Good"],
    doc: "Good: intact test and social judgment; realistic plan for medicine supply and for returning thoughts",
    why: "Her answer about returning thoughts is the same as the safety plan. Consistency across questions builds confidence."
   },
   sleep: {
    obs: "Sleep chart: 5 to 6 hours most nights, often awake from 3 a.m.",
    ans: {
     0: ["Más o menos. Cinco o seis horas.", "So-so. Five or six hours."],
     1: ["Sí, a las tres de la mañana me despierto y me pongo a pensar. Luego ya no me duermo bien.", "Yes, at three in the morning I wake up and start thinking. Then I don't sleep well."],
     2: ["Un poco, en la tarde.", "A bit, in the afternoon."],
     3: ["No, al contrario, me siento cansada.", "No, on the contrary, I feel tired."]
    },
    need: ["Fair", "Difficulty initiating sleep"],
    ok: ["Frequent awakenings"],
    wrong: {
     Good: "Five to six hours with early waking is fair at best.",
     "Reduced need for sleep": "She feels tired, not energetic. This is not mania."
    },
    doc: "Fair, 5–6 hours (sleep chart); early waking around 3 a.m. with rumination",
    why: "Early waking is a risk time. Put it in the safety plan: what to do at 3 a.m. (call Carmen, use 988, not be alone with worries)."
   },
   adverse: {
    obs: "Chart: no restraint, no falls, no medical illness. Nausea in the first week of sertraline, resolved.",
    ans: {
     0: ["Al principio tenía náuseas. Ya no. Nada más.", "At first I had nausea. Not anymore. Nothing else."],
     1: ["No, nada.", "No, nothing."]
    },
    need: ["None"],
    wrong: {
     Sedation: "She does not report sleepiness from the medicine.",
     Akathisia: "She denies restlessness."
    },
    doc: "None current; transient nausea in the first week of sertraline, resolved; no restraint, no falls",
    why: "Document early side effects even if resolved. Patients stop antidepressants when nausea or sexual side effects are not discussed."
   },
   diagnosis: {
    ans: {
     0: ["Depresión. Sí, ya lo sé.", "Depression. Yes, I know."],
     1: ["Sí, eso me pasó. Me vi como si no hubiera salida.", "Yes, that's what happened to me. I saw things as if there were no way out."],
     2: ["Gracias. Yo sentía que Dios me estaba castigando. Me hace bien oír que no es un castigo.", "Thank you. I felt God was punishing me. It does me good to hear it is not a punishment."]
    },
    need: ["Major depressive disorder, recurrent"],
    wrong: {
     "Bipolar I disorder, current episode manic": "She has had low episodes only, with no history of elevated mood."
    },
    doc: "Major depressive disorder, recurrent, current episode severe (improving); suicide attempt by overdose this admission",
    why: "A prior untreated episode makes this recurrent. Name the severity and the attempt in the details. Answering her fear that this is a punishment is part of treatment."
   },
   medications: {
    ans: {
     0: ["Sí, una pastilla en la mañana con el desayuno.", "Yes, one pill in the morning with breakfast."],
     2: ["Una pastilla de sertralina en la mañana. Mi hermana tiene el frasco y me da la pastilla de cada día. Aunque me sienta bien, no la dejo.", "One sertraline pill in the morning. My sister has the bottle and gives me each day's pill. Even if I feel well, I won't stop."],
     3: ["Mi hermana la recoge en la farmacia. La clínica me ayuda con el costo.", "My sister picks it up at the pharmacy. The clinic helps me with the cost."],
     4: ["Sí, ya lo entendí.", "Yes, I understand now."]
    },
    key: [2],
    need: ["Sertraline ___ mg tab, ___", "Teach-back done, correct", "Family supervises medication"],
    wrong: {
     "Teach-back incorrect, re-taught": "Her teach-back was correct: one tablet each morning, and she will not stop when she feels well."
    },
    doc: "Sertraline 100 mg tab, 1 tab every morning with breakfast (teaching example); teach-back correct; sister keeps the supply and gives the daily dose (small supply only); cost and pickup arranged",
    why: "After an overdose, limit the supply and keep it with someone else. The antidepressant takes weeks to work, so tell her that clearly and ask her to keep taking it."
   },
   aftercare: {
    ans: {
     0: ["Sí. Dentro de cinco días. Mi hermana me lleva.", "Yes. In five days. My sister takes me."],
     1: ["Mi hermana Carmen. Y mi hermano se encarga de lo de la pistola.", "My sister Carmen. And my brother takes care of the pistol."],
     2: ["Sí. Si no puedo dormir, si me vuelvo a sentir sin salida o si pienso en hacerme daño, llamo al 988 o vengo a urgencias.", "Yes. If I can't sleep, if I feel hopeless again, or if I think of hurting myself, I call 988 or come to the emergency room."],
     3: ["Ya lo guardé en el teléfono. Oprimo el 2 para español.", "I already saved it in my phone. I press 2 for Spanish."]
    },
    need: ["Outpatient follow-up in 1–2 weeks", "Safety plan made with patient and family", "Family oriented on warning signs", "Referred to ___"],
    ok: ["Follow-up appointment date and clinic given in writing"],
    wrong: {
     "Discharge deferred: ___": "She meets safety criteria today, with means removed and a plan in place."
    },
    doc: "Outpatient follow-up within 1 week (in 5 days, sister drives her), then referred to psychotherapy in Spanish; written safety plan with names, numbers, and 988 (oprima 2) given to patient and sister; family oriented on warning signs; pistol out of the home (brother), medicines kept by sister",
    why: "The first week after discharge is the highest-risk time, so follow-up is within days. A good safety plan names the people, the numbers, and the means restriction. It is written in her own language."
   }
  }
 }
,
 {
  id: "brayan",
  title: "Still high, refusing labs: not ready",
  level: "B2",
  dx: "Bipolar I disorder, current episode manic",
  decision: { discharge: false, why: "Defer discharge. Day 6: he is still pressured and grandiose, sleeps 4 to 5 hours, and says he will stop lithium at home. He refuses the blood draw, so the lithium level is unknown. Insight is poor and there is no plan for the methamphetamine use. His girlfriend does not feel safe taking him home. Explain the reasons to him, keep working on the alliance, and reassess in 48 to 72 hours. He has no current plan to harm himself or others." },
  setting: "Ward, morning, day 6. Brayan, 24, DJ and rideshare driver, wants to leave today for a show. His girlfriend Yadira is in the lounge.",
  chart: [
   "Admitted 6 days ago, brought by Yadira after 5 nights without sleep. “Dios me eligió” to bring people together through music. Spent about $4,000 on DJ equipment. Pressured speech, flight of ideas. Urine drug screen positive for methamphetamine (“cristal” twice that week), which clouded the picture.",
   "Admission MSE: restless, overfamiliar, euphoric and irritable, flight of ideas, grandiose delusions, insight grade 1.",
   "Course: lithium 300 mg three times a day (teaching example) and a short course of olanzapine at night. Restrained once on the night of admission for agitation. No restraint since. Sleep chart 4 to 5 hours. Fine hand tremor. Lithium level pending: he refused the draw this morning.",
   "No prior treatment. He wants discharge today. Yadira says she is afraid he will stop the medicine and go back to the clubs."
  ],
  fields: {
   behavior: {
    obs: "Stands, sits, and stands again. Wears his DJ cap and headphones around his neck. Jokes and moves close to you. Snaps when you mention the blood test.",
    ans: {
     0: ["¡De lujo, doctora! Listo para salir de aquí. Tengo un show el sábado y no me puedo perder eso.", "Great, doctor! Ready to get out of here. I have a show Saturday and I can't miss it."],
     1: ["Sí, pero rápido, que se me hace tarde.", "Yes, but quick, I'm running late."]
    },
    need: ["Restless", "Overfamiliar", "Irritable"],
    wrong: {
     Calm: "He cannot stay seated and is easily provoked.",
     Cooperative: "He talks with you but refuses the blood draw and tries to end the interview. Do not call that cooperative.",
     "Well groomed": "His clothes are rumpled and he has not shaved. Look at what is in front of you."
    },
    doc: "Restless, overfamiliar, irritable when challenged (about the blood draw), rumpled grooming, wears headphones and cap",
    why: "Compare with admission: restless and overfamiliar then, and still so. A patient who is “ready to go” is not the same as one who is ready."
   },
   mood: {
    obs: "Broad smile, laughs loudly. Within a minute his face darkens when you refuse his request, then he laughs again.",
    ans: {
     0: ["Excelente, nunca me había sentido tan bien. Estoy en mi mejor momento.", "Excellent, I've never felt this good. I'm at my best."],
     1: ["Contento. Bueno, y un poquito enojado porque no me dejan salir. Pero contento.", "Happy. Well, and a little angry because they won't let me out. But happy."],
     2: ["Un diez. Un once.", "A ten. An eleven."]
    },
    quote: "Excelente, nunca me había sentido tan bien. Estoy en mi mejor momento. (Excellent, I've never felt this good. I'm at my best.)",
    need: ["Euphoric mood", "Labile affect"],
    wrong: {
     "Euthymic mood": "A ten or eleven out of ten with grand plans is not euthymia.",
     "Mildly elevated mood": "Mildly elevated was the target for discharge. He is well above that: mood 10 to 11/10 and swings to anger within minutes.",
     "Congruent affect": "His affect swings between joy and anger within minutes. Labile is the better word."
    },
    doc: "“Excelente, nunca me había sentido tan bien. Estoy en mi mejor momento.” (Excellent, I've never felt this good. I'm at my best.) Mood 10 to 11/10. Euphoric mood with irritable flashes; labile affect",
    why: "Quote the mood and give a number. Note the lability you see. Many patients on day 6 are better than on admission, but better is not well."
   },
   process: {
    obs: "Jumps from the show to his mother's birthday to a new app he wants to build, linking ideas by rhymes and sounds. Needs to be redirected to answer.",
    ans: {
     0: ["Pues yo estaba trabajando, ¿sabe?, en el Uber, y de ahí el DJ, y Yadira se asustó, pero ella no entiende, tengo un equipo nuevo, un sistema que suena como en Las Vegas. Y luego vine aquí y bueno, aquí estoy.", "Well I was working, you know, in the Uber, and from there the DJ, and Yadira got scared, but she doesn't understand, I have new equipment, a system that sounds like Las Vegas. And then I came here and well, here I am."],
     1: ["Salir, tocar el sábado, y como en dos meses abrir mi propio estudio. Ya tengo el nombre y todo. Estoy viendo un préstamo.", "Get out, play Saturday, and in about two months open my own studio. I already have the name and everything. I'm looking into a loan."]
    },
    need: ["Flight of ideas"],
    ok: ["Some tangentiality"],
    wrong: {
     "Goal-directed": "He has big goals, but the story jumps and needs redirection. That is not goal-directed.",
     "Coherent and relevant": "The answers drift from the question."
    },
    doc: "Flight of ideas, redirectable with effort; speech pressured; plans to open a studio on a loan",
    why: "Listen to the shape of the story more than the facts. Plans for a loan and a studio, right after spending $4,000, also show poor judgment."
   },
   positive: {
    obs: "Not seen responding to voices. Talks about his “mission” with strong conviction.",
    ans: {
     0: ["No, voces no. Nomás los beats en mi cabeza, pero eso es normal para un DJ.", "No, not voices. Just the beats in my head, but that's normal for a DJ."],
     1: ["No.", "No."],
     2: ["No.", "No."],
     3: ["No, al contrario, la gente me quiere.", "No, on the contrary, people love me."],
     4: ["Sigo pensando lo mismo: Dios me eligió. A lo mejor exageré con lo del dinero, pero lo de la misión es real.", "I still think the same: God chose me. Maybe I overdid it with the money, but the mission part is real."]
    },
    key: [4],
    need: ["No hallucinations elicited", "Not responding to internal stimuli", "Delusions persist"],
    wrong: {
     "Grandiose ideas, less intense": "He holds the idea with full conviction (“la misión es real”). He only concedes the spending.",
     "Delusions no longer held": "He still believes God chose him for a mission."
    },
    doc: "No hallucinations elicited; not responding to internal stimuli; grandiose delusion persists (“Dios me eligió”, a mission through music) with full conviction; concedes only the overspending",
    why: "Ask about the admission belief by name. A religious mission is part of many cultures. What matters is the conviction, the link with sleeplessness and spending, and that it does not bend."
   },
   negative: {
    obs: "No loss of interest, speech, or self-care. He talks and moves a lot.",
    ans: {
     0: ["Sí, todo me gusta, quiero hacer de todo.", "Yes, I like everything, I want to do everything."],
     1: ["Sí, con todos. Ya hice amigos aquí, hasta puse música en el comedor.", "Yes, with everyone. I already made friends here, I even played music in the dining room."],
     2: ["Sí, muchísimas ganas.", "Yes, tons of motivation."]
    },
    need: ["None noted"],
    doc: "None noted; drive and social contact increased (part of the manic picture)",
    why: "Negative symptoms are absent. In mania, increased drive is a positive sign of the episode."
   },
   suicide: {
    ans: {
     0: ["No, para nada. Me siento invencible.", "No, not at all. I feel invincible."],
     1: ["No.", "No."],
     2: ["Pues no lo voy a necesitar, pero llamaría a Yadira.", "Well I won't need to, but I would call Yadira."]
    },
    key: [0],
    need: [["Denies suicidal ideation, plan, or intent", "None"]],
    doc: "Denies suicidal ideation, plan, or intent; feels “invincible” (a risk of reckless behavior, not of self-harm); would call girlfriend",
    why: "Mania does not remove suicide risk, because mixed states and the crash after mania can bring it on. Ask directly. His “invincible” feeling matters for driving and substance use."
   },
   homicide: {
    ans: {
     0: ["No, nunca.", "No, never."],
     1: ["Con Yadira un poco, porque me regañó por el dinero. Y con los doctores por no dejarme salir. Pero no les haría nada.", "With Yadira a little, because she scolded me about the money. And with the doctors for not letting me leave. But I wouldn't do anything to them."]
    },
    key: [1],
    need: [["Denies homicidal ideation", "None"]],
    doc: "Denies homicidal ideation; irritable toward girlfriend and staff when limits are set, no threats or intent",
    why: "Irritability is not homicidal ideation. Name the people he is angry with and ask what he would do."
   },
   orientation: {
    ans: {
     0: ["Es viernes... no, jueves. Da igual, el sábado es el show.", "It's Friday... no, Thursday. Whatever, the show is Saturday."],
     1: ["En el hospital de psiquiatría.", "In the psychiatric hospital."],
     2: ["Usted es la doctora, la que no me quiere dejar ir.", "You're the doctor, the one who won't let me go."]
    },
    need: ["Oriented to time, place, and person (×3)"],
    doc: "Oriented to time, place, and person (×3); self-corrected the day",
    why: "A self-corrected day is still oriented. Distractibility shows more in his attention than in his orientation."
   },
   memory: {
    ans: {
     0: ["Pelota, árbol, llave. Fácil.", "Ball, tree, key. Easy."],
     1: ["Pelota, árbol, llave. ¿Ya? ¿Qué sigue?", "Ball, tree, key. Done? What's next?"],
     2: ["Un burrito y un jugo de naranja, creo.", "A burrito and orange juice, I think."],
     3: ["Hace seis días, un viernes.", "Six days ago, on a Friday."],
     4: ["Aquí en la ciudad, en el hospital del condado.", "Here in the city, at the county hospital."]
    },
    need: ["Intact immediate, recent, and remote memory"],
    doc: "Intact immediate, recent, and remote memory; distractible but recalls 3/3",
    why: "Distractibility can make memory tests look worse than they are. Here the recall is intact."
   },
   insight: {
    ans: {
     0: ["Porque Yadira se asustó. Yo estaba muy cansado y estresado, nada más. Y bueno, el cristal no ayudó.", "Because Yadira got scared. I was very tired and stressed, that's all. And well, the crystal didn't help."],
     1: ["No, no estoy enfermo. Me emocioné y dormí poco. Eso le pasa a cualquiera.", "No, I'm not sick. I got excited and slept little. That happens to anyone."],
     2: ["No. Si me siento bien no la voy a tomar. Me hace temblar las manos.", "No. If I feel good I won't take it. It makes my hands shake."],
     3: ["Nada. Me siento mejor que nunca.", "Nothing. I feel better than ever."]
    },
    key: [1, 2],
    need: ["Poor", "Grade 3: blames others/external factors"],
    wrong: {
     Fair: "He denies being ill and says he will stop lithium. Fair would be too generous.",
     "Grade 5: intellectual insight": "He does not accept the illness or the need for medicine.",
     "Grade 1: complete denial": "He grants that the crystal and lack of sleep played a part. That is slight awareness with external blame."
    },
    doc: "Poor (grade 3): attributes the episode to stress, tiredness, and “the crystal”; does not accept illness; says he will stop lithium when he feels well because of tremor",
    why: "He gives a partial reason and one real side effect (tremor). Start there: the tremor is something you can treat. Poor insight with a plan to stop medicine is a major reason to defer."
   },
   judgment: {
    ans: {
     0: ["No me va a pasar. Si se me acaba, ya no la necesito.", "It won't happen. If it runs out, I don't need it anymore."],
     1: ["No voy a oír voces.", "I'm not going to hear voices."],
     2: ["Pues grito y salgo corriendo, claro.", "Well I yell and run out, of course."],
     3: ["Una vez no hace nada. Yo ya sé controlarme. Si es parte del show, pues sí.", "Once doesn't do anything. I know how to control myself. If it's part of the gig, then yes."]
    },
    key: [0, 3],
    need: ["Poor", "Impaired social judgment"],
    ok: ["Intact test judgment"],
    wrong: {
     Good: "He plans to stop medicine, take a loan, and accept drugs at gigs. Social judgment is poor.",
     "Intact social judgment": "His plans after discharge are unsafe: stopping lithium, using crystal “once”, and borrowing money."
    },
    doc: "Poor: impaired social judgment (plans to stop lithium, accept stimulants “once” at gigs, take a loan); test judgment intact (fire answer)",
    why: "Test judgment can be fine while social judgment is poor. Ask the realistic after-discharge questions: they are where the risk is."
   },
   sleep: {
    obs: "Sleep chart: 4 to 5 hours a night, awake and active on the unit from 4 a.m.",
    ans: {
     0: ["Cuatro, cinco horas, y despierto fresco.", "Four, five hours, and I wake up fresh."],
     1: ["Me despierto a las cuatro con mil ideas y ya no me duermo.", "I wake up at four with a thousand ideas and can't go back to sleep."],
     2: ["No, para nada.", "No, not at all."],
     3: ["Sí, tengo muchísima energía. No necesito dormir más. Uno duerme demasiado.", "Yes, I have tons of energy. I don't need more sleep. People sleep too much."]
    },
    key: [3],
    need: ["Poor", "Reduced need for sleep"],
    wrong: {
     Fair: "Four to five hours with a reduced need for sleep is poor in this context.",
     Good: "The sleep chart does not support this.",
     "7–8 hours, uninterrupted": "The chart shows 4 to 5 hours and early waking."
    },
    doc: "Poor, 4–5 hours (sleep chart) with early waking; reduced need for sleep (“no necesito dormir más”)",
    why: "Reduced need for sleep is the hallmark of mania and the earliest relapse sign. Never take “I feel fresh” as a sign of good sleep."
   },
   adverse: {
    obs: "Chart: restrained once on the night of admission for agitation, no restraint since. No falls. Fine hand tremor on lithium, no vomiting, diarrhea, or ataxia. Lithium level not yet drawn.",
    ans: {
     0: ["Me tiemblan un poquito las manos. Eso me molesta para poner música. Y a veces siento mucha sed.", "My hands shake a little. That bothers me for playing music. And sometimes I feel very thirsty."],
     1: ["No, nada. Aquí lo único malo fue la noche que me amarraron. Eso no me gustó.", "No, nothing. The only bad thing here was the night they tied me down. I didn't like that."]
    },
    key: [0, 1],
    need: ["Agitation requiring restraint", "Tremor"],
    wrong: {
     None: "The chart shows one restraint on admission and he reports tremor.",
     "Extrapyramidal symptoms": "His tremor is a fine action tremor on lithium. Without rigidity, do not call it EPS."
    },
    doc: "Agitation requiring restraint once (night of admission), none since; fine bilateral hand tremor and thirst on lithium; no signs of toxicity today; lithium level pending (blood draw refused)",
    why: "The restraint is in the chart, and he told you how it felt. Ask about it kindly: it can shape whether he trusts treatment. The tremor is a reason he gives for stopping lithium, so address it."
   },
   diagnosis: {
    ans: {
     0: ["¿Bipolar? No sé, doctora. Me suena a cosa de locos.", "Bipolar? I don't know, doctor. That sounds like something for crazy people."],
     1: ["Pues sí dormí poco y gasté de más, pero no creo que sea una enfermedad.", "Well, yes, I slept little and spent too much, but I don't think it's an illness."],
     2: ["Dios sabe lo que hace. Pero no creo que sea un castigo.", "God knows what He's doing. But I don't think it's a punishment."]
    },
    need: ["Bipolar I disorder, current episode manic", "Other comorbid: ___"],
    wrong: {
     "Bipolar I disorder, current or most recent episode manic, in partial remission": "He is still clearly manic, not in partial remission.",
     "Methamphetamine-induced psychotic disorder, with ___ use disorder": "Mania was present with a positive screen, but the history points to a primary bipolar episode with stimulant use. Keep this on the list for the follow-up."
    },
    doc: "Bipolar I disorder, current episode manic, moderate to severe, not in remission. Other: stimulant (methamphetamine) use, severity to be assessed; screen positive on admission",
    why: "Methamphetamine can cause or worsen mania. Document both and say that the question of substance-induced versus primary mania remains. Avoid words like “loco” when you explain: his own comment shows the stigma he fears."
   },
   medications: {
    ans: {
     0: ["Litio, dicen. Tres veces al día. No me gusta.", "Lithium, they say. Three times a day. I don't like it."],
     2: ["Voy a tomarla unos días y ya, cuando me sienta bien la dejo.", "I'll take it for a few days and that's it, once I feel good I'll stop."],
     3: ["No sé, en una farmacia. No tengo seguro.", "I don't know, at some pharmacy. I don't have insurance."],
     4: ["Si me siento bien, ¿para qué?", "If I feel good, what for?"],
     5: ["Ya le dije que no me van a sacar sangre otra vez.", "I already told you they won't draw my blood again."]
    },
    key: [2, 4, 5],
    need: ["Lithium carbonate ___ mg tab, ___", "Teach-back incorrect, re-taught"],
    wrong: {
     "Teach-back done, correct": "His teach-back was wrong: he plans to stop when he feels good.",
     "Family supervises medication": "Yadira has not agreed to supervise and does not feel safe doing it. He also refuses the labs lithium needs.",
     "Divalproex sodium ___ mg tab, ___": "He is on lithium. Changing the drug is a team decision, not something to add to the form."
    },
    doc: "Lithium carbonate 300 mg tab, 3 times a day (teaching example); level pending, blood draw refused; teach-back incorrect (“when I feel good I stop”), re-taught, still unwilling; no insurance, cost to be solved; teaching example, not a discharge order",
    why: "Lithium needs blood levels. A patient who refuses labs and plans to stop it is not ready to go home on it. Ask what bothers him about the pills (tremor, thirst) and offer to address that. Cost and insurance are real barriers, so involve social work."
   },
   aftercare: {
    ans: {
     0: ["Yo me quiero ir hoy. Mañana, no sé, ya veremos.", "I want to leave today. Tomorrow, I don't know, we'll see."],
     1: ["Yadira, supongo, pero ella no manda sobre mí.", "Yadira, I guess, but she doesn't tell me what to do."],
     2: ["Yadira: Doctora, yo creo que todavía no está bien. Apenas duerme y ya quiere pedir un préstamo. Me da miedo que deje el litio y que se vaya otra vez con esos amigos.", "Yadira: Doctor, I think he isn't well yet. He hardly sleeps and he already wants to take out a loan. I'm afraid he'll stop the lithium and go back with those friends.", "Yadira (girlfriend)"],
     3: ["Si lo necesito, lo llamo, pero no lo voy a necesitar.", "If I need it, I'll call, but I won't need it."],
     4: ["No estoy de acuerdo, pero entiendo que no me pueden obligar. ¿Cuánto tiempo más?", "I don't agree, but I understand you can't force me. How much longer?"]
    },
    key: [4],
    need: ["Discharge deferred: ___"],
    ok: ["Family oriented on warning signs"],
    wrong: {
     "Outpatient follow-up in 1–2 weeks": "A date is premature. He is not ready to leave yet.",
     "Long-acting injectable schedule given": "No injection was ordered. Raise it as an option for later if he keeps refusing pills.",
     "Safety plan made with patient and family": "A plan that depends on him telling Yadira when he is unwell does not fit when he lacks insight. Keep working on it while he stays."
    },
    doc: "Discharge deferred: mania not resolved (grandiose delusion persists, sleep 4–5 hours, pressured speech, poor insight), refuses lithium level and says he will stop lithium, no plan for methamphetamine use, girlfriend concerned. Reassess in 48–72 hours; social work (insurance), substance use counseling, family meeting with Yadira. Reviewed reasons with the patient; no current plan or intent to harm self or others",
    why: "You can defer without a fight. Say the reasons in plain words, name what has to change (sleep, medicine plan, labs, a substance plan), and give a time to reassess. Include Yadira with his consent: she is a key supporter."
   }
  }
 }
,
 {
  id: "ramiro",
  title: "Sober, steadier, daughter ready to help",
  level: "B1",
  dx: "Alcohol use disorder, severe",
  decision: { discharge: true, why: "Discharge today to an outpatient program. Withdrawal has resolved (tremor and sweating gone, no seizure since the ER), and the death wish he voiced on admission cleared by day 5. He denies suicidal and homicidal thoughts, he is starting naltrexone, and his daughter will drive him to the first appointment. Cravings and relapse risk remain, which is why the outpatient plan, naltrexone, and AA in Spanish matter." },
  setting: "Ward, morning of planned discharge. Ramiro, 52, construction worker, lives alone. His daughter Marisol is in the lounge and will take him to her house for the first few days.",
  chart: [
   "Admitted 8 days ago after a withdrawal seizure in the ER: tremor, sweating, CIWA-Ar 18 on arrival. About a pint of tequila daily for years, with “la cruda” every morning. Also low mood and a passive wish not to wake up on admission.",
   "Admission MSE: tremulous, sweating, anxious, dysphoric mood, passive death wish without plan, insight grade 3.",
   "Course: lorazepam taper and thiamine. Tremor and sweating gone by day 4. Passive death wish cleared by day 5. No further seizures, no delirium. No restraint. No falls. Sleep chart 6 to 7 hours.",
   "Plan (teaching example): naltrexone 50 mg tab once a day. Outpatient alcohol program intake in 3 days, AA in Spanish, appointment with a primary care clinician. Marisol drives. Written plan and 988 card."
  ],
  fields: {
   behavior: {
    obs: "Shaved, clean work shirt that his daughter brought. Hands steady when he takes the form. Eye contact good, a little embarrassed. Polite and answers fully.",
    ans: {
     0: ["Mucho mejor, doctora. Ya no tiemblo y como bien.", "Much better, doctor. I don't shake anymore and I eat well."],
     1: ["Claro que sí, con gusto.", "Of course, gladly."]
    },
    need: ["Calm", "Cooperative", "Good eye contact", ["Well groomed", "Fairly groomed"]],
    wrong: {
     Restless: "That was his admission state, with tremor and sweating. His hands are steady now.",
     Guarded: "He is open and a little ashamed, not guarded."
    },
    doc: "Calm, cooperative, good eye contact, well groomed; no tremor",
    why: "Compare with admission: tremulous and sweating then, steady now. Steady hands are a clinical sign that withdrawal is over."
   },
   mood: {
    obs: "Brightens when he talks about his granddaughter. Looks serious and a little ashamed when he mentions his drinking.",
    ans: {
     0: ["Más tranquilo. Me siento limpio por primera vez en muchos años.", "Calmer. I feel clean for the first time in many years."],
     1: ["Contento de estar sobrio. Un poco avergonzado, pero contento.", "Happy to be sober. A little ashamed, but happy."],
     2: ["Un ocho.", "An eight."]
    },
    quote: "Más tranquilo. Me siento limpio por primera vez en muchos años. (Calmer. I feel clean for the first time in many years.)",
    need: ["Euthymic mood", "Congruent affect", "Full range affect"],
    ok: ["Restricted affect"],
    wrong: {
     "Dysphoric mood": "That was admission. Shame about the past is normal and not the main mood now.",
     "Anxious mood": "His worry about relapse is realistic and mild. Mention it in the details."
    },
    doc: "“Más tranquilo. Me siento limpio por primera vez en muchos años.” (Calmer. I feel clean for the first time in many years.) Mood 8/10. Euthymic mood, congruent, full range affect; shame about the past appropriate",
    why: "Mood improved from admission. Low mood after withdrawal often clears within days to weeks, but ask again at follow-up, because depressed mood can return as the cravings come."
   },
   process: {
    obs: "Tells it in order, pausing to find words, but stays on topic.",
    ans: {
     0: ["Yo tomaba todos los días, una botella de tequila chica. Una mañana me caí en la obra, me temblaba el cuerpo y no pude parar. Mi hija me llevó a urgencias. Aquí me quitaron el temblor y me di cuenta de que no quiero seguir así.", "I drank every day, a small bottle of tequila. One morning I fell at the work site, my body was shaking and I couldn't stop. My daughter took me to the ER. Here they got rid of the shaking and I realized I don't want to go on like this."],
     1: ["Me voy unos días con mi hija, luego a la clínica, y a las juntas de AA. Voy a pedir otra vez trabajo, pero primero me hace falta estar firme.", "I'm going to my daughter's for a few days, then to the clinic and the AA meetings. I'm going to ask for work again, but first I need to be steady."]
    },
    need: ["Goal-directed", "Coherent and relevant"],
    doc: "Goal-directed, coherent and relevant",
    why: "A clear account with a concrete plan (daughter, clinic, AA, work later) is goal-directed."
   },
   positive: {
    obs: "Not seen responding to anything. Ward notes: no hallucinations at any time, no delirium.",
    ans: {
     0: ["No, nada.", "No, nothing."],
     1: ["No.", "No."],
     2: ["Los primeros días me parecía ver bichos en la pared, pero fue de la abstinencia. Ya no.", "The first days I seemed to see bugs on the wall, but that was the withdrawal. Not anymore."],
     3: ["No.", "No."],
     4: ["Antes pensaba que ya nada tenía remedio. Ahora creo que sí puedo.", "Before I thought nothing could be fixed. Now I think I can."]
    },
    key: [2],
    need: ["No hallucinations elicited", "Not responding to internal stimuli"],
    wrong: {
     "Residual auditory hallucinations, less frequent": "He had brief visual misperceptions early in withdrawal. They resolved and were never auditory.",
     "Delusions persist": "“Nothing can be fixed” was hopelessness, not a delusion."
    },
    doc: "No hallucinations elicited today (brief visual misperceptions on days 1–2 of withdrawal, resolved); not responding to internal stimuli; no delusions",
    why: "Ask about the early days too. Brief misperceptions in withdrawal tell you how severe it was. Today the answer is clean."
   },
   negative: {
    obs: "Ward notes: goes to groups, helps stack chairs, chats with the other patients.",
    ans: {
     0: ["Sí, me gusta el grupo y el dominó.", "Yes, I like the group and dominoes."],
     1: ["Sí, con todos. Hay un señor que también es de la construcción.", "Yes, with everyone. There's a man who is also in construction."],
     2: ["Sí, tengo ganas. Hace años que no tenía ganas.", "Yes, I feel like it. It's been years since I felt like it."],
     3: ["Sí, todos los días.", "Yes, every day."]
    },
    need: ["None noted"],
    wrong: {
     Avolition: "He has energy and wants to work.",
     "Poor self-care": "He bathes daily and is well groomed."
    },
    doc: "None noted",
    why: "Motivation, social contact, and self-care are good."
   },
   suicide: {
    ans: {
     0: ["No, ya no. Cuando entré sentía que era mejor no despertar, pero eso se me quitó a los pocos días.", "No, not anymore. When I came in I felt it was better not to wake up, but that went away after a few days."],
     1: ["No, ningún plan.", "No, no plan."],
     2: ["Llamo a mi hija Marisol o a mi padrino de AA. Y también tengo el 988 en el teléfono.", "I call my daughter Marisol or my AA sponsor. And I also have 988 in my phone."]
    },
    key: [0, 2],
    need: [["Denies suicidal ideation, plan, or intent", "None"]],
    wrong: {
     "Passive death wish, no plan or intent": "That was his admission state. It cleared by day 5, and today he denies it."
    },
    doc: "Denies suicidal ideation, plan, or intent; passive death wish on admission cleared by day 5; plan to call daughter or sponsor and 988 if it returns",
    why: "Document the change from admission and a plan. Alcohol raises suicide risk, and the first weeks of recovery can bring low mood back, so ask again at every visit."
   },
   homicide: {
    ans: {
     0: ["No, nunca.", "No, never."],
     1: ["No, con nadie. Solo conmigo mismo, por haber tomado tanto.", "No, no one. Only with myself, for drinking so much."]
    },
    need: [["Denies homicidal ideation", "None"]],
    doc: "Denies homicidal ideation; anger directed at himself only",
    why: "Anger turned inward is worth a brief note. It links to guilt and shame, which can drive relapse."
   },
   orientation: {
    ans: {
     0: ["Es jueves, a mediados de noviembre.", "It's Thursday, the middle of November."],
     1: ["En el hospital, en el área de psiquiatría.", "In the hospital, in the psychiatry area."],
     2: ["Usted es la doctora.", "You are the doctor."]
    },
    need: ["Oriented to time, place, and person (×3)"],
    doc: "Oriented to time, place, and person (×3)",
    why: "Correct day, place, and person. He also received thiamine, so a screen for confusion at discharge is reassuring."
   },
   memory: {
    ans: {
     0: ["Pelota, árbol, llave.", "Ball, tree, key."],
     1: ["Pelota, árbol, llave.", "Ball, tree, key."],
     2: ["Avena y un huevo con jamón.", "Oatmeal and an egg with ham."],
     3: ["Hace ocho días, en la mañana.", "Eight days ago, in the morning."],
     4: ["En Michoacán, en un rancho cerca de Zamora.", "In Michoacán, on a ranch near Zamora."]
    },
    need: ["Intact immediate, recent, and remote memory"],
    doc: "Intact immediate (3/3), recent (3/3 recall, breakfast, admission date), and remote memory",
    why: "After years of heavy drinking, intact recent memory is a good sign. If it were impaired, think of thiamine deficiency and ask for more testing."
   },
   insight: {
    ans: {
     0: ["Por las convulsiones y porque ya no puedo vivir tomando.", "Because of the seizures and because I can't go on living drinking."],
     1: ["Sí. El alcoholismo es una enfermedad. Mi hija me lo decía hace años y yo no quería escuchar.", "Yes. Alcoholism is an illness. My daughter told me years ago and I didn't want to listen."],
     2: ["Sí, la pastilla ayuda con las ganas de tomar. Y las juntas. Solo no puedo.", "Yes, the pill helps with the urge to drink. And the meetings. I can't do it alone."],
     3: ["Volvería a tomar, y la próxima puede ser la última.", "I'd go back to drinking, and the next time could be the last."]
    },
    key: [1, 2],
    need: ["Fair", "Grade 5: intellectual insight"],
    ok: ["Good", "Grade 4: aware, cause unknown in self"],
    wrong: {
     "Grade 6: true emotional insight": "Grade 6 is shown by changed behavior over time. He has been sober only 8 days, in a controlled place.",
     Poor: "He names the illness, the need for the medicine, and the risk."
    },
    doc: "Fair to good (grade 5): accepts alcohol use disorder as an illness and need for medicine and meetings; has not yet been tested outside the hospital",
    why: "He understands and has motivation. True test of insight is staying sober outside, so plan for support."
   },
   judgment: {
    ans: {
     0: ["Llamo a la clínica o le pido a mi hija que vaya a la farmacia.", "I call the clinic or ask my daughter to go to the pharmacy."],
     1: ["Aquí no se aplica, pero si me dan ganas de tomar, llamo a mi padrino o voy a una junta.", "That doesn't apply here, but if I feel like drinking, I call my sponsor or go to a meeting."],
     2: ["Saldría rápido, sin empujar, y avisaría.", "I'd leave quickly, without pushing, and warn people."],
     3: ["Les digo que no, que ando tomando una pastilla y no puedo. Si insisten, me voy. Ya sé con quiénes no debo juntarme.", "I tell them no, that I'm on a pill and can't. If they insist, I leave. I know who I shouldn't hang around with."]
    },
    key: [3],
    need: ["Intact test judgment", "Intact social judgment"],
    ok: ["Good"],
    doc: "Good: intact test and social judgment; realistic plan for offers of alcohol (refuse, leave, sponsor, meeting)",
    why: "His plan for offers of alcohol is specific. Also ask about the first Friday payday and the work crew."
   },
   sleep: {
    obs: "Sleep chart: 6 to 7 hours the last 4 nights.",
    ans: {
     0: ["Bien, seis o siete horas. Hacía años que no dormía sin estar borracho.", "Well, six or seven hours. It's been years since I slept without being drunk."],
     1: ["Una vez, pero me vuelvo a dormir.", "Once, but I go back to sleep."],
     2: ["No.", "No."]
    },
    need: ["Good"],
    ok: ["7–8 hours, uninterrupted", "Fair"],
    wrong: {
     "Difficulty initiating sleep": "He falls asleep without trouble.",
     "Daytime sedation": "He denies daytime sleepiness. The lorazepam taper is over."
    },
    doc: "Good, 6–7 hours (sleep chart); one brief awakening, falls back to sleep; no daytime sedation",
    why: "Sleep often gets worse in early recovery, so ask again at follow-up. Poor sleep is a common reason to drink again."
   },
   adverse: {
    obs: "Chart: withdrawal seizure in the ER before admission, lorazepam taper and thiamine. Tremor and sweating gone by day 4. No restraint, no falls, no delirium.",
    ans: {
     0: ["Al principio mucho temblor y sudor. Ya no. Naltrexona apenas la empiezo y no he sentido nada.", "At first a lot of shaking and sweating. Not anymore. I'm just starting naltrexone and haven't felt anything."],
     1: ["No, nada. Solo el ataque antes de llegar.", "No, nothing. Only the seizure before I got here."]
    },
    key: [0, 1],
    need: ["Withdrawal symptoms"],
    ok: ["Tremor", "Sedation"],
    wrong: {
     None: "Withdrawal with a seizure and CIWA-Ar 18 is the central event of this stay. Document it, even though it is resolved.",
     "Fall or injury": "He fell at the work site before admission. No falls happened on the unit."
    },
    doc: "Alcohol withdrawal with seizure (before admission) and tremor and sweating on days 1–4, resolved with lorazepam taper and thiamine; no delirium, no restraint, no falls; no side effects from naltrexone so far",
    why: "Adverse events are what happened during the stay, not only drug side effects. The seizure history should travel with him to the next clinic."
   },
   diagnosis: {
    ans: {
     0: ["Sí. Alcoholismo, aunque la palabra me pesa.", "Yes. Alcoholism, though the word weighs on me."],
     1: ["Sí, el alcohol se hizo cargo de mí. Ya no podía parar solo.", "Yes, alcohol took charge of me. I couldn't stop on my own anymore."],
     2: ["Gracias. Yo pensaba que era falta de voluntad y que era un vicio.", "Thank you. I thought it was lack of willpower and that it was a vice."]
    },
    need: ["Other comorbid: ___"],
    wrong: {
     "Major depressive disorder, recurrent": "Low mood on admission cleared within days of stopping alcohol. Do not label a depressive disorder yet, but plan to recheck mood after 4 weeks of sobriety."
    },
    doc: "Alcohol use disorder, severe, with complicated withdrawal (seizure), withdrawal resolved; early remission not yet reached (8 days, in a controlled environment). Depressed mood on admission, likely alcohol-induced, resolved; recheck mood in 4 weeks",
    why: "There is no AUD pick on the form, so write it under “Other comorbid”. Say “alcohol use disorder, severe” and the course. Hearing “not willpower, not a vice” can reduce shame."
   },
   medications: {
    ans: {
     0: ["Sí, una pastilla al día.", "Yes, one pill a day."],
     2: ["La naltrexona, una pastilla en la mañana con el desayuno. Dijeron que no puedo tomar nada para el dolor como la morfina ni el tramadol mientras la tomo.", "Naltrexone, one pill in the morning with breakfast. They said I can't take anything for pain like morphine or tramadol while I'm on it."],
     3: ["Marisol me ayuda a ir a una clínica comunitaria; dice que cuesta poco.", "Marisol is helping me go to a community clinic; she says it costs little."],
     4: ["Sí, aunque ya no tenga ganas de tomar.", "Yes, even if I no longer feel like drinking."]
    },
    key: [2],
    need: ["Teach-back done, correct"],
    ok: ["Family supervises medication"],
    wrong: {
     "Teach-back incorrect, re-taught": "His teach-back was right, including the warning about pain medicines."
    },
    doc: "Naltrexone 50 mg tab, 1 tab every morning with breakfast (teaching example); teach-back correct, including no opioid pain medicines; liver tests at the first visit; cost and pickup checked; daughter aware",
    why: "Naltrexone blocks opioids, so he must tell any doctor or dentist he takes it. There is no naltrexone pick on the form, so the drug and dose go in the documentation line. Teach-back covers the pill and the warning."
   },
   aftercare: {
    ans: {
     0: ["Sí, el lunes a las nueve. Marisol me lleva.", "Yes, Monday at nine. Marisol takes me."],
     1: ["Mi hija. Pero yo soy el responsable.", "My daughter. But I'm the one responsible."],
     2: ["Sí. Si me empieza a temblar, si me dan muchas ganas de tomar, o si me vuelvo a sentir sin ganas de vivir, vengo o llamo.", "Yes. If I start to shake, if the urge to drink is strong, or if I start feeling like I don't want to live, I come in or call."],
     3: ["Gracias. Lo guardo.", "Thank you. I'll keep it."]
    },
    need: ["Outpatient follow-up in 1–2 weeks", "Referred to ___", "Family oriented on warning signs"],
    ok: ["Follow-up appointment date and clinic given in writing"],
    wrong: {
     "Safety plan made with patient and family": "He has no current suicidal ideation. A relapse-prevention plan is separate and is documented under follow-up."
    },
    doc: "Outpatient alcohol treatment program, intake Monday 9 a.m. (in 3 days, daughter drives) and clinic follow-up within 1–2 weeks; referred to AA in Spanish and a primary care clinic; daughter oriented on warning signs (tremor, strong cravings, hopelessness); 988 (oprima 2 for Spanish) given",
    why: "Name the date, the person who drives, and the early warning signs. If he shakes again after stopping alcohol, treat it as a medical emergency."
   }
  }
 }
,
 {
  id: "yesenia",
  title: "Cravings down, naloxone taught, bridge clinic booked",
  level: "B2",
  dx: "Opioid use disorder, severe",
  decision: { discharge: true, why: "Discharge today. She is stable on buprenorphine-naloxone, cravings are much lower, withdrawal has resolved, and she sleeps better. She denies suicidal thoughts. The overdose was unintentional and she and her mother have been taught to use naloxone. A bridge clinic appointment is in 3 days and she leaves with a 7-day supply. Leaving without a bridge appointment and naloxone would be the real risk." },
  setting: "Ward, morning of planned discharge. Yesenia, 31, nail technician, two children (6 and 3) who are staying with her mother, Doña Lidia. Her mother is waiting downstairs.",
  chart: [
   "Admitted 6 days ago after one overdose, reversed with naloxone by a friend. Fentanyl pills (“las azules”, M30), smoked, after a back injury and prescribed oxycodone. Wanted to stop and could not. Has PTSD symptoms (nightmares, startle) from an assault; does not want to give details.",
   "Admission MSE: tearful, anxious, drug craving, mild withdrawal (COWS 12), no suicidal ideation, insight fair.",
   "Course: buprenorphine-naloxone started once withdrawal was clear and raised to 16 mg/4 mg daily (teaching example). Cravings from 9/10 to 2/10. No restraint. No falls. Nightmares twice a week, improved from nightly. Sleep chart 6 to 7 hours.",
   "Plan: bridge clinic appointment in 3 days; 7-day buprenorphine-naloxone prescription; naloxone kit taught to her and her mother; trauma therapy referral when ready; children stay with her mother. 988 card."
  ],
  fields: {
   behavior: {
    obs: "Clean sweater, hair in a ponytail, no makeup. Calm, a little shy. Eye contact good. Sits with her hands in her lap and asks about her kids.",
    ans: {
     0: ["Mejor, doctora. Más tranquila y con ganas de ver a mis niños.", "Better, doctor. Calmer and wanting to see my kids."],
     1: ["Sí, claro.", "Yes, of course."]
    },
    need: ["Calm", "Cooperative", "Good eye contact", ["Well groomed", "Fairly groomed"]],
    wrong: {
     Guarded: "She is shy about the assault but open about her use and her plans.",
     Restless: "That was part of the withdrawal on admission. She sits calmly now."
    },
    doc: "Calm, cooperative, good eye contact, fairly groomed",
    why: "Compare with admission: tearful and anxious then, calm now. A calm patient who is no longer in withdrawal is easier to hear."
   },
   mood: {
    obs: "Smiles when she speaks about her children. Looks tense for a moment when asked about going back home.",
    ans: {
     0: ["Más tranquila. Antes no sentía nada o sentía miedo. Ahora siento ganas de empezar de nuevo.", "Calmer. Before I felt nothing or I felt fear. Now I feel like starting over."],
     1: ["Contenta y también nerviosa. Me da miedo salir y encontrarme con las mismas personas.", "Happy and also nervous. I'm afraid to go out and run into the same people."],
     2: ["Un siete.", "A seven."]
    },
    quote: "Más tranquila. Antes no sentía nada o sentía miedo. Ahora siento ganas de empezar de nuevo. (Calmer. Before I felt nothing or I felt fear. Now I feel like starting over.)",
    need: ["Euthymic mood", "Congruent affect", "Full range affect"],
    ok: ["Anxious mood", "Restricted affect"],
    wrong: {
     "Dysphoric mood": "That was her admission mood. She now says she feels calmer and hopeful.",
     "Flat affect": "She smiles and looks tense at fitting moments."
    },
    doc: "“Más tranquila. Antes no sentía nada o sentía miedo. Ahora siento ganas de empezar de nuevo.” (Calmer. Before I felt nothing or I felt fear. Now I feel like starting over.) Mood 7/10. Euthymic mood with situational nervousness; congruent, full range affect",
    why: "Her nervousness about leaving is realistic. Naming it is part of the relapse plan: people, places, and things."
   },
   process: {
    obs: "Organized and brief. Pauses when the assault is mentioned and chooses not to give detail.",
    ans: {
     0: ["Me lastimé la espalda en el trabajo y me dieron oxicodona. Cuando se acabó, un amigo me dio las azules. Me volví dependiente. Una noche me desmayé y mi amigo me salvó con el Narcan. Aquí me dieron la medicina y se me quitaron las ganas.", "I hurt my back at work and they gave me oxycodone. When it ran out, a friend gave me the blue ones. I became dependent. One night I passed out and my friend saved me with the Narcan. Here they gave me the medicine and the cravings went away."],
     1: ["Quedarme con mi mamá y mis hijos esta semana, ir a la clínica el lunes, y luego volver a trabajar poco a poco en el salón.", "Stay with my mom and my kids this week, go to the clinic on Monday, and then go back to work little by little at the salon."]
    },
    need: ["Goal-directed", "Coherent and relevant"],
    doc: "Goal-directed, coherent and relevant; declines detail about the assault",
    why: "A clear timeline and a plan with dates. Not giving detail about the assault is her choice. Respect it and do not push."
   },
   positive: {
    obs: "Not responding to anything. No startle during the interview.",
    ans: {
     0: ["No.", "No."],
     1: ["No.", "No."],
     2: ["No, solo las pesadillas, pero eso no es ver cosas, son sueños.", "No, only the nightmares, but that isn't seeing things, they're dreams."],
     3: ["No creo que me siga nadie. Me da miedo salir de noche, pero sé que es por lo que viví.", "I don't think anyone follows me. I'm afraid to go out at night, but I know that's because of what I went through."]
    },
    key: [2, 3],
    need: ["No hallucinations elicited", "Not responding to internal stimuli"],
    wrong: {
     "Residual persecutory ideas, less intense": "Her fear is linked to the trauma and she knows it. She does not believe she is being followed."
    },
    doc: "No hallucinations elicited; not responding to internal stimuli; no delusions; trauma-related fear of going out at night, with insight",
    why: "Ask the questions and listen for a trauma-related fear. Nightmares and hypervigilance are PTSD symptoms, not psychosis."
   },
   negative: {
    obs: "Ward notes: joins groups, helps other patients with their nails, bathes daily.",
    ans: {
     0: ["Sí, me gustó el grupo de manualidades.", "Yes, I liked the crafts group."],
     1: ["Sí, con una compañera que también tiene hijos.", "Yes, with a woman who also has children."],
     2: ["Sí, más que antes.", "Yes, more than before."],
     3: ["Sí, todos los días.", "Yes, every day."]
    },
    need: ["None noted"],
    wrong: {
     Anhedonia: "She enjoys the crafts group and her children. Interest is back.",
     "Poor self-care": "She bathes and dresses daily."
    },
    doc: "None noted",
    why: "Interest, social contact, and self-care are all back."
   },
   suicide: {
    ans: {
     0: ["No. Lo de la sobredosis no fue para quitarme la vida. Fue que me pasé de dosis.", "No. The overdose wasn't to take my life. I took too much."],
     1: ["No, ninguno.", "No, none."],
     2: ["Le digo a mi mamá y llamo a la clínica o al 988, y oprimo el 2.", "I tell my mom and I call the clinic or 988, and press 2."]
    },
    key: [0, 2],
    need: [["Denies suicidal ideation, plan, or intent", "None"]],
    doc: "Denies suicidal ideation, plan, or intent; overdose was unintentional (accidental, fentanyl); reasons for living (her children); will tell her mother and call the clinic or 988 (oprima 2)",
    why: "Ask directly whether the overdose was an attempt. An unintentional overdose and a suicide attempt need different plans. Write what she said in her own words."
   },
   homicide: {
    ans: {
     0: ["No.", "No."],
     1: ["Siento coraje con la persona que me lastimó, pero no quiero hacerle daño. Solo quiero que me dejen en paz.", "I feel coraje toward the person who hurt me, but I don't want to hurt him. I just want to be left alone."]
    },
    key: [1],
    need: [["Denies homicidal ideation", "None"]],
    doc: "Denies homicidal ideation; anger toward the person who assaulted her, no intent or plan",
    why: "Anger at a person who hurt her is expected. Ask about intent, and do not ask for details of the assault."
   },
   orientation: {
    ans: {
     0: ["Es viernes, a mediados de noviembre.", "It's Friday, the middle of November."],
     1: ["En el hospital.", "In the hospital."],
     2: ["Usted es la doctora.", "You are the doctor."]
    },
    need: ["Oriented to time, place, and person (×3)"],
    doc: "Oriented to time, place, and person (×3)",
    why: "Correct day, place, and person."
   },
   memory: {
    ans: {
     0: ["Pelota, árbol, llave.", "Ball, tree, key."],
     1: ["Pelota, árbol, llave.", "Ball, tree, key."],
     2: ["Un burrito de huevo y un café.", "An egg burrito and a coffee."],
     3: ["Hace seis días.", "Six days ago."],
     4: ["En Fresno, aquí en California.", "In Fresno, here in California."]
    },
    need: ["Intact immediate, recent, and remote memory"],
    doc: "Intact immediate (3/3), recent (3/3 recall, breakfast, admission date), and remote memory",
    why: "Memory is intact."
   },
   insight: {
    ans: {
     0: ["Porque me sobredosifiqué y ya no podía parar de usar.", "Because I overdosed and couldn't stop using anymore."],
     1: ["Sí, es una enfermedad. Mi mamá dice que es falta de voluntad, pero ya entendí que no es eso.", "Yes, it's an illness. My mom says it's lack of willpower, but I understand now that it isn't."],
     2: ["Sí. Aunque me sienta bien. La medicina me quita las ganas. Si la dejo, vuelvo a lo mismo.", "Yes. Even if I feel good. The medicine takes away the cravings. If I stop, I go back to the same thing."],
     3: ["Volvería a usar y podría morir, porque ya no tendría tolerancia.", "I'd go back to using and I could die, because I wouldn't have tolerance anymore."]
    },
    key: [1, 2, 3],
    need: ["Good", "Grade 5: intellectual insight"],
    ok: ["Fair", "Grade 6: true emotional insight"],
    wrong: {
     Poor: "She names the illness, the medicine, and the overdose risk after losing tolerance.",
     "Grade 3: blames others/external factors": "She does not blame the injury or her friends. She links her use to a disorder."
    },
    doc: "Good (grade 5): accepts opioid use disorder as an illness, understands that medicine prevents relapse and that losing tolerance raises overdose risk",
    why: "Her answer about losing tolerance is the key safety fact. Many overdoses after detox happen in the first weeks."
   },
   judgment: {
    ans: {
     0: ["Llamo a la clínica antes de que se me acabe. Me dieron la fecha, y si falta algo, voy a urgencias.", "I call the clinic before it runs out. They gave me the date, and if something is missing I go to the ER."],
     1: ["No oigo voces, pero si me vienen pensamientos de usar, llamo a mi mamá.", "I don't hear voices, but if thoughts of using come, I call my mom."],
     2: ["Saldría rápido y avisaría a alguien.", "I'd leave quickly and tell someone."],
     3: ["Ya borré los números de esos amigos. Si me los encuentro, les digo que no y me voy.", "I deleted those friends' numbers. If I run into them, I say no and leave."]
    },
    key: [0, 3],
    need: ["Intact test judgment", "Intact social judgment"],
    ok: ["Good"],
    doc: "Good: intact test and social judgment; specific plan for medicine supply and for people who use (deleted numbers)",
    why: "Her plan to keep from the people who use is concrete. Ask again at the bridge clinic, because the first days at home are the riskiest."
   },
   sleep: {
    obs: "Sleep chart: 6 to 7 hours, with brief waking on two nights, matching nightmares.",
    ans: {
     0: ["Mejor. Seis, siete horas.", "Better. Six, seven hours."],
     1: ["Dos veces por semana me despierto por una pesadilla y me cuesta volver a dormir.", "Twice a week I wake from a nightmare and have trouble going back to sleep."],
     2: ["Un poco, nada más.", "A little, that's all."],
     3: ["No.", "No."]
    },
    key: [1],
    need: ["Fair", "Frequent awakenings"],
    ok: ["Difficulty initiating sleep"],
    wrong: {
     Good: "Nightmares still wake her twice a week. Fair is the honest rating.",
     "7–8 hours, uninterrupted": "The chart shows awakenings on two nights.",
     "Reduced need for sleep": "She does not feel energetic. She is tired."
    },
    doc: "Fair, 6–7 hours (sleep chart); wakes about twice a week from trauma-related nightmares and has trouble going back to sleep (improved from nightly)",
    why: "Poor sleep is a relapse trigger. Nightmares are a target for later trauma treatment. Tell the bridge clinic."
   },
   adverse: {
    obs: "Chart: opioid withdrawal at admission (COWS 12) before buprenorphine was started, resolved within 36 hours. No restraint, no falls, no sedation, no medical illness.",
    ans: {
     0: ["Nada. Al principio me daba un poquito de náusea con la película, pero ya no.", "Nothing. At first the film gave me a little nausea, but not anymore."],
     1: ["No, aquí no. Solo los primeros días me dolía todo y no dormía, de la abstinencia.", "No, not here. Only the first days everything hurt and I didn't sleep, from withdrawal."]
    },
    key: [1],
    need: ["Withdrawal symptoms"],
    wrong: {
     None: "The chart records opioid withdrawal on admission. Document it, even though it is resolved.",
     Sedation: "She denies sleepiness from the medicine."
    },
    doc: "Opioid withdrawal on admission (COWS 12), resolved after buprenorphine induction; mild nausea early on, resolved; no sedation, no restraint, no falls",
    why: "Document withdrawal and how it ended. Her description of it also helps her keep medicine because she remembers how bad it was."
   },
   diagnosis: {
    ans: {
     0: ["Sí. Trastorno por uso de opioides. Me dijeron que tiene tratamiento.", "Yes. Opioid use disorder. They told me it has treatment."],
     1: ["Sí, el cerebro se acostumbra y pide más.", "Yes, the brain gets used to it and asks for more."],
     2: ["Gracias. Mi mamá dice que es vicio y que es mi culpa. Quiero que ella escuche esto.", "Thank you. My mom says it's a vice and my fault. I want her to hear this."]
    },
    need: ["Other comorbid: ___"],
    wrong: {
     "Methamphetamine-induced psychotic disorder, with ___ use disorder": "This case involves opioids (fentanyl pills), not stimulants. No psychosis was found."
    },
    doc: "Opioid use disorder, severe (fentanyl, after prescribed oxycodone), on buprenorphine-naloxone; one reversed overdose; PTSD symptoms (nightmares, startle, avoidance), full assessment deferred to outpatient care",
    why: "The form has no opioid-use pick, so write it under “Other comorbid”. Name the PTSD symptoms too. Arranging a talk with her mother could help the family see addiction as an illness."
   },
   medications: {
    ans: {
     0: ["Sí, la película de buprenorfina con naloxona, debajo de la lengua, una vez al día.", "Yes, the buprenorphine-naloxone film, under the tongue, once a day."],
     2: ["Pongo la película debajo de la lengua y la dejo disolver. No la trago ni hablo hasta que se disuelva. Una vez al día en la mañana. Si me siento mal, no la dejo.", "I put the film under my tongue and let it dissolve. I don't swallow it or talk until it dissolves. Once a day in the morning. If I feel bad, I don't stop."],
     3: ["La receta es por siete días. Tengo Medicaid. Si no me la cubren, la clínica me ayuda.", "The prescription is for seven days. I have Medicaid. If it isn't covered, the clinic helps me."],
     4: ["Sí. Ya sé que no debo dejarla.", "Yes. I know I shouldn't stop."]
    },
    key: [2],
    need: ["Naloxone kit given and taught", "Teach-back done, correct"],
    ok: ["Family supervises medication"],
    wrong: {
     "Teach-back incorrect, re-taught": "Her teach-back was correct: under the tongue, dissolve, once a day.",
     "Olanzapine ___ mg tab, 1 tab at bedtime": "No antipsychotic was ordered. She has no psychosis."
    },
    doc: "Buprenorphine-naloxone 16 mg/4 mg sublingual film, once daily, 7-day supply (teaching example); teach-back correct; naloxone nasal kit given and taught to patient and mother (demonstrated: call 911, spray, rescue breaths, stay with her); cost and coverage checked",
    why: "Teach-back covers how to take it and what not to do. The naloxone kit is as important as the prescription. The form has no buprenorphine pick, so the drug and dose go in the documentation line."
   },
   aftercare: {
    ans: {
     0: ["Sí. Dentro de tres días, el lunes a las diez. Mi mamá me lleva.", "Yes. In three days, Monday at ten. My mom takes me."],
     1: ["Mi mamá. Ella ya aprendió a usar el Narcan.", "My mom. She already learned how to use the Narcan.", "Doña Lidia (mother)"],
     2: ["Sí. Si vuelven las ganas muy fuertes, si dejo de dormir, o si pienso en hacerme daño, llamo a la clínica o al 988.", "Yes. If cravings come back very strong, if I stop sleeping, or if I think of hurting myself, I call the clinic or 988."],
     3: ["Lo guardé en el teléfono. Oprimo el 2.", "I saved it in my phone. I press 2."]
    },
    key: [1],
    need: ["Naloxone kit and MOUD referral", "Follow-up appointment date and clinic given in writing", "Family oriented on warning signs"],
    ok: ["Referred to ___"],
    wrong: {
     "Outpatient follow-up in 1–2 weeks": "Too long. Her bridge appointment is in 3 days, and the 7-day supply runs out before 2 weeks.",
     "Discharge deferred: ___": "She meets the criteria for discharge today, with naloxone and a bridge appointment in place."
    },
    doc: "Bridge clinic Monday 10 a.m. (3 days), date and place given in writing; 7-day buprenorphine-naloxone prescription; naloxone kit given, taught to patient and mother; mother oriented on overdose and relapse warning signs; trauma therapy referral when ready; children staying with her mother; 988 (oprima 2 for Spanish)",
    why: "The days after discharge carry the highest overdose risk. Match supply to the appointment, and put naloxone in the home. Her mother is a strong support, so her view of addiction as a vice matters."
   }
  }
 }
];
