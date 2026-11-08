/* Admission MSE practice cases: the same fictional patients as the discharge cases, on the evening of admission.
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish text; registers are
   f = usted (formal), c = tú (informal). Patient answers are Spanish first, English second.
   Shape: window.PSYCH_MSE_CASES = [ { id, title, level, dx, form, setting, chart: [lines],
       cc: { ask: 'sectionId:index', ans: [spanish, english, who], opts: [[text, correct, why]] },
       domains: { <PSYCH_ADMIT_MSE domain id>: { obs, ans: { askIndex: [spanish, english, who?] }, key, need, ok, wrong, doc, why, quote?, ev? } } } ]
   Example ans entry:  [ '¿Para qué me trajeron aquí?', 'Why did they bring me here?', 'Patient' ]
   Cases: mateo (first-episode psychosis), brayan (mania with methamphetamine use). Medication examples elsewhere are teaching examples only. */
window.PSYCH_MSE_CASES = [
  {
    "id": "mateo",
    "title": "Mateo on admission",
    "level": "B1",
    "dx": "Schizophrenia (first episode, to be confirmed)",
    "form": "",
    "setting": "Admitting section, evening. Mateo, 19, warehouse worker. Brought by his mother, Doña Rosa, who speaks only Spanish, after he barricaded his bedroom door.",
    "chart": [
      "No earlier psychiatric contact. For about 3 months he has stopped going to work and rarely leaves his room.",
      "Mother: she hears him talking alone at night. He says a coworker put \"un trabajo\" on him. She first took him to a curandero. Tonight he pushed a dresser against his door and would not open it.",
      "No known drug use per mother; urine drug screen pending. No known medical illness."
    ],
    "cc": {
      "ask": "collateral:1",
      "ans": [
        "Ya casi no sale de su cuarto, doctora. Dice que oye a los vecinos hablando de él y que un compañero del trabajo le hizo un trabajo.",
        "He hardly leaves his room anymore, doctor. He says he hears the neighbors talking about him and that a coworker did a \"trabajo\" (brujería) on him.",
        "Doña Rosa (mother)"
      ],
      "opts": [
        [
          "\"Ya casi no sale de su cuarto. Dice que oye a los vecinos hablando de él y que un compañero del trabajo le hizo un trabajo.\"",
          true,
          "The form records the chief complaint in the informant's own words, in Spanish, in quotation marks."
        ],
        [
          "Social withdrawal, auditory hallucinations, and persecutory delusions",
          false,
          "That is your interpretation. It belongs in the HPI and the MSE, not in the chief complaint."
        ],
        [
          "He stays in his room and thinks a coworker cursed him.",
          false,
          "A translation loses the informant's words. Quote the Spanish; add a translation in parentheses if your service requires it."
        ]
      ]
    },
    "domains": {
      "appearance": {
        "obs": "Young adult male, thin built, in a gray hooded sweatshirt with the hood up and creased, unwashed clothes. Hair uncombed, unshaven, noticeable body odor.",
        "ans": {
          "0": ["(asiente con la cabeza)", "(just nods)"],
          "1": ["Prefiero quedarme parado, junto a la puerta.", "I'd rather stay standing, next to the door."]
        },
        "need": ["Adult male", "Thin built", "Unkempt"],
        "ok": ["Young adult", "Poor hygiene"],
        "wrong": {
          "Well kempt": "Creased, unwashed clothes, uncombed hair, and body odor are unkempt."
        },
        "doc": "Young adult male, thin built, in a gray hooded sweatshirt with the hood up, unshaven, unkempt, with body odor",
        "why": "Self-care often drops as psychosis develops. Recording it now gives you a baseline to compare at discharge. Note the hood: it fits his guardedness."
      },
      "psychomotor": {
        "obs": "Stands near the door at first and sits on the edge of the chair only after his mother asks. Shifts his weight, looks toward the wall twice. No tremor.",
        "ans": {
          "0": ["No estoy lento. Nomás quiero irme a mi casa.", "I'm not slow. I just want to go home."]
        },
        "need": ["Restless"],
        "ok": ["Psychomotor agitation"],
        "wrong": {
          "No psychomotor agitation or retardation": "He shifts his weight, keeps checking the door, and sits only on the edge of the chair.",
          "Psychomotor retardation": "He is restless, not slowed down."
        },
        "doc": "Restless (shifts his weight, sits on the edge of the chair); no tremor or abnormal movements",
        "why": "Restlessness in a young man with new psychosis is part of the risk picture. Keep it in mind with the barricade history."
      },
      "attitude": {
        "obs": "Keeps his hood up and watches the door and your notes. He does not lower his eyes out of respect; he looks at you only to check what you write. His mother says he is usually quiet and respectful.",
        "ans": {
          "0": ["¿Para qué quiere saber? ...Mateo.", "Why do you want to know? ...Mateo."],
          "1": ["Español. Pero rápido, ¿sí?", "Spanish. But quickly, okay?"]
        },
        "need": ["Guarded", "Suspicious"],
        "ok": ["Cooperative", "Fair eye contact", "Poor eye contact"],
        "wrong": {
          "Hostile": "He is wary but has not threatened you. Hostile is stronger than what you see.",
          "Uncooperative": "He is curt, but he answers your questions."
        },
        "ev": {
          "find": "Guarded",
          "opts": [
            ["\"¿Para qué quiere saber? ...Mateo.\"", true],
            ["\"(asiente con la cabeza)\"", false],
            ["\"No estoy lento.\"", false]
          ],
          "why": "He gives the least he can and asks why you want it. That is guardedness. Eye contact alone would not tell you, because lowered eyes can be respeto toward a doctor; here the watching of the door and your notes does."
        },
        "doc": "Guarded and suspicious but cooperative; watches the door and the examiner's notes, fair eye contact",
        "why": "Look at the whole picture before you label attitude. Lowered eyes may be respeto, but a patient who watches your pen and questions your motives is guarded."
      },
      "mood": {
        "obs": "Little change in expression. Brief tension in the jaw when the neighbors are mentioned.",
        "ans": {
          "0": ["Bien. Nomás cansado.", "Fine. Just tired."],
          "1": ["Normal... no he dormido bien por el ruido.", "Normal... I haven't slept well because of the noise."],
          "2": ["No sé. Un cinco.", "I don't know. A five."]
        },
        "quote": "Normal... no he dormido bien por el ruido. (Normal... I haven't slept well because of the noise.)",
        "need": ["Anxious mood", "Restricted affect"],
        "ok": ["Congruent affect"],
        "wrong": {
          "Euphoric mood": "Nothing in his words or expression suggests elation.",
          "Flat affect": "There is a little change, such as the jaw tightening when the neighbors come up. That is restricted, not flat."
        },
        "doc": "\"Normal... no he dormido bien por el ruido.\" (Normal... I haven't slept well because of the noise.) Anxious mood; restricted affect",
        "why": "He says \"bien\" but his affect and story say otherwise. Quote his words for the mood and record what you see separately for the affect."
      },
      "speech": {
        "obs": "Speaks only when asked, in short sentences, at normal rate and soft volume. Says more when the neighbors come up.",
        "ans": {
          "0": ["Pues... mi compañero del almacén me echó un trabajo. Desde entonces los vecinos hablan de mí por la pared. Por eso puse el ropero en la puerta.", "Well... my coworker from the warehouse put a trabajo on me. Since then the neighbors talk about me through the wall. That's why I put the dresser against the door."]
        },
        "need": ["Non-spontaneous (answers only when asked)", "Normal rate", "Soft volume"],
        "ok": ["Adequate volume"],
        "wrong": {
          "Pressured": "Normal rate, and he is easy to interrupt.",
          "Poverty of speech": "When the neighbors come up he gives clear detail. He chooses not to talk; that is guardedness."
        },
        "doc": "Non-spontaneous, normal rate, soft volume; gives more detail when discussing the neighbors",
        "why": "Few words from a guarded patient are not poverty of speech. The difference shows when a topic he cares about comes up and he says more."
      },
      "process": {
        "ans": {
          "0": ["Pues... mi compañero del almacén me echó un trabajo. Desde entonces los vecinos hablan de mí por la pared. Por eso puse el ropero en la puerta.", "Well... my coworker from the warehouse put a trabajo on me. Since then the neighbors talk about me through the wall. That's why I put the dresser against the door."],
          "1": ["Que me quieren fuera. Quieren que desaparezca, porque cuando llegué al almacén me tenían envidia.", "That they want me out. They want me to disappear, because when I got to the warehouse they were envious of me."]
        },
        "need": ["Linear", "Goal-directed"],
        "wrong": {
          "Loose associations": "Each sentence follows from the last. The content is delusional, but the process is linear.",
          "Tangential": "He answers the question that was asked."
        },
        "doc": "Linear and goal-directed",
        "why": "Do not let delusional content pull you into calling the process disorganized. Process is how ideas connect; content is what they are about."
      },
      "perception": {
        "obs": "Twice turns his head toward the wall and pauses mid-sentence.",
        "ans": {
          "0": ["Sí. Los vecinos, por la pared. Hablan de mí todas las noches.", "Yes. The neighbors, through the wall. They talk about me every night."],
          "1": ["No, no susurran. Se oye bien claro.", "No, they don't whisper. It's very clear."],
          "2": ["No. Sombras no.", "No. No shadows."],
          "3": ["Dicen que soy un estorbo. Que desaparezca.", "They say I'm a burden. That I should disappear."],
          "4": ["Sí. Me dicen que desaparezca, que me vaya, que ya no estorbe.", "Yes. They tell me to disappear, to go away, to stop being a burden."]
        },
        "key": [0, 3, 4],
        "need": ["Command auditory hallucinations", "Responding to internal stimuli"],
        "ok": ["Auditory hallucinations"],
        "wrong": {
          "Denies perceptual disturbances": "He describes voices through the wall every night.",
          "Visual hallucinations": "He denies seeing shadows or anything else.",
          "Not responding to internal stimuli": "He turns toward the wall and pauses mid-sentence twice."
        },
        "ev": {
          "find": "Command auditory hallucinations",
          "opts": [
            ["\"Me dicen que desaparezca, que me vaya, que ya no estorbe.\"", true],
            ["\"Hablan de mí todas las noches.\"", false],
            ["\"No, no susurran. Se oye bien claro.\"", false]
          ],
          "why": "A command voice tells him what to do. \"Que desaparezca\" is a command. \"Hablan de mí\" is a voice talking about him, which is a third-person hallucination but not a command."
        },
        "doc": "Command auditory hallucinations: voices through the wall, nightly, talking about him and telling him to \"desaparecer\"; responding to internal stimuli (turns toward the wall and pauses)",
        "why": "Always ask what the voices say and whether they give orders. \"Desaparezca\" could mean leave or die, so you must ask about suicide directly next."
      },
      "content": {
        "ans": {
          "0": ["Sí. Mi compañero del almacén. Me quiere hacer daño.", "Yes. My coworker from the warehouse. He wants to hurt me."],
          "1": ["Sí. Me vigilan los vecinos. Saben cuándo salgo y cuándo entro.", "Yes. The neighbors watch me. They know when I go out and when I come in."],
          "2": ["La comida de la casa, no sé. Mejor como lo que yo compro.", "The food at home, I don't know. I'd rather eat what I buy myself."],
          "3": ["Segurísimo. Desde que me echó el trabajo todo cambió.", "Completely sure. Since he put the trabajo on me everything changed."],
          "4": ["No hay otra. Usted no lo entiende.", "There isn't one. You don't understand it."],
          "5": ["No. Yo no hice nada.", "No. I didn't do anything."],
          "6": ["Doctora, nosotros creemos que sí le hicieron un mal. Lo llevé con un curandero y dijo que era un trabajo. Pero ya no sé, está peor.", "Doctor, we believe someone did do him harm. I took him to a curandero and he said it was a trabajo. But I don't know anymore, he's getting worse.", "Doña Rosa (mother)"]
        },
        "key": [3, 4],
        "need": ["Persecutory delusions"],
        "ok": ["Delusions of reference"],
        "wrong": {
          "No delusions elicited": "He is certain the coworker and the neighbors mean him harm and accepts no other explanation.",
          "Guilt or worthlessness (not delusional)": "He blames others, not himself."
        },
        "ev": {
          "find": "Persecutory delusions",
          "opts": [
            ["\"Segurísimo.\" and \"No hay otra.\"", true],
            ["\"Nosotros creemos que sí le hicieron un mal.\" (mother)", false],
            ["\"No, no susurran. Se oye bien claro.\"", false]
          ],
          "why": "Fixed certainty and no room for another explanation make it a delusion. His mother's belief in a trabajo is a family's cultural explanation, not his delusion. His own belief goes further: neighbors watching and a coworker who wants to hurt him."
        },
        "doc": "Persecutory delusions: a coworker has put a \"trabajo\" on him and wants to harm him, and neighbors watch and talk about him; held with full conviction, no alternative explanation accepted. Mother holds a cultural belief in brujería; his beliefs extend beyond it and impair his functioning",
        "why": "The two questions that make it a delusion are \"how sure are you?\" and \"could there be another explanation?\". Do not call a family's belief in brujería a delusion; ask whether the patient's belief goes beyond the family's and affects his life."
      },
      "safety": {
        "ans": {
          "0": ["No. Lo que quiero es que me dejen en paz.", "No. What I want is for them to leave me in peace."],
          "1": ["No.", "No."],
          "2": ["No. Nomás quiero que las voces se callen.", "No. I just want the voices to be quiet."],
          "3": ["No, ninguno.", "No, none."],
          "4": ["No.", "No."],
          "5": ["No. A nadie le quiero hacer daño. Nomás quiero que me dejen.", "No. I don't want to hurt anyone. I just want them to leave me alone."]
        },
        "key": [2, 5],
        "need": ["Denies suicidal ideation", "Denies homicidal ideation"],
        "wrong": {
          "Passive death wish": "He denies wishing to be dead. The voices say \"desaparezca\", but he does not want to die.",
          "Homicidal ideation toward ___": "He believes the coworker means him harm but denies any wish or plan to harm anyone."
        },
        "doc": "Denies suicidal ideation, plan, or intent; denies homicidal ideation. Command voices to \"desaparecer\" noted; recheck each shift",
        "why": "Ask about suicide directly when voices tell him to disappear, and about harming others when he feels threatened. A denial tonight does not close the question; ask again as he settles."
      },
      "orientation": {
        "ans": {
          "0": ["Es martes... creo.", "It's Tuesday. I think?"],
          "1": ["En el hospital. Mi mamá me trajo.", "At the hospital. My mom brought me."],
          "2": ["Usted es doctora. Es psiquiatra, ¿no?", "You're a doctor. A psychiatrist, right?"]
        },
        "need": ["Oriented to 3 spheres"],
        "doc": "Oriented to 3 spheres",
        "why": "Psychosis with clear orientation is the usual pattern. Disorientation would make you look for delirium or a medical cause."
      },
      "insight": {
        "ans": {
          "0": ["Enfermo, no. Lo que tengo es un trabajo que me hicieron.", "Sick, no. What I have is a trabajo someone did to me."],
          "1": ["Porque mi mamá se asustó. Ella cree que estoy mal de la cabeza.", "Because my mom got scared. She thinks something is wrong with my head."],
          "2": ["No creo. Las pastillas no quitan un trabajo.", "I don't think so. Pills don't take off a trabajo."]
        },
        "need": ["Poor", "Grade 3: blames others/external factors"],
        "ok": ["Grade 2: slight awareness"],
        "wrong": {
          "Grade 1: complete denial": "He accepts that something is wrong with him, though he blames a trabajo and denies a mental illness.",
          "Fair": "He denies a mental illness and doubts that medicine can help."
        },
        "ev": {
          "find": "Grade 3: blames others/external factors",
          "opts": [
            ["\"Enfermo, no. Lo que tengo es un trabajo que me hicieron.\"", true],
            ["\"Porque mi mamá se asustó.\"", false],
            ["\"En el hospital. Mi mamá me trajo.\"", false]
          ],
          "why": "He knows something is wrong but puts the cause outside himself, in a coworker's trabajo. That is grade 3. A cultural explanation lowers the grade only when it leaves no room to consider treatment, as here."
        },
        "doc": "Poor (grade 3): knows something is wrong but attributes it to a coworker's \"trabajo\" and denies mental illness; doubts that medicine can help",
        "why": "Ask what he thinks is causing it and whether medicine could help. Respect the cultural explanation and look for a bridge, such as treating the sleep and the noise, as a way into treatment."
      },
      "impulse": {
        "obs": "Sits still. Clenches his hands once when the neighbors are mentioned.",
        "ans": {
          "0": ["No me enojo. Me encierro y ya.", "I don't get angry. I shut myself in and that's it."],
          "1": ["Nunca. Yo no peleo con nadie.", "Never. I don't fight with anyone."]
        },
        "need": ["Fair impulse control"],
        "wrong": {
          "Good impulse control": "He barricaded his door and clenched his hands when the neighbors came up. It is not fully good.",
          "Poor impulse control": "There is no history of hitting or damaging things. The barricade was driven by fear, not by an impulsive outburst."
        },
        "doc": "Fair impulse control (no history of violence; barricaded his door out of fear; clenched hands once during the interview)",
        "why": "Impulse control comes from the history and from what you see. Separate fear-driven withdrawal from aggression."
      },
      "judgment": {
        "ans": {
          "0": ["Lo echaría al buzón.", "I'd drop it in the mailbox."],
          "1": ["Saldría rápido con los demás.", "I'd get out quickly with everyone else."]
        },
        "need": ["Intact test judgment", "Impaired social judgment"],
        "ok": ["Fair", "Poor"],
        "wrong": {
          "Intact social judgment": "He stopped going to work, rarely leaves his room, and barricaded his door.",
          "Good": "His answers to the hypothetical questions are fine, but his real decisions are not."
        },
        "doc": "Fair: intact test judgment; impaired social judgment (stopped going to work, barricaded his door)",
        "why": "Test judgment can be intact while real-life judgment is not. Many charts write a single word; give the reason too."
      }
    }
  },
  {
    "id": "brayan",
    "title": "Brayan on admission",
    "level": "B2",
    "dx": "Bipolar I disorder, current episode manic, with methamphetamine use",
    "form": "",
    "setting": "Admitting section, evening. Brayan, 24, DJ and rideshare driver. Brought by his girlfriend, Yadira, after five nights without sleep.",
    "chart": [
      "No earlier psychiatric admissions. Yadira says an uncle was once treated for \"bipolar\" (not confirmed).",
      "Yadira: five nights without sleep, spent $4,000 on DJ equipment, says \"Dios me eligió\", talks nonstop. Yesterday he drove at 100 mph on the freeway.",
      "Urine drug screen positive for methamphetamine. Yadira says he used \"cristal\" twice this week. No alcohol per Yadira. No known medical illness."
    ],
    "cc": {
      "ask": "collateral:1",
      "ans": [
        "Doctora, no ha dormido en cinco noches y no para de hablar. Gastó cuatro mil dólares en equipo y dice que Dios lo eligió.",
        "Doctor, he hasn't slept in five nights and he won't stop talking. He spent four thousand dollars on equipment and says God chose him.",
        "Yadira (girlfriend)"
      ],
      "opts": [
        [
          "\"No ha dormido en cinco noches y no para de hablar. Gastó cuatro mil dólares en equipo y dice que Dios lo eligió.\"",
          true,
          "The form records the chief complaint in the informant's own words, in Spanish, in quotation marks."
        ],
        [
          "Decreased need for sleep, pressured speech, spending, and grandiosity",
          false,
          "That is your interpretation. It belongs in the HPI and the MSE, not in the chief complaint."
        ],
        [
          "He hasn't slept for five nights, talks nonstop, and thinks he is chosen by God.",
          false,
          "A translation loses the informant's words. Quote the Spanish; add a translation in parentheses if your service requires it."
        ]
      ]
    },
    "domains": {
      "appearance": {
        "obs": "Young adult male, medium built, in a bright yellow satin shirt, gold chains, and sunglasses worn indoors. Hair freshly styled. Clean, strong cologne.",
        "ans": {
          "0": ["¡Buenas noches, doctora! ¡Qué gusto! Brayan, el DJ más famoso de la ciudad.", "Good evening, doctor! What a pleasure! Brayan, the most famous DJ in the city."],
          "1": ["¡Claro, qué amable! Pero mejor camino, que si me siento se me enfrían las ideas.", "Of course, how kind! But I'd rather walk, because if I sit my ideas cool down."]
        },
        "need": ["Adult male", "Medium built", "Well kempt"],
        "ok": ["Young adult", "Fairly kempt"],
        "wrong": {
          "Unkempt": "His clothes are clean and carefully chosen. The finding is the flamboyance, not poor hygiene."
        },
        "doc": "Young adult male, medium built, well groomed but flamboyantly dressed: bright yellow satin shirt, gold chains, sunglasses worn indoors",
        "why": "Describe the clothing as you see it. Bright, showy dress and indoor sunglasses are a common sign of mania and say more than \"well kempt\" alone."
      },
      "psychomotor": {
        "obs": "Paces, sits for a few seconds, drums on the table, taps his foot. Gestures widely.",
        "ans": {
          "0": ["¿Lento yo? ¡Para nada! Tengo tanta energía que no sé qué hacer con ella.", "Me, slow? Not at all! I have so much energy I don't know what to do with it."]
        },
        "need": ["Psychomotor agitation"],
        "ok": ["Restless"],
        "wrong": {
          "No psychomotor agitation or retardation": "He cannot stay seated, paces, and drums on the table.",
          "Psychomotor retardation": "He is speeded up, not slowed."
        },
        "doc": "Psychomotor agitation (paces, cannot stay seated, drums on the table, wide gestures)",
        "why": "Purposeless, excessive movement is psychomotor agitation. Add it to the safety picture: he may need a low-stimulation room."
      },
      "attitude": {
        "obs": "Takes off the sunglasses, shakes your hand and holds it, steps close, jokes, touches your pen. Intense eye contact.",
        "ans": {
          "0": ["Brayan, o DJ B, como quieras, doctora. Tú dime.", "Brayan, or DJ B, whatever you like, doctor. You tell me."],
          "1": ["Español, inglés, spanglish, ¡lo que quieras! Yo hablo todo.", "Spanish, English, Spanglish, whatever you want! I speak everything."]
        },
        "need": ["Overfamiliar", "Cooperative"],
        "ok": ["Good eye contact"],
        "wrong": {
          "Guarded": "He tells you everything and invites you in. He is open, not guarded.",
          "Hostile": "He is friendly and joking, not hostile."
        },
        "ev": {
          "find": "Overfamiliar",
          "opts": [
            ["\"Brayan, o DJ B, como quieras, doctora. Tú dime.\"", true],
            ["\"¿Lento yo? ¡Para nada!\"", false],
            ["\"Español, inglés, spanglish, ¡lo que quieras!\"", false]
          ],
          "why": "He drops to tú with a doctor he has just met, gives a nickname, and holds your hand and touches your pen. That lost sense of professional distance is overfamiliarity."
        },
        "doc": "Overfamiliar but cooperative; invades personal space, touches the examiner's pen, good eye contact",
        "why": "Overfamiliar is a finding about boundaries, not about friendliness. Note it, and stay polite and firm about distance."
      },
      "mood": {
        "obs": "Broad smile and laughing, then snaps at an interruption: \"¡No me interrumpas!\". The irritability passes in seconds.",
        "ans": {
          "0": ["¡Increíble! ¡Nunca me había sentido mejor en mi vida!", "Incredible! I've never felt better in my life!"],
          "1": ["Las últimas semanas, ¡de otro mundo! Pero si me dices que no, me da coraje.", "The last few weeks, out of this world! But if you tell me no, it makes me furious."],
          "2": ["¿Del uno al diez? ¡Quince! ¡Veinte!", "From one to ten? Fifteen! Twenty!"]
        },
        "quote": "¡Increíble! ¡Nunca me había sentido mejor en mi vida! (Incredible! I've never felt better in my life!)",
        "need": ["Euphoric mood", "Irritable mood"],
        "ok": ["Labile affect", "Congruent affect"],
        "wrong": {
          "Sad mood": "He reports feeling wonderful and looks it.",
          "Restricted affect": "His affect is wide and intense."
        },
        "ev": {
          "find": "Irritable mood",
          "opts": [
            ["\"Pero si me dices que no, me da coraje.\"", true],
            ["\"¡Increíble! ¡Nunca me había sentido mejor en mi vida!\"", false],
            ["\"¿Del uno al diez? ¡Quince! ¡Veinte!\"", false]
          ],
          "why": "The elation is obvious, but his own words show the irritable side: anger when someone says no. Mania often mixes both, and irritability tells you how he may react to limits on the unit."
        },
        "doc": "\"¡Increíble! ¡Nunca me había sentido mejor en mi vida!\" (Incredible! I've never felt better in my life!) Euphoric and irritable mood; labile, congruent affect",
        "why": "Quote the mood in his words and note both poles. Someone who rates his mood at twenty out of ten is giving you data, not a number."
      },
      "speech": {
        "obs": "Talks nonstop, fast and loud. Hard to interrupt. A one-line question gets minutes of answer.",
        "ans": {
          "0": ["¡Mira, doctora, fue el jueves, o el viernes, ya no sé, los días se me juntan! Yo estaba mezclando en el club y de repente sentí a Dios, así, directo, y dije: Brayan, compra el equipo. ¡Cuatro mil dólares y valió cada centavo! Mi tío tenía una bocina igualita en Guadalajara, ¡qué lugar!, ¿has ido? Bueno, la cosa es que Yadira se enojó, pero nadie entiende, ¿qué me decías?", "Look, doctor, it was Thursday, or Friday, I don't know, the days run together! I was mixing at the club and suddenly I felt God, like that, direct, and I said: Brayan, buy the equipment. Four thousand dollars and worth every cent! My uncle had a speaker just like it in Guadalajara, what a place! Have you been? Anyway, the thing is Yadira got mad, but nobody understands, what were you saying?"]
        },
        "need": ["Spontaneous", "Productive", "Rapid rate", "Pressured", "Loud volume"],
        "wrong": {
          "Slow rate": "He speaks very fast.",
          "Poverty of speech": "He produces far more speech than the question needs."
        },
        "doc": "Spontaneous, productive, rapid and pressured, loud; hard to interrupt",
        "why": "Pressured speech is fast, loud, and driven by a need to keep talking. If you cannot get a word in, that is your finding. Switching between languages would not count."
      },
      "process": {
        "ans": {
          "0": ["¡Mira, doctora, fue el jueves, o el viernes, ya no sé, los días se me juntan! Yo estaba mezclando en el club y de repente sentí a Dios, así, directo, y dije: Brayan, compra el equipo. ¡Cuatro mil dólares y valió cada centavo! Mi tío tenía una bocina igualita en Guadalajara, ¡qué lugar!, ¿has ido? Bueno, la cosa es que Yadira se enojó, pero nadie entiende, ¿qué me decías?", "Look, doctor, it was Thursday, or Friday, I don't know, the days run together! I was mixing at the club and suddenly I felt God, like that, direct, and I said: Brayan, buy the equipment. Four thousand dollars and worth every cent! My uncle had a speaker just like it in Guadalajara, what a place! Have you been? Anyway, the thing is Yadira got mad, but nobody understands, what were you saying?"],
          "1": ["¡Que Dios me eligió! ¿Sabes qué significa eso? Como los profetas, pero con música. Y los carros van más rápido cuando uno está bendecido, ¿sabes? Ayer a cien millas por hora y ni un rasguño.", "That God chose me! Do you know what that means? Like the prophets, but with music. And cars go faster when you're blessed, you know? Yesterday at a hundred miles an hour and not a scratch."]
        },
        "need": ["Flight of ideas"],
        "ok": ["Tangential"],
        "wrong": {
          "Linear": "He leaps from the club to God to his uncle's speaker to Guadalajara and never returns to the question.",
          "Loose associations": "Each idea is triggered by the one before it (speaker, uncle, Guadalajara), so the links are still visible. That is flight of ideas, not loose associations."
        },
        "ev": {
          "find": "Flight of ideas",
          "opts": [
            ["\"Mi tío tenía una bocina igualita en Guadalajara, ¡qué lugar!, ¿has ido? Bueno, la cosa es que Yadira se enojó...\"", true],
            ["\"¡Increíble! ¡Nunca me había sentido mejor en mi vida!\"", false],
            ["\"Español, inglés, spanglish, ¡lo que quieras!\"", false]
          ],
          "why": "One idea triggers the next (equipment, uncle's speaker, Guadalajara, Yadira) and he never returns to the question. The thread is still followable, which is how flight of ideas differs from loose associations."
        },
        "doc": "Flight of ideas: rapid shifts from the club to God, equipment, his uncle's speaker, and Yadira, with understandable links and frequent loss of the original question",
        "why": "Judge process from a story in the patient's own words. Flight of ideas keeps a thread you can follow; loose associations lose it."
      },
      "perception": {
        "obs": "Does not turn toward sounds or talk to anyone else. Eyes follow you.",
        "ans": {
          "0": ["¿Voces? No. Bueno... a veces siento que Dios me habla, pero no es una voz, es como una vibración, un mensaje.", "Voices? No. Well... sometimes I feel God speaks to me, but it's not a voice, it's like a vibration, a message."],
          "1": ["No, nadie me susurra.", "No, nobody whispers to me."],
          "2": ["No, nada de sombras. Todo está más brillante, ¡más lindo!", "No, no shadows. Everything is brighter, prettier!"],
          "3": ["No hay voz. Es más bien un sentimiento de que tengo una misión.", "There's no voice. It's more a feeling that I have a mission."],
          "4": ["No, nadie me manda. ¡Yo mando!", "No, nobody orders me. I'm in charge!"]
        },
        "key": [0, 3],
        "need": ["Denies perceptual disturbances", "Not responding to internal stimuli"],
        "wrong": {
          "Auditory hallucinations": "He describes a feeling or message, not a voice heard from outside. Ask him to clarify, and recheck as the methamphetamine clears.",
          "Command auditory hallucinations": "He denies voices and says nobody gives him orders."
        },
        "doc": "Denies hallucinations; describes a sense of a message from God (\"una vibración\") without a perceived voice; not responding to internal stimuli. Methamphetamine use this week: reassess as it clears",
        "why": "Ask what the experience is like, not only whether he hears voices. A feeling of being chosen belongs under thought content. Stimulants can cause hallucinations, so repeat the question over the next days."
      },
      "content": {
        "ans": {
          "0": ["¿Hacerme daño? ¡Al contrario! Todos me quieren, me van a ver en grande.", "Harm me? On the contrary! Everybody loves me, they're going to see me go big."],
          "1": ["No. Bueno, la gente me mira, porque soy especial, pero no me siguen.", "No. Well, people look at me, because I'm special, but they don't follow me."],
          "2": ["Nada de eso. Yo como cuando me acuerdo.", "Nothing like that. I eat when I remember."],
          "3": ["Lo sé desde adentro, doctora. Dios me eligió. No hay duda.", "I know it from inside, doctor. God chose me. There's no doubt."],
          "4": ["¿Otra explicación? ¡Es obvio! Tú no tienes fe, por eso no lo ves.", "Another explanation? It's obvious! You don't have faith, that's why you don't see it."],
          "5": ["¿Culpable yo? ¡Para nada! Soy bendecido.", "Guilty, me? Not at all! I'm blessed."],
          "6": ["Doctora, Brayan siempre ha sido de iglesia, pero nunca había dicho que Dios lo eligió para dar un mensaje. Eso es nuevo. Empezó cuando dejó de dormir, y creo que probó el cristal otra vez.", "Doctor, Brayan has always gone to church, but he had never said God chose him to give a message. That's new. It began when he stopped sleeping, and I think he tried the crystal again.", "Yadira (girlfriend)"]
        },
        "key": [3, 4],
        "need": ["Grandiose delusions"],
        "wrong": {
          "No delusions elicited": "He is certain God chose him and rules out any other explanation.",
          "Persecutory delusions": "He feels loved and special, not threatened.",
          "Guilt or worthlessness (not delusional)": "He feels blessed, with no guilt."
        },
        "ev": {
          "find": "Grandiose delusions",
          "opts": [
            ["\"Dios me eligió. No hay duda.\"", true],
            ["\"Brayan siempre ha sido de iglesia.\" (Yadira)", false],
            ["\"¿Hacerme daño? ¡Al contrario!\"", false]
          ],
          "why": "Going to church is not a delusion. The belief that God chose him, held with no doubt and with a new change in behavior (spending, driving), is. Yadira's line shows it is new for him."
        },
        "doc": "Grandiose religious delusion: God has chosen him for a mission (\"Dios me eligió\"); held with full conviction, no alternative explanation; new for him, with a history of ordinary church attendance",
        "why": "Ask how sure he is, and ask the family whether this is new. Strong faith is not pathology. A fixed belief that is new, grandiose, and driving risky behavior is."
      },
      "safety": {
        "ans": {
          "0": ["¿Que no vale la pena? ¡Doctora, la vida es lo mejor!", "That it's not worth it? Doctor, life is the best thing!"],
          "1": ["¡No! Quiero despertar y seguir.", "No! I want to wake up and keep going."],
          "2": ["Nunca. ¿Para qué? Estoy en el mejor momento.", "Never. Why? I'm at my best moment."],
          "3": ["No, ningún plan.", "No, no plan."],
          "4": ["No.", "No."],
          "5": ["No, a nadie. Yo soy amor y paz, doctora.", "No, no one. I'm love and peace, doctor."]
        },
        "key": [2, 5],
        "need": ["Denies suicidal ideation", "Denies homicidal ideation"],
        "wrong": {
          "Passive death wish": "He says he wants to wake up and keep going.",
          "Homicidal ideation toward ___": "He denies thoughts of harming anyone."
        },
        "doc": "Denies suicidal and homicidal ideation. Reckless behavior (drove 100 mph on the freeway; spent $4,000) puts him at risk without suicidal intent",
        "why": "A denial of suicidal ideation is not the same as being safe. Mania brings risk through recklessness, so write the specific behavior, such as the 100 mph drive, beside the denial."
      },
      "orientation": {
        "ans": {
          "0": ["Es sábado, doctora, ¡noche de club! Aunque ya perdí la cuenta de las noches.", "It's Saturday, doctor, club night! Although I've lost count of the nights."],
          "1": ["En el hospital, en la unidad de psiquiatría. Yadira me trajo.", "In the hospital, in the psychiatry unit. Yadira brought me."],
          "2": ["Usted es la doctora, la psiquiatra. ¡Y yo soy su paciente favorito!", "You're the doctor, the psychiatrist. And I'm your favorite patient!"]
        },
        "need": ["Oriented to 3 spheres"],
        "doc": "Oriented to 3 spheres",
        "why": "He is distractible and jokes, but he gives correct answers. Orientation is usually intact in mania, and methamphetamine intoxication does not by itself cause disorientation."
      },
      "insight": {
        "ans": {
          "0": ["¿Enfermo yo? ¡Estoy mejor que nunca!", "Sick, me? I'm better than ever!"],
          "1": ["Porque Yadira no entiende lo que me está pasando. Se asusta.", "Because Yadira doesn't understand what's happening to me. She gets scared."],
          "2": ["¿Medicina? ¿Para qué? Eso me va a apagar. No la necesito.", "Medicine? What for? That will shut me down. I don't need it."]
        },
        "need": ["Poor", "Grade 1: complete denial"],
        "wrong": {
          "Grade 3: blames others/external factors": "Grade 3 needs some awareness of being ill. He denies that anything is wrong.",
          "Fair": "He denies any illness and refuses medicine."
        },
        "doc": "Poor (grade 1): denies illness (\"¿Enfermo yo? ¡Estoy mejor que nunca!\"); fears medicine will \"apagar\" him",
        "why": "Record his reason for refusing medicine: fear of losing his energy. It is the main target for discharge planning."
      },
      "impulse": {
        "obs": "Taps the desk, interrupts twice, grabs your pen, laughs. Keeps standing when asked to sit.",
        "ans": {
          "0": ["Me enojo rápido si me dicen que no, y luego se me pasa.", "I get angry fast if someone tells me no, and then it passes."],
          "1": ["Nunca he golpeado a nadie. Pero ayer casi choco con un tipo en la autopista y le grité de todo. ¡Iba a cien millas por hora!", "I've never hit anyone. But yesterday I almost hit a guy on the freeway and yelled everything at him. I was doing a hundred miles an hour!"]
        },
        "need": ["Poor impulse control"],
        "wrong": {
          "Good impulse control": "He spent $4,000 in a few days, drove at 100 mph, and cannot stay seated.",
          "Fair impulse control": "Several clear impulsive acts in one week, plus restlessness in the interview, are more than fair."
        },
        "doc": "Poor impulse control (spent $4,000 on equipment, drove 100 mph and shouted at another driver, interrupts and grabs the examiner's pen)",
        "why": "Impulse control comes from the history and from what you see. Use concrete acts: money, driving, behavior in the room."
      },
      "judgment": {
        "ans": {
          "0": ["Lo abro, a ver qué hay. ¡Quizás sea dinero, o una señal de Dios!", "I'd open it to see what's inside. Maybe it's money, or a sign from God!"],
          "1": ["¡Me quedo y pongo música para calmar a la gente!", "I'd stay and play music to calm people!"]
        },
        "need": ["Impaired test judgment", "Impaired social judgment"],
        "ok": ["Poor"],
        "wrong": {
          "Intact test judgment": "Opening someone else's sealed mail and staying in a smoke-filled theater to play music are not safe answers.",
          "Good": "Both his hypothetical answers and his real decisions (spending, driving) are unsafe."
        },
        "doc": "Poor: impaired test judgment (would open another person's mail, would stay in a smoky theater) and impaired social judgment (spent $4,000, drove 100 mph)",
        "why": "In mania both test and social judgment are impaired. Give the evidence, not only the label."
      }
    }
  }
];
