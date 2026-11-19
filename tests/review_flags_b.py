#!/usr/bin/env python3
"""Hablemos review workbook: lines the drafting agents flagged for the native reviewer, HANDOFF.md sections 3k, 3l, 3m, and 3o
(tests/flags-0.10-0.11.md: FLAGS_3O_PSYCH, FLAGS_3O_LESSONS, ID_FLAGS_3O).
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

# Section 3o (0.10.0 psychiatry: nurse sections, nurse tools, interp-2, end-of-treatment form and cases, new case simulations, discharge and MSE cases).
# Source: tests/flags-0.10-0.11.md. Lowercase substrings of the Spanish text.
FLAGS_3O_PSYCH = [
    # Nurse sections
    '¿ha hecho del baño?',
    'hacer del uno',
    'siento que tiene calentura',
    'aguantar hasta que empeore',
    'no se quede callado',
    'se siente tan decaída',
    'ayudarle a sentirse más tranquilo',
    'asusta a los demás pacientes',
    'dejarla de golpe puede hacerlo sentir mal',
    'no cargue con todo usted solo',
    'la regadera',
    'ducharse',
    'pierde el equilibrio al caminar',
    '¿cómo quiere que le digamos?',
    # Nurse tools
    'mande un mensaje al 988',
    '¿fuma o usa vapeador?',
    'bajo la lengua',
    'es lenta o le cuesta esperar',
    'escúchelo con calma, sin discutir',
    # Interpretation drill
    'me dio un patatús',
    'estoy salado',
    'me dan bajones',
    'traigo el ánimo por los suelos',
    'me la curo con otra cerveza',
    'tengo el alma en un hilo',
    'ya quiero descansar de todo',
    # md quoted "Me muero de la pena"; real wording in the data:
    'me estoy muriendo de la pena',
    'mi esposo no me deja venir',
    # End-of-treatment form
    'del 0 al 10, donde 10 es lo peor',
    'si volviera, ¿cuáles serían las primeras señales de alerta?',
    'esos pensamientos de que no quería despertar',
    'doctor de cabecera',
    'sigamos reuniéndonos cada',
    'una sesión más dentro de',
    'oprima el 2 para español',
    'nuestra última sesión regular',
    'algo que le cueste trabajo',
    'en la regadera',
    'echarle un poco más de ganas',
    # Tomás (ocd)
    '¿verdad que está bien?',
    'basta con que revise una sola vez',
    'hay que pensar en positivo',
    'me siento un inútil',
    'las chapas de las puertas',
    'nunca están bien limpias',
    'lo echaría en un buzón',
    'ahora estoy en paz',
    'entre más me lavaba',
    'con cariño',
    'cierre de la nómina',
    # Marisela (ptsd)
    'su comadre quiso ayudarla',
    'se me salió el espíritu con el golpe',
    'hoy no voy a discutírselo',
    'dios ya no me quiere ver',
    'vivir duele demasiado',
    # md quoted "¿le tiemblan las manos si no toma?"; real wording in the data:
    'le tiemblan las manos si no toma',
    'siempre ando como en alerta',
    'el corazón no me hace caso',
    'se me antoja una cerveza',
    'la limpia me hizo sentir acompañada',
    'yo no veo ningún espíritu',
    'no voy a empezar desde cero',
    # Daniel (panic)
    'energéticas',
    'la neta',
    'mota no, ya hace años',
    'me hormiguean las manos',
    'se me durmieron las manos',
    'el cuerpo tiene como una alarma',
    'los médicos le llamamos ataque de pánico',
    'soy el doctor ___, de psiquiatría',
    'dígame dani',
    'si me atoro',
    'le tenía miedo al miedo',
    'una palmadita en la espalda',
    'la hora pico',
    'lo echo en un buzón',
    # Camila
    'usted se desespera porque se preocupa mucho',
    '¿de verdad le duele, o es floja?',
    'puros berrinches',
    'manda un texto al 988',
    '¿también piensas en morirte?',
    'se me fue la mente en blanco',
    'quisiera no estar aquí',
    'tu mamá es tu tutora',
    'no me pasa lo de ojalá no despertara',
    'me da nervio',
    'me quedo en la casa',
    'les avisaría a los de la entrada',
    'la consejera de la escuela',
    # Karla and Doña Carmen
    'con gusto te hablo de tú',
    'me asusté bien feo',
    'en no despertar',
    'por un lado, a ti te ayudó',
    'como en piloto automático',
    'con la que estoy enojada es conmigo misma',
    '¿esto es el taller?',
    'ya no puedo más',
    'siento que la estamos abandonando',
    'internarla unos días',
    'de mala gana',
    '¿y el cristal? ¡dios me libre!',
    'la veo desequilibrada',
    'ya me jubilé',
    '¿me permite platicar un ratito con usted?',
    # Lupe, Ramiro, Yesenia (admission MSE)
    'unas pastillas mías para dormir',
    'no sé si me detendría',
    'lo que oigo es mi propio pensamiento',
    'quizá tenga razón, pero no lo siento así',
    'todavía me tiemblan las manos',
    'yo no soy un borracho',
    'ya no quiere despertar',
    'perdone cómo me ve',
    'mi inglés es de obra',
    'ando bien malilla, doctora',
    'ahora que no las tengo siento todo',
    'es por algo que me pasó',
    'las azules ya no son lo que eran',
    # Nurse cases and Don Chuy
    'yo te hablo de tú, ¿va?',
    'es una revisión de rutina',
    '¿ustedes también están con ellos?',
    'aquí estamos para cuidarlo y mantenerlo seguro',
    '¿las voces le dicen que se haga daño?',
    'se mantengan parejos',
    'me piquen otra vez',
    'el temblor está peor que ayer',
    'hoy no lo voy a presionar',
    'que no deberían estar',
    'bichos en la cortina',
    'no se está volviendo loco',
    'me quedo con usted',
    'me saca una espina del corazón',
    'está bien, mija. apúntemelo',
]

# Section 3o (0.11.0 lessons: lesson-extra-3..7, grammar-cloze-pic, reading-3, dialogues-3, examples-5). Same source.
FLAGS_3O_LESSONS = [
    # Extras A1
    'tengo ganas a llorar',
    'ellos son enfermeras',
    'son las ocho y cuarta',
    'son la una y media',
    'hay mucho gente',
    'de mí hermana',
    'eso es mi mamá',
    'la hambre es fuerte',
    'hoy tenemos calor en la casa',
    'me siento sin fuerza',
    'voy a pedirle un análisis de sangre',
    'todos día',
    # Extras A2
    '¿cuántos cigarros fumaba al día?',
    'compraba verduras',
    'fueron las tres de la mañana',
    'llevo dos semanas tomar',
    'desde hace ayer',
    'lo tome con comida',
    'conozco que usted está cansado',
    'trabajo por una clínica',
    'se ___ di a mis nietos',
    'dígame porque dejó',
    'estoy peor de ayer',
    'menos de ayer',
    'duermo tanto horas',
    # Extras B1
    'se me no olvidó',
    'a mi hija se me perdió',
    'pastilita',
    'lapizito',
    'espérame tantito',
    'unas copitas',
    'se convirtió muy enojado',
    'se ___ muy callado',
    'se me han olvidado la cita',
    'preguntó si cuándo',
    'me dijo de que',
    'no se vayas',
    'nadaríamos',
    # Extras B2 and pictures
    'eso es lo cual me dijo',
    'les dije a mi hijo',
    'se admitieron a los pacientes',
    'si había pedido ayuda',
    'queda prohibido a fumar',
    'comunicarse a la clínica',
    'dolol',
    'ya mero llego',
    "no duerme na'",
    'fíjate que se me olvidó',
    'o sea, ¿no vas a ir',
    'aunque duerma ocho horas anoche',
    'trae puesta unos pantalones',
    'los dije a mis papás',
    'fue abrida',
    # Readings
    'basta decir que',
    'accidente de coche',
    'en mi propio carro',
    'un frenazo',
    'queja corporal',
    'responden con rodeos',
    'me volví más irritable',
    'a pedazos',
    'ya no la dejamos salir sola',
    'sentía que no podía respirar',
    'se encarga de los niños',
    'para el ánimo',
    'platicamos',
    # Dialogues
    'se nota que lo está pasando muy mal',
    'no puedo decirle que lo veo igual',
    'de eso estoy segura',
    'si esas ganas se vuelven más fuertes',
    'tómela cuando se acuerde',
    'puede darle un poco de sueño',
    'tal vez en unos cinco días',
    'le gustaría verla',
    'se queda entre nosotras',
    'alguien te hace daño',
    'es muy importante que venga',
    'oprimir el 2 para hablar en español',
    # Examples and picture cloze
    '¿a poco no se habría sentido mejor',
    'ni modo que le pidiera ayuda',
    'fíjese que, si hubiera sabido',
    'la neta',
    'de plano',
    'ya mero termina el turno',
    '¡qué pena que no hubiera nadie',
    'está en el otro lado',
    'hubieran sufrido por mi culpa',
    'suelo despertarme a las cuatro',
    'por si el seguro le reembolsara',
    'aunque nadie lo haga',
]

# Ids named in flags-0.10-0.11.md (0.11.0): Find the mistake items (Where ge:<id>), Listen and reply items (every row lr:<id>:...),
# and the two picture cloze items (Where cz:<id>). Merged into ID_FLAGS below.
ID_FLAGS_3O = {
    'e-a1-005', 'e-a2-006', 'e-a2-010', 'e-a2-014', 'e-b1-010', 'e-b1-016', 'e-b1-017', 'e-b1-036', 'e-b1-037', 'e-b2-018',
    'e-b2-020', 'e-b2-037',
    'r-062', 'r-091', 'r-081', 'r-103', 'r-112', 'r-099', 'r-086', 'r-120', 'r-118', 'r-106', 'r-113', 'r-090', 'r-036',
    'r-050', 'r-038', 'r-027',
    'c-a1-118', 'c-a2-118',
}
ID_FLAGS |= ID_FLAGS_3O


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
