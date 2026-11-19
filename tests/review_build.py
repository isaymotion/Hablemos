#!/usr/bin/env python3
"""Hablemos native-speaker review workbook, third edition (0.11.0).
Usage: python3 tests/review_build.py rows.json   (rows.json from tests/review_collect.js)
       python3 tests/review_build.py rows.json --keys out.json   (write a baseline key file instead of the workbook)
Writes hablemos-review-2026-11c.xlsx in the current directory: a "How to use" sheet, then
Phrases, Replies, Nurse tools, Tools, Strings, Cases, Interp, Discharge cases, MSE cases, End-of-treatment cases (psychiatry),
Lessons, Readings, Dialogues, Dictionary, Extras, Cloze, Find the mistake, Listen and reply, Transform, Verbs, Pictures, Pairs,
Numbers, Examples, Sound pairs, Lesson text, Listening questions.
Rows whose Where or Spanish text matches a line pre-flagged in HANDOFF.md get a light-yellow fill and a Comment:
sections 3f, 3g, 3h (FLAGS, applied to rows that were in the first workbook) and 3k, 3l, 3m, 3o (review_flags_b.py, applied
to every row that was not in the first workbook; 3o = tests/flags-0.10-0.11.md). Dictionary rows are flagged by exact
headword instead of substring.
Status column, against two earlier workbooks. tests/review-2026-11-keys.json holds the Where keys (and a hash of the Spanish)
of the first workbook (hablemos-review-2026-11.xlsx, built from 0.6.0); tests/review-2026-11b-keys.json the same for the whole
0.9.0 tree (what the second workbook, hablemos-review-2026-11b.xlsx, contained; made by running this collector on 0.9.0 and
this script with --keys). Status: blank = in the first workbook, Spanish unchanged; "11b" = added in the second workbook
(in 0.9.0, not in the first), Spanish unchanged; "new" = in neither; "changed" = the key is in an earlier workbook but the
Spanish differs."""
import hashlib
import json
import os
import sys

from openpyxl import Workbook
from openpyxl.styles import Alignment, Font, PatternFill
from openpyxl.utils import get_column_letter

OUT = 'hablemos-review-2026-11c.xlsx'
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from review_flags_b import (FLAGS_3K, FLAGS_3L, FLAGS_3M, FLAGS_3O_LESSONS, FLAGS_3O_PSYCH, ID_FLAGS, PAIR_FLAGS,  # noqa: E402
                            WORD_FLAGS)
BASE = json.load(open(os.path.join(HERE, 'review-2026-11-keys.json'), encoding='utf-8'))    # first workbook (0.6.0)
_KB = os.path.join(HERE, 'review-2026-11b-keys.json')  # second workbook (0.9.0); absent only while --keys is making it
BASE_B = json.load(open(_KB, encoding='utf-8')) if os.path.exists(_KB) else {}
FLAGS_NEW = [f.lower() for f in FLAGS_3K + FLAGS_3L + FLAGS_3M + FLAGS_3O_PSYCH + FLAGS_3O_LESSONS]
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
          'Headword': 18, 'Meaning': 22, 'Text': 28, 'Tool': 10, 'Step': 28, 'Role': 10, 'Wrong version': 55, 'Why': 45,
          'Who': 22, 'Correct': 9}
WIDTHS_BY_SHEET = {'Lesson text': {'Text': 90}}
WRAP = {'English', 'Usted', 'Tú', 'Spanish', 'Spanish draft', 'Tú variant', 'Asked (English)', 'Options', 'Fix', 'Note',
        'Regional', 'Comment', 'With the blank', 'Instruction', 'From', 'Also accepted', 'Wrong options', 'Meaning',
        'English A', 'English B', 'Word A', 'Word B', 'Text', 'Lesson', 'Picture', 'Group', 'Step', 'Wrong version', 'Why', 'Who'}
SPANISH_COLS = ('Usted', 'Tú', 'Spanish', 'Spanish draft', 'Tú variant')  # hashed for the Status column: do not change
FLAG_COLS = SPANISH_COLS + ('Word A', 'Word B', 'From', 'Also accepted', 'Headword', 'Regional', 'Options', 'Note',
                            'With the blank', 'Text')
