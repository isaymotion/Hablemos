/* Discharge practice case: Daniel leaves the emergency department (id: panic).
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Same shape as psych-discharge-cases.js. There is no ward stay: the setting says so and the field notes (`why`) say how to adapt
   the questions about the admission. Patient answers are natural spoken Spanish (a little Spanglish, glossed in the English).
   The patient is fictional. Medicine names, where they appear, are teaching examples only. Crisis line 988 (oprima 2 for Spanish).
   Appends to window.PSYCH_DISCHARGE_CASES. */
window.PSYCH_DISCHARGE_CASES = (window.PSYCH_DISCHARGE_CASES || []).concat([
  {
    id: `panic`,
    title: `Daniel leaves the emergency department: the alarm explained, a plan for the next attack`,
    level: `B1`,
    dx: `Panic disorder (provisional), with agoraphobic avoidance`,
    decision: {
      discharge: true,
      why: `Discharge from the emergency department tonight. The emergency physician looked for medical causes, and the ECG, heart enzymes, blood tests and urine drug screen were normal tonight, as at the first visit. The attack settled, he practiced slow breathing and used it, and he is calm. He denies suicidal and homicidal thoughts, uses no substances other than a lot of caffeine, and drinks little alcohol. He understands the explanation of the body's alarm and can say what he will do if another attack comes. The risks after he leaves are another attack and more avoidance, a medical cause missed if a new or different symptom appears, and low mood while he loses work. The plan covers them: a clinic visit already booked within the week for step-by-step therapy and a talk about medicine, slow breathing, cutting caffeine down gradually, the emergency room or 911 for new or different symptoms, 988 (oprima 2 for Spanish) if thoughts of suicide appear, and his brother, who lives with him and now knows the plan. Keeping him overnight would not treat panic, and it could confirm his fear that the attacks are dangerous.`
    },
    setting: `Emergency department, the same night, about two hours after your psychiatry review. Daniel, 27, delivery driver, lives with his older brother Iván, who is waiting outside. He came in after a sudden attack in a crowded grocery store. You are the psychiatry resident who saw him. The emergency physician is ready to let him go home and asks you to see him once more before he leaves. There is no ward stay, so adapt the questions about the admission to tonight. He is bilingual and chose Spanish.`,
    chart: [
      `Emergency department tonight, second visit in six weeks: sudden attack in a crowded grocery store, with pounding heart, tight chest, breathlessness, tingling hands and fear of dying. The attacks come on suddenly, peak within minutes and settle within the hour, about four in two months. The emergency physician looked for medical causes: ECG, heart enzymes, basic blood tests and urine drug screen were normal tonight, as at the first visit. Psychiatry was called. Since the attacks began he fears another one, avoids the freeway and crowded stores, and has lost deliveries. About three energy drinks a day plus morning coffee; one beer on weekends; no other substances.`,
      `Admission MSE (two hours ago): restless and breathless on arrival, briefly defensive when psychiatry was mentioned, mood anxious and low (4/10), preoccupied with another attack and with dying or losing control, no delusions or hallucinations, denied suicidal thoughts, insight fair (grade 4), judgment fair.`,
      `Emergency department course (no ward stay): the panic cycle explained as the body's alarm, with his symptoms named as real; slow breathing practiced with the psychiatrist, and he settled. No medicine given in the emergency department. Caffeine discussed as a likely trigger. His mother calls the attacks "ataque de nervios"; the family's word was respected and the medical name offered next to it. Low mood, no suicidal thoughts. Sleep poor for weeks from worry about attacks.`,
      `Plan: home tonight with his brother. No new medicine. Clinic visit already booked: next Tuesday at 10:00, outpatient psychiatry, for CBT (step-by-step exposure) and a talk about medicine. Cut coffee and energy drinks down gradually, not suddenly. Slow breathing when an attack comes. Return to the emergency room for new or different symptoms (chest pain that feels different, fainting); 911 in an emergency. 988 (oprima 2 for Spanish) if thoughts of suicide appear. With Daniel's consent, his brother sat in for the last few minutes.`
    ],
    fields: {
      behavior: {
        obs: `Sitting up on the stretcher in a curtained bay, in his work polo, phone on his lap. Tidy, a little creased after the evening. Sits still and breathes evenly. Good eye contact, polite, asks questions of his own.`,
        ans: {
          0: [`Mucho más tranquilo. Lo de respirar despacio sí me funcionó.`, `Much calmer. The slow breathing did work for me.`],
          1: [`Sí, claro. De hecho tengo unas preguntas antes de irme.`, `Yes, of course. In fact I have a few questions before I go.`]
        },
        need: [`Calm`, `Cooperative`, `Good eye contact`, [`Well groomed`, `Fairly groomed`]],
        wrong: {
          Restless: `He was anxious on arrival. Now he sits still and breathes evenly.`,
          Guarded: `He answers openly and asks his own questions.`,
          Withdrawn: `He talks readily. Being down lately has not made him withdrawn in the interview.`
        },
        doc: `Calm, cooperative, good eye contact, well groomed (work clothes, a little creased); breathing evenly; asks appropriate questions`,
        why: `Compare with the review two hours ago: anxious on arrival then, calm now. Writing that he settled with slow breathing, without medicine, matters for the next doctor.`
      },
      mood: {
        obs: `Looks tired but relieved. Smiles a little when he talks about the alarm. Becomes more serious when he mentions the freeway.`,
        ans: {
          0: [`Hace semanas que ando con miedo y decaído. Pero esta noche, después de que me explicó, me siento más aliviado.`, `For weeks I've been afraid and down. But tonight, after your explanation, I feel more relieved.`],
          1: [`Todavía estoy preocupado. Por si me da otro en la freeway o en el súper. Pero estoy mucho mejor que cuando llegué.`, `I'm still worried. In case I get another one on the freeway or in the store. But I'm much better than when I arrived.`],
          2: [`Un cinco o un seis. Cuando hablamos hace rato era como un cuatro.`, `A five or a six. When we talked a while ago it was about a four.`]
        },
        quote: `Esta noche, después de que me explicó, me siento más aliviado. (Tonight, after your explanation, I feel more relieved.)`,
        key: [0, 1],
        need: [`Anxious mood`, `Congruent affect`],
        ok: [`Dysphoric mood`, `Full range affect`],
        wrong: {
          'Euthymic mood': `Relief is real, but he still fears another attack and has been down for weeks. Record the relief in his words and the anxiety as the mood.`,
          'Flat affect': `He smiles at the alarm and grows serious about the freeway. His affect moves with the topic.`,
          'Labile affect': `His affect changes gently with what he is talking about, not suddenly or out of proportion.`
        },
        doc: `"Esta noche, después de que me explicó, me siento más aliviado." (Tonight, after your explanation, I feel more relieved.) Mood 5-6/10 (4/10 at the review). Anxious mood, still worried about another attack; down for the last weeks; congruent affect, brighter than at the review`,
        why: `Quote his words. Relief after a clear explanation is common, but it does not remove the fear of the next attack, and the low mood he reported two hours ago still needs follow-up at the clinic visit. At the review the mood was recorded as low with anxiety. Tonight the worry is what he names now, so anxious is keyed and a low (dysphoric) mood is accepted.`
      },
      process: {
        obs: `Tells tonight's story in order and stays on the point. Adds the alarm explanation in his own words.`,
        ans: {
          0: [`No me internaron, ¿verdad? Estaba en el súper, lleno de gente, me empezó a latir el corazón bien fuerte, no podía respirar y vine a urgencias. Es la segunda vez en un mes y medio. Los estudios salieron normales otra vez. Usted me explicó lo de la alarma del cuerpo y practicamos la respiración.`, `I wasn't admitted, right? I was in the store, full of people, my heart started pounding really hard, I couldn't breathe and I came to the ER. It's the second time in a month and a half. The tests were normal again. You explained the body's alarm to me and we practiced breathing.`],
          1: [`Esta noche me voy a mi casa a dormir. Mi hermano me lleva. El martes voy a la clínica. Y le voy a bajar poco a poco a las energéticas y al café.`, `Tonight I'm going home to sleep. My brother is taking me. On Tuesday I go to the clinic. And I'll cut down the energy drinks and coffee little by little.`]
        },
        need: [`Goal-directed`, `Coherent and relevant`],
        wrong: {
          'Some circumstantiality': `He gives the main events without long detours.`,
          'Flight of ideas': `He stays on one topic at a time, at a normal pace.`
        },
        doc: `Goal-directed, coherent and relevant; gives tonight's events in order and a clear plan for home`,
        why: `The question asks about the admission. For an emergency department discharge, ask about tonight instead: "Cuénteme qué pasó esta noche." His plan for home is the more useful part: it shows what he took in.`
      },
      positive: {
        obs: `Attends to you throughout. Does not look around the bay or seem distracted.`,
        ans: {
          0: [`No, nunca me ha pasado eso.`, `No, that has never happened to me.`],
          2: [`No, no veo nada.`, `No, I don't see anything.`],
          3: [`No. No es que alguien me quiera hacer algo. Me daba miedo que se me parara el corazón.`, `No. It isn't that someone wants to do something to me. I was scared my heart would stop.`],
          4: [`En el ataque de veras creí que me iba a morir. Ahora pienso que era la alarma del cuerpo. Pero si me da otro, creo que todavía me voy a asustar.`, `During the attack I truly believed I was going to die. Now I think it was the body's alarm. But if I get another one, I think I'll still be scared.`]
        },
        key: [3, 4],
        need: [`No hallucinations elicited`, `Not responding to internal stimuli`],
        wrong: {
          'Delusions no longer held': `He never had a delusion. The fear of dying during an attack is a catastrophic misreading of real body sensations, and he can question it now.`,
          'Residual persecutory ideas, less intense': `His fear is about his own heart and body, not about other people.`,
          'Responding to internal stimuli': `He attends to you throughout.`
        },
        doc: `No hallucinations elicited; not responding to internal stimuli; no delusions; during attacks fears dying or losing control, now sees this as the body's alarm but still fears another attack`,
        why: `Ask the screening questions anyway. An attack with fear of losing control is not psychosis, and you document that it was checked. Adapt question 4 to what he believed during the attack (that he would die).`
      },
      negative: {
        obs: `No ward activities to ask about: an emergency department visit. He talks easily, is well kempt, and speaks about going back to work.`,
        ans: {
          0: [`Pues aquí en urgencias no hay actividades, ¿verdad?`, `Well, there aren't any activities here in the ER, are there?`],
          1: [`No, me quedé detrás de la cortina todo el tiempo.`, `No, I stayed behind the curtain the whole time.`],
          2: [`Sí. Quiero volver a trabajar pronto. Las entregas no se hacen solas.`, `Yes. I want to get back to work soon. The deliveries don't deliver themselves.`],
          3: [`Sí, me baño todos los días.`, `Yes, I shower every day.`]
        },
        key: [2],
        need: [`None noted`],
        wrong: {
          Avolition: `He has missed work because he fears another attack, not because he has lost his drive. He wants to go back.`,
          Asociality: `He lives with his brother and talks with his mother. Avoiding crowded stores is fear, not a negative symptom.`,
          Anhedonia: `He has felt down, but nothing in the interview shows a loss of interest. Ask about it at the clinic visit.`
        },
        doc: `None noted; wants to return to work; self-care intact; has lost deliveries from fear of attacks (avoidance)`,
        why: `These questions are built for psychosis on a ward. In the emergency department, use them to check drive and self-care. They help you tell avoidance (fear) from depression (loss of drive).`
      },
      suicide: {
        ans: {
          0: [`No. Usted me preguntó hace rato también, y no, nada de eso.`, `No. You asked me a while ago too, and no, nothing like that.`],
          1: [`No.`, `No.`],
          2: [`Llamo o mando mensaje al 988, y le digo a mi hermano. Oprimo el 2 para español, ¿verdad?`, `I call or text 988, and I tell my brother. I press 2 for Spanish, right?`]
        },
        key: [0, 2],
        need: [[`Denies suicidal ideation, plan, or intent`, `None`]],
        doc: `Denies suicidal ideation, plan, or intent (asked again before discharge); knows to call or text 988 (oprima 2) if such thoughts appear and would tell his brother`,
        why: `Ask again before he leaves, even though he denied it two hours ago: he has low mood and has lost work. Repeating the question is routine, not a sign of distrust. Say so. Also make sure he knows the 988 number and that he can ask for Spanish.`
      },
      homicide: {
        ans: {
          0: [`No, para nada.`, `No, not at all.`],
          1: [`Con nadie. Más bien me da pena con el personal de urgencias por venir otra vez.`, `With no one. If anything I feel bad toward the ER staff for coming back again.`]
        },
        key: [0],
        need: [[`Denies homicidal ideation`, `None`]],
        doc: `Denies homicidal ideation`,
        why: `Ask it briefly. If he apologizes for coming back, tell him it was right to come: chest symptoms need checking, and the plan tonight tells him when to come again.`
      },
      orientation: {
        obs: `He gives the weekday and the time of month correctly, glancing at the clock: it is nearly midnight.`,
        ans: {
          0: [`Es jueves, mediados de noviembre. Ya casi es viernes.`, `It's Thursday, the middle of November. It's almost Friday.`],
          1: [`En el hospital, en urgencias.`, `At the hospital, in the emergency room.`],
          2: [`Usted es el psiquiatra. Ya me vio hace rato.`, `You're the psychiatrist. You saw me a while ago.`]
        },
        need: [`Oriented to time, place, and person (×3)`],
        wrong: {
          'Disoriented to time': `He gives the weekday and the month correctly, and knows it is almost midnight.`
        },
        doc: `Oriented to time, place, and person (×3)`,
        why: `Fully oriented, as at the review. Write it even when it seems obvious: confusion would point to a medical cause, not to panic.`
      },
      memory: {
        ans: {
          0: [`Pelota, árbol, llave.`, `Ball, tree, key.`],
          1: [`Pelota, árbol, llave.`, `Ball, tree, key.`],
          2: [`Nomás café en la mañana. Siempre es así.`, `Just coffee in the morning. It's always like that.`],
          3: [`No me ingresaron, ¿verdad? Esta noche me dio un ataque en el súper y vine.`, `I wasn't admitted, right? Tonight I had an attack in the store and came in.`],
          4: [`En Fresno. Ahí vive mi mamá todavía.`, `In Fresno. My mom still lives there.`]
        },
        key: [3],
        need: [`Intact immediate, recent, and remote memory`],
        wrong: {
          'Impaired recent memory': `He recalls all three words and gives tonight's events in order.`
        },
        doc: `Intact immediate (3/3), recent (3/3 recall, tonight's events), and remote memory; breakfast was coffee only`,
        why: `Adapt the admission question to tonight. His breakfast answer is worth a note: coffee on an empty stomach is part of the caffeine picture.`
      },
      insight: {
        ans: {
          0: [`Porque me dio un ataque en el súper y pensé que se me iba a parar el corazón. Ahora entiendo que la alarma del cuerpo se disparó de repente. Y tanta cafeína a lo mejor la hizo saltar más fácil.`, `Because I had an attack in the store and thought my heart would stop. Now I understand that the body's alarm went off suddenly. And all that caffeine maybe made it go off more easily.`],
          1: [`Me dijeron que puede ser trastorno de pánico. Que no está en mi cabeza y que se puede tratar. Al oírlo, me sentí más aliviado.`, `They told me it might be panic disorder. That it isn't in my head and that it can be treated. Hearing that, I felt more relieved.`],
          2: [`Esta noche no me dieron medicina, ¿verdad? La medicina y las prácticas son para la clínica. Yo sí quiero mejorar.`, `They didn't give me medicine tonight, right? Medicine and the practice are for the clinic. I do want to get better.`],
          3: [`Todavía no hay medicina... Si sigo evitando la freeway, el miedo dura más, ¿no? Y si dejo las energéticas de golpe, me puede dar dolor de cabeza. Mejor poco a poco.`, `There's no medicine yet... If I keep avoiding the freeway, the fear lasts longer, right? And if I stop the energy drinks all at once, I might get a headache. Better little by little.`]
        },
        key: [0, 1],
        need: [`Good`, `Grade 5: intellectual insight`],
        ok: [`Fair`, `Grade 4: aware, cause unknown in self`],
        wrong: {
          'Grade 3: blames others/external factors': `He does not blame anyone. He names caffeine as his own habit that makes the alarm go off more easily, and accepts that the fear and avoidance need treatment.`,
          'Grade 6: true emotional insight': `He understands the explanation, but he has not yet changed what he does (he still avoids the freeway). That comes with treatment.`,
          Poor: `He accepts the explanation, wants treatment and has a plan.`
        },
        doc: `Good (grade 5): understands the attacks as the body's alarm, real but not dangerous; links caffeine to the attacks; knows avoidance keeps the fear going; accepts clinic treatment (was fair, grade 4, at the review)`,
        why: `Insight improved within two hours, after a clear explanation: at the review he asked whether it was in his head. Grade 4 is accepted if you weigh his remaining fear. Adapt the medicine questions: there is no medicine yet, so ask what he understands about treatment.`
      },
      judgment: {
        ans: {
          0: [`Todavía no tengo medicina, pero si me atoro, llamo a la clínica y pregunto.`, `I don't have any medicine yet, but if I get stuck I'll call the clinic and ask.`],
          1: [`Si me da otro ataque, primero respiro despacio. Pasa como una ola, ¿no? Pero si me da un dolor de pecho distinto al de siempre, o siento que me voy a desmayar, llamo al 911.`, `If I get another attack, first I breathe slowly. It passes like a wave, right? But if I get a chest pain different from the usual, or feel like I'm going to faint, I call 911.`],
          2: [`Le aviso a la gente rápido y salgo por la salida de emergencia.`, `I'd warn the people quickly and go out the emergency exit.`]
        },
        key: [1],
        need: [`Intact test judgment`, `Intact social judgment`],
        ok: [`Good`, `Fair`],
        wrong: {
          'Impaired social judgment': `Coming to the emergency room with chest symptoms was sensible. Avoiding the freeway is a symptom to treat step by step, not a failure of judgment.`
        },
        doc: `Intact test and social judgment; plans slow breathing for a usual attack, 911 or the emergency room for chest pain that feels different or near-fainting; agrees to clinic follow-up`,
        why: `Adapt the voices question to what he has: another attack. A good answer separates a usual attack (slow breathing, it passes) from new or different symptoms (urgent care). Do not tell him never to come back. Tell him when to come.`
      },
      sleep: {
        obs: `No sleep chart: an emergency department visit. Ask him.`,
        ans: {
          0: [`Desde hace semanas no duermo bien. Aunque me acueste, pienso que me va a dar otro ataque y no me duermo.`, `For weeks I haven't slept well. Even when I lie down, I think another attack will come and I can't fall asleep.`],
          1: [`Me despierto de vez en cuando, pero lo peor es quedarme dormido.`, `I wake up now and then, but the worst is falling asleep.`],
          2: [`Me da sueño en el día. Por eso me tomo más energéticas.`, `I get sleepy during the day. That's why I drink more energy drinks.`]
        },
        key: [0, 2],
        need: [`Poor`, `Difficulty initiating sleep`],
        wrong: {
          Good: `He has slept poorly for weeks.`,
          '7–8 hours, uninterrupted': `He has trouble falling asleep and wakes now and then.`,
          'Frequent awakenings': `He wakes now and then, but his main problem is falling asleep.`,
          'Daytime sedation': `He is sleepy by day from poor sleep, not from a medicine: none was given.`,
          'Reduced need for sleep': `He wants to sleep and cannot, and he is sleepy by day. That is insomnia, not a reduced need for sleep.`
        },
        doc: `Poor for weeks: difficulty initiating sleep from worry about attacks, occasional waking; sleepy by day and drinks more energy drinks`,
        why: `Name the cycle: poor sleep, more caffeine by day, an alarm that goes off more easily, more worry at night. Cutting caffeine down gradually, starting with the afternoon drinks, helps both sleep and the attacks.`
      },
      adverse: {
        obs: `Emergency department record: no medicine given. Tests normal tonight and at the first visit. No injury. Settled with slow breathing.`,
        ans: {
          0: [`Esta noche no me han dado ninguna medicina.`, `They haven't given me any medicine tonight.`],
          1: [`No. La práctica de respirar me ayudó mucho.`, `No. The breathing practice helped me a lot.`]
        },
        key: [0, 1],
        need: [`None`],
        wrong: {
          'Medical illness during admission': `The emergency physician looked for medical causes and the tests were normal. Record that in the chart and the diagnosis.`,
          'Withdrawal symptoms': `He has not stopped caffeine. Warn him that stopping suddenly can cause headaches and tiredness. That is why he cuts down gradually.`,
          Sedation: `No medicine was given.`,
          'Fall or injury': `He was not hurt.`
        },
        doc: `None; no medicine given in the emergency department; tests normal tonight and at the first visit; settled with slow breathing`,
        why: `Adapt the questions to tonight. Writing "no medicine given" matters: the clinic doctor needs to know he settled without one.`
      },
      diagnosis: {
        ans: {
          0: [`Trastorno de pánico... O sea que tiene nombre. Saber que se puede tratar me da un poco de alivio.`, `Panic disorder... So it has a name. Knowing it can be treated gives me a little relief.`],
          2: [`Con eso que dice... yo pensaba que tomar tantas energéticas era mi culpa. Mi mamá le dice ataque de nervios, y yo creo que también es eso, a su manera.`, `When you say that... I thought drinking so many energy drinks was my fault. My mom calls it ataque de nervios, and I think it's that too, in her way.`]
        },
        key: [0, 2],
        need: [`Other comorbid: ___`],
        wrong: {
          'Major depressive disorder, recurrent': `He reports low mood, but a depressive disorder has not been assessed tonight. Note the low mood and follow it up at the clinic visit.`,
          'Methamphetamine-induced psychotic disorder, with ___ use disorder': `He uses no substances other than caffeine and has no psychotic symptoms.`
        },
        doc: `Panic disorder (provisional), with agoraphobic avoidance (avoids the freeway and crowded stores); heavy daily caffeine as a likely trigger; low mood, to follow up; medical causes looked at by the emergency physician, tests normal tonight and at the first visit`,
        why: `The form has no pick for panic disorder. The nearest is "Other comorbid: ___". Write it there and make clear that it is the working diagnosis, not a comorbidity. Provisional, because it rests on one emergency review. The clinic visit confirms it and looks at the avoidance. Explain it as the body's alarm: the symptoms are real, not dangerous, and treatable. Adapt question 2 (it is not your fault) and leave out the line about curses unless he raises a belief like that. His mother's "ataque de nervios" is a respected family word: accept it and offer the medical name beside it.`
      },
      medications: {
        ans: {
          0: [`Esta noche no hay medicina nueva, ¿verdad?`, `There's no new medicine tonight, right?`],
          2: [`No hay medicina nueva. La medicina y la terapia las hablo en la clínica. Y las energéticas y el café no los voy a dejar de golpe: les voy a bajar poco a poco.`, `No new medicine. I'll talk about medicine and therapy at the clinic. And the energy drinks and coffee I won't stop all at once: I'll cut down little by little.`],
          4: [`Sí. Si en la clínica me empiezan alguna medicina, no la voy a dejar por mi cuenta.`, `Yes. If they start me on a medicine at the clinic, I won't stop it on my own.`]
        },
        key: [2],
        need: [`Teach-back done, correct`],
        wrong: {
          'Sertraline ___ mg tab, ___': `No medicine was started tonight. Whether to start one is decided at the clinic visit, together with therapy, where it can be followed up.`,
          'Teach-back incorrect, re-taught': `His teach-back was correct: no new medicine, treatment to be discussed at the clinic visit, caffeine cut down gradually.`
        },
        doc: `No new medicine started; no medicine given in the emergency department; medicine and step-by-step therapy to be discussed at the clinic visit; coffee and energy drinks to be cut down gradually, not suddenly; teach-back correct`,
        why: `The form expects a list of medicines. When there are none, write that plainly, so the next doctor knows nothing was started. The caffeine plan is part of the treatment: teach why it is gradual (headaches and tiredness if stopped suddenly).`
      },
      aftercare: {
        ans: {
          0: [`Sí. El martes a las diez en la clínica. Ya me lo apuntaron en este papel.`, `Yes. Tuesday at ten at the clinic. They already wrote it down on this paper.`],
          1: [`Mi hermano Iván. Vivimos juntos y él ya sabe lo que me pasó.`, `My brother Iván. We live together and he already knows what happened to me.`],
          2: [`Iván: Si le da algo distinto, como un dolor de pecho diferente o un desmayo, lo traigo a urgencias o llamo al 911. Si es un ataque de los de siempre, lo ayudo a respirar despacio y esperamos a que pase.`, `Iván: If he gets something different, like a different chest pain or fainting, I'll bring him to the ER or call 911. If it's one of his usual attacks, I help him breathe slowly and we wait for it to pass.`, `Iván (brother)`],
          3: [`Sí. Ya lo guardé en el teléfono. Si algún día pienso en morirme, llamo o mando mensaje al 988 y oprimo el 2.`, `Yes. I already saved it in my phone. If I ever think about dying, I call or text 988 and press 2.`]
        },
        key: [2, 1],
        need: [`Outpatient follow-up in 1–2 weeks`, `Follow-up appointment date and clinic given in writing`, `Safety plan made with patient and family`, `Family oriented on warning signs`],
        ok: [`Referred to ___`],
        wrong: {
          'Interpreter arranged for follow-up': `Daniel is bilingual and chose Spanish with you. Ask whether he wants the clinic visit in Spanish or English. An interpreter is needed when a patient or family member cannot follow the conversation, such as his mother.`,
          'Discharge deferred: ___': `Medical causes were looked at and the tests were normal, he has settled, denies suicidal thoughts and has a plan. Keeping him would not treat panic.`,
          'Transferred to ___ unit due to ___': `He goes home with his brother.`
        },
        doc: `Home tonight with his brother; clinic visit booked within the week (Tuesday 10:00, outpatient psychiatry; written appointment given); safety plan made with the patient and his brother: slow breathing for a usual attack, the emergency room or 911 for new or different symptoms (chest pain that feels different, fainting), 988 (oprima 2 for Spanish) if thoughts of suicide appear; brother oriented on the warning signs; offer to explain the plan to his mother stays open, with his consent`,
        why: `The key message is when to come back, not "don't come back". Keep the door open for new or different symptoms and for worry he cannot manage. His brother sat in with his consent, so a safety plan with patient and family fits here. Daniel decides what to tell his mother. If she needs the explanation in Spanish, offer a qualified interpreter or a Spanish-speaking clinician.`
      }
    }
  }
]);
