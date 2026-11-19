/* First-visit MSE practice case: Camila (school refusal, outpatient child and adolescent clinic). Appends to window.PSYCH_MSE_CASES.
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Field names stay `tl`, `f`, `c` for engine compatibility elsewhere; here patient answers are Spanish first, English second, and an optional third element names the speaker when it is not the patient.
   The app's questions are written in usted; Camila's answers are a teenager's (short, a few English words such as "group chat" and "presentation", glossed in the English).
   Fictional patient. Passive wish "ojalá no despertara": no plan, no intent, no method content.
   Shape: { id, title, level, dx, form, setting, chart: [lines], cc: { ask, ans, opts }, domains: { <13 ids>: { obs?, ans, key?, need, ok?, wrong?, doc, why, quote?, ev? } } } */
window.PSYCH_MSE_CASES = (window.PSYCH_MSE_CASES || []).concat([
  {
    "id": "camila",
    "title": "Camila at her first visit",
    "level": "B1",
    "dx": "School refusal for two months after freezing during a class presentation and being mocked by two classmates in a group chat; social anxiety disorder to be assessed (provisional, not yet diagnosed); passive wish not to wake up without a wish to die",
    "form": "",
    "setting": "Child and adolescent outpatient clinic, first visit. Camila, 14, in ninth grade, comes with her mother, Verónica, 38, who speaks mostly Spanish and works at a dry cleaner's. Camila lives with her mother and her little brother, Diego, 8. Camila speaks Spanish with some English words. You see them together first, then Camila alone, after explaining confidentiality and its limits to both. You speak tú to Camila and usted to Verónica.",
    "chart": [
      "First visit, with her mother. Camila has not been to school for two months. On school mornings she has stomachaches and headaches; on Saturdays and Sundays they are gone by noon.",
      "At home she stays in her room with her phone until late at night; in the morning she does not get up when woken. Her mother has lost her temper and yelled many times, wonders whether Camila is \"floja\" or having \"berrinches\", and asks whether she raised her wrong.",
      "Family: lives with her mother and her brother Diego, 8. Her mother works at a dry cleaner's. The pediatrician found no physical cause for the stomachaches."
    ],
    "cc": {
      "ask": "collateral:1",
      "ans": [
        "Doctora, hace dos meses que Camila no va a la escuela. Los días de escuela dice que le duele la panza, que le duele la cabeza...",
        "Doctor, Camila hasn't gone to school for two months. On school days she says her stomach hurts, her head hurts...",
        "Verónica (mother)"
      ],
      "opts": [
        [
          "\"Hace dos meses que Camila no va a la escuela. Los días de escuela dice que le duele la panza, que le duele la cabeza...\"",
          true,
          "The form records the chief complaint in the informant's own words, in Spanish, in quotation marks. Here the informant is her mother, who brought her and spoke first. Record Camila's own words too, in the history, when you see her alone."
        ],
        [
          "School refusal for two months with stomachaches and headaches on school mornings",
          false,
          "That is your interpretation. It belongs in the HPI and the MSE, not in the chief complaint."
        ],
        [
          "She hasn't been to school for two months. On school days she says her stomach hurts and her head hurts.",
          false,
          "A translation loses the informant's words. Quote the Spanish; add a translation in parentheses if your service requires it."
        ]
      ]
    },
    "domains": {
      "appearance": {
        "obs": "A 14-year-old girl, medium built, in neat casual clothes: a clean sweatshirt and jeans. Hair brushed and tied back. She sits close to her mother and looks at her own hands.",
        "ans": {
          "0": ["...Hi. Buenos días.", "...Hi. Good morning."],
          "1": ["Sí, gracias. Anda, Camila, siéntate tú también.", "Yes, thank you. Come on, Camila, you sit down too.", "Verónica (mother)"]
        },
        "need": ["Adult female", "Medium built", "Well kempt"],
        "wrong": {
          "Young adult": "She is 14. The pick list was written for adults; choose the sex pick and write her age in your note.",
          "Fairly kempt": "Her clothes are clean and neat and her hair is brushed.",
          "Unkempt": "Her clothes are clean and neat and her hair is brushed.",
          "Poor hygiene": "Nothing suggests poor hygiene."
        },
        "doc": "14-year-old girl (\"Adult female\" is only the nearest pick on this adult form), medium built, in neat casual clothes, well kempt; sits close to her mother, looks at her hands",
        "why": "She is a 14-year-old girl, not an adult. The picks are an adult list with no pick for a child or teenager, so \"Adult female\" is keyed only as the nearest sex pick; always write the real age in words: \"14-year-old girl\". Note too that she looks after herself although she has stayed at home for two months; that matters when you think about how low her mood is. Her mother answers your request to sit for both of them; watch who speaks for whom."
      },
      "psychomotor": {
        "obs": "Sits still, hands in her lap. No restlessness, slowing, tremor or unusual movements.",
        "ans": {
          "0": ["Se mueve normal. Lo que pasa es que en la mañana no se quiere levantar...", "She moves normally. It's just that in the morning she won't get up...", "Verónica (mother)"]
        },
        "need": ["No psychomotor agitation or retardation"],
        "wrong": {
          "Psychomotor retardation": "She is not slowed. Not getting up in the morning follows her late nights and her dread of school; it is not slowed movement.",
          "Restless": "She sits still throughout.",
          "Psychomotor agitation": "She sits still throughout.",
          "Tremor": "No tremor is seen.",
          "Abnormal involuntary movements": "None are seen."
        },
        "doc": "No psychomotor agitation or retardation; sits still; mother reports normal movement but difficulty getting up in the morning",
        "why": "Her mother's answer is useful collateral, but separate the two findings: her movement is normal, and the trouble getting up belongs to sleep and school avoidance. Ask about her sleep and her evening phone use in the history; a regular wake-up time is the first small step in her plan."
      },
      "attitude": {
        "obs": "With her mother in the room she says very little and looks at her hands or at her mother; her mother answers for her and apologizes that she does not talk much. Seen alone, after you explain confidentiality, she looks up more often, asks you a question herself, and answers each of yours.",
        "ans": {
          "0": ["Camila está bien.", "Camila is fine."],
          "1": ["En español, está bien... Pero a veces se me salen cosas en inglés.", "In Spanish is fine... But sometimes English things slip out."]
        },
        "need": ["Cooperative", "Poor eye contact"],
        "ok": ["Fair eye contact"],
        "wrong": {
          "Guarded": "She is quiet, not guarded. Alone, she asks whether you will tell her mother and then tells you what happened.",
          "Uncooperative": "She answers every question, briefly at first.",
          "Irritable": "She is quiet and tense, not irritable.",
          "Suspicious": "Her question about confidentiality is a sensible one, not suspicion."
        },
        "doc": "Cooperative; quiet with poor eye contact while her mother is present, mother answers for her; more open and better eye contact when seen alone after confidentiality was explained",
        "why": "Write both settings, because the difference is a finding. Many teenagers say little in front of a parent, and lowered eyes can be shyness or reserve toward a doctor. Speak to her directly from the start, explain that seeing every teenager alone is routine, and explain confidentiality and its limits before you ask about mood and safety. The exact rules follow your state's law and your clinic's policy. Her English words slipping in are normal for a bilingual teenager and are not a finding."
      },
      "mood": {
        "obs": "Seen alone. Speaks quietly, looks down when school comes up. Her face is tense and worried when she talks about her classmates, a little easier when she talks about home.",
        "ans": {
          "0": ["Me da miedo. Todo el tiempo pienso en lo que piensan todos de mí.", "I'm scared. I keep thinking about what everyone thinks of me."],
          "1": ["Igual todo el tiempo. Las mañanas de escuela son lo peor.", "The same the whole time. School mornings are the worst."],
          "2": ["Como un cuatro. Cuando pienso en la escuela, baja más.", "About a four. When I think about school, it goes lower."]
        },
        "quote": "Me da miedo. Todo el tiempo pienso en lo que piensan todos de mí. (I'm scared. I keep thinking about what everyone thinks of me.)",
        "need": ["Anxious mood", "Congruent affect"],
        "ok": ["Restricted affect"],
        "wrong": {
          "Euthymic mood": "She names fear, and her mood falls when she thinks about school.",
          "Sad mood": "She describes fear, not sadness. Keep asking about low mood at later visits, though, because of the wish not to wake up.",
          "Flat affect": "Her face changes: tense about school and classmates, a little easier about home.",
          "Blunted affect": "Her face changes: tense about school and classmates, a little easier about home.",
          "Incongruent affect": "Her worried face fits the fear she describes.",
          "Labile affect": "Her affect does not swing; it stays anxious and eases a little."
        },
        "ev": {
          "find": "Anxious mood",
          "opts": [
            ["\"Me da miedo. Todo el tiempo pienso en lo que piensan todos de mí.\"", true],
            ["\"Como un cuatro. Cuando pienso en la escuela, baja más.\"", false],
            ["\"Igual todo el tiempo. Las mañanas de escuela son lo peor.\"", false]
          ],
          "why": "Asked how she feels now, she names fear and ties it to what others think. The rating tells you how strong it is, not what kind of feeling it is."
        },
        "doc": "\"Me da miedo. Todo el tiempo pienso en lo que piensan todos de mí.\" (I'm scared. I keep thinking about what everyone thinks of me.) Anxious mood, rates it about 4 out of 10, lower when she thinks of school; worst on school mornings. Affect anxious, congruent, eases a little when talking about home",
        "why": "Ask a teenager about mood when she is alone, and use her own words: \"me da miedo\". A short, plain answer from a 14-year-old is normal and still worth quoting. Anxiety that is worst on school mornings fits the stomachaches and headaches her mother describes."
      },
      "speech": {
        "obs": "Soft voice, short replies. She speaks only when asked, but gives a clear account once she is alone and asked an open question. Normal rate. She uses a few English words (\"presentation\", \"group chat\") inside Spanish sentences.",
        "ans": {
          "0": ["Pues... en la clase de ciencias tuve que hacer una presentation y se me fue la mente en blanco. No pude decir nada. Sentí que todos se estaban riendo. Después, dos compañeros se burlaron de mí en el group chat.", "Well... in science class I had to give a presentation and my mind went blank. I couldn't say anything. I felt like everyone was laughing. Afterwards, two classmates made fun of me in the group chat."]
        },
        "need": ["Non-spontaneous (answers only when asked)", "Soft volume"],
        "ok": ["Normal rate"],
        "wrong": {
          "Spontaneous": "She offers almost nothing unless asked; even her questions to you (about confidentiality, about medicine) come in reply to yours.",
          "Poverty of speech": "Her replies are short, but asked an open question alone, she tells a clear story.",
          "Adequate volume": "She speaks softly throughout.",
          "Slow rate": "Her answers are short, not slow."
        },
        "doc": "Non-spontaneous, short replies, soft volume, normal rate; gives a clear account when seen alone and asked an open question; some English words mixed into Spanish",
        "why": "Short, quiet answers are common in teenagers at a first visit and grow longer as trust builds. Use open questions, wait through pauses, and do not fill the silence with lectures. Switching between Spanish and English is normal for a bilingual teenager and is not a speech finding. Her account came only after you explained confidentiality; record that too."
      },
      "process": {
        "obs": "Tells what happened in order: the presentation, the blank moment, then the group chat. Asked what she means, she explains clearly and comes back to the point.",
        "ans": {
          "0": ["Pues... en la clase de ciencias tuve que hacer una presentation y se me fue la mente en blanco. No pude decir nada. Sentí que todos se estaban riendo. Después, dos compañeros se burlaron de mí en el group chat.", "Well... in science class I had to give a presentation and my mind went blank. I couldn't say anything. I felt like everyone was laughing. Afterwards, two classmates made fun of me in the group chat."],
          "1": ["Como que se me olvidó todo lo que iba a decir. Todos me estaban mirando y me dio mucho miedo.", "Like I forgot everything I was going to say. Everyone was looking at me and I got really scared."]
        },
        "need": ["Linear"],
        "ok": ["Goal-directed"],
        "wrong": {
          "Thought blocking": "Her mind went blank once, in class, from fear. In the interview her thoughts run in order without breaks. Thought blocking is a sudden stop in the middle of speech, seen in the interview.",
          "Circumstantial": "She goes straight to the point, in few words.",
          "Tangential": "She answers the question she was asked.",
          "Loose associations": "Each idea follows clearly from the last."
        },
        "doc": "Linear, goal-directed: tells the events in order and explains the blank moment clearly (\"se me olvidó todo lo que iba a decir\")",
        "why": "\"Se me fue la mente en blanco\" (my mind went blank) is a common way to describe sudden fear in front of others. It is part of her history, not a disorder of thought process. Judge the process from how she tells the story today: in order and to the point."
      },
      "perception": {
        "ans": {
          "0": ["...No.", "...No."],
          "1": ["No.", "No."],
          "2": ["...No. Nada de eso.", "...No. Nothing like that."],
          "3": ["No oigo voces.", "I don't hear voices."],
          "4": ["No.", "No."]
        },
        "key": [0],
        "need": ["Denies perceptual disturbances", "Not responding to internal stimuli"],
        "wrong": {
          "Auditory hallucinations": "She hears no voices. Her mind going blank in class was fear, not a voice.",
          "Visual hallucinations": "She sees nothing unusual.",
          "Responding to internal stimuli": "She attends to you throughout."
        },
        "doc": "Denies auditory and visual hallucinations; not responding to internal stimuli. At the presentation she felt everyone was laughing: a fear at that moment, not a perception",
        "why": "Ask every patient, including a quiet teenager, in plain words. Keep thoughts and perceptions apart: \"sentí que todos se estaban riendo\" (I felt that everyone was laughing) is an interpretation made in fear, not a voice."
      },
      "content": {
        "ans": {
          "0": ["No creo. Se burlaron de mí, pero ya no dicen nada.", "I don't think so. They made fun of me, but they don't say anything anymore."],
          "1": ["Nadie me sigue. Pero en el salón siento que todos me están viendo.", "Nobody follows me. But in the classroom I feel everyone is looking at me."],
          "2": ["¿Eh? No.", "Huh? No."],
          "3": ["No sé. A lo mejor le doy demasiadas vueltas.", "I don't know. Maybe I think about it too much."],
          "4": ["A lo mejor nadie me está viendo tanto. Pero igual me da miedo.", "Maybe nobody is really looking at me that much. But it's still scary."],
          "5": ["No creo que sea mi culpa. Pero siempre pienso: ¿y si me vuelve a salir mal?", "I don't think it's my fault. But I always think: what if it goes wrong again?"],
          "6": ["Empezó con la presentation. Y lo del group chat.", "It started with the presentation. And the group chat thing."]
        },
        "key": [1, 4],
        "need": ["No delusions elicited", "Preoccupation with ___"],
        "wrong": {
          "Persecutory delusions": "The mocking in the group chat really happened and has stopped. A true event is not a delusion.",
          "Delusions of reference": "She feels looked at in class but doubts it herself (\"a lo mejor le doy demasiadas vueltas\"). She holds the idea loosely and can see another view; a delusion is fixed.",
          "Guilt or worthlessness (not delusional)": "She says she does not think it is her fault. Her worry is about failing again in front of others."
        },
        "ev": {
          "find": "Preoccupation with ___",
          "opts": [
            ["\"Nadie me sigue. Pero en el salón siento que todos me están viendo.\"", true],
            ["\"No creo. Se burlaron de mí, pero ya no dicen nada.\"", false],
            ["\"Empezó con la presentation. Y lo del group chat.\"", false]
          ],
          "why": "Her thoughts keep coming back to how others see her: feeling looked at in the classroom and fearing she will fail again. The start of the problem belongs in the history; it is not the content of her thinking now."
        },
        "doc": "No delusions elicited. Preoccupied with what classmates think of her: feels looked at in the classroom (\"siento que todos me están viendo\") but doubts it (\"a lo mejor le doy demasiadas vueltas\"); fears failing in front of others again. Mocked by two classmates in a group chat after the presentation; this has stopped. Does not blame herself",
        "why": "Asking how sure she is and whether there could be another explanation separates self-consciousness from a delusion: she holds the idea loosely and can see another view. Fear of others' judgment that began after a frightening moment in class points toward social anxiety; assess it over the next visits. Ask directly whether the bullying, online included, is still going on, because adults easily miss it."
      },
      "safety": {
        "obs": "Seen alone. She says the words about not waking up quietly, looking down. When you stay calm and ask more, she answers each question.",
        "ans": {
          "0": ["No tanto... Pero a veces pienso: ojalá no despertara.", "Not that much... But sometimes I think: I wish I wouldn't wake up."],
          "1": ["Sí, a veces. Pero no es que quiera morirme. Es más como que quisiera no estar aquí...", "Yes, sometimes. But it's not that I want to die. It's more like I wish I weren't here..."],
          "2": ["No. Nunca me he hecho daño tampoco. Nunca he hecho nada.", "No. I've never hurt myself either. I've never done anything."],
          "3": ["No, nada de un plan.", "No, nothing like a plan."],
          "4": ["No. No voy a hacer nada.", "No. I'm not going to do anything."],
          "5": ["No. Eso no.", "No. Not that."]
        },
        "key": [0, 1, 2],
        "need": ["Passive death wish", "Denies homicidal ideation"],
        "ok": ["Denies suicidal ideation"],
        "wrong": {
          "Active suicidal ideation, no plan": "She says she does not want to die and has never thought of killing herself.",
          "Active suicidal ideation with plan": "She has no plan and no intent.",
          "Homicidal ideation toward ___": "She has no thoughts of hurting anyone, including the two classmates."
        },
        "ev": {
          "find": "Passive death wish",
          "opts": [
            ["\"A veces pienso: ojalá no despertara.\"", true],
            ["\"No, nada de un plan.\"", false],
            ["\"No. Nunca me he hecho daño tampoco.\"", false]
          ],
          "why": "The finding is her wish not to wake up. Her other answers do not cancel it; they tell you its level: no wish to die, no plan, no intent, no self-harm. The form has no pick for a wish not to wake up. \"Passive death wish\" is the nearest honest pick because the thought is passive and about not being here; it does not mean she wants to die, so write her exact words and her denial of a wish to die."
        },
        "doc": "Passive wish not to wake up (nearest pick: passive death wish), sometimes (\"ojalá no despertara\"; \"quisiera no estar aquí\"); denies a wish to die, suicidal thoughts, plan and intent; has never harmed herself (asked, denies); denies homicidal ideation. Agreed to tell her mother or the clinic if the feeling grows. With her agreement, her mother is told about the group chat. Review at every visit",
        "why": "\"Ojalá no despertara\" can mean anything from wanting to escape to a wish to die, so always follow it up, calmly and directly: ask about a wish to die, suicidal thoughts, a plan, intent and self-harm. Asking does not put the idea in her head, and you do not need to ask about methods. Agree with her what she will do if the feeling grows. What you share with her mother follows what you promised her at the start: she decides, unless she or someone else is in danger; then safety comes first, and you tell her first whom you will inform. Follow your state's law and your clinic's policy. Give the family the 988 line (oprima el 2 para español) and 911 for an emergency."
      },
      "orientation": {
        "ans": {
          "0": ["...Jueves.", "...Thursday."],
          "1": ["En una clínica. Donde ven a los jóvenes con problemas de emociones.", "In a clinic. Where they see young people with problems with their feelings."],
          "2": ["Una doctora. Alguien que escucha lo que uno dice.", "A doctor. Someone who listens to what you say."]
        },
        "need": ["Oriented to 3 spheres"],
        "wrong": {
          "Disoriented to time": "She names the day correctly.",
          "Disoriented to place": "She knows she is at a clinic for young people.",
          "Disoriented to person": "She knows who she is and who you are."
        },
        "doc": "Oriented to 3 spheres (time, place, person)",
        "why": "Orientation is almost always intact in an anxious teenager, but the form needs it. Say that you ask everyone these questions, so she does not feel tested or treated as a small child."
      },
      "insight": {
        "ans": {
          "0": ["No creo que esté enferma. Me duele la panza por la escuela.", "I don't think I'm sick. My stomach hurts because of school."],
          "1": ["Porque no puedo ir a la escuela. Y mi mamá está preocupada.", "Because I can't go to school. And my mom is worried."],
          "2": ["No sé... ¿Una medicina me haría tener menos miedo en la escuela?", "I don't know... Would a medicine make me less scared at school?"]
        },
        "need": ["Fair", "Grade 3: blames others/external factors"],
        "ok": ["Grade 2: slight awareness"],
        "wrong": {
          "Good": "She does not yet see the fear itself as something that can be treated.",
          "Poor": "She knows something is wrong, says she cannot go to school, and asks whether treatment could help.",
          "Grade 1: complete denial": "She admits a problem: she cannot go to school, and the fear and the pain are real to her.",
          "Grade 4: aware, cause unknown in self": "She places the cause in school, not in something she does not understand in herself.",
          "Grade 5: intellectual insight": "She does not yet link her fear to an anxiety that could be treated."
        },
        "ev": {
          "find": "Grade 3: blames others/external factors",
          "opts": [
            ["\"No creo que esté enferma. Me duele la panza por la escuela.\"", true],
            ["\"No sé... ¿Una medicina me haría tener menos miedo en la escuela?\"", false],
            ["\"Porque no puedo ir a la escuela. Y mi mamá está preocupada.\"", false]
          ],
          "why": "She sees the problem and puts its cause outside herself, in school. That is grade 3. Her question about medicine shows openness to help, a good sign for the plan, but it is not yet insight into the fear."
        },
        "doc": "Fair (grade 3): does not see herself as ill; links her stomachaches to school (\"me duele la panza por la escuela\"); knows she cannot go to school and that her mother is worried; asks whether medicine could make school less scary",
        "why": "Grade 3 here is not blame of anyone: the presentation and the mocking really did start this. Insight grows as she learns that worry can make the stomach and the head really hurt, and that fear shrinks with small steps. Answer her question honestly: the first steps are a regular wake-up time, a gradual return to school and talking with the school counselor; medicine is discussed later, with her and her mother, if needed."
      },
      "impulse": {
        "ans": {
          "0": ["No. En vez de enojarme, me quedo callada.", "No. Instead of getting angry, I just go quiet."],
          "1": ["No.", "No."]
        },
        "need": ["Good impulse control"],
        "wrong": {
          "Fair impulse control": "No anger, aggression, recklessness or self-harm in the history or in the interview.",
          "Poor impulse control": "No anger, aggression, recklessness or self-harm in the history or in the interview."
        },
        "doc": "Good impulse control: no aggression or self-harm; goes quiet rather than getting angry (\"me quedo callada\"); calm throughout the interview",
        "why": "Base impulse control on the history and on what you see. Staying up late on her phone is a sleep and avoidance problem to work on in the plan, not poor impulse control. Her habit of going quiet when upset is worth knowing: it is one reason to agree with her how she will tell an adult if the wish not to wake up grows."
      },
      "judgment": {
        "ans": {
          "0": ["Lo echaría en un buzón.", "I'd drop it in a mailbox."],
          "1": ["Les avisaría a los de la entrada y saldría.", "I'd tell the people at the entrance and get out."]
        },
        "need": ["Fair", "Intact test judgment"],
        "ok": ["Impaired social judgment"],
        "wrong": {
          "Good": "Two months away from school, with nights up late, show that fear is steering her daily choices.",
          "Poor": "Her test answers are sensible, and today she chose to tell you what happened, agreed what may be shared with her mother, and is willing to try small steps.",
          "Impaired test judgment": "Both answers are sensible and safe.",
          "Intact social judgment": "Fear is still steering her daily choices: two months away from school and nights up late."
        },
        "doc": "Fair: intact test judgment (letter into a mailbox, smoke reported to the staff at the entrance); social judgment partly limited by fear (two months' school avoidance, late nights), but today she shared what happened, agreed what her mother may be told and is open to small steps",
        "why": "Her avoidance is driven by fear, not by poor reasoning, and it keeps the fear going. Judgment is fair because she can make sensible decisions when supported: today she chose what to share and listened to the plan. Decisions about her care are made with her and her mother together."
      }
    }
  }
]);
