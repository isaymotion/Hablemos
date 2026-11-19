#!/usr/bin/env python3
"""Hablemos review workbook: lines the drafting agents flagged for the native reviewer, HANDOFF.md sections 3k, 3l, 3m.
Plain data for the workbook builder (import only; nothing runs here).
  FLAGS_3K / FLAGS_3L / FLAGS_3M  lowercase substrings of the Spanish text; a row is highlighted when one occurs in it.
  ID_FLAGS    item ids; a row is highlighted when its key equals one.
  WORD_FLAGS  short words that would over-match as substrings; match only when equal to a whole cell value.
  PAIR_FLAGS  (a, b): highlight when BOTH words are present in the same row (word pairs, sound pairs, collocations).
All substrings were checked against js/data/*.js (grep -i, fixed string); the blank character U+FF3F is never included."""

# Section 3k (0.7.0: lessons-2..5, grammar-cloze, grammar-transform).
FLAGS_3K = [
    # reported speech without tense shift: c-b1-032..035 are in ID_FLAGS; "dijo que viene" is not in the data as such
    # cuando se siente / se sienta así
    'qué hace cuando se siente así', 'cuando se sienta así',
    # en cuanto se maree
    'en cuanto se',
    # quizás + indicative
    'quizás venga mañana', 'quizá mañana se sienta mejor',
    # se toma dos pastillas
    'se toma dos pastillas',
    # me di cuenta (de) que
    'me di cuenta',
    # ahorita
    'ahorita viene la doctora', 'ahorita cuándo',
    # Siento que sufra tanto
    'siento que sufra tanto',
    # Soy / Estoy casada
    'soy casada', 'estoy casada',
    # tardar en hacer efecto
    'va a tardar unas semanas en hacer efecto',
    # Hace cuánto tiempo oye esas voces
    'hace cuánto tiempo oye esas voces',
    # he tomado vs tomé
    'nunca he tomado medicina para los nervios', 'hoy no he tomado la pastilla de la mañana', 'nunca he tomado esta medicina',
    # lo / la for usted vs le
    'lo voy a examinar', 'la voy a llamar',
    # oprimir el 2
    'oprimir el 2',
    # estar malo
    'estar malo',
    # casual-speech spellings (lessons-5, "Casual speech")
    "estoy cansao de to'", "no 'toy durmiendo", "voy pa'l hospital", "¿cómo 'tá la nena", 'ya mero llego',
    "me duele to'l cuerpo", 'dolol',
    # leismo, doubled object, voseo attributions
    'leísmo', 'le vi ayer', 'lo vi a mi papá', 'vos tenés', '¿vos querés que te ayude',
]

# Section 3l (0.8.0), by sub-paragraph.
FLAGS_3L = [
    # Extras (lesson-extra-1.js, lesson-extra-2.js)
    'tiene que llenar la receta', 'cuando sale del hospital, venga', 'coge el autobús', 'me hormiguean las manos',
    '¿con quién platica cuando', '¿vos querés tomar agua', 'si la medicina le cae mal', 'estoy hecho polvo',
    'me siento como apagado', 'evaluar su seguridad', 'me da gusto verlo', 'se me va el hambre',
    '¿se le hace difícil', '"no como nada desde ayer"', 'espere un momento; ahorita lo atiendo', 'todavía no llega el camión',
    'estoy triste hace dos meses', 'para cuidarle bien',
    # Picture lessons (lessons-6.js)
    'trae puestos unos pantalones', '¿qué traía puesto', 'camisa azul oscuro', 'verde claro', 'siga derecho dos cuadras',
    'pase a la caja', 'tendida', 'siento el estómago pesado', 'vienen de afuera o de dentro',
    # Pictures (picture-*.js); single headwords are in WORD_FLAGS
    'como latidos', 'adormecido', 'escoja una de estas palabras',
    # Numbers (numbers.js)
    'son las doce menos diez', 'un siete de diez', 'ciento veinte sobre ochenta', 'sexto grado',
    'la habitación trescientos doce', 'la planta baja', 'ya van tres noches', 'su cita quedó para',
    'le toca la medicina cada ocho horas', 'una quincena',
]

