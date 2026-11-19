/* End-of-treatment review case: Daniel at his last session (id: panic).
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Same patient as the case simulation, the emergency-department MSE and the discharge case, about three months later,
   after 10 sessions of CBT for panic disorder. Patient answers are natural spoken Spanish (a little Spanglish, glossed in the English).
   The patient is fictional. Shape: { id, title, level, dx, decision: { end, why }, setting, chart, fields: { <PSYCH_EOT field id>: { obs?, ans, key?, need, ok?, wrong?, doc, why, quote? } } }.
   Appends to window.PSYCH_EOT_CASES. */
window.PSYCH_EOT_CASES = (window.PSYCH_EOT_CASES || []).concat([
  {
    id: `panic`,
    title: `Daniel at his last session`,
    level: `B1`,
    dx: `Panic disorder with agoraphobic avoidance, much improved after cognitive behavioral therapy; residual tension in crowded stores on busy Saturdays and in heavy freeway traffic`,
    decision: {
      end: true,
      why: `Regular sessions can end today. The target symptoms are much improved: from about four attacks in two months and two emergency visits to one mild attack in the last month, which he rode out in the store without leaving; no emergency visit since that night. He rates it 9/10 at the start and 2/10 now. He drives the freeway every day again and takes the surface-street detours only when he chooses to; he has made every delivery shift for two months, sleeps mostly well, and has cut the energy drinks to one a week or none (one coffee in the morning). Mood is euthymic, about 8/10, and asked again, he has had no thoughts of dying and no wish to harm anyone. What remains is named honestly: crowded stores on busy Saturdays and heavy freeway traffic still make him tense, but he goes in and does not leave. He explains panic in his own words (a false alarm of the body, kept going by the fear of the fear) and acts on it. He names his own early warning signs, has written his own coping card, has shown it to his brother, and knows how to restart the practice and when to come back. The risks after ending are a slide back into avoidance, a busy month at work with more energy drinks and no practice, and, as in the emergency department, a medical symptom read as panic. The plan covers them: one harder step a month, a booster session in three months, contact the clinic if avoidance returns for two weeks, a doctor or 911 for new or different physical symptoms, and 988 (oprima 2 for Spanish). Continuing weekly sessions now would add little and could tell him he still needs a therapist beside him on the freeway, when the aim of the treatment is that he can do it on his own.`
    },
    setting: `Outpatient clinic, end-of-treatment review: the 10th and last planned session of cognitive behavioral therapy for panic disorder, about three months after the night he came to the emergency department. Daniel, 27, delivery driver, lives with his older brother Iván. His mother lives in another city and they talk by phone. He came alone today, driving himself, after his morning shift. He is bilingual and chooses Spanish with some English words. You saw him in the emergency department and through the treatment under supervision.`,
    chart: [
      `First visit about three months ago: the emergency department (second visit in six weeks, after a sudden attack in a crowded grocery store; ECG, heart enzymes and blood tests normal each time), then the first clinic visit within the week. About four attacks in two months: pounding heart, tight chest, breathlessness, tingling hands, fear of dying or losing control; peak within minutes, settle within the hour. Fear of the next attack, avoiding the freeway and crowded stores, lost deliveries, poor sleep. About three energy drinks a day plus morning coffee; one beer on weekends; no other substances. Mood down (4/10); denied suicidal thoughts. His mother called the attacks "ataque de nervios". Insight fair, then good after the explanation.`,
      `Plan agreed at the first clinic visit: cognitive behavioral therapy for panic disorder, 10 sessions: what a panic attack is, slow breathing, bringing on the body sensations on purpose in a safe way (interoceptive exposure: spinning in a chair, running in place) and staying with them until they pass, and going back step by step to the places he avoided (surface streets, then the freeway at a quiet hour, then rush hour; the crowded store). Practice between sessions. Medicine discussed; he chose therapy first, medicine kept as an option. Cut caffeine down gradually. New or different physical symptoms (chest pain that feels different, fainting): see a doctor, 911 in an emergency.`,
      `Course: attended all 10 sessions. Practiced most weeks, less in the busy holiday-rush month. Energy drinks cut down gradually to one a week or none; one coffee in the morning. Steps back to the freeway: one exit at a quiet hour, then longer drives, then rush hour. Attacks fell steadily. No emergency visit since that night. One mild attack last month, in a crowded store, ridden out with slow breathing. No medicine.`,
      `Today: the last planned session. Review the course and the change in target symptoms, a short review MSE with safety asked again, daily functioning, the relapse plan in his own words, medicines, and decide whether regular sessions can end.`
    ],
    fields: {
      course: {
        ans: {
          0: [`Vine a las diez. Hasta las veces que estaba bien cansado después del turno, de alguna forma llegué.`, `I came to all ten. Even the times I was really tired after my shift, I somehow made it.`],
          1: [`Casi todas las semanas las hice. Pero el mes de la temporada alta, con tantas entregas, no me daban ganas. Lo hacía a medias, la verdad.`, `Most weeks I did them. But the busy holiday month, with so many deliveries, I didn't feel like it. I did them halfway, honestly.`],
          2: [`Lo de hacer que me latiera el corazón a propósito y esperar a que se me bajara. Hasta que lo hice yo mismo entendí con el cuerpo que el corazón puede latir fuerte y no me muero.`, `Making my heart pound on purpose and waiting for it to come down. Only when I did it myself did I understand with my body that my heart can pound hard and I don't die.`],
          3: [`La primera vez que volví a entrar a la freeway, a la hora pico. Sentí que el corazón me iba a salir del pecho. Un solo exit se me hizo larguísimo.`, `The first time I got back on the freeway at rush hour. I felt like my heart was going to jump out of my chest. Just one exit felt very long.`]
        },
        key: [0, 1, 2],
        need: [`Attended all planned sessions`, `Practised between sessions most weeks`],
        wrong: {
          'Attended most planned sessions': `He missed none: write all, not most.`,
          'Missed several sessions': `He came to all ten, even when he was tired after a shift.`,
          'Practised between sessions some weeks': `He practiced in most weeks. Only the busy holiday month was thin. Record that month honestly, but the overall pattern is most weeks.`,
          'Rarely practised between sessions': `Only one month was hard. He practiced in most weeks.`,
          'Family took part in ___ session(s)': `No family member came to his sessions. He showed his brother his card himself.`
        },
        doc: `Cognitive behavioral therapy for panic disorder, 10 sessions over about three months (psychoeducation on the panic cycle, slow breathing, interoceptive exposure, graded return to the freeway and crowded stores, caffeine reduction). Attended all 10; practiced between sessions most weeks, little in the busy holiday month (many deliveries). No family sessions`,
        why: `Write what was given, how much, and how it was used. If the attacks return, the next doctor knows what worked and what to restart. His honest account of the busy month is worth recording: it shows when his practice slips, and it is exactly the kind of month the relapse plan must cover. What helped most, staying with the pounding heart until it passed, is the core lesson of the treatment: he learned it with his body, not only from an explanation.`
      },
      change: {
        ans: {
          0: [`Tenía ataques varias veces al mes y fui dos veces a urgencias. Ahora tuve uno solo el mes pasado, y fue leve. Estaba en el súper un sábado, me empezó a latir fuerte el corazón, pero respiré despacio, me quedé dentro de la tienda, y se me pasó. Terminé mi compra. Desde esa noche no he ido a urgencias ni una vez.`, `I used to have attacks several times a month and went to the ER twice. Now I had just one last month, and it was mild. I was in the store on a Saturday, my heart started pounding, but I breathed slowly, stayed inside the store, and it passed. I finished my shopping. Since that night I haven't been to the ER once.`],
          1: [`Al principio, un nueve. Ahora, un dos.`, `At the start, a nine. Now, a two.`],
          2: [`Manejo en la freeway todos los días, hasta en la hora pico. Ya no me voy por las calles a menos que yo quiera. Y puedo hacer todas mis entregas.`, `I drive on the freeway every day, even at rush hour. I don't take the streets anymore unless I want to. And I can do all my deliveries.`],
          3: [`Los sábados en el súper bien lleno todavía me pongo tenso. Y cuando hay tráfico pesado en la freeway se me aprieta el cuerpo. No es que no pueda, pero lo siento. Aun así, no me salgo ni me bajo.`, `On Saturdays in a very crowded store I still get tense. And when there's heavy traffic on the freeway my body tightens. It's not that I can't, but I feel it. Even so, I don't leave or get off.`]
        },
        key: [0, 1, 3],
        need: [`Much improved`, `Self-rated ___/10 at start, ___/10 now`, `Residual symptoms: ___`],
        ok: [`Improved`],
        wrong: {
          'Minimally improved': `From about four attacks in two months and two emergency visits to one mild attack in a month, no emergency visits, and the freeway every day: much more than a minimal change.`,
          Unchanged: `He rates 9/10 at the start and 2/10 now.`,
          Worse: `He rates 9/10 at the start and 2/10 now.`
        },
        doc: `Much improved: from about four attacks in two months and two emergency visits to one mild attack in the last month, ridden out inside the store with slow breathing; no emergency visit since the first night; drives the freeway every day, rush hour too; makes all his deliveries. Self-rated 9/10 at start, 2/10 now. Residual symptoms: tense in very crowded stores on Saturdays and in heavy freeway traffic, but he stays and does not leave`,
        why: `Compare with the first visit in concrete terms: attacks per month, emergency visits, and the freeway he could not drive. The one mild attack is not a failure: how he met it (slow breathing, staying in the store, finishing the shopping) is the strongest evidence that the treatment worked. Then ask what is still difficult and write it down honestly. Tension in crowded stores and heavy traffic is the residual symptom. Whether he still does these, or starts to avoid them, is what the relapse plan watches.`
      },
      mood: {
        obs: `In his work polo, his phone face down on his knee (at the first visit he turned it over and over). Sits back in the chair with his hands still. Smiles when he tells about the attack in the store, grows a little serious about the Saturday crowds, and laughs at himself about the energy drinks. His expression moves with the topic.`,
        ans: {
          0: [`Estas dos semanas, bien tranquilo en general. Antes andaba tenso todo el día, pero ahora puedo hacer mi día normal. La neta, siento que me merezco una palmadita en la espalda.`, `These two weeks, pretty calm in general. Before, I was tense all day, but now I can do my day normally. Honestly, I feel like I deserve a pat on the back.`],
          1: [`Como un ocho. La noche de urgencias era como un cuatro, ¿no?`, `About an eight. The night of the ER it was about a four, wasn't it?`]
        },
        quote: `Estas dos semanas, bien tranquilo en general. (These two weeks, pretty calm in general.)`,
        key: [0, 1],
        need: [`Euthymic mood`, `Congruent affect`],
        ok: [`Full range affect`],
        wrong: {
          'Anxious mood': `He was anxious all day at the first visit. Now he says he is calm in general and rates his mood about 8/10. The tension in crowded stores is a residual symptom, not his mood.`,
          'Dysphoric mood': `He was down at the first visit, when he was losing deliveries and alone with the attacks. That has lifted as the attacks eased.`,
          'Euphoric mood': `Wanting a pat on the back is a fair pride in real progress, not an elevated mood.`,
          'Mildly elevated mood': `A little pride, in proportion to what he achieved, with a calm manner: euthymic.`,
          'Restricted affect': `He smiles, grows serious and laughs at himself with the topic: a full range.`
        },
        doc: `"Estas dos semanas, bien tranquilo en general." (These two weeks, pretty calm in general.) Mood about 8/10 (about 4/10 at the first visit); a little proud of his progress. Euthymic mood; full range, congruent affect`,
        why: `Quote his words and compare with the first visit, when he was anxious and down (4/10). Record the pride too: "me merezco una palmadita en la espalda" is a natural, healthy response to hard work, and it is worth saying back to him. Check that the low mood of the first visit has gone with the attacks. It fits low mood secondary to the panic, the lost work and the isolation.`
      },
      safety: {
        ans: {
          0: [`No, nada. Ni cuando andaba decaído pensaba eso.`, `No, nothing. Not even when I was feeling down did I think that.`],
          1: [`¿Querer desaparecer? No, tampoco.`, `Wanting to disappear? No, not that either.`],
          2: [`No, nada.`, `No, nothing.`]
        },
        key: [0, 2],
        need: [`Denies suicidal ideation, plan, or intent`, `Denies homicidal ideation`],
        wrong: {
          'Past passive death wish, none now': `He has never had thoughts of dying: he denied them in the emergency department and denies them now. His fear of dying during an attack was a fear, not a wish.`,
          'Passive death wish, no plan or intent': `He has no thoughts of dying.`,
          'Active suicidal ideation (do not end treatment; reassess)': `He denies any thoughts of dying.`,
          'Homicidal ideation present (reassess)': `He denies any wish to harm others.`
        },
        doc: `Denies suicidal ideation, plan, or intent, now and since the first visit (none even when his mood was low); denies homicidal ideation`,
        why: `Ask at every review, even when the answer was always no. At the first visit he was down and losing work, and the record before treatment ends should show it was asked again. In panic disorder, the fear of dying during an attack is not a wish to die: record them separately. Question 1 is for patients who used those words before. He said no in the emergency department, so it is optional here.`
      },
      insight: {
        ans: {
          0: [`La alarma del cuerpo se disparaba aunque no había peligro, ¿verdad? Y entre más miedo me daba que viniera otro, más sonaba. Yo le tenía miedo al miedo. Ahora, si me late fuerte el corazón, pienso "ah, es la alarma", y lo dejo pasar.`, `The body's alarm was going off even though there was no danger, right? And the more scared I was that another would come, the louder it rang. I was afraid of the fear. Now, if my heart pounds, I think "oh, it's the alarm," and I let it pass.`],
          1: [`Pensaría que me volvió el pánico. No el corazón. Pero si es un dolor distinto al de siempre, eso ya es otra cosa, ¿no? Ahí sí me voy al doctor.`, `I'd think the panic was back. Not my heart. But if it's a pain different from usual, that's another matter, right? Then I do go to the doctor.`]
        },
        key: [0, 1],
        need: [`Good`, `Grade 6: true emotional insight`],
        ok: [`Grade 5: intellectual insight`],
        wrong: {
          Poor: `He explains the panic cycle in his own words and uses it.`,
          Fair: `At the first visit insight was fair: he asked whether it was all in his head. Now he explains the cycle himself and acts on it.`,
          'Grade 3: blames others/external factors': `He does not put it down to outside causes. Caffeine was one trigger, but he sees the fear of the fear in himself.`,
          'Grade 4: aware, cause unknown in self': `He knows what kept the attacks going and what to do about it.`
        },
        doc: `Good (grade 6, true emotional insight): explains panic as a false alarm of the body, kept going by the fear of the fear ("le tenía miedo al miedo"), and acts on it (lets the pounding pass, stayed inside the store); would recognize a return as panic, and knows that a different pain needs a doctor (fair, grade 4, at the first emergency-department review; good, grade 5, by the time he went home that night)`,
        why: `Grade 6 fits because the understanding changes what he does: he stayed in the store last month instead of leaving. Grade 5 is accepted, since an interview alone cannot always show the change in behavior. Note that he still separates panic from a new medical symptom: good insight in panic disorder does not mean calling every chest symptom panic. In the emergency department he asked whether it was "in his head". Now he names it calmly, which is the change you are looking for.`
      },
      function: {
        ans: {
          0: [`Estoy haciendo todos mis turnos normal. En estos dos meses no he perdido ni una entrega por un ataque.`, `I'm doing all my shifts normally. In these two months I haven't lost a single delivery because of an attack.`],
          1: [`Duermo bien casi siempre. Fui bajándole a las energéticas y ahora me tomo una a la semana, o ninguna. Café nomás en la mañana. Creo que por eso me duermo más fácil.`, `I sleep well almost always. I cut down the energy drinks little by little and now I have one a week, or none. Coffee only in the morning. I think that's why I fall asleep more easily.`],
          2: [`Sí. Fui con mi hermano a un partido de fútbol, con mucha gente. Y el mes pasado fui a la quinceañera de mi prima. Hacía mucho que no iba a una fiesta.`, `Yes. I went with my brother to a soccer game, with lots of people. And last month I went to my cousin's quinceañera. It had been a long time since I'd been to a party.`],
          3: [`No. Casi no tomo, nada más una cerveza el fin de semana, y siempre fue así. Y no uso nada más.`, `No. I hardly drink, just one beer on the weekend, and it was always like that. And I don't use anything else.`]
        },
        key: [0, 1, 2],
        need: [`Back to usual work or school`, `Daily routine and sleep regular`],
        ok: [`Social and leisure activities resumed`],
        wrong: {
          'Partly back to work or school': `He makes every delivery shift and has lost none to attacks for two months.`,
          'Not yet back to work or school': `He drives and works every day.`,
          'Sleep still poor': `He sleeps mostly well now. Poor sleep from worry was part of the first visit.`,
          'Avoidance remains in some situations': `He drives the freeway every day and goes to games and parties. Very crowded stores on Saturdays and heavy traffic make him tense, but he goes in and stays: record that as a residual symptom, not as avoidance.`,
          'Alcohol no longer used to cope': `He never drank to cope: he has hardly drunk alcohol all along. The pick would suggest a problem he did not have.`
        },
        doc: `Back to usual work: all delivery shifts, none lost to attacks in two months; drives the freeway daily; sleep mostly good, falling asleep more easily since the energy drinks were cut to one a week or none (one coffee in the morning); has gone to a soccer game with his brother and a family party; hardly any alcohol, no other substances`,
        why: `Function shows whether the change holds in daily life. Ask for concrete examples: no lost deliveries for two months and a family party tell you more than "I'm fine". Record caffeine with sleep: it was a likely trigger at the first visit, and more energy drinks are one of his own warning signs. His outings with his brother and family matter: low mood and avoiding crowds were part of the first visit.`
      },
      warning: {
        ans: {
          0: [`Si empiezo a fijarme dónde están las salidas otra vez, esa sería una señal. Y si empiezo a irme por las calles "por si acaso" en vez de la freeway. Si vuelvo a tomar tres energéticas. Y si dejo de hacer la respiración.`, `If I start noticing where the exits are again, that would be a sign. And if I start taking the streets "just in case" instead of the freeway. If I go back to three energy drinks. And if I stop doing the breathing.`],
          1: [`Voy a ver mi tarjeta, volver a hacer la respiración y las prácticas poco a poco. Y si sigo evitando cosas por dos semanas, llamo a la clínica.`, `I'll look at my card, go back to the breathing and the step-by-step practice. And if I'm still avoiding things for two weeks, I call the clinic.`],
          2: [`Mi hermano Iván. Ya le enseñé la tarjeta. Y mi mamá me conoce la voz por teléfono, así que si me oye raro, me lo dice.`, `My brother Iván. I already showed him the card. And my mom knows my voice on the phone, so if I sound off, she tells me.`],
          3: [`Sí, por favor. De hecho yo ya hice una tarjeta y la traje. Quiero agregarle el plan de hoy.`, `Yes, please. In fact I already made a card and brought it. I want to add today's plan to it.`]
        },
        key: [0, 1, 3],
        need: [`Names own early warning signs`, `Written relapse prevention plan`, `Knows how to restart the practice`, `Knows when and how to come back`, `Family knows the warning signs`],
        wrong: {
          'Cannot yet name warning signs': `He names four in his own words: noticing the exits, taking the streets "just in case", going back to three energy drinks, and skipping the breathing practice.`
        },
        doc: `Names own early warning signs: checking where the exits are, taking the streets "por si acaso" (just in case), going back to three energy drinks, skipping the breathing practice. Written relapse prevention plan: his own coping card, today's plan added. Will restart slow breathing and the step-by-step practice; will contact the clinic if avoidance continues for two weeks. His brother Iván has seen the card and knows the signs; mother by phone, not told the signs`,
        why: `A relapse plan in the patient's own words is the main protection after regular sessions end. His signs are early and specific: noticing the exits and taking the streets are the first small steps back into avoidance, long before an attack. He made his own card, which says a lot about his confidence: build the plan onto it rather than replacing it. He chose to show it to his brother, who lives with him, so the family knows the signs through him. Whether to tell his mother is his choice. A clear rule (avoidance for two weeks, then call) is easier to keep than "if it gets bad".`
      },
      medicine: {
        ans: {
          0: [`No, no tomo nada. Al principio usted me habló de medicina, pero yo quise probar primero con las prácticas.`, `No, I'm not taking anything. At the start you told me about medicine, but I wanted to try the practice first.`],
          1: [`No. Ni energéticas compro ya, casi.`, `No. I hardly even buy energy drinks anymore.`]
        },
        key: [0, 1],
        need: [`No psychiatric medicine`, `No medicines from the pharmacy for sleep or anxiety`],
        wrong: {
          'Continues ___ (prescribed by ___)': `He takes no medicine. Medicine was discussed at the first clinic visit and he chose therapy first.`,
          'Medicine to be reviewed by ___': `There is no medicine to review. Medicine stays an option if the attacks return.`,
          'Supplements or other medicines: ___': `Energy drinks are a caffeine habit, recorded under functioning, not a medicine. He has cut them to one a week or none.`
        },
        doc: `No psychiatric medicine (discussed at the first clinic visit; he chose therapy first); no medicines from the pharmacy for sleep or anxiety; energy drinks cut to one a week or none. Medicine remains an option if the attacks return`,
        why: `Ask about all medicines, including what is bought at the pharmacy, even when none were prescribed. Record that medicine was discussed and kept as an option. If the attacks return and the practice alone does not bring them down, the next doctor can take up the discussion where it stopped.`
      },
      plan: {
        ans: {
          0: [`La verdad, siento un poquito de nervios. Pero tengo mi tarjeta y lo voy a intentar. Qué bueno que vine después de esa noche.`, `Honestly, I feel a little nervous. But I have my card and I'll give it a try. I'm really glad I came in after that night.`],
          1: [`O sea que no tendría que empezar desde cero. Está bien. Si el evitar dura dos semanas, les llamo.`, `So I wouldn't have to start from zero. Okay. If the avoiding lasts two weeks, I'll call.`],
          2: [`En tres meses, entonces. Mientras tanto, voy a hacer un paso un poco más difícil cada mes. Lo próximo es un viaje largo por la freeway, sin salirme por un buen rato.`, `In three months, then. In the meantime, I'll take one slightly harder step each month. Next is a long drive on the freeway without getting off for a good while.`],
          4: [`Está bien. Yo nunca he sentido eso, pero me lo voy a acordar. Y si me da un dolor de pecho distinto al de siempre, o siento que me voy a desmayar, llamo al 911 sin pensarlo, como me enseñaron esa noche en urgencias.`, `Okay. I've never felt that, but I'll remember. And if I get a chest pain different from usual, or feel like I'm going to faint, I call 911 without hesitating, like they taught me that night in the ER.`]
        },
        key: [0, 1, 2, 4],
        need: [`Regular sessions ended`, `Booster session in ___ months`, `Return to the clinic if symptoms come back`, `Crisis plan given (988; 911)`],
        wrong: {
          'Letter to primary care clinician': `No primary care clinician is part of his care. He came to this clinic from the emergency department. If he names one later, a letter with his consent is reasonable, but nothing in this review calls for it.`,
          'Continue sessions every ___ weeks: goals not yet met': `The goals are met: 2/10 from 9/10, the freeway every day, full work, and a written plan he made himself. Regular sessions end today.`,
          'School liaison continues with consent': `He is an adult in work. There is no school involved.`,
          'Referred to ___': `Nothing needs another service. His treatment is complete here.`
        },
        doc: `Regular sessions ended today (10 of 10 CBT sessions); continues one harder step a month on his own (next: a long freeway drive without getting off for a good while); booster session in 3 months; return to the clinic if avoidance continues for two weeks, without starting from the beginning; new or different physical symptoms (chest pain that feels different, near-fainting): see a doctor, 911 in an emergency; 988 (oprima 2 for Spanish) if thoughts of suicide ever appear; medicine remains an option`,
        why: `Ask how he feels about ending: a little nervousness is normal, and naming it lets you answer it. Saying he can come back without starting from the beginning makes a return part of the plan, not a failure. The booster session gives him a date to aim for while he takes one harder step a month. The crisis plan is keyed here, not only accepted: it carries the emergency-room rule for new or different physical symptoms, which stays important for as long as he lives with panic disorder. No primary care clinician is involved in his care, so no letter is keyed.`
      }
    }
  }
]);
