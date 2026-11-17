/* Picture words, group 'food' (0.8.0): tap-to-learn pictures for #/pictures (js/pictures.js).
   DRAFT FOR REVIEW by a native Spanish-speaking clinician before use. US/Mexican baseline; regional variants in `r`.
   Shape: window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([ { id, group, title, lv: 'A1'|'A2',
     kind: 'diagram'|'cards', art (diagram only: a key of window.PICTURE_ART, pictures/art-food.js), intro: one English sentence,
     parts: [ { id: short Spanish slug without accents, w: the word WITH its definite article (colours, verbs and adjectives without),
                en, lv: 'A1'|'A2'|'B1', r?: regional variant in a few words,
                diagram: x, y = the point ON the thing in the art's viewBox units (copied from the reference, never moved);
                cards: pic = ONE emoji, Emoji 12.0 or older, no flags / skin tones / ZWJ sequences } ],
     say: [ { es: a sentence whose answer is exactly ONE part, en, p: part id } ] } ]);   6 to 10 sentences, at most a quarter of parts B1.
   Set ids and part ids are permanent: append only after release (never insert, reorder or delete).
   Set ids, kind, art and the order, x, y (or pic) of the parts follow the reference picture-set file of the same name;
   Cards tied to another country were relabelled to the nearest US/Latino thing (see the wire note). */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id: 'fruit-veg', group: 'food', title: 'Fruit and vegetables', lv: 'A1', kind: 'cards',
    intro: 'Common fruit and vegetables from the market, the kitchen and the fruit that visitors bring to a hospital room.',
    parts: [
      { id: 'manzana', w: 'la manzana', en: 'apple', lv: 'A1', pic: '🍎' },
      { id: 'mandarina', w: 'la mandarina', en: 'mandarin orange', lv: 'A2', pic: '🍊' },
      { id: 'platano', w: 'el plátano', en: 'banana', lv: 'A1', r: 'la banana, el guineo', pic: '🍌' },
      { id: 'uvas', w: 'las uvas', en: 'grapes', lv: 'A1', pic: '🍇' },
      { id: 'fresa', w: 'la fresa', en: 'strawberry', lv: 'A1', r: 'la frutilla', pic: '🍓' },
      { id: 'sandia', w: 'la sandía', en: 'watermelon', lv: 'A1', pic: '🍉' },
      { id: 'limon', w: 'el limón', en: 'lemon', lv: 'A1', r: 'Mexico: also means lime; el limón amarillo = lemon', pic: '🍋' },
      { id: 'melon', w: 'el melón', en: 'melon', lv: 'A2', pic: '🍈' },
      { id: 'tomate', w: 'el tomate', en: 'tomato', lv: 'A1', r: 'el jitomate (Mexico)', pic: '🍅' },
      { id: 'zanahoria', w: 'la zanahoria', en: 'carrot', lv: 'A1', pic: '🥕' },
      { id: 'papa', w: 'la papa', en: 'potato', lv: 'A1', r: 'Spain: la patata', pic: '🥔' },
      { id: 'cebolla', w: 'la cebolla', en: 'onion', lv: 'A1', pic: '🧅' },
      { id: 'lechuga', w: 'la lechuga', en: 'lettuce, leafy greens', lv: 'A1', r: 'el repollo = cabbage', pic: '🥬' },
      { id: 'pepino', w: 'el pepino', en: 'cucumber', lv: 'A2', pic: '🥒' },
      { id: 'elote', w: 'el elote', en: 'corn on the cob', lv: 'A2', r: 'el maíz = corn; el choclo (Andes)', pic: '🌽' },
      { id: 'hongo', w: 'el hongo', en: 'mushroom', lv: 'A2', r: 'el champiñón; la seta (Spain)', pic: '🍄' }
    ],
    say: [
      { es: 'Es una fruta amarilla y larga.', en: 'It is a long yellow fruit.', p: 'platano' },
      { es: 'Es una fruta amarilla muy ácida.', en: 'It is a very sour yellow fruit.', p: 'limon' },
      { es: 'Es una fruta grande, verde por fuera y roja por dentro.', en: 'It is a big fruit, green outside and red inside.', p: 'sandia' },
      { es: 'Aunque no tenga hambre, puedo comerme una mandarina.', en: 'Even when I am not hungry, I can eat a mandarin orange.', p: 'mandarina' },
      { es: 'Pude comer solo un poquito de manzana.', en: 'I was able to eat just a little apple.', p: 'manzana' },
      { es: 'Tengo alergia, así que no puedo comer fresas.', en: 'I have an allergy, so I cannot eat strawberries.', p: 'fresa' },
      { es: 'Mi familia me trajo unas uvas.', en: 'My family brought me some grapes.', p: 'uvas' },
      { es: 'Es la verdura anaranjada que se pone en el caldo de pollo.', en: 'It is the orange vegetable you put in chicken broth.', p: 'zanahoria' },
      { es: 'Es la verdura que hace llorar al cortarla.', en: 'It is the vegetable that makes you cry when you cut it.', p: 'cebolla' },
      { es: 'Las papas fritas se hacen con esta verdura.', en: 'French fries are made from this vegetable.', p: 'papa' }
    ] },
  { id: 'meals-drinks', group: 'food', title: 'Meals and drinks', lv: 'A1', kind: 'cards',
    intro: 'Everyday dishes and drinks, useful when you ask a patient what they eat and drink in a day.',
    parts: [
      { id: 'arroz', w: 'el arroz', en: 'rice', lv: 'A1', pic: '🍚' },
      { id: 'pan', w: 'el pan', en: 'bread', lv: 'A1', pic: '🍞' },
      { id: 'huevo', w: 'el huevo', en: 'egg', lv: 'A1', pic: '🥚' },
      { id: 'carne', w: 'la carne', en: 'meat', lv: 'A1', pic: '🍖' },
      { id: 'pescado', w: 'el pescado', en: 'fish (as food)', lv: 'A1', pic: '🐟' },
      { id: 'leche', w: 'la leche', en: 'milk', lv: 'A1', pic: '🥛' },
      { id: 'te', w: 'el té', en: 'tea', lv: 'A1', pic: '🍵' },
      { id: 'cafe', w: 'el café', en: 'coffee', lv: 'A1', pic: '☕' },
      { id: 'jugo', w: 'el jugo', en: 'juice', lv: 'A1', r: 'el zumo (Spain)', pic: '🧃' },
      { id: 'cerveza', w: 'la cerveza', en: 'beer', lv: 'A1', pic: '🍺' },
      { id: 'sandwich', w: 'el sándwich', en: 'sandwich', lv: 'A2', r: 'la torta (Mexico)', pic: '🥪' },
      { id: 'burrito', w: 'el burrito', en: 'burrito', lv: 'A2', pic: '🌯' },
      { id: 'sopa', w: 'la sopa', en: 'soup', lv: 'A1', pic: '🍜' },
      { id: 'taco', w: 'el taco', en: 'taco', lv: 'A1', pic: '🌮' },
      { id: 'frijoles', w: 'los frijoles', en: 'beans', lv: 'A1', r: 'las habichuelas (Caribbean); las judías (Spain)', pic: '🍲' },
      { id: 'pastel', w: 'el pastel', en: 'cake', lv: 'A2', r: 'la tarta (Spain); el queque', pic: '🍰' }
    ],
    say: [
      { es: 'Siempre como pan en la mañana.', en: 'I always eat bread in the morning.', p: 'pan' },
      { es: 'No tomo café porque no me deja dormir en la noche.', en: 'I do not drink coffee, because it keeps me awake at night.', p: 'cafe' },
      { es: '¿Cuántas cervezas toma al día?', en: 'How many beers do you drink a day?', p: 'cerveza' },
      { es: 'Cuando tomo leche, me duele el estómago.', en: 'When I drink milk, my stomach hurts.', p: 'leche' },
      { es: '¿Tiene alergia al huevo?', en: 'Do you have an egg allergy?', p: 'huevo' },
      { es: 'Tome un té caliente después de comer.', en: 'Please have some hot tea after your meal.', p: 'te' },
      { es: 'Es una tortilla doblada con carne y salsa adentro.', en: 'It is a folded tortilla with meat and salsa inside.', p: 'taco' },
      { es: 'Tiene caldo caliente y fideos.', en: 'It has hot broth and noodles.', p: 'sopa' },
      { es: 'Es algo dulce que se come en los cumpleaños.', en: 'It is a sweet thing you eat on your birthday.', p: 'pastel' },
      { es: 'Son unos granos pequeños y oscuros que se cocinan despacio en una olla.', en: 'They are small dark beans that cook slowly in a pot.', p: 'frijoles' }
    ] },
  { id: 'table-setting', group: 'food', title: 'A meal tray', lv: 'A2', kind: 'diagram', art: 'table-setting',
    intro: 'The things on and around a meal tray, as served at home or on a hospital ward.',
    parts: [
      { id: 'bandeja', w: 'la bandeja', en: 'tray', lv: 'A2', x: 25, y: 222 },
      { id: 'tazon', w: 'el tazón', en: 'small bowl (drawn with rice)', lv: 'A2', x: 100, y: 236 },
      { id: 'plato-hondo', w: 'el plato hondo', en: 'soup bowl', lv: 'A2', r: 'el plato sopero', x: 218, y: 238 },
      { id: 'plato', w: 'el plato', en: 'plate', lv: 'A1', x: 272, y: 188 },
      { id: 'palillos', w: 'los palillos chinos', en: 'chopsticks (as drawn)', lv: 'B1', r: 'los palillos', x: 110, y: 272 },
      { id: 'cuchara', w: 'la cuchara', en: 'spoon', lv: 'A1', x: 246, y: 272 },
      { id: 'tenedor', w: 'el tenedor', en: 'fork', lv: 'A1', x: 346, y: 266 },
      { id: 'cuchillo', w: 'el cuchillo', en: 'knife', lv: 'A1', x: 393, y: 280 },
      { id: 'vaso', w: 'el vaso', en: 'glass', lv: 'A1', x: 54, y: 114 },
      { id: 'taza', w: 'la taza', en: 'cup', lv: 'A1', x: 358, y: 140 },
      { id: 'tetera', w: 'la tetera', en: 'teapot', lv: 'A2', x: 360, y: 84 },
      { id: 'salsa-picante', w: 'la salsa picante', en: 'hot sauce bottle (drawn as a sauce bottle)', lv: 'A2', x: 130, y: 120 },
      { id: 'salero', w: 'el salero', en: 'salt shaker', lv: 'A2', r: 'la sal = salt', x: 190, y: 120 }
    ],
    say: [
      { es: 'Cuando termine de comer, me llevo la bandeja.', en: 'When you have finished eating, I will take the tray away.', p: 'bandeja' },
      { es: 'Es un recipiente redondo y sin asa, para el cereal o el arroz.', en: 'It is a round container with no handle, for cereal or rice.', p: 'tazon' },
      { es: 'Es un plato profundo para servir la sopa.', en: 'It is a deep dish for serving soup.', p: 'plato-hondo' },
      { es: 'Hay pescado asado en esto.', en: 'There is grilled fish on this.', p: 'plato' },
      { es: 'Si le cuesta usar los palillos, avíseme.', en: 'If the chopsticks are hard to use, please tell me.', p: 'palillos' },
      { es: 'Si le cuesta comer, use la cuchara.', en: 'If it is hard to eat, please use the spoon.', p: 'cuchara' },
      { es: 'Tiene la presión alta; por favor, no use mucha sal.', en: 'Your blood pressure is high, so please do not use much salt.', p: 'salero' },
      { es: 'Con su gastritis, mejor no se ponga mucha salsa picante.', en: 'With your gastritis, it is better not to put on much hot sauce.', p: 'salsa-picante' },
      { es: 'Con esto se prepara el té.', en: 'You make tea with this.', p: 'tetera' },
      { es: 'Voy a tomar mi medicina, ¿me da un vaso de agua?', en: 'I am going to take my medicine. Could you give me a glass of water?', p: 'vaso' }
    ] }
]);
