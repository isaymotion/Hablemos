/* Case simulation: Camila (school refusal in a 14-year-old). Appends to window.PSYCH_CASES.
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Field names stay `tl`, `f`, `c` for engine compatibility elsewhere; in a case step `tl` = the Spanish text.
   The clinician speaks tú to Camila (14) and usted to her mother, Verónica. All patients are fictional.
   Shape: { id, title, level, setting, steps: [ { who, line: [spanish, english], choices: [ { tl, en, score, fb } ] } ], summary: { findings, mse } }
   Each step has 3 choices and exactly one with score 2. */
window.PSYCH_CASES = (window.PSYCH_CASES || []).concat([
  {
    id: `camila`,
    title: `Camila: school refusal`,
    level: `A2`,
    setting: `Child and adolescent outpatient clinic. Camila, 14, in ninth grade, comes with her mother, Verónica, who speaks mostly Spanish and works at a dry cleaner's. Camila lives with her mother and her little brother, Diego, 8. Camila speaks Spanish with some English words. She has not been to school for two months. You see them together first, then Camila alone. You speak tú to Camila and usted to Verónica.`,
    steps: [
      { who: `Verónica (mamá)`,
        line: [`Doctora, hace dos meses que Camila no va a la escuela. Los días de escuela dice que le duele la panza, que le duele la cabeza...`, `Doctor, Camila hasn't gone to school for two months. On school days she says her stomach hurts, her head hurts...`],
        choices: [
          { tl: `Además de los dolores de panza, ¿qué más le preocupa de Camila, señora Verónica?`, en: `Apart from the stomachaches, what else worries you about Camila, Mrs. Verónica?`, score: 1, fb: `Useful history, but you talk only to the parent, over Camila's head. Greet the teenager directly as well.` },
          { tl: `Gracias por contármelo, señora Verónica. Camila, gracias por venir hoy. Primero quiero escuchar a las dos juntas, y después hablar un ratito contigo a solas. ¿Les parece bien?`, en: `Thank you for telling me, Mrs. Verónica. Camila, thank you for coming today. First I'd like to hear from you both together, and then talk with you alone for a little while. Is that all right?`, score: 2, fb: `Good. You thank the mother and speak to Camila directly, with tú. Saying at the start that you will also see the teenager alone makes it routine, not a sign that something is wrong. If your Spanish is not strong enough for the visit, use a qualified interpreter. Do not ask Camila or her brother to interpret.` },
          { tl: `Camila, tienes que ir a la escuela, ¿sabes?`, en: `Camila, you have to go to school, you know.`, score: 0, fb: `A lecture in the first minute tells her you are on the adults' side, and she will say less. Understand first.` }
        ] },
      { who: `Verónica (mamá)`,
        line: [`Sí, por favor. Pero los sábados y domingos se le quita al mediodía. ¿De verdad le duele, o es floja? A veces pienso que son puros berrinches.`, `Yes, please. But on Saturdays and Sundays it goes away by noon. Does it really hurt, or is she lazy? Sometimes I think it's just tantrums.`],
        choices: [
          { tl: `Entiendo su preocupación, y es normal preguntarlo. Yo creo que el dolor es real. Cuando hay mucha preocupación, la panza o la cabeza pueden doler de verdad. Camila, debe ser difícil. En los días de escuela, ¿cómo pasas la mañana en tu casa?`, en: `I understand your worry, and it is normal to ask. I believe the pain is real. When there is a lot of worry, the stomach or the head can really hurt. Camila, it must be hard. On school days, how do you spend the morning at home?`, score: 2, fb: `Good. You take the mother's worry seriously and do not blame her or Camila. Stomachaches and headaches on school mornings are common in school refusal, and they are real. Then you turn back to Camila with an open question.` },
          { tl: `Sí, seguramente está fingiendo. Solo no quiere ir a la escuela.`, en: `Yes, she is probably faking it. She just doesn't want to go to school.`, score: 0, fb: `Calling it faking agrees with "es floja" and shames her in front of her mother. Pain that comes with stress is real pain, even when it follows a pattern.` },
          { tl: `¿Quiere que le revisemos la panza, para estar seguros?`, en: `Would you like us to examine her stomach, just to be sure?`, score: 1, fb: `Looking for a physical cause belongs in the work-up, but first say that the pain is real and look at the pattern with them.` }
        ] },
      { who: `Verónica (mamá)`,
        line: [`Camila, la doctora te está preguntando... Perdón, casi no habla. Se encierra en su cuarto con el celular hasta muy tarde. En la mañana la despierto y no se levanta... Muchas veces me desespero y le grito. ¿Yo la eduqué mal?`, `Camila, the doctor is asking you... Sorry, she hardly talks. She shuts herself in her room with her phone until very late. In the morning I wake her and she won't get up... Many times I lose patience and yell at her. Did I raise her wrong?`],
        choices: [
          { tl: `Gritar no ayuda. Por favor, trate de no hacerlo más.`, en: `Yelling doesn't help. Please try not to do it anymore.`, score: 1, fb: `Calmer mornings do help, but said this way it adds to her guilt. Acknowledge the worry behind the anger first.` },
          { tl: `Sí, tal vez la ha consentido demasiado.`, en: `Yes, maybe you have spoiled her too much.`, score: 0, fb: `Blaming the parent is inaccurate and harmful. School refusal usually has several causes, and a parent who feels blamed is less able to help.` },
          { tl: `Usted se desespera porque se preocupa mucho. No es su culpa, y tampoco es culpa de Camila. Vamos a pensar juntas qué hacer. Ahora, ¿puedo hablar un rato a solas con Camila? Camila, ¿te parece bien?`, en: `You lose patience because you worry so much. It isn't your fault, and it isn't Camila's fault either. Let's think together about what to do. Now, may I talk with Camila alone for a while? Camila, is that all right with you?`, score: 2, fb: `Good. You name the worry behind the anger and blame no one. Then you ask Camila herself, not only her mother, before seeing her alone.` }
        ] },
      { who: `Camila`,
        line: [`Bueno... ¿Le va a contar a mi mamá todo lo que yo diga aquí?`, `Okay... Are you going to tell my mom everything I say here?`],
        choices: [
          { tl: `Tu mamá es tu tutora, así que le voy a contar todo.`, en: `Your mom is your guardian, so I'll tell her everything.`, score: 0, fb: `She will now tell you little. Teenagers talk about bullying, mood and safety only when they trust that the space is private within clear limits.` },
          { tl: `Buena pregunta. Lo que me digas aquí no se lo cuento a tu mamá si tú no quieres. Pero si tú o alguien más está en peligro, tal vez tenga que avisar a otras personas para que todos estén a salvo. Si eso pasa, primero hablo contigo de a quién hay que avisar. ¿Me cuentas si pasó algo antes de que dejaras de ir a la escuela?`, en: `Good question. What you tell me here I won't tell your mom unless you say it's okay. But if you or someone else is in danger, I may have to tell other people so everyone stays safe. If that happens, I'll talk with you first about who needs to know. Can you tell me whether something happened before you stopped going to school?`, score: 2, fb: `Good. Confidentiality and its limits, explained at the start in words a teenager understands. The exact rules follow your state's law and your clinic's policy. Then an open question about what came before.` },
          { tl: `No te preocupes. Nunca le voy a decir nada a tu mamá.`, en: `Don't worry. I will never tell your mom anything.`, score: 1, fb: `Kind, but total secrecy is a promise you may not be able to keep if she is in danger. Explain the limits now so she does not feel betrayed later.` }
        ] },
      { who: `Camila`,
        line: [`Pues... en la clase de ciencias tuve que hacer una presentation y se me fue la mente en blanco. No pude decir nada. Sentí que todos se estaban riendo. Después, dos compañeros se burlaron de mí en el group chat.`, `Well... in science class I had to give a presentation and my mind went blank. I couldn't say anything. I felt like everyone was laughing. Afterwards, two classmates made fun of me in the group chat.`],
        choices: [
          { tl: `Eso suena muy doloroso. Gracias por contármelo. ¿Todavía pasa lo del group chat? ¿Alguien más te ha dicho o hecho algo que te lastime?`, en: `That sounds really painful. Thank you for telling me. Is the group chat thing still going on? Has anyone else said or done anything that hurts you?`, score: 2, fb: `Good. You validate, then ask directly whether the bullying goes on and whether there is more. Online bullying is easy for adults to miss unless they ask.` },
          { tl: `Todos nos ponemos nerviosos en las presentaciones. No les hagas caso.`, en: `Everyone gets nervous at presentations. Don't pay attention to them.`, score: 1, fb: `Normalizing nerves is fine, but "no les hagas caso" brushes past the mocking. Ask about the bullying.` },
          { tl: `Qué pena faltar a la escuela por algo así.`, en: `What a shame to miss school over something like that.`, score: 0, fb: `Minimizing what hurt her makes her stop talking. What matters is how it felt to her.` }
        ] },
      { who: `Camila`,
        line: [`Ya no dicen nada. Pero me da miedo lo que piensan todos de mí. ...A veces pienso: ojalá no despertara.`, `They don't say anything anymore. But I'm scared of what everyone thinks of me. ...Sometimes I think: I wish I wouldn't wake up.`],
        choices: [
          { tl: `No digas eso. Tu mamá se pondría muy triste.`, en: `Don't say that. Your mom would be very sad.`, score: 0, fb: `Guilt shuts the subject down, and she learns not to tell adults. Stay calm and ask more.` },
          { tl: `Qué doloroso. Debe ser mucho para ti.`, en: `How painful. It must be a lot for you.`, score: 1, fb: `A good reflection, but stopping here leaves the risk unknown. "Ojalá no despertara" needs a direct, calm follow-up question.` },
          { tl: `Gracias por decírmelo. Es importante, así que te voy a preguntar un poco más. Cuando piensas "ojalá no despertara", ¿también piensas en morirte? ¿Alguna vez te has hecho daño?`, en: `Thank you for telling me. It's important, so I'm going to ask a little more. When you think "I wish I wouldn't wake up," do you also think about dying? Have you ever hurt yourself?`, score: 2, fb: `Good. "Ojalá no despertara" can mean anything from wanting to escape to a wish to die, so ask directly and calmly. Asking does not put the idea in her head. Keep the questions plain and ask nothing about methods.` }
        ] },
      { who: `Camila`,
        line: [`No quiero morirme. Nunca me he hecho daño y no tengo ningún plan. Es más como que quisiera no estar aquí... cansada de todo.`, `I don't want to die. I've never hurt myself and I don't have any plan. It's more like I wish I weren't here... tired of everything.`],
        choices: [
          { tl: `Ya veo. Le voy a decir a tu mamá lo que acabas de contarme.`, en: `I see. I'll tell your mom what you just told me.`, score: 1, fb: `Parents often need to know, but you have just promised her a say. Unless she is in danger, ask her what may be shared and how.` },
          { tl: `Gracias por ser sincera. Si esa sensación se hace más fuerte, no te la guardes: díselo a tu mamá o llámanos aquí. Si alguna vez sientes que no puedes estar a salvo, llama o manda un texto al 988 (oprime el 2 para español), o llama al 911. Y de hoy, como el group chat, ¿qué le puedo contar a tu mamá?`, en: `Thank you for being honest. If that feeling gets stronger, don't keep it to yourself: tell your mom or call us here. If you ever feel you can't stay safe, call or text 988 (press 2 for Spanish), or call 911. And about today, like the group chat, what may I tell your mom?`, score: 2, fb: `Good. You accept her answer, agree what she will do if the feeling grows, give the crisis line, and ask what may be shared, keeping your earlier promise. Record the risk assessment and review it at every visit.` },
          { tl: `Entonces estás bien. No hay nada de qué preocuparse.`, en: `Then you're fine. There is nothing to worry about.`, score: 0, fb: `Closing the subject tells her it was not worth raising. A passive wish not to wake up needs a plan for what to do if it grows, and review at later visits.` }
        ] },
      { who: `Camila`,
        line: [`Puede decirle a mi mamá lo del group chat. Pero ir a la escuela todavía me da mucho miedo.`, `You can tell my mom about the group chat. But going to school still scares me a lot.`],
        choices: [
          { tl: `Es normal tener miedo. No tenemos que hacerlo todo de golpe: empezamos con pasos chiquitos. Primero, levantarte a la misma hora todas las mañanas. Después, si tú quieres, hablar con la consejera de la escuela, tú y tu mamá. ¿Qué piensas?`, en: `It's normal to be afraid. We don't have to do it all at once: we start with small steps. First, getting up at the same time every morning. Then, if you want, talking with the school counselor, you and your mom. What do you think?`, score: 2, fb: `Good. A plan in small steps: a regular wake-up time, a gradual return, and the school counselor with her consent and her mother involved. Asking her opinion keeps her part of the plan. Later, a 504 plan can set supports at school, such as presenting to a small group first.` },
          { tl: `Para que no tengas miedo, yo le cuento todo a tu escuela.`, en: `So that you won't be scared, I'll tell your school everything.`, score: 1, fb: `Contact with the school helps, but only with her agreement and only about what she agrees to share. Deciding for her breaks the trust you built.` },
          { tl: `Si sigues con miedo, nunca vas a volver. Empezamos mañana.`, en: `If you stay scared, you'll never go back. We start tomorrow.`, score: 0, fb: `Pressure for a sudden full return usually raises the anxiety and the physical symptoms. Avoidance does keep fear going, but the answer is small steps she agrees to.` }
        ] }
    ],
    summary: {
      findings: [
        `School refusal for two months in a 14-year-old: stomachaches and headaches on school mornings that ease by noon on weekends; stays in her room with her phone late at night and sleeps late`,
        `Began after she froze during a science class presentation; two classmates mocked her in the group chat afterwards, now stopped; ongoing fear of what others think (assess social anxiety disorder; provisional)`,
        `Passive wish "ojalá no despertara" at times; denies a wish to die, any plan or intent, and any self-harm; no method content was asked or needed. Review at every visit; 988 (oprima 2 para español) and 911 given`,
        `Mother worried that it is laziness or tantrums and that she raised Camila wrong: answered without blame; her stress at morning conflicts acknowledged`,
        `Plan in general terms: regular sleep and wake-up time, small steps back to school, the school counselor with Camila's consent (a 504 plan can come later), support for the mother; confidentiality and its limits explained to Camila and her mother`
      ],
      mse: `Neat, quiet 14-year-old, soft voice, short replies with her mother present and fuller when alone; mood anxious ("me da miedo"), affect tense and congruent; thought process linear; preoccupied with what classmates think of her, no delusions; no hallucinations; passive wish not to wake up, no plan or intent, denies self-harm; oriented; insight fair, judgment fair.`
    }
  }
]);
