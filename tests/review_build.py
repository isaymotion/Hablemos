#!/usr/bin/env python3
"""Hablemos native-speaker review workbook.
Usage: python3 tests/review_build.py rows.json   (rows.json from tests/review_collect.js)
Writes hablemos-review-2026-11.xlsx in the current directory: a "How to use" sheet, then
Phrases, Replies, Tools, Strings (passes 2-4), Cases, Interp, Discharge cases, MSE cases (pass 5),
Lessons, Readings, Dialogues, Dictionary (pass 6).
Rows whose Where or Spanish text matches a line pre-flagged in HANDOFF.md sections 3f, 3g and 3h get a
light-yellow fill and a Comment. Dictionary rows are flagged by exact headword instead of substring."""
import json
import sys

from openpyxl import Workbook
from openpyxl.styles import Alignment, Font, PatternFill
from openpyxl.utils import get_column_letter

OUT = 'hablemos-review-2026-11.xlsx'
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
          'Options': 40, 'Fix': 55, 'Note': 40, 'Regional': 40, 'Comment': 30}
WRAP = {'English', 'Usted', 'Tú', 'Spanish', 'Spanish draft', 'Tú variant', 'Asked (English)', 'Options', 'Fix', 'Note',
        'Regional', 'Comment'}
SPANISH_COLS = ('Usted', 'Tú', 'Spanish', 'Spanish draft', 'Tú variant')
YELLOW = PatternFill('solid', start_color='FFF2CC', end_color='FFF2CC')
BOLD = Font(bold=True)
TOP_WRAP = Alignment(wrap_text=True, vertical='top')
TOP = Alignment(vertical='top')
ORDER = ['Phrases', 'Replies', 'Tools', 'Strings', 'Cases', 'Interp', 'Discharge cases', 'MSE cases',
         'Lessons', 'Readings', 'Dialogues', 'Dictionary']
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
    'Lessons': 'example sentences from the 23 grammar and culture lessons, the quiz items (Spanish in the question or '
               'the options) and the 20 placement test items.',
    'Readings': 'the ten graded readings: title, each paragraph, glosses and comprehension questions.',
    'Dialogues': 'the eight dialogues, line by line; the Tú variant column is the informal version of the clinician line '
                 'where one exists.',
    'Dictionary': 'the clinical dictionary (headword, English, part of speech, category, root, note). Fix the headword, '
                  'the English or the note; say which in Comment if it is not obvious.',
}


def flagged(sheet, row):
    if sheet == 'Dictionary':
        return str(row.get('Spanish', '')).strip().lower() in DICT_FLAGS
    text = ' '.join(str(row.get(k, '')) for k in ('Where',) + SPANISH_COLS).lower()
    return any(f in text for f in FLAGS)


def write_sheet(wb, name, rows):
    ws = wb.create_sheet(name)
    if not rows:
        ws.append(['(no rows)'])
        return 0
    headers = list(rows[0].keys())
    ws.append(headers)
    for c in ws[1]:
        c.font = BOLD
        c.alignment = TOP
    n_flag = 0
    for r in rows:
        hit = flagged(name, r)
        if hit:
            r = dict(r)
            r['Comment'] = FLAG_COMMENT if not r.get('Comment') else r['Comment'] + '; ' + FLAG_COMMENT
            n_flag += 1
        ws.append([r.get(h, '') for h in headers])
        for c in ws[ws.max_row]:
            c.alignment = TOP_WRAP if headers[c.column - 1] in WRAP else TOP
            if hit:
                c.fill = YELLOW
    for i, h in enumerate(headers, 1):
        ws.column_dimensions[get_column_letter(i)].width = WIDTHS.get(h, 16)
    ws.freeze_panes = 'A2'
    ws.auto_filter.ref = ws.dimensions
    return n_flag


def main():
    data = json.load(open(sys.argv[1], encoding='utf-8'))
    order = [k for k in ORDER if k in data] + [k for k in data if k not in ORDER]
    counts = {k: len(data.get(k, [])) for k in order}
    wb = Workbook()
    ws = wb.active
    ws.title = 'How to use'
    ws.column_dimensions['A'].width = 110
    lines = [
        'Hablemos: Spanish review workbook (November 2026)',
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
        '  English: what the clinician means to say (or what the patient line means). On quiz rows it shows the correct answer.',
        '  Usted: the formal form, addressing the patient as usted. Tú: the same line addressing the patient as tú. '
        '(Phrases sheet only; other sheets have a single Spanish column, and Dialogues has a Tú variant column.)',
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
        lines.append('  %s (%d rows): %s' % (k, counts[k], SHORT.get(k, '')))
    lines += [
        '',
        'If the file is too long to do in one sitting, the most useful sheets first are Phrases, Replies, Cases and Interp '
        '(what clinicians will actually say and hear), then Discharge cases and MSE cases, then Lessons, Readings, Dialogues '
        'and the Dictionary.',
        '',
        'Thank you. When you are done, send the file back as is; we read the Fix and Comment columns by the Where key.',
    ]
    for ln in lines:
        ws.append([ln])
    ws['A1'].font = Font(bold=True, size=14)
    for row in ws.iter_rows(min_row=1, max_row=ws.max_row):
        row[0].alignment = Alignment(wrap_text=True, vertical='top')
    flags = {}
    for name in order:
        flags[name] = write_sheet(wb, name, data.get(name, []))
    wb.save(OUT)
    print(OUT, ', '.join('%s %d (%d flagged)' % (k, counts[k], flags[k]) for k in order))


if __name__ == '__main__':
    main()
