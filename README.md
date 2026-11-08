# Hablemos: Spanish for Clinicians

<img src="icons/icon-192.png" alt="Hablemos icon" width="96" align="right">

*Hablemos* means "let's talk." This web app helps English-speaking clinicians interview Spanish-speaking psychiatry patients. It is the Spanish/English sister app of [Usap Tayo](https://isaymotion.github.io/tagalog/) (Tagalog).

**App created by Isabella Navarro, MD. Latest version November 2026. isaymotion@gmail.com**

Version **0.3.0**: the Usap Tayo engine with a Spanish language pack and all 27 interview sections (opening to closing, plus Shea's techniques), patient replies for every section, the interview flow handout and the MSE interviewer sheet, all draft for review. Clinical tools, practice cases and the learn track arrive in later passes.

## What it is

Hablemos gives the interviewer Spanish phrases for the psychiatric interview, each in two registers: *usted* (formal, `f`) and *tú* (familiar, `c`). The baseline is US and Mexican Spanish. Where wording differs by region (for example Caribbean, Central American or Andean usage), the phrase carries a regional variant in its note.

Every Spanish section is **Draft for review** until a native Spanish-speaking clinician has reviewed it. The notice stays on screen while a section carries `draft: true` (phrase sections) or a module's `REVIEWED` flag is false; clear it only after the review.

## Status and plan

| Pass | Content | State |
|---|---|---|
| 1 | Core interview phrases (opening and consent, HPI, mood, anxiety, psychosis, suicide and violence risk, substances, history, closing) | Done in 0.3.0: all 27 sections (draft for review) |
| 2 | Mental status exam: interviewer sheet, point-board replies, listening drill | Done in 0.3.0: MSE sections, two-page interviewer sheet, replies and listening drill for every section (draft for review) |
| 3 | Clinical tools: mood episode checker, substance use screener, withdrawal and agitation guide, with published validated Spanish versions of the PHQ-9 and MDQ rather than fresh translations | Pending |
| 4 | Practice cases: case simulations, discharge and admission MSE practice | Pending |
| 5 | Spanish learn track: dictionary, lessons, reading, dialogues | Pending |
| 6 | Release with the audio pack | Pending |

## What's inside

The app shares its engine with Usap Tayo. The language pack `js/lang.js` sets voices, register labels, speech-recognition tag and quiz words; the engine reads `window.LANG` instead of hard-coding a language. Content lives in `js/data`.

| Section | What it does | Status |
|---|---|---|
| **Flashcards** | Spaced repetition with topic and psychiatry decks and an automatic "My mistakes" deck. | Live (draft for review) |
| **Psychiatry phrase sections** | Interview phrases by topic, each with usted and tú forms, a note and audio. | Live (draft for review) |
| **Point board** | The patient taps a reply, the phone speaks it and the interviewer reads the English. General replies, a 0 to 10 scale and likely replies for each interview section. | Live (draft for review) |
| **Listening drill** | Hear a patient or family reply, choose its meaning from four, then see the Spanish. | Live (draft for review) |
| **Case simulations** | Interactive interviews with feedback and an MSE summary. | Engine ready, content pending |
| **MSE interviewer sheet** | Printable pages of screening questions for the OPD and wards. | Live (draft for review) |
| **Substance use screener** | Criteria-based screening with severity, a copyable chart line and brief intervention. | Engine ready, content pending |
| **Mood episode checker** | Tap-to-count DSM-5-TR checker for depressive and manic episodes, with PHQ-9 and MDQ. | Engine ready, content pending |
| **Withdrawal and agitation guide** | Bedside reference with PAWSS, CIWA-Ar and an agitation guide. | Engine ready, content pending |
| **De-escalation checklist** | Bedside checklist with Spanish phrases, a drill and a chart note. | Engine ready, content pending |
| **Discharge assessment and practice** | Guided discharge interview and simulated practice. | Engine ready, content pending |
| **Admission MSE practice** | Simulated admission interviews checked against a model MSE. | Engine ready, content pending |
| **Printable handouts** | PDF or print of the interview flow and MSE, with English shown, hidden or as an answer key. | Engine ready, content pending |
| **Dictionary, lessons, reading, dialogues** | Engines that wait for Spanish content. | Engine ready, content pending |

## Publish it with GitHub Pages

1. On GitHub, open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
3. After a minute the app is live at `https://isaymotion.github.io/Hablemos/`. The repository is `isaymotion/Hablemos`.
4. On a phone, open that link, then use **Add to Home Screen** (iPhone Safari) or **Install app** (Android Chrome).

To try it locally: run `python3 -m http.server` in this folder and open `http://localhost:8000`. Opening `index.html` directly also works, but offline mode needs a web server.

## Audio pack (natural Spanish voice)

Device voices vary in quality, so the app plays recorded clips from `audio/` whenever they exist.

The clips are made by a GitHub Actions job (`.github/workflows/audio-pack.yml`) that records every Spanish string the app can speak with Microsoft neural voices through the open-source `edge-tts` client: `es-MX-DaliaNeural` and `es-MX-JorgeNeural` (Mexican Spanish, female and male) and `es-US-PalomaNeural` (US Spanish). The job writes `audio/manifest.json` and one `<16-hex>.mp3` per string. The file name is a hash of the text, defined in `js/audio-key.js`. The job runs by itself when files in `js/data/` change.

Without the pack, the app uses a Spanish device voice if one is installed.

## Adding content

All content lives in plain JavaScript files under `js/data/`. No build step. The formats are the same as in the Usap Tayo README: in phrase objects `{ en, tl, f, c, n }`, `tl` holds the Spanish text, `f` the usted form, `c` the tú form and `n` a note.

| File | Contents |
|---|---|
| `meta.js` | Shared metadata for the data files |
| `psych-phrases.js` | Interview phrase sections |
| `psych-shea.js` | Validity-technique phrases and links to the Psychiatric Interviewing Trainer |
| `psych-answers.js` | Point-board replies per interview section |
| `psych-cases.js` | Case simulations and interpretation items |
| `psych-flow.js` | Handout order, pocket-card phrases and MSE domains |
| `psych-mse-sheet.js` | MSE interviewer sheet |
| `psych-mood.js` | Mood episode checker, PHQ-9 and MDQ |
| `psych-sud.js` | Substance use screening and brief intervention |
| `psych-withdrawal.js` | Withdrawal and agitation guide |
| `psych-deesc.js` | De-escalation checklist |
| `psych-discharge.js` | Discharge assessment |
| `psych-discharge-cases.js` | Discharge practice cases |
| `psych-admit-mse.js` | Admission MSE practice |
| `psych-mse-cases.js` | MSE practice cases |

## Version convention

Use semver. The version appears in three places and all three must agree: `data/app-meta.js`, the newest entry of `APP_CHANGELOG` in `data/changelog.js`, and the cache name in `sw.js` (`hablemos-X.Y.Z`). Bump all three on every release so installed copies pick up the update. The service worker deletes only caches whose names start with `hablemos-`; never change that rule, because every isaymotion app shares the same site.

## Important note on clinical content

Spanish phrases are practice phrasings written for training. They are not validated translations of research instruments. Use published validated Spanish versions of the PHQ-9, MDQ and other instruments, and confirm wording with a native Spanish-speaking clinician, supervisors and patients. Doses in the withdrawal guide are typical adult doses and must be checked against the hospital protocol. Do not put patient data in this repository.

Crisis line in the US: **988 Suicide and Crisis Lifeline**. Call or text 988; Spanish is available. Set local crisis numbers for your site in `data/hospital.js`.

## Project structure

```
index.html              App shell
manifest.webmanifest    Install metadata
sw.js                   Offline cache
css/style.css           Styles
data/app-meta.js        Name, version, attribution
data/changelog.js       What's New (APP_CHANGELOG)
data/hospital.js        Hospital and program constants, local crisis numbers
icons/                  App icons
js/lang.js              Language pack
js/audio-key.js         Hash key for audio clips
js/                     Engine: core, views, psych-views, point-listen, handout, mse-sheet, sud, mood, withdrawal, deesc, discharge, mse-practice, app
js/data/                All content
```
