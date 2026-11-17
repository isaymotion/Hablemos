/* Body map (0.8.0): #/pictures/bodymap (js/picture-print.js): the patient taps where it hurts; printable handout (Letter by default).
   DRAFT FOR REVIEW by a native Spanish-speaking clinician before use. Spanish is plain text; clinician lines use usted.
   Shape: window.PICTURE_BODYMAP = { sets: ['body-front', 'body-back'] (picture set ids, js/data/picture-sets-body.js),
     ask: [ { es, en } ] exactly 8 = questions a clinician asks, in the app's own pain phrasing (js/data/psych-phrases.js,
          the body-symptoms lesson: ¿Dónde le duele?, del cero al diez),
     words: [ { es, en } ] exactly 10 = pain-describing words the patient can point to }.
   Optional: scale: { es, en } = a caption over the printed 0 to 10 number line (not used here).
   No faces scale and no published scale wording. Append only after release. */
window.PICTURE_BODYMAP = {
  sets: ['body-front', 'body-back'],
  ask: [
    { es: '¿Dónde le duele? Señale el lugar, por favor.', en: 'Where does it hurt? Please point to the place.' },
    { es: '¿Dónde le duele más?', en: 'Where does it hurt the most?' },
    { es: '¿Desde cuándo tiene este dolor?', en: 'How long have you had this pain?' },
    { es: '¿El dolor es constante o va y viene?', en: 'Is the pain there all the time, or does it come and go?' },
    { es: '¿Cómo es el dolor? Escoja una de estas palabras.', en: 'What is the pain like? Choose one of these words.' },
    { es: '¿El dolor se va a otra parte del cuerpo?', en: 'Does the pain move to another part of the body?' },
    { es: '¿Qué hace que le duela más?', en: 'What makes it hurt more?' },
    { es: 'Del cero al diez, ¿qué tan fuerte es el dolor ahora?', en: 'From zero to ten, how strong is the pain now?' }
  ],
  words: [
    { es: 'me duele', en: 'it hurts' },
    { es: 'punzante', en: 'sharp, stabbing' },
    { es: 'sordo', en: 'dull, a constant ache' },
    { es: 'como latidos', en: 'throbbing, like a heartbeat' },
    { es: 'ardor', en: 'burning' },
    { es: 'opresión', en: 'pressure, tightness' },
    { es: 'hormigueo', en: 'tingling, pins and needles' },
    { es: 'adormecido', en: 'numb, "asleep"' },
    { es: 'comezón', en: 'itching (Spain: picor)' },
    { es: 'calambre', en: 'cramp' }
  ]
};
