/* Admission/first-visit MSE practice case: OCD (Tomás), outpatient clinic. Appends to window.PSYCH_MSE_CASES.
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish text. Clinician lines use usted.
   Patient: Tomás, 34, payroll clerk at a school district office, wife Araceli (fictional). Teaching examples only. Crisis line 988 (oprima 2 para español). */
window.PSYCH_MSE_CASES = (window.PSYCH_MSE_CASES || []).concat([
  {
    "id": "ocd",
    "title": "Tomás at his first visit",
    "level": "B1",
    "dx": "Obsessive-compulsive disorder, with good or fair insight; low mood to be followed (rule out a depressive disorder)",
    "form": "",
    "setting": "Outpatient clinic, first visit. Tomás, 34, is a payroll clerk at a school district office. He is married to Araceli, who persuaded him to come but did not come with him; they have no children. You record the MSE at the end of this first interview.",
    "chart": [
      "First outpatient visit. Tomás, 34, payroll clerk at a school district office; married to Araceli, no children. He came alone; his wife persuaded him to come.",
      "No previous psychiatric contact is recorded.",
      "His hands look red and chapped. He asks to be called Tomás."
    ],
    "cc": {
      "ask": "cc-hpi:0",
      "ans": [
        "Mi esposa me dijo que viniera. ...No puedo dejar de lavarme las manos.",
        "My wife told me to come. ...I can't stop washing my hands.",
        "Tomás"
      ],
      "opts": [
        [
          "\"Mi esposa me dijo que viniera. ...No puedo dejar de lavarme las manos.\"",
          true,
          "The form records the chief complaint in the patient's own words, in Spanish, in quotation marks."
        ],
        [
          "Contamination obsessions with washing and checking compulsions",
          false,
          "That is your interpretation. It belongs in the HPI and the MSE, not in the chief complaint."
        ],
        [
          "I can't stop washing my hands.",
          false,
          "A translation loses the patient's words. Quote the Spanish; add a translation in parentheses if your service requires it."
        ]
      ]
    },
    "domains": {
      "appearance": {
        "obs": "Adult male, medium build, in a clean, neatly pressed shirt and trousers. Hair tidy, clean-shaven. The skin on the backs of his hands and between his fingers is red, dry and cracked.",
        "ans": {
          "0": [
            "Buenos días, doctor. Soy Tomás. Mucho gusto.",
            "Good morning, doctor. I'm Tomás. Nice to meet you."
          ],
          "1": [
            "Gracias.",
            "Thank you."
          ]
        },
        "need": [
          "Adult male",
          "Medium built",
          "Well kempt"
        ],
        "wrong": {
          "Fairly kempt": "His clothes, hair and shave are all neat. The chapped hands come from washing too much, not from poor grooming.",
          "Unkempt": "He is neatly dressed and clean.",
          "Poor hygiene": "If anything his hygiene is excessive: the cracked skin comes from washing many times a day."
        },
        "doc": "Adult male, medium built, neatly dressed, well kempt; hands red, dry and chapped, with cracks between the fingers",
        "why": "Red, chapped hands in a neat, well-groomed person are often the first sign of washing compulsions, and patients may hide them for years. Write them down, and look after the skin: suggest a moisturizer and, if the cracks are painful or infected, a medical review of the skin."
      },
      "psychomotor": {
        "obs": "Sits still, with his hands resting on his knees, and keeps them off the desk. Now and then he looks down at his hands. Movements are normal in speed and amount. No tremor or abnormal movements.",
        "ans": {
          "0": [
            "No, nadie me ha dicho eso. Pero mi esposa dice que me baño demasiado rato.",
            "No, nobody has said that. But my wife says I take too long in the shower."
          ]
        },
        "need": [
          "No psychomotor agitation or retardation"
        ],
        "wrong": {
          "Restless": "He sits still. Looking at his hands is part of his worry about them, not restlessness.",
          "Psychomotor agitation": "His movements are normal in amount. He is anxious, but not agitated.",
          "Psychomotor retardation": "He is not slowed in movement or speech.",
          "Abnormal involuntary movements": "No abnormal movements are seen. Compulsions are deliberate acts done to ease anxiety, not involuntary movements."
        },
        "doc": "No psychomotor agitation or retardation; sits still, hands on his knees, glances at them now and then; no tremor or abnormal movements",
        "why": "Compulsions usually happen out of sight, at the sink or at the front door, so a normal psychomotor finding in the clinic fits OCD. Ask about them; do not expect to see them. If he had tics, you would note them here, since tics sometimes come with OCD."
      },
      "attitude": {
        "obs": "Looks down at first and says it is embarrassing to see a doctor over this. Once the shame is addressed, he looks up more, speaks more freely, and by the end talks openly. Polite throughout.",
        "ans": {
          "0": [
            "Tomás, nada más, por favor.",
            "Just Tomás, please."
          ],
          "1": [
            "En español está bien. En el trabajo hablo inglés, pero esto me sale mejor en español.",
            "Spanish is fine. I speak English at work, but this comes out better in Spanish."
          ]
        },
        "need": [
          "Cooperative",
          "Fair eye contact"
        ],
        "ok": [
          "Good eye contact"
        ],
        "wrong": {
          "Guarded": "He is embarrassed, not guarded. He opens up as soon as you take away the shame.",
          "Suspicious": "Nothing in his manner suggests he distrusts you.",
          "Poor eye contact": "He looks down only at first, while he is embarrassed. His eye contact improves as he opens up.",
          "Uncooperative": "He answers every question, and tells you more than you ask."
        },
        "doc": "Cooperative, polite; embarrassed at first, then open; fair eye contact, better as the interview goes on",
        "why": "Shame is common in OCD and delays help for years. Write the change over the interview, not only the first minute: embarrassed at first, open once you said there was nothing to be ashamed of. That change tells the next doctor how to start with him."
      },
      "mood": {
        "obs": "Tense and worried as he describes the washing and checking. Looks embarrassed when he talks about his wife. Visibly relieved, and smiles briefly, when you give the problem a name.",
        "ans": {
          "0": [
            "Ahorita, la verdad, ansioso. Tengo las manos en la cabeza todo el tiempo.",
            "Right now, honestly, anxious. My hands are on my mind the whole time."
          ],
          "1": [
            "Últimamente ando decaído también. Todo me toma tanto tiempo y me siento un inútil.",
            "Lately I've been down too. Everything takes so much time and I feel useless."
          ],
          "2": [
            "Como un cinco. Porque me dio un poco de alivio saber que es una enfermedad.",
            "About a five. Because it gave me a little relief to hear it is an illness."
          ]
        },
        "quote": "Ahorita, la verdad, ansioso. ... Últimamente ando decaído también. (Right now, honestly, anxious. ... Lately I've been down too.)",
        "need": [
          "Anxious mood",
          "Congruent affect"
        ],
        "ok": [
          "Sad mood",
          "Full range affect"
        ],
        "wrong": {
          "Euthymic mood": "He says he is anxious now and that his mood has been low lately.",
          "Euphoric mood": "Nothing he says or shows is elevated.",
          "Flat affect": "His face shows worry, embarrassment and relief.",
          "Incongruent affect": "He looks tense when he talks about the washing and relieved when he hears it can be treated. His affect fits what he says."
        },
        "ev": {
          "find": "Anxious mood",
          "opts": [
            [
              "\"Ahorita, la verdad, ansioso. Tengo las manos en la cabeza todo el tiempo.\"",
              true
            ],
            [
              "\"Me siento un inútil.\"",
              false
            ],
            [
              "\"Me dio un poco de alivio.\"",
              false
            ]
          ],
          "why": "Asked how he feels now, he names anxiety and ties it to his hands. Feeling useless belongs to the low mood of the last weeks, and the relief shows the range of his affect, not his main mood."
        },
        "doc": "\"Ahorita, la verdad, ansioso.\" (Right now, honestly, anxious.) and lately \"ando decaído también\" (I've been down too). Rates his mood today about 5 out of 10. Affect anxious, congruent, with appropriate range (embarrassed, tense, relieved when the condition is named)",
        "why": "Record both of his words: anxiety now, and low mood lately from the time he loses and his shame. Low mood is common with OCD, and a depressive disorder can develop alongside it, so ask about sleep, appetite and interest at follow-up as well as about suicidal thoughts."
      },
      "speech": {
        "obs": "Normal rate and volume. Quiet in the first minute, while embarrassed, then fuller. Tells his story in order without being prompted, with a good deal of detail about the checking.",
        "ans": {
          "0": [
            "Desde hace como dos años siento que tengo gérmenes en las manos, y me las lavo una y otra vez. Apenas llego a la casa me cambio toda la ropa. Antes de salir reviso la estufa, las chapas y las ventanas muchas veces, y últimamente he llegado tarde al trabajo.",
            "For about two years I have felt I have germs on my hands, and I wash them again and again. As soon as I get home I change all my clothes. Before I leave I check the stove, the locks and the windows many times, and lately I have been late to work."
          ]
        },
        "need": [
          "Spontaneous",
          "Normal rate",
          "Adequate volume"
        ],
        "ok": [
          "Productive"
        ],
        "wrong": {
          "Soft volume": "He is quiet only in the first minute, while he is embarrassed. After that his volume is normal.",
          "Non-spontaneous (answers only when asked)": "He tells his story in order without needing a question for each part.",
          "Pressured": "He speaks at a normal rate and stops for your questions.",
          "Poverty of speech": "He says a good deal, with clear detail."
        },
        "doc": "Spontaneous, normal rate and volume (quiet at first while embarrassed); coherent and detailed",
        "why": "A quiet start in a first visit, from shame, is not a speech finding. Judge speech over the whole interview. Detail about checking is common in OCD. It is relevant to the question, so it is not a disorder of speech."
      },
      "process": {
        "obs": "Each answer stays on the question and reaches the point. He gives detail about the washing and checking, but it is relevant and he comes back to what you asked.",
        "ans": {
          "0": [
            "Desde hace como dos años siento que tengo gérmenes en las manos, y me las lavo una y otra vez. Apenas llego a la casa me cambio toda la ropa. Antes de salir reviso la estufa, las chapas y las ventanas muchas veces, y últimamente he llegado tarde al trabajo.",
            "For about two years I have felt I have germs on my hands, and I wash them again and again. As soon as I get home I change all my clothes. Before I leave I check the stove, the locks and the windows many times, and lately I have been late to work."
          ],
          "1": [
            "Siento como si me quedara algo en las manos, como que nunca están bien limpias. Sé que no se ve nada, pero no me lo puedo sacar de la cabeza.",
            "It feels as if something is left on my hands, as if they're never quite clean. I know nothing shows, but I can't get it out of my head."
          ]
        },
        "need": [
          "Linear",
          "Goal-directed"
        ],
        "wrong": {
          "Circumstantial": "His detail is about the question you asked, and he reaches the point without a long detour.",
          "Tangential": "He stays on the question and answers it.",
          "Loose associations": "His ideas follow each other clearly."
        },
        "doc": "Linear and goal-directed; detailed but relevant answers",
        "why": "In OCD the repetition is in the thought content and the behavior, not in how the ideas connect. He keeps coming back to the same doubt, but each answer is logical and on the point. Do not mistake a detailed, careful account for circumstantiality."
      },
      "perception": {
        "obs": "Attends to you throughout. No looking around, pausing to listen, or talking to anyone unseen.",
        "ans": {
          "0": [
            "No, nunca.",
            "No, never."
          ],
          "1": [
            "No.",
            "No."
          ],
          "2": [
            "No. Los gérmenes tampoco los puedo ver. Nada más siento que ahí están.",
            "No. I can't actually see the germs either. I just feel they're there."
          ],
          "3": [
            "No oigo ninguna voz.",
            "I don't hear any voices."
          ],
          "4": [
            "No, nunca.",
            "No, never."
          ]
        },
        "key": [
          0,
          2
        ],
        "need": [
          "Denies perceptual disturbances",
          "Not responding to internal stimuli"
        ],
        "wrong": {
          "Tactile hallucinations": "He describes no false sensation on the skin, such as crawling or touching. The sense that germs are there is a doubt he recognizes as his own thought.",
          "Visual hallucinations": "He says plainly that he cannot see the germs.",
          "Auditory hallucinations": "He hears no voices or sounds.",
          "Responding to internal stimuli": "He attends to you throughout."
        },
        "ev": {
          "find": "Denies perceptual disturbances",
          "opts": [
            [
              "\"No. Los gérmenes tampoco los puedo ver. Nada más siento que ahí están.\"",
              true
            ],
            [
              "\"Siento como si me quedara algo en las manos.\"",
              false
            ],
            [
              "\"Me las lavo una y otra vez.\"",
              false
            ]
          ],
          "why": "Asked about seeing things, he separates what he sees from what he fears: he sees nothing, he only feels the germs might be there. The feeling that his hands are not clean is the obsession itself, a thought, not a perception."
        },
        "doc": "Denies auditory and visual hallucinations; the sense of germs on his hands is an obsessional doubt (\"nada más siento que ahí están\"), not a perception; not responding to internal stimuli",
        "why": "Ask about perception in OCD as in any first visit, and listen for the difference between a fear and a sensation. Contamination fears can sound bodily (\"me queda algo en las manos\"), but he sees nothing and describes a doubt, not a sensation on the skin. If unsure, ask directly about touch. Write it in his words so no one later reads it as a tactile hallucination."
      },
      "content": {
        "ans": {
          "0": [
            "No. Es al revés. Me da miedo pasarle algo a alguien.",
            "No. It's the other way around. I'm afraid I'll pass something on to someone."
          ],
          "1": [
            "No, nunca.",
            "No, never."
          ],
          "2": [
            "No.",
            "No."
          ],
          "3": [
            "La verdad, creo que no están tan sucias. Pero cuando pienso «¿y si sí?», no me puedo controlar y me las lavo.",
            "Really, I think they are not that dirty. But when I think \"what if they are?\", I can't control myself and I wash them."
          ],
          "4": [
            "Sí. Yo mismo sé que le doy demasiadas vueltas.",
            "Yes. I know myself that I think about it too much."
          ],
          "5": [
            "Sí me siento un inútil. Todo me toma mucho tiempo y le doy carga a mi esposa. Pero no llego a pensar que no valgo nada. Y a veces le pido perdón a Dios muchas veces, hasta que siento que me escuchó.",
            "I do feel useless. Everything takes a lot of time and I'm a burden on my wife. But I don't go as far as thinking I'm worthless. And sometimes I ask God's forgiveness many times, until I feel he heard me."
          ],
          "6": [
            "No sé. Siempre pensé que yo era raro. Mi mamá dice que son nervios.",
            "I don't know. All along I thought I was just strange. My mom says it's nervios."
          ]
        },
        "key": [
          3,
          4
        ],
        "need": [
          "Preoccupation with ___",
          "No delusions elicited"
        ],
        "ok": [
          "Guilt or worthlessness (not delusional)"
        ],
        "wrong": {
          "Persecutory delusions": "He does not fear that anyone will harm him. He fears that he might make others ill, and he knows the fear is excessive.",
          "Delusions of reference": "He does not think things around him carry messages for him.",
          "Nihilistic delusions": "Nothing he says suggests this."
        },
        "ev": {
          "find": "Preoccupation with ___",
          "opts": [
            [
              "\"La verdad, creo que no están tan sucias. Pero cuando pienso «¿y si sí?», no me puedo controlar y me las lavo.\"",
              true
            ],
            [
              "\"No. Es al revés. Me da miedo pasarle algo a alguien.\"",
              false
            ],
            [
              "\"Mi mamá dice que son nervios.\"",
              false
            ]
          ],
          "why": "This line holds the whole picture: the contamination doubt, the washing he cannot resist, and his own view that the fear is excessive. That last part is what separates an obsession from a delusion."
        },
        "doc": "Preoccupation with contamination (germs on his hands, passing illness to others, especially his baby niece): obsessions with washing compulsions (many times a day, long showers, changing all his clothes on coming home) and checking compulsions (stove, locks, windows; payroll figures), more than three hours a day; seeks reassurance from his wife and the doctor; repeated asking of God's forgiveness (possible scrupulosity). Recognizes the fears as excessive (\"creo que no están tan sucias\"); no delusions elicited; no intrusive thoughts of harming others. Self-critical about the time lost (\"me siento un inútil\"), not delusional guilt",
        "why": "Two questions separate an obsession from a delusion: how sure he is, and whether there could be another explanation. He doubts his fear and calls it too much, so it is not delusional. Ask about other common themes as well, such as harm, symmetry, or unwanted sexual or religious thoughts, and record what he denies. His repeated asking for forgiveness may be scrupulosity: ask about it with respect and do not treat his faith as the problem. Note the reassurance seeking too. It works like a compulsion and keeps the cycle going."
      },
      "safety": {
        "ans": {
          "0": [
            "No llego a pensar que la vida no vale la pena. Si se puede mejorar, quiero mejorar.",
            "I don't go as far as thinking life isn't worth living. If it can get better, I want to get better."
          ],
          "1": [
            "No, eso no.",
            "No, not that."
          ],
          "2": [
            "Nunca he querido morirme. Tampoco he pensado en quitarme la vida.",
            "I've never wanted to die. I've never thought about taking my own life either."
          ],
          "3": [
            "No, no tengo.",
            "No, I don't."
          ],
          "4": [
            "No.",
            "No."
          ],
          "5": [
            "No. Nunca he querido hacerle daño a nadie. Lo que me da miedo es que alguien se enferme por mi culpa.",
            "No. I've never wanted to hurt anyone. I'm only afraid that someone will get sick because of me."
          ]
        },
        "key": [
          2,
          5
        ],
        "need": [
          "Denies suicidal ideation",
          "Denies homicidal ideation"
        ],
        "wrong": {
          "Passive death wish": "His mood is low, but he says he has never felt life was not worth living or wished not to wake up.",
          "Active suicidal ideation, no plan": "Asked directly, he says he has never thought about suicide.",
          "Homicidal ideation toward ___": "His fear of making others ill is the opposite of a wish to harm them. It distresses him, and he works hard to prevent it."
        },
        "ev": {
          "find": "Denies suicidal ideation",
          "opts": [
            [
              "\"Nunca he querido morirme. Tampoco he pensado en quitarme la vida.\"",
              true
            ],
            [
              "\"Si se puede mejorar, quiero mejorar.\"",
              false
            ],
            [
              "\"Lo que me da miedo es que alguien se enferme por mi culpa.\"",
              false
            ]
          ],
          "why": "Only his answer to the direct question rules out suicidal thoughts. Wanting to get better is a protective factor, not a denial. The last line is about harm to others, and shows a fear, not an intent."
        },
        "doc": "Denies suicidal ideation, death wish, plan or intent (\"nunca he querido morirme\"); denies homicidal ideation and thoughts of harming others; fears making others ill by contamination, which distresses him. A beer now and then. Protective: wants treatment, supportive wife",
        "why": "Ask every patient with low mood, even when the main problem is OCD: depression often comes with it, and the burden of the symptoms can grow. Ask again at follow-up. Do not confuse his fear of making others ill with a wish to harm. It is unwanted, and he does everything he can to prevent it."
      },
      "orientation": {
        "ans": {
          "0": [
            "Es jueves.",
            "It's Thursday."
          ],
          "1": [
            "En la clínica de psiquiatría, en el consultorio.",
            "In the psychiatry clinic, in your office."
          ],
          "2": [
            "Usted es la psiquiatra, ¿no?",
            "You're the psychiatrist, right?"
          ]
        },
        "need": [
          "Oriented to 3 spheres"
        ],
        "wrong": {
          "Disoriented to time": "He gives the day of the week at once.",
          "Disoriented to place": "He knows he is in the psychiatry clinic."
        },
        "doc": "Oriented to 3 spheres; alert; attention and concentration grossly intact through the interview",
        "why": "In a first outpatient visit with an alert, clear patient, orientation is quick, but still ask and record it. When he says he cannot get anything done, that comes from the intrusive doubts and the time the rituals take, not from a problem with his cognition."
      },
      "insight": {
        "ans": {
          "0": [
            "Sí. Siempre supe que era raro. Me dio un poco de alivio saber que es una enfermedad. Pero aunque lo sepa, no puedo parar.",
            "Yes. I always knew it was strange. It gave me a little relief to hear it's an illness. But even knowing it, I can't stop."
          ],
          "1": [
            "Vine solo hoy, pero fue mi esposa la que me dijo que viniera. Todos los días le pregunto a Araceli «¿verdad que está bien?», una y otra vez, y creo que ya está cansada.",
            "I came alone today, but it was my wife who told me to come. Every day I ask Araceli \"it's okay, right?\" again and again, and I think she is tired too."
          ],
          "2": [
            "Si es poco a poco, quiero probar la práctica. Y si una medicina ayuda, la consideraría.",
            "If it's a little at a time, I'd like to try the practice. And if a medicine helps, I'd think about it."
          ]
        },
        "need": [
          "Good",
          "Grade 5: intellectual insight"
        ],
        "ok": [
          "Grade 4: aware, cause unknown in self"
        ],
        "wrong": {
          "Grade 6: true emotional insight": "He understands that it is an illness, but cannot yet use that understanding to change what he does. That change is what treatment works toward.",
          "Grade 3: blames others/external factors": "He blames no one else. He sees the problem in himself.",
          "Poor": "He knows the fears are excessive, accepts that it is an illness and wants treatment."
        },
        "doc": "Good (grade 5): knows the fears are excessive (\"siempre supe que era raro\"), accepts it is an illness and wants treatment, but cannot stop the rituals; came at his wife's urging",
        "why": "In OCD, insight is also recorded as a specifier (good or fair, poor, absent), and it shapes how you explain treatment. His insight is a strength: he can understand why facing the fear without washing works, and why you will not keep reassuring him. Grade 4 is also defensible, since he does not yet know what causes it."
      },
      "impulse": {
        "obs": "Calm throughout. No irritability, even when you explain that you will not keep reassuring him.",
        "ans": {
          "0": [
            "No. Casi nunca me enojo. Si me enojo, es conmigo mismo.",
            "No. I hardly ever get angry. If I get angry, it is with myself."
          ],
          "1": [
            "No, nunca.",
            "No, never."
          ]
        },
        "need": [
          "Good impulse control"
        ],
        "wrong": {
          "Fair impulse control": "He has no history of losing his temper or acting recklessly, and stays calm in the interview.",
          "Poor impulse control": "He cannot stop washing, but a compulsion is not an impulse. It is done against his wish, to ease anxiety, and he tries to resist it. Impulse control here means anger, violence and reckless acts."
        },
        "doc": "Good impulse control; no history of temper outbursts or violence (\"nunca\"); calm in the interview, including when reassurance was declined",
        "why": "Do not let the words \"no puedo parar\" mislead you. An impulse is acted on for its own sake or in the heat of the moment. A compulsion is a ritual he does to make the anxiety go away, and he knows it is excessive. Record impulse control from anger, violence and recklessness."
      },
      "judgment": {
        "ans": {
          "0": [
            "Lo echaría en un buzón. ...Aunque después de agarrarlo, creo que querría lavarme las manos enseguida.",
            "I'd drop it in a mailbox. ...Though after picking it up, I think I'd want to wash my hands right away."
          ],
          "1": [
            "Les avisaría a los demás y saldría con calma por la salida de emergencia.",
            "I'd tell the others and leave calmly through the emergency exit."
          ]
        },
        "need": [
          "Fair",
          "Intact test judgment"
        ],
        "ok": [
          "Intact social judgment"
        ],
        "wrong": {
          "Good": "He came for help and accepts treatment, but only after about two years of hiding the symptoms, when they were making him late for work and tiring his wife.",
          "Poor": "His hypothetical answers are sensible, and he has now sought help and wants treatment.",
          "Impaired test judgment": "Mailing the letter and using the emergency exit calmly are sensible answers."
        },
        "doc": "Fair: intact test judgment (would mail the found letter, would tell others and leave by the emergency exit); hid the symptoms for about two years and came at his wife's urging, now that they make him late for work; accepts help and wants treatment",
        "why": "His answer about the letter is sensible, and it also shows the obsession at work. Judgment is fair rather than good because of the long delay, but write the strength too: he came, he was honest, and he wants treatment. Shame, not poor reasoning, kept him away."
      }
    }
  }
]);
