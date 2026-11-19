/* Case simulation: OCD (Tomás), outpatient first visit. Appends to window.PSYCH_CASES.
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish text. Clinician lines use usted.
   Patient: Tomás, 34, payroll clerk at a school district office, wife Araceli (fictional). Teaching examples only. Crisis line 988 (oprima 2 para español). */
window.PSYCH_CASES = (window.PSYCH_CASES || []).concat([
  {
    "id": "ocd",
    "title": "Tomás: washing and checking",
    "level": "B1",
    "setting": "Outpatient clinic, first visit. Tomás, 34, is a payroll clerk at a school district office. He is married to Araceli, who persuaded him to come but did not come with him. They have no children, but they often see his baby niece. His hands look red and chapped. He asks you to call him Tomás.",
    "steps": [
      {
        "who": "Tomás",
        "line": [
          "Mi esposa me dijo que viniera. Me da pena venir al doctor por algo así, pero...",
          "My wife told me to come. I'm embarrassed to see a doctor about something like this, but..."
        ],
        "choices": [
          {
            "tl": "Gracias por venir, Tomás. No tiene nada de qué avergonzarse. ¿Me puede contar qué lo está molestando, empezando por donde le sea más fácil?",
            "en": "Thank you for coming, Tomás. There is nothing to be embarrassed about. Could you tell me what is troubling you now, starting wherever is easiest?",
            "score": 2,
            "fb": "Good. People with OCD often hide it for years out of shame. Thanking him, taking away the shame and asking an open question make it easier for him to say more."
          },
          {
            "tl": "¿Qué síntomas tiene?",
            "en": "What symptoms do you have?",
            "score": 1,
            "fb": "A fair question, but it skips the shame he has just told you about, so he may say less."
          },
          {
            "tl": "Si solo fue su esposa la que le dijo que viniera, seguramente no es nada grave.",
            "en": "If it was just your wife who told you to come, it is probably nothing serious.",
            "score": 0,
            "fb": "This dismisses him before he has spoken. Family members often notice the problem before the patient asks for help."
          }
        ]
      },
      {
        "who": "Tomás",
        "line": [
          "No puedo dejar de lavarme las manos. Me las lavo muchas veces al día y ya se me agrietaron. Siento que tengo gérmenes, y pienso que le puedo pasar algo a alguien, sobre todo a mi sobrinita, que es una bebé...",
          "I can't stop washing my hands. I wash them many times a day and they have cracked. I feel there are germs on them, and I think I could pass something on to someone, especially my little niece, who is a baby..."
        ],
        "choices": [
          {
            "tl": "¿Como cuántas veces al día se las lava?",
            "en": "About how many times a day do you wash them?",
            "score": 1,
            "fb": "Useful, but a count alone misses the thought that drives the washing and the anxiety behind it."
          },
          {
            "tl": "Gracias por contármelo. Antes de lavarse, ¿qué pensamientos le vienen a la mente? Y si no se las lava, ¿cómo se siente?",
            "en": "Thank you for telling me. Before you wash, what thoughts come into your mind? And if you do not wash, how do you feel?",
            "score": 2,
            "fb": "Good. You ask about the obsession (the unwanted thought) and about what happens when he resists the compulsion, without judging. Usually the answer is a rise in anxiety."
          },
          {
            "tl": "Usted se preocupa demasiado. No necesita lavarse tanto.",
            "en": "You worry too much. You do not need to wash that much.",
            "score": 0,
            "fb": "He already knows it is too much. Brushing it off adds to his shame and teaches you nothing about the symptoms."
          }
        ]
      },
      {
        "who": "Tomás",
        "line": [
          "Si no me lavo, me da una angustia tan fuerte que no puedo hacer nada. Pienso: ¿y si mi sobrina se enferma por mi culpa? Lavarme me calma un poco, pero a los minutos me vuelve la duda. Mis baños ya duran muchísimo, y apenas llego a la casa me cambio toda la ropa. Y cuando siento que algo no quedó bien, le pido perdón a Dios muchas veces, hasta que siento que me escuchó.",
          "If I don't wash, I get so anxious I can't do anything. I think: what if my niece gets sick because of me? Washing calms me a little, but a few minutes later the doubt comes back. My showers take very long now, and as soon as I get home I change all my clothes. And when I feel something isn't right, I ask God's forgiveness many times, until I feel he heard me."
        ],
        "choices": [
          {
            "tl": "Entonces, desde hoy, trate de no lavarse las manos y ya.",
            "en": "Then from today, just try not to wash your hands.",
            "score": 0,
            "fb": "Telling him to stop by willpower, with no plan or support, sets him up to fail. Facing the fear is done step by step in treatment, at a pace he agrees to."
          },
          {
            "tl": "Eso suena muy pesado. En total, ¿cuánto tiempo al día le toman el lavado y el cambio de ropa? ¿Hay algo más que sienta que tiene que revisar o repetir una y otra vez?",
            "en": "That sounds hard. Altogether, how much time a day do the washing and changing take? Is there anything else you feel you have to check or repeat again and again?",
            "score": 2,
            "fb": "Good. Time spent and interference are part of the diagnosis, and contamination fears often come with checking, so ask about other compulsions. His repeated asking for forgiveness may be scrupulosity, a religious form of OCD. Note it, ask about it with respect, and do not argue with his faith."
          },
          {
            "tl": "¿Me permite ver la piel de sus manos?",
            "en": "May I look at the skin on your hands?",
            "score": 1,
            "fb": "Looking after the skin matters and is worth doing later in the visit. First find out how much of his day the symptoms take."
          }
        ]
      },
      {
        "who": "Tomás",
        "line": [
          "Todo junto serán como tres horas o más. Antes de salir reviso la estufa, las chapas de las puertas y las ventanas una y otra vez. Y aunque ya revisé, regreso a ver otra vez. Últimamente he llegado tarde al trabajo. Y en la oficina reviso las cantidades de la nómina una y otra vez antes de enviarla.",
          "Altogether it is probably three hours or more. Before I leave I check the stove, the door locks and the windows again and again. Even after I check, I go back and look again. Lately I have been late to work. And at the office I check the payroll figures again and again before I send them."
        ],
        "choices": [
          {
            "tl": "¿Cuántas veces ha llegado tarde?",
            "en": "How many times have you been late?",
            "score": 1,
            "fb": "It records the impact, but a count of late days tells you less than how he himself sees the thoughts."
          },
          {
            "tl": "Basta con que revise una sola vez.",
            "en": "It is enough to check just once.",
            "score": 0,
            "fb": "Simple advice like this treats a disorder as a lack of willpower. He has surely tried already."
          },
          {
            "tl": "Entonces le afecta mucho la vida diaria y el trabajo. Y usted, ¿cómo ve estos pensamientos y el tener que revisar tanto?",
            "en": "So it is having a big effect on your daily life and your work. How do you yourself see these thoughts and the checking?",
            "score": 2,
            "fb": "Good. You reflect the impact, then ask about insight: does he see the thoughts as excessive? Insight is recorded as a specifier in OCD and shapes how you explain treatment."
          }
        ]
      },
      {
        "who": "Tomás",
        "line": [
          "Ya sé que es raro. Que es demasiado. Pero no puedo parar. Doctor, ya no tengo gérmenes en las manos, ¿verdad? Están bien, ¿verdad?",
          "I know it's strange. That it's too much. But I can't stop. Doctor, I don't have germs on my hands anymore, right? They're fine, right?"
        ],
        "choices": [
          {
            "tl": "Saber que es demasiado y aun así no poder parar es muy difícil. Pero si le digo «están bien», se siente mejor un momento y luego la ansiedad regresa. Por eso voy a evitar, a propósito, repetirle «están bien». No es por frialdad, sino para ayudarle a salir de este ciclo. Por lo que me cuenta, esto parece un trastorno obsesivo-compulsivo. Es una condición muy conocida y tiene tratamiento.",
            "en": "Knowing it is too much and still not being able to stop is very hard. But if I say \"they are fine,\" you feel better for a moment and then the anxiety comes back. So I will deliberately not keep saying \"they are fine.\" It is not to be cold, but to help you get out of this cycle. From what you tell me, this looks like obsessive-compulsive disorder. It is a well-known condition and it can be treated.",
            "score": 2,
            "fb": "Good. Asking for reassurance works like a compulsion: it relieves anxiety briefly and keeps the cycle going. You explain warmly why you will not keep reassuring him, and you give him a name for the problem and hope."
          },
          {
            "tl": "Sí, están bien. Cada vez que se preocupe, pregúnteme las veces que quiera.",
            "en": "Yes, they are fine. Whenever you get worried, ask me as many times as you like.",
            "score": 0,
            "fb": "Kind in intent, but repeated reassurance feeds the cycle of doubt and checking, and here you invite more of it."
          },
          {
            "tl": "Eso puede ser un trastorno obsesivo-compulsivo.",
            "en": "That may be obsessive-compulsive disorder.",
            "score": 1,
            "fb": "Naming the condition helps, but you skip his distress and leave his request for reassurance unaddressed."
          }
        ]
      },
      {
        "who": "Tomás",
        "line": [
          "Entonces es una enfermedad... Siento un poco de alivio. La verdad, últimamente ando muy decaído. Todo me toma tanto tiempo y me siento un inútil.",
          "So it is an illness... I feel a little relieved. Honestly, lately I have been very down. Everything takes so much time and I feel useless."
        ],
        "choices": [
          {
            "tl": "Todo depende de cómo uno lo vea. Hay que pensar en positivo.",
            "en": "It all depends on how you look at it. You have to think positive.",
            "score": 0,
            "fb": "Dismissive. Low mood is common with OCD and needs to be assessed, not talked away."
          },
          {
            "tl": "¿Está durmiendo bien por las noches?",
            "en": "Are you sleeping well at night?",
            "score": 1,
            "fb": "Sleep is worth asking about, but when a patient says his mood is low, ask about suicidal thoughts first."
          },
          {
            "tl": "Gracias por contarme también cómo anda su ánimo. Esto se lo pregunto a todos mis pacientes: cuando se siente decaído, ¿ha pensado que quiere morirse o quitarse la vida? ¿Y toma alcohol para despejar la mente?",
            "en": "Thank you for telling me about your mood too. I ask everyone this: when you feel down, have you thought you want to die or to end your life? And do you drink alcohol to clear your mind?",
            "score": 2,
            "fb": "Good. Depression often comes with OCD. You ask about suicidal thoughts directly and calmly, framed as a routine question, and you ask about alcohol as a way of coping."
          }
        ]
      },
      {
        "who": "Tomás",
        "line": [
          "Nunca he querido morirme. Y tomo una cerveza de vez en cuando, nada más. Si se puede mejorar, quiero mejorar. ¿Qué tratamiento hay?",
          "I have never wanted to die. And I have a beer now and then, nothing more. If it can get better, I want to get better. What treatment is there?"
        ],
        "choices": [
          {
            "tl": "Le voy a recetar una medicina.",
            "en": "I will prescribe you a medicine.",
            "score": 1,
            "fb": "Medicine can help, but you give him no choice and leave out therapy, which is a first-line treatment too."
          },
          {
            "tl": "Hay dos tratamientos principales. Uno es practicar, poco a poco, enfrentar lo que le da ansiedad sin lavarse ni revisar, y descubrir que la ansiedad baja sola. El otro es la medicina. Los dos funcionan. Lo decidimos juntos, tomando en cuenta lo que usted prefiera.",
            "en": "There are two main treatments. One is practice in facing what makes you anxious, a little at a time, without washing or checking, and finding that the anxiety comes down by itself. The other is medicine. Both work. We decide together, taking your wishes into account.",
            "score": 2,
            "fb": "Good. In plain words you describe exposure and response prevention, a form of cognitive behavioral therapy, and medicine, and you make the decision a shared one."
          },
          {
            "tl": "Si deja todo de golpe, se mejora rápido.",
            "en": "If you stop everything at once, you will get better quickly.",
            "score": 0,
            "fb": "Untrue and discouraging when it fails. Facing fears works best step by step, starting with easier situations."
          }
        ]
      },
      {
        "who": "Tomás",
        "line": [
          "Si es poco a poco, quiero intentarlo. Pero todos los días le pregunto a Araceli: «¿Verdad que está bien?», una y otra vez. Creo que ya está cansada.",
          "If it is a little at a time, I want to try. But every day I ask Araceli, \"Is it okay, right?\", again and again. I think she is tired too."
        ],
        "choices": [
          {
            "tl": "Araceli también lo está apoyando a usted. Si usted quiere, la próxima vez podría venir con ella, y hablamos juntos de esta condición y de cómo la familia puede ayudar. ¿Qué le parece?",
            "en": "Araceli is supporting you too. If you would like, next time you could come with her, and we could talk together about this condition and how family can help. What do you think?",
            "score": 2,
            "fb": "Good. Families are often drawn into reassuring and checking, which keeps the cycle going. With his agreement, involving his wife helps both of them and lets her learn to respond without reassuring."
          },
          {
            "tl": "Hable bien de esto con su esposa en la casa, por favor.",
            "en": "Please talk this over properly with your wife at home.",
            "score": 1,
            "fb": "Not wrong, but it leaves the couple to work it out alone. Offer to see them together, if he agrees."
          },
          {
            "tl": "Dígale a Araceli que le conteste «está bien» enseguida cada vez que le pregunte.",
            "en": "Tell Araceli to answer \"it is fine\" right away whenever you ask.",
            "score": 0,
            "fb": "This turns his wife's reassurance into part of the compulsion. Family accommodation keeps OCD going."
          }
        ]
      }
    ],
    "summary": {
      "findings": [
        "Two years of contamination fears (germs, making his baby niece ill) with hand washing until the skin cracks, long showers and changing clothes on coming home; more than three hours a day",
        "Repeated checking of the stove, door locks and windows, now making him late for work, and rechecking payroll figures at work; seeks reassurance from his wife and the doctor; repeated asking God for forgiveness (possible scrupulosity)",
        "Good insight (\"ya sé que es raro\"), marked shame, hid it for a long time; low mood from the time lost; denies suicidal thoughts; a beer now and then; no hallucinations reported",
        "Plan: explain OCD as a known, treatable condition; exposure and response prevention and/or medicine by shared decision; limit reassurance; with his agreement, see him with his wife; skin care for chapped hands"
      ],
      "mse": "Adult male, well kempt, hands red and chapped. Cooperative, embarrassed at first, then open. Mood anxious and low lately; affect congruent. Speech spontaneous, normal rate. Thought process linear. Contamination obsessions with washing and checking compulsions, recognized as excessive; no delusions; no hallucinations. Denies suicidal and homicidal ideation. Oriented. Insight good, judgment fair."
    }
  }
]);
