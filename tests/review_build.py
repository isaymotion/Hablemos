#!/usr/bin/env python3
"""Hablemos native-speaker review workbook.
Usage: python3 tests/review_build.py rows.json   (rows.json from tests/review_collect.js)
Writes hablemos-review-2026-11b.xlsx in the current directory: a "How to use" sheet, then
Phrases, Replies, Tools, Strings (passes 2-4), Cases, Interp, Discharge cases, MSE cases (pass 5),
Lessons, Readings, Dialogues, Dictionary (pass 6), and the sheets added for 0.7.0 to 0.9.0: Extras, Cloze, Transform,
Verbs, Pictures, Pairs, Numbers, Examples, Sound pairs, Listening questions.
Rows whose Where or Spanish text matches a line pre-flagged in HANDOFF.md get a light-yellow fill and a Comment:
sections 3f, 3g, 3h (FLAGS, applied to rows that were in the first workbook) and 3k, 3l, 3m (review_flags_b.py,
applied to rows that are new since it). Dictionary rows are flagged by exact headword instead of substring.
Status column: tests/review-2026-11-keys.json holds the Where keys (and a hash of the Spanish) of the first workbook
(hablemos-review-2026-11.xlsx, built from 0.6.0); a row is "new" when its key is not there, "changed" when its
Spanish differs, blank when it is the same row as in the first workbook."""
import hashlib
import json
import os
import sys

from openpyxl import Workbook
from openpyxl.styles import Alignment, Font, PatternFill
from openpyxl.utils import get_column_letter

