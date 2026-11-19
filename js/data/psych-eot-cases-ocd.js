/* End-of-treatment review practice case: OCD (Tomás), last ERP session. Appends to window.PSYCH_EOT_CASES.
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish text. Clinician lines use usted.
   Patient: Tomás, 34, payroll clerk at a school district office, wife Araceli (fictional). Teaching examples only. Crisis line 988 (oprima 2 para español). */
window.PSYCH_EOT_CASES = (window.PSYCH_EOT_CASES || []).concat([
  {
    "id": "ocd",
    "title": "Tomás at his last session",
    "level": "B1",
    "dx": "Obsessive-compulsive disorder, with good or fair insight; much improved after exposure and response prevention",
    "decision": {
      "end": true,
      "why": "Regular sessions can end today. The target symptoms are much improved: he rated them 9/10 at the start and 2/10 now. Washing takes under thirty minutes a day, his hands have healed, he checks the stove and the lock once and is on time for work. He is back to his usual work, and he and Araceli visit his sister again and he holds his niece. Mood is euthymic, and he denies suicidal thoughts, as he did at the first visit. What remains is named honestly: urges to check at busy times at work, which he now lets pass. He names his own early warning signs in his own words, the plan is written down, he knows how to restart the ladder, and Araceli knows the signs and how to answer without reassuring him. The risk after ending is a relapse at a busy or stressful time. A booster session in three months, the open door to come back without starting over, and medicine kept as an option cover it. Continuing weekly sessions now would add little and could suggest he cannot manage on his own, when the aim of ERP is that he becomes his own therapist."
    },
    "setting": "Outpatient clinic, end-of-treatment review: the 16th and last planned weekly session of exposure and response prevention, about four months after the first visit. Tomás, 34, is a payroll clerk at a school district office. He is married to Araceli, and came alone today. You saw him at the first visit and through the treatment under supervision.",
    "chart": [
      "First visit about four months ago: two years of contamination fears (germs on his hands, making his baby niece ill) with hand washing until the skin cracked, long showers and changing all his clothes on coming home; checking the stove, locks and windows again and again, late for work, rechecking payroll figures; repeated asking God's forgiveness; more than three hours a day; reassurance seeking from his wife. Anxious, low mood from the time lost; denied suicidal thoughts; a beer now and then. Insight good. Self-rated 9/10.",
      "Plan agreed by shared decision: exposure and response prevention (ERP) first, 16 weekly sessions; medicine kept as an option. Practice between sessions. With his consent, his wife Araceli to join some sessions. Skin care for his hands.",
      "Course: exposure ladder worked up step by step (touching door handles without washing, using the shared office phone, holding his niece before washing, leaving home after checking once). Araceli came to two sessions and learned to decline reassurance kindly. Washing and checking fell steadily; practice was harder in busy weeks at work. No medicine.",
      "Today: the last planned session. Review the course and the change in target symptoms, a short review MSE with safety, daily functioning, the relapse plan, medicines, and decide whether regular sessions can end."
    ],
    "fields": {
      "course": {
        "ans": {
          "0": [
            "Pude venir a las dieciséis. No falté a ninguna.",
            "I was able to come to all sixteen. I didn't miss a single one."
          ],
          "1": [
            "Casi todas las semanas. En las semanas que había mucho trabajo, sí lo hice menos.",
            "Almost every week. In the weeks when work was busy, I did it less, though."
          ],
          "2": [
            "Descubrir yo mismo que la ansiedad baja sola aunque no me lave. Y que Araceli viniera conmigo también me ayudó mucho.",
            "Finding out for myself that the anxiety comes down by itself even if I do not wash. And having Araceli come with me helped a lot too."
          ],
          "3": [
            "La primera vez que toqué la manija de una puerta sin lavarme, me dio mucho miedo.",
            "The first time I touched a door handle and did not wash, I was really scared."
          ]
        },
        "key": [
          0,
          1
        ],
        "need": [
          "Attended all planned sessions",
          "Practised between sessions most weeks",
          "Family took part in ___ session(s)"
        ],
        "wrong": {
          "Missed several sessions": "He came to all sixteen sessions.",
          "Attended most planned sessions": "He missed none: write all, not most.",
          "Rarely practised between sessions": "He practised almost every week. Only the busy weeks were harder."
        },
        "doc": "Exposure and response prevention, 16 weekly sessions (first visit about four months ago): exposure ladder of door handles, the shared office phone, holding his niece before washing, and leaving home after checking once. Attended all 16; practiced between sessions most weeks, less in busy weeks at work; wife Araceli took part in 2 sessions (learning to decline reassurance kindly)",
        "why": "Write what treatment was given, how much, and how it was used. If the symptoms come back, the next doctor knows what worked and what to restart. Compare the chart's plan with what happened. Ask what helped and what was hard. His answer (the anxiety comes down by itself) shows he took in the core lesson of ERP, and the fear of the first exposure is worth remembering if he has to start the ladder again."
      },
      "change": {
        "ans": {
          "0": [
            "No poder parar de lavarme las manos. Ahora, en total, me toma menos de media hora al día. Mis baños son cortos y las manos ya se me curaron por completo.",
            "Not being able to stop washing my hands. Now it takes less than half an hour a day altogether. My showers are short and my hands have healed completely."
          ],
          "1": [
            "Al principio era un nueve. Ahora es como un dos.",
            "At first it was a nine. Now it is about a two."
          ],
          "2": [
            "En la mañana reviso la estufa y la chapa una sola vez y ya puedo salir de la casa. Ya no llego tarde. Y cargo a mi sobrina sin problema.",
            "In the morning I check the stove and the lock once and I can leave the house. I am not late anymore. And I hold my niece with no problem."
          ],
          "3": [
            "Cuando hay mucho trabajo, como al cierre de la nómina a fin de mes, todavía me dan ganas de revisar. Pero ya aprendí a dejar que la sensación pase sola.",
            "When work is busy, like when payroll closes at the end of the month, I still get the urge to check. But I have learned to let the feeling pass by itself."
          ]
        },
        "key": [
          0,
          1,
          3
        ],
        "need": [
          "Much improved",
          "Self-rated ___/10 at start, ___/10 now",
          "Residual symptoms: ___"
        ],
        "wrong": {
          "Minimally improved": "He rates 9/10 at the start and 2/10 now, and washing takes under half an hour a day: much more than a minimal change.",
          "Unchanged": "He rates 9/10 at the start and 2/10 now.",
          "Worse": "He rates 9/10 at the start and 2/10 now."
        },
        "doc": "Much improved: hand washing under 30 minutes a day, short showers, hands healed; checks the stove and the lock once and leaves on time; checks payroll figures once; holds his niece. Self-rated 9/10 at start, 2/10 now. Residual symptoms: urges to check at busy times at work (payroll close at the end of the month), which he lets pass without checking",
        "why": "Use the patient's own rating then and now, and concrete examples of what he can do again. Then ask what is still difficult and record it honestly. The urges at busy times are the residual symptom, and how he answers them (he lets them pass) is the skill the relapse plan builds on. A review that writes only \"much improved\" hides what the next doctor most needs to know."
      },
      "mood": {
        "obs": "Relaxed and smiling. He sits back in the chair with his hands resting on the desk (at the first visit he kept them off it). Laughs a little about payroll week at work and grows serious when he recalls the first exposure. His expression moves with the topic.",
        "ans": {
          "0": [
            "Me siento tranquilo y ligero. Antes sentía que algo me venía persiguiendo, y ahora estoy en paz.",
            "I feel calm and light. Before, I felt as if something was chasing me, and now I am at peace."
          ],
          "1": [
            "Como un ocho. Cuando llegué era como un cinco, ¿verdad?",
            "About an eight. When I first came it was about a five, right?"
          ]
        },
        "quote": "Me siento tranquilo y ligero. ... ahora estoy en paz. (I feel calm and light. ... now I am at peace.)",
        "key": [
          0,
          1
        ],
        "need": [
          "Euthymic mood",
          "Congruent affect",
          "Full range affect"
        ],
        "wrong": {
          "Anxious mood": "He was anxious at the first visit. Now he says he feels calm and light and rates his mood about 8/10.",
          "Dysphoric mood": "The low mood of the first visit came from the time he lost to the symptoms. It has lifted as the symptoms eased.",
          "Restricted affect": "He smiles, laughs a little and grows serious with the topic: a full range.",
          "Incongruent affect": "He looks as relaxed as he says he feels."
        },
        "doc": "\"Me siento tranquilo y ligero. ... ahora estoy en paz.\" (I feel calm and light. ... now I am at peace.) Mood about 8/10 (about 5/10 at the first visit). Euthymic mood; full range, congruent affect",
        "why": "Quote his words and compare with the first visit, when he was anxious and low. \"Ligero\" and \"en paz\" turn round the weight he described before (sentirse perseguido, a \"me queda algo en las manos\" that never left). That is a small, real sign of change. Check the low mood of the first visit too: it has gone with the symptoms, which fits low mood secondary to OCD."
      },
      "safety": {
        "ans": {
          "0": [
            "No. Usted me lo preguntó en la primera consulta también, y nunca he pensado eso.",
            "No. You asked me at the first visit too, and I've never thought that."
          ],
          "1": [
            "¿Querer desaparecer? No, tampoco he sentido eso.",
            "Wanting to disappear? No, I've never felt that either."
          ],
          "2": [
            "No, nunca. Antes lo que me daba miedo era pasarles gérmenes a los demás.",
            "No, never. Before, what scared me was passing germs on to others."
          ]
        },
        "key": [
          0,
          2
        ],
        "need": [
          "Denies suicidal ideation, plan, or intent",
          "Denies homicidal ideation"
        ],
        "wrong": {
          "Past passive death wish, none now": "He has never had thoughts of dying, at the first visit or since.",
          "Passive death wish, no plan or intent": "He has never had thoughts of dying.",
          "Homicidal ideation present (reassess)": "His old fear of passing germs on to others was an obsessional fear that he resisted, not a wish to harm anyone."
        },
        "doc": "Denies suicidal ideation, plan, or intent, now and since the first visit (never had such thoughts); denies homicidal ideation (his earlier fear of passing germs on to others was an obsessional fear, not a wish to harm)",
        "why": "Ask at every review, even when there were never such thoughts: mood can change over months of treatment, and the answer belongs in the record before treatment ends. Question 1 is for patients who had these thoughts before. He did not, so it is optional here. In OCD, fears of harming others (here, by passing on germs) are unwanted and resisted: record them as obsessions, not as homicidal ideation, and still ask the question."
      },
      "insight": {
        "ans": {
          "0": [
            "Entre más me lavaba y revisaba para quitarme la ansiedad, más fuerte se ponía. Ahora lo sé en el cuerpo: si dejo la ansiedad en paz, baja sola.",
            "The more I washed and checked to get rid of the anxiety, the stronger it got. Now I know it in my body: if I leave the anxiety alone, it comes down on its own."
          ],
          "1": [
            "Pensaría que es el TOC otra vez. No que soy raro, sino que es una señal de la enfermedad.",
            "I'd think it was the OCD again. Not that I'm strange, but that it's a sign of the illness."
          ]
        },
        "key": [
          0,
          1
        ],
        "need": [
          "Good",
          "Grade 6: true emotional insight"
        ],
        "ok": [
          "Grade 5: intellectual insight"
        ],
        "wrong": {
          "Poor": "He explains the cycle of washing and anxiety in his own words.",
          "Grade 3: blames others/external factors": "He does not blame anyone. He sees the cycle in his own behavior.",
          "Grade 4: aware, cause unknown in self": "He knows what kept the symptoms going and what to do about it."
        },
        "doc": "Good (grade 6, true emotional insight): understands that washing and checking kept the anxiety going, and acts on it (lets the urges pass); would recognize a return as the OCD, not as being \"raro\"",
        "why": "At the end of treatment, insight includes knowing what a relapse would look like. Grade 6 fits because the understanding changes what he does: he leaves the urges alone at busy times. Grade 5 is accepted, since an interview alone cannot always show the change in behavior. At the first visit he thought he was just strange (\"yo soy raro\"). Now he names the illness, which lowers the shame that kept him from asking for help for so long. TOC is the common Spanish short form of trastorno obsesivo-compulsivo."
      },
      "function": {
        "ans": {
          "0": [
            "Llego a tiempo todas las mañanas. Y las cantidades de la nómina las reviso una sola vez y sigo con lo demás.",
            "I get to work on time every morning. And I check the payroll figures just once and move on."
          ],
          "1": [
            "Duermo bien. Me despierto descansado en la mañana.",
            "I sleep well. I wake up rested in the morning."
          ],
          "2": [
            "Sí. Ahora Araceli y yo vamos otra vez a casa de mi hermana los domingos, y ya no me da miedo cargar a mi sobrina.",
            "Yes. Now Araceli and I go to my sister's house on Sundays again, and I am no longer afraid to hold my niece."
          ],
          "3": [
            "No. Sigo igual que antes: una cerveza de vez en cuando. No tomo para dormir.",
            "No. Same as before: a beer now and then. I don't drink to sleep."
          ]
        },
        "key": [
          0,
          2
        ],
        "need": [
          "Back to usual work or school",
          "Social and leisure activities resumed"
        ],
        "ok": [
          "Daily routine and sleep regular",
          "Family relationships improved"
        ],
        "wrong": {
          "Partly back to work or school": "He never stopped work, and now he is on time every day and checks figures once: he is back to his usual work.",
          "Not yet back to work or school": "He is on time for work every day.",
          "Avoidance remains in some situations": "He touches door handles, uses the shared phone and holds his niece again. The urges at busy times are residual symptoms he lets pass, not avoidance.",
          "Alcohol no longer used to cope": "He never drank to cope. He has a beer now and then, as at the first visit. The pick would suggest a problem he did not have."
        },
        "doc": "Back to usual work: on time every day, checks payroll figures once; sleeps well; leisure resumed (visits his sister on Sundays and holds his niece, avoided before out of fear of contamination); alcohol a beer occasionally, not used to cope",
        "why": "Function shows whether the change holds in daily life. Ask for concrete examples: arriving on time and holding his niece again tell you more than \"I'm fine\". He was never off work, so \"back to usual work\" means his work is no longer slowed by checking. Ask about alcohol even when it was not a problem, because drinking to cope can start when symptoms return."
      },
      "warning": {
        "ans": {
          "0": [
            "Que mis baños se vuelvan largos otra vez. Y si empiezo otra vez a preguntarle a Araceli «¿verdad que está bien?», eso es una señal de peligro. También, cuando me estreso mucho, puede que revise más.",
            "My showers getting long again. And if I start asking Araceli \"it's okay, right?\" again, that is a danger sign. Also, when I get very stressed, I might check more."
          ],
          "1": [
            "Voy a mirar el plan que escribimos y a empezar la práctica otra vez desde los pasos fáciles. Si no mejora, llamo a la clínica.",
            "I'll look at the plan we wrote and start the practice again from the easy steps. If it doesn't get better, I'll call the clinic."
          ],
          "2": [
            "Araceli. Ella también conoce las señales. Si empiezo a preguntarle otra vez, creo que me va a decir que no, con cariño.",
            "Araceli. She knows the signs too. If I start asking her again, I think she'll say no, kindly."
          ],
          "3": [
            "Sí, por favor. Y también se lo voy a enseñar a Araceli.",
            "Yes, please. And I'll show it to Araceli too."
          ]
        },
        "key": [
          0,
          1,
          2
        ],
        "need": [
          "Names own early warning signs",
          "Written relapse prevention plan",
          "Knows how to restart the practice",
          "Family knows the warning signs"
        ],
        "ok": [
          "Knows when and how to come back"
        ],
        "wrong": {
          "Cannot yet name warning signs": "He names three in his own words: longer showers, asking Araceli for reassurance again, and more checking when stressed."
        },
        "doc": "Names own early warning signs (showers getting long again, asking his wife \"¿verdad que está bien?\" again, more checking when stressed); written relapse prevention plan, copy for him and his wife; will restart the exposure practice from the easy steps, and call the clinic if it does not get better; wife knows the signs and how to answer without reassuring",
        "why": "A relapse plan in the patient's own words is the main protection after regular sessions end. His signs are specific to him, and the reassurance question is one Araceli will hear first, so her knowing the signs (with his consent) is part of the plan. Write it down together and give him a copy: under stress people forget what they planned, and a written plan tells him exactly where to restart."
      },
      "medicine": {
        "ans": {
          "0": [
            "No, no tomo nada. Tampoco voy con otro doctor.",
            "No, I'm not taking anything. And I'm not seeing another doctor either."
          ],
          "1": [
            "No, no he comprado nada en la farmacia.",
            "No, I haven't bought anything at the pharmacy."
          ]
        },
        "key": [
          0,
          1
        ],
        "need": [
          "No psychiatric medicine",
          "No medicines from the pharmacy for sleep or anxiety"
        ],
        "wrong": {
          "Continues ___ (prescribed by ___)": "He takes no medicine. ERP was chosen first, and it worked.",
          "Medicine to be reviewed by ___": "There is no medicine to review. Medicine stays an option if the symptoms return."
        },
        "doc": "No psychiatric medicine (ERP chosen first by shared decision); no medicines from the pharmacy for sleep or anxiety; no other doctor. Medicine remains an option if symptoms return",
        "why": "Ask about all medicines, including what is bought at the pharmacy, even when none were prescribed. Record that medicine stays an option: if the OCD returns and the ladder alone does not bring it down, the next doctor can offer it without starting the discussion from nothing."
      },
      "plan": {
        "ans": {
          "0": [
            "Me da un poco de nervios, pero tengo el plan, así que lo voy a intentar.",
            "It makes me a little nervous, but I have the plan, so I will give it a try."
          ],
          "1": [
            "O sea que no tengo que empezar desde cero. Qué alivio.",
            "So I don't have to start from the beginning. What a relief."
          ],
          "2": [
            "En tres meses, entonces. Está bien. Mientras tanto, sigo practicando yo solo.",
            "In three months, then. All right. Until then, I'll keep practicing on my own."
          ]
        },
        "key": [
          0,
          1,
          2
        ],
        "need": [
          "Regular sessions ended",
          "Booster session in ___ months",
          "Return to the clinic if symptoms come back"
        ],
        "ok": [
          "Letter to primary care clinician",
          "Crisis plan given (988; 911)"
        ],
        "wrong": {
          "Continue sessions every ___ weeks: goals not yet met": "The goals are met: 2/10 from 9/10, back to usual work, a written plan he can use. Regular sessions end today.",
          "Referred to ___": "Nothing needs another service. His treatment is complete here."
        },
        "doc": "Regular sessions ended today (16 of 16 ERP sessions); booster session in 3 months; return to the clinic if symptoms come back, without starting from the beginning; medicine remains an option if symptoms return; written relapse plan given",
        "why": "Ask how he feels about ending: a little unease is normal, and naming it lets you answer it. Ending well includes saying how to come back without starting from the beginning, so a return is part of the plan, not a failure. The booster session checks that the gains hold and gives him a date to aim for while he practices on his own. A letter to a primary care clinician or a crisis plan (988, 911) is accepted but not keyed: he has never had suicidal thoughts and no primary care clinician is involved in this care."
      }
    }
  }
]);
