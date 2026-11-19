/* Nurse scripts for the De-escalation and Discharge tools (PSYCH_NURSE_TOOLS.deesc, .discharge).
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician and the Nursing Service.
   Shape: { notice, steps: [ { title, lines: [ { tl, c, en, n? } ] } ], escalate }
   tl = Spanish with usted, c = Spanish with tú, en = English meaning, n = English note for the nurse.
   Every Spanish line is something the nurse says to the patient, the family or other patients.
   In a US hospital the nurse reports to the doctor in English, so the SBAR points are in English in the notes.
   No medicine names and no doses. ___ is the blank for a name, room or time. Follow your hospital's policy. */
window.PSYCH_NURSE_TOOLS = window.PSYCH_NURSE_TOOLS || {};
(function () {
  const NOTICE = 'Nurse script: draft, pending review by a native Spanish-speaking clinician and your Nursing Service. Follow your hospital\'s policy.';

  PSYCH_NURSE_TOOLS.deesc = {
    notice: NOTICE,
    steps: [
      { title: 'What to tell the patient while you call the doctor',
        lines: [
          { tl: `Soy ___, su enfermero de esta noche. Estoy aquí con usted.`, c: `Soy ___, tu enfermero de esta noche. Estoy aquí contigo.`, en: `I am ___, your nurse tonight. I am here with you.`,
            n: `Use enfermera for a woman. Report to the doctor in English, in SBAR order. Situation: your name and ward, the patient and room, what is happening now (shouting, agitated), and whether anyone is hurt. Background: why the patient is in hospital and what led up to this. Assessment: what you have tried, such as a quiet place, listening and a drink of water, and that the patient has not calmed. Recommendation: ask the doctor to come now and for advice until they arrive. Read back every instruction.` },
          { tl: `Voy a llamar al doctor para que venga a verlo.`, c: `Voy a llamar al doctor para que venga a verte.`, en: `I am going to call the doctor so that he or she can come and see you.`, n: `Use doctora for a woman, and verla for a woman patient.` },
          { tl: `No lo voy a dejar solo.`, c: `No te voy a dejar solo.`, en: `I am not going to leave you alone.`, n: `Use sola and la for a woman. If you must step away to phone, say so first and tell the patient who stays.` },
          { tl: `Mientras tanto, estoy aquí para ayudarle.`, c: `Mientras tanto, estoy aquí para ayudarte.`, en: `In the meantime, I am here to help you.` },
          { tl: `Aquí está seguro. Nadie le va a hacer daño.`, c: `Aquí estás seguro. Nadie te va a hacer daño.`, en: `You are safe here. No one is going to hurt you.`, n: `Use segura for a woman.` },
          { tl: `¿Quiere sentarse o prefiere caminar un rato conmigo?`, c: `¿Quieres sentarte o prefieres caminar un rato conmigo?`, en: `Would you like to sit down, or would you rather walk with me for a while?`, n: `Offer two choices that are both fine for you.` },
          { tl: `Cuando llegue el doctor, usted le puede contar qué necesita.`, c: `Cuando llegue el doctor, tú le puedes contar qué necesitas.`, en: `When the doctor arrives, you can tell him or her what you need.` },
          { tl: `El doctor me dijo que ___. Lo voy a hacer con usted paso a paso.`, c: `El doctor me dijo que ___. Lo voy a hacer contigo paso a paso.`, en: `The doctor told me to ___. I will do it with you step by step.`, n: `Say this after the call, once you have read the instruction back to the doctor in English. Give the plan in a few plain words.` }
        ] },
      { title: 'What you say to the patient as help arrives',
        lines: [
          { tl: `Ya viene más personal del equipo para ayudarnos. Nadie le va a hacer daño.`, c: `Ya viene más personal del equipo para ayudarnos. Nadie te va a hacer daño.`, en: `More staff from the team are coming to help us. No one is going to hurt you.`, n: `Call for help calmly and clearly. Shouting raises the tension on the unit. Use your hospital's call for help.` },
          { tl: `Yo soy la única persona que le va a hablar. Los demás se quedan un poco atrás.`, c: `Yo soy la única persona que te va a hablar. Los demás se quedan un poco atrás.`, en: `I am the only one who will talk to you. The others will stay a little way back.`, n: `One person talks. Several voices at once make agitation worse. The team keeps a safe distance and watches.` },
          { tl: `Estas personas están aquí para que todos estemos seguros.`, c: `Estas personas están aquí para que todos estemos seguros.`, en: `These people are here so that we are all safe.` },
          { tl: `Todavía puede elegir. ¿Quiere sentarse aquí o ir a su cuarto?`, c: `Todavía puedes elegir. ¿Quieres sentarte aquí o ir a tu cuarto?`, en: `You can still choose. Would you like to sit here or go to your room?` },
          { tl: `Si me dice que sí, no hace falta que hagamos nada más.`, c: `Si me dices que sí, no hace falta que hagamos nada más.`, en: `If you say yes, we do not need to do anything more.`, n: `Do not make promises you cannot keep. Follow your unit's policy for any hands-on step.` }
        ] },
      { title: 'After it is over: talking with the patient',
        lines: [
          { tl: `¿Está lastimado? ¿Le duele algo?`, c: `¿Estás lastimado? ¿Te duele algo?`, en: `Are you hurt? Does anything hurt?`, n: `Use lastimada for a woman. Check for injury first and tell the doctor about any, in English.` },
          { tl: `¿Cómo se siente ahora?`, c: `¿Cómo te sientes ahora?`, en: `How are you feeling now?` },
          { tl: `Creo que hace un rato fue muy difícil para usted.`, c: `Creo que hace un rato fue muy difícil para ti.`, en: `I think a little while ago was very hard for you.` },
          { tl: `¿Qué fue lo que más le ayudó a calmarse?`, c: `¿Qué fue lo que más te ayudó a calmarte?`, en: `What helped you the most to calm down?` },
          { tl: `Si empieza a sentirse así otra vez, avísenos temprano. Vamos a pensar juntos qué hacer.`, c: `Si empiezas a sentirte así otra vez, avísanos temprano. Vamos a pensar juntos qué hacer.`, en: `If you start to feel like this again, tell us early. Let's think together about what to do.` },
          { tl: `Por el resto del día, descanse tranquilo en su cuarto. Yo vengo a verlo de vez en cuando.`, c: `Por el resto del día, descansa tranquilo en tu cuarto. Yo vengo a verte de vez en cuando.`, en: `For the rest of today, rest quietly in your room. I will come and check on you from time to time.`, n: `Give the plan the doctor agreed, in a few words. Use tranquila for a woman.` },
          { tl: `No lo estamos culpando. Queremos ayudarle.`, c: `No te estamos culpando. Queremos ayudarte.`, en: `We are not blaming you. We want to help you.`, n: `No blame and no lecture. Talk about what happened only when the patient is calm.` },
          { tl: `Gracias por hablar conmigo.`, c: `Gracias por hablar conmigo.`, en: `Thank you for talking with me.` }
        ] },
      { title: 'Other patients on the unit',
        lines: [
          { tl: `Siento que se hayan asustado. Ya pasó, todo está tranquilo y están seguros. No se preocupen.`, c: `Siento que te hayas asustado. Ya pasó, todo está tranquilo y estás seguro. No te preocupes.`, en: `I am sorry you were frightened. It is over, everything is calm and you are safe. Please do not worry.`, n: `Do not share any details about the other patient. The usted line is plural (ustedes) for a group. Use segura for a woman.` },
          { tl: `Pueden seguir con su día como siempre, en la sala o en su cuarto.`, c: `Puedes seguir con tu día como siempre, en la sala o en tu cuarto.`, en: `You can go on with your day as usual, in the day room or in your own room.` },
          { tl: `Si algo les preocupa, pueden hablar con una enfermera en cualquier momento.`, c: `Si algo te preocupa, puedes hablar con una enfermera en cualquier momento.`, en: `If anything worries you, you can talk to a nurse at any time.` }
        ] }
    ],
    escalate: 'If anyone is in immediate danger, or there is a weapon, an injury or a medical emergency, call the doctor and the team at once. Use rapid response, the behavioral emergency team or 911 as your hospital policy says. Follow your hospital\'s policy.'
  };

  PSYCH_NURSE_TOOLS.discharge = {
    notice: NOTICE,
    steps: [
      { title: 'Belongings',
        lines: [
          { tl: `Le voy a devolver sus cosas. Vamos a revisarlas juntos.`, c: `Te voy a devolver tus cosas. Vamos a revisarlas juntos.`, en: `I am going to give you back your belongings. Let's check them together.`, n: `Use your hospital's belongings list.` },
          { tl: `¿Puede revisar que todo coincida con esta lista? ¿Le falta algo?`, c: `¿Puedes revisar que todo coincida con esta lista? ¿Te falta algo?`, en: `Can you check that everything matches this list? Is anything missing?` },
          { tl: `Si está todo, firme aquí, por favor.`, c: `Si está todo, firma aquí, por favor.`, en: `If everything is there, please sign here.` }
        ] },
      { title: 'Medicines',
        lines: [
          { tl: `En casa, tome sus medicinas a las horas que están escritas en esta bolsa.`, c: `En casa, toma tus medicinas a las horas que están escritas en esta bolsa.`, en: `At home, take your medicines at the times written on this bag.`, n: `Point to the times on the bag or the sheet as you say it. Give the patient the written list from the discharge papers.` },
          { tl: `Lleve siempre esta lista de medicinas cuando vaya a la clínica, a la farmacia o a urgencias.`, c: `Lleva siempre esta lista de medicinas cuando vayas a la clínica, a la farmacia o a urgencias.`, en: `Always bring this medicine list when you go to the clinic, the pharmacy or the emergency room.`, n: `Regional: urgencias (Mexico, Central America) = emergency room. In the US many patients also say la sala de emergencias.` },
          { tl: `Para estar seguros, ¿me puede decir con sus palabras a qué hora va a tomar sus medicinas?`, c: `Para estar seguros, ¿me puedes decir con tus palabras a qué hora vas a tomar tus medicinas?`, en: `To be sure, can you tell me in your own words when you will take your medicines?`, n: `Teach-back. If the answer is not right, explain again in simpler words and ask once more. Use a qualified interpreter for teaching if you are not fluent.` },
          { tl: `Aunque se sienta mejor, no deje de tomarlas de golpe. Si quiere dejarlas, hable primero con el doctor.`, c: `Aunque te sientas mejor, no dejes de tomarlas de golpe. Si quieres dejarlas, habla primero con el doctor.`, en: `Even if you feel better, do not stop them suddenly. If you want to stop them, talk to the doctor first.` },
          { tl: `Si se le olvida una dosis, pregúntele al doctor o al farmacéutico qué hacer.`, c: `Si se te olvida una dosis, pregúntale al doctor o al farmacéutico qué hacer.`, en: `If you forget a dose, ask the doctor or the pharmacist what to do.`, n: `Give no general rule for missed doses. It differs between medicines. Ask about cost and pharmacy access too, and tell the team about any barrier.` }
        ] },
      { title: 'Next appointment',
        lines: [
          { tl: `La fecha y el lugar de su próxima cita están escritos en este papel.`, c: `La fecha y el lugar de tu próxima cita están escritos en este papel.`, en: `The date and place of your next appointment are written on this paper.` },
          { tl: `Ese día, traiga su lista de medicinas y este papel.`, c: `Ese día, trae tu lista de medicinas y este papel.`, en: `On that day, bring your medicine list and this paper.`, n: `Add anything else your clinic asks patients to bring, such as insurance information.` },
          { tl: `Si no puede venir ese día, llame a la clínica lo antes posible.`, c: `Si no puedes venir ese día, llama a la clínica lo antes posible.`, en: `If you cannot come that day, call the clinic as soon as you can.` }
        ] },
      { title: 'Warning signs and what to do',
        lines: [
          { tl: `Si pasa varias noches sin dormir o no puede comer, son señales de alerta.`, c: `Si pasas varias noches sin dormir o no puedes comer, son señales de alerta.`, en: `Several nights without sleep, or not being able to eat, are warning signs.` },
          { tl: `Si vuelve a oír voces como antes, también es una señal.`, c: `Si vuelves a oír voces como antes, también es una señal.`, en: `If you start hearing voices again like before, that is also a sign.`, n: `Adjust to the patient's own warning signs from the discharge plan.` },
          { tl: `Si nota estas señales, llame a la clínica sin esperar a su próxima cita.`, c: `Si notas estas señales, llama a la clínica sin esperar a tu próxima cita.`, en: `If you notice these signs, call the clinic without waiting for your next appointment.` },
          { tl: `Si tiene pensamientos de querer morir, no se los guarde. Llame o mande un mensaje al 988. Para español, oprima el 2.`, c: `Si tienes pensamientos de querer morir, no te los guardes. Llama o manda un mensaje al 988. Para español, oprime el 2.`, en: `If you have thoughts of wanting to die, do not keep them to yourself. Call or text 988. For Spanish, press 2.`, n: `988 is the Suicide and Crisis Lifeline. Write the 988 number and the clinic's number on the discharge paper.` },
          { tl: `Si hay peligro para la vida, llame al 911.`, c: `Si hay peligro para la vida, llama al 911.`, en: `If a life is in danger, call 911.` }
        ] },
      { title: 'Family',
        lines: [
          { tl: `En casa, ayuda tener una rutina regular todos los días.`, c: `En casa, ayuda tener una rutina regular todos los días.`, en: `At home, a regular routine every day helps.`, n: `Speaking to the family: regular sleep, meals and medicine times. Get the patient's consent before sharing information with family.` },
          { tl: `Escúchelo con calma, sin discutir y sin quitarle importancia.`, c: `Escúchalo con calma, sin discutir y sin quitarle importancia.`, en: `Listen to him calmly, without arguing and without brushing it aside.`, n: `Use escúchela for a woman. Said to a family member.` },
          { tl: `Si les preocupa algo o tienen dudas, llamen a la clínica. La familia también puede llamar.`, c: `Si te preocupa algo o tienes dudas, llama a la clínica. La familia también puede llamar.`, en: `If something worries you or you have questions, call the clinic. Family can call too.`, n: `Family may call to share concerns. What the clinic can say back depends on the patient's consent.` }
        ] },
      { title: 'Goodbye',
        lines: [
          { tl: `Felicidades por volver a casa. Cuídese mucho.`, c: `Felicidades por volver a casa. Cuídate mucho.`, en: `Congratulations on going home. Take good care of yourself.` },
          { tl: `Si pasa algo, comuníquese con nosotros en cualquier momento.`, c: `Si pasa algo, comunícate con nosotros en cualquier momento.`, en: `If anything comes up, contact us at any time.`, n: `Give the clinic's number and 988 on paper.` }
        ] }
    ],
    escalate: 'If the patient has new thoughts of suicide or a plan, or does not seem safe to go home today, tell the doctor before the discharge goes ahead. Follow your hospital\'s policy.'
  };
})();
