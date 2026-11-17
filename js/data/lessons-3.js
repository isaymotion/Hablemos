/* Lessons, part 3: the A2 grammar lessons added in release 0.7.0.
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Shape: window.LESSONS = (window.LESSONS || []).concat([ { id, level: 'A2', unit, title, summary, body: HTML, quiz: [[question, [4 options], correctIndex, explanation]], draft: true, after: '<lesson id>', review?: true } ]);
   Body HTML subset: <p>, <h3>, <ul><li>, <table><tr><th><td>, <div class="ex"><b>Spanish</b><span>English</span></div> (the <b> text is plain Spanish and is recorded for audio), <div class="note">, and a "Common mistakes" section with <p><s>wrong</s> → <b>right</b>. Why.</p>.
   Quiz items: 7 per lesson, 12 for the review. Exactly one right answer each.
   Ids are permanent: do not rename or reorder them after release (append only). */
window.LESSONS = (window.LESSONS || []).concat([
  {
  id: 'preterite-regular', level: 'A2', unit: 'Talking about the past', title: `Preterite: regular verbs for what happened`,
  summary: `Hablé, comí, viví: the finished-event tense, with its accents and small spelling changes.`,
  body: `<p>Most history questions about an event use the preterite: When did it start? Did you take the medicine? Who called? It says that something happened and is over. In an interview it fixes the onset, the trigger and the actions already taken. The lesson on past timelines gave you the idea. Here you learn the regular forms.</p>
<table><tr><th></th><th>hablar</th><th>comer</th><th>vivir</th></tr><tr><td>yo</td><td>hablé</td><td>comí</td><td>viví</td></tr><tr><td>usted / él / ella</td><td>habló</td><td>comió</td><td>vivió</td></tr><tr><td>tú</td><td>hablaste</td><td>comiste</td><td>viviste</td></tr><tr><td>nosotros</td><td>hablamos</td><td>comimos</td><td>vivimos</td></tr><tr><td>ustedes / ellos</td><td>hablaron</td><td>comieron</td><td>vivieron</td></tr></table>
<p>The yo and usted forms carry a written accent: <i>hablé, habló</i>. For -ar and -ir verbs, <i>nosotros</i> is the same as the present (<i>hablamos, vivimos</i>), so the time word tells you which tense it is. Words that point to a finished moment: <i>ayer, anoche, el lunes, la semana pasada, hace dos días</i>.</p>
<h3>Small spelling changes</h3>
<ul><li><b>-car, -gar, -zar</b> change in the yo form only: <i>busqué, llegué, empecé</i>.</li><li><b>-ir verbs that change their stem</b> in the present change again in the usted and ustedes forms: <i>durmió, durmieron; sintió; pidió</i>.</li><li><b>Vowel + -ió</b> becomes -yó: <i>leyó, oyó, cayó</i>.</li><li>Stem-changing -ar and -er verbs do not change in the preterite: <i>pensé, volví</i>.</li></ul>
<h3>In use</h3>
<div class="ex"><b>¿Tomó la medicina ayer?</b><span>Did you take the medicine yesterday?</span></div>
<div class="ex"><b>Anoche no dormí nada.</b><span>Last night I did not sleep at all.</span></div>
<div class="ex"><b>¿A qué hora se despertó esta mañana?</b><span>What time did you wake up this morning?</span></div>
<div class="ex"><b>Empecé a oír voces el mes pasado.</b><span>I started hearing voices last month.</span></div>
<div class="ex"><b>Dejé de tomar la pastilla hace una semana.</b><span>I stopped taking the pill a week ago.</span></div>
<div class="ex"><b>¿Qué sintió cuando salió del hospital?</b><span>What did you feel when you left the hospital?</span></div>
<div class="ex"><b>¿Buscó ayuda con alguien?</b><span>Did you look for help from anyone?</span></div>
<div class="ex"><b>Mi hermana llamó a la clínica el lunes.</b><span>My sister called the clinic on Monday.</span></div>
<div class="ex"><b>Ayer caminé una hora y después cociné.</b><span>Yesterday I walked for an hour and then I cooked.</span></div>
<div class="ex"><b>El domingo comimos juntos en casa de mi mamá.</b><span>On Sunday we ate together at my mother's house.</span></div>
<div class="note">Clinical tip: build the story with short preterite questions: <i>¿Qué pasó? ¿Cuándo empezó? ¿Qué tomó? ¿Habló con alguien?</i> Ask one event at a time and let the patient finish. If the patient says <i>hablamos</i> or <i>vivimos</i>, check the time word before you decide whether it is now or then.</div>
<h3>Common mistakes</h3>
<p><s>Ayer hablo con mi hija.</s> → <b>Ayer hablé con mi hija.</b> A finished past time word needs the preterite, and the yo ending is -é.</p>
<p><s>Él duermió poco.</s> → <b>Él durmió poco.</b> In -ir verbs the o becomes u in the usted, él and ellos forms.</p>
<p><s>Yo llegé tarde.</s> → <b>Yo llegué tarde.</b> Verbs in -gar add u in the yo form to keep the g sound.</p>`,
  quiz: [
    [`Anoche yo ___ muy poco.`, [`duermo`, `dormí`, `durmió`, `duermí`], 1, `Yo form of dormir in the preterite is dormí. Durmió is usted or él.`],
    [`What is the usted form of "comer" in the preterite?`, [`comí`, `comiste`, `comió`, `comieron`], 2, `Usted comió. Comí is yo, comiste is tú and comieron is ustedes.`],
    [`Ayer mi hermana ___ en el sofá.`, [`dormió`, `durmieron`, `durmió`, `durmí`], 2, `For one person (ella), the o becomes u: durmió.`],
    [`What is the yo form of "empezar" in the preterite?`, [`empezé`, `empecé`, `empezí`, `empezó`], 1, `Verbs in -zar change z to c before é: empecé.`],
    [`"Dejé de tomar la medicina" means`, [`I stopped taking the medicine`, `I forgot the medicine`, `I will stop the medicine`, `I take less medicine`], 0, `Dejar de + infinitive = to stop doing something. Dejé is yo, preterite.`],
    [`Which form means "he spoke"?`, [`hablo`, `habló`, `hablé`, `hablaron`], 1, `Habló, with the accent on the last syllable. Hablo is the present.`],
    [`¿Cuándo ___ usted a oír voces?`, [`empecé`, `empezaste`, `empezó`, `empezaron`], 2, `Usted takes the third-person form: empezó.`]
  ],
  draft: true,
  after: 'past-timelines'
  },
  {
  id: 'preterite-irregular', level: 'A2', unit: 'Talking about the past', title: `Preterite: the irregular verbs you hear every day`,
  summary: `Fui, tuve, estuve, hice, dije, pude, puse, vine, quise, supe, di: stems to learn as a set.`,
  body: `<p>The most useful past verbs are irregular. You will hear them in nearly every history: Where were you? What did you do? What did they say? A wrong stem can change the story, so learn them as a set.</p>
<table><tr><th>Verb</th><th>yo</th><th>usted / él</th><th>ustedes / ellos</th></tr><tr><td>ser / ir</td><td>fui</td><td>fue</td><td>fueron</td></tr><tr><td>tener</td><td>tuve</td><td>tuvo</td><td>tuvieron</td></tr><tr><td>estar</td><td>estuve</td><td>estuvo</td><td>estuvieron</td></tr><tr><td>hacer</td><td>hice</td><td>hizo</td><td>hicieron</td></tr><tr><td>decir</td><td>dije</td><td>dijo</td><td>dijeron</td></tr><tr><td>poder</td><td>pude</td><td>pudo</td><td>pudieron</td></tr><tr><td>poner</td><td>puse</td><td>puso</td><td>pusieron</td></tr><tr><td>venir</td><td>vine</td><td>vino</td><td>vinieron</td></tr><tr><td>querer</td><td>quise</td><td>quiso</td><td>quisieron</td></tr><tr><td>saber</td><td>supe</td><td>supo</td><td>supieron</td></tr><tr><td>dar</td><td>di</td><td>dio</td><td>dieron</td></tr></table>
<p>These verbs share one set of endings: <i>-e, -iste, -o, -imos, -ieron</i>, and none has a written accent. After a stem ending in j (decir, traer) the ending is <i>-eron</i>: <i>dijeron, trajeron</i>. <b>Ir and ser</b> have the same preterite, and context tells them apart: <i>Fui al hospital</i> (I went) and <i>Fue una noche difícil</i> (it was).</p>
<h3>Meaning shifts</h3>
<p>Some verbs mean something sharper in the preterite: <b>supe</b> = I found out; <b>quise</b> = I tried; <b>no quise</b> = I refused; <b>pude</b> = I managed to; <b>no pude</b> = I tried and could not.</p>
<h3>In use</h3>
<div class="ex"><b>¿Fue al hospital el mes pasado?</b><span>Did you go to the hospital last month?</span></div>
<div class="ex"><b>Fui a urgencias el martes.</b><span>I went to the emergency room on Tuesday.</span></div>
<div class="ex"><b>Tuve un ataque de pánico en el trabajo.</b><span>I had a panic attack at work.</span></div>
<div class="ex"><b>¿Estuvo hospitalizado alguna vez?</b><span>Were you ever hospitalized?</span></div>
<div class="ex"><b>¿Qué hizo cuando se sintió mal?</b><span>What did you do when you felt ill?</span></div>
<div class="ex"><b>Mi esposa dijo que yo no comía bien.</b><span>My wife said I was not eating well.</span></div>
<div class="ex"><b>No pude dormir en toda la noche.</b><span>I could not sleep the whole night.</span></div>
<div class="ex"><b>No quiso comer nada ayer.</b><span>He refused to eat anything yesterday.</span></div>
<div class="ex"><b>Vine en autobús con mi hijo.</b><span>I came by bus with my son.</span></div>
<div class="ex"><b>Puse la alarma a las seis, pero no me desperté.</b><span>I set the alarm for six, but I did not wake up.</span></div>
<div class="ex"><b>Le di la pastilla a mi papá a las ocho.</b><span>I gave my father the pill at eight.</span></div>
<div class="note">Clinical tip: <i>No quiso</i> and <i>no pudo</i> are very different in a chart. <i>No quiso comer</i> is a refusal on that occasion. <i>No pudo comer</i> means the person tried and could not. Ask <i>¿Quiso comer y no pudo, o no quiso?</i> to tell a physical problem from refusal or a symptom.</div>
<h3>Common mistakes</h3>
<p><s>Ayer hacé la tarea.</s> → <b>Ayer hice la tarea.</b> Hacer has the irregular stem hic- (hiz- before -o: hizo), and the endings never take an accent.</p>
<p><s>Ellos dijieron que sí.</s> → <b>Ellos dijeron que sí.</b> After a stem ending in j, the ending is -eron, not -ieron.</p>
<p><s>Ella fué al hospital.</s> → <b>Ella fue al hospital.</b> One-syllable preterite forms (fue, fui, di, dio, vi, vio) take no written accent.</p>`,
  quiz: [
    [`Ayer yo ___ fiebre y me quedé en casa.`, [`tuvo`, `tené`, `tuve`, `tuvió`], 2, `Yo form of tener in the preterite: tuve.`],
    [`In "Fue una noche difícil", "fue" is a form of`, [`ir`, `ser`, `hacer`, `tener`], 1, `The sentence says it was a difficult night, so fue is from ser. Ir and ser share this form.`],
    [`"No quiso hablar" most likely means`, [`He refused to talk on that occasion`, `He cannot talk`, `He will not talk tomorrow`, `He talks too much`], 0, `Quiso in the negative preterite means he refused.`],
    [`What is the usted form of "hacer" in the preterite?`, [`hizo`, `hiso`, `hice`, `hacio`], 0, `Usted hizo. Hice is yo.`],
    [`Ellos ___ que no podían dormir.`, [`dijieron`, `dijeron`, `decieron`, `dijen`], 1, `After j the ending is -eron: dijeron.`],
    [`"Supe que mi hermano estaba enfermo" means`, [`I knew my brother was sick all along`, `I wanted my brother to be sick`, `I forgot my brother was sick`, `I found out my brother was sick`], 3, `Saber in the preterite means to find out.`],
    [`Which form is spelled WITHOUT a written accent?`, [`habló`, `tomé`, `dio`, `empezó`], 2, `Dio has one syllable, so no accent. The regular forms habló, tomé and empezó need one.`]
  ],
  draft: true,
  after: 'preterite-regular'
  },
  {
  id: 'imperfect', level: 'A2', unit: 'Talking about the past', title: `Imperfect: how things used to be`,
  summary: `Hablaba, comía, era, iba, veía: habits, background, age and states in the past.`,
  body: `<p>The imperfect describes how things were: sleep before the illness, work, family, how often a symptom kept happening. It answers <i>¿Cómo era?</i> and <i>¿Cómo estaba?</i> It gives you the baseline, and you need the baseline to measure change.</p>
<table><tr><th></th><th>hablar</th><th>comer</th><th>vivir</th><th>ser</th><th>ir</th><th>ver</th></tr><tr><td>yo / usted</td><td>hablaba</td><td>comía</td><td>vivía</td><td>era</td><td>iba</td><td>veía</td></tr><tr><td>tú</td><td>hablabas</td><td>comías</td><td>vivías</td><td>eras</td><td>ibas</td><td>veías</td></tr><tr><td>nosotros</td><td>hablábamos</td><td>comíamos</td><td>vivíamos</td><td>éramos</td><td>íbamos</td><td>veíamos</td></tr><tr><td>ustedes / ellos</td><td>hablaban</td><td>comían</td><td>vivían</td><td>eran</td><td>iban</td><td>veían</td></tr></table>
<p>The yo and usted forms are identical (<i>hablaba, comía</i>), so the subject or the context tells you who. Only ser, ir and ver are irregular.</p>
<h3>Use it for</h3>
<ul><li><b>Habits:</b> todos los días, siempre, cada semana, a veces.</li><li><b>Background:</b> how things were, who was there, what the place was like.</li><li><b>Age and time:</b> <i>tenía diez años; eran las tres</i>.</li><li><b>States and feelings over a period:</b> <i>me sentía cansado, tenía miedo, quería salir</i>.</li></ul>
<h3>In use</h3>
<div class="ex"><b>Antes dormía ocho horas todas las noches.</b><span>Before, I slept eight hours every night.</span></div>
<div class="ex"><b>Cuando era niño, vivía con mis abuelos.</b><span>When I was a child, I lived with my grandparents.</span></div>
<div class="ex"><b>¿Cómo era su apetito antes?</b><span>How was your appetite before?</span></div>
<div class="ex"><b>¿Qué tomaba cada día antes de venir?</b><span>What did you take every day before coming?</span></div>
<div class="ex"><b>¿Oía las voces todos los días?</b><span>Did you hear the voices every day?</span></div>
<div class="ex"><b>Me sentía muy cansado y no tenía ganas de nada.</b><span>I felt very tired and did not feel like doing anything.</span></div>
<div class="ex"><b>Tenía quince años cuando nos mudamos.</b><span>I was fifteen when we moved.</span></div>
<div class="ex"><b>Éramos cinco en la casa.</b><span>There were five of us in the house.</span></div>
<div class="ex"><b>Todos los domingos íbamos a la iglesia.</b><span>Every Sunday we went to church.</span></div>
<div class="ex"><b>Trabajaba en una fábrica y salía a las seis.</b><span>I worked in a factory and left at six.</span></div>
<div class="ex"><b>Veía a mi hijo todos los fines de semana.</b><span>I saw my son every weekend.</span></div>
<div class="note">Clinical tip: the imperfect is the tense of the baseline. Ask <i>¿Cómo era su sueño antes? ¿Qué hacía los fines de semana? ¿Con quién vivía?</i> and compare with now. A patient who answers in the imperfect about something recent (<i>antes me gustaba salir</i>) may be telling you about a loss of interest.</div>
<h3>Common mistakes</h3>
<p><s>Cuando fui niño, vivía con mis abuelos.</s> → <b>Cuando era niño, vivía con mis abuelos.</b> A stage of life is background, so ser takes the imperfect: era.</p>
<p><s>Antes yo trabajía en una fábrica.</s> → <b>Antes yo trabajaba en una fábrica.</b> -ar verbs use -aba. The ending -ía is only for -er and -ir verbs.</p>
<p><s>Eramos cinco.</s> → <b>Éramos cinco.</b> The nosotros forms of ser and ir carry a written accent: éramos, íbamos.</p>`,
  quiz: [
    [`Antes yo ___ ocho horas todas las noches.`, [`dormía`, `durmió`, `duermo`, `dormiré`], 0, `A past habit (todas las noches) takes the imperfect: dormía.`],
    [`What is the nosotros imperfect of "ir"?`, [`fuimos`, `íbamos`, `vamos`, `ibamos`], 1, `Íbamos, with the written accent.`],
    [`"Tenía quince años cuando nos mudamos" means`, [`I will be fifteen when we move`, `I had fifteen years of moving`, `I was fifteen when we moved`, `I am fifteen and we moved`], 2, `Age in the past uses tenía: I was fifteen.`],
    [`¿Qué ___ usted todos los días antes de venir?`, [`tomó`, `tomaba`, `tomé`, `toma`], 1, `A daily habit in the past takes the imperfect. Usted tomaba.`],
    [`Cuando yo ___ niño, vivía con mis abuelos.`, [`fui`, `soy`, `estuve`, `era`], 3, `Describing a stage of life takes the imperfect of ser: era.`],
    [`Which sentence is spelled correctly?`, [`Eramos cinco.`, `Éramos cinco.`, `Erámos cinco.`, `Eran nosotros cinco.`], 1, `Éramos has the accent on the first syllable.`],
    [`"¿Oía las voces todos los días?" asks`, [`Whether the voices came every day back then`, `Whether the voices will come every day`, `Whether the voices came once`, `Whether the voices are present now`], 0, `The imperfect plus todos los días asks about a repeated past pattern.`]
  ],
  draft: true,
  after: 'preterite-irregular'
  },
  {
  id: 'preterite-vs-imperfect', level: 'A2', unit: 'Talking about the past', title: `Preterite or imperfect: event or background`,
  summary: `One tense says what happened, the other says what it was like. Choosing decides whether a symptom was a single event or a pattern.`,
  body: `<p>In a history the choice of past tense carries meaning. <i>Me sentí mal</i> reports one moment. <i>Me sentía mal</i> reports a period. This tells you whether a symptom was one event or a pattern, and whether you are hearing the baseline or the change.</p>
<table><tr><th>Preterite</th><th>Imperfect</th></tr><tr><td>A finished event: <i>llamé, perdí</i></td><td>A habit: <i>llamaba, salía</i></td></tr><tr><td>A start or a change: <i>empecé</i></td><td>Background and setting: <i>era de noche</i></td></tr><tr><td>A sequence of actions</td><td>Age, time, states: <i>tenía miedo</i></td></tr><tr><td>Ayer, anoche, de repente, una vez, hace dos días</td><td>Antes, siempre, todos los días, mientras, de niño</td></tr></table>
<h3>Two tenses in one sentence</h3>
<p>The imperfect sets the scene and the preterite breaks in: <i>Estaba en el trabajo cuando empecé a sentir mareo</i>. Some verbs change meaning with the tense: <i>tenía miedo</i> (I was afraid, a state) and <i>tuve miedo</i> (I got scared, a moment). <i>No quería venir</i> describes a reluctance. <i>No quise venir</i> says I refused.</p>
<h3>In use</h3>
<div class="ex"><b>¿Cuándo empezó a sentirse así?</b><span>When did you start to feel this way?</span></div>
<div class="ex"><b>Antes me sentía bien y salía con mis amigos.</b><span>Before, I felt well and went out with my friends.</span></div>
<div class="ex"><b>Ayer me desperté a las tres y no pude volver a dormir.</b><span>Yesterday I woke up at three and could not go back to sleep.</span></div>
<div class="ex"><b>Siempre me despertaba a las tres y no podía volver a dormir.</b><span>I always woke up at three and could not go back to sleep.</span></div>
<div class="ex"><b>Cuando llegué a urgencias, tenía mucho miedo.</b><span>When I arrived at the emergency room, I was very afraid.</span></div>
<div class="ex"><b>Estaba en el trabajo cuando empecé a sentir el corazón muy rápido.</b><span>I was at work when I began to feel my heart racing.</span></div>
<div class="ex"><b>¿Cuántos años tenía cuando pasó?</b><span>How old were you when it happened?</span></div>
<div class="ex"><b>De repente oí una voz que me llamaba.</b><span>Suddenly I heard a voice calling me.</span></div>
<div class="ex"><b>Ayer no quería venir, pero vine por mi hija.</b><span>Yesterday I did not want to come, but I came for my daughter.</span></div>
<div class="ex"><b>Mi mamá cocinaba mientras yo hacía la tarea.</b><span>My mother cooked while I did my homework.</span></div>
<div class="note">Clinical tip: pair the two questions. <i>¿Cómo era antes?</i> gives the baseline. <i>¿Qué cambió?</i> and <i>¿Cuándo empezó?</i> give the onset. If a patient says <i>tenía miedo</i>, ask whether it was always there or whether it came in a moment (<i>¿Le dio miedo de repente?</i>). The answer separates anxiety as a state from a panic attack.</div>
<h3>Common mistakes</h3>
<p><s>Cuando tuve diez años, mi papá se fue.</s> → <b>Cuando tenía diez años, mi papá se fue.</b> Age is a state in the past, so it takes the imperfect.</p>
<p><s>Antes, yo salí con mis amigos cada sábado.</s> → <b>Antes, yo salía con mis amigos cada sábado.</b> Antes and cada sábado signal a habit, so use the imperfect.</p>
<p><s>De repente me sentía mal y llamé a mi hija.</s> → <b>De repente me sentí mal y llamé a mi hija.</b> De repente marks a sudden change, so use the preterite.</p>`,
  quiz: [
    [`Cuando yo ___ diez años, mis papás se separaron.`, [`tenía`, `tuve`, `tengo`, `tendré`], 0, `Age in the past takes the imperfect: tenía.`],
    [`De repente ___ un dolor muy fuerte en el pecho.`, [`sentía`, `siento`, `sentí`, `sentiré`], 2, `De repente marks a sudden event, so the preterite: sentí.`],
    [`Todos los veranos, mi familia ___ a la playa.`, [`fue`, `iba`, `irá`, `va`], 1, `Todos los veranos is a past habit, so the imperfect: iba.`],
    [`Ayer ___ tres horas en urgencias y por fin me atendieron.`, [`esperaba`, `espero`, `esperaré`, `esperé`], 3, `A completed stretch with a clear end takes the preterite: esperé.`],
    [`Which sentence describes how she felt during that whole period?`, [`Se sintió mal.`, `Se sentirá mal.`, `Se sintió mal un momento.`, `Se sentía mal esos días.`], 3, `Se sentía mal with esos días describes a continuing state. The other options are one moment or the future.`],
    [`Estaba en el trabajo cuando ___ el mareo.`, [`empezaba`, `empezó`, `empieza`, `empezará`], 1, `The sudden event that interrupted the scene takes the preterite: empezó.`],
    [`Ayer no quería venir, pero ___ por mi hija.`, [`venía`, `vengo`, `vendré`, `vine`], 3, `Ayer plus a completed action takes the preterite: vine.`]
  ],
  draft: true,
  after: 'imperfect'
  },
  {
  id: 'hace-desde', level: 'A2', unit: 'Talking about the past', title: `Onset and duration: hace, desde, desde hace, llevar`,
  summary: `Ask and answer "since when" and "for how long", the two numbers every history needs.`,
  body: `<p>Onset and duration are the two facts that shape almost every diagnosis: when did it start, and how long has it lasted? Spanish uses <i>hace</i>, <i>desde</i> and <i>llevar</i> for them. English "for" and "since" do not map one-to-one, so learn the patterns as blocks.</p>
<table><tr><th>Pattern</th><th>Meaning</th><th>Example</th></tr><tr><td>hace + time + preterite</td><td>ago</td><td>Perdí el trabajo hace dos meses.</td></tr><tr><td>hace + time + que + present</td><td>for (still true)</td><td>Hace un mes que no tengo apetito.</td></tr><tr><td>desde + a point in time</td><td>since</td><td>Tengo este dolor desde el lunes.</td></tr><tr><td>desde hace + an amount of time</td><td>for (still true)</td><td>Estoy triste desde hace dos meses.</td></tr><tr><td>llevar + time + gerund or sin</td><td>have been doing</td><td>Llevo dos semanas tomando esta pastilla.</td></tr></table>
<h3>Asking</h3>
<ul><li><b>¿Desde cuándo?</b> asks for the start: <i>¿Desde cuándo tiene este dolor?</i></li><li><b>¿Cuánto tiempo hace que…?</b> and <b>¿Hace cuánto tiempo…?</b> ask for the length.</li><li><b>¿Cuánto tiempo lleva así?</b> asks how long the patient has been like this.</li></ul>
<h3>In use</h3>
<div class="ex"><b>¿Desde cuándo tiene este dolor?</b><span>Since when have you had this pain?</span></div>
<div class="ex"><b>Tengo este dolor desde el lunes.</b><span>I have had this pain since Monday.</span></div>
<div class="ex"><b>Me siento triste desde hace dos meses.</b><span>I have felt sad for two months.</span></div>
<div class="ex"><b>¿Cuánto tiempo hace que no duerme bien?</b><span>How long has it been since you slept well?</span></div>
<div class="ex"><b>Hace un mes que no tengo apetito.</b><span>I have had no appetite for a month.</span></div>
<div class="ex"><b>Perdí mi trabajo hace dos meses.</b><span>I lost my job two months ago.</span></div>
<div class="ex"><b>Llevo dos semanas tomando esta pastilla.</b><span>I have been taking this pill for two weeks.</span></div>
<div class="ex"><b>¿Hace cuánto tiempo oye esas voces?</b><span>How long have you been hearing those voices?</span></div>
<div class="ex"><b>¿Cuánto tiempo lleva así?</b><span>How long have you been like this?</span></div>
<div class="ex"><b>Vivo aquí desde 2019.</b><span>I have lived here since 2019.</span></div>
<div class="ex"><b>Mi hijo está en el hospital desde ayer.</b><span>My son has been in the hospital since yesterday.</span></div>
<div class="note">Clinical tip: get both numbers, the start date and the length, and check them against each other. Many patients give a vague answer such as <i>hace tiempo</i>. Anchor it with an event: <i>¿Fue antes o después de Navidad?</i> The length of a symptom (for example, two weeks) decides whether it counts toward a diagnosis.</div>
<h3>Common mistakes</h3>
<p><s>Estoy triste por tres meses.</s> → <b>Estoy triste desde hace tres meses.</b> English "for three months" is not por here. Use desde hace, or hace tres meses que estoy triste.</p>
<p><s>Tengo dolor desde tres días.</s> → <b>Tengo dolor desde hace tres días.</b> Desde alone goes with a point in time (el lunes). With an amount of time, use desde hace.</p>
<p><s>Hace dos semanas que no dormí bien.</s> → <b>Hace dos semanas que no duermo bien.</b> If the problem still goes on, use the present tense after que.</p>`,
  quiz: [
    [`Tengo este dolor ___ el lunes.`, [`hace`, `por`, `para`, `desde`], 3, `Desde goes with a point in time: since Monday.`],
    [`Estoy triste ___ dos meses.`, [`desde`, `para`, `en`, `desde hace`], 3, `With an amount of time, use desde hace.`],
    [`Which question asks how long the problem has lasted?`, [`¿Cuánto tiempo hace que se siente así?`, `¿Cuántos años tiene?`, `¿Cuándo va a venir?`, `¿Cuánto cuesta?`], 0, `Cuánto tiempo hace que asks for the length.`],
    [`"Dejé de tomar la medicina hace una semana" means`, [`I will stop the medicine in a week`, `I take the medicine every week`, `I stopped taking the medicine a week ago`, `I stopped it for one week`], 2, `Hace + time with the preterite means ago.`],
    [`Llevo tres noches ___ dormir.`, [`por`, `desde`, `hace`, `sin`], 3, `Llevo + time + sin + infinitive: I have gone three nights without sleeping.`],
    [`She still has no appetite. Hace un mes que no ___ apetito.`, [`tiene`, `tuvo`, `tendrá`, `tenía`], 0, `If it is still true, the present follows que. Here the third person: tiene.`],
    [`"¿Cuánto tiempo lleva así?" asks`, [`How long ago it ended`, `How far away you live`, `How long you have been like this`, `How long you will be like this`], 2, `Llevar + time expresses how long something has been going on.`]
  ],
  draft: true,
  after: 'preterite-vs-imperfect'
  },
  {
  id: 'present-perfect', level: 'A2', unit: 'Talking about the past', title: `Present perfect: he tomado, ha tenido, han dicho`,
  summary: `Have/has plus a participle: lifetime history and what has happened up to now.`,
  body: `<p>The present perfect asks about experience up to now: <i>¿Ha estado hospitalizado alguna vez?</i> It is the tense of lifetime history, previous episodes and treatments tried. It uses <b>haber</b> plus a participle, not tener.</p>
<table><tr><th>haber</th><th>Form</th><th>Participle</th></tr><tr><td>yo</td><td>he</td><td>-ar: tomado</td></tr><tr><td>tú</td><td>has</td><td>-er / -ir: comido, vivido</td></tr><tr><td>usted / él / ella</td><td>ha</td><td>after a vowel: oído, leído</td></tr><tr><td>nosotros</td><td>hemos</td><td>irregular: hecho, dicho, visto</td></tr><tr><td>ustedes / ellos</td><td>han</td><td>puesto, escrito, abierto, vuelto, roto</td></tr></table>
<p>Regular participles end in <i>-ado</i> (-ar verbs) and <i>-ido</i> (-er and -ir verbs). Learn the irregular ones as they come up, because they are among the most common verbs in a history.</p>
<h3>Word order and useful words</h3>
<p>Nothing goes between <i>haber</i> and the participle. Put <i>no</i> and pronouns before haber: <i>No lo he tomado</i>. Useful words: <b>alguna vez</b> (ever), <b>nunca</b> (never), <b>ya</b> (already), <b>todavía no</b> (not yet), <b>esta semana, hoy</b>.</p>
<h3>In use</h3>
<div class="ex"><b>¿Ha estado hospitalizado alguna vez?</b><span>Have you ever been hospitalized?</span></div>
<div class="ex"><b>¿Ha tenido ataques de pánico antes?</b><span>Have you had panic attacks before?</span></div>
<div class="ex"><b>Nunca he tomado medicina para los nervios.</b><span>I have never taken medicine for my nerves.</span></div>
<div class="ex"><b>Todavía no he dormido nada hoy.</b><span>I have not slept at all yet today.</span></div>
<div class="ex"><b>Hoy no he tomado la pastilla de la mañana.</b><span>Today I have not taken the morning pill.</span></div>
<div class="ex"><b>¿Ha notado algún cambio en su apetito?</b><span>Have you noticed any change in your appetite?</span></div>
<div class="ex"><b>Esta semana he estado muy nervioso.</b><span>This week I have been very nervous.</span></div>
<div class="ex"><b>¿Qué le han dicho los doctores?</b><span>What have the doctors told you?</span></div>
<div class="ex"><b>¿Le han hecho análisis de sangre?</b><span>Have they done blood tests on you?</span></div>
<div class="ex"><b>Hemos vivido aquí toda la vida.</b><span>We have lived here all our lives.</span></div>
<div class="ex"><b>Mi hermano ha vuelto a casa.</b><span>My brother has come back home.</span></div>
<div class="note">Clinical tip: use the present perfect for lifetime questions (<i>¿Ha pasado por algo así antes?</i>) and for treatments tried (<i>¿Qué medicinas ha tomado?</i>). Regional note: in Mexico and much of Latin America people often use the preterite for recent events (<i>¿Ya comió? ¿Qué desayunó hoy?</i>), while Spain uses the perfect more. Both are understood, so do not correct the patient.</div>
<h3>Common mistakes</h3>
<p><s>Tengo tomado la medicina.</s> → <b>He tomado la medicina.</b> The perfect uses haber, not tener, and tener + participle sounds odd.</p>
<p><s>¿Le han hacido análisis?</s> → <b>¿Le han hecho análisis?</b> Hacer has an irregular participle: hecho, like dicho and visto.</p>
<p><s>He no tomado la pastilla.</s> → <b>No he tomado la pastilla.</b> No goes before haber, and nothing separates he from the participle.</p>`,
  quiz: [
    [`What is the participle of "hacer"?`, [`hacido`, `hecho`, `haciendo`, `hizo`], 1, `Hecho is irregular, like dicho, visto and puesto.`],
    [`Which sentence means "She has not slept"?`, [`Ha no dormido.`, `Es no dormido.`, `No tiene dormido.`, `No ha dormido.`], 3, `No goes before ha, followed directly by the participle.`],
    [`¿Ha ___ alguna vez a un psiquiatra?`, [`veído`, `vido`, `visto`, `vista`], 2, `Visto is the irregular participle of ver.`],
    [`"Todavía no he comido" means`, [`I have not eaten yet`, `I already ate`, `I never eat`, `I will not eat`], 0, `Todavía no = not yet.`],
    [`Which sentence asks "Have you ever been hospitalized?"`, [`¿Está hospitalizado ahora?`, `¿Ha estado hospitalizado alguna vez?`, `¿Estuvo hospitalizado ayer?`, `¿Va a estar hospitalizado?`], 1, `Alguna vez with the present perfect asks about lifetime experience.`],
    [`What is the participle of "oír"?`, [`oído`, `oyado`, `oido`, `oiado`], 0, `Oído, with an accent on the í because it follows a vowel.`],
    [`Hoy no ___ la pastilla de la mañana.`, [`he tomé`, `tengo tomado`, `soy tomado`, `he tomado`], 3, `Haber plus the participle: he tomado.`]
  ],
  draft: true,
  after: 'hace-desde'
  },
  {
  id: 'direct-object-pronouns', level: 'A2', unit: 'Pronouns and prepositions', title: `Direct object pronouns: lo, la, los, las, me, nos`,
  summary: `Say "I took it" and "I hear them" without repeating the noun, and put the pronoun in the right place.`,
  body: `<p>Patients answer questions with short pronouns: <i>La tomé. Las oigo. Lo vi.</i> If you do not catch what <i>la</i> or <i>las</i> replaces, you may record the wrong symptom or medicine. The direct object pronoun replaces the thing or person that receives the action.</p>
<table><tr><th>Person</th><th>Pronoun</th><th>Example</th></tr><tr><td>me</td><td>me</td><td>¿Me oye bien?</td></tr><tr><td>you (tú)</td><td>te</td><td>Te veo mañana.</td></tr><tr><td>him, it (masc.), you (usted, man)</td><td>lo</td><td>Lo voy a examinar.</td></tr><tr><td>her, it (fem.), you (usted, woman)</td><td>la</td><td>La voy a llamar.</td></tr><tr><td>us</td><td>nos</td><td>¿Nos puede ayudar?</td></tr><tr><td>them, you all (masc.)</td><td>los</td><td>Los medicamentos, los tomo con agua.</td></tr><tr><td>them, you all (fem.)</td><td>las</td><td>Las pastillas, las tomo de noche.</td></tr></table>
<h3>Where it goes</h3>
<ul><li>Before a conjugated verb: <i>La tomé. No lo entiendo.</i></li><li>With an infinitive or a gerund, before the first verb or attached to the end: <i>La voy a llamar</i> or <i>Voy a llamarla</i>.</li><li>With an affirmative command, attached: <i>Tómela con comida.</i></li></ul>
<p>The pronoun matches the thing, not the speaker: <i>la medicina → la</i>, <i>el medicamento → lo</i>, <i>las voces → las</i>.</p>
<h3>In use</h3>
<div class="ex"><b>¿Tomó la pastilla? Sí, la tomé.</b><span>Did you take the pill? Yes, I took it.</span></div>
<div class="ex"><b>¿Toma las pastillas con comida? No, no las tomo con comida.</b><span>Do you take the pills with food? No, I do not take them with food.</span></div>
<div class="ex"><b>¿Oye voces? Sí, las oigo por la noche.</b><span>Do you hear voices? Yes, I hear them at night.</span></div>
<div class="ex"><b>¿Ve a su hijo seguido? Sí, lo veo los domingos.</b><span>Do you see your son often? Yes, I see him on Sundays.</span></div>
<div class="ex"><b>Don Chuy, lo voy a pesar ahora.</b><span>Don Chuy, I am going to weigh you now.</span></div>
<div class="ex"><b>Doña Rosa, la voy a llamar mañana.</b><span>Doña Rosa, I will call you tomorrow.</span></div>
<div class="ex"><b>Quiero verlo la próxima semana.</b><span>I want to see you next week.</span></div>
<div class="ex"><b>¿Me oye bien?</b><span>Can you hear me well?</span></div>
<div class="ex"><b>No lo entiendo.</b><span>I do not understand it.</span></div>
<div class="ex"><b>¿Nos puede ayudar?</b><span>Can you help us?</span></div>
<div class="ex"><b>¿Dónde puso las llaves? Las puse en la mesa.</b><span>Where did you put the keys? I put them on the table.</span></div>
<div class="note">Clinical tip: do not trust a pronoun alone. If a patient answers <i>Sí, la tomé</i>, confirm what it was: <i>¿La pastilla de la mañana?</i> Also remember that <i>lo</i> and <i>la</i> can mean usted: <i>Lo voy a examinar</i> speaks to a man and <i>La voy a examinar</i> to a woman. In Spain you will hear <i>le</i> for a man (<i>le veo</i>), which is not standard in Mexico.</div>
<h3>Common mistakes</h3>
<p><s>Tomé la.</s> → <b>La tomé.</b> The pronoun goes before the conjugated verb, not after it.</p>
<p><s>Las pastillas, no lo tomo.</s> → <b>Las pastillas, no las tomo.</b> The pronoun must match the noun in gender and number: las for feminine plural.</p>
<p><s>Voy lo a llamar.</s> → <b>Lo voy a llamar.</b> Put the pronoun before the first verb or attach it to the infinitive (voy a llamarlo), never between them.</p>`,
  quiz: [
    [`¿Tomó la pastilla? Sí, ___ tomé.`, [`lo`, `las`, `la`, `le`], 2, `Pastilla is feminine singular, so la.`],
    [`¿Ve a su hermano? Sí, ___ veo los domingos.`, [`me`, `lo`, `la`, `los`], 1, `Hermano is masculine singular, so lo.`],
    [`Doña Rosa, ___ voy a llamar mañana.`, [`la`, `lo`, `las`, `nos`], 0, `Doña Rosa is a woman, so la.`],
    [`Which sentence is correct?`, [`Quiero lo ver.`, `Lo quiero verlo.`, `Quiero verlo.`, `Quiero ver lo.`], 2, `Attach the pronoun to the infinitive (verlo) or put it before quiero (Lo quiero ver).`],
    [`Don Chuy, ___ voy a pesar ahora.`, [`la`, `lo`, `los`, `las`], 1, `Don Chuy is a man, so lo.`],
    [`Los medicamentos, ¿___ toma con agua?`, [`los`, `lo`, `las`, `la`], 0, `Medicamentos is masculine plural, so los.`],
    [`Where does the pronoun go in "I do not understand it"?`, [`Lo no entiendo.`, `No entiendo lo.`, `No entiendolo.`, `No lo entiendo.`], 3, `No goes first, then the pronoun, then the verb.`]
  ],
  draft: true,
  after: 'present-perfect'
  },
  {
  id: 'indirect-object-pronouns', level: 'A2', unit: 'Pronouns and prepositions', title: `Indirect object pronouns: le, les, se lo`,
  summary: `Who received the medicine, the news or the question? Le and les answer that, and se lo replaces le lo.`,
  body: `<p>In medication histories, <i>le</i> and <i>les</i> tell you who received something: <i>¿Quién le da la medicina?</i> The indirect object is the person who receives, hears or benefits. It appears with dar, decir, recetar, explicar, preguntar, mostrar and many more.</p>
<table><tr><th>Person</th><th>Pronoun</th><th>Example</th></tr><tr><td>to me</td><td>me</td><td>El doctor me recetó una pastilla.</td></tr><tr><td>to you (tú)</td><td>te</td><td>Te explico los efectos.</td></tr><tr><td>to you (usted), him, her</td><td>le</td><td>Le doy una receta nueva.</td></tr><tr><td>to us</td><td>nos</td><td>Nos preparó la cena.</td></tr><tr><td>to you all, them</td><td>les</td><td>Les dije la verdad.</td></tr></table>
<h3>Le lo becomes se lo</h3>
<p>When <i>le</i> or <i>les</i> comes before <i>lo, la, los, las</i>, it changes to <b>se</b>: <i>Le di la pastilla → Se la di.</i> The thing is lo/la (direct) and the person is hidden in se (indirect). Spanish often repeats the person with <b>a</b> as well: <i>Le doy la medicina a mi mamá.</i> That is normal and clear, not an error.</p>
<h3>In use</h3>
<div class="ex"><b>¿Quién le dio la medicina?</b><span>Who gave you the medicine?</span></div>
<div class="ex"><b>Mi hija me da la pastilla en la mañana.</b><span>My daughter gives me the pill in the morning.</span></div>
<div class="ex"><b>El doctor me recetó una pastilla para dormir.</b><span>The doctor prescribed me a pill for sleeping.</span></div>
<div class="ex"><b>¿Le explicaron los efectos secundarios?</b><span>Did they explain the side effects to you?</span></div>
<div class="ex"><b>Le voy a dar una receta nueva.</b><span>I am going to give you a new prescription.</span></div>
<div class="ex"><b>Le quiero hacer unas preguntas.</b><span>I would like to ask you some questions.</span></div>
<div class="ex"><b>¿Le dio la pastilla a su papá? Sí, se la di a las ocho.</b><span>Did you give your father the pill? Yes, I gave it to him at eight.</span></div>
<div class="ex"><b>¿Se lo dijo a alguien? Se lo dije a mi esposa.</b><span>Did you tell anyone? I told my wife.</span></div>
<div class="ex"><b>Les mandé un mensaje a mis hermanos.</b><span>I sent my brothers a message.</span></div>
<div class="ex"><b>Le cuento todo a mi hermana.</b><span>I tell my sister everything.</span></div>
<div class="ex"><b>Mi mamá nos preparó la cena.</b><span>My mother made us dinner.</span></div>
<div class="note">Clinical tip: <i>le</i> answers adherence questions. <i>¿Alguien le recuerda tomar las pastillas? ¿Quién se las da?</i> If the family gives the medicine, the patient may not know the dose, so ask the person who gives it. Also check <i>se</i>: <i>Se lo di</i> hides who got it, so ask <i>¿A quién?</i></div>
<h3>Common mistakes</h3>
<p><s>Le lo di.</s> → <b>Se lo di.</b> Le and les become se before lo, la, los and las.</p>
<p><s>Les dije a mi hijo.</s> → <b>Le dije a mi hijo.</b> One person takes le. Les is for two or more.</p>
<p><s>La di la pastilla.</s> → <b>Le di la pastilla.</b> The person who receives the pill is the indirect object (le), not the direct object (la).</p>`,
  quiz: [
    [`Le di la pastilla a mi papá. Short answer: ___ ___ di.`, [`Se la`, `Le la`, `Se lo`, `La le`], 0, `Le becomes se before la, and la (pastilla) is the thing.`],
    [`¿Quién ___ da la medicina, señora?`, [`se`, `la`, `le`, `lo`], 2, `Le refers to usted, the person who receives the medicine.`],
    [`In "Se lo dije a mi esposa", who is "se"?`, [`The thing I said`, `The doctor`, `Myself`, `My wife`], 3, `Se stands for le, the person who was told: my wife.`],
    [`El doctor ___ recetó una pastilla (a mí).`, [`lo`, `mi`, `me`, `yo`], 2, `Me is the indirect object pronoun for I.`],
    [`Which is correct for one son?`, [`Le dije a mi hijo.`, `Les dije a mi hijo.`, `Lo dije a mi hijo.`, `Se dije a mi hijo.`], 0, `One person takes le.`],
    [`Doctora, ¿___ puede explicar esto a mi esposa y a mí?`, [`le`, `les`, `me`, `nos`], 3, `Nos is the indirect object pronoun for us.`],
    [`"Les explico los efectos a sus hijos." Who is "les"?`, [`Your children`, `The effects`, `You (usted)`, `Me`], 0, `Les stands for the people receiving the explanation: sus hijos.`]
  ],
  draft: true,
  after: 'direct-object-pronouns'
  },
  {
  id: 'por-para', level: 'A2', unit: 'Pronouns and prepositions', title: `Por and para: cause or purpose`,
  summary: `Por explains the reason behind something. Para points at its goal, its recipient or its deadline.`,
  body: `<p>In an interview, <i>por</i> and <i>para</i> answer two different questions. <b>¿Por qué?</b> asks for the cause: why did this happen? <b>¿Para qué?</b> asks for the purpose: what is it for? A patient who says <i>tomo la pastilla por los nervios</i> is giving a reason, and <i>para los nervios</i> gives its job. Both are heard, so listen for the difference.</p>
<h3>The two uses side by side</h3>
<p>A quick rule: look back for a cause with <i>por</i>, and look ahead to a goal with <i>para</i>. The table lists the uses you will meet most often at this level.</p>
<table><tr><th>por</th><th>para</th></tr><tr><td>cause, reason: <i>Vine por el dolor.</i></td><td>purpose before an infinitive: <i>Tomo esto para dormir.</i></td></tr><tr><td>how long, a period: <i>por dos semanas</i></td><td>recipient: <i>Esta receta es para usted.</i></td></tr><tr><td>means: <i>por teléfono, por correo</i></td><td>deadline: <i>para el viernes</i></td></tr><tr><td>per, each: <i>dos veces por día</i></td><td>opinion: <i>Para mí, es peor en la noche.</i></td></tr><tr><td>part of the day: <i>por la mañana</i></td><td>goal or use: <i>¿Para qué sirve?</i></td></tr><tr><td>thanks: <i>gracias por venir</i></td><td>destination: <i>Salgo para el trabajo.</i></td></tr></table>
<h3>In use</h3>
<div class="ex"><b>¿Para qué toma esta pastilla?</b><span>What do you take this pill for?</span></div>
<div class="ex"><b>La tomo para dormir.</b><span>I take it to sleep.</span></div>
<div class="ex"><b>Vine por el dolor de cabeza.</b><span>I came because of the headache.</span></div>
<div class="ex"><b>¿Por qué dejó de tomar la medicina?</b><span>Why did you stop taking the medicine?</span></div>
<div class="ex"><b>No pude trabajar por el dolor.</b><span>I could not work because of the pain.</span></div>
<div class="ex"><b>Esta receta es para usted.</b><span>This prescription is for you.</span></div>
<div class="ex"><b>Tome una pastilla dos veces por día.</b><span>Take one pill twice a day.</span></div>
<div class="ex"><b>Tome este medicamento por dos semanas.</b><span>Take this medicine for two weeks.</span></div>
<div class="ex"><b>Le hablé por teléfono ayer.</b><span>I spoke to you by phone yesterday.</span></div>
<div class="ex"><b>Gracias por venir hoy.</b><span>Thank you for coming today.</span></div>
<div class="ex"><b>Necesito los resultados para el viernes.</b><span>I need the results by Friday.</span></div>
<div class="ex"><b>Camino por el parque todas las mañanas.</b><span>I walk through the park every morning.</span></div>
<div class="note">Clinical tip: <i>¿Por qué?</i> and <i>¿Para qué?</i> reveal what the patient thinks. <i>¿Para qué toma esta pastilla?</i> checks that the patient knows the purpose of the medicine. <i>¿Por qué dejó de tomarla?</i> finds the reason for stopping, such as side effects, cost or a belief that it is no longer needed.</div>
<h3>Common mistakes</h3>
<p><s>Tomo la pastilla por dormir.</s> → <b>Tomo la pastilla para dormir.</b> Purpose before an infinitive takes para.</p>
<p><s>Gracias para venir.</s> → <b>Gracias por venir.</b> Thanks are given for a reason, so use por.</p>
<p><s>Tengo un regalo por usted.</s> → <b>Tengo un regalo para usted.</b> The recipient takes para.</p>`,
  quiz: [
    [`Tomo esta pastilla ___ dormir.`, [`por`, `en`, `de`, `para`], 3, `Purpose before an infinitive: para.`],
    [`No pude trabajar ___ el dolor.`, [`por`, `para`, `con`, `en`], 0, `The pain is the cause, so por.`],
    [`Esta medicina es ___ usted.`, [`por`, `de`, `para`, `con`], 2, `The recipient takes para.`],
    [`Tome una pastilla dos veces ___ día.`, [`para`, `en`, `con`, `por`], 3, `Dos veces por día means twice per day.`],
    [`Hablé con mi hija ___ teléfono.`, [`por`, `para`, `de`, `a`], 0, `Means or channel of communication: por.`],
    [`¿___ qué sirve esta pastilla?`, [`Por`, `De`, `Para`, `En`], 2, `Asking what something is for: ¿Para qué sirve?`],
    [`Necesito los resultados ___ el viernes.`, [`desde`, `en`, `por`, `para`], 3, `A deadline takes para: by Friday.`]
  ],
  draft: true,
  after: 'indirect-object-pronouns'
  },
  {
  id: 'present-progressive', level: 'A2', unit: 'More verbs', title: `Present progressive: estar + gerund`,
  summary: `Está tomando, estoy durmiendo mal, sigo oyendo: what is happening now and what continues.`,
  body: `<p>Use <b>estar</b> plus a gerund for what is happening at this moment or in this period: <i>¿Qué medicinas está tomando ahora?</i> It is how you ask about current medicines and what the patient perceives at this moment, for example <i>¿Está oyendo algo ahora?</i> For a habit, use the simple present instead: <i>Duermo mal</i> is a pattern, <i>Estoy durmiendo mal</i> is the current period.</p>
<table><tr><th>Verb type</th><th>Gerund</th><th>Examples</th></tr><tr><td>-ar</td><td>-ando</td><td>tomando, hablando, llorando</td></tr><tr><td>-er / -ir</td><td>-iendo</td><td>comiendo, viviendo, sufriendo</td></tr><tr><td>-ir with stem change</td><td>o to u, e to i</td><td>durmiendo, sintiendo, pidiendo, diciendo, viniendo</td></tr><tr><td>vowel before the ending</td><td>-yendo</td><td>leyendo, oyendo, trayendo, yendo</td></tr></table>
<p>Estar changes, the gerund does not: <i>estoy, está, estamos, están</i> + <i>tomando</i>. Reflexive pronouns go before estar or attach to the gerund with an accent: <i>Me estoy sintiendo mal</i> or <i>Estoy sintiéndome mal</i>.</p>
<h3>Seguir + gerund</h3>
<p><b>Seguir</b> plus a gerund means to keep doing something: <i>Sigo tomando la pastilla</i>, <i>Sigo oyendo las voces</i>. With <i>sin</i> it means still not: <i>Sigo sin dormir</i>.</p>
<h3>In use</h3>
<div class="ex"><b>¿Qué medicinas está tomando ahora?</b><span>What medicines are you taking now?</span></div>
<div class="ex"><b>Estoy tomando una pastilla para la presión.</b><span>I am taking a pill for blood pressure.</span></div>
<div class="ex"><b>¿Está durmiendo bien últimamente?</b><span>Have you been sleeping well lately?</span></div>
<div class="ex"><b>No estoy comiendo casi nada.</b><span>I am eating almost nothing.</span></div>
<div class="ex"><b>Mi esposa está llorando mucho.</b><span>My wife is crying a lot.</span></div>
<div class="ex"><b>¿Se está sintiendo mejor?</b><span>Are you feeling better?</span></div>
<div class="ex"><b>¿Está oyendo algo en este momento?</b><span>Are you hearing anything right now?</span></div>
<div class="ex"><b>Sigo oyendo las voces, pero menos.</b><span>I keep hearing the voices, but less.</span></div>
<div class="ex"><b>¿Sigue tomando la medicina?</b><span>Are you still taking the medicine?</span></div>
<div class="ex"><b>Estoy leyendo el periódico mientras espero.</b><span>I am reading the newspaper while I wait.</span></div>
<div class="ex"><b>Está lloviendo y no tengo paraguas.</b><span>It is raining and I do not have an umbrella.</span></div>
<div class="note">Clinical tip: the progressive anchors a symptom in the present moment, which matters in a mental status exam: <i>¿Está oyendo la voz ahora? ¿Está viendo algo?</i> A patient who says <i>sigo sin dormir</i> is telling you the problem continues, so follow with <i>¿Desde cuándo?</i></div>
<h3>Common mistakes</h3>
<p><s>Estoy tomo la medicina.</s> → <b>Estoy tomando la medicina.</b> After estar the verb needs the gerund (-ando or -iendo).</p>
<p><s>Está dormiendo.</s> → <b>Está durmiendo.</b> In -ir verbs that change their stem, the o becomes u in the gerund.</p>
<p><s>Estoy viniendo mañana.</s> → <b>Vengo mañana.</b> Spanish does not use estar + gerund for a planned future. Use the present or ir a + infinitive.</p>`,
  quiz: [
    [`What is the gerund of "comer"?`, [`comando`, `comido`, `comiendo`, `comer`], 2, `-er verbs take -iendo.`],
    [`What is the gerund of "dormir"?`, [`dormiendo`, `durmiendo`, `dormindo`, `durmindo`], 1, `The o changes to u: durmiendo.`],
    [`"Sigo oyendo las voces" means`, [`I stopped hearing the voices`, `I will hear the voices`, `I heard the voices once`, `I keep hearing the voices`], 3, `Seguir + gerund means to continue doing something.`],
    [`¿Qué medicina ___ tomando ahora?`, [`es`, `está`, `tiene`, `va`], 1, `Usted takes está: the form of estar for the progressive.`],
    [`What is the gerund of "leer"?`, [`leiendo`, `leyendo`, `leando`, `leído`], 1, `After a vowel the i becomes y: leyendo.`],
    [`Which question asks what the patient hears at this very moment?`, [`¿Oyó algo ayer?`, `¿Oía algo antes?`, `¿Está oyendo algo ahora?`, `¿Oye voces todos los días?`], 2, `Estar + gerund with ahora is the moment of speaking.`],
    [`To say "It is raining": ___ lloviendo.`, [`Es`, `Hay`, `Tiene`, `Está`], 3, `Está lloviendo. Estar + gerund for weather happening now.`]
  ],
  draft: true,
  after: 'por-para'
  },
  {
  id: 'saber-conocer', level: 'A2', unit: 'More verbs', title: `Saber and conocer: two ways of knowing`,
  summary: `Saber is for facts and skills. Conocer is for people, places and being familiar with something.`,
  body: `<p>Both verbs are "to know", and the choice matters in an interview. <b>Saber</b> checks facts and skills: <i>¿Sabe dónde está?</i> <b>Conocer</b> checks familiarity with people and places: <i>¿Conoce a esta persona?</i> Orientation questions in the mental status exam use saber.</p>
<h3>Forms and uses</h3>
<table><tr><th></th><th>saber</th><th>conocer</th></tr><tr><td>yo</td><td>sé</td><td>conozco</td></tr><tr><td>usted / él / ella</td><td>sabe</td><td>conoce</td></tr><tr><td>nosotros</td><td>sabemos</td><td>conocemos</td></tr><tr><td>ustedes / ellos</td><td>saben</td><td>conocen</td></tr><tr><td>Use for</td><td>facts, information, how to do something</td><td>people, places, being acquainted</td></tr><tr><td>Followed by</td><td>que, a question word, an infinitive</td><td>a noun; for people, a + person</td></tr></table>
<p>Both verbs have an irregular yo form (<i>sé, conozco</i>) and are regular in the other persons of the present, so <i>sabe</i> and <i>conoce</i> are the forms you use with usted. With people, conocer needs the personal <b>a</b>: <i>Conozco a la doctora</i>.</p>
<h3>Meaning in the preterite</h3>
<p>In the preterite both verbs shift: <b>supe</b> = I found out, <b>conocí</b> = I met.</p>
<div class="ex"><b>¿Sabe dónde está?</b><span>Do you know where you are?</span></div>
<div class="ex"><b>¿Sabe qué día es hoy?</b><span>Do you know what day it is today?</span></div>
<div class="ex"><b>¿Sabe por qué vino hoy?</b><span>Do you know why you came today?</span></div>
<div class="ex"><b>No sé qué me pasa.</b><span>I do not know what is wrong with me.</span></div>
<div class="ex"><b>¿Sabe leer y escribir?</b><span>Can you read and write?</span></div>
<div class="ex"><b>¿Conoce a la señora que viene con usted?</b><span>Do you know the lady who is with you?</span></div>
<div class="ex"><b>No conozco a nadie en esta ciudad.</b><span>I do not know anyone in this city.</span></div>
<div class="ex"><b>Conozco este hospital; vine el año pasado.</b><span>I know this hospital; I came last year.</span></div>
<div class="ex"><b>Mi mamá sabe cocinar muy bien.</b><span>My mother knows how to cook very well.</span></div>
<div class="ex"><b>Conocí a mi esposo en la iglesia.</b><span>I met my husband at church.</span></div>
<div class="ex"><b>Supe la noticia ayer.</b><span>I found out the news yesterday.</span></div>
<div class="note">Clinical tip: orientation uses <i>saber</i>: <i>¿Sabe dónde está? ¿Sabe qué fecha es?</i> For recognising family, <i>conocer</i> can sound odd, so ask <i>¿Quién es esta persona?</i> or use <i>reconocer</i>: <i>¿Reconoce a su hija?</i> For social support ask <i>¿Conoce a alguien en esta ciudad?</i> and <i>¿Sabe a quién puede llamar?</i></div>
<h3>Common mistakes</h3>
<p><s>Conozco dónde estoy.</s> → <b>Sé dónde estoy.</b> A fact or a question word after the verb takes saber.</p>
<p><s>No sé a la doctora.</s> → <b>No conozco a la doctora.</b> People are known with conocer, and it needs the personal a.</p>
<p><s>Yo conozco hablar inglés.</s> → <b>Yo sé hablar inglés.</b> Skills (how to do something) take saber plus an infinitive.</p>`,
  quiz: [
    [`¿___ dónde está?`, [`Conoce`, `Es`, `Sabe`, `Tiene`], 2, `A fact (the place name) takes saber. Sabe.`],
    [`No ___ a nadie en esta ciudad.`, [`sé`, `conozco`, `supe`, `conozca`], 1, `People take conocer: conozco.`],
    [`Mi mamá ___ cocinar muy bien.`, [`conoce`, `conozco`, `sabes`, `sabe`], 3, `A skill (how to) takes saber: sabe cocinar.`],
    [`"Conocí a mi esposo en 2010" means`, [`I met my husband in 2010`, `I knew my husband in 2010`, `I know my husband since 2010`, `I learned my husband in 2010`], 0, `Conocí in the preterite means I met.`],
    [`What is the yo form of "saber"?`, [`sabo`, `sé`, `sabe`, `sepo`], 1, `Sé, with an accent. Without it, se is a different word.`],
    [`Which question checks orientation to place?`, [`¿Conoce dónde está?`, `¿Sabe este hospital?`, `¿Es dónde está?`, `¿Sabe dónde está?`], 3, `Saber plus a question word: ¿Sabe dónde está?`],
    [`¿___ a la señora que lo acompaña?`, [`Sabe`, `Conoce`, `Sé`, `Conozco`], 1, `A person with personal a takes conocer, and usted takes conoce.`]
  ],
  draft: true,
  after: 'present-progressive'
  },
  {
  id: 'obligation-advice', level: 'A2', unit: 'More verbs', title: `Obligation and advice: tener que, deber, hay que`,
  summary: `Say what the patient must do, should do, and what is important to do, and avoid the trap of "no tiene que".`,
  body: `<p>After the assessment you give advice: take the medicine, come back, rest. Spanish has several ways, and they differ in strength. A mix-up can send the wrong message, especially in the negative.</p>
<table><tr><th>Expression</th><th>Strength</th><th>Example</th></tr><tr><td>tener que + infinitive</td><td>personal necessity, firm</td><td>Tiene que tomar la pastilla todos los días.</td></tr><tr><td>deber + infinitive</td><td>should, advice</td><td>Debe descansar más.</td></tr><tr><td>hay que + infinitive</td><td>general rule, one must</td><td>Hay que dormir ocho horas.</td></tr><tr><td>es importante + infinitive</td><td>recommendation, softer</td><td>Es importante regresar si empeora.</td></tr></table>
<p>Tener changes with the person (<i>tengo que, tiene que, tenemos que</i>) and always needs <b>que</b>. <b>Deber</b> takes the infinitive directly, with no que. <b>Hay que</b> never changes and has no subject.</p>
<h3>The negative</h3>
<p><b>No debe</b> means you should not (it is forbidden or unsafe). <b>No tiene que</b> means you do not have to (it is not necessary). They are not interchangeable.</p>
<h3>In use</h3>
<div class="ex"><b>Tiene que tomar esta pastilla todos los días.</b><span>You have to take this pill every day.</span></div>
<div class="ex"><b>No debe tomar alcohol con este medicamento.</b><span>You should not drink alcohol with this medicine.</span></div>
<div class="ex"><b>Debe descansar más.</b><span>You should rest more.</span></div>
<div class="ex"><b>Hay que tomar la pastilla con comida.</b><span>The pill has to be taken with food.</span></div>
<div class="ex"><b>Es importante dormir ocho horas.</b><span>It is important to sleep eight hours.</span></div>
<div class="ex"><b>Es importante regresar si los síntomas empeoran.</b><span>It is important to come back if the symptoms get worse.</span></div>
<div class="ex"><b>Debe ir a urgencias si el dolor empeora.</b><span>You should go to the emergency room if the pain gets worse.</span></div>
<div class="ex"><b>Si está en crisis, es importante llamar al 988 y oprimir el 2.</b><span>If you are in crisis, it is important to call 988 and press 2.</span></div>
<div class="ex"><b>No tiene que venir mañana; la cita es el lunes.</b><span>You do not have to come tomorrow; the appointment is on Monday.</span></div>
<div class="ex"><b>¿Tiene que trabajar el fin de semana?</b><span>Do you have to work on the weekend?</span></div>
<div class="ex"><b>Tengo que cuidar a mis hijos y no tengo tiempo.</b><span>I have to take care of my children and I have no time.</span></div>
<div class="note">Clinical tip: say <i>no debe</i> for safety limits (alcohol, driving, stopping a medicine alone). Never say <i>no tiene que</i> for a limit, because the patient hears that it is not required. Patients also use <i>tengo que</i> to show their burdens: <i>Tengo que cuidar a mi mamá, no puedo faltar.</i> Listen for caregiver strain and ask who can help.</div>
<h3>Common mistakes</h3>
<p><s>Tiene tomar la pastilla.</s> → <b>Tiene que tomar la pastilla.</b> Tener needs que before the infinitive.</p>
<p><s>Debe que descansar.</s> → <b>Debe descansar.</b> Deber takes the infinitive directly, with no que.</p>
<p><s>No tiene que tomar alcohol con la pastilla.</s> → <b>No debe tomar alcohol con la pastilla.</b> No tiene que means you do not have to. To forbid, use no debe.</p>`,
  quiz: [
    [`Usted ___ que tomar la pastilla todos los días.`, [`debe`, `hay`, `es`, `tiene`], 3, `Tener + que + infinitive. With usted: tiene que. Hay does not fit with usted.`],
    [`Usted ___ descansar más.`, [`debe`, `tiene`, `hay`, `es`], 0, `Deber takes the infinitive directly. Tiene would need que.`],
    [`"No tiene que venir mañana" means`, [`You must not come tomorrow`, `You cannot come tomorrow`, `You do not have to come tomorrow`, `You should come tomorrow`], 2, `No tener que = not required.`],
    [`Which phrase tells a patient NOT to drink alcohol with a medicine?`, [`No tiene que tomar alcohol.`, `No hay que tomar alcohol.`, `No es importante tomar alcohol.`, `No debe tomar alcohol.`], 3, `No debe is a prohibition. The other options say it is not required or not important.`],
    [`___ importante dormir ocho horas.`, [`Es`, `Hay`, `Tiene`, `Debe`], 0, `Es importante + infinitive.`],
    [`___ que lavarse las manos.`, [`Tengo`, `Debe`, `Hay`, `Es`], 2, `Hay que + infinitive is the general rule with no subject.`],
    [`Si está en crisis, es importante ___ al 988.`, [`llamo`, `llamar`, `llamó`, `llama`], 1, `After es importante, use the infinitive.`]
  ],
  draft: true,
  after: 'saber-conocer'
  },
  {
  id: 'comparatives', level: 'A2', unit: 'More verbs', title: `Comparatives: más que, tan como, mejor, peor`,
  summary: `Compare today with last week, one medicine with another, and the worst pain with the rest.`,
  body: `<p>Change from baseline is what you track: better, the same or worse than last week? Comparisons give you that in one sentence. They also let a patient grade pain and mood without a scale.</p>
<table><tr><th>Pattern</th><th>Meaning</th><th>Example</th></tr><tr><td>más / menos + adjective + que</td><td>more / less than</td><td>Mi dolor es más fuerte que ayer.</td></tr><tr><td>tan + adjective + como</td><td>as ... as</td><td>No estoy tan nervioso como antes.</td></tr><tr><td>tanto/a/os/as + noun + como</td><td>as much / many as</td><td>Tengo tanto sueño como ayer.</td></tr><tr><td>más de / menos de + number</td><td>more / less than a number</td><td>Duermo menos de cuatro horas.</td></tr><tr><td>el / la más + adjective</td><td>the most</td><td>Es la doctora más amable.</td></tr></table>
<h3>Irregular forms</h3>
<p><b>bueno → mejor</b> (better), <b>malo → peor</b> (worse), <b>grande → mayor</b> (older, with people), <b>pequeño → menor</b> (younger). Use <i>el mejor, el peor</i> for the best and the worst. Do not say <i>más bueno</i> or <i>más malo</i>. For degree, use <i>mucho mejor</i> or <i>un poco peor</i>.</p>
<h3>In use</h3>
<div class="ex"><b>Me siento mejor que la semana pasada.</b><span>I feel better than last week.</span></div>
<div class="ex"><b>Me siento peor por la noche que por la mañana.</b><span>I feel worse at night than in the morning.</span></div>
<div class="ex"><b>¿Duerme más o menos que antes?</b><span>Do you sleep more or less than before?</span></div>
<div class="ex"><b>Duermo menos de cuatro horas.</b><span>I sleep less than four hours.</span></div>
<div class="ex"><b>Mi dolor es más fuerte que ayer.</b><span>My pain is stronger than yesterday.</span></div>
<div class="ex"><b>Ya no estoy tan nervioso como antes.</b><span>I am no longer as nervous as before.</span></div>
<div class="ex"><b>¿Es el peor dolor que ha tenido en su vida?</b><span>Is it the worst pain you have had in your life?</span></div>
<div class="ex"><b>Esta pastilla me ayuda más que la otra.</b><span>This pill helps me more than the other one.</span></div>
<div class="ex"><b>Mi hermano es mayor que yo.</b><span>My brother is older than me.</span></div>
<div class="ex"><b>Mi casa es más pequeña que la de mi mamá.</b><span>My house is smaller than my mother's.</span></div>
<div class="ex"><b>Hoy tengo tanto sueño como ayer.</b><span>Today I am as sleepy as yesterday.</span></div>
<div class="note">Clinical tip: the standard follow-up is <i>¿Está mejor, igual o peor que la semana pasada?</i> Add a number to make it measurable: <i>Del 0 al 10, ¿cuánto le duele hoy? ¿Y ayer?</i> For the worst pain use <i>el peor dolor que ha tenido</i>, which is also a screen for urgent chest or head pain.</div>
<h3>Common mistakes</h3>
<p><s>Me siento más mal que ayer.</s> → <b>Me siento peor que ayer.</b> Bueno and malo have their own forms: mejor and peor.</p>
<p><s>Duermo menos que cuatro horas.</s> → <b>Duermo menos de cuatro horas.</b> Before a number, use de, not que.</p>
<p><s>Estoy tan triste que antes.</s> → <b>Estoy tan triste como antes.</b> Equality uses tan ... como, not que.</p>`,
  quiz: [
    [`Me siento ___ que ayer. (better)`, [`más mejor`, `más bien`, `mejor`, `bueno`], 2, `The comparative of bueno is mejor. Do not add más.`],
    [`Duermo ___ de cuatro horas.`, [`menos`, `tan`, `mejor`, `que`], 0, `Menos de + number: less than four hours.`],
    [`No estoy ___ nervioso ___ antes.`, [`más ... como`, `tan ... que`, `tanto ... como`, `tan ... como`], 3, `Equality: tan + adjective + como.`],
    [`Mi hermano tiene 40 años y yo tengo 35. Mi hermano es ___ que yo.`, [`menor`, `peor`, `más joven`, `mayor`], 3, `Mayor means older. Menor and más joven mean younger.`],
    [`"El peor dolor" means`, [`The worst pain`, `The best pain`, `The most pain medicine`, `A bad pain`], 0, `El + peor = the worst.`],
    [`Mi casa es ___ pequeña que la de mi mamá.`, [`tan`, `mucho`, `más`, `mayor`], 2, `Más + adjective + que for more than.`],
    [`"¿Es el dolor más fuerte que ayer?" asks`, [`Is the pain the strongest ever?`, `Is the pain stronger than yesterday?`, `Is the pain as strong as yesterday?`, `Was the pain strong yesterday?`], 1, `Más fuerte que = stronger than.`]
  ],
  draft: true,
  after: 'obligation-advice'
  },
  {
  id: 'connectors-basic', level: 'A2', unit: 'More verbs', title: `Connectors: y, o, pero, sino, porque, por eso, así que`,
  summary: `Join ideas to give reasons and results, and hear how patients link cause and effect.`,
  body: `<p>Patients explain themselves with connectors: <i>No salgo porque tengo miedo</i>. They show how the patient links events, what they blame and what they conclude. Learn to hear the link as well as the facts.</p>
<h3>The connectors</h3>
<table><tr><th>Connector</th><th>Job</th><th>Example</th></tr><tr><td>y / e</td><td>and (e before i- or hi-)</td><td>Padre e hijo vinieron juntos.</td></tr><tr><td>o / u</td><td>or (u before o- or ho-)</td><td>¿Siete u ocho horas?</td></tr><tr><td>pero</td><td>but</td><td>Tomo la pastilla, pero sigo con insomnio.</td></tr><tr><td>sino</td><td>but rather, after a negative</td><td>No es tristeza, sino cansancio.</td></tr><tr><td>porque</td><td>because</td><td>No salgo porque tengo miedo.</td></tr><tr><td>por eso</td><td>that is why</td><td>Perdí el trabajo; por eso estoy preocupado.</td></tr><tr><td>así que</td><td>so</td><td>Me duele mucho, así que vine a urgencias.</td></tr><tr><td>aunque + indicative</td><td>although, a fact</td><td>Aunque tomo la pastilla, sigo oyendo las voces.</td></tr><tr><td>cuando</td><td>when</td><td>Cuando estoy nervioso, me sudan las manos.</td></tr></table>
<h3>Because: porque or por qué</h3>
<p><b>Porque</b> (one word) gives a reason inside an answer. <b>¿Por qué?</b> (two words, with an accent) is the question. For the future, <i>cuando</i> needs the subjunctive, which comes later: here it is only used for what is true or habitual.</p>
<div class="ex"><b>Duermo poco y me despierto muy temprano.</b><span>I sleep little and wake up very early.</span></div>
<div class="ex"><b>¿Duerme siete u ocho horas?</b><span>Do you sleep seven or eight hours?</span></div>
<div class="ex"><b>Tomo la pastilla, pero sigo con insomnio.</b><span>I take the pill, but I still have insomnia.</span></div>
<div class="ex"><b>No tengo tristeza, sino mucho cansancio.</b><span>I do not have sadness, but rather a lot of tiredness.</span></div>
<div class="ex"><b>No salgo porque tengo miedo.</b><span>I do not go out because I am afraid.</span></div>
<div class="ex"><b>Perdí el trabajo; por eso estoy preocupado.</b><span>I lost my job; that is why I am worried.</span></div>
<div class="ex"><b>Me duele mucho, así que vine a urgencias.</b><span>It hurts a lot, so I came to the emergency room.</span></div>
<div class="ex"><b>Aunque tomo la pastilla, sigo oyendo las voces.</b><span>Although I take the pill, I still hear the voices.</span></div>
<div class="ex"><b>Cuando estoy nervioso, me sudan las manos.</b><span>When I am nervous, my hands sweat.</span></div>
<div class="ex"><b>Padre e hijo vinieron juntos.</b><span>Father and son came together.</span></div>
<div class="ex"><b>¿Quiere café o té?</b><span>Would you like coffee or tea?</span></div>
<div class="note">Clinical tip: the connector shows what the patient thinks caused what. <i>No duermo porque me preocupo</i> puts worry first. <i>Me preocupo porque no duermo</i> puts sleep first. Ask <i>¿Qué fue primero?</i> The word <i>aunque</i> often shows reluctance about treatment: <i>Aunque la tomo, no me ayuda.</i></div>
<h3>Common mistakes</h3>
<p><s>Duermo siete o ocho horas.</s> → <b>Duermo siete u ocho horas.</b> O becomes u before a word that starts with o or ho.</p>
<p><s>No tengo hambre, pero sed.</s> → <b>No tengo hambre, sino sed.</b> After a negative, "but rather" is sino.</p>
<p><s>Estoy cansado por qué no duermo.</s> → <b>Estoy cansado porque no duermo.</b> In the middle of a sentence, because is one word, porque. Por qué is only the question.</p>`,
  quiz: [
    [`Duermo siete ___ ocho horas.`, [`o`, `y`, `u`, `e`], 2, `O becomes u before a word starting with o: siete u ocho.`],
    [`No tengo tristeza, ___ cansancio.`, [`pero`, `porque`, `aunque`, `sino`], 3, `Sino follows a negative and corrects it: not sadness, but rather tiredness.`],
    [`Me duele mucho, ___ vine a urgencias.`, [`porque`, `aunque`, `así que`, `sino`], 2, `Así que introduces the result: so.`],
    [`___ tomo la pastilla, sigo oyendo las voces.`, [`Porque`, `Aunque`, `Por eso`, `Y`], 1, `Aunque means although.`],
    [`No salgo ___ tengo miedo.`, [`por eso`, `por qué`, `sino`, `porque`], 3, `Porque (one word) gives the reason.`],
    [`Padre ___ hijo vinieron juntos.`, [`y`, `e`, `o`, `u`], 1, `Y becomes e before a word starting with i or hi: padre e hijo.`],
    [`Perdí el trabajo; ___ estoy preocupado.`, [`porque`, `aunque`, `sino`, `por eso`], 3, `Por eso means that is why, linking the cause to the result.`]
  ],
  draft: true,
  after: 'comparatives'
  },
  {
  id: 'review-a2', level: 'A2', unit: 'Review', title: `Review of A2: the points to keep`,
  summary: `One sentence for each A2 point, the commonest confusions, and a mixed quiz.`,
  body: `<p>A2 gives you the tools to take a short history: when something started, how things were, what changed and who gave what. Use this page to check that each point still works in a real interview. If one feels weak, go back to its lesson.</p>
<h3>The points at a glance</h3>
<table><tr><th>Point</th><th>Model sentence</th></tr><tr><td>Present tense</td><td>¿Cuántas horas duerme por la noche?</td></tr><tr><td>Feelings and gustar-type verbs</td><td>Me duele la cabeza y me da miedo salir.</td></tr><tr><td>Commands</td><td>Tome una pastilla dos veces al día.</td></tr><tr><td>Preterite</td><td>Ayer fui a urgencias y me atendieron enseguida.</td></tr><tr><td>Imperfect</td><td>Antes dormía ocho horas.</td></tr><tr><td>Preterite or imperfect</td><td>Estaba en el trabajo cuando empecé a sentir mareo.</td></tr><tr><td>Hace and desde</td><td>Estoy triste desde hace dos meses.</td></tr><tr><td>Present perfect</td><td>Nunca he estado hospitalizado.</td></tr><tr><td>Object pronouns</td><td>Se la di a las ocho.</td></tr><tr><td>Por and para</td><td>Tomo esta pastilla para dormir.</td></tr><tr><td>Present progressive</td><td>¿Qué medicinas está tomando?</td></tr><tr><td>Saber and conocer</td><td>No sé dónde estoy y no conozco a nadie.</td></tr><tr><td>Obligation and advice</td><td>No debe tomar alcohol con este medicamento.</td></tr><tr><td>Comparatives</td><td>Me siento peor que la semana pasada.</td></tr><tr><td>Connectors</td><td>No salgo porque tengo miedo.</td></tr></table>
<h3>Commonest confusions</h3>
<ul><li><b>Preterite or imperfect:</b> one event or a change, or a habit or background? <i>Me sentí mal</i> (a moment) against <i>Me sentía mal</i> (a period).</li><li><b>Por or para:</b> cause or purpose? <i>Vine por el dolor</i> against <i>Tomo esto para dormir</i>.</li><li><b>Lo or le:</b> lo is the thing or the person acted on; le is who receives. <i>La tomé</i> (the pill), <i>Le di la pastilla</i> (to him), <i>Se la di</i>.</li><li><b>Saber or conocer:</b> facts and skills against people and places. <i>Sé dónde está</i>, <i>Conozco a su hija</i>.</li><li><b>Hace or desde:</b> hace + time for ago or for; desde + a point; desde hace + an amount. <i>Desde el lunes</i>, <i>desde hace tres días</i>.</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>Ayer me desperté a las tres y no pude volver a dormir.</b><span>Yesterday I woke up at three and could not go back to sleep.</span></div>
<div class="ex"><b>Me siento triste desde hace un mes.</b><span>I have felt sad for a month.</span></div>
<div class="ex"><b>¿Le dio la pastilla? Sí, se la di a las ocho.</b><span>Did you give him the pill? Yes, I gave it to him at eight.</span></div>
<div class="ex"><b>Tomo esta pastilla para dormir, pero sigo durmiendo mal.</b><span>I take this pill to sleep, but I still sleep badly.</span></div>
<div class="ex"><b>¿Sabe dónde está?</b><span>Do you know where you are?</span></div>
<div class="ex"><b>Hoy me siento mejor que ayer, aunque todavía no he comido.</b><span>Today I feel better than yesterday, although I have not eaten yet.</span></div>
<div class="ex"><b>Tiene que tomarla todos los días.</b><span>You have to take it every day.</span></div>
<div class="ex"><b>Cuando era niño, vivía con mi abuela y la veía todos los días.</b><span>When I was a child, I lived with my grandmother and saw her every day.</span></div>
<div class="note">Clinical tip: when you take a history, go in this order: <i>¿Qué le pasa? ¿Desde cuándo? ¿Cómo era antes? ¿Qué cambió? ¿Qué ha tomado?</i> That uses the present, hace and desde, the imperfect, the preterite and the present perfect in five short questions.</div>`,
  quiz: [
    [`¿Qué medicina ___ tomando ahora?`, [`tiene`, `está`, `es`, `va`], 1, `Estar + gerund asks about what is happening now. Usted: está.`],
    [`Which sentence says "It frightens me to go out"?`, [`Soy miedo de salir.`, `Yo miedo salir.`, `Me da miedo salir.`, `Me doy miedo salir.`], 2, `Me da miedo + infinitive puts the feeling on the person.`],
    [`Which sentence means "My throat hurts"?`, [`Me dolen la garganta.`, `Me duelen la garganta.`, `Yo duelo la garganta.`, `Me duele la garganta.`], 3, `Garganta is singular, so duele, with me for the person.`],
    [`Which instruction says "Take one pill twice a day"?`, [`Toma una pastilla dos veces al día.`, `Tomar una pastilla dos días.`, `Tome una pastilla dos veces al día.`, `Tomó una pastilla dos veces.`], 2, `Usted command: tome. Toma is tú and tomó is past.`],
    [`Antes yo ___ bien, pero hace dos meses dejé de dormir.`, [`dormía`, `dormí`, `duermo`, `dormiré`], 0, `Antes sets a past habit, so the imperfect: dormía.`],
    [`Ayer ___ a urgencias y me atendieron enseguida.`, [`iba`, `voy`, `fui`, `he ido`], 2, `A completed action yesterday takes the preterite: fui.`],
    [`Estoy triste ___ dos meses.`, [`desde`, `por`, `desde hace`, `para`], 2, `Desde hace + an amount of time.`],
    [`Hoy no ___ la pastilla de la mañana.`, [`he tomado`, `tengo tomado`, `soy tomado`, `he tomé`], 0, `Haber plus the participle: he tomado.`],
    [`Le di la pastilla a mi papá. Short answer: ___ ___ di.`, [`Le la`, `La le`, `Se lo`, `Se la`], 3, `Le becomes se before la, and la stands for the pill.`],
    [`Gracias ___ esperar.`, [`para`, `desde`, `por`, `de`], 2, `Thanks are given for a reason: gracias por.`],
    [`No ___ a nadie en esta ciudad.`, [`sé`, `conozco`, `sabo`, `supe`], 1, `People take conocer: conozco.`],
    [`No ___ tomar alcohol con este medicamento.`, [`tiene que`, `hay que`, `es importante`, `debe`], 3, `No debe is the prohibition. No tiene que means not required.`]
  ],
  draft: true,
  after: 'connectors-basic',
  review: true
  }
]);
