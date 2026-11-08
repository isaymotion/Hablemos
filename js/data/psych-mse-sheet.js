/* MSE interviewer sheet: the two-page Spanish MSE question sheet for the clinic and wards.
   Items are either { r: 'sectionId:index' } (an existing phrase from PSYCH_SECTIONS, shown with an HB mark)
   or { tl, en, b, arrow } written for the sheet itself (b = margin badge, e.g. the SIGECAPS letters).
   Formal register (usted) throughout. Practice phrasings for training, not validated translations.
   pages: array of pages, each an array of columns, each an array of section ids. pageSubtitles: one per page.
   STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician. */
window.PSYCH_MSE_SHEET = {
  id: 'mse-sheet',
  title: 'Guía del entrevistador: MSE en español',
  subtitle: 'Preguntas para la entrevista psiquiátrica y el examen del estado mental · Consulta externa y hospitalización · forma formal (usted)',
  reminder: 'No olvidar: orientación (tiempo, lugar, persona) · insight · juicio. Observar: apariencia, psicomotricidad, actitud, lenguaje, afecto, curso del pensamiento.',
  disclaimer: 'Frases de práctica para el entrenamiento, no traducciones validadas; adáptelas al paciente. HB = frase que está en Hablemos.',
  pageWord: 'Página',
  pageSubtitles: null,   // null = subtitle for page 1, reminder for page 2
  pages: [
    [['opening', 'mania'], ['depression'], ['suicide', 'hallucinations']],
    [['delusions', 'violence', 'behaviour'], ['clarify', 'substance', 'anxiety', 'closing', 'observe'], ['cognition', 'insight']]
  ],
  sections: [
    { id: 'opening', title: 'Apertura y rapport', en: 'Opening', ut: true, blocks: [
      { items: [
        { tl: 'Buenos días. Soy el doctor / la doctora ____, uno de los médicos de aquí.', en: 'Good morning. I\'m Dr. ____, one of the doctors here.', ut: true },
        { r: 'opening:1' }, { r: 'opening:3' },
        { tl: 'Le voy a hacer muchas preguntas. Algunas son un poco personales. No hay respuestas incorrectas.', en: 'I will ask many questions. Some may be personal. There are no wrong answers.', ut: true },
        { r: 'opening:8' },
        { tl: '¿Qué lo trae por aquí hoy? ¿De quién fue la idea de venir?', en: 'What brings you here today? Whose idea was it to come here?', ut: true },
        { tl: 'Cuénteme qué pasó. ¿Cuándo empezó: de repente o poco a poco?', en: 'Tell me what happened. When did it start: suddenly or gradually?', ut: true },
        { r: 'cc-hpi:10' }
      ] } ],
      note: 'Antes de los síntomas: ¿Estaba acompañado cuando pasó esto, o solo? Sueño, apetito, medicamentos (¿los sigue tomando? ¿cuándo los dejó?). Ofrezca intérprete certificado para consentimiento y decisiones.' },

    { id: 'depression', title: 'Ánimo deprimido + SIGECAPS', en: 'Major depressive episode: gate + 5 of 9, 2 weeks', ut: true, blocks: [
      { h: 'Gate', items: [ { r: 'depression:1' }, { r: 'depression:2' }, { r: 'depression:3' }, { r: 'depression:4' } ] },
      { h: 'SIGECAPS', items: [ { r: 'depression:5', b: 'S' }, { r: 'depression:7', b: 'I' }, { r: 'depression:8', b: 'G' }, { r: 'depression:9', b: 'E' }, { r: 'depression:10', b: 'C' }, { r: 'depression:11', b: 'A' }, { r: 'depression:12', b: 'P' }, { r: 'depression:13', b: 'S', arrow: '→ Suicidio' } ] },
      { h: 'Duración · deterioro · especificadores', items: [ { r: 'depression:16' }, { r: 'depression:17' }, { r: 'depression:14' }, { r: 'depression:15' }, { r: 'depression:18', arrow: '→ DIGFAST' }, { r: 'depression:19' }, { r: 'depression:20' }, { r: 'depression:21' } ] } ],
      note: 'Anote el ánimo con las palabras del paciente. Pregunte a todo paciente deprimido por episodios previos de ánimo elevado antes de recetar un antidepresivo. El PHQ-9 validado en español va en el expediente; estas líneas son para la entrevista.' },

    { id: 'suicide', title: 'Suicidio', en: 'Screen → explore. Ask directly.', risk: true, blocks: [
      { h: '1 · Tamizaje', items: [ { r: 'suicide:0' }, { r: 'suicide:1' }, { tl: '¿Ha pensado en quitarse la vida? ¿En suicidarse?', en: 'Have you thought about ending your life? About killing yourself?' } ] },
      { h: '2 · Si dice que sí: explorar', items: [ { tl: '¿Cuánto le dura? ¿Con qué frecuencia lo piensa?', en: 'How long does it last? How often do you think about it?' }, { r: 'suicide:5' }, { tl: '¿Tiene un plan? ¿Ha pensado en cómo lo haría?', en: 'Do you have a plan? Have you thought about how you would do it?' }, { r: 'suicide:11' }, { r: 'suicide:10' }, { tl: '¿Tiene acceso a pastillas, veneno, una cuerda, un cuchillo o un arma de fuego? ¿Hay armas en su casa?', en: 'Do you have access to pills, poison, a rope, a knife, or a gun? Are there guns in your home?' }, { tl: '¿Alguna vez ha intentado quitarse la vida? ¿Qué hizo? ¿Qué pasó después?', en: 'Have you ever tried to end your life before? What did you do? What happened afterwards?' }, { r: 'suicide:14' } ] },
      { h: '3 · Protección y cierre', items: [ { tl: '¿Qué lo ha detenido? ¿Qué le da razones para seguir adelante?', en: 'What has stopped you? What gives you a reason to keep going?' }, { r: 'suicide:18' } ] } ],
      note: 'Documente: deseo de muerte → ideación → plan → intención → medios → intentos previos → factores protectores. Línea 988 (opción 2 en español).' },

    { id: 'mania', title: 'Ánimo elevado / expansivo o irritable + DIGFAST', en: 'Mania: gate + 3 of 7 (4 if only irritable), 1 week · hypomania 4 days', ut: true, blocks: [
      { h: 'Gate', items: [ { r: 'mania:0' }, { r: 'mania:1' }, { r: 'mania:2' } ] },
      { h: 'DIGFAST', items: [ { r: 'mania:3', b: 'D' }, { r: 'mania:4', b: 'I' }, { r: 'mania:5', b: 'G' }, { r: 'mania:6', b: 'F' }, { r: 'mania:7', b: 'A' }, { r: 'mania:8', b: 'S' }, { r: 'mania:9', b: 'T' } ] },
      { h: 'Duración · gravedad · exclusiones', items: [ { r: 'mania:10' }, { r: 'mania:11' }, { r: 'mania:12' }, { r: 'mania:13' }, { r: 'mania:14' } ] } ],
      note: 'Hospitalización o psicosis = manía, dure lo que dure. Hipomanía: 4+ días, sin hospitalización, sin psicosis, notada por otros. MDQ validado en español para el expediente.' },

    { id: 'hallucinations', title: 'Alucinaciones', en: 'Perception', blocks: [
      { h: 'Tamizaje', items: [ { r: 'hallucinations:1' }, { r: 'hallucinations:2' }, { r: 'hallucinations:5' }, { tl: '¿Huele, saborea o siente en el cuerpo algo fuera de lo normal?', en: 'Do you smell, taste, or feel anything unusual on your body?' } ] },
      { h: 'Si dice que sí: explorar las voces', items: [ { tl: '¿Es una voz o varias? ¿De hombre o de mujer?', en: 'Is it one voice or many? A man\'s voice or a woman\'s?' }, { tl: '¿Sabe de quién es la voz?', en: 'Do you know whose voice it is?' }, { r: 'hallucinations:10' }, { r: 'hallucinations:11' }, { tl: '¿Lo critican, o comentan lo que está haciendo?', en: 'Do they criticize you, or comment on what you are doing?' }, { tl: '¿La voz le dice que haga cosas? ¿Le obedece?', en: 'Does the voice tell you to do things? Do you obey it?', arrow: '→ Riesgo' }, { r: 'hallucinations:9' }, { tl: '¿Cuándo pasa: despierto, o solo al dormirse o al despertar?', en: 'When does it happen: while awake, or only when falling asleep or waking up?' }, { r: 'substance:9' } ] } ],
      note: 'Observar: ¿responde a estímulos internos? Ver u oír a un familiar fallecido durante el duelo no es automáticamente una alucinación; pregunte si la familia comparte la experiencia.' },

    { id: 'behaviour', title: 'Enojo, conducta, control de impulsos', en: 'Behaviour change', blocks: [
      { items: [ { tl: '¿Ha notado un cambio en su conducta en los últimos meses?', en: 'Have you noticed a change in your behaviour these past months?' }, { tl: '¿Se enoja o discute con los demás con más facilidad?', en: 'Do you get angry or argue with others more easily?' }, { tl: '¿Alguna vez ha lastimado a alguien, o roto cosas, por enojo?', en: 'Have you ever hurt someone, or broken things, out of anger?' }, { tl: '¿Ha hecho cosas por impulso, sin pensarlo antes?', en: 'Have you done things on impulse, without thinking first?' }, { r: 'violence:5' } ] } ] },

    { id: 'delusions', title: 'Delirios', en: 'Thought content', blocks: [
      { items: [ { r: 'delusions:0', b: 'Per' }, { tl: '¿Alguien lo sigue o lo vigila? ¿Conspira en su contra?', en: 'Is someone following or watching you? Plotting against you?', b: 'Per' }, { r: 'delusions:6', b: 'Ref' }, { r: 'delusions:7', b: 'Gr' }, { r: 'delusions:8', b: 'Dios' }, { r: 'delusions:9', b: 'Pens' }, { tl: '¿Alguien le mete pensamientos que no son suyos? ¿Se los quita?', en: 'Does someone put thoughts in your head that aren\'t yours? Take your thoughts away?', b: 'Pens' }, { r: 'delusions:13', b: 'Ctrl' }, { r: 'delusions:16', b: 'Celos' }, { tl: '¿Tiene alguna enfermedad en el cuerpo que los médicos no encuentran?', en: 'Do you have an illness in your body that doctors can\'t find?', b: 'Som' } ] },
      { h: 'Convicción y conducta', items: [ { tl: '¿Qué tan seguro está de que es cierto? ¿Podría haber otra explicación?', en: 'How sure are you that this is true? Could there be another explanation?', b: 'Prueba' }, { tl: '¿Qué ha hecho por esto? ¿Qué piensa hacer?', en: 'What have you done because of this? What do you plan to do?', b: 'Plan' } ] } ],
      note: 'Delirio = fijo, falso, no compartido por la cultura o la religión. La creencia familiar en brujería, mal de ojo o "un trabajo" es una explicación cultural, no un delirio del paciente.' },

    { id: 'violence', title: 'Violencia / homicidio', en: 'Violence risk', risk: true, ut: true, blocks: [
      { items: [ { r: 'violence:0' }, { tl: '¿A quién? ¿Ha pensado en cómo? ¿Tiene la intención de hacerlo?', en: 'Who? Have you thought about how? Do you intend to do it?' }, { r: 'violence:2' }, { r: 'violence:3' }, { r: 'violence:4' } ] } ],
      note: 'Si hay una víctima identificada: quién, cómo, cuándo, acceso a armas. Escale, documente y siga el deber de advertir de su estado.' },

    { id: 'clarify', title: 'Aclarar y dar seguimiento', en: 'Clarifying', ut: true, blocks: [
      { items: [ { tl: '¿Me puede contar más sobre eso? ¿Qué quiere decir con eso?', en: 'Can you tell me more about that? What do you mean by that?' }, { tl: '¿Ha mejorado o empeorado? ¿Le había pasado antes?', en: 'Has it gotten better or worse? Has this happened before?' }, { tl: '¿Cómo ha afectado su trabajo, sus estudios o su familia?', en: 'How has this affected your work, studies, or family?' }, { r: 'cc-hpi:11' }, { tl: '¿Sigue tomando su medicamento? ¿Cuándo lo dejó y por qué?', en: 'Are you still taking your medicine? When did you stop, and why?' } ] } ] },

    { id: 'substance', title: 'Alcohol y drogas', en: 'Substance use', ut: true, blocks: [
      { items: [ { tl: '¿Toma alcohol? ¿Qué toma: cerveza, vino, tequila, licor? ¿Cuántas en una ocasión? ¿Cuántos días a la semana?', en: 'Do you drink alcohol? What: beer, wine, tequila, liquor? How many in one sitting? How many days a week?' }, { r: 'substance:6' }, { r: 'substance:5' }, { tl: '¿Alguna vez ha usado marihuana, metanfetamina, cocaína, o pastillas no recetadas? ¿Con qué frecuencia y cuándo fue la última vez?', en: 'Have you ever used marijuana, methamphetamine, cocaine, or non-prescribed pills? How often, and when was the last time?' }, { r: 'substance:10' }, { r: 'substance:12' } ] } ] },

    { id: 'anxiety', title: 'Ansiedad', en: 'Anxiety screen', ut: true, blocks: [
      { items: [ { tl: '¿Se preocupa mucho? ¿Le cuesta controlar la preocupación?', en: 'Do you worry a lot? Is it hard to control the worrying?' }, { r: 'anxiety:2' }, { r: 'anxiety:3' }, { tl: '¿Le vuelven pensamientos aunque no quiera? ¿Tiene que lavarse, revisar o contar una y otra vez?', en: 'Do thoughts keep coming back even if you don\'t want them? Do you have to wash, check, or count over and over?' } ] } ] },

    { id: 'closing', title: 'Cierre', en: 'Closing', ut: true, blocks: [
      { items: [ { r: 'closing:0' }, { r: 'closing:1' }, { r: 'closing:2' }, { tl: 'Vamos a ayudarle a mejorar. Nos vemos mañana. Cuídese mucho.', en: 'We will help you get better. I will see you again tomorrow. Take care.' } ] } ] },

    { id: 'observe', title: 'Observar, no preguntar', en: 'Observed MSE', obs: [
      ['Apariencia', 'edad aparente, complexión, ropa, aseo (bien / regular / descuidado)'],
      ['Psicomotricidad', 'agitación, lentitud, inquietud, temblor, movimientos anormales'],
      ['Actitud / contacto visual', 'cooperador, reservado, suspicaz, hostil; bajar la mirada puede ser respeto, no "guarded"'],
      ['Lenguaje', 'espontaneidad, cantidad, velocidad, volumen, presión; cambiar entre español e inglés es normal, no un hallazgo'],
      ['Afecto', 'rango, intensidad, estabilidad, congruencia con el ánimo'],
      ['Curso del pensamiento', 'lineal, circunstancial, tangencial, laxo, fuga de ideas, bloqueo'],
      ['Percepción', '¿responde a estímulos internos?']
    ] },

    { id: 'cognition', title: 'Cognición', en: 'Orientation · attention · memory', ut: true, blocks: [
      { items: [ { r: 'mse-cog:0' } ] },
      { h: 'Orientación: tiempo, lugar, persona', items: [ { tl: '¿Qué fecha es hoy? ¿Qué día? ¿Mes y año? ¿Es de mañana, de tarde o de noche?', en: 'What is the date today? The day? Month and year? Is it morning, afternoon, or evening?' }, { tl: '¿Dónde estamos ahora? ¿Qué lugar es este, qué hospital?', en: 'Where are we right now? What place / what hospital is this?' }, { tl: '¿Cuál es su nombre completo? ¿Cuántos años tiene? ¿Quién soy yo? ¿Qué hago aquí?', en: 'What is your full name? How old are you? Who am I? What do I do here?' } ] },
      { h: 'Atención', items: [ { tl: 'Cuente hacia atrás desde cien, de siete en siete. (100, 93, 86, 79, 72)', en: 'Count backwards from 100 by sevens. (100, 93, 86, 79, 72)' }, { tl: 'Diga los meses del año al revés, desde diciembre. / Repita: tres, ocho, dos, cinco.', en: 'Say the months of the year backwards, from December. / Repeat: 3, 8, 2, 5.' } ] },
      { h: 'Memoria', items: [ { tl: 'Recuerde estas tres palabras: pelota, árbol, llave. Repítalas. … (a los 3–5 min) ¿Cuáles eran las tres palabras?', en: 'Remember these three words: ball, tree, key. Please repeat them. … (after 3–5 min) What were the three words?' }, { tl: '¿Qué desayunó hoy? ¿Quién es el presidente de los Estados Unidos?', en: 'What did you eat for breakfast? Who is the President of the United States now?' } ] },
      { h: 'Abstracción', items: [ { tl: '¿En qué se parecen un plátano y una naranja? ¿Un carro y un autobús?', en: 'How are a banana and an orange alike? A car and a bus?' }, { r: 'mse-abstract:2' } ] } ],
      note: 'Pregunte primero la escolaridad: con poca escuela, prefiera los meses al revés y tareas cotidianas en vez de restar de siete en siete o deletrear.' },

    { id: 'insight', title: 'Insight y juicio', en: '', ut: true, blocks: [
      { h: 'Insight (grado 1–6)', items: [ { tl: '¿Cree que está enfermo? ¿Qué cree que le está pasando?', en: 'Do you think you are sick? What do you think is happening to you?' }, { r: 'mse-abstract:8' }, { tl: '¿Cree que un medicamento podría ayudarle? ¿Necesita ayuda?', en: 'Do you think medicine could help you? Do you need help?' } ] },
      { h: 'Juicio', items: [ { r: 'mse-abstract:5' }, { r: 'mse-abstract:6' }, { r: 'mse-abstract:10' } ] } ],
      note: 'Anote el grado y una breve razón con palabras del paciente. Juicio social = decisiones reales antes del ingreso.' }
  ]
};
