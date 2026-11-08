# Hablemos — handoff (passes 1 to 3 done; next: pass 4, clinical tools)

Start here. Usap Tayo's own handoff (`claude/handoff.md`, also `HANDOFF.md` on the Tagalog repo's dev-tools branch) holds the shared engine documentation (section 3 data formats, section 8 pitfalls); this doc holds what differs in Hablemos.

## 1. Project
- **What:** Hablemos ("let's talk"), the Spanish/English sister of Usap Tayo: for English-speaking clinicians interviewing Spanish-speaking psychiatry patients. Same engine, Spanish content.
- **Repo:** github.com/isaymotion/Hablemos (remote also answers to `isaymotion/hablemos`). `main` = the app; `dev-tools` = tests. GitHub Pages is enabled (a pages-build-deployment run follows every push); live: https://isaymotion.github.io/Hablemos/ (not reachable from the session's network; check it on a phone).
- **Version:** 0.3.0 (2026-11-08), cache `hablemos-0.3.0`, storage key `hablemos.v1` (+ `hablemos.lastBackup`, `hablemos.navmax`), backup file `app: 'hablemos'`. Attribution line exact, as in the other apps (footer, About, README line 7).
- **Design:** terracotta palette (`palette.py 25`), `--night #6E3E1C` / dark `#20150E`; accents are the flag's red (`--accent` light `#AA151B`, `--navy #8E1C21` keeps its engine name) and gold (`--gold #F1BF00`, dark accent `#E3B53F`). Icon = her flag-and-brain image (`icons/`, standard names incl. `icon-maskable-192/512.png`).
- Everything in section 2 of the Usap Tayo handoff (`claude/handoff.md`) applies: fixed rules, commit authorship, append-only phrase indexes, no patient data, subagents for simple work, UI copy style.

## 2. What pass 1 changed vs Usap Tayo
- Removed: `js/conjugate.js`, `js/affixes.js`, `js/grammar-handout.js`, `js/data/{dict-*,verbs,verb-sentences,affixes,lessons,reading,dialogues}.js`, `handouts/`, `tools/import-msetrainer.js`, the v2.2.0 mood migration in core.js, routes `/verbs*`, `/affixes*`, `/lessons/handout`.
- `js/lang.js`: Spanish pack (code `es`, `bcp47 es-MX`, voiceLang `/^es/`, nearVoices pt/it/ca, registers f = usted / c = tú, quiz words, `quiz.done`, `letters` for the dictionary browser, `searchExample`, `point.title 'Señale'`, `variety`, `review`, `interpreter` notices).
- `core.js`: Spanish root lookup (`findRoots`: verb endings, plurals, diminutives, clitics, ie/ue stem changes); `App.CATS` with `idioms` and `falsefriends`; POS adds `nm`/`nf`; voice helpers renamed `App.nativeVoices` / `App.bestVoice` (kind `'native'`); `App.cardFor` handles `d…` and `p:` ids only.
- `views.js`: data-aware Home (no verbs/Panlapi; quick-practice rotation only lists drills with content; scaffold notice while `PSYCH_SECTIONS` is empty); `App.notYet(el, title, what, crumb)` helper; lessons/reading/speaking/placement/dictionary show a "later release" notice when empty; About rewritten (variety, review, interpreter/Title VI, crisis line from `HOSPITAL.crisis`, configured hospital); uiLang `en`/`es`.
- `app.js`: `HAS` flags (dict, lessons, reading, speak, placement) drive BLURBs and the Practice page; NAV keeps Learn/Drill groups (empty pages explain themselves); `document.title` from `APP_META.name`.
- `psych-views.js`: hub tiles appear only when their data exists (`has()` on the module globals); "Related lessons" = lessons with `psych: true`; MSE Trainer link removed; `LANG.variety` in the interview notice.
- Module views (`sud`, `mood`, `withdrawal`, `mse-sheet`, `deesc`, `discharge`, `discharge-practice`, `mse-practice`, `handout`, `point-listen`) start with an empty-data guard that calls `App.notYet`. "Tagalog" in their UI text became `LANG.name`; NCMH hotline became `CRISIS()` (handout.js) from `HOSPITAL.crisis`; MMH form numbers became generic wording. **`sud.js` and the SUD block of `mse-sheet.js` still hold betel/shabu-specific code** (hidden behind the guard): pass 4 rewrites them.
- `point-listen.js`: 0–10 scale words in Spanish (`tools/extra-texts/point-board.txt`).
- `data/hospital.js`: generic (`name`, `shortName`, `address`, `program`, `country`, `forms {deesc, discharge, admission}`, `posts`, `yearLevels`, `crisis {name, number, note}` = 988). `APP_META.institution` reads from it.
- `data/strings.js`: `en` + `es` draft (shell labels; About offers English/Español). The design skill's `check_design.py` expects a `tl` block and FAILS on this; `tests/check_design_es.py` on dev-tools is the same script accepting `es`. Ask her whether to change the skill's rule to "en + one other language".
- Data shells `js/data/*.js`: same globals as Usap Tayo, empty, each header documents the shape with one Spanish example (`REVIEWED: false` on module files). No side effects (nothing pushes into `PSYCH_SECTIONS`).
- Audio: `.github/workflows/audio-pack.yml` "Build Spanish audio pack" (es-MX-DaliaNeural default; Jorge, Paloma, Alonso options), `tools/make_audio_pack.py` (mms alt `facebook/mms-tts-spa`), `tools/collect-texts.js` (loads lang.js; accented-letter filter). First run recorded 13 clips (numbers 0–10, test line, "Sí, doctor."), `audio/last-run.json` committed by the job. Cache `hablemos-audio`.

