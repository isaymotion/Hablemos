/* Grammar fill-the-blank items for the picture lessons (Hablemos pass 12), ids c-a1-101 on (A1) and c-a2-106 on (A2): 5 per non-review picture lesson of js/data/lessons-6.js. Used by #/cloze (js/cloze.js).
   DRAFT FOR REVIEW by a native Spanish-speaking clinician before use. US / Mexican baseline; clinician lines use usted.
   Shape: window.GRAMMAR_CLOZE = (window.GRAMMAR_CLOZE || []).concat([
     { id: 'c-a1-101', lv: 'A1', l: '<picture lesson id>', s: 'Su cama está al lado ＿ la ventana.', a: 'de', opts: ['a', 'de', 'en', 'con'], en: 'Your bed is next to the window.', why: 'One sentence.' } ]);
   The blank ＿ (U+FF3F) is its own word, exactly once in s; every option except a is wrong for the point taught; the filled sentence is correct and natural.
   Ids are permanent: append only after release (never insert, reorder or delete). Load this file after grammar-cloze-a1.js and grammar-cloze-a2.js. */
window.GRAMMAR_CLOZE = (window.GRAMMAR_CLOZE || []).concat([

  /* position-words */
  { id: "c-a1-101", lv: "A1", l: "position-words", s: "Su cama está al lado ＿ la ventana.", a: "de", opts: ["a", "de", "en", "con"], en: "Your bed is next to the window.", why: "The phrase al lado needs de before the place." },
  { id: "c-a1-102", lv: "A1", l: "position-words", s: "La silla está al lado ＿ sofá.", a: "del", opts: ["de el", "al", "del", "de lo"], en: "The chair is next to the sofa.", why: "De and el always join into del." },
  { id: "c-a1-103", lv: "A1", l: "position-words", s: "La mesa está ＿ el sofá y la silla.", a: "entre", opts: ["dentro", "encima", "entre", "debajo"], en: "The table is between the sofa and the chair.", why: "Entre is the word used with two things, entre A y B." },
  { id: "c-a1-104", lv: "A1", l: "position-words", s: "La farmacia ＿ cerca de la entrada.", a: "está", opts: ["es", "hay", "tiene", "está"], en: "The pharmacy is near the entrance.", why: "Where a known thing is takes estar." },
  { id: "c-a1-105", lv: "A1", l: "position-words", s: "El botón para llamar está a la ＿ de la cama.", a: "derecha", opts: ["derecho", "derecha", "derechas", "derechos"], en: "The call button is to the right of the bed.", why: "A la derecha de is feminine because it follows la." },


  /* body-donde-duele */
  { id: "c-a1-106", lv: "A1", l: "body-donde-duele", s: "Me ＿ las rodillas.", a: "duelen", opts: ["duele", "duelen", "duelo", "dolen"], en: "My knees hurt.", why: "The verb agrees with the thing that hurts, and las rodillas is plural." },
  { id: "c-a1-107", lv: "A1", l: "body-donde-duele", s: "Me duele ＿ cabeza.", a: "la", opts: ["el", "los", "la", "las"], en: "My head hurts.", why: "Cabeza is feminine singular, and body parts take the article." },
  { id: "c-a1-108", lv: "A1", l: "body-donde-duele", s: "Siento el pecho ＿.", a: "pesado", opts: ["pesada", "pesados", "pesado", "pesadas"], en: "My chest feels heavy.", why: "The adjective agrees with pecho, which is masculine singular." },
  { id: "c-a1-109", lv: "A1", l: "body-donde-duele", s: "Me ＿ la garganta.", a: "arde", opts: ["arde", "ardo", "arden", "ardes"], en: "My throat burns.", why: "The throat is the singular subject of arder, so arde." },
  { id: "c-a1-110", lv: "A1", l: "body-donde-duele", s: "¿＿ duele cuando le toco aquí?", a: "le", opts: ["lo", "le", "se", "te"], en: "Does it hurt when I touch here?", why: "The patient is the indirect object, and le is the usted form." },


  /* describing-with-tener */
  { id: "c-a1-111", lv: "A1", l: "describing-with-tener", s: "El gato tiene la cola ＿.", a: "larga", opts: ["largo", "larga", "largas", "largos"], en: "The cat has a long tail.", why: "The adjective agrees with cola, which is feminine singular." },
  { id: "c-a1-112", lv: "A1", l: "describing-with-tener", s: "Mi hijo ＿ los ojos azules.", a: "tiene", opts: ["es", "está", "tiene", "hay"], en: "My son has blue eyes.", why: "A body feature that a person has takes tener." },
  { id: "c-a1-113", lv: "A1", l: "describing-with-tener", s: "El paciente ＿ alto y delgado.", a: "es", opts: ["es", "tiene", "hay", "son"], en: "The patient is tall and thin.", why: "A bare adjective that describes the whole person takes ser." },
  { id: "c-a1-114", lv: "A1", l: "describing-with-tener", s: "Tiene las manos ＿.", a: "frías", opts: ["frías", "frío", "fría", "fríos"], en: "Her hands are cold.", why: "The adjective agrees with manos, which is feminine plural." },
  { id: "c-a1-115", lv: "A1", l: "describing-with-tener", s: "Las orejas del perro son ＿.", a: "grandes", opts: ["grande", "grandes", "grandas", "grandos"], en: "The dog's ears are big.", why: "Orejas is plural, so the adjective ending in -e takes -s." },


  /* clothes-colors */
  { id: "c-a1-116", lv: "A1", l: "clothes-colors", s: "Lleva una camisa ＿.", a: "roja", opts: ["rojo", "roja", "rojas", "rojos"], en: "She is wearing a red shirt.", why: "The color agrees with camisa, which is feminine singular." },
  { id: "c-a1-117", lv: "A1", l: "clothes-colors", s: "Lleva pantalones ＿.", a: "azules", opts: ["azul", "azula", "azulas", "azules"], en: "He is wearing blue pants.", why: "Pantalones is plural, so a color ending in a consonant takes -es." },
  { id: "c-a1-118", lv: "A1", l: "clothes-colors", s: "＿ el abrigo, por favor.", a: "quítese", opts: ["quítese", "quítate", "quita", "quitar"], en: "Take off your coat, please.", why: "Quítese is the usted command of quitarse." },
  { id: "c-a1-119", lv: "A1", l: "clothes-colors", s: "Mi esposo ＿ lentes y un sombrero blanco.", a: "lleva", opts: ["lleva", "es", "hay", "está"], en: "My husband is wearing glasses and a white hat.", why: "What someone has on takes llevar." },
  { id: "c-a1-120", lv: "A1", l: "clothes-colors", s: "¿Qué ＿ puesto su hijo cuando salió?", a: "traía", opts: ["traías", "traía", "traían", "traiga"], en: "What was your son wearing when he left?", why: "Traer puesto in the imperfect with su hijo is traía." },


  /* directions-map */
  { id: "c-a1-121", lv: "A1", l: "directions-map", s: "Siga ＿ dos cuadras.", a: "derecho", opts: ["derecha", "derechos", "derechas", "derecho"], en: "Go straight for two blocks.", why: "Siga derecho is the set phrase for going straight on." },
  { id: "c-a1-122", lv: "A1", l: "directions-map", s: "＿ a la izquierda en el semáforo.", a: "doble", opts: ["dobla", "dobles", "doblar", "doble"], en: "Turn left at the traffic light.", why: "A clinician gives an adult the usted command, doble." },
  { id: "c-a1-123", lv: "A1", l: "directions-map", s: "Cruce ＿ calle por el paso de peatones.", a: "la", opts: ["la", "a la", "en la", "de la"], en: "Cross the street at the crosswalk.", why: "Cruzar takes the street directly, with no preposition." },
  { id: "c-a1-124", lv: "A1", l: "directions-map", s: "Suba ＿ segundo piso por el elevador.", a: "al", opts: ["al", "a el", "el", "del"], en: "Go up to the second floor in the elevator.", why: "A and el always join into al." },
  { id: "c-a1-125", lv: "A1", l: "directions-map", s: "La farmacia está ＿ del pasillo, a la izquierda.", a: "al fondo", opts: ["en fondo", "a fondo", "al fondo", "por fondo"], en: "The pharmacy is at the end of the hall, on the left.", why: "Al fondo del pasillo is the usual phrase for the end of the hall." },


  /* machine-instructions */
  { id: "c-a2-106", lv: "A2", l: "machine-instructions", s: "Primero, ＿ el cargador, por favor.", a: "enchufe", opts: ["enchufas", "enchufo", "enchufar", "enchufe"], en: "First, plug in the charger, please.", why: "A clinician gives an adult the usted command, enchufe." },
  { id: "c-a2-107", lv: "A2", l: "machine-instructions", s: "Si no ＿ el celular, se va a apagar.", a: "carga", opts: ["cargue", "cargas", "cargar", "carga"], en: "If you do not charge the phone, it will turn off.", why: "After si, Spanish uses a plain present tense, so carga." },
  { id: "c-a2-108", lv: "A2", l: "machine-instructions", s: "Después de ＿ la aplicación, oprima el botón verde.", a: "abrir", opts: ["abrir", "abra", "abre", "abrí"], en: "After opening the app, press the green button.", why: "After a preposition like de, the verb is an infinitive." },
  { id: "c-a2-109", lv: "A2", l: "machine-instructions", s: "Apague ＿ celular antes de la cita.", a: "el", opts: ["la", "los", "el", "las"], en: "Turn off the phone before the appointment.", why: "Celular is masculine singular, so it takes el." },
  { id: "c-a2-110", lv: "A2", l: "machine-instructions", s: "Por ＿, oprima el botón verde.", a: "último", opts: ["final", "luego", "último", "primero"], en: "Finally, press the green button.", why: "Por último is the set phrase for the last step." },


  /* states-pictures */
  { id: "c-a2-111", lv: "A2", l: "states-pictures", s: "La puerta ＿ abierta.", a: "está", opts: ["es", "hay", "fue", "está"], en: "The door is open.", why: "The state of a thing right now takes estar." },
  { id: "c-a2-112", lv: "A2", l: "states-pictures", s: "Las ventanas están ＿.", a: "cerradas", opts: ["cerrado", "cerrada", "cerrados", "cerradas"], en: "The windows are closed.", why: "The participle agrees with ventanas, feminine plural." },
  { id: "c-a2-113", lv: "A2", l: "states-pictures", s: "El vaso está ＿.", a: "roto", opts: ["rompido", "roto", "romper", "rompe"], en: "The glass is broken.", why: "The participle of romper is irregular: roto." },
  { id: "c-a2-114", lv: "A2", l: "states-pictures", s: "La luz está ＿ y la televisión está apagada.", a: "prendida", opts: ["prendido", "prendidas", "prendida", "prender"], en: "The light is on and the television is off.", why: "The participle agrees with luz, feminine singular." },
  { id: "c-a2-115", lv: "A2", l: "states-pictures", s: "Abrí la ventana y ahora ＿ abierta.", a: "está", opts: ["es", "hay", "está", "fue"], en: "I opened the window and now it is open.", why: "The result of an action is a state, so estar." },


  /* explaining-with-pictures */
  { id: "c-a2-116", lv: "A2", l: "explaining-with-pictures", s: "Los pulmones sirven ＿ respirar.", a: "para", opts: ["por", "de", "a", "para"], en: "The lungs are for breathing.", why: "Sirve is followed by para when it tells the purpose." },
  { id: "c-a2-117", lv: "A2", l: "explaining-with-pictures", s: "Esta parte ＿ la columna.", a: "se llama", opts: ["se llaman", "se llama", "te llamas", "llamo"], en: "This part is called the spine.", why: "Se llama gives the name of one thing." },
  { id: "c-a2-118", lv: "A2", l: "explaining-with-pictures", s: "El estómago ＿ conectado con los intestinos.", a: "está", opts: ["es", "está", "hay", "tiene"], en: "The stomach is connected to the intestines.", why: "A result state with a participle takes estar." },
  { id: "c-a2-119", lv: "A2", l: "explaining-with-pictures", s: "Por aquí ＿ el aire y llega a los pulmones.", a: "pasa", opts: ["pasan", "pasas", "pasa", "paso"], en: "The air passes through here and reaches the lungs.", why: "Aire is singular, so the verb is pasa." },
  { id: "c-a2-120", lv: "A2", l: "explaining-with-pictures", s: "Este examen ＿ el ritmo del corazón.", a: "mide", opts: ["miden", "mides", "mide", "medir"], en: "This test measures the heart rhythm.", why: "Examen is singular, so the verb is mide." }
]);
