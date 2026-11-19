/* Admission MSE practice case: Lupe (depressive episode after an overdose). Same patient as the discharge case and case simulation of the same id, on the evening of admission.
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Appends to window.PSYCH_MSE_CASES. Shape as in psych-mse-cases.js. Medication examples are teaching examples only. */
window.PSYCH_MSE_CASES = (window.PSYCH_MSE_CASES || []).concat([
{
  "id": "lupe",
  "title": "Lupe on admission",
  "level": "B2",
  "dx": "Major depressive disorder, severe, after a suicide attempt",
  "form": "",
  "setting": "Admitting section, evening. Lupe (Guadalupe), 46, hotel housekeeper, separated, mother of three. Brought to the unit by her sister Carmen after medical clearance in the ER.",
  "chart": [
    "No earlier psychiatric admission. One untreated depressive episode about 8 years ago. Her husband left about two months ago.",
    "Sister: weeks of poor sleep, crying, little appetite, \"nervios\". This afternoon Lupe took sleeping pills belonging to her sister, then called her. ER: medically cleared, awake and oriented.",
    "Her husband's pistol is still in the house. Her sister keeps her own medicines at home. No known substance use. No known medical illness."
  ],
  "cc": {
    "ask": "collateral:1",
    "ans": [
      "Doctora, no come ni duerme desde que su esposo se fue. Hoy me dijo que ya no quería vivir y se tomó unas pastillas mías para dormir.",
      "Doctor, she doesn't eat or sleep since her husband left. Today she told me she didn't want to live anymore and she took some of my sleeping pills.",
      "Carmen (sister)"
    ],
    "opts": [
      [
        "\"No come ni duerme desde que su esposo se fue. Hoy me dijo que ya no quería vivir y se tomó unas pastillas mías para dormir.\"",
        true,
        "The form records the chief complaint in the informant's own words, in Spanish, in quotation marks. Say who gave it."
      ],
      [
        "Major depression with a suicide attempt by overdose",
        false,
        "That is your diagnosis and your interpretation. It belongs in the assessment, not in the chief complaint."
      ],
      [
        "She has not been eating or sleeping and tried to kill herself today.",
        false,
        "A paraphrase loses the informant's words. Quote the Spanish and add a translation in parentheses if your service requires it."
      ]
    ]
  },
  "domains": {
    "appearance": {
      "obs": "Adult female, medium built, still in her wrinkled hotel work uniform. Hair loose and uncombed, no makeup, eyes swollen from crying. Clothes clean, no odor.",
      "ans": {
        "0": [
          "(en voz baja) Buenas noches, doctora.",
          "(in a low voice) Good evening, doctor."
        ],
        "1": [
          "Sí, gracias. Con permiso.",
          "Yes, thank you. Excuse me."
        ]
      },
      "need": [
        "Adult female",
        "Medium built",
        "Fairly kempt"
      ],
      "ok": [
        "Unkempt"
      ],
      "wrong": {
        "Well kempt": "Uncombed hair, wrinkled uniform, and swollen eyes after a hard day are not well kempt.",
        "Poor hygiene": "She is clean and has no odor. Disheveled is not the same as poor hygiene."
      },
      "doc": "Adult female, medium built, in a wrinkled work uniform, hair uncombed, eyes swollen; clean, fairly kempt",
      "why": "Describe what you see and keep hygiene separate from grooming. A tidy person who is now disheveled is a change worth noting. It gives you a baseline for later days."
    },
    "psychomotor": {
      "obs": "Moves slowly. Long pauses before she stands or sits. Hands rest in her lap. No tremor.",
      "ans": {
        "0": [
          "Mi hermana dice que ando como lenta. Hasta levantarme de la cama me cuesta.",
          "My sister says I'm kind of slow. Even getting out of bed is hard for me."
        ]
      },
      "need": [
        "Psychomotor retardation"
      ],
      "wrong": {
        "Psychomotor agitation": "She is slowed, not speeded up. Hands stay still.",
        "Restless": "She sits still. Nothing in her movement is restless.",
        "No psychomotor agitation or retardation": "Slow movement and long pauses are visible. Her sister has noticed it too."
      },
      "doc": "Psychomotor retardation (slowed movement, long pauses); no tremor or abnormal movements",
      "why": "Slowing you can see is stronger evidence than \"I feel slow\". Separate it from sedation after an overdose: she is awake and answers sensibly, and the ER has already cleared her."
    },
    "attitude": {
      "obs": "Looks at the floor most of the time and lifts her eyes when she mentions her children. Answers every question. Thanks you twice.",
      "ans": {
        "0": [
          "Lupe. O Guadalupe, como usted quiera, doctora.",
          "Lupe. Or Guadalupe, whichever you like, doctor."
        ],
        "1": [
          "En español, por favor. El inglés me pone más nerviosa.",
          "In Spanish, please. English makes me more nervous."
        ]
      },
      "need": [
        "Cooperative",
        "Fair eye contact"
      ],
      "ok": [
        "Poor eye contact"
      ],
      "wrong": {
        "Guarded": "She answers fully and thanks you. Lowered eyes here fit respeto toward a doctor and a depressed, ashamed mood.",
        "Uncooperative": "She answers every question."
      },
      "doc": "Cooperative; fair eye contact (looks down often, looks up when speaking of her children)",
      "why": "Lowered eyes can be respeto, shame, or depression. Look at the whole picture before calling it guarded. Offering Spanish and her preferred name early also helps her relax."
    },
    "mood": {
      "obs": "Tearful. Tears fall when you ask about her children. Little change in expression otherwise. Affect fits what she says.",
      "ans": {
        "0": [
          "Mal, doctora. Con los nervios, bien mal.",
          "Bad, doctor. With my nerves, really bad."
        ],
        "1": [
          "Triste todo el tiempo desde que mi esposo se fue. Ya no tengo ganas de nada.",
          "Sad all the time since my husband left. I don't feel like doing anything anymore."
        ],
        "2": [
          "Un uno.",
          "A one."
        ]
      },
      "quote": "Triste todo el tiempo desde que mi esposo se fue. Ya no tengo ganas de nada. (Sad all the time since my husband left. I don't feel like doing anything anymore.)",
      "need": [
        "Sad mood",
        "Restricted affect",
        "Congruent affect"
      ],
      "ok": [
        "Anxious mood"
      ],
      "wrong": {
        "Euthymic mood": "She rates her mood 1 out of 10 and cries as she speaks.",
        "Flat affect": "She cries and her face moves at fitting moments. That is restricted, not flat.",
        "Labile affect": "Her feelings stay low and steady. They do not swing."
      },
      "doc": "\"Triste todo el tiempo desde que mi esposo se fue. Ya no tengo ganas de nada.\" (Sad all the time since my husband left. I don't feel like doing anything anymore.) Sad mood, 1/10; restricted, tearful, congruent affect",
      "why": "Quote her words for mood and describe affect separately. \"Nervios\" is her idiom for distress. Record it and also ask about sleep, appetite, and interest so the depressive syndrome is clear."
    },
    "speech": {
      "obs": "Speaks only when asked, in a low voice, slowly, with pauses. Complete sentences.",
      "ans": {
        "0": [
          "Fue mi esposo... se fue, y yo ya no aguantaba. Tomé las pastillas de mi hermana. Me arrepentí y le hablé.",
          "It was my husband... he left, and I couldn't take it anymore. I took my sister's pills. I regretted it and called her."
        ]
      },
      "need": [
        "Non-spontaneous (answers only when asked)",
        "Slow rate",
        "Soft volume"
      ],
      "ok": [
        "Productive"
      ],
      "wrong": {
        "Pressured": "Her speech is slow and easy to interrupt.",
        "Poverty of speech": "When asked, she gives a full account. The speech is slowed and quiet, not empty."
      },
      "doc": "Non-spontaneous, slow rate, soft volume; answers are complete when asked",
      "why": "Slow, quiet speech that gives full answers is a sign of depression, not poverty of speech. Poverty means few words even when you ask for more."
    },
    "process": {
      "ans": {
        "0": [
          "Fue mi esposo... se fue, y yo ya no aguantaba. Tomé las pastillas de mi hermana. Me arrepentí y le hablé.",
          "It was my husband... he left, and I couldn't take it anymore. I took my sister's pills. I regretted it and called her."
        ],
        "1": [
          "Que ya no podía con el cansancio, con el llanto, con ver a mis hijos y no poder darles nada.",
          "That I couldn't handle the tiredness, the crying, seeing my children and not being able to give them anything."
        ]
      },
      "need": [
        "Linear",
        "Goal-directed"
      ],
      "wrong": {
        "Thought blocking": "She pauses because of slowing, then picks up the same thread.",
        "Tangential": "She answers the question that was asked."
      },
      "doc": "Linear and goal-directed; slowed but coherent",
      "why": "Ask what she means by \"ya no aguantaba\". It explains the phrase and shows the thought sequence. Long pauses from slowing are not blocking when she returns to the same idea."
    },
    "perception": {
      "ans": {
        "0": [
          "No, doctora.",
          "No, doctor."
        ],
        "1": [
          "No, nadie me susurra.",
          "No, nobody whispers to me."
        ],
        "2": [
          "No. Nada de eso.",
          "No. Nothing like that."
        ],
        "3": [
          "No oigo voces. Lo que oigo es mi propio pensamiento, que me dice que soy mala madre.",
          "I don't hear voices. What I hear is my own thought telling me I'm a bad mother."
        ],
        "4": [
          "No.",
          "No."
        ]
      },
      "key": [
        0,
        3
      ],
      "need": [
        "Denies perceptual disturbances",
        "Not responding to internal stimuli"
      ],
      "wrong": {
        "Auditory hallucinations": "She knows the critical voice is her own thought. That is guilty rumination, not a hallucination.",
        "Responding to internal stimuli": "She attends to you and does not turn away or mutter."
      },
      "ev": {
        "find": "Denies perceptual disturbances",
        "opts": [
          [
            "\"No oigo voces. Lo que oigo es mi propio pensamiento, que me dice que soy mala madre.\"",
            true
          ],
          [
            "\"No, nadie me susurra.\"",
            false
          ],
          [
            "\"Mal, doctora. Con los nervios, bien mal.\"",
            false
          ]
        ],
        "why": "She separates her own self-critical thought from a voice outside her. That separation is the key. Hearing \"I'm a bad mother\" in her own mind is guilt, not a hallucination. Severe depression can have psychotic features, so you still ask."
      },
      "doc": "Denies hallucinations in any modality; not responding to internal stimuli. Self-critical thoughts recognized as her own",
      "why": "Ask what the voice says, so you can tell an inner critic from a true hallucination. Mood-congruent psychosis changes treatment and risk, so never skip these questions in severe depression."
    },
    "content": {
      "ans": {
        "0": [
          "No, nadie me quiere hacer daño.",
          "No, nobody wants to hurt me."
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
          "Sé que mis hijos me necesitan, pero siento que soy mala madre.",
          "I know my children need me, but I feel like I'm a bad mother."
        ],
        "4": [
          "Mi hermana dice que no, que soy buena madre. Quizá tenga razón, pero no lo siento así.",
          "My sister says no, that I'm a good mother. Maybe she's right, but I don't feel it."
        ],
        "5": [
          "Sí. Me siento culpable con mis hijos, como que no sirvo para nada.",
          "Yes. I feel guilty with my children, like I'm good for nothing."
        ],
        "6": [
          "Yo creo que son los nervios, y que Dios me está probando. Mi hermana dice que es depresión.",
          "I think it's my nerves, and that God is testing me. My sister says it's depression."
        ]
      },
      "key": [
        4,
        5
      ],
      "need": [
        "Guilt or worthlessness (not delusional)"
      ],
      "ok": [
        "No delusions elicited"
      ],
      "wrong": {
        "Persecutory delusions": "She denies that anyone wants to harm or follow her.",
        "Nihilistic delusions": "She does not believe she is dead, rotting, or that her body no longer exists. She feels guilty and worthless."
      },
      "ev": {
        "find": "Guilt or worthlessness (not delusional)",
        "opts": [
          [
            "\"Quizá tenga razón, pero no lo siento así.\"",
            true
          ],
          [
            "\"Me siento culpable con mis hijos, como que no sirvo para nada.\"",
            false
          ],
          [
            "\"Yo creo que son los nervios, y que Dios me está probando.\"",
            false
          ]
        ],
        "why": "Guilt becomes delusional only when it is fixed. She can consider that her sister may be right, so the belief is held with doubt. Her faith explanation is a cultural and religious frame, not a delusion."
      },
      "doc": "Guilt and worthlessness about her children (\"siento que soy mala madre\"), not delusional (can consider that she is a good mother). No persecutory or other delusions elicited. She attributes her state to \"nervios\" and a test from God",
      "why": "Ask \"how sure are you?\" and \"could there be another explanation?\" to separate heavy guilt from delusional guilt. Treat her explanation of \"nervios\" and faith with respect and record it in her words."
    },
    "safety": {
      "ans": {
        "0": [
          "Sí, doctora. Ya no vale la pena.",
          "Yes, doctor. It's not worth it anymore."
        ],
        "1": [
          "Sí. Esta mañana quería dormirme y no despertar.",
          "Yes. This morning I wanted to go to sleep and not wake up."
        ],
        "2": [
          "Sí. Hoy más tarde pensé en quitarme la vida, de verdad.",
          "Yes. Later today I thought about killing myself, for real."
        ],
        "3": [
          "Hay una pistola en la casa, de mi esposo. Pensé en eso.",
          "There's a pistol at the house, my husband's. I thought about it."
        ],
        "4": [
          "No sé... si estuviera sola en mi casa, no sé si me detendría. Aquí, con mi hermana cerca, me siento más segura.",
          "I don't know... if I were alone at home, I don't know if I'd stop myself. Here, with my sister close, I feel safer."
        ],
        "5": [
          "No. A nadie. Es a mí a quien le hago daño.",
          "No. Nobody. It's me I hurt."
        ]
      },
      "key": [
        2,
        3,
        4
      ],
      "need": [
        "Active suicidal ideation with plan",
        "Denies homicidal ideation"
      ],
      "ok": [
        "Passive death wish"
      ],
      "wrong": {
        "Denies suicidal ideation": "She acted today and still has thoughts.",
        "Active suicidal ideation, no plan": "She names a pistol at home that she thought about, and she acted today. That is a plan with access to means.",
        "Homicidal ideation toward ___": "She denies any thought of harming others."
      },
      "ev": {
        "find": "Active suicidal ideation with plan",
        "opts": [
          [
            "\"Hay una pistola en la casa, de mi esposo. Pensé en eso.\"",
            true
          ],
          [
            "\"Esta mañana quería dormirme y no despertar.\"",
            false
          ],
          [
            "\"No sé... si estuviera sola en mi casa, no sé si me detendría.\"",
            false
          ]
        ],
        "why": "A named means that she has access to and thought about makes this a plan. The morning wish not to wake up is passive. Her uncertainty about stopping herself at home shows intent is not settled. Note it, and make restricting access to the pistol a priority."
      },
      "doc": "Active suicidal ideation with plan: earlier today passive death wish, then thoughts of killing herself; thought about her husband's pistol at home (access to means); suicide attempt by overdose this afternoon; unsure she could stop herself if alone. Denies homicidal ideation. Protective: three children, faith, called her sister after the attempt",
      "why": "Go from general to specific: death wish, ideation, plan, intent, then access to means. Ask about means without asking for method detail, and name the next step: her brother can remove the pistol. A protective factor, such as calling her sister, goes in the note too."
    },
    "orientation": {
      "ans": {
        "0": [
          "Es jueves... sí, jueves.",
          "It's Thursday... yes, Thursday."
        ],
        "1": [
          "En el hospital, en la unidad de psiquiatría. Mi hermana me trajo.",
          "At the hospital, in the psychiatry unit. My sister brought me."
        ],
        "2": [
          "Usted es la doctora que me va a atender.",
          "You're the doctor who's going to take care of me."
        ]
      },
      "need": [
        "Oriented to 3 spheres"
      ],
      "doc": "Oriented to 3 spheres",
      "why": "After an overdose, check orientation again. Confusion or drowsiness would send you back to the medical team before any psychiatric conclusion."
    },
    "insight": {
      "ans": {
        "0": [
          "Sí, algo tengo. Son los nervios, ya no soy la misma.",
          "Yes, I have something. It's my nerves, I'm not the same anymore."
        ],
        "1": [
          "Porque tomé las pastillas. Mi hermana se asustó. Yo también.",
          "Because I took the pills. My sister got scared. Me too."
        ],
        "2": [
          "Quizá. Mi hermana dice que ayuda. No sé, pero quiero probar por mis hijos.",
          "Maybe. My sister says it helps. I don't know, but I want to try for my children."
        ]
      },
      "key": [
        0
      ],
      "need": [
        "Fair",
        "Grade 4: aware, cause unknown in self"
      ],
      "ok": [
        "Grade 5: intellectual insight"
      ],
      "wrong": {
        "Grade 1: complete denial": "She knows she is unwell and agrees something is wrong.",
        "Good": "She cannot yet name the illness or say clearly what treatment would do. That is fair, not good."
      },
      "ev": {
        "find": "Grade 4: aware, cause unknown in self",
        "opts": [
          [
            "\"Sí, algo tengo. Son los nervios, ya no soy la misma.\"",
            true
          ],
          [
            "\"Porque tomé las pastillas. Mi hermana se asustó.\"",
            false
          ],
          [
            "\"Quiero probar por mis hijos.\"",
            false
          ]
        ],
        "why": "She knows something is wrong and calls it \"nervios\". She does not yet name a depressive illness. That is grade 4. Her openness to medicine for her children is a strength you can build on."
      },
      "doc": "Fair (grade 4): aware that something is wrong (\"son los nervios, ya no soy la misma\"), explains it as nervios, open to trying medicine for her children",
      "why": "Use her word, \"nervios\", as a bridge to talk about depression. Her willingness to try treatment matters more than the label she uses."
    },
    "impulse": {
      "ans": {
        "0": [
          "No, yo no me enojo. Lo que hago es llorar.",
          "No, I don't get angry. What I do is cry."
        ],
        "1": [
          "Nunca, doctora. Ni a mis hijos les he levantado la mano.",
          "Never, doctor. I've never even raised a hand to my children."
        ]
      },
      "need": [
        "Fair impulse control"
      ],
      "wrong": {
        "Good impulse control": "She acted on a suicidal urge today. Control is not fully good.",
        "Poor impulse control": "She has no history of violence, destruction, or reckless behavior. The attempt is a safety finding, not a pattern of poor control."
      },
      "doc": "Fair impulse control: no history of aggression; suicide attempt today in the setting of acute distress; calm and controlled during the interview",
      "why": "Judge impulse control from history and from the interview. Keep an overdose in context: it matters a great deal for safety, but it is not a pattern of aggression."
    },
    "judgment": {
      "ans": {
        "0": [
          "Lo echaría al buzón.",
          "I'd drop it in the mailbox."
        ],
        "1": [
          "Saldría con calma y avisaría a la gente.",
          "I'd leave calmly and warn people."
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
        "Intact social judgment": "She took pills as a way out of her distress today.",
        "Good": "Hypothetical answers are fine, but today's decision was not.",
        "Poor": "Her test judgment is intact and she called her sister after the attempt. That shows some sound judgment."
      },
      "doc": "Fair: intact test judgment; impaired social judgment (overdose today). She sought help afterward by calling her sister",
      "why": "Test judgment can be intact while real-life judgment fails under severe depression. Calling her sister after the attempt is a strength. Write it in the note."
    }
  }
}
]);