OUT = 'hablemos-review-2026-11b.xlsx'
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from review_flags_b import FLAGS_3K, FLAGS_3L, FLAGS_3M, ID_FLAGS, PAIR_FLAGS, WORD_FLAGS  # noqa: E402
BASE = json.load(open(os.path.join(HERE, 'review-2026-11-keys.json'), encoding='utf-8'))
FLAGS_NEW = [f.lower() for f in FLAGS_3K + FLAGS_3L + FLAGS_3M]
WORDS_NEW = {w.lower() for w in WORD_FLAGS}
IDS_NEW = {i.lower() for i in ID_FLAGS}
PAIRS_NEW = [(a.lower(), b.lower()) for a, b in PAIR_FLAGS]
FLAG_COMMENT = 'Pre-flagged by the drafting agent'
# Distinctive substrings, matched case-insensitively against Where + the Spanish columns of a row.
# Section 3f (pass 4: mood, SUD, withdrawal, de-escalation, discharge).
FLAGS_3F = [
    'le ha quedado mal', 'qué tanto', 'en la que', 'no le hacía falta', 'en {u}', 'meta por día', 'baños calientes',
    'malilla', 'las azules', 'sujet', 'comezón', 'escurre', 'botón', 'enfermero / la doctora', 'mientras esté lastimando',
    'cuando estemos más tranquilos', 'le hace enojar', 'por un momento', 'ingresado', 'susurra', 'bajito', 'cine lleno',
    'el litio necesita',
]
# Section 3g (pass 5: case simulations, interp drill, discharge and admission MSE cases, tool-section replies).
FLAGS_3G = [
    'me va a dar algo', 'echó el narcan', 'echaron mal de ojo', 'lo sujetamos', 'fosa nasal', 'se la damos hoy',
    'en pastilla o en líquido', 'como ida', 'ando con los nervios', 'me hablan los santos',
    'si sí me hizo', 'cosa de locos', 'me amarraron', 'oprimo el 2', 'me siento limpio', 'película de buprenorfina',
    'se me quitaron las ganas',
    'le hicieron un mal', 'ya no estorbe', 'me echó un trabajo', 'me hizo un trabajo', 'no quitan un trabajo', 'ropero',
    'los días se me juntan', 'bocina igualita', 'me va a apagar', 'me da coraje',
    'tengo la malilla', 'doy al cristal', 'rayita de perico', 'fumé tres azules', 'en el foil', 'préstamo rápido',
    'me va a caer mal',
]
# Section 3h (pass 6: lessons, readings, dialogues; dictionary headwords are in DICT_FLAGS).
FLAGS_3H = [
    'devuélvame la llamada', 'se me va la onda', 'me da pena',
    'ojalá me muriera', 'le da pena decirme', 'no está cuerdo', 'constipado',
    'hablar de esto en persona', 'el alcohol de golpe', 'r:carta-de-marisol:gloss:8', 'si la deja de repente',
    'arma a la mano', 'pastillas en otro cuarto',
    'dígame elena', 'prefiere que le diga', 'cómo amaneció', 'achaques', 'una limpia', 'comadre', 'le había hecho un mal',
    'tarda unas semanas', 'yo me encargo de que la tome', 'el que no llora no mama',
]
FLAGS = FLAGS_3F + FLAGS_3G + FLAGS_3H
# Dictionary headwords from 3h (exact match on the Spanish column, case-insensitive).
DICT_FLAGS = {
    'ahorita', 'catorcena', 'mi vieja', 'mi viejo', 'almuerzo', 'licenciado', 'licenciada', 'mijo', 'mija',
    'estampillas de comida', 'el otro lado', 'la migra', 'cartón', 'six', 'caguama', 'troca', 'casa móvil', 'tráiler',
    'limón', 'tusi', 'lean', 'mono', 'ando bien bajoneado', 'tengo el corazón apachurrado', 'me siento fuera de mí',
    'estoy hasta la madre', 'cuerdo', 'huevón', 'zafado', 'chiflado', 'bizarro', 'intoxicado', 'constipado', 'caída de mollera',
    'día de muertos', 'jale', 'malilla', 'ando bien malilla',
}
WIDTHS = {'Where': 24, 'Key': 22, 'Section': 24, 'Group/Section': 24, 'Case': 22, 'Field': 20, 'Domain': 20,
          'Speaker': 18, 'Lesson': 26, 'Reading': 24, 'Dialogue': 26, 'Kind': 12, 'POS': 7, 'Category': 12, 'Root': 14,
          'English': 55, 'Usted': 55, 'Tú': 55, 'Spanish': 55, 'Spanish draft': 55, 'Tú variant': 45, 'Asked (English)': 40,
          'Options': 40, 'Fix': 55, 'Note': 40, 'Regional': 40, 'Comment': 30, 'Status': 9, 'Level': 7, 'Verb': 14,
          'Picture': 22, 'Group': 22, 'Type': 16, 'Word A': 22, 'Word B': 22, 'English A': 22, 'English B': 22,
          'With the blank': 45, 'Answer': 18, 'Instruction': 30, 'From': 45, 'Also accepted': 40, 'Wrong options': 40,
          'Headword': 18, 'Meaning': 22, 'Text': 28}
WIDTHS_BY_SHEET = {'Lesson text': {'Text': 90}}
WRAP = {'English', 'Usted', 'Tú', 'Spanish', 'Spanish draft', 'Tú variant', 'Asked (English)', 'Options', 'Fix', 'Note',
        'Regional', 'Comment', 'With the blank', 'Instruction', 'From', 'Also accepted', 'Wrong options', 'Meaning',
        'English A', 'English B', 'Word A', 'Word B', 'Text', 'Lesson', 'Picture', 'Group'}
SPANISH_COLS = ('Usted', 'Tú', 'Spanish', 'Spanish draft', 'Tú variant')  # hashed for the Status column: do not change
FLAG_COLS = SPANISH_COLS + ('Word A', 'Word B', 'From', 'Also accepted', 'Headword', 'Regional', 'Options', 'Note',
                            'With the blank', 'Text')
