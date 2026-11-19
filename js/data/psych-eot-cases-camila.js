/* End-of-treatment (planned review) practice case: Camila (school refusal, outpatient child and adolescent clinic). Appends to window.PSYCH_EOT_CASES.
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Field names stay `tl`, `f`, `c` for engine compatibility elsewhere; here patient answers are Spanish first, English second, and an optional third element names the speaker when it is not the patient (her mother, Verónica).
   The app's questions are written in usted; Camila's answers are a teenager's (short, a few English words such as "presentation" and "group chat", glossed in the English).
   Decision in this case: continue sessions (end: false). Fictional patient. No method content.
   Shape: { id, title, level, dx, decision: { end, why }, speaker, setting, chart: [lines], fields: { <9 PSYCH_EOT field ids>: { obs?, ans: { qIdx: [es, en, speaker?] }, key?, need, ok?, wrong?, doc, why, quote? } } } */
window.PSYCH_EOT_CASES = (window.PSYCH_EOT_CASES || []).concat([
  {
    "id": "camila",
    "title": "Camila at her planned review",
    "level": "B1",
    "dx": "School refusal, improved: back at school three days a week; fear of speaking in front of the class and of others' judgment remains (social anxiety features; assess whether they meet criteria); the earlier passive wish not to wake up has not returned",
    "decision": {
      "end": false,
      "why": "Not yet: continue sessions every two weeks for about two months, then review again. She has improved: self-rating 8/10 at the start and 4/10 now, full days in class three days a week, stomachaches rare, in bed by ten thirty, and her mother has stopped yelling. The wish \"ojalá no despertara\" has not come back for about six weeks (asked again today; she denies a wish to die, a plan or self-harm). But the main goals are not met: she still avoids the class presentation, she stays home two days a week, and she says herself that ending now makes her nervous. The next sessions focus on speaking in class and fear of others' judgment, starting with the small-group presentation her teacher agreed to, with the school counselor liaison continuing with her consent. A 504 plan can be raised with the school if supports are needed. A review can decide to continue; say so as a plan, not a failure."
    },
    "speaker": "Camila",
    "setting": "Child and adolescent outpatient clinic, planned review after 8 sessions over about three months. Camila, 14, in ninth grade, comes with her mother, Verónica, who speaks mostly Spanish. Her mother is in the room for the first part (treatment course, change in symptoms). You then see Camila alone for the review MSE and daily life (mood, safety, insight, functioning). Her mother comes back for the last part (warning signs, medicines, plan). You speak tú to Camila and usted to Verónica. You saw Camila at the first visit and through the treatment under supervision. As at the first visit, before seeing her alone you remind her that what she says stays between you unless she agrees, except when someone is in danger.",
    "chart": [
      "First visit: school refusal for two months after freezing during a science class presentation and being mocked by two classmates in a group chat; stomachaches on school mornings; passive wish \"ojalá no despertara\" once, with no plan or intent. Social anxiety disorder to be assessed (provisional). First-visit MSE: anxious mood, linear thought process, no psychosis, insight fair (grade 3), judgment fair.",
      "Plan agreed with Camila and her mother: outpatient sessions with a step-by-step cognitive behavioral approach, 8 sessions over about three months, seen alone and with her mother: a regular wake-up time, small steps back to school, talking with the school counselor with her consent, and support for her mother without blame. No medicine.",
      "Safety: the passive wish was reviewed at every visit and has not come back. A safety plan with 988 (oprima el 2 para español) and 911 was given and is in her phone and on the fridge at home.",
      "Today: the planned review. Review the course, safety and daily life, and decide whether regular sessions can end. Her science teacher has agreed that she may first give her presentation to a small group."
    ],
    "fields": {
      "course": {
        "ans": {
          "0": ["Vine a todas, las ocho.", "I came to all eight.", "Camila"],
          "1": ["Casi siempre las hice. Hubo unas semanas que no.", "I did them most of the time. There were a few weeks I didn't.", "Camila"],
          "2": ["Ir poco a poco. Y poder hablar aquí.", "Going little by little. And being able to talk here.", "Camila"],
          "3": ["Para mí, al principio lo difícil fue no obligarla ni gritarle. Me daban ganas de decirle algo.", "For me, at first, the hard part was not forcing her or yelling at her. I kept wanting to say something.", "Verónica (mother)"]
        },
        "key": [0, 1],
        "need": ["Attended all planned sessions", "Practised between sessions most weeks", "Family took part in ___ session(s)"],
        "ok": ["Practised between sessions some weeks"],
        "wrong": {
          "Missed several sessions": "She came to all eight sessions.",
          "Rarely practised between sessions": "She says she mostly did the practice, missing only a few weeks."
        },
        "doc": "Eight outpatient sessions over about three months (step-by-step return to school, regular wake-up time, school counselor with consent); attended all; practised between sessions most weeks; mother took part in three sessions and found it hard at first not to push or yell",
        "why": "Write what was given, how much, and how it was used. With a teenager, family involvement is part of the treatment: her mother learning to stop yelling is one of the changes, and her answer about what was hard tells you she has understood why."
      },
      "change": {
        "ans": {
          "0": ["No poder ir a la escuela, y que me dolía la panza. Ahora la panza solo me duele de vez en cuando.", "Not being able to go to school, and my stomach hurting. Now my stomach only hurts once in a while.", "Camila"],
          "1": ["Al principio, un ocho. Ahora como un cuatro.", "At first, an eight. Now about a four.", "Camila"],
          "2": ["En la mañana me levanto sola y puedo ir a la escuela tres días a la semana.", "In the morning I get up by myself and can go to school three days a week.", "Camila"],
          "3": ["Hacer la presentation todavía me da mucho miedo. Mi maestra dijo que puedo hacerla con un grupito chiquito, pero todavía no me animo.", "Giving the presentation still scares me a lot. My teacher said I can do it with a small group, but I'm not ready yet.", "Camila"]
        },
        "key": [1, 3],
        "need": ["Improved", "Self-rated ___/10 at start, ___/10 now", "Residual symptoms: ___"],
        "wrong": {
          "Much improved": "She is better, but she rates 4/10 now and the fear of speaking in class, the core of the problem, is still strong, and she is at school only three days a week. Much improved would hide the goals that are not yet met.",
          "Minimally improved": "She went from 8/10 to 4/10, is in class three full days a week, and the stomachaches are rare: that is more than minimal.",
          "Unchanged": "She rates 8/10 at the start and 4/10 now.",
          "Worse": "She rates 8/10 at the start and 4/10 now."
        },
        "doc": "Improved: self-rated 8/10 at start, 4/10 now; stomachaches rare; gets up by herself and goes to school three days a week. Residual symptoms: still very afraid of giving the class presentation (\"todavía me da mucho miedo\") and avoids it; her teacher has agreed she may first present to a small group",
        "why": "Get both numbers and say what remains honestly. Halfway down the scale, with the main fear still strong, is real progress but not the end: the residual symptom is exactly what the next sessions will target. Camila avoids the presentation herself, so name the avoidance without blame."
      },
      "mood": {
        "obs": "Seen alone. Sits upright and looks at you when she answers, more than at the first visit. Smiles briefly when she talks about getting up by herself. Her face tightens and she looks down when the presentation comes up, then settles.",
        "ans": {
          "0": ["Más tranquila que antes. Pero cuando pienso en la presentation me da nervio.", "Calmer than before. But when I think about the presentation, I get nervous.", "Camila"],
          "1": ["Como un seis.", "About a six.", "Camila"]
        },
        "quote": "Más tranquila que antes. (Calmer than before.)",
        "key": [0, 1],
        "need": ["Euthymic mood", "Congruent affect"],
        "ok": ["Anxious mood", "Full range affect"],
        "wrong": {
          "Dysphoric mood": "She says she is calmer than before and rates her mood 6/10; she does not describe low mood.",
          "Restricted affect": "She smiles, then looks anxious when the presentation comes up, then settles: her affect moves with what she talks about.",
          "Flat affect": "Her face changes with the topic.",
          "Incongruent affect": "Her tense face when the presentation comes up fits the nervousness she describes."
        },
        "doc": "\"Más tranquila que antes.\" (Calmer than before.) Mood about 6/10 (about 4/10 at the first visit). Euthymic mood, anxious when the presentation comes up; affect congruent, brighter than at the first visit",
        "why": "Quote her own short words, give the number, and compare with the first visit, when she said \"me da miedo\" and rated her mood about four. The nervousness that comes back when the presentation is mentioned is not her general mood, but it is worth writing down: it points to the goal not yet met."
      },
      "safety": {
        "obs": "Seen alone. Answers calmly and looks at you; no hesitation.",
        "ans": {
          "0": ["No. Ya no pienso en eso. No me he hecho nada.", "No. I don't think about that anymore. I haven't hurt myself.", "Camila"],
          "1": ["No. Hace como seis semanas que no me pasa lo de ojalá no despertara.", "No. It's been about six weeks since the \"I wish I wouldn't wake up\" thing happened.", "Camila"],
          "2": ["No.", "No.", "Camila"]
        },
        "key": [0, 1, 2],
        "need": ["Past passive death wish, none now", "Denies suicidal ideation, plan, or intent", "Denies homicidal ideation"],
        "wrong": {
          "Passive death wish, no plan or intent": "The wish not to wake up has not come back for about six weeks. Record it as past, with today's denial.",
          "Active suicidal ideation (do not end treatment; reassess)": "She denies thoughts of dying, a plan and intent.",
          "Homicidal ideation present (reassess)": "She has no thoughts of hurting anyone."
        },
        "doc": "Past passive wish not to wake up (\"ojalá no despertara\"; nearest pick: past passive death wish), none for about six weeks (asked again today); denies suicidal ideation, plan or intent; denies self-harm; denies homicidal ideation",
        "why": "Ask about \"ojalá no despertara\" at every review, in her own words, even when it has gone: it went away during treatment, and it could come back with stress. Asking alone, calmly and directly, makes it easy for her to say if it ever returns. Its absence is one reason the plan can stay at every two weeks, but it does not by itself mean treatment can end. Do not ask about methods."
      },
      "insight": {
        "ans": {
          "0": ["Cuando me preocupo, de verdad me duele la panza. No era que estaba fingiendo.", "When I worry, my stomach really does hurt. I wasn't faking.", "Camila"],
          "1": ["Pensaría que a lo mejor la preocupación se está poniendo fuerte otra vez.", "I'd think maybe the worry is getting strong again.", "Camila"]
        },
        "key": [0, 1],
        "need": [["Fair", "Good"], ["Grade 5: intellectual insight", "Grade 4: aware, cause unknown in self"]],
        "wrong": {
          "Poor": "She explains in her own words how worry causes the stomachaches.",
          "Grade 3: blames others/external factors": "At the first visit she said the pain was because of school. Now she places it in her own worry: that is a step past grade 3.",
          "Grade 6: true emotional insight": "She understands the link between worry and pain, but the understanding has not yet changed what she can do about the fear that matters most: the class presentation."
        },
        "doc": "Fair (grade 5, up from grade 3 at the first visit): knows that worry causes the stomachaches (\"cuando me preocupo, de verdad me duele la panza\"); would read a return of the symptoms as the worry growing again",
        "why": "Compare with the first visit, when she said her stomach hurt \"por la escuela\". She now sees the worry inside herself, which is grade 5. Fair rather than good, because the fear of others' judgment still drives what she avoids; insight grows further as she practises speaking in class."
      },
      "function": {
        "ans": {
          "0": ["Tres días a la semana voy a todas mis clases. Los otros dos me quedo en la casa.", "Three days a week I go to all my classes. The other two I stay home.", "Camila"],
          "1": ["Los días de escuela me acuesto a las diez y media.", "On school days I go to bed at ten thirty.", "Camila"],
          "2": ["Sigo usando el celular, pero en la noche lo dejo temprano. Y ya hablo un poco con una amiga de mi clase de arte.", "I still use my phone, but at night I put it down early. And I've started talking a bit with a friend from my art class.", "Camila"],
          "3": ["No, yo no tomo. Tengo catorce años.", "No, I don't drink. I'm fourteen.", "Camila"]
        },
        "key": [0, 1],
        "need": ["Partly back to work or school", "Daily routine and sleep regular"],
        "ok": ["Avoidance remains in some situations", "Social and leisure activities resumed", "Family relationships improved"],
        "wrong": {
          "Back to usual work or school": "She is in class three full days a week and stays home the other two: partly back, not fully.",
          "Not yet back to work or school": "She attends full days in class three days a week.",
          "Sleep still poor": "She is in bed by ten thirty on school nights and gets up by herself."
        },
        "doc": "Partly back to school: full days in class three days a week, home on the other two; in bed by ten thirty on school nights, gets up by herself; still uses her phone but puts it down early; talking with a friend again; still avoids the class presentation. No alcohol",
        "why": "Ask for concrete days and times: \"three full days and two at home\" tells you much more than \"going to school\". Partly back is the honest word, and attendance is worth tracking for the school and for any 504 plan. Ask about alcohol in plain words even with a 14-year-old, without judgment, and while she is alone. The form's question says \"still\", which fits someone who drank to cope before; for a teenager with no history of drinking, simply ask whether she drinks."
      },
      "warning": {
        "ans": {
          "0": ["Que me vuelva a doler la panza en las mañanas. Y encerrarme en mi cuarto con el celular hasta tarde, creo.", "My stomach hurting in the mornings again. And shutting myself in my room with my phone until late, I guess.", "Camila"],
          "1": ["Se lo digo a mi mamá o a la consejera de la escuela. Y si vuelvo a sentir lo de ojalá no despertara, también se lo digo aquí.", "I'll tell my mom or the school counselor. And if I feel the \"I wish I wouldn't wake up\" thing again, I'll tell you here too.", "Camila"],
          "2": ["Yo también me fijo. Si empiezan otra vez las mañanas con dolor de panza, no la voy a regañar; le voy a preguntar.", "I'll keep an eye out too. If the mornings with stomachaches start again, I won't scold her; I'll ask her about it.", "Verónica (mother)"],
          "3": ["Bueno, lo escribo.", "Okay, I'll write it.", "Camila"]
        },
        "key": [0, 1],
        "need": ["Names own early warning signs", "Family knows the warning signs"],
        "ok": ["Written relapse prevention plan", "Knows when and how to come back", "Knows how to restart the practice"],
        "wrong": {
          "Cannot yet name warning signs": "She names stomachaches on school mornings and shutting herself in her room late at night."
        },
        "doc": "Names own warning signs (stomachaches on school mornings again; shutting herself in her room with her phone late at night); will tell her mother or the school counselor, and the clinic if \"ojalá no despertara\" returns; mother knows the signs and will ask rather than scold; plan written together",
        "why": "Even when sessions continue, write the warning signs down now: in her own words they are the early signs from her first visit. She says \"ojalá no despertara\" in front of her mother by her own choice, as agreed at the first visit; you do not raise it for her. Her mother's answer matters as much as hers: asking instead of scolding is what keeps the early signs talked about."
      },
      "medicine": {
        "ans": {
          "0": ["No estoy tomando nada.", "I'm not taking anything.", "Camila"],
          "1": ["No, no hemos comprado nada.", "No, we haven't bought anything.", "Verónica (mother)"]
        },
        "key": [0, 1],
        "need": ["No psychiatric medicine"],
        "ok": ["No medicines from the pharmacy for sleep or anxiety"],
        "wrong": {
          "Continues ___ (prescribed by ___)": "She takes no medicine; the plan has been sessions and small steps back to school.",
          "Supplements or other medicines: ___": "Her mother says they have bought nothing."
        },
        "doc": "No psychiatric medicine; nothing from the pharmacy (mother confirms)",
        "why": "With a teenager, ask both her and the parent: parents often buy the medicines. At the first visit she asked whether medicine would make school less scary; it was kept for later if needed, and it can be discussed again with her and her mother if progress stops."
      },
      "plan": {
        "ans": {
          "0": ["Todavía me da nervio terminar. Las presentaciones todavía me asustan.", "I'm still nervous about ending. Presentations still scare me.", "Camila"],
          "1": ["Gracias, doctora. Eso me tranquiliza.", "Thank you, doctor. That puts me at ease.", "Verónica (mother)"],
          "4": ["Ya, entendido.", "Okay, got it.", "Camila"],
          "5": ["Sí, mejor. Puedo venir cada dos semanas.", "Yeah, that's better. I can come every two weeks.", "Camila"]
        },
        "key": [0, 5],
        "need": ["Continue sessions every ___ weeks: goals not yet met", "School liaison continues with consent"],
        "ok": ["Crisis plan given (988; 911)", "Return to the clinic if symptoms come back"],
        "wrong": {
          "Regular sessions ended": "The main goals, the class presentation and a full week at school, are not yet met, and she says herself she is not ready to end.",
          "Booster session in ___ months": "A booster session follows the end of regular sessions. Today the decision is to continue every two weeks."
        },
        "doc": "Continue sessions every 2 weeks for about 2 months: goals not yet met (class presentation, fear of others' judgment, full school week), starting with the small-group presentation her teacher agreed to; school counselor liaison continues with her consent (a 504 plan can be raised if supports are needed); crisis plan repeated (988, oprima el 2 para español; 911); review again in about 2 months",
        "why": "A review can decide to continue. Say it plainly, name the goals still to reach, and give a time frame and a date to review again, so that continuing is a plan, not a failure. Ask her first how she feels about ending: here her own answer supports the decision. Share with the school only what she agrees to share."
      }
    }
  }
]);
