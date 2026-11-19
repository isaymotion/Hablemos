/* Lesson extras part 7 (0.11.0): common mistakes, more examples and a "More practice" quiz for the 10 picture lessons of lessons-6.js
   (position-words to review-pictures-a2, in lesson order; the lesson page shows them after the body and runs the quiz after the lesson's own).
   DRAFT FOR REVIEW by a native Spanish-speaking clinician before use. Spanish is plain text (US/Mexican baseline, usted with adults).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongEs, rightEs, whyEn], ...3],  // wrongEs is shown struck through, never spoken or recorded
     more: [[es, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'position-words': {
    mistakes: [
      [`¿Dónde hay el baño?`, `¿Dónde está el baño?`, `To ask where a known thing is, use estar. Hay introduces something new and does not go with el.`],
      [`El botón está al derecha de la cama.`, `El botón está a la derecha de la cama.`, `Derecha is feminine, so the phrase is a la derecha.`],
      [`Mis lentes están en cima de la mesa.`, `Mis lentes están encima de la mesa.`, `Encima is one word.`]
    ],
    more: [
      [`El timbre de la enfermera está encima de la cama.`, `The nurse call button is above the bed.`],
      [`Los lentes están al lado del vaso de agua.`, `The glasses are next to the glass of water.`],
      [`El baño está detrás de esa puerta, a la izquierda.`, `The bathroom is behind that door, on the left.`],
      [`Las llaves están dentro del cajón.`, `The keys are inside the drawer.`],
      [`El teléfono está debajo del periódico.`, `The phone is under the newspaper.`],
      [`Mi carro está cerca de la farmacia.`, `My car is near the pharmacy.`]
    ],
    quiz: [
      [`El gato ___ encima de la silla.`, [`es`, `está`, `hay`], 1, `Where something is takes estar.`],
      [`"Behind the door" is`, [`detrás de la puerta`, `delante de la puerta`, `dentro la puerta`], 0, `Detrás de means behind, and it needs de.`],
      [`How do you say "The keys are inside the drawer"?`, [`Las llaves están afuera del cajón.`, `Las llaves están debajo del cajón.`, `Las llaves están dentro del cajón.`], 2, `Dentro de means inside.`],
      [`How do you ask "Is there a pharmacy near here?"`, [`¿Hay una farmacia cerca de aquí?`, `¿Está una farmacia cerca de aquí?`, `¿Es una farmacia cerca de aquí?`], 0, `A new, unknown thing takes hay.`],
      [`Which means "to the left of"?`, [`a la derecha de`, `a la izquierda de`, `al lado`], 1, `Izquierda is left.`],
      [`La mesa está ___ el sofá y la silla.`, [`encima`, `dentro`, `entre`], 2, `Entre means between.`]
    ]
  },
  'body-donde-duele': {
    mistakes: [
      [`Me pica los ojos.`, `Me pican los ojos.`, `Picar agrees with the thing that itches, and ojos is plural.`],
      [`Me duele de la cabeza.`, `Me duele la cabeza.`, `Do not add de: the body part is the subject of the verb.`],
      [`Me duele el cabeza.`, `Me duele la cabeza.`, `Cabeza is feminine, so it takes la.`]
    ],
    more: [
      [`¿Le duele la garganta al tragar?`, `Does your throat hurt when you swallow?`],
      [`¿Le duelen los oídos?`, `Do your ears hurt?`],
      [`Me duele la espalda cuando me levanto.`, `My back hurts when I get up.`],
      [`Me duelen los pies de caminar tanto.`, `My feet hurt from walking so much.`],
      [`Me pican los ojos por el polvo.`, `My eyes itch from the dust.`],
      [`Me duele el cuello de dormir mal.`, `My neck hurts from sleeping badly.`]
    ],
    quiz: [
      [`Me ___ los oídos.`, [`duele`, `duelen`, `duelo`], 1, `Oídos is plural, so the verb is duelen.`],
      [`Me ___ la espalda.`, [`duele`, `duelen`, `dolor`], 0, `Espalda is singular, so the verb is duele.`],
      [`Which says "My eyes itch"?`, [`Me arde el ojo.`, `Me duelen los ojos.`, `Me pican los ojos.`], 2, `Picar means to itch.`],
      [`How do you ask "Does your throat hurt?" (usted)`, [`¿Le duelen la garganta?`, `¿Le duele la garganta?`, `¿Le dolor la garganta?`], 1, `Garganta is singular, so duele.`],
      [`"Del lado izquierdo" means`, [`on the left side`, `on the right side`, `in the front`], 0, `Izquierdo is left.`],
      [`Siento las piernas ___.`, [`pesado`, `pesados`, `pesadas`], 2, `The adjective agrees with piernas: feminine plural.`]
    ]
  },
  'describing-with-tener': {
    mistakes: [
      [`Mi hija tiene los ojos verde.`, `Mi hija tiene los ojos verdes.`, `Ojos is plural, so the adjective is verdes.`],
      [`El perro tiene cuatro pata.`, `El perro tiene cuatro patas.`, `After a number the noun is plural: patas.`],
      [`La gata tiene los orejas pequeñas.`, `La gata tiene las orejas pequeñas.`, `Orejas is feminine, so the article is las.`]
    ],
    more: [
      [`Mi esposo tiene los pies hinchados.`, `My husband has swollen feet.`],
      [`La niña tiene la garganta roja.`, `The girl has a red throat.`],
      [`Mi mamá tiene las manos hinchadas.`, `My mother has swollen hands.`],
      [`El elefante tiene las orejas enormes.`, `The elephant has enormous ears.`],
      [`Mi abuelo tiene el pelo blanco.`, `My grandfather has white hair.`],
      [`Mi hermana tiene los ojos cafés.`, `My sister has brown eyes.`]
    ],
    quiz: [
      [`La vaca tiene los ojos ___.`, [`grande`, `grandes`, `grandas`], 1, `Ojos is plural, so the adjective is grandes.`],
      [`Mi abuelo ___ el pelo blanco.`, [`tiene`, `es`, `está`], 0, `A body part is something you have.`],
      [`La jirafa tiene el cuello ___.`, [`largas`, `largos`, `largo`], 2, `Cuello is masculine and singular: largo.`],
      [`Which sentence says "She has small ears"?`, [`Tiene las orejas pequeñas.`, `Tiene los orejas pequeñas.`, `Es las orejas pequeñas.`], 0, `Orejas is feminine plural, and the verb is tener.`],
      [`Which says "She has swollen hands"?`, [`Está las manos hinchadas.`, `Tiene las manos hinchadas.`, `Es manos hinchadas.`], 1, `Tener + article + part + adjective.`],
      [`El elefante ___ grande.`, [`tiene`, `tienen`, `es`], 2, `A bare adjective for the whole animal goes with ser.`]
    ]
  },
  'clothes-colors': {
    mistakes: [
      [`Lleva un camisa blanca.`, `Lleva una camisa blanca.`, `Camisa is feminine, so the article is una.`],
      [`Trae puesta unos pantalones azules.`, `Trae puestos unos pantalones azules.`, `Puestos agrees with pantalones, which is masculine and plural.`],
      [`Quítese de zapatos, por favor.`, `Quítese los zapatos, por favor.`, `Quitarse takes the thing directly, with the article and no de.`]
    ],
    more: [
      [`Llegó con una bata de hospital y un suéter.`, `She arrived in a hospital gown and a sweater.`],
      [`Llegó sin abrigo, aunque hacía mucho frío.`, `He arrived without a coat, although it was very cold.`],
      [`Su hija trae puesta una blusa amarilla y jeans.`, `Your daughter is wearing a yellow blouse and jeans.`],
      [`Me gusta tu vestido rojo.`, `I like your red dress.`],
      [`Mi papá lleva gorra y lentes oscuros.`, `My dad is wearing a cap and dark glasses.`],
      [`Se puso los zapatos y salió.`, `He put on his shoes and left.`]
    ],
    quiz: [
      [`una blusa ___`, [`amarillo`, `amarilla`, `amarillas`], 1, `Blusa is feminine and singular.`],
      [`unos zapatos ___`, [`negros`, `negro`, `negra`], 0, `Zapatos is masculine and plural.`],
      [`Which says "She put on her coat"?`, [`Se quitó el abrigo.`, `Lleva el abrigo.`, `Se puso el abrigo.`], 2, `Ponerse is the action of putting on.`],
      [`"Quítese la chamarra" is said to`, [`an adult patient (usted)`, `a friend`, `a baby`], 0, `Quítese is the usted command.`],
      [`Which phrase says "a red shirt"?`, [`un camisa roja`, `una camisa rojo`, `una camisa roja`], 2, `Una and roja both agree with camisa.`],
      [`"Gray pants" is unos pantalones ___.`, [`gris`, `grises`, `grisas`], 1, `Colors ending in a consonant add -es in the plural.`]
    ]
  },
  'directions-map': {
    mistakes: [
      [`Siga derecha dos cuadras.`, `Siga derecho dos cuadras.`, `To go straight on, use derecho; derecha is the right side.`],
      [`Suba a segundo piso.`, `Suba al segundo piso.`, `The floor needs the article: al segundo piso.`],
      [`Baje en las escaleras.`, `Baje por las escaleras.`, `Use por for the path you take: baje por las escaleras.`]
    ],
    more: [
      [`La sala de espera está a la derecha de la recepción.`, `The waiting room is to the right of the reception desk.`],
      [`Para el laboratorio, baje al primer piso.`, `For the lab, go down to the first floor.`],
      [`Siga las flechas azules hasta urgencias.`, `Follow the blue arrows to the emergency room.`],
      [`El mercado queda a tres cuadras de aquí.`, `The market is three blocks from here.`],
      [`Doble en la segunda calle a la izquierda.`, `Turn left at the second street.`],
      [`Cruce el puente y siga derecho.`, `Cross the bridge and go straight.`]
    ],
    quiz: [
      [`"Go straight on" is`, [`Doble derecha`, `Siga derecho`, `Suba derecho`], 1, `Siga derecho is the standard phrase.`],
      [`How do you say "Turn right" (usted)?`, [`Doble a la derecha.`, `Dobla a la derecha.`, `Doble a derecho.`], 0, `Usted command plus a la derecha.`],
      [`How do you say "Go down the stairs"?`, [`Baje en la escalera.`, `Baje las escaleras a.`, `Baje por las escaleras.`], 2, `Bajar por takes the path.`],
      [`How do you say "at the end of the hall"?`, [`al fondo del pasillo`, `en la fondo`, `del fondo en`], 0, `Al fondo de is the usual phrase.`],
      [`El laboratorio queda ___ la izquierda.`, [`en`, `a`, `de`], 1, `A la izquierda is the fixed phrase.`],
      [`In Mexico the second floor is one flight above`, [`el sótano`, `la azotea`, `la planta baja`], 2, `The ground floor is la planta baja.`]
    ]
  },
  'review-pictures-a1': {
    mistakes: [
      [`La silla está debajo la mesa.`, `La silla está debajo de la mesa.`, `Debajo needs de before the place.`],
      [`Me duele la rodillas.`, `Me duelen las rodillas.`, `Rodillas is plural, so the article is las and the verb is duelen.`],
      [`Lleva un abrigo negra.`, `Lleva un abrigo negro.`, `Abrigo is masculine, so the color is negro.`]
    ],
    more: [
      [`¿Le duelen las rodillas al subir escaleras?`, `Do your knees hurt when you climb stairs?`],
      [`Su receta está debajo del teléfono.`, `Your prescription is under the phone.`],
      [`Su hija tiene la cara pálida.`, `Your daughter has a pale face.`],
      [`Mi mamá lleva un suéter amarillo.`, `My mom is wearing a yellow sweater.`],
      [`Siga derecho hasta el semáforo.`, `Go straight on to the traffic light.`],
      [`El gato está dentro de la caja.`, `The cat is inside the box.`]
    ],
    quiz: [
      [`El libro está ___ de la mesa. (under)`, [`debajo`, `dentro`, `detrás`], 0, `Debajo de means under.`],
      [`Me ___ los ojos. (they itch)`, [`pica`, `pican`, `picar`], 1, `Ojos is plural.`],
      [`Mi mamá ___ el pelo gris.`, [`es`, `está`, `tiene`], 2, `Hair is something you have.`],
      [`Lleva una falda ___.`, [`negra`, `negro`, `negros`], 0, `Falda is feminine and singular.`],
      [`Which says "Turn right" with the right phrase for the side?`, [`Doble a derecha.`, `Doble a la derecha.`, `Dobla la derecha.`], 1, `Usted command plus a la derecha.`],
      [`¿Dónde ___ la farmacia?`, [`hay`, `es`, `está`], 2, `Where a known place is takes estar.`]
    ]
  },
  'machine-instructions': {
    mistakes: [
      [`Si no cargue el celular, se va a apagar.`, `Si no carga el celular, se va a apagar.`, `After si, use a normal present tense, not the command form.`],
      [`Primero, abra aplicación.`, `Primero, abra la aplicación.`, `The thing you open needs its article: la aplicación.`],
      [`Oprima los dos botón a la vez.`, `Oprima los dos botones a la vez.`, `After dos the noun is plural: botones.`]
    ],
    more: [
      [`Primero, conecte el audífono al celular.`, `First, connect the earphone to the phone.`],
      [`Si la pantalla se pone negra, oprima el botón de encendido.`, `If the screen goes black, press the power button.`],
      [`Para el recordatorio de la pastilla, oprima el botón de la alarma.`, `For the pill reminder, press the alarm button.`],
      [`Si el control no funciona, cambie las pilas.`, `If the remote does not work, change the batteries.`],
      [`Por último, apague la luz de la cocina.`, `Finally, turn off the kitchen light.`],
      [`Prenda la luz y conecte el cargador.`, `Turn on the light and plug in the charger.`]
    ],
    quiz: [
      [`Which word means "then"?`, [`luego`, `antes`, `siempre`], 0, `Luego and después both mean then or next.`],
      [`"Apague la luz" means`, [`turn on the light`, `turn off the light`, `open the light`], 1, `Apagar is to turn off.`],
      [`Después de ___ la aplicación, oprima el botón.`, [`abra`, `abre`, `abrir`], 2, `After de, use the infinitive.`],
      [`Si usted no ___ el botón, no suena la alarma.`, [`oprime`, `oprima`, `oprimir`], 0, `After si, use the present: oprime.`],
      [`"Cargue el celular" means`, [`Turn off the phone`, `Charge the phone`, `Open the phone`], 1, `Cargar here means to charge.`],
      [`Which is correct to an adult patient?`, [`Conectas los audífonos.`, `Conecto los audífonos.`, `Conecte los audífonos.`], 2, `Use the usted command: conecte.`]
    ]
  },
  'states-pictures': {
    mistakes: [
      [`La puerta está abrida.`, `La puerta está abierta.`, `Abrir has an irregular participle: abierto, abierta.`],
      [`La ventana está cerrar.`, `La ventana está cerrada.`, `To describe a state, estar takes a participle that agrees, not the infinitive.`],
      [`Las luces está prendidas.`, `Las luces están prendidas.`, `Estar agrees with the subject: luces is plural, so están.`]
    ],
    more: [
      [`Los cajones están abiertos y las cosas están tiradas.`, `The drawers are open and the things are thrown around.`],
      [`El refrigerador está casi vacío.`, `The refrigerator is almost empty.`],
      [`Las pastillas están guardadas en la cocina.`, `The pills are stored in the kitchen.`],
      [`La estufa está apagada.`, `The stove is off.`],
      [`La olla está tapada.`, `The pot is covered.`],
      [`El carro está estacionado afuera.`, `The car is parked outside.`]
    ],
    quiz: [
      [`Las cortinas ___ abiertas.`, [`está`, `es`, `están`], 2, `Cortinas is plural, so the verb is están.`],
      [`El plato está ___.`, [`rompido`, `roto`, `rompo`], 1, `The participle of romper is roto.`],
      [`La estufa está ___.`, [`apagada`, `apagado`, `apagar`], 0, `The participle agrees with estufa: feminine.`],
      [`La olla está ___.`, [`tapado`, `tapadas`, `tapada`], 2, `Olla is feminine and singular.`],
      [`Which describes an action?`, [`La ventana está abierta.`, `Abrí la ventana.`, `La ventana está cerrada.`], 1, `Abrí says what someone did; the others describe a state.`],
      [`The bed is made: "La cama está ___."`, [`tendida`, `tendido`, `tender`], 0, `The participle agrees with cama.`]
    ]
  },
  'explaining-with-pictures': {
    mistakes: [
      [`Esta parte llama la columna.`, `Esta parte se llama la columna.`, `To say what something is called, use se llama.`],
      [`Los pulmones sirven para respiran.`, `Los pulmones sirven para respirar.`, `After para, use the infinitive.`],
      [`Aquí está los pulmones.`, `Aquí están los pulmones.`, `The verb agrees with what you point at: pulmones is plural.`]
    ],
    more: [
      [`Esta pastilla ayuda a dormir mejor.`, `This pill helps you sleep better.`],
      [`Este aparato escucha el latido del corazón.`, `This device listens to the heartbeat.`],
      [`La presión se mide en el brazo.`, `Blood pressure is measured on the arm.`],
      [`Esta llave sirve para la puerta de atrás.`, `This key is for the back door.`],
      [`Esta parte del carro se llama el volante.`, `This part of the car is called the steering wheel.`],
      [`Por aquí sale el agua.`, `The water comes out here.`]
    ],
    quiz: [
      [`La llave sirve ___ abrir la puerta.`, [`por`, `para`, `de`], 1, `Sirve para + infinitive says what it is for.`],
      [`Esta parte ___ el hombro.`, [`llama`, `se llamas`, `se llama`], 2, `Se llama is the phrase for "is called".`],
      [`Aquí ___ los riñones.`, [`están`, `está`, `es`], 0, `Riñones is plural, and location takes estar.`],
      [`Which says "The blood goes through here"?`, [`Por aquí es la sangre.`, `Por aquí pasa la sangre.`, `Aquí pasan por sangre.`], 1, `Por aquí pasa says what travels through.`],
      [`How do you ask "What is this called?"`, [`¿Cómo se llama esto?`, `¿Cómo llama esto?`, `¿Qué se llamar esto?`], 0, `¿Cómo se llama...? is the usual question.`],
      [`El cerebro ___ conectado con la columna.`, [`es`, `son`, `está`], 2, `A result state with a participle takes estar.`]
    ]
  },
  'review-pictures-a2': {
    mistakes: [
      [`Las ventanas están cerrar.`, `Las ventanas están cerradas.`, `After estar, use a participle that agrees: cerradas.`],
      [`El hígado sirve para limpiando la sangre.`, `El hígado sirve para limpiar la sangre.`, `After para, use the infinitive.`],
      [`Si no oprima el botón, la enfermera no sabe.`, `Si no oprime el botón, la enfermera no sabe.`, `After si, use the present tense, not the command form.`]
    ],
    more: [
      [`La caja de pastillas está vacía.`, `The pill box is empty.`],
      [`Este aparato mide la presión en el brazo.`, `This device measures blood pressure on the arm.`],
      [`Luego, espere la llamada de la enfermera.`, `Then wait for the nurse's call.`],
      [`Esta llave sirve para la puerta de atrás.`, `This key is for the back door.`],
      [`La tienda está cerrada los domingos.`, `The store is closed on Sundays.`],
      [`Por último, apague la luz.`, `Finally, turn off the light.`]
    ],
    quiz: [
      [`Después, ___ el botón verde (usted).`, [`oprime`, `oprima`, `oprimo`], 1, `Use the usted command: oprima.`],
      [`Las puertas están ___.`, [`abiertas`, `abierto`, `abrida`], 0, `Abierto is the irregular participle and agrees with puertas.`],
      [`El riñón sirve ___ filtrar la sangre.`, [`por`, `de`, `para`], 2, `Sirve para + infinitive.`],
      [`Esta parte ___ la rodilla.`, [`se llama`, `llamas`, `se llamas`], 0, `Se llama is the phrase for "is called".`],
      [`Which says "First, turn off the phone" (usted)?`, [`Primero, apagué el celular.`, `Primero, apague el celular.`, `Primero, apagando el celular.`], 1, `Use the usted command: apague.`],
      [`La puerta ___ cerrada con llave.`, [`es`, `son`, `está`], 2, `A result state takes estar.`]
    ]
  }
});
