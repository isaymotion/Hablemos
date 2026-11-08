/* Placement test (EMPTY SHELL).
   Hablemos (Spanish). Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish text; registers are
   f = usted (formal), c = tú (informal). Shell: no content yet. Once populated, mark this file
   "Draft for review by a native Spanish-speaking clinician" until it has been reviewed.
   Shape: window.PLACEMENT = [ [level, question, options, correctIndex], ... ]
   Example element:
     ['A1', '"¿Cómo se siente hoy?" means:', ['How old are you?', 'How do you feel today?', 'Where does it hurt?'], 1]
   App metadata is in data/app-meta.js and What's New in data/changelog.js. */
window.PLACEMENT = [
['A1', '"¿Cómo se siente hoy?" means:', ['How old are you?', 'How do you feel today?', 'Where does it hurt?'], 1],
['A1', '"Me llamo Ana" means:', ['My name is Ana', 'I am from Ana', 'I love Ana'], 0],
['A1', 'Which word means "head"?', ['mano', 'cabeza', 'pie'], 1],
['A1', '"Me duele el estómago" means:', ['My stomach hurts', 'My stomach is full', 'I want to eat'], 0],
['A1', 'Choose the correct word: "Yo ___ cansado."', ['soy', 'estoy', 'tengo'], 1],
['A1', '"¿Tiene hambre?" asks about:', ['hunger', 'fear', 'sleep'], 0],
['A2', '"No puedo dormir" means:', ['I do not want to sleep', 'I cannot sleep', 'I do not sleep well anymore'], 1],
['A2', 'Choose the correct word: "Tengo ___ de morirme."', ['miedo', 'hambre', 'calor'], 0],
['A2', '"Hace dos semanas" means:', ['In two weeks', 'Two weeks ago', 'Every two weeks'], 1],
['A2', '"Tome una pastilla cada ocho horas" means:', ['Take one pill every eight hours', 'Take eight pills a day', 'Take one pill at eight o\'clock'], 0],
['A2', 'In "Me siento muy triste," the verb sentirse means:', ['to feel', 'to sit', 'to send'], 0],
['A2', '"Mi mamá no me deja salir" means:', ['My mom does not leave me', 'My mom does not let me go out', 'My mom does not see me'], 1],
['B1', 'Which sentence is in the preterite (a finished event)?', ['Lloraba mucho', 'Lloró mucho anoche', 'Va a llorar mucho'], 1],
['B1', '"Cuando era niño, mi papá tomaba mucho" describes:', ['A habit in the past', 'A single event in the past', 'A plan for the future'], 0],
['B1', 'What does the subjunctive in "Quiero que tome su medicina" show?', ['A wish about what another person does', 'A past habit', 'A question'], 0],
['B1', 'Choose the correct form: "Espero que usted ___ mejor."', ['está', 'esté', 'estará'], 1],
['B1', 'A patient says "Tengo nervios." Most likely she means:', ['She is anxious or distressed', 'She has a nerve injury', 'She is angry at the nurse'], 0],
['B2', '"Estoy embarazada" means:', ['I am embarrassed', 'I am pregnant', 'I am nauseous'], 1],
['B2', 'A patient says "Estoy constipado." What do you do?', ['Document constipation', 'Ask what they mean: in many regions it means a head cold, not constipation', 'Document a fever'], 1],
['B2', 'A patient says "Me quiero ir con Dios." What should you do?', ['Ask about suicidal thoughts directly', 'Assume it is only a religious wish', 'Change the subject'], 0]
];
