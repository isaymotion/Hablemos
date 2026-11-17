/* Grammar fill-the-blank items (Hablemos 0.7.0), A1, ids c-a1-001 on (5 per A1 grammar lesson). Used by #/cloze (js/cloze.js).
   DRAFT FOR REVIEW by a native Spanish-speaking clinician before use. US / Mexican baseline; clinician lines use usted.
   Shape: window.GRAMMAR_CLOZE = (window.GRAMMAR_CLOZE || []).concat([
     { id: 'c-a1-001', lv: 'A1', l: '<lesson id>', s: 'Yo ＿ médico.', a: 'soy', opts: ['soy', 'estoy', 'tengo', 'hay'], en: 'I am a doctor.', why: 'One sentence.' } ]);
   lv: A1 | A2 | B1 | B2; l: the id of the lesson that teaches the point (js/data/lessons*.js). ＿ (U+FF3F) is its own word,
   exactly once in s. a is one of the 4 distinct opts (any position); App.fillBlank(s, a) (js/cloze.js) puts a into s,
   with a capital letter at the start of a sentence or after ¿ ¡, and that sentence must be correct and natural (it is
   spoken and recorded). Every other option is wrong for the point taught. en and why are shown after the answer.
   Ids are permanent: append only after release (never insert, reorder or delete). */