WORD_COLS = ('Spanish', 'Word A', 'Word B', 'Headword')
YELLOW = PatternFill('solid', start_color='FFF2CC', end_color='FFF2CC')
BOLD = Font(bold=True)
TOP_WRAP = Alignment(wrap_text=True, vertical='top')
TOP = Alignment(vertical='top')
ORDER = ['Phrases', 'Replies', 'Tools', 'Strings', 'Cases', 'Interp', 'Discharge cases', 'MSE cases',
         'Lessons', 'Readings', 'Dialogues', 'Dictionary',
         'Extras', 'Cloze', 'Transform', 'Verbs', 'Pictures', 'Pairs', 'Numbers', 'Examples', 'Sound pairs',
         'Lesson text', 'Listening questions']
SHORT = {  # one line per sheet for the How to use page
    'Phrases': 'every interview and tool phrase, section by section, with Usted and Tú.',
    'Replies': 'sample patient replies (general groups and per section) used by the point board and listening drill.',
    'Tools': 'Spanish that lives only inside the clinical tools (scale option labels, templates with {s} {sa} {w} {u} '
             'placeholders filled per substance, observe-only scale items, case quotes, behavior labels).',
    'Strings': 'the app menu and settings labels in Spanish.',
    'Cases': 'the seven case simulations: what the patient or family says (Speaker) and the clinician choices '
             '(scored 0-2; the Note says which choice the app treats as best).',
    'Interp': 'the interpretation drill: idioms of distress with their gloss and clinical note.',
    'Discharge cases': 'patient and family answers in the five discharge practice cases, with the English question '
                       'that was asked.',
    'MSE cases': 'the two admission MSE cases: chief complaint, answers per MSE domain, documentation and evidence '
                 'options (chart quotes in Spanish).',
    'Lessons': 'example sentences from the 91 lessons, their "common mistake" lines (Spanish = the right form; the wrong '
               'form the app shows struck out is in Options), the quiz items and the 30 placement test items.',
    'Readings': 'the 20 graded readings: title, each paragraph, glosses and comprehension questions.',
    'Dialogues': 'the 16 dialogues, line by line; the Tú variant column is the informal version of the clinician line '
                 'where one exists.',
    'Extras': 'extra material for the 23 original lessons: three common mistakes, six more examples and a second quiz each.',
    'Cloze': 'Fill the blank drill: the Spanish column shows the sentence with the right answer in place; Options lists '
             'the four choices (only one should fit).',
    'Transform': 'Transform the sentence drill: From is what the learner sees, Spanish is the expected answer, Also accepted '
                 'lists other answers counted right, Wrong options must all be wrong.',
    'Verbs': 'the 154 verbs of the verb trainer with two example sentences each (conjugations are generated, not listed).',
    'Pictures': 'Picture words: every labelled word in the 38 pictures (with its article), the example sentence said for a '
                'word, and the body map questions and pain words.',
    'Pairs': 'Word pairs drill: opposites, near-synonyms (the Note explains the difference) and collocations (verb + word).',
    'Numbers': 'Numbers, dates and time: each row as the app says it, the notes shown above each group, and 40 short clinic '
               'lines with the question asked about them.',
    'Examples': 'one example sentence for each of 1,197 dictionary words (Headword and Meaning say which sense).',
    'Sound pairs': 'Listening drill: pairs of words that differ by one sound or by the stress (both must be real, common words).',
    'Lesson text': 'the explanations of the 91 lessons (English, with Spanish words, tables and usage claims such as "in Mexico '
                   'people say..."). Skim for wrong claims about Spanish; put the corrected text of the block in Fix.',
    'Listening questions': 'English questions about the dialogues and readings (optional; check that the answer is right).',
    'Dictionary': 'the clinical dictionary (headword, English, part of speech, category, root, note). Fix the headword, '
                  'the English or the note; say which in Comment if it is not obvious.',
}


def status(sheet, row):
    """'' = same row as in the first workbook, 'changed' = same key, different Spanish, 'new' = not in it."""
    base = BASE.get(sheet)
    if base is None:
        return 'new'
    key = row.get('Where') or row.get('Key')
    if sheet == 'Dictionary':
        key += '|' + row.get('English', '')
    h = hashlib.sha1('\x1f'.join(str(row.get(c, '')) for c in SPANISH_COLS).encode()).hexdigest()[:8]
    return 'new' if key not in base else ('' if base[key] == h else 'changed')


