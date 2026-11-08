/* Substance use disorder screening and brief intervention in Spanish, for the clinic, the wards and the MSE sheet.
   Hablemos (Spanish / English). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Criteria follow the DSM-5-TR substance use disorder template (11 criteria, 2 or more within 12 months;
   mild 2–3, moderate 4–5, severe 6 or more), paraphrased in Spanish as questions. Gambling disorder has its own
   9 criteria. Codes are ICD-10-CM as listed in DSM-5-TR; confirm against the manual and local coding practice.
   Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish line in the usted form, `c` = the same
   line in the tú form, `en` = English, `n` = clinician note (English), `r` = regional or street-name variants.
   Templates: {s} = bare substance noun (after "consumir / usar"), {sa} = noun with its article (after "dejar",
   "a causa de", "hablar de"), {w} = withdrawal symptoms, {u} = unit. fill(text, sub) replaces them and fixes
   "a el" → "al" and "de el" → "del". fillEn(text, sub) fills the English with the English noun and unit.
   These are practice phrasings for training, not validated translations. Nothing here stores patient information. */
(function () {
  const SUB = [
    { id: 'alcohol', label: 'Alcohol', s: 'alcohol', sa: 'el alcohol', en: 'alcohol', unit: 'tragos', unitEn: 'drinks',
      dsm: 'Alcohol use disorder', cls: 'alcohol', codes: { mild: 'F10.10', modsev: 'F10.20', remMild: 'F10.11', remModsev: 'F10.21' },
      w: 'temblor en las manos, sudoración, ansiedad, dificultad para dormir, náusea o vómito, o ver u oír cosas que no están',
      wen: 'shaking hands, sweating, anxiety, insomnia, nausea or vomiting, or seeing or hearing things that are not there',
      ask: [
        { tl: '¿Toma usted alcohol? ¿Qué toma: cerveza, caguamas, tequila, vino, "shots"?', c: '¿Tomas alcohol? ¿Qué tomas: cerveza, caguamas, tequila, vino, "shots"?', en: 'Do you drink alcohol? What do you drink: beer, caguamas, tequila, wine, shots?', n: 'Caguama = 32 oz (about 940 ml) bottle of beer, about 2.5–3 standard drinks. Ask "¿qué toma?" rather than "¿toma mucho?"; patients answer the first honestly.', r: 'caguama (Mexico) / "un litro", "una grande"; "la cruda" = hangover' },
        { tl: '¿Cuántos tragos se toma en una ocasión? ¿Cuántos días a la semana toma?', c: '¿Cuántos tragos te tomas en una ocasión? ¿Cuántos días a la semana tomas?', en: 'How many drinks do you have on one occasion? How many days a week do you drink?', n: 'US standard drink = 14 g alcohol: 12 oz beer, 5 oz wine, 1.5 oz liquor. A caguama (32 oz) is about 2.5–3 drinks; a 750 ml bottle of liquor is about 17; a tall can (24 oz) of malt liquor is about 3.' },
        { tl: '¿Cuándo fue la última vez que tomó?', c: '¿Cuándo fue la última vez que tomaste?', en: 'When was your last drink?', n: 'Heavy daily drinkers whose last drink was 6–48 hours ago need withdrawal monitoring.' },
        { tl: '¿Alguna vez ha tenido convulsiones, o ha visto cosas que no estaban, después de dejar de tomar?', c: '¿Alguna vez has tenido convulsiones, o has visto cosas que no estaban, después de dejar de tomar?', en: 'Have you ever had a seizure, or seen things that were not there, after stopping drinking?', n: 'Past withdrawal seizures or delirium tremens predict a more severe course.' }
      ],
      psychoed: [
        { tl: 'Tomar demasiado alcohol daña el hígado, el páncreas y el corazón, y sube la presión.', c: 'Tomar demasiado alcohol daña el hígado, el páncreas y el corazón, y sube la presión.', en: 'Too much alcohol damages the liver, pancreas and heart, and raises blood pressure.' },
        { tl: 'También empeora la tristeza y la ansiedad, y arruina el sueño, aunque al principio parezca que ayuda.', c: 'También empeora la tristeza y la ansiedad, y arruina el sueño, aunque al principio parezca que ayuda.', en: 'It also worsens sadness and anxiety and ruins sleep, even though at first it seems to help.' },
        { tl: 'Si toma mucho todos los días, no lo deje de golpe sin la guía de un médico. La abstinencia puede ser peligrosa.', c: 'Si tomas mucho todos los días, no lo dejes de golpe sin la guía de un médico. La abstinencia puede ser peligrosa.', en: 'If you drink heavily every day, do not stop suddenly without a doctor\'s guidance. Withdrawal can be dangerous.', n: 'Seizures and delirium tremens.' },
        { tl: 'Mucha gente logra dejarlo con medicamentos, consejería y el apoyo de la familia.', c: 'Mucha gente logra dejarlo con medicamentos, consejería y el apoyo de la familia.', en: 'Many people stop with the help of medicine, counseling and family support.', n: 'Naltrexone, acamprosate; AA and Spanish-speaking groups exist in most US cities.' }
      ] },
    { id: 'tobacco', label: 'Tobacco and vaping', s: 'tabaco', sa: 'el tabaco', en: 'tobacco', unit: 'cigarros', unitEn: 'cigarettes',
      dsm: 'Tobacco use disorder', cls: 'tobacco', codes: { mild: 'Z72.0', modsev: 'F17.200', remMild: 'Z72.0 (no remission code for mild)', remModsev: 'F17.201' },
      w: 'irritabilidad, ansiedad, dificultad para concentrarse, más apetito, o dificultad para dormir',
      wen: 'irritability, anxiety, poor concentration, increased appetite, or insomnia',
      ask: [
        { tl: '¿Fuma usted? ¿Usa vape o cigarros electrónicos, o tabaco para masticar?', c: '¿Fumas? ¿Usas vape o cigarros electrónicos, o tabaco para masticar?', en: 'Do you smoke? Do you use a vape or e-cigarettes, or chewing tobacco?', n: 'Ask about pods and disposables; many young patients vape but say they do not smoke.', r: 'cigarro / cigarrillo; "los pods", "el vape"' },
        { tl: '¿Cuántos cigarros o cuántas cajetillas al día? ¿Desde hace cuántos años?', c: '¿Cuántos cigarros o cuántas cajetillas al día? ¿Desde hace cuántos años?', en: 'How many cigarettes or how many packs a day? For how many years?', n: 'Pack (cajetilla) = 20. Pack-years = packs per day × years. For vapes, ask pods per week.' },
        { tl: '¿Cuánto tiempo después de despertarse fuma el primer cigarro?', c: '¿Cuánto tiempo después de despertarte fumas el primer cigarro?', en: 'How soon after waking do you smoke your first cigarette?', n: 'Within 30 minutes suggests heavier dependence.' },
        { tl: '¿Cuándo fue su último cigarro?', c: '¿Cuándo fue tu último cigarro?', en: 'When was your last cigarette?' }
      ],
      psychoed: [
        { tl: 'Fumar es una de las causas principales de enfermedades de los pulmones y del corazón, de derrames cerebrales y de muchos tipos de cáncer.', c: 'Fumar es una de las causas principales de enfermedades de los pulmones y del corazón, de derrames cerebrales y de muchos tipos de cáncer.', en: 'Smoking is a leading cause of lung and heart disease, stroke, and many cancers.' },
        { tl: 'Al dejar de fumar: en unas semanas mejora la respiración; en un año baja mucho el riesgo para el corazón.', c: 'Al dejar de fumar: en unas semanas mejora la respiración; en un año baja mucho el riesgo para el corazón.', en: 'After stopping: breathing improves within weeks; within a year the heart risk falls a lot.' },
        { tl: 'La primera semana es la más difícil. La irritabilidad y las ganas de fumar van pasando.', c: 'La primera semana es la más difícil. La irritabilidad y las ganas de fumar van pasando.', en: 'The first week is the hardest. The irritability and the craving pass.' },
        { tl: 'Hay medicamentos que ayudan, como los parches o chicles de nicotina, el bupropión y la vareniclina. Podemos hablar de ellos.', c: 'Hay medicamentos que ayudan, como los parches o chicles de nicotina, el bupropión y la vareniclina. Podemos hablar de ellos.', en: 'There are medicines that help, like nicotine patches or gum, bupropion and varenicline. We can talk about them.', n: 'Combination NRT (patch + gum or lozenge) or varenicline doubles quit rates; state quitlines offer free NRT in Spanish (1-800-QUIT-NOW / 1-855-DÉJELO-YA).' }
      ] },
    { id: 'cannabis', label: 'Cannabis', s: 'marihuana', sa: 'la marihuana', en: 'cannabis', unit: 'veces', unitEn: 'times',
      dsm: 'Cannabis use disorder', cls: 'cannabis', codes: { mild: 'F12.10', modsev: 'F12.20', remMild: 'F12.11', remModsev: 'F12.21' },
      w: 'irritabilidad, dificultad para dormir, pérdida del apetito, o ansiedad',
      wen: 'irritability, insomnia, loss of appetite, or anxiety',
      ask: [
        { tl: '¿Usa usted marihuana? ¿Cómo la usa: la fuma, usa concentrados como wax o dabs, vape, o comestibles?', c: '¿Usas marihuana? ¿Cómo la usas: la fumas, usas concentrados como wax o dabs, vape, o comestibles?', en: 'Do you use marijuana? How: smoking it, concentrates like wax or dabs, vapes, or edibles?', n: 'Concentrates and THC vapes are far stronger than flower; ask what and how, not just "do you smoke weed".', r: 'mota, hierba, mariguana, "weed"; "churro" / "porro" = joint' },
        { tl: '¿La usa todos los días? ¿Cuántas veces al día?', c: '¿La usas todos los días? ¿Cuántas veces al día?', en: 'Do you use it every day? How many times a day?' },
        { tl: '¿Cuándo fue la última vez que la usó?', c: '¿Cuándo fue la última vez que la usaste?', en: 'When was the last time you used it?' }
      ],
      psychoed: [
        { tl: 'Usar marihuana con frecuencia aumenta el riesgo de psicosis, sobre todo en los jóvenes, y afecta la memoria y la motivación.', c: 'Usar marihuana con frecuencia aumenta el riesgo de psicosis, sobre todo en los jóvenes, y afecta la memoria y la motivación.', en: 'Frequent marijuana use raises the risk of psychosis, especially in young people, and affects memory and motivation.' },
        { tl: 'Al dejarla puede haber irritabilidad e insomnio por una o dos semanas. Eso pasa.', c: 'Al dejarla puede haber irritabilidad e insomnio por una o dos semanas. Eso pasa.', en: 'When you stop there can be irritability and insomnia for one or two weeks. That passes.' },
        { tl: 'Si tiene vómitos fuertes que van y vienen y que mejoran con baños calientes, pueden ser por la marihuana. Dejarla es lo único que los cura.', c: 'Si tienes vómitos fuertes que van y vienen y que mejoran con baños calientes, pueden ser por la marihuana. Dejarla es lo único que los cura.', en: 'If you have severe vomiting that comes and goes and gets better with hot showers, it may be from the marijuana. Stopping is the only cure.', n: 'Cannabinoid hyperemesis syndrome (CHS).' }
      ] },
    { id: 'meth', label: 'Methamphetamine', s: 'metanfetamina', sa: 'la metanfetamina', en: 'methamphetamine', unit: 'veces', unitEn: 'times',
      dsm: 'Stimulant use disorder, amphetamine-type substance (methamphetamine)', cls: 'stimulant', codes: { mild: 'F15.10', modsev: 'F15.20', remMild: 'F15.11', remModsev: 'F15.21' },
      w: 'un cansancio muy fuerte, dormir demasiado o muy poco, tristeza, mucho apetito, o pesadillas',
      wen: 'severe fatigue, sleeping too much or too little, low mood, strong appetite, or bad dreams',
      ask: [
        { tl: 'Le voy a preguntar sobre drogas. Es confidencial y es para su tratamiento; no estoy aquí para juzgarlo. ¿Ha usado metanfetamina, cristal, o alguna otra droga?', c: 'Te voy a preguntar sobre drogas. Es confidencial y es para tu tratamiento; no estoy aquí para juzgarte. ¿Has usado metanfetamina, cristal, o alguna otra droga?', en: 'I am going to ask about drugs. It is confidential and it is for your treatment; I am not here to judge you. Have you used methamphetamine, crystal, or any other drug?', n: 'Say the preface before asking. Do not promise that it is never shared with police or immigration; say what is true: it is confidential medical information used for treatment.', r: 'cristal, meth, tina, ice, "crico", "foco" (pipe)' },
        { tl: '¿Cómo la usa: la fuma, la inhala por la nariz, o se la inyecta?', c: '¿Cómo la usas: la fumas, la inhalas por la nariz, o te la inyectas?', en: 'How do you use it: smoked, snorted, or injected?' },
        { tl: '¿Con qué frecuencia? ¿Cuándo fue la última vez?', c: '¿Con qué frecuencia? ¿Cuándo fue la última vez?', en: 'How often? When was the last time?' },
        { tl: 'Cuando la usa, ¿se ha sentido vigilado o con mucha desconfianza, ha oído voces, o se ha enojado mucho?', c: 'Cuando la usas, ¿te has sentido vigilado o con mucha desconfianza, has oído voces, o te has enojado mucho?', en: 'While using, have you felt watched or very suspicious, heard voices, or become very angry?' },
        { tl: '¿Ha tenido mucho calor en el cuerpo, dolor en el pecho, o el corazón muy acelerado al usarla?', c: '¿Has tenido mucho calor en el cuerpo, dolor en el pecho, o el corazón muy acelerado al usarla?', en: 'Have you had overheating, chest pain, or a racing heart while using?', n: 'Hyperthermia and chest pain need medical evaluation.' }
      ],
      psychoed: [
        { tl: 'La metanfetamina causa paranoia, voces, insomnio y enojo, y daña el corazón y los dientes.', c: 'La metanfetamina causa paranoia, voces, insomnio y enojo, y daña el corazón y los dientes.', en: 'Methamphetamine causes paranoia, voices, insomnia and anger, and damages the heart and teeth.' },
        { tl: 'Después de usarla viene la caída: mucha tristeza y cansancio. Estamos aquí para ayudarle, no para juzgarlo.', c: 'Después de usarla viene la caída: mucha tristeza y cansancio. Estamos aquí para ayudarte, no para juzgarte.', en: 'After use comes the crash: severe low mood and exhaustion. We are here to help you, not to judge you.' },
        { tl: 'Hay programas de tratamiento que sí funcionan. Si quiere, lo podemos referir.', c: 'Hay programas de tratamiento que sí funcionan. Si quieres, te podemos referir.', en: 'There are treatment programs that do work. If you want, we can refer you.', n: 'Contingency management has the best evidence for stimulant use disorder; there is no FDA-approved medication yet.' }
      ] },
    { id: 'cocaine', label: 'Cocaine and crack', s: 'cocaína', sa: 'la cocaína', en: 'cocaine', unit: 'veces', unitEn: 'times',
      dsm: 'Cocaine use disorder', cls: 'stimulant', codes: { mild: 'F14.10', modsev: 'F14.20', remMild: 'F14.11', remModsev: 'F14.21' },
      w: 'cansancio, tristeza, dormir demasiado o pesadillas, mucho apetito, o inquietud',
      wen: 'fatigue, low mood, sleeping too much or bad dreams, strong appetite, or restlessness',
      ask: [
        { tl: '¿Usa usted cocaína o crack? ¿Cómo la usa: la inhala, la fuma, o se la inyecta?', c: '¿Usas cocaína o crack? ¿Cómo la usas: la inhalas, la fumas, o te la inyectas?', en: 'Do you use cocaine or crack? How: snorted, smoked, or injected?', r: 'perico, coca, polvo; piedra = crack' },
        { tl: '¿Con qué frecuencia? ¿Cuándo fue la última vez?', c: '¿Con qué frecuencia? ¿Cuándo fue la última vez?', en: 'How often? When was the last time?' },
        { tl: '¿Ha tenido dolor en el pecho o convulsiones al usarla?', c: '¿Has tenido dolor en el pecho o convulsiones al usarla?', en: 'Have you had chest pain or seizures while using?' },
        { tl: '¿La mezcla con alcohol? ¿Sabe si lo que usa puede traer fentanilo?', c: '¿La mezclas con alcohol? ¿Sabes si lo que usas puede traer fentanilo?', en: 'Do you mix it with alcohol? Do you know whether what you use could contain fentanyl?', n: 'Cocaine plus alcohol forms cocaethylene (more cardiotoxic). Fentanyl contamination of cocaine is common; offer naloxone and fentanyl test strips.' }
      ],
      psychoed: [
        { tl: 'La cocaína puede causar un infarto o un derrame cerebral, incluso en personas jóvenes y desde la primera vez.', c: 'La cocaína puede causar un infarto o un derrame cerebral, incluso en personas jóvenes y desde la primera vez.', en: 'Cocaine can cause a heart attack or a stroke, even in young people and even the first time.' },
        { tl: 'Después del efecto viene la caída: tristeza, cansancio y muchas ganas de volver a usar.', c: 'Después del efecto viene la caída: tristeza, cansancio y muchas ganas de volver a usar.', en: 'After the high comes the crash: sadness, exhaustion and a strong urge to use again.' },
        { tl: 'Hoy en día muchas pastillas y polvos de la calle traen fentanilo sin que uno lo sepa. Tenga naloxona (Narcan) a la mano y no use solo.', c: 'Hoy en día muchas pastillas y polvos de la calle traen fentanilo sin que uno lo sepa. Ten naloxona (Narcan) a la mano y no uses solo.', en: 'Today many street pills and powders contain fentanyl without people knowing. Keep naloxone (Narcan) on hand and do not use alone.' }
      ] },
    { id: 'opioids', label: 'Opioids and fentanyl', s: 'opioides', sa: 'los opioides', en: 'opioids', unit: 'veces', unitEn: 'times',
      dsm: 'Opioid use disorder', cls: 'opioid', codes: { mild: 'F11.10', modsev: 'F11.20', remMild: 'F11.11', remModsev: 'F11.21' },
      w: 'dolor en el cuerpo y en los huesos, sudoración, escalofríos, náusea, vómito o diarrea, ansiedad, o insomnio',
      wen: 'body and bone aches, sweating, chills, nausea, vomiting or diarrhea, anxiety, or insomnia',
      ask: [
        { tl: '¿Usa usted pastillas para el dolor que no le recetaron, heroína, o fentanilo?', c: '¿Usas pastillas para el dolor que no te recetaron, heroína, o fentanilo?', en: 'Do you use pain pills that were not prescribed to you, heroin, or fentanyl?', n: 'Most "oxycodone" M30 pills on the street are counterfeit and contain fentanyl.', r: 'fentanilo, "fenta"; heroína, "chiva"; pastillas: percocet, oxi, "las azules" / M30, "percas"' },
        { tl: '¿Cómo los usa: los traga, los inhala, los fuma, o se los inyecta?', c: '¿Cómo los usas: los tragas, los inhalas, los fumas, o te los inyectas?', en: 'How do you use them: swallowed, snorted, smoked, or injected?' },
        { tl: '¿Con qué frecuencia? ¿Cuándo fue la última vez?', c: '¿Con qué frecuencia? ¿Cuándo fue la última vez?', en: 'How often? When was the last time?', n: 'Last use 8–24 hours ago (short-acting) → watch for withdrawal; COWS is in Psychiatry → Withdrawal.' },
        { tl: '¿Alguna vez ha tenido una sobredosis? ¿Tiene naloxona (Narcan) en casa?', c: '¿Alguna vez has tenido una sobredosis? ¿Tienes naloxona (Narcan) en casa?', en: 'Have you ever overdosed? Do you have naloxone (Narcan) at home?', n: 'A recent overdose is the strongest predictor of another one. Give or prescribe naloxone before the patient leaves.' },
        { tl: 'Si se inyecta: ¿ha compartido agujas o jeringas? Le ofrecemos la prueba de VIH y de hepatitis C.', c: 'Si te inyectas: ¿has compartido agujas o jeringas? Te ofrecemos la prueba de VIH y de hepatitis C.', en: 'If you inject: have you shared needles or syringes? We offer testing for HIV and hepatitis C.', n: 'Also look at injection sites for infection.' },
        { tl: '¿Está embarazada, o podría estarlo?', c: '¿Estás embarazada, o podrías estarlo?', en: 'Are you pregnant, or could you be?', n: 'Pregnant patients with opioid use disorder need buprenorphine or methadone promptly; do not detox.' }
      ],
      psychoed: [
        { tl: 'Hoy casi todas las pastillas y polvos de la calle traen fentanilo. Por eso cualquier uso puede ser una sobredosis, aunque sea la primera vez.', c: 'Hoy casi todas las pastillas y polvos de la calle traen fentanilo. Por eso cualquier uso puede ser una sobredosis, aunque sea la primera vez.', en: 'Today almost all street pills and powders contain fentanyl. That is why any use can be an overdose, even the first time.' },
        { tl: 'Nunca use solo. Que alguien esté con usted o pueda revisar cómo está.', c: 'Nunca uses solo. Que alguien esté contigo o pueda revisar cómo estás.', en: 'Never use alone. Have someone with you or someone who can check on you.' },
        { tl: 'Tenga naloxona (Narcan) a la mano. Se rocía en una fosa nasal, se llama al 911, y si no responde en dos o tres minutos se le da una segunda dosis. Si no respira, dé respiraciones de rescate.', c: 'Ten naloxona (Narcan) a la mano. Se rocía en una fosa nasal, se llama al 911, y si no responde en dos o tres minutos se le da una segunda dosis. Si no respira, da respiraciones de rescate.', en: 'Keep naloxone (Narcan) on hand. Spray it in one nostril, call 911, and if there is no response in two or three minutes give a second dose. If they are not breathing, give rescue breaths.', n: 'Naloxone is sold without prescription in US pharmacies and given free by many health departments.' },
        { tl: 'El tratamiento con buprenorfina (Suboxone) o metadona reduce las muertes por sobredosis a menos de la mitad. Podemos empezarlo pronto.', c: 'El tratamiento con buprenorfina (Suboxone) o metadona reduce las muertes por sobredosis a menos de la mitad. Podemos empezarlo pronto.', en: 'Treatment with buprenorphine (Suboxone) or methadone cuts overdose deaths by more than half. We can start it soon.', n: 'Offer medication the same day when possible; waiting lists lose patients.' },
        { tl: 'La adicción es una enfermedad, no una falla moral. Y se puede tratar.', c: 'La adicción es una enfermedad, no una falla moral. Y se puede tratar.', en: 'Addiction is an illness, not a moral failing. And it can be treated.' }
      ] },
    { id: 'other', label: 'Other (benzodiazepines, inhalants, hallucinogens, others)', s: 'la sustancia', sa: 'la sustancia', en: 'the substance', unit: 'veces', unitEn: 'times',
      dsm: 'Other (or unknown) substance use disorder (name the substance)', cls: 'other', codes: { mild: 'F19.10', modsev: 'F19.20', remMild: 'F19.11', remModsev: 'F19.21' },
      w: 'malestar en el cuerpo o en la mente',
      wen: 'physical or mental discomfort',
      ask: [
        { tl: '¿Usa usted alguna otra cosa para sentirse diferente: pastillas para los nervios o para dormir que no le recetaron, inhalantes, hongos o LSD, u otra cosa? ¿Qué es?', c: '¿Usas alguna otra cosa para sentirte diferente: pastillas para los nervios o para dormir que no te recetaron, inhalantes, hongos o LSD, u otra cosa? ¿Qué es?', en: 'Do you use anything else to feel different: nerve or sleeping pills that were not prescribed to you, inhalants, mushrooms or LSD, or something else? What is it?', n: 'Benzodiazepines: Xanax ("xanis", "bars"), clonazepam ("rivotril"). Counterfeit Xanax bars often contain fentanyl. Use the specific code (F13.x sedatives, F18.x inhalants, F16.x hallucinogens) once the substance is named.' },
        { tl: '¿Con qué frecuencia, y cuándo fue la última vez?', c: '¿Con qué frecuencia, y cuándo fue la última vez?', en: 'How often, and when was the last time?' }
      ],
      psychoed: [
        { tl: 'Cualquier medicamento o droga que se usa fuera de lo recetado puede dañar el cuerpo y la mente.', c: 'Cualquier medicamento o droga que se usa fuera de lo recetado puede dañar el cuerpo y la mente.', en: 'Any medicine or drug used outside its prescription can harm the body and the mind.' },
        { tl: 'Si toma pastillas para los nervios todos los días, no las deje de golpe: la abstinencia puede causar convulsiones. Hable primero con el médico.', c: 'Si tomas pastillas para los nervios todos los días, no las dejes de golpe: la abstinencia puede causar convulsiones. Habla primero con el médico.', en: 'If you take nerve pills every day, do not stop them suddenly: withdrawal can cause seizures. Talk to the doctor first.', n: 'Benzodiazepine withdrawal; taper under supervision.' }
      ] },
    { id: 'gambling', label: 'Gambling (sports betting, casino, online, lottery)', s: 'las apuestas', sa: 'las apuestas', en: 'gambling', unit: 'apuestas', unitEn: 'bets', gamble: true,
      dsm: 'Gambling disorder', cls: 'gambling', codes: { mild: 'F63.0', modsev: 'F63.0', remMild: 'F63.0', remModsev: 'F63.0' },
      w: 'inquietud o irritabilidad',
      wen: 'restlessness or irritability',
      ask: [
        { tl: '¿Apuesta usted? Por ejemplo, en apps de apuestas deportivas, casino, máquinas tragamonedas, lotería o raspaditos, o póker en línea.', c: '¿Apuestas? Por ejemplo, en apps de apuestas deportivas, casino, máquinas tragamonedas, lotería o raspaditos, o póker en línea.', en: 'Do you gamble? For example, sports betting apps, casino, slot machines, lottery or scratchers, or online poker.', n: 'Sports betting apps are the fastest-growing form in the US and easy to hide; ask about phone apps and money-transfer apps.', r: 'raspaditos / "scratchers"; tragamonedas / "maquinitas"; apostar / jugar' },
        { tl: '¿Con qué frecuencia, y cuánto apuesta normalmente? ¿Cuánto perdió el mes pasado?', c: '¿Con qué frecuencia, y cuánto apuestas normalmente? ¿Cuánto perdiste el mes pasado?', en: 'How often, and how much do you usually bet? How much did you lose last month?' },
        { tl: '¿Tiene deudas por las apuestas? ¿A quién le debe: préstamos de día de pago, tarjetas, familia?', c: '¿Tienes deudas por las apuestas? ¿A quién le debes: préstamos de día de pago, tarjetas, familia?', en: 'Do you have debts because of gambling? Whom do you owe: payday loans, credit cards, family?', n: 'Debt and family conflict are common presentations; ask about suicidal thoughts when debts are large.' },
        { tl: '¿Cuántas horas al día pasa apostando en el teléfono?', c: '¿Cuántas horas al día pasas apostando en el teléfono?', en: 'How many hours a day do you spend betting on your phone?' }
      ],
      psychoed: [
        { tl: 'Las apuestas cambian el cerebro como una droga: las ganas de apostar y el querer recuperar lo perdido son parte de la enfermedad, no una debilidad de carácter.', c: 'Las apuestas cambian el cerebro como una droga: las ganas de apostar y el querer recuperar lo perdido son parte de la enfermedad, no una debilidad de carácter.', en: 'Gambling changes the brain like a drug: the urge to bet and the chasing of losses are part of the illness, not weakness of character.' },
        { tl: 'La casa, o la app, siempre gana a la larga. Lo perdido no se recupera apostando más.', c: 'La casa, o la app, siempre gana a la larga. Lo perdido no se recupera apostando más.', en: 'The house, or the app, always wins in the long run. Losses are not recovered by betting more.' },
        { tl: 'Ayuda que una persona de confianza maneje sus tarjetas, borrar las apps, pedir la autoexclusión en los casinos y las apps, y poner un programa que bloquee los sitios de apuestas.', c: 'Ayuda que una persona de confianza maneje tus tarjetas, borrar las apps, pedir la autoexclusión en los casinos y las apps, y poner un programa que bloquee los sitios de apuestas.', en: 'It helps to let a trusted person hold your cards, delete the apps, request self-exclusion from casinos and sportsbooks, and install software that blocks gambling sites.', n: 'Self-exclusion programs exist in most states; banks and card issuers can block gambling transactions; blocking software (e.g. Gamban).' },
        { tl: 'Cuando la deuda es grande y siente que ya no hay salida, díganoslo de inmediato. Sí hay salida.', c: 'Cuando la deuda es grande y sientes que ya no hay salida, dínoslo de inmediato. Sí hay salida.', en: 'When the debt is large and you feel there is no way out, tell us right away. There is a way out.', n: 'Gambling disorder carries a high suicide risk; screen every time.' }
      ] }
  ];

  /* Gambling disorder: 9 criteria (DSM-5-TR, paraphrased), 4 or more in 12 months; mild 4–5, moderate 6–7, severe 8–9. */
  const GAMB = [
    { n: 1, group: 'gamble', en: 'Needs to gamble with increasing amounts to get the excitement', tl: '¿Necesita apostar cada vez más dinero para sentir la misma emoción?', c: '¿Necesitas apostar cada vez más dinero para sentir la misma emoción?' },
    { n: 2, group: 'gamble', en: 'Restless or irritable when trying to cut down or stop', tl: 'Cuando trata de apostar menos o de dejarlo, ¿se pone inquieto o irritable?', c: 'Cuando tratas de apostar menos o de dejarlo, ¿te pones inquieto o irritable?' },
    { n: 3, group: 'gamble', en: 'Repeated unsuccessful efforts to control, cut back, or stop', tl: '¿Ha intentado controlar, reducir o dejar las apuestas sin lograrlo?', c: '¿Has intentado controlar, reducir o dejar las apuestas sin lograrlo?' },
    { n: 4, group: 'gamble', en: 'Preoccupied with gambling', tl: '¿Piensa en las apuestas todo el tiempo: en la última jugada, en la próxima apuesta, o en cómo conseguir dinero para apostar?', c: '¿Piensas en las apuestas todo el tiempo: en la última jugada, en la próxima apuesta, o en cómo conseguir dinero para apostar?' },
    { n: 5, group: 'gamble', en: 'Gambles when distressed', tl: '¿Apuesta cuando se siente triste, ansioso, estresado o culpable?', c: '¿Apuestas cuando te sientes triste, ansioso, estresado o culpable?' },
    { n: 6, group: 'gamble', en: 'Chasing: returns to get even after losing', tl: 'Después de perder, ¿vuelve a apostar para recuperar lo perdido?', c: 'Después de perder, ¿vuelves a apostar para recuperar lo perdido?' },
    { n: 7, group: 'gamble', en: 'Lies to conceal the extent of gambling', tl: '¿Le ha mentido a su familia o a otras personas sobre cuánto apuesta?', c: '¿Le has mentido a tu familia o a otras personas sobre cuánto apuestas?' },
    { n: 8, group: 'gamble', en: 'Jeopardized or lost a relationship, job, or opportunity because of gambling', tl: '¿Ha puesto en riesgo o ha perdido una relación, un trabajo o una oportunidad de estudio por las apuestas?', c: '¿Has puesto en riesgo o has perdido una relación, un trabajo o una oportunidad de estudio por las apuestas?' },
    { n: 9, group: 'gamble', en: 'Relies on others for money to relieve gambling debts', tl: '¿Ha tenido que depender de otros, por ejemplo la familia o préstamos, para pagar deudas de apuestas?', c: '¿Has tenido que depender de otros, por ejemplo la familia o préstamos, para pagar deudas de apuestas?' }
  ];

  /* The 11 criteria (DSM-5-TR, paraphrased). group: control | social | risky | pharm. */
  const CRIT = [
    { n: 1, group: 'control', en: 'Larger amounts or over a longer period than intended', tl: '¿Con frecuencia consume {s} en mayor cantidad o por más tiempo de lo que pensaba?', c: '¿Con frecuencia consumes {s} en mayor cantidad o por más tiempo de lo que pensabas?' },
    { n: 2, group: 'control', en: 'Persistent desire or unsuccessful efforts to cut down or control use', tl: '¿Ha querido reducir o dejar {sa}? ¿Lo ha intentado sin lograrlo?', c: '¿Has querido reducir o dejar {sa}? ¿Lo has intentado sin lograrlo?' },
    { n: 3, group: 'control', en: 'A great deal of time spent obtaining, using, or recovering', tl: '¿Se le va gran parte del día en conseguir {s}, en consumir, o en recuperarse de los efectos?', c: '¿Se te va gran parte del día en conseguir {s}, en consumir, o en recuperarte de los efectos?' },
    { n: 4, group: 'control', en: 'Craving: a strong desire or urge to use', tl: '¿Hay momentos en que las ganas de consumir {s} son tan fuertes que no puede pensar en otra cosa?', c: '¿Hay momentos en que las ganas de consumir {s} son tan fuertes que no puedes pensar en otra cosa?' },
    { n: 5, group: 'social', en: 'Failure to fulfill major role obligations at work, school, or home', tl: 'A causa de {sa}, ¿ha fallado en el trabajo, la escuela o la casa, por ejemplo faltar al trabajo o descuidar a la familia?', c: 'A causa de {sa}, ¿has fallado en el trabajo, la escuela o la casa, por ejemplo faltar al trabajo o descuidar a la familia?' },
    { n: 6, group: 'social', en: 'Continued use despite persistent social or interpersonal problems caused or worsened by it', tl: '¿Ha tenido problemas con su pareja, su familia o sus amigos a causa de {sa}, y aun así ha seguido consumiendo?', c: '¿Has tenido problemas con tu pareja, tu familia o tus amigos a causa de {sa}, y aun así has seguido consumiendo?' },
    { n: 7, group: 'social', en: 'Important social, occupational, or recreational activities given up or reduced', tl: '¿Ha dejado o reducido actividades que antes eran importantes para usted, como el trabajo, la iglesia, los pasatiempos o ver a sus amigos, a causa de {sa}?', c: '¿Has dejado o reducido actividades que antes eran importantes para ti, como el trabajo, la iglesia, los pasatiempos o ver a tus amigos, a causa de {sa}?' },
    { n: 8, group: 'risky', en: 'Recurrent use in physically hazardous situations', tl: '¿Consume {s} en situaciones peligrosas, por ejemplo al manejar, al operar máquinas, o al cuidar niños?', c: '¿Consumes {s} en situaciones peligrosas, por ejemplo al manejar, al operar máquinas, o al cuidar niños?' },
    { n: 9, group: 'risky', en: 'Continued use despite a physical or psychological problem it causes or worsens', tl: '¿Tiene algún problema de salud, del cuerpo o de la mente, causado o empeorado por {sa}, y aun así sigue consumiendo?', c: '¿Tienes algún problema de salud, del cuerpo o de la mente, causado o empeorado por {sa}, y aun así sigues consumiendo?' },
    { n: 10, group: 'pharm', en: 'Tolerance: need for more, or diminished effect with the same amount', tl: '¿Ahora necesita más cantidad para sentir el mismo efecto? ¿O la misma cantidad le hace menos efecto?', c: '¿Ahora necesitas más cantidad para sentir el mismo efecto? ¿O la misma cantidad te hace menos efecto?' },
    { n: 11, group: 'pharm', en: 'Withdrawal: the characteristic syndrome, or use to relieve or avoid it', tl: 'Cuando deja de consumir {s} o consume menos, ¿siente {w}? ¿Consume para evitar esos malestares?', c: 'Cuando dejas de consumir {s} o consumes menos, ¿sientes {w}? ¿Consumes para evitar esos malestares?' }
  ];
  const GROUPS = { control: 'Impaired control (1–4)', social: 'Social impairment (5–7)', risky: 'Risky use (8–9)', pharm: 'Pharmacological (10–11)', gamble: 'Gambling disorder (9 criteria; 4 or more)' };

  /* Optional validated add-on screens, paraphrased into Spanish (not the validated Spanish versions). Each item: tl, c, en, opts [label, points]. */
  const SCREENS = {
    alcohol: { id: 'auditc', title: 'AUDIT-C (quick alcohol screen)', note: 'Score 0–12. Positive: 4 or more (men), 3 or more (women). It flags hazardous drinking; the 11 criteria still decide the diagnosis. Count US standard drinks (14 g).',
      items: [
        { tl: '¿Con qué frecuencia toma alguna bebida con alcohol?', c: '¿Con qué frecuencia tomas alguna bebida con alcohol?', en: 'How often do you have a drink containing alcohol?', opts: [['Nunca', 0], ['Una vez al mes o menos', 1], ['2–4 veces al mes', 2], ['2–3 veces a la semana', 3], ['4 o más veces a la semana', 4]] },
        { tl: 'En un día típico en que toma, ¿cuántos tragos se toma?', c: 'En un día típico en que tomas, ¿cuántos tragos te tomas?', en: 'How many standard drinks do you have on a typical day when drinking?', opts: [['1–2', 0], ['3–4', 1], ['5–6', 2], ['7–9', 3], ['10 o más', 4]], n: 'One US standard drink = 12 oz beer, 5 oz wine, or 1.5 oz liquor (one shot). A caguama (32 oz) is about 2.5–3 drinks; a tall can of malt liquor about 3.' },
        { tl: '¿Con qué frecuencia se toma seis o más tragos en una ocasión?', c: '¿Con qué frecuencia te tomas seis o más tragos en una ocasión?', en: 'How often do you have six or more drinks on one occasion?', opts: [['Nunca', 0], ['Menos de una vez al mes', 1], ['Cada mes', 2], ['Cada semana', 3], ['Todos o casi todos los días', 4]] }
      ],
      bands: (n, female) => (n >= (female ? 3 : 4) ? 'positive (hazardous drinking)' : 'negative') },
    tobacco: { id: 'fager', title: 'Fagerström test (nicotine dependence)', note: 'Score 0–10: 0–2 low, 3–4 low to moderate, 5–7 moderate, 8–10 high dependence. Higher scores favor nicotine replacement or other pharmacotherapy.',
      items: [
        { tl: '¿Cuánto tiempo después de despertarse fuma el primer cigarro?', c: '¿Cuánto tiempo después de despertarte fumas el primer cigarro?', en: 'How soon after waking do you smoke your first cigarette?', opts: [['En los primeros 5 minutos', 3], ['De 6 a 30 minutos', 2], ['De 31 a 60 minutos', 1], ['Después de 60 minutos', 0]] },
        { tl: '¿Le cuesta no fumar en los lugares donde está prohibido, como el hospital, la iglesia o el avión?', c: '¿Te cuesta no fumar en los lugares donde está prohibido, como el hospital, la iglesia o el avión?', en: 'Is it hard not to smoke where it is forbidden, like a hospital, church or airplane?', opts: [['Sí', 1], ['No', 0]] },
        { tl: '¿Qué cigarro le costaría más dejar?', c: '¿Qué cigarro te costaría más dejar?', en: 'Which cigarette would you most hate to give up?', opts: [['El primero de la mañana', 1], ['Otro', 0]] },
        { tl: '¿Cuántos cigarros fuma al día?', c: '¿Cuántos cigarros fumas al día?', en: 'How many cigarettes a day?', opts: [['10 o menos', 0], ['11–20', 1], ['21–30', 2], ['31 o más', 3]] },
        { tl: '¿Fuma más en las primeras horas después de despertarse que durante el resto del día?', c: '¿Fumas más en las primeras horas después de despertarte que durante el resto del día?', en: 'Do you smoke more in the first hours after waking than during the rest of the day?', opts: [['Sí', 1], ['No', 0]] },
        { tl: '¿Fuma aunque esté enfermo y tenga que quedarse en cama casi todo el día?', c: '¿Fumas aunque estés enfermo y tengas que quedarte en cama casi todo el día?', en: 'Do you smoke even when you are ill and in bed most of the day?', opts: [['Sí', 1], ['No', 0]] }
      ],
      bands: (n) => (n >= 8 ? 'high dependence' : n >= 5 ? 'moderate dependence' : n >= 3 ? 'low to moderate dependence' : 'low dependence') }
  };

  /* Opening lines for any substance, and the time frame. */
  const OPEN = [
    { tl: 'Le voy a preguntar sobre el alcohol, el tabaco, las drogas y las apuestas. Se lo preguntamos a todos, porque afectan la salud y el tratamiento.', c: 'Te voy a preguntar sobre el alcohol, el tabaco, las drogas y las apuestas. Se lo preguntamos a todos, porque afectan la salud y el tratamiento.', en: 'I am going to ask about alcohol, tobacco, drugs and gambling. We ask everyone, because they affect health and treatment.', n: 'Normalize first; it lowers shame.' },
    { tl: 'Lo que me diga es confidencial y es para su tratamiento. No estoy aquí para juzgarlo.', c: 'Lo que me digas es confidencial y es para tu tratamiento. No estoy aquí para juzgarte.', en: 'What you tell me is confidential and is for your treatment. I am not here to judge you.', n: 'Do not promise that it is never shared with police or immigration; medical confidentiality has limits. Say what is true: it goes in the medical record and is used for your care.' },
    { tl: 'Hablemos de los últimos doce meses.', c: 'Hablemos de los últimos doce meses.', en: 'Let us talk about the past twelve months.', n: 'The criteria count applies to a 12-month period.' },
    { tl: 'De todo esto, ¿qué es lo que más le afecta?', c: 'De todo esto, ¿qué es lo que más te afecta?', en: 'Of all these, which one affects you the most?' }
  ];
  const REMISSION = [
    { tl: '¿Cuándo fue la última vez? ¿Cuántos meses lleva sin hacerlo, o con esto bajo control?', c: '¿Cuándo fue la última vez? ¿Cuántos meses llevas sin hacerlo, o con esto bajo control?', en: 'When was the last time? For how many months have you stopped, or kept it under control?', n: '≥3 months without criteria (craving allowed) = early remission; ≥12 months = sustained remission.' },
    { tl: '¿Está en un lugar donde no tiene acceso a {sa}, como un hospital, la cárcel o un centro de rehabilitación?', c: '¿Estás en un lugar donde no tienes acceso a {sa}, como un hospital, la cárcel o un centro de rehabilitación?', en: 'Are you somewhere you have no access to {s}, like a hospital, jail or a rehabilitation center?', n: 'Specifier: in a controlled environment.' }
  ];

  /* Brief intervention: a guided motivational-interviewing flow (OARS; importance and confidence rulers;
     elicit–provide–elicit; change plan). Each step has lines to choose from. */
  const MI = [
    { id: 'permission', title: 'Ask permission and open', goal: 'Ask before advising. Open questions, then listen without interrupting.', lines: [
      { tl: '¿Podemos hablar un poco de {sa}?', c: '¿Podemos hablar un poco de {sa}?', en: 'May we talk a little about {s}?' },
      { tl: '¿Qué le gusta de {sa}? ¿Y qué no le gusta?', c: '¿Qué te gusta de {sa}? ¿Y qué no te gusta?', en: 'What do you like about {s}? And what do you not like?', n: 'Decisional balance. Ask the good things first; the patient feels heard.' },
      { tl: 'Cuénteme qué pasa en un día típico con {sa}.', c: 'Cuéntame qué pasa en un día típico con {sa}.', en: 'Tell me what happens on a typical day with {s}.' },
      { tl: '¿Cómo afecta esto a las cosas que le importan, como su familia, su trabajo o su salud?', c: '¿Cómo afecta esto a las cosas que te importan, como tu familia, tu trabajo o tu salud?', en: 'How does it affect the things that matter to you, like family, work or health?' }
    ] },
    { id: 'reflect', title: 'Reflect and affirm', goal: 'Say back what you heard; notice strengths. Reflect change talk when you hear it.', lines: [
      { tl: 'Si le entiendo bien, le ayuda con el estrés, pero le preocupa su hígado.', c: 'Si te entiendo bien, te ayuda con el estrés, pero te preocupa tu hígado.', en: 'If I understand you, it helps with your stress, but you worry about your liver.', n: 'Double-sided reflection: the good, then the concern, ending on change.' },
      { tl: 'Parece que para usted es importante estar sano para sus hijos.', c: 'Parece que para ti es importante estar sano para tus hijos.', en: 'It sounds like being healthy for your children matters to you.' },
      { tl: 'Gracias por su franqueza. No es fácil hablar de esto.', c: 'Gracias por tu franqueza. No es fácil hablar de esto.', en: 'Thank you for being open. This is not easy to talk about.' },
      { tl: 'Veo que ya ha intentado dejarlo antes. Eso es algo grande.', c: 'Veo que ya has intentado dejarlo antes. Eso es algo grande.', en: 'I see you have tried to stop before. That is a big thing.', n: 'Affirm effort, not just outcome.' },
      { tl: '¿A qué se refiere con eso?', c: '¿A qué te refieres con eso?', en: 'What do you mean by that?' }
    ] },
    { id: 'rulers', title: 'Importance and confidence rulers', goal: 'Two numbers, then ask why not lower: the answer is change talk.', lines: [
      { tl: 'Del cero al diez, ¿qué tan importante es para usted reducir o dejar {sa}?', c: 'Del cero al diez, ¿qué tan importante es para ti reducir o dejar {sa}?', en: 'From zero to ten, how important is it to you to cut down or stop {s}?' },
      { tl: '¿Por qué ese número y no uno más bajo?', c: '¿Por qué ese número y no uno más bajo?', en: 'Why that number and not lower?', n: 'Never ask "why not higher"; it invites arguments against change.' },
      { tl: '¿Qué tendría que pasar para que subiera dos puntos?', c: '¿Qué tendría que pasar para que subiera dos puntos?', en: 'What would need to happen for it to go up by two points?' },
      { tl: 'Del cero al diez, ¿qué tanta confianza tiene en que podría lograrlo si se decidiera?', c: 'Del cero al diez, ¿qué tanta confianza tienes en que podrías lograrlo si te decidieras?', en: 'From zero to ten, how confident are you that you could do it if you decided to?' },
      { tl: '¿Qué le ayudó cuando logró dejarlo, aunque fuera por poco tiempo?', c: '¿Qué te ayudó cuando lograste dejarlo, aunque fuera por poco tiempo?', en: 'What helped you when you managed to stop, even briefly?' }
    ] },
    { id: 'feedback', title: 'Elicit, provide, elicit', goal: 'Ask what they know, give one or two facts with permission, then ask what they make of it.', lines: [
      { tl: '¿Qué sabe usted sobre los efectos de {sa} en la salud?', c: '¿Qué sabes sobre los efectos de {sa} en la salud?', en: 'What do you know about the effects of {s} on health?' },
      { tl: '¿Me permite compartirle algunas cosas que sabemos sobre esto?', c: '¿Me permites compartirte algunas cosas que sabemos sobre esto?', en: 'May I share a few things we know about this?' },
      { tl: '(Dé uno o dos datos de la lista de psicoeducación.)', c: '(Da uno o dos datos de la lista de psicoeducación.)', en: '(Give one or two facts from the psychoeducation list.)', n: 'Short and specific to this patient, for example the liver tests you just reviewed.' },
      { tl: '¿Qué opina? ¿Cómo aplica esto a su caso?', c: '¿Qué opinas? ¿Cómo aplica esto a tu caso?', en: 'What do you think? How does this apply to you?' }
    ] },
    { id: 'plan', title: 'Change plan (if ready)', goal: 'Let the patient choose the goal and the first step. Small and specific beats big and vague.', lines: [
      { tl: '¿Qué le gustaría hacer: reducir primero, o dejarlo por completo?', c: '¿Qué te gustaría hacer: reducir primero, o dejarlo por completo?', en: 'What would you like to do: cut down first, or stop completely?' },
      { tl: '¿Cuándo va a empezar? ¿Qué fecha?', c: '¿Cuándo vas a empezar? ¿Qué fecha?', en: 'When will you start? What date?' },
      { tl: '¿Cuándo es más difícil: después de comer, con los amigos, cuando está estresado o cansado?', c: '¿Cuándo es más difícil: después de comer, con los amigos, cuando estás estresado o cansado?', en: 'When is it hardest: after meals, with friends, when stressed or tired?', n: 'Triggers.' },
      { tl: '¿Qué va a hacer en lugar de eso? Por ejemplo, mascar chicle, tomar agua, salir a caminar, o hablar con su pareja.', c: '¿Qué vas a hacer en lugar de eso? Por ejemplo, mascar chicle, tomar agua, salir a caminar, o hablar con tu pareja.', en: 'What will you do instead? For example, chewing gum, water, a walk, or talking to your partner.' },
      { tl: '¿Quién le puede apoyar? ¿Podemos contarle el plan?', c: '¿Quién te puede apoyar? ¿Podemos contarle el plan?', en: 'Who can support you? May we tell them the plan?' },
      { tl: '¿Cómo sabremos que está funcionando? ¿Cuál es su meta por día, en {u}?', c: '¿Cómo sabremos que está funcionando? ¿Cuál es tu meta por día, en {u}?', en: 'How will we know it is working? What is your daily target, in {u}?' },
      { tl: 'Hay medicamentos que ayudan con las ganas y con la abstinencia. ¿Le gustaría que habláramos de eso?', c: 'Hay medicamentos que ayudan con las ganas y con la abstinencia. ¿Te gustaría que habláramos de eso?', en: 'There are medicines that help with craving and withdrawal. Would you like to talk about them?' }
    ] },
    { id: 'notready', title: 'If not ready', goal: 'Do not argue. Respect autonomy, keep the door open, offer harm reduction.', lines: [
      { tl: 'Entiendo que ahora no está listo. La decisión es suya.', c: 'Entiendo que ahora no estás listo. La decisión es tuya.', en: 'I understand you are not ready right now. The decision is yours.' },
      { tl: '¿Puedo volver a preguntarle sobre esto en la próxima consulta?', c: '¿Puedo volver a preguntarte sobre esto en la próxima consulta?', en: 'May I ask about this again at our next visit?' },
      { tl: 'Mientras no lo deje, ¿qué cosa pequeña podría hacer para estar más seguro?', c: 'Mientras no lo dejes, ¿qué cosa pequeña podrías hacer para estar más seguro?', en: 'While you have not stopped, what is one small thing you could do to be safer?', n: 'Harm reduction: naloxone and never using alone, fentanyl test strips, not sharing needles, not drinking before driving.' },
      { tl: 'Si cambia de opinión, aquí estamos.', c: 'Si cambias de opinión, aquí estamos.', en: 'If you change your mind, we are here.' }
    ] },
    { id: 'close', title: 'Close and follow up', goal: 'Summarize their own reasons and plan. Normalize slips.', lines: [
      { tl: 'Para resumir: usted quiere reducir {sa} por su familia, y va a empezar el lunes.', c: 'Para resumir: quieres reducir {sa} por tu familia, y vas a empezar el lunes.', en: 'To summarize: you want to cut down on {s} for your family, and you will start on Monday.', n: 'Use the patient\'s own words and reasons.' },
      { tl: 'Un desliz o una recaída es normal. No es un fracaso; simplemente volvemos al plan.', c: 'Un desliz o una recaída es normal. No es un fracaso; simplemente volvemos al plan.', en: 'A slip or relapse is normal. It is not failure; we just go back to the plan.' },
      { tl: 'Nos vemos otra vez en dos semanas para ver cómo va.', c: 'Nos vemos otra vez en dos semanas para ver cómo vas.', en: 'Let us meet again in two weeks to see how it goes.' },
      { tl: 'Gracias. Hablar de esto es un gran paso.', c: 'Gracias. Hablar de esto es un gran paso.', en: 'Thank you. Talking about this is a big step.' }
    ] }
  ];

  /* Nurse view: a shorter screening and advice script. Pending nursing review. */
  const NURSE = {
    notice: 'Nurse screening script, pending nursing review. Use it as a communication aid; follow your unit\'s procedures and report findings to the physician on duty.',
    steps: [
      { title: 'Ask', lines: [
        { tl: '¿Fuma, toma alcohol, usa alguna droga, o apuesta?', c: '¿Fumas, tomas alcohol, usas alguna droga, o apuestas?', en: 'Do you smoke, drink alcohol, use any drugs, or gamble?' },
        { tl: '¿Cuánto al día? ¿Cuándo fue la última vez?', c: '¿Cuánto al día? ¿Cuándo fue la última vez?', en: 'How much a day? When was the last time?' },
        { tl: '¿Alguna vez ha tenido una sobredosis? ¿Tiene naloxona (Narcan) en casa?', c: '¿Alguna vez has tenido una sobredosis? ¿Tienes naloxona (Narcan) en casa?', en: 'Have you ever had an overdose? Do you have naloxone (Narcan) at home?', n: 'Ask whenever the patient uses opioids or any street pills. Report a recent overdose.' }
      ] },
      { title: 'Watch for withdrawal', lines: [
        { tl: '¿Le temblan las manos, está sudando, o se siente mareado?', c: '¿Te temblan las manos, estás sudando, o te sientes mareado?', en: 'Are your hands shaking, are you sweating, or do you feel dizzy?', n: 'Alcohol: shaking, sweating, fast pulse, high BP, confusion. Report at once.' },
        { tl: '¿Puede dormir? ¿Ve u oye algo raro?', c: '¿Puedes dormir? ¿Ves u oyes algo raro?', en: 'Are you able to sleep? Are you seeing or hearing anything unusual?' },
        { tl: '¿Tiene dolor en el cuerpo, náusea, o escalofríos?', c: '¿Tienes dolor en el cuerpo, náusea, o escalofríos?', en: 'Do you have body aches, nausea, or chills?', n: 'Opioid withdrawal: aches, nausea, vomiting, diarrhea, sweating, yawning, large pupils. Uncomfortable rather than dangerous by itself, but report it so treatment can start.' }
      ] },
      { title: 'Brief advice', lines: [
        { tl: 'Como su enfermera, le aconsejo reducir o dejar {sa} por su salud. Estamos listos para ayudarle.', c: 'Como tu enfermera, te aconsejo reducir o dejar {sa} por tu salud. Estamos listos para ayudarte.', en: 'As your nurse, I advise you to cut down or stop {s} for your health. We are ready to help you.', n: 'Say "enfermero" if you are a man.' },
        { tl: 'Mientras esté en el hospital, díganos si tiene ganas de consumir o si se siente mal.', c: 'Mientras estés en el hospital, dinos si tienes ganas de consumir o si te sientes mal.', en: 'While you are in the hospital, tell us if you have cravings or feel unwell.' },
        { tl: 'Le voy a avisar al médico para que le puedan ayudar.', c: 'Te voy a avisar al médico para que te puedan ayudar.', en: 'I will let the doctor know so you can be helped.' }
      ] }
    ],
    escalate: 'Report to the physician on duty: any alcohol withdrawal signs (shaking, sweating, fast pulse, high blood pressure), confusion, hallucinations, suicidal statements, large gambling debts, opioid overdose signs (slow or no breathing, pinpoint pupils, cannot be roused) or a recent overdose, or a red, swollen or draining injection site.'
  };

  const fill = (text, sub) => String(text).replace(/\{sa\}/g, sub.sa || sub.s).replace(/\{s\}/g, sub.s).replace(/\{w\}/g, sub.w).replace(/\{u\}/g, sub.unit)
    .replace(/\ba el /g, 'al ').replace(/\bde el /g, 'del ').replace(/\bA el /g, 'Al ').replace(/\bDe el /g, 'Del ');
  const fillEn = (text, sub) => String(text).replace(/\{sa\}|\{s\}/g, sub.en).replace(/\{w\}/g, sub.wen).replace(/\{u\}/g, sub.unitEn || sub.unit);

  window.PSYCH_SUD = { substances: SUB, criteria: CRIT, gambling: GAMB, groups: GROUPS, screens: SCREENS, open: OPEN, remission: REMISSION, mi: MI, nurse: NURSE,
    criteriaFor: (sub) => (sub && sub.gamble ? GAMB : CRIT),
    severity: (n) => (n >= 6 ? 'severe' : n >= 4 ? 'moderate' : n >= 2 ? 'mild' : 'none'),
    severityFor: (sub, n) => (sub && sub.gamble ? (n >= 8 ? 'severe' : n >= 6 ? 'moderate' : n >= 4 ? 'mild' : 'none') : (n >= 6 ? 'severe' : n >= 4 ? 'moderate' : n >= 2 ? 'mild' : 'none')),
    rule: (sub) => (sub && sub.gamble ? '4 or more of 9 in 12 months: mild 4–5, moderate 6–7, severe 8–9' : '2 or more of 11 in 12 months: mild 2–3, moderate 4–5, severe 6 or more'),
    fill, fillEn };

  /* Also publish the lines as phrase sections, so they appear in search, flashcards, the handout generator
     and the audio pack. Alcohol is the worked example for the criteria; the screener substitutes other substances. */
  const sec = (id, title, intro, items) => ({ id, group: 'Substance use', title, intro, draft: true, phrases: items.map((p) => ({ en: p.en, f: p.tl, c: p.c || p.tl, n: p.n })) });
  const alcohol = SUB[0];
  const fillA = (p) => ({ en: fillEn(p.en, alcohol), tl: fill(p.tl, alcohol), c: fill(p.c || p.tl, alcohol), n: p.n });
  const by = (id) => SUB.find((x) => x.id === id);
  const sections = [
    sec('sud-screen', 'Substance use: the 11 criteria', 'DSM-5-TR substance use disorder, asked about alcohol. Replace "alcohol" with tabaco, marihuana, metanfetamina, cocaína, opioides, or the drug named. Two or more in 12 months: mild 2–3, moderate 4–5, severe 6 or more. The screener in Psychiatry → Substance use substitutes the other substances and does the counting.',
      OPEN.concat(CRIT.map((c) => ({ tl: c.tl, c: c.c, en: c.n + '. ' + c.en, n: GROUPS[c.group] })), REMISSION).map(fillA)),
    sec('sud-alcohol-tobacco', 'Alcohol and tobacco: asking and explaining', 'Substance-specific questions and psychoeducation for alcohol (count US standard drinks; caguamas and tall cans are 2.5–3 each) and tobacco or vaping.',
      [by('alcohol'), by('tobacco')].flatMap((s) => s.ask.concat(s.psychoed))),
    sec('sud-drugs', 'Cannabis, methamphetamine, cocaine, opioids, other drugs: asking and explaining', 'Ask with the non-judgmental preface, name the route and the last use, and for opioids always ask about overdose and naloxone. Fentanyl is in most street pills and powders now.',
      ['cannabis', 'meth', 'cocaine', 'opioids', 'other'].map(by).flatMap((s) => s.ask.concat(s.psychoed))),
    sec('sud-gambling', 'Gambling (sports betting, casino, online, lottery): the 9 criteria', 'Gambling disorder, DSM-5-TR: 4 or more of 9 criteria in 12 months; mild 4–5, moderate 6–7, severe 8–9. Ask about sports betting apps and phone use; ask about suicide when debts are large.',
      by('gambling').ask.concat(GAMB.map((c) => ({ tl: c.tl, c: c.c, en: c.n + '. ' + c.en })), by('gambling').psychoed)),
    sec('sud-screens', 'AUDIT-C and Fagerström in Spanish', 'Quick add-on screens: three AUDIT-C questions for alcohol and six Fagerström questions for nicotine dependence, with the answer choices. The screener in Psychiatry → Substance use scores them.',
      SCREENS.alcohol.items.concat(SCREENS.tobacco.items).map((it) => ({ tl: it.tl, c: it.c, en: it.en, n: it.opts.map((o) => o[0]).join(' / ') }))),
    sec('mi', 'Motivational interviewing', 'Brief intervention in Spanish: permission, open questions, reflections, rulers, elicit–provide–elicit, change plan, and what to say when the patient is not ready. Filled with alcohol; the guided flow in Psychiatry → Substance use → Brief intervention substitutes the other substances.',
      MI.flatMap((st) => st.lines).map(fillA))
  ];
  if (window.PSYCH_SECTIONS) sections.forEach((s) => PSYCH_SECTIONS.push(s));
})();