window.GRAMMAR_CLOZE = (window.GRAMMAR_CLOZE || []).concat([
  /* ser-estar */
  { id: "c-a1-001", lv: "A1", l: "ser-estar", s: "Mi esposa ＿ enfermera en una clínica.", a: "es", opts: ["está", "hay", "es", "tiene"], en: "My wife is a nurse at a clinic.", why: "A profession is identity, so it takes ser: es enfermera." },
  { id: "c-a1-002", lv: "A1", l: "ser-estar", s: "Hoy ＿ muy nervioso por la cita.", a: "estoy", opts: ["soy", "estoy", "tengo", "hay"], en: "Today I am very nervous about the appointment.", why: "A feeling right now takes estar; soy nervioso would describe your character." },
  { id: "c-a1-003", lv: "A1", l: "ser-estar", s: "¿Dónde ＿ el baño, por favor?", a: "está", opts: ["está", "es", "hay", "son"], en: "Where is the bathroom, please?", why: "The location of a thing takes estar; hay is not used with el." },
  { id: "c-a1-004", lv: "A1", l: "ser-estar", s: "Mi hijo ＿ de Guatemala.", a: "es", opts: ["está", "tiene", "hay", "es"], en: "My son is from Guatemala.", why: "Where someone is from is identity, so it takes ser: es de." },
  { id: "c-a1-005", lv: "A1", l: "ser-estar", s: "¿Cómo ＿ hoy, señora?", a: "está", opts: ["es", "hay", "está", "tiene"], en: "How are you today, ma'am?", why: "Asking how someone feels now takes estar; ¿cómo es? asks what someone is like." },

  /* gender-agreement */
  { id: "c-a1-006", lv: "A1", l: "gender-agreement", s: "Mi hija está muy ＿ y no quiere salir.", a: "callada", opts: ["callado", "callada", "callados", "calladas"], en: "My daughter is very quiet and does not want to go out.", why: "The adjective matches hija, one female person: callada." },
  { id: "c-a1-007", lv: "A1", l: "gender-agreement", s: "Tengo ＿ dolor de cabeza muy fuerte.", a: "un", opts: ["una", "unos", "unas", "un"], en: "I have a very bad headache.", why: "Dolor is masculine and singular, so the article is un." },
  { id: "c-a1-008", lv: "A1", l: "gender-agreement", s: "＿ problema principal es el dinero.", a: "el", opts: ["el", "la", "los", "las"], en: "The main problem is money.", why: "Problema ends in -a but is masculine: el problema." },
  { id: "c-a1-009", lv: "A1", l: "gender-agreement", s: "Vivo en una casa muy ＿.", a: "pequeña", opts: ["pequeño", "pequeña", "pequeños", "pequeñas"], en: "I live in a very small house.", why: "Casa is feminine and singular, so the adjective ends in -a." },
  { id: "c-a1-010", lv: "A1", l: "gender-agreement", s: "Mis padres están ＿ por mí.", a: "preocupados", opts: ["preocupado", "preocupada", "preocupados", "preocupadas"], en: "My parents are worried about me.", why: "A mixed group of a man and a woman takes the masculine plural: preocupados." },

  /* tu-usted */
  { id: "c-a1-011", lv: "A1", l: "tu-usted", s: "Don Ramiro, ¿cómo ＿ hoy?", a: "se siente", opts: ["te sientes", "se sienten", "me siento", "se siente"], en: "Don Ramiro, how do you feel today?", why: "An older adult gets usted, so the verb is se siente, not tú te sientes." },
  { id: "c-a1-012", lv: "A1", l: "tu-usted", s: "Hola, Brayan. ¿Cómo te ＿?", a: "llamas", opts: ["llamas", "llama", "llamo", "llaman"], en: "Hi, Brayan. What is your name?", why: "With a child you use tú, and te goes with the tú form llamas." },
  { id: "c-a1-013", lv: "A1", l: "tu-usted", s: "Doña Rosa, ¿cómo está ＿ familia?", a: "su", opts: ["su", "tu", "sus", "tus"], en: "Doña Rosa, how is your family?", why: "With usted the possessive is su; tu belongs to tú, and familia is singular." },
  { id: "c-a1-014", lv: "A1", l: "tu-usted", s: "¿Usted ＿ solo o con su familia?", a: "vive", opts: ["vives", "vive", "vivo", "viven"], en: "Do you live alone or with your family?", why: "Usted takes the third person form, vive, without the -s of tú." },
  { id: "c-a1-015", lv: "A1", l: "tu-usted", s: "Doctora, ¿usted ＿ español?", a: "habla", opts: ["hablas", "hablo", "habla", "hablan"], en: "Doctor, do you speak Spanish?", why: "Usted uses the same verb form as él and ella: habla." },

  /* questions */
  { id: "c-a1-016", lv: "A1", l: "questions", s: "¿＿ horas duerme por la noche?", a: "cuántas", opts: ["cuántos", "cuánto", "cuánta", "cuántas"], en: "How many hours do you sleep at night?", why: "Cuánto matches the thing counted, and horas is feminine plural: cuántas." },
  { id: "c-a1-017", lv: "A1", l: "questions", s: "¿＿ vive con usted?", a: "quién", opts: ["qué", "cuál", "quién", "dónde"], en: "Who lives with you?", why: "Quién asks about a person." },
  { id: "c-a1-018", lv: "A1", l: "questions", s: "¿＿ es su nombre?", a: "cuál", opts: ["qué", "quién", "dónde", "cuál"], en: "What is your name?", why: "Before es and a noun such as nombre or dirección, Spanish asks cuál, not qué." },
  { id: "c-a1-019", lv: "A1", l: "questions", s: "¿Desde ＿ se siente así?", a: "cuándo", opts: ["cuándo", "cuánto", "qué", "quién"], en: "Since when have you felt this way?", why: "Desde cuándo asks since when a problem started." },
  { id: "c-a1-020", lv: "A1", l: "questions", s: "¿＿ cuesta el pasaje del autobús?", a: "cuánto", opts: ["cuántos", "cuánto", "cuál", "qué"], en: "How much is the bus fare?", why: "Cuánto asks a price; the verb cuesta needs a how-much word." },

  /* negation */
  { id: "c-a1-021", lv: "A1", l: "negation", s: "No tengo ganas de ＿.", a: "nada", opts: ["algo", "nada", "nadie", "nunca"], en: "I do not feel like doing anything.", why: "After no, Spanish uses nada for anything: the double negative is correct." },
  { id: "c-a1-022", lv: "A1", l: "negation", s: "No viene ＿ a visitarme.", a: "nadie", opts: ["nada", "alguien", "ningún", "nadie"], en: "Nobody comes to visit me.", why: "After no, the word for anybody is nadie; alguien would be a mistake here." },
  { id: "c-a1-023", lv: "A1", l: "negation", s: "No tengo ＿ problema con el alcohol.", a: "ningún", opts: ["ninguno", "ninguna", "ningún", "nada"], en: "I do not have any problem with alcohol.", why: "Ninguno shortens to ningún before a masculine noun, and problema is masculine." },
  { id: "c-a1-024", lv: "A1", l: "negation", s: "Yo no fumo, y mi esposo ＿.", a: "tampoco", opts: ["tampoco", "también", "ni", "nada"], en: "I do not smoke, and neither does my husband.", why: "Tampoco agrees with a negative statement; también agrees with a positive one." },
  { id: "c-a1-025", lv: "A1", l: "negation", s: "Antes salía con mis amigos, pero ya ＿ salgo.", a: "no", opts: ["nada", "nadie", "no", "ni"], en: "I used to go out with my friends, but I do not go out anymore.", why: "Ya no means no longer and marks something that stopped." },

  /* numbers-dates */
  { id: "c-a1-026", lv: "A1", l: "numbers-dates", s: "Tengo ＿ años.", a: "veintiún", opts: ["veintiuno", "veintiún", "veintiuna", "veinte y uno"], en: "I am twenty-one years old.", why: "Uno shortens to un before a masculine noun, so veintiuno becomes veintiún años." },
  { id: "c-a1-027", lv: "A1", l: "numbers-dates", s: "Me despierto a ＿ tres de la mañana.", a: "las", opts: ["las", "los", "la", "el"], en: "I wake up at three in the morning.", why: "Clock times take las, because the hidden word horas is feminine plural." },
  { id: "c-a1-028", lv: "A1", l: "numbers-dates", s: "＿ la una de la tarde.", a: "es", opts: ["son", "está", "hay", "es"], en: "It is one in the afternoon.", why: "One o'clock is singular, so it takes es; the other hours take son." },
  { id: "c-a1-029", lv: "A1", l: "numbers-dates", s: "Nací el cuatro ＿ julio.", a: "de", opts: ["de", "en", "a", "por"], en: "I was born on the fourth of July.", why: "Dates join the day and the month with de: el cuatro de julio." },
  { id: "c-a1-030", lv: "A1", l: "numbers-dates", s: "Me siento así casi todos los ＿.", a: "días", opts: ["día", "diario", "semana", "días"], en: "I feel like this almost every day.", why: "Todos los needs a masculine plural noun: todos los días." },

  /* articles-contractions */
  { id: "c-a1-031", lv: "A1", l: "articles-contractions", s: "Voy ＿ hospital mañana.", a: "al", opts: ["a el", "al", "a la", "del"], en: "I am going to the hospital tomorrow.", why: "A and el always join into al; hospital is masculine." },
  { id: "c-a1-032", lv: "A1", l: "articles-contractions", s: "Tengo dolor ＿ estómago.", a: "del", opts: ["de el", "de la", "del", "al"], en: "I have a stomachache.", why: "De and el always join into del: dolor del estómago." },
  { id: "c-a1-033", lv: "A1", l: "articles-contractions", s: "＿ agua está fría.", a: "el", opts: ["la", "el", "las", "lo"], en: "The water is cold.", why: "Agua is feminine but takes el because it starts with a stressed a sound; it is still el agua fría." },
  { id: "c-a1-034", lv: "A1", l: "articles-contractions", s: "Necesito ＿ cita con la doctora.", a: "una", opts: ["un", "uno", "unos", "una"], en: "I need an appointment with the doctor.", why: "Cita is feminine and singular, so the article is una." },
  { id: "c-a1-035", lv: "A1", l: "articles-contractions", s: "Me duelen ＿ rodillas.", a: "las", opts: ["las", "los", "la", "el"], en: "My knees hurt.", why: "Rodillas is feminine plural; Spanish uses the article, not my, for body parts." },

  /* subject-pronouns */
  { id: "c-a1-036", lv: "A1", l: "subject-pronouns", s: "¿＿ es la nueva enfermera?", a: "usted", opts: ["tú", "ustedes", "usted", "él"], en: "Are you the new nurse?", why: "Es goes with usted; tú would need eres, ustedes would need son, and él does not fit enfermera." },
  { id: "c-a1-037", lv: "A1", l: "subject-pronouns", s: "Mis hijos viven conmigo. ＿ van a la escuela cerca de la casa.", a: "ellos", opts: ["ellas", "ellos", "él", "nosotros"], en: "My children live with me. They go to school near the house.", why: "Hijos is a masculine plural group, so the pronoun is ellos, with the verb van." },
  { id: "c-a1-038", lv: "A1", l: "subject-pronouns", s: "Mi esposo y yo trabajamos. ＿ trabaja de día y yo de noche.", a: "él", opts: ["ella", "ellos", "él", "nosotros"], en: "My husband and I work. He works days and I work nights.", why: "Keep the pronoun to contrast two people; él refers to the husband and goes with trabaja." },
  { id: "c-a1-039", lv: "A1", l: "subject-pronouns", s: "Mi hermana y yo ＿ en la misma casa.", a: "vivimos", opts: ["vivimos", "viven", "vive", "vivo"], en: "My sister and I live in the same house.", why: "Mi hermana y yo means we, so the verb takes the nosotros form even without the pronoun." },
  { id: "c-a1-040", lv: "A1", l: "subject-pronouns", s: "¿Y ＿, cómo se llama?", a: "usted", opts: ["tú", "yo", "nosotros", "usted"], en: "And you, what is your name?", why: "Se llama goes with usted; tú would need te llamas." },

  /* hay-estar */
  { id: "c-a1-041", lv: "A1", l: "hay-estar", s: "¿＿ un baño en este piso?", a: "hay", opts: ["hay", "está", "es", "están"], en: "Is there a bathroom on this floor?", why: "Hay says something exists and goes with un or una; está goes with el or la." },
  { id: "c-a1-042", lv: "A1", l: "hay-estar", s: "La farmacia ＿ en el primer piso.", a: "está", opts: ["hay", "están", "está", "tiene"], en: "The pharmacy is on the first floor.", why: "A known place with la takes está for its location." },
  { id: "c-a1-043", lv: "A1", l: "hay-estar", s: "En la sala ＿ dos pacientes nuevos.", a: "hay", opts: ["es", "hay", "está", "son"], en: "There are two new patients on the unit.", why: "Hay says there is or there are and does not change for the plural." },
  { id: "c-a1-044", lv: "A1", l: "hay-estar", s: "¿Dónde ＿ mis lentes?", a: "están", opts: ["hay", "está", "son", "están"], en: "Where are my glasses?", why: "Specific things with mis take estar, and lentes is plural: están." },
  { id: "c-a1-045", lv: "A1", l: "hay-estar", s: "Ya no ＿ leche en el refrigerador.", a: "hay", opts: ["está", "es", "hay", "tiene"], en: "There is no more milk in the fridge.", why: "Leche with no article is an amount that exists or not, so it takes hay." },

  /* possessives */
  { id: "c-a1-046", lv: "A1", l: "possessives", s: "¿Cómo se llama ＿ médico de cabecera?", a: "su", opts: ["sus", "tu", "suyo", "su"], en: "What is the name of your primary care doctor?", why: "Usted takes su, and médico is singular; suyo goes after the noun, not before." },
  { id: "c-a1-047", lv: "A1", l: "possessives", s: "＿ hijos viven en Texas.", a: "mis", opts: ["mis", "mi", "mío", "míos"], en: "My children live in Texas.", why: "Before a plural noun the possessive is mis." },
  { id: "c-a1-048", lv: "A1", l: "possessives", s: "Esta bolsa es ＿ ella, no de usted.", a: "de", opts: ["su", "de", "por", "en"], en: "This bag is hers, not yours.", why: "Su can mean his, her, your or their, so de ella makes clear whose it is." },
  { id: "c-a1-049", lv: "A1", l: "possessives", s: "¿Es ＿ primera vez en el hospital?", a: "su", opts: ["sus", "suya", "tuyo", "su"], en: "Is this your first time in the hospital?", why: "With usted the short possessive su goes before the noun." },
  { id: "c-a1-050", lv: "A1", l: "possessives", s: "Doña Rosa toma ＿ pastillas con el desayuno.", a: "sus", opts: ["su", "suyas", "sus", "suyo"], en: "Doña Rosa takes her pills with breakfast.", why: "Pastillas is plural, so the possessive is sus." },

  /* demonstratives */
  { id: "c-a1-051", lv: "A1", l: "demonstratives", s: "＿ pastilla es para dormir.", a: "esta", opts: ["este", "esta", "esto", "estos"], en: "This pill is for sleep.", why: "Pastilla is feminine, so this is esta; esto never goes before a noun." },
  { id: "c-a1-052", lv: "A1", l: "demonstratives", s: "¿Qué es ＿?", a: "esto", opts: ["esto", "estos", "estas", "aquí"], en: "What is this?", why: "For an unknown thing, Spanish uses the neuter esto." },
  { id: "c-a1-053", lv: "A1", l: "demonstratives", s: "Siéntese ＿, a mi lado.", a: "aquí", opts: ["allí", "ese", "esto", "aquí"], en: "Sit here, next to me.", why: "Aquí is here, near the speaker; allí is over there." },
  { id: "c-a1-054", lv: "A1", l: "demonstratives", s: "＿ señor de allá es mi papá.", a: "aquel", opts: ["aquel", "aquella", "aquellos", "aquello"], en: "That man over there is my dad.", why: "Señor is masculine singular, so it takes aquel; aquello never goes before a noun." },
  { id: "c-a1-055", lv: "A1", l: "demonstratives", s: "¿Me da ＿ papeles, por favor?", a: "esos", opts: ["esas", "esos", "eso", "ese"], en: "Can you give me those papers, please?", why: "Papeles is masculine plural, so that becomes esos." },

  /* basic-prepositions */
  { id: "c-a1-056", lv: "A1", l: "basic-prepositions", s: "Vivo ＿ mi hermana.", a: "con", opts: ["de", "en", "con", "a"], en: "I live with my sister.", why: "Con means with." },
  { id: "c-a1-057", lv: "A1", l: "basic-prepositions", s: "Tomo el café ＿ azúcar porque soy diabético.", a: "sin", opts: ["de", "sin", "a", "en"], en: "I take my coffee without sugar because I am diabetic.", why: "Sin means without." },
  { id: "c-a1-058", lv: "A1", l: "basic-prepositions", s: "Ayer visité ＿ mi abuela en el hospital.", a: "a", opts: ["en", "de", "por", "a"], en: "Yesterday I visited my grandmother in the hospital.", why: "A person who receives the action takes the personal a: visité a mi abuela." },
  { id: "c-a1-059", lv: "A1", l: "basic-prepositions", s: "Las pastillas están ＿ la mesa.", a: "en", opts: ["de", "con", "en", "a"], en: "The pills are on the table.", why: "En covers in and on for location." },
  { id: "c-a1-060", lv: "A1", l: "basic-prepositions", s: "Soy ＿ Honduras.", a: "de", opts: ["de", "en", "a", "con"], en: "I am from Honduras.", why: "Origin takes de: soy de." },

  /* muy-mucho */
  { id: "c-a1-061", lv: "A1", l: "muy-mucho", s: "Estoy ＿ cansada.", a: "muy", opts: ["mucho", "mucha", "muy", "muchos"], en: "I am very tired.", why: "Muy goes before an adjective; mucho goes with nouns and verbs." },
  { id: "c-a1-062", lv: "A1", l: "muy-mucho", s: "Tengo ＿ miedo de salir sola.", a: "mucho", opts: ["muy", "mucho", "mucha", "muchos"], en: "I am very afraid to go out alone.", why: "Miedo is a masculine noun, so it takes mucho, not muy." },
  { id: "c-a1-063", lv: "A1", l: "muy-mucho", s: "Tomo ＿ café, unas seis tazas al día.", a: "demasiado", opts: ["demasiado", "demasiada", "muy", "poco"], en: "I drink too much coffee, about six cups a day.", why: "Café is masculine, so too much is demasiado; poco contradicts six cups." },
  { id: "c-a1-064", lv: "A1", l: "muy-mucho", s: "Hay ＿ personas en la sala de espera.", a: "muchas", opts: ["muchos", "mucho", "muy", "muchas"], en: "There are many people in the waiting room.", why: "Mucho agrees with the noun, and personas is feminine plural." },
  { id: "c-a1-065", lv: "A1", l: "muy-mucho", s: "Duermo ＿ poco, unas tres horas.", a: "muy", opts: ["mucho", "mucha", "muy", "muchos"], en: "I sleep very little, about three hours.", why: "Before poco, very is muy; mucho poco is not Spanish." },

  /* tener-expressions */
  { id: "c-a1-066", lv: "A1", l: "tener-expressions", s: "Tengo ＿ de llorar todo el tiempo.", a: "ganas", opts: ["frío", "sueño", "años", "ganas"], en: "I feel like crying all the time.", why: "Tener ganas de plus an infinitive means to feel like doing something." },
  { id: "c-a1-067", lv: "A1", l: "tener-expressions", s: "Casi no como porque no tengo ＿.", a: "hambre", opts: ["hambre", "sueño", "frío", "años"], en: "I hardly eat because I am not hungry.", why: "Spanish says tener hambre, to have hunger, for to be hungry." },
  { id: "c-a1-068", lv: "A1", l: "tener-expressions", s: "Mi hija ＿ quince años.", a: "tiene", opts: ["es", "tiene", "está", "hay"], en: "My daughter is fifteen.", why: "Age takes tener: tiene quince años." },
  { id: "c-a1-069", lv: "A1", l: "tener-expressions", s: "＿ miedo de quedarme solo.", a: "tengo", opts: ["estoy", "soy", "tengo", "hay"], en: "I am afraid of being left alone.", why: "Fear takes tener: tengo miedo, not estoy miedo." },
  { id: "c-a1-070", lv: "A1", l: "tener-expressions", s: "Póngase la chamarra si tiene ＿.", a: "frío", opts: ["años", "frío", "sed", "sueño"], en: "Put on your jacket if you are cold.", why: "Feeling cold is tener frío; estar frío describes a cold object." },

  /* ir-a-future */
  { id: "c-a1-071", lv: "A1", l: "ir-a-future", s: "Mañana yo ＿ a ver a la doctora.", a: "voy", opts: ["va", "vas", "van", "voy"], en: "Tomorrow I am going to see the doctor.", why: "Ir a plus an infinitive needs ir in the yo form: voy a." },
  { id: "c-a1-072", lv: "A1", l: "ir-a-future", s: "Vamos a ＿ la presión.", a: "tomarle", opts: ["tomarle", "tomando", "tomamos", "tome"], en: "We are going to take your blood pressure.", why: "After ir a the verb stays in the infinitive, here with le attached." },
  { id: "c-a1-073", lv: "A1", l: "ir-a-future", s: "Señora, ¿qué ＿ a hacer este fin de semana?", a: "va", opts: ["ir", "ido", "yendo", "va"], en: "Ma'am, what are you going to do this weekend?", why: "Usted takes va a plus an infinitive for plans." },
  { id: "c-a1-074", lv: "A1", l: "ir-a-future", s: "Nosotros ＿ a llamar a su familia.", a: "vamos", opts: ["van", "vamos", "voy", "va"], en: "We are going to call your family.", why: "Nosotros takes vamos a." },
  { id: "c-a1-075", lv: "A1", l: "ir-a-future", s: "El enfermero va ＿ traer su medicina.", a: "a", opts: ["a", "de", "por", "para"], en: "The nurse is going to bring your medicine.", why: "The near future is always ir a plus an infinitive; the a cannot be left out or changed." },

  /* stem-changing */
  { id: "c-a1-076", lv: "A1", l: "stem-changing", s: "No ＿ dormir por las noches.", a: "puedo", opts: ["podo", "pode", "puedo", "poder"], en: "I cannot sleep at night.", why: "Poder changes o to ue in the stressed stem: puedo." },
  { id: "c-a1-077", lv: "A1", l: "stem-changing", s: "¿Cuántas horas ＿ usted?", a: "duerme", opts: ["dorme", "dormes", "duerme", "duermo"], en: "How many hours do you sleep?", why: "Dormir changes o to ue, and usted takes duerme." },
  { id: "c-a1-078", lv: "A1", l: "stem-changing", s: "＿ mucha ansiedad en el pecho.", a: "siento", opts: ["sento", "siento", "sinto", "sienta"], en: "I feel a lot of anxiety in my chest.", why: "Sentir changes e to ie: siento." },
  { id: "c-a1-079", lv: "A1", l: "stem-changing", s: "Mi hijo siempre ＿ dulces.", a: "pide", opts: ["pide", "pede", "pida", "piden"], en: "My son always asks for sweets.", why: "Pedir changes e to i: pide, and hijo needs the singular." },
  { id: "c-a1-080", lv: "A1", l: "stem-changing", s: "Yo no ＿ bien lo que pasó esa noche.", a: "recuerdo", opts: ["recordo", "recuerda", "recuerdas", "recuerdo"], en: "I do not remember well what happened that night.", why: "Recordar changes o to ue, and yo takes recuerdo." },

  /* irregular-yo */
  { id: "c-a1-081", lv: "A1", l: "irregular-yo", s: "＿ voces cuando estoy solo.", a: "oigo", opts: ["oyo", "ogo", "oío", "oigo"], en: "I hear voices when I am alone.", why: "Oír has an irregular yo form: oigo." },
  { id: "c-a1-082", lv: "A1", l: "irregular-yo", s: "No ＿ qué hacer.", a: "sé", opts: ["se", "sé", "sabo", "sepo"], en: "I do not know what to do.", why: "The yo form of saber is sé, with an accent to tell it from se." },
  { id: "c-a1-083", lv: "A1", l: "irregular-yo", s: "Todos los días ＿ ejercicio en la mañana.", a: "hago", opts: ["haco", "hazo", "hago", "haga"], en: "Every day I exercise in the morning.", why: "Hacer has a g in the yo form: hago." },
  { id: "c-a1-084", lv: "A1", l: "irregular-yo", s: "＿ de la casa muy poco.", a: "salgo", opts: ["salgo", "salo", "sallo", "salga"], en: "I leave the house very little.", why: "Salir adds a g in the yo form: salgo." },
  { id: "c-a1-085", lv: "A1", l: "irregular-yo", s: "No ＿ a nadie en esta ciudad.", a: "conozco", opts: ["conozco", "conoco", "conozo", "conosco"], en: "I do not know anyone in this city.", why: "Verbs ending in -cer such as conocer take -zco in the yo form." },

  /* querer-poder-necesitar */
  { id: "c-a1-086", lv: "A1", l: "querer-poder-necesitar", s: "Quiero ＿ con mi familia.", a: "hablar", opts: ["hablo", "hable", "hablar", "hablando"], en: "I want to talk with my family.", why: "After quiero the second verb stays in the infinitive." },
  { id: "c-a1-087", lv: "A1", l: "querer-poder-necesitar", s: "¿Puede ＿ su nombre completo?", a: "decirme", opts: ["dígame", "me dice", "diciéndome", "decirme"], en: "Can you tell me your full name?", why: "Puede is followed by an infinitive, and me attaches to it: decirme." },
  { id: "c-a1-088", lv: "A1", l: "querer-poder-necesitar", s: "Necesito ＿ más.", a: "dormir", opts: ["duermo", "dormir", "durmiendo", "duerma"], en: "I need to sleep more.", why: "Necesito plus an infinitive: necesito dormir." },
  { id: "c-a1-089", lv: "A1", l: "querer-poder-necesitar", s: "Usted debe ＿ la medicina todos los días.", a: "tomar", opts: ["tomar", "toma", "tome", "tomando"], en: "You should take the medicine every day.", why: "Debe is followed directly by an infinitive." },
  { id: "c-a1-090", lv: "A1", l: "querer-poder-necesitar", s: "Prefiero ＿ en casa.", a: "quedarme", opts: ["me quedo", "quedo", "quedándome", "quedarme"], en: "I prefer to stay home.", why: "After prefiero use the infinitive, with the pronoun attached: quedarme." },

  /* time-frequency */
  { id: "c-a1-091", lv: "A1", l: "time-frequency", s: "Tomo la pastilla ＿ noche.", a: "cada", opts: ["todos", "cada", "todas", "siempre"], en: "I take the pill every night.", why: "Cada goes with a singular noun: cada noche; todas would need las noches." },
  { id: "c-a1-092", lv: "A1", l: "time-frequency", s: "Voy a la iglesia ＿ domingos.", a: "los", opts: ["las", "cada", "los", "todo"], en: "I go to church on Sundays.", why: "A day of the week for a habit takes los plus the plural: los domingos." },
  { id: "c-a1-093", lv: "A1", l: "time-frequency", s: "Me despierto dos ＿ cada noche.", a: "veces", opts: ["vez", "tiempos", "vezes", "veces"], en: "I wake up twice every night.", why: "Times as in how often is vez, plural veces; tiempo is time on the clock or duration." },
  { id: "c-a1-094", lv: "A1", l: "time-frequency", s: "La cita es ＿ las diez de la mañana.", a: "a", opts: ["en", "a", "de", "por"], en: "The appointment is at ten in the morning.", why: "At a clock time is a: a las diez." },
  { id: "c-a1-095", lv: "A1", l: "time-frequency", s: "Me siento así casi ＿.", a: "siempre", opts: ["veces", "cada", "siempre", "vez"], en: "I feel like this almost always.", why: "Casi siempre means almost always; veces and vez need a or a number before them." },

  /* family-household */
  { id: "c-a1-096", lv: "A1", l: "family-household", s: "Vivo con mi esposo y mis dos ＿.", a: "hijos", opts: ["hijos", "hijo", "hija", "padre"], en: "I live with my husband and my two children.", why: "After dos the noun is plural, and hijos covers sons and daughters together." },
  { id: "c-a1-097", lv: "A1", l: "family-household", s: "La hija de mi hija es mi ＿.", a: "nieta", opts: ["nieto", "nieta", "sobrina", "suegra"], en: "My daughter's daughter is my granddaughter.", why: "A child's child is a nieto or nieta; a girl is nieta." },
  { id: "c-a1-098", lv: "A1", l: "family-household", s: "La mamá de mi esposa es mi ＿.", a: "suegra", opts: ["cuñada", "nuera", "abuela", "suegra"], en: "My wife's mother is my mother-in-law.", why: "A spouse's mother is the suegra; cuñada is a sister-in-law." },
  { id: "c-a1-099", lv: "A1", l: "family-household", s: "El hijo de mi hermano es mi ＿.", a: "sobrino", opts: ["sobrino", "primo", "nieto", "tío"], en: "My brother's son is my nephew.", why: "A sibling's son is a sobrino; primo is a cousin." },
  { id: "c-a1-100", lv: "A1", l: "family-household", s: "En mi casa somos ＿: mi esposa, mis dos hijos y yo.", a: "cuatro", opts: ["tres", "cinco", "cuatro", "dos"], en: "There are four of us at home: my wife, my two children and me.", why: "Count the speaker too: wife, two children and yo make cuatro." }
]);
