/* Sound pairs (Hablemos 0.9.0). Used by #/listen?tab=pairs (js/listen.js): the learner hears one word of a pair and chooses which.
   DRAFT FOR REVIEW by a native Spanish-speaking clinician before use. US / Mexican baseline; every word is a real, everyday word.
   Shape: window.SOUND_PAIRS = {
     guide: [[type, title, explanation]],      // explanation: two sentences, plain English
     items: [[type, a, ea, b, eb, note?]] };   // a, b: the two Spanish words (both recorded by the audio pack); ea, eb: their English;
                                                  // note: optional, one sentence on why the difference matters
   Types: stress, r-rr, vowel, consonant, ending, number. Only pairs that a Mexican Spanish voice says clearly differently:
   no b / v, s / z / soft c, ll / y or silent h pairs, and no pairs that differ only by a written accent (si / sí, el / él, tu / tú).
   Items are identified by their position: append only after release (never insert, reorder or delete). */
window.SOUND_PAIRS = {
  guide: [
    ['stress', 'Stress and the written accent', 'Many Spanish verbs change meaning when the stress moves: hablo (I speak) is stressed on HA, habló (he or she spoke) on BLÓ. Listen for the loud, slightly longer syllable at the end of the word, because it often turns the present into the past.'],
    ['r-rr', 'Single r and trilled rr', 'A single r between vowels is one quick tap of the tongue, like the tt in American "butter". The rr (and an r at the start of a word) is a trill of several taps, so pero (but) and perro (dog) are different words.'],
    ['vowel', 'The five vowels', 'Spanish has five short, clear vowels (a, e, i, o, u) that never glide or weaken, so one vowel is enough to change the word. Listen to each vowel on its own: peso (weight) and piso (floor) differ only in the first one.'],
    ['consonant', 'One consonant', 'These pairs differ by a single consonant, or by one sound added or left out. The ñ is its own letter, like the ny in "canyon", so año (year) and ano (anus) are very different words.'],
    ['ending', 'Indicative or subjunctive ending', 'In the present, -ar verbs end in -a in the indicative and -e in the subjunctive and usted commands; -er and -ir verbs do the opposite. Usted toma la pastilla describes what the patient does, while Tome la pastilla asks the patient to do it, so the last vowel matters.'],
    ['number', 'Numbers', 'Numbers that sound alike are easy to mix up when a patient gives an age, a time or how many pills. Listen for the end of the word: trece (13) ends in -ce, treinta (30) in -inta.']
  ],
  items: [
    /* stress */
    ['stress', 'hablo', 'I speak', 'habló', 'he or she spoke'],
    ['stress', 'tomo', 'I take', 'tomó', 'he or she took', 'Tomó la pastilla is a past event; tomo la pastilla is what I do now or usually.'],
    ['stress', 'esta', 'this (feminine)', 'está', 'is (state, place)'],
    ['stress', 'papa', 'potato', 'papá', 'dad'],
    ['stress', 'llego', 'I arrive', 'llegó', 'he or she arrived'],
    ['stress', 'practico', 'I practice', 'practicó', 'he or she practiced'],
    ['stress', 'camino', 'I walk; path', 'caminó', 'he or she walked'],
    ['stress', 'término', 'term, end', 'termino', 'I finish'],
    ['stress', 'termino', 'I finish', 'terminó', 'he or she finished'],
    ['stress', 'cambio', 'I change; change', 'cambió', 'he or she changed', 'Cambió la medicina means the change already happened.'],
    ['stress', 'olvido', 'I forget', 'olvidó', 'he or she forgot'],
    ['stress', 'trabajo', 'I work; job', 'trabajó', 'he or she worked'],
    ['stress', 'estudio', 'I study; study', 'estudió', 'he or she studied'],
    ['stress', 'baño', 'bathroom; I bathe', 'bañó', 'he or she bathed'],
    ['stress', 'ánimo', 'mood, spirits', 'animó', 'he or she cheered up', 'Ánimo is stressed on the first syllable; animó on the last.'],
    ['stress', 'tomara', 'took (past subjunctive)', 'tomará', 'will take', 'Me dijo que tomara is an instruction given in the past; tomará is a future plan.'],
    ['stress', 'continuo', 'continuous', 'continúo', 'I continue'],
    /* r and rr */
    ['r-rr', 'pero', 'but', 'perro', 'dog'],
    ['r-rr', 'caro', 'expensive', 'carro', 'car'],
    ['r-rr', 'para', 'for; stops', 'parra', 'grapevine'],
    ['r-rr', 'coro', 'choir', 'corro', 'I run'],
    ['r-rr', 'cero', 'zero', 'cerro', 'hill'],
    ['r-rr', 'ahora', 'now', 'ahorra', 'saves (money)'],
    ['r-rr', 'encerado', 'waxed', 'encerrado', 'shut in, locked in', 'A relative may say Está encerrado en su cuarto: he stays shut in his room.'],
    ['r-rr', 'enterado', 'informed, aware', 'enterrado', 'buried'],
    /* vowels */
    ['vowel', 'hombre', 'man', 'hambre', 'hunger'],
    ['vowel', 'pesar', 'to weigh', 'pasar', 'to happen; to pass'],
    ['vowel', 'mesa', 'table', 'misa', 'Mass (church)'],
    ['vowel', 'peso', 'weight', 'piso', 'floor'],
    ['vowel', 'miedo', 'fear', 'medio', 'half; middle'],
    ['vowel', 'mano', 'hand', 'mono', 'monkey'],
    ['vowel', 'pelo', 'hair', 'palo', 'stick'],
    ['vowel', 'sal', 'salt', 'sol', 'sun'],
    ['vowel', 'sudar', 'to sweat', 'sedar', 'to sedate'],
    ['vowel', 'dedo', 'finger', 'dado', 'given; die (game)'],
    ['vowel', 'mudo', 'mute', 'modo', 'way, manner'],
    ['vowel', 'lleno', 'full', 'llano', 'flat; plain'],
    /* consonants */
    ['consonant', 'cansado', 'tired', 'casado', 'married', 'Estoy cansado and Estoy casado answer very different questions.'],
    ['consonant', 'cuatro', 'four', 'cuarto', 'room; quarter'],
    ['consonant', 'pena', 'sorrow; embarrassment', 'peña', 'rock, crag'],
    ['consonant', 'cana', 'gray hair', 'caña', 'sugarcane'],
    ['consonant', 'año', 'year', 'ano', 'anus', 'Always say the ñ in años when you ask for an age.'],
    ['consonant', 'vaso', 'glass (for drinking)', 'paso', 'step'],
    ['consonant', 'boca', 'mouth', 'poca', 'little (amount)'],
    ['consonant', 'tía', 'aunt', 'día', 'day'],
    ['consonant', 'duele', 'it hurts', 'suele', 'he or she usually does'],
    ['consonant', 'tos', 'cough', 'dos', 'two'],
    ['consonant', 'todo', 'all, everything', 'codo', 'elbow'],
    ['consonant', 'pecho', 'chest', 'techo', 'roof, ceiling'],
    ['consonant', 'cama', 'bed', 'calma', 'calm'],
    ['consonant', 'sueño', 'sleep; dream', 'dueño', 'owner'],
    ['consonant', 'gato', 'cat', 'pato', 'duck'],
    /* indicative / subjunctive endings */
    ['ending', 'come', 'he or she eats', 'coma', 'eat (usted command); that he or she eats'],
    ['ending', 'toma', 'he or she takes', 'tome', 'take (usted command); that he or she takes', 'The doctor says Tome una tableta: an instruction, not a description.'],
    ['ending', 'siente', 'he or she feels', 'sienta', 'that he or she feels'],
    ['ending', 'duerme', 'he or she sleeps', 'duerma', 'sleep (usted command); that he or she sleeps'],
    ['ending', 'habla', 'he or she speaks', 'hable', 'speak (usted command); that he or she speaks'],
    ['ending', 'bebe', 'he or she drinks', 'beba', 'drink (usted command); that he or she drinks'],
    ['ending', 'descansa', 'he or she rests', 'descanse', 'rest (usted command); that he or she rests'],
    ['ending', 'llama', 'he or she calls', 'llame', 'call (usted command); that he or she calls', 'Llame al 988 is an instruction to call.'],
    ['ending', 'escribe', 'he or she writes', 'escriba', 'write (usted command); that he or she writes'],
    /* numbers */
    ['number', 'dos', 'two', 'doce', 'twelve'],
    ['number', 'tres', 'three', 'trece', 'thirteen'],
    ['number', 'trece', 'thirteen', 'treinta', 'thirty'],
    ['number', 'seis', 'six', 'siete', 'seven'],
    ['number', 'sesenta', 'sixty', 'setenta', 'seventy', 'Sesenta has an s in the middle; setenta has a t.'],
    ['number', 'cuatro', 'four', 'catorce', 'fourteen'],
    ['number', 'catorce', 'fourteen', 'cuarenta', 'forty'],
    ['number', 'quince', 'fifteen', 'quinientos', 'five hundred'],
    ['number', 'seiscientos', 'six hundred', 'setecientos', 'seven hundred']
  ]
};