def flagged(sheet, row, st):
    if sheet == 'Dictionary':
        return str(row.get('Spanish', '')).strip().lower() in DICT_FLAGS
    if sheet == 'Listening questions':
        return False
    where = str(row.get('Where', '')).lower()
    if st != 'new':  # rows of the first workbook: the 3f, 3g, 3h lists
        text = ' '.join(str(row.get(k, '')) for k in ('Where',) + SPANISH_COLS).lower()
        return any(f in text for f in FLAGS)
    text = ' '.join(str(row.get(k, '')) for k in FLAG_COLS).lower()
    if where.split(':', 1)[-1] in IDS_NEW or any(f in text for f in FLAGS_NEW):
        return True
    cells = {str(row.get(k, '')).strip().lower() for k in WORD_COLS}
    reg = str(row.get('Regional', '')).lower()
    if cells & WORDS_NEW or (reg and any(w in reg for w in WORDS_NEW)):
        return True
    return sheet in ('Pairs', 'Sound pairs') and any(a in cells and b in cells for a, b in PAIRS_NEW)


def write_sheet(wb, name, rows):
    ws = wb.create_sheet(name)
    if not rows:
        ws.append(['(no rows)'])
        return 0, 0
    has_base = name in BASE
    headers = list(rows[0].keys())
    if has_base:
        headers.insert(1, 'Status')
    ws.append(headers)
    for c in ws[1]:
        c.font = BOLD
        c.alignment = TOP
    n_flag = n_new = 0
    for r in rows:
        st = status(name, r)
        n_new += st != ''
        hit = flagged(name, r, st)
        r = dict(r)
        r['Status'] = st
        if hit:
            r['Comment'] = FLAG_COMMENT if not r.get('Comment') else r['Comment'] + '; ' + FLAG_COMMENT
            n_flag += 1
        ws.append([r.get(h, '') for h in headers])
        for c in ws[ws.max_row]:
            c.alignment = TOP_WRAP if headers[c.column - 1] in WRAP else TOP
            if hit:
                c.fill = YELLOW
    for i, h in enumerate(headers, 1):
        ws.column_dimensions[get_column_letter(i)].width = WIDTHS_BY_SHEET.get(name, {}).get(h, WIDTHS.get(h, 16))
    ws.freeze_panes = 'A2'
    ws.auto_filter.ref = ws.dimensions
    return n_flag, n_new


