/* Case simulation: Karla (id karla). Over-the-counter medicine misuse and motivational interviewing.
   STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Hablemos (Spanish). Appends to window.PSYCH_CASES. Shape: { id, title, level, setting, steps: [ { who, line: [es, en], choices: [ { tl, en, score, fb } ] } ], summary: { findings, mse } }.
   Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish text. The clinician uses usted at first; Karla asks for tú in step 2 and the clinician follows.
   Fictional patient. No amounts, no product names, no method detail by design. Crisis line is 988 (oprima 2 for Spanish). */
window.PSYCH_CASES = (window.PSYCH_CASES || []).concat([
  {
    id: "karla",
    title: "Over-the-counter medicine misuse and motivational interviewing",
    level: "B1",
    setting: "Inpatient unit, day 2. Karla, 22, a community college student and part-time barista, was admitted after a night when her heart raced and she thought she was dying. For months she has used medicine for coughs and colds, sold without a prescription, in a way that is not on the label. She lives with her aunt, Tía Norma, who brought her to the emergency department. Karla was born in the US, speaks English and Spanish, and mixes them. She avoids eye contact.",
    steps: [
      { who: "Karla",
        line: ["Mi tía me trajo. Yo no sé qué hago aquí. No es para tanto.", "My aunt brought me. I don't know what I'm doing here. It's not that big a deal."],
        choices: [
          { tl: "Gracias por venir, Karla. No estoy aquí para regañarla. Si le parece bien, me gustaría escuchar cómo han estado las cosas para usted. ¿Me permite hacerle unas preguntas?", en: "Thank you for coming, Karla. I'm not here to scold you. If it's all right with you, I'd like to hear how things have been for you. May I ask you a few questions?", score: 2, fb: "Good. You thank her, say you are not there to blame her (regañar = to scold), ask permission, and let her lead. A young adult who did not choose to come needs to feel she has a say." },
          { tl: "¿Qué medicinas ha estado tomando?", en: "What medicines have you been taking?", score: 1, fb: "The topic is right, but it is too fast and gives her no choice. Start with welcome and permission." },
          { tl: "Su tía dice que se droga con medicinas. ¿Es cierto?", en: "Your aunt says you get high on medicines. Is it true?", score: 0, fb: "This repeats an accusation and puts her on the defensive. Do not open with the family's labels. Describe the behavior, not the person." }
        ] },
      { who: "Karla",
        line: ["Bueno... Oiga, ¿puede hablarme de tú? Con usted siento que estoy en la dirección de la escuela.", "Okay... Hey, can you talk to me as tú? With usted I feel like I'm in the principal's office."],
        choices: [
          { tl: "Prefiero seguir con usted. Así es más profesional.", en: "I prefer to keep using usted. It is more professional.", score: 0, fb: "This puts the form before the person and widens the distance she just named. Many young US-born patients ask for tú, and refusing can feel like judgment." },
          { tl: "Está bien, Karla. Dime, ¿cómo empezó todo esto?", en: "That's fine, Karla. Tell me, how did all this start?", score: 1, fb: "You follow her request, which is good. But you switch without saying so or checking, and she may wonder whether it was allowed. Say it out loud." },
          { tl: "Claro, Karla, con gusto te hablo de tú. Si en algún momento prefieres que vuelva a usted, me lo dices. Entonces dime, ¿cómo empezó todo esto?", en: "Of course, Karla, I'm glad to use tú with you. If you ever prefer that I go back to usted, just tell me. So tell me, how did all this start?", score: 2, fb: "Good. You accept her request warmly, leave the door open to change back, and keep your respect in your tone. Usted is the default with adults, but let the patient set the form. Older relatives such as Tía Norma still expect usted, so keep it with them." }
        ] },
      { who: "Karla",
        line: ["Todo empezó cuando no podía dormir por los exámenes. Es medicina para la tos y el resfriado, de la que se compra sin receta. No es droga, o sea, la venden en la farmacia, ¿no?", "It all started when I couldn't sleep because of exams. It's cough and cold medicine, the kind you buy without a prescription. It's not a drug, I mean, they sell it at the pharmacy, right?"],
        choices: [
          { tl: "Sí se vende en la farmacia, pero puede hacer mucho daño.", en: "Yes, it is sold at the pharmacy, but it can do a lot of harm.", score: 1, fb: "It is true, but you argue and teach too early. Arguing with her view makes her defend it. Roll with it and ask first." },
          { tl: "Tiene sentido: empezó para poder dormir en una época de mucho estrés. Por un lado, a ti te ayudó. Por otro, algo te preocupa lo suficiente para estar aquí. ¿Qué es lo que te gusta de tomarla, y qué cosas te preocupan?", en: "That makes sense: it started so you could sleep during a very stressful time. On one hand, it helped you. On the other, something worries you enough to be here. What do you like about taking it, and what worries you?", score: 2, fb: "Good. You normalize how it began, reflect both sides of her ambivalence, and ask an open question about the good and the worry. Let her say the worries herself. That is where change talk comes from. Mixed Spanish and English is fine; follow her lead." },
          { tl: "Eso es lo que dicen todos los adictos.", en: "That's what all addicts say.", score: 0, fb: "A label and a put-down. It shames her and ends the conversation. Never say this." }
        ] },
      { who: "Karla",
        line: ["Pues... ya la tomaba casi todos los días. Me perdí varias clases. Escondía las cajas en mi cuarto para que mi tía no las viera. Me da vergüenza.", "Well... I was using it almost every day. I missed several classes. I hid the boxes in my room so my aunt wouldn't see them. I'm ashamed."],
        choices: [
          { tl: "Esconder las cajas es mentirle a tu tía. Eso no está bien.", en: "Hiding the boxes is lying to your aunt. That's not right.", score: 0, fb: "Shaming. It adds to her guilt and makes it less likely she will be honest with you next time." },
          { tl: "¿Cuántas clases te has perdido en total?", en: "How many classes have you missed in total?", score: 1, fb: "A fair fact, but you skip the shame she just showed. Reflect the feeling before you collect details." },
          { tl: "Gracias por contármelo. Eso no es fácil de decir. Me suena que perder clases y esconder las cajas no es lo que quieres para ti. ¿Qué es lo que más extrañas de cómo eran las cosas antes?", en: "Thank you for telling me. That is not easy to say. It sounds like missing classes and hiding the boxes is not what you want for yourself. What do you miss most about how things were before?", score: 2, fb: "Good. You thank her, reflect the shame, and link her behavior to her own values (the gap between what she does and what she wants). The open question invites her to say why she would change." }
        ] },
      { who: "Karla",
        line: ["Y luego una noche el corazón me latía rapidísimo. Sentí que me moría. Mi tía llamó al 911. Me asusté bien feo.", "And then one night my heart was beating super fast. I felt like I was dying. My aunt called 911. I got really scared (\"bien feo\" = really badly)."],
        choices: [
          { tl: "¿Qué te dijeron los médicos de urgencias?", en: "What did the doctors in the emergency department tell you?", score: 1, fb: "Relevant, but it skips her fear and the safety question. Do not leave the risk question for later." },
          { tl: "Qué susto, Karla. Qué bueno que tu tía estaba contigo. Quiero preguntarte algo con claridad: esa noche, o en otro momento, ¿has pensado en hacerte daño o en no despertar? Y cuando piensas en esa noche, ¿qué te dice?", en: "What a scare, Karla. I'm glad your aunt was with you. I want to ask you something clearly: that night, or at any other time, have you thought of hurting yourself or of not waking up? And when you think about that night, what does it tell you?", score: 2, fb: "Good. You validate the fear, then ask directly about self-harm in plain words, which is safe and does not plant the idea. Next you ask what the night means to her, which can bring out change talk. Her answer separates an unintended frightening event from an attempt." },
          { tl: "Pudiste haber muerto. A ver si ahora sí aprendes.", en: "You could have died. Let's see if you finally learn now.", score: 0, fb: "Fear and scolding do not build rapport, and she already knows she was scared. It makes her less likely to tell you the truth." }
        ] },
      { who: "Karla",
        line: ["Sí quiero parar, o sea, creo. Pero no sé cómo voy a dormir sin eso. Y los exámenes finales ya están cerca.", "I do want to stop, I mean, I think. But I don't know how I'm going to sleep without it. And finals are coming up."],
        choices: [
          { tl: "Tienes que confiar más en ti. Tú puedes.", en: "You have to trust yourself more. You can do it.", score: 1, fb: "Kind, but encouragement without a plan does not move confidence. She told you what worries her, so work with that." },
          { tl: "Escucho dos cosas: quieres parar, y te preocupan el sueño y los exámenes. Si te parece bien, te puedo contar algunas formas de dormir mejor y manejar el estrés sin esa medicina. Antes, del 0 al 10, ¿qué tan importante es para ti dejar de usarla ahora?", en: "I hear two things: you want to stop, and you worry about sleep and exams. If it's okay with you, I can tell you about some ways to sleep better and handle stress without that medicine. First, from 0 to 10, how important is it to you to stop using it now?", score: 2, fb: "Good. You reflect both sides, ask permission before giving information, and use the importance ruler. Offering information only with her permission keeps her in charge." },
          { tl: "Si no la dejas, vas a reprobar y vas a terminar en el hospital otra vez.", en: "If you don't stop, you'll fail and end up in the hospital again.", score: 0, fb: "A threat. It pushes her to defend the habit, and it predicts a future you cannot know." }
        ] },
      { who: "Karla",
        line: ["Un siete. Por mi tía y por mi carrera. Pero qué tan segura estoy de poder hacerlo... como un cuatro.", "A seven. For my aunt and for my career. But how sure I am that I can do it... like a four."],
        choices: [
          { tl: "Un siete es bastante alto, y lo haces por tu tía y por tu carrera. Un cuatro también cuenta. ¿Por qué un cuatro y no un uno? ¿Qué te ayudaría a subir ese número? Hay opciones: consejería en tu universidad, ayuda con el sueño, o que tu tía guarde bajo llave las medicinas de la casa. ¿Cuál te gustaría probar primero? Tú decides.", en: "A seven is quite high, and you do it for your aunt and your career. A four counts too. Why a four and not a one? What would help raise that number? There are options: counseling at your college, help with sleep, or having your aunt lock up the household medicines. Which would you like to try first? You decide.", score: 2, fb: "Good. You affirm her importance, ask the confidence question that draws out her strengths (why not lower), offer a short menu, and let her choose a small plan. With her agreement, bring in Tía Norma. Book follow-up soon, give the 988 line (oprima 2 for Spanish), and teach Tía Norma in Spanish, with a qualified interpreter if needed." },
          { tl: "Con un cuatro, no va a funcionar.", en: "With a four, it won't work.", score: 0, fb: "Discouraging. Low confidence is a starting point, and it grows with support and a plan she chooses." },
          { tl: "Tienes que creer más en ti misma.", en: "You need to believe in yourself more.", score: 1, fb: "Encouragement alone does not raise confidence. Ask what would help, and let her pick the steps." }
        ] }
    ],
    summary: {
      findings: [
        "Misuse of over-the-counter cough and cold medicine, daily: began for sleep during exam stress, then became hard to stop; missed classes and hid the boxes at home",
        "One frightening night with a racing heart that brought her to the emergency department; asked directly about self-harm and thoughts of not waking up",
        "Ambivalence: \"no es droga, se compra en la farmacia\" next to real worry and shame. Reflect both sides and avoid labels",
        "Importance 7/10, confidence 4/10: ask why not lower, offer a short menu, and let her choose a small plan (college counseling, sleep help, aunt keeps household medicines locked)",
        "Respect her request for tú; keep usted with Tía Norma. Give the 988 line (oprima 2 for Spanish) and book follow-up soon"
      ],
      mse: "22F, tired-appearing, avoids eye contact at first, then engages. Cooperative. Speech normal in rate, a mix of English and Spanish. Mood \"con vergüenza\"; affect anxious, congruent. Thought process linear. Thought content: ambivalence about stopping, shame, worry about finals; denies thoughts of self-harm (to document after the direct question). No psychotic features elicited. Cognition grossly intact. Insight fair, improving. Judgment fair."
    }
  }
]);
