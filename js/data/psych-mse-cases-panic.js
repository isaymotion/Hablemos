/* Admission MSE practice case: Daniel in the emergency department (id: panic).
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Same shape as psych-mse-cases.js: { id, title, level, dx, form, setting, chart, cc, domains }.
   Patient answers are natural spoken Spanish (a little Spanglish, glossed in the English) with an English translation.
   The patient is fictional. Appends to window.PSYCH_MSE_CASES. */
window.PSYCH_MSE_CASES = (window.PSYCH_MSE_CASES || []).concat([
  {
    "id": "panic",
    "title": "Daniel in the emergency department",
    "level": "B1",
    "dx": "Panic disorder (provisional), with agoraphobic avoidance; heavy daily caffeine as a likely trigger",
    "form": "",
    "setting": "Emergency department, late evening, after psychiatry was called. Daniel, 27, delivery driver, lives with his older brother. Tonight he had a sudden attack in a crowded grocery store, his second emergency visit in six weeks. You have taken his history (his case simulation), explained the body's alarm and practiced slow breathing with him. Now complete the MSE of this first visit. He is bilingual and chose Spanish.",
    "chart": [
      "Emergency physician: came in this evening after a sudden attack in a crowded grocery store: pounding heart, tight chest, breathlessness, tingling hands and a feeling that he was dying. Second visit to the emergency department in six weeks.",
      "ECG, heart enzymes, basic blood tests and urine drug screen were normal tonight, as at the first visit. No medicine has been given in the emergency department. Question to psychiatry: the physician thinks of panic attacks; please assess.",
      "From your history tonight: the attacks start suddenly, peak within minutes and settle within the hour, about four in two months. Since they began he fears another attack, avoids the freeway and crowded stores, and has lost deliveries. About three energy drinks a day plus morning coffee; one beer on weekends; no other substances. His mother calls it \"ataque de nervios\". Lives with his brother. Says he has been a little down."
    ],
    "cc": {
      "ask": "cc-hpi:0",
      "ans": [
        "Es la segunda vez que vengo. Sentí que me moría. Pensé que me estaba dando un infarto.",
        "It's the second time I've come. I felt like I was dying. I thought I was having a heart attack.",
        "Daniel"
      ],
      "opts": [
        [
          "\"Es la segunda vez que vengo. Sentí que me moría. Pensé que me estaba dando un infarto.\"",
          true,
          "The form records the chief complaint in the patient's own words, in Spanish, in quotation marks."
        ],
        [
          "Second panic attack in a month and a half, in a crowded store, with fear of dying",
          false,
          "That is your interpretation. It belongs in the HPI and the MSE, not in the chief complaint."
        ],
        [
          "He felt like he was dying and thought it was a heart attack.",
          false,
          "A translation loses the patient's words. Quote the Spanish; add a translation in parentheses if your service requires it."
        ]
      ]
    },
    "domains": {
      "appearance": {
        "obs": "Young adult male, medium built, in a work polo shirt with a delivery company logo, jeans and sneakers. Hair short and neat, clean-shaven. The back of his shirt is damp with sweat. He holds his phone in one hand.",
        "ans": {
          "0": ["Dani, dígame Dani. Mucho gusto, doctor.", "Dani, call me Dani. Nice to meet you, doctor."],
          "1": ["Ah, perdón. Gracias.", "Oh, sorry. Thank you."]
        },
        "need": ["Adult male", "Medium built", "Well kempt"],
        "ok": ["Young adult", "Fairly kempt"],
        "wrong": {
          "Unkempt": "His clothes are clean and his hair is neat. A shirt damp with sweat after an attack is not neglect.",
          "Poor hygiene": "Sweating during a panic attack is a bodily symptom, not poor hygiene.",
          "Looks older than stated age": "He looks his age."
        },
        "doc": "Adult male, medium built, in a work polo shirt and jeans (shirt damp with sweat), well kempt",
        "why": "He came straight from work in his uniform. The sweat-damp shirt belongs to the attack: sweating and a feeling of not getting enough air are part of it. Write what you see, and keep the bodily signs in mind when you document the other domains. Ask what he wants to be called: here, Dani."
      },
      "psychomotor": {
        "obs": "When you first came in, he sat on the edge of the bed with a hand on his chest, breathing fast and turning his phone over and over. After you practiced slow breathing together, he sat back, put the phone down and kept his hands still. No tremor or abnormal movements are seen.",
        "ans": {
          "0": ["No sé, vivo con mi hermano y no me dice nada. Pero después de un ataque no me puedo quedar quieto.", "I don't know, I live with my brother and he doesn't say anything. But after an attack I can't stay still."]
        },
        "need": ["No psychomotor agitation or retardation"],
        "ok": ["Restless"],
        "wrong": {
          "Psychomotor agitation": "He was restless and anxious on arrival, but he stayed on the bed, followed the breathing with you and settled. That is not marked agitation.",
          "Psychomotor retardation": "Nothing is slowed. He moves and answers at a normal pace.",
          "Tremor": "His hands tingled during the attack, but no tremor is seen.",
          "Abnormal involuntary movements": "Turning his phone over is a nervous habit while anxious, not an abnormal movement."
        },
        "doc": "Restless on arrival (hand on chest, fast breathing, turning his phone over), settled after slow breathing; now no psychomotor agitation or retardation; no tremor",
        "why": "Write the change, not only the end state: restless on arrival, settled after slow breathing. It shows that the attack passed and that he can use the breathing, and it gives the emergency staff a baseline if another attack starts before he leaves."
      },
      "attitude": {
        "obs": "Looks at you when you speak and when he answers. Answers every question fully and asks his own questions, for example whether his heart is really all right. When psychiatry was first mentioned he asked, a little sharply, whether you think it is all in his head. Once you said the symptoms are real, he relaxed and talked openly.",
        "ans": {
          "0": ["Dani está bien.", "Dani is fine."],
          "1": ["Español está bien, pero si usa palabras de doctor, mejor en inglés a veces. Pero no hay problema.", "Spanish is fine, but if you use doctor words, English sometimes is better. But no problem."]
        },
        "need": ["Cooperative", "Good eye contact"],
        "wrong": {
          "Guarded": "His sharp question about whether it is \"in his head\" was a fear of not being believed. Once you took the symptoms seriously, he talked openly.",
          "Suspicious": "He does not doubt your motives. He wants to know whether his heart is safe.",
          "Irritable": "One sharp question when psychiatry came up is not an irritable attitude. He was frightened and worried about being dismissed.",
          "Uncooperative": "He answers every question and practiced the breathing with you.",
          "Fair eye contact": "He looks at you through the interview."
        },
        "doc": "Cooperative, good eye contact; briefly defensive when psychiatry was mentioned (asked whether it is \"in his head\"), open once the symptoms were taken seriously; asks appropriate questions about his heart; prefers Spanish, with some English medical terms",
        "why": "Many patients sent to psychiatry from the emergency department fear they are being told the symptoms are imagined. Say plainly that the symptoms are real and happen in the body. His questions about his heart are a fair worry after frightening attacks, not a sign of a difficult attitude. Mixing Spanish and English is normal for him and is not a finding."
      },
      "mood": {
        "obs": "Anxious at first: his face is tense and he keeps a hand near his chest. He smiles a little when he says the breathing helped, and his face relaxes after the explanation of the alarm. When he talks about not wanting to worry his mother and the lost deliveries, he looks down and his voice goes quiet.",
        "ans": {
          "0": ["Más tranquilo que cuando llegué. Pero la neta, últimamente ando medio decaído.", "Calmer than when I arrived. But honestly, lately I've been kind of down. (\"La neta\" = honestly, Mexican Spanish.)"],
          "1": ["Desde que empezaron los ataques ando con miedo todo el tiempo, pensando que me va a dar otro. En la noche también le doy vueltas y casi no duermo.", "Since the attacks started I've been afraid all the time, thinking another will come. At night I go over it too and I hardly sleep."],
          "2": ["Como un cuatro.", "About a four."]
        },
        "quote": "Más tranquilo que cuando llegué. Pero la neta, últimamente ando medio decaído. (Calmer than when I arrived. But honestly, lately I've been kind of down.)",
        "need": ["Sad mood", "Congruent affect"],
        "ok": ["Anxious mood", "Full range affect"],
        "wrong": {
          "Euthymic mood": "He says he has been down, and anxious about the next attack.",
          "Euphoric mood": "Nothing in his words or face suggests elation.",
          "Irritable mood": "He was sharp for a moment when psychiatry came up, but he does not describe himself as irritable.",
          "Flat affect": "His face shows fear at first, then relief and a small smile.",
          "Blunted affect": "His feelings show clearly in his face and voice.",
          "Restricted affect": "He shows fear, relief and sadness during the interview.",
          "Labile affect": "His face brightened after the explanation and the breathing. That is a fitting response to what happened, not a sudden, unexplained swing.",
          "Incongruent affect": "His anxious, then quieter face fits what he says."
        },
        "ev": {
          "find": "Sad mood",
          "opts": [
            ["\"Más tranquilo que cuando llegué. Pero la neta, últimamente ando medio decaído.\"", true],
            ["\"Más tranquilo que cuando llegué.\"", false],
            ["\"Como un cuatro.\"", false]
          ],
          "why": "\"Ando medio decaído\" names a low mood in his own words, so quote it. Feeling calmer than when he arrived tells you the attack has passed, not what his mood is. A number out of ten supports the picture but is not his own description."
        },
        "doc": "\"Más tranquilo que cuando llegué. Pero la neta, últimamente ando medio decaído.\" (Calmer than when I arrived. But honestly, lately I've been kind of down.) Mood 4/10; also anxious since the attacks began (\"con miedo todo el tiempo\"), sleeping poorly from worry about the next attack. Affect anxious, brighter after the explanation and slow breathing; congruent",
        "why": "He gives two feelings: down, and afraid of the next attack. Quote the low mood and record the anxiety, because low mood after repeated attacks is a reason to ask directly about suicidal thoughts. The picks have no word for anxious affect, so write it in the details, with the brightening after the explanation."
      },
      "speech": {
        "obs": "At first he spoke quickly in short phrases, catching his breath. After the slow breathing: normal rate and volume, full answers, and questions of his own. Some English words mixed in (\"freeway\", \"ECG\", \"shift\").",
        "ans": {
          "0": ["Estaba en el súper, lleno de gente, y de repente el corazón me latía bien fuerte y sentía el pecho apretado. No podía respirar bien y se me durmieron las manos... Igual que la vez pasada. Se me fue quitando como en una hora. ...Doctor, ¿mi corazón de veras está bien?", "I was in the supermarket, full of people, and suddenly my heart was pounding hard and my chest felt tight. I couldn't breathe well and my hands went numb... Same as last time. It slowly went away in about an hour. ...Doctor, is my heart really all right?"]
        },
        "need": ["Spontaneous", "Normal rate", "Adequate volume"],
        "ok": ["Productive"],
        "wrong": {
          "Rapid rate": "He spoke quickly only while he was still breathless at the start. After the slow breathing his rate is normal. Write the change in the details.",
          "Pressured": "He was never hard to interrupt, and he stops to listen to your answers.",
          "Non-spontaneous (answers only when asked)": "He asks about his heart without being asked.",
          "Soft volume": "His voice goes quiet only for a moment, when he talks about feeling down."
        },
        "doc": "Spontaneous, productive, normal rate and volume after settling (quick and breathless at first); some English words mixed in (normal for him); asks appropriate questions (\"¿mi corazón de veras está bien?\")",
        "why": "Breathlessness during an attack changes speech for a while: short phrases, quick, catching breath. Record speech as it is once he has settled, and note how it was at first. Switching between Spanish and English is normal and is not a finding. His question about his heart deserves a real answer: what was checked and that the tests were normal, not a quick \"it's nothing\"."
      },
      "process": {
        "obs": "Tells the story of tonight in order, from the store to the emergency department, and answers each follow-up question. When he drifts to his worry about his heart, he comes back to the question by himself.",
        "ans": {
          "0": ["Estaba en el súper, lleno de gente, y de repente el corazón me latía bien fuerte y sentía el pecho apretado. No podía respirar bien y se me durmieron las manos... Igual que la vez pasada. Se me fue quitando como en una hora. ...Doctor, ¿mi corazón de veras está bien?", "I was in the supermarket, full of people, and suddenly my heart was pounding hard and my chest felt tight. I couldn't breathe well and my hands went numb... Same as last time. It slowly went away in about an hour. ...Doctor, is my heart really all right?"],
          "1": ["Es como si mi cuerpo no me hiciera caso. Me da miedo que se me pare el corazón o que pierda el control.", "It's like my body doesn't listen to me. I'm afraid my heart will stop or that I'll lose control."]
        },
        "need": ["Linear", "Goal-directed"],
        "wrong": {
          "Circumstantial": "He gives the details that matter, in order, and reaches the point without a long detour.",
          "Tangential": "His question about his heart is linked to the story he is telling, and he answers what you ask.",
          "Flight of ideas": "His speech is not fast once he has settled, and his ideas follow one line.",
          "Loose associations": "Each sentence follows clearly from the one before."
        },
        "doc": "Linear and goal-directed: tells tonight's attack in order and answers follow-up questions; returns to his worry about his heart",
        "why": "Coming back to one worry (his heart) is part of his thought content, not a problem with the process. Asked what the attack feels like, he describes it clearly (\"como si mi cuerpo no me hiciera caso\"). That clear account of onset and course also helps the team tell a panic attack from other causes."
      },
      "perception": {
        "obs": "Looks at you and around the bay in an ordinary way. Does not pause as if listening, and does not react to anything you cannot see or hear.",
        "ans": {
          "0": ["No, nada.", "No, nothing."],
          "1": ["No.", "No."],
          "2": ["No, no veo nada raro.", "No, I don't see anything strange."],
          "3": ["No oigo ninguna voz.", "I don't hear any voice."],
          "4": ["No, nada de eso.", "No, nothing like that."]
        },
        "key": [0, 2],
        "need": ["Denies perceptual disturbances", "Not responding to internal stimuli"],
        "wrong": {
          "Tactile hallucinations": "The tingling in his hands is a real bodily symptom of the attack, often from breathing fast. He feels it in his own hands and it settles with the attack. It is not a hallucination.",
          "Auditory hallucinations": "He denies hearing voices or sounds.",
          "Visual hallucinations": "He denies seeing anything others cannot see.",
          "Responding to internal stimuli": "He does not pause, listen or react to anything you cannot perceive."
        },
        "doc": "Denies auditory and visual hallucinations; not responding to internal stimuli. Tingling hands during the attack recorded as a bodily symptom of the attack, not a perceptual disturbance",
        "why": "Ask, and record the denial. Do not mistake the bodily symptoms of panic for perceptual disturbances: tingling hands, a pounding heart and a tight chest are what his body really felt. Calling them hallucinations would be wrong, and would tell him again that it is \"all in his head\"."
      },
      "content": {
        "ans": {
          "0": ["No. Nada de que alguien me quiera hacer algo. Lo que me da miedo son los ataques.", "No. Nothing about someone wanting to do something to me. What scares me is the attacks."],
          "1": ["No, nada de eso.", "No, nothing like that."],
          "2": ["No.", "No."],
          "3": ["Que es del corazón... la verdad medio lo creía. Pero si salió normal las dos veces, a lo mejor no.", "That it's my heart... honestly I half believed it. But if it was normal both times, maybe it isn't."],
          "4": ["Cuando me explicó lo de la alarma, pensé que a lo mejor sí es eso. Y también estaba tomando muchas energéticas.", "When you explained the alarm, I thought maybe that's it. And I was drinking a lot of energy drinks too."],
          "5": ["Me siento mal por faltar a las entregas y dejar mal a mi jefe. Pero no es que me sienta que no valgo nada.", "I feel bad about missing deliveries and letting my boss down. But it's not that I feel worthless."],
          "6": ["Mi mamá dice que es un ataque de nervios. Yo creo que también es el estrés y las energéticas. Pero lo que más miedo me da es que me dé otro. Hasta antes de entrar a un lugar lleno ya me empieza a latir fuerte.", "My mom says it's an ataque de nervios. I think it's also stress and the energy drinks. But what scares me most is having another one. Even before I walk into a crowded place my heart starts pounding."]
        },
        "key": [3, 6],
        "need": ["No delusions elicited", "Preoccupation with ___"],
        "wrong": {
          "Persecutory delusions": "He does not believe anyone wants to harm him. His fear is of the attacks.",
          "Nihilistic delusions": "A fear of dying during an attack is not a belief that he is dead or that his body has gone.",
          "Delusions of reference": "He does not think things around him carry messages for him.",
          "Guilt or worthlessness (not delusional)": "He feels bad about missing deliveries, but says plainly that he does not feel worthless. Record the regret in the details."
        },
        "ev": {
          "find": "Preoccupation with ___",
          "opts": [
            ["\"Lo que más miedo me da es que me dé otro. Hasta antes de entrar a un lugar lleno ya me empieza a latir fuerte.\"", true],
            ["\"Mi mamá dice que es un ataque de nervios.\"", false],
            ["\"No es que me sienta que no valgo nada.\"", false]
          ],
          "why": "His thoughts keep coming back to the next attack, and to dying or losing control during it. That fear of the attack itself, felt even before he enters a crowded place, is what keeps the avoidance going. His mother's word is an explanation his family holds, not a delusion, and the last line rules out worthlessness."
        },
        "doc": "No delusions elicited. Preoccupied with fear of another attack (\"lo que más miedo me da es que me dé otro\") and of dying or losing control during one; fear starts before entering a crowded place; had half believed it was heart disease, now open to another explanation after two normal sets of tests. His mother's explanation (\"ataque de nervios\") noted as a family explanation, not a delusion. Regrets missing deliveries; no worthlessness",
        "why": "His belief that it might be his heart is not a delusion. It is a fair worry, held with doubt, and he changes it when he hears the results and the explanation. That is the test: ask how sure he is, and whether there could be another explanation. His mother's \"ataque de nervios\" is a cultural explanation, so do not argue with it. Name the preoccupation in his own words. It is the target of the step-by-step therapy that follows in the clinic."
      },
      "safety": {
        "ans": {
          "0": ["No, yo no pienso tanto así.", "No, I don't think that far."],
          "1": ["No. Al revés, me da miedo morirme. En el ataque de veras creo que me voy a morir.", "No. The opposite, I'm afraid of dying. During the attack I really believe I'm going to die."],
          "2": ["No. Mi mamá y mi hermano me necesitan. No les haría eso.", "No. My mom and my brother need me. I wouldn't do that to them."],
          "3": ["No, nada.", "No, nothing."],
          "4": ["No.", "No."],
          "5": ["No, para nada.", "No, not at all."]
        },
        "key": [2, 5],
        "need": ["Denies suicidal ideation", "Denies homicidal ideation"],
        "wrong": {
          "Passive death wish": "He fears dying. He does not wish for it. Fear of death during an attack is the catastrophic fear of panic, not a death wish.",
          "Active suicidal ideation, no plan": "Asked directly, he says he has no thoughts of suicide.",
          "Active suicidal ideation with plan": "He denies any thoughts of suicide, and has no plan.",
          "Homicidal ideation toward ___": "He denies any thought of harming anyone."
        },
        "ev": {
          "find": "Denies suicidal ideation",
          "opts": [
            ["\"No. Mi mamá y mi hermano me necesitan. No les haría eso.\"", true],
            ["\"No. Al revés, me da miedo morirme.\"", false],
            ["\"Como un cuatro.\"", false]
          ],
          "why": "Only his answer to the direct question about suicide tells you he has no suicidal thoughts, and he gives a reason that protects him: his mother and brother. Fear of dying is a different thing and does not answer the question. The low mood is why you ask."
        },
        "doc": "Denies suicidal ideation (\"no les haría eso\"), death wish, plan and intent; protective factors: his mother, and his brother (he lives with him). Fears dying during attacks (not a death wish). Denies homicidal ideation. Low mood, off work some days",
        "why": "Ask every patient with low mood, however the visit began, and write the answer in his words. Do not mix up the fear of dying, which drives the attacks, with a wish to die. Before he leaves, tell him what to do if thoughts of suicide ever come: call or text 988 (oprima 2 for Spanish), or 911 in an emergency."
      },
      "orientation": {
        "obs": "Alert and attentive throughout. Follows the breathing instructions step by step and remembers what you said about the alarm.",
        "ans": {
          "0": ["Es jueves. ...Aunque ya es de noche.", "It's Thursday. ...Though it's already night."],
          "1": ["En el hospital, en urgencias. Ya había venido, así que sí sé.", "At the hospital, in the emergency room. I've been here before, so I know."],
          "2": ["Usted es el psiquiatra, ¿no? Hace rato me enseñó a respirar.", "You're the psychiatrist, right? A little while ago you showed me how to breathe."]
        },
        "need": ["Oriented to 3 spheres"],
        "wrong": {
          "Disoriented to time": "He knows the day and that it is night.",
          "Disoriented to place": "He knows he is in the hospital's emergency room.",
          "Disoriented to person": "He knows who you are and what you did."
        },
        "doc": "Oriented to 3 spheres; alert, attention intact",
        "why": "During a severe attack some people feel confused or far away for a moment, so check orientation once he has settled. Here it is intact, and his attention is good: he follows the breathing and remembers the explanation. Confusion that lasts after an attack is not typical of panic and needs a medical review."
      },
      "insight": {
        "ans": {
          "0": ["¿Si es una enfermedad? No sé. Algo sí está mal. Lo de la alarma más o menos lo entiendo, pero todavía me preocupa un poco el corazón.", "Whether it's an illness? I don't know. Something is definitely wrong. I sort of get the alarm thing, but I'm still a little worried about my heart."],
          "1": ["Mi hermano me trajo. Mi mamá no sabe, no quiero asustarla. Vine porque pensé que me iba a morir otra vez.", "My brother brought me. My mom doesn't know, I don't want to scare her. I came because I thought I was going to die again."],
          "2": ["No sé. Pero si así me dan menos ataques, quiero que me cuente en la clínica.", "I don't know. But if it means fewer attacks, I want you to tell me about it at the clinic."]
        },
        "key": [0],
        "need": ["Fair", "Grade 4: aware, cause unknown in self"],
        "ok": ["Grade 5: intellectual insight"],
        "wrong": {
          "Grade 3: blames others/external factors": "He does not blame anyone. He mentions stress and energy drinks as part of it, and looks for the cause in himself.",
          "Grade 2: slight awareness": "He says something is definitely wrong and wants help. That is more than slight awareness.",
          "Grade 1: complete denial": "He knows something is wrong and came for help.",
          "Grade 6: true emotional insight": "He has only just heard the explanation and is still worried about his heart.",
          "Good": "He is still unsure what is wrong and half thinks it may be his heart.",
          "Poor": "He knows something is wrong, follows the explanation and is open to treatment."
        },
        "ev": {
          "find": "Grade 4: aware, cause unknown in self",
          "opts": [
            ["\"Algo sí está mal. Lo de la alarma más o menos lo entiendo, pero todavía me preocupa un poco el corazón.\"", true],
            ["\"Y también estaba tomando muchas energéticas.\"", false],
            ["\"Mi hermano me trajo. Mi mamá no sabe, no quiero asustarla.\"", false]
          ],
          "why": "He is sure something is wrong in him but not yet sure what it is. That is grade 4. He has begun to take in the explanation (\"más o menos lo entiendo\"), so grade 5 is defensible too. The energy drinks line names a trigger, not the illness, and the line about his brother says how he came."
        },
        "doc": "Fair (grade 4): knows something is wrong (\"algo sí está mal\"), not sure it is an illness, still somewhat worried about his heart; beginning to accept the explanation of the panic cycle; open to clinic treatment",
        "why": "His insight is growing during the visit: \"in my head?\" at first, \"I sort of get it\" now. Grade 4 is a fair record tonight. At discharge, after more explanation, it may be better. Build on his own wish to have fewer attacks, and answer his worry about his heart with what was checked and found normal."
      },
      "impulse": {
        "obs": "No outbursts. Even when the attack was at its worst in the store, he did not act on the fear in an unsafe way. He sat down, then came for help.",
        "ans": {
          "0": ["No. Soy más de asustarme que de enojarme.", "No. I'm more the type to get scared than angry."],
          "1": ["Nunca.", "Never."]
        },
        "need": ["Good impulse control"],
        "wrong": {
          "Fair impulse control": "Nothing in the history or the interview suggests trouble controlling his impulses.",
          "Poor impulse control": "He has never hurt anyone, and coming to the emergency room when he feared he was dying was a reasonable choice, not an impulse."
        },
        "doc": "Good impulse control; no history of aggression; no outbursts",
        "why": "Repeated emergency visits are not a sign of poor impulse control: each time he believed he might be dying. Avoiding the freeway is avoidance, a part of the anxiety, and it belongs in the thought content and the plan, not here."
      },
      "judgment": {
        "ans": {
          "0": ["Lo echo en un buzón o lo llevo al correo.", "I put it in a mailbox or take it to the post office."],
          "1": ["Le aviso a la gente y salgo por la salida de emergencia. ...Pero la neta, nomás de hablar de lugares llenos ya me late un poco el corazón.", "I warn the people and go out the emergency exit. ...But honestly, just talking about crowded places makes my heart beat a little faster."]
        },
        "need": ["Fair", "Intact test judgment"],
        "ok": ["Intact social judgment"],
        "wrong": {
          "Good": "His answers are sensible, but in daily life he has been coping by avoiding the freeway, losing deliveries and drinking three energy drinks a day to get through his shift.",
          "Poor": "His answers to both questions are sensible, and he seeks help and accepts follow-up.",
          "Impaired test judgment": "He gives sensible answers to both questions.",
          "Impaired social judgment": "Avoidance is a symptom of the anxiety, not a failure of judgment. He seeks help and accepts the plan."
        },
        "doc": "Fair: intact test judgment (mails the envelope; warns others and uses the emergency exit); in daily life, avoids the freeway and crowded stores, has lost deliveries and uses energy drinks to get through his shifts; seeks help and accepts clinic follow-up",
        "why": "Note how he reacts to the crowded-place question: a small jump of fear, then a sensible answer. Judgment is fair rather than good because of how he has been coping: avoiding the freeway, losing deliveries, and three energy drinks a day. Each of these is understandable, and each is part of the plan: cut caffeine down gradually, not suddenly, and go back to the freeway step by step with support."
      }
    }
  }
]);
