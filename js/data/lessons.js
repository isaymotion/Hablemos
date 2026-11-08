/* Lessons: short grammar and culture lessons with a quiz.
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician once populated.
   Shape: window.LESSONS = [ { id, level ('A1'|'A2'|'B1'|'B2'), unit, title, summary, body: HTML, quiz: [[question, [options], correctIndex, explanation]], psych?: true, draft?: true } ]
   Example lines inside body: <div class="ex"><b>Spanish sentence</b><span>English</span></div> (these are recorded for audio); <div class="note">…</div>; <table>…</table>; <h3>, <p>, <ul>. */
window.LESSONS = [
  {
  id: 'sounds', level: 'A1', unit: 'Foundations', title: `Sounds, stress and written accents`,
  summary: `Spanish is spelled the way it sounds, and one accent mark can change who did what.`,
  body: `<p>Spanish spelling is regular. A few rules let you read any word aloud, and the accent mark tells you where to stress it. On a ward this matters because one mark can change a medicine instruction.</p>
<h3>Five pure vowels</h3>
<ul><li><b>a</b> as in "father", <b>e</b> as in "bed" but shorter, <b>i</b> as in "machine", <b>o</b> as in "more" without the glide, <b>u</b> as in "rule".</li><li>Do not reduce unstressed vowels to "uh". Say <i>to-mo</i>, not "tuh-muh". Vowels stay short and clear.</li></ul>
<h3>Where the stress falls</h3>
<ul><li>Words ending in a vowel, <b>n</b> or <b>s</b> are stressed on the next-to-last syllable: <i>HA-bla, TO-man, MA-dre</i>.</li><li>Words ending in any other consonant are stressed on the last syllable: <i>do-LOR, doc-TOR, de-pre-SIÓN</i>.</li><li>A written accent marks every exception: <i>médico, tomó, depresión, teléfono</i>. Words that follow the rules need no mark: <i>pastilla, ansiedad, hospital</i>.</li></ul>
<h3>Accents that change meaning</h3>
<table><tr><th>No accent</th><th>Accent</th></tr><tr><td>tomo (I take)</td><td>tomó (he or she took)</td></tr><tr><td>habla (speaks)</td><td>habló (spoke)</td></tr><tr><td>esta (this)</td><td>está (is)</td></tr><tr><td>si (if)</td><td>sí (yes)</td></tr><tr><td>tu (your)</td><td>tú (you)</td></tr><tr><td>el (the)</td><td>él (he)</td></tr></table>
<div class="ex"><b>¿Cómo está?</b><span>How are you? / How is he or she?</span></div>
<div class="ex"><b>Esta es mi hermana.</b><span>This is my sister.</span></div>
<div class="ex"><b>Tomo una pastilla cada noche.</b><span>I take one pill every night.</span></div>
<div class="ex"><b>Tomó la pastilla ayer.</b><span>He or she took the pill yesterday.</span></div>
<div class="ex"><b>Tengo treinta años.</b><span>I am thirty years old.</span></div>
<div class="ex"><b>Me duele la rodilla.</b><span>My knee hurts.</span></div>
<h3>Letters that surprise English speakers</h3>
<ul><li><b>ñ</b> sounds like "ny": <i>año</i> (year). Without the tilde, <i>ano</i> means anus, so never drop it.</li><li><b>ll</b> sounds like English "y" in most of Mexico and Central America. In Argentina and Uruguay it is closer to "sh".</li><li><b>rr</b> is a rolled r, and a single <b>r</b> is a quick tap: <i>pero</i> (but) and <i>perro</i> (dog).</li><li><b>j</b>, and <b>g</b> before e or i, sound like a harsh English "h": <i>mujer, jaqueca, gente</i>.</li><li><b>h</b> is silent: <i>hospital, hijo</i>. <b>qu</b> is "k" and the u is silent: <i>quiero</i>.</li><li><b>v</b> and <b>b</b> sound the same. In Latin America <b>z</b> and <b>c</b> before e or i sound like "s".</li></ul>
<div class="note">Clinical tip: when you give a time or a dose, say the stressed syllable clearly and repeat the number. A fast <i>tomó</i> and <i>tomo</i> can be confused by a nervous patient, so add a time word: <i>ayer</i> or <i>cada noche</i>.</div>`,
  quiz: [
    [`Which word is stressed on the last syllable?`, [`habla`, `doctor`, `médico`], 1, `Words ending in a consonant other than n or s take the stress on the last syllable: doc-TOR.`],
    [`In "Esta es mi madre", what does "esta" mean?`, [`is`, `this`, `she`], 1, `Without the accent, esta means "this". With the accent, está means "is".`],
    [`What is the difference between "tomo" and "tomó"?`, [`None, they sound the same`, `I take / he or she took`, `He takes / I took`], 1, `Tomo is I take (present). Tomó is he or she took (past). The accent marks the stressed last syllable.`],
    [`Which word means "year"?`, [`ano`, `año`, `anio`], 1, `Año has the tilde and sounds like "ny". Ano means anus.`],
    [`Which word has the rolled rr and means "dog"?`, [`pero`, `perro`, `both`], 1, `Perro (dog) has the rolled rr. Pero (but) has a single tap.`],
    [`A patient answers "si" in writing when you ask if they take the pill. What do you check?`, [`Nothing, it means yes`, `Whether the accent is missing: sí means yes, si means if`, `That they spelled it in capital letters`], 1, `Missing accents are common in handwriting. Confirm aloud if the answer is not clear.`]
  ],
  draft: true
  },
  {
  id: 'ser-estar', level: 'A1', unit: 'Foundations', title: `Ser and estar: being versus feeling`,
  summary: `Estar names states and feelings (está triste); ser names identity and lasting traits.`,
  body: `<p>Spanish has two verbs for "to be". For psychiatry the rule is simple: <b>estar</b> describes how someone is now (a state, a feeling, a place), and <b>ser</b> describes who or what someone is (identity, profession, a lasting trait).</p>
<table><tr><th>Estar (state, feeling, place)</th><th>Ser (identity, profession, trait)</th></tr><tr><td>yo estoy, usted está</td><td>yo soy, usted es</td></tr><tr><td>Está triste. He or she is sad.</td><td>Es enfermera. She is a nurse.</td></tr><tr><td>Está nervioso. He is nervous.</td><td>Es mi esposo. He is my husband.</td></tr><tr><td>Está en el hospital.</td><td>Es de Guatemala.</td></tr></table>
<h3>Feelings and states take estar</h3>
<div class="ex"><b>¿Cómo está hoy?</b><span>How are you today?</span></div>
<div class="ex"><b>Estoy muy nervioso desde ayer.</b><span>I have been very nervous since yesterday.</span></div>
<div class="ex"><b>Mi mamá está confundida.</b><span>My mother is confused.</span></div>
<div class="ex"><b>¿Está triste o asustada?</b><span>Are you sad or scared? (to a woman)</span></div>
<h3>Where the choice changes the meaning</h3>
<p>With some adjectives the verb changes the meaning. Learn these three first.</p>
<ul><li><i>Está deprimida</i>: she is depressed right now. <i>Es deprimente</i>: it is depressing (a situation). Do not say <i>es deprimida</i>.</li><li><i>Está enfermo</i>: he is sick right now. <i>Es enfermo</i> sounds like a label and can be offensive, so avoid it.</li><li><i>Está aburrido</i>: he is bored. <i>Es aburrido</i>: he is boring.</li></ul>
<div class="ex"><b>Mi hermano está enfermo desde hace un mes.</b><span>My brother has been sick for a month.</span></div>
<div class="ex"><b>Soy maestra y vivo sola.</b><span>I am a teacher and I live alone.</span></div>
<div class="ex"><b>¿Dónde está su hija?</b><span>Where is your daughter?</span></div>
<h3>Time and place</h3>
<p>Use <b>ser</b> for the day, the date and the time: <i>Hoy es martes. Son las tres.</i> Use <b>estar</b> for location: <i>Estamos en el consultorio.</i></p>
<div class="note">Clinical tip: ask about feelings with estar and about history with ser or tener. <i>¿Cómo está de ánimo?</i> asks about mood now. <i>¿Siempre ha sido tímido?</i> asks about a lifelong trait. The contrast helps you tell a state from a personality pattern.</div>`,
  quiz: [
    [`"Mi esposo ___ muy triste desde que perdió el trabajo." Which form fits?`, [`es`, `está`, `son`], 1, `A feeling that changed because of an event takes estar.`],
    [`A patient says "Soy enfermera." What does it tell you?`, [`Her job`, `She is sick`, `Her mood`], 0, `Ser with a noun gives identity or profession: I am a nurse.`],
    [`Which sentence says a woman is depressed now?`, [`Está deprimida.`, `Es deprimida.`, `Es depresión.`], 0, `Estar for a current state. Es deprimida is not natural.`],
    [`You want to ask where the patient's daughter is. Which is correct?`, [`¿Dónde es su hija?`, `¿Dónde está su hija?`, `¿Dónde tiene su hija?`], 1, `Location takes estar.`],
    [`Why avoid "Es enfermo" when talking about a patient?`, [`It is grammatically impossible`, `It labels the person as a sick type, not as sick now`, `It means he is a nurse`], 1, `Está enfermo describes a state. Es enfermo can sound like a label or an insult.`]
  ],
  draft: true
  },
  {
  id: 'gender-agreement', level: 'A1', unit: 'Foundations', title: `Gender and agreement`,
  summary: `Nouns are masculine or feminine, and adjectives match the person who is speaking or being described.`,
  body: `<p>Every Spanish noun is masculine or feminine, and adjectives and articles must match. For you the practical part is this: a patient describes <b>herself</b> with feminine endings and <b>himself</b> with masculine endings, so the ending also tells you something about the speaker.</p>
<h3>Articles and nouns</h3>
<ul><li>Masculine: <i>el</i> (the), <i>un</i> (a). Most nouns ending in <b>-o</b>: <i>el dolor, el mareo, el sueño</i>.</li><li>Feminine: <i>la</i>, <i>una</i>. Most nouns ending in <b>-a</b>, <b>-ión</b>, <b>-dad</b>: <i>la cabeza, la depresión, la ansiedad</i>.</li><li>Exceptions to memorize: <i>el día, el problema, el síntoma, la mano</i>.</li><li>Plural adds <b>-s</b> or <b>-es</b>: <i>los síntomas, las pastillas</i>.</li></ul>
<h3>Adjectives match the person</h3>
<table><tr><th>Masculine</th><th>Feminine</th><th>Meaning</th></tr><tr><td>cansado</td><td>cansada</td><td>tired</td></tr><tr><td>decaído</td><td>decaída</td><td>down, low</td></tr><tr><td>preocupado</td><td>preocupada</td><td>worried</td></tr><tr><td>solo</td><td>sola</td><td>alone</td></tr><tr><td>asustado</td><td>asustada</td><td>scared</td></tr><tr><td>tranquilo</td><td>tranquila</td><td>calm</td></tr></table>
<div class="ex"><b>Me siento muy decaída desde el parto.</b><span>I have felt very low since the birth. (a woman speaking)</span></div>
<div class="ex"><b>Estoy cansado todo el día.</b><span>I am tired all day. (a man speaking)</span></div>
<div class="ex"><b>Mi hija está muy callada.</b><span>My daughter is very quiet.</span></div>
<div class="ex"><b>Mi hijo está preocupado por el examen.</b><span>My son is worried about the exam.</span></div>
<p>Adjectives ending in <b>-e</b> or a consonant keep one form: <i>triste, fuerte, joven</i>. Those ending in <b>-o</b> change: <i>nervioso, nerviosa</i>.</p>
<h3>When you do not know</h3>
<ul><li>Use a neutral question: <i>¿Cómo se ha sentido?</i> has no gender.</li><li>Listen to how the patient describes themself and copy that ending.</li><li>Do not guess from appearance or from the name. Check the chart or ask.</li><li>Some patients use the neutral ending <b>-e</b> (<i>cansade</i>). Ask how they would like to be addressed and follow their lead.</li></ul>
<div class="ex"><b>¿Cómo se ha sentido esta semana?</b><span>How have you felt this week?</span></div>
<div class="ex"><b>¿Cómo prefiere que me dirija a usted?</b><span>How would you like me to address you?</span></div>
<div class="note">Clinical tip: write down a patient's own adjectives in the chart exactly as they said them. The gender ending is not a mistake to correct, and the word choice (<i>decaída, vacía, perdida</i>) often carries the diagnosis.</div>`,
  quiz: [
    [`A woman says "Estoy muy cansada." Which ending would a man use?`, [`cansada`, `cansado`, `cansade`], 1, `Masculine singular ends in -o: cansado.`],
    [`Which noun is feminine?`, [`el mareo`, `la ansiedad`, `el síntoma`], 1, `Nouns ending in -dad are feminine. Síntoma is a masculine exception.`],
    [`You do not know the patient's gender. Which question avoids the problem?`, [`¿Está cansado?`, `¿Está cansada?`, `¿Cómo se ha sentido?`], 2, `Se ha sentido has no gender. Cómo se ha sentido is neutral.`],
    [`Which adjective does not change between masculine and feminine?`, [`triste`, `preocupado`, `asustado`], 0, `Adjectives ending in -e keep one form: triste.`],
    [`A patient uses "-e" endings for themself. What do you do?`, [`Correct it to -o or -a`, `Follow their lead and ask how they want to be addressed`, `Ignore the person's wording in the chart`], 1, `Respect the patient's chosen wording and record their own words.`]
  ],
  draft: true
  },
  {
  id: 'tu-usted', level: 'A1', unit: 'Foundations', title: `Usted and tú: choosing how to address people`,
  summary: `Use usted with adults by default, tú with children and teens, and ask when unsure.`,
  body: `<p>Spanish has a formal <b>usted</b> and a familiar <b>tú</b>. In a US clinic, start with usted for every adult. It signals respect, and respect is the base of trust with most Spanish-speaking families. Move to tú only when the patient asks you to.</p>
<table><tr><th></th><th>Usted (formal)</th><th>Tú (familiar)</th></tr><tr><td>hablar</td><td>usted habla</td><td>tú hablas</td></tr><tr><td>comer</td><td>usted come</td><td>tú comes</td></tr><tr><td>vivir</td><td>usted vive</td><td>tú vives</td></tr><tr><td>ser / estar</td><td>usted es / está</td><td>tú eres / estás</td></tr><tr><td>tener</td><td>usted tiene</td><td>tú tienes</td></tr></table>
<p>The verb ending is the quickest sign: <b>-a / -e</b> with usted, <b>-as / -es</b> with tú. Pronouns: <i>le / lo / la / su</i> with usted, <i>te / tu</i> with tú.</p>
<h3>Who gets which</h3>
<ul><li>Adults, elders, family members of the patient: <b>usted</b>.</li><li>Children and teens: <b>tú</b>. It is warm and appropriate.</li><li>Colleagues: tú is common among peers, but follow their lead.</li></ul>
<div class="ex"><b>Buenos días, señora Rivera. ¿Cómo se siente hoy?</b><span>Good morning, Mrs. Rivera. How do you feel today?</span></div>
<div class="ex"><b>¿Cómo te llamas y cuántos años tienes?</b><span>What is your name and how old are you? (to a child)</span></div>
<div class="ex"><b>Don Luis, ¿cómo ha dormido esta semana?</b><span>Don Luis, how have you slept this week?</span></div>
<h3>Titles</h3>
<ul><li><b>Señor / señora</b>: safe for adults. <b>Señorita</b> for a young woman, though some prefer <i>señora</i>.</li><li><b>Don / Doña</b> + first name: respectful for older people (<i>doña Carmen</i>).</li><li><b>Licenciado / licenciada</b>: used in Mexico for anyone with a university degree. A patient may call you this.</li><li>Patients usually call a physician <b>doctor / doctora</b>, and residents are included.</li></ul>
<h3>Asking what they prefer</h3>
<div class="ex"><b>¿Cómo prefiere que le hable, de usted o de tú?</b><span>How would you prefer I speak to you, formally or informally?</span></div>
<div class="ex"><b>Puede tutearme si quiere.</b><span>You may use tú with me if you like.</span></div>
<div class="note">Clinical tip: switching to tú too early can feel disrespectful, especially with older adults. If a patient uses tú with you, you may stay with usted. Using tú with a teenager shows you see them, not their parents, as the patient.</div>`,
  quiz: [
    [`How do you address a 60-year-old new patient?`, [`With tú`, `With usted`, `With his first name only`], 1, `Use usted by default with adults, especially older ones.`],
    [`Which sentence uses usted?`, [`¿Cómo duermes?`, `¿Cómo duerme?`, `¿Cómo dormiste?`], 1, `Duerme is the usted form. Duermes is tú.`],
    [`Which form is right for a 14-year-old?`, [`¿Cómo se llama?`, `¿Cómo te llamas?`, `¿Cómo se llaman?`], 1, `Tú is normal with children and teens: te llamas.`],
    [`What does "doña Carmen" show?`, [`An older woman is addressed with respect`, `She is a nurse`, `She is the patient's daughter`], 0, `Don and doña are respect titles used with a first name.`],
    [`A patient says "Háblame de tú". What do you do?`, [`Refuse`, `Accept, or keep usted if you prefer, and be warm`, `Use his last name only`], 1, `Follow the patient's lead; either choice is fine if you stay respectful.`]
  ],
  draft: true
  },
  {
  id: 'questions', level: 'A1', unit: 'Foundations', title: `Asking questions`,
  summary: `Question words and tone let you open and focus every interview question.`,
  body: `<p>Spanish writes questions with <b>¿ … ?</b> at both ends. Every question word has an accent mark. Learn these eight and you can ask most of the history.</p>
<table><tr><th>Word</th><th>Meaning</th><th>Use</th></tr><tr><td>¿Qué?</td><td>what</td><td>¿Qué le pasa?</td></tr><tr><td>¿Cómo?</td><td>how</td><td>¿Cómo duerme?</td></tr><tr><td>¿Cuándo?</td><td>when</td><td>¿Cuándo empezó?</td></tr><tr><td>¿Dónde?</td><td>where</td><td>¿Dónde le duele?</td></tr><tr><td>¿Por qué?</td><td>why</td><td>¿Por qué cree que pasó?</td></tr><tr><td>¿Cuánto / cuánta / cuántos / cuántas?</td><td>how much / many</td><td>¿Cuántas horas duerme?</td></tr><tr><td>¿Quién?</td><td>who</td><td>¿Quién vive con usted?</td></tr><tr><td>¿Cuál?</td><td>which</td><td>¿Cuál es el problema principal?</td></tr></table>
<p><b>Cuánto</b> matches the thing counted: <i>cuánto tiempo, cuánta agua, cuántos años, cuántas pastillas</i>.</p>
<div class="ex"><b>¿Cómo le puedo ayudar hoy?</b><span>How can I help you today?</span></div>
<div class="ex"><b>¿Cuándo empezó a sentirse así?</b><span>When did you start to feel this way?</span></div>
<div class="ex"><b>¿Cuánto tiempo lleva así?</b><span>How long have you been like this?</span></div>
<div class="ex"><b>¿Qué tan seguido le pasa?</b><span>How often does it happen?</span></div>
<div class="ex"><b>¿Quién vive con usted?</b><span>Who lives with you?</span></div>
<div class="ex"><b>¿Por qué cree que le pasa esto?</b><span>Why do you think this is happening to you?</span></div>
<h3>Questions without a question word</h3>
<p>Yes or no questions use only the voice: the pitch rises at the end. <i>¿Duerme bien?</i> The statement is <i>Duerme bien.</i> You can also add <i>¿verdad?</i> or <i>¿no?</i> to confirm.</p>
<div class="ex"><b>¿Duerme bien por la noche?</b><span>Do you sleep well at night?</span></div>
<h3>Frequency</h3>
<p><i>¿Qué tan seguido?</i> is common in the Americas. <i>¿Con qué frecuencia?</i> is more formal and understood everywhere. Pair either one with an answer scale: <i>nunca, a veces, casi todos los días</i>.</p>
<div class="note">Clinical tip: ask one question at a time, then wait. Open <i>¿Cómo? ¿Qué?</i> questions get stories. Closed ones get "sí" or "no". Out of politeness, many patients will say "sí" to a long question they did not follow, so ask the key points again in a different form.</div>`,
  quiz: [
    [`Which question asks "How long have you been like this?"`, [`¿Cuándo está así?`, `¿Cuánto tiempo lleva así?`, `¿Quién lleva así?`], 1, `Cuánto tiempo lleva así asks duration.`],
    [`Which is correct?`, [`¿Cuánto horas duerme?`, `¿Cuántas horas duerme?`, `¿Cuántos horas duerme?`], 1, `Cuánto agrees with the noun: horas is feminine plural, so cuántas.`],
    [`How do you turn "Duerme bien" into a yes or no question?`, [`Raise your voice at the end and write ¿ ?`, `Add "qué"`, `Say it softer`], 0, `Intonation and the ¿ ? marks make it a question.`],
    [`Which phrase asks about frequency?`, [`¿Qué tan seguido le pasa?`, `¿Dónde le pasa?`, `¿Quién le pasa?`], 0, `Qué tan seguido means how often.`],
    [`A patient says "sí" to every long question. What do you do?`, [`Move on`, `Ask the key point again with a shorter open question`, `Stop the interview`], 1, `Politeness can produce an automatic yes. Rephrase and use open questions.`]
  ],
  draft: true
  },
  {
  id: 'negation', level: 'A1', unit: 'Foundations', title: `Saying no: negation and double negatives`,
  summary: `Spanish puts no before the verb and uses double negatives: no tengo nada.`,
  body: `<p>To negate a verb, put <b>no</b> before it. Spanish also requires a <b>double negative</b>: when <i>nada, nadie, nunca</i> or <i>ningún</i> come after the verb, <i>no</i> stays in front. This is correct Spanish, not an error.</p>
<table><tr><th>Word</th><th>Meaning</th><th>Example</th></tr><tr><td>nada</td><td>nothing</td><td>No tengo nada.</td></tr><tr><td>nadie</td><td>no one</td><td>No hay nadie.</td></tr><tr><td>nunca</td><td>never</td><td>No he tomado nunca.</td></tr><tr><td>ningún / ninguna</td><td>not any</td><td>No tengo ningún problema.</td></tr><tr><td>tampoco</td><td>neither, not either</td><td>Yo tampoco.</td></tr></table>
<div class="ex"><b>No duermo bien.</b><span>I do not sleep well.</span></div>
<div class="ex"><b>No tengo ganas de nada.</b><span>I do not feel like doing anything.</span></div>
<div class="ex"><b>No hay nadie que me ayude.</b><span>There is no one to help me.</span></div>
<div class="ex"><b>Nunca he tenido pensamientos así.</b><span>I have never had thoughts like that.</span></div>
<p>If <i>nunca</i> or <i>nadie</i> comes before the verb, drop <i>no</i>: <i>Nunca duermo bien.</i> <i>Nadie me visita.</i></p>
<h3>Ya no and todavía no</h3>
<ul><li><b>Ya no</b> = no longer. Something stopped: <i>Ya no duermo bien</i> (I used to).</li><li><b>Todavía no</b> / <b>aún no</b> = not yet: <i>Todavía no me siento mejor</i>.</li></ul>
<div class="ex"><b>Ya no salgo con mis amigos.</b><span>I do not go out with my friends anymore.</span></div>
<div class="ex"><b>Todavía no he empezado la medicina.</b><span>I have not started the medicine yet.</span></div>
<h3>Answering yes and no questions</h3>
<p>A short <i>no</i> is not enough when the question is negative. <i>¿No ha pensado en hacerse daño?</i> can be answered <i>No</i> (I have not) or understood as <i>No, sí he pensado</i>. Ask in the positive.</p>
<div class="ex"><b>¿Ha pensado en hacerse daño?</b><span>Have you thought about hurting yourself?</span></div>
<div class="note">Clinical tip: ask all risk questions in the positive form, and listen for <i>nunca, nada</i> and <i>ya no</i>. <i>Ya no tengo ganas</i> means the interest was there before and is now lost, a different history from never having it. For the answer to a risk question, ask a second time with different words if you are unsure.</div>`,
  quiz: [
    [`What does "Ya no duermo bien" mean?`, [`I never slept well`, `I no longer sleep well`, `I do not sleep yet`], 1, `Ya no marks a change: it used to be different.`],
    [`Which sentence is correct Spanish for "I have nothing"?`, [`Tengo nada.`, `No tengo nada.`, `No tengo algo.`], 1, `No stays before the verb with nada.`],
    [`"Todavía no me siento mejor" means`, [`I do not feel better yet`, `I never feel better`, `I no longer feel better`], 0, `Todavía no means not yet.`],
    [`Why is "¿No ha pensado en hacerse daño?" a poor question?`, [`It is rude`, `A "no" can mean either yes or no`, `It uses usted`], 1, `Negative questions can be answered ambiguously. Use the positive form.`],
    [`Which is correct when nunca comes before the verb?`, [`Nunca no duermo.`, `Nunca duermo bien.`, `No nunca duermo bien.`], 1, `With nunca before the verb, no is dropped.`]
  ],
  draft: true
  },
  {
  id: 'present-tense', level: 'A2', unit: 'Verbs', title: `Present tense for the interview`,
  summary: `Regular -ar, -er and -ir verbs plus the irregular verbs you use most: tener, sentir, dormir, poder, querer, ir, estar, hacer.`,
  body: `<p>You will use the present tense for most interview questions: sleep, appetite, mood, medicines. Use the <b>usted</b> form to address the patient and the <b>yo</b> form to understand the answer.</p>
<table><tr><th></th><th>hablar</th><th>comer</th><th>vivir</th></tr><tr><td>yo</td><td>hablo</td><td>como</td><td>vivo</td></tr><tr><td>usted</td><td>habla</td><td>come</td><td>vive</td></tr><tr><td>tú</td><td>hablas</td><td>comes</td><td>vives</td></tr><tr><td>ellos / ustedes</td><td>hablan</td><td>comen</td><td>viven</td></tr></table>
<h3>Irregular verbs you need first</h3>
<table><tr><th>Verb</th><th>yo</th><th>usted</th><th>Type</th></tr><tr><td>tener (have)</td><td>tengo</td><td>tiene</td><td>irregular yo, e to ie</td></tr><tr><td>sentir (feel)</td><td>siento</td><td>siente</td><td>e to ie</td></tr><tr><td>dormir (sleep)</td><td>duermo</td><td>duerme</td><td>o to ue</td></tr><tr><td>poder (can)</td><td>puedo</td><td>puede</td><td>o to ue</td></tr><tr><td>querer (want)</td><td>quiero</td><td>quiere</td><td>e to ie</td></tr><tr><td>ir (go)</td><td>voy</td><td>va</td><td>irregular</td></tr><tr><td>estar (be)</td><td>estoy</td><td>está</td><td>irregular</td></tr><tr><td>hacer (do)</td><td>hago</td><td>hace</td><td>irregular yo</td></tr></table>
<p>In the stem-changing verbs the change happens in the stressed syllable, so <i>nosotros</i> keeps the regular stem: <i>dormimos, queremos</i>.</p>
<div class="ex"><b>¿Cuántas horas duerme por la noche?</b><span>How many hours do you sleep at night?</span></div>
<div class="ex"><b>¿Tiene dificultad para quedarse dormido?</b><span>Do you have trouble falling asleep?</span></div>
<div class="ex"><b>¿Qué siente cuando está solo?</b><span>What do you feel when you are alone?</span></div>
<div class="ex"><b>No puedo dormir y no tengo hambre.</b><span>I cannot sleep and I am not hungry.</span></div>
<div class="ex"><b>Quiero dormir mejor, doctor.</b><span>I want to sleep better, doctor.</span></div>
<div class="ex"><b>¿Qué hace durante el día?</b><span>What do you do during the day?</span></div>
<h3>Habit versus now</h3>
<p>Use the simple present for habits (<i>Duermo mal</i>) and <b>estar + -ando / -iendo</b> for what is happening now: <i>¿Está tomando alguna medicina?</i> (Are you taking any medicine at the moment?). Both are natural.</p>
<div class="ex"><b>¿Está tomando alguna medicina?</b><span>Are you taking any medicine right now?</span></div>
<div class="note">Clinical tip: <i>Tomar</i> alone, when asked of a man, often means drinking alcohol: <i>¿Usted toma?</i> Say <i>¿Toma alcohol?</i> or <i>¿Toma bebidas alcohólicas?</i> so there is no confusion with <i>tomar medicina</i>.</div>`,
  quiz: [
    [`What is the usted form of "dormir"?`, [`duermo`, `duerme`, `duermes`], 1, `Usted duerme. Duermo is yo, duermes is tú.`],
    [`A patient says "No puedo dormir." What does it mean?`, [`I cannot sleep`, `I do not sleep much`, `I should not sleep`], 0, `Puedo is I can. No puedo dormir = I cannot sleep.`],
    [`Which sentence asks about a medicine the patient is taking right now?`, [`¿Toma medicina cada día?`, `¿Está tomando alguna medicina?`, `¿Tomó medicina?`], 1, `Estar + gerund (tomando) is the action in progress.`],
    [`Choose the correct yo form of "tener".`, [`teno`, `tengo`, `tiengo`], 1, `Tengo is irregular in the yo form.`],
    [`"¿Usted toma?" asked of a man can mean`, [`Do you take pills?`, `Do you drink alcohol?`, `Do you eat?`], 1, `Tomar often means drinking alcohol when no object is given.`]
  ],
  draft: true
  },
  {
  id: 'reflexive-feelings', level: 'A2', unit: 'Verbs', title: `Feelings and reflexive verbs`,
  summary: `Patients say me siento, se me olvida and me da miedo, not "I am sad".`,
  body: `<p>Spanish often places the feeling on the person with <b>me, te, se</b>. The patient is not "afraid"; fear "gives itself" to them: <i>me da miedo</i>. Learn the common patterns to follow the story.</p>
<h3>Sentirse (to feel)</h3>
<p><i>Me siento</i> + adjective: <i>me siento triste, sola, tranquilo</i>. With usted: <i>se siente</i>.</p>
<div class="ex"><b>¿Cómo se siente hoy?</b><span>How do you feel today?</span></div>
<div class="ex"><b>Me siento muy solo desde que murió mi esposa.</b><span>I feel very alone since my wife died.</span></div>
<h3>Me da… (it gives me…)</h3>
<table><tr><th>Pattern</th><th>Meaning</th></tr><tr><td>me da miedo</td><td>it scares me</td></tr><tr><td>me da coraje</td><td>it makes me angry (Mexico, Puerto Rico)</td></tr><tr><td>me da pena</td><td>I am embarrassed (Mexico) / I feel sad (elsewhere)</td></tr><tr><td>me da vergüenza</td><td>I am ashamed</td></tr><tr><td>me da tristeza</td><td>it makes me sad</td></tr><tr><td>me dan ganas de llorar</td><td>I feel like crying</td></tr></table>
<div class="ex"><b>Me da miedo quedarme solo en la casa.</b><span>I am afraid to stay alone in the house.</span></div>
<div class="ex"><b>Me da coraje todo lo que pasó.</b><span>Everything that happened makes me angry.</span></div>
<div class="ex"><b>Me da pena hablar de eso.</b><span>I feel embarrassed to talk about that.</span></div>
<h3>Things happen to me (se me…)</h3>
<p>Spanish uses <b>se me</b> + verb for events that are not the speaker's fault. The thing is the subject, so the verb agrees with it.</p>
<ul><li><i>Se me olvidan las cosas.</i> I forget things.</li><li><i>Se me quitó el hambre.</i> I lost my appetite.</li><li><i>Se me quita el sueño.</i> I cannot sleep.</li><li><i>Se me juntan los pensamientos.</i> My thoughts pile up.</li></ul>
<div class="ex"><b>Se me quitó el apetito hace una semana.</b><span>I lost my appetite a week ago.</span></div>
<div class="ex"><b>¿Se le olvidan las cosas con frecuencia?</b><span>Do you forget things often?</span></div>
<div class="note">Clinical tip: <i>me da pena</i> means very different things by country. In Mexico it usually means embarrassment or shyness. In Spain and parts of South America it can mean sorrow. Ask <i>¿Pena de qué?</i> or <i>¿Cómo es esa pena?</i> before charting sadness or guilt.</div>`,
  quiz: [
    [`How do you ask "How do you feel?" with usted?`, [`¿Cómo te sientes?`, `¿Cómo se siente?`, `¿Cómo me siento?`], 1, `Se siente is the usted form.`],
    [`"Me da miedo" means`, [`I am afraid / it scares me`, `I am embarrassed`, `I give fear`], 0, `Me da miedo is the usual way to say something scares me.`],
    [`A Mexican patient says "me da pena". Most likely`, [`She feels embarrassed`, `She is grieving`, `She has pain`], 0, `In Mexico pena commonly means shyness or embarrassment.`],
    [`"Se me quitó el apetito" means`, [`I took away my appetite`, `I lost my appetite`, `I want more appetite`], 1, `Se me quitó: it left me without my doing.`],
    [`What should you do with an unclear "pena"?`, [`Chart depression`, `Ask what kind of pena it is`, `Ignore it`], 1, `The word varies by country, so ask.`]
  ],
  draft: true
  },
  {
  id: 'gustar-doler', level: 'A2', unit: 'Verbs', title: `Doler, costar, molestar: verbs that work like gustar`,
  summary: `The thing hurting is the subject, and the person is "le": me duele la cabeza.`,
  body: `<p><b>Gustar</b>, <b>doler</b> and several clinical verbs work backwards. The person is the indirect object (<i>me, te, le, nos, les</i>) and the thing is the subject. The verb agrees with the thing, not with the person.</p>
<table><tr><th>Person</th><th>Pronoun</th><th>Example</th></tr><tr><td>I</td><td>me</td><td>Me duele la cabeza.</td></tr><tr><td>you (tú)</td><td>te</td><td>¿Te duele algo?</td></tr><tr><td>you (usted), he, she</td><td>le</td><td>¿Le duele el pecho?</td></tr><tr><td>we</td><td>nos</td><td>Nos preocupa mucho.</td></tr><tr><td>you (ustedes), they</td><td>les</td><td>Les molesta el ruido.</td></tr></table>
<p>Singular thing: <i>duele</i>. Plural thing: <i>duelen</i>. <i>Me duele la cabeza. Me duelen los pies.</i></p>
<h3>Verbs of this type to learn</h3>
<ul><li><b>doler</b>: <i>Me duele el estómago.</i></li><li><b>costar</b>: <i>Le cuesta levantarse.</i> (It is hard for him to get up.)</li><li><b>dar ganas</b>: <i>Le dan ganas de llorar.</i></li><li><b>molestar</b>: <i>Le molesta el ruido.</i></li><li><b>hacer falta</b>: <i>Le hace falta dormir.</i> (He needs sleep.)</li><li><b>importar</b>: <i>Ya no me importa nada.</i></li><li><b>gustar</b>: <i>Ya no me gusta salir.</i></li></ul>
<div class="ex"><b>¿Dónde le duele?</b><span>Where does it hurt?</span></div>
<div class="ex"><b>Me cuesta trabajo concentrarme.</b><span>It is hard for me to concentrate.</span></div>
<div class="ex"><b>Le cuesta mucho levantarse por la mañana.</b><span>It is very hard for him or her to get up in the morning.</span></div>
<div class="ex"><b>¿Le dan ganas de llorar sin razón?</b><span>Do you feel like crying for no reason?</span></div>
<div class="ex"><b>¿Le molesta el ruido o la luz?</b><span>Does noise or light bother you?</span></div>
<div class="ex"><b>Ya no me importa nada.</b><span>Nothing matters to me anymore.</span></div>
<div class="note">Clinical tip: <i>Ya no me importa nada</i> and <i>Ya no me gusta nada</i> are hopelessness and anhedonia in the patient's own words. Follow with <i>¿Desde cuándo?</i> and then ask directly about suicidal thoughts. Do not count <i>me duele el alma</i> as a physical complaint without asking more.</div>`,
  quiz: [
    [`Which is correct?`, [`Me duelen los pies.`, `Me dolen los pies.`, `Yo duelo los pies.`], 0, `The verb agrees with los pies (plural): duelen.`],
    [`"Le cuesta levantarse" means`, [`It is hard for him to get up`, `He likes to get up`, `He does not want to get up`], 0, `Costar here means to be hard.`],
    [`How do you ask a patient "Does noise bother you?" with usted?`, [`¿Te molesta el ruido?`, `¿Le molesta el ruido?`, `¿Me molesta el ruido?`], 1, `Le for usted.`],
    [`A patient says "Ya no me importa nada." What does it suggest?`, [`Hopelessness or anhedonia`, `A physical pain`, `A medication side effect only`], 0, `It expresses loss of interest or hopelessness; explore further.`],
    [`In "Le dan ganas de llorar", what is the subject?`, [`ganas`, `le`, `llorar`], 0, `The ganas (urges) are the subject, so dan is plural.`]
  ],
  draft: true
  },
  {
  id: 'past-timelines', level: 'A2', unit: 'Verbs', title: `Telling a history: past tenses and time words`,
  summary: `Use the imperfect for how things used to be and the preterite for what changed.`,
  body: `<p>A psychiatric history is a timeline. Patients say <i>antes dormía bien</i> and <i>hace dos meses dejé de dormir</i>. The two past tenses carry the story.</p>
<h3>Imperfect: how things were</h3>
<p>Endings: <b>-aba</b> for -ar verbs, <b>-ía</b> for -er and -ir verbs. Use it for habits, background and how someone used to be.</p>
<div class="ex"><b>Antes dormía bien y trabajaba todos los días.</b><span>Before, I slept well and worked every day.</span></div>
<h3>Preterite: what happened or changed</h3>
<p>Endings: <b>-é / -ó</b> for -ar, <b>-í / -ió</b> for -er and -ir. It marks a start, an end or a single event.</p>
<div class="ex"><b>Hace dos meses perdí el trabajo y dejé de dormir.</b><span>Two months ago I lost my job and stopped sleeping.</span></div>
<div class="ex"><b>Empezó a oír voces después del parto.</b><span>She began to hear voices after the birth.</span></div>
<table><tr><th>Verb</th><th>Imperfect (before)</th><th>Preterite (change)</th></tr><tr><td>dormir</td><td>dormía</td><td>durmió, dormí</td></tr><tr><td>tener</td><td>tenía</td><td>tuvo, tuve</td></tr><tr><td>ser / ir</td><td>era / iba</td><td>fue</td></tr><tr><td>hacer</td><td>hacía</td><td>hizo, hice</td></tr><tr><td>poder</td><td>podía</td><td>pudo, pude</td></tr></table>
<h3>How long, since when</h3>
<ul><li><b>Hace + time + que + present</b>: <i>Hace tres semanas que no duermo bien.</i></li><li><b>Desde</b> + point in time: <i>Estoy triste desde marzo.</i></li><li><b>Llevo + time + sin</b> + infinitive: <i>Llevo dos noches sin dormir.</i></li><li><b>Hace + time</b> alone = ago: <i>Pasó hace un año.</i></li></ul>
<div class="ex"><b>Hace tres semanas que no duermo bien.</b><span>I have not slept well for three weeks.</span></div>
<div class="ex"><b>Llevo dos noches sin dormir.</b><span>I have gone two nights without sleep.</span></div>
<div class="ex"><b>¿Desde cuándo se siente así?</b><span>Since when do you feel this way?</span></div>
<div class="note">Clinical tip: ask about the baseline with the imperfect and the change with the preterite: <i>¿Cómo era antes? ¿Qué cambió?</i> This tells you the episode onset, the level of functioning before it, and the precipitant. Fix an exact date with <i>¿Fue antes o después de…?</i> if the patient is vague.</div>`,
  quiz: [
    [`"Antes dormía bien" tells you`, [`The patient slept well before`, `The patient will sleep well`, `The patient slept once`], 0, `The imperfect describes a past habit.`],
    [`Choose the tense for a single event: "Hace dos meses ___ el trabajo."`, [`perdía`, `perdí`, `pierdo`], 1, `A single completed event takes the preterite: perdí.`],
    [`"Llevo tres noches sin dormir" means`, [`I have gone three nights without sleep`, `I carry three nights of sleep`, `I slept three nights`], 0, `Llevo + time + sin = have been without for that long.`],
    [`How do you ask "Since when?"`, [`¿Hasta cuándo?`, `¿Desde cuándo?`, `¿Hace cuándo que?`], 1, `Desde cuándo asks the start point.`],
    [`"Hace un año" means`, [`In a year`, `A year ago`, `Every year`], 1, `Hace + time = ago.`]
  ],
  draft: true
  },
  {
  id: 'commands-instructions', level: 'A2', unit: 'Verbs', title: `Giving instructions: commands and polite requests`,
  summary: `Use usted commands (tome, respire, dígame) and soften them with favor de and puede.`,
  body: `<p>Instructions on the ward are mostly usted commands. Direct commands are normal and not rude in Spanish if you add <i>por favor</i> and a respectful tone. Softer forms are useful for sensitive requests.</p>
<h3>How to form them</h3>
<table><tr><th>Infinitive</th><th>Usted command</th><th>Meaning</th></tr><tr><td>tomar</td><td>tome</td><td>take</td></tr><tr><td>respirar</td><td>respire</td><td>breathe</td></tr><tr><td>sentarse</td><td>siéntese</td><td>sit down</td></tr><tr><td>decir</td><td>dígame</td><td>tell me</td></tr><tr><td>llamar</td><td>llame</td><td>call</td></tr><tr><td>volver</td><td>vuelva</td><td>come back</td></tr><tr><td>esperar</td><td>espere</td><td>wait</td></tr></table>
<p>-ar verbs end in <b>-e</b>, -er and -ir verbs in <b>-a</b>. Positive commands attach the pronoun (<i>dígame, siéntese</i>). Negative ones keep it separate (<i>no me diga, no se levante</i>).</p>
<div class="ex"><b>Respire hondo, por favor.</b><span>Breathe deeply, please.</span></div>
<div class="ex"><b>Siéntese aquí y dígame qué siente.</b><span>Sit here and tell me what you feel.</span></div>
<div class="ex"><b>Tome una pastilla por la noche.</b><span>Take one pill at night.</span></div>
<div class="ex"><b>No deje de tomar la medicina sin hablar con nosotros.</b><span>Do not stop taking the medicine without talking to us.</span></div>
<div class="ex"><b>Si piensa en hacerse daño, llame al 988 y oprima 2 para español.</b><span>If you think about hurting yourself, call 988 and press 2 for Spanish.</span></div>
<h3>Softer alternatives</h3>
<ul><li><b>Favor de</b> + infinitive: <i>Favor de esperar aquí.</i> (Common on forms and signs.)</li><li><b>¿Me puede… ?</b> / <b>¿Podría… ?</b>: <i>¿Me puede decir su fecha de nacimiento?</i></li><li><b>Vamos a…</b> (we are going to): <i>Vamos a respirar juntos.</i></li><li><b>¿Le parece si… ?</b> <i>¿Le parece si empezamos?</i></li></ul>
<div class="ex"><b>Favor de esperar un momento.</b><span>Please wait a moment.</span></div>
<div class="ex"><b>¿Me puede decir su fecha de nacimiento?</b><span>Can you tell me your date of birth?</span></div>
<div class="note">Clinical tip: for a distressed patient, replace a bare command with <i>Vamos a…</i>. <i>Vamos a respirar juntos</i> invites rather than orders. With a teen, use tú: <i>Respira conmigo. Dime qué sientes.</i> For crisis instructions, say the number slowly and ask the patient to repeat it back: 9-8-8, and oprima dos for Spanish.</div>`,
  quiz: [
    [`What is the usted command for "tomar"?`, [`toma`, `tome`, `tomar`], 1, `-ar verbs take -e in the usted command.`],
    [`Which is the polite way to ask for a date of birth?`, [`Dígame su fecha`, `¿Me puede decir su fecha de nacimiento?`, `Fecha de nacimiento`], 1, `¿Me puede … ? is a polite request.`],
    [`"No deje de tomar la medicina" means`, [`Stop taking the medicine`, `Do not stop taking the medicine`, `Take the medicine twice`], 1, `No deje de = do not stop.`],
    [`A patient is crying and shaking. Which instruction is gentlest?`, [`Cálmese.`, `Vamos a respirar juntos.`, `Deje de llorar.`], 1, `Vamos a invites and does not order or blame.`],
    [`How do you tell a patient the crisis number?`, [`Say 9-8-8, oprima 2 para español, and ask them to repeat`, `Give a card only`, `Tell them to google it`], 0, `Say it slowly and confirm they can repeat it.`]
  ],
  draft: true
  },
  {
  id: 'subjunctive-basics', level: 'B1', unit: 'Verbs', title: `Subjunctive basics: quiero que, ojalá, para que`,
  summary: `Recognize and use the subjunctive in simple frames; it also appears in what patients wish and fear.`,
  body: `<p>The subjunctive appears when one person wants, hopes or requests something of another, or when an event is in the future or uncertain. You do not need the full system. Learn the frames, and recognize the form when the patient says it.</p>
<h3>Formation (present)</h3>
<p>Take the yo form, drop the -o, and use the "opposite" vowel: -ar verbs take -e, -er and -ir verbs take -a. <i>tomo → tome, duermo → duerma, salgo → salga, tengo → tenga</i>.</p>
<table><tr><th>Frame</th><th>Example</th></tr><tr><td>Quiero que + subjunctive</td><td>Quiero que tome esta pastilla.</td></tr><tr><td>Es importante que</td><td>Es importante que duerma ocho horas.</td></tr><tr><td>Para que (so that)</td><td>Para que sepamos cómo le va.</td></tr><tr><td>Cuando + future event</td><td>Cuando llegue a casa, avísele a su familia.</td></tr><tr><td>Ojalá (I hope)</td><td>Ojalá se sienta mejor pronto.</td></tr><tr><td>Antes de que (before)</td><td>Venga antes de que se acabe la medicina.</td></tr></table>
<div class="ex"><b>Quiero que tome esta pastilla por la noche.</b><span>I want you to take this pill at night.</span></div>
<div class="ex"><b>Es importante que duerma ocho horas.</b><span>It is important that you sleep eight hours.</span></div>
<div class="ex"><b>Le doy una cita para que sepamos cómo le va.</b><span>I am giving you an appointment so that we know how you are doing.</span></div>
<div class="ex"><b>Cuando llegue a casa, avísele a su familia.</b><span>When you get home, let your family know.</span></div>
<div class="ex"><b>Ojalá se sienta mejor pronto.</b><span>I hope you feel better soon.</span></div>
<h3>Hear it in patient speech</h3>
<p>The subjunctive often carries wishes. Listen for these.</p>
<ul><li><i>Quiero que me dejen en paz.</i> I want them to leave me alone.</li><li><i>Ojalá Dios me lleve.</i> I hope God takes me. (passive death wish, ask)</li><li><i>Ojalá me muriera.</i> I wish I were dead. (imperfect subjunctive, a wish contrary to fact; ask about suicidal thoughts)</li><li><i>No creo que me ayuden.</i> I do not think they will help me.</li></ul>
<div class="ex"><b>Ojalá me muriera y ya.</b><span>I wish I would die and that would be it.</span></div>
<div class="note">Clinical tip: <i>Ojalá me muriera</i> and <i>Ojalá Dios me llevara</i> are passive suicidal ideation in the patient's own words. Do not treat them as a figure of speech. Follow with a direct question: <i>¿Ha pensado en quitarse la vida?</i></div>`,
  quiz: [
    [`What does "Quiero que tome esta pastilla" mean?`, [`I want you to take this pill`, `I take this pill`, `I will take the pill`], 0, `Quiero que + subjunctive = I want you to.`],
    [`Which is the subjunctive of "dormir" (usted)?`, [`duerma`, `duerme`, `durmió`], 0, `Duermo → duerma.`],
    [`A patient says "Ojalá me muriera." What do you do?`, [`Treat it as a figure of speech`, `Ask directly about suicidal thoughts`, `Change the topic`], 1, `A wish to be dead is passive suicidal ideation; ask directly.`],
    [`Which sentence is right for "When you get home, call me"?`, [`Cuando llega a casa, llámeme.`, `Cuando llegue a casa, llámeme.`, `Cuando llegó a casa, llámeme.`], 1, `A future event after cuando uses the subjunctive: llegue.`],
    [`"Para que sepamos" means`, [`so that we know`, `because we know`, `we know that`], 0, `Para que expresses purpose.`]
  ],
  draft: true
  },
  {
  id: 'numbers-dates', level: 'A1', unit: 'Everyday life', title: `Numbers, ages, dates, times and frequency`,
  summary: `Numbers 0 to 100, ages, dates, clock times, 0 to 10 scales and frequency words you need in every interview.`,
  body: `<p>Numbers appear in every note: age, dose, hours of sleep, pain scores, dates. Learn them well enough to hear a fast answer.</p>
<ul><li><b>0 to 10</b>: cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez.</li><li><b>11 to 20</b>: once, doce, trece, catorce, quince, dieciséis, diecisiete, dieciocho, diecinueve, veinte.</li><li><b>Tens</b>: veinte, treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa, cien (100).</li></ul>
<p>From 31 on, join with <b>y</b>: <i>treinta y uno, cuarenta y cinco</i>. 21 to 29 are one word: <i>veintiuno, veintidós</i>. <i>Uno</i> becomes <i>un</i> before a masculine noun: <i>un año, veintiún años</i>.</p>
<h3>Ages, dates and times</h3>
<div class="ex"><b>¿Cuántos años tiene?</b><span>How old are you?</span></div>
<div class="ex"><b>Tengo cuarenta y dos años.</b><span>I am forty-two years old.</span></div>
<div class="ex"><b>¿Cuál es su fecha de nacimiento?</b><span>What is your date of birth?</span></div>
<div class="ex"><b>Nací el cuatro de julio de mil novecientos ochenta.</b><span>I was born on July 4, 1980.</span></div>
<p>Dates are written <b>day/month/year</b>: 03/04 is 3 April, not March 4. Always say the month aloud and repeat it back.</p>
<div class="ex"><b>Me despierto a las tres de la mañana.</b><span>I wake up at three in the morning.</span></div>
<p>Times: <i>Son las tres. Es la una. A las ocho de la noche.</i> Use <i>de la mañana, de la tarde, de la noche</i> to say am or pm.</p>
<h3>Scales and frequency</h3>
<div class="ex"><b>Del cero al diez, ¿qué tan fuerte es el dolor?</b><span>From zero to ten, how strong is the pain?</span></div>
<div class="ex"><b>¿Se siente así casi todos los días?</b><span>Do you feel like this almost every day?</span></div>
<table><tr><th>Word</th><th>Meaning</th></tr><tr><td>nunca</td><td>never</td></tr><tr><td>casi nunca</td><td>almost never</td></tr><tr><td>a veces</td><td>sometimes</td></tr><tr><td>varios días</td><td>several days</td></tr><tr><td>la mayoría de los días</td><td>most days</td></tr><tr><td>casi todos los días</td><td>nearly every day</td></tr><tr><td>todos los días</td><td>every day</td></tr></table>
<div class="note">Clinical tip: when you ask "from 0 to 10", say what zero and ten mean: <i>cero es nada y diez es lo peor que puede imaginar</i>. Patients may answer with words (<i>poquito, harto</i>) instead of a number. Write down the word and then ask for a number.</div>`,
  quiz: [
    [`What is "treinta y cinco"?`, [`25`, `35`, `53`], 1, `Treinta = 30, cinco = 5.`],
    [`A form reads 03/04/2025. What date is it in most of Latin America?`, [`March 4`, `April 3`, `The 30th of April`], 1, `Day comes first: 3 April.`],
    [`"A las tres de la mañana" means`, [`3 pm`, `3 am`, `Three days`], 1, `De la mañana = in the morning.`],
    [`How do you say "almost every day"?`, [`casi todos los días`, `a veces`, `nunca más`], 0, `Casi todos los días = nearly every day.`],
    [`A patient answers "harto" to a pain scale. What do you do?`, [`Chart 10`, `Record the word and ask for a number`, `Skip the scale`], 1, `Harto means a lot but is not a number; clarify.`]
  ],
  draft: true
  },
  {
  id: 'body-symptoms', level: 'A2', unit: 'Everyday life', title: `The body and its symptoms`,
  summary: `Head-to-toe words and the words for pain, dizziness, sweating, tremor, breathlessness and palpitations.`,
  body: `<p>Patients with anxiety, depression and psychosis report many physical complaints. These words help you hear them accurately.</p>
<table><tr><th>Spanish</th><th>English</th><th>Spanish</th><th>English</th></tr><tr><td>la cabeza</td><td>head</td><td>el estómago</td><td>stomach</td></tr><tr><td>el cuello</td><td>neck</td><td>la barriga / el vientre</td><td>belly</td></tr><tr><td>el pecho</td><td>chest</td><td>la espalda</td><td>back</td></tr><tr><td>el corazón</td><td>heart</td><td>el brazo / la mano</td><td>arm / hand</td></tr><tr><td>la garganta</td><td>throat</td><td>la pierna / el pie</td><td>leg / foot</td></tr><tr><td>los ojos / los oídos</td><td>eyes / ears</td><td>la piel</td><td>skin</td></tr></table>
<h3>Pain and discomfort</h3>
<ul><li><b>dolor</b>: pain. <i>Tengo dolor de cabeza.</i></li><li><b>molestia</b>: discomfort, nuisance. <i>Siento una molestia en el pecho.</i></li><li><b>ardor</b>: burning. <b>punzada</b>: stabbing. <b>peso</b>: heaviness. <b>nudo</b>: knot.</li></ul>
<div class="ex"><b>¿Dónde le duele?</b><span>Where does it hurt?</span></div>
<div class="ex"><b>Siento un nudo en el estómago.</b><span>I feel a knot in my stomach.</span></div>
<div class="ex"><b>Tengo un peso en el pecho.</b><span>I have a weight on my chest.</span></div>
<h3>Symptoms of anxiety and other problems</h3>
<table><tr><th>Spanish</th><th>English</th></tr><tr><td>el mareo / estoy mareado</td><td>dizziness / I feel dizzy</td></tr><tr><td>los sudores / sudo frío</td><td>sweating / cold sweats</td></tr><tr><td>el temblor / me tiemblan las manos</td><td>tremor / my hands shake</td></tr><tr><td>la falta de aire / me falta el aire</td><td>shortness of breath</td></tr><tr><td>las palpitaciones</td><td>palpitations</td></tr><tr><td>el hormigueo</td><td>tingling</td></tr><tr><td>las náuseas / el vómito</td><td>nausea / vomiting</td></tr></table>
<div class="ex"><b>Me falta el aire y siento que me voy a morir.</b><span>I am short of breath and feel like I am going to die.</span></div>
<div class="ex"><b>Se me acelera el corazón de repente.</b><span>My heart suddenly races.</span></div>
<div class="ex"><b>Me tiemblan las manos por las mañanas.</b><span>My hands shake in the mornings.</span></div>
<div class="ex"><b>Me siento mareado cuando me levanto.</b><span>I feel dizzy when I stand up.</span></div>
<div class="note">Clinical tip: <i>mareo</i> means different things: lightheadedness, vertigo or feeling faint. Ask <i>¿Siente que da vueltas el cuarto o que se va a desmayar?</i> Many patients express distress through the body (<i>me duele el corazón, nervios en el estómago</i>). Take the physical complaint seriously, then ask about worry, sleep and mood.</div>`,
  quiz: [
    [`What does "Me falta el aire" mean?`, [`I lack air / I am short of breath`, `I like air`, `I have a cold`], 0, `Faltar = to lack. Me falta el aire = short of breath.`],
    [`"Siento un nudo en el estómago" is`, [`A knot in the stomach, a common anxiety description`, `A stomach infection`, `Hunger`], 0, `Nudo = knot. Common for anxiety.`],
    [`Which word is a "tremor"?`, [`sudor`, `temblor`, `mareo`], 1, `Temblor.`],
    [`How do you ask "Where does it hurt?"`, [`¿Dónde le duele?`, `¿Qué le duele dónde?`, `¿Cuándo le duele?`], 0, `Dónde le duele.`],
    [`What does "mareo" ask you to clarify?`, [`Whether the room spins or the person feels faint`, `The patient's age`, `The date it started only`], 0, `Mareo is vague: ask about spinning or faintness.`]
  ],
  draft: true
  },
  {
  id: 'medicines-dosing', level: 'A2', unit: 'Everyday life', title: `Medicines and dosing instructions`,
  summary: `Say how, when and how much to take, and check understanding with teach-back.`,
  body: `<p>A medicine instruction has three parts: <b>what</b>, <b>how much and how often</b>, and <b>with what or when</b>. Say each part clearly, then ask the patient to repeat it back.</p>
<table><tr><th>Spanish</th><th>English</th></tr><tr><td>la pastilla / la tableta</td><td>pill / tablet</td></tr><tr><td>la cápsula</td><td>capsule</td></tr><tr><td>las gotas</td><td>drops</td></tr><tr><td>el jarabe</td><td>syrup</td></tr><tr><td>la inyección</td><td>injection</td></tr><tr><td>el parche</td><td>patch</td></tr><tr><td>la dosis</td><td>dose</td></tr><tr><td>el efecto secundario</td><td>side effect</td></tr></table>
<h3>When to take it</h3>
<ul><li><b>una vez al día</b> once a day; <b>dos veces al día</b> twice a day.</li><li><b>cada ocho horas</b> every 8 hours; <b>cada doce horas</b> every 12 hours.</li><li><b>por la mañana, por la noche, antes de dormir</b>.</li><li><b>en ayunas</b> on an empty stomach; <b>con comida</b> with food; <b>después de comer</b>.</li></ul>
<div class="ex"><b>Tome una pastilla cada ocho horas.</b><span>Take one pill every eight hours.</span></div>
<div class="ex"><b>Tómela por la noche, antes de dormir.</b><span>Take it at night, before bed.</span></div>
<div class="ex"><b>Tome la cápsula con comida.</b><span>Take the capsule with food.</span></div>
<div class="ex"><b>Esta no se toma en ayunas.</b><span>This one is not taken on an empty stomach.</span></div>
<h3>Side effects and missed doses</h3>
<div class="ex"><b>¿Ha tenido efectos secundarios como mareo, boca seca o temblor?</b><span>Have you had side effects like dizziness, dry mouth or tremor?</span></div>
<div class="ex"><b>Si se le olvida una dosis, tómela en cuanto se acuerde, pero no tome dos juntas.</b><span>If you miss a dose, take it as soon as you remember, but do not take two together.</span></div>
<h3>Teach-back</h3>
<div class="ex"><b>Para estar seguro de que expliqué bien, ¿me puede decir cómo va a tomar esta medicina?</b><span>To be sure I explained well, can you tell me how you will take this medicine?</span></div>
<div class="note">Clinical tip: <i>tres veces al día</i> and <i>cada ocho horas</i> are not the same for patients, so say which you mean. Many patients call every medicine <i>remedio</i> or <i>medicina</i>, and <i>remedio</i> may include teas and herbal products. Ask <i>¿Toma algún remedio, té o producto natural?</i> to find interactions.</div>`,
  quiz: [
    [`"Cada ocho horas" means`, [`Eight times a day`, `Every eight hours`, `At eight o'clock`], 1, `Cada + time = every.`],
    [`Which phrase means "on an empty stomach"?`, [`en ayunas`, `con comida`, `sin hambre`], 0, `En ayunas.`],
    [`What does "efecto secundario" mean?`, [`Second dose`, `Side effect`, `Second opinion`], 1, `Efecto secundario = side effect.`],
    [`A patient says "Sí, entiendo" but looks unsure. What is the best next step?`, [`Move on`, `Ask for teach-back: how will you take it?`, `Repeat louder`], 1, `Teach-back confirms understanding.`],
    [`Why ask about "remedios"?`, [`They may include herbal products that interact`, `They mean only prescriptions`, `They are always harmless`], 0, `Herbal remedies can interact with psychiatric medicines.`]
  ],
  draft: true
  },
  {
  id: 'regional-variety', level: 'B1', unit: 'Natural speech', title: `Regional variety: what you will hear`,
  summary: `Words and sounds differ by country; keep one neutral baseline and learn to recognize the rest.`,
  body: `<p>Your patients come from Mexico, Central America, the Caribbean and South America. The grammar is shared. Vocabulary and sound change. Teach yourself one neutral baseline for speaking, and learn to recognize the variants.</p>
<table><tr><th>Meaning</th><th>Common form</th><th>Other forms</th></tr><tr><td>to talk, to chat</td><td>hablar, conversar</td><td>platicar (Mexico, Central America)</td></tr><tr><td>now / in a moment</td><td>ahora</td><td>ahorita (Mexico: right now or soon)</td></tr><tr><td>anger</td><td>enojo</td><td>coraje (Mexico, Puerto Rico)</td></tr><tr><td>job</td><td>trabajo</td><td>chamba (Mexico), pega (Costa Rica), jale (Mexico)</td></tr><tr><td>car</td><td>carro, auto</td><td>coche (Mexico, Spain), carro (Caribbean, Colombia)</td></tr><tr><td>computer</td><td>computadora</td><td>ordenador (Spain)</td></tr><tr><td>you (informal)</td><td>tú</td><td>vos (Argentina, Uruguay, Central America)</td></tr></table>
<h3>Sound differences</h3>
<ul><li><b>Seseo</b>: in Latin America <i>z</i> and <i>ce/ci</i> are pronounced like <i>s</i>: <i>cinco</i> = "sinco".</li><li><b>Aspirated or dropped s</b> in the Caribbean and the coasts: <i>¿cómo ehtá?</i> for <i>¿cómo está?</i>.</li><li><b>Voseo</b>: <i>vos tenés, vos sos</i> instead of <i>tú tienes</i>. You can still use usted.</li></ul>
<div class="ex"><b>¿Quiere que platiquemos un rato?</b><span>Would you like us to talk for a while?</span></div>
<div class="ex"><b>Perdí la chamba el mes pasado.</b><span>I lost my job last month.</span></div>
<div class="ex"><b>Ahorita no he comido nada.</b><span>I have not eaten anything yet. (Mexico)</span></div>
<div class="ex"><b>Me da mucho coraje.</b><span>It makes me very angry.</span></div>
<div class="ex"><b>Vos tenés que descansar.</b><span>You need to rest. (voseo)</span></div>
<p><b>Ahorita</b> is a good example of why you should check. In Mexico <i>ahorita vengo</i> may mean "I'll be back in a minute" or "later", and a patient who says <i>ahorita no tengo dolor</i> means right now.</p>
<div class="note">Clinical tip: use the neutral baseline words (<i>trabajo, hablar, enojo</i>) yourself. When the patient uses a regional term you do not know, repeat it with a curious tone and ask <i>¿Qué quiere decir con eso?</i> Do not copy the accent. Do not assume the country from the name; ask where the patient is from.</div>`,
  quiz: [
    [`"Perdí la chamba" most likely means`, [`I lost my job`, `I lost my car`, `I lost my medicine`], 0, `Chamba = job in Mexico.`],
    [`Which form is voseo?`, [`Tú tienes`, `Vos tenés`, `Usted tiene`], 1, `Vos tenés is voseo.`],
    [`A patient says "ahorita". What should you do?`, [`Assume it means right now`, `Ask when exactly`, `Chart as a time of day`], 1, `Ahorita can mean now, soon or later; clarify.`],
    [`"Coraje" in Mexico means`, [`Courage`, `Anger`, `Coldness`], 1, `Coraje is anger; English "courage" is valentía.`],
    [`What is the best baseline for the clinician to speak?`, [`Mimic the patient's dialect`, `Neutral Spanish`, `Spain Spanish`], 1, `Neutral baseline plus recognition of variants.`]
  ],
  draft: true
  },
  {
  id: 'spanglish', level: 'B1', unit: 'Natural speech', title: `Spanglish and code-switching`,
  summary: `Many US patients mix English and Spanish, and some words only make sense in US Spanish.`,
  body: `<p>Bilingual patients mix English and Spanish in the same sentence. This is normal and is not a sign of confusion. Many US Spanish words are adapted English words. Learn the common ones to follow the story.</p>
<table><tr><th>Spanglish</th><th>Standard Spanish</th><th>English</th></tr><tr><td>la troca</td><td>la camioneta</td><td>truck</td></tr><tr><td>el bildin</td><td>el edificio</td><td>building</td></tr><tr><td>aplicar</td><td>solicitar</td><td>to apply</td></tr><tr><td>parquear</td><td>estacionar</td><td>to park</td></tr><tr><td>el break</td><td>el descanso</td><td>break</td></tr><tr><td>rentar</td><td>alquilar</td><td>to rent</td></tr><tr><td>la marqueta</td><td>el mercado</td><td>market</td></tr><tr><td>llamar para atrás</td><td>devolver la llamada</td><td>to call back</td></tr><tr><td>el lonche</td><td>el almuerzo</td><td>lunch</td></tr></table>
<div class="ex"><b>Voy a parquear la troca y ya vengo.</b><span>I am going to park the truck and I will be right back.</span></div>
<div class="ex"><b>Apliqué para Medicaid pero todavía no me contestan.</b><span>I applied for Medicaid but they have not answered me yet.</span></div>
<div class="ex"><b>En el trabajo no me dan break.</b><span>At work they do not give me a break.</span></div>
<div class="ex"><b>Vivo en un bildin con mi tía.</b><span>I live in a building with my aunt.</span></div>
<div class="ex"><b>Devuélvame la llamada si tiene preguntas.</b><span>Call me back if you have questions.</span></div>
<h3>Code-switching</h3>
<ul><li>Switching languages mid-sentence is a skill, not a symptom.</li><li>People often use the language where the memory happened: work in English, family in Spanish.</li><li>Emotional topics may switch to Spanish and technical topics to English.</li></ul>
<h3>How to respond</h3>
<ul><li>Understand and answer in your own standard Spanish. Do not copy the Spanglish words, and do not correct them.</li><li>If a word is unclear, ask <i>¿Qué quiere decir con eso?</i></li><li>Offer English if the patient seems more comfortable. Ask, do not assume.</li></ul>
<div class="ex"><b>¿Prefiere hablar en español o en inglés, o mezclamos?</b><span>Do you prefer to speak Spanish or English, or shall we mix?</span></div>
<div class="note">Clinical tip: switching language is not thought disorder. Disorganization shows in both languages: loose associations, word salad, loss of the thread in Spanish and in English. If you cannot tell, ask a certified interpreter or a bilingual clinician to help assess.</div>`,
  quiz: [
    [`"La troca" means`, [`The truck`, `The trough`, `The track`], 0, `Troca is Spanglish for truck.`],
    [`What does "parquear" mean?`, [`To park`, `To talk`, `To pack`], 0, `Parquear = park.`],
    [`A bilingual patient switches languages mid-sentence. What does it suggest?`, [`Thought disorder`, `Normal code-switching`, `Confusion`], 1, `Code-switching is normal in bilingual speakers.`],
    [`What should you do when a patient uses a Spanglish word?`, [`Correct it`, `Understand and reply in standard Spanish`, `Copy it exactly`], 1, `Respond in your own register without correcting.`],
    [`"Llamar para atrás" means`, [`To call back`, `To call behind`, `To call twice`], 0, `It translates "call back".`]
  ],
  draft: true
  },
  {
  id: 'softeners', level: 'B1', unit: 'Natural speech', title: `Softeners: polite, indirect speech`,
  summary: `Diminutives, con permiso and indirect requests make a hard question easier to hear.`,
  body: `<p>Spanish uses many softeners. The same question can sound blunt or gentle. In clinical work, gentle opens more doors.</p>
<h3>Softening phrases</h3>
<ul><li><b>¿Le parece si… ?</b> Would it be all right if…? <i>¿Le parece si empezamos?</i></li><li><b>Con permiso</b>: excuse me, may I. Say it before entering a room or touching.</li><li><b>Permítame</b> / <b>Disculpe</b>: allow me / pardon me.</li><li><b>Una preguntita</b>: a little question. Used before a sensitive topic.</li><li><b>Nomás</b> (Mexico): just. <i>Nomás quiero saber cómo duerme.</i></li></ul>
<div class="ex"><b>¿Le parece si empezamos con unas preguntas?</b><span>Would it be all right if we start with a few questions?</span></div>
<div class="ex"><b>Con permiso, voy a tomarle la presión.</b><span>Excuse me, I am going to take your blood pressure.</span></div>
<div class="ex"><b>Una preguntita un poco personal: ¿ha pensado en hacerse daño?</b><span>A small, rather personal question: have you thought about hurting yourself?</span></div>
<div class="ex"><b>Nomás quiero saber cómo ha dormido.</b><span>I just want to know how you have slept.</span></div>
<div class="ex"><b>Perdón que lo interrumpa, pero quiero entender bien.</b><span>Sorry to interrupt, but I want to understand well.</span></div>
<h3>Diminutives</h3>
<p>The endings <b>-ito / -ita</b> soften and show closeness: <i>un momentito, un poquito, un ratito</i>. They can also minimize. A patient who says <i>estoy un poquito nervioso</i> may be very anxious.</p>
<h3>Interrupting kindly</h3>
<ul><li>Use the patient's name or title first: <i>Doña Carmen, perdón…</i></li><li>Say you are interrupting to understand: <i>Perdón que la interrumpa para entender bien.</i></li><li>Do not cut off a story abruptly. Say <i>Quiero escuchar todo esto. ¿Me permite hacer una pregunta?</i></li></ul>
<div class="note">Clinical tip: patients often understate with diminutives and soft words: <i>un poquito de tristeza, nomás unos nervios</i>. Ask for details and a scale (<i>del cero al diez</i>) and do not take the soft word as the severity. Softeners also work in reverse: a gentle <i>una preguntita</i> makes a risk question more answerable.</div>`,
  quiz: [
    [`When do you say "Con permiso"?`, [`Before entering or touching`, `After a diagnosis only`, `Only at the end`], 0, `It asks permission and shows respect.`],
    [`A patient says "estoy un poquito nervioso". What do you do?`, [`Assume mild anxiety`, `Ask for details and a 0 to 10 rating`, `End the interview`], 1, `Diminutives can minimize.`],
    [`"Nomás" means`, [`Only, just`, `Never`, `No more`], 0, `Nomás = just (Mexico).`],
    [`How do you politely interrupt?`, [`Perdón que la interrumpa`, `¡Pare!`, `Silencio`], 0, `Perdón que la interrumpa.`],
    [`Why use "una preguntita" before a risk question?`, [`It softens the question`, `It shortens the interview`, `It is required by law`], 0, `It opens a sensitive topic gently.`]
  ],
  draft: true
  },
  {
  id: 'values', level: 'B1', unit: 'Culture', title: `Cultural values in the interview`,
  summary: `Familismo, respeto, personalismo, simpatía, fatalismo and confianza shape how you build trust and involve the family.`,
  body: `<p>These are common values in many Latino communities. They are patterns, not rules. Every patient is an individual, and acculturation, region, class and generation matter. Use them to ask better questions, not to predict answers.</p>
<h3>Six values and what they mean for you</h3>
<ul><li><b>Familismo</b>: the family comes first. Decisions are often shared, and family can be a main source of support and of stress. Ask who the patient wants involved: <i>¿Quién de su familia quiere que participe en su tratamiento?</i></li><li><b>Respeto</b>: respect for age, status and the clinician. Use usted and titles. A patient may agree out of respect without agreeing in fact, so check understanding.</li><li><b>Personalismo</b>: trust grows through a warm, personal relationship more than through credentials. Spend a few minutes on how the person is, where they are from, their family.</li><li><b>Simpatía</b>: a pleasant, non-confrontational style that avoids conflict. A smile and a "sí" may hide disagreement or distress.</li><li><b>Fatalismo</b>: the belief that events are shaped by fate or God. It can be faith-based acceptance and strength, not passivity. Explore, do not assume.</li><li><b>Confianza</b>: trust and ease between people. Without it, patients keep secrets, especially about suicide, substances and sex.</li></ul>
<div class="ex"><b>Mucho gusto, señora. ¿Cómo está usted? ¿De dónde es?</b><span>Pleased to meet you, ma'am. How are you? Where are you from?</span></div>
<div class="ex"><b>¿Quién de su familia quiere que participe?</b><span>Who in your family do you want to take part?</span></div>
<div class="ex"><b>Si Dios quiere, voy a mejorar.</b><span>God willing, I will get better.</span></div>
<div class="ex"><b>Voy a estar con usted en cada paso de su tratamiento.</b><span>I will be with you at each step of your treatment.</span></div>
<div class="ex"><b>¿Hay algo que le preocupa y que le da pena decirme?</b><span>Is there something that worries you and that you feel embarrassed to tell me?</span></div>
<h3>The family's role</h3>
<ul><li>Family often come to appointments and expect to be informed. Ask the patient first, in private, what may be shared.</li><li>Offer a family meeting to explain the diagnosis and the plan.</li><li>Do not use family to interpret the patient's account (see the interpreting lesson).</li></ul>
<div class="note">Clinical tip: a patient who says "sí" to everything may be showing respeto and simpatía, not agreement. Use open questions and teach-back (<i>¿Cómo va a tomar la medicina?</i>). Treat <i>Si Dios quiere</i> as a strength to build on, and ask what the patient will do in the meantime.</div>`,
  quiz: [
    [`Which value describes a warm personal relationship before business?`, [`Personalismo`, `Fatalismo`, `Respeto`], 0, `Personalismo.`],
    [`A patient says "Si Dios quiere". How do you respond?`, [`Treat it as passivity`, `Explore it, it may be a faith-based strength`, `Ignore it`], 1, `Fatalismo can include hope and coping.`],
    [`Why check understanding with teach-back?`, [`Respeto may lead to agreeing without understanding`, `Patients are not smart`, `It is a legal rule`], 0, `Out of respect patients may say yes without understanding.`],
    [`A patient's family wants to attend the visit. What should you do first?`, [`Exclude them`, `Ask the patient privately what to share`, `Share everything`], 1, `Ask the patient, then involve family accordingly.`],
    [`Familismo means`, [`Family comes first`, `Fame`, `Only the doctor decides`], 0, `The family is central to decisions and support.`]
  ],
  draft: true
  },
  {
  id: 'faith-folk', level: 'B1', unit: 'Culture', title: `Faith, folk healing and when a belief is a delusion`,
  summary: `How to ask about faith, curanderos and folk illness respectfully, and how to separate culture from psychosis.`,
  body: `<p>Faith and folk healing are part of how many patients understand illness. Ask about them early and respectfully. They are often a source of strength and a clue to the patient's explanatory model.</p>
<h3>What you may hear</h3>
<table><tr><th>Term</th><th>Meaning</th></tr><tr><td>Catholic and evangelical faith</td><td>Prayer, church, pastors and the Virgin or saints as coping and community</td></tr><tr><td>santería, espiritismo</td><td>Afro-Caribbean and spirit-based practices, with santeros, mediums, spirits</td></tr><tr><td>curandero / curandera</td><td>Traditional healer (herbs, prayer, cleansing)</td></tr><tr><td>botánica</td><td>Shop selling herbs, candles, religious items; sometimes advice</td></tr><tr><td>susto</td><td>Fright illness after a shock</td></tr><tr><td>mal de ojo</td><td>Evil eye, especially in babies</td></tr><tr><td>empacho</td><td>Blocked digestion, treated at home</td></tr><tr><td>nervios</td><td>Distress from stress</td></tr><tr><td>brujería, "un trabajo"</td><td>Witchcraft; a "work" or hex placed by someone</td></tr></table>
<div class="ex"><b>Mucha gente busca ayuda en su fe o con curanderos. ¿Usted ha buscado ayuda así?</b><span>Many people seek help in their faith or with healers. Have you sought help that way?</span></div>
<div class="ex"><b>¿Qué cree usted que le causó esto?</b><span>What do you think caused this?</span></div>
<div class="ex"><b>¿Toma algún té, hierba o remedio casero?</b><span>Do you take any tea, herb or home remedy?</span></div>
<div class="ex"><b>¿Hay algo en su fe que yo deba saber para cuidarle bien?</b><span>Is there anything in your faith I should know to care for you well?</span></div>
<h3>Belief or delusion?</h3>
<p>A belief is more likely cultural when:</p>
<ul><li>it is shared by family, church or community;</li><li>the patient can talk about it flexibly and accepts that others may differ;</li><li>it does not cause new distress or dysfunction;</li><li>there are no other psychotic symptoms.</li></ul>
<p>It is more likely a delusion when it is idiosyncratic, fixed against evidence, goes beyond what the community believes, causes danger or impairment, and comes with other symptoms such as disorganization, hallucinations or sleeplessness.</p>
<div class="ex"><b>¿Alguien más en su familia o en su iglesia piensa lo mismo?</b><span>Does anyone else in your family or church think the same?</span></div>
<div class="ex"><b>¿Cree que alguien le hizo un daño?</b><span>Do you think someone put a hex on you?</span></div>
<div class="note">Clinical tip: ask about the community's view first (<i>¿Eso es algo que se cree en su familia?</i>), then about function and danger. Safety points: some folk remedies for empacho (azarcón, greta) contain lead, and St. John's wort (hierba de San Juan) interacts with antidepressants. Seeing or hearing a dead relative soon after a death can be a normal grief experience in some families.</div>`,
  quiz: [
    [`What is "mal de ojo"?`, [`Eye disease`, `Evil eye`, `Eye drops`], 1, `Mal de ojo is evil eye.`],
    [`A belief shared by the patient's church is`, [`More likely cultural`, `Always a delusion`, `Always an illness`], 0, `Community sharing points toward a cultural belief.`],
    [`Which herbal product interacts with antidepressants?`, [`Hierba de San Juan`, `Manzanilla`, `Miel`], 0, `St. John's wort interacts with antidepressants.`],
    [`What is the respectful way to ask about a curandero?`, [`Do you believe in magic?`, `Many people seek help in their faith or with healers. Have you?`, `You should not go to a healer.`], 1, `Normalize and ask without judgment.`],
    [`Which feature points to a delusion?`, [`Shared by community`, `Fixed, idiosyncratic and causing impairment`, `Brief prayer`], 1, `Fixed beliefs outside the community norm with impairment are delusional.`]
  ],
  psych: true,
  draft: true
  },
  {
  id: 'idioms-distress', level: 'B1', unit: 'Culture', title: `Idioms of distress`,
  summary: `How Spanish-speaking patients say they are anxious, depressed, afraid or unwell, and what to ask next.`,
  body: `<p>Patients rarely say "I have depression". They use idioms. Listen, then ask for the meaning. Meanings vary by country, so the table lists possibilities, not diagnoses.</p>
<table><tr><th>Patient says</th><th>Literally</th><th>May indicate</th></tr><tr><td>nervios</td><td>nerves</td><td>anxiety, depression, stress</td></tr><tr><td>ataque de nervios</td><td>attack of nerves</td><td>sudden crying, shouting, shaking after a stressor; ask about panic</td></tr><tr><td>susto</td><td>fright</td><td>fright after trauma; sleep problems, low mood</td></tr><tr><td>me siento decaído</td><td>I feel decayed</td><td>low mood and energy</td></tr><tr><td>no tengo ganas de nada</td><td>I have no desire for anything</td><td>anhedonia</td></tr><tr><td>ya no aguanto</td><td>I cannot bear it anymore</td><td>exhaustion; ask about suicide</td></tr><tr><td>me quiero ir con Dios</td><td>I want to go with God</td><td>passive death wish; ask directly</td></tr><tr><td>estoy cansado de vivir</td><td>I am tired of living</td><td>passive suicidal ideation</td></tr><tr><td>se me va la onda</td><td>the wave goes from me</td><td>spacing out, dizziness, lost thread</td></tr><tr><td>coraje</td><td>anger</td><td>irritability, anger</td></tr><tr><td>me da pena</td><td>it gives me shame</td><td>embarrassment, or sadness</td></tr><tr><td>me siento vacío</td><td>I feel empty</td><td>emptiness, depression, dissociation</td></tr><tr><td>estoy en las nubes</td><td>I am in the clouds</td><td>inattention, dissociation</td></tr><tr><td>me hablan</td><td>they talk to me</td><td>hearing voices; ask what and who</td></tr><tr><td>me vigilan</td><td>they watch me</td><td>persecutory ideas</td></tr><tr><td>ando bien malilla</td><td>I am in the malilla</td><td>Mexican slang for feeling sick; among people who use substances it usually means withdrawal. Ask about last use.</td></tr><tr><td>la cruda</td><td>the raw one</td><td>hangover; ask about alcohol</td></tr><tr><td>se me sube la presión</td><td>my pressure rises</td><td>anger or anxiety surge</td></tr><tr><td>me va a dar algo</td><td>something will happen to me</td><td>panic, fear of dying</td></tr><tr><td>me ahogo</td><td>I am drowning</td><td>breathlessness in panic</td></tr><tr><td>un nudo en la garganta</td><td>a knot in the throat</td><td>anxiety, grief</td></tr><tr><td>me duele el alma</td><td>my soul hurts</td><td>grief, emotional pain</td></tr><tr><td>estoy como en una película</td><td>I am as in a movie</td><td>derealization</td></tr></table>
<div class="ex"><b>Es que ando con nervios, doctor.</b><span>It is that I am nervous, doctor.</span></div>
<div class="ex"><b>Ya no aguanto más.</b><span>I cannot bear it anymore.</span></div>
<div class="ex"><b>Cuando dice que ya no aguanta, ¿ha pensado en quitarse la vida?</b><span>When you say you cannot bear it, have you thought of ending your life?</span></div>
<div class="ex"><b>¿Qué quiere decir con nervios?</b><span>What do you mean by nervios?</span></div>
<div class="note">Clinical tip: when you hear a death-related idiom, ask directly and calmly. Then ask about the idiom in the patient's words: <i>¿Cómo es ese ataque? ¿Cuánto dura?</i></div>`,
  quiz: [
    [`"Me quiero ir con Dios" requires you to`, [`Ask directly about suicidal thoughts`, `Note religious coping only`, `Ignore`], 0, `It can be a passive death wish.`],
    [`"Ataque de nervios" is`, [`A medical stroke`, `A culture-linked episode of distress that may or may not be panic`, `A hallucination`], 1, `It needs follow-up questions.`],
    [`"La cruda" in Mexico is`, [`A hangover`, `A raw food`, `A cough`], 0, `La cruda = hangover.`],
    [`"Me hablan" suggests`, [`Possible hallucinations`, `Social support`, `Hunger`], 0, `Ask what they say and who.`],
    [`The best response to "nervios" is`, [`Chart anxiety`, `Ask what the patient means`, `Reassure`], 1, `Ask to define it.`],
    [`"No tengo ganas de nada" most suggests`, [`Anhedonia or amotivation`, `Panic`, `Mania`], 0, `Loss of interest and drive.`]
  ],
  psych: true,
  draft: true
  },
  {
  id: 'false-friends', level: 'B1', unit: 'Culture', title: `False friends: words that mislead`,
  summary: `Spanish words that look like English words but mean something else, in clinical settings.`,
  body: `<p>These words look like English but mean something different. Mistakes here are funny at best and harmful at worst.</p>
<table><tr><th>Spanish</th><th>Really means</th><th>Say instead for the English</th></tr><tr><td>embarazada</td><td>pregnant</td><td>embarrassed: avergonzado/a, apenado/a</td></tr><tr><td>constipado</td><td>has a cold (some countries)</td><td>constipated: estreñido/a</td></tr><tr><td>intoxicado</td><td>poisoned (also medical "intoxication")</td><td>drunk: borracho/a, ebrio/a</td></tr><tr><td>sensible</td><td>sensitive</td><td>sensible: sensato/a</td></tr><tr><td>molestar</td><td>to bother</td><td>to molest: abusar sexualmente</td></tr><tr><td>asistir</td><td>to attend</td><td>to assist: ayudar</td></tr><tr><td>actualmente</td><td>currently</td><td>actually: en realidad</td></tr><tr><td>éxito</td><td>success</td><td>exit: salida</td></tr><tr><td>soportar</td><td>to bear, to stand</td><td>to support: apoyar</td></tr><tr><td>sano</td><td>healthy</td><td>sane: cuerdo/a</td></tr><tr><td>excitado</td><td>aroused or agitated</td><td>excited: emocionado/a</td></tr><tr><td>decepción</td><td>disappointment</td><td>deception: engaño</td></tr><tr><td>grosería</td><td>rude remark</td><td>gross: asqueroso/a</td></tr><tr><td>largo</td><td>long</td><td>large: grande</td></tr><tr><td>recordar</td><td>to remember</td><td>to record: grabar</td></tr><tr><td>realizar</td><td>to carry out</td><td>to realize: darse cuenta</td></tr><tr><td>librería</td><td>bookshop</td><td>library: biblioteca</td></tr><tr><td>carpeta</td><td>folder</td><td>carpet: alfombra</td></tr><tr><td>compromiso</td><td>commitment</td><td>compromise: acuerdo</td></tr><tr><td>discutir</td><td>to argue</td><td>to discuss: hablar de</td></tr><tr><td>ropa</td><td>clothes</td><td>rope: cuerda</td></tr><tr><td>sopa</td><td>soup</td><td>soap: jabón</td></tr><tr><td>introducir</td><td>to insert</td><td>to introduce: presentar</td></tr><tr><td>remover</td><td>to stir</td><td>to remove: quitar</td></tr></table>
<div class="ex"><b>Estoy embarazada.</b><span>I am pregnant.</span></div>
<div class="ex"><b>Me siento apenada por lo que pasó.</b><span>I feel ashamed about what happened.</span></div>
<div class="ex"><b>¿Alguna vez se ha sentido borracho en el trabajo?</b><span>Have you ever felt drunk at work?</span></div>
<div class="ex"><b>Mi esposo no está cuerdo, está muy raro.</b><span>My husband is not sane, he is very strange.</span></div>
<div class="note">Clinical tip: <i>excitado</i> often has a sexual meaning; for agitated or manic, say <i>acelerado, agitado</i>. <i>Intoxicado</i> sounds like poisoned to many patients, so for alcohol or drugs use <i>borracho, ebrio</i> or <i>bajo los efectos de</i>. <i>Constipado</i> means a head cold in Spain and some countries; for constipation say <i>estreñido</i>. Use <i>sano</i> for health and <i>cuerdo</i> for sanity.</div>`,
  quiz: [
    [`"Estoy embarazada" means`, [`I am embarrassed`, `I am pregnant`, `I am sick`], 1, `Embarazada = pregnant.`],
    [`Which word is "sane"?`, [`cuerdo`, `sano`, `sensible`], 0, `Cuerdo = sane; sano = healthy.`],
    [`Which word is safest to ask if a patient was drunk?`, [`intoxicado`, `borracho or ebrio`, `sensible`], 1, `Intoxicado can be heard as poisoned. Borracho or ebrio is clear.`],
    [`"Molestar" can mean`, [`To molest`, `To bother`, `To mold`], 1, `Molestar = bother.`],
    [`"Actualmente" means`, [`Actually`, `Currently`, `Absolutely`], 1, `Currently.`],
    [`"Excitado" in clinical use might suggest`, [`Sexual arousal or agitation`, `Happy`, `Tired`], 0, `Be careful; use acelerado or agitado.`]
  ],
  psych: true,
  draft: true
  },
  {
  id: 'interpreting', level: 'B1', unit: 'Culture', title: `When your Spanish is not enough: certified interpreters, family and rights`,
  summary: `When to interview in Spanish yourself, when to use a certified medical interpreter, and why family must not interpret the patient's account.`,
  body: `<p>Hablemos gets you to a working interview, not to fluency. Knowing when to stop and get an interpreter is a clinical skill, and patients respect it.</p>
<h3>1. Interview in Spanish yourself when</h3>
<ul><li>the questions are routine: mood, sleep, appetite, side effects, orientation, follow-up of a known patient;</li><li>you can follow the gist of the answers and the patient is not in crisis;</li><li>you can repeat and clarify.</li></ul>
<div class="ex"><b>Todavía estoy aprendiendo español. Dígame si no me entiende.</b><span>I am still learning Spanish. Tell me if you do not understand me.</span></div>
<div class="ex"><b>¿Puede hablar más despacio, por favor?</b><span>Can you speak more slowly, please?</span></div>
<h3>2. Call a certified medical interpreter when</h3>
<ul><li><b>risk</b>: suicide or violence assessment, agitation, restraint, admission decisions;</li><li><b>consent and rights</b>: diagnosis, treatment, medication, legal status;</li><li><b>thought disorder</b> or hard-to-follow speech;</li><li>children, older adults with cognitive impairment, trauma disclosures.</li></ul>
<p>Use a <b>phone, video or in-person</b> certified interpreter. Bilingual staff should interpret only if they are qualified and assigned as interpreters.</p>
<div class="ex"><b>Vamos a usar un intérprete médico certificado para entendernos bien.</b><span>We will use a certified medical interpreter so that we understand each other well.</span></div>
<div class="ex"><b>Usted tiene derecho a un intérprete sin costo.</b><span>You have the right to an interpreter at no cost.</span></div>
<h3>3. Rights</h3>
<p>Title VI of the Civil Rights Act and Section 1557 of the Affordable Care Act require meaningful language access for patients with limited English proficiency in facilities that receive federal funds. Qualified interpreters must be offered free of charge. Section 1557 also limits relying on an accompanying adult or a child to interpret, except in a true emergency. Check your own hospital policy.</p>
<h3>4. Family, and especially minors</h3>
<ul><li>Family give valuable collateral history, but should not interpret the patient's own account.</li><li>They may filter or soften suicidal thoughts, substance use or abuse, answer for the patient, or be the source of fear.</li><li><b>Minors must not interpret</b> except in a true emergency with no other option.</li><li>Find a moment alone with the patient.</li></ul>
<div class="ex"><b>¿Puedo hablar con usted a solas un momento?</b><span>May I speak with you alone for a moment?</span></div>
<h3>5. Working with the interpreter</h3>
<ul><li>Brief first: purpose, and that everything must be interpreted, including swearing and odd speech.</li><li>Speak to the patient in the first person, in short segments.</li><li>Seat yourself so you face the patient.</li><li>Ask the interpreter to flag terms that do not translate.</li></ul>
<h3>6. Documenting</h3>
<p>Write: "Interview conducted with a certified Spanish medical interpreter (name or ID, phone, video or in person)". Do not list a family member as the interpreter.</p>
<div class="note">Clinical tip: for rating scales, use the published Spanish translation. A paraphrased item is a different item. Crisis resource: 988, then oprima 2 for Spanish.</div>`,
  quiz: [
    [`A patient mentions suicide. Best next step?`, [`Use a certified interpreter for the assessment`, `Ask the daughter to interpret`, `Continue alone`], 0, `Risk assessments need a qualified interpreter.`],
    [`Which interview is reasonable in your own Spanish?`, [`Informed consent`, `Follow-up of sleep and appetite`, `Thought disorder assessment`], 1, `Routine questions with a known patient.`],
    [`Who should not interpret?`, [`A certified interpreter`, `A minor child`, `A trained medical interpreter`], 1, `Minors must not interpret.`],
    [`How do you document?`, [`Family member interpreted`, `Interview conducted with a certified Spanish medical interpreter`, `No note`], 1, `Document the interpreter service.`],
    [`When a certified interpreter works, you should`, [`Speak to the patient in first person in short segments`, `Speak to the interpreter`, `Let them summarize`], 0, `Speak to the patient directly.`]
  ],
  psych: true,
  draft: true
  }
];
