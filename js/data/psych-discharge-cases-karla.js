/* Discharge practice case: Karla (id karla). Over-the-counter cough and cold medicine misuse.
   STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Hablemos (Spanish). Appends to window.PSYCH_DISCHARGE_CASES. Same shape as psych-discharge-cases.js:
   { id, title, level, dx, decision: { discharge, why }, setting, chart: [..], fields: { <field id>: { obs?, ans: { qIdx: [es, en, speaker?] }, key?, need, ok?, wrong?, doc, why, quote? } } }.
   Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish text.
   Fictional patient. No amounts, no product names, no method detail by design. Crisis line is 988 (oprima 2 for Spanish). */
window.PSYCH_DISCHARGE_CASES = (window.PSYCH_DISCHARGE_CASES || []).concat([
 {
  id: "karla",
  title: "Urges down, medicines locked away, follow-up booked",
  level: "B1",
  dx: "Other (or unknown) substance use disorder, moderate (over-the-counter cough and cold medicine)",
  decision: { discharge: true, why: "Discharge today. Urges are much lower (from 8/10 to 2/10), the withdrawal-like symptoms settled by day 3, and she sleeps better. She denies suicidal thoughts, plan or intent, and the frightening night was not an attempt. With her agreement Tía Norma has locked the household medicines away, and both have been taught what to do if someone cannot be woken. An outpatient appointment is booked in 3 days, a college counseling visit is set for later in the week, and she needs no discharge medicines. The first days after discharge are a high-risk time for relapse, so going home without a booked appointment and with the boxes still in her room would be the real risk." },
  setting: "Unit, morning of planned discharge. Karla, 22, community college student and part-time barista, lives with her aunt, Tía Norma, who speaks mostly Spanish and is waiting downstairs. Karla was born in the US and answers in a mix of English and Spanish.",
  chart: [
   "Admitted 5 days ago after a night when her heart raced and she thought she was dying; her aunt called 911. The emergency department found a normal ECG and normal blood tests. For months she had used over-the-counter cough and cold medicine, sold without a prescription, in a way that is not on the label. It began for sleep during exam stress and became daily. Missed classes, hid the boxes in her room. Wanted to stop and could not. Said at first, \"no es droga, se compra en la farmacia\".",
   "Admission MSE: tired, anxious, ashamed, ambivalent, strong urges to use, mild withdrawal-like symptoms (restlessness, achiness, poor sleep), denied suicidal ideation, insight fair.",
   "Course: supportive care and monitoring; the withdrawal-like symptoms settled by day 3; no medicine was started for the use disorder. Urges from 8/10 to 2/10. Motivational interviewing sessions: importance 7/10 and confidence now 7/10. No restraint. No falls. Sleep chart 6 to 7 hours.",
   "Plan: outpatient appointment in 3 days (Monday 2 p.m.), date and place in writing; college counseling visit booked for Wednesday; no discharge medicines; she will not buy over-the-counter medicines herself and will ask the outpatient clinician or a pharmacist before taking anything for a cold or cough; with her agreement Tía Norma keeps the household medicines locked away and has cleared the boxes from her room; warning signs and emergency steps taught to Karla and Tía Norma; sleep plan given. The 988 card (oprima 2 for Spanish)."
  ],
  fields: {
   behavior: {
    obs: "Clean sweater, hair tied back. Calm, a little shy. Eye contact good. Sits with her hands in her lap and asks whether Tía Norma has arrived.",
    ans: {
     0: ["Mucho mejor, doctor. Más tranquila. Ya quiero ver a mi tía.", "Much better, doctor. Calmer. I want to see my aunt already."],
     1: ["Sí, claro. No hay problema.", "Yes, of course. No problem."]
    },
    need: ["Calm", "Cooperative", "Good eye contact", ["Well groomed", "Fairly groomed"]],
    wrong: {
     Guarded: "She was ashamed and guarded about her use on admission. Now she is open about it and about her plans.",
     Restless: "She was anxious and restless on admission. She sits calmly now."
    },
    doc: "Calm, cooperative, good eye contact, fairly groomed",
    why: "Compare with admission: tired, anxious and ashamed then, calm now. A calm patient who is no longer in withdrawal is easier to hear."
   },
   mood: {
    obs: "Smiles when she speaks about her aunt. Looks tense for a moment when asked about going back to class.",
    ans: {
     0: ["Más tranquila. Antes andaba como en piloto automático, y con miedo. Ahora siento que puedo empezar de nuevo.", "Calmer. Before I was on autopilot, and afraid. Now I feel I can start over."],
     1: ["Contenta, pero también nerviosa. Me da miedo que cuando lleguen los finales me den ganas de volver a tomarla.", "Happy, but also nervous. I'm afraid that when finals come I'll want to take it again."],
     2: ["Un siete.", "A seven."]
    },
    quote: "Más tranquila. Antes andaba como en piloto automático, y con miedo. Ahora siento que puedo empezar de nuevo. (Calmer. Before I was on autopilot, and afraid. Now I feel I can start over.)",
    need: ["Euthymic mood", "Congruent affect", "Full range affect"],
    ok: ["Anxious mood", "Restricted affect"],
    wrong: {
     "Dysphoric mood": "That was her admission mood. She now says she feels calmer and hopeful.",
     "Flat affect": "She smiles and looks tense at fitting moments."
    },
    doc: "“Más tranquila. Antes andaba como en piloto automático, y con miedo. Ahora siento que puedo empezar de nuevo.” (Calmer. Before I was on autopilot, and afraid. Now I feel I can start over.) Mood 7/10. Euthymic mood with situational nervousness; congruent, full range affect",
    why: "Her nervousness about finals is realistic. Naming it is part of the relapse plan: triggers such as exam stress and poor sleep."
   },
   process: {
    obs: "Organized and brief. Tells the story in order. Switches between English and Spanish, and it does not affect clarity.",
    ans: {
     0: ["Empecé a tomar la medicina para la tos y el resfriado, de la que se compra sin receta, cuando no podía dormir por los exámenes. Después ya la tomaba casi todos los días, me perdí clases y escondía las cajas. Quería parar y no podía. Una noche me latía el corazón rapidísimo y mi tía llamó al 911. Ahora las ganas bajaron un montón.", "I started taking the cough and cold medicine, the kind you buy without a prescription, when I couldn't sleep because of exams. After that I was taking it almost every day, I missed classes and hid the boxes. I wanted to stop and couldn't. One night my heart was beating super fast and my aunt called 911. Now the urges have gone down a lot."],
     1: ["Quedarme en casa con mi tía este fin de semana, ir a la cita del lunes, ir a consejería en la escuela el miércoles, y volver a mis clases poco a poco. Y hablar con mi jefa sobre mis turnos.", "Stay home with my aunt this weekend, go to the Monday appointment, go to counseling at school on Wednesday, and go back to my classes little by little. And talk to my boss about my shifts."]
    },
    need: ["Goal-directed", "Coherent and relevant"],
    doc: "Goal-directed, coherent and relevant; mixes English and Spanish without loss of clarity",
    why: "A clear timeline and a plan with dates. Her mix of English and Spanish is normal for a bilingual patient. It is not a sign of disorganization."
   },
   positive: {
    obs: "Not responding to anything. No startle during the interview.",
    ans: {
     0: ["No.", "No."],
     1: ["No.", "No."],
     2: ["No, nada de eso.", "No, nothing like that."],
     3: ["No, nadie me quiere hacer daño.", "No, nobody wants to hurt me."],
     4: ["Yo pensaba que no era para tanto porque se compra en la farmacia. Ahora sé que sí me estaba haciendo daño.", "I used to think it wasn't a big deal because you buy it at the pharmacy. Now I know it was hurting me."],
     5: ["No, no oigo voces.", "No, I don't hear voices."]
    },
    key: [3, 4],
    need: ["No hallucinations elicited", "Not responding to internal stimuli", "Delusions no longer held"],
    wrong: {
     "Residual persecutory ideas, less intense": "She has no persecutory ideas. Her earlier belief was a minimizing idea (\"no es para tanto\"), not a delusion, and she has dropped it."
    },
    doc: "No hallucinations elicited; not responding to internal stimuli; no delusions; earlier minimizing belief (\"no es droga\") no longer held",
    why: "Ask the questions and listen. A minimizing belief like \"no es droga, se compra en la farmacia\" is a common cognitive pattern in substance use. It is not psychosis, and it often softens with motivational interviewing."
   },
   negative: {
    obs: "Ward notes: joins groups, does homework in the day room, chats with other patients, showers daily.",
    ans: {
     0: ["Sí, me gustó el grupo de arte.", "Yes, I liked the art group."],
     1: ["Sí, platico con una chava de mi edad.", "Yes, I talk with a girl my age."],
     2: ["Sí, más que antes. Hasta me dieron ganas de estudiar.", "Yes, more than before. I even felt like studying."],
     3: ["Sí, todos los días.", "Yes, every day."]
    },
    need: ["None noted"],
    wrong: {
     Anhedonia: "She enjoys the art group and talks warmly about her aunt and school. Interest is back.",
     "Poor self-care": "She showers and dresses daily."
    },
    doc: "None noted",
    why: "Interest, social contact, motivation, and self-care are all back."
   },
   suicide: {
    ans: {
     0: ["No. Esa noche me asusté y pensé que me moría, y no quería morirme. No fue para hacerme daño.", "No. That night I got scared and thought I was dying, and I didn't want to die. It wasn't to hurt myself."],
     1: ["No, ninguno.", "No, none."],
     2: ["Se lo digo a mi tía y llamo a la clínica o al 988. Ya lo guardé en mi celular.", "I tell my aunt and call the clinic or 988. I already saved it in my phone."]
    },
    key: [0, 2],
    need: [["Denies suicidal ideation, plan, or intent", "None"]],
    doc: "Denies suicidal ideation, plan, or intent; the frightening night was not an attempt (she was afraid of dying); reasons for living (her aunt, school, her work); will tell Tía Norma and call the clinic or 988",
    why: "Ask directly whether the event was an attempt. An unintended frightening event and a suicide attempt need different plans. Write what she said in her own words."
   },
   homicide: {
    ans: {
     0: ["No.", "No."],
     1: ["No, nadie. Con la que estoy enojada es conmigo misma, por haber llegado a esto.", "No, no one. The person I'm angry at is myself, for getting to this point."]
    },
    key: [1],
    need: [["Denies homicidal ideation", "None"]],
    doc: "Denies homicidal ideation; anger directed at herself, no intent or plan toward others",
    why: "Anger at herself is common and tied to shame. Ask about others, then ask what she does with the anger."
   },
   orientation: {
    ans: {
     0: ["Es viernes, a mitad del mes.", "It's Friday, the middle of the month."],
     1: ["En el hospital.", "In the hospital."],
     2: ["Usted es el doctor.", "You are the doctor."]
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
     3: ["El domingo en la noche, hace cinco días.", "Sunday night, five days ago."],
     4: ["Aquí, en esta ciudad. Mis papás son de México.", "Here, in this city. My parents are from Mexico."]
    },
    need: ["Intact immediate, recent, and remote memory"],
    doc: "Intact immediate (3/3), recent (3/3 recall, breakfast, admission date), and remote memory",
    why: "Memory is intact."
   },
   insight: {
    ans: {
     0: ["Porque tomaba esa medicina todos los días y ya no podía parar sola. Una noche me asusté bien feo.", "Because I was taking that medicine every day and couldn't stop on my own anymore. One night I got really scared."],
     1: ["Sí. Aunque se venda en la farmacia, sí era un problema. Antes pensaba que yo debía poder parar sola, pero ya entendí que no es falta de voluntad.", "Yes. Even though it's sold at the pharmacy, it was a problem. Before, I thought I should be able to stop on my own, but I understand now that it's not a lack of willpower."],
     2: ["No tengo medicinas para la casa, pero voy a ir a la clínica y a consejería, aunque me sienta bien. Si trato de hacerlo sola, me va a pasar otra vez.", "I have no medicines to take at home, but I'll go to the clinic and to counseling even if I feel fine. If I try to do it alone, it will happen again."],
     3: ["Que me puedo enfermar otra vez, o asustar como esa noche. Y que si algo me pasa, tengo que llamar al 911.", "That I could get sick again, or get scared like that night. And that if something happens, I have to call 911."]
    },
    key: [1, 2],
    need: ["Good", "Grade 5: intellectual insight"],
    ok: ["Fair", "Grade 6: true emotional insight"],
    wrong: {
     Poor: "She names the problem, the need for follow-up, and what to do in an emergency.",
     "Grade 3: blames others/external factors": "She no longer blames the pharmacy or the exams. She links her use to a problem she can treat."
    },
    doc: "Good (grade 5): accepts the use disorder as a health problem, no longer minimizes it (\"se vende en la farmacia\"), understands that follow-up and counseling prevent relapse",
    why: "Compare with the first interview: \"no es droga\" has become \"sí era un problema\". Her words about willpower matter, because shame often drives hiding and relapse."
   },
   judgment: {
    ans: {
     0: ["Si me da tos o gripa, no compro nada yo sola. Le pregunto a la clínica o a la farmacéutica primero.", "If I get a cough or a cold, I won't buy anything on my own. I ask the clinic or the pharmacist first."],
     1: ["No oigo voces, pero si me dan ganas de volver a tomarla, se lo digo a mi tía y me salgo a caminar.", "I don't hear voices, but if I get the urge to take it again, I tell my aunt and go for a walk."],
     2: ["Me salgo rápido y le aviso a alguien.", "I leave quickly and tell someone."],
     3: ["Digo que no y me voy. Ya le conté a mi mejor amiga y ella me apoya.", "I say no and leave. I already told my best friend and she supports me."]
    },
    key: [0, 3],
    need: ["Intact test judgment", "Intact social judgment"],
    ok: ["Good"],
    doc: "Good: intact test and social judgment; specific plan for colds and coughs (asks the clinic or a pharmacist first) and for stress (tells her aunt, walks); her best friend knows and supports her",
    why: "Her plan for colds and for urges is concrete. Ask again at the outpatient appointment, because the first days at home are a high-risk time."
   },
   sleep: {
    obs: "Sleep chart: 6 to 7 hours most nights, with slow onset on two nights before the discharge plan was discussed.",
    ans: {
     0: ["Mejor. Seis, siete horas.", "Better. Six, seven hours."],
     1: ["A veces me despierto y me cuesta volver a dormirme.", "Sometimes I wake up and have trouble going back to sleep."],
     2: ["Un poco, pero nada fuerte.", "A little, but nothing strong."],
     3: ["No, para nada.", "No, not at all."]
    },
    key: [1],
    need: ["Fair", "Difficulty initiating sleep"],
    ok: ["Frequent awakenings"],
    wrong: {
     Good: "She still has trouble falling and staying asleep on some nights. Fair is the honest rating.",
     "Reduced need for sleep": "She does not feel energetic. She is tired."
    },
    doc: "Fair, 6–7 hours (sleep chart); some difficulty falling asleep and going back to sleep; sleep plan given; no daytime sedation",
    why: "Poor sleep started the problem and can bring it back, especially around finals. Give her the sleep plan in writing and ask about sleep at every visit."
   },
   adverse: {
    obs: "Chart: mild withdrawal-like symptoms at admission (restlessness, achiness, poor sleep), settled by day 3 with supportive care and monitoring. No restraint, no falls, no sedation, no medical illness during the stay.",
    ans: {
     0: ["Nada. Los primeros días me sentía inquieta y adolorida, pero ya no.", "Nothing. The first days I felt restless and sore, but not anymore."],
     1: ["No, solo eso de los primeros días y que casi no dormía.", "No, just that in the first days and that I barely slept."]
    },
    key: [1],
    need: ["Withdrawal symptoms"],
    wrong: {
     None: "The chart records withdrawal-like symptoms on admission. Document them, even though they have settled.",
     Sedation: "She takes no medicine that could sedate her."
    },
    doc: "Mild withdrawal-like symptoms on admission (restlessness, achiness, poor sleep), settled by day 3 with supportive care and monitoring; no sedation, no restraint, no falls",
    why: "Document the symptoms and how they ended. Her memory of how bad it felt can help her stay away from the medicine."
   },
   diagnosis: {
    ans: {
     0: ["¿Entonces sí es un trastorno, como los demás? Me da un poco de alivio saber que se puede tratar.", "So it is a disorder, like the others? It's a bit of a relief to know it can be treated."],
     1: ["Sí, el cuerpo se acostumbra y luego pide más, ¿verdad?", "Yes, the body gets used to it and then asks for more, right?"],
     2: ["Gracias. Yo sentía que era débil, que tenía que poder sola. Quiero que mi tía lo escuche también.", "Thank you. I felt I was weak, that I should be able to do it alone. I want my aunt to hear this too."]
    },
    need: ["Other comorbid: ___"],
    wrong: {
     "Methamphetamine-induced psychotic disorder, with ___ use disorder": "This case involves over-the-counter cough and cold medicine, not methamphetamine. No psychosis was found."
    },
    doc: "Other (or unknown) substance use disorder, moderate (over-the-counter cough and cold medicine), began for sleep during exam stress; became daily, with missed classes and hidden boxes; one frightening night with a racing heart (normal ECG and labs), not an attempt; no discharge medicines",
    why: "The form has no pick for this use disorder, so write it under “Other comorbid”. In plain words: it is a health problem, it can be treated, and it is not a weakness or a punishment. With her agreement, tell Tía Norma too."
   },
   medications: {
    ans: {
     0: ["Sí. No hay ninguna medicina para la casa, ¿verdad?", "Yes. There is no medicine for home, right?"],
     2: ["No tengo medicina que tomar. No voy a comprar medicinas sin receta yo sola. Si tengo tos o gripa, primero le pregunto a la clínica o a la farmacéutica. Mi tía guarda las medicinas de la casa bajo llave.", "I have no medicine to take. I won't buy over-the-counter medicines on my own. If I have a cough or a cold, I ask the clinic or the pharmacist first. My aunt keeps the household medicines locked up."],
     3: ["No hay medicina que conseguir ahorita. Revisé con mi tía la fecha y el lugar de la cita.", "There's no medicine to get right now. I checked the date and place of the appointment with my aunt."],
     4: ["Sí. Aunque me sienta bien, no voy a dejar de ir a la clínica.", "Yes. Even if I feel fine, I won't stop going to the clinic."]
    },
    key: [2],
    need: ["Family supervises medication", "Teach-back done, correct"],
    wrong: {
     "Teach-back incorrect, re-taught": "Her teach-back was correct: no medicine to take, no over-the-counter medicines bought alone, ask first, and her aunt keeps the medicines locked up.",
     "Olanzapine ___ mg tab, 1 tab at bedtime": "No antipsychotic was ordered. She has no psychosis, and she goes home with no medicines."
    },
    doc: "No discharge medicines; no medicine was started for the use disorder; teach-back correct (no medicine to take; will not buy over-the-counter medicines alone; will ask the clinic or a pharmacist first); with her agreement, Tía Norma keeps the household medicines locked away and has cleared the boxes from her room; emergency steps taught to patient and aunt (call 911, turn her on her side, stay with her, show the paramedics the box)",
    why: "Teach-back covers what to do and what not to do. Locked medicines and emergency teaching matter as much as any prescription. With no drug to write, the plan goes in the documentation line."
   },
   aftercare: {
    ans: {
     0: ["Sí. En tres días, el lunes a las dos. Mi tía va a venir conmigo.", "Yes. In three days, Monday at two. My aunt is coming with me."],
     1: ["Yo. Aquí también me enseñaron qué hacer en una emergencia. Guardé las medicinas de la casa en un lugar con llave y ya saqué las cajas del cuarto de Karla.", "Me. They also taught me here what to do in an emergency. I put the household medicines in a place that locks, and I already took the boxes out of Karla's room.", "Tía Norma (aunt)"],
     2: ["Sí. Si me dan ganas muy fuertes, si dejo de dormir, o si pienso en hacerme daño, llamo a la clínica o al 988.", "Yes. If the urges come back very strong, if I stop sleeping, or if I think of hurting myself, I call the clinic or 988."],
     3: ["Ya lo guardé en mi celular.", "I already saved it in my phone."]
    },
    key: [1],
    need: ["Referred to ___", "Follow-up appointment date and clinic given in writing", "Family oriented on warning signs"],
    ok: ["Safety plan made with patient and family"],
    wrong: {
     "Outpatient follow-up in 1–2 weeks": "Too long. Her appointment is in 3 days, because the first days after discharge are a high-risk time.",
     "Discharge deferred: ___": "She meets the criteria for discharge today, with a booked appointment, the medicines locked away, and her aunt taught what to do."
    },
    doc: "Outpatient appointment Monday 2 p.m. (3 days), date and place given in writing; no discharge medicines; with her agreement, household medicines locked away by Tía Norma and boxes cleared from her room; patient and aunt oriented on relapse warning signs and on what to do if someone cannot be woken (call 911, turn on the side, stay, show the paramedics the box); referred to the college counseling center (visit booked Wednesday); 988 card given (oprima 2 for Spanish)",
    why: "The first days after discharge are a high-risk time for relapse. Book the appointment soon and make sure the family knows what to do. Teach Tía Norma in Spanish, with a qualified interpreter if your Spanish is not enough."
   }
  }
 }
]);
