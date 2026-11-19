/* Discharge practice case: Doña Carmen (id dona-carmen). Dementia with night wandering.
   STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Hablemos (Spanish). Appends to window.PSYCH_DISCHARGE_CASES. Same shape as psych-discharge-cases.js:
   { id, title, level, dx, decision: { discharge, why }, setting, chart: [..], fields: { <field id>: { obs?, ans: { qIdx: [es, en, speaker?] }, key?, need, ok?, wrong?, doc, why, quote? } } }.
   Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish text. Family answers carry a third element naming the speaker.
   The family is from Jalisco ("mi amá" = my mom). Fictional patients; doses are teaching examples only. Crisis line is 988 (oprima 2 for Spanish). */
window.PSYCH_DISCHARGE_CASES = (window.PSYCH_DISCHARGE_CASES || []).concat([
 {
  id: "dona-carmen",
  title: "Calmer nights, a plan the family can manage",
  level: "B1",
  dx: "Major neurocognitive disorder due to Alzheimer's disease, moderate, with behavioral disturbance",
  decision: { discharge: true, why: "Discharge today, home with Rubén and Paty. The aim of this admission was never to remove the dementia or the theft belief. It was that she is safe at night, less distressed, and that the family can manage. She now sleeps 6 to 7 hours, has not wandered on the unit since week 2, and is calmer with Paty. The belief is still there but upsets her much less. Home is ready: a door alarm, a night routine, an ID card with her name and the family's number in her bag, an adult day program three days a week, a spare purse, and respite and support for Paty as her carer. Risperidone was started only after Rubén was told the risks and agreed, at the lowest dose, and it will be reviewed in 2 weeks with the aim of stopping it. Keeping her longer would not change the belief, and an unfamiliar place can itself unsettle a person with dementia." },
  setting: "Unit, morning of planned discharge (day 22). Doña Carmen, 81, retired seamstress, widowed, born in Jalisco. Lives with her son Rubén, 55, and his wife Paty, 52, her main carer. Both have come to take her home and join part of the interview.",
  chart: [
   "Admitted 22 days ago, brought in the evening by Rubén and Paty. Forgetfulness for about four years; Alzheimer's disease diagnosed by a neurologist two years ago; donepezil 5 mg every morning. For two months: said Paty steals her purse and money, got up at night packing a bag to go to \"la casa de mi mamá\" in Jalisco, worse in the late afternoon and evening. Left the house alone at 3 a.m. three nights before admission (a neighbor found her two blocks away) and pushed Paty the next night when stopped at the door (no injury). Delirium judged unlikely in the emergency department (no fever, urine and blood tests normal, no new medicines, no acute change in attention, gradual course).",
   "Admission MSE: restless; friendly to the doctor, cold and suspicious toward Paty; word-finding pauses and confabulation (said she had to sew an order for the shop the next day); circumstantial; persecutory delusion of theft; no hallucinations; denied suicidal and homicidal ideation and denied the push; oriented to person only (thought she was at the sewing shop); recent memory poor, remote memory relatively kept; insight poor (grade 1: denied illness); judgment impaired.",
   "Course: a regular day routine with daytime activity, light in the evening, a clock and calendar in her room, the same nurses where possible; donepezil continued. Day 4: after Rubén was told the risks (higher risk of stroke, falls and death in older people with dementia) and agreed, risperidone 0.5 mg at night for night agitation and distress from the theft belief. Theft belief persists but she is less upset by it and calmer with Paty. No wandering on the unit since week 2. Sleep chart 6 to 7 hours. One near fall on day 9, no injury. No restraint.",
   "Plan: home with Rubén and Paty. Donepezil 5 mg every morning; risperidone 0.5 mg at night, to be reviewed at the outpatient visit in 2 weeks with the aim of reducing and stopping it; Paty gives the medicines. Adult day program three days a week, arranged with the hospital social worker. Door alarm at home and a regular night routine; ID card with her name and the family's number in her bag. Family taught not to argue about the purse but to help look for it, and to keep a spare purse. A short respite stay discussed for later; support for Paty as a carer, including a Spanish-language support group. The 988 card (oprima 2 for Spanish)."
  ],
  fields: {
   behavior: {
    obs: "In her own clothes, cardigan buttoned correctly today (a nurse helped her). Hair combed. Calm and smiling. She pats your hand and talks to you in a warm, motherly way. Good eye contact. Sits through the interview. Asks twice whether she is going home today and is pleased each time. Greets Paty warmly when she comes in.",
    ans: {
     0: ["Bien, mijo. Ya me puedo ir a mi casa hoy, ¿verdad? Qué bueno.", "Fine, mijo. I can go home today, can't I? How nice."],
     1: ["Claro que sí. Me da gusto platicar con usted, doctor.", "Of course. I like talking with you, doctor."]
    },
    need: ["Calm", "Cooperative", "Good eye contact", ["Well groomed", "Fairly groomed"]],
    wrong: {
     Restless: "On admission she got up for the door twice. Today she sits through the interview.",
     Irritable: "She mentions the purse calmly today and greets Paty warmly.",
     Overfamiliar: "A warm, motherly tone with a younger doctor (“mijo”) is how many older Mexican women talk to younger people. It is not disinhibition."
    },
    doc: "Calm, cooperative, good eye contact, well groomed with help (a nurse helped with buttons); warm, motherly tone with the doctor; warm toward her daughter-in-law",
    why: "Compare with admission: restless, cardigan misbuttoned, cold toward Paty then; calm and warm toward her now. Write down that she needs help with dressing: it goes into the plan for home."
   },
   mood: {
    obs: "Smiles often. Lights up when going home is mentioned. Mentions the purse with a small shrug, not anger.",
    ans: {
     0: ["Muy bien. Hacemos ejercicio en la mañana y en la tarde cantamos.", "Very well. We do exercises in the morning and in the afternoon we sing."],
     1: ["Contenta. Porque ya me voy a mi casa. ...Lo de mi monedero, bueno, ya ni modo. Paty me ayuda a buscarlo.", "Happy. Because I'm going home. ...About my purse, well, never mind. Paty helps me look for it."],
     2: ["Un ocho, diría yo.", "An eight, I'd say."]
    },
    quote: "Contenta. Porque ya me voy a mi casa. (Happy. Because I'm going home.)",
    need: ["Euthymic mood", "Congruent affect", "Full range affect"],
    wrong: {
     "Irritable mood": "On admission she was irritable whenever the purse came up. Today she mentions it with a shrug.",
     "Mildly elevated mood": "Being pleased about going home is a fitting reaction, not elevated mood.",
     "Labile affect": "Her feelings are steady through the interview."
    },
    doc: "“Contenta. Porque ya me voy a mi casa.” (Happy. Because I'm going home.) Mood 8/10. Euthymic mood; congruent, full range affect; calm when the purse is mentioned",
    why: "Quote her words. The change that matters is how she reacts to the purse: anger on admission, a shrug today. That is the distress the treatment aimed at."
   },
   process: {
    obs: "Drifts into a story about sewing for her customers, then comes back to going home. Stops herself once: remembers she has retired.",
    ans: {
     0: ["¿Ingresada? ...Vine a descansar tantito, porque en la noche no podía dormir, ¿sabe? Aquí hacemos ejercicio todas las mañanas. Yo antes cosía para toda la colonia, vestidos de novia y de quinceañera... Y entonces, hoy me voy a mi casa, ¿verdad?", "Admitted? ...I came to rest a little, because I couldn't sleep at night, you see. Here we do exercises every morning. I used to sew for the whole neighborhood, wedding dresses and quinceañera dresses... And so, I'm going home today, aren't I?"],
     1: ["¿En mi casa? Pues me levanto a coser... ay, ya me jubilé, ¿verdad? Me voy a tomar mi cafecito con Paty y a descansar.", "At home? Well, I get up to sew... oh, I've retired, haven't I? I'll have my coffee with Paty and take it easy."]
    },
    need: ["Some circumstantiality"],
    ok: ["Goal-directed", "Coherent and relevant"],
    wrong: {
     "Some tangentiality": "She drifts into her sewing years but comes back to going home on her own.",
     "Loose associations": "Each idea follows from the one before.",
     "Thought blocking": "Her pauses are a search for a word or a memory, not a sudden stop."
    },
    doc: "Some circumstantiality (detours into her sewing years, returns to the point); account of the admission vague (\"vine a descansar tantito\"); corrects herself once about being retired",
    why: "Her story of the admission is vague because recent memory is poor, not because she is hiding anything. Get the history from the chart and the family. She corrects herself about being retired: that small change is worth noting."
   },
   positive: {
    obs: "Attends to you and to Paty. Does not look around as if hearing or seeing something.",
    ans: {
     0: ["No.", "No."],
     1: ["No.", "No."],
     2: ["No, no veo nada.", "No, I don't see anything."],
     3: ["Nadie me hace nada malo. ...Nada más que de repente se me pierde el monedero. Alguien se lo lleva, ¿no?", "Nobody does anything bad to me. ...It's only that my purse suddenly goes missing. Someone takes it, don't they?"],
     4: ["¿Que Paty me agarra el monedero? ...Pues a veces todavía lo pienso. Pero ella me ayuda a buscarlo y ya no me enojo.", "That Paty takes my purse? ...Well, sometimes I still think so. But she helps me look for it and I don't get angry anymore."],
     5: ["¿Voces? No, nunca he oído nada de eso.", "Voices? No, I've never heard anything like that."]
    },
    key: [3, 4],
    need: ["No hallucinations elicited", "Not responding to internal stimuli", ["Delusions persist", "Residual persecutory ideas, less intense"]],
    wrong: {
     "Delusions no longer held": "She still thinks someone, sometimes Paty, takes her purse. What changed is how upset she is by it.",
     "Responding to internal stimuli": "She attends to you and to Paty."
    },
    doc: "No hallucinations elicited; not responding to internal stimuli. Delusion of theft persists (\"a veces todavía lo pienso\") but with much less distress; no longer angry with Paty (\"ya no me enojo\")",
    why: "Name the belief from admission when you re-ask, as here. Document honestly that it persists. The goal in dementia is less distress and safer behavior, not that the belief disappears."
   },
   negative: {
    obs: "Unit notes: joins the morning exercises and the singing group every day; chats with the woman in the next bed. Needs prompting and some help with bathing and dressing.",
    ans: {
     0: ["Sí, me gustan. El ejercicio de la mañana y cuando cantamos.", "Yes, I like them. The morning exercise and when we sing."],
     1: ["Sí, con la señora de al lado. ...Aunque se me olvidó cómo se llama.", "Yes, with the lady next to me. ...Though I've forgotten her name."],
     2: ["Sí, tengo ganas.", "Yes, I feel like it."],
     3: ["Las enfermeras me ayudan y yo me arreglo bonito.", "The nurses help me and I make myself look nice."]
    },
    need: ["None noted"],
    wrong: {
     "Poor self-care": "She needs prompts and help with bathing and dressing because of the dementia, not from lack of motivation. Write the help she needs into the plan for home.",
     Asociality: "She joins groups every day and chats with the woman next to her.",
     Avolition: "She takes part in the daily activities."
    },
    doc: "None noted; joins daily exercise and singing groups, chats with another patient; needs prompting and help with bathing and dressing (dementia)",
    why: "Daytime activity was part of the treatment: it helps her sleep at night. Help with self-care in dementia is a care need, not a negative symptom. Paty needs to know how much help to give."
   },
   suicide: {
    ans: {
     0: ["No, yo no pienso esas cosas. Dios me libre.", "No, I don't think such things. God forbid."],
     1: ["No.", "No."],
     2: ["A ver... le diría a Paty.", "Let me see... I'd tell Paty."]
    },
    key: [0],
    need: [["Denies suicidal ideation, plan, or intent", "None"]],
    doc: "Denies suicidal ideation, plan, or intent; would tell Paty; family taught to watch for any change in mood",
    why: "Ask directly, in simple words, as you did on admission. Older adults are at real risk of suicide, so a dementia diagnosis is no reason to skip the question."
   },
   homicide: {
    ans: {
     0: ["¡Ay, Dios mío, no!", "Oh my God, no!"],
     1: ["No. Ya tampoco estoy enojada con Paty.", "No. I'm not angry with Paty anymore either."]
    },
    key: [1],
    need: [["Denies homicidal ideation", "None"]],
    doc: "Denies homicidal ideation; no longer angry with Paty; no pushing or aggression on the unit. Before admission she pushed Paty when stopped from going out (no injury)",
    why: "Ask about the person who was the target of her belief. The push came from being stopped, not from a wish to harm. The home plan (door alarm, not blocking her bodily, calm redirection) is how you lower that risk."
   },
   orientation: {
    ans: {
     0: ["¿Hoy? A ver... ¿qué mes era? Si veo el calendario, sí me acuerdo.", "Today? Let's see... what month was it? If I look at the calendar I'll remember."],
     1: ["Es un hospital, ¿no? Hay enfermeras. ...Cuál hospital, no sé bien.", "It's a hospital, isn't it? There are nurses. ...Which hospital, I'm not sure."],
     2: ["Usted es el doctor.", "You are the doctor."]
    },
    need: ["Disoriented to time"],
    ok: ["Disoriented to place"],
    wrong: {
     "Oriented to time, place, and person (×3)": "She cannot give the month or the day, and she does not know which hospital.",
     "Disoriented to person": "She knows who she is and that you are her doctor."
    },
    doc: "Disoriented to time (cannot give month, date or day; knows the calendar would tell her); partly oriented to place (knows it is a hospital, not which one; thought she was at the sewing shop on admission); oriented to person",
    why: "Orientation is still impaired, and the note should say so. A discharge MSE in dementia is not “normal”. Two things improved: she now knows she is in a hospital, and she reaches for the calendar. Clocks and calendars helped on the unit. Put them at home too."
   },
   memory: {
    ans: {
     0: ["Pelota, árbol, llave.", "Ball, tree, key."],
     1: ["Pelota y... ¿cuáles eran las otras?", "Ball and... what were the others?"],
     2: ["¿El desayuno? Todavía no he desayunado, ¿verdad?", "Breakfast? I haven't had breakfast yet, have I?"],
     3: ["Ayer... creo. ¿O fue la semana pasada?", "Yesterday... I think. Or was it last week?"],
     4: ["En Jalisco, en un ranchito. Mi mamá hacía las tortillas a mano.", "In Jalisco, on a little ranch. My mom made tortillas by hand."]
    },
    need: ["Impaired recent memory"],
    wrong: {
     "Intact immediate, recent, and remote memory": "She recalls only one word after a delay, does not remember breakfast, and does not know when she was admitted.",
     "Impaired immediate memory": "She repeats all three words at once.",
     "Impaired remote memory": "She gives her birthplace and talks in detail about her childhood and her sewing years. Remote memory is relatively preserved."
    },
    doc: "Immediate memory intact (3/3); recent memory impaired (1/3 recall, does not recall breakfast, which she ate per nursing notes, or the admission date, 22 days ago); remote memory relatively preserved (Jalisco, her mother's tortillas, sewing years)",
    why: "Same pattern as on admission: recent memory poor, remote memory relatively kept. Check her answers against the nursing notes and the family. Because she forgets, the plan relies on the family, the card in her bag and the door alarm, not on what she remembers today."
   },
   insight: {
    ans: {
     0: ["Estaba cansada, creo. No podía dormir en la noche.", "I was tired, I think. I couldn't sleep at night."],
     1: ["¿Una enfermedad? Estoy un poquito olvidadiza, pero es la edad.", "An illness? I'm a little forgetful, but that's age."],
     2: ["Paty me las da, y yo me las tomo. Si usted lo dice, doctor.", "Paty gives them to me and I take them. If you say so, doctor."],
     3: ["Pues... no sabría decirle.", "Well... I couldn't say."]
    },
    key: [1, 2],
    need: ["Poor", ["Grade 2: slight awareness", "Grade 1: complete denial"]],
    wrong: {
     Good: "She does not see an illness and puts her forgetfulness down to age.",
     Fair: "She takes medicine because Paty gives it and the doctor says so, not because she sees a need.",
     "Grade 3: blames others/external factors": "Grade 3 needs her to accept an illness and blame it on something outside her. She admits forgetfulness and poor sleep but not an illness: that is slight awareness at most.",
     "Grade 5: intellectual insight": "She cannot explain the illness or why she needs treatment."
    },
    doc: "Poor (grade 2): admits some forgetfulness and poor sleep but not an illness; puts forgetfulness down to age (\"es la edad\") and the admission down to tiredness; no longer blames Paty; will take medicines because Paty gives them and the doctor advises it",
    why: "Insight is still poor, which is expected in moderate dementia. It is part of the illness. Compared with admission (grade 1), she now admits some forgetfulness and poor sleep, and she no longer blames Paty for the admission, a real change for the family. The plan cannot rest on her insight, so it rests on Paty giving the medicines."
   },
   judgment: {
    ans: {
     0: ["Yo me encargo de las medicinas. Las recogemos en la farmacia de siempre antes de que se acaben.", "I take care of the medicines. We pick them up at our usual pharmacy before they run out.", "Paty (daughter-in-law)"],
     1: ["¿Voces? Yo nunca he oído eso.", "Voices? I've never heard anything like that."],
     2: ["¿Humo? Ay, Dios... ¿qué hago? Le hablaría a Paty.", "Smoke? Oh my... what do I do? I'd call Paty."],
     3: ["¿Alcohol? Yo no tomo. ¿Y el cristal? ¡Dios me libre!", "Alcohol? I don't drink. And crystal meth? God forbid!"]
    },
    key: [0, 2],
    need: ["Poor", "Impaired social judgment"],
    wrong: {
     "Intact test judgment": "Faced with smoke in a crowded cinema, her only plan is to call for Paty: she does not think of leaving or telling the staff.",
     "Intact social judgment": "She cannot manage her own medicines or safety at home. The family plan exists because of that.",
     Good: "Her own judgment about safety is still impaired.",
     Fair: "She has no safe plan for danger and depends on others for medicines and safety."
    },
    doc: "Poor: impaired test judgment (smoke in a cinema: would only call for her daughter-in-law, no plan to leave or tell staff); impaired social judgment (cannot manage her own medicines or safety); Paty manages the medicines and the home safety plan",
    why: "Her judgment has not changed, and it will not with treatment. The plan makes up for it. She cannot fully weigh decisions about her care, so they are made with her and her family. Follow state law and your hospital's policy."
   },
   sleep: {
    obs: "Sleep chart: 6 to 7 hours a night since the second week. No wandering on the unit since week 2. Active in the day groups.",
    ans: {
     0: ["Duermo bien.", "I sleep well."],
     1: ["A veces me despierto, pero luego me vuelvo a dormir.", "Sometimes I wake up, but then I go back to sleep."],
     2: ["No tengo sueño. De día ando muy ocupada con el ejercicio y las canciones.", "I'm not sleepy. In the daytime I'm very busy with exercise and songs."],
     3: ["No. En la noche sí me da sueño de verdad.", "No. At night I really do get sleepy."]
    },
    need: ["Good"],
    ok: ["Fair"],
    wrong: {
     "7–8 hours, uninterrupted": "The chart shows 6 to 7 hours, and she wakes now and then.",
     "Daytime sedation": "She is active in the day groups and not sleepy. Keep checking, because sleepiness would raise her risk of falls.",
     "Frequent awakenings": "She wakes only now and then and settles quickly. No wandering since week 2.",
     "Reduced need for sleep": "She gets sleepy at night as expected."
    },
    doc: "Good, 6–7 hours (sleep chart); occasional brief waking, settles quickly; no night wandering since week 2; no daytime sedation",
    why: "Night sleep was the main target. The day routine, daytime activity and evening light helped as much as the medicine. Tell the family to keep the same routine at home."
   },
   adverse: {
    obs: "Chart: one near fall on day 9, no injury; a nurse steadied her. No tremor, stiffness or abnormal movements on examination. No restraint. No medical illness during the stay.",
    ans: {
     0: ["No, nada me molesta.", "No, nothing bothers me."],
     1: ["¿Lastimada? No, no me he lastimado.", "Hurt? No, I haven't been hurt."]
    },
    key: [1],
    need: ["Fall or injury"],
    wrong: {
     None: "She did not fall and was not hurt, but a near fall is a safety event worth recording. Falls are a known risk of antipsychotics in older people with dementia, and they shape the plan at home.",
     "Extrapyramidal symptoms": "No tremor, stiffness or abnormal movements on examination.",
     Sedation: "She is active in the day and not sleepy.",
     "Agitation requiring restraint": "No restraint was used."
    },
    doc: "Fall or injury: near fall on day 9 (steadied by a nurse; she did not fall and was not hurt); no extrapyramidal symptoms, no sedation; no restraint; no medical illness",
    why: "The form has no pick for a near fall. “Fall or injury” is the closest. Pick it and write exactly what happened, that she did not fall and was not hurt. She does not remember it, so read the chart. Record it beside the medicine started on day 4: it is one reason the risperidone is to be reviewed soon, and the family should know to watch for unsteadiness."
   },
   diagnosis: {
    ans: {
     0: ["¿Una enfermedad? ¿Yo? ...Bueno, si usted lo dice, doctor.", "An illness? Me? ...Well, if you say so, doctor."],
     1: ["Sí. Que mi amá le diga ladrona a Paty también es la enfermedad, ¿verdad? Saber que no lo dice de mala gana lo hace un poco más fácil.", "Yes. My mom calling Paty a thief is the illness too, isn't it? Knowing she doesn't mean it makes it a little easier.", "Rubén (son)"],
     2: ["Gracias. Yo me la pasaba pensando que era porque no la cuidaba bien.", "Thank you. I kept thinking it was because I wasn't caring for her properly.", "Paty (daughter-in-law)"]
    },
    need: ["Other comorbid: ___"],
    wrong: {
     "Schizophrenia, first episode, currently in acute episode": "The theft belief began late in life, within known Alzheimer's disease, with memory loss and disorientation. It is part of the dementia.",
     "Major depressive disorder, recurrent": "No depressive episode was found on admission or during the stay."
    },
    doc: "Major neurocognitive disorder due to Alzheimer's disease, moderate, with behavioral disturbance (delusion of theft, night wandering, late-afternoon and evening agitation); delirium judged unlikely in the emergency department and not seen on the unit",
    why: "The form has no pick for dementia, so write it under “Other comorbid”. When you say “tiene tratamiento”, be honest: the dementia will not go away, but the night agitation and the distress can be treated, and the family can be helped. Telling Paty it is not her fault matters as much as the diagnosis."
   },
   medications: {
    ans: {
     0: ["Sí. La de la mañana y la de la noche.", "Yes. The morning one and the night one.", "Paty (daughter-in-law)"],
     2: ["En la mañana, la pastilla para la memoria de siempre. En la noche, antes de dormir, la nueva. Yo se las doy y me fijo que se las tome. La de la noche la van a revisar en la clínica en dos semanas, y la idea es bajarla y quitarla, ¿verdad? Si la veo desequilibrada, muy dormida o tiesa, llamo.", "In the morning, the memory pill she has always taken. At night before bed, the new one. I give them to her and make sure she takes them. The night one will be reviewed at the clinic in two weeks, and the idea is to lower it and stop it, right? If I see her unsteady, very sleepy or stiff, I call.", "Paty (daughter-in-law)"],
     3: ["Las recogemos en la farmacia de siempre. Sí podemos pagarlas.", "We pick them up at our usual pharmacy. Yes, we can pay for them.", "Rubén (son)"],
     4: ["Sí. Pero la de la noche la vamos a bajar juntos con usted, ¿verdad?", "Yes. But we'll lower the night one together with you, right?", "Paty (daughter-in-law)"]
    },
    key: [2],
    need: ["Risperidone ___ mg tab, ___", "Family supervises medication", "Teach-back done, correct"],
    wrong: {
     "Olanzapine ___ mg tab, 1 tab at bedtime": "Not prescribed. She goes home on risperidone at the lowest dose.",
     "Quetiapine ___ mg tab, ___": "Not prescribed.",
     "Teach-back incorrect, re-taught": "Paty's teach-back was correct, including the review date and the side effects to report."
    },
    doc: "Donepezil 5 mg tab every morning (continued; no pick on the form). Risperidone 0.5 mg tab at night, started day 4 for night agitation and distress from the theft belief after Rubén was told the risks (higher risk of stroke, falls and death in older people with dementia) and agreed; to be reviewed at the outpatient visit in 2 weeks with the aim of reducing and stopping it. Paty gives all medicines and checks they are taken; teach-back by Paty correct, including side effects to report (unsteadiness, marked sleepiness, stiffness)",
    why: "Antipsychotics in dementia are used briefly, at the lowest dose, with the family informed, and reviewed. Write the risks you explained, who agreed, and the review date. The usual “no deje de tomar el medicamento” needs a twist here: the family should not stop it alone, but the plan is to stop it with the doctor."
   },
   aftercare: {
    ans: {
     0: ["En dos semanas. Yo también voy con ella.", "In two weeks. I'm going with her too.", "Rubén (son)"],
     1: ["Yo. Y con la trabajadora social arreglamos un programa de día para adultos mayores, tres días a la semana. Pusimos una alarma en la puerta de enfrente y una tarjeta con su nombre y nuestro teléfono en su bolsa. No vamos a discutir por el monedero: lo buscamos juntas. Ya tengo otro monedero de repuesto.", "Me. And with the social worker we arranged an adult day program, three days a week. We put an alarm on the front door and a card with her name and our phone number in her bag. We won't argue about the purse: we'll look for it together. I already have a spare purse.", "Paty (daughter-in-law)"],
     2: ["Sí. Si de repente se ve aturdida, le da fiebre o no es ella misma, llamo de inmediato. Si se sale sola otra vez de noche, primero la busco por la cuadra, y si no la encuentro pronto, llamo al 911.", "Yes. If she suddenly seems dazed, gets a fever, or isn't herself, I call right away. If she goes out alone at night again, I search nearby first, and if I can't find her quickly, I call 911.", "Paty (daughter-in-law)"],
     3: ["Gracias. Yo me encargo de que Paty no cargue esto sola.", "Thank you. I'll make sure Paty doesn't carry this alone.", "Rubén (son)"]
    },
    key: [1, 2],
    need: ["Outpatient follow-up in 1–2 weeks", "Family oriented on warning signs", "Referred to ___"],
    ok: ["Follow-up appointment date and clinic given in writing", "Safety plan made with patient and family"],
    wrong: {
     "Discharge deferred: ___": "She sleeps, has not wandered since week 2, is calmer with Paty, and the home plan is in place.",
     "Transferred to ___ unit due to ___": "She goes home with her family."
    },
    doc: "Outpatient visit in 2 weeks (risperidone review), Rubén to attend; adult day program three days a week arranged with the hospital social worker; door alarm at home and a regular night routine; card with her name and the family's number in her bag; family taught not to argue about the purse but to help look for it, spare purse kept; family oriented on warning signs (sudden confusion, fever, change from her usual self, which could mean delirium; unsteadiness or sleepiness; if she goes out alone at night, search nearby, then call 911); short respite stay discussed for later; support for Paty as carer, including a Spanish-language carer support group; 988 card given (oprima 2 for Spanish)",
    why: "The plan is for the home, not only the clinic. A night routine, a door alarm, a day program and respite make it possible for a tired family to keep her safe. Name the warning signs of delirium so the family calls early. Check on Paty at every visit, because the carer's health is part of the treatment."
   }
  }
 }
]);
