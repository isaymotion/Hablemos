/* Discharge practice case for Hablemos (Spanish): Don Chuy, delirium resolved, going home with his daughter.
   STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Appends to window.PSYCH_DISCHARGE_CASES (same shape as psych-discharge-cases.js).
   Clinician lines use usted and "Don Chuy". Family answers carry a third element: speaker.
   Patient is fictional. Medicine names and doses appear only in the chart and `doc`, as teaching examples.
   Crisis line is 988 (oprima 2 for Spanish); emergency 911. */
window.PSYCH_DISCHARGE_CASES = (window.PSYCH_DISCHARGE_CASES || []).concat([
 {
  id: `don-chuy`,
  title: `Clear head again, two weeks at his daughter's`,
  level: `B1`,
  dx: `Delirium due to urinary tract infection and dehydration, resolved`,
  decision: { discharge: true, why: `Discharge today. The delirium has resolved: he is oriented, his attention is intact (he says the days of the week backward, which he could not do on admission), he has had no hallucinations since day 5 and no evening restlessness since day 6. The infection and dehydration are treated, with two more days of antibiotic tablets at home. The sleeping pill he took nightly for a year was tapered and stopped with no withdrawal signs, and he sleeps 6 to 7 hours without it. The risks after discharge are a new infection or dehydration bringing the confusion back, restarting the old sleeping pill, and a fall. The plan covers them: two weeks at Lety's house, regular drinks, no sleeping pill, the clinic in one week with a Spanish interpreter or Spanish-speaking clinician, and Lety taught the warning signs. A memory assessment about three months after recovery will look at the name forgetting she noticed before. Keeping him longer in the hospital could itself raise the risk of delirium coming back.` },
  setting: `Medical floor, morning of discharge, day 8. You are the psychiatry consultation team doctor who has followed him. Don Chuy (Jesús), 78, retired farmworker, lives alone. His daughter Lety lives about 20 minutes away. She has come to take him to her house and joins the interview. Use usted and "Don Chuy". Ask for a qualified medical interpreter if you are not fluent.`,
  chart: [
   `Admitted to the medical floor a week ago (today is day 8) with delirium due to a urinary tract infection and dehydration: sudden confusion since the night before, visual hallucinations of children at the window, disoriented (thought he was in Michoacán, in the cornfield), inattentive. Lety reported he barely drank and had pain passing urine. Before this he was independent. Over the last year Lety noticed he sometimes forgets names (no diagnosis). Benzodiazepine-type sleeping pill nightly for about a year (teaching example: lorazepam 1 mg at bedtime); blood-pressure medicine.`,
   `Admission MSE: restless, picking at the sheet; fragmented, mildly disorganized speech; affect labile; tangential; visual hallucinations (children at the window); disoriented to place and time; attention impaired (could not say the days of the week backward); insight absent; judgment impaired.`,
   `Course: IV fluids and an antibiotic, switched to tablets. Sleeping pill tapered and stopped over the week, no withdrawal signs. Blood-pressure medicine continued. No antipsychotic needed: clock, calendar, his own glasses, family visits, light by day, the same nurses, a low bed and a bed alarm. Evening restlessness up to day 5, none since day 6; no hallucinations since day 5. No restraint. No falls. Sleep chart 6 to 7 hours without the pill.`,
   `Plan: two weeks at Lety's house; finish the antibiotic tablets (teaching example: cephalexin 500 mg twice a day, two more days); blood-pressure medicine as before; drink regularly; no sleeping pill, sleep habits taught; clinic in one week (blood pressure, urine recheck) with a Spanish interpreter or Spanish-speaking clinician; memory assessment about three months after recovery; warning signs taught to Lety (sudden confusion, fever, not drinking, pain passing urine, seeing things) and see a doctor the same day, 911 in an emergency. Card with 988 (oprima 2 for Spanish).`
  ],
  fields: {
   behavior: {
    obs: `Sitting on the edge of the bed in his own clothes, which Lety brought. Wearing his glasses and his cap in his lap; hair combed, shaved. Calm, a little tired, polite. Good eye contact. Looks down and smiles awkwardly when the first nights are mentioned.`,
    ans: {
     0: [`Buenos días, doctora. Me dicen que hoy me voy a la casa. Estoy un poco cansado, pero estoy bien.`, `Good morning, doctor. They tell me I'm going home today. I'm a little tired, but I'm well.`],
     1: [`Sí, pase. Aquí está mi hija también, que escuche ella.`, `Yes, go ahead. My daughter is here too, let her listen.`]
    },
    need: [`Calm`, `Cooperative`, `Good eye contact`, [`Well groomed`, `Fairly groomed`]],
    wrong: {
     Restless: `He was restless and picking at the sheet on admission, and restless in the evenings up to day 5. He sits calmly now.`,
     Withdrawn: `He is a little embarrassed about the first nights, but he talks readily and answers every question.`,
     "Psychomotor retardation": `He is a little tired, but he moves and answers at a normal pace.`
    },
    doc: `Calm, cooperative, good eye contact, well groomed (own clothes and glasses); a little tired; embarrassed when the first nights are mentioned`,
    why: `Compare with admission: restless and picking at the sheet then, calm now. His glasses matter: seeing clearly helps a person recovering from delirium stay oriented.`
   },
   mood: {
    obs: `Tired but relaxed. Smiles when Lety speaks. Embarrassed, not sad, when the first nights come up.`,
    ans: {
     0: [`Bien, nomás un poco cansado. Ya tengo la cabeza clara.`, `Fine, just a little tired. My head is clear now.`],
     1: [`Contento. Preocupado no. Pero me da pena lo que me cuentan de las primeras noches.`, `Happy. Not worried. But I'm embarrassed about what they tell me of the first nights.`],
     2: [`Como un siete. Si no estuviera cansado, un ocho.`, `About a seven. If I weren't tired, an eight.`]
    },
    quote: `Bien, nomás un poco cansado. Ya tengo la cabeza clara. (Fine, just a little tired. My head is clear now.)`,
    need: [`Euthymic mood`, `Congruent affect`, `Full range affect`],
    wrong: {
     "Dysphoric mood": `Tiredness and embarrassment are not low mood. He says he is fine and rates his mood 7.`,
     "Labile affect": `His affect was labile on admission. Today it is steady through the interview.`,
     "Flat affect": `He smiles with Lety and looks embarrassed at fitting moments.`
    },
    doc: `“Bien, nomás un poco cansado. Ya tengo la cabeza clara.” (Fine, just a little tired. My head is clear now.) Mood 7/10. Euthymic mood; congruent, full range affect; embarrassed about the first nights`,
    why: `Quote his words. Embarrassment about what he did while confused is common after delirium. Name it and tell him it was the illness, not him.`
   },
   process: {
    obs: `Tells the story in order and stays on the point. Says plainly that he remembers little of the first two nights and repeats what Lety told him.`,
    ans: {
     0: [`Dicen que una infección de orina y que no tomaba agua me revolvieron la cabeza, y no entendía nada. De las primeras dos noches casi no me acuerdo. Mi hija dice que yo gritaba que había niños en la ventana. Me dio vergüenza. Con el suero y las pastillas se me fue aclarando la cabeza.`, `They say a urine infection and not drinking water scrambled my head, and I couldn't understand anything. I hardly remember the first two nights. My daughter says I shouted that there were children in the window. I was embarrassed. With the IV and the pills my head slowly cleared.`],
     1: [`Me voy a quedar dos semanas con mi hija. Voy a terminar la medicina y a tomar agua como se debe. La semana que entra voy a la clínica.`, `I'll stay with my daughter for two weeks. I'll finish the medicine and drink water properly. Next week I go to the clinic.`]
    },
    need: [`Goal-directed`, `Coherent and relevant`],
    wrong: {
     "Some tangentiality": `That was his admission thought process. Today he answers each question and stays on the point.`
    },
    doc: `Goal-directed, coherent and relevant; amnesia for the first two nights, fills the gap with what his daughter told him, not with invented detail`,
    why: `Compare with admission: tangential and fragmented then, clear now. Note that he says what he does not remember instead of making it up.`
   },
   positive: {
    obs: `Attends to you and to Lety. Does not look toward the window or around the room.`,
    ans: {
     0: [`No, ninguna.`, `No, none.`],
     1: [`No, nada de eso.`, `No, nothing like that.`],
     2: [`No, ahorita no veo nada. Hace unos días que no. Por la ventana nomás se ve el estacionamiento.`, `No, I don't see anything now. Not for a few days. Out the window you only see the parking lot.`],
     3: [`No, nadie. Las enfermeras fueron muy buenas conmigo.`, `No, no one. The nurses were very good to me.`],
     4: [`Yo creía que estaba en Michoacán, en la milpa. Ahora que lo pienso, era la enfermedad.`, `I believed I was in Michoacán, in the cornfield. Now that I think about it, it was the illness.`],
     5: [`¿Voces? No, nunca.`, `Voices? No, never.`]
    },
    key: [2, 4],
    need: [`No hallucinations elicited`, `Not responding to internal stimuli`],
    wrong: {
     "Delusions no longer held": `He had no fixed delusion. Thinking he was in Michoacán was disorientation, part of the delirium, and it cleared with it.`,
     "Responding to internal stimuli": `He attends to you and to Lety and does not look toward the window.`
    },
    doc: `No hallucinations elicited (none since day 5); not responding to internal stimuli; recognizes the children in the window and the cornfield as part of the illness`,
    why: `When you re-ask, name what he saw on admission, the children in the window. Visual hallucinations are typical of delirium. The voices question is still worth asking, in simple words.`
   },
   negative: {
    obs: `Nursing notes: reads the Spanish newspaper in the day room, chats with the man in the next bed, showers and shaves himself.`,
    ans: {
     0: [`Aquí no hay mucho que hacer, pero me gusta leer el periódico en la sala.`, `There isn't much to do here, but I like reading the paper in the day room.`],
     1: [`Sí, con el señor de la cama de al lado. Hablamos del campo y de los patrones de antes.`, `Yes, with the man in the next bed. We talked about the fields and the bosses of the old days.`],
     2: [`Sí. Quiero llegar a la casa y salir a caminar otra vez.`, `Yes. I want to get home and go out for walks again.`],
     3: [`Ayer me bañé y me rasuré yo solo.`, `Yesterday I showered and shaved by myself.`]
    },
    need: [`None noted`],
    wrong: {
     Avolition: `Feeling a little tired after an illness is not loss of drive. He reads, talks and wants to walk again.`,
     Anhedonia: `He enjoys the newspaper and talking about the fields.`,
     "Poor self-care": `He showers and shaves on his own.`
    },
    doc: `None noted; reads the newspaper in the day room, chats with another patient, showers and shaves independently`,
    why: `On a medical floor there are few activities, so ask about everyday things instead: the newspaper, talking, self-care. He is back to doing them on his own.`
   },
   suicide: {
    ans: {
     0: [`No, no, doctora. Nunca he pensado en eso.`, `No, no, doctor. I have never thought of that.`],
     1: [`No.`, `No.`],
     2: [`Le digo a mi hija.`, `I tell my daughter.`]
    },
    key: [0],
    need: [[`Denies suicidal ideation, plan, or intent`, `None`]],
    doc: `Denies suicidal ideation, plan, or intent; would tell his daughter`,
    why: `Ask directly. An older man who lives alone, after a frightening illness, is in a higher-risk group even when the question seems unnecessary.`
   },
   homicide: {
    ans: {
     0: [`No.`, `No.`],
     1: [`Con nadie. Más bien siento que les di mucho trabajo a las enfermeras.`, `With no one. If anything, I feel I gave the nurses a lot of work.`]
    },
    key: [1],
    need: [[`Denies homicidal ideation`, `None`]],
    doc: `Denies homicidal ideation; no aggression during the stay`,
    why: `Restlessness in delirium is not hostility. Ask the question anyway, and record that there was no aggression on the unit.`
   },
   orientation: {
    obs: `He gives the month, the date and the weekday correctly. After the orientation questions you ask him, as on admission, to say the days of the week backward from Sunday. He does it without an error, a little slowly.`,
    ans: {
     0: [`Es jueves. La fecha también la sé: es el día que me dan de alta.`, `It's Thursday. I know the date too: it's the day I'm discharged.`],
     1: [`En el hospital, en el piso de medicina. No en la milpa.`, `In the hospital, on the medical floor. Not in the cornfield.`],
     2: [`Usted es la doctora de la mente. Fue a verme varias veces.`, `You are the doctor for the mind. You came to see me several times.`]
    },
    need: [`Oriented to time, place, and person (×3)`],
    wrong: {
     "Disoriented to time": `He gives the date and the day correctly.`,
     "Disoriented to place": `On admission he thought he was in Michoacán. Today he names the hospital and the floor.`
    },
    doc: `Oriented to time, place, and person (×3); attention intact (days of the week backward from Sunday, no errors; could not do it on admission)`,
    why: `Inattention is the core sign of delirium, and the form has no field for it, so write it here. Retest it the same way as on admission: that is what shows the delirium has resolved.`
   },
   memory: {
    ans: {
     0: [`Pelota, árbol, llave.`, `Ball, tree, key.`],
     1: [`Pelota, árbol... y llave.`, `Ball, tree... and key.`],
     2: [`Frijoles con huevo y tortillas. Me lo acabé todo.`, `Beans with eggs and tortillas. I finished it all.`],
     3: [`Hace una semana. Pero de las primeras dos noches no me acuerdo casi nada.`, `A week ago. But I hardly remember anything of the first two nights.`],
     4: [`Nací en un rancho de Michoacán. Ya después trabajé en el campo aquí muchos años.`, `I was born on a ranch in Michoacán. Later I worked in the fields here for many years.`]
    },
    key: [3],
    need: [[`Intact immediate, recent, and remote memory`, `Impaired recent memory`]],
    wrong: {
     "Impaired immediate memory": `He repeats all three words at once.`,
     "Impaired remote memory": `He gives his birthplace and his life's work easily.`
    },
    doc: `Intact immediate (3/3), recent (3/3 recall, breakfast, admission date), and remote memory; patchy amnesia for the first two nights of the delirium; daughter reports occasional forgetting of names over the past year, memory assessment planned`,
    why: `Intact is the better pick: today's recent memory is intact (3/3 recall, breakfast, the admission date), and the gap for the first two nights is amnesia for the delirium itself, so write it in the details. Impaired recent memory is accepted if that gap is what you mean, but say so. A normal bedside test today does not rule out a mild memory problem: the name forgetting Lety noticed before admission is why a memory assessment is planned about three months after recovery.`
   },
   insight: {
    ans: {
     0: [`Una infección de orina y que no tomaba agua me confundieron la cabeza, según me explicó la doctora.`, `A urine infection and not drinking water confused my head, as the doctor explained to me.`],
     1: [`Sí, fue una enfermedad. Me dijeron que se me confundió la cabeza por algo del cuerpo. Ya estoy mejor, pero tengo que tener cuidado.`, `Yes, it was an illness. They told me my head got confused because of something in my body. I'm better now, but I have to be careful.`],
     2: [`La pastilla de la infección, dos días más. Si no la termino, puede volver. Y la de la presión, como siempre.`, `The infection pill, two more days. If I don't finish it, it can come back. And the blood-pressure pill, like always.`],
     3: [`Que la infección se ponga peor y me vuelva a pasar lo mismo.`, `That the infection gets worse and the same thing happens to me again.`]
    },
    key: [0, 2],
    need: [`Good`, `Grade 5: intellectual insight`],
    ok: [`Grade 6: true emotional insight`],
    wrong: {
     Poor: `Insight was absent on admission, as expected in delirium. Today he explains the cause, the treatment, and the risk of stopping early.`,
     "Grade 3: blames others/external factors": `He names the infection and dehydration as the cause. In delirium a medical cause is the correct explanation, not blaming.`
    },
    doc: `Good (grade 5): understands the confusion came from the infection and dehydration; knows to finish the antibiotic and continue the blood-pressure medicine`,
    why: `In delirium the cause really is outside the mind, so naming the infection is good insight. Check that he also knows what would bring it back: infection, not drinking.`
   },
   judgment: {
    ans: {
     0: [`Le digo a mi hija y vamos a la clínica por más. Nunca se me ha acabado la de la presión.`, `I tell my daughter and we go to the clinic for more. I have never run out of the blood-pressure one.`],
     1: [`Voces no oí, pero si vuelvo a ver cosas raras, le aviso a mi hija enseguida. Ella me lleva al doctor.`, `I didn't hear voices, but if I see strange things again, I tell my daughter right away. She takes me to the doctor.`],
     2: [`Gritaría para avisarle a la gente y saldría por la puerta rápido.`, `I would shout to warn people and go out the door fast.`],
     3: [`Yo casi no tomo. Un tiempo mejor no tomo nada.`, `I hardly drink. For a while I'd better drink nothing.`]
    },
    key: [1],
    need: [`Intact test judgment`, `Intact social judgment`],
    ok: [`Good`],
    doc: `Good: intact test and social judgment; would tell his daughter at once if he saw things again; agrees to stay at her house for two weeks`,
    why: `Adapt the voices question to what he had: seeing things. His plan to tell Lety, and accepting two weeks at her house, show sound judgment about his own safety.`
   },
   sleep: {
    obs: `Sleep chart: 6 to 7 hours a night since the sleeping pill was stopped. No night restlessness since day 6. Up once a night to the toilet, with a nurse's check; settles quickly.`,
    ans: {
     0: [`Duermo bien. Seis, siete horas. Nunca pensé que podía dormir sin la pastilla.`, `I sleep well. Six, seven hours. I never thought I could sleep without the pill.`],
     1: [`Nomás una vez, para ir al baño. Luego me vuelvo a dormir enseguida.`, `Just once, to go to the bathroom. Then I go right back to sleep.`],
     2: [`Estoy cansado, pero no con sueño.`, `I'm tired, but not sleepy.`],
     3: [`No, al contrario, todavía ando cansado.`, `No, on the contrary, I'm still tired.`]
    },
    key: [0],
    need: [`Good`],
    ok: [`Fair`],
    wrong: {
     "7–8 hours, uninterrupted": `The chart shows 6 to 7 hours, and he gets up once for the toilet.`,
     "Frequent awakenings": `He wakes once for the toilet and settles quickly.`,
     "Daytime sedation": `He is tired after an illness, not drowsy, and the sleeping pill has been stopped.`,
     "Difficulty initiating sleep": `He falls asleep without the pill.`
    },
    doc: `Good, 6–7 hours without the sleeping pill (sleep chart); up once a night to the toilet, settles quickly; no night restlessness since day 6; no daytime sedation; sleep habits taught`,
    why: `Sleeping well without the pill is an important result: benzodiazepine-type sleeping pills raise the risk of delirium and falls in older people. Teach sleep habits (regular times, daylight and activity by day, little napping, no coffee in the evening, a night light on the way to the toilet).`
   },
   adverse: {
    obs: `Chart: sleeping pill tapered and stopped over the week, no withdrawal signs. Evening restlessness up to day 5, managed without medicine. No antipsychotic. No restraint. No falls (low bed and bed alarm). Infection and dehydration treated; IV line removed.`,
    ans: {
     0: [`No, nada en particular. Y ya me quitaron el suero.`, `No, nothing in particular. And the IV is out now.`],
     1: [`No me lastimé ni me caí.`, `I didn't get hurt and I didn't fall.`]
    },
    key: [1],
    need: [`None`],
    wrong: {
     "Withdrawal symptoms": `The sleeping pill was tapered and stopped, and no withdrawal signs were seen. Write that in the details: stopping a benzodiazepine-type pill can cause withdrawal.`,
     "Medical illness during admission": `The infection and dehydration were the reason for admission and the cause of the delirium, not a new illness during the stay. They go in the diagnosis.`,
     "Agitation requiring restraint": `No restraint was used. The evening restlessness settled with non-drug measures.`,
     "Fall or injury": `No falls. The low bed and the bed alarm were there to prevent them.`,
     Sedation: `He is a little tired, not drowsy.`
    },
    doc: `None; sleeping pill tapered and stopped, no withdrawal signs; evening restlessness up to day 5 managed without medicine (no antipsychotic); no restraint; no falls`,
    why: `Restraint and sedating medicines can make delirium worse and cause falls. Record what was avoided and how: clock, calendar, glasses, family visits, daylight, the same nurses, a low bed and a bed alarm.`
   },
   diagnosis: {
    ans: {
     0: [`¿Delirium? Primera vez que oigo esa palabra. Si ya se me quitó, qué bueno.`, `Delirium? First time I hear that word. If it's gone, good.`],
     1: [`Así que por eso mi papá decía que había niños en la ventana. Yo pensé que ya tenía demencia, y me asusté muchísimo.`, `So that's why my father said there were children in the window. I thought he already had dementia, and I was terribly frightened.`, `Lety (daughter)`],
     2: [`Qué bueno que me lo dice, doctora. Me saca una espina del corazón.`, `I'm glad you tell me, doctor. It lifts a worry off me.`]
    },
    key: [1],
    need: [`Other comorbid: ___`],
    wrong: {
     "Schizophrenia, first episode, currently in acute episode": `Sudden onset with a medical cause, disorientation and inattention, clearing as the infection was treated: that is delirium, not a primary psychosis.`,
     "Major depressive disorder, recurrent": `No depressive symptoms were found.`
    },
    doc: `Delirium due to urinary tract infection and dehydration, resolved; occasional forgetting of names over the past year per daughter, not assessed while delirious, memory assessment planned about three months after recovery`,
    why: `The form has no pick for delirium, so write it under “Other comorbid”. Answer Lety's fear honestly: delirium is not dementia, but it can be a sign that the brain is vulnerable, which is why the memory assessment is planned once he has fully recovered.`
   },
   medications: {
    ans: {
     0: [`Sí. La pastilla de la infección y la de la presión. Ya no hay pastilla para dormir.`, `Yes. The infection pill and the blood-pressure pill. No more sleeping pill.`],
     2: [`La de la infección dos días más, como me dijeron. La de la presión como siempre. Ya no la de dormir. Las que me quedan en la casa se las doy a mi hija para que las guarde.`, `The infection one for two more days, as I was told. The blood-pressure one like always. No more the sleeping one. The ones I have left at home I'll give to my daughter to keep.`],
     3: [`Las vamos a surtir en nuestra farmacia de siempre, y cubre el seguro. Yo me fijo en sus medicinas estas dos semanas.`, `We'll fill them at our usual pharmacy, and the insurance covers it. I'll keep an eye on his medicines these two weeks.`, `Lety (daughter)`],
     4: [`Sí. La de la infección la termino aunque ya me sienta bien.`, `Yes. I finish the infection one even if I already feel well.`]
    },
    key: [2],
    need: [`Teach-back done, correct`],
    ok: [`Family supervises medication`],
    wrong: {
     "Teach-back incorrect, re-taught": `His teach-back was correct: finish the antibiotic, keep the blood-pressure medicine, no sleeping pill.`,
     "Quetiapine ___ mg tab, ___": `No antipsychotic was needed. The delirium settled with treatment of the cause and non-drug measures.`,
     "Olanzapine ___ mg tab, 1 tab at bedtime": `No antipsychotic was needed or prescribed.`
    },
    doc: `Antibiotic tablets, two more days to finish the course (example: cephalexin 500 mg twice a day); usual blood-pressure medicine, unchanged; sleeping pill stopped, not to be restarted, leftover supply at home handed to his daughter; no antipsychotic; teach-back correct; daughter keeps an eye on the medicines for two weeks; pharmacy and insurance confirmed`,
    why: `The form has no picks for these medicines, so write them in the details. Stopping the sleeping pill is part of the treatment: make sure the old supply at home is not restarted, and tell the clinic.`
   },
   aftercare: {
    ans: {
     0: [`En una semana, en la clínica. Le van a ver la presión y a repetir el examen de orina. Yo lo llevo. Y en unos tres meses, la revisión de la memoria. Pedimos que sea con alguien que hable español o con intérprete.`, `In one week, at the clinic. They'll check his blood pressure and repeat the urine test. I'll take him. And in about three months, the memory check. We asked for someone who speaks Spanish or an interpreter.`, `Lety (daughter)`],
     1: [`Yo. Se va a quedar dos semanas en mi casa. Me aseguro de que tome agua y té seguido.`, `Me. He'll stay at my house for two weeks. I'll make sure he drinks water and tea often.`, `Lety (daughter)`],
     2: [`Sí. Si de repente lo veo confundido, con fiebre, que no quiera tomar agua, que le duela al orinar o que diga que ve cosas, lo llevo con el doctor ese mismo día. Si es una emergencia, llamo al 911.`, `Yes. If I suddenly see him confused, with a fever, not wanting to drink, with pain when he urinates, or saying he sees things, I take him to the doctor that same day. If it's an emergency, I call 911.`, `Lety (daughter)`],
     3: [`Está bien, mija. Apúntemelo.`, `All right, mija. Write it down for me.`]
    },
    key: [2],
    need: [`Outpatient follow-up in 1–2 weeks`, `Family oriented on warning signs`, `Referred to ___`],
    ok: [`Follow-up appointment date and clinic given in writing`, `Safety plan made with patient and family`, `Interpreter arranged for follow-up`],
    wrong: {
     "Discharge deferred: ___": `The delirium has resolved, the cause is treated, and the plan at Lety's house is in place. A longer stay would add risk, not remove it.`,
     "Transferred to ___ unit due to ___": `He goes to his daughter's house.`
    },
    doc: `Two weeks at his daughter's house; clinic in one week (blood pressure, urine recheck), daughter to take him; interpreter or Spanish-speaking clinician arranged for follow-up; referred for a memory assessment about three months after recovery; drinks regularly; daughter oriented on warning signs (sudden confusion, fever, not drinking, pain passing urine, seeing things) and to see a doctor the same day, 911 in an emergency; card with 988 given (oprima 2 for Spanish)`,
    why: `Delirium can come back with the next infection or a dry spell, and older people who live alone are found late. Two weeks with Lety, clear warning signs and a same-day rule cover that. Plan the return to his own home with the clinic.`
   }
  }
 }
]);