# Section 3m (0.9.0), by sub-paragraph.
FLAGS_3M = [
    # Examples (examples-1..4.js; each is one headword's sentence)
    'ando bien malilla', 'hoy traigo la cruda', 'tengo el corazón apachurrado', 'perdone, estoy en las nubes',
    'cuando vi el accidente, se me fue el alma', 'estoy tan cansad', 'estoy que no puedo más', 'estoy hasta la madre',
    'su delirio es que', 'me sobó la barriga porque tenía empacho', 'se me va la mente', 'está con el mono',
    'le da malilla', 'darle vueltas al problema', 'buen insight', 'un temblor de los medicamentos',
    'gastaba todo su sueldo en piedra', 'la chiva está en todos lados', 'compra una caguama para ver el partido',
    'esa palabra, mongólico', 'le decían zafado', 'al bizarro bombero', 'le dijo una injuria', 'me fastidia que',
    'eventualmente tengo dolor de cabeza', 'introduzca la tarjeta', 'mi abuelo es muy cuerdo', 'me zumba el oído',
    'ingresado en el tercer piso', 'me gusta escuchar la radio', 'creo que mi vecino me vigila',
    'mi padrino me contesta el teléfono', 'mi padrino me ayuda con los gastos', 'mi comadre me acompaña a las citas',
    'mi cuñado toma cerveza', 'me pongo nerviosa cuando hay mucha gente', 'tardo mucho en dormirme',
    'mi primo es mudo de nacimiento', 'mi perro está muy gordo', 'mi hijo está muy flaco',
    'quiero hablar con el padre de mi iglesia',
    # Readings (reading-2.js)
    'por eso las familias esperan hasta que la situación es insostenible', 'es un término que sirve para casi todo',
    'una persona puede pasar años aguantando síntomas', 'y recordar que pedir ayuda no es rendirse',
    'pase, aquí todas hemos tenido miedo', 'échale ganas', 'cuando le tocó a lupe', 'nadie la apuró',
    'esa tristeza todavía me pesa', 'tómela con comida si le cae mal al estómago', 'paso por ti a la una y media',
    'no significaba que hubiera fracasado',
    # Dialogues (dialogues-2.js)
    'es un ingreso voluntario, o sea que usted decide si firma', 'puede pedir el alta por escrito',
    'su celular se guarda en la oficina', 'el equipo va a estar pendiente de usted', 'enferma de la mente',
    'le hicieron un mal', 'no quiero que te sientas juzgada', 'aunque tú pienses que hay otra causa',
    'uno aguanta', 'hay que echarle ganas', 'aviso del intérprete', 'treinta y seis y medio', 'ronchas',
]

# Item ids named in the handoff (3k), expanded one by one.
ID_FLAGS = {
    'c-b1-032', 'c-b1-033', 'c-b1-034', 'c-b1-035',                       # reported speech without tense shift
    'c-b2-041', 'c-b2-042', 'c-b2-043', 'c-b2-044', 'c-b2-045',           # future of probability: unique only within the options
    'c-b1-063',                                                            # as named in the handoff ("ahorita, weak distractors")
    'c-b1-071',                                                            # the cloze that really holds ahorita (c-b1-063 is hacerse)
}

# Single words / short phrases that must equal a whole cell (headword, picture word, one word of a pair).
WORD_FLAGS = {
    # Examples headwords
    'piedra', 'chiva', 'caguama', 'mudo', 'gordo', 'flaco', 'padrino', 'padre',
    # Pictures (3l)
    'la cintura', 'la cadera', 'el chamorro', 'el cachete', 'los palillos chinos', 'la salsa picante', 'el tazón',
    'el plato hondo', 'el campo de cultivo', 'los frijoles', 'el elote', 'la lechuga', 'la arrocera', 'el torniquete',
    'la tiendita', 'la tienda departamental', 'el mouse', 'sentirse solo', 'no saber qué hacer', 'el camión',
    # Pairs (3l)
    'sobreestimar',
    # Numbers (3l)
    'el mediodía', 'la medianoche',
    # Sound pairs (3m): words too short or common to match as substrings
    'ano', 'dado', 'llano',
}

# Both words must be present in the same row.
PAIR_FLAGS = [
    # Pairs (3l; word-pairs-*.js: a, b)
    ('quedarse', 'en blanco'), ('pedir', 'cita'), ('guardar', 'reposo'), ('trastorno', 'desorden'),
    ('hacerse de', 'la vista gorda'), ('hacerse', 'bolas'), ('agarrar', 'gripa'), ('ser', 'buena gente'),
    ('respirar', 'profundo'), ('trabajar', 'tiempo completo'), ('esposa', 'señora'),
    ('preocuparse', 'mortificarse'), ('hombre', 'mujer'),
    # Sound pairs (3m; sound-pairs.js)
    ('encerado', 'encerrado'), ('enterado', 'enterrado'), ('para', 'parra'), ('coro', 'corro'), ('ánimo', 'animó'),
    ('tomara', 'tomará'), ('continuo', 'continúo'), ('año', 'ano'), ('mudo', 'modo'), ('siente', 'sienta'),
]

# NOT FOUND (searched js/data/*.js; no invented substrings):
#  - "dijo que viene" (3k, reported speech without tense shift): no such wording; covered by ID_FLAGS c-b1-032..035.
#  - "carne de puerco" (3m Examples): no example sentence with carne / puerco; only the dictionary line "puerco | pork" (dict-everyday.js).
#  - "la cama está tendida" (3l Picture lessons): not a sentence; only the note "a made bed is tendida" (lessons-6.js), covered by 'tendida'.
#  - "habitación vs cuarto" (3l Numbers): no note comparing them; only "la habitación trescientos doce".
#  - "quizás + indicative" (3k): no cloze item; only the lesson lines "Quizás venga mañana" / "Quizá mañana se sienta mejor".
#  - "he tomado vs tomé" (3k): no single line contrasts them; the he-tomado lesson lines are flagged instead.
#  - "lo/la for usted vs le" (3k): only the pronoun table lines "Lo voy a examinar" / "La voy a llamar" (lessons-3.js).
#  - 3m Readings "the four long sentences": which four was not stated; the four longest sentences were chosen.
