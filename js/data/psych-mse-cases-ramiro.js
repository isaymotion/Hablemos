/* Admission MSE practice case: Ramiro (alcohol withdrawal after a seizure). Same patient as the discharge case and case simulation of the same id, on the evening of admission.
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Appends to window.PSYCH_MSE_CASES. Shape as in psych-mse-cases.js. Medication examples are teaching examples only. */
window.PSYCH_MSE_CASES = (window.PSYCH_MSE_CASES || []).concat([
{
  "id": "ramiro",
  "title": "Ramiro on admission",
  "level": "B1",
  "dx": "Alcohol use disorder, severe, with alcohol withdrawal (seizure)",
  "form": "",
  "setting": "Admitting section, evening, the day after his withdrawal seizure in the ER. Ramiro, 52, construction worker, lives alone. His daughter Marisol came with him and is waiting outside.",
  "chart": [
    "About a pint of tequila daily for years, with \"la cruda\" every morning. Last drink about 2 days ago. Withdrawal seizure yesterday, treated in the ER (CIWA-Ar 18 on arrival). An earlier seizure years ago.",
    "Today: tremor, sweating, anxious, poor sleep. Daughter: he has said he does not want to wake up some nights. No known drug use. No known medical illness other than high blood pressure on no medicine.",
    "Lorazepam by symptom-triggered protocol and thiamine ordered (teaching example). Nursing watch for withdrawal."
  ],
  "cc": {
    "ask": "collateral:1",
    "ans": [
      "Doctor, mi papá toma desde hace años y ayer le dio un ataque. Está temblando y sudando, y me dijo que a veces ya no quiere despertar.",
      "Doctor, my dad has been drinking for years and yesterday he had a seizure. He's shaking and sweating, and he told me that sometimes he doesn't want to wake up anymore.",
      "Marisol (daughter)"
    ],
    "opts": [
      [
        "\"Mi papá toma desde hace años y ayer le dio un ataque. Está temblando y sudando, y me dijo que a veces ya no quiere despertar.\"",
        true,
        "The form records the chief complaint in the informant's own words, in Spanish, in quotation marks. Say who gave it."
      ],
      [
        "Alcohol withdrawal with seizure and passive suicidal ideation",
        false,
        "That is your interpretation. It belongs in the assessment and the MSE, not in the chief complaint."
      ],
      [
        "He drinks a lot, had a seizure, and sometimes wishes to die.",
        false,
        "A paraphrase loses the informant's words and adds a conclusion. Quote the Spanish."
      ]
    ]
  },
  "domains": {
    "appearance": {
      "obs": "Adult male, medium built, looks older than 52. Unshaven, hair uncombed, a sweat-soaked work shirt, wrinkled pants. Skin flushed and damp.",
      "ans": {
        "0": [
          "Buenas noches, doctora.",
          "Good evening, doctor."
        ],
        "1": [
          "Gracias. Perdone cómo me ve.",
          "Thank you. Forgive how I look."
        ]
      },
      "need": [
        "Adult male",
        "Medium built",
        "Unkempt"
      ],
      "ok": [
        "Looks older than stated age"
      ],
      "wrong": {
        "Well kempt": "Unshaven, sweat-soaked, and wrinkled clothing is not well kempt.",
        "Fairly kempt": "He looks like he has been sweating in the same shirt. That is unkempt."
      },
      "doc": "Adult male, medium built, looks older than stated age, unshaven, in sweat-soaked wrinkled clothes; skin flushed and damp",
      "why": "Describe what you see. Damp, flushed skin points to autonomic signs of withdrawal. Compare with discharge: shaved and clean means he has recovered."
    },
    "psychomotor": {
      "obs": "Fine tremor of both hands when he holds the form, and the tremor of his legs when seated. Shifts in the chair, cannot stay seated for long.",
      "ans": {
        "0": [
          "Sí, mi hija dice que no puedo estar quieto. Ayer me temblaba todo y hoy todavía me tiemblan las manos.",
          "Yes, my daughter says I can't stay still. Yesterday everything was shaking and today my hands still shake."
        ]
      },
      "need": [
        "Tremor",
        "Restless"
      ],
      "ok": [
        "Psychomotor agitation"
      ],
      "wrong": {
        "No psychomotor agitation or retardation": "You can see his hands shake and he keeps shifting.",
        "Psychomotor retardation": "He is not slowed down. He cannot sit still."
      },
      "doc": "Tremor of both hands (fine, with action) and restless, shifting in the chair; no abnormal involuntary movements",
      "why": "In alcohol withdrawal the tremor is often the earliest and most visible sign. Record it each shift so the team can see the trend. A rising tremor with sweating is a reason to call the doctor."
    },
    "attitude": {
      "obs": "Polite and open. Looks down when speaking about his drinking, then looks up at you. Thanks you for seeing him.",
      "ans": {
        "0": [
          "Ramiro, doctora. Nomás Ramiro.",
          "Ramiro, doctor. Just Ramiro."
        ],
        "1": [
          "En español, por favor. Mi inglés es de obra, nomás lo que uso en el trabajo.",
          "In Spanish, please. My English is from the job site, just what I use at work."
        ]
      },
      "need": [
        "Cooperative",
        "Fair eye contact"
      ],
      "wrong": {
        "Guarded": "He answers fully. Looking down when he speaks of his drinking is shame, not guardedness.",
        "Hostile": "He is polite and thanks you."
      },
      "doc": "Cooperative and polite; fair eye contact (looks down when speaking of his drinking)",
      "why": "Shame is common with alcohol use disorder. Say what he can do, not what he has done, and keep your tone calm and matter-of-fact. Eye contact will usually improve once he feels you are not judging."
    },
    "mood": {
      "obs": "Tense face, brow furrowed, fidgeting. Eyes fill once when he talks about Marisol. Affect fits what he says.",
      "ans": {
        "0": [
          "Muy nervioso, doctora. Siento que se me sale el corazón.",
          "Very nervous, doctor. I feel like my heart is going to jump out."
        ],
        "1": [
          "Desde hace meses, bien decaído. La cruda no me deja y me siento una carga para mi hija.",
          "For months, really down. The hangover won't leave me alone and I feel like a burden to my daughter."
        ],
        "2": [
          "Un tres.",
          "A three."
        ]
      },
      "quote": "Desde hace meses, bien decaído. La cruda no me deja y me siento una carga para mi hija. (For months, really down. The hangover won't leave me alone and I feel like a burden to my daughter.)",
      "need": [
        "Anxious mood",
        "Sad mood",
        "Congruent affect"
      ],
      "ok": [
        "Restricted affect"
      ],
      "ev": {
        "find": "Anxious mood",
        "opts": [
          [
            "\"Muy nervioso, doctora. Siento que se me sale el corazón.\"",
            true
          ],
          [
            "\"Un tres.\"",
            false
          ],
          [
            "\"Desde hace meses, bien decaído.\"",
            false
          ]
        ],
        "why": "He names nervousness and a racing heart in his own words. That points to anxious mood, which fits early withdrawal. The months of feeling down are a separate, sad mood that you record too."
      },
      "wrong": {
        "Euthymic mood": "He rates his mood 3 out of 10 and reports months of feeling down.",
        "Flat affect": "He shows tension and tears at fitting moments.",
        "Euphoric mood": "Nothing suggests elation."
      },
      "doc": "\"Muy nervioso, doctora. Siento que se me sale el corazón.\" (Very nervous, doctor. I feel like my heart is going to jump out.) Anxious and sad mood, 3/10; tense, congruent affect",
      "why": "Anxiety in the first days is part of withdrawal and may settle. Low mood that predates it, as he describes, is a different finding. Note both, and plan to review the mood after withdrawal clears."
    },
    "speech": {
      "obs": "Speaks freely and in detail. Voice slightly shaky, normal rate and volume.",
      "ans": {
        "0": [
          "Llevaba dos días sin tomar, me temblaba todo y me dio un ataque. No me acuerdo de más. Desperté en emergencias con mi hija llorando.",
          "I had gone two days without drinking, everything was shaking, and I had a fit. I don't remember more. I woke up in the ER with my daughter crying."
        ]
      },
      "need": [
        "Spontaneous",
        "Productive",
        "Normal rate",
        "Adequate volume"
      ],
      "wrong": {
        "Pressured": "Normal rate, and easy to interrupt.",
        "Slow rate": "He speaks at a normal pace.",
        "Poverty of speech": "He gives the story freely and in detail."
      },
      "doc": "Spontaneous, productive, normal rate and volume; voice slightly tremulous",
      "why": "Speech tells you whether he is still clear. In worsening withdrawal it can become rapid, confused, or incoherent. Record the baseline tonight."
    },
    "process": {
      "ans": {
        "0": [
          "Llevaba dos días sin tomar, me temblaba todo y me dio un ataque. No me acuerdo de más. Desperté en emergencias con mi hija llorando.",
          "I had gone two days without drinking, everything was shaking, and I had a fit. I don't remember more. I woke up in the ER with my daughter crying."
        ],
        "1": [
          "Que me siento una carga, doctora. Mi hija merece algo mejor que un papá así.",
          "That I feel like a burden, doctor. My daughter deserves better than a dad like this."
        ]
      },
      "need": [
        "Linear",
        "Goal-directed"
      ],
      "wrong": {
        "Circumstantial": "He gets to the point without extra detail.",
        "Loose associations": "Each idea follows from the last."
      },
      "doc": "Linear and goal-directed",
      "why": "A clear thought process the day after a seizure is reassuring. A new loss of the thread over the next days would point to delirium and needs a doctor at once."
    },
    "perception": {
      "ans": {
        "0": [
          "No, nada.",
          "No, nothing."
        ],
        "1": [
          "No.",
          "No."
        ],
        "2": [
          "No, doctora. Ni bichos ni nada.",
          "No, doctor. No bugs or anything."
        ],
        "3": [
          "No hay voces.",
          "There are no voices."
        ],
        "4": [
          "No.",
          "No."
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
        "Visual hallucinations": "He denies seeing anything. Ask this each shift, because they can appear late in withdrawal.",
        "Tactile hallucinations": "He denies feeling bugs on his skin."
      },
      "doc": "Denies auditory, visual, and tactile hallucinations; not responding to internal stimuli. Recheck each shift",
      "why": "In alcohol withdrawal, ask about things that are not there, such as bugs on the skin, shadows, or voices. A denial tonight does not close the question, since hallucinosis and delirium can start on day 2 or 3."
    },
    "content": {
      "ans": {
        "0": [
          "No, nadie.",
          "No, nobody."
        ],
        "1": [
          "No.",
          "No."
        ],
        "2": [
          "No, nada de eso.",
          "No, nothing like that."
        ],
        "3": [
          "Pues sé que mi hija no me lo dice, pero yo me siento así.",
          "Well, I know my daughter doesn't say it, but I feel that way."
        ],
        "4": [
          "Marisol dice que me quiere y que quiere que me cure. Quizá tenga razón.",
          "Marisol says she loves me and wants me to get well. Maybe she's right."
        ],
        "5": [
          "Sí. Le fallé a Marisol, a toda mi familia. Soy un fracaso.",
          "Yes. I let Marisol down, my whole family. I'm a failure."
        ],
        "6": [
          "Es el tequila. Empezó para aguantar el trabajo y ya me ganó.",
          "It's the tequila. It started to get through the work and now it's beaten me."
        ]
      },
      "key": [
        3,
        5
      ],
      "need": [
        "Guilt or worthlessness (not delusional)"
      ],
      "ok": [
        "No delusions elicited"
      ],
      "wrong": {
        "Persecutory delusions": "He denies that anyone wants to harm or follow him.",
        "Nihilistic delusions": "He feels like a failure but does not believe he is dead or that his body is gone."
      },
      "ev": {
        "find": "Guilt or worthlessness (not delusional)",
        "opts": [
          [
            "\"Le fallé a Marisol, a toda mi familia. Soy un fracaso.\"",
            true
          ],
          [
            "\"Es el tequila. Empezó para aguantar el trabajo y ya me ganó.\"",
            false
          ],
          [
            "\"No, nadie.\"",
            false
          ]
        ],
        "why": "Feeling like a failure and a burden is guilt and worthlessness. He can consider his daughter's view (\"quizá tenga razón\"), so it is not fixed. This theme also raises risk, so go on to the suicide questions with care."
      },
      "doc": "Guilt and worthlessness (\"le fallé a Marisol, soy un fracaso\"), not delusional. No persecutory or other delusions elicited. He attributes his state to alcohol",
      "why": "Shame and guilt are common here. Ask how sure he is and whether there could be another explanation. His own explanation, the tequila, shows a useful realistic view."
    },
    "safety": {
      "ans": {
        "0": [
          "Pues... a veces sí. No le veo caso.",
          "Well... sometimes, yes. I don't see the point."
        ],
        "1": [
          "Sí, a veces en la noche pienso que sería mejor no despertar.",
          "Yes, sometimes at night I think it would be better not to wake up."
        ],
        "2": [
          "No, doctora. Eso no. Yo no me haría daño.",
          "No, doctor. Not that. I wouldn't hurt myself."
        ],
        "3": [
          "No, ningún plan.",
          "No, no plan."
        ],
        "4": [
          "No. Nada de eso.",
          "No. Nothing like that."
        ],
        "5": [
          "No. Nunca. A nadie.",
          "No. Never. Nobody."
        ]
      },
      "key": [
        1,
        2,
        3
      ],
      "need": [
        "Passive death wish",
        "Denies homicidal ideation"
      ],
      "wrong": {
        "Denies suicidal ideation": "He says that at night he thinks it would be better not to wake up. That is a passive death wish.",
        "Active suicidal ideation, no plan": "He denies thoughts of killing himself.",
        "Active suicidal ideation with plan": "He denies any plan or intent."
      },
      "ev": {
        "find": "Passive death wish",
        "opts": [
          [
            "\"Sí, a veces en la noche pienso que sería mejor no despertar.\"",
            true
          ],
          [
            "\"No, ningún plan.\"",
            false
          ],
          [
            "\"No. Nunca. A nadie.\"",
            false
          ]
        ],
        "why": "Wishing not to wake up, with no thought of acting, is a passive death wish. His denials of a plan and of harming others are separate findings. Keep him on frequent checks and ask again as withdrawal clears. Depression can lift or deepen."
      },
      "doc": "Passive death wish (\"sería mejor no despertar\"); denies active suicidal ideation, plan, or intent; denies homicidal ideation. Protective: daughter Marisol. Reassess daily",
      "why": "Ask in order: death wish, then active thoughts, plan, intent. Alcohol withdrawal and intoxication both raise suicide risk, so a passive wish matters. Name his daughter as a support and ask again once he is sober."
    },
    "orientation": {
      "ans": {
        "0": [
          "Es viernes, ¿no? Ayer me trajeron a emergencias.",
          "It's Friday, right? Yesterday they took me to the ER."
        ],
        "1": [
          "En el hospital. Me quedé aquí después del ataque.",
          "At the hospital. I stayed here after the fit."
        ],
        "2": [
          "Usted es la doctora de psiquiatría.",
          "You're the psychiatry doctor."
        ]
      },
      "need": [
        "Oriented to 3 spheres"
      ],
      "doc": "Oriented to 3 spheres",
      "why": "Orientation is your early warning for delirium tremens. Check it each shift. New confusion about day or place is an emergency, so call the doctor at once."
    },
    "insight": {
      "ans": {
        "0": [
          "Yo no soy un borracho. El ataque fue por dejar de golpe. Con lo que trabajo, el trago me ayuda con el cuerpo.",
          "I'm not a drunk. The fit was from stopping all at once. With the work I do, the drink helps my body."
        ],
        "1": [
          "Mi hija me trajo porque se asustó. Yo también me asusté.",
          "My daughter brought me because she got scared. I got scared too."
        ],
        "2": [
          "No sé. Si me quita la cruda, sí. Pero ya he oído de pastillas que no funcionan.",
          "I don't know. If it takes away the hangover, yes. But I've heard of pills that don't work."
        ]
      },
      "key": [
        0
      ],
      "need": [
        "Poor",
        "Grade 3: blames others/external factors"
      ],
      "ok": [
        "Grade 2: slight awareness"
      ],
      "wrong": {
        "Grade 1: complete denial": "He admits the drinking led to the seizure and he got scared.",
        "Good": "He blames the work and the sudden stop, and doubts medicine."
      },
      "ev": {
        "find": "Grade 3: blames others/external factors",
        "opts": [
          [
            "\"Yo no soy un borracho. El ataque fue por dejar de golpe. Con lo que trabajo, el trago me ayuda con el cuerpo.\"",
            true
          ],
          [
            "\"Mi hija me trajo porque se asustó. Yo también me asusté.\"",
            false
          ],
          [
            "\"Es el tequila. Empezó para aguantar el trabajo.\"",
            false
          ]
        ],
        "why": "He puts the cause outside himself: the hard work and the sudden stop. That is grade 3. The fear after the seizure is an opening. Build on it, because it is his own reason to change."
      },
      "doc": "Poor (grade 3): attributes the seizure to stopping suddenly and drinking to the demands of his work; rejects the label \"borracho\"; ambivalent about medicine, though frightened by the seizure",
      "why": "Avoid labels. Use his words and his fear after the seizure as the bridge to treatment. Insight often improves as withdrawal clears."
    },
    "impulse": {
      "ans": {
        "0": [
          "No, yo soy tranquilo. Cuando tomo me pongo callado.",
          "No, I'm calm. When I drink I get quiet."
        ],
        "1": [
          "Nunca, doctora. Ni cuando ando bien tomado.",
          "Never, doctor. Not even when I'm really drunk."
        ]
      },
      "need": [
        "Fair impulse control"
      ],
      "wrong": {
        "Good impulse control": "He kept drinking despite a prior seizure and daily harms. Control around alcohol is not good.",
        "Poor impulse control": "He has no history of violence or reckless acts. The problem is the alcohol, not a general lack of control."
      },
      "doc": "Fair impulse control: no history of violence or aggression; continued drinking despite harms; calm and cooperative in the interview",
      "why": "Separate loss of control over drinking from general impulsivity. Document the pattern with alcohol, and note that he has been calm and safe on the unit."
    },
    "judgment": {
      "ans": {
        "0": [
          "Lo echaría al buzón.",
          "I'd drop it in the mailbox."
        ],
        "1": [
          "Saldría rápido, sin correr, y le avisaría a alguien.",
          "I'd get out quickly, without running, and tell someone."
        ]
      },
      "need": [
        "Intact test judgment",
        "Impaired social judgment"
      ],
      "ok": [
        "Fair"
      ],
      "wrong": {
        "Intact social judgment": "He kept drinking after an earlier seizure and delayed care.",
        "Good": "Test answers are fine, but real decisions about his health were not.",
        "Poor": "His test judgment is intact and he came for care in the end."
      },
      "doc": "Fair: intact test judgment; impaired social judgment (kept drinking daily after an earlier seizure)",
      "why": "Give the reason, not just a grade. His hypothetical answers are good, but his real choices put his health at risk."
    }
  }
}
]);