WORD_COLS = ('Spanish', 'Word A', 'Word B', 'Headword')
YELLOW = PatternFill('solid', start_color='FFF2CC', end_color='FFF2CC')
BOLD = Font(bold=True)
TOP_WRAP = Alignment(wrap_text=True, vertical='top')
TOP = Alignment(vertical='top')
ORDER = ['Phrases', 'Replies', 'Nurse tools', 'Tools', 'Strings', 'Cases', 'Interp', 'Discharge cases', 'MSE cases',
         'End-of-treatment cases', 'Lessons', 'Readings', 'Dialogues', 'Dictionary',
         'Extras', 'Cloze', 'Find the mistake', 'Listen and reply', 'Transform', 'Verbs', 'Pictures', 'Pairs', 'Numbers', 'Examples', 'Sound pairs',
         'Lesson text', 'Listening questions']
SHORT = {  # one line per sheet for the How to use page
    'Phrases': 'every interview and tool phrase, section by section, with Usted and Tú.',
    'Replies': 'sample patient replies (general groups and per section) used by the point board and listening drill.',
    'Tools': 'Spanish that lives only inside the clinical tools (scale option labels, templates with {s} {sa} {w} {u} '
             'placeholders filled per substance, observe-only scale items, case quotes, behavior labels).',
    'Strings': 'the app menu and settings labels in Spanish.',
    'Cases': 'the 16 case simulations (the Role column says clinician or nurse; nurse cases are played as the unit nurse): what the '
             'patient or family says (Speaker) and the clinician or nurse choices (scored 0-2; the Note says which choice the app '
             'treats as best).',
    'Interp': 'the interpretation drill (64 items): idioms of distress with their gloss and clinical note.',
    'Nurse tools': 'the nurse scripts of four tools (de-escalation, discharge, watching mood on the unit, nursing admission '
                   'interview), line by line: Spanish with usted, the Tú form, the English and the note for the nurse, with the '
                   'step title for context.',
    'End-of-treatment cases': 'patient answers in the four end-of-treatment practice cases (last session of outpatient '
                              'treatment), with the English question that was asked, and the chart quotes.',
    'Find the mistake': 'Find the mistake drill (160 items): Spanish is the corrected sentence, Wrong version is the sentence with '
                        'one wrong word that the learner sees; Why is the explanation.',
    'Listen and reply': 'Listen and reply drill (120 items): the line the learner hears (Kind = heard) and its four reply '
                        'options; exactly one option is marked correct (the natural reply), the other three must be good Spanish '
                        'that does not fit.',
    'Discharge cases': 'patient and family answers in the nine discharge practice cases, with the English question '
                       'that was asked.',
    'MSE cases': 'the nine admission MSE cases: chief complaint, answers per MSE domain, documentation and evidence '
                 'options (chart quotes in Spanish).',
    'Lessons': 'example sentences from the 91 lessons, their "common mistake" lines (Spanish = the right form; the wrong '
               'form the app shows struck out is in Options), the quiz items and the 30 placement test items.',
    'Readings': 'the 30 graded readings: title, each paragraph, glosses and comprehension questions.',
    'Dialogues': 'the 24 dialogues, line by line; the Tú variant column is the informal version of the clinician line '
                 'where one exists.',
    'Extras': 'extra material for the lessons (Where lx:<lesson>:...): common mistakes, more examples and a second quiz for each of the 91 '
              'lessons.',
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
    'Examples': 'one example sentence for each of 1,417 dictionary words (Headword and Meaning say which sense).',
    'Sound pairs': 'Listening drill: pairs of words that differ by one sound or by the stress (both must be real, common words).',
    'Lesson text': 'the explanations of the 91 lessons (English, with Spanish words, tables and usage claims such as "in Mexico '
                   'people say..."). Skim for wrong claims about Spanish; put the corrected text of the block in Fix.',
    'Listening questions': 'English questions about the dialogues and readings (optional; check that the answer is right).',
    'Dictionary': 'the clinical dictionary (headword, English, part of speech, category, root, note). Fix the headword, '
                  'the English or the note; say which in Comment if it is not obvious.',
}


def spanish_hash(row):
    return hashlib.sha1('\x1f'.join(str(row.get(c, '')) for c in SPANISH_COLS).encode()).hexdigest()[:8]


def row_key(sheet, row):
    key = row.get('Where') or row.get('Key')
    return key + '|' + row.get('English', '') if sheet == 'Dictionary' else key


