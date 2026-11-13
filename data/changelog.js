/* What's New. Newest entry FIRST. version = semver string (also the key for the unseen badge on Home,
   the menu and the footer). date = ISO: YYYY-MM-DD. Item type: feature | update | correction | content.
   For every release: add an entry here, then bump APP_META.version (data/app-meta.js) and VERSION in sw.js. */
window.APP_CHANGELOG = [
  {
    version: '0.6.1', date: '2026-11-13', title: 'Menu scrolling fixed',
    items: [
      { type: 'correction', text: 'The menu that opens from More now scrolls on phones and tablets. Before, it was taller than the screen and could not be scrolled, so the items at the bottom of the list (such as Settings and About) could not be reached from it.' }
    ]
  },
  {
    version: '0.6.0', date: '2026-11-08', title: 'Learn track',
    items: [
      { type: 'feature', text: 'Twenty-three short lessons with quizzes, from sounds and ser/estar to the past tenses for a history, instructions and the subjunctive, plus culture lessons: values, faith and folk healing, idioms of distress, false friends, and when to call a certified medical interpreter.' },
      { type: 'feature', text: 'Clinical Spanish dictionary: about 2,300 entries with root lookup, categories from basics to risk, substances, idioms of distress and false friends, and flashcard decks for every clinical category.' },
      { type: 'feature', text: 'Ten graded readings with glossaries and questions (a family, a clinic visit, a pharmacy label, a mother describing her son, a daughter\'s letter about her father\'s drinking, a discharge sheet, a 988 call, nervios at work, a curandero and the clinic, sayings patients use) and eight dialogues for the Speaking page.' },
      { type: 'feature', text: 'Placement test (20 questions, A1 to B2) that sets your level and points you to the right place to start.' },
      { type: 'content', text: 'All new Spanish is draft for review by a native Spanish-speaking clinician.' }
    ]
  },
  {
    version: '0.5.0', date: '2026-11-08', title: 'Practice cases',
    items: [
      { type: 'feature', text: 'Seven case simulations in Spanish with feedback on every choice: first-episode psychosis (Mateo), depression after a suicide attempt (Lupe), mania with methamphetamine use (Brayan), delirium in an older adult (Don Chuy), alcohol withdrawal (Ramiro), the agitated patient (Jorge) and opioid use disorder with naloxone teaching and motivational interviewing (Yesenia).' },
      { type: 'feature', text: 'Interpretation drill: 32 patient and family statements around Latino idioms of distress (nervios, ataque de nervios, susto, mal de ojo, un trabajo) and ambiguous lines that need a direct follow-up question.' },
      { type: 'feature', text: 'Discharge practice: five patients on the day of discharge (Mateo, Lupe, Brayan, Ramiro, Yesenia), interviewed field by field and documented with the form\'s wording, with a discharge-or-defer decision checked against a model.' },
      { type: 'feature', text: 'Admission MSE practice: Mateo and Brayan on the evening of admission, with the chief complaint in the informant\'s words, 13 domains, evidence questions and an admission vs discharge comparison.' },
      { type: 'content', text: 'Likely patient replies for the eleven tool sections (substance use, screens, motivational interviewing, mood screens, withdrawal and agitation), so the point board and listening drill now cover every section. All new Spanish is draft for review by a native Spanish-speaking clinician.' }
    ]
  },
  {
    version: '0.4.0', date: '2026-11-08', title: 'Clinical tools',
    items: [
      { type: 'feature', text: 'Mood episode checker in Spanish: SIGECAPS and DIGFAST as tap-to-count DSM-5-TR criteria, with the PHQ-9 and MDQ items as interview paraphrases and pointers to the published Spanish instruments for a documented score.' },
      { type: 'feature', text: 'Substance use screener rebuilt for the US context: alcohol, tobacco and vaping, cannabis, methamphetamine, cocaine, opioids and fentanyl (with naloxone and overdose lines), other substances and gambling; the 11 criteria, AUDIT-C and Fagerström question lines, motivational interviewing, psychoeducation and a nurse script. Two substance use pages added to the MSE interviewer sheet.' },
      { type: 'feature', text: 'Withdrawal and agitation guide: alcohol (PAWSS, CIWA-Ar), cannabis, a new opioid tab with the COWS, buprenorphine and methadone starts, adjuncts and naloxone teaching, and the agitated patient, all with Spanish patient-facing lines.' },
      { type: 'feature', text: 'De-escalation checklist (12 steps, pocket card, rapid drill, what to do if it fails) and the guided discharge assessment, both generic: roles, forms and the crisis line come from data/hospital.js.' },
      { type: 'content', text: 'New phrase sections for every tool (mood screens, substance use, withdrawal, discharge) with flashcards, search and audio. Everything is draft for review by a native Spanish-speaking clinician.' }
    ]
  },
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
