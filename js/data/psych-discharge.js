/* Discharge summary assessment, field by field.
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Follows the structure of a generic inpatient psychiatric discharge summary (discharge MSE, thought content, cognition,
   sleep, adverse events, diagnosis, medications, aftercare). For each field: what to assess, Spanish questions to ask,
   likely answers, and standard wording to document. No patient, staff, or hospital information is stored.
   Field names stay `tl`, `f`, `c` for engine compatibility: f = usted (formal), c = tú (informal). `n` = clinician note.
   The questions are also added as the "discharge" phrase section (flashcards, search, audio pack, handouts).
   Shape: window.PSYCH_DISCHARGE = { form, title, fields: [ { id, group, label, kind, assess, ask: [ {en,f,c,n?,answers?} ],
   refs: ['discharge:index'], picks: [string] } ]   kind: observe | ask | explain | sign. */
(function () {
  const P = (en, f, c, extra) => Object.assign({ en, f, c }, extra || {});
  const FIELDS = [
    { id: 'behavior', group: 'Discharge MSE', label: 'Behavior/Attitude', kind: 'observe',
      assess: 'Observe throughout the interview: grooming, eye contact, psychomotor activity, cooperation, and attitude toward the examiner. Compare with the admission MSE.',
      ask: [
        P('How are you today?', '¿Cómo está hoy?', '¿Cómo estás hoy?'),
        P('May I talk with you for a few minutes before you go home?', '¿Puedo hablar con usted unos minutos antes de que se vaya a casa?', '¿Puedo hablar contigo unos minutos antes de que te vayas a casa?', { r: 'hablar / platicar (Mexico)' })
      ],
      picks: ['Calm', 'Cooperative', 'Good eye contact', 'Fairly groomed', 'Well groomed', 'Guarded', 'Restless', 'Withdrawn', 'Irritable', 'Psychomotor retardation', 'Overfamiliar'] },
    { id: 'mood', group: 'Discharge MSE', label: 'Mood/Affect', kind: 'ask',
      assess: 'Mood is what the patient reports: quote their words in Spanish with a translation. Affect is what you observe: range, intensity, stability, and whether it matches the mood.',
      ask: [
        P('How have you been feeling these past few days?', '¿Cómo se ha sentido estos últimos días?', '¿Cómo te has sentido estos últimos días?', { answers: [['Ya estoy mejor, doctor. Me siento más tranquilo.', 'I\'m better now, Doctor. I feel calmer.'], ['Todavía me siento un poco triste.', 'I still feel a bit sad.']] }),
        P('Are you happy, sad, worried, or angry?', '¿Se siente contento, triste, preocupado o enojado?', '¿Te sientes contento, triste, preocupado o enojado?', { n: 'Use contenta, preocupada, enojada for a woman.' }),
        P('From 1 to 10, with 10 the best, how is your mood today?', 'Del 1 al 10, donde 10 es lo mejor, ¿cómo está su ánimo hoy?', 'Del 1 al 10, donde 10 es lo mejor, ¿cómo está tu ánimo hoy?')
      ],
      picks: ['Euthymic mood', 'Dysphoric mood', 'Anxious mood', 'Irritable mood', 'Euphoric mood', 'Congruent affect', 'Incongruent affect', 'Full range affect', 'Restricted affect', 'Blunted affect', 'Flat affect', 'Labile affect', 'Mildly elevated mood'] },
    { id: 'process', group: 'Discharge MSE', label: 'Thought Process', kind: 'observe',
      assess: 'Judge from how the patient tells a story: is it goal-directed, relevant, and coherent? Note circumstantiality, tangentiality, loose associations, flight of ideas, or blocking.',
      ask: [
        P('Tell me how you came to be admitted and what happened during your stay.', 'Cuénteme cómo llegó a ser ingresado aquí y qué pasó mientras estuvo internado.', 'Cuéntame cómo llegaste a ser ingresado aquí y qué pasó mientras estuviste internado.', { n: 'Use ingresada / internada for a woman.' }),
        P('What are your plans when you go home?', '¿Qué planes tiene cuando regrese a casa?', '¿Qué planes tienes cuando regreses a casa?')
      ],
      picks: ['Goal-directed', 'Coherent and relevant', 'Some circumstantiality', 'Some tangentiality', 'Loose associations', 'Flight of ideas', 'Thought blocking'] },
    { id: 'positive', group: 'Thought Content', label: 'Positive symptoms', kind: 'ask',
      assess: 'Re-ask about the hallucinations and delusions noted on admission. Ask how strongly the patient still believes the earlier ideas, and watch for responding to internal stimuli.',
      ask: [
        P('Do you still hear voices that others don\'t hear?', '¿Todavía oye voces que los demás no oyen?', '¿Todavía oyes voces que los demás no oyen?', { answers: [['Ya no.', 'Not anymore.'], ['A veces, pero ya se oyen más bajito.', 'Sometimes, but they\'re faint now.']] }),
        P('Is anyone still whispering to you?', '¿Todavía hay alguien que le susurra?', '¿Todavía hay alguien que te susurra?'),
        P('Do you still see shadows or things others don\'t see?', '¿Todavía ve sombras o cosas que los demás no ven?', '¿Todavía ves sombras o cosas que los demás no ven?'),
        P('Do you still feel that someone wants to harm you?', '¿Todavía siente que alguien quiere hacerle daño?', '¿Todavía sientes que alguien quiere hacerte daño?'),
        P('What do you think now about what you believed before you were admitted?', '¿Qué piensa ahora de lo que creía antes de ser ingresado?', '¿Qué piensas ahora de lo que creías antes de ser ingresado?', { n: 'Name the specific belief from admission, e.g., "que los vecinos lo estaban vigilando". Use ingresada for a woman.' })
      ],
      picks: ['No hallucinations elicited', 'Not responding to internal stimuli', 'Residual auditory hallucinations, less frequent', 'Residual persecutory ideas, less intense', 'Delusions no longer held', 'Delusions persist', 'Grandiose ideas, less intense', 'Responding to internal stimuli', 'Command auditory hallucinations, persist (reassess discharge)'] },
    { id: 'negative', group: 'Thought Content', label: 'Negative symptoms', kind: 'ask',
      assess: 'Ask about and observe motivation, interest, social contact, speech amount, emotional expression, and self-care. Unit staff observations help here.',
      ask: [
        P('Do you enjoy the activities here again?', '¿Ya vuelve a disfrutar las actividades de aquí?', '¿Ya vuelves a disfrutar las actividades de aquí?'),
        P('Do you talk with the other patients?', '¿Habla con los otros pacientes?', '¿Hablas con los otros pacientes?', { r: 'habla / platica (Mexico)' }),
        P('Do you feel like doing things?', '¿Tiene ganas de hacer cosas?', '¿Tienes ganas de hacer cosas?'),
        P('Do you bathe and tidy yourself every day?', '¿Se baña y se arregla todos los días?', '¿Te bañas y te arreglas todos los días?')
      ],
      picks: ['None noted', 'Mild blunting', 'Alogia (poverty of speech)', 'Avolition', 'Anhedonia', 'Asociality', 'Poor self-care'] },
    { id: 'suicide', group: 'Thought Content', label: 'Suicidal ideas', kind: 'ask', risk: true,
      assess: 'Ask directly. Cover current ideation, plan, intent, and the plan for what the patient will do if the thoughts return at home. Any active ideation means discharge readiness must be reassessed.',
      ask: [
        P('In the past few days, have you thought of hurting yourself or killing yourself?', 'En estos últimos días, ¿ha pensado en hacerse daño o en quitarse la vida?', 'En estos últimos días, ¿has pensado en hacerte daño o en quitarte la vida?'),
        P('Do you have any plan to end your life?', '¿Tiene algún plan para quitarse la vida?', '¿Tienes algún plan para quitarte la vida?'),
        P('If those thoughts come back at home, what will you do and whom will you tell?', 'Si esos pensamientos vuelven cuando esté en casa, ¿qué va a hacer y a quién se lo va a decir?', 'Si esos pensamientos vuelven cuando estés en casa, ¿qué vas a hacer y a quién se lo vas a decir?')
      ],
      picks: ['None', 'Denies suicidal ideation, plan, or intent', 'Passive death wish, no plan or intent', 'Active suicidal ideation (reassess discharge)'] },
    { id: 'homicide', group: 'Thought Content', label: 'Homicidal ideas', kind: 'ask', risk: true,
      assess: 'Ask about thoughts of harming others, specific targets, and grudges. Any active ideation means discharge readiness must be reassessed.',
      ask: [
        P('Have you had thoughts of hurting anyone?', '¿Ha tenido pensamientos de hacerle daño a alguien?', '¿Has tenido pensamientos de hacerle daño a alguien?'),
        P('Is there anyone you are angry at and want to get back at?', '¿Hay alguien con quien esté enojado y de quien quiera desquitarse?', '¿Hay alguien con quien estés enojado y de quien quieras desquitarte?', { n: 'Use enojada for a woman.' })
      ],
      picks: ['None', 'Denies homicidal ideation', 'Homicidal ideation present (reassess discharge)'] },
    { id: 'orientation', group: 'Cognition', label: 'Orientation', kind: 'ask',
      assess: 'Time, place, and person. Record as oriented ×3 or note what is missed.',
      ask: [
        P('What day and date is it today?', '¿Qué día es hoy? ¿Qué fecha?', '¿Qué día es hoy? ¿Qué fecha?'),
        P('Where are we right now?', '¿Dónde estamos ahora?', '¿Dónde estamos ahora?'),
        P('Who am I?', '¿Quién soy yo?', '¿Quién soy yo?')
      ],
      picks: ['Oriented to time, place, and person (×3)', 'Disoriented to time', 'Disoriented to place', 'Disoriented to person'] },
    { id: 'memory', group: 'Cognition', label: 'Memory', kind: 'ask',
      assess: 'Immediate (repeat three words), recent (recall after 5 minutes, breakfast, date of admission), and remote (birthplace, school).',
      ask: [
        P('Remember these three words: ball, tree, key. Please repeat them.', 'Recuerde estas tres palabras: pelota, árbol, llave. Repítalas, por favor.', 'Recuerda estas tres palabras: pelota, árbol, llave. Repítelas, por favor.'),
        P('What were the three words I asked you to remember?', '¿Cuáles eran las tres palabras que le pedí que recordara?', '¿Cuáles eran las tres palabras que te pedí que recordaras?'),
        P('What did you eat for breakfast this morning?', '¿Qué desayunó hoy en la mañana?', '¿Qué desayunaste hoy en la mañana?'),
        P('When were you admitted here?', '¿Cuándo lo ingresaron aquí?', '¿Cuándo te ingresaron aquí?', { n: 'Use "la ingresaron" for a woman.' }),
        P('Where were you born?', '¿Dónde nació?', '¿Dónde naciste?')
      ],
      picks: ['Intact immediate, recent, and remote memory', 'Impaired immediate memory', 'Impaired recent memory', 'Impaired remote memory'] },
    { id: 'insight', group: 'Cognition', label: 'Insight', kind: 'ask',
      assess: 'Awareness of illness, its cause, and the need for treatment. Grade 1–6: 1 complete denial; 2 slight awareness, still denying; 3 aware but blames others or outside factors; 4 aware the cause is something unknown in oneself; 5 intellectual insight; 6 true emotional insight.',
      ask: [
        P('Why were you admitted here?', '¿Por qué lo ingresaron aquí?', '¿Por qué te ingresaron aquí?', { n: 'Use "la ingresaron" for a woman.', answers: [['Porque no dormía y oía voces.', 'Because I wasn\'t sleeping and I heard voices.'], ['Mi familia me trajo nada más. Yo no estoy enfermo.', 'My family just brought me. I\'m not sick.']] }),
        P('Do you think you have an illness?', '¿Cree que tiene una enfermedad?', '¿Crees que tienes una enfermedad?'),
        P('Do you still need to take medicine after you go home? Why?', '¿Todavía necesita tomar el medicamento cuando esté en casa? ¿Por qué?', '¿Todavía necesitas tomar el medicamento cuando estés en casa? ¿Por qué?'),
        P('What could happen if you stop your medicine?', '¿Qué podría pasar si deja de tomar el medicamento?', '¿Qué podría pasar si dejas de tomar el medicamento?')
      ],
      picks: ['Good', 'Fair', 'Poor', 'Grade 1: complete denial', 'Grade 2: slight awareness', 'Grade 3: blames others/external factors', 'Grade 4: aware, cause unknown in self', 'Grade 5: intellectual insight', 'Grade 6: true emotional insight'] },
    { id: 'judgment', group: 'Cognition', label: 'Judgment', kind: 'ask',
      assess: 'Test judgment (hypothetical situations) and social judgment (realistic plans for problems after discharge).',
      ask: [
        P('What will you do if you run out of medicine?', '¿Qué va a hacer si se le acaba el medicamento?', '¿Qué vas a hacer si se te acaba el medicamento?'),
        P('If the voices come back at home, what will you do?', 'Si las voces vuelven cuando esté en casa, ¿qué va a hacer?', 'Si las voces vuelven cuando estés en casa, ¿qué vas a hacer?'),
        P('If you smelled smoke in a crowded cinema, what would you do?', 'Si oliera humo en un cine lleno de gente, ¿qué haría?', 'Si olieras humo en un cine lleno de gente, ¿qué harías?')
      ],
      picks: ['Good', 'Fair', 'Poor', 'Intact test judgment', 'Intact social judgment', 'Impaired social judgment'] },
    { id: 'sleep', group: 'Other', label: 'Sleep', kind: 'ask',
      assess: 'Hours, onset, waking at night, and daytime sleepiness (possible sedation). Check the unit sleep chart.',
      ask: [
        P('How is your sleep? How many hours?', '¿Cómo está durmiendo? ¿Cuántas horas?', '¿Cómo estás durmiendo? ¿Cuántas horas?'),
        P('Do you wake up in the middle of the night?', '¿Se despierta a media noche?', '¿Te despiertas a media noche?'),
        P('Are you sleepy during the day?', '¿Tiene sueño durante el día?', '¿Tienes sueño durante el día?')
      ],
      picks: ['Good', 'Fair', 'Poor', '7–8 hours, uninterrupted', 'Difficulty initiating sleep', 'Frequent awakenings', 'Daytime sedation', 'Reduced need for sleep'] },
    { id: 'adverse', group: 'Other', label: 'Adverse event', kind: 'ask',
      assess: 'Medication side effects, medical illness, falls or injuries, and any agitation needing restraint during the stay.',
      ask: [
        P('Is the medicine causing anything unpleasant: stiffness, shaking, sleepiness, dizziness, restlessness?', '¿El medicamento le está causando algo molesto: rigidez, temblor, sueño, mareo o inquietud?', '¿El medicamento te está causando algo molesto: rigidez, temblor, sueño, mareo o inquietud?'),
        P('Did you get sick or get hurt while you were here?', '¿Se enfermó o se lastimó mientras estuvo aquí?', '¿Te enfermaste o te lastimaste mientras estuviste aquí?')
      ],
      picks: ['None', 'Extrapyramidal symptoms', 'Akathisia', 'Sedation', 'Weight gain', 'Medical illness during admission', 'Fall or injury', 'Agitation requiring restraint', 'Tremor', 'Withdrawal symptoms'] },
    { id: 'diagnosis', group: 'Plan', label: 'Diagnosis', kind: 'explain',
      assess: 'Write the diagnosis with course specifiers (e.g., multiple episodes; currently in acute episode, partial remission, or full remission) and other comorbidities. Explain it to the patient and family in plain words.',
      ask: [
        P('Your illness is called ___. It is treatable.', 'Su enfermedad se llama ___. Tiene tratamiento.', 'Tu enfermedad se llama ___. Tiene tratamiento.'),
        P('This illness affects thinking and can make a person hear or believe things that are not real.', 'Esta enfermedad afecta el pensamiento y puede hacer que una persona oiga o crea cosas que no son reales.', 'Esta enfermedad afecta el pensamiento y puede hacer que una persona oiga o crea cosas que no son reales.'),
        P('It is not your fault, and it is not caused by a curse.', 'No es culpa suya, y no es brujería ni un castigo.', 'No es culpa tuya, y no es brujería ni un castigo.', { n: 'Patients or families may attribute illness to brujería, mal de ojo, or a punishment from God. Acknowledge the belief respectfully before explaining.' })
      ],
      picks: ['Schizophrenia, multiple episodes, currently in acute episode', 'Schizophrenia, multiple episodes, currently in partial remission', 'Schizophrenia, first episode, currently in acute episode', 'Bipolar I disorder, current episode manic', 'Major depressive disorder, recurrent', 'Other comorbid: ___', 'Bipolar I disorder, current or most recent episode manic, in partial remission', 'Methamphetamine-induced psychotic disorder, with ___ use disorder', 'Schizophrenia, first episode, currently in partial remission'] },
    { id: 'medications', group: 'Plan', label: 'Medications', kind: 'explain',
      assess: 'Write each drug with dose, form, and schedule, including long-acting injectables and their interval. Confirm with teach-back, and check that the patient and family can get and afford the medicines (pharmacy, insurance or patient-assistance program).',
      ask: [
        P('These are your medicines for home: ___, once a day, every night.', 'Estos son sus medicamentos para la casa: ___, una vez al día, cada noche.', 'Estos son tus medicamentos para la casa: ___, una vez al día, cada noche.'),
        P('Your injection is every ___ weeks. Your next one is on ___.', 'Su inyección es cada ___ semanas. La próxima es el ___.', 'Tu inyección es cada ___ semanas. La próxima es el ___.'),
        P('Can you tell me how you will take your medicines?', '¿Me puede decir cómo va a tomar sus medicamentos?', '¿Me puedes decir cómo vas a tomar tus medicamentos?'),
        P('Where will you get your medicines? Can you afford them?', '¿Dónde va a conseguir sus medicamentos? ¿Puede pagarlos?', '¿Dónde vas a conseguir tus medicamentos? ¿Puedes pagarlos?'),
        P('Don\'t stop the medicine even when you feel well.', 'No deje de tomar el medicamento aunque ya se sienta bien.', 'No dejes de tomar el medicamento aunque ya te sientas bien.')
      ],
      picks: ['Olanzapine ___ mg tab, 1 tab at bedtime', 'Haloperidol decanoate ___ mg IM every 4 weeks', 'Paliperidone palmitate ___ mg IM every month', 'Aripiprazole LAI ___ mg IM every month', 'Risperidone ___ mg tab, ___', 'Benztropine ___ mg tab, ___', 'Lithium carbonate ___ mg tab, ___', 'Divalproex sodium ___ mg tab, ___', 'Quetiapine ___ mg tab, ___', 'Sertraline ___ mg tab, ___', 'Teach-back done, correct', 'Family supervises medication', 'Teach-back incorrect, re-taught', 'Naloxone kit given and taught'] },
    { id: 'aftercare', group: 'Plan', label: 'Aftercare Follow-up', kind: 'explain',
      assess: 'Follow-up date and place, long-acting injectable schedule, who will supervise at home, warning signs of relapse, crisis contacts, interpreter needs, or transfer details if not going home.',
      ask: [
        P('Please come back for your check-up on ___.', 'Por favor, regrese a su cita de seguimiento el ___.', 'Por favor, regresa a tu cita de seguimiento el ___.'),
        P('Who at home will help you remember your medicine?', '¿Quién en casa le va a ayudar a recordar su medicamento?', '¿Quién en casa te va a ayudar a recordar tu medicamento?'),
        P('Come back right away if you can\'t sleep, the voices return, or you think of hurting yourself or others.', 'Regrese de inmediato si no puede dormir, si vuelven las voces o si piensa en hacerse daño o hacerle daño a otros.', 'Regresa de inmediato si no puedes dormir, si vuelven las voces o si piensas en hacerte daño o hacerle daño a otros.'),
        P('You can call or text 988 any time, also in Spanish.', 'Puede llamar o enviar un mensaje de texto al 988 a cualquier hora, también en español.', 'Puedes llamar o enviar un mensaje de texto al 988 a cualquier hora, también en español.', { n: '988 is the US Suicide and Crisis Lifeline (press 2 or text AYUDA for Spanish). Outside the US, replace with the local line from data/hospital.js (window.HOSPITAL.crisis).' })
      ],
      picks: ['Outpatient follow-up in 1–2 weeks', 'Follow-up appointment date and clinic given in writing', 'Long-acting injectable schedule given', 'Family oriented on warning signs', 'Interpreter arranged for follow-up', 'Referred to ___', 'Transferred to ___ unit due to ___', 'Safety plan made with patient and family', 'Laboratory tests before follow-up: ___', 'Naloxone kit and MOUD referral', 'Discharge deferred: ___'] },
    { id: 'by', group: 'Plan', label: 'By', kind: 'sign',
      assess: 'Signed by the attending psychiatrist with name and license number. Sign on the paper form or in the EHR; the app does not record names.', ask: [], picks: [] }
  ];

  const sec = { id: 'discharge', group: 'Management', title: 'Discharge assessment', intro: 'Questions for each field of the discharge summary: discharge MSE, sleep, adverse events, diagnosis, medications, and aftercare.', draft: true, phrases: [] };
  FIELDS.forEach((f) => { f.refs = f.ask.map((p) => { sec.phrases.push(p); return 'discharge:' + (sec.phrases.length - 1); }); });
  // Phrase indexes are flashcard IDs, so later questions are APPENDED here (end of the section),
  // and to the end of their field's ask list. Never insert into FIELDS[].ask above.
  const MORE = [
    ['positive', P('Do the voices still tell you to hurt yourself or others?', '¿Las voces todavía le dicen que se haga daño o que le haga daño a otros?', '¿Las voces todavía te dicen que te hagas daño o que le hagas daño a otros?', { n: 'Ask this whenever voices were present on admission. Persisting command hallucinations mean discharge readiness must be reassessed.' })],
    ['sleep', P('Do you feel unusually energetic, as if you don\'t need to sleep?', '¿Se siente con muchísima energía, como si no necesitara dormir?', '¿Te sientes con muchísima energía, como si no necesitaras dormir?', { n: 'Reduced need for sleep is an early sign of mania returning.' })],
    ['judgment', P('If your friends offer you meth or alcohol, what will you do?', 'Si sus amigos le ofrecen cristal o alcohol, ¿qué va a hacer?', 'Si tus amigos te ofrecen cristal o alcohol, ¿qué vas a hacer?', { r: 'cristal (Mexico, US Southwest) / meta / hielo (ice)' })],
    ['medications', P('Lithium needs blood tests. If you vomit, have diarrhea, shake a lot, or can\'t walk straight, come back right away.', 'El litio necesita análisis de sangre. Si vomita, tiene diarrea, tiembla mucho o no puede caminar derecho, regrese de inmediato.', 'El litio necesita análisis de sangre. Si vomitas, tienes diarrea, tiemblas mucho o no puedes caminar derecho, regresa de inmediato.', { n: 'Also: drink enough water, and avoid suddenly eating much more or much less salt.' })],
    ['aftercare', P('We think it is safer for her to stay a few more days, because ___.', 'Creemos que es más seguro que se quede unos días más, porque ___.', 'Creemos que es más seguro que se quede unos días más, porque ___.', { n: 'Said to the family when discharge is deferred. "Se quede" works for him or her; give the reason in plain words.' })]
  ];
  MORE.forEach(([id, p]) => { const f = FIELDS.find((x) => x.id === id); f.ask.push(p); sec.phrases.push(p); f.refs.push('discharge:' + (sec.phrases.length - 1)); });
  (window.PSYCH_SECTIONS = window.PSYCH_SECTIONS || []).push(sec);
  (window.PSYCH_FLOW_EXTRA = window.PSYCH_FLOW_EXTRA || []).push({ id: 'discharge', title: 'Discharge assessment', goal: 'Questions for each discharge summary field.', sections: ['discharge'], key: FIELDS.filter((f) => f.refs.length).map((f) => f.refs[0]) });
  window.PSYCH_DISCHARGE = { form: '', title: 'Discharge Summary', fields: FIELDS };
})();