def status(sheet, row):
    """Returns (status, in_first). '' = in the first workbook, same Spanish; 'changed' = the key is in an earlier workbook
    but the Spanish differs; '11b' = in the second workbook (the 0.9.0 baseline) but not the first, same Spanish;
    'new' = in neither. in_first says whether the key was in the first workbook (decides which flag lists apply)."""
    key, h = row_key(sheet, row), spanish_hash(row)
    first, second = BASE.get(sheet) or {}, BASE_B.get(sheet) or {}
    if key in first:
        return ('' if first[key] == h else 'changed'), True
    if key in second:
        return ('11b' if second[key] == h else 'changed'), False
    return 'new', False


def keys_file(data, path):
    """Write a baseline key file (same format as review-2026-11-keys.json: sheet -> {key: hash of the Spanish})."""
    out = {k: {row_key(k, r): spanish_hash(r) for r in rows} for k, rows in data.items() if rows}
    json.dump(out, open(path, 'w', encoding='utf-8'), ensure_ascii=False)
    print(path, {k: len(v) for k, v in out.items()})


def flagged(sheet, row, in_first):
    if sheet == 'Dictionary':
        return str(row.get('Spanish', '')).strip().lower() in DICT_FLAGS
    if sheet == 'Listening questions':
        return False
    where = str(row.get('Where', '')).lower()
    if in_first:  # rows of the first workbook: the 3f, 3g, 3h lists
        text = ' '.join(str(row.get(k, '')) for k in ('Where',) + SPANISH_COLS).lower()
        return any(f in text for f in FLAGS)
    text = ' '.join(str(row.get(k, '')) for k in FLAG_COLS).lower()
    rest = where.split(':', 1)[-1]  # the key after the prefix; its first part is the item id for cz:, ge:, lr:
    if rest in IDS_NEW or rest.split(':')[0] in IDS_NEW or any(f in text for f in FLAGS_NEW):
        return True
    cells = {str(row.get(k, '')).strip().lower() for k in WORD_COLS}
    reg = str(row.get('Regional', '')).lower()
    if cells & WORDS_NEW or (reg and any(w in reg for w in WORDS_NEW)):
        return True
    return sheet in ('Pairs', 'Sound pairs') and any(a in cells and b in cells for a, b in PAIRS_NEW)


BY = {}  # sheet -> {status: count}, filled by write_sheet for the summary printed at the end