def main():
    data = json.load(open(sys.argv[1], encoding='utf-8'))
    data = {k: v for k, v in data.items() if not k.startswith('_')}
    order = [k for k in ORDER if k in data] + [k for k in data if k not in ORDER]
    counts = {k: len(data.get(k, [])) for k in order}
    wb = Workbook()
    ws = wb.active
    ws.title = 'How to use'
    ws.column_dimensions['A'].width = 110
    flags, news = {}, {}
    for name in order:
        flags[name], news[name] = write_sheet(wb, name, data.get(name, []))
    lines = [
        'Hablemos: Spanish review workbook, second edition (November 2026, app version 0.9.0)',
        '',
        'This file replaces hablemos-review-2026-11.xlsx (built from version 0.6.0). The app has grown since then, so this '
        'edition has every row of the first file plus the new material. If you already wrote corrections in the first file, '
        'keep them there and send both files: nothing is lost, because the Where keys are the same. On the sheets that also '
        'existed in the first file, the Status column is blank for a row you have already seen, "new" for a row that was '
        'added since, and "changed" for a row whose Spanish we edited. Filter Status to "new" to see only what was added. '
        'The sheets from Extras to Listening questions are entirely new (Lesson text holds the lesson explanations, which the '
        'first file did not include).',
        '',
        'Hablemos is a web app that helps English-speaking psychiatry clinicians interview Spanish-speaking patients. It shows '
        'interview questions in English with a Spanish version to say or play, sample patient replies, clinical tools '
        '(mood checker, substance use screener, withdrawal scales, de-escalation checklist, discharge assessment), practice '
        'cases, and a learning track (lessons, readings, dialogues, a dictionary).',
        '',
        'Every Spanish line in this workbook is a draft written by Claude (an AI). None of it has been checked by a native '
        'speaker yet. We are asking you, as a native Spanish-speaking clinician, to correct it.',
        '',
        'Baseline: US Spanish with a Mexican baseline, as spoken by patients in a US hospital. Plain, respectful clinical '
        'register for the clinician; natural, sometimes colloquial speech for the patients and families in the cases. '
        'Regional alternatives are welcome in the Comment column.',
        '',
        'Columns:',
        '  Where: the key we use to apply your fix back into the app. Please do not edit it.',
        '  Status: blank, "new" or "changed" compared with the first workbook (see above). Read-only.',
        '  English: what the clinician means to say (or what the patient line means). On quiz rows it shows the correct answer.',
        '  Usted: the formal form, addressing the patient as usted. Tú: the same line addressing the patient as tú. '
        '(Phrases sheet only; other sheets have a single Spanish column, and Dialogues has a Tú variant column. Pairs and '
        'Sound pairs have Word A and Word B: write the corrected pair in Fix as "a / b".)',
        '  Note / Regional / Asked (English) / Options: context the drafting agent left (clinical context, gender forms, '
        'regional words, the question that was asked, the quiz options). Read-only context.',
        '  Fix: put the corrected Spanish here. Leave it blank if the line is fine as written. On the Phrases sheet, if both '
        'Usted and Tú need changes, write both in Fix, usted first, separated by " / ".',
        '  Comment: anything else (why you changed it, a regional alternative, "too long", "sounds translated", a question).',
        '',
        'The cases use a fictional roster (Mateo, Lupe, Brayan, Ramiro, Yesenia, Jorge, Don Chuy and their families). '
        'Please do not add any real patient details anywhere in this workbook.',
        '',
        'Rows highlighted in light yellow were already flagged by the drafting agent as doubtful (slang, Mexican-only usage, '
        'stilted phrasing, gender forms, register). Many lines use a masculine default adjective with a note (e.g. decaído/a) '
        'or pick one gender per line in the patient replies; if you prefer a gender-neutral rewrite, put it in Fix.',
        '',
        'Sheets in this workbook:',
    ]
    for k in order:
        lines.append('  %s (%d rows, %d new or changed, %d highlighted): %s' % (k, counts[k], news[k], flags[k], SHORT.get(k, '')))
    lines += [
        '',
        'If the file is too long to do in one sitting, the most useful sheets first are Phrases, Replies, Cases and Interp '
        '(what clinicians will actually say and hear), then Discharge cases, MSE cases, Pictures (the body map and body '
        'words are used with patients) and Numbers, then the teaching material: Lessons, Extras, Cloze, Transform, Verbs, '
        'Pairs, Sound pairs, Readings, Dialogues, Examples, Lesson text and the Dictionary. In the drills (Cloze, Transform, Pairs, Sound '
        'pairs) the most useful thing to tell us is when a "wrong" option is actually acceptable Spanish, or when a second '
        'answer should also count as right.',
        '',
        'Thank you. When you are done, send the file back as is; we read the Fix and Comment columns by the Where key.',
    ]
    for ln in lines:
        ws.append([ln])
    ws['A1'].font = Font(bold=True, size=14)
    for row in ws.iter_rows(min_row=1, max_row=ws.max_row):
        row[0].alignment = Alignment(wrap_text=True, vertical='top')
    wb.save(OUT)
    print(OUT, ', '.join('%s %d (%d new, %d flagged)' % (k, counts[k], news[k], flags[k]) for k in order))
    print('total rows %d, new or changed %d, flagged %d' % (sum(counts.values()), sum(news.values()), sum(flags.values())))


if __name__ == '__main__':
    main()
