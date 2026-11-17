/* Picture words, group 'nature' (0.8.0): tap-to-learn pictures for #/pictures (js/pictures.js).
   DRAFT FOR REVIEW by a native Spanish-speaking clinician before use. US/Mexican baseline; regional variants in `r`.
   Shape: window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([ { id, group, title, lv: 'A1'|'A2',
     kind: 'diagram'|'cards', art (diagram only: a key of window.PICTURE_ART, pictures/art-nature.js), intro: one English sentence,
     parts: [ { id: short Spanish slug without accents, w: the word WITH its definite article (colours, verbs and adjectives without),
                en, lv: 'A1'|'A2'|'B1', r?: regional variant in a few words,
                diagram: x, y = the point ON the thing in the art's viewBox units (copied from the reference, never moved);
                cards: pic = ONE emoji, Emoji 12.0 or older, no flags / skin tones / ZWJ sequences } ],
     say: [ { es: a sentence whose answer is exactly ONE part, en, p: part id } ] } ]);   6 to 10 sentences, at most a quarter of parts B1.
   Set ids and part ids are permanent: append only after release (never insert, reorder or delete).
   Set ids, kind, art and the order, x, y (or pic) of the parts follow the reference picture-set file of the same name;
   Cards tied to another country were relabelled to the nearest US/Latino thing (see the wire note). */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id: 'landscape', group: 'nature', title: 'A landscape', lv: 'A1', kind: 'diagram', art: 'landscape',
    intro: 'The basic words for the land, water and sky in one country scene.',
    parts: [
      { id: 'cielo', w: 'el cielo', en: 'sky', lv: 'A1', x: 262, y: 34 },
      { id: 'sol', w: 'el sol', en: 'sun', lv: 'A1', x: 352, y: 46 },
      { id: 'nube', w: 'la nube', en: 'cloud', lv: 'A1', x: 88, y: 46 },
      { id: 'montana', w: 'la montaña', en: 'mountain', lv: 'A1', r: 'el cerro', x: 205, y: 118 },
      { id: 'bosque', w: 'el bosque', en: 'forest', lv: 'A2', x: 60, y: 136 },
      { id: 'arbol', w: 'el árbol', en: 'tree', lv: 'A1', x: 146, y: 184 },
      { id: 'rio', w: 'el río', en: 'river', lv: 'A1', x: 236, y: 244 },
      { id: 'puente', w: 'el puente', en: 'bridge', lv: 'A1', x: 199, y: 190 },
      { id: 'mar', w: 'el mar', en: 'sea', lv: 'A1', r: 'el océano = ocean', x: 334, y: 262 },
      { id: 'isla', w: 'la isla', en: 'island', lv: 'A2', x: 352, y: 192 },
      { id: 'campo-cultivo', w: 'el campo de cultivo', en: 'field of crops (drawn as a plot)', lv: 'A2', r: 'el sembradío; la milpa (Mexico: corn field)', x: 98, y: 240 },
      { id: 'flor', w: 'la flor', en: 'flower', lv: 'A1', x: 178, y: 262 }
    ],
    say: [
      { es: 'En verano subí una montaña con mis amigos.', en: 'In summer I climbed a mountain with friends.', p: 'montana' },
      { es: 'De niño jugaba mucho en el río.', en: 'As a child I often played in the river.', p: 'rio' },
      { es: 'Me gusta nadar en el mar.', en: 'I like swimming in the sea.', p: 'mar' },
      { es: 'El cielo está muy azul hoy, ¿verdad?', en: 'The sky is very blue today, isn\'t it?', p: 'cielo' },
      { es: 'Hoy salió el sol y hace calor.', en: 'The sun is out today, and it is warm.', p: 'sol' },
      { es: 'Caminar por el bosque me hace sentir bien.', en: 'Walking in the forest makes me feel good.', p: 'bosque' },
      { es: 'Le llevé flores a mi mamá cuando estuvo hospitalizada.', en: 'I took flowers to my mother when she was in the hospital.', p: 'flor' },
      { es: 'Si cruza este puente, ahí está el hospital.', en: 'If you cross this bridge, the hospital is right there.', p: 'puente' },
      { es: 'Estoy cansado; descansemos un rato bajo el árbol.', en: 'I am tired, so let us rest a little under the tree.', p: 'arbol' },
      { es: 'Se llega a la isla en una hora en lancha.', en: 'It takes an hour by boat to the island.', p: 'isla' }
    ] },
  { id: 'weather', group: 'nature', title: 'Weather', lv: 'A1', kind: 'cards',
    intro: 'Words for the weather, the small talk that starts many conversations and a good way to ask how someone slept or felt.',
    parts: [
      { id: 'sol', w: 'el sol', en: 'sun, sunny weather', lv: 'A1', pic: '☀️' },
      { id: 'nublado', w: 'nublado', en: 'cloudy', lv: 'A1', pic: '☁️' },
      { id: 'lluvia', w: 'la lluvia', en: 'rain', lv: 'A1', pic: '🌧️' },
      { id: 'nieve', w: 'la nieve', en: 'snow', lv: 'A1', pic: '❄️' },
      { id: 'viento', w: 'el viento', en: 'wind', lv: 'A1', pic: '🌬️' },
      { id: 'huracan', w: 'el huracán', en: 'hurricane', lv: 'A2', pic: '🌀' },
      { id: 'rayo', w: 'el rayo', en: 'lightning', lv: 'A2', r: 'el trueno = thunder', pic: '⚡' },
      { id: 'arcoiris', w: 'el arcoíris', en: 'rainbow', lv: 'A2', r: 'el arco iris', pic: '🌈' },
      { id: 'niebla', w: 'la niebla', en: 'fog', lv: 'A2', r: 'la neblina', pic: '🌫️' },
      { id: 'paraguas', w: 'el paraguas', en: 'umbrella', lv: 'A1', pic: '☂️' },
      { id: 'calor', w: 'el calor', en: 'heat, hot weather', lv: 'A1', pic: '🥵' },
      { id: 'frio', w: 'el frío', en: 'cold', lv: 'A1', pic: '🥶' },
      { id: 'temperatura', w: 'la temperatura', en: 'temperature', lv: 'A2', pic: '🌡️' },
      { id: 'hielo', w: 'el hielo', en: 'ice', lv: 'A1', pic: '🧊' }
    ],
    say: [
      { es: 'Hoy hay mucho sol; vamos a caminar.', en: 'There is a lot of sun today, so let us go for a walk.', p: 'sol' },
      { es: '¿Le duele la cabeza cuando llueve?', en: 'Do you get headaches when it rains?', p: 'lluvia' },
      { es: 'No se olvide del paraguas cuando salga.', en: 'Please do not forget your umbrella when you go out.', p: 'paraguas' },
      { es: 'En el norte cae mucha nieve en invierno.', en: 'In the north a lot of snow falls in winter.', p: 'nieve' },
      { es: 'Viene un huracán; mejor vámonos a casa temprano.', en: 'A hurricane is coming, so let us go home early.', p: 'huracan' },
      { es: 'Hace frío; por favor, póngase una chaqueta.', en: 'It is cold, so please put on a jacket.', p: 'frio' },
      { es: 'Cuando hace calor, tome mucha agua.', en: 'When it is hot, please drink plenty of water.', p: 'calor' },
      { es: 'La temperatura de hoy es de treinta y cinco grados.', en: 'Today\'s temperature is thirty-five degrees.', p: 'temperatura' },
      { es: 'Anoche cayó un rayo cerca de mi casa y no pude dormir bien.', en: 'Last night lightning struck near my house and I could not sleep well.', p: 'rayo' },
      { es: 'Hay mucho viento; cerremos la ventana.', en: 'The wind is strong, so let us close the window.', p: 'viento' }
    ] },
  { id: 'seasons-plants', group: 'nature', title: 'Seasons, plants and the night sky', lv: 'A1', kind: 'cards',
    intro: 'The four seasons, some common plants, and the night sky.',
    parts: [
      { id: 'primavera', w: 'la primavera', en: 'spring', lv: 'A1', pic: '🌷' },
      { id: 'verano', w: 'el verano', en: 'summer', lv: 'A1', pic: '🏖️' },
      { id: 'otono', w: 'el otoño', en: 'autumn, fall', lv: 'A1', pic: '🍂' },
      { id: 'invierno', w: 'el invierno', en: 'winter', lv: 'A1', pic: '⛄' },
      { id: 'noche', w: 'la noche', en: 'night', lv: 'A1', pic: '🌃' },
      { id: 'rosa', w: 'la rosa', en: 'rose', lv: 'A1', pic: '🌹' },
      { id: 'hoja', w: 'la hoja', en: 'leaf', lv: 'A2', pic: '🍁' },
      { id: 'girasol', w: 'el girasol', en: 'sunflower', lv: 'A2', pic: '🌻' },
      { id: 'arbol', w: 'el árbol', en: 'tree', lv: 'A1', pic: '🌳' },
      { id: 'pasto', w: 'el pasto', en: 'grass, lawn', lv: 'A2', r: 'el césped; la hierba; la yerba', pic: '🌿' },
      { id: 'planta', w: 'la planta', en: 'plant', lv: 'A1', pic: '🌱' },
      { id: 'luna', w: 'la luna', en: 'moon', lv: 'A1', pic: '🌙' },
      { id: 'estrella', w: 'la estrella', en: 'star', lv: 'A1', pic: '⭐' }
    ],
    say: [
      { es: 'Llegó la primavera y ya hace más calor.', en: 'Spring has come, and it has got warmer.', p: 'primavera' },
      { es: 'Con el calor del verano, mucha gente duerme mal.', en: 'In the summer heat, many people sleep badly.', p: 'verano' },
      { es: 'En invierno hace frío y cuesta levantarse en la mañana.', en: 'Winter is cold, and getting up in the morning is hard.', p: 'invierno' },
      { es: '¿A qué hora se acuesta por la noche?', en: 'About what time do you go to bed at night?', p: 'noche' },
      { es: 'Le regalé una rosa a mi mamá.', en: 'I gave my mother a rose.', p: 'rosa' },
      { es: 'Las hojas del jardín se pusieron rojas y amarillas.', en: 'The leaves in the garden turned red and yellow.', p: 'hoja' },
      { es: 'El pasto del jardín creció mucho.', en: 'The grass in the garden has grown long.', p: 'pasto' },
      { es: 'Hay un árbol grande frente al hospital.', en: 'There is a big tree in front of the hospital.', p: 'arbol' },
      { es: 'Esta noche la luna está redonda y hermosa, ¿verdad?', en: 'The moon is round and beautiful tonight, isn\'t it?', p: 'luna' },
      { es: 'Todas las mañanas riego las plantas de mi cuarto.', en: 'Every morning I water the plants in my room.', p: 'planta' }
    ] }
]);
