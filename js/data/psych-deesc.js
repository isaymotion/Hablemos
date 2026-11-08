/* De-escalation process checklist.
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Structure follows a generic inpatient nursing de-escalation checklist (behaviors observed → 12 steps → escalation →
   what happens if it fails), with Spanish phrases for each step. Field names stay `tl`, `f`, `c` for engine
   compatibility: `tl` = Spanish text; in phrase objects f = usted (formal), c = tú (informal).
   No patient, staff, or hospital information is stored here. Roles are generic (first responder, charge nurse,
   physician on duty); follow your own hospital's policy.
   New phrases are APPENDED to the "deescalation" section (indexes 0–11 are the originals and are never touched) so they
   also appear in flashcards, search, and handouts. Phrase indexes are flashcard IDs: never insert, only append.
   Shape: window.PSYCH_DEESC = {
     behaviors: [ { en, tl, say } ],                  // observed behaviors; tl = Spanish label, say = Spanish sentence about the patient
     steps:     [ { en, tip, say: ['sectionId:index'] } ],   // handout.js/deesc.js read say[0] as a phrase ref
     after:     [ { title, who, points: [string], say: ['sectionId:index'] } ],
     escalation:[ [abbr, role, description] ],
     escLine:   string,                               // one sentence used by the checklist and the pocket card
     signatures:[ string ],
     debrief:   ['sectionId:index', 'sectionId:index'], // the two debrief lines the pocket card prints
     outcomes:  [ [id, label] ] } */
