/* Nurse scripts "Watching mood on the unit" (PSYCH_NURSE_TOOLS.mood) and "Nursing admission interview" (PSYCH_NURSE_TOOLS.admit).
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician and the Nursing Service.
   Shape: { notice, steps: [ { title, lines: [ { tl, c, en, n? } ] } ], escalate }
   tl = Spanish with usted, c = Spanish with tú, en = English meaning, n = English note for the nurse.
   Every Spanish line is something the nurse says to the patient. The report to the doctor is in English (SBAR points in the notes).
   No medicine names and no doses. ___ is the blank for a name, room or time. Follow your hospital's policy. */
window.PSYCH_NURSE_TOOLS = window.PSYCH_NURSE_TOOLS || {};
(function () {
  const NOTICE = 'Nurse script: draft, pending review by a native Spanish-speaking clinician and your Nursing Service. Follow your hospital\'s policy.';

  PSYCH_NURSE_TOOLS.mood = {
    notice: NOTICE,
    steps: [
      { title: 'Sleep and energy',
        lines: [
          { tl: `Buenos días. ¿Puedo hablar con usted un momento?`, c: `Buenos días. ¿Puedo hablar contigo un momento?`, en: `Good morning. May I talk with you for a moment?`, n: `A short daily check on the unit. Asking the same questions the same way each day makes changes easier to see.` },
          { tl: `¿Cuántas horas durmió anoche, más o menos?`, c: `¿Cuántas horas dormiste anoche, más o menos?`, en: `About how many hours did you sleep last night?`, n: `Write the patient's answer next to what the night staff saw. The two can differ.` },
          { tl: `¿Casi no durmió y aun así no se siente cansado?`, c: `¿Casi no dormiste y aun así no te sientes cansado?`, en: `Did you hardly sleep and still not feel tired?`, n: `Needing little sleep without feeling tired can be an early sign of mania. Tell the doctor. Use cansada for a woman.` },
          { tl: `Al despertar, ¿siente el cuerpo tan pesado que no puede moverse?`, c: `Al despertar, ¿sientes el cuerpo tan pesado que no puedes moverte?`, en: `When you wake up, does your body feel so heavy that you cannot move?` },
          { tl: `¿O al contrario? ¿Siente más energía de lo normal, demasiada?`, c: `¿O al contrario? ¿Sientes más energía de lo normal, demasiada?`, en: `Or the opposite? Do you feel more energy than usual, too much?` }
        ] },
      { title: 'Mood in the patient\'s own words',
        lines: [
          { tl: `Si su ánimo de hoy fuera un número del 1 al 10, ¿cuál sería?`, c: `Si tu ánimo de hoy fuera un número del 1 al 10, ¿cuál sería?`, en: `If today's mood were a number from 1 to 10, what would it be?`, n: `This is the patient's own way to describe mood. It is not a rating scale and it is not scored. Write the number and the words exactly as the patient says them.` },
          { tl: `Para usted, ¿cómo es un 1 y cómo es un 10?`, c: `Para ti, ¿cómo es un 1 y cómo es un 10?`, en: `For you, what is a 1 and what is a 10?`, n: `Let the patient say what the two ends mean. Do not define them.` },
          { tl: `Con sus propias palabras, ¿cómo se siente ese número?`, c: `Con tus propias palabras, ¿cómo se siente ese número?`, en: `In your own words, what does that number feel like?`, n: `Patients may answer with nervios, decaído, bajoneado or "estoy hasta el cielo". Write down their words.` },
          { tl: `¿Su ánimo cambia mucho durante el día?`, c: `¿Tu ánimo cambia mucho durante el día?`, en: `Does your mood change a lot during the day?` },
          { tl: `Comparado con cómo es usted normalmente, ¿cómo está ahora?`, c: `Comparado con cómo eres normalmente, ¿cómo estás ahora?`, en: `Compared with how you usually are, how are you now?` }
        ] },
      { title: 'Appetite, spending, calls and irritability',
        lines: [
          { tl: `¿Cuánto está comiendo, comparado con antes de venir al hospital?`, c: `¿Cuánto estás comiendo, comparado con antes de venir al hospital?`, en: `How much are you eating compared with before you came to the hospital?`, n: `Add what you see at meals: trays left untouched, or no time to sit down and eat.` },
          { tl: `Últimamente, ¿le han dado ganas de gastar más dinero de lo normal?`, c: `Últimamente, ¿te han dado ganas de gastar más dinero de lo normal?`, en: `Lately, have you felt like spending more money than usual?`, n: `On the unit this may show as giving belongings away or borrowing money from other patients.` },
          { tl: `¿Tiene ganas de hacer más llamadas o mandar más mensajes que de costumbre?`, c: `¿Tienes ganas de hacer más llamadas o mandar más mensajes que de costumbre?`, en: `Do you feel like making more calls or sending more messages than usual?`, n: `Note what you see too: many calls, calls late at night, calls to people the patient rarely contacts.` },
          { tl: `¿Ha estado haciendo muchos planes nuevos?`, c: `¿Has estado haciendo muchos planes nuevos?`, en: `Have you been making a lot of new plans?` },
          { tl: `¿Las cosas pequeñas lo molestan o le dan coraje?`, c: `¿Las cosas pequeñas te molestan o te dan coraje?`, en: `Do small things annoy you or make you angry?`, n: `Coraje = anger (Mexico, Central America). Use la for a woman.` },
          { tl: `¿Siente que la gente a su alrededor es lenta o le cuesta esperar?`, c: `¿Sientes que la gente a tu alrededor es lenta o te cuesta esperar?`, en: `Do the people around you seem slow, or is it hard to wait?` }
        ] },
      { title: 'How the patient sees themselves',
        lines: [
          { tl: `¿Cómo se siente consigo mismo en este momento?`, c: `¿Cómo te sientes contigo mismo en este momento?`, en: `How do you feel about yourself right now?`, n: `Use contigo misma for a woman, and consigo misma in the usted form.` },
          { tl: `¿Se está culpando por algo?`, c: `¿Te estás culpando por algo?`, en: `Are you blaming yourself for something?`, n: `If the patient is very low or talks about dying, go on to the safety questions in the nurse-risk section and tell the doctor in English.` },
          { tl: `¿O al contrario? ¿Siente que tiene un poder o una misión especial?`, c: `¿O al contrario? ¿Sientes que tienes un poder o una misión especial?`, en: `Or the opposite? Do you feel you have a special power or a special mission?`, n: `Listen without arguing. Write down what the patient says in their own words.` },
          { tl: `Gracias por hablar conmigo hoy. Mañana le voy a preguntar de la misma manera.`, c: `Gracias por hablar conmigo hoy. Mañana te voy a preguntar de la misma manera.`, en: `Thank you for talking with me today. Tomorrow I will ask you in the same way.` }
        ] },
      { title: 'What to tell the patient while you call the doctor',
        lines: [
          { tl: `Me preocupa que casi no ha dormido. Voy a llamar al doctor para que venga a verlo hoy.`, c: `Me preocupa que casi no has dormido. Voy a llamar al doctor para que venga a verte hoy.`, en: `I am worried that you have hardly slept. I am going to call the doctor so that he or she can come and see you today.`, n: `Report to the doctor in English, in SBAR order. Situation: your name and ward, patient and room, what has changed (for example, hardly sleeping for several days but very energetic and talking nonstop). Background: reason for admission and mood on admission. Assessment: the facts you have seen, such as calls through the night and sharper words with other patients, and your impression that the mood seems to be rising. Recommendation: ask the doctor to see the patient today. Read back every instruction.` },
          { tl: `Usted no hizo nada malo. Solo queremos que el doctor sepa cómo se ha sentido.`, c: `Tú no hiciste nada malo. Solo queremos que el doctor sepa cómo te has sentido.`, en: `You did nothing wrong. We only want the doctor to know how you have been feeling.` },
          { tl: `Mientras viene el doctor, ¿le gustaría sentarse conmigo un rato en un lugar tranquilo?`, c: `Mientras viene el doctor, ¿te gustaría sentarte conmigo un rato en un lugar tranquilo?`, en: `While the doctor is on the way, would you like to sit with me for a while in a quiet place?` },
          { tl: `Si algo cambia o se siente peor, dígamelo enseguida.`, c: `Si algo cambia o te sientes peor, dímelo enseguida.`, en: `If anything changes or you feel worse, tell me right away.` },
          { tl: `El doctor me dio estas instrucciones y se las voy a explicar: ___.`, c: `El doctor me dio estas instrucciones y te las voy a explicar: ___.`, en: `The doctor gave me these instructions and I will explain them to you: ___.`, n: `Say this after the call, once you have read the instruction back to the doctor in English.` }
        ] }
    ],
    escalate: 'Call the doctor and call for help at once if the patient has new or stronger thoughts of suicide, has gone several nights without sleep and is very energetic, becomes aggressive or threatening, or is not eating or drinking. Use rapid response or 911 as your hospital policy says. Follow your hospital\'s policy.'
  };

  PSYCH_NURSE_TOOLS.admit = {
    notice: 'Nurse script: draft, pending review by a native Spanish-speaking clinician and your Nursing Service. Follow your hospital\'s policy. The welcome, room, belongings and unit routine are in the nurse-admit section (Arriving on the unit). This script is the admission interview that follows.',
    steps: [
      { title: 'Introduction and identity check',
        lines: [
          { tl: `Buenas tardes, soy ___, enfermero. ¿Le puedo hacer unas preguntas sobre su ingreso al hospital?`, c: `Buenas tardes, soy ___, enfermero. ¿Te puedo hacer unas preguntas sobre tu ingreso al hospital?`, en: `Good afternoon, I am ___, a nurse. May I ask you a few questions about coming into the hospital?`, n: `Use enfermera for a woman. Offer a qualified interpreter if you are not fluent.` },
          { tl: `Para que no haya confusiones, ¿me dice su nombre completo y su fecha de nacimiento?`, c: `Para que no haya confusiones, ¿me dices tu nombre completo y tu fecha de nacimiento?`, en: `So there are no mix-ups, can you tell me your full name and your date of birth?`, n: `Check both against the wristband and the chart.` },
          { tl: `Son varias preguntas. Dígame cuando se canse.`, c: `Son varias preguntas. Dime cuando te canses.`, en: `There are several questions. Tell me when you get tired.`, n: `The interview can be finished later. Record what is still to be asked.` },
          { tl: `No tiene que contestar lo que no quiera.`, c: `No tienes que contestar lo que no quieras.`, en: `You do not have to answer anything you do not want to.` },
          { tl: `Lo que me diga se comparte con los doctores y el personal para su tratamiento.`, c: `Lo que me digas se comparte con los doctores y el personal para tu tratamiento.`, en: `What you tell me is shared with the doctors and staff for your treatment.`, n: `Explain the limits of confidentiality in plain words. Check your hospital's policy.` }
        ] },
      { title: 'Allergies and vital signs',
        lines: [
          { tl: `¿Es alérgico a alguna medicina o a algún alimento?`, c: `¿Eres alérgico a alguna medicina o a algún alimento?`, en: `Are you allergic to any medicine or food?`, n: `Use alérgica for a woman.` },
          { tl: `¿Qué le pasó cuando tuvo la reacción?`, c: `¿Qué te pasó cuando tuviste la reacción?`, en: `What happened when you had the reaction?`, n: `Record what the reaction was, such as a rash or trouble breathing, and tell the doctor in English.` },
          { tl: `Ahora le voy a tomar la presión, el pulso y la temperatura. ¿Le puedo tocar el brazo?`, c: `Ahora te voy a tomar la presión, el pulso y la temperatura. ¿Te puedo tocar el brazo?`, en: `Now I am going to take your blood pressure, pulse and temperature. May I touch your arm?`, n: `Say what you will do before you touch the patient and wait for an answer.` },
          { tl: `Le va a apretar un poco el brazo, pero pronto se afloja.`, c: `Te va a apretar un poco el brazo, pero pronto se afloja.`, en: `It will squeeze your arm a little, but it loosens soon.` },
          { tl: `¿Se puede poner el termómetro aquí, bajo la lengua?`, c: `¿Te puedes poner el termómetro aquí, bajo la lengua?`, en: `Can you put the thermometer here, under your tongue?`, n: `Adjust to the kind of thermometer your unit uses.` },
          { tl: `Si prefiere que lo hagamos más tarde, no hay problema.`, c: `Si prefieres que lo hagamos más tarde, no hay problema.`, en: `If you would rather do it later, that is fine.`, n: `Offer another time. If the patient still declines, record it and tell the doctor in English.` }
        ] },
      { title: 'Daily life before admission',
        lines: [
          { tl: `En su casa, ¿a qué hora se acostaba y a qué hora se levantaba normalmente?`, c: `En tu casa, ¿a qué hora te acostabas y a qué hora te levantabas normalmente?`, en: `At home, what time did you usually go to bed and get up?`, n: `This is the usual pattern at home. The daily sleep questions on the unit are in the nurse-daily section.` },
          { tl: `Últimamente, ¿ha dormido peor o ha tenido noches sin poder dormir?`, c: `Últimamente, ¿has dormido peor o has tenido noches sin poder dormir?`, en: `Lately, have you slept worse, or had nights when you could not sleep?` },
          { tl: `¿Ha cambiado su apetito últimamente? ¿Ha subido o bajado de libras?`, c: `¿Ha cambiado tu apetito últimamente? ¿Has subido o bajado de libras?`, en: `Has your appetite or weight changed lately?` },
          { tl: `¿Tiene problemas para ir al baño o para orinar?`, c: `¿Tienes problemas para ir al baño o para orinar?`, en: `Do you have trouble going to the bathroom or passing urine?` },
          { tl: `¿Fuma o usa vapeador?`, c: `¿Fumas o usas vapeador?`, en: `Do you smoke or vape?`, n: `If the patient smokes or vapes, explain the hospital's rules. Check your unit's policy on nicotine.` }
        ] },
      { title: 'Walking, falls, glasses, hearing aids and dentures',
        lines: [
          { tl: `¿Usa bastón, andador u otra ayuda para caminar?`, c: `¿Usas bastón, andador u otra ayuda para caminar?`, en: `Do you use a cane, a walker or another aid to walk?` },
          { tl: `¿Se ha caído o ha estado a punto de caerse últimamente?`, c: `¿Te has caído o has estado a punto de caerte últimamente?`, en: `Have you fallen, or nearly fallen, lately?`, n: `If yes, follow your hospital's fall-prevention steps and tell the team.` },
          { tl: `¿Usa lentes, aparato para el oído o dentadura postiza?`, c: `¿Usas lentes, aparato para el oído o dentadura postiza?`, en: `Do you use glasses, a hearing aid or dentures?`, n: `Record them so they are not lost and the patient has them when needed.` },
          { tl: `¿Necesita ayuda con algo, como vestirse o bañarse?`, c: `¿Necesitas ayuda con algo, como vestirte o bañarte?`, en: `Do you need help with anything, like dressing or bathing?` }
        ] },
      { title: 'Contacts, hopes and one safety question',
        lines: [
          { tl: `Si pasa algo, ¿a quién debemos llamar?`, c: `Si pasa algo, ¿a quién debemos llamar?`, en: `If something happens, whom should we call?`, n: `Write the name, how the person is related to the patient and the phone number.` },
          { tl: `¿Y hay alguien a quien no quiere que llamemos?`, c: `¿Y hay alguien a quien no quieres que llamemos?`, en: `And is there anyone you do not want us to call?` },
          { tl: `¿Qué espera de esta estancia en el hospital?`, c: `¿Qué esperas de esta estancia en el hospital?`, en: `What do you hope for from this stay in the hospital?`, n: `Write down the patient's own words. They help the team plan care together with the patient.` },
          { tl: `¿Hay algo del hospital que le preocupe o que quiera preguntar?`, c: `¿Hay algo del hospital que te preocupe o que quieras preguntar?`, en: `Is there anything about the hospital that worries you, or that you want to ask?`, n: `Families may fear cost or contact with immigration authorities. Do not promise what you cannot confirm. Refer to your unit's social worker.` },
          { tl: `Antes de venir aquí, ¿las cosas estaban tan difíciles que pensó en querer morirse?`, c: `Antes de venir aquí, ¿las cosas estaban tan difíciles que pensaste en querer morirte?`, en: `Before you came here, were things so hard that you thought about wanting to die?`, n: `The one safety question at admission. If the answer is yes, go on to the safety questions in the nurse-risk section. Tell the doctor in English at once if the thoughts are there now.` },
          { tl: `Gracias por contarme algo tan importante.`, c: `Gracias por contarme algo tan importante.`, en: `Thank you for telling me something so important.` }
        ] },
      { title: 'What to tell the patient while you call the doctor',
        lines: [
          { tl: `Ya terminamos por ahora. Voy a llamar al doctor para contarle lo que hablamos.`, c: `Ya terminamos por ahora. Voy a llamar al doctor para contarle lo que hablamos.`, en: `We are done for now. I am going to call the doctor to tell him or her what we talked about.`, n: `Report to the doctor in English, in SBAR order. Situation: who you are, the patient admitted today, vital signs and known allergies (or none). Background: reason for admission and what the patient told you about sleep, appetite and daily life. Assessment: what you saw and heard, for example calm and able to talk but reports thoughts of dying before admission, plus any fall risk. Recommendation: ask the doctor to see the patient as soon as possible. Ask for other instructions and read them back.` },
          { tl: `Voy a decirle al doctor lo que usted me contó, para que le ayuden mejor.`, c: `Voy a decirle al doctor lo que me contaste, para que te ayuden mejor.`, en: `I am going to tell the doctor what you told me, so that they can help you better.` },
          { tl: `El doctor va a venir a verlo lo antes posible.`, c: `El doctor va a venir a verte lo antes posible.`, en: `The doctor will come to see you as soon as possible.`, n: `Use doctora and verla for a woman.` },
          { tl: `Mientras tanto, ¿quiere descansar, tomar agua o llamar a alguien de su familia?`, c: `Mientras tanto, ¿quieres descansar, tomar agua o llamar a alguien de tu familia?`, en: `In the meantime, would you like to rest, have some water or call someone in your family?`, n: `Check your unit's policy on phone calls.` },
          { tl: `Si se siente mal o necesita algo, oprima el botón de llamada o venga a la estación de enfermería.`, c: `Si te sientes mal o necesitas algo, oprime el botón de llamada o ven a la estación de enfermería.`, en: `If you feel unwell or need anything, press the call button or come to the nurses' station.`, n: `Regional: el timbre = call button.` }
        ] }
    ],
    escalate: 'Call the doctor and call for help at once if the patient has thoughts of suicide now or a plan, becomes aggressive or seems unsafe, has abnormal vital signs, a serious allergic reaction, a fall or an injury, or signs of withdrawal or another medical problem. Use rapid response or 911 as your hospital policy says. Follow your hospital\'s policy.'
  };
})();
