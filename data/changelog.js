/* What's New. Newest entry FIRST. version = semver string (also the key for the unseen badge on Home,
   the menu and the footer). date = ISO: YYYY-MM-DD. Item type: feature | update | correction | content.
   For every release: add an entry here, then bump APP_META.version (data/app-meta.js) and VERSION in sw.js. */
window.APP_CHANGELOG = [
  {
    version: '0.3.0', date: '2026-11-08', title: 'Core interview, part two',
    items: [
      { type: 'content', text: 'All 27 interview sections are now in Spanish, in usted and tú: substances, past history, family history, personal and social history (including migration), collateral from family, the MSE (orientation, attention and memory; abstraction with Spanish refranes; describing observations), explaining the diagnosis, medication side effects, admission and discharge, children and adolescents, elderly patients, closing. Draft for review.' },
      { type: 'content', text: 'Likely patient replies for every new section (314 in all), so the point board and the listening drill cover the whole interview.' },
      { type: 'feature', text: 'The complete interview flow (19 steps and 5 add-ons) in the printable handout, now on Letter paper by default, and the two-page MSE interviewer sheet in Spanish (Psychiatry → Print).' },
      { type: 'update', text: 'Admission MSE domains in documentation order, ready for the practice cases that follow.' }
    ]
  },
  {
    version: '0.2.0', date: '2026-11-08', title: 'Core interview, part one',
    items: [
      { type: 'content', text: 'Twelve interview sections in Spanish, each phrase in usted and tú: opening and rapport, confidentiality and consent, chief complaint and history, depressed mood and SIGECAPS, elevated mood and DIGFAST, anxiety and panic, trauma, hallucinations, delusions, suicide risk, violence risk, de-escalation. Plus Shea\'s validity techniques phrased in Spanish, with links to the Psychiatric Interviewing Trainer.' },
      { type: 'content', text: 'Likely patient replies for every section and the general groups (yes/no, how often, since when, how much, how I feel, I need…), so the point board, the listening drill and the flashcards work from today. All of it is draft for review by a native Spanish-speaking clinician.' },
      { type: 'feature', text: 'Interview flow and MSE table for the printable handout. Audio for the new lines is recorded by the Spanish audio job.' }
    ]
  },
  {
    version: '0.1.0', date: '2026-11-08', title: 'Scaffold',
    items: [
      { type: 'feature', text: 'Hablemos starts here: the Usap Tayo engine (flashcards, phrase sections with two registers, point board, listening drill, case simulations, ward tools, printable handouts) set up for Spanish, with usted and tú as the two registers and a US / Mexican Spanish baseline.' },
      { type: 'update', text: 'No interview content yet. The phrase sections, patient replies, cases and tools arrive in the next releases, each marked draft until a native Spanish-speaking clinician has reviewed it.' },
      { type: 'update', text: 'Hospital name, address, form numbers and crisis line are read from data/hospital.js, so the app is not tied to one hospital.' }
    ]
  }
];
