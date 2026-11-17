/* Picture words, group 'body' (0.8.0): tap-to-learn pictures for #/pictures (js/pictures.js).
   DRAFT FOR REVIEW by a native Spanish-speaking clinician before use. Spanish is plain text (US/Mexican baseline).
   Shape: window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([ { id, group, title, lv: 'A1'|'A2',
     kind: 'diagram'|'cards', art (diagram only: a key of window.PICTURE_ART, pictures/art-body.js), intro: one English sentence,
     parts: [ { id: short Spanish slug without accents, w: the word WITH its definite article ('la cabeza'; verbs and adjectives
                without), en, lv: 'A1'|'A2'|'B1', diagram: x, y = the point ON the thing in the art's viewBox units;
                cards: pic = ONE emoji; r?: a common regional or everyday alternative in a few words } ],
     say: [ { es: a sentence whose answer is exactly ONE part, en, p: part id } ] } ]);   6 to 10 sentences per set
   Set ids, art keys, the order of the parts and their x, y match the Hanashimasho 0.24.0 body sets exactly, so the pins
   sit on the same places in the shared art. At most a quarter of a set's words B1. group = 'body' for every set here.
   Body words are what a patient uses to say where it hurts.
   Set ids and part ids are permanent: append only after release (never insert, reorder or delete). */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id: 'body-front', group: 'body', title: 'The body (front)', lv: 'A1', kind: 'diagram', art: 'body-front',
    intro: 'The main parts of the body seen from the front: the words a patient uses to say where it hurts.',
    parts: [
      { id: 'cabeza', w: 'la cabeza', en: 'head', lv: 'A1', x: 150, y: 22 },
      { id: 'cara', w: 'la cara', en: 'face', lv: 'A1', x: 150, y: 58 },
      { id: 'cuello', w: 'el cuello', en: 'neck', lv: 'A1', x: 150, y: 85 },
      { id: 'hombro', w: 'el hombro', en: 'shoulder', lv: 'A1', x: 106, y: 104 },
      { id: 'pecho', w: 'el pecho', en: 'chest', lv: 'A1', x: 150, y: 130 },
      { id: 'estomago', w: 'el estómago', en: 'stomach, belly', lv: 'A1', x: 150, y: 180, r: 'also: la panza, la barriga' },
      { id: 'ombligo', w: 'el ombligo', en: 'navel, belly button', lv: 'B1', x: 150, y: 214 },
      { id: 'brazo', w: 'el brazo', en: 'arm', lv: 'A1', x: 91, y: 160 },
      { id: 'mano', w: 'la mano', en: 'hand', lv: 'A1', x: 221, y: 254 },
      { id: 'muslo', w: 'el muslo', en: 'thigh', lv: 'B1', x: 172, y: 282 },
      { id: 'rodilla', w: 'la rodilla', en: 'knee', lv: 'A2', x: 127, y: 322 },
      { id: 'pie', w: 'el pie', en: 'foot', lv: 'A1', x: 174, y: 398 },
      { id: 'codo', w: 'el codo', en: 'elbow', lv: 'A2', x: 208, y: 184 },
      { id: 'muneca', w: 'la muñeca', en: 'wrist', lv: 'A2', x: 82, y: 230 },
      { id: 'tobillo', w: 'el tobillo', en: 'ankle', lv: 'A2', x: 129, y: 386 }
    ],
    say: [
      { es: 'Me duele la cabeza desde esta mañana.', en: 'I have had a headache since this morning.', p: 'cabeza' },
      { es: 'Todas las mañanas me lavo la cara con agua fría.', en: 'Every morning I wash my face with cold water.', p: 'cara' },
      { es: 'En invierno me pongo una bufanda en el cuello.', en: 'In winter I wear a scarf around my neck.', p: 'cuello' },
      { es: 'Cargué una bolsa pesada y ahora me duele el hombro.', en: 'I carried a heavy bag and now my shoulder hurts.', p: 'hombro' },
      { es: 'Siento una presión en el pecho cuando estoy nervioso.', en: 'I feel pressure in my chest when I am nervous.', p: 'pecho' },
      { es: 'Me duele el estómago desde anoche.', en: 'My stomach has hurt since last night.', p: 'estomago' },
      { es: 'La enfermera le va a poner la inyección en el brazo.', en: 'The nurse is going to give you the injection in your arm.', p: 'brazo' },
      { es: 'Lávese las manos antes de comer, por favor.', en: 'Please wash your hands before you eat.', p: 'mano' },
      { es: 'Me duele la rodilla cuando subo las escaleras.', en: 'My knee hurts when I go up the stairs.', p: 'rodilla' },
      { es: 'Caminé mucho y tengo los pies cansados.', en: 'I walked a lot and my feet are tired.', p: 'pie' }
    ] },
  { id: 'body-back', group: 'body', title: 'The body (back)', lv: 'A1', kind: 'diagram', art: 'body-back',
    intro: 'The same body seen from behind: the back, the lower back and the backs of the legs.',
    parts: [
      { id: 'cabeza', w: 'la cabeza', en: 'head', lv: 'A1', x: 150, y: 36 },
      { id: 'cuello', w: 'el cuello', en: 'neck', lv: 'A1', x: 150, y: 82 },
      { id: 'hombro', w: 'el hombro', en: 'shoulder', lv: 'A1', x: 194, y: 104 },
      { id: 'espalda', w: 'la espalda', en: 'back', lv: 'A1', x: 150, y: 132 },
      { id: 'cintura', w: 'la cintura', en: 'lower back, waist', lv: 'A2', x: 150, y: 206, r: 'also: la espalda baja; some say los riñones' },
      { id: 'nalgas', w: 'las nalgas', en: 'buttocks, bottom', lv: 'A2', x: 130, y: 246, r: 'also: el trasero' },
      { id: 'brazo', w: 'el brazo', en: 'arm', lv: 'A1', x: 101, y: 134 },
      { id: 'mano', w: 'la mano', en: 'hand', lv: 'A1', x: 221, y: 254 },
      { id: 'pierna', w: 'la pierna', en: 'leg', lv: 'A1', x: 172, y: 292 },
      { id: 'pantorrilla', w: 'la pantorrilla', en: 'calf', lv: 'B1', x: 127, y: 352, r: 'Mexico, informal: el chamorro' },
      { id: 'talon', w: 'el talón', en: 'heel', lv: 'A2', x: 172, y: 402 },
      { id: 'codo', w: 'el codo', en: 'elbow', lv: 'A2', x: 211, y: 172 },
      { id: 'muneca', w: 'la muñeca', en: 'wrist', lv: 'A2', x: 82, y: 230 },
      { id: 'tobillo', w: 'el tobillo', en: 'ankle', lv: 'A2', x: 129, y: 386 }
    ],
    say: [
      { es: 'Me pongo una gorra en la cabeza.', en: 'I put a cap on my head.', p: 'cabeza' },
      { es: 'Hoy me desperté y no podía mover el cuello.', en: 'I woke up today and could not move my neck.', p: 'cuello' },
      { es: 'Tengo el hombro derecho muy adolorido.', en: 'My right shoulder is very sore.', p: 'hombro' },
      { es: 'Me pica la espalda.', en: 'My back itches.', p: 'espalda' },
      { es: 'Levanté una caja pesada y me empezó a doler la cintura.', en: 'I lifted a heavy box and my lower back started to hurt.', p: 'cintura' },
      { es: 'Estuve sentado muchas horas y me duelen las nalgas.', en: 'I sat for many hours and my bottom hurts.', p: 'nalgas' },
      { es: 'Abro la puerta con la mano izquierda.', en: 'I open the door with my left hand.', p: 'mano' },
      { es: 'Siento las piernas pesadas y me cuesta caminar.', en: 'My legs feel heavy and it is hard to walk.', p: 'pierna' },
      { es: 'Después de correr me duele la pantorrilla.', en: 'My calf hurts after running.', p: 'pantorrilla' },
      { es: 'Con los zapatos nuevos me duele el talón.', en: 'My heel hurts in my new shoes.', p: 'talon' }
    ] },
  { id: 'face', group: 'body', title: 'The face and head', lv: 'A1', kind: 'diagram', art: 'face',
    intro: 'The parts of the face and head, with the mouth open as at a check-up.',
    parts: [
      { id: 'pelo', w: 'el pelo', en: 'hair', lv: 'A1', x: 160, y: 72, r: 'also: el cabello' },
      { id: 'frente', w: 'la frente', en: 'forehead', lv: 'A2', x: 160, y: 114 },
      { id: 'ojo', w: 'el ojo', en: 'eye', lv: 'A1', x: 198, y: 159 },
      { id: 'oreja', w: 'la oreja', en: 'ear (the outer ear)', lv: 'A1', x: 62, y: 176, r: 'inner ear and hearing: el oído' },
      { id: 'nariz', w: 'la nariz', en: 'nose', lv: 'A1', x: 160, y: 190 },
      { id: 'mejilla', w: 'la mejilla', en: 'cheek', lv: 'A2', x: 102, y: 214, r: 'Mexico, everyday: el cachete' },
      { id: 'boca', w: 'la boca', en: 'mouth', lv: 'A1', x: 196, y: 238 },
      { id: 'diente', w: 'el diente', en: 'tooth', lv: 'A1', x: 146, y: 223, r: 'back tooth: la muela' },
      { id: 'lengua', w: 'la lengua', en: 'tongue', lv: 'A1', x: 166, y: 248 },
      { id: 'barbilla', w: 'la barbilla', en: 'chin', lv: 'A2', x: 160, y: 278, r: 'also: el mentón; jaw: la mandíbula' },
      { id: 'garganta', w: 'la garganta', en: 'throat', lv: 'A1', x: 160, y: 322 },
      { id: 'hombro', w: 'el hombro', en: 'shoulder', lv: 'A1', x: 56, y: 370 }
    ],
    say: [
      { es: 'Me corté el pelo muy corto.', en: 'I had my hair cut very short.', p: 'pelo' },
      { es: 'Tengo la frente caliente. Creo que tengo fiebre.', en: 'My forehead is hot. I think I have a fever.', p: 'frente' },
      { es: 'Cierre los ojos, por favor.', en: 'Please close your eyes.', p: 'ojo' },
      { es: 'Mi hija se puso aretes en las orejas.', en: 'My daughter put earrings in her ears.', p: 'oreja' },
      { es: 'Tengo la nariz tapada por el resfriado.', en: 'My nose is blocked because of the cold.', p: 'nariz' },
      { es: 'Me dio vergüenza y se me pusieron rojas las mejillas.', en: 'I was embarrassed and my cheeks turned red.', p: 'mejilla' },
      { es: 'Abra bien la boca, por favor.', en: 'Please open your mouth wide.', p: 'boca' },
      { es: 'Me lavo los dientes todas las noches antes de dormir.', en: 'I brush my teeth every night before bed.', p: 'diente' },
      { es: 'Saque la lengua, por favor.', en: 'Please stick out your tongue.', p: 'lengua' },
      { es: 'Me duele la garganta cuando trago.', en: 'My throat hurts when I swallow.', p: 'garganta' }
    ] },
  { id: 'hand-arm', group: 'body', title: 'The arm and hand', lv: 'A2', kind: 'diagram', art: 'hand-arm',
    intro: 'The arm from the shoulder to the fingertips, with the name of each finger.',
    parts: [
      { id: 'hombro', w: 'el hombro', en: 'shoulder', lv: 'A1', x: 36, y: 262 },
      { id: 'brazo', w: 'el brazo', en: 'arm', lv: 'A1', x: 92, y: 270 },
      { id: 'codo', w: 'el codo', en: 'elbow', lv: 'A2', x: 128, y: 292 },
      { id: 'muneca', w: 'la muñeca', en: 'wrist', lv: 'A2', x: 262, y: 212 },
      { id: 'mano', w: 'la mano', en: 'hand', lv: 'A1', x: 262, y: 168 },
      { id: 'pulgar', w: 'el pulgar', en: 'thumb', lv: 'A2', x: 180, y: 140, r: 'also: el dedo gordo' },
      { id: 'indice', w: 'el índice', en: 'index finger', lv: 'B1', x: 217, y: 84, r: 'also: el dedo índice' },
      { id: 'dedo-medio', w: 'el dedo medio', en: 'middle finger', lv: 'A2', x: 248, y: 70, r: 'Spain: el dedo corazón' },
      { id: 'anular', w: 'el anular', en: 'ring finger', lv: 'B1', x: 280, y: 82 },
      { id: 'menique', w: 'el meñique', en: 'little finger', lv: 'A2', x: 310, y: 108 },
      { id: 'una', w: 'la uña', en: 'nail', lv: 'A2', x: 248, y: 36 }
    ],
    say: [
      { es: 'Cargué maletas pesadas y tengo los brazos cansados.', en: 'I carried heavy suitcases and my arms are tired.', p: 'brazo' },
      { es: 'Me pegué el codo con la esquina de la mesa.', en: 'I hit my elbow on the corner of the table.', p: 'codo' },
      { es: 'Me torcí la muñeca cuando me caí.', en: 'I twisted my wrist when I fell.', p: 'muneca' },
      { es: 'Me lavo las manos con jabón antes de comer.', en: 'I wash my hands with soap before I eat.', p: 'mano' },
      { es: 'Es el dedo más grueso y más corto.', en: 'It is the thickest and shortest finger.', p: 'pulgar' },
      { es: 'Es el dedo que usamos para señalar.', en: 'It is the finger we use to point.', p: 'indice' },
      { es: 'Es el dedo más largo.', en: 'It is the longest finger.', p: 'dedo-medio' },
      { es: 'Es el dedo donde se pone el anillo de boda.', en: 'It is the finger where the wedding ring goes.', p: 'anular' },
      { es: 'Es el dedo más pequeño.', en: 'It is the smallest finger.', p: 'menique' },
      { es: 'Tenía las uñas muy largas y me las corté.', en: 'My nails were very long, so I cut them.', p: 'una' }
    ] },
  { id: 'leg-foot', group: 'body', title: 'The leg and foot', lv: 'A2', kind: 'diagram', art: 'leg-foot',
    intro: 'The leg from the side and the foot from above, down to the toes.',
    parts: [
      { id: 'cadera', w: 'la cadera', en: 'hip', lv: 'A2', x: 70, y: 44 },
      { id: 'nalgas', w: 'las nalgas', en: 'buttocks, bottom', lv: 'A2', x: 64, y: 108, r: 'also: el trasero' },
      { id: 'rodilla', w: 'la rodilla', en: 'knee', lv: 'A2', x: 124, y: 244 },
      { id: 'pantorrilla', w: 'la pantorrilla', en: 'calf', lv: 'B1', x: 86, y: 318, r: 'Mexico, informal: el chamorro' },
      { id: 'tobillo', w: 'el tobillo', en: 'ankle', lv: 'A2', x: 104, y: 372 },
      { id: 'talon', w: 'el talón', en: 'heel', lv: 'A2', x: 94, y: 402 },
      { id: 'pie', w: 'el pie', en: 'foot', lv: 'A1', x: 296, y: 300 },
      { id: 'dedo-gordo', w: 'el dedo gordo', en: 'big toe', lv: 'A2', x: 261, y: 186 },
      { id: 'dedo-pie', w: 'el dedo del pie', en: 'toe', lv: 'A2', x: 313, y: 206 },
      { id: 'menique-pie', w: 'el meñique del pie', en: 'little toe', lv: 'B1', x: 351, y: 230, r: 'also: el dedo chiquito' }
    ],
    say: [
      { es: 'Me duele la cadera cuando me acuesto de lado.', en: 'My hip hurts when I lie on my side.', p: 'cadera' },
      { es: 'Pasé mucho tiempo sentada y me empezaron a doler las nalgas.', en: 'I sat for a long time and my bottom started to hurt.', p: 'nalgas' },
      { es: 'Me duele la rodilla cuando la doblo.', en: 'My knee hurts when I bend it.', p: 'rodilla' },
      { es: 'Anoche me dio un calambre en la pantorrilla.', en: 'Last night I got a cramp in my calf.', p: 'pantorrilla' },
      { es: 'Me torcí el tobillo en las escaleras.', en: 'I twisted my ankle on the stairs.', p: 'tobillo' },
      { es: 'Párese con los talones en el piso, por favor.', en: 'Please stand with your heels on the floor.', p: 'talon' },
      { es: 'Se me hinchan los pies al final del día.', en: 'My feet swell at the end of the day.', p: 'pie' },
      { es: 'Es el dedo más grande del pie.', en: 'It is the biggest toe.', p: 'dedo-gordo' },
      { es: 'Es uno de los dedos que están entre el dedo gordo y el meñique.', en: 'It is one of the toes between the big toe and the little toe.', p: 'dedo-pie' },
      { es: 'Me pegué el meñique del pie con la pata de la cama.', en: 'I stubbed my little toe on the leg of the bed.', p: 'menique-pie' }
    ] },
  { id: 'inside', group: 'body', title: 'Inside the body', lv: 'A2', kind: 'diagram', art: 'inside',
    intro: 'A simple picture of the main organs and bones: the words a doctor uses when explaining with a diagram.',
    parts: [
      { id: 'cerebro', w: 'el cerebro', en: 'brain', lv: 'A2', x: 160, y: 44 },
      { id: 'boca', w: 'la boca', en: 'mouth', lv: 'A1', x: 160, y: 80 },
      { id: 'garganta', w: 'la garganta', en: 'throat', lv: 'A1', x: 160, y: 110 },
      { id: 'pulmones', w: 'los pulmones', en: 'lungs', lv: 'A2', x: 124, y: 196 },
      { id: 'corazon', w: 'el corazón', en: 'heart', lv: 'A1', x: 168, y: 202 },
      { id: 'higado', w: 'el hígado', en: 'liver', lv: 'A2', x: 132, y: 274 },
      { id: 'estomago', w: 'el estómago', en: 'stomach (the organ)', lv: 'A1', x: 200, y: 276 },
      { id: 'intestinos', w: 'los intestinos', en: 'intestines, bowels', lv: 'B1', x: 160, y: 340, r: 'informal: las tripas' },
      { id: 'hueso', w: 'el hueso', en: 'bone', lv: 'A2', x: 68, y: 318 },
      { id: 'columna', w: 'la columna', en: 'spine, backbone', lv: 'B1', x: 160, y: 409, r: 'also: la columna vertebral' }
    ],
    say: [
      { es: 'Está dentro de la cabeza y nos sirve para pensar y recordar.', en: 'It is inside the head; we use it to think and remember.', p: 'cerebro' },
      { es: 'Abra la boca y diga "aaa", por favor.', en: 'Please open your mouth and say "aah".', p: 'boca' },
      { es: 'Me arde la garganta cuando trago.', en: 'My throat burns when I swallow.', p: 'garganta' },
      { es: 'Tenemos dos en el pecho y nos sirven para respirar.', en: 'We have two of them in the chest; we use them to breathe.', p: 'pulmones' },
      { es: 'El corazón manda la sangre a todo el cuerpo.', en: 'The heart pumps blood to the whole body.', p: 'corazon' },
      { es: 'Tomar mucho alcohol le hace daño al hígado.', en: 'Drinking a lot of alcohol damages the liver.', p: 'higado' },
      { es: 'Cuando estoy estresada me duele el estómago.', en: 'When I am stressed my stomach hurts.', p: 'estomago' },
      { es: 'Después del estómago, la comida pasa por aquí.', en: 'After the stomach, food passes through here.', p: 'intestinos' },
      { es: 'Es posible que tenga un hueso roto en el brazo.', en: 'You may have a broken bone in your arm.', p: 'hueso' },
      { es: 'Va por el centro de la espalda, desde el cuello hasta la cintura.', en: 'It runs down the middle of the back, from the neck to the waist.', p: 'columna' }
    ] }
]);
