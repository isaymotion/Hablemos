/* Lessons 2: fifteen more A1 grammar lessons (release 0.7.0).
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Shape: { id, level: 'A1', unit, title, summary, body: HTML, quiz: [[question, [4 options], correctIndex, explanation], ...], draft: true, after: '<lesson id it follows>', review?: true }
   Body HTML subset: <p>, <h3>, <ul><li>, <table>, <div class="ex"><b>Spanish</b><span>English</span></div> (recorded for audio, plain text inside <b>), <div class="note">…</div>. Escape & as &amp;.
   Ids are permanent: append only after release; never rename or reorder ids that drills reference. */
window.LESSONS = (window.LESSONS || []).concat([
  {
  id: 'articles-contractions', level: 'A1', unit: 'Foundations', title: `Articles and contractions: el, la, un, al, del`,
  summary: `Use el, la, los, las for the known thing, un or una for a new one, and join a + el into al and de + el into del.`,
  body: `<p>Small words decide whether you say "the pain" or "a pain", and whether a patient hears natural Spanish. Spanish uses articles more than English does, and two of them merge with a preposition.</p>
<table><tr><th></th><th>Masculine</th><th>Feminine</th></tr><tr><td>the (one)</td><td>el</td><td>la</td></tr><tr><td>the (many)</td><td>los</td><td>las</td></tr><tr><td>a, an</td><td>un</td><td>una</td></tr><tr><td>some</td><td>unos</td><td>unas</td></tr></table>
<p>Use <b>el, la, los, las</b> for something known or in general. Use <b>un, una</b> for something new or one of several.</p>
<div class="ex"><b>¿Tiene un dolor fuerte en el pecho?</b><span>Do you have a strong pain in your chest?</span></div>
<div class="ex"><b>Las voces empiezan por la noche.</b><span>The voices start at night.</span></div>
<div class="ex"><b>¿Toma las pastillas con el desayuno?</b><span>Do you take the pills with breakfast?</span></div>
<h3>Al and del</h3>
<p><b>a + el = al</b> and <b>de + el = del</b>. Always join them. <i>La, los, las</i> do not merge.</p>
<div class="ex"><b>Voy al hospital con mi hermana.</b><span>I am going to the hospital with my sister.</span></div>
<div class="ex"><b>Hablo con la madre del paciente.</b><span>I am speaking with the patient's mother.</span></div>
<h3>El agua and the body</h3>
<p>Feminine nouns that start with a stressed <i>a</i> take <b>el</b> in the singular so the sounds do not collide: <i>el agua, el hambre, el alma</i>. They are still feminine, so the adjective is feminine: <i>el agua fría</i>. The plural is regular: <i>las aguas</i>.</p>
<div class="ex"><b>El agua está fría.</b><span>The water is cold.</span></div>
<div class="ex"><b>Necesito un vaso de agua.</b><span>I need a glass of water.</span></div>
<p>Spanish uses <b>the</b> with body parts and with days: <i>la cabeza, los lunes</i>. Spanish also uses <b>the</b> for general ideas: <i>la depresión, el sueño</i>.</p>
<div class="ex"><b>Me duele la cabeza.</b><span>My head hurts.</span></div>
<div class="ex"><b>Los lunes tengo cita.</b><span>I have an appointment on Mondays.</span></div>
<div class="ex"><b>El sueño es un problema para mí.</b><span>Sleep is a problem for me.</span></div>
<div class="note">Clinical tip: patients often say <i>la ansiedad</i> or <i>la tristeza</i> with the article, as if it were a known visitor. Use the same word they use when you ask: <i>¿Cuándo empezó la ansiedad?</i></div>
<h3>Common mistakes</h3>
<p><s>Voy a el hospital.</s> → <b>Voy al hospital.</b> A and el always join into al.</p>
<p><s>Me duele mi cabeza.</s> → <b>Me duele la cabeza.</b> Body parts take the article, not mi, when the owner is clear.</p>
<p><s>La agua está fría.</s> → <b>El agua está fría.</b> Agua is feminine but takes el in the singular.</p>`,
  quiz: [
    [`Which completes "Voy ___ hospital con mi hermana"?`, [`a el`, `al`, `a la`, `del`], 1, `A + el always becomes al.`],
    [`Which phrase is correct for "the cold water"?`, [`el agua fría`, `la agua fría`, `el agua frío`, `las agua fría`], 0, `Agua takes el in the singular but stays feminine, so the adjective is fría.`],
    [`How do you say "My head hurts"?`, [`Me duele mi cabeza.`, `Me duele una cabeza.`, `Me duele la cabeza.`, `Me duele cabeza.`], 2, `Spanish uses the article with body parts: la cabeza.`],
    [`Which sentence has an error?`, [`Hablo con la madre del paciente.`, `Tomo las pastillas con el desayuno.`, `Los lunes tengo cita.`, `Es la casa de el paciente.`], 3, `De + el always becomes del: la casa del paciente.`],
    [`What does "Las voces empiezan por la noche" mean?`, [`Some voices start tonight.`, `A voice starts at night.`, `The voices start at night.`, `The voices end at night.`], 2, `Las voces is "the voices" in general, and por la noche is "at night".`],
    [`Which completes "Tengo cita ___ lunes" to mean every Monday?`, [`el`, `los`, `un`, `del`], 1, `Los lunes means on Mondays, again and again. El lunes is one particular Monday.`],
    [`Which article fits "___ problema es el sueño"?`, [`La`, `Las`, `Una`, `El`], 3, `Problema is a masculine noun even though it ends in -a, so it takes el.`]
  ],
  draft: true,
  after: 'gender-agreement'
  },
  {
  id: 'subject-pronouns', level: 'A1', unit: 'Foundations', title: `Subject pronouns: when to say yo, él, usted`,
  summary: `Spanish verbs show the person, so pronouns are usually dropped and kept only for contrast or clarity.`,
  body: `<p>English needs "I", "he" and "she" in every sentence. Spanish does not, because the verb ending already shows who acts. If you say <i>yo</i> every time, you will sound stiff, and a patient may hear contrast you did not mean.</p>
<table><tr><th>Pronoun</th><th>Meaning</th><th>Verb (hablar)</th></tr><tr><td>yo</td><td>I</td><td>hablo</td></tr><tr><td>tú</td><td>you (familiar)</td><td>hablas</td></tr><tr><td>usted</td><td>you (formal)</td><td>habla</td></tr><tr><td>él / ella</td><td>he / she</td><td>habla</td></tr><tr><td>nosotros / nosotras</td><td>we</td><td>hablamos</td></tr><tr><td>ustedes</td><td>you (plural)</td><td>hablan</td></tr><tr><td>ellos / ellas</td><td>they</td><td>hablan</td></tr></table>
<h3>Usually drop it</h3>
<div class="ex"><b>No duermo bien.</b><span>I do not sleep well.</span></div>
<div class="ex"><b>Tomo la medicina por la noche.</b><span>I take the medicine at night.</span></div>
<div class="ex"><b>Vivimos en un apartamento pequeño.</b><span>We live in a small apartment.</span></div>
<h3>Keep it for contrast or clarity</h3>
<p>Say the pronoun when you compare people, or when the verb alone could mean two people. <i>Habla</i> can be he, she or usted, so the pronoun clears it up.</p>
<div class="ex"><b>Yo estoy bien, pero ella no duerme.</b><span>I am fine, but she does not sleep.</span></div>
<div class="ex"><b>Él dice que ella no come.</b><span>He says that she is not eating.</span></div>
<div class="ex"><b>¿Y usted, cómo se siente?</b><span>And you, how do you feel?</span></div>
<h3>Usted and ustedes</h3>
<p>Use <b>usted</b> with one adult and <b>ustedes</b> with two or more. In Mexico and the US, <i>ustedes</i> is the only plural you, for friends too. <i>Vosotros</i> belongs to Spain, and you only need to recognise it.</p>
<div class="ex"><b>Ustedes pueden pasar a la sala.</b><span>You may come into the room. (to several people)</span></div>
<div class="ex"><b>¿Ellos viven con usted?</b><span>Do they live with you?</span></div>
<div class="ex"><b>¿Cómo está usted hoy?</b><span>How are you today?</span></div>
<div class="note">Clinical tip: with a relative who answers for the patient, use the pronoun to keep the voices apart: <i>¿Y él, qué dice?</i> Turn to the patient and use usted, so the patient is not talked about in the third person.</div>
<h3>Common mistakes</h3>
<p><s>Yo no duermo y yo no como y yo no salgo.</s> → <b>No duermo, no como y no salgo.</b> Repeating yo sounds like contrast or complaint.</p>
<p><s>¿Cómo está tú?</s> → <b>¿Cómo está usted?</b> The pronoun and the verb must match: está goes with usted, estás with tú.</p>
<p><s>¿Vosotros vivís aquí?</s> → <b>¿Ustedes viven aquí?</b> Vosotros is used in Spain, not in Mexico or the US.</p>`,
  quiz: [
    [`Why would a patient say "Yo estoy bien, pero ella no duerme"?`, [`To contrast herself with another woman`, `Because Spanish always needs yo`, `Because ella means "you"`, `Because it is a question`], 0, `Yo and ella are kept to contrast two people.`],
    [`Which word means "you" for several people in Mexico and the US?`, [`vosotros`, `tú`, `nosotros`, `ustedes`], 3, `Ustedes is the plural you in the Americas. Vosotros is Spain.`],
    [`Which fits "¿Cómo está ___?" to a new adult patient?`, [`tú`, `usted`, `ustedes`, `yo`], 1, `Está matches usted. Tú needs estás, and ustedes needs están.`],
    [`A woman says "Está muy triste." Who could be sad?`, [`Only the speaker`, `We`, `They`, `He, she, or usted`], 3, `Está can go with él, ella or usted, so a pronoun may be needed to clear it up.`],
    [`Which question has an error?`, [`¿Ustedes viven aquí?`, `¿Usted viven aquí?`, `¿Ustedes son familia?`, `¿Ustedes tienen hijos?`], 1, `Usted is singular and viven is plural. Use usted vive or ustedes viven.`],
    [`How do you say "She sleeps, but he does not"?`, [`Yo duermo, pero él no.`, `Ella duerme, pero él no.`, `Ella duermen, pero él no.`, `Ellas duerme, pero él no.`], 1, `Ella duerme matches one woman, and él no is the contrast.`],
    [`In "Él dice que ella no come", who is not eating?`, [`He`, `She`, `You`, `I`], 1, `Ella no come: she is not eating. Él is the one speaking.`]
  ],
  draft: true,
  after: 'articles-contractions'
  },
  {
  id: 'hay-estar', level: 'A1', unit: 'Foundations', title: `Hay or está: something exists, or something is somewhere`,
  summary: `Hay says that something exists or is present. Está and están say where a known thing is.`,
  body: `<p>Both words can be translated as "there is" or "is", but they answer different questions. <b>Hay</b> answers "is there any?" and <b>está / están</b> answers "where is it?". On a ward you use both: <i>¿Hay alguien en casa?</i> and <i>¿Dónde están sus pastillas?</i></p>
<table><tr><th>Hay (exists, is present)</th><th>Está / están (a known thing, location)</th></tr><tr><td>Hay una farmacia cerca.</td><td>La farmacia está en la esquina.</td></tr><tr><td>Hay dos camas libres.</td><td>Las camas están en el segundo piso.</td></tr><tr><td>¿Hay alguien en casa?</td><td>¿Dónde está su esposo?</td></tr></table>
<h3>Hay: new or unspecified things</h3>
<p><b>Hay</b> never changes: <i>hay un baño, hay dos baños</i>. It goes with a, an, some, any, a number or no article. It does not go with <i>mi, el, la</i> or a name.</p>
<div class="ex"><b>¿Hay alguien en casa con usted?</b><span>Is there anyone at home with you?</span></div>
<div class="ex"><b>En mi casa no hay nadie más.</b><span>There is no one else at my house.</span></div>
<div class="ex"><b>¿Hay niños en la casa?</b><span>Are there children in the house?</span></div>
<div class="ex"><b>Hay mucha gente en la sala de espera.</b><span>There are a lot of people in the waiting room.</span></div>
<div class="ex"><b>Hay un baño al final del pasillo.</b><span>There is a restroom at the end of the hallway.</span></div>
<h3>Está and están: a known thing</h3>
<p>Use <b>estar</b> when the thing is already known (the, my, his, a name) and you give its place.</p>
<div class="ex"><b>¿Dónde están mis pastillas?</b><span>Where are my pills?</span></div>
<div class="ex"><b>Mi hijo está en la escuela.</b><span>My son is at school.</span></div>
<div class="ex"><b>La farmacia está en la esquina.</b><span>The pharmacy is on the corner.</span></div>
<div class="ex"><b>Mi cita es a las diez, pero hoy hay muchos pacientes.</b><span>My appointment is at ten, but today there are many patients.</span></div>
<div class="note">Clinical tip: to find out who is around a patient, ask with hay: <i>¿Hay alguien en casa?</i> To find a person you already know about, ask with estar: <i>¿Dónde está su hija ahora?</i> A patient who answers <i>No hay nadie</i> is telling you about support, not only about the house.</div>
<h3>Common mistakes</h3>
<p><s>Hay mi hermana en la sala.</s> → <b>Mi hermana está en la sala.</b> A known person with mi takes estar, not hay.</p>
<p><s>Es una farmacia en la esquina.</s> → <b>Hay una farmacia en la esquina.</b> Use hay for "there is", not es.</p>
<p><s>Están dos camas libres.</s> → <b>Hay dos camas libres.</b> A number with no article means hay, and hay stays singular.</p>`,
  quiz: [
    [`Which completes "___ una farmacia cerca de aquí"?`, [`Está`, `Hay`, `Son`, `Están`], 1, `A new, unspecified thing with una takes hay.`],
    [`Which completes "La farmacia ___ en la esquina"?`, [`hay`, `es`, `está`, `están`], 2, `A known pharmacy and its location take está.`],
    [`How do you ask "Is there anyone at home with you?"`, [`¿Es alguien en casa con usted?`, `¿Hay alguien en casa con usted?`, `¿Tiene alguien en casa a usted?`, `¿Están alguien en casa?`], 1, `Hay alguien asks whether anyone exists there.`],
    [`Which sentence has an error?`, [`Mis pastillas están en la bolsa.`, `Hay muchas personas en la sala.`, `¿Dónde están las llaves?`, `Hay mi hermana afuera.`], 3, `Hay does not go with mi. Use Mi hermana está afuera.`],
    [`What does hay do in the plural, as in "Hay dos camas libres"?`, [`It becomes hayan`, `It becomes están`, `It stays hay`, `It becomes hays`], 2, `Hay never changes.`],
    [`A patient says "En mi casa no hay nadie más." What does it mean?`, [`I am not in my house.`, `Nobody knows my house.`, `My house has no name.`, `There is no one else at my house.`], 3, `No hay nadie más means no one else is there.`],
    [`Which question asks where a known place is?`, [`¿Dónde hay el baño?`, `¿Dónde es el baño?`, `¿Dónde hay baño?`, `¿Dónde está el baño?`], 3, `A known restroom (el baño) and its location take está.`]
  ],
  draft: true,
  after: 'ser-estar'
  },
  {
  id: 'possessives', level: 'A1', unit: 'Foundations', title: `Possessives: mi, tu, su and the problem with su`,
  summary: `Mi, tu, su and nuestro agree with the thing owned, and su can mean many owners, so clarify with de usted or de él.`,
  body: `<p>Families, pills and homes come up in every interview, so you need "my", "your" and "his" at once. The good news is that Spanish possessives match the thing owned, not the owner. The tricky part is <b>su</b>.</p>
<table><tr><th>Owner</th><th>One thing</th><th>Several things</th></tr><tr><td>my</td><td>mi hijo</td><td>mis hijos</td></tr><tr><td>your (tú)</td><td>tu hijo</td><td>tus hijos</td></tr><tr><td>your (usted), his, her, their</td><td>su hijo</td><td>sus hijos</td></tr><tr><td>our</td><td>nuestro hijo / nuestra hija</td><td>nuestros hijos / nuestras hijas</td></tr></table>
<p>Only <b>nuestro</b> has a feminine form. Mi, tu and su add <b>-s</b> for plural things.</p>
<h3>Everyday and clinical lines</h3>
<div class="ex"><b>¿Cuál es su dirección?</b><span>What is your address?</span></div>
<div class="ex"><b>Mi esposo no duerme bien.</b><span>My husband does not sleep well.</span></div>
<div class="ex"><b>¿Cómo están sus hijos?</b><span>How are your children?</span></div>
<div class="ex"><b>Mis dolores de cabeza empiezan en la tarde.</b><span>My headaches start in the afternoon.</span></div>
<div class="ex"><b>Nuestra casa es pequeña.</b><span>Our house is small.</span></div>
<div class="ex"><b>¿Tu mamá vive contigo?</b><span>Does your mom live with you? (to a child)</span></div>
<h3>The problem with su</h3>
<p><b>Su</b> can mean your (usted), his, her, their or your (ustedes). Usually the context is clear. When it is not, say who with <b>de + pronoun</b>: <i>de usted, de él, de ella, de ellos</i>.</p>
<div class="ex"><b>Sus pastillas están en la bolsa.</b><span>Your pills are in the bag. (or his, or hers)</span></div>
<div class="ex"><b>¿Son sus pastillas o las de su esposo?</b><span>Are they your pills or your husband's?</span></div>
<div class="ex"><b>¿Las llaves son de usted o de ella?</b><span>Are the keys yours or hers?</span></div>
<div class="ex"><b>¿Su familia sabe que viene hoy?</b><span>Does your family know you are coming today?</span></div>
<div class="note">Clinical tip: when a patient says <i>su hija</i> about a relative, check who is meant: <i>¿La hija de usted o de su hermana?</i> Wrong owner in the chart is a common error when family members share a household.</div>
<h3>Common mistakes</h3>
<p><s>Mi pastillas están en la bolsa.</s> → <b>Mis pastillas están en la bolsa.</b> The possessive matches the plural thing.</p>
<p><s>¿Cómo está tu hijo, señora Rivera?</s> → <b>¿Cómo está su hijo, señora Rivera?</b> Tu is for tú. With an adult you address as usted, use su.</p>
<p><s>Nuestro casa es pequeña.</s> → <b>Nuestra casa es pequeña.</b> Nuestro changes to match a feminine noun.</p>`,
  quiz: [
    [`Which completes "___ pastillas están en la bolsa" (my)?`, [`Mi`, `Mis`, `Me`, `Mío`], 1, `Pastillas is plural, so mis.`],
    [`Which fits "¿Cómo está ___ hijo, señora Rivera?"`, [`tu`, `su`, `mi`, `sus`], 1, `With usted use su. One son means su, not sus.`],
    [`What can "su casa" mean?`, [`Only "your house"`, `Only "his house"`, `Your (usted), his, her or their house`, `My house`], 2, `Su covers usted, él, ella, ustedes and ellos.`],
    [`How do you make clear that the pills belong to the husband?`, [`las pastillas de yo`, `las pastillas de tú`, `las pastillas de ellas`, `las pastillas de él`], 3, `De él names the owner clearly.`],
    [`Which sentence has an error?`, [`Nuestra casa es pequeña.`, `Nuestros hijos duermen.`, `Nuestro casa es pequeña.`, `Mis dolores empiezan de noche.`], 2, `Casa is feminine, so nuestra casa.`],
    [`You speak to a 10-year-old: "¿Cómo se llama ___ mamá?" Which fits?`, [`su`, `tu`, `mi`, `sus`], 1, `Children get tú, so the possessive is tu.`],
    [`What does "Mis dolores de cabeza empiezan en la tarde" mean?`, [`My headaches start in the afternoon.`, `Her headaches start in the evening.`, `My head hurts all night.`, `Your headaches start at noon.`], 0, `Mis is my, and en la tarde is in the afternoon.`]
  ],
  draft: true,
  after: 'subject-pronouns'
  },
  {
  id: 'demonstratives', level: 'A1', unit: 'Foundations', title: `This, that and that over there: este, ese, aquel`,
  summary: `Este points near me, ese near you, aquel far from both. Esto and eso stand alone for unknown things.`,
  body: `<p>You point and name all day: this pill, that bag, those thoughts. Spanish has three distances where English has two, and it adds neutral words for things you cannot name yet.</p>
<table><tr><th>Distance</th><th>Masc.</th><th>Fem.</th><th>Place</th></tr><tr><td>near me</td><td>este / estos</td><td>esta / estas</td><td>aquí</td></tr><tr><td>near you, or already mentioned</td><td>ese / esos</td><td>esa / esas</td><td>ahí</td></tr><tr><td>far from both</td><td>aquel / aquellos</td><td>aquella / aquellas</td><td>allí</td></tr></table>
<p>Demonstratives match the noun: <i>esta pastilla, estos síntomas</i>. The old accents (éste) are no longer needed.</p>
<h3>With a noun</h3>
<div class="ex"><b>Esta pastilla es nueva.</b><span>This pill is new.</span></div>
<div class="ex"><b>Este dolor empezó ayer.</b><span>This pain started yesterday.</span></div>
<div class="ex"><b>¿Desde cuándo tiene esos pensamientos?</b><span>Since when have you had those thoughts?</span></div>
<div class="ex"><b>¿Toma esa medicina de día o de noche?</b><span>Do you take that medicine in the day or at night?</span></div>
<div class="ex"><b>Aquel edificio es la farmacia.</b><span>That building over there is the pharmacy.</span></div>
<p><b>Ese</b> is the natural choice for something the other person just mentioned, such as <i>esos pensamientos</i>.</p>
<p>The three distances follow the speaker. If you hold a pill bottle, it is <i>esta botella</i>. If the patient holds it, you may say <i>esa botella</i>. If it is on a shelf across the room, it is <i>aquella botella</i>.</p>
<h3>Without a noun: esto, eso, aquello</h3>
<p>The neutral forms point at an idea or an object you cannot name. They never go before a noun and never change.</p>
<div class="ex"><b>¿Qué es esto?</b><span>What is this?</span></div>
<div class="ex"><b>Eso no me ayuda.</b><span>That does not help me.</span></div>
<div class="ex"><b>Esta es mi mamá.</b><span>This is my mom.</span></div>
<h3>Here, there, over there</h3>
<div class="ex"><b>Aquí tiene su cita.</b><span>Here is your appointment card.</span></div>
<div class="ex"><b>Ahí está el baño.</b><span>The restroom is right there.</span></div>
<div class="ex"><b>Estos días duermo mal.</b><span>These days I sleep badly.</span></div>
<div class="note">Clinical tip: when you want a patient to confirm an idea, repeat it with eso: <i>Eso que me dice, ¿le pasa seguido?</i> Use esto for what is happening now (<i>esto que siente</i>).</div>
<h3>Common mistakes</h3>
<p><s>Este pastilla es nueva.</s> → <b>Esta pastilla es nueva.</b> Pastilla is feminine, so esta.</p>
<p><s>Esto dolor empezó ayer.</s> → <b>Este dolor empezó ayer.</b> Esto never comes before a noun. Use este or esta.</p>
<p><s>Estas es mi mamá.</s> → <b>Esta es mi mamá.</b> One person, so singular esta.</p>`,
  quiz: [
    [`Which completes "___ pastilla es nueva" (this one, near me)?`, [`Este`, `Esta`, `Esto`, `Estas`], 1, `Pastilla is feminine singular: esta.`],
    [`Which completes "¿Qué es ___?" when you point at something you cannot name?`, [`este`, `esta`, `esos`, `esto`], 3, `Esto is the neutral word for an unnamed thing.`],
    [`What does "allí" show?`, [`Near me`, `Far from both of us`, `Near you only`, `In the clinic only`], 1, `Allí is over there, far from both.`],
    [`Which sentence has an error?`, [`Esa enfermera es nueva.`, `Este dolor empezó ayer.`, `Esto dolor empezó ayer.`, `Aquel edificio es la farmacia.`], 2, `Esto never goes before a noun. It should be este dolor.`],
    [`What does "Estos días duermo mal" mean?`, [`These days I sleep badly.`, `That day I slept badly.`, `Those nights I slept well.`, `Every day I sleep well.`], 0, `Estos días is these days, meaning lately.`],
    [`Which agrees correctly: "those thoughts"?`, [`esas pensamientos`, `ese pensamientos`, `eso pensamientos`, `esos pensamientos`], 3, `Pensamientos is masculine plural, so esos.`],
    [`What are you doing when you say "Aquí tiene su cita"?`, [`Asking where the card is`, `Refusing an appointment`, `Handing the patient the appointment card`, `Asking for the card back`], 2, `Aquí tiene means here you are, said when you hand something over.`]
  ],
  draft: true,
  after: 'possessives'
  },
  {
  id: 'basic-prepositions', level: 'A1', unit: 'Foundations', title: `Little words that link: a, de, en, con, sin`,
  summary: `A, de, en, con and sin join words, and the personal a marks a person who receives the action.`,
  body: `<p>Prepositions rarely match one-to-one with English, so learn them inside whole phrases. These five cover most of what you say about places, company and belonging.</p>
<table><tr><th>Word</th><th>Main uses</th><th>Example</th></tr><tr><td>a</td><td>to, at (time), personal a</td><td>Voy a la clínica.</td></tr><tr><td>de</td><td>of, from, belonging</td><td>Soy de Michoacán.</td></tr><tr><td>en</td><td>in, on, at (place)</td><td>Vivo en Texas.</td></tr><tr><td>con</td><td>with</td><td>Vivo con mi hermana.</td></tr><tr><td>sin</td><td>without</td><td>Duermo sin pastillas.</td></tr></table>
<h3>Places, origin and company</h3>
<div class="ex"><b>Voy a la clínica los martes.</b><span>I go to the clinic on Tuesdays.</span></div>
<div class="ex"><b>Soy de Michoacán.</b><span>I am from Michoacán.</span></div>
<div class="ex"><b>Vivo en un apartamento con mi hermana.</b><span>I live in an apartment with my sister.</span></div>
<div class="ex"><b>Mi dolor está en el estómago.</b><span>My pain is in my stomach.</span></div>
<div class="ex"><b>¿Toma café con leche?</b><span>Do you drink coffee with milk?</span></div>
<div class="ex"><b>¿Puedo hablar con su mamá?</b><span>May I speak with your mother?</span></div>
<p>Remember that <b>en</b> is "in" or "on" for a place, and <b>a</b> is "to" for a movement. <i>Estoy en la clínica</i> and <i>Voy a la clínica</i> use different words in Spanish for what feels like one idea in English.</p>
<h3>Without</h3>
<div class="ex"><b>Duermo sin pastillas.</b><span>I sleep without pills.</span></div>
<div class="ex"><b>Me siento sin energía.</b><span>I feel without energy.</span></div>
<h3>The personal a</h3>
<p>When the object of the verb is a specific person, put <b>a</b> before it. It has no English translation. It also goes before pets and before <i>alguien, nadie</i>. Do not use it with things, and do not use it with <i>tener</i>.</p>
<div class="ex"><b>Veo a mi hijo los domingos.</b><span>I see my son on Sundays.</span></div>
<div class="ex"><b>Llamo a mi mamá todos los días.</b><span>I call my mom every day.</span></div>
<div class="ex"><b>No conozco a nadie aquí.</b><span>I do not know anyone here.</span></div>
<div class="ex"><b>Tengo dos hijos.</b><span>I have two children.</span></div>
<p>With <b>a + el</b> remember <i>al</i>: <i>Veo al doctor</i>.</p>
<div class="note">Clinical tip: <b>sin</b> is useful for symptoms: <i>sin ganas, sin energía, sin apetito, sin dormir</i>. Ask <i>¿Hay días en que se queda sin comer?</i> when a patient says <i>no tengo hambre</i> to learn how often.</div>
<h3>Common mistakes</h3>
<p><s>Veo mi hijo los domingos.</s> → <b>Veo a mi hijo los domingos.</b> A person who receives the action needs the personal a.</p>
<p><s>Tengo a dos hijos.</s> → <b>Tengo dos hijos.</b> Tener does not take the personal a.</p>
<p><s>Voy en la clínica.</s> → <b>Voy a la clínica.</b> Use a for movement toward a place, and en for being in it.</p>`,
  quiz: [
    [`Which word completes "Veo ___ mi hijo los domingos"?`, [`a`, `en`, `de`, `con`], 0, `A specific person who receives the action takes the personal a.`],
    [`Which completes "Tengo ___ dos hijos"?`, [`a`, `de`, `en`, `no extra word`], 3, `Tener does not take the personal a.`],
    [`How do you say "I live with my sister"?`, [`Vivo en mi hermana.`, `Vivo con mi hermana.`, `Vivo sin mi hermana.`, `Vivo de mi hermana.`], 1, `Con means with.`],
    [`What does "Duermo sin pastillas" mean?`, [`I sleep with pills.`, `I sleep because of pills.`, `I sleep on pills.`, `I sleep without pills.`], 3, `Sin means without.`],
    [`Which sentence has an error?`, [`Voy a la clínica los martes.`, `Soy de Michoacán.`, `Voy en la clínica los martes.`, `Vivo en Texas.`], 2, `Use a for going to a place: voy a la clínica.`],
    [`Which word completes "Vivo ___ Texas"?`, [`a`, `de`, `con`, `en`], 3, `En says where someone lives or is.`],
    [`Why does "Llamo a mi mamá" have an a?`, [`Because mamá is a person who receives the action`, `Because mamá is a place`, `Because it is about time`, `Because mi is feminine`], 0, `The personal a marks a specific person as the object.`]
  ],
  draft: true,
  after: 'demonstratives'
  },
  {
  id: 'muy-mucho', level: 'A1', unit: 'Foundations', title: `Muy, mucho, poco: how much or how very`,
  summary: `Use muy before an adjective, and mucho or poco before a noun or after a verb. Mucho and poco match the noun.`,
  body: `<p>Patients say how much they hurt, sleep or worry, and these small words carry the weight. English "very" and "a lot" are two words in Spanish, and mixing them is the commonest mistake of English speakers.</p>
<table><tr><th>Word</th><th>Goes with</th><th>Example</th></tr><tr><td>muy</td><td>adjective or adverb, never changes</td><td>muy cansado, muy mal</td></tr><tr><td>mucho, mucha, muchos, muchas</td><td>a noun, matches it</td><td>mucho dolor, muchas preocupaciones</td></tr><tr><td>mucho</td><td>after a verb, never changes</td><td>Me duele mucho.</td></tr><tr><td>poco, poca, pocos, pocas</td><td>a noun, matches it</td><td>poca energía</td></tr><tr><td>bastante</td><td>enough, fairly</td><td>bastante agua</td></tr><tr><td>demasiado</td><td>too much, too</td><td>demasiado café</td></tr></table>
<h3>Very</h3>
<div class="ex"><b>Estoy muy cansado.</b><span>I am very tired.</span></div>
<div class="ex"><b>Duermo muy poco.</b><span>I sleep very little.</span></div>
<div class="ex"><b>Está demasiado nervioso para dormir.</b><span>He is too nervous to sleep.</span></div>
<h3>A lot of</h3>
<div class="ex"><b>Tengo mucho dolor.</b><span>I have a lot of pain.</span></div>
<div class="ex"><b>Tengo muchas preocupaciones.</b><span>I have a lot of worries.</span></div>
<div class="ex"><b>Tengo muy poca energía.</b><span>I have very little energy.</span></div>
<div class="ex"><b>No tengo mucho apetito.</b><span>I do not have much appetite.</span></div>
<h3>Poco and un poco</h3>
<p><b>Poco</b> means "not much" and sounds negative. <b>Un poco</b> means "a little" and sounds mild. <i>Tengo poco apetito</i> says the appetite is low. <i>Como un poco</i> says I eat a little. Patients with low mood often choose <i>poco</i>, so listen for which one they use.</p>
<p><b>Bastante</b> and <b>demasiado</b> also change with a noun: <i>bastantes pastillas, demasiadas horas</i>. Before an adjective or after a verb they do not change: <i>demasiado triste, trabaja demasiado</i>.</p>
<h3>With a verb</h3>
<p>After a verb, <b>mucho</b> means "a lot" and does not change: <i>Mi mamá llora mucho.</i> To soften or measure, use <b>poco, bastante, demasiado</b>.</p>
<div class="ex"><b>Me duele mucho.</b><span>It hurts a lot.</span></div>
<div class="ex"><b>Bebo demasiado café.</b><span>I drink too much coffee.</span></div>
<div class="ex"><b>¿Toma bastante agua?</b><span>Do you drink enough water?</span></div>
<div class="note">Clinical tip: these words are not numbers. <i>Poco</i> or <i>mucho</i> means different things to different patients, so follow with a number: <i>¿Cuántas horas?</i> <i>¿Cuántas veces al día?</i></div>
<h3>Common mistakes</h3>
<p><s>Estoy mucho cansado.</s> → <b>Estoy muy cansado.</b> Use muy before an adjective.</p>
<p><s>Tengo muy dolor.</s> → <b>Tengo mucho dolor.</b> Use mucho before a noun.</p>
<p><s>Tengo mucha preocupaciones.</s> → <b>Tengo muchas preocupaciones.</b> Mucho agrees with the noun, here feminine plural.</p>`,
  quiz: [
    [`Which completes "Estoy ___ cansado"?`, [`mucho`, `muy`, `mucha`, `muchos`], 1, `Before an adjective, use muy.`],
    [`Which completes "Tengo ___ dolor"?`, [`muy`, `mucha`, `mucho`, `muchos`], 2, `Dolor is a masculine singular noun, so mucho.`],
    [`Which completes "Tengo ___ preocupaciones"?`, [`mucho`, `muchas`, `mucha`, `muy`], 1, `Preocupaciones is feminine plural, so muchas.`],
    [`What does "Duermo muy poco" mean?`, [`I sleep a lot.`, `I sleep too much.`, `I sleep well.`, `I sleep very little.`], 3, `Muy poco is very little.`],
    [`What does "Bebo demasiado café" say?`, [`I drink not enough coffee.`, `I drink too much coffee.`, `I drink very good coffee.`, `I never drink coffee.`], 1, `Demasiado means too much.`],
    [`Which sentence has an error?`, [`Me duele mucho.`, `Estoy mucho nervioso.`, `Mi mamá llora mucho.`, `No tengo mucho apetito.`], 1, `Before an adjective use muy: estoy muy nervioso.`],
    [`Which says "I have little energy"?`, [`Tengo poca energía.`, `Tengo poco energía.`, `Tengo pocas energía.`, `Tengo poca energías.`], 0, `Energía is feminine singular, so poca.`]
  ],
  draft: true,
  after: 'basic-prepositions'
  },
  {
  id: 'tener-expressions', level: 'A1', unit: 'First verbs', title: `Tener: hunger, sleep, fear, age and pain`,
  summary: `Spanish says "have" where English says "be": tengo hambre, tengo sueño, tengo miedo, tengo treinta años.`,
  body: `<p>In English you are hungry, sleepy, afraid and thirty years old. In Spanish you <b>have</b> these things, with <b>tener</b>. This single verb gives you most of the body and mood vocabulary of a first interview.</p>
<table><tr><th>Person</th><th>Tener</th></tr><tr><td>yo</td><td>tengo</td></tr><tr><td>tú</td><td>tienes</td></tr><tr><td>usted, él, ella</td><td>tiene</td></tr><tr><td>nosotros</td><td>tenemos</td></tr><tr><td>ustedes, ellos, ellas</td><td>tienen</td></tr></table>
<h3>Common expressions</h3>
<ul><li><b>tener hambre, sed, sueño, frío, calor, miedo, prisa, vergüenza</b>: be hungry, thirsty, sleepy, cold, hot, afraid, in a hurry, ashamed.</li><li><b>tener ... años</b>: to be ... years old.</li><li><b>tener ganas de + infinitive</b>: to feel like doing something.</li><li><b>tener dolor de + noun</b>: to have pain in or a ... ache.</li></ul>
<p>Use <b>mucho</b>, not muy, with these nouns: <i>mucho sueño, mucha sed</i>. Other useful ones are <i>tener fiebre</i> (a fever), <i>tener náuseas</i> (nausea) and <i>tener razón</i> (to be right). In every case the thing is a noun that you have, so a woman and a man both say <i>tengo hambre</i>.</p>
<div class="ex"><b>Tengo mucho sueño en el día.</b><span>I am very sleepy during the day.</span></div>
<div class="ex"><b>¿Tiene miedo de algo o de alguien?</b><span>Are you afraid of something or someone?</span></div>
<div class="ex"><b>No tengo hambre.</b><span>I am not hungry.</span></div>
<div class="ex"><b>Tengo dolor de cabeza casi todos los días.</b><span>I have a headache almost every day.</span></div>
<div class="ex"><b>No tengo ganas de salir.</b><span>I do not feel like going out.</span></div>
<div class="ex"><b>Tengo ganas de llorar todo el día.</b><span>I feel like crying all day.</span></div>
<div class="ex"><b>¿Cuántos años tiene su hija?</b><span>How old is your daughter?</span></div>
<div class="ex"><b>Tiene quince años.</b><span>She is fifteen years old.</span></div>
<div class="ex"><b>Tengo frío y tengo mucha sed.</b><span>I am cold and very thirsty.</span></div>
<div class="ex"><b>Mi hijo tiene vergüenza de hablar.</b><span>My son is ashamed to speak.</span></div>
<div class="note">Clinical tip: <i>No tengo ganas de nada</i> is a key phrase for loss of interest. <i>Tengo miedo</i> is a state at the moment, while <i>tengo muchos miedos</i> points to a pattern. Ask <i>¿De qué tiene miedo?</i> to get the content of the fear.</div>
<h3>Common mistakes</h3>
<p><s>Estoy hambre.</s> → <b>Tengo hambre.</b> Hunger is something you have.</p>
<p><s>Soy treinta años.</s> → <b>Tengo treinta años.</b> Age uses tener, never ser.</p>
<p><s>Tengo muy sueño.</s> → <b>Tengo mucho sueño.</b> Sueño is a noun, so mucho, not muy.</p>`,
  quiz: [
    [`How do you say "I am hungry"?`, [`Soy hambre.`, `Estoy hambre.`, `Tengo hambre.`, `Tengo hambriento.`], 2, `Hunger takes tener: tengo hambre.`],
    [`Which completes "¿Cuántos años ___ su hija?"`, [`es`, `está`, `hay`, `tiene`], 3, `Age uses tener: tiene.`],
    [`What does "No tengo ganas de salir" mean?`, [`I do not feel like going out.`, `I cannot go out.`, `I am not allowed out.`, `I have no keys.`], 0, `Tener ganas de means to feel like doing something.`],
    [`Which sentence has an error?`, [`Tengo mucho sueño.`, `Tengo frío.`, `Tengo dolor de cabeza.`, `Estoy treinta años.`], 3, `Age takes tener: tengo treinta años.`],
    [`How do you say "She has a stomachache"?`, [`Es dolor de estómago.`, `Está dolor del estómago.`, `Tiene dolor de estómago.`, `Hay dolor estómago.`], 2, `Pain uses tener dolor de + noun.`],
    [`Which question asks about fear?`, [`¿Es miedo de algo?`, `¿Hace miedo de algo?`, `¿Está miedo?`, `¿Tiene miedo de algo?`], 3, `Miedo takes tener.`],
    [`Which corrects "Tengo muy sueño"?`, [`Tengo mucho sueño.`, `Tengo muy sueña.`, `Estoy mucho sueño.`, `Soy muy sueño.`], 0, `Sueño is a noun and needs mucho, not muy.`]
  ],
  draft: true,
  after: 'negation'
  },
  {
  id: 'ir-a-future', level: 'A1', unit: 'First verbs', title: `Saying what will happen: ir a + infinitive`,
  summary: `Voy a + infinitive is the easy future: voy a hablar, va a tardar, vamos a empezar.`,
  body: `<p>You explain plans all day: what will happen in the visit, when the medicine will work, who will come next. Spanish has an easy way to do this, much like English "going to". It needs only the verb <b>ir</b> (to go), the little word <b>a</b>, and an infinitive.</p>
<table><tr><th>Person</th><th>Ir</th><th>Example</th></tr><tr><td>yo</td><td>voy</td><td>Voy a explicarle el plan.</td></tr><tr><td>tú</td><td>vas</td><td>¿Vas a venir mañana?</td></tr><tr><td>usted, él, ella</td><td>va</td><td>Va a sentirse mejor.</td></tr><tr><td>nosotros</td><td>vamos</td><td>Vamos a empezar.</td></tr><tr><td>ustedes, ellos</td><td>van</td><td>¿Van a venir sus hijos?</td></tr></table>
<p>Pattern: <b>ir + a + infinitive</b>. Only <i>ir</i> changes. The infinitive stays the same.</p>
<div class="ex"><b>Voy a explicarle el plan.</b><span>I am going to explain the plan to you.</span></div>
<div class="ex"><b>Voy a hacerle una pregunta personal.</b><span>I am going to ask you a personal question.</span></div>
<div class="ex"><b>Vamos a hablar con su familia, si usted quiere.</b><span>We will talk with your family, if you want.</span></div>
<div class="ex"><b>¿Qué va a hacer después de salir del hospital?</b><span>What are you going to do after leaving the hospital?</span></div>
<div class="ex"><b>Va a tardar unas semanas en hacer efecto.</b><span>It will take a few weeks to work.</span></div>
<h3>Everyday plans</h3>
<div class="ex"><b>Mi hija va a venir el jueves.</b><span>My daughter is going to come on Thursday.</span></div>
<div class="ex"><b>Voy a tomar la medicina por la noche.</b><span>I am going to take the medicine at night.</span></div>
<div class="ex"><b>¿Va a venir a su próxima cita?</b><span>Are you going to come to your next appointment?</span></div>
<div class="ex"><b>Esta noche vamos a cenar en casa de mi mamá.</b><span>Tonight we are going to have dinner at my mom's house.</span></div>
<h3>No and questions</h3>
<p>Put <b>no</b> before <i>ir</i>: <i>No voy a trabajar mañana.</i> Questions work as usual: <i>¿Va a venir?</i></p>
<div class="note">Clinical tip: <i>vamos a</i> is both "we are going to" and an invitation to do something together. It is warm and works for starting a task: <i>Vamos a ver cómo se siente hoy.</i> Say <i>va a tardar</i> to set honest expectations about how long a medicine takes to work.</div>
<h3>Common mistakes</h3>
<p><s>Voy tomar la medicina.</s> → <b>Voy a tomar la medicina.</b> Do not drop the a.</p>
<p><s>Mi hijo va a viene mañana.</s> → <b>Mi hijo va a venir mañana.</b> After ir a, use the infinitive.</p>
<p><s>Voy a no tomar la medicina.</s> → <b>No voy a tomar la medicina.</b> The no goes before voy.</p>`,
  quiz: [
    [`Which completes "Mañana ___ a hablar con su familia" (we)?`, [`voy`, `vamos`, `van`, `va`], 1, `Nosotros goes with vamos.`],
    [`What does "Voy a tomar la medicina" mean?`, [`I took the medicine.`, `I want the medicine.`, `I must take the medicine.`, `I am going to take the medicine.`], 3, `Ir a + infinitive is the near future.`],
    [`How do you say "I am not going to take the medicine"?`, [`Voy a no tomar la medicina.`, `No voy a tomar la medicina.`, `Voy no a tomar la medicina.`, `No a voy tomar la medicina.`], 1, `No goes before the form of ir.`],
    [`Which sentence has an error?`, [`Mi hija va a venir el jueves.`, `¿Va a venir a su cita?`, `Vamos a empezar.`, `Voy tomar la medicina.`], 3, `The a is required: voy a tomar.`],
    [`Which completes "¿Qué ___ a hacer después del alta?" (usted)?`, [`vas`, `voy`, `va`, `van`], 2, `Usted takes va.`],
    [`What does "Va a tardar unas semanas en hacer efecto" tell the patient?`, [`It worked weeks ago.`, `It will take a few weeks to work.`, `It does not work.`, `It works in one day.`], 1, `Va a tardar means it will take time.`],
    [`What does "¿Van a venir sus hijos?" ask?`, [`Did your children come?`, `Where are your children?`, `Are your children coming?`, `Do your children live here?`], 2, `Van a venir is the near future: are they coming.`]
  ],
  draft: true,
  after: 'tener-expressions'
  },
  {
  id: 'stem-changing', level: 'A1', unit: 'First verbs', title: `Stem-changing verbs: duermo, quiero, pido`,
  summary: `In the present, the stem vowel changes (e to ie, o to ue, e to i) except for nosotros.`,
  body: `<p>Some of the verbs you need most, like <i>dormir, querer, poder, sentir</i> and <i>pedir</i>, change the vowel in the stem. They are everywhere in a psychiatric interview because they cover sleep, wants, abilities and feelings.</p>
<table><tr><th>Change</th><th>Verb</th><th>yo</th><th>usted</th><th>nosotros</th></tr><tr><td>e → ie</td><td>querer</td><td>quiero</td><td>quiere</td><td>queremos</td></tr><tr><td>o → ue</td><td>dormir</td><td>duermo</td><td>duerme</td><td>dormimos</td></tr><tr><td>e → i</td><td>pedir</td><td>pido</td><td>pide</td><td>pedimos</td></tr></table>
<p>Picture a boot: the vowel changes in <b>yo, tú, usted/él/ella, ustedes/ellos</b>. It stays regular in <b>nosotros</b>.</p>
<ul><li><b>e → ie</b>: querer, pensar, empezar, sentir, preferir, entender.</li><li><b>o → ue</b>: poder, dormir, recordar, volver, encontrar.</li><li><b>e → i</b>: pedir, repetir, seguir.</li></ul>
<p>When you look up a verb, the dictionary shows the change in brackets, for example <i>dormir (ue)</i>. That tells you the yo form is <i>duermo</i>. Learn the verb with its yo form and you will not forget the change.</p>
<h3>On the ward</h3>
<div class="ex"><b>No duermo bien desde hace dos semanas.</b><span>I have not slept well for two weeks.</span></div>
<div class="ex"><b>Siento mucha tristeza por las mañanas.</b><span>I feel a lot of sadness in the mornings.</span></div>
<div class="ex"><b>¿Recuerda cómo se llama su medicina?</b><span>Do you remember what your medicine is called?</span></div>
<div class="ex"><b>¿Entiende lo que le explico?</b><span>Do you understand what I am explaining?</span></div>
<div class="ex"><b>¿Puede repetir, por favor?</b><span>Can you repeat that, please?</span></div>
<div class="ex"><b>Pienso mucho en mi hijo.</b><span>I think about my son a lot.</span></div>
<h3>Everyday</h3>
<div class="ex"><b>¿Prefiere hablar en español o en inglés?</b><span>Do you prefer to speak in Spanish or English?</span></div>
<div class="ex"><b>La cita empieza a las nueve.</b><span>The appointment starts at nine.</span></div>
<div class="ex"><b>Mis hijos piden pizza los viernes.</b><span>My children ask for pizza on Fridays.</span></div>
<div class="ex"><b>Vuelvo a la clínica el lunes.</b><span>I come back to the clinic on Monday.</span></div>
<div class="note">Clinical tip: <i>Sentir</i> is also a stem changer, and <i>sentirse</i> asks about the state: <i>¿Cómo se siente?</i> A patient who says <i>no recuerdo</i> may mean "I do not remember" or "I cannot recall right now". Ask <i>¿Le cuesta recordar cosas recientes?</i> to find out which.</div>
<h3>Common mistakes</h3>
<p><s>Yo dormo poco.</s> → <b>Yo duermo poco.</b> The o becomes ue in the yo form.</p>
<p><s>Nosotros puedemos ir.</s> → <b>Nosotros podemos ir.</b> Nosotros keeps the regular stem.</p>
<p><s>Prefero el español.</s> → <b>Prefiero el español.</b> The e becomes ie in the yo form.</p>`,
  quiz: [
    [`Which is right for "I sleep badly at night"?`, [`Yo dormo mal.`, `Yo duermi mal.`, `Yo duermo mal.`, `Yo dermo mal.`], 2, `Dormir changes o to ue in the yo form.`],
    [`Which is right for "We sleep in the same room"?`, [`Dormimos`, `Duermimos`, `Duermemos`, `Duermen`], 0, `Nosotros keeps the regular stem: dormimos.`],
    [`How do you ask a patient (usted) "Can you repeat that?"`, [`¿Puedes repetir?`, `¿Pode repetir?`, `¿Puede repetir?`, `¿Podemos repetir?`], 2, `Usted takes puede.`],
    [`Which form does NOT change its stem?`, [`pienso`, `piensa`, `piensan`, `pensamos`], 3, `Nosotros keeps the regular stem: pensamos.`],
    [`Which sentence has an error?`, [`Prefiero el español.`, `Pienso en mi hijo.`, `Nosotros puedemos ir.`, `¿Entiende?`], 2, `The nosotros form is podemos.`],
    [`What does "Siento mucha tristeza por las mañanas" mean?`, [`I feel a lot of sadness in the mornings.`, `I feel sadness every night.`, `I have no feelings in the mornings.`, `I sent a lot of sadness.`], 0, `Siento is the yo form of sentir.`],
    [`Which is right for "they ask for" (pedir)?`, [`piden`, `pedan`, `pieden`, `pedien`], 0, `Pedir changes e to i: piden.`]
  ],
  draft: true,
  after: 'ir-a-future'
  },
  {
  id: 'irregular-yo', level: 'A1', unit: 'First verbs', title: `Irregular yo forms: tengo, hago, salgo, oigo, sé`,
  summary: `Some common verbs have an irregular yo form in the present, and the rest of the verb is regular.`,
  body: `<p>When patients talk about themselves, they use the <b>yo</b> form all the time: <i>tengo, hago, salgo, oigo, veo, sé</i>. A number of very common verbs have an odd yo form, and you should know them by heart.</p>
<table><tr><th>Infinitive</th><th>Yo</th><th>Meaning</th></tr><tr><td>tener</td><td>tengo</td><td>I have</td></tr><tr><td>venir</td><td>vengo</td><td>I come</td></tr><tr><td>hacer</td><td>hago</td><td>I do, I make</td></tr><tr><td>poner</td><td>pongo</td><td>I put</td></tr><tr><td>salir</td><td>salgo</td><td>I go out</td></tr><tr><td>traer</td><td>traigo</td><td>I bring</td></tr><tr><td>decir</td><td>digo</td><td>I say</td></tr><tr><td>oír</td><td>oigo</td><td>I hear</td></tr><tr><td>ver</td><td>veo</td><td>I see</td></tr><tr><td>saber</td><td>sé</td><td>I know (a fact)</td></tr><tr><td>conocer</td><td>conozco</td><td>I know (a person or place)</td></tr><tr><td>dar</td><td>doy</td><td>I give</td></tr><tr><td>estar, ir, ser</td><td>estoy, voy, soy</td><td>I am, I go, I am</td></tr></table>
<p>Only the yo form is odd. The other forms follow the pattern: <i>tú haces, usted hace, nosotros hacemos</i>.</p>
<h3>Clinical lines</h3>
<div class="ex"><b>Oigo voces cuando estoy solo.</b><span>I hear voices when I am alone.</span></div>
<div class="ex"><b>No veo bien sin mis lentes.</b><span>I do not see well without my glasses.</span></div>
<div class="ex"><b>No sé qué me pasa.</b><span>I do not know what is wrong with me.</span></div>
<div class="ex"><b>Hago ejercicio dos veces por semana.</b><span>I exercise twice a week.</span></div>
<div class="ex"><b>Salgo de la casa solo para ir a la clínica.</b><span>I leave the house only to go to the clinic.</span></div>
<div class="ex"><b>Traigo mis medicinas en una bolsa.</b><span>I bring my medicines in a bag.</span></div>
<h3>Everyday lines</h3>
<div class="ex"><b>Pongo la alarma a las seis.</b><span>I set the alarm for six.</span></div>
<div class="ex"><b>No conozco a nadie aquí.</b><span>I do not know anyone here.</span></div>
<div class="ex"><b>Vengo a mi cita de las diez.</b><span>I am coming to my ten o'clock appointment.</span></div>
<div class="ex"><b>Le doy las gracias por su ayuda.</b><span>I thank you for your help.</span></div>
<div class="note">Clinical tip: <b>oír</b> and <b>ver</b> are the verbs for hallucinations. Ask in the usted form and keep it open: <i>¿Oye cosas que otras personas no oyen?</i> and <i>¿Ve cosas que otras personas no ven?</i> Note that <i>saber</i> is for facts and <i>conocer</i> is for people: <i>No sé su nombre</i>, <i>No lo conozco</i>.</div>
<h3>Common mistakes</h3>
<p><s>Yo sabo qué pasa.</s> → <b>Yo sé qué pasa.</b> Saber has the odd form sé.</p>
<p><s>Yo oyo voces.</s> → <b>Yo oigo voces.</b> Oír takes oigo.</p>
<p><s>Yo hacio ejercicio.</s> → <b>Yo hago ejercicio.</b> Hacer has hago.</p>`,
  quiz: [
    [`Which completes "Yo ___ ejercicio dos veces por semana" (hacer)?`, [`hago`, `hazo`, `hacio`, `hace`], 0, `Hacer has the irregular form hago.`],
    [`How do you say "I do not know"?`, [`No sabo.`, `No sé.`, `No sabe.`, `No sepo.`], 1, `Saber has the irregular form sé.`],
    [`Which is right for "I hear voices"?`, [`Oyo voces.`, `Oo voces.`, `Oigo voces.`, `Oye voces.`], 2, `Oír has the yo form oigo.`],
    [`Which is right for "I say"?`, [`dico`, `dizo`, `deco`, `digo`], 3, `Decir has the yo form digo.`],
    [`Which sentence has an error?`, [`Salgo a las ocho.`, `Pongo la alarma.`, `Yo tengo cuarenta años.`, `Yo hacio ejercicio.`], 3, `Hacer has the yo form hago.`],
    [`What does "No conozco a nadie aquí" mean?`, [`I do not know anyone here.`, `I do not know the answer.`, `Nobody is here.`, `I do not want to meet anyone.`], 0, `Conocer is for knowing people.`],
    [`What does "Le doy las gracias" mean?`, [`You thank me.`, `I thank you.`, `I give you a gift.`, `I give you pills.`], 1, `Dar las gracias means to thank.`]
  ],
  draft: true,
  after: 'stem-changing'
  },
  {
  id: 'querer-poder-necesitar', level: 'A1', unit: 'First verbs', title: `Wanting, being able, needing: querer, poder, necesitar`,
  summary: `Put the infinitive right after quiero, puedo, necesito, debo or prefiero, with no extra word.`,
  body: `<p>Wants, abilities and needs are the heart of the interview: <i>No puedo dormir. Necesito ayuda. No quiero estar solo.</i> These verbs share an easy rule. Conjugate the first verb and leave the second one in the infinitive.</p>
<table><tr><th>Verb</th><th>yo</th><th>usted</th><th>Meaning</th></tr><tr><td>querer</td><td>quiero</td><td>quiere</td><td>want</td></tr><tr><td>poder</td><td>puedo</td><td>puede</td><td>can, be able</td></tr><tr><td>necesitar</td><td>necesito</td><td>necesita</td><td>need</td></tr><tr><td>deber</td><td>debo</td><td>debe</td><td>should, must</td></tr><tr><td>preferir</td><td>prefiero</td><td>prefiere</td><td>prefer</td></tr></table>
<p>Querer, poder and preferir change their stem (see the lesson on stem-changing verbs). No <b>a</b>, <b>de</b> or <b>que</b> goes between the two verbs.</p>
<h3>In the interview</h3>
<div class="ex"><b>¿Quiere hablar de eso hoy?</b><span>Do you want to talk about that today?</span></div>
<div class="ex"><b>No puedo concentrarme.</b><span>I cannot concentrate.</span></div>
<div class="ex"><b>No puedo salir de la cama por las mañanas.</b><span>I cannot get out of bed in the mornings.</span></div>
<div class="ex"><b>No quiero estar solo.</b><span>I do not want to be alone.</span></div>
<div class="ex"><b>Necesito dormir mejor.</b><span>I need to sleep better.</span></div>
<div class="ex"><b>Prefiero hablar solo con la doctora.</b><span>I prefer to speak only with the doctor.</span></div>
<div class="ex"><b>Debo tomar la pastilla con comida.</b><span>I should take the pill with food.</span></div>
<p>To say you do not want or cannot, put <b>no</b> before the first verb: <i>No quiero comer, no puedo dormir.</i> To ask what a patient wants, use <i>¿Qué quiere?</i> or <i>¿Qué necesita?</i> Both are plain and respectful with usted.</p>
<h3>Polite requests</h3>
<p>To ask a patient to do something, use <b>¿Puede + infinitive?</b> It is polite and clear.</p>
<div class="ex"><b>¿Puede decirme su nombre completo?</b><span>Can you tell me your full name?</span></div>
<div class="ex"><b>¿Puede esperar aquí un momento, por favor?</b><span>Can you wait here a moment, please?</span></div>
<div class="ex"><b>¿Necesita descansar un momento?</b><span>Do you need to rest for a moment?</span></div>
<div class="note">Clinical tip: <i>No puedo</i> and <i>no quiero</i> are different symptoms. <i>No puedo dormir</i> is an ability problem, and <i>no quiero levantarme</i> is about will or mood. When a patient says one, ask about the other: <i>¿No puede o no quiere?</i> asks it gently if you say it slowly and with warmth.</div>
<h3>Common mistakes</h3>
<p><s>Quiero a hablar con usted.</s> → <b>Quiero hablar con usted.</b> No a after querer.</p>
<p><s>Necesito de dormir.</s> → <b>Necesito dormir.</b> No de after necesitar.</p>
<p><s>Puedo hablo.</s> → <b>Puedo hablar.</b> The second verb stays in the infinitive.</p>`,
  quiz: [
    [`Which completes "Necesito ___ mejor" (dormir)?`, [`a dormir`, `de dormir`, `dormir`, `que dormir`], 2, `No extra word is needed: necesito dormir.`],
    [`How do you say "I cannot concentrate"?`, [`No puedo concentrarme.`, `No quiero concentrarme.`, `No necesito concentrarme.`, `No debo concentrarme.`], 0, `Poder is the verb for ability.`],
    [`Which completes "¿Puede ___ su nombre completo?" (decir)?`, [`dice`, `decir`, `digo`, `diciendo`], 1, `After puede, use the infinitive.`],
    [`Which sentence has an error?`, [`Quiero hablar.`, `Prefiero esperar.`, `Necesito de descansar.`, `Debo tomar la pastilla.`], 2, `Necesitar takes an infinitive with no de.`],
    [`What does "Prefiero hablar solo con la doctora" mean?`, [`I want the doctor to leave.`, `I prefer to speak only with the doctor.`, `I do not like the doctor.`, `I cannot speak with the doctor.`], 1, `Prefiero + infinitive: I prefer to.`],
    [`Which is the most natural polite request to a patient?`, [`Quiero esperar aquí.`, `Necesito que espero.`, `¿Puede esperar aquí un momento, por favor?`, `Debo esperar.`], 2, `¿Puede + infinitive? is the polite request form.`],
    [`What does "No quiero estar solo" mean?`, [`I do not want to be alone.`, `I cannot be alone.`, `I do not need anyone.`, `I am not alone.`], 0, `Querer is want, so no quiero is I do not want.`]
  ],
  draft: true,
  after: 'irregular-yo'
  },
  {
  id: 'time-frequency', level: 'A1', unit: 'Everyday life', title: `Clock time, days and how often`,
  summary: `Say the hour with son las and a las, the part of the day with de la mañana, and frequency with veces and siempre.`,
  body: `<p>Every history is a clock. When did it start, what time do you wake, how many times a day do you take the pill? The numbers lesson gave you the digits. Here you put them into time phrases.</p>
<table><tr><th>English</th><th>Spanish</th></tr><tr><td>It is one o'clock.</td><td>Es la una.</td></tr><tr><td>It is three o'clock.</td><td>Son las tres.</td></tr><tr><td>half past (three)</td><td>las tres y media</td></tr><tr><td>quarter past (three)</td><td>las tres y cuarto</td></tr><tr><td>quarter to (eight)</td><td>las ocho menos cuarto</td></tr><tr><td>at eight</td><td>a las ocho</td></tr></table>
<p>Use <b>es la</b> for one o'clock and <b>son las</b> for all other hours. Use <b>a las</b> for "at". Add <b>de la mañana, de la tarde, de la noche</b> for am and pm.</p>
<div class="ex"><b>¿A qué hora se despierta?</b><span>What time do you wake up?</span></div>
<div class="ex"><b>Me despierto a las cinco y media de la mañana.</b><span>I wake up at five thirty in the morning.</span></div>
<div class="ex"><b>Tengo cita el martes a las diez y cuarto.</b><span>I have an appointment on Tuesday at ten fifteen.</span></div>
<div class="ex"><b>Son las ocho menos cuarto.</b><span>It is a quarter to eight.</span></div>
<h3>Days and parts of the day</h3>
<p>Days are written in lowercase: <i>lunes, martes, miércoles, jueves, viernes, sábado, domingo</i>. Use <b>el</b> for one day and <b>los</b> for every week: <i>el lunes</i> (this Monday), <i>los lunes</i> (on Mondays). Use <i>por la mañana, por la tarde, por la noche</i> for parts of the day.</p>
<div class="ex"><b>Trabajo de lunes a viernes.</b><span>I work from Monday to Friday.</span></div>
<div class="ex"><b>Los domingos visito a mi mamá.</b><span>On Sundays I visit my mom.</span></div>
<div class="ex"><b>Siempre me siento peor por la tarde.</b><span>I always feel worse in the afternoon.</span></div>
<h3>How often</h3>
<ul><li><b>siempre, casi siempre, a veces, casi nunca, nunca</b>: always, almost always, sometimes, almost never, never.</li><li><b>cada día / cada semana</b>: every day, every week.</li><li><b>una vez, dos veces + al día / a la semana</b>: once, twice a day or a week.</li></ul>
<div class="ex"><b>Tomo la medicina dos veces al día.</b><span>I take the medicine twice a day.</span></div>
<div class="ex"><b>A veces no puedo dormir.</b><span>Sometimes I cannot sleep.</span></div>
<div class="ex"><b>Casi nunca salgo de casa.</b><span>I almost never leave the house.</span></div>
<div class="note">Clinical tip: ask for a clock time and a frequency for every symptom: <i>¿A qué hora empieza?</i> <i>¿Cuántas veces a la semana?</i> Time in the morning (<i>por la mañana</i>) and a time pattern across the day often show the rhythm of mood and sleep.</div>
<h3>Common mistakes</h3>
<p><s>Es las tres.</s> → <b>Son las tres.</b> Plural hours take son.</p>
<p><s>Me despierto en las cinco.</s> → <b>Me despierto a las cinco.</b> Use a las for "at" with clock time.</p>
<p><s>Nunca no duermo.</s> → <b>Nunca duermo bien.</b> With nunca before the verb, drop no.</p>`,
  quiz: [
    [`Which completes "___ las tres de la tarde"?`, [`Es`, `Son`, `Está`, `Hay`], 1, `Plural hours take son las.`],
    [`Which is correct for 1:00?`, [`Son la una.`, `Es las una.`, `Es la una.`, `Son una.`], 2, `One o'clock is singular: es la una.`],
    [`Which completes "Me despierto ___ las cinco"?`, [`en`, `de`, `por`, `a`], 3, `A las gives clock time.`],
    [`What does "dos veces al día" mean?`, [`Two days`, `Twice a day`, `Every two days`, `The second day`], 1, `Dos veces al día is twice a day.`],
    [`Which sentence has an error?`, [`Tengo cita el martes.`, `Los domingos visito a mi mamá.`, `Tengo cita en lunes.`, `Trabajo de lunes a viernes.`], 2, `Use el lunes, not en lunes.`],
    [`Which means "almost never"?`, [`casi nunca`, `casi siempre`, `a veces`, `cada día`], 0, `Casi nunca is almost never.`],
    [`What time is "Son las ocho menos cuarto"?`, [`8:15`, `8:45`, `7:45`, `7:15`], 2, `Menos cuarto is a quarter before the hour: 7:45.`]
  ],
  draft: true,
  after: 'numbers-dates'
  },
  {
  id: 'family-household', level: 'A1', unit: 'Everyday life', title: `Family and household: who lives with you`,
  summary: `Learn the family words and the question ¿Con quién vive? to map a patient's home and support.`,
  body: `<p>The social history starts with a simple question: <i>¿Con quién vive?</i> The answer tells you about support, stress and safety, and the family words are among the first you will hear.</p>
<table><tr><th>Family</th><th>Spanish</th></tr><tr><td>mother, father</td><td>madre / mamá, padre / papá</td></tr><tr><td>parents</td><td>los padres</td></tr><tr><td>son, daughter</td><td>hijo, hija</td></tr><tr><td>brother, sister</td><td>hermano, hermana</td></tr><tr><td>husband, wife</td><td>esposo, esposa</td></tr><tr><td>partner</td><td>pareja</td></tr><tr><td>grandfather, grandmother</td><td>abuelo, abuela</td></tr><tr><td>uncle, aunt, cousin</td><td>tío, tía, primo, prima</td></tr><tr><td>in-laws</td><td>suegro, suegra, cuñado, cuñada</td></tr></table>
<p>The masculine plural covers a mixed group: <i>los hijos</i> are sons, or sons and daughters. <i>Los hermanos</i> are brothers, or brothers and sisters. <i>Los padres</i> are the parents. <i>Los parientes</i> means relatives.</p>
<p>The home has its own words: <i>la casa, el apartamento, el cuarto</i> (room), <i>la cocina, el baño, la cama</i>. Patients often say <i>la casa de mi mamá</i> or <i>mi casa</i> for where they sleep, so ask who else sleeps there.</p>
<h3>Who lives with you</h3>
<div class="ex"><b>¿Con quién vive?</b><span>Who do you live with?</span></div>
<div class="ex"><b>Vivo con mi esposa y mis dos hijas.</b><span>I live with my wife and my two daughters.</span></div>
<div class="ex"><b>Vivo sola desde hace un año.</b><span>I have lived alone for a year. (a woman speaking)</span></div>
<div class="ex"><b>Mis padres viven en otro estado.</b><span>My parents live in another state.</span></div>
<div class="ex"><b>Mi abuela vive con nosotros.</b><span>My grandmother lives with us.</span></div>
<h3>Family and home</h3>
<div class="ex"><b>¿Tiene hermanos?</b><span>Do you have brothers or sisters?</span></div>
<div class="ex"><b>Tengo dos hermanos y una hermana.</b><span>I have two brothers and one sister.</span></div>
<div class="ex"><b>¿Quién está en casa con los niños?</b><span>Who is at home with the children?</span></div>
<div class="ex"><b>Mi pareja trabaja de noche.</b><span>My partner works at night.</span></div>
<div class="ex"><b>Duermo en un cuarto con mi hermano.</b><span>I sleep in a room with my brother.</span></div>
<div class="note">Clinical tip: ask about the house with <i>hay</i>, and about the people with <i>estar</i>: <i>¿Hay alguien más en la casa?</i> <i>¿Está su esposo en casa durante el día?</i> Ask <i>¿Su familia sabe que está aquí?</i> before you call anyone, and ask for permission first.</div>
<h3>Common mistakes</h3>
<p><s>Vivo con mis parientes.</s> → <b>Vivo con mis padres.</b> Parientes means relatives, not parents.</p>
<p><s>Soy casada.</s> → <b>Estoy casada.</b> Marital state takes estar: estoy casada, estoy soltero.</p>
<p><s>Vivo con mi hermanos.</s> → <b>Vivo con mis hermanos.</b> The possessive matches the plural noun.</p>`,
  quiz: [
    [`What does "mis padres" mean?`, [`my parents`, `my relatives`, `my children`, `my grandparents`], 0, `Padres are the parents. Parientes are relatives.`],
    [`Which completes "¿___ quién vive?"`, [`De`, `En`, `Con`, `A`], 2, `¿Con quién vive? asks who someone lives with.`],
    [`How does a woman say "I am married"?`, [`Soy casada.`, `Tengo casada.`, `Hay casada.`, `Estoy casada.`], 3, `Marital state takes estar: estoy casada.`],
    [`"Vivo con mis parientes" most likely means I live with my`, [`parents`, `relatives`, `children`, `partners`], 1, `Parientes is relatives, a false friend of "parents".`],
    [`"Mis hermanos" can mean`, [`only my brothers`, `only my sisters`, `my cousins`, `my brothers, or my brothers and sisters`], 3, `The masculine plural covers a mixed group.`],
    [`Which sentence has an error?`, [`Vivo con mi esposa.`, `Vivo con mis hijos.`, `Vivo con mi hermanos.`, `Vivo sola.`], 2, `Hermanos is plural, so mis hermanos.`],
    [`What does "¿Quién está en casa con los niños?" ask?`, [`Who is home with the children?`, `Who lives in the house?`, `Who are the children?`, `Where are the children?`], 0, `It asks who is at home with the children.`]
  ],
  draft: true,
  after: 'time-frequency'
  },
  {
  id: 'review-a1', level: 'A1', unit: 'Review', title: `A1 review: the whole level in one page`,
  summary: `One model sentence for every A1 point, the commonest confusions, and a 12-question check.`,
  body: `<p>This page gathers every A1 point with one model sentence you could say on a ward. If a row feels shaky, go back to that lesson.</p>
<table><tr><th>Point</th><th>Model sentence</th></tr><tr><td>Accents</td><td>Tomó la pastilla ayer.</td></tr><tr><td>Ser or estar</td><td>Estoy muy cansado.</td></tr><tr><td>Gender</td><td>Me siento muy decaída.</td></tr><tr><td>Usted</td><td>¿Cómo duerme?</td></tr><tr><td>Questions</td><td>¿Cuántas horas duerme?</td></tr><tr><td>Negation</td><td>No tengo ganas de nada.</td></tr><tr><td>Numbers</td><td>Tengo cuarenta y dos años.</td></tr><tr><td>Articles</td><td>Voy al hospital.</td></tr><tr><td>Pronouns</td><td>Duermo mal, pero ella no.</td></tr><tr><td>Hay or está</td><td>Hay una farmacia, y está cerca.</td></tr><tr><td>Possessives</td><td>¿Son las pastillas de su esposo?</td></tr><tr><td>Demonstratives</td><td>Esta pastilla es nueva.</td></tr><tr><td>Prepositions</td><td>Veo a mi hijo los domingos.</td></tr><tr><td>Muy or mucho</td><td>Tengo mucho dolor.</td></tr><tr><td>Tener</td><td>Tengo miedo.</td></tr><tr><td>Ir a</td><td>Voy a explicarle el plan.</td></tr><tr><td>Stem change, yo form</td><td>Duermo poco y hago ejercicio.</td></tr><tr><td>Verb + infinitive</td><td>No puedo concentrarme.</td></tr><tr><td>Time</td><td>Tomo la medicina dos veces al día.</td></tr><tr><td>Family</td><td>Vivo con mi esposa.</td></tr></table>
<h3>Commonest confusions</h3>
<ul><li><b>Ser, estar, hay, tener</b>: feelings are <i>estoy cansado</i>, age is <i>tengo treinta años</i>, a thing's place is <i>está</i>, and "there is" is <i>hay</i>.</li><li><b>Muy or mucho</b>: muy before an adjective (<i>muy triste</i>), mucho before a noun or after a verb (<i>mucho dolor</i>, <i>me duele mucho</i>).</li><li><b>Su</b>: can mean your, his, her or their. Clear it up with <i>de usted, de él, de ella</i>.</li><li><b>A + el</b>: always <i>al</i>, and de + el is <i>del</i>.</li><li><b>Personal a</b>: <i>Veo a mi hijo</i>, but <i>Tengo dos hijos</i>.</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>¿Hay alguien en casa con usted?</b><span>Is there anyone at home with you?</span></div>
<div class="ex"><b>Estoy muy cansada y no tengo hambre.</b><span>I am very tired and I am not hungry. (a woman speaking)</span></div>
<div class="ex"><b>Mi hijo no quiere ir a la escuela.</b><span>My son does not want to go to school.</span></div>
<div class="ex"><b>Me despierto a las tres de la mañana.</b><span>I wake up at three in the morning.</span></div>
<div class="ex"><b>¿Cuánto tiempo lleva así?</b><span>How long have you been like this?</span></div>
<div class="ex"><b>Voy a hablar con su hija, si usted quiere.</b><span>I am going to speak with your daughter, if you want.</span></div>
<div class="ex"><b>Oigo voces cuando estoy solo.</b><span>I hear voices when I am alone.</span></div>
<div class="ex"><b>Nunca he tomado esta medicina.</b><span>I have never taken this medicine.</span></div>
<div class="note">Clinical tip: when you are unsure of a form, use a short, simple sentence and a question. <i>¿Cómo duerme?</i> is better than a long sentence with an error.</div>`,
  quiz: [
    [`What is the difference between "esta" and "está"?`, [`None`, `Esta means "this", está means "is"`, `Esta means "is", está means "this"`, `Esta is plural`], 1, `The accent changes the word: esta is this, está is is.`],
    [`Which completes "Ella ___ triste hoy"?`, [`es`, `tiene`, `hay`, `está`], 3, `A feeling today takes estar.`],
    [`A man describes himself. Which is right?`, [`Estoy cansado.`, `Estoy cansada.`, `Soy cansados.`, `Está cansada.`], 0, `A man uses the masculine ending: cansado.`],
    [`How do you ask a 70-year-old patient how they sleep?`, [`¿Cómo duermes?`, `¿Cómo dormiste?`, `¿Cómo duermen?`, `¿Cómo duerme?`], 3, `Usted takes duerme.`],
    [`Which question asks "How many hours do you sleep?"`, [`¿Cuántos horas duerme?`, `¿Cuántas horas duerme?`, `¿Cuánto horas duerme?`, `¿Cuándo horas duerme?`], 1, `Horas is feminine plural, so cuántas.`],
    [`What does "Ya no tengo ganas de nada" mean?`, [`I never wanted anything.`, `I want everything.`, `I no longer feel like doing anything.`, `I do not have anything yet.`], 2, `Ya no marks a loss: it used to be different.`],
    [`What is "cuarenta y dos"?`, [`24`, `14`, `52`, `42`], 3, `Cuarenta is 40, plus dos is 42.`],
    [`Which completes "Voy ___ hospital con mi hermana"?`, [`a el`, `a la`, `del`, `al`], 3, `A + el becomes al.`],
    [`Which completes "En la sala de espera ___ mucha gente"?`, [`está`, `son`, `hay`, `tiene`], 2, `Hay says there are many people there.`],
    [`Which sentence clears up that the pills belong to the husband?`, [`Son sus pastillas.`, `Son las pastillas de su esposo.`, `Son mis pastillas.`, `Son pastillas de tú.`], 1, `De su esposo makes the owner clear, while su can mean many owners.`],
    [`Which sentence is correct?`, [`Estoy mucho cansada.`, `Tengo muy sueño.`, `Tengo mucho sueño.`, `Soy mucho sueño.`], 2, `Mucho goes with the noun sueño after tener. Muy is only for adjectives.`],
    [`Which pair is correct: "I exercise and I sleep well"?`, [`hago / duermo`, `hazo / duermo`, `hago / dormo`, `hace / duerme`], 0, `The yo forms are hago and duermo.`]
  ],
  draft: true,
  review: true,
  after: 'family-household'
  }
]);
