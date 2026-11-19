/* Likely patient and family replies for the nurse-track sections (point board and listening drill), 12 per section, 72 in all.
   Merged into PSYCH_ANSWERS.sections. item = [es, en, clinicalNote?]
   Spoken Spanish, US / Mexican register, gender-marked for the speaker. The note says what the nurse should hear.
   Replies flagged "Tell the doctor" mean: report in English (SBAR). No method detail.
   STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician. */
window.PSYCH_ANSWERS = window.PSYCH_ANSWERS || { common: [], sections: {} };
(function (S, add) { Object.keys(add).forEach((k) => (S[k] = (S[k] || []).concat(add[k]))); })(window.PSYCH_ANSWERS.sections, {
  'nurse-admit': [
    [`Sí, entiendo.`, `Yes, I understand.`],
    [`¿Por qué tienen que revisar mis cosas?`, `Why do you have to go through my things?`, `Explain calmly: it is done with everyone, for safety, and items are returned at discharge.`],
    [`¿Puedo quedarme con mi celular?`, `Can I keep my cell phone?`, `Check your unit's policy and the doctor's orders before you answer.`],
    [`¿Cuándo puede venir mi familia?`, `When can my family come?`, `Check your unit's policy on visiting before you give a time.`],
    [`Dígame Don Chuy, por favor.`, `Please call me Don Chuy.`, `Record the name the patient prefers where the team will see it.`],
    [`Estoy cansada, quiero acostarme un rato.`, `I'm tired, I'd like to lie down for a while.`],
    [`Yo no quiero estar aquí.`, `I don't want to be here.`, `Acknowledge the feeling without arguing. Tell the doctor, at once if the patient asks to leave or tries to.`],
    [`No me quiero quitar este anillo. Fue de mi mamá.`, `I don't want to take off this ring. It was my mother's.`, `Ask why it matters. Check your unit's policy and offer a choice where you can.`],
    [`¿Hay una cámara en este cuarto? Siento que me están vigilando.`, `Is there a camera in this room? I feel like I'm being watched.`, `Possible idea of being watched. Do not argue. Explain honestly that nurses check on everyone for safety. Tell the doctor.`],
    [`No toque mis cosas, yo las saco.`, `Don't touch my things, I'll take them out myself.`, `Let the patient take the items out in front of you. It keeps the check going and gives back some control.`],
    [`¿De veras me van a devolver lo que les dejo?`, `Will you really give me back what I leave with you?`, `Say where each item is kept, that it is returned at discharge, and how to ask for it meanwhile.`],
    [`Me da miedo dejarlo aquí solo. No quiero que lo traten mal.`, `I'm afraid to leave him here alone. I don't want him treated badly.`, `A family member. Acknowledge the worry, explain visiting under the unit's rules, and show how the patient can call a nurse.`]
  ],
  'nurse-meds': [
    [`Sí, ahorita me la tomo.`, `Yes, I'll take it now.`],
    [`No quiero tomármela ahorita.`, `I don't want to take it right now.`, `Ask why, do not press. Record it and tell the doctor.`],
    [`Esa pastilla se ve distinta a la de ayer.`, `That pill looks different from yesterday's.`, `Stop and check the order and the label before you give it.`],
    [`Me da mucho sueño y no puedo hacer nada.`, `It makes me so sleepy I can't do anything.`, `Possible side effect. Tell the doctor.`],
    [`¿Y no tiene veneno?`, `Isn't there poison in it?`, `Possible persecutory belief. Do not argue. Tell the doctor.`],
    [`Siento las piernas inquietas, no puedo quedarme quieta.`, `My legs feel restless, I can't keep still.`, `Possible restlessness from the medicine. Tell the doctor.`],
    [`Me tiemblan las manos desde ayer.`, `My hands have been shaking since yesterday.`, `Tell the doctor. At once if it comes with vomiting, diarrhea or confusion.`],
    [`No puedo dormir. ¿No me puede dar algo para dormir?`, `I can't sleep. Can't you give me something to help me sleep?`, `Check whether there is an as-needed order.`],
    [`Ya me siento bien, ya no necesito la medicina.`, `I feel fine now, I don't need the medicine anymore.`, `Listen, record and tell the doctor. Do not argue.`],
    [`Déjela ahí, al rato me la tomo.`, `Just leave it there, I'll take it in a bit.`, `Do not leave medicines at the bedside. Offer to come back.`],
    [`Nunca me había sentido tan bien. ¿Para qué quiero medicina?`, `I've never felt better. Why would I want medicine?`, `Feeling very well with little sleep can be mania. Do not argue. Ask what they dislike about the medicine. Tell the doctor.`],
    [`Me dio mucha calentura y siento el cuerpo muy tieso.`, `I have a high fever and my body feels very stiff.`, `Possible serious reaction. Check vital signs and tell the doctor at once.`]
  ],
  'nurse-daily': [
    [`Dormí poquito anoche.`, `I slept very little last night.`, `Record the hours slept.`],
    [`Me desperté muchas veces en la noche.`, `I woke up a lot during the night.`],
    [`Dormí como un tronco.`, `I slept like a log.`],
    [`No tengo hambre. Solo pude comer como la mitad.`, `I'm not hungry. I could only eat about half.`, `Record intake and pass it on if it continues.`],
    [`Siento que le echaron algo a la comida, mejor no la como.`, `I feel they put something in the food, so I'd rather not eat it.`, `Possible delusional belief. Do not argue. Record intake and tell the doctor.`],
    [`Tengo como cuatro días sin hacer del baño.`, `It has been about four days since I had a bowel movement.`, `Report it. Tell the doctor at once if there is belly pain, swelling or vomiting.`],
    [`Me cuesta orinar.`, `It's hard for me to pass urine.`, `Possible medicine side effect. Tell the doctor.`],
    [`Hoy no quiero bañarme.`, `I don't want to shower today.`, `Ask why. Offer another time or a wipe-down.`],
    [`Me duele la cabeza.`, `I have a headache.`, `Ask where, since when and how bad (0 to 10).`],
    [`No tengo ganas de hacer nada.`, `I don't feel like doing anything.`, `Low energy or motivation. Record and pass it on.`],
    [`No necesito dormir. Tengo mil cosas que hacer.`, `I don't need sleep. I have a thousand things to do.`, `Little sleep with high energy. Record the hours slept and tell the doctor, at once if it has gone on for nights.`],
    [`Estoy sudando mucho y las sábanas están empapadas.`, `I'm sweating a lot and the sheets are soaked.`, `Check temperature, pulse and blood pressure and tell the doctor. Offer dry sheets and clothes.`]
  ],
  'nurse-risk': [
    [`Me siento inquieto desde la mañana.`, `I've felt unsettled since the morning.`, `Ask what is behind it. Restlessness can come before agitation or be a medicine side effect.`],
    [`Un poquito mejor que ayer.`, `A little better than yesterday.`],
    [`No, no he pensado en eso.`, `No, I haven't thought about that.`],
    [`La verdad sí, todavía pienso en morirme.`, `Honestly, yes, I still think about dying.`, `Ask whether it is stronger than before. Tell the doctor.`],
    [`Es más fuerte que ayer.`, `It's stronger than yesterday.`, `Stronger thoughts of dying: tell the doctor at once. Stay with the patient.`],
    [`Ya lo decidí. Ya no me importa.`, `I've already decided. I don't care anymore.`, `Possible plan or intent. Stay with the patient and tell the doctor at once.`],
    [`La voz me dice que me mate.`, `The voice tells me to kill myself.`, `Command voices. Stay with the patient and tell the doctor at once.`],
    [`Siento que alguien me anda siguiendo. Tengo miedo.`, `I feel someone is following me. I'm scared.`, `Fear can drive agitation. Do not argue. Report it to the doctor.`],
    [`¿Por qué me revisan el cuarto? ¿Sospechan de mí?`, `Why are you searching my room? Do you suspect me?`, `Explain again that the check is routine for everyone.`],
    [`Hoy me siento tranquila. Ya no hay nada de qué preocuparse.`, `I feel calm today. There's nothing left to worry about.`, `A sudden calm after despair can be a warning. Ask gently and tell the doctor at once.`],
    [`Sí, ahorita las estoy oyendo.`, `Yes, I can hear them right now.`, `Ask what they say and whether the patient feels they must obey. Tell the doctor.`],
    [`No quiero morirme, pero sí quisiera desaparecer.`, `I don't want to die, but I do wish I could disappear.`, `A wish not to exist still counts. Ask more, gently, and tell the doctor.`]
  ],
  'nurse-calm': [
    [`Sí, mejor me voy a descansar a la sala tranquila.`, `Yes, I'd better go rest in the quiet room.`],
    [`¿Me puede traer un té?`, `Could you bring me a tea?`, `Check your unit's policy on hot drinks.`],
    [`Está bien, primero descanso un rato.`, `All right, I'll rest a bit first.`],
    [`¡No quiero medicina!`, `I don't want medicine!`, `Ask what worries them about it. Report the refusal to the doctor.`],
    [`Esa medicina me deja atontado, no la quiero.`, `That medicine makes me foggy, I don't want it.`, `Report the reason to the doctor. It may be a side effect.`],
    [`¡No me rodeen así!`, `Don't crowd around me like that!`, `Keep only the staff who are needed close by and let the others step back, if that is safe.`],
    [`Me hicieron esperar muchísimo y me enojé.`, `You kept me waiting forever and I lost my temper.`, `Apologize sincerely. Waiting is a common trigger.`],
    [`Perdón por los gritos de hace rato.`, `Sorry for the shouting earlier.`],
    [`Me ayudó estar un rato solo.`, `Having some time alone helped.`, `Write it in the care plan as something that helps.`],
    [`No me deje solo, por favor.`, `Please don't leave me alone.`, `Stay, or arrange for someone to stay. Tell the doctor if the fear is rising.`],
    [`No estoy gritando, estoy hablando normal.`, `I'm not shouting, I'm talking normally.`, `Do not argue. Lower your own voice and offer a quieter place.`],
    [`Todavía me da miedo lo que pasó aquella noche.`, `What happened that night still scares me.`, `Fear after a past restraint or seclusion. Acknowledge it and tell the team. A fuller talk can follow later.`]
  ],
  'nurse-educ': [
    [`Entendido. La voy a tomar a la misma hora todos los días.`, `Understood. I'll take it at the same time every day.`],
    [`Cuando me mejore, ya puedo dejar la medicina, ¿verdad?`, `Once I'm better I can stop the medicine, right?`, `Explain again that stopping is decided with the doctor.`],
    [`Me da miedo que la medicina me haga engordar.`, `I'm afraid the medicine will make me gain weight.`, `Report the worry to the doctor. It can lead to stopping the medicine.`],
    [`Se me olvida la pastilla de la mañana.`, `I often forget the morning pill.`, `Suggest a pill box or a phone alarm and tell the doctor.`],
    [`¿Puedo tomarme una cervecita de vez en cuando?`, `Can I have a little beer once in a while?`, `Refer the question to the doctor.`],
    [`Yo quiero encargarme de mis propias medicinas.`, `I want to look after my own medicines.`, `Report to the doctor, who decides who keeps the medicines.`],
    [`¿Qué hacemos si dice que no se la quiere tomar?`, `What do we do if he says he won't take it?`, `Advise the family to call the clinic. Do not suggest forcing it or hiding it in food.`],
    [`Últimamente otra vez no duerme en las noches.`, `Lately he isn't sleeping at night again.`, `Possible early sign of relapse. Tell the doctor.`],
    [`Yo también estoy agotada.`, `I'm worn out too.`, `Carer strain. Ask how they are coping and tell the team.`],
    [`¿Cuándo es la próxima cita?`, `When is the next appointment?`, `Point to the date on the discharge sheet and ask about transportation.`],
    [`La verdad, no estoy segura de poder dejar de tomar.`, `Honestly, I'm not sure I can stop drinking.`, `Thank them for being honest and tell the doctor so the team can plan support.`],
    [`Si empieza a decir que quiere desaparecer, ¿a quién llamamos?`, `If he starts saying he wants to disappear, who do we call?`, `Give the clinic number and 988 (press 2 for Spanish) in writing. In an emergency, 911.`]
  ]
});