## 3. Commands
```bash
git clone https://github.com/isaymotion/hablemos /home/claude/hablemos        # add the repo to the session with push access first
git -C /home/claude/hablemos fetch origin refs/heads/dev-tools:refs/remotes/origin/dev-tools
git -C /home/claude/hablemos worktree add /home/claude/hablemos-dev dev-tools   # (-b dev-tools origin/dev-tools on a fresh clone)
python3 -m http.server 8767 --directory /home/claude/hablemos                 # run_in_background
python3 /home/claude/hablemos-dev/tests/smoke.py http://localhost:8767/index.html <scratch>/hb   # expect "HB SMOKE OK 34 routes x 2 viewports"
python3 /home/claude/hablemos-dev/tests/check_design_es.py /home/claude/hablemos --browser     # expect PASS; delete _qa/ after looking
python3 <design-skill>/scripts/check_sw.py /home/claude/hablemos               # PASS
node tools/collect-texts.js                                                    # texts.json is committed (the job commits it too)
gh run list -R isaymotion/hablemos -L 3
node /home/claude/hablemos-dev/tests/data_check.js /home/claude/hablemos      # expect DATA OK
```
Baseline 2026-11-08 (v0.3.0): data_check prints `{"version":"0.3.0","sections":27,"phrases":352,"answers":314,"flow":19,"mse":14,"texts":1021,"audio":1021}` and `DATA OK`; smoke prints `HB SMOKE OK 34 routes x 2 viewports`, `mse sheet sections 15`, `handout pdf bytes ~140000`, `HB CONTENT OK`; check_sw PASS; check_design_es PASS (browser pass included); audio job success.

## 3b. Pass 2 (done 2026-11-08, v0.2.0)
- `js/data/psych-phrases.js`: 12 sections with the same ids, order and phrase counts as Usap Tayo (opening 10, consent 7, cc-hpi 14, depression 23, mania 15, anxiety 9, trauma 8, hallucinations 24, delusions 20, suicide 20, violence 6, deescalation 12), so Usap Tayo's `PSYCH_FLOW` key refs carry over. Every phrase `{ en, f, c, n?, r?, answers? }`; `r` = regional note (platicar, ahorita, enojarse/enfadarse, qué tan seguido, aventarse). Localised content: suicide:8/9 ask about firearms and stockpiled medicines (not pesticides), suicide:19 = 988 (press 2 / text AYUDA), mania:13 names metanfetamina/cocaína, delusions:5 brujería / mal de ojo / "un trabajo", hallucinations:21 posesión, intros mention nervios, ataque de nervios, susto, familismo, respeto, personalismo, Title VI. Gender notes (decaído/decaída) in `n`. All sections `draft: true`.
- `js/data/psych-shea.js`: Shea section (25 phrases, same technique notes as Usap Tayo, Spanish anchors: Navidad, quinceañera, cervezas/caguamas) + `SHEA_LINKS` for all 27 Usap Tayo section ids (chapter links only; Tagalog drill/simulation links dropped). `REVIEWED = false`.
- `js/data/psych-answers.js`: 6 common groups (51) + 13 sections (127) = 178 replies, each `[es, en, note?]`.
- `js/data/psych-flow.js`: 11 flow steps (open → violence) with Spanish-context tips/branches, `PSYCH_FLOW_EXTRA` = deesc, `PSYCH_MSE` 14 domains (refs into mse-* sections are skipped by the handout until those sections exist). `handout.js` date locale → `en-US`.
- Tests on dev-tools: `tests/data_check.js` (en/f/c present, no Tagalog markers po/kayo/ninyo/opo, flow + MSE refs resolve, answers map to sections, versions agree) and `tests/smoke.py` content checks (section quiz has 4 options, point board, listening drill, flashcards, handout PDF builds via `App.handoutDoc` + pdfmake, Shea section).

