/* Language pack: everything in the ENGINE (core.js, views.js, psych-views.js, app.js) that is specific to the
   target language lives here. Hablemos shares its engine with Usap Tayo (Tagalog); the data files (js/data/*)
   hold the Spanish content. Field names in the data stay `tl`, `f`, `c` for engine compatibility: `tl` is the
   Spanish text, f = usted (formal), c = tú (informal).
   Shell UI strings (menu, footer, backup) are in data/strings.js and go through t(). */
window.LANG = {
  code: 'es',                 // short code used in quiz flags; CSS keeps the .tl class name for the target-language text
  name: 'Spanish',            // how the app names the language in UI text
  nameFull: 'Spanish (US / Mexican baseline)',
  nameNative: 'español',
  voiceName: 'Spanish',       // how device voices for this language are referred to
  bcp47: 'es-MX',             // speech synthesis / recognition fallback
  // Device voices that are THIS language: by lang tag, or by voice name.
  voiceLang: /^es([-_]|$)/i,
  voiceNameMatch: /spanish|español|espanol/i,
  // Voices whose language reads this language's spelling closely, used when no native voice exists. Never English.
  nearVoices: [/^pt([-_]|$)/i, /^it([-_]|$)/i, /^ca([-_]|$)/i],
  // Natural neural voices offered by the audio-pack workflow (.github/workflows/audio-pack.yml), for the Settings help text.
  packVoices: 'Dalia, Jorge (Mexico), Paloma, Alonso (US)',
  deviceVoiceHelp: 'Most phones already have a Spanish voice. iPhone: Settings → Accessibility → Spoken Content → Voices → Spanish (Mexico or US). Android: Settings → Google Text-to-speech → install Spanish. Microsoft Edge on a computer includes natural Spanish voices (Dalia, Jorge).',
  testLine: 'Buenos días. ¿Cómo se siente hoy?',

  // Two registers for every interview phrase: f = formal/respectful, c = casual/everyday.
  registers: {
    f: { label: 'Formal (usted)', short: 'Formal', help: 'uses <i>usted</i> (for most adult patients, elders, and family you have just met)' },
    c: { label: 'Informal (tú)', short: 'Informal', help: 'uses <i>tú</i> (for children, adolescents, young adults, and when the patient invites it)' }
  },
  registerIntro: 'each in a formal (<i>usted</i>) and an informal (<i>tú</i>) form',

  // Short words the engine prints in quizzes and drills.
  quiz: { great: '¡Muy bien!', ok: 'Bien.', keepGoing: 'Sigue así.', right: '¡Correcto!', wrong: 'No.', toTarget: 'EN→ES', toEnglish: 'ES→EN', done: '¡Listo!' },
  yes: 'Sí', no: 'No',
  // Flashcard direction labels (settings.cardDir values stay 'tl-en' / 'en-tl' for backup compatibility with the shared engine).
  cardDir: { 'tl-en': 'Spanish first', 'en-tl': 'English first' },
  dictDir: { tl: 'Spanish → English', en: 'English → Spanish' },
  // Letters offered by the dictionary browser.
  letters: 'a b c d e f g h i j l m n ñ o p q r s t u v y z'.split(' '),
  // Placeholder examples in search boxes.
  searchExample: 'e.g., tristeza, sad',

  // Point board: the strip the interviewer reads after the patient taps a tile.
  point: { title: 'Señale', subtitle: 'Point to your answer', pass: 'Muestre esta pantalla al paciente.', passEn: 'Hand the phone or tablet to the patient.' },

  // Interview content notice (About, psychiatry hub).
  variety: 'Spanish wording follows a US / Mexican baseline. Where a word differs by region (for example Caribbean or Central American usage), the phrase carries a regional variant.',
  review: 'Every Spanish section is a draft for review until a native Spanish-speaking clinician has checked it.',
  interpreter: 'For consent, risk disclosures, diagnosis and treatment decisions, use a certified medical interpreter. In the US this is a Title VI obligation, not a courtesy.'
};
