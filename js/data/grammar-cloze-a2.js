/* Grammar fill-the-blank items (Hablemos 0.7.0), A2, ids c-a2-001 on (5 per A2 grammar lesson). Used by #/cloze (js/cloze.js).
   DRAFT FOR REVIEW by a native Spanish-speaking clinician before use. US / Mexican baseline; clinician lines use usted.
   Shape: window.GRAMMAR_CLOZE = (window.GRAMMAR_CLOZE || []).concat([
     { id: 'c-a2-001', lv: 'A2', l: '<lesson id>', s: 'Yo ＿ médico.', a: 'soy', opts: ['soy', 'estoy', 'tengo', 'hay'], en: 'I am a doctor.', why: 'One sentence.' } ]);
   lv: A1 | A2 | B1 | B2; l: the id of the lesson that teaches the point (js/data/lessons*.js). ＿ (U+FF3F) is its own word,
   exactly once in s. a is one of the 4 distinct opts (any position); App.fillBlank(s, a) (js/cloze.js) puts a into s,
   with a capital letter at the start of a sentence or after ¿ ¡, and that sentence must be correct and natural (it is
   spoken and recorded). Every other option is wrong for the point taught. en and why are shown after the answer.
   Ids are permanent: append only after release (never insert, reorder or delete). */