## 3c. Pass 3 (done 2026-11-08, v0.3.0)
- `psych-phrases.js`: the remaining 14 sections inserted after `deescalation` (substance 13, history 11, family-hx 5, social 10, collateral 11, mse-cog 19, mse-abstract 11, mse-describe 18, explain 12, meds 14, admission 8, child 11, elderly 10, closing 6); same counts as Usap Tayo, so every flow and MSE ref resolves. Localised: substances = alcohol/tequila, mota, cristal, perico, fentanyl pills, vaping, lottery/casino/online betting; history asks about treatment "en su país", botánicas and curanderos; social adds a migration question (social:7 replaces "family abroad"); mse-cog uses pelota/árbol/llave, months backwards instead of spelling WORLD, president of the United States; mse-abstract uses plátano/naranja, carro/autobús and the refranes "Más vale pájaro en mano…", "A quien madruga…", "Dime con quién andas…"; mse-describe f = how to say it to the family, c = everyday word; meds note "constipado" false friend; elderly uses Don/Doña + usted in both registers; child uses tú in both registers.
- `psych-answers.js`: replies for all 14 new sections (314 total).
- `psych-flow.js`: all 19 Usap Tayo steps (added subs, pmh, fhx, social, collat, mse, plan, close) + 5 add-ons (deesc, meds, admit, child, elder).
- `psych-mse-sheet.js`: two-page Spanish MSE interviewer sheet (15 sections incl. `observe`), mostly `{ r }` refs; new fields `pageWord`, `pageSubtitles` (null = subtitle + reminder). `js/mse-sheet.js`: SUD pages appear only when `PSYCH_SUD.substances` has content (Usap Tayo's betel structure kept as the template for pass 4); page word and program line from data/`HOSPITAL.program`; Download-PDF link removed (no static PDF); intro text updated.
- `psych-admit-mse.js`: Usap Tayo's 13 domains with `form: ''`, title "Admission MSE", Spanish-context notes (brujería, respeto, Spanish/English switching).
- `handout.js`: presets default to Letter paper; `APP_META.institution.name` falls back to '' (hidden) rather than "Your hospital".

## 3d. Per-unit recipe (one data module or release)
1. Pull the English and structure from Usap Tayo: `git clone --depth 1 https://github.com/isaymotion/tagalog /home/claude/tagalog` (read-only), then run the data file in a vm and print `en`/`n`/keys (as in passes 2–3). Keep Usap Tayo's ids, order and counts wherever the engine references them (phrase refs, flow ids, domain ids).
2. Write the Spanish in `js/data/<file>.js`: f = usted, c = tú, `n` for clinical/gender notes, `r` for regional variants; US/Mexican baseline; adapt content (substances, crisis line, institutions, idioms), never translate Tagalog literally. Mark `draft: true` / `REVIEWED = false`.
3. If a module view (`js/sud.js`, `js/mood.js`, …) has Usap Tayo-specific logic, rewrite it; the empty-data guard at the top of each view can stay.
4. `node tools/collect-texts.js` (texts.json is committed), `node /home/claude/hablemos-dev/tests/data_check.js .`, extend `tests/data_check.js` for the new module's refs.
5. Release bookkeeping: changelog entry at the top of `data/changelog.js`, `APP_META.version`, `sw.js` VERSION (`hablemos-X.Y.Z`), README version line + status/features tables.
6. Serve (`python3 -m http.server 8767 --directory /home/claude/hablemos`, run_in_background), run `tests/smoke.py`, `tests/check_design_es.py --browser` (delete `_qa/`), the design skill's `check_sw.py`; add the new route to smoke's content checks and look at one phone screenshot.
7. Commit as Isabella (co-author trailer), `git fetch origin main && git rebase origin/main`, push main; after ~2 min `gh run list -R isaymotion/hablemos -L 1` → success, `git pull --rebase` to get `audio/`. Push tests + this doc to dev-tools; `project_write` this doc to `claude/hablemos-handoff.md`.

## 3e. Status
| Area | State |
|---|---|
| Engine, shell, design, icon, audio job | Done (0.1.0) |
| Interview sections | 27 / 27 written (352 phrases), all draft for review |
| Patient replies (point board, listening drill) | 6 general groups + 27 sections = 314, draft |
| Interview flow + MSE table, printable handout | Done (19 steps, 5 add-ons, Letter default) |
| MSE interviewer sheet | Done, 2 pages (SUD pages wait for pass 4) |
| Admission MSE domains | Done (13); practice cases pending (pass 5) |
| Mood checker, SUD screener, withdrawal/agitation, de-escalation checklist, discharge assessment | Shells only; pages show "arrives in a later release" (pass 4) |
| Case simulations, interpretation drill, admission/discharge practice cases | Shells only (pass 5) |
| Dictionary, lessons, reading, dialogues, placement | Engines in place, no data (pass 6) |
| Native-speaker review | Not started; everything is draft |
| Audio | 1,021 clips, es-MX-DaliaNeural |

## 4. Next: pass 4 (clinical tools)
1. **Mood episode checker** (`psych-mood.js` + `js/mood.js`): copy Usap Tayo's structure (`mde`, `manic`, `manicGate`, `extra`, `phq9`, `mdq` with `bands`), Spanish criterion lines as refs into `depression`/`mania` where they exist. PHQ-9 and MDQ: do NOT translate; point to the published validated Spanish versions (PHQ-9 Spanish is public domain via Pfizer/phqscreeners.com; MDQ Spanish validations exist) and keep the app's lines as interview paraphrases, as Usap Tayo 3.1.0 does with its source notes.
2. **Substance use screener** (`psych-sud.js` + rewrite `js/sud.js` and the `sudSections()` block in `js/mse-sheet.js`): substances alcohol, tobacco/vaping, cannabis, methamphetamine, cocaine, opioids/fentanyl (add naloxone and overdose lines), other, gambling; DSM-5-TR 11 criteria with `fill()` placeholders; AUDIT-C and Fagerström question lines in Spanish (score tables are not copyrighted text; keep the wording as paraphrase and cite the instruments); MI/OARS lines; nurse script generic. Drop betel entirely.
3. **Withdrawal and agitation** (`psych-withdrawal.js`; `js/withdrawal.js` reads `ALC_ASK`, `ALC_CRIT`, `ALC_CD`, `ALC_EXPLAIN`, `CAN_*`, `AGIT_LINES`, `SPECIAL`, `CASES`, `PAWSS`, `CIWA`, `NURSE`, `*_REF`, `QUICK`; check the shell's key list): alcohol, cannabis, add opioid withdrawal (COWS) since fentanyl is the US context; Spanish patient-facing lines.
4. **De-escalation** (`psych-deesc.js`: `behaviors`, `steps` (12, each `say` = refs into `deescalation`), `after`, `escalation`, `outcomes`) and **discharge** (`psych-discharge.js`: generic discharge summary fields with `refs`/`ask`/`picks`, `form: ''`; `js/discharge.js` reads `PSYCH_DISCHARGE.fields`). Keep the 12-step structure so the pocket card works; de-escalation phrases appended to section `deescalation` go at the END of its phrase list (append-only).
5. Release 0.4.0; data_check should grow checks for the new modules (refs resolve, `fill` placeholders).
6. Still open: her review of all Spanish drafts (consider a review workbook like Usap Tayo's, built from `PSYCH_SECTIONS` + `PSYCH_ANSWERS`); the `tl`-rule change in the design skill's `check_design.py`; `SHOW_OTHER_APPS` stays false.

## 5. Pitfalls learned
- Files to re-attach: none. Everything the next chat needs is in the two repos (Hablemos main + dev-tools, Usap Tayo for reference). Scratch extracts of Usap Tayo's English lines are regenerated with the vm snippet in step 1 of the recipe.
- Enabling or reading Pages through `gh api` is blocked in the session (public-surface rule); she enabled it in the repo settings. The live site is not reachable from the session either (isaymotion.github.io is not an allowed host).
- `check_design.py` runs its browser pass only when the static checks pass, so the `tl` FAIL also hides the browser results; use the dev-tools variant.
- The Usap Tayo audio workflow triggers on `js/data/**`; Hablemos also lists `js/lang.js` (the test line lives there).
- `V.moodEpisode` in `mood.js` was a one-liner; the empty-data guard was inserted after its opening brace, which is fine but easy to miss when editing.
- Usap Tayo's hero, badge, print tokens and `handout.js` NAVY/GOLD were hard-coded navy; all now carry the Hablemos red/gold. Grep for `#1e3265`/`#1C346E` after any CSS copy from Usap Tayo.
- A `git worktree add … origin/dev-tools -b dev-tools` fails once a local `dev-tools` branch exists (the pass-1 orphan branch); use `git worktree add /home/claude/hablemos-dev dev-tools` then `git pull --ff-only` inside it.
- The audio job for ~550 lines took 84 s and committed to `main` within 2 minutes of the push; always `git pull --rebase origin main` before the next push.
- `PSYCH_FLOW[].sections` must name existing sections (the handout builder reads `.phrases` directly); `key`, `PSYCH_MSE.ask/terms` refs may point at unwritten sections (filtered by `ref()`).
- `collect-texts.js` needs the 4th answer element only for non-Spanish tiles (digits); regional notes in `r` are not spoken and not collected.
- When splicing sections into `psych-phrases.js` by script, the last section object ends with `    }\n  ];` (no trailing comma); add the comma before inserting.
- `mse-sheet.js` renders `PSYCH_SUD` pages whenever the global exists; the guard is now `substances.length`, so an empty shell no longer crashes the sheet.
