/* Psychiatry phrase sections for Hablemos.
   PSYCH_SECTIONS: [{ id, group, title, intro, draft, phrases: [{ en, f, c, n?, r?, answers?: [[es, en]] }] }]
   - tl/f/c keep the engine's field names: f = usted (formal), c = tú (informal). `tl` in other files = the Spanish text.
   - r = regional variant of the phrase when the US/Mexican wording differs elsewhere (Caribbean, Central America, Spain).
   - Phrase indexes are IDs (flashcards `p:<section>:<index>`, flow refs "section:index"): APPEND only, never insert or reorder.
   - Section ids and the order and number of phrases mirror Usap Tayo's sections, so the interview flow refs carry over.
   - Spanish wording: US / Mexican baseline, plain spoken register, written for training; not validated instrument translations.
   STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician (draft: true on every section until then). */
(function () {
  const P = (en, f, c, n, extra) => Object.assign({ en, f, c }, n ? { n } : {}, extra || {});
  window.PSYCH_SECTIONS = [
    {
      id: 'opening', group: 'Interview', title: 'Opening and rapport', draft: true,
      intro: 'Introduce yourself, establish respect, and set the agenda. Start with usted; many patients will offer tú themselves. Warmth and a little personal conversation (personalismo) before the questions build trust.',
      phrases: [
        P('Good morning. I\'m Dr. Navarro, one of the psychiatrists here.', 'Buenos días. Soy la doctora Navarro, una de las psiquiatras de aquí.', 'Buenos días. Soy la doctora Navarro, una de las psiquiatras de aquí.', 'Use el doctor / la doctora and your own name. "Psiquiatra" carries stigma for some patients; "médico del equipo de salud mental" is a softer first mention.'),
        P('What would you like me to call you?', '¿Cómo le gustaría que le llame?', '¿Cómo quieres que te llame?', 'Also settles the register: if the patient answers with a first name and tú, you may follow.'),
        P('Please have a seat.', 'Siéntese, por favor.', 'Siéntate, por favor.'),
        P('Are you comfortable speaking in Spanish, or would you prefer English?', '¿Se siente cómodo hablando en español, o prefiere inglés?', '¿Te sientes cómodo hablando en español, o prefieres inglés?', 'Use cómoda for a woman. Many US patients switch between both; let them choose per topic.'),
        P('I\'m still learning Spanish. Please tell me if you don\'t understand me.', 'Todavía estoy aprendiendo español. Por favor, dígame si no me entiende.', 'Todavía estoy aprendiendo español. Dime si no me entiendes, por favor.', 'Admitting this openly usually earns goodwill and patience. Offer a certified interpreter for consent, risk and treatment decisions.'),
        P('We have about forty-five minutes to talk.', 'Tenemos unos cuarenta y cinco minutos para hablar.', 'Tenemos unos cuarenta y cinco minutos para platicar.', null, { r: '"Platicar" is Mexican / Central American; "conversar" or "hablar" everywhere.' }),
        P('I will ask many questions. Some may be personal.', 'Le voy a hacer muchas preguntas. Algunas pueden ser personales.', 'Te voy a hacer muchas preguntas. Algunas pueden ser personales.'),
        P('You can tell me anything. There are no wrong answers.', 'Puede decirme lo que sea. No hay respuestas incorrectas.', 'Puedes decirme lo que sea. No hay respuestas incorrectas.'),
        P('Take your time.', 'Tómese su tiempo.', 'Tómate tu tiempo.'),
        P('How are you feeling right now?', '¿Cómo se siente en este momento?', '¿Cómo te sientes ahorita?', '"Ahorita" (Mexico, Central America, Caribbean) = right now; use "ahora mismo" elsewhere.', { r: 'Spain / Southern Cone: ¿Cómo te sientes ahora mismo?' })
      ]
    },
    {
      id: 'consent', group: 'Interview', title: 'Confidentiality and consent', draft: true,
      intro: 'Explain privacy and its limits in plain words. Say who is on the team. In the US, HIPAA governs what you share; duty-to-warn and mandatory-reporting rules vary by state. Patients have the right to a certified interpreter at no cost.',
      phrases: [
        P('What we talk about stays between us and your treatment team.', 'Lo que hablemos queda entre usted, yo y su equipo de tratamiento.', 'Lo que hablemos queda entre tú, yo y tu equipo de tratamiento.'),
        P('But if I believe you or someone else is in danger, I may need to tell others to keep everyone safe.', 'Pero si creo que usted u otra persona está en peligro, puede que tenga que avisar a otros para proteger a todos.', 'Pero si creo que tú u otra persona está en peligro, puede que tenga que avisar a otros para proteger a todos.'),
        P('May I speak with your family as well?', '¿Puedo hablar también con su familia?', '¿Puedo hablar también con tu familia?', 'Ask which family members. Familismo means the family often expects to be involved; the patient still decides.'),
        P('Is there anything you don\'t want me to tell your family?', '¿Hay algo que no quiera que le diga a su familia?', '¿Hay algo que no quieras que le diga a tu familia?'),
        P('Do you agree to this treatment?', '¿Está de acuerdo con este tratamiento?', '¿Estás de acuerdo con este tratamiento?'),
        P('You can ask me questions at any time.', 'Puede hacerme preguntas en cualquier momento.', 'Puedes hacerme preguntas en cualquier momento.'),
        P('You have the right to know your diagnosis and treatment.', 'Usted tiene derecho a conocer su diagnóstico y su tratamiento.', 'Tienes derecho a conocer tu diagnóstico y tu tratamiento.', 'Add: "y a un intérprete, sin costo" (and to an interpreter, free of charge).')
      ]
    },
    {
      id: 'cc-hpi', group: 'Interview', title: 'Chief complaint and history of present illness', draft: true,
      intro: 'Open questions first, then clarify onset, duration, course, triggers, and impact. Ask "¿Qué quiere decir con eso?" whenever the patient uses an idiom (nervios, ataque de nervios, susto, "me siento pesado").',
      phrases: [
        P('What brings you here today?', '¿Qué lo trae por aquí hoy?', '¿Qué te trae por aquí hoy?', 'Use "la trae" for a woman.'),
        P('What is the problem you want help with?', '¿Cuál es el problema con el que quiere ayuda?', '¿Cuál es el problema con el que quieres ayuda?'),
        P('Tell me what happened.', 'Cuénteme qué pasó.', 'Cuéntame qué pasó.'),
        P('Whose idea was it to come here?', '¿De quién fue la idea de venir aquí?', '¿De quién fue la idea de venir aquí?'),
        P('When did this start?', '¿Cuándo empezó esto?', '¿Cuándo empezó esto?'),
        P('Did it start suddenly or gradually?', '¿Empezó de repente o poco a poco?', '¿Empezó de repente o poco a poco?'),
        P('What was happening in your life when it started?', '¿Qué estaba pasando en su vida cuando empezó?', '¿Qué estaba pasando en tu vida cuando empezó?'),
        P('Has it gotten better or worse?', '¿Ha mejorado o ha empeorado?', '¿Ha mejorado o ha empeorado?'),
        P('Has this happened before?', '¿Le había pasado esto antes?', '¿Te había pasado esto antes?'),
        P('How has this affected your work or studies?', '¿Cómo ha afectado esto su trabajo o sus estudios?', '¿Cómo ha afectado esto tu trabajo o tus estudios?'),
        P('What do you think is causing this?', '¿Qué cree usted que está causando esto?', '¿Qué crees tú que está causando esto?', 'Elicits the explanatory model. Listen for nervios, susto, mal de ojo, brujería, a punishment from God, or stress and migration explanations; do not label them yet.'),
        P('What have you done to feel better?', '¿Qué ha hecho para sentirse mejor?', '¿Qué has hecho para sentirte mejor?', 'Ask about remedies (tés, hierbas), prayer, a curandero or sobador, and medicines bought abroad or without prescription.'),
        P('Can you tell me more about that?', '¿Me puede contar más sobre eso?', '¿Me puedes contar más sobre eso?'),
        P('What do you mean by that?', '¿Qué quiere decir con eso?', '¿Qué quieres decir con eso?', 'The key follow-up to any idiom of distress.')
      ]
    },
    {
      id: 'depression', group: 'Interview', title: 'Depressed mood and SIGECAPS', draft: true,
      intro: 'Gate first: depressed mood or loss of interest most of the day, nearly every day, for two weeks. Then SIGECAPS: Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicide. Major depressive episode = one gate symptom + five of nine in total. Always ask every depressed patient about past elevated mood before starting an antidepressant. Common idioms: "me siento decaído", "no tengo ganas de nada", "tengo los nervios", "se me cierra el pecho".',
      phrases: [
        P('How has your mood been over the past two weeks?', '¿Cómo ha estado su estado de ánimo en las últimas dos semanas?', '¿Cómo ha estado tu ánimo en las últimas dos semanas?', 'Gate · depressed mood'),
        P('Have you been feeling sad or down most of the day, nearly every day?', '¿Se ha sentido triste o decaído la mayor parte del día, casi todos los días?', '¿Te has sentido triste o decaído la mayor parte del día, casi todos los días?', 'Gate · depressed mood. "Decaída", "desanimada", "sin ganas" and "deprimida" are common; some patients only say "pesado" or "cansado".', { answers: [['Sí, siempre estoy triste.', 'Yes, I\'m always sad.'], ['Siento el pecho apretado.', 'My chest feels tight.']] }),
        P('Do you still enjoy the things you used to enjoy?', '¿Todavía disfruta de las cosas que antes le gustaban?', '¿Todavía disfrutas de las cosas que antes te gustaban?', 'Gate · anhedonia'),
        P('Do you cry often?', '¿Llora con frecuencia?', '¿Lloras seguido?'),
        P('From 1 to 10, with 10 the best, how is your mood today?', 'Del uno al diez, donde diez es lo mejor, ¿cómo está su ánimo hoy?', 'Del uno al diez, donde diez es lo mejor, ¿cómo está tu ánimo hoy?'),
        P('S · How is your sleep? Do you have trouble falling asleep, staying asleep, or do you wake up too early? Or are you sleeping much more than usual?', '¿Cómo duerme? ¿Le cuesta quedarse dormido, se despierta durante la noche o se despierta demasiado temprano? ¿O está durmiendo mucho más de lo normal?', '¿Cómo duermes? ¿Te cuesta quedarte dormido, te despiertas en la noche o te despiertas demasiado temprano? ¿O estás durmiendo mucho más de lo normal?', 'Sleep: insomnia or hypersomnia. Early waking suggests melancholic features.'),
        P('S · How many hours do you sleep each night?', '¿Cuántas horas duerme cada noche?', '¿Cuántas horas duermes cada noche?'),
        P('I · Have you lost interest in things?', '¿Ha perdido el interés en las cosas?', '¿Has perdido el interés en las cosas?', 'Interest. "No tengo ganas de nada" covers motivation, appetite and libido; clarify which.'),
        P('G · Do you feel guilty or worthless? Do you blame yourself for things?', '¿Se siente culpable o que no vale nada? ¿Se culpa a sí mismo por las cosas?', '¿Te sientes culpable o que no vales nada? ¿Te culpas a ti mismo por las cosas?', 'Guilt or worthlessness. If the guilt is fixed and out of proportion (an unforgivable sin, having ruined the family), ask about psychotic features.'),
        P('E · Do you feel tired or have no energy?', '¿Se siente cansado o sin energía?', '¿Te sientes cansado o sin energía?', 'Energy'),
        P('C · Can you concentrate, for example on watching TV or reading? Is it hard to make decisions?', '¿Puede concentrarse, por ejemplo para ver la televisión o leer? ¿Le cuesta tomar decisiones?', '¿Puedes concentrarte, por ejemplo para ver la tele o leer? ¿Te cuesta tomar decisiones?', 'Concentration or indecisiveness'),
        P('A · How is your appetite? Have you lost or gained weight?', '¿Cómo está su apetito? ¿Ha bajado o subido de peso?', '¿Cómo está tu apetito? ¿Has bajado o subido de peso?', 'Appetite or weight change (about 5% in a month without trying).'),
        P('P · Have others noticed you moving or speaking more slowly, or being restless?', '¿Otras personas han notado que se mueve o habla más despacio, o que está inquieto?', '¿Otras personas han notado que te mueves o hablas más despacio, o que estás inquieto?', 'Psychomotor retardation or agitation, observable by others.'),
        P('S · With everything you are going through, have you thought that you would rather not live, or of hurting yourself?', 'Con todo lo que está pasando, ¿ha pensado que preferiría no vivir, o en hacerse daño?', 'Con todo lo que estás pasando, ¿has pensado que preferirías no vivir, o en hacerte daño?', 'Suicide. If yes, go to the Suicide risk section now.'),
        P('Do you feel hopeless about the future?', '¿Siente que no hay esperanza para el futuro?', '¿Sientes que no hay esperanza para el futuro?', 'Hopelessness is not a DSM criterion but predicts suicide risk.'),
        P('Is it worse in the morning or at night?', '¿Es peor por la mañana o por la noche?', '¿Es peor en la mañana o en la noche?', 'Worse in the morning suggests melancholic features.'),
        P('How long has this been going on? Has it been like this nearly every day?', '¿Desde cuándo está así? ¿Ha sido así casi todos los días?', '¿Desde cuándo estás así? ¿Ha sido así casi todos los días?', 'Duration: at least two weeks.'),
        P('Has it affected your work, your studies, or your care for the family?', '¿Ha afectado su trabajo, sus estudios o el cuidado de su familia?', '¿Ha afectado tu trabajo, tus estudios o el cuidado de tu familia?', 'Impairment.'),
        P('Have you ever had the opposite: days when you felt unusually high, full of energy, and needed little sleep?', '¿Alguna vez ha tenido lo contrario: días en que se sentía muy acelerado, lleno de energía y con poca necesidad de dormir?', '¿Alguna vez has tenido lo contrario: días en que te sentías muy acelerado, lleno de energía y con poca necesidad de dormir?', 'Bipolar screen. Ask every depressed patient before prescribing an antidepressant; if yes, go to the DIGFAST section.'),
        P('When you feel this low, do you hear voices or believe things that others say are not true?', 'Cuando se siente tan mal, ¿escucha voces o cree cosas que los demás dicen que no son ciertas?', 'Cuando te sientes tan mal, ¿escuchas voces o crees cosas que los demás dicen que no son ciertas?', 'Psychotic features: mood-congruent guilt, nihilistic, or somatic delusions; hallucinations.'),
        P('During these sad days, were there also times you felt sped up, restless, or that your thoughts were racing?', 'En estos días de tristeza, ¿también hubo momentos en que se sentía acelerado, inquieto, o con los pensamientos a mil?', 'En estos días de tristeza, ¿también hubo momentos en que te sentías acelerado, inquieto, o con los pensamientos a mil?', 'Mixed features: three or more manic symptoms during the depressive episode.'),
        P('Did this start during pregnancy or within the weeks after giving birth?', '¿Esto empezó durante el embarazo o en las semanas después del parto?', '¿Esto empezó durante el embarazo o en las semanas después del parto?', 'Peripartum onset: during pregnancy or within four weeks of delivery. Ask about thoughts of harming the baby. "Embarazada" = pregnant (false friend).'),
        P('Did this begin after someone close to you died?', '¿Esto empezó después de que falleciera alguien cercano a usted?', '¿Esto empezó después de que falleciera alguien cercano a ti?', 'Grief versus depression: in grief the pain comes in waves and self-esteem is kept; persistent worthlessness, retardation, and suicidal thoughts beyond "wanting to join" the deceased point to a depressive episode. Long mourning, novenarios and Día de Muertos observances are cultural, not pathology.')
      ]
    },
    {
      id: 'mania', group: 'Interview', title: 'Elevated, expansive or irritable mood and DIGFAST', draft: true,
      intro: 'Gate first: a distinct period of abnormally elevated, expansive, or irritable mood with increased energy or activity. Then DIGFAST: Distractibility, Indiscretion, Grandiosity, Flight of ideas, Activity, Sleep, Talkativeness. Mania = gate + three of seven (four if the mood is only irritable) for at least one week, or any length if hospitalized; hypomania = at least four days, no hospitalization, no psychosis.',
      phrases: [
        P('Have you ever had a period when you felt extremely happy, high, or energetic, more than usual, for days at a time?', '¿Alguna vez ha tenido una temporada en que se sentía extremadamente feliz, eufórico o con mucha energía, más de lo normal, durante varios días seguidos?', '¿Alguna vez has tenido una temporada en que te sentías extremadamente feliz, eufórico o con mucha energía, más de lo normal, durante varios días seguidos?', 'Gate · elevated or expansive mood'),
        P('Or a period when you were much more irritable or easily angered than usual, with more energy?', '¿O una temporada en que estaba mucho más irritable o se enojaba con más facilidad de lo normal, y con más energía?', '¿O una temporada en que estabas mucho más irritable o te enojabas con más facilidad de lo normal, y con más energía?', 'Gate · irritable mood. If the mood was only irritable, four of the seven DIGFAST symptoms are needed.', { r: 'Spain: "se enfadaba" instead of "se enojaba".' }),
        P('Did family or friends notice you were not your usual self?', '¿Su familia o sus amigos notaron que usted no era el mismo de siempre?', '¿Tu familia o tus amigos notaron que no eras el mismo de siempre?', 'The change must be observable by others. Collateral history is often the key. Use "la misma" for a woman.'),
        P('D · Were you easily distracted, jumping from one thing to another?', '¿Se distraía con facilidad, saltando de una cosa a otra?', '¿Te distraías con facilidad, saltando de una cosa a otra?', 'Distractibility'),
        P('I · Did you do risky things you wouldn\'t normally do, like spending a lot of money, gambling, or sexual indiscretions?', '¿Hizo cosas arriesgadas que normalmente no haría, como gastar mucho dinero, apostar, o tener relaciones sexuales imprudentes?', '¿Hiciste cosas arriesgadas que normalmente no harías, como gastar mucho dinero, apostar, o tener relaciones sexuales imprudentes?', 'Indiscretion: pleasurable activities with painful consequences.'),
        P('G · Did you feel you had special powers, a special mission, or that you were more important than others?', '¿Sentía que tenía poderes especiales, una misión especial, o que era más importante que los demás?', '¿Sentías que tenías poderes especiales, una misión especial, o que eras más importante que los demás?', 'Grandiosity. Religious grandiosity (a mission from God) is common; check whether the family or congregation shares the belief.'),
        P('F · Did your thoughts race, as if they were running ahead of you?', '¿Sus pensamientos iban muy rápido, como si corrieran delante de usted?', '¿Tus pensamientos iban muy rápido, como si corrieran delante de ti?', 'Flight of ideas or racing thoughts. Patients say "la mente a mil" or "no paraba de pensar".'),
        P('A · Were you much more active than usual, starting many projects, or unable to sit still?', '¿Estaba mucho más activo de lo normal, empezando muchos proyectos, o sin poder quedarse quieto?', '¿Estabas mucho más activo de lo normal, empezando muchos proyectos, o sin poder quedarte quieto?', 'Activity: goal-directed activity or psychomotor agitation.'),
        P('S · Did you need much less sleep but not feel tired?', '¿Necesitaba dormir mucho menos y aun así no se sentía cansado?', '¿Necesitabas dormir mucho menos y aun así no te sentías cansado?', 'Sleep: decreased need, not insomnia. Ask "¿Cuántas horas?" and whether they felt rested.'),
        P('T · Did people say you talked too fast or too much, or that it was hard to interrupt you?', '¿La gente le decía que hablaba demasiado rápido o demasiado, o que era difícil interrumpirlo?', '¿La gente te decía que hablabas demasiado rápido o demasiado, o que era difícil interrumpirte?', 'Talkativeness or pressured speech'),
        P('How long did this last?', '¿Cuánto tiempo duró esto?', '¿Cuánto tiempo duró esto?', 'Mania: one week or longer; hypomania: at least four days.'),
        P('Were you admitted to a hospital, or did you get into trouble because of it?', '¿Lo internaron en un hospital, o tuvo problemas por eso?', '¿Te internaron en un hospital, o tuviste problemas por eso?', 'Hospitalization or marked impairment makes it mania regardless of duration. "Internar" = to admit; "ingresar" in Spain.'),
        P('At that time, did you hear voices or believe things others said were not true?', 'En ese momento, ¿escuchaba voces o creía cosas que los demás decían que no eran ciertas?', 'En ese momento, ¿escuchabas voces o creías cosas que los demás decían que no eran ciertas?', 'Psychotic features rule out hypomania.'),
        P('Were you drinking, using drugs like methamphetamine or cocaine, or taking any new medicine when this happened?', 'Cuando pasó esto, ¿estaba tomando alcohol, usando drogas como metanfetamina o cocaína, o tomando algún medicamento nuevo?', 'Cuando pasó esto, ¿estabas tomando alcohol, usando drogas como metanfetamina o cocaína, o tomando algún medicamento nuevo?', 'Rule out substance- or medication-induced episodes (stimulants, steroids, antidepressants). Street names: cristal, meth, perico, coca.'),
        P('During that period, were there also times you felt very sad, hopeless, or thought of dying?', 'Durante esa temporada, ¿también hubo momentos en que se sentía muy triste, sin esperanza, o pensaba en morir?', 'Durante esa temporada, ¿también hubo momentos en que te sentías muy triste, sin esperanza, o pensabas en morir?', 'Mixed features: three or more depressive symptoms during the manic episode. Suicide risk is high in mixed states.')
      ]
    },
    {
      id: 'anxiety', group: 'Interview', title: 'Anxiety, panic, and OCD', draft: true,
      intro: 'Patients often say "nervios", "ansiedad", "me da algo", "se me cierra el pecho" or describe an "ataque de nervios" (a culturally recognized episode of shouting, crying, trembling, sometimes aggression or dissociation, usually after a family stressor). Ask what each word means for them.',
      phrases: [
        P('Do you worry a lot?', '¿Se preocupa mucho?', '¿Te preocupas mucho?'),
        P('Is it hard to control your worrying?', '¿Le cuesta controlar la preocupación?', '¿Te cuesta controlar la preocupación?'),
        P('Do you feel nervous or on edge?', '¿Se siente nervioso o tenso?', '¿Te sientes nervioso o tenso?', 'Use nerviosa / tensa for a woman.'),
        P('Have you had sudden attacks of intense fear, with a pounding heart, shortness of breath, or feeling you might die?', '¿Ha tenido ataques repentinos de miedo intenso, con el corazón acelerado, falta de aire, o la sensación de que se iba a morir?', '¿Has tenido ataques repentinos de miedo intenso, con el corazón acelerado, falta de aire, o la sensación de que te ibas a morir?', 'Panic attack. Patients may call it "ataque de nervios" or "me dio algo"; clarify the symptoms.'),
        P('Do you avoid places because you\'re afraid it will happen again?', '¿Evita lugares por miedo a que le vuelva a pasar?', '¿Evitas lugares por miedo a que te vuelva a pasar?'),
        P('Do you have thoughts that keep coming back even if you don\'t want them?', '¿Tiene pensamientos que vuelven una y otra vez aunque usted no quiera?', '¿Tienes pensamientos que vuelven una y otra vez aunque tú no quieras?'),
        P('Do you have to wash, check, or count things over and over?', '¿Tiene que lavarse, revisar o contar cosas una y otra vez?', '¿Tienes que lavarte, revisar o contar cosas una y otra vez?'),
        P('What happens if you don\'t do it?', '¿Qué pasa si no lo hace?', '¿Qué pasa si no lo haces?'),
        P('Are you very afraid of being judged or embarrassed in front of people?', '¿Le da mucho miedo que lo juzguen o pasar vergüenza delante de la gente?', '¿Te da mucho miedo que te juzguen o pasar vergüenza delante de la gente?', '"Vergüenza" = embarrassment or shame, not "embarrassed" = embarazada (pregnant).')
      ]
    },
    {
      id: 'trauma', group: 'Interview', title: 'Trauma and PTSD', draft: true,
      intro: 'Ask gently and give control. Patients don\'t need to give details to be assessed. Migration journeys, detention, community violence and intimate partner violence are common sources; ask about current safety and, if relevant, fear of authorities.',
      phrases: [
        P('Has something very frightening or painful ever happened to you?', '¿Alguna vez le ha pasado algo muy aterrador o muy doloroso?', '¿Alguna vez te ha pasado algo muy aterrador o muy doloroso?'),
        P('You don\'t have to tell me the details if you\'re not ready.', 'No tiene que contarme los detalles si no está listo.', 'No tienes que contarme los detalles si no estás listo.', 'Use "lista" for a woman.'),
        P('Do you have memories or nightmares about it that you can\'t stop?', '¿Tiene recuerdos o pesadillas sobre eso que no puede detener?', '¿Tienes recuerdos o pesadillas sobre eso que no puedes detener?'),
        P('Do you feel like it\'s happening again?', '¿Siente como si estuviera pasando otra vez?', '¿Sientes como si estuviera pasando otra vez?', 'Flashbacks.'),
        P('Do you avoid things that remind you of it?', '¿Evita las cosas que se lo recuerdan?', '¿Evitas las cosas que te lo recuerdan?'),
        P('Are you easily startled?', '¿Se asusta con facilidad?', '¿Te asustas con facilidad?', '"Susto" as an illness (soul loss after a fright) is a separate cultural concept; ask what they mean.'),
        P('Has anyone hurt you physically, emotionally, or sexually?', '¿Alguien le ha hecho daño físico, emocional o sexual?', '¿Alguien te ha hecho daño físico, emocional o sexual?'),
        P('Are you safe at home now?', '¿Está seguro en su casa ahora?', '¿Estás seguro en tu casa ahora?', 'Use "segura" for a woman. Ask alone, never with the partner present.')
      ]
    },
    {
      id: 'hallucinations', group: 'Interview', title: 'Psychosis: hallucinations and perceptual disturbances', draft: true,
      intro: 'Normalize first ("Some people who are very stressed experience..."), then ask each modality. Distinguish culturally shared experiences (seeing or hearing a deceased relative, espíritus, presencias, visions during prayer) from hallucinations: ask whether the family shares them and whether they are distressing. Ask about content, frequency, command type, and response.',
      phrases: [
        P('Sometimes when people are very stressed, they hear or see things others don\'t. Has that happened to you?', 'A veces, cuando las personas están muy estresadas, oyen o ven cosas que los demás no oyen ni ven. ¿Le ha pasado eso?', 'A veces, cuando la gente está muy estresada, oye o ve cosas que los demás no oyen ni ven. ¿Te ha pasado eso?', 'Normalizing statement before asking. Reduces shame.'),
        P('Do you hear voices or sounds when no one is around?', '¿Oye voces o sonidos cuando no hay nadie cerca?', '¿Oyes voces o sonidos cuando no hay nadie cerca?'),
        P('Is someone whispering to you?', '¿Alguien le susurra?', '¿Alguien te susurra?', null, { answers: [['Sí, en el oído izquierdo.', 'Yes, in my left ear.'], ['A veces, por la noche.', 'Sometimes, at night.']] }),
        P('Is someone talking to you that you can\'t see?', '¿Alguien que usted no puede ver le habla?', '¿Alguien que tú no puedes ver te habla?'),
        P('Do you see shadows or evil spirits?', '¿Ve sombras o espíritus malos?', '¿Ves sombras o espíritus malos?', 'Follow up: Do others see them too? Does your family believe they\'re real? "Sombras", "presencias" and "el diablo" are common words.'),
        P('Do you see things that others don\'t see?', '¿Ve cosas que los demás no ven?', '¿Ves cosas que los demás no ven?'),
        P('Do you see people, animals, or figures that aren\'t really there?', '¿Ve personas, animales o figuras que en realidad no están ahí?', '¿Ves personas, animales o figuras que en realidad no están ahí?'),
        P('Is it one voice or many?', '¿Es una sola voz o varias?', '¿Es una sola voz o varias?'),
        P('Is it a man\'s or a woman\'s voice? Do you recognize it?', '¿Es una voz de hombre o de mujer? ¿La reconoce?', '¿Es una voz de hombre o de mujer? ¿La reconoces?'),
        P('Does the voice come from inside your head or from outside, through your ears?', '¿La voz viene de adentro de su cabeza o de afuera, por los oídos?', '¿La voz viene de adentro de tu cabeza o de afuera, por los oídos?'),
        P('What does the voice say?', '¿Qué dice la voz?', '¿Qué dice la voz?', null, { answers: [['Dice que no valgo nada.', 'It says I\'m worthless.'], ['Me insulta.', 'It curses at me.']] }),
        P('Do the voices talk to each other about you?', '¿Las voces hablan entre ellas sobre usted?', '¿Las voces hablan entre ellas sobre ti?', 'Third-person voices discussing the patient.'),
        P('Do they comment on what you are doing?', '¿Comentan lo que usted está haciendo?', '¿Comentan lo que estás haciendo?', 'Running commentary.'),
        P('Do the voices tell you to do things?', '¿Las voces le dicen que haga cosas?', '¿Las voces te dicen que hagas cosas?', 'Command hallucinations. Always follow up on content.'),
        P('Do they tell you to hurt yourself or others?', '¿Le dicen que se haga daño o que le haga daño a otros?', '¿Te dicen que te hagas daño o que le hagas daño a otros?'),
        P('Do you follow what the voices say? Can you resist them?', '¿Hace lo que le dicen las voces? ¿Puede resistirse?', '¿Haces lo que te dicen las voces? ¿Puedes resistirte?'),
        P('How often do you hear them? Are you hearing them now?', '¿Con qué frecuencia las oye? ¿Las está oyendo ahora?', '¿Qué tan seguido las oyes? ¿Las estás oyendo ahora?', null, { r: '"Qué tan seguido" is Latin American; Spain says "con qué frecuencia" or "cada cuánto".' }),
        P('When do you hear them? Only when falling asleep or waking up?', '¿Cuándo las oye? ¿Solo al quedarse dormido o al despertar?', '¿Cuándo las oyes? ¿Solo al quedarte dormido o al despertar?', 'Hypnagogic/hypnopompic experiences can be normal.'),
        P('Do you smell strange things others can\'t smell?', '¿Huele cosas raras que los demás no huelen?', '¿Hueles cosas raras que los demás no huelen?'),
        P('Does your food taste strange, like poison?', '¿La comida le sabe raro, como a veneno?', '¿La comida te sabe raro, como a veneno?'),
        P('Do you feel something crawling on your skin or touching you?', '¿Siente que algo le camina por la piel o lo toca?', '¿Sientes que algo te camina por la piel o te toca?'),
        P('Do you feel something entering or possessing your body?', '¿Siente que algo entra en su cuerpo o se apodera de él?', '¿Sientes que algo entra en tu cuerpo o se apodera de él?', 'Ask about possession experiences directly; families may describe them as "un espíritu", "una posesión" or "le hicieron un trabajo" (sorcery).'),
        P('Do your family or neighbors also see or hear these things?', '¿Su familia o sus vecinos también ven u oyen estas cosas?', '¿Tu familia o tus vecinos también ven u oyen estas cosas?', 'Helps separate shared cultural experience from individual hallucination.'),
        P('How do you feel when you hear them?', '¿Cómo se siente cuando las oye?', '¿Cómo te sientes cuando las oyes?')
      ]
    },
    {
      id: 'delusions', group: 'Interview', title: 'Psychosis: delusions and thought disturbances', draft: true,
      intro: 'Ask with curiosity, not challenge. Check fixity: "¿Podría haber otra explicación?" Beliefs in mal de ojo, brujería or "un trabajo" are widely shared; judge by how elaborated, how fixed, and whether the family agrees. Fear of immigration enforcement or of being watched can be realistic: check the facts before calling it persecutory.',
      phrases: [
        P('Do you feel someone wants to harm you?', '¿Siente que alguien quiere hacerle daño?', '¿Sientes que alguien quiere hacerte daño?'),
        P('Is someone following or watching you?', '¿Alguien lo sigue o lo vigila?', '¿Alguien te sigue o te vigila?', 'Use "la sigue" for a woman.'),
        P('Is someone plotting against you?', '¿Alguien está conspirando en su contra?', '¿Alguien está conspirando en tu contra?'),
        P('Do you feel that people are talking about you?', '¿Siente que la gente habla de usted?', '¿Sientes que la gente habla de ti?'),
        P('Is anyone putting something in your food?', '¿Alguien le está poniendo algo en la comida?', '¿Alguien te está poniendo algo en la comida?'),
        P('Do you think someone has bewitched you?', '¿Cree que alguien le hizo brujería o un trabajo?', '¿Crees que alguien te hizo brujería o un trabajo?', 'Brujería / mal de ojo / "un trabajo" beliefs are common and often shared by the family. Explore how elaborated it is and whether others agree before calling it delusional.'),
        P('Do the TV, radio, or social media send you special messages?', '¿La televisión, la radio o las redes sociales le mandan mensajes especiales?', '¿La tele, la radio o las redes sociales te mandan mensajes especiales?', 'Ideas/delusions of reference.'),
        P('Do you have special powers or abilities that others don\'t have?', '¿Tiene poderes o capacidades especiales que los demás no tienen?', '¿Tienes poderes o capacidades especiales que los demás no tienen?', 'Grandiosity.'),
        P('Has God or a spirit given you a special mission?', '¿Dios o algún espíritu le ha dado una misión especial?', '¿Dios o algún espíritu te ha dado una misión especial?'),
        P('Can others read your mind?', '¿Otras personas pueden leerle la mente?', '¿Otras personas pueden leerte la mente?'),
        P('Does someone put thoughts into your head that aren\'t yours?', '¿Alguien le mete en la cabeza pensamientos que no son suyos?', '¿Alguien te mete en la cabeza pensamientos que no son tuyos?', 'Thought insertion.'),
        P('Are your thoughts being taken out of your head?', '¿Le están sacando los pensamientos de la cabeza?', '¿Te están sacando los pensamientos de la cabeza?', 'Thought withdrawal.'),
        P('Can others hear your thoughts out loud?', '¿Los demás pueden oír sus pensamientos en voz alta?', '¿Los demás pueden oír tus pensamientos en voz alta?', 'Thought broadcasting.'),
        P('Is something controlling your body or actions?', '¿Algo controla su cuerpo o lo que usted hace?', '¿Algo controla tu cuerpo o lo que haces?', 'Passivity/delusions of control.'),
        P('Do you feel you have done something terrible and deserve punishment?', '¿Siente que hizo algo terrible y que merece un castigo?', '¿Sientes que hiciste algo terrible y que mereces un castigo?', 'Delusions of guilt (psychotic depression).'),
        P('Do you feel your body is rotting or your organs are missing?', '¿Siente que su cuerpo se está pudriendo o que le faltan órganos?', '¿Sientes que tu cuerpo se está pudriendo o que te faltan órganos?', 'Nihilistic/somatic delusions.'),
        P('Is your spouse being unfaithful?', '¿Su pareja le está siendo infiel?', '¿Tu pareja te está siendo infiel?', 'Delusional jealousy. Explore evidence and safety.'),
        P('How sure are you that this is true?', '¿Qué tan seguro está de que esto es cierto?', '¿Qué tan seguro estás de que esto es cierto?', null, { r: 'Spain: "¿Hasta qué punto está seguro...?"' }),
        P('Could there be another explanation?', '¿Podría haber otra explicación?', '¿Podría haber otra explicación?'),
        P('What have you done because of this?', '¿Qué ha hecho por causa de esto?', '¿Qué has hecho por causa de esto?', 'Ask whether beliefs drive behavior (risk).')
      ]
    },
    {
      id: 'suicide', group: 'Risk', title: 'Suicide and self-harm risk', draft: true,
      intro: 'Asking directly does not increase risk. Move from passive to active ideation, then plan, intent, means, preparation, past attempts, protective factors. Use the direct words "suicidarse" and "quitarse la vida". Ask specifically about firearms and about medicines at home.',
      phrases: [
        P('With everything you\'re going through, have you felt that life isn\'t worth living?', 'Con todo lo que está pasando, ¿ha sentido que la vida no vale la pena?', 'Con todo lo que estás pasando, ¿has sentido que la vida no vale la pena?'),
        P('Have you wished you could go to sleep and not wake up?', '¿Ha deseado dormirse y no despertar?', '¿Has deseado dormirte y no despertar?', 'Passive death wish.'),
        P('Have you thought about ending your life?', '¿Ha pensado en quitarse la vida?', '¿Has pensado en quitarte la vida?'),
        P('Have you thought about killing yourself?', '¿Ha pensado en suicidarse?', '¿Has pensado en suicidarte?', 'Use the direct word. Euphemisms can be misunderstood.'),
        P('How often do you have these thoughts?', '¿Con qué frecuencia tiene estos pensamientos?', '¿Qué tan seguido tienes estos pensamientos?'),
        P('Are you having these thoughts now?', '¿Está teniendo estos pensamientos ahora?', '¿Estás teniendo estos pensamientos ahora?'),
        P('Have you thought about how you would do it?', '¿Ha pensado en cómo lo haría?', '¿Has pensado en cómo lo harías?'),
        P('Do you have a plan?', '¿Tiene un plan?', '¿Tienes un plan?'),
        P('Do you have access to pills, poison, a rope, a knife, or a gun?', '¿Tiene acceso a pastillas, veneno, una cuerda, un cuchillo o un arma de fuego?', '¿Tienes acceso a pastillas, veneno, una cuerda, un cuchillo o una pistola?', 'Firearms are the most lethal and most common means of suicide death in the US. Ask about every gun in the home, not only the patient\'s.'),
        P('Is there a gun in your home, or medicines you could take all at once?', '¿Hay algún arma de fuego en su casa, o medicamentos que podría tomarse todos de una vez?', '¿Hay alguna pistola en tu casa, o medicinas que podrías tomarte todas de una vez?', 'Means at home: firearms (ask who owns them and how they are stored) and stockpiled medicines (acetaminophen, opioids, the patient\'s own prescriptions).'),
        P('Have you done anything to prepare, like writing a letter or giving away your things?', '¿Ha hecho algo para prepararse, como escribir una carta o regalar sus cosas?', '¿Has hecho algo para prepararte, como escribir una carta o regalar tus cosas?'),
        P('Do you intend to act on these thoughts?', '¿Tiene la intención de actuar según estos pensamientos?', '¿Tienes la intención de hacerlo?'),
        P('Have you ever tried to end your life before?', '¿Alguna vez ha intentado quitarse la vida?', '¿Alguna vez has intentado quitarte la vida?'),
        P('What did you do? What happened afterwards?', '¿Qué hizo? ¿Qué pasó después?', '¿Qué hiciste? ¿Qué pasó después?'),
        P('Have you hurt yourself on purpose, like cutting or burning?', '¿Se ha hecho daño a propósito, como cortarse o quemarse?', '¿Te has hecho daño a propósito, como cortarte o quemarte?'),
        P('What has stopped you from acting on these thoughts?', '¿Qué le ha impedido actuar según estos pensamientos?', '¿Qué te ha detenido de hacerlo?', 'Protective factors: children, family, faith (suicide as sin), hope, responsibilities.'),
        P('What gives you reasons to keep living?', '¿Qué le da razones para seguir viviendo?', '¿Qué te da razones para seguir viviendo?'),
        P('Can you tell me or someone you trust if these thoughts get stronger?', '¿Puede avisarme a mí o a alguien de confianza si estos pensamientos se hacen más fuertes?', '¿Puedes avisarme a mí o a alguien de confianza si estos pensamientos se hacen más fuertes?'),
        P('Thank you for telling me. You are not alone in this.', 'Gracias por contármelo. No está solo en esto.', 'Gracias por contármelo. No estás solo en esto.', 'Use "sola" for a woman.'),
        P('You can call or text 988 any time, in Spanish too.', 'Puede llamar o enviar un mensaje de texto al 988 a cualquier hora, también en español.', 'Puedes llamar o mandar un mensaje de texto al 988 a cualquier hora, también en español.', 'US 988 Suicide and Crisis Lifeline: call 988 and press 2 for Spanish, or text AYUDA to 988. Replace with the local line in data/hospital.js outside the US; verify numbers periodically.')
      ]
    },
    {
      id: 'violence', group: 'Risk', title: 'Violence and homicide risk', draft: true,
      intro: 'Ask about thoughts of harming others, targets, history of violence, weapons, and substance use. Know your state\'s duty-to-warn rules.',
      phrases: [
        P('Have you had thoughts of hurting someone else?', '¿Ha tenido pensamientos de hacerle daño a otra persona?', '¿Has tenido pensamientos de hacerle daño a otra persona?'),
        P('Who? Have you thought about how?', '¿A quién? ¿Ha pensado en cómo?', '¿A quién? ¿Has pensado en cómo?'),
        P('Have you ever hurt anyone when you were angry?', '¿Alguna vez le ha hecho daño a alguien cuando estaba enojado?', '¿Alguna vez le has hecho daño a alguien cuando estabas enojado?', null, { r: 'Spain: "enfadado".' }),
        P('Do you carry a weapon?', '¿Lleva algún arma?', '¿Llevas algún arma?'),
        P('Have you been in trouble with the police?', '¿Ha tenido problemas con la policía?', '¿Has tenido problemas con la policía?', 'Some patients fear this question because of immigration status; say why you ask and that it stays in the clinical record.'),
        P('Does your temper get out of control?', '¿Pierde el control cuando se enoja?', '¿Pierdes el control cuando te enojas?')
      ]
    },
    {
      id: 'deescalation', group: 'Risk', title: 'De-escalation with an agitated patient', draft: true,
      intro: 'Calm voice, simple words, respect. Offer choices. Keep yourself safe with an exit and staff nearby. Use usted unless the patient is a child or has asked for tú; respeto matters most when someone is losing control.',
      phrases: [
        P('I\'m here to help you.', 'Estoy aquí para ayudarle.', 'Estoy aquí para ayudarte.'),
        P('You are safe here.', 'Aquí está seguro.', 'Aquí estás seguro.', 'Use "segura" for a woman.'),
        P('Let\'s calm down first.', 'Primero vamos a calmarnos.', 'Primero vamos a calmarnos.'),
        P('Breathe slowly with me.', 'Respire despacio conmigo.', 'Respira despacio conmigo.'),
        P('I can see that you are very upset.', 'Veo que está muy alterado.', 'Veo que estás muy alterado.', 'Use "alterada" for a woman. "Molesto" (annoyed) is milder; "enojado" is angry.'),
        P('Tell me what you need.', 'Dígame qué necesita.', 'Dime qué necesitas.'),
        P('Would you like to sit down?', '¿Quiere sentarse?', '¿Quieres sentarte?'),
        P('Would you like some water?', '¿Quiere un poco de agua?', '¿Quieres un poco de agua?'),
        P('Please put that down.', 'Por favor, suelte eso.', 'Por favor, suelta eso.'),
        P('We will give you medicine to help you calm down.', 'Le vamos a dar un medicamento para ayudarle a calmarse.', 'Te vamos a dar un medicamento para ayudarte a calmarte.'),
        P('Would you prefer a tablet or an injection?', '¿Prefiere una pastilla o una inyección?', '¿Prefieres una pastilla o una inyección?', 'Offering a choice preserves dignity and often prevents restraint.'),
        P('No one will hurt you.', 'Nadie le va a hacer daño.', 'Nadie te va a hacer daño.')
      ]
    }
  ];
})();
