# Hablemos pass 12 (0.11.0 lessons expansion): shared drafting brief

Hablemos is a Spanish/English web app that teaches Spanish to English-speaking clinicians (residents, nurses) who interview Spanish-speaking psychiatry patients in the US. Levels are CEFR A1, A2, B1, B2. You write ONE OR TWO NEW data files in `/home/claude/hablemos/js/data/` (named in your task). **Create new files only. Do not edit any existing file, `index.html`, `sw.js`, or git. Other agents are writing sibling files at the same time; ignore files that are not yours.**

## Hard rules
- Plain JavaScript data, no build step. Each file appends to its global exactly as your task shows. Header comment: what the file holds, the shape, and **"DRAFT FOR REVIEW by a native Spanish-speaking clinician"**.
- Spanish: US / Mexican baseline, **usted with adults** by default (tú for children, friends, family, or where the lesson is about tú). Correct accents, ñ, ¿…? and ¡…!. No vosotros. Natural sentences a clinician or a patient would really say; roughly half clinical (clinic, ward, pharmacy, symptoms, family, appointments) and half everyday. English is natural US English.
- Regional or colloquial words only where the item is about them, and then say where they are used in the English note.
- **Safety content:** questions about suicide or self-harm use the app's plain, kind wording ("¿Ha pensado en quitarse la vida?"); never any method, amount, plan detail or product name. No stigmatizing words as correct answers. No real people, no surnames, no real hospitals. Crisis line is 988 (oprima el 2 for Spanish); emergency number 911.
- A sentence shown as WRONG (a mistake line, the `bad` sentence of Find the mistake, a wrong quiz option) must be wrong for a clear grammatical reason that the `why` states in one or two plain sentences, and the right version must be the only natural correction. Do not mark as wrong something that many native speakers say (regional usage, leísmo, "llenar la receta"); if in doubt, choose another point.
- Quiz items: exactly one correct option; the others clearly wrong, not merely less common. Vary the position of the correct option (do not put it first more than a third of the time).
- No duplicates of sentences that already exist in the app for the same lesson (read the lesson first).
- English explanations: plain, short, active sentences. No em-dash asides.
- JS safety: use backticks or single quotes consistently; run `node --check <file>` when done.
- Ids are permanent once released: follow the id pattern in your task exactly.
- Validate with the check named in your task (run from `/home/claude/hablemos`); fix every error that names your file. Errors about files that are not yours are not your job.
- Report back (short): counts, the 8 to 12 Spanish lines you are least sure of (for the native-speaker reviewer), anything you had to interpret.

## Where things are
- Lessons: `js/data/lessons.js` (23 original), `lessons-2.js` (A1), `lessons-3.js` (A2), `lessons-4.js` (B1), `lessons-5.js` (B2), `lessons-6.js` (picture lessons). Each lesson `{ id, level, unit, title, summary, body (HTML with <div class="ex"><b>Spanish</b><span>English</span></div> examples), quiz }`.
- Existing shapes to copy (read the header comment of each): `js/data/lesson-extra-1.js` (LESSON_EXTRA), `grammar-cloze-a2.js` (GRAMMAR_CLOZE; blank is `＿` U+FF3F), `examples-4.js` (DICT_EX), `reading-2.js` (READING), `dialogues-2.js` (DIALOGUES), `listen-questions-2.js` and `-3.js` (LISTEN_Q), `dict-clinical.js` (dictionary lines `spanish|english|pos|category|root|note`).
- Checks (in `/home/claude/hablemos-dev/tests/`, run as `node <check> /home/claude/hablemos` from the app folder): `extras_check.js`, `cloze_check.js`, `examples_check.js`, `listen_check.js`, `data_check.js` (lessons, readings, dialogues; ends with DATA OK).