def write_sheet(wb, name, rows):
    ws = wb.create_sheet(name)
    if not rows:
        ws.append(['(no rows)'])
        return 0, 0
    has_base = True  # every sheet has a Status column: sheets in neither baseline are all "new"
    headers = list(rows[0].keys())
    if has_base:
        headers.insert(1, 'Status')
    ws.append(headers)
    for c in ws[1]:
        c.font = BOLD
        c.alignment = TOP
    n_flag = n_new = 0
    BY[name] = {}
    for r in rows:
        st, in_first = status(name, r)
        n_new += st != ''
        BY[name][st] = BY[name].get(st, 0) + 1
        hit = flagged(name, r, in_first)
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
    if len(sys.argv) > 3 and sys.argv[2] == '--keys':
        keys_file(data, sys.argv[3])
        return
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
        'Hablemos: Spanish review workbook, third edition (November 2026, app version 0.11.0)',
        '',
        'There are now three review files: hablemos-review-2026-11.xlsx (the first, built from version 0.6.0), '
        'hablemos-review-2026-11b.xlsx (the second, version 0.9.0) and this one, hablemos-review-2026-11c.xlsx (version 0.11.0). '
        'This file has every row of the first two plus the material added in 0.10.0 and 0.11.0. If you already wrote corrections '
        'in one of the earlier files, keep them there and send all the files you worked in: nothing is lost, because a '
        'correction written in any of the three files is applied by the same Where key. The Status column tells you what is '
        'where: blank = the row was already in the first file (and its Spanish is unchanged); "11b" = the row was added in '
        'the second file; "new" = the row is new in this file (added in 0.10.0 or 0.11.0); "changed" = the row existed in an '
        'earlier file but we have edited its Spanish since. Filter Status to "new" to see only what this file adds. Sheets that '
        'are entirely new in this file are Nurse tools, End-of-treatment cases, Find the mistake and Listen and reply.',
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
        '  Status: blank, "11b", "new" or "changed" compared with the first and second workbooks (see above). Read-only.',
        '  English: what the clinician means to say (or what the patient line means). On quiz rows it shows the correct answer.',
        '  Usted: the formal form, addressing the patient as usted. Tú: the same line addressing the patient as tú. '
        '(Phrases and Nurse tools have both, with the formal form in the Usted or Spanish column; other sheets have a single '
        'Spanish column, and Dialogues has a Tú variant column. Pairs and Sound pairs have Word A and Word B: write the corrected '
        'pair in Fix as "a / b". On Find the mistake, Spanish is the correct sentence and Wrong version is what the learner '
        'sees: correct the Spanish column, or say in Comment that the wrong version is not really wrong. On Listen and reply, '
        'the Correct column marks the one natural reply; say in Comment if another option would also be fine, or if the marked '
        'one is not natural.)',
        '  Note / Regional / Asked (English) / Options: context the drafting agent left (clinical context, gender forms, '
        'regional words, the question that was asked, the quiz options). Read-only context.',
        '  Fix: put the corrected Spanish here. Leave it blank if the line is fine as written. On the Phrases sheet, if both '
        'Usted and Tú need changes, write both in Fix, usted first, separated by " / ".',
        '  Comment: anything else (why you changed it, a regional alternative, "too long", "sounds translated", a question).',
        '',
        'The cases use a fictional roster (Mateo, Lupe, Brayan, Ramiro, Yesenia, Jorge, Don Chuy, Tomás, Marisela, Daniel, Camila, '
        'Karla, Doña Carmen and their families). The nurse cases and the Nurse tools are written for the unit nurse, who says '
        'the Spanish to the patient and reports to the doctor in English. '
        'Please do not add any real patient details anywhere in this workbook.',
        '',
        'Rows highlighted in light yellow were already flagged by the drafting agent as doubtful (slang, Mexican-only usage, '
        'stilted phrasing, gender forms, register). Many lines use a masculine default adjective with a note (e.g. decaído/a) '
        'or pick one gender per line in the patient replies; if you prefer a gender-neutral rewrite, put it in Fix.',
        '',
        'Sheets in this workbook:',
    ]
    for k in order:
        by = BY.get(k, {})
        stat = ', '.join('%d %s' % (by[x], x) for x in ('new', '11b', 'changed') if by.get(x))
        lines.append('  %s (%d rows%s, %d highlighted): %s' % (k, counts[k], ' [' + stat + ']' if stat else '', flags[k], SHORT.get(k, '')))
    lines += [
        '',
        'Suggested order if the file is too long to do in one sitting: the psychiatry sheets first, because that is what '
        'clinicians will actually say and hear: Phrases, Replies, Nurse tools, Cases, Interp, then Discharge cases, MSE cases and '
        'End-of-treatment cases. Then Pictures (the body map and body words are used with patients) and Numbers, then the teaching '
        'material: Lessons, Extras, Find the mistake, Listen and reply, Cloze, Transform, Verbs, Pairs, Sound pairs, Readings, '
        'Dialogues, Examples, Lesson text and the Dictionary. Within a sheet, filter Status to "new" first. In the drills (Cloze, '
        'Find the mistake, Listen and reply, Transform, Pairs, Sound pairs) the most useful thing to tell us is when a "wrong" '
        'option or sentence is actually acceptable Spanish, or when a second answer should also count as right.',
        '',
        'Thank you. When you are done, send the file back as is; we read the Fix and Comment columns by the Where key.',
    ]
    for ln in lines:
        ws.append([ln])
    ws['A1'].font = Font(bold=True, size=14)
    for row in ws.iter_rows(min_row=1, max_row=ws.max_row):
        row[0].alignment = Alignment(wrap_text=True, vertical='top')
    wb.save(OUT)
    for k in order:
        by = BY.get(k, {})
        print('%-24s rows %5d  new %5d  11b %5d  changed %4d  highlighted %4d' % (k, counts[k], by.get('new', 0), by.get('11b', 0), by.get('changed', 0), flags[k]))
    print(OUT, 'total rows %d, with a Status %d, highlighted %d' % (sum(counts.values()), sum(news.values()), sum(flags.values())))


if __name__ == '__main__':
    main()