(function () {
  const sec = (window.PSYCH_SECTIONS || []).find((s) => s.id === 'deescalation');
  if (!sec) return;
  const idx = (en) => sec.phrases.findIndex((p) => p.en === en);
  const add = (p) => { let i = idx(p.en); if (i < 0) { sec.phrases.push(p); i = sec.phrases.length - 1; } return 'deescalation:' + i; };
  const use = (en) => 'deescalation:' + idx(en);

  window.PSYCH_DEESC = {
    behaviors: [
      { en: 'Restlessness', tl: 'Inquietud', say: 'No se queda quieto / quieta.' },
      { en: 'Irritability', tl: 'Irritabilidad', say: 'Está irritable, se molesta por todo.' },
      { en: 'Anger with loud voice', tl: 'Enojo y gritos', say: 'Está enojado / enojada y grita.' },
      { en: 'Pacing back and forth', tl: 'Camina de un lado a otro', say: 'Camina de un lado a otro sin parar.' },
      { en: 'Agitation', tl: 'Agitación', say: 'Está muy agitado / agitada, no se puede controlar.' },
      { en: 'Threatening', tl: 'Amenazas', say: 'Amenaza con hacer daño.' },
      { en: 'Demanding', tl: 'Exigente', say: 'Exige que le hagan caso de inmediato.' },
      { en: 'Hostility', tl: 'Hostilidad', say: 'Se pone hostil con todo el que se acerca.' },
      { en: 'Others (specify), e.g., lifting or throwing objects', tl: 'Levanta o avienta objetos', say: 'Está levantando la cama.', r: 'avienta (Mexico) / tira (general) / lanza' }
    ],
    steps: [
      { en: 'Respect the patient\'s and your personal space. Keep at least two arms\' length between you and the patient.',
        tip: 'Stand at an angle, not face to face. Keep the exit behind you and hands visible.',
        say: [add({ en: 'I\'ll stay here. I won\'t come closer.', f: 'Me quedo aquí. No me voy a acercar.', c: 'Me quedo aquí. No me voy a acercar.' })] },
      { en: 'Approach the patient in a non-threatening, calm manner. Do not provoke the patient.',
        tip: 'Soft, slow voice. No arguing, laughing, crowding, or sudden movements. One staff member speaks.',
        say: [use('I\'m here to help you.'), use('Let\'s calm down first.')] },
      { en: 'Introduce yourself. Provide orientation and reassurance.',
        tip: 'Use the patient\'s name. Say where they are and that they are safe.',
        say: [add({ en: 'I am Nurse/Doctor ___. You are in the hospital.', f: 'Soy el enfermero / la doctora ___. Está en el hospital.', c: 'Soy el enfermero / la doctora ___. Estás en el hospital.', n: 'Say your own role: el enfermero / la enfermera, el doctor / la doctora.' }), use('You are safe here.'), use('No one will hurt you.')] },
      { en: 'Use clear, simple, and short statements.',
        tip: 'One instruction at a time. Repeat calmly if needed.',
        say: [add({ en: 'Please sit down.', f: 'Siéntese, por favor.', c: 'Siéntate, por favor.' }), add({ en: 'Please put the bed down.', f: 'Baje la cama, por favor.', c: 'Baja la cama, por favor.' }), use('Breathe slowly with me.')] },
      { en: 'Allow the patient to express himself/herself.',
        tip: 'Let them talk. Short silences are fine.',
        say: [add({ en: 'What happened? Tell me.', f: '¿Qué pasó? Cuénteme.', c: '¿Qué pasó? Cuéntame.' }), use('Tell me what you need.')] },
      { en: 'Listen closely to what the patient is saying.',
        tip: 'Reflect back what you heard and name the feeling.',
        say: [add({ en: 'I understand. You\'re angry because ___, is that right?', f: 'Entiendo. Está enojado porque ___, ¿verdad?', c: 'Entiendo. Estás enojado porque ___, ¿verdad?', n: 'Use enojada for a woman.' }), use('I can see that you are very upset.')] },
      { en: 'Agree, or agree to disagree.',
        tip: 'Agree with the feeling or a true part of the complaint without arguing about beliefs.',
        say: [add({ en: 'You\'re right, being here is really hard.', f: 'Tiene razón, estar aquí es muy difícil.', c: 'Tienes razón, estar aquí es muy difícil.' }), add({ en: 'We see it differently, but we can still talk.', f: 'Lo vemos de manera distinta, pero podemos seguir hablando.', c: 'Lo vemos de manera distinta, pero podemos seguir hablando.' })] },
      { en: 'Set clear limits. Tell the patient that aggressive behavior is not acceptable.',
        tip: 'Firm, calm, and respectful. State the limit and the reason, not a threat.',
        say: [add({ en: 'Hurting people or breaking things is not allowed here.', f: 'Aquí no se permite lastimar a nadie ni romper cosas.', c: 'Aquí no se permite lastimar a nadie ni romper cosas.' }), add({ en: 'I want to help you, but not while you are hurting anyone.', f: 'Quiero ayudarle, pero no mientras esté lastimando a alguien.', c: 'Quiero ayudarte, pero no mientras estés lastimando a alguien.' })] },
      { en: 'Reassure the patient that you want to help them regain control and establish acceptable behavior.',
        tip: 'Frame it as working together.',
        say: [add({ en: 'I want to help you calm down and get back in control.', f: 'Quiero ayudarle a calmarse y a recuperar el control.', c: 'Quiero ayudarte a calmarte y a recuperar el control.' })] },
      { en: 'Coach the patient on how to stay in control. Use gentle confrontation with instruction.',
        tip: 'Give a concrete next action and praise each step.',
        say: [add({ en: 'Slowly. You can do it.', f: 'Despacio. Usted puede.', c: 'Despacio. Tú puedes.' }), add({ en: 'Take a deep breath: one, two, three.', f: 'Respire profundo: uno, dos, tres.', c: 'Respira profundo: uno, dos, tres.' }), add({ en: 'Good. Thank you for putting it down.', f: 'Muy bien. Gracias por soltarlo.', c: 'Muy bien. Gracias por soltarlo.' })] },
      { en: 'Offer choices and optimism. Be assertive and quickly propose alternatives to violence.',
        tip: 'Two acceptable options, both fine for you.',
        say: [add({ en: 'Would you like to sit here or walk with me for a while?', f: '¿Quiere sentarse aquí o caminar un rato conmigo?', c: '¿Quieres sentarte aquí o caminar un rato conmigo?' }), add({ en: 'Once we\'ve calmed down, we\'ll talk about what you want.', f: 'Cuando estemos más tranquilos, hablamos de lo que usted quiere.', c: 'Cuando estemos más tranquilos, hablamos de lo que tú quieres.' }), use('Would you like some water?')] },
      { en: 'Broach the subject of medication. Explain how medication can help.',
        tip: 'Offer oral first; let the patient choose the route when possible.',
        say: [add({ en: 'There is medicine that can help you calm down and feel better.', f: 'Hay un medicamento que puede ayudarle a calmarse y a sentirse mejor.', c: 'Hay un medicamento que puede ayudarte a calmarte y a sentirte mejor.' }), use('Would you prefer a tablet or an injection?')] }
    ],
    // What happens when verbal de-escalation is not enough. Wording is general (US practice: CMS Conditions of
    // Participation and Joint Commission standards); follow your own hospital's policy.
    after: [
      { title: 'Escalate', who: 'Charge nurse and physician on duty',
        points: ['The first responder calls the charge nurse, who takes over and activates the behavioral response team per policy. The physician on duty is notified and assesses the patient.', 'Keep using calm verbal de-escalation throughout. Use the least restrictive intervention that works.', 'Offer oral medication first; give the patient a choice of route where possible.'],
        say: [use('We will give you medicine to help you calm down.'), use('Would you prefer a tablet or an injection?')] },
      { title: 'Restraint or seclusion (last resort)', who: 'Physician order, trained team',
        points: ['Only to prevent imminent harm to the patient or others, after less restrictive measures fail.', 'Requires a physician\'s order per hospital policy and CMS/Joint Commission rules: a face-to-face evaluation within 1 hour of starting restraint or seclusion; use the minimum force and time needed.', 'Position supine with the head raised. Never prone; no pressure on the neck, chest, or back.', 'Explain what is happening and why, even if the patient seems not to listen.', 'Remove belts, sharp objects, and anything that can be used to harm.'],
        say: [add({ en: 'This is only temporary, for your safety and others\'.', f: 'Esto es solo por un momento, por su seguridad y la de los demás.', c: 'Esto es solo por un momento, por tu seguridad y la de los demás.' }), add({ en: 'We are not punishing you.', f: 'No le estamos castigando.', c: 'No te estamos castigando.' }), add({ en: 'Once you are calm, we will remove it.', f: 'Cuando esté tranquilo, se lo vamos a quitar.', c: 'Cuando estés tranquilo, te lo vamos a quitar.', n: 'Use tranquila for a woman.' })] },
      { title: 'Monitoring', who: 'Nurse, at the interval set by policy',
        points: ['Check at least every 15 minutes: breathing, circulation, skin, vital signs, hydration, toileting, and readiness to release.', 'Offer fluids, toileting, and position change; check for pain and tightness.', 'Reassess regularly whether restraint is still needed. Document each check with the time.'],
        say: [add({ en: 'Is it too tight? Does anything hurt?', f: '¿Está muy apretado? ¿Le duele algo?', c: '¿Está muy apretado? ¿Te duele algo?' }), add({ en: 'Do you want to drink or use the toilet?', f: '¿Quiere tomar agua o ir al baño?', c: '¿Quieres tomar agua o ir al baño?' }), add({ en: 'Can you breathe well?', f: '¿Puede respirar bien?', c: '¿Puedes respirar bien?' })] },
      { title: 'Release', who: 'Nurse with the physician',
        points: ['Release as soon as the patient is calm and safe, in steps (one limb at a time).', 'Tell the patient what you are doing before each step.', 'Document the release time.'],
        say: [add({ en: 'You are calmer now. We will remove it slowly.', f: 'Ya está más tranquilo. Se lo vamos a quitar poco a poco.', c: 'Ya estás más tranquilo. Te lo vamos a quitar poco a poco.', n: 'Use tranquila for a woman.' })] },
      { title: 'Debrief', who: 'Patient, staff, and family',
        points: ['Talk with the patient once calm: what happened, what helped, what to do next time.', 'Staff debrief: what worked, injuries, and lessons. Inform the family as appropriate.', 'Document the incident, interventions, times, and outcome.'],
        say: [add({ en: 'From your point of view, what happened earlier?', f: 'Desde su punto de vista, ¿qué pasó hace un rato?', c: 'Desde tu punto de vista, ¿qué pasó hace un rato?' }), add({ en: 'What makes you get angry or upset?', f: '¿Qué es lo que le hace enojar o alterarse?', c: '¿Qué es lo que te hace enojar o alterarte?' }), add({ en: 'What would help next time?', f: '¿Qué le ayudaría la próxima vez?', c: '¿Qué te ayudaría la próxima vez?' }), add({ en: 'Are you hurt anywhere?', f: '¿Se lastimó en alguna parte?', c: '¿Te lastimaste en alguna parte?' })] }
    ],
    escalation: [
      ['Staff', 'First responder (any staff member)', 'Starts de-escalation. If it fails, calls the charge nurse.'],
      ['RN', 'Charge nurse', 'Takes over and activates the behavioral response team per policy.'],
      ['MD', 'Physician on duty', 'Notified at all times, whether or not de-escalation succeeds.']
    ],
    escLine: 'If de-escalation fails, the charge nurse takes over and the physician on duty is notified at all times.',
    signatures: ['Staff member', 'Charge nurse', 'Physician notified (date/shift/time)'],
    debrief: [use('From your point of view, what happened earlier?'), use('What would help next time?')],
    outcomes: [['successful', 'Successful'], ['partial', 'Partly successful'], ['failed', 'Not successful: escalated']]
  };
})();
