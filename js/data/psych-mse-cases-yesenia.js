/* Admission MSE practice case: Yesenia (opioid withdrawal, day one). Same patient as the discharge case and case simulation of the same id, on the evening of admission.
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Appends to window.PSYCH_MSE_CASES. Shape as in psych-mse-cases.js. Medication examples are teaching examples only. */
window.PSYCH_MSE_CASES = (window.PSYCH_MSE_CASES || []).concat([
{
  "id": "yesenia",
  "title": "Yesenia on admission",
  "level": "B2",
  "dx": "Opioid use disorder, severe, with opioid withdrawal; PTSD symptoms",
  "form": "",
  "setting": "Admitting section, evening, day 1. Yesenia, 31, nail technician, mother of two children (6 and 3) who are now with her mother, Doña Lidia. Her mother brought her in and is in the waiting area.",
  "chart": [
    "After a back injury she was prescribed oxycodone. When it ran out she began smoking fentanyl pills (\"las azules\"). She has tried to stop and could not. One overdose, reversed with naloxone by a friend; ambulance, ER, then admitted.",
    "Mother: nights awake, sweating, restless, vomiting this morning. Yesenia has bad dreams and jumps at sudden noises since an assault; she does not want to give details.",
    "Today: yawning, runny nose, goosebumps, aches. COWS 12 (administer the scale separately). Urine drug screen positive for fentanyl. No known medical illness."
  ],
  "cc": {
    "ask": "collateral:1",
    "ans": [
      "Doctora, mi hija casi se muere. Su amiga le echó el Narcan y la llevaron en ambulancia. Quiere dejar las azules y no puede. Tiene los niños conmigo.",
      "Doctor, my daughter almost died. Her friend gave her Narcan and they took her by ambulance. She wants to stop the blue ones and can't. I have the children with me.",
      "Doña Lidia (mother)"
    ],
    "opts": [
      [
        "\"Mi hija casi se muere. Su amiga le echó el Narcan y la llevaron en ambulancia. Quiere dejar las azules y no puede.\"",
        true,
        "The form records the chief complaint in the informant's own words, in Spanish, in quotation marks. Say who gave it."
      ],
      [
        "Opioid overdose with severe opioid use disorder",
        false,
        "That is your diagnosis and interpretation. It belongs in the assessment, not in the chief complaint."
      ],
      [
        "She almost died of an overdose and she can't stop using.",
        false,
        "A paraphrase loses the informant's words. Quote the Spanish and add a translation in parentheses if your service requires it."
      ]
    ]
  },
  "domains": {
    "appearance": {
      "obs": "Adult female, thin built, in a wrinkled sweatshirt she seems to have slept in. Hair in a loose, greasy ponytail, no makeup, nails short and chipped. Pale, with sweat on the forehead and goosebumps on her arms.",
      "ans": {
        "0": [
          "(se limpia la nariz) Buenas noches.",
          "(wipes her nose) Good evening."
        ],
        "1": [
          "No me puedo estar quieta, doctora. ¿Puedo caminar un poquito?",
          "I can't stay still, doctor. Can I walk a little?"
        ]
      },
      "need": [
        "Adult female",
        "Thin built",
        "Unkempt"
      ],
      "wrong": {
        "Well kempt": "Wrinkled clothes slept in, greasy hair, and chipped nails are unkempt."
      },
      "doc": "Adult female, thin built, unkempt, in wrinkled clothes; hair greasy, nails chipped; pale with diaphoresis and piloerection",
      "why": "Gooseflesh and a runny nose are visible signs of opioid withdrawal. Note them in the appearance and the COWS, which you administer separately. Describe without judgment."
    },
    "psychomotor": {
      "obs": "Walks to the window and back, shifts her weight, rubs her thighs. Yawns repeatedly. Sits for under a minute at a time.",
      "ans": {
        "0": [
          "Sí, mi mamá dice que no paro. Me duelen las piernas y no aguanto estar sentada.",
          "Yes, my mom says I don't stop. My legs ache and I can't stand to sit."
        ]
      },
      "need": [
        "Restless"
      ],
      "ok": [
        "Psychomotor agitation"
      ],
      "wrong": {
        "No psychomotor agitation or retardation": "She cannot sit and keeps moving.",
        "Psychomotor retardation": "She is the opposite of slowed."
      },
      "doc": "Restless (cannot sit for more than a minute, walks and shifts), frequent yawning; no tremor or abnormal movements",
      "why": "Restlessness and yawning are classic signs of opioid withdrawal. Keep them separate from anxiety and agitation from other causes, and let the COWS score carry the severity."
    },
    "attitude": {
      "obs": "Looks at the floor and at her hands. Answers directly about her use. Pulls back when you come near the topic of the assault.",
      "ans": {
        "0": [
          "Yesenia. Nomás Yesenia.",
          "Yesenia. Just Yesenia."
        ],
        "1": [
          "En español, que mi mamá no habla inglés. Y de lo que pasó antes, no quiero hablar, ¿sí?",
          "In Spanish, my mom doesn't speak English. And what happened before, I don't want to talk about it, okay?"
        ]
      },
      "need": [
        "Guarded",
        "Poor eye contact"
      ],
      "ok": [
        "Cooperative"
      ],
      "wrong": {
        "Hostile": "She is wary on one topic and polite otherwise.",
        "Uncooperative": "She answers about her use and her symptoms.",
        "Overfamiliar": "She keeps her distance."
      },
      "ev": {
        "find": "Guarded",
        "opts": [
          [
            "\"Y de lo que pasó antes, no quiero hablar, ¿sí?\"",
            true
          ],
          [
            "\"Yesenia. Nomás Yesenia.\"",
            false
          ],
          [
            "\"En español, que mi mamá no habla inglés.\"",
            false
          ]
        ],
        "why": "She marks one subject as off limits and stays open on the rest. That is guardedness around the assault, which is expected with trauma. Respect the boundary. You do not need details tonight."
      },
      "doc": "Cooperative but guarded when the assault is raised; poor eye contact (looks at the floor and her hands)",
      "why": "Guarded about one topic is not the same as uncooperative. Tell her she decides what to share and when. Trust built tonight makes trauma care possible later."
    },
    "mood": {
      "obs": "Anxious, tense face, eyes watery. Tears come twice and she wipes them away. Affect fits what she says.",
      "ans": {
        "0": [
          "Ando bien malilla, doctora. Nerviosa y con mucho miedo.",
          "I feel really bad, doctor. Nervous and very scared."
        ],
        "1": [
          "Mal. Antes no sentía nada, y ahora que no las tengo siento todo, y me da miedo.",
          "Bad. Before I felt nothing, and now that I don't have them I feel everything, and it scares me."
        ],
        "2": [
          "Un dos.",
          "A two."
        ]
      },
      "quote": "Ando bien malilla, doctora. Nerviosa y con mucho miedo. (I feel really bad, doctor. Nervous and very scared.)",
      "need": [
        "Anxious mood",
        "Congruent affect"
      ],
      "ok": [
        "Sad mood",
        "Irritable mood"
      ],
      "wrong": {
        "Euthymic mood": "She rates her mood 2 out of 10 and is tearful and tense.",
        "Flat affect": "She cries and her face shows fear. The range is not flat.",
        "Euphoric mood": "Nothing suggests elation."
      },
      "doc": "\"Ando bien malilla, doctora. Nerviosa y con mucho miedo.\" (I feel really bad, doctor. Nervous and very scared.) Anxious mood, 2/10; tearful, congruent affect",
      "why": "Withdrawal brings anxiety, irritability, and low mood, so you cannot separate them yet. Record the words and revisit the mood once she is stable on treatment."
    },
    "speech": {
      "obs": "Speaks mostly when asked, in a soft voice. Normal rate. Gives short answers about the assault and longer ones about her children.",
      "ans": {
        "0": [
          "Fumé como siempre y luego ya no me acuerdo. Mi amiga me echó el Narcan y desperté en la ambulancia.",
          "I smoked like always and then I don't remember. My friend gave me Narcan and I woke up in the ambulance."
        ]
      },
      "need": [
        "Non-spontaneous (answers only when asked)",
        "Soft volume"
      ],
      "ok": [
        "Normal rate"
      ],
      "wrong": {
        "Pressured": "Her rate is normal and she is easy to interrupt.",
        "Poverty of speech": "She speaks fully about her children and her use. She chooses to say less about one topic."
      },
      "doc": "Non-spontaneous, soft volume, normal rate; fuller about her children, brief about the assault",
      "why": "Brief answers on one topic are a boundary, not poverty of speech. Note how she speaks when comfortable and when not."
    },
    "process": {
      "ans": {
        "0": [
          "Fumé como siempre y luego ya no me acuerdo. Mi amiga me echó el Narcan y desperté en la ambulancia.",
          "I smoked like always and then I don't remember. My friend gave me Narcan and I woke up in the ambulance."
        ],
        "1": [
          "Que no puedo parar. Quiero y no puedo.",
          "That I can't stop. I want to and I can't."
        ]
      },
      "need": [
        "Linear",
        "Goal-directed"
      ],
      "wrong": {
        "Tangential": "She answers what you asked.",
        "Thought blocking": "She pauses to wipe her tears, then continues her thought."
      },
      "doc": "Linear and goal-directed",
      "why": "Linear thinking fits withdrawal rather than psychosis. If she were drowsy or confused, you would also think of intoxication or a medical cause."
    },
    "perception": {
      "ans": {
        "0": [
          "No, voces no.",
          "No, no voices."
        ],
        "1": [
          "No.",
          "No."
        ],
        "2": [
          "No. Solo en las pesadillas, cuando me despierto sudando.",
          "No. Only in the nightmares, when I wake up sweating."
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
        2
      ],
      "ev": {
        "find": "Denies perceptual disturbances",
        "opts": [
          [
            "\"No. Solo en las pesadillas, cuando me despierto sudando.\"",
            true
          ],
          [
            "\"No, voces no.\"",
            false
          ],
          [
            "\"No hay voces.\"",
            false
          ]
        ],
        "why": "She sees things only in nightmares, which is sleep and not perception while awake. A nightmare is not a hallucination. Note the nightmares under trauma symptoms instead."
      },
      "need": [
        "Denies perceptual disturbances",
        "Not responding to internal stimuli"
      ],
      "wrong": {
        "Visual hallucinations": "What she sees happens in nightmares, not while awake.",
        "Tactile hallucinations": "Gooseflesh and aches are physical signs of withdrawal, not hallucinations."
      },
      "doc": "Denies hallucinations when awake; not responding to internal stimuli. Trauma-related nightmares noted",
      "why": "Nightmares are not hallucinations. Ask separately about flashbacks, which feel like reliving an event while awake. Ask when she is ready and keep the questions short."
    },
    "content": {
      "ans": {
        "0": [
          "Sí... pero no es mi imaginación. Es por algo que me pasó. No quiero hablar de eso ahorita.",
          "Yes... but it's not my imagination. It's because of something that happened to me. I don't want to talk about that right now."
        ],
        "1": [
          "No, nadie me sigue.",
          "No, nobody's following me."
        ],
        "2": [
          "No.",
          "No."
        ],
        "3": [
          "Seguro, porque pasó de verdad, doctora. Pero hoy no puedo hablar de eso.",
          "Sure, because it really happened, doctor. But today I can't talk about it."
        ],
        "4": [
          "No. Fue real. Lo sabe mi mamá.",
          "No. It was real. My mom knows."
        ],
        "5": [
          "Sí, con mis niños. Siento que soy mala mamá.",
          "Yes, with my kids. I feel like I'm a bad mother."
        ],
        "6": [
          "El dolor de espalda, las pastillas del doctor, y luego otras cosas que no quiero contar.",
          "The back pain, the doctor's pills, and then other things I don't want to tell."
        ]
      },
      "key": [
        0,
        3
      ],
      "need": [
        "No delusions elicited",
        "Preoccupation with ___"
      ],
      "ok": [
        "Guilt or worthlessness (not delusional)"
      ],
      "wrong": {
        "Persecutory delusions": "Her fear comes from a real event that her mother knows about. A fear based on real trauma is not a delusion. Do not press for details tonight."
      },
      "ev": {
        "find": "No delusions elicited",
        "opts": [
          [
            "\"No. Fue real. Lo sabe mi mamá.\"",
            true
          ],
          [
            "\"Sí... pero no es mi imaginación.\"",
            false
          ],
          [
            "\"No, nadie me sigue.\"",
            false
          ]
        ],
        "why": "Her fear is tied to a real event and her mother can confirm it. That is not a delusion. Never label fear after trauma as persecutory without checking. Ask Doña Lidia, with Yesenia's permission, only what you need."
      },
      "doc": "Preoccupation with cravings and with fear related to a past assault (real event, corroborated by her mother); guilt about her children. No delusions elicited",
      "why": "Ask how sure she is and whether there could be another explanation, then check with a family member when you can. Trauma-related fear is not paranoia. Keep the questions gentle and let her set the pace on the assault."
    },
    "safety": {
      "ans": {
        "0": [
          "Cansada sí, pero no. Quiero estar con mis hijos.",
          "Tired, yes, but no. I want to be with my kids."
        ],
        "1": [
          "No.",
          "No."
        ],
        "2": [
          "No. Yo no quise morirme. Fue un accidente. Las azules ya no son lo que eran.",
          "No. I didn't want to die. It was an accident. The blue ones aren't what they used to be."
        ],
        "3": [
          "No.",
          "No."
        ],
        "4": [
          "No. Nada de eso.",
          "No. Nothing like that."
        ],
        "5": [
          "No, nunca.",
          "No, never."
        ]
      },
      "key": [
        1,
        2
      ],
      "need": [
        "Denies suicidal ideation",
        "Denies homicidal ideation"
      ],
      "wrong": {
        "Passive death wish": "She says she is tired but wants to be with her children. She denies wishing to die.",
        "Active suicidal ideation, no plan": "She denies thoughts of killing herself and says the overdose was not on purpose."
      },
      "doc": "Denies suicidal ideation, plan, or intent; overdose described as unintentional (\"fue un accidente\"). Denies homicidal ideation. Protective: her two children. Recheck daily",
      "why": "Ask directly whether the overdose was meant to end her life. An unintentional overdose is still a serious risk marker. Naloxone for her and her mother matters as much as the answer."
    },
    "orientation": {
      "ans": {
        "0": [
          "Es sábado. Perdón, es que estoy muy cansada.",
          "It's Saturday. Sorry, I'm just very tired."
        ],
        "1": [
          "En el hospital, en psiquiatría. Mi mamá me trajo.",
          "At the hospital, in psychiatry. My mom brought me."
        ],
        "2": [
          "Usted es la doctora que me va a ayudar.",
          "You're the doctor who's going to help me."
        ]
      },
      "need": [
        "Oriented to 3 spheres"
      ],
      "doc": "Oriented to 3 spheres",
      "why": "After an overdose and in withdrawal, intact orientation tells you she is not intoxicated and not delirious. Check again if she becomes drowsy."
    },
    "insight": {
      "ans": {
        "0": [
          "Sí, estoy enferma de esto. Quise dejarlo y no pude.",
          "Yes, I'm sick with this. I wanted to quit and couldn't."
        ],
        "1": [
          "Porque casi me muero. Mi mamá tiene razón.",
          "Because I almost died. My mom is right."
        ],
        "2": [
          "Sí, si me quita esta enfermedad, sí. Pero me da miedo que me dejen sin nada.",
          "Yes, if it takes this sickness away, yes. But I'm afraid they'll leave me with nothing."
        ]
      },
      "key": [
        0,
        2
      ],
      "need": [
        "Fair",
        "Grade 5: intellectual insight"
      ],
      "ok": [
        "Grade 4: aware, cause unknown in self"
      ],
      "wrong": {
        "Grade 1: complete denial": "She names her illness and says she wants to stop.",
        "Poor": "She accepts the diagnosis and is open to medicine."
      },
      "ev": {
        "find": "Grade 5: intellectual insight",
        "opts": [
          [
            "\"Sí, estoy enferma de esto. Quise dejarlo y no pude.\"",
            true
          ],
          [
            "\"Porque casi me muero. Mi mamá tiene razón.\"",
            false
          ],
          [
            "\"Pero me da miedo que me dejen sin nada.\"",
            false
          ]
        ],
        "why": "She accepts that she has an illness and that treatment could help. Her fear shows the insight is not yet emotional or secure. Real fear of being left in withdrawal is a reason to explain the medicine plan simply."
      },
      "doc": "Fair (grade 5): recognizes that she has an illness and unsuccessfully tried to stop; open to medicine but afraid of being left with nothing",
      "why": "Name her fear and answer it. Explaining that her withdrawal will be treated can turn intellectual insight into engagement."
    },
    "impulse": {
      "ans": {
        "0": [
          "No me enojo. Cuando me da el ansia se me oscurece todo, pero a nadie le hago nada.",
          "I don't get angry. When the craving hits everything goes dark, but I don't do anything to anyone."
        ],
        "1": [
          "No, nunca.",
          "No, never."
        ]
      },
      "need": [
        "Fair impulse control"
      ],
      "wrong": {
        "Good impulse control": "Cravings drove her use despite harm and an overdose.",
        "Poor impulse control": "She has no history of violence or destruction and is controlled in the interview."
      },
      "doc": "Fair impulse control: no violence; use continued despite serious harm; cravings reported; calm in the interview",
      "why": "Cravings are a strong drive, and withdrawal makes them worse. Document that she is controlled and safe with staff, and plan for how the craving will be treated."
    },
    "judgment": {
      "ans": {
        "0": [
          "Lo llevaría al correo o lo echaría al buzón.",
          "I'd take it to the post office or drop it in the mailbox."
        ],
        "1": [
          "Saldría rápido, sin empujar, y avisaría si veo fuego.",
          "I'd leave quickly without pushing, and warn people if I see fire."
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
        "Intact social judgment": "She kept using even after a first scare and an overdose.",
        "Good": "Test answers are fine, but her real decisions put her at risk.",
        "Poor": "She asked for help, sought care, and her test answers are sound."
      },
      "doc": "Fair: intact test judgment; impaired social judgment (continued use of fentanyl pills despite overdose risk). Accepted admission",
      "why": "Write the reason with the grade. Her family reached her in time, and she accepted treatment. Both belong in the note."
    }
  }
}
]);
