/* Hospital and program details for THIS deployment. Hablemos is written for any psychiatry service that
   interviews Spanish-speaking patients, so nothing here is hard-coded elsewhere: handouts, the ward tools
   and the About page read these values. Edit this file for your own hospital; leave a field empty to hide it.
   (Usap Tayo keeps the shared Mariveles version of this file; this copy is deliberately generic.) */
window.HOSPITAL = {
  name: '',                       // e.g. 'General Hospital Department of Psychiatry'; empty = not shown
  shortName: '',
  address: '',
  program: '',                    // residency or service name, shown on handouts when set
  country: 'US',
  // Forms the ward tools follow. Hablemos uses generic field lists; put your own form numbers here if you have them.
  forms: { deesc: '', discharge: '', admission: '' },
  formPrefix: '',
  posts: [],                      // wards or posts, { code, name }, used by the duty and case tools when present
  yearLevels: [1, 2, 3, 4],
  // Crisis line shown in handouts, de-escalation and About. 988 is the US Suicide and Crisis Lifeline (call or text; Spanish available).
  crisis: { name: '988 Suicide and Crisis Lifeline', number: '988', note: 'Call or text 988 (US). Spanish: press 2 or text AYUDA to 988.' }
};
