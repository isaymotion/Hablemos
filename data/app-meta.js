/* App identity. version must match the newest entry in data/changelog.js and VERSION in sw.js. */
window.APP_META = {
  name: 'Hablemos',
  short: 'Hablemos',
  tagline: 'Spanish for the psychiatric interview',
  version: '0.4.0',
  repo: 'Hablemos',
  updated: 'November 2026',
  author: 'Isabella Navarro, MD',
  email: 'isaymotion@gmail.com',
  // Institution shown on handouts and in the ward tools. Hablemos is not tied to one hospital: the forms it
  // follows are generic, and the name, address and form labels are read from data/hospital.js (edit that file
  // for your own service). Form numbers stay empty unless your hospital has them.
  institution: { name: (window.HOSPITAL && HOSPITAL.name) || '', address: (window.HOSPITAL && HOSPITAL.address) || '', short: (window.HOSPITAL && HOSPITAL.shortName) || '', deescForm: (window.HOSPITAL && HOSPITAL.forms && HOSPITAL.forms.deesc) || '', dischargeForm: (window.HOSPITAL && HOSPITAL.forms && HOSPITAL.forms.discharge) || '' },
  attribution: 'App created by Isabella Navarro, MD. Latest version November 2026. isaymotion@gmail.com'
};

/* Show the "Other apps" group in the menu? Off for now, as in the other apps; the list is kept in step so it can be switched on later. */
window.SHOW_OTHER_APPS = false;

window.APP_LINKS = [
  { name: 'Usap Tayo (Tagalog)', href: 'https://isaymotion.github.io/Tagalog/' },
  { name: 'MSE Trainer', href: 'https://isaymotion.github.io/MSEtrainer/' },
  { name: 'DSM-5-TR Study Companion', href: 'https://isaymotion.github.io/DSMVapp/' },
  { name: 'Stahl Study Companion', href: 'https://isaymotion.github.io/Stahl/' },
  { name: 'Kaplan Study', href: 'https://isaymotion.github.io/KaplanStudy/' },
  { name: 'Shea Trainer', href: 'https://isaymotion.github.io/sheatrainer/' }
];

/* New app: all progress lives under 'hablemos.v1' (js/core.js) and the shell's 'hablemos.lastBackup'. No MIGRATE_KEYS. */
