/* End-of-treatment review practice case: Marisela at her last planned session (PTSD, trauma-focused therapy).
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish text. Patient answers are Spanish first, English second.
   Fictional patient; same patient as the `ptsd` case simulation and first-visit MSE case. Appends to window.PSYCH_EOT_CASES.
   Shape: { id, title, level, dx, decision: { end, why }, setting, chart, fields: { <9 field ids>: { obs?, ans, key?, need, ok?, wrong?, doc, why, quote? } } } */
window.PSYCH_EOT_CASES = (window.PSYCH_EOT_CASES || []).concat([
  {
    id: `ptsd`,
    title: `Marisela at her last planned session`,
    level: `B1`,
    dx: `Posttraumatic stress disorder, much improved after trauma-focused cognitive behavioral therapy; residual avoidance of the freeway interchange near the crash`,
    decision: {
      end: true,
      why: `Regular sessions can end today. The target symptoms are much improved (self-rated 8/10 at the start, 3/10 now): nightmares from several a week to about once a month, no flashbacks, and she grounds herself when brakes make her jump. She drives to work again, has kept working, sleeps much better, and has not used beer to sleep for two months. She went back to Mass. Asked again, she has had no death wish since the first visit, and no thoughts of harming anyone. What remains is named honestly: the startle and the avoidance of the interchange where the crash happened. She knows how to keep practicing on her own, names her own warning signs, and has a written plan. The predictable risk is the anniversary of the crash in about a month. The plan covers it: she will contact the clinic if the signs come back, and she will not have to start from the beginning. The letter to her primary care doctor, who referred her, keeps someone who sees her regularly informed. Continuing weekly sessions for a residual avoidance she can practice alone would add little, and ending as planned tells her she can manage it.`
    },
    setting: `Outpatient clinic, end-of-treatment review: the 12th and last planned session, about three months after the first visit. Marisela, 41, is a home health aide, married, with two teenagers (Sofía, 16, and Diego, 14). She came alone today, after her shift. You saw her at the first visit and through the treatment under supervision. Do not ask her to retell the crash: the review is about how she lives now.`,
    chart: [
      `First visit about three months ago (referred by her primary care doctor; eight months after a freeway crash in which the other driver died): nightmares, flashbacks set off by brake sounds, no longer driving and avoiding the freeway, startle, irritability, poor sleep, guilt ("yo iba manejando"), stopped going to Mass, a beer before bed on more nights. Her comadre called it susto and she had a limpia before the visit. One past passive death wish, none then, no plan or intent. Mood anxious, 4/10. Insight good. Provisional PTSD.`,
      `Plan agreed: trauma-focused cognitive behavioral therapy, 12 weekly sessions; grounding and a sleep routine; the beer reviewed within the sleep plan; graded driving practice; letter to her primary care doctor; ask whether the teenagers need support. No medicine.`,
      `Course: attended all 12 sessions. Grounding learned early and used at home. The trauma memory was worked on in planned sessions at her own pace. Driving practice step by step: her neighborhood, then the road to work, then a short stretch of the freeway twice in daylight. Stopped the beer about two months ago. Guilt eased (the police report said it was not her fault). Her parish priest and her comadre were part of her support outside the clinic.`,
      `Today: the last planned session. Review the change since the first visit, a short review MSE, safety asked again, the relapse plan (the anniversary of the crash is in about a month), and decide whether regular sessions can end.`
    ],
    fields: {
      course: {
        ans: {
          0: [`Sí, pude venir a las doce sesiones.`, `Yes, I was able to come to all twelve sessions.`, `Marisela`],
          1: [`Hice la práctica para calmarme casi todos los días. Y seguí con la práctica de manejar poco a poco, como acordamos.`, `I did the calming practice almost every day. And I kept up the driving practice little by little, as we agreed.`, `Marisela`],
          2: [`Lo de poner los pies en el piso y contar tres cosas que veo, cuando un ruido me hace brincar. Todavía lo uso.`, `Putting my feet on the floor and counting three things I can see when a noise makes me jump. I still use it.`, `Marisela`],
          3: [`La verdad, las sesiones donde enfrenté el choque fueron duras. Pero usted me dijo que podía ir a mi ritmo, y así pude seguir.`, `Honestly, the sessions where I faced the crash were hard. But you told me I could go at my own pace, and that's how I was able to keep going.`, `Marisela`]
        },
        key: [0, 1, 2],
        need: [`Attended all planned sessions`, `Practised between sessions most weeks`],
        wrong: {
          'Missed several sessions': `She came to all twelve sessions.`,
          'Rarely practised between sessions': `She grounded herself almost every day and kept up the driving practice as planned.`,
          'Family took part in ___ session(s)': `No family member came to her sessions. Support for the teenagers was separate, if they wanted it.`
        },
        doc: `Trauma-focused CBT, 12 weekly sessions over about three months; attended all; practiced grounding almost daily and graded driving practice as planned; trauma memory worked on in planned sessions at her own pace`,
        why: `Write what was given, how much, and how she used it: if the symptoms return, the next doctor knows what worked (grounding, graded practice) and what to restart. Ask what was hard, too, and accept the answer as it comes. She can say the memory sessions were painful without describing them. At a review you never ask her to go back through the crash. The work on the memory belonged to the planned sessions, and it is finished.`
      },
      change: {
        ans: {
          0: [`Los sueños feos y el sonido de los frenos. Antes tenía los sueños varias veces a la semana, ahora es como una vez al mes. Y ya no siento que estoy otra vez en ese día.`, `The bad dreams and the sound of brakes. Before, I had the dreams several times a week, now it's about once a month. And I no longer feel that I'm back on that day.`, `Marisela`],
          1: [`Al principio era como un ocho. Ahora es como un tres.`, `At first it was about an eight. Now it's about a three.`, `Marisela`],
          2: [`Ya manejo otra vez al trabajo, yo sola. Y la autopista, un tramo cortito, dos veces, de día.`, `I drive to work again, by myself. And the freeway, a short stretch, twice, in the daytime.`, `Marisela`],
          3: [`Los frenos todavía me hacen brincar. Pero pongo los pies en el piso y me calmo rápido. Y todavía evito el cruce de autopistas donde fue el choque.`, `Brakes still make me jump. But I put my feet on the floor and calm down quickly. And I still avoid the freeway interchange where the crash happened.`, `Marisela`]
        },
        key: [0, 1, 2, 3],
        need: [`Much improved`, `Self-rated ___/10 at start, ___/10 now`, `Residual symptoms: ___`],
        ok: [`Improved`],
        wrong: {
          'Minimally improved': `She rates 8/10 at the start and 3/10 now, and she drives to work again.`,
          'Unchanged': `Nightmares fell from several a week to about once a month, and the flashbacks have stopped.`,
          'Worse': `Every target symptom is better.`
        },
        doc: `Much improved: nightmares from several a week to about once a month; no flashbacks; drives to work again on her own; drove a short stretch of the freeway twice in daylight as planned practice. Self-rated 8/10 at start, 3/10 now. Residual: startle at brake sounds (grounds herself quickly); avoids the interchange where the crash happened, will keep practicing`,
        why: `Compare each target symptom with the first visit (intrusion, avoidance, arousal) and get her own numbers, then and now. Asking what is still difficult is what makes the review honest: the startle and the interchange are real residual symptoms. Name them in the record and in the plan, so that "much improved" does not hide them and she knows that what remains is something to keep practicing, not a failure.`
      },
      mood: {
        obs: `Sits back in the chair today, her purse on the floor beside her rather than held on her lap. Relaxed face and voice. Smiles when she talks about going back to Mass with her family. Her eyes fill a little when she thanks you at the end, and she laughs at herself for it. No startle during the session.`,
        ans: {
          0: [`Ya me siento mucho más tranquila. Antes andaba en alerta todo el tiempo, y ahora puedo pasar el día normal.`, `I feel much calmer now. Before, I was on alert all the time, and now I can get through the day normally.`, `Marisela`],
          1: [`Como un siete. Cuando vine la primera vez fue un cuatro, ¿verdad?`, `About a seven. When I first came it was a four, wasn't it?`, `Marisela`]
        },
        quote: `Ya me siento mucho más tranquila. (I feel much calmer now.)`,
        key: [0, 1],
        need: [`Euthymic mood`, `Congruent affect`],
        ok: [`Full range affect`],
        wrong: {
          'Anxious mood': `At the first visit she was on alert all the time. Today she says she gets through the day normally and rates her mood 7/10.`,
          'Dysphoric mood': `Her tears come when she thanks you: they are gratitude, not low mood.`,
          'Labile affect': `Each change has a clear reason: she smiles about Mass with her family and is moved when she says goodbye.`,
          'Restricted affect': `She smiles, laughs at herself and is moved: her affect has a full range.`
        },
        doc: `"Ya me siento mucho más tranquila." (I feel much calmer now.) Mood 7/10 (4/10 at the first visit). Euthymic mood; full range, congruent affect; a little tearful when thanking the doctor at the end`,
        why: `Quote her words and compare with the first visit: then "siempre ando como en alerta" (always on alert) and 4/10, now euthymic and 7/10. Tears at the last session are common and fit the moment. Record them with their reason, so a reader does not take them for low mood.`
      },
      safety: {
        ans: {
          0: [`No. Ni una vez desde que se lo conté en mi primera visita.`, `No. Not once since I told you about it at my first visit.`, `Marisela`],
          1: [`No. Eso de que hubiera sido mejor haber muerto yo no ha vuelto.`, `No. That thought that it would have been better if I had died hasn't come back.`, `Marisela`],
          2: [`No, para nada.`, `No, not at all.`, `Marisela`]
        },
        key: [0, 1, 2],
        need: [`Denies suicidal ideation, plan, or intent`, `Past passive death wish, none now`, `Denies homicidal ideation`],
        wrong: {
          'Passive death wish, no plan or intent': `The passive wish was once, before the first visit. She has had none since.`,
          'Active suicidal ideation (do not end treatment; reassess)': `She denies any thoughts of dying, plan or intent.`
        },
        doc: `Denies suicidal ideation, plan or intent. One past passive death wish before the first visit ("hubiera sido mejor haber muerto yo y no la otra persona"), none since. Denies homicidal ideation. Crisis plan repeated (988, press 2 for Spanish; 911)`,
        why: `Ask again at the last session, even when the answer has been no for months. The record must show it was checked on the day treatment ended. Question 2 is written for someone who wanted to disappear. Adapt it to the words she used at the first visit, as here. Write the past wish and its absence now as two separate facts.`
      },
      insight: {
        ans: {
          0: [`Fue una reacción natural después de un golpe muy fuerte. Mi comadre le decía susto, y la limpia me hizo sentir acompañada, pero lo que más me ayudó fue la terapia. También aprendí que mientras más evito las cosas, más miedo dan. Y ahora puedo pensar que el choque no fue mi culpa.`, `It was a natural reaction after a very strong blow. My comadre called it susto, and the limpia made me feel accompanied, but what helped me most was the therapy. I also learned that the more I avoid things, the scarier they get. And now I can think that the crash was not my fault.`, `Marisela`],
          1: [`Pensaría que la reacción del choque está volviendo. No me la guardaría sola: avisaría pronto.`, `I'd think the reaction to the crash is coming back. I wouldn't keep it to myself: I'd tell someone early.`, `Marisela`]
        },
        key: [0, 1],
        need: [`Good`, [`Grade 6: true emotional insight`, `Grade 5: intellectual insight`]],
        wrong: {
          'Fair': `She explains the reaction, the role of avoidance and what she would do if it came back.`,
          'Poor': `She understands what happened to her and acts on it.`,
          'Grade 3: blames others/external factors': `She knows the crash had an outside cause, and she also understands her own reaction to it. She holds the susto explanation next to the treatment, and she does not blame others for her symptoms.`
        },
        doc: `Good (grade 6): understands her symptoms as a reaction to a frightening event and that avoidance keeps fear going; keeps her own cultural explanation (susto, limpia) alongside treatment; no longer blames herself for the crash; would recognize a return and seek help early`,
        why: `Grade 6 because the understanding has changed what she does: she drives again, practices the places she avoided and grounds herself. Grade 5 is accepted if you weigh the interchange she still avoids. The eased guilt is part of her insight: "no fue mi culpa" is a changed belief, not only knowledge. A good review lets her keep the explanation that gives her meaning, and does not ask her to give it up.`
      },
      function: {
        ans: {
          0: [`Sigo trabajando igual, sin faltar. Y ya manejo yo sola entre una casa y otra. Me concentro mejor que antes.`, `I keep working the same, without missing days. And I drive myself between clients' homes again. I concentrate better than before.`, `Marisela`],
          1: [`Duermo mucho mejor. Ya casi no me despierto en la noche.`, `I sleep much better. I hardly wake up in the night anymore.`, `Marisela`],
          2: [`Sí. Volvimos a ir a Misa los domingos en familia. Y les grito menos a Sofía y a Diego.`, `Yes. We went back to Mass on Sundays as a family. And I yell less at Sofía and Diego.`, `Marisela`],
          3: [`No, ya van dos meses sin tomar. Duermo sin eso.`, `No, it's been two months without drinking. I sleep without it.`, `Marisela`]
        },
        key: [0, 1, 3],
        need: [`Daily routine and sleep regular`, `Avoidance remains in some situations`, `Alcohol no longer used to cope`],
        ok: [`Back to usual work or school`, `Social and leisure activities resumed`, `Family relationships improved`],
        wrong: {
          'Sleep still poor': `She sleeps much better and hardly wakes in the night.`,
          'Not yet back to work or school': `She kept working throughout, and now drives herself between clients again.`,
          'Partly back to work or school': `She works her usual job and schedule. She was never off.`
        },
        doc: `Kept working throughout, drives herself between clients again, concentrates better; sleep much better, wakes less in the night; back at Mass on Sundays with her family, less irritable with her children; no alcohol to sleep for two months; still avoids the interchange where the crash happened`,
        why: `Function shows the change in daily life: driving to clients, sleep without beer, Mass with her family. Ask about the beer directly, because drinking to sleep was growing at the first visit. Two months without it is worth recording. Keep the residual avoidance here too: it limits where she drives, and it is what she will go on practicing.`
      },
      warning: {
        ans: {
          0: [`Que los sueños feos regresen y que empiece a no querer manejar. Si les vuelvo a gritar a mis hijos o se me antoja una cerveza para dormir, también sería una señal.`, `That the bad dreams come back and that I start not wanting to drive. If I start yelling at my kids again or wanting a beer to sleep, that would be a sign too.`, `Marisela`],
          1: [`Primero pongo los pies en el piso y me calmo. Sigo con la práctica de manejar. Si en unas dos semanas no mejoro, llamo a la clínica.`, `First I put my feet on the floor and calm down. I keep up the driving practice. If I'm not better in about two weeks, I call the clinic.`, `Marisela`],
          2: [`Mi esposo. Si tengo pesadillas en la noche, él se da cuenta.`, `My husband. If I'm having nightmares at night, he notices.`, `Marisela`],
          3: [`Sí, por favor. Si está escrito, no se me olvida.`, `Yes, please. If it's written down, I won't forget.`, `Marisela`]
        },
        key: [0, 1, 2, 3],
        need: [`Names own early warning signs`, `Written relapse prevention plan`, `Knows how to restart the practice`, `Knows when and how to come back`],
        ok: [`Family knows the warning signs`],
        wrong: {
          'Cannot yet name warning signs': `She names more nightmares, not wanting to drive, irritability with her children and wanting beer to sleep.`
        },
        doc: `Names own warning signs (more nightmares, not wanting to drive, yelling at her children, wanting a beer before bed); will ground herself and keep up driving practice; will contact the clinic if not better in about two weeks; husband notices the nightmares; plan written together. Anniversary of the crash in about a month discussed as a time to watch`,
        why: `Her own words make the best warning signs: she names two old symptoms coming back and two ways she used to cope (yelling at the children, beer). Name the predictable risk with her: anniversaries often bring symptoms back for a while, and knowing that in advance makes a return less frightening and easier to act on early. With her consent, her husband can learn the signs too.`
      },
      medicine: {
        ans: {
          0: [`No, no estoy tomando nada.`, `No, I'm not taking anything.`, `Marisela`],
          1: [`No. Tampoco he comprado nada en la farmacia para dormir. Y ya dejé la cerveza.`, `No. I haven't bought anything at the pharmacy for sleep either. And I've stopped the beer.`, `Marisela`]
        },
        key: [0, 1],
        need: [`No psychiatric medicine`, `No medicines from the pharmacy for sleep or anxiety`],
        wrong: {
          'Continues ___ (prescribed by ___)': `She takes no medicine. The treatment was psychotherapy alone.`
        },
        doc: `No psychiatric medicine; nothing from the pharmacy for sleep or anxiety; no alcohol to sleep`,
        why: `Ask about the pharmacy as well as prescriptions. Someone who drank to sleep may move to something else for sleep when she stops. Ask about teas and home remedies too, in a tone of interest. Her answer, with the beer stopped, shows the sleep improved without a substitute.`
      },
      plan: {
        ans: {
          0: [`Un poquito triste, pero creo que ya voy a estar bien. Muchas gracias por todo.`, `A little sad, but I think I'll be all right now. Thank you so much for everything.`, `Marisela`],
          1: [`Sí. Si vuelven los sueños cuando se cumpla un año del choque, me comunico. Qué alivio saber que no voy a empezar desde cero.`, `Yes. If the dreams come back when it's a year since the crash, I'll get in touch. What a relief to know I won't start from zero.`, `Marisela`],
          3: [`Sí, por favor. Yo también quisiera darle las gracias a mi doctora.`, `Yes, please. I'd also like to thank my doctor.`, `Marisela`],
          4: [`Sí, entiendo. Ahorita no tengo esos pensamientos, pero lo voy a recordar.`, `Yes, I understand. I don't have those thoughts now, but I'll remember.`, `Marisela`]
        },
        key: [0, 1, 3, 4],
        need: [`Regular sessions ended`, `Letter to primary care clinician`, `Return to the clinic if symptoms come back`, `Crisis plan given (988; 911)`],
        wrong: {
          'Continue sessions every ___ weeks: goals not yet met': `The goals are met. The avoidance that remains is something she can practice on her own.`,
          'Booster session in ___ months': `No booster was agreed for her. She returns if the signs come back, and her primary care doctor is informed.`,
          'Referred to ___': `No referral is needed. Her primary care doctor, who referred her, receives a letter.`
        },
        doc: `Regular sessions ended as planned after 12 sessions; letter to her primary care doctor; return to the clinic if symptoms come back (for example around the anniversary of the crash), without starting from the beginning; crisis plan repeated (988, press 2 for Spanish; 911 in an emergency)`,
        why: `Ask how she feels about ending before you give the plan. Some sadness at the last session is normal, and saying it helps her leave well. Tell her plainly how to come back and that she will not start from the beginning. The letter closes the loop with the doctor who referred her and who will see her for years. Repeat the crisis plan even though she has had no death wish for months: it costs one sentence.`
      }
    }
  }
]);
