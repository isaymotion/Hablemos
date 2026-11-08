/* What's New. Newest entry FIRST. version = semver string (also the key for the unseen badge on Home,
   the menu and the footer). date = ISO: YYYY-MM-DD. Item type: feature | update | correction | content.
   For every release: add an entry here, then bump APP_META.version (data/app-meta.js) and VERSION in sw.js. */
window.APP_CHANGELOG = [
  {
    version: '0.1.0', date: '2026-11-08', title: 'Scaffold',
    items: [
      { type: 'feature', text: 'Hablemos starts here: the Usap Tayo engine (flashcards, phrase sections with two registers, point board, listening drill, case simulations, ward tools, printable handouts) set up for Spanish, with usted and tú as the two registers and a US / Mexican Spanish baseline.' },
      { type: 'update', text: 'No interview content yet. The phrase sections, patient replies, cases and tools arrive in the next releases, each marked draft until a native Spanish-speaking clinician has reviewed it.' },
      { type: 'update', text: 'Hospital name, address, form numbers and crisis line are read from data/hospital.js, so the app is not tied to one hospital.' }
    ]
  }
];
