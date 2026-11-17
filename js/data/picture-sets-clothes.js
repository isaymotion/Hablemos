/* Picture words, group 'clothes' (0.8.0): tap-to-learn pictures for #/pictures (js/pictures.js).
   DRAFT FOR REVIEW by a native Spanish-speaking clinician before use. US/Mexican baseline; regional variants in `r`.
   Shape: window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([ { id, group, title, lv: 'A1'|'A2',
     kind: 'diagram'|'cards', art (diagram only: a key of window.PICTURE_ART, pictures/art-clothes.js), intro: one English sentence,
     parts: [ { id: short Spanish slug without accents, w: the word WITH its definite article (colours, verbs and adjectives without),
                en, lv: 'A1'|'A2'|'B1', r?: regional variant in a few words,
                diagram: x, y = the point ON the thing in the art's viewBox units (copied from the reference, never moved);
                cards: pic = ONE emoji, Emoji 12.0 or older, no flags / skin tones / ZWJ sequences } ],
     say: [ { es: a sentence whose answer is exactly ONE part, en, p: part id } ] } ]);   6 to 10 sentences, at most a quarter of parts B1.
   Set ids and part ids are permanent: append only after release (never insert, reorder or delete).
   Set ids, kind, art and the order, x, y (or pic) of the parts follow the reference picture-set file of the same name;
   Cards tied to another country were relabelled to the nearest US/Latino thing (see the wire note). */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id: 'clothes', group: 'clothes', title: 'Clothes', lv: 'A1', kind: 'diagram', art: 'clothes',
    intro: 'Two people dressed for going out. Tap each item of clothing to hear its name, ready for the verbs of wearing and undressing.',
    parts: [
      { id: 'sombrero', w: 'el sombrero', en: 'hat', lv: 'A1', r: 'la gorra = cap', x: 95, y: 34 },
      { id: 'lentes', w: 'los lentes', en: 'glasses', lv: 'A2', r: 'las gafas (Spain)', x: 105, y: 76 },
      { id: 'bolsillo', w: 'el bolsillo', en: 'pocket', lv: 'A2', x: 78, y: 140 },
      { id: 'camisa', w: 'la camisa', en: 'shirt', lv: 'A1', x: 115, y: 138 },
      { id: 'boton', w: 'el botón', en: 'button', lv: 'A2', x: 95, y: 170 },
      { id: 'cinturon', w: 'el cinturón', en: 'belt', lv: 'A2', x: 114, y: 205 },
      { id: 'pantalones', w: 'los pantalones', en: 'pants', lv: 'A1', x: 79, y: 290 },
      { id: 'zapatos', w: 'los zapatos', en: 'shoes', lv: 'A1', x: 117, y: 369 },
      { id: 'abrigo', w: 'el abrigo', en: 'coat', lv: 'A1', r: 'la chamarra = jacket', x: 282, y: 175 },
      { id: 'falda', w: 'la falda', en: 'skirt', lv: 'A1', x: 252, y: 274 },
      { id: 'bolsa', w: 'la bolsa', en: 'bag, handbag', lv: 'A1', r: 'el bolso; la cartera', x: 311, y: 238 },
      { id: 'calcetines', w: 'los calcetines', en: 'socks', lv: 'A1', r: 'las calcetas (Mexico)', x: 255, y: 345 }
    ],
    say: [
      { es: 'Él lleva puesto un sombrero.', en: 'He is wearing a hat.', p: 'sombrero' },
      { es: 'Ve mal, por eso usa lentes.', en: 'His eyes are weak, so he wears glasses.', p: 'lentes' },
      { es: 'Hace frío, así que ella lleva un abrigo.', en: 'It is cold, so she is wearing a coat.', p: 'abrigo' },
      { es: 'La mujer lleva una falda.', en: 'The woman is wearing a skirt.', p: 'falda' },
      { es: 'Antes de salir, me pongo los zapatos.', en: 'Before going out, I put on my shoes.', p: 'zapatos' },
      { es: 'Voy a revisarle los pies, así que quítese los calcetines.', en: 'I am going to look at your feet, so please take off your socks.', p: 'calcetines' },
      { es: 'Voy a escucharle el pecho; desabróchese el botón de arriba.', en: 'I will listen to your chest, so please undo the top button.', p: 'boton' },
      { es: 'Voy a examinarle el abdomen; desabróchese el cinturón.', en: 'I will examine your stomach, so please undo your belt.', p: 'cinturon' },
      { es: 'Mi tarjeta del seguro está en mi bolsa.', en: 'My insurance card is in my bag.', p: 'bolsa' },
      { es: 'Guardo mi pluma en el bolsillo.', en: 'I keep my pen in my pocket.', p: 'bolsillo' }
    ] },
  { id: 'accessories-colours', group: 'clothes', title: 'Colors and accessories', lv: 'A1', kind: 'cards',
    intro: 'Colour words, which are adjectives and agree with the noun, and a few things people wear or carry.',
    parts: [
      { id: 'rojo', w: 'rojo', en: 'red', lv: 'A1', pic: '🔴' },
      { id: 'azul', w: 'azul', en: 'blue', lv: 'A1', pic: '🔵' },
      { id: 'amarillo', w: 'amarillo', en: 'yellow', lv: 'A1', pic: '🟡' },
      { id: 'blanco', w: 'blanco', en: 'white', lv: 'A1', pic: '⚪' },
      { id: 'negro', w: 'negro', en: 'black', lv: 'A1', pic: '⚫' },
      { id: 'verde', w: 'verde', en: 'green', lv: 'A1', pic: '🟢' },
      { id: 'cafe', w: 'café', en: 'brown', lv: 'A1', r: 'marrón', pic: '🟤' },
      { id: 'naranja', w: 'naranja', en: 'orange', lv: 'A1', r: 'anaranjado', pic: '🟠' },
      { id: 'morado', w: 'morado', en: 'purple', lv: 'A2', r: 'púrpura; violeta', pic: '🟣' },
      { id: 'paraguas', w: 'el paraguas', en: 'umbrella', lv: 'A1', pic: '🌂' },
      { id: 'reloj', w: 'el reloj', en: 'watch, clock', lv: 'A1', pic: '⌚' },
      { id: 'anillo', w: 'el anillo', en: 'ring', lv: 'A2', pic: '💍' },
      { id: 'bufanda', w: 'la bufanda', en: 'scarf', lv: 'A2', pic: '🧣' },
      { id: 'guantes', w: 'los guantes', en: 'gloves', lv: 'A2', pic: '🧤' },
      { id: 'corbata', w: 'la corbata', en: 'necktie', lv: 'A2', pic: '👔' }
    ],
    say: [
      { es: 'La sangre es roja.', en: 'Blood is red.', p: 'rojo' },
      { es: 'Cuando está despejado, el cielo es azul.', en: 'On a clear day the sky is blue.', p: 'azul' },
      { es: 'Los plátanos maduros son amarillos.', en: 'Ripe bananas are yellow.', p: 'amarillo' },
      { es: 'La nieve es blanca.', en: 'Snow is white.', p: 'blanco' },
      { es: 'En verano las hojas de los árboles son verdes.', en: 'In summer the leaves on the trees are green.', p: 'verde' },
      { es: 'Se usa en los días de lluvia.', en: 'You use it on rainy days.', p: 'paraguas' },
      { es: 'Se mira para medir el pulso.', en: 'You look at this when you take a pulse.', p: 'reloj' },
      { es: 'Quítese el anillo antes del estudio.', en: 'Please take off your ring before the test.', p: 'anillo' },
      { es: 'Se enrolla alrededor del cuello cuando hace frío.', en: 'You wrap it around your neck when it is cold.', p: 'bufanda' },
      { es: 'Las enfermeras usan guantes cuando ponen una inyección.', en: 'Nurses wear gloves when they give an injection.', p: 'guantes' }
    ] }
]);
