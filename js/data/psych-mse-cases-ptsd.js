/* Admission-style MSE practice case: Marisela at her first outpatient visit (PTSD after a freeway crash).
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish text. Patient answers are Spanish first, English second.
   Fictional patient. Appends to window.PSYCH_MSE_CASES. Same shape as psych-mse-cases.js. */
window.PSYCH_MSE_CASES = (window.PSYCH_MSE_CASES || []).concat([
  {
    id: `ptsd`,
    title: `Marisela at her first visit`,
    level: `B1`,
    dx: `Posttraumatic stress disorder, provisional (confirm DSM-5-TR criteria and functional impact)`,
    form: ``,
    setting: `Outpatient clinic, first visit, after you have taken her history. Marisela, 41, is a home health aide, married, with two teenagers. Her primary care doctor referred her. She came alone, in clean blue scrubs, straight from work.`,
    chart: [
      `Referral from her primary care doctor: eight months ago she was driving on the freeway when a crash happened. She had bruises only and has recovered. The other driver died. Since then she sleeps poorly and has nightmares. Question: please assess.`,
      `History taken earlier in this visit: nightmares about the crash, and the feeling that it is happening again when she hears brakes. She no longer drives, avoids the freeway, and gets to work by bus or with her husband. She jumps at small noises and snaps at her children. She blames herself ("yo iba manejando") and stopped going to Mass. A comadre told her it was susto, and she had a limpia before coming.`,
      `Sleep: wakes many times in the night. Lately has a beer before bed on more nights. Not every day, no morning drinking, no shaking hands.`,
      `Earlier in the visit, when brakes screeched outside, she went rigid and briefly felt the crash was happening again. She settled within a minute with grounding (naming three things she could see in the room).`
    ],
    cc: {
      ask: `cc-hpi:0`,
      ans: [
        `De noche sueño con el choque y me despierto, y cuando oigo frenar es como si estuviera pasando otra vez.`,
        `At night I dream about the crash and wake up, and when I hear brakes it's as if it's happening again.`,
        `Marisela`
      ],
      opts: [
        [
          `"De noche sueño con el choque y me despierto, y cuando oigo frenar es como si estuviera pasando otra vez."`,
          true,
          `The form records the chief complaint in the patient's own words, in Spanish, in quotation marks.`
        ],
        [
          `Nightmares and flashbacks eight months after a car crash`,
          false,
          `That is your interpretation. It belongs in the HPI and the MSE, not in the chief complaint.`
        ],
        [
          `At night I dream about the crash and wake up, and when I hear brakes it's as if it's happening again.`,
          false,
          `A translation loses the patient's words. Quote the Spanish; add a translation in parentheses if your service requires it.`
        ]
      ]
    },
    domains: {
      appearance: {
        obs: `Adult female, medium build, in clean blue scrubs under a light jacket, hair tied back neatly. Sits on the edge of the chair with her purse held on her lap in both hands. Her shoulders are high and tight.`,
        ans: {
          0: [`Buenos días, doctora. Soy Marisela.`, `Good morning, doctor. I'm Marisela.`],
          1: [`Sí, gracias.`, `Yes, thank you.`]
        },
        need: [`Adult female`, `Medium built`, `Well kempt`],
        wrong: {
          'Older adult': `She is 41, an adult in middle age.`,
          'Fairly kempt': `She is neatly dressed and tidy. Nothing is out of place.`,
          'Unkempt': `She is in clean scrubs with her hair tied back neatly.`,
          'Poor hygiene': `Nothing suggests poor hygiene.`
        },
        doc: `Adult female, medium built, in clean scrubs, well kempt; tense, sits on the edge of the chair holding her purse on her lap`,
        why: `Her appearance is in order, and that matters: she is still looking after herself and going to work. The tension shows in how she sits, not in how she is dressed. Write it here in one phrase and describe it fully under psychomotor activity.`
      },
      psychomotor: {
        obs: `Sits on the edge of the chair, holding her purse tightly. Glances toward the window at small sounds from the street. Earlier, when brakes screeched outside, she startled, went rigid and gripped the purse. With grounding she slowed her breathing and settled within a minute. Now her grip is a little looser. No pacing, no slowing, no tremor.`,
        ans: {
          0: [`Mi esposo dice que ando como en alerta. Siento el cuerpo siempre tenso, y cualquier ruido me hace brincar.`, `My husband says I'm always on alert. My body always feels tense, and any noise makes me jump.`]
        },
        need: [`Restless`],
        ok: [`No psychomotor agitation or retardation`],
        wrong: {
          'Psychomotor agitation': `She does not pace or move about. She sits still and tense, holding herself ready.`,
          'Psychomotor retardation': `She is tense and quick to startle, not slowed.`,
          'Tremor': `No tremor is seen.`,
          'Abnormal involuntary movements': `Startling at a sudden sound is an exaggerated startle response, not a movement disorder.`
        },
        doc: `Tense, restless: sits on the edge of the chair holding her purse, glances toward the window at street sounds; exaggerated startle at a braking sound outside with brief re-experiencing, settled within a minute with grounding; no agitation, retardation or tremor`,
        why: `The pick list has no word for "tense", so choose the nearest one and describe what you see. The startle at the braking sound is a sign of hyperarousal, and the minute that followed was re-experiencing. Write both, and write that she settled with grounding: it shows that she can come back to the present, which you will build on in treatment.`
      },
      attitude: {
        obs: `Polite and open. Unsure at first whether her problem is "enough" for a psychiatrist, then talks readily once she is told she can choose what to share and can pause. Looks at you when she speaks. Looks down when she talks about the other driver and about her children.`,
        ans: {
          0: [`Marisela está bien, gracias.`, `Marisela is fine, thank you.`],
          1: [`En español, por favor. Así me siento más cómoda.`, `In Spanish, please. I feel more comfortable that way.`]
        },
        need: [`Cooperative`, `Good eye contact`],
        ok: [`Fair eye contact`],
        wrong: {
          'Guarded': `She is unsure at first, but she does not hold back. She chooses not to retell the crash in detail, and you told her she could.`,
          'Suspicious': `She is wary of sounds outside, not of you.`,
          'Uncooperative': `She answers every question and shares more than she is asked.`
        },
        doc: `Cooperative, polite; unsure at first whether she needs psychiatry, more open once given control over what she shares; good eye contact, looks down when speaking of the other driver and her children`,
        why: `Choosing not to describe the crash is not guardedness. In a trauma-informed interview you invite her to stop, so record her attitude from how she engages, not from what she leaves out. Looking down when she speaks of the person who died goes with her guilt and, for many patients, with respeto. It is not poor rapport.`
      },
      mood: {
        obs: `Her face and voice are tense through most of the interview. Her eyes fill when she speaks of her children. She looks relieved, and her shoulders drop a little, when you tell her this is a common reaction that often gets better with treatment.`,
        ans: {
          0: [`Ahorita el corazón todavía me late rápido, por ese ruido de hace rato.`, `Right now my heart is still beating fast, from that noise a while ago.`],
          1: [`Siempre ando como en alerta, como si algo fuera a pasar. Y de noche no duermo bien.`, `I'm always on alert, as if something is going to happen. And at night I don't sleep well.`],
          2: [`Como un cuatro. Aunque ya me siento un poco más tranquila que hace rato.`, `About a four. I feel a little calmer than a while ago, though.`]
        },
        quote: `Siempre ando como en alerta. (I'm always on alert.)`,
        need: [`Anxious mood`, `Congruent affect`],
        ok: [`Full range affect`],
        wrong: {
          'Euthymic mood': `She describes being on alert all the time, and her heart is still racing.`,
          'Sad mood': `She is tearful about her children, but the mood she describes is tension and fear, not low mood.`,
          'Restricted affect': `Her affect moves: tense, tearful about her children, relieved after the explanation.`,
          'Flat affect': `Her face shows tension, tears and relief.`,
          'Labile affect': `Each change in her affect has a clear reason: the sound, her children, your explanation.`,
          'Incongruent affect': `Her tense face fits what she says.`
        },
        ev: {
          find: `Anxious mood`,
          opts: [
            [`"Siempre ando como en alerta, como si algo fuera a pasar."`, true],
            [`"Mi doctora de la clínica me dijo que viniera."`, false],
            [`"Mi comadre dice que es susto."`, false]
          ],
          why: `Asked about her mood over the past two weeks, she describes constant tension: that is the anxious mood. The other lines tell you how she came and how her comadre explains it, not how she feels.`
        },
        doc: `"Siempre ando como en alerta, como si algo fuera a pasar." (I'm always on alert, as if something is going to happen.) Rates her mood 4 of 10. Anxious mood; affect anxious, appropriate to content, tearful about her children, brighter after explanation`,
        why: `Quote her words: "ando como en alerta" is the everyday way people describe hyperarousal. She ties it to poor sleep, which she names herself. Appropriate affect is written here as congruent: her tension, her tears about her children and her relief each fit what she is talking about.`
      },
      speech: {
        obs: `Normal rate and volume. Answers fully and adds things without being asked, such as her guilt and the beer before bed. When she comes near the moment of the crash, she stops, apologizes and asks to leave it there. Her voice softens a little when she speaks of her children.`,
        ans: {
          0: [`Hace ocho meses iba manejando en la autopista y hubo un choque. Salí con unos golpes nada más, ya sané. Pero la otra persona... se murió. Perdone, los detalles, ahorita prefiero no contarlos.`, `Eight months ago I was driving on the freeway and there was a crash. I came out with just some bruises, I healed. But the other person... died. Sorry, the details, right now I'd rather not tell them.`]
        },
        need: [`Spontaneous`, `Normal rate`, `Adequate volume`],
        ok: [`Productive`],
        wrong: {
          'Non-spontaneous (answers only when asked)': `She tells you about her guilt and the beer without being asked.`,
          'Soft volume': `Her voice softens a little when she speaks of her children, but it is adequate throughout.`,
          'Slow rate': `She speaks at a normal rate. Stopping before the details of the crash is a choice, not slowed speech.`,
          'Poverty of speech': `She says a good deal and answers fully.`,
          'Pressured': `She speaks at a normal rate and can be interrupted easily.`
        },
        doc: `Spontaneous, productive, normal rate and volume; voice softens when speaking of her children; stops before the details of the crash and asks to leave it there`,
        why: `This is a standard open question, and you need only the outline: you are listening to the form of her speech, not collecting the story. When she stops, thank her and tell her she does not need to say more ("No necesita decirme más"). Pushing for a detailed retelling at a first visit can set off re-experiencing. Working with the memory belongs to planned trauma-focused therapy.`
      },
      process: {
        obs: `Her account moves in order from the crash to what has changed since: sleep, sounds, driving, her children. She reaches the point of each question. The one stop comes when she nears the moment of the crash. After a breath she goes on with what her life is like now.`,
        ans: {
          0: [`Hace ocho meses iba manejando en la autopista y hubo un choque. Salí con unos golpes nada más, ya sané. Pero la otra persona... se murió. Perdone, los detalles, ahorita prefiero no contarlos.`, `Eight months ago I was driving on the freeway and there was a crash. I came out with just some bruises, I healed. But the other person... died. Sorry, the details, right now I'd rather not tell them.`],
          1: [`Cuando oigo el ruido se me pone el cuerpo duro y es como si estuviera otra vez en ese día. Luego me doy cuenta: ya pasó, ya estoy bien.`, `When I hear the noise my body goes stiff and it's as if I'm back on that day. Then I realize: it's over, I'm all right now.`]
        },
        need: [`Linear`],
        ok: [`Goal-directed`],
        wrong: {
          'Thought blocking': `Blocking is a sudden stop in the middle of a thought that the patient cannot explain. She stops on purpose, says why, and goes on.`,
          'Circumstantial': `She does not wander into detail. If anything she gives less detail than you could ask for.`,
          'Tangential': `She answers each question and stays with it.`,
          'Loose associations': `Her ideas follow one another clearly.`
        },
        doc: `Linear and goal-directed; pauses by choice before the details of the crash, then continues; describes re-experiencing clearly ("es como si estuviera otra vez en ese día")`,
        why: `Her pause is avoidance of a painful memory, and she tells you so. It is not a disorder of thought form. Her answer to the follow-up question is worth keeping word for word: "como si estuviera otra vez en ese día" and then "ya pasó, ya estoy bien" describe re-experiencing, and show that she knows afterwards it was a memory.`
      },
      perception: {
        obs: `No sign of responding to anything you cannot hear or see. The braking sound earlier was real: you heard it too.`,
        ans: {
          0: [`No, nunca. Estoy muy sensible al sonido de los frenos, pero el de hace rato sí fue un ruido de afuera, ¿verdad?`, `No, never. I've become very sensitive to the sound of brakes, but the one earlier really was a noise from outside, wasn't it?`],
          1: [`No.`, `No.`],
          2: [`No, no veo nada así. Mi comadre habla de susto, pero yo no veo ningún espíritu. Solo se me vienen a la cabeza escenas de ese día, como hace rato.`, `No, I don't see anything like that. My comadre talks about susto, but I don't see any spirit. Only scenes from that day come into my head, like a while ago.`],
          3: [`No oigo voces.`, `I don't hear voices.`],
          4: [`No, nunca.`, `No, never.`]
        },
        key: [0, 2],
        need: [`Denies perceptual disturbances`],
        ok: [`Not responding to internal stimuli`],
        wrong: {
          'Auditory hallucinations': `The braking sound was real: you heard it too. Being very sensitive to a real sound is hyperarousal.`,
          'Visual hallucinations': `The scenes that come back are memories of that day, in her head, and she knows they are memories. That is re-experiencing, not a hallucination. She sees no spirits.`,
          'Responding to internal stimuli': `During the flashback she reacted to a real sound and a memory, and she came back as soon as she was grounded. Between those moments she attends fully to you.`
        },
        ev: {
          find: `Denies perceptual disturbances`,
          opts: [
            [`"No, nunca. Estoy muy sensible al sonido de los frenos, pero el de hace rato sí fue un ruido de afuera."`, true],
            [`"Cuando oigo el ruido se me pone el cuerpo duro y es como si estuviera otra vez en ese día."`, false],
            [`"De noche sueño con el choque y me despierto."`, false]
          ],
          why: `Asked whether she hears things, she says no and tells you that the braking sound was real. The other two lines are her flashbacks and nightmares: intrusion symptoms, which you document as re-experiencing, not as perceptual disturbances.`
        },
        doc: `Denies hallucinations in any modality; not responding to internal stimuli. Re-experiencing: flashbacks set off by braking sounds (one in this interview, settled with grounding) and nightmares of the crash; she recognizes these as memories`,
        why: `A flashback is not a hallucination. It is a memory that returns with the feeling that it is happening now, set off by a reminder, and afterwards she knows it was a memory. Her comadre's talk of susto and a spirit leaving the body is also not a perceptual finding: she herself sees no spirits. Record the flashbacks under re-experiencing, so that no one later reads "hallucinations" into her notes and treats her for psychosis.`
      },
      content: {
        ans: {
          0: [`No, no creo.`, `No, I don't think so.`],
          1: [`No.`, `No.`],
          2: [`No, nunca.`, `No, never.`],
          3: [`En la cabeza sé que la policía dijo que no fue mi culpa. Pero el corazón no me hace caso.`, `In my head I know the police said it wasn't my fault. But my heart doesn't listen.`],
          4: [`...Pienso que si yo hubiera salido más tarde ese día, no habría pasado. Pero a lo mejor no es así.`, `...I think that if I had left later that day, it wouldn't have happened. But maybe it isn't like that.`],
          5: [`Sí. Yo iba manejando, y esa persona ya no está. Y todavía les grito a mis hijos por cualquier cosa...`, `Yes. I was the one driving, and that person is gone. And I still yell at my kids over anything...`],
          6: [`El choque. Mi comadre dice que fue un susto, que el espíritu se me salió con el golpe. Yo no sé, pero todo cambió desde ese día.`, `The crash. My comadre says it was susto, that my spirit left me with the impact. I don't know, but everything changed from that day.`]
        },
        key: [5, 3],
        need: [`Guilt or worthlessness (not delusional)`, `No delusions elicited`],
        ok: [`Preoccupation with ___`],
        wrong: {
          'Persecutory delusions': `She does not believe anyone wants to harm her. Fear of cars after a crash is a realistic fear, not a delusion.`,
          'Delusions of reference': `Sounds frighten her because they remind her of the crash, not because she thinks they carry a message for her.`,
          'Nihilistic delusions': `She says everything changed, but she does not believe that she or the world no longer exists. Her comadre's idea of susto is a cultural explanation, not her delusion.`
        },
        ev: {
          find: `Guilt or worthlessness (not delusional)`,
          opts: [
            [`"Yo iba manejando, y esa persona ya no está."`, true],
            [`"Mi comadre dice que fue un susto, que el espíritu se me salió con el golpe."`, false],
            [`"No, no creo."`, false]
          ],
          why: `She blames herself for the other driver's death. It is not delusional: asked how sure she is, she says that in her head she knows the police said it was not her fault, and she can consider another view. The second line is her comadre's cultural explanation of the cause, and the third denies that anyone wants to harm her.`
        },
        doc: `No delusions elicited. Guilt about the crash ("Yo iba manejando, y esa persona ya no está"), not delusional: knows the police said it was not her fault and can consider another view. Her comadre's explanation (susto) is a cultural explanation; the patient says she does not know. Attributes the change to the crash`,
        why: `Guilt and self-blame after a trauma are common and are part of the negative changes in thinking that belong to PTSD. Test it the same way as any strong belief: how sure, and could there be another explanation. She can step back from it, so it is not delusional. Do not argue it away today. Reflect it and let therapy work on it. Susto is a widely shared explanation, so it is not a delusion either. Ask what she thinks and what she has done about it (the limpia).`
      },
      safety: {
        ans: {
          0: [`Ahorita no. Está difícil, pero tengo a mis hijos.`, `Not now. It's hard, but I have my kids.`],
          1: [`...Una vez pensé que hubiera sido mejor haber muerto yo y no la otra persona. Pero ahorita ya no lo pienso.`, `...Once I thought it would have been better if I had died and not the other person. But I don't think that now.`],
          2: [`No. Nunca he pensado en hacerme nada.`, `No. I've never thought of doing anything to myself.`],
          3: [`No.`, `No.`],
          4: [`No. Quiero estar bien por mis hijos.`, `No. I want to be well for my kids.`],
          5: [`No, nada de eso.`, `No, nothing like that.`]
        },
        key: [1, 2, 4],
        need: [`Denies suicidal ideation`, `Denies homicidal ideation`],
        ok: [`Passive death wish`],
        wrong: {
          'Active suicidal ideation, no plan': `She has never thought of acting. The one thought was that it would have been better if she had died.`,
          'Active suicidal ideation with plan': `She has no plan and no intent.`,
          'Homicidal ideation toward ___': `She denies any thought of harming anyone. Snapping at her children is irritability, which she regrets.`
        },
        ev: {
          find: `Denies suicidal ideation`,
          opts: [
            [`"Ahorita no. Está difícil, pero tengo a mis hijos."`, true],
            [`"Una vez pensé que hubiera sido mejor haber muerto yo y no la otra persona."`, false],
            [`"No, nada de eso."`, false]
          ],
          why: `The first line answers the question about now: she has no wish to die today, and her children are a reason for living. The second is the past passive death wish, which you record separately with its time. The third answers the question about harming others.`
        },
        doc: `No current suicidal ideation, no plan or intent. One past passive death wish ("hubiera sido mejor haber muerto yo y no la otra persona"), none now. Protective: her children ("Quiero estar bien por mis hijos"). Denies homicidal ideation. Told what to do if the thoughts return (988, press 2 for Spanish; 911)`,
        why: `Ask from general to specific, as here. The question about sleeping and not waking brought out the one past passive death wish. Record it with its time, and record the current denial separately, so the next doctor can see both. Name her children as a protective factor and agree what she will do if the thoughts come back: tell her husband or the clinic, and call or text 988 or call 911 if she feels in immediate danger. Ask again at each visit, especially while the drinking to sleep continues.`
      },
      orientation: {
        ans: {
          0: [`Es jueves.`, `It's Thursday.`],
          1: [`En la clínica de salud mental.`, `At the mental health clinic.`],
          2: [`Usted es la doctora, la psiquiatra.`, `You are the doctor, the psychiatrist.`]
        },
        need: [`Oriented to 3 spheres`],
        wrong: {
          'Disoriented to time': `She gives the day correctly.`,
          'Disoriented to place': `She names the clinic.`,
          'Disoriented to person': `She knows who you are and why you are here.`
        },
        doc: `Oriented to 3 spheres`,
        why: `Orientation is intact. Her moment of re-experiencing earlier was brief and tied to a sound. She was oriented again as soon as she was grounded, and she named the room, so it is not a sign of delirium or disorientation.`
      },
      insight: {
        ans: {
          0: [`Sí... creo que es una reacción después de un susto muy fuerte, como usted dijo. Yo sola no puedo con esto.`, `Yes... I think it's a reaction after a very strong fright, as you said. I can't deal with this alone.`],
          1: [`Nadie me trajo. Mi doctora me lo sugirió y vine yo sola. Ya no podía seguir así.`, `Nobody brought me. My doctor suggested it and I came by myself. I couldn't go on like this.`],
          2: [`No sé si una pastilla ayude. Pero si hay manera de estar mejor, quiero intentarla.`, `I don't know if a pill would help. But if there is a way to feel better, I want to try it.`]
        },
        key: [0],
        need: [`Good`, `Grade 5: intellectual insight`],
        wrong: {
          'Fair': `She sees the problem, ties it to the crash and came for help herself.`,
          'Grade 3: blames others/external factors': `She names the crash as the cause, but she sees the reaction as a problem in herself that needs treatment. Her comadre's susto explanation is a cultural frame she holds alongside treatment, not blaming others.`,
          'Grade 4: aware, cause unknown in self': `She knows she has a problem and understands it as a reaction to the frightening event.`,
          'Grade 6: true emotional insight': `Today she understands the explanation. Emotional insight shows when that understanding changes what she does, which comes with treatment.`
        },
        doc: `Good, grade 5 (intellectual insight): understands her symptoms as a reaction to a very strong fright ("una reacción después de un susto muy fuerte"); came on her doctor's advice by her own choice; open to treatment`,
        why: `The question about the family does not fit her: she came on her own. Ask it in a form that fits ("¿De quién fue la idea de venir?"), and listen to the answer anyway, because "vine yo sola" tells you about insight too. Her word susto here is the everyday word for a strong fright, and she uses it next to your explanation, which is a good sign of rapport. Her open answer about treatment is a good start for explaining trauma-focused psychotherapy at the next visit.`
      },
      impulse: {
        ans: {
          0: [`A veces les grito a mis hijos por cualquier cosa y luego me siento muy mal. Pero no pierdo el control de otra forma, solo grito.`, `Sometimes I yell at my kids over anything and then I feel terrible. But I don't lose control in any other way, I just yell.`],
          1: [`No, nunca le he hecho daño a nadie.`, `No, I've never hurt anyone.`]
        },
        need: [`Good impulse control`],
        ok: [`Fair impulse control`],
        wrong: {
          'Poor impulse control': `She has never hurt anyone, she is not reckless, and she regrets her irritability. Yelling at her children is a symptom to follow, not poor impulse control.`
        },
        doc: `Good impulse control. Irritable with her children at times (yells, then regrets it); no violence, no recklessness`,
        why: `Irritability is part of the arousal symptoms of PTSD. Record it, with her regret, but separate it from impulse control. No violence, destruction or recklessness in the history, and she was calm and controlled in the interview.`
      },
      judgment: {
        ans: {
          0: [`Lo llevaría a la oficina de correos o lo echaría en un buzón.`, `I'd take it to the post office or drop it in a mailbox.`],
          1: [`Avisaría a los empleados y saldría con calma. ...Aunque la verdad, a lo mejor me quedaría paralizada.`, `I'd tell the staff and leave calmly. ...Honestly, though, I might freeze.`]
        },
        need: [`Fair`, `Intact test judgment`],
        ok: [`Intact social judgment`],
        wrong: {
          'Good': `Her answers are sensible and she sought help, but she is drinking a beer to sleep on more nights, and she fears she might freeze in an emergency.`,
          'Poor': `Her answers are sensible, she stopped driving while flashbacks come with sounds, and she came for help.`,
          'Impaired test judgment': `Both answers are practical and safe.`,
          'Impaired social judgment': `She came for help, stopped driving and keeps working. The beer is a concern to follow, not a sign that her judgment has failed.`
        },
        doc: `Fair: intact test judgment (envelope to the post office; smoke in a theater, tell the staff, though she fears she might freeze); social judgment largely intact (sought help, keeps working), but drinking a beer to sleep on more nights`,
        why: `Her test answers are sound. Her honest comment that she might freeze is not poor judgment. Freezing under threat is a common trauma response, and it is worth naming in therapy. Judgment is fair rather than good because of the growing use of beer to sleep. Bring it into the sleep plan rather than scolding her for it.`
      }
    }
  }
]);
