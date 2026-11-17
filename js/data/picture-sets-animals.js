/* Picture words, group 'animals' (0.8.0): tap-to-learn pictures for #/pictures (js/pictures.js).
   DRAFT FOR REVIEW by a native Spanish-speaking clinician before use. US/Mexican baseline; regional variants in `r`.
   Shape: window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([ { id, group, title, lv: 'A1'|'A2',
     kind: 'diagram'|'cards', art (diagram only: a key of window.PICTURE_ART, pictures/art-animals.js), intro: one English sentence,
     parts: [ { id: short Spanish slug without accents, w: the word WITH its definite article (colours, verbs and adjectives without),
                en, lv: 'A1'|'A2'|'B1', r?: regional variant in a few words,
                diagram: x, y = the point ON the thing in the art's viewBox units (copied from the reference, never moved);
                cards: pic = ONE emoji, Emoji 12.0 or older, no flags / skin tones / ZWJ sequences } ],
     say: [ { es: a sentence whose answer is exactly ONE part, en, p: part id } ] } ]);   6 to 10 sentences, at most a quarter of parts B1.
   Set ids and part ids are permanent: append only after release (never insert, reorder or delete).
   Set ids, kind, art and the order, x, y (or pic) of the parts follow the reference picture-set file of the same name;
   Cards tied to another country were relabelled to the nearest US/Latino thing (see the wire note). */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id: 'pets-farm', group: 'animals', title: 'Pets and farm animals', lv: 'A1', kind: 'cards',
    intro: 'Animals that people keep at home and on farms, and the words a patient may use to describe a pet or a childhood on a ranch.',
    parts: [
      { id: 'perro', w: 'el perro', en: 'dog', lv: 'A1', pic: '🐕' },
      { id: 'gato', w: 'el gato', en: 'cat', lv: 'A1', pic: '🐈' },
      { id: 'conejo', w: 'el conejo', en: 'rabbit', lv: 'A1', pic: '🐇' },
      { id: 'hamster', w: 'el hámster', en: 'hamster', lv: 'A2', pic: '🐹' },
      { id: 'raton', w: 'el ratón', en: 'mouse', lv: 'A1', r: 'la rata = rat', pic: '🐁' },
      { id: 'tortuga', w: 'la tortuga', en: 'turtle, tortoise', lv: 'A1', pic: '🐢' },
      { id: 'caballo', w: 'el caballo', en: 'horse', lv: 'A1', pic: '🐎' },
      { id: 'vaca', w: 'la vaca', en: 'cow', lv: 'A1', pic: '🐄' },
      { id: 'cerdo', w: 'el cerdo', en: 'pig', lv: 'A1', r: 'el puerco, el marrano', pic: '🐖' },
      { id: 'gallina', w: 'la gallina', en: 'hen, chicken', lv: 'A1', r: 'el gallo = rooster', pic: '🐔' },
      { id: 'oveja', w: 'la oveja', en: 'sheep', lv: 'A1', pic: '🐑' },
      { id: 'cabra', w: 'la cabra', en: 'goat', lv: 'A1', pic: '🐐' }
    ],
    say: [
      { es: 'Saco a pasear al perro todas las mañanas.', en: 'I walk the dog every morning.', p: 'perro' },
      { es: 'El gato me arañó la mano.', en: 'The cat scratched my hand.', p: 'gato' },
      { es: 'Es un animal con las orejas muy largas.', en: 'It is an animal with very long ears.', p: 'conejo' },
      { es: 'Es un animal que camina muy despacio.', en: 'It is an animal that walks very slowly.', p: 'tortuga' },
      { es: 'Es el animal que se monta para galopar.', en: 'It is the animal you ride to gallop.', p: 'caballo' },
      { es: 'De este animal sacamos la leche.', en: 'We get milk from this animal.', p: 'vaca' },
      { es: 'El tocino viene de este animal.', en: 'Bacon comes from this animal.', p: 'cerdo' },
      { es: 'Este animal pone huevos.', en: 'This animal lays eggs.', p: 'gallina' },
      { es: 'Cuando no puedo dormir, cuento estos animales.', en: 'When I cannot sleep, I count these animals.', p: 'oveja' }
    ] },
  { id: 'zoo', group: 'animals', title: 'At the zoo', lv: 'A2', kind: 'cards',
    intro: 'Wild animals you see at a zoo or on a nature program, and the animals people fear.',
    parts: [
      { id: 'elefante', w: 'el elefante', en: 'elephant', lv: 'A2', pic: '🐘' },
      { id: 'leon', w: 'el león', en: 'lion', lv: 'A2', pic: '🦁' },
      { id: 'tigre', w: 'el tigre', en: 'tiger', lv: 'A2', pic: '🐅' },
      { id: 'jirafa', w: 'la jirafa', en: 'giraffe', lv: 'A2', pic: '🦒' },
      { id: 'panda', w: 'el panda', en: 'panda', lv: 'A2', r: 'el oso panda', pic: '🐼' },
      { id: 'mono', w: 'el mono', en: 'monkey', lv: 'A2', pic: '🐒' },
      { id: 'gorila', w: 'el gorila', en: 'gorilla', lv: 'A2', pic: '🦍' },
      { id: 'oso', w: 'el oso', en: 'bear', lv: 'A2', pic: '🐻' },
      { id: 'cebra', w: 'la cebra', en: 'zebra', lv: 'A2', pic: '🦓' },
      { id: 'hipopotamo', w: 'el hipopótamo', en: 'hippopotamus', lv: 'B1', pic: '🦛' },
      { id: 'cocodrilo', w: 'el cocodrilo', en: 'crocodile', lv: 'A2', pic: '🐊' },
      { id: 'serpiente', w: 'la serpiente', en: 'snake', lv: 'A2', r: 'la víbora, la culebra', pic: '🐍' },
      { id: 'koala', w: 'el koala', en: 'koala', lv: 'A2', pic: '🐨' },
      { id: 'canguro', w: 'el canguro', en: 'kangaroo', lv: 'A2', pic: '🦘' }
    ],
    say: [
      { es: 'Es un animal con la nariz muy larga.', en: 'It is an animal with a very long nose.', p: 'elefante' },
      { es: 'Es el animal con el cuello más largo.', en: 'It is the animal with the longest neck.', p: 'jirafa' },
      { es: 'Es un animal blanco y negro que come bambú.', en: 'It is a black and white animal that eats bamboo.', p: 'panda' },
      { es: 'Es un animal parecido a un caballo, con rayas blancas y negras.', en: 'It is an animal like a horse, with black and white stripes.', p: 'cebra' },
      { es: 'Lo llaman el rey de la selva.', en: 'They call it the king of the jungle.', p: 'leon' },
      { es: 'Se cuelga de las ramas con la cola.', en: 'It hangs from branches by its tail.', p: 'mono' },
      { es: 'Es un animal grande y peludo que duerme en una cueva en el invierno.', en: 'It is a big furry animal that sleeps in a den in the winter.', p: 'oso' },
      { es: 'Les tengo mucho miedo a las serpientes.', en: 'I am very afraid of snakes.', p: 'serpiente' },
      { es: 'Se desplaza dando grandes saltos con las patas traseras.', en: 'It moves along in big jumps on its back legs.', p: 'canguro' }
    ] },
  { id: 'birds-insects-sea', group: 'animals', title: 'Birds, insects and sea life', lv: 'A2', kind: 'cards',
    intro: 'Birds, insects and sea animals, including a few that bite, sting or frighten people.',
    parts: [
      { id: 'pajaro', w: 'el pájaro', en: 'bird', lv: 'A1', r: 'el ave', pic: '🐦' },
      { id: 'pinguino', w: 'el pingüino', en: 'penguin', lv: 'A2', pic: '🐧' },
      { id: 'buho', w: 'el búho', en: 'owl', lv: 'B1', r: 'el tecolote (Mexico); la lechuza', pic: '🦉' },
      { id: 'mariposa', w: 'la mariposa', en: 'butterfly', lv: 'A2', pic: '🦋' },
      { id: 'abeja', w: 'la abeja', en: 'bee', lv: 'A2', pic: '🐝' },
      { id: 'hormiga', w: 'la hormiga', en: 'ant', lv: 'A2', pic: '🐜' },
      { id: 'mosquito', w: 'el mosquito', en: 'mosquito', lv: 'A2', r: 'el zancudo; el mosco', pic: '🦟' },
      { id: 'arana', w: 'la araña', en: 'spider', lv: 'A2', pic: '🕷️' },
      { id: 'pez', w: 'el pez', en: 'fish (live)', lv: 'A1', r: 'el pescado = fish as food', pic: '🐟' },
      { id: 'delfin', w: 'el delfín', en: 'dolphin', lv: 'A2', pic: '🐬' },
      { id: 'ballena', w: 'la ballena', en: 'whale', lv: 'A2', pic: '🐋' },
      { id: 'tiburon', w: 'el tiburón', en: 'shark', lv: 'A2', pic: '🦈' },
      { id: 'pulpo', w: 'el pulpo', en: 'octopus', lv: 'B1', pic: '🐙' },
      { id: 'cangrejo', w: 'el cangrejo', en: 'crab', lv: 'A2', r: 'la jaiba (Mexico)', pic: '🦀' },
      { id: 'camaron', w: 'el camarón', en: 'shrimp, prawn', lv: 'A2', r: 'la gamba (Spain)', pic: '🦐' }
    ],
    say: [
      { es: 'Es un ave que no vuela y vive en lugares fríos.', en: 'It is a bird that cannot fly and lives in cold places.', p: 'pinguino' },
      { es: 'Es un ave que duerme de día y está despierta de noche.', en: 'It is a bird that sleeps by day and is awake at night.', p: 'buho' },
      { es: 'Me picó una abeja y se me hinchó el brazo.', en: 'A bee stung me and my arm swelled up.', p: 'abeja' },
      { es: 'Es un insecto pequeño y negro que se junta alrededor de lo dulce.', en: 'It is a small black insect that gathers around sweet things.', p: 'hormiga' },
      { es: 'Una noche de verano me picó este insecto y me dio mucha comezón.', en: 'One summer night this insect bit me and it itched a lot.', p: 'mosquito' },
      { es: 'Hace una telaraña con su hilo.', en: 'It makes a web with its thread.', p: 'arana' },
      { es: 'Vive en el agua y respira por las branquias.', en: 'It lives in the water and breathes through gills.', p: 'pez' },
      { es: 'Es el animal más grande del mar.', en: 'It is the biggest animal in the sea.', p: 'ballena' },
      { es: 'Es un animal marino con ocho brazos.', en: 'It is a sea animal with eight arms.', p: 'pulpo' },
      { es: 'Es un animal marino que camina de lado.', en: 'It is a sea animal that walks sideways.', p: 'cangrejo' }
    ] },
  { id: 'animal-parts', group: 'animals', title: 'Parts of animals', lv: 'A2', kind: 'diagram', art: 'animal-parts',
    intro: 'The body parts of a dog and a bird; many are the words used for people, and some are different.',
    parts: [
      { id: 'cabeza', w: 'la cabeza', en: 'head', lv: 'A1', x: 205, y: 93 },
      { id: 'oreja', w: 'la oreja', en: 'ear', lv: 'A1', x: 176, y: 131 },
      { id: 'ojo', w: 'el ojo', en: 'eye', lv: 'A1', x: 229, y: 111 },
      { id: 'nariz', w: 'la nariz', en: 'nose', lv: 'A1', r: 'el hocico = snout', x: 273, y: 114 },
      { id: 'boca', w: 'la boca', en: 'mouth', lv: 'A1', x: 243, y: 151 },
      { id: 'cuello', w: 'el cuello', en: 'neck', lv: 'A2', x: 187, y: 167 },
      { id: 'lomo', w: 'el lomo', en: 'back (of an animal)', lv: 'B1', r: 'la espalda = back (people)', x: 115, y: 142 },
      { id: 'pelo', w: 'el pelo', en: 'fur, hair', lv: 'A2', r: 'el pelaje', x: 97, y: 185 },
      { id: 'cola', w: 'la cola', en: 'tail', lv: 'A2', r: 'el rabo', x: 20, y: 116 },
      { id: 'pata', w: 'la pata', en: 'leg, paw', lv: 'A2', x: 164, y: 246 },
      { id: 'pico', w: 'el pico', en: 'beak', lv: 'A2', x: 391, y: 83 },
      { id: 'ala', w: 'el ala', en: 'wing', lv: 'A2', x: 331, y: 165 },
      { id: 'garra', w: 'la garra', en: 'claw, talon', lv: 'B1', r: 'la uña', x: 320, y: 262 }
    ],
    say: [
      { es: 'Cuando el perro está contento, mueve esto.', en: 'When a dog is happy, it wags this.', p: 'cola' },
      { es: 'El perro distingue bien los olores con esto.', en: 'A dog can tell smells well with this.', p: 'nariz' },
      { es: 'Este perro tiene las orejas largas y caídas.', en: 'This dog has long ears that hang down.', p: 'oreja' },
      { es: 'Con esto el perro ve a su dueño.', en: 'A dog sees its owner with this.', p: 'ojo' },
      { es: 'Es la parte del perro donde están los ojos y la boca.', en: 'It is the part of the dog where its eyes and mouth are.', p: 'cabeza' },
      { es: 'Al perro hay que cepillarle esto para que no se le enrede.', en: 'You brush this on a dog so it does not get tangled.', p: 'pelo' },
      { es: 'El perro corre con cuatro de estas.', en: 'A dog runs on four of these.', p: 'pata' },
      { es: 'Un ave come insectos y semillas con esto.', en: 'A bird eats insects and seeds with this.', p: 'pico' },
      { es: 'Un ave mueve esto para volar por el cielo.', en: 'A bird moves this to fly through the sky.', p: 'ala' },
      { es: 'Es la parte afilada al final de la pata de un ave.', en: 'It is the sharp part at the end of a bird foot.', p: 'garra' }
    ] }
]);