window.GRAMMAR_CLOZE = (window.GRAMMAR_CLOZE || []).concat([
  /* present-tense */
  { id: "c-a2-001", lv: "A2", l: "present-tense", s: "¿Usted ＿ algún medicamento?", a: "toma", opts: ["tomas", "tomo", "toma", "toman"], en: "Do you take any medication?", why: "Usted takes the third person singular: toma." },
  { id: "c-a2-002", lv: "A2", l: "present-tense", s: "Nosotros ＿ a las siete.", a: "comemos", opts: ["comemos", "comen", "como", "comes"], en: "We eat at seven.", why: "Nosotros takes the -emos ending for -er verbs." },
  { id: "c-a2-003", lv: "A2", l: "present-tense", s: "Mi esposo ＿ de noche en una fábrica.", a: "trabaja", opts: ["trabajo", "trabaja", "trabajas", "trabajan"], en: "My husband works nights in a factory.", why: "One other person takes the -a ending: trabaja." },
  { id: "c-a2-004", lv: "A2", l: "present-tense", s: "¿Qué ＿ usted durante el día?", a: "hace", opts: ["haces", "hago", "hacen", "hace"], en: "What do you do during the day?", why: "Hacer is irregular only in yo (hago); usted is hace." },
  { id: "c-a2-005", lv: "A2", l: "present-tense", s: "Ellos ＿ en una casa pequeña.", a: "viven", opts: ["vive", "vivimos", "viven", "vivo"], en: "They live in a small house.", why: "Ellos takes the -en ending for -ir verbs: viven." },

  /* reflexive-feelings */
  { id: "c-a2-006", lv: "A2", l: "reflexive-feelings", s: "¿Cómo ＿ siente hoy?", a: "se", opts: ["se", "le", "lo", "me"], en: "How do you feel today?", why: "Sentirse is reflexive, and usted takes se: se siente." },
  { id: "c-a2-007", lv: "A2", l: "reflexive-feelings", s: "Me ＿ miedo quedarme solo.", a: "da", opts: ["das", "da", "doy", "dan"], en: "I am afraid of being left alone.", why: "In me da miedo the thing that scares is the subject; an infinitive counts as singular, so da." },
  { id: "c-a2-008", lv: "A2", l: "reflexive-feelings", s: "Se me ＿ las cosas.", a: "olvidan", opts: ["olvida", "olvido", "olvidas", "olvidan"], en: "I forget things.", why: "In se me olvida the forgotten thing is the subject, and las cosas is plural." },
  { id: "c-a2-009", lv: "A2", l: "reflexive-feelings", s: "Me ＿ muy solo desde que murió mi esposa.", a: "siento", opts: ["sienta", "sento", "siente", "siento"], en: "I have felt very alone since my wife died.", why: "With me the verb is the yo form: me siento." },
  { id: "c-a2-010", lv: "A2", l: "reflexive-feelings", s: "Todos los días me ＿ a las seis.", a: "levanto", opts: ["levanto", "levanta", "levantas", "levantan"], en: "Every day I get up at six.", why: "Me goes with the yo form of the reflexive verb: me levanto." },

  /* gustar-doler */
  { id: "c-a2-011", lv: "A2", l: "gustar-doler", s: "Me ＿ los pies.", a: "duelen", opts: ["duele", "duelo", "duelen", "dolen"], en: "My feet hurt.", why: "Doler agrees with what hurts; los pies is plural, so duelen." },
  { id: "c-a2-012", lv: "A2", l: "gustar-doler", s: "¿＿ duele el pecho?", a: "le", opts: ["lo", "le", "se", "la"], en: "Does your chest hurt?", why: "The person who hurts is the indirect object: le duele for usted." },
  { id: "c-a2-013", lv: "A2", l: "gustar-doler", s: "Ya no me ＿ salir con mis amigos.", a: "gusta", opts: ["gusta", "gustan", "gusto", "gustas"], en: "I no longer like going out with my friends.", why: "An infinitive as the thing liked takes the singular: me gusta salir." },
  { id: "c-a2-014", lv: "A2", l: "gustar-doler", s: "A mi hijo le ＿ los videojuegos.", a: "gustan", opts: ["gusta", "gusto", "gustan", "gustas"], en: "My son likes video games.", why: "Gustar agrees with what is liked; los videojuegos is plural." },
  { id: "c-a2-015", lv: "A2", l: "gustar-doler", s: "Le ＿ mucho levantarse por la mañana.", a: "cuesta", opts: ["cuestan", "cuesta", "cuesto", "costa"], en: "It is very hard for him to get up in the morning.", why: "Costar works like gustar and agrees with the infinitive: le cuesta." },

  /* past-timelines */
  { id: "c-a2-016", lv: "A2", l: "past-timelines", s: "Antes ＿ bien, pero ahora me despierto a cada rato.", a: "dormía", opts: ["duermo", "dormiré", "dormido", "dormía"], en: "I used to sleep well, but now I wake up all the time.", why: "Antes describes how things used to be, which takes the imperfect: dormía." },
  { id: "c-a2-017", lv: "A2", l: "past-timelines", s: "Hace dos meses ＿ el trabajo.", a: "perdí", opts: ["perdía", "pierdo", "perdí", "perder"], en: "Two months ago I lost my job.", why: "A single event at a point in the past takes the preterite: perdí." },
  { id: "c-a2-018", lv: "A2", l: "past-timelines", s: "＿ dos noches sin dormir.", a: "llevo", opts: ["llevo", "hago", "estoy", "soy"], en: "I have gone two nights without sleep.", why: "Llevar plus time plus sin says how long something has not happened." },
  { id: "c-a2-019", lv: "A2", l: "past-timelines", s: "Hace tres semanas ＿ no duermo bien.", a: "que", opts: ["desde", "por", "cuando", "que"], en: "I have not slept well for three weeks.", why: "Hace plus time plus que plus the present says how long something has gone on." },
  { id: "c-a2-020", lv: "A2", l: "past-timelines", s: "Estoy triste ＿ marzo.", a: "desde", opts: ["hace", "desde", "que", "llevo"], en: "I have been sad since March.", why: "Desde goes before a starting point such as a month or a date." },

  /* commands-instructions */
  { id: "c-a2-021", lv: "A2", l: "commands-instructions", s: "Señora, ＿ hondo, por favor.", a: "respire", opts: ["respiro", "respirando", "respiró", "respire"], en: "Ma'am, breathe deeply, please.", why: "The usted command of an -ar verb ends in -e: respire." },
  { id: "c-a2-022", lv: "A2", l: "commands-instructions", s: "Señor, ＿ aquí, por favor.", a: "siéntese", opts: ["siéntese", "siéntense", "siéntate", "se sentó"], en: "Sir, sit here, please.", why: "Siéntese is the usted command of sentarse for one person; siéntense is for ustedes and siéntate for tú." },
  { id: "c-a2-023", lv: "A2", l: "commands-instructions", s: "No ＿ de tomar la medicina sin hablar con nosotros.", a: "deje", opts: ["dejar", "dejé", "deje", "déjese"], en: "Do not stop taking the medicine without talking to us.", why: "A negative usted command uses the -e form after no: no deje." },
  { id: "c-a2-024", lv: "A2", l: "commands-instructions", s: "＿ de esperar aquí.", a: "favor", opts: ["por favor", "favor", "hace", "haga"], en: "Please wait here.", why: "The polite instruction is favor de plus an infinitive; por favor de is a common mistake." },
  { id: "c-a2-025", lv: "A2", l: "commands-instructions", s: "¿Me ＿ decir su fecha de nacimiento?", a: "puede", opts: ["pueda", "poder", "puedo", "puede"], en: "Can you tell me your date of birth?", why: "A polite request uses ¿me puede plus an infinitive, with usted." },

  /* body-symptoms */
  { id: "c-a2-026", lv: "A2", l: "body-symptoms", s: "Me ＿ las manos por las mañanas.", a: "tiemblan", opts: ["tiembla", "tiemblan", "tembla", "tiemblo"], en: "My hands shake in the mornings.", why: "The hands are the subject and plural, and temblar changes e to ie: tiemblan." },
  { id: "c-a2-027", lv: "A2", l: "body-symptoms", s: "Me ＿ el aire cuando subo las escaleras.", a: "falta", opts: ["falta", "faltan", "falto", "faltas"], en: "I get short of breath when I climb the stairs.", why: "In me falta el aire the air is the subject, so the verb is singular." },
  { id: "c-a2-028", lv: "A2", l: "body-symptoms", s: "Tengo dolor ＿ espalda.", a: "de", opts: ["en", "del", "de", "la"], en: "I have back pain.", why: "Dolor de plus a body part with no article names the kind of pain; espalda is feminine, so del is wrong." },
  { id: "c-a2-029", lv: "A2", l: "body-symptoms", s: "Me siento ＿ cuando me levanto.", a: "mareado", opts: ["mareado", "mareo", "marea", "mareando"], en: "I feel dizzy when I stand up.", why: "Me siento needs an adjective; mareo is the noun dizziness." },
  { id: "c-a2-030", lv: "A2", l: "body-symptoms", s: "Se me ＿ el corazón de repente.", a: "acelera", opts: ["aceleran", "acelero", "acelerado", "acelera"], en: "My heart suddenly races.", why: "El corazón is the subject and singular: se me acelera." },

  /* medicines-dosing */
  { id: "c-a2-031", lv: "A2", l: "medicines-dosing", s: "Tome una pastilla ＿ ocho horas.", a: "cada", opts: ["todas", "cada", "todos", "cuando"], en: "Take one pill every eight hours.", why: "Cada plus a number gives the interval: cada ocho horas." },
  { id: "c-a2-032", lv: "A2", l: "medicines-dosing", s: "Tómela ＿ la noche, antes de dormir.", a: "por", opts: ["de", "con", "por", "sin"], en: "Take it at night, before bed.", why: "A part of the day without a clock time takes por: por la noche." },
  { id: "c-a2-033", lv: "A2", l: "medicines-dosing", s: "Esta medicina se toma ＿ comida.", a: "con", opts: ["en", "con", "de", "a"], en: "This medicine is taken with food.", why: "With food is con comida." },
  { id: "c-a2-034", lv: "A2", l: "medicines-dosing", s: "Tome dos pastillas ＿ día.", a: "al", opts: ["a la", "del", "a el", "al"], en: "Take two pills a day.", why: "Times per day is al día, with a and el joined." },
  { id: "c-a2-035", lv: "A2", l: "medicines-dosing", s: "Si se le olvida una dosis, no tome dos ＿.", a: "juntas", opts: ["juntos", "junta", "juntas", "junto"], en: "If you miss a dose, do not take two together.", why: "Juntas agrees with the hidden word dosis, which is feminine plural here." },

  /* preterite-regular */
  { id: "c-a2-036", lv: "A2", l: "preterite-regular", s: "Ayer ＿ a la clínica.", a: "llamé", opts: ["llamé", "llamo", "llamaré", "llame"], en: "Yesterday I called the clinic.", why: "The yo preterite of -ar verbs ends in a stressed -é; without the accent, llame is a command form." },
  { id: "c-a2-037", lv: "A2", l: "preterite-regular", s: "¿Cuándo ＿ a sentirse así?", a: "empezó", opts: ["empezo", "empecé", "empezaste", "empezó"], en: "When did you start feeling this way?", why: "Usted takes the -ó ending in the preterite, and the accent is needed." },
  { id: "c-a2-038", lv: "A2", l: "preterite-regular", s: "Anoche no ＿ nada.", a: "comí", opts: ["comí", "como", "comer", "comiendo"], en: "Last night I did not eat anything.", why: "Anoche marks a finished past event, so the preterite: comí." },
  { id: "c-a2-039", lv: "A2", l: "preterite-regular", s: "La semana pasada ＿ con mi hermana.", a: "hablé", opts: ["hablo", "hable", "hablé", "hablar"], en: "Last week I talked with my sister.", why: "A finished event last week takes the preterite; yo ends in -é." },
  { id: "c-a2-040", lv: "A2", l: "preterite-regular", s: "Mis papás ＿ a Chicago en 2010.", a: "llegaron", opts: ["llegó", "llegaron", "llegamos", "llegué"], en: "My parents arrived in Chicago in 2010.", why: "Mis papás is they, so the preterite ending is -aron." },

  /* preterite-irregular */
  { id: "c-a2-041", lv: "A2", l: "preterite-irregular", s: "Ayer ＿ al médico.", a: "fui", opts: ["fuí", "voy", "fui", "ido"], en: "Yesterday I went to the doctor.", why: "Ir has the irregular preterite fui, written without an accent." },
  { id: "c-a2-042", lv: "A2", l: "preterite-irregular", s: "Anoche ＿ una pesadilla horrible.", a: "tuve", opts: ["tuve", "tení", "tuví", "tengo"], en: "Last night I had a horrible nightmare.", why: "Tener has the irregular stem tuv- in the preterite and no accent: tuve." },
  { id: "c-a2-043", lv: "A2", l: "preterite-irregular", s: "No ＿ dormir en toda la noche.", a: "pude", opts: ["podí", "pudí", "podé", "pude"], en: "I could not sleep all night.", why: "Poder has the irregular preterite stem pud-: pude." },
  { id: "c-a2-044", lv: "A2", l: "preterite-irregular", s: "¿Qué le ＿ el doctor?", a: "dijo", opts: ["decío", "dijo", "dició", "dijió"], en: "What did the doctor tell you?", why: "Decir has the stem dij- in the preterite, and after j the ending is -o, not -ió." },
  { id: "c-a2-045", lv: "A2", l: "preterite-irregular", s: "Mi hermano ＿ a visitarme el domingo.", a: "vino", opts: ["vino", "venió", "vinó", "vení"], en: "My brother came to visit me on Sunday.", why: "Venir has the irregular preterite vino, with no accent." },

  /* imperfect */
  { id: "c-a2-046", lv: "A2", l: "imperfect", s: "De niño ＿ en un rancho con mis abuelos.", a: "vivía", opts: ["vivo", "vivía", "viviré", "vivido"], en: "As a child I lived on a ranch with my grandparents.", why: "Background in childhood takes the imperfect: vivía." },
  { id: "c-a2-047", lv: "A2", l: "imperfect", s: "Antes yo ＿ más paciente.", a: "era", opts: ["eras", "sea", "iba", "era"], en: "I used to be more patient.", why: "A past trait takes the imperfect of ser: yo era." },
  { id: "c-a2-048", lv: "A2", l: "imperfect", s: "Cuando ＿ joven, iba mucho al cine.", a: "era", opts: ["fui", "eres", "era", "seré"], en: "When I was young, I went to the movies a lot.", why: "Age and life stage in the past take the imperfect: cuando era joven." },
  { id: "c-a2-049", lv: "A2", l: "imperfect", s: "Mi papá ＿ mucho cuando yo era niña.", a: "tomaba", opts: ["toma", "tomará", "tomaba", "tomando"], en: "My father drank a lot when I was a girl.", why: "A repeated habit in the past takes the imperfect: tomaba." },
  { id: "c-a2-050", lv: "A2", l: "imperfect", s: "Todos los veranos ＿ a México.", a: "íbamos", opts: ["ibamos", "íbamos", "fuéramos", "yendo"], en: "Every summer we went to Mexico.", why: "A past habit takes the imperfect; íbamos needs its accent." },

  /* preterite-vs-imperfect */
  { id: "c-a2-051", lv: "A2", l: "preterite-vs-imperfect", s: "Cuando ＿ ocho años, nos mudamos a Texas.", a: "tenía", opts: ["tuve", "tengo", "tendré", "tenía"], en: "When I was eight, we moved to Texas.", why: "Age is background, so it takes the imperfect, while the move is a single event." },
  { id: "c-a2-052", lv: "A2", l: "preterite-vs-imperfect", s: "＿ las dos de la mañana cuando oí las voces.", a: "eran", opts: ["eran", "fueron", "son", "es"], en: "It was two in the morning when I heard the voices.", why: "Clock time in a past story is background and takes the imperfect: eran." },
  { id: "c-a2-053", lv: "A2", l: "preterite-vs-imperfect", s: "Ayer ＿ tres veces a la farmacia.", a: "fui", opts: ["iba", "fui", "voy", "ido"], en: "Yesterday I went to the pharmacy three times.", why: "A counted number of times in a finished period takes the preterite." },
  { id: "c-a2-054", lv: "A2", l: "preterite-vs-imperfect", s: "La casa ＿ grande y tenía un patio.", a: "era", opts: ["era", "fue", "es", "será"], en: "The house was big and had a yard.", why: "Describing how something was takes the imperfect, like tenía." },
  { id: "c-a2-055", lv: "A2", l: "preterite-vs-imperfect", s: "De repente ＿ un ruido muy fuerte.", a: "oí", opts: ["oía", "oigo", "oiré", "oí"], en: "Suddenly I heard a very loud noise.", why: "De repente marks a sudden event, which takes the preterite." },

  /* hace-desde */
  { id: "c-a2-056", lv: "A2", l: "hace-desde", s: "¿Cuánto tiempo ＿ que se siente así?", a: "hace", opts: ["desde", "lleva", "hace", "tiene"], en: "How long have you felt this way?", why: "The question form is ¿cuánto tiempo hace que...? with the present." },
  { id: "c-a2-057", lv: "A2", l: "hace-desde", s: "Estoy en tratamiento ＿ hace un año.", a: "desde", opts: ["por", "desde", "de", "que"], en: "I have been in treatment for a year.", why: "Desde hace plus time says how long something has been going on." },
  { id: "c-a2-058", lv: "A2", l: "hace-desde", s: "＿ tres meses sin trabajar.", a: "llevo", opts: ["llevo", "desde", "soy", "hay"], en: "I have been out of work for three months.", why: "Llevar plus time plus sin says how long without something." },
  { id: "c-a2-059", lv: "A2", l: "hace-desde", s: "Mi esposo murió ＿ dos años.", a: "hace", opts: ["desde", "por", "hace", "lleva"], en: "My husband died two years ago.", why: "Hace plus time after a past verb means ago." },
  { id: "c-a2-060", lv: "A2", l: "hace-desde", s: "Vivo en Phoenix ＿ 2015.", a: "desde", opts: ["hace", "por", "en", "desde"], en: "I have lived in Phoenix since 2015.", why: "Desde goes before a starting point such as a year." },

  /* present-perfect */
  { id: "c-a2-061", lv: "A2", l: "present-perfect", s: "¿Alguna vez ＿ pensado en hacerse daño?", a: "ha", opts: ["has", "ha", "he", "han"], en: "Have you ever thought about hurting yourself?", why: "Usted takes ha before the participle: ha pensado." },
  { id: "c-a2-062", lv: "A2", l: "present-perfect", s: "Todavía no he ＿ la medicina.", a: "empezado", opts: ["empezando", "empezada", "empezado", "empiezo"], en: "I have not started the medicine yet.", why: "After he the participle ends in -ado and never changes for gender." },
  { id: "c-a2-063", lv: "A2", l: "present-perfect", s: "¿Ya ＿ comido hoy?", a: "ha", opts: ["ha", "a", "ah", "hay"], en: "Have you eaten yet today?", why: "The helper verb is ha, with h; a is a preposition and ah is a sigh." },
  { id: "c-a2-064", lv: "A2", l: "present-perfect", s: "Nunca he ＿ algo así.", a: "visto", opts: ["veído", "vido", "vista", "visto"], en: "I have never seen anything like this.", why: "Ver has the irregular participle visto." },
  { id: "c-a2-065", lv: "A2", l: "present-perfect", s: "¿Qué ha ＿ hoy?", a: "hecho", opts: ["hacido", "hizo", "hecho", "hace"], en: "What have you done today?", why: "Hacer has the irregular participle hecho." },

  /* direct-object-pronouns */
  { id: "c-a2-066", lv: "A2", l: "direct-object-pronouns", s: "¿La pastilla? Sí, ＿ tomé esta mañana.", a: "la", opts: ["la", "lo", "le", "las"], en: "The pill? Yes, I took it this morning.", why: "La pastilla is a feminine singular direct object, so it becomes la." },
  { id: "c-a2-067", lv: "A2", l: "direct-object-pronouns", s: "¿Usted ＿ entiende cuando hablo rápido?", a: "me", opts: ["mi", "me", "yo", "conmigo"], en: "Do you understand me when I speak fast?", why: "The object pronoun for me is me, placed before the verb." },
  { id: "c-a2-068", lv: "A2", l: "direct-object-pronouns", s: "＿ voy a llamar mañana, señora.", a: "la", opts: ["las", "los", "se", "la"], en: "I am going to call you tomorrow, ma'am.", why: "For usted as a woman the direct object is la, before the conjugated verb." },
  { id: "c-a2-069", lv: "A2", l: "direct-object-pronouns", s: "El doctor ＿ va a revisar ahora, señor.", a: "lo", opts: ["lo", "la", "las", "los"], en: "The doctor is going to examine you now, sir.", why: "For usted as a man the direct object is lo." },
  { id: "c-a2-070", lv: "A2", l: "direct-object-pronouns", s: "¿Los papeles? Ya ＿ firmé.", a: "los", opts: ["las", "los", "lo", "les"], en: "The papers? I already signed them.", why: "Los papeles is masculine plural, so it becomes los." },

  /* indirect-object-pronouns */
  { id: "c-a2-071", lv: "A2", l: "indirect-object-pronouns", s: "＿ voy a recetar una medicina nueva.", a: "le", opts: ["lo", "la", "se", "le"], en: "I am going to prescribe you a new medicine.", why: "Recetar has an indirect object, the person, so it takes le." },
  { id: "c-a2-072", lv: "A2", l: "indirect-object-pronouns", s: "¿Ya ＿ dio la receta a su hija?", a: "le", opts: ["lo", "la", "le", "les"], en: "Did you already give the prescription to your daughter?", why: "The person who receives is an indirect object, and Spanish repeats it with le." },
  { id: "c-a2-073", lv: "A2", l: "indirect-object-pronouns", s: "La receta, ¿quién ＿ la dio?", a: "se", opts: ["le", "les", "lo", "se"], en: "The prescription, who gave it to you?", why: "Le turns into se before la, lo, las and los: se la dio." },
  { id: "c-a2-074", lv: "A2", l: "indirect-object-pronouns", s: "A mi esposa ＿ preocupa mi salud.", a: "le", opts: ["la", "lo", "le", "se"], en: "My health worries my wife.", why: "Preocupar works like gustar, so the person takes le, also for a woman." },
  { id: "c-a2-075", lv: "A2", l: "indirect-object-pronouns", s: "Señores, la enfermera ＿ va a explicar todo.", a: "les", opts: ["le", "les", "los", "las"], en: "Ladies and gentlemen, the nurse is going to explain everything to you.", why: "For ustedes the indirect object is les." },

  /* por-para */
  { id: "c-a2-076", lv: "A2", l: "por-para", s: "Gracias ＿ venir.", a: "por", opts: ["por", "para", "a", "con"], en: "Thank you for coming.", why: "Gracias por gives the reason you are thankful." },
  { id: "c-a2-077", lv: "A2", l: "por-para", s: "Tome la pastilla dos veces ＿ día.", a: "por", opts: ["por", "para", "a", "con"], en: "Take the pill twice a day.", why: "Per day is por día; para día is not Spanish." },
  { id: "c-a2-078", lv: "A2", l: "por-para", s: "Llamé ＿ teléfono a mi hermana.", a: "por", opts: ["para", "por", "con", "a"], en: "I called my sister on the phone.", why: "Por marks the means: por teléfono." },
  { id: "c-a2-079", lv: "A2", l: "por-para", s: "＿ eso no duermo bien.", a: "por", opts: ["para", "a", "por", "de"], en: "That is why I do not sleep well.", why: "Por eso gives the cause: that is why." },
  { id: "c-a2-080", lv: "A2", l: "por-para", s: "¿＿ qué sirve esta medicina?", a: "para", opts: ["por", "a", "en", "para"], en: "What is this medicine for?", why: "Para qué asks about purpose; por qué asks for a cause." },

  /* present-progressive */
  { id: "c-a2-081", lv: "A2", l: "present-progressive", s: "¿Está ＿ alguna medicina ahora?", a: "tomando", opts: ["tomando", "tomado", "toma", "tomar"], en: "Are you taking any medicine right now?", why: "Estar plus the gerund in -ando says what is happening now." },
  { id: "c-a2-082", lv: "A2", l: "present-progressive", s: "Estoy ＿ un libro muy bueno.", a: "leyendo", opts: ["leiendo", "leendo", "leído", "leyendo"], en: "I am reading a very good book.", why: "Leer has the gerund leyendo, with y between vowels." },
  { id: "c-a2-083", lv: "A2", l: "present-progressive", s: "Mi mamá está ＿ mucho últimamente.", a: "durmiendo", opts: ["dormiendo", "durmiendo", "duermiendo", "dormido"], en: "My mother is sleeping a lot lately.", why: "Dormir changes o to u in the gerund: durmiendo." },
  { id: "c-a2-084", lv: "A2", l: "present-progressive", s: "Sigo ＿ voces por la noche.", a: "oyendo", opts: ["oiendo", "oigo", "oyendo", "oír"], en: "I still hear voices at night.", why: "Seguir plus the gerund means still doing, and oír has the gerund oyendo." },
  { id: "c-a2-085", lv: "A2", l: "present-progressive", s: "Los niños están ＿ en el patio.", a: "jugando", opts: ["jugando", "jugiendo", "juegan", "jugar"], en: "The children are playing in the yard.", why: "-Ar verbs form the gerund with -ando: jugando." },

  /* saber-conocer */
  { id: "c-a2-086", lv: "A2", l: "saber-conocer", s: "¿＿ usted dónde está la farmacia?", a: "sabe", opts: ["conoce", "sabe", "conozco", "conocer"], en: "Do you know where the pharmacy is?", why: "Saber goes with a fact or a question word such as dónde." },
  { id: "c-a2-087", lv: "A2", l: "saber-conocer", s: "¿＿ a la doctora Navarro?", a: "conoce", opts: ["sabe", "sabes", "conoce", "sé"], en: "Do you know Dr. Navarro?", why: "Conocer is for people and places you are familiar with, and takes the personal a." },
  { id: "c-a2-088", lv: "A2", l: "saber-conocer", s: "Mi hijo ya ＿ leer.", a: "sabe", opts: ["conoce", "conoces", "conozco", "sabe"], en: "My son can already read.", why: "Saber plus an infinitive means to know how to do something." },
  { id: "c-a2-089", lv: "A2", l: "saber-conocer", s: "No ＿ muy bien la ciudad.", a: "conozco", opts: ["sé", "conozco", "sabo", "conosco"], en: "I do not know the city very well.", why: "Conocer is for places you are familiar with; its yo form is conozco." },
  { id: "c-a2-090", lv: "A2", l: "saber-conocer", s: "¿＿ por qué está en el hospital?", a: "sabe", opts: ["conoce", "conocer", "sabe", "saber"], en: "Do you know why you are in the hospital?", why: "Saber goes with a question word such as por qué." },

  /* obligation-advice */
  { id: "c-a2-091", lv: "A2", l: "obligation-advice", s: "Tengo ＿ tomar la pastilla con comida.", a: "que", opts: ["que", "de", "a", "por"], en: "I have to take the pill with food.", why: "Obligation is tener que plus an infinitive." },
  { id: "c-a2-092", lv: "A2", l: "obligation-advice", s: "Usted ＿ descansar más.", a: "debe", opts: ["tiene", "hay", "es", "debe"], en: "You should rest more.", why: "Deber goes straight before the infinitive; tener needs que." },
  { id: "c-a2-093", lv: "A2", l: "obligation-advice", s: "＿ que firmar este papel antes de salir.", a: "hay", opts: ["es", "está", "hay", "debe"], en: "This paper has to be signed before leaving.", why: "Hay que plus an infinitive is an obligation for everyone, with no subject." },
  { id: "c-a2-094", lv: "A2", l: "obligation-advice", s: "Es importante ＿ agua.", a: "tomar", opts: ["tome", "tomar", "toma", "tomando"], en: "It is important to drink water.", why: "Es importante is followed by an infinitive when it applies to anyone." },
  { id: "c-a2-095", lv: "A2", l: "obligation-advice", s: "Mañana ＿ que trabajar temprano.", a: "tengo", opts: ["debo", "necesito", "quiero", "tengo"], en: "Tomorrow I have to work early.", why: "Only tener takes que before the infinitive: tengo que." },

  /* comparatives */
  { id: "c-a2-096", lv: "A2", l: "comparatives", s: "Hoy me siento ＿ que ayer.", a: "mejor", opts: ["mejor", "más mejor", "bueno", "bien"], en: "Today I feel better than yesterday.", why: "Mejor already means better, so más mejor is wrong." },
  { id: "c-a2-097", lv: "A2", l: "comparatives", s: "Duermo ＿ que antes.", a: "menos", opts: ["menos", "tan", "tanto", "como"], en: "I sleep less than before.", why: "Unequal comparisons use más or menos with que." },
  { id: "c-a2-098", lv: "A2", l: "comparatives", s: "Mi hermano es ＿ alto como mi papá.", a: "tan", opts: ["tanto", "tan", "más", "menos"], en: "My brother is as tall as my dad.", why: "Equal comparisons with an adjective use tan with como." },
  { id: "c-a2-099", lv: "A2", l: "comparatives", s: "Esta es la medicina ＿ barata de la farmacia.", a: "más", opts: ["tan", "mejor", "que", "más"], en: "This is the cheapest medicine in the pharmacy.", why: "The most is el or la plus más plus the adjective plus de." },
  { id: "c-a2-100", lv: "A2", l: "comparatives", s: "Tengo ＿ ansiedad como antes.", a: "tanta", opts: ["tanto", "tan", "tanta", "tantas"], en: "I have as much anxiety as before.", why: "Before a noun, as much is tanto and agrees: ansiedad is feminine singular." },

  /* connectors-basic */
  { id: "c-a2-101", lv: "A2", l: "connectors-basic", s: "Me siento triste ＿ inútil.", a: "e", opts: ["e", "y", "u", "sino"], en: "I feel sad and useless.", why: "Y becomes e before a word that starts with an i sound." },
  { id: "c-a2-102", lv: "A2", l: "connectors-basic", s: "No es tristeza, ＿ cansancio.", a: "sino", opts: ["pero", "sino", "si no", "y"], en: "It is not sadness, but tiredness.", why: "After a negative, sino gives the correct alternative; pero adds a contrast." },
  { id: "c-a2-103", lv: "A2", l: "connectors-basic", s: "No dormí bien, ＿ estoy cansada.", a: "por eso", opts: ["porque", "aunque", "sino", "por eso"], en: "I did not sleep well, so I am tired.", why: "Por eso introduces the result; porque would introduce a cause." },
  { id: "c-a2-104", lv: "A2", l: "connectors-basic", s: "Sigo trabajando ＿ me siento mal.", a: "aunque", opts: ["porque", "sino", "aunque", "o"], en: "I keep working even though I feel bad.", why: "Aunque with the indicative introduces a fact that does not stop the action." },
  { id: "c-a2-105", lv: "A2", l: "connectors-basic", s: "¿Quiere agua ＿ jugo?", a: "o", opts: ["u", "e", "sino", "o"], en: "Do you want water or juice?", why: "O offers a choice; u replaces it only before an o sound." }
]);
