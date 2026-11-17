/* Lessons 6 (release 0.8.0): ten picture lessons, the Spanish counterpart of the picture lessons of the sister app.
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Unit "Picture lessons: places and bodies" (A1, after review-a1): position-words, body-donde-duele, describing-with-tener, clothes-colors, directions-map, review-pictures-a1.
   Unit "Picture lessons: machines and how things are" (A2, after review-a2): machine-instructions, states-pictures, explaining-with-pictures, review-pictures-a2.
   Shape: { id, level, unit, after: '<lesson id it follows>', title, summary, draft: true, review?: true, body: HTML, quiz: [[question, [3 options], correctIndex, explanation], ...] }
   Body HTML subset: <p>, <h3>, <ul><li>, <table>, <div class="ex"><b>Spanish</b><span>English</span></div> (recorded for audio, plain text inside <b>), <div class="note">…</div>,
   <div class="pic-embed" data-pic="<picture set id>"></div> (the app mounts the tap-to-learn picture). Escape & as &amp;.
   Quizzes: 6 items per lesson, 12 per review; correct index spread evenly over 0, 1, 2.
   Ids are permanent: append only after release; never rename or reorder ids that drills reference. */
window.LESSONS = (window.LESSONS || []).concat([
  { id: 'position-words', level: 'A1', unit: `Picture lessons: places and bodies`, after: 'review-a1', title: `Position words: encima de, debajo de, dentro de, al lado de`,
    summary: `Say where things and people are with estar and a position word: encima de, debajo de, dentro de, delante de, detrás de, al lado de, entre, cerca de, lejos de.`, draft: true,
    body: `<p>"Where are my glasses?" "Your bed is next to the window." "Your son is outside, in the waiting room." On the ward and at home you will ask and answer where things are all day. Spanish does this with estar plus a position word, and most position words end in <b>de</b>.</p>
<div class="pic-embed" data-pic="positions"></div>
<p>Tap each pin in the picture to hear the word. Then see how they work in a sentence.</p>
<h3>The position words</h3>
<table><tr><th>Word</th><th>Meaning</th></tr>
<tr><td>encima de</td><td>on top of, above</td></tr>
<tr><td>debajo de</td><td>under, below</td></tr>
<tr><td>dentro de</td><td>inside</td></tr>
<tr><td>afuera de</td><td>outside</td></tr>
<tr><td>delante de</td><td>in front of</td></tr>
<tr><td>detrás de</td><td>behind</td></tr>
<tr><td>al lado de</td><td>next to, beside</td></tr>
<tr><td>a la izquierda de / a la derecha de</td><td>to the left of / to the right of</td></tr>
<tr><td>entre A y B</td><td>between A and B</td></tr>
<tr><td>cerca de / lejos de</td><td>near / far from</td></tr></table>
<p>Cerca de and lejos de are not in the picture, but you will use them every day.</p>
<h3>Pattern: thing + estar + position word + de + place</h3>
<p>Use <b>estar</b> to say where something is. The thing you measure from comes after <b>de</b>. Remember that de + el becomes <b>del</b>, but de + la stays <b>de la</b> (see <a href="#/lessons/articles-contractions">articles and contractions</a>).</p>
<div class="ex"><b>El gato está encima de la mesa.</b><span>The cat is on top of the table.</span></div>
<div class="ex"><b>El vaso está al lado del periódico.</b><span>The glass is next to the newspaper.</span></div>
<div class="ex"><b>El control está debajo del sofá.</b><span>The remote control is under the sofa.</span></div>
<div class="ex"><b>La mesa está entre el sofá y la silla.</b><span>The table is between the sofa and the chair.</span></div>
<div class="ex"><b>El cuadro está encima de la televisión.</b><span>The picture is above the television.</span></div>
<h3>On the ward</h3>
<div class="ex"><b>¿Dónde está su medicina?</b><span>Where is your medicine?</span></div>
<div class="ex"><b>Está dentro de la bolsa.</b><span>It is inside the bag.</span></div>
<div class="ex"><b>Su cama está al lado de la ventana.</b><span>Your bed is next to the window.</span></div>
<div class="ex"><b>El botón para llamar a la enfermera está a la derecha de la cama.</b><span>The button to call the nurse is to the right of the bed.</span></div>
<div class="ex"><b>La enfermera está detrás del mostrador.</b><span>The nurse is behind the counter.</span></div>
<div class="ex"><b>Su esposo está afuera, en la sala de espera.</b><span>Your husband is outside, in the waiting room.</span></div>
<div class="ex"><b>¿Las voces vienen de afuera o de dentro de su cabeza?</b><span>Do the voices come from outside or from inside your head?</span></div>
<div class="ex"><b>Siéntese al lado de su hijo.</b><span>Sit next to your son.</span></div>
<p>The living room picture gives you more things to place. Try describing where the sofa, the window and the clock are.</p>
<div class="pic-embed" data-pic="living-room"></div>
<div class="note"><b>Clinical tip.</b> Point and name the place at the same time: "Su medicina está dentro de la bolsa" with a hand on the bag. A patient who is confused or anxious follows the gesture even when the words are new. To ask about the voices, give both choices as in the example: afuera or dentro de la cabeza.</div>
<div class="note"><b>Hay or está?</b> Use <b>está</b> for a thing you both know ("El baño está detrás de la puerta"). Use <b>hay</b> for something new in a place ("Hay un baño detrás de la puerta"). See <a href="#/lessons/hay-estar">hay and estar</a>.</div>
<h3>Common mistakes</h3>
<p><s>El vaso está al lado la mesa.</s> → <b>El vaso está al lado de la mesa.</b> The position word needs de before the place.</p>
<p><s>La silla está al lado de el sofá.</s> → <b>La silla está al lado del sofá.</b> De and el always join into del.</p>
<p><s>La farmacia es cerca de la entrada.</s> → <b>La farmacia está cerca de la entrada.</b> Where something is takes estar, not ser.</p>`,
    quiz: [
      [`El gato ___ debajo de la mesa.`, [`está`, `es`, `hay`], 0, `Where a known thing is takes estar.`],
      [`How do you say "The glass is next to the newspaper"?`, [`El vaso está al lado el periódico.`, `El vaso está al lado del periódico.`, `El vaso está a lado del periódico.`], 1, `The phrase is al lado de, and de + el joins into del.`],
      [`Which word means "between"?`, [`dentro de`, `encima de`, `entre`], 2, `Entre is used with two things: entre el sofá y la silla.`],
      [`The pharmacy is close to the entrance.`, [`La farmacia está cerca de la entrada.`, `La farmacia está lejos de la entrada.`, `La farmacia está encima de la entrada.`], 0, `Cerca de means near; lejos de is the opposite.`],
      [`¿Las voces vienen de afuera o de ___ de su cabeza?`, [`entre`, `dentro`, `debajo`], 1, `Dentro de means inside, the natural opposite of afuera.`],
      [`How do you say "behind the door"?`, [`detrás la puerta`, `detrás a la puerta`, `detrás de la puerta`], 2, `Detrás is always followed by de.`]
    ] },

  { id: 'body-donde-duele', level: 'A1', unit: `Picture lessons: places and bodies`, after: 'position-words', title: `¿Dónde le duele? Pointing to where it hurts`,
    summary: `Ask and answer where it hurts with me duele / me duelen and the article, then say how it feels with me pica, me arde and siento pesado.`, draft: true,
    body: `<p>The first question of almost every visit is "Where does it hurt?" In Spanish the body part is the subject of the verb, and it takes the article (la, el, los, las), not mi. Learn the pattern once and every body word fits into it.</p>
<div class="pic-embed" data-pic="body-front"></div>
<p>Tap the parts of the body in the picture and hear each word with its article.</p>
<h3>Me duele or me duelen?</h3>
<p>The verb agrees with the thing that hurts. One part: <b>me duele</b>. Two or more: <b>me duelen</b>. To ask an adult patient, use <b>le</b> (usted).</p>
<div class="ex"><b>¿Dónde le duele?</b><span>Where does it hurt?</span></div>
<div class="ex"><b>Me duele la cabeza.</b><span>My head hurts.</span></div>
<div class="ex"><b>Me duelen los dientes.</b><span>My teeth hurt.</span></div>
<div class="ex"><b>Me duele el pecho cuando respiro hondo.</b><span>My chest hurts when I breathe deeply.</span></div>
<div class="ex"><b>Me duele la rodilla cuando subo escaleras.</b><span>My knee hurts when I climb stairs.</span></div>
<h3>Here, this side</h3>
<p>Many patients answer by pointing. Teach the small words that go with the gesture: <b>aquí</b> (here), <b>allí</b> (there), <b>de este lado</b> (on this side), <b>del lado izquierdo / derecho</b> (on the left / right side).</p>
<div class="ex"><b>Señáleme dónde le duele.</b><span>Show me where it hurts.</span></div>
<div class="ex"><b>¿Le duele aquí?</b><span>Does it hurt here?</span></div>
<div class="ex"><b>Me duele de este lado.</b><span>It hurts on this side.</span></div>
<div class="ex"><b>¿Le duele más aquí o aquí?</b><span>Does it hurt more here or here?</span></div>
<div class="ex"><b>¿Le duele cuando le toco aquí?</b><span>Does it hurt when I touch here?</span></div>
<h3>Other sensations</h3>
<p>Not everything is pain. Three useful verbs also put the body part last: <b>me pica</b> (it itches), <b>me arde</b> (it burns), and <b>siento ... pesado</b> (it feels heavy). In the last one the adjective agrees with the body part: el pecho pesado, la cabeza pesada.</p>
<div class="ex"><b>Me arde la garganta.</b><span>My throat burns.</span></div>
<div class="ex"><b>Me pica el brazo.</b><span>My arm itches.</span></div>
<div class="ex"><b>Siento el estómago pesado.</b><span>My stomach feels heavy.</span></div>
<p>The face has its own picture. Notice the words for the parts you ask about most.</p>
<div class="pic-embed" data-pic="face"></div>
<div class="note"><b>Clinical tip.</b> After "¿Dónde le duele?" ask "¿Puede señalarlo con un dedo?" and look for a single spot or a wide area. A patient can also tap the place on the <a href="#/pictures/bodymap">Body map</a>, which works well when you do not yet share enough words. Regional words differ: el estómago, la panza and la barriga are all heard for the belly. Say the word the patient uses.</div>
<h3>Common mistakes</h3>
<p><s>Me duele mi cabeza.</s> → <b>Me duele la cabeza.</b> With body parts Spanish uses the article, not mi, when the owner is clear.</p>
<p><s>Me duele las manos.</s> → <b>Me duelen las manos.</b> The verb agrees with the thing that hurts, and manos is plural.</p>
<p><s>Siento el pecho pesada.</s> → <b>Siento el pecho pesado.</b> The adjective agrees with the body part, and pecho is masculine.</p>`,
    quiz: [
      [`How do you ask an older adult patient "Where does it hurt?"`, [`¿Dónde le duele?`, `¿Dónde te duele?`, `¿Dónde duele usted?`], 0, `Le is the usted form that a clinician uses with an adult.`],
      [`Me ___ las rodillas.`, [`duele`, `duelen`, `duelo`], 1, `The knees are plural, so the verb is duelen.`],
      [`Which sentence says "My throat burns"?`, [`Me pica la garganta.`, `Me duelen la garganta.`, `Me arde la garganta.`], 2, `Arder is to burn; picar is to itch.`],
      [`Siento la cabeza ___.`, [`pesada`, `pesado`, `pesados`], 0, `Cabeza is feminine singular, so the adjective is pesada.`],
      [`Which sentence is natural?`, [`Me duele mi cabeza.`, `Me duele la cabeza.`, `Yo duelo la cabeza.`], 1, `The body part is the subject and takes the article.`],
      [`You want the patient to point. Which do you say?`, [`Señáleme dónde me duele.`, `Señáleme dónde le dolor.`, `Señáleme dónde le duele.`], 2, `Le duele refers to the patient, who is the person it hurts.`]
    ] },

  { id: 'describing-with-tener', level: 'A1', unit: `Picture lessons: places and bodies`, after: 'body-donde-duele', title: `Describing with tener and ser: tiene el pelo largo`,
    summary: `Describe people, animals and things with tiene + article + noun + adjective, or with ser + adjective, and make the adjective agree.`, draft: true,
    body: `<p>To describe a person or an animal you often need both a body part and an adjective: "long hair", "big ears". Spanish says <b>tiene el pelo largo</b>, literally "has the hair long". The adjective agrees with the part, not with the owner.</p>
<div class="pic-embed" data-pic="animal-parts"></div>
<p>The animal parts picture shows the words you need. Tap each pin and listen.</p>
<h3>Tener + article + part + adjective</h3>
<div class="ex"><b>El perro tiene las orejas grandes.</b><span>The dog has big ears.</span></div>
<div class="ex"><b>El gato tiene la cola larga.</b><span>The cat has a long tail.</span></div>
<div class="ex"><b>El conejo tiene las orejas largas.</b><span>The rabbit has long ears.</span></div>
<div class="ex"><b>La gallina tiene el pico pequeño.</b><span>The hen has a small beak.</span></div>
<p>Notice the article (las, la, el), not "su". The adjective copies the gender and number of the part: la cola larga, las orejas largas.</p>
<h3>Ser + adjective</h3>
<p>For the whole creature, use <b>ser</b> and an adjective that agrees with the owner: el caballo es grande, la tortuga es lenta. Ser cannot connect to a body part, so you say "tiene los ojos verdes", never "es los ojos verdes".</p>
<div class="ex"><b>El caballo es grande y rápido.</b><span>The horse is big and fast.</span></div>
<div class="ex"><b>La tortuga es lenta.</b><span>The turtle is slow.</span></div>
<div class="ex"><b>Mi gata es pequeña y tiene los ojos verdes.</b><span>My cat is small and has green eyes.</span></div>
<div class="pic-embed" data-pic="pets-farm"></div>
<h3>People and symptoms</h3>
<p>The same pattern describes people, and it also names signs that a family member sees. Use it for hair and eyes, and also for what a family member notices, like a flushed face, cold hands or high blood pressure.</p>
<div class="ex"><b>Mi hijo tiene la cara roja y la frente caliente.</b><span>My son has a red face and a warm forehead.</span></div>
<div class="ex"><b>Tiene las manos frías.</b><span>She has cold hands.</span></div>
<div class="ex"><b>Mi mamá tiene la presión alta.</b><span>My mother has high blood pressure.</span></div>
<div class="ex"><b>Tengo los ojos rojos y la garganta inflamada.</b><span>I have red eyes and a swollen throat.</span></div>
<div class="ex"><b>El paciente es alto y delgado, y tiene el pelo corto y canoso.</b><span>The patient is tall and thin, and has short gray hair.</span></div>
<div class="ex"><b>¿Cómo es su hermana? Es baja y tiene el pelo largo y negro.</b><span>What is your sister like? She is short and has long black hair.</span></div>
<div class="note"><b>Clinical tip.</b> Compare "es delgado" (he is a thin person) with "está delgado" (he looks thin now, so he may have lost weight). The change is often the clinical point. Ask "¿Siempre ha sido así?" to separate a lasting trait from something new. See <a href="#/lessons/ser-estar">ser and estar</a>.</div>
<h3>Common mistakes</h3>
<p><s>El gato tiene la cola largo.</s> → <b>El gato tiene la cola larga.</b> The adjective agrees with cola (feminine), not with gato.</p>
<p><s>La gata es los ojos verdes.</s> → <b>La gata tiene los ojos verdes.</b> A body part is something you have, so use tener, not ser.</p>
<p><s>El caballo tiene grande.</s> → <b>El caballo es grande.</b> Tener needs a noun after it; a bare adjective goes with ser.</p>`,
    quiz: [
      [`El gato tiene la cola ___.`, [`larga`, `largo`, `largas`], 0, `Cola is feminine and singular, so the adjective is larga.`],
      [`Mi hijo ___ los ojos azules.`, [`es`, `tiene`, `está`], 1, `Features that a person has take tener.`],
      [`Mi mamá ___ la presión alta.`, [`es`, `hay`, `tiene`], 2, `"Has high blood pressure" is tiene la presión alta.`],
      [`Las orejas del perro son ___.`, [`grandes`, `grande`, `grandas`], 0, `Orejas is plural, so the adjective is grandes.`],
      [`How do you say "The horse has a long tail"?`, [`El caballo es la cola larga.`, `El caballo tiene la cola larga.`, `El caballo tiene la cola largo.`], 1, `Tener + article + part + an adjective that agrees with the part.`],
      [`Which describes a person: "He is tall and thin"?`, [`Tiene alto y delgado.`, `Hay alto y delgado.`, `Es alto y delgado.`], 2, `Ser + adjective describes the whole person.`]
    ] },

  { id: 'clothes-colors', level: 'A1', unit: `Picture lessons: places and bodies`, after: 'describing-with-tener', title: `Clothes and colors: llevar, traer puesto, ponerse, quitarse`,
    summary: `Say what someone is wearing with llevar or traer puesto, say that they put on or took off something, and make the color agree.`, draft: true,
    body: `<p>You will describe clothes at triage ("¿Qué traía puesto?"), in a chart ("Llegó con ..."), and when a family reports a person missing. Three groups of verbs do the work.</p>
<div class="pic-embed" data-pic="clothes"></div>
<p>Tap the pins in the picture for the clothing words. Notice the article in front of each one.</p>
<h3>Wearing, putting on, taking off</h3>
<table><tr><th>Verb</th><th>Meaning</th></tr>
<tr><td>llevar / traer puesto</td><td>to wear, to have on (state)</td></tr>
<tr><td>ponerse</td><td>to put on (action)</td></tr>
<tr><td>quitarse</td><td>to take off (action)</td></tr></table>
<p>In Mexico <b>traer puesto</b> is very common: "Trae puestos unos pantalones azules". Elsewhere <b>llevar</b> is more usual. Both are understood everywhere.</p>
<div class="ex"><b>Lleva una camisa roja y pantalones negros.</b><span>She is wearing a red shirt and black pants.</span></div>
<div class="ex"><b>Trae puestos unos pantalones azules y zapatos cafés.</b><span>He is wearing blue pants and brown shoes.</span></div>
<div class="ex"><b>Me puse el abrigo porque tenía frío.</b><span>I put on my coat because I was cold.</span></div>
<div class="ex"><b>Quítese el abrigo y siéntese, por favor.</b><span>Take off your coat and sit down, please.</span></div>
<div class="ex"><b>Se puso la camisa al revés.</b><span>He put his shirt on inside out.</span></div>
<h3>Colors agree with the noun</h3>
<table><tr><th>Ends in -o</th><th>Ends in -e or a consonant</th></tr>
<tr><td>rojo, roja, rojos, rojas<br>negro, blanco, amarillo</td><td>verde, verdes<br>azul, azules<br>gris, grises<br>café, cafés</td></tr></table>
<p>Adjectives that end in -e or a consonant have one form for masculine and feminine, but they add -s or -es in the plural: una camisa azul, unos pantalones azules. A shade stays the same: una camisa azul oscuro, unos pantalones verde claro.</p>
<div class="ex"><b>Ella lleva una falda verde y una bolsa café.</b><span>She is wearing a green skirt and has a brown bag.</span></div>
<div class="ex"><b>Mi esposo lleva lentes y un sombrero blanco.</b><span>My husband is wearing glasses and a white hat.</span></div>
<div class="ex"><b>Mi hijo salió con una camisa azul oscuro y pantalones grises.</b><span>My son left in a dark blue shirt and gray pants.</span></div>
<h3>For a chart or a missing-person report</h3>
<div class="ex"><b>¿Qué traía puesto su hijo cuando salió de la casa?</b><span>What was your son wearing when he left the house?</span></div>
<div class="ex"><b>Llevaba zapatos negros y calcetines blancos.</b><span>He was wearing black shoes and white socks.</span></div>
<div class="ex"><b>Llegó con la ropa sucia y sin zapatos.</b><span>She arrived with dirty clothes and no shoes.</span></div>
<div class="note"><b>Clinical tip.</b> For a missing person, ask top to bottom: shirt, pants or skirt, coat, shoes, then hat, glasses or bag. Colors first, then the item. Write what you hear ("camisa azul oscuro") and read it back. Do not assume gender from clothes; use the words the family uses.</div>
<h3>Common mistakes</h3>
<p><s>Lleva una camisa rojo.</s> → <b>Lleva una camisa roja.</b> The color agrees with camisa, which is feminine.</p>
<p><s>Lleva pantalones azul.</s> → <b>Lleva pantalones azules.</b> Pantalones is plural, so azul becomes azules.</p>
<p><s>Ahora se pone una camisa roja.</s> → <b>Ahora lleva una camisa roja.</b> Ponerse is the action of putting it on; to say what someone is wearing, use llevar or traer puesto.</p>`,
    quiz: [
      [`Lleva una camisa ___.`, [`roja`, `rojo`, `rojas`], 0, `Camisa is feminine singular, so the color is roja.`],
      [`Lleva pantalones ___.`, [`azul`, `azules`, `azula`], 1, `Colors that end in a consonant add -es in the plural.`],
      [`Which sentence says "He took off his hat"?`, [`Se puso el sombrero.`, `Lleva el sombrero.`, `Se quitó el sombrero.`], 2, `Quitarse is to take off; ponerse is to put on.`],
      [`How do you ask what her son was wearing when he left?`, [`¿Qué traía puesto su hijo cuando salió?`, `¿Qué puso su hijo cuando salió?`, `¿Cuál es puesta su hijo?`], 0, `Traer puesto asks what someone had on.`],
      [`Which is the polite request to an adult patient?`, [`Quítate los zapatos, por favor.`, `Quítese los zapatos, por favor.`, `Quito los zapatos, por favor.`], 1, `Quítese is the usted command of quitarse.`],
      [`How do you say "a dark blue shirt"?`, [`una camisa azul oscuros`, `una camisa azules oscuras`, `una camisa azul oscuro`], 2, `A shade of a color stays in the same form.`]
    ] },

  { id: 'directions-map', level: 'A1', unit: `Picture lessons: places and bodies`, after: 'clothes-colors', title: `Directions: siga derecho, doble a la izquierda, suba al segundo piso`,
    summary: `Give directions in the street and inside a hospital with usted commands: siga, doble, cruce, suba, baje, pase.`, draft: true,
    body: `<p>Patients and families get lost in hospitals. A short, clear direction helps, and you will also give directions to a clinic or a pharmacy. Spanish directions use usted commands, which you already know from <a href="#/lessons/commands-instructions">commands and instructions</a>.</p>
<div class="pic-embed" data-pic="street"></div>
<p>Tap the pins in the street picture. In Mexico a block is a <b>cuadra</b>, and the sidewalk is the <b>banqueta</b>; elsewhere it is the <b>acera</b>.</p>
<h3>Commands for the street</h3>
<table><tr><th>Command</th><th>Meaning</th></tr>
<tr><td>Siga derecho</td><td>Go straight on</td></tr>
<tr><td>Doble a la derecha / a la izquierda</td><td>Turn right / left</td></tr>
<tr><td>Cruce la calle</td><td>Cross the street</td></tr>
<tr><td>Suba / Baje</td><td>Go up / go down</td></tr>
<tr><td>Pase por / Pase a</td><td>Go through / go to</td></tr></table>
<div class="ex"><b>Siga derecho dos cuadras.</b><span>Go straight for two blocks.</span></div>
<div class="ex"><b>Doble a la derecha en el semáforo.</b><span>Turn right at the traffic light.</span></div>
<div class="ex"><b>Cruce la calle por el paso de peatones.</b><span>Cross the street at the crosswalk.</span></div>
<div class="ex"><b>El correo está en la esquina, enfrente del banco.</b><span>The post office is on the corner, across from the bank.</span></div>
<div class="ex"><b>Tome un taxi en la entrada.</b><span>Take a taxi at the entrance.</span></div>
<h3>Inside the hospital</h3>
<div class="pic-embed" data-pic="hospital-floor"></div>
<p>Inside a building you also need <b>al fondo</b> (at the far end), <b>a la derecha</b> and <b>en el segundo piso</b>. In Mexico the ground floor is la planta baja, so the second floor is one flight up.</p>
<div class="ex"><b>La farmacia está al fondo del pasillo, a la izquierda.</b><span>The pharmacy is at the end of the hall, on the left.</span></div>
<div class="ex"><b>Suba al segundo piso por el elevador.</b><span>Go up to the second floor in the elevator.</span></div>
<div class="ex"><b>Baje por las escaleras a la planta baja.</b><span>Go down the stairs to the ground floor.</span></div>
<div class="ex"><b>Su cita es en el segundo piso, después de la sala de espera.</b><span>Your appointment is on the second floor, after the waiting room.</span></div>
<div class="ex"><b>Pase a la caja para pagar antes de irse.</b><span>Go to the cashier to pay before you leave.</span></div>
<div class="ex"><b>Siéntese en la sala de espera; la enfermera lo va a llamar.</b><span>Sit in the waiting room; the nurse will call you.</span></div>
<div class="note"><b>Clinical tip.</b> Give one direction at a time and check it: "¿Me puede repetir cómo llegar?" A patient who is confused, sedated or very anxious should not walk alone. Say "Venga, lo acompaño" and walk with them. Use landmarks they can see (la recepción, las escaleras) rather than room numbers alone.</div>
<h3>Common mistakes</h3>
<p><s>Doble a derecha.</s> → <b>Doble a la derecha.</b> Directions take the article: a la derecha, a la izquierda.</p>
<p><s>Subes al segundo piso.</s> → <b>Suba al segundo piso.</b> A clinician speaks to an adult with the usted command, not the tú form.</p>
<p><s>Cruce en la calle.</s> → <b>Cruce la calle.</b> Cruzar takes the street as a direct object, with no preposition.</p>`,
    quiz: [
      [`Siga ___ dos cuadras.`, [`derecho`, `derecha`, `derechos`], 0, `Siga derecho is the set phrase for go straight on.`],
      [`How do you say "Turn left at the light" to an adult patient?`, [`Dobla a la izquierda en el semáforo.`, `Doble a la izquierda en el semáforo.`, `Doble en izquierda en el semáforo.`], 1, `Usted command plus a la izquierda.`],
      [`How do you say "Cross the street"?`, [`Cruce en la calle.`, `Cruce a la calle.`, `Cruce la calle.`], 2, `Cruzar takes the street directly.`],
      [`Which tells the patient to go up to the second floor?`, [`Suba al segundo piso.`, `Baje al segundo piso.`, `Suba el segundo piso.`], 0, `Subir is to go up, and a is used with al segundo piso.`],
      [`La farmacia está ___ del pasillo.`, [`en fondo`, `al fondo`, `a fondo`], 1, `Al fondo del pasillo is the usual phrase for the end of the hall.`],
      [`A confused patient asks where the bathroom is. Which is best?`, [`Siga derecho y doble a la izquierda en la tercera puerta.`, `Pregunte en la recepción, por favor.`, `Venga conmigo, lo acompaño al baño.`], 2, `A confused patient should be walked there, not sent alone.`]
    ] },

  { id: 'review-pictures-a1', level: 'A1', unit: `Picture lessons: places and bodies`, after: 'directions-map', review: true, title: `Review: picture lessons A1`,
    summary: `A table of the patterns from the five picture lessons, six mixed examples and a quiz of twelve.`, draft: true,
    body: `<p>This review puts the picture lessons together: where things are, where it hurts, describing, clothes and directions.</p>
<table><tr><th>Lesson</th><th>Pattern</th><th>Example</th></tr>
<tr><td>Position words</td><td>estar + position word + de</td><td>al lado del sofá</td></tr>
<tr><td>Where it hurts</td><td>me duele / me duelen + article + part</td><td>Me duelen las manos.</td></tr>
<tr><td>Describing</td><td>tiene + article + part + adjective</td><td>Tiene el pelo largo.</td></tr>
<tr><td>Clothes</td><td>llevar / traer puesto; color agrees</td><td>Lleva una camisa roja.</td></tr>
<tr><td>Directions</td><td>usted command + a la derecha / izquierda</td><td>Doble a la izquierda.</td></tr></table>
<div class="ex"><b>Su medicina está dentro de la bolsa.</b><span>Your medicine is inside the bag.</span></div>
<div class="ex"><b>Me duele de este lado.</b><span>It hurts on this side.</span></div>
<div class="ex"><b>Mi hijo tiene la cara roja.</b><span>My son has a red face.</span></div>
<div class="ex"><b>Trae puestos unos pantalones azules.</b><span>He is wearing blue pants.</span></div>
<div class="ex"><b>Siga derecho y doble a la derecha.</b><span>Go straight on and turn right.</span></div>
<div class="ex"><b>La farmacia está al fondo del pasillo.</b><span>The pharmacy is at the end of the hall.</span></div>
<h3>Common mistakes</h3>
<p><s>Me duele las manos.</s> → <b>Me duelen las manos.</b> The verb agrees with the plural part.</p>
<p><s>El gato tiene la cola largo.</s> → <b>El gato tiene la cola larga.</b> The adjective agrees with cola.</p>
<p><s>La silla está al lado de el sofá.</s> → <b>La silla está al lado del sofá.</b> De + el joins into del.</p>`,
    quiz: [
      [`The glasses are under the bed.`, [`Los lentes están debajo de la cama.`, `Los lentes están encima de la cama.`, `Los lentes están dentro de la cama.`], 0, `Debajo de means under.`],
      [`Me duele ___ pecho.`, [`mi`, `el`, `un`], 1, `Body parts take the article, so el pecho.`],
      [`La paciente ___ el pelo largo.`, [`es`, `está`, `tiene`], 2, `Hair is a part she has, so tener.`],
      [`Tiene los ojos ___.`, [`verdes`, `verde`, `verdos`], 0, `Ojos is plural, so the color is verdes.`],
      [`Siento el estómago ___.`, [`pesada`, `pesado`, `pesados`], 1, `Estómago is masculine singular.`],
      [`Which means "She is wearing a red skirt"?`, [`Lleva una falda rojo.`, `Lleva una falda rojas.`, `Lleva una falda roja.`], 2, `Falda is feminine singular, so roja.`],
      [`Doble ___ la izquierda.`, [`a`, `en`, `de`], 0, `Doble a la izquierda is the set phrase.`],
      [`Siga derecho y ___ la calle (usted).`, [`cruza`, `cruce`, `cruzas`], 1, `Cruce is the usted command.`],
      [`El baño ___ al fondo.`, [`es`, `hay`, `está`], 2, `Where a known thing is takes estar.`],
      [`The waiting room is next to the office.`, [`La sala de espera está al lado del consultorio.`, `La sala de espera está al lado de el consultorio.`, `La sala de espera está al lado de lo consultorio.`], 0, `De + el joins into del.`],
      [`A patient points to one side. What does the patient say?`, [`Me duele este lado de.`, `Me duele de este lado.`, `Me duele de lado este.`], 1, `De este lado is the set phrase.`],
      [`Suba ___ segundo piso.`, [`a el`, `a la`, `al`], 2, `A + el always joins into al.`]
    ] },

  { id: 'machine-instructions', level: 'A2', unit: `Picture lessons: machines and how things are`, after: 'review-a2', title: `Instructions for machines: primero, luego, después, por último`,
    summary: `Give step-by-step instructions with primero, luego, después and por último, using usted commands, and warn with si no..., no...`, draft: true,
    body: `<p>Patients ask how to use a phone for a video visit, how to call the nurse, or how to work a pill reminder or an appliance. A good instruction has steps in order and a command for each step. You already know usted commands; now you add the words that put the steps in order.</p>
<div class="pic-embed" data-pic="computer-phone"></div>
<p>Tap the pins on the computer and phone to learn the parts you will name.</p>
<h3>Order words</h3>
<table><tr><th>Word</th><th>Meaning</th></tr>
<tr><td>primero</td><td>first</td></tr>
<tr><td>luego / después</td><td>then, next</td></tr>
<tr><td>por último</td><td>finally, last</td></tr>
<tr><td>antes de / después de + infinitive</td><td>before / after doing something</td></tr></table>
<h3>Usted commands for machines</h3>
<p>Common ones: <b>oprima</b> (press), <b>enchufe</b> (plug in), <b>prenda</b> (turn on, Latin America; <b>encienda</b> everywhere), <b>apague</b> (turn off), <b>cargue</b> (charge), <b>conecte</b> (connect), <b>abra</b> (open), <b>espere</b> (wait).</p>
<div class="ex"><b>Primero, enchufe el cargador.</b><span>First, plug in the charger.</span></div>
<div class="ex"><b>Luego, oprima el botón de encendido.</b><span>Then press the power button.</span></div>
<div class="ex"><b>Después, espere un minuto.</b><span>Next, wait one minute.</span></div>
<div class="ex"><b>Por último, abra la aplicación.</b><span>Finally, open the app.</span></div>
<div class="ex"><b>Apague la televisión antes de dormir.</b><span>Turn off the television before you sleep.</span></div>
<h3>Si no..., no...</h3>
<p>Say what happens if the step is skipped with <b>si no</b> and a present tense verb. After si, use a normal present tense, not the command form.</p>
<div class="ex"><b>Si no carga el celular, se va a apagar.</b><span>If you do not charge the phone, it will turn off.</span></div>
<div class="ex"><b>Si no escucha bien, suba el volumen con el botón lateral.</b><span>If you cannot hear well, turn up the volume with the side button.</span></div>
<h3>On the ward and at home</h3>
<div class="pic-embed" data-pic="appliances"></div>
<div class="ex"><b>Para llamar a la enfermera, oprima el botón que está al lado de la cama.</b><span>To call the nurse, press the button next to the bed.</span></div>
<div class="ex"><b>Si no oprime el botón, la enfermera no sabe que usted necesita ayuda.</b><span>If you do not press the button, the nurse does not know that you need help.</span></div>
<div class="ex"><b>Para la cita por video, abra la aplicación y oprima el botón verde.</b><span>For the video visit, open the app and press the green button.</span></div>
<div class="ex"><b>Antes de la cita, cargue su celular y conecte los audífonos.</b><span>Before the visit, charge your phone and connect your headphones.</span></div>
<div class="ex"><b>Si no puede dormir, apague la televisión y la computadora.</b><span>If you cannot sleep, turn off the television and the computer.</span></div>
<div class="ex"><b>Para hablar en español, llame al 988 y oprima 2.</b><span>To speak in Spanish, call 988 and press 2.</span></div>
<div class="note"><b>Clinical tip.</b> Show the step while you say it, then ask the patient to do it: "¿Me muestra cómo lo hace?" This teach-back finds problems early. Give no more than four steps at a time, and write the steps down for older patients. The crisis line instruction ("llame al 988 y oprima 2") is worth giving to every patient who may need it.</div>
<div class="note"><b>Regional words.</b> In Mexico people say <b>prender</b> and <b>apagar</b>; <b>encender</b> is understood everywhere. The phone is <b>el celular</b> in Mexico and <b>el móvil</b> in Spain.</div>
<h3>Common mistakes</h3>
<p><s>Primero, enchufas el cargador.</s> → <b>Primero, enchufe el cargador.</b> With an adult patient a clinician uses the usted command.</p>
<p><s>Después de abra la aplicación, oprima el botón.</s> → <b>Después de abrir la aplicación, oprima el botón.</b> After a preposition like de, use the infinitive.</p>
<p><s>Apague la celular.</s> → <b>Apague el celular.</b> Celular is masculine, so it takes el.</p>`,
    quiz: [
      [`Primero, ___ el cargador (to an adult patient).`, [`enchufe`, `enchufas`, `enchufamos`], 0, `A clinician uses the usted command, enchufe.`],
      [`Which word means "last, finally"?`, [`por primero`, `por último`, `al luego`], 1, `Por último closes a list of steps.`],
      [`Si usted no ___ el celular, se va a apagar.`, [`cargas`, `cargue`, `carga`], 2, `After si Spanish uses a plain present tense; cargue is the command form.`],
      [`How do you say "Turn off the television" to a patient?`, [`Apague la televisión.`, `Apague el televisión.`, `Apago la televisión.`], 0, `Televisión is feminine, and apague is the usted command.`],
      [`Después ___ abrir la aplicación, oprima el botón verde.`, [`a`, `de`, `que`], 1, `Después de plus an infinitive means after doing something.`],
      [`Para llamar a la enfermera, ___ el botón (usted).`, [`oprimes`, `oprimo`, `oprima`], 2, `Oprima is the usted command.`]
    ] },

  { id: 'states-pictures', level: 'A2', unit: `Picture lessons: machines and how things are`, after: 'machine-instructions', title: `How things are: está abierta, está prendida, está rota`,
    summary: `Describe how a room is with estar + participle, make the participle agree, and tell the state apart from the action.`, draft: true,
    body: `<p>On a home visit, or when a patient describes a room, you say how things are right now: the door is open, the light is on, the cup is broken. Spanish uses <b>estar</b> plus a participle that agrees with the thing: <b>la puerta está abierta</b>.</p>
<div class="pic-embed" data-pic="living-room"></div>
<p>Tap the living room picture for the objects. Then think of what state each one can be in.</p>
<h3>Estar + participle</h3>
<table><tr><th>Action</th><th>State</th></tr>
<tr><td>abrir</td><td>abierto, abierta</td></tr>
<tr><td>cerrar</td><td>cerrado, cerrada</td></tr>
<tr><td>prender</td><td>prendido, prendida</td></tr>
<tr><td>apagar</td><td>apagado, apagada</td></tr>
<tr><td>romper</td><td>roto, rota</td></tr>
<tr><td>tender (la cama)</td><td>tendido, tendida</td></tr></table>
<p>Abierto and roto are irregular. Regular verbs end in -ado (cerrado) or -ido (prendido). The participle changes like an adjective: la puerta abierta, las ventanas abiertas.</p>
<div class="ex"><b>La puerta está abierta.</b><span>The door is open.</span></div>
<div class="ex"><b>La ventana está cerrada.</b><span>The window is closed.</span></div>
<div class="ex"><b>Las cortinas están cerradas.</b><span>The curtains are closed.</span></div>
<div class="ex"><b>La luz está prendida.</b><span>The light is on.</span></div>
<div class="ex"><b>La televisión está apagada.</b><span>The television is off.</span></div>
<div class="ex"><b>El vaso está roto.</b><span>The glass is broken.</span></div>
<h3>State or action?</h3>
<p>The state describes how it is now. The action says what someone did, or what happened: <b>abrí la ventana</b> (I opened it), <b>la ventana se abrió</b> (it opened). The result is <b>está abierta</b>.</p>
<div class="ex"><b>Abrí la ventana y ahora está abierta.</b><span>I opened the window and now it is open.</span></div>
<div class="pic-embed" data-pic="bedroom"></div>
<h3>In the bedroom</h3>
<p>The bedroom picture adds the bed, the lamp and the alarm clock. In Mexico a made bed is <b>tendida</b>; elsewhere you hear <b>hecha</b>.</p>
<div class="ex"><b>La cama está deshecha y la ropa está tirada en el piso.</b><span>The bed is unmade and the clothes are thrown on the floor.</span></div>
<div class="ex"><b>Las cortinas están cerradas y la luz está apagada, aunque ya es mediodía.</b><span>The curtains are closed and the light is off, although it is already noon.</span></div>
<div class="ex"><b>¿Duerme con la luz prendida?</b><span>Do you sleep with the light on?</span></div>
<div class="ex"><b>¿La puerta de su casa está cerrada con llave por la noche?</b><span>Is your front door locked at night?</span></div>
<div class="note"><b>Clinical tip.</b> On a home visit write what you see, in neutral words: "la casa está limpia y ordenada", "no hay comida en el refrigerador". Avoid judging words like "sucio" for a person's home. Closed curtains and a dark room at noon, or a bed that stays unmade for days, are facts to ask about gently: "Veo que las cortinas están cerradas. ¿Cómo ha estado de ánimo?"</div>
<h3>Common mistakes</h3>
<p><s>La puerta es abierta.</s> → <b>La puerta está abierta.</b> A condition that results from an action takes estar.</p>
<p><s>Las ventanas están cerrado.</s> → <b>Las ventanas están cerradas.</b> The participle agrees with ventanas, feminine and plural.</p>
<p><s>El vaso está rompido.</s> → <b>El vaso está roto.</b> Romper has an irregular participle, roto.</p>`,
    quiz: [
      [`La puerta ___ abierta.`, [`está`, `es`, `hay`], 0, `The state of a thing right now takes estar.`],
      [`Las ventanas están ___.`, [`cerrado`, `cerradas`, `cerrada`], 1, `The participle agrees with the plural feminine ventanas.`],
      [`El vaso está ___.`, [`rompido`, `romper`, `roto`], 2, `The participle of romper is roto.`],
      [`Which sentence describes the action: "I opened the window"?`, [`Abrí la ventana.`, `La ventana está abierta.`, `La ventana es abierta.`], 0, `Abrí is what someone did; está abierta is the result.`],
      [`La luz está ___.`, [`prendido`, `prendida`, `prender`], 1, `Luz is feminine, so the participle is prendida.`],
      [`Which sentence says that the bed is unmade?`, [`La cama es deshecha.`, `La cama hace deshecha.`, `La cama está deshecha.`], 2, `The state of the bed takes estar + participle.`]
    ] },

  { id: 'explaining-with-pictures', level: 'A2', unit: `Picture lessons: machines and how things are`, after: 'states-pictures', title: `Explaining with a picture: esto es, se llama, sirve para`,
    summary: `Explain a body part, a test or a medicine to a patient with a picture: esto es, esta parte se llama, aquí está, está conectado con, por aquí pasa, sirve para.`, draft: true,
    body: `<p>A drawing helps when a patient asks "¿Qué es eso?" or when you explain where a medicine works or what a test looks at. You can say it with a few patterns and your finger on the picture. Use usted and plain words, with no jargon.</p>
<div class="pic-embed" data-pic="inside"></div>
<p>Tap the organs in the picture and listen to each word. These are the words you will point at.</p>
<h3>Six patterns</h3>
<table><tr><th>Pattern</th><th>Use</th></tr>
<tr><td>Esto es ...</td><td>naming what you point at</td></tr>
<tr><td>Esta parte se llama ...</td><td>giving a name</td></tr>
<tr><td>Aquí está ...</td><td>showing where</td></tr>
<tr><td>... está conectado con ...</td><td>how parts join</td></tr>
<tr><td>Por aquí pasa ...</td><td>what travels through</td></tr>
<tr><td>... sirve para + infinitive</td><td>what it is for</td></tr></table>
<div class="ex"><b>Esto es el corazón.</b><span>This is the heart.</span></div>
<div class="ex"><b>Esta parte se llama la columna.</b><span>This part is called the spine.</span></div>
<div class="ex"><b>Aquí está el cerebro, dentro de la cabeza.</b><span>Here is the brain, inside the head.</span></div>
<div class="ex"><b>El estómago está conectado con los intestinos.</b><span>The stomach is connected to the intestines.</span></div>
<div class="ex"><b>Por aquí pasa el aire y llega a los pulmones.</b><span>The air passes through here and reaches the lungs.</span></div>
<div class="ex"><b>Los pulmones sirven para respirar.</b><span>The lungs are for breathing.</span></div>
<div class="ex"><b>El hígado ayuda a limpiar la sangre.</b><span>The liver helps to clean the blood.</span></div>
<h3>Where a medicine works, what a test looks at</h3>
<div class="pic-embed" data-pic="body-front"></div>
<div class="ex"><b>Esta medicina actúa en el cerebro y ayuda a calmar la ansiedad.</b><span>This medicine works in the brain and helps to calm anxiety.</span></div>
<div class="ex"><b>Este examen mide el ritmo del corazón.</b><span>This test measures the rhythm of the heart.</span></div>
<div class="ex"><b>El análisis de sangre sirve para ver cómo está el hígado.</b><span>The blood test is for seeing how the liver is doing.</span></div>
<div class="ex"><b>Le voy a mostrar en el dibujo dónde está.</b><span>I am going to show you in the drawing where it is.</span></div>
<div class="ex"><b>¿Me puede explicar con sus palabras lo que entendió?</b><span>Can you explain to me in your own words what you understood?</span></div>
<div class="note"><b>Clinical tip.</b> Say what the medicine helps with, not that it cures: "ayuda a calmar la ansiedad". Name only the part you need and use a simple verb: actúa en, ayuda a, sirve para. End with teach-back ("¿Me puede explicar con sus palabras...?") and invite questions: "¿Qué preguntas tiene?" A patient who is anxious or confused may take a picture very literally, so keep it short and concrete.</div>
<h3>Common mistakes</h3>
<p><s>Esta medicina sirve por el dolor.</s> → <b>Esta medicina sirve para el dolor.</b> Sirve is followed by para when you say what something is for.</p>
<p><s>El hígado es conectado con el estómago.</s> → <b>El hígado está conectado con el estómago.</b> A result state with a participle takes estar.</p>
<p><s>Aquí es el corazón.</s> → <b>Aquí está el corazón.</b> Where something is takes estar, not ser.</p>`,
    quiz: [
      [`El hígado ___ para limpiar la sangre.`, [`sirve`, `es`, `está`], 0, `Sirve para says what something is for.`],
      [`Esta parte ___ la garganta.`, [`se llaman`, `se llama`, `te llamas`], 1, `Se llama is the way to give a name to a thing.`],
      [`El estómago ___ conectado con los intestinos.`, [`es`, `hay`, `está`], 2, `Estar + participle describes how parts are joined.`],
      [`Por aquí ___ el aire.`, [`pasa`, `pasan`, `pasas`], 0, `Aire is singular, so pasa.`],
      [`Which is the best plain explanation of a heart-rhythm test?`, [`Este examen sirve por el corazón.`, `Este examen mide el ritmo del corazón.`, `Este examen es en el corazón.`], 1, `Mide el ritmo says what the test looks at, and sirve needs para, not por.`],
      [`Los pulmones sirven ___ respirar.`, [`por`, `de`, `para`], 2, `Para goes before the infinitive that tells the purpose.`]
    ] },

  { id: 'review-pictures-a2', level: 'A2', unit: `Picture lessons: machines and how things are`, after: 'explaining-with-pictures', review: true, title: `Review: picture lessons A2`,
    summary: `A table of the patterns from the three A2 picture lessons, six mixed examples and a quiz of twelve.`, draft: true,
    body: `<p>This review brings together instructions, states and explanations with a picture.</p>
<table><tr><th>Lesson</th><th>Pattern</th><th>Example</th></tr>
<tr><td>Instructions</td><td>primero, luego, por último + usted command</td><td>Luego, oprima el botón.</td></tr>
<tr><td>States</td><td>estar + participle that agrees</td><td>Las luces están prendidas.</td></tr>
<tr><td>Explaining</td><td>esto es, se llama, sirve para, está conectado con</td><td>Los pulmones sirven para respirar.</td></tr></table>
<div class="ex"><b>Primero, cargue el celular.</b><span>First, charge the phone.</span></div>
<div class="ex"><b>Si no oprime el botón, la enfermera no sabe que usted necesita ayuda.</b><span>If you do not press the button, the nurse does not know you need help.</span></div>
<div class="ex"><b>La puerta está cerrada y las cortinas están abiertas.</b><span>The door is closed and the curtains are open.</span></div>
<div class="ex"><b>Esta parte se llama la columna.</b><span>This part is called the spine.</span></div>
<div class="ex"><b>Esta medicina sirve para dormir.</b><span>This medicine is for sleeping.</span></div>
<div class="ex"><b>El corazón está en el pecho.</b><span>The heart is in the chest.</span></div>
<h3>Common mistakes</h3>
<p><s>Apague la celular.</s> → <b>Apague el celular.</b> Celular is masculine.</p>
<p><s>El vaso está rompido.</s> → <b>El vaso está roto.</b> The participle of romper is roto.</p>
<p><s>Esta medicina sirve por dormir.</s> → <b>Esta medicina sirve para dormir.</b> Purpose with an infinitive takes para.</p>`,
    quiz: [
      [`Luego, ___ el botón de encendido (usted).`, [`oprima`, `oprime`, `oprimo`], 0, `Oprima is the usted command.`],
      [`Si no oprime el botón, la enfermera no ___.`, [`saber`, `sabe`, `sabes`], 1, `After si no, a normal present tense: la enfermera no sabe.`],
      [`La puerta ___ cerrada.`, [`es`, `hay`, `está`], 2, `The state of the door takes estar.`],
      [`Las luces están ___.`, [`prendidas`, `prendido`, `prendida`], 0, `The participle agrees with luces, feminine plural.`],
      [`The window opened by itself.`, [`La ventana está abierta sola.`, `La ventana se abrió sola.`, `La ventana abierta sola.`], 1, `Se abrió says what happened; está abierta describes the state.`],
      [`Esta medicina ___ para dormir.`, [`es`, `está`, `sirve`], 2, `Sirve para says what a thing is for.`],
      [`El corazón ___ en el pecho.`, [`está`, `es`, `hay`], 0, `Where a thing is takes estar.`],
      [`Which explains where the brain is?`, [`El cerebro es dentro la cabeza.`, `El cerebro está dentro de la cabeza.`, `El cerebro está dentro la cabeza.`], 1, `Estar for location, and dentro is followed by de.`],
      [`Esta parte se llama ___ columna.`, [`el`, `lo`, `la`], 2, `Columna is feminine.`],
      [`Which asks a patient (usted) to turn off the phone?`, [`Apague el celular.`, `Apaga el celular.`, `Apago el celular.`], 0, `Apague is the usted command.`],
      [`El vaso está ___ y hay que tirarlo.`, [`rompido`, `roto`, `rompe`], 1, `The participle of romper is roto.`],
      [`Aquí ___ los pulmones.`, [`es`, `está`, `están`], 2, `Location takes estar, and pulmones is plural.`]
    ] }
]);
