/* Likely patient replies for the point board (#/psych/point) and the listening drill (#/psych/listen).
   PSYCH_ANSWERS = { common: [{ id, title, items }], sections: { <sectionId>: items } }
   item = [es, en, clinicalNote?, say?]   (say = text to speak when the tile text itself is not Spanish, e.g. digits)
   Spoken Spanish, the way a patient (or relative) answers, in a neutral US / Mexican register; the clinical note is
   what the interviewer should hear in the reply. Audio for every `es` is recorded by the audio-pack job.
   STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician. */
window.PSYCH_ANSWERS = {
  common: [
    { id: 'yesno', title: 'Yes / no', items: [
      ['Sí.', 'Yes.'], ['No.', 'No.'], ['Quizás.', 'Maybe.'], ['A veces.', 'Sometimes.'], ['No sé.', 'I don\'t know.'],
      ['No quiero contestar eso.', 'I don\'t want to answer.', 'Refusal; note topic and revisit gently later.'],
      ['Antes sí, pero ya no.', 'It used to be, but not anymore.'], ['No estoy seguro.', 'I\'m not sure.']
    ] },
    { id: 'freq', title: 'How often', items: [
      ['Todos los días.', 'Every day.'], ['Casi todos los días.', 'Almost every day.'], ['Varias veces a la semana.', 'A few times a week.'], ['Una vez a la semana.', 'Only once a week.'],
      ['De vez en cuando.', 'Only once in a while.'], ['Casi nunca.', 'Rarely.'], ['Varias veces al día.', 'Several times a day.'], ['Nunca me ha pasado.', 'It has never happened.']
    ] },
    { id: 'when', title: 'Since when', items: [
      ['Apenas hoy.', 'Just now / only today.'], ['Desde ayer.', 'Since yesterday.'], ['Desde hace unos días.', 'For a few days now.'], ['Como dos semanas.', 'About two weeks now.'],
      ['Ya un mes.', 'A month now.'], ['Varios meses.', 'Several months now.'], ['Ya un año.', 'A year now.'], ['Desde hace mucho, desde que era joven.', 'A long time, since I was young.'], ['Ya no me acuerdo.', 'I can no longer remember.']
    ] },
    { id: 'howmuch', title: 'How much', items: [
      ['Nada.', 'None.'], ['Solo un poco.', 'Just a little.'], ['Más o menos.', 'Moderate.'], ['Mucho.', 'A lot.'], ['Demasiado.', 'Way too much.'],
      ['Ha empeorado últimamente.', 'It has gotten worse lately.'], ['Está más leve que antes.', 'It\'s lighter than before.'],
      ['Ya no aguanto más.', 'I can\'t take it anymore.', 'Unbearable distress; ask about hopelessness and suicide.']
    ] },
    { id: 'feel', title: 'How I feel', items: [
      ['Estoy bien.', 'I\'m okay.'], ['Estoy triste.', 'I\'m sad.'], ['Estoy nervioso.', 'I\'m nervous.', 'Common idiom for anxiety ("los nervios"); ask about palpitations and worry.'], ['Tengo miedo.', 'I\'m scared.'],
      ['Estoy enojado.', 'I\'m angry.'], ['Estoy agotado.', 'I\'m exhausted.'],
      ['Siento que no siento nada.', 'I feel like I feel nothing.', 'Possible emotional numbness; consider depression, trauma, dissociation.'],
      ['Me siento mareado.', 'I feel dizzy.', 'Somatic idiom; rule out medical cause and anxiety.'], ['Me da vergüenza.', 'I\'m embarrassed.']
    ] },
    { id: 'help', title: 'I need…', items: [
      ['¿Me lo repite, por favor?', 'Please repeat that.'], ['No entendí.', 'I didn\'t understand.'], ['Más despacio, por favor.', 'Please speak slower.'], ['¿Podemos hablar en inglés?', 'Can we speak English?'],
      ['Quiero ver a mi familia.', 'I want to see my family.'], ['Necesito un descanso.', 'I need a break.'], ['Me duele el cuerpo.', 'My body hurts.'], ['Tengo hambre.', 'I\'m hungry.'], ['Necesito ir al baño.', 'I need the toilet.']
    ] }
  ],
  sections: {
    opening: [
      ['Buenos días, doctora.', 'Good morning, Doctor.'], ['Español está bien.', 'Spanish is fine with me.'], ['Prefiero inglés.', 'I prefer English.'], ['Dígame Doña Rosa, nada más.', 'Just call me Doña Rosa.'],
      ['Estoy nervioso.', 'I\'m nervous.', 'Anxiety about the interview; reassure before proceeding.'],
      ['No sé por qué estoy aquí.', 'I don\'t know why I\'m here.', 'Possible poor insight or involuntary presentation.'],
      ['Mi familia me trajo.', 'My family just brought me.', 'Family-initiated; explore the patient\'s own view.'],
      ['Ya me quiero ir a mi casa.', 'I want to go home already.'], ['Está bien, estoy listo.', 'Okay, I\'m ready.']
    ],
    consent: [
      ['Sí, entiendo.', 'Yes, I understand.'], ['No entendí, ¿me lo repite?', 'I didn\'t understand, please repeat.'], ['Está bien que hable con mi familia.', 'It\'s fine to talk to my family.'],
      ['No quiero que mi esposo se entere.', 'I don\'t want my husband to know.', 'Specific confidentiality limit; clarify what and why, and screen for partner violence.'],
      ['No quiero que mis papás lo sepan.', 'I don\'t want my parents to know.'],
      ['¿Y si se lo cuenta a otras personas?', 'You might tell other people.', 'Fear about trust and stigma; some patients also fear immigration consequences. Explain the limits plainly.'],
      ['No tengo nada que esconder.', 'I\'m not hiding anything.'], ['¿Puedo decírselo yo primero?', 'Can I be the one to tell them first?'], ['Está bien, estoy de acuerdo.', 'Okay, I agree.']
    ],
    'cc-hpi': [
      ['No puedo dormir.', 'I can\'t sleep.'], ['Estoy muy triste.', 'I\'m extremely sad.'],
      ['Siempre ando nervioso.', 'I\'m always nervous.', 'Anxiety idiom; ask about panic and worry.'],
      ['Oigo voces.', 'I hear voices.', 'Possible auditory hallucinations; explore content and commands.'],
      ['Me duele el pecho.', 'My chest hurts.', 'Somatic presentation of anxiety or depression; rule out a cardiac cause.'],
      ['Puros pleitos en la casa.', 'We keep fighting at home.', 'Mexican colloquial "puros pleitos" = nothing but fights.'],
      ['Mi familia quiso que viniera.', 'My family wanted me to come here.', 'Family-driven presentation; assess patient insight.'],
      ['Perdí el trabajo y desde entonces no estoy bien.', 'I lost my job and I haven\'t been okay since.'],
      ['Dicen que he cambiado.', 'People say my behavior has changed.', 'Others notice change; limited insight.'],
      ['Yo no estoy enfermo, estoy bien.', 'I\'m not sick, I\'m fine.', 'Denial of illness; poor insight.']
    ],
    depression: [
      ['Sí, siempre estoy triste.', 'Yes, I\'m always sad.'], ['Ya nada me interesa.', 'I have no interest in anything anymore.', 'Anhedonia.'],
      ['No puedo dormir, me quedo despierto hasta la madrugada.', 'I can\'t sleep, I\'m awake until dawn.', 'Insomnia; ask about early morning waking.'],
      ['No tengo apetito.', 'I have no appetite.'], ['Siento el pecho apretado.', 'My chest feels tight.', 'Idiom of distress in depression or anxiety.'],
      ['No sirvo para nada.', 'I\'m useless.', 'Worthlessness; ask about suicidal thoughts.'], ['Me culpo de todo.', 'I blame myself for everything.', 'Excessive guilt.'],
      ['No me puedo concentrar.', 'I can\'t concentrate.'], ['Estoy agotado aunque no haga nada.', 'I\'m exhausted even when I do nothing.', 'Fatigue and low energy.'],
      ['Estoy bien, no estoy tan triste.', 'It\'s fine, I\'m not really sad.', 'Possible minimisation or masked depression; probe somatic symptoms.']
    ],
    mania: [
      ['Sí, estos días he estado muy contento.', 'Yes, I\'ve been very happy these past days.'],
      ['Llevo tres días sin dormir y no estoy cansado.', 'I haven\'t slept for three days but I\'m not tired.', 'Decreased need for sleep; core manic sign.'],
      ['Mi mente va a mil, tengo muchísimas ideas.', 'My mind is racing, I have so many ideas.', 'Racing thoughts, flight of ideas.'],
      ['Ahora me irrito por cualquier cosa.', 'I get irritated easily now.', 'Irritable mood; consider mixed or manic episode.'],
      ['Compré muchas cosas y me gasté los ahorros.', 'I bought many things and spent my savings.', 'Excessive spending; risky behavior.'],
      ['Tengo muchos planes, voy a poner un negocio.', 'I have many plans, I\'m going to start a business.', 'Possible grandiosity or increased goal-directed activity.'],
      ['Dicen que hablo demasiado.', 'They say I talk too much.', 'Pressured speech reported by others.'],
      ['Yo no tengo ningún problema, estoy perfectamente.', 'I have no problem, I\'m perfectly fine.', 'Lack of insight in mania.'],
      ['No, duermo normal.', 'No, my sleep is normal.']
    ],
    anxiety: [
      ['Sí, siempre estoy preocupado.', 'Yes, I\'m always worrying.'], ['No puedo parar de pensar.', 'I can\'t stop the thinking.', 'Uncontrollable worry; GAD or obsessions.'],
      ['De repente el corazón me late muy rápido.', 'My heart suddenly beats fast.', 'Palpitations; panic attack.'],
      ['Siento que no puedo respirar.', 'It feels like I can\'t breathe.', 'Dyspnea in panic; rule out a medical cause.'],
      ['Pensé que me iba a morir.', 'I thought I was going to die.', 'Fear of dying; panic attack.'], ['Me tiemblan las manos y sudo.', 'My hands shake and I sweat.'],
      ['Reviso la puerta una y otra vez.', 'I keep checking the door again and again.', 'Checking compulsion; OCD.'],
      ['Me da miedo ensuciarme, por eso me lavo mucho.', 'I\'m afraid of getting dirty, so I wash over and over.', 'Contamination obsession and washing compulsion.'],
      ['Me da miedo salir o hablar con la gente.', 'I\'m afraid to go out or talk to people.', 'Social anxiety or agoraphobia.'],
      ['Son los nervios nada más.', 'It\'s just nerves.', 'Common lay term ("los nervios"); may minimise an anxiety disorder.']
    ],
    trauma: [
      ['Sí, me pasó algo antes.', 'Yes, something happened to me before.'], ['No quiero hablar de eso.', 'I don\'t want to talk about it.', 'Avoidance; do not push, offer to return later.'],
      ['Se me viene a la mente todo el tiempo.', 'It keeps coming back to my mind.', 'Intrusive memories.'],
      ['Tengo pesadillas casi todas las noches.', 'I have bad dreams almost every night.', 'Trauma-related nightmares.'],
      ['Siento que está pasando otra vez.', 'It feels like it\'s happening again now.', 'Flashbacks.'],
      ['Me asusto con cualquier ruido.', 'I get startled by small noises.', 'Hypervigilance, exaggerated startle.'],
      ['Evito ese lugar.', 'I avoid that place.', 'Avoidance symptom.'],
      ['Es como si me fuera de mi cuerpo.', 'It\'s like I leave my body.', 'Dissociation idiom; ask about depersonalisation or blanking out.'],
      ['Me culpo de lo que pasó.', 'I blame myself for what happened.', 'Trauma-related guilt.'],
      ['Eso fue hace mucho, ya estoy bien.', 'That was long ago, I\'m fine now.', 'Possible minimisation or avoidance.']
    ],
    hallucinations: [
      ['Sí, oigo voces.', 'Yes, I hear voices.', 'Auditory hallucinations.'], ['No, no oigo nada.', 'No, I don\'t hear anything.'], ['Sí, en el oído izquierdo.', 'Yes, in my left ear.'], ['A veces, por la noche.', 'Sometimes, at night.'],
      ['La voz de un hombre que no conozco.', 'The voice of a man I don\'t know.'],
      ['Dice que no valgo nada.', 'It says I\'m worthless.', 'Derogatory voices; raises suicide risk.'], ['Me insulta.', 'It curses at me.'],
      ['Me dice que me haga daño.', 'It tells me to hurt myself.', 'Command hallucination (self-harm); urgent risk assessment.'],
      ['Me dice que les haga daño a otras personas.', 'It tells me to hurt other people.', 'Command hallucination (harm to others); urgent risk assessment.'],
      ['Veo sombras y espíritus.', 'I see shadows and spirits.', 'Visual hallucinations; consider delirium, substances, or a culturally shared experience.'],
      ['Oigo a mi mamá, que ya falleció.', 'I hear my late mother.', 'Grief hallucination can be normal; assess context.']
    ],
    delusions: [
      ['Sí, alguien me quiere hacer daño.', 'Yes, someone wants to hurt me.', 'Persecutory delusion; assess risk of acting on it.'],
      ['Me están siguiendo.', 'People are following me.', 'Persecutory delusion; in some patients check for a real basis (immigration enforcement, gangs, an abusive partner).'],
      ['Hablan de mí aunque no lo digan.', 'They talk about me even if they don\'t say it.', 'Ideas of reference.'],
      ['Me ponen veneno en la comida.', 'They put poison in my food.', 'Paranoid delusion; may lead to refusing food and medicines.'],
      ['La gente sabe lo que estoy pensando.', 'Other people know what I\'m thinking.', 'Thought broadcasting.'],
      ['Alguien me mete pensamientos en la cabeza.', 'Someone puts thoughts into my head.', 'Thought insertion; first-rank symptom.'],
      ['Controlan mi cuerpo.', 'They control my body.', 'Delusion of control; first-rank symptom.'],
      ['Dios me eligió para una misión.', 'God chose me for a mission.', 'Grandiose or religious delusion; consider mania and the congregation\'s beliefs.'],
      ['La vecina me hizo brujería.', 'The neighbor put a curse on me.', 'Brujería / mal de ojo belief; check whether it is culturally shared before calling it delusional.'],
      ['No, nada de eso.', 'No, nothing like that.']
    ],
    suicide: [
      ['No, en eso no pienso.', 'No, I don\'t think about that.', 'Denial; observe consistency with mood and behavior.'],
      ['A veces quisiera no despertar.', 'Sometimes I wish I wouldn\'t wake up.', 'Passive suicidal ideation.'],
      ['Sí, pienso en suicidarme.', 'Yes, I think about killing myself.', 'Active suicidal ideation; assess plan, intent, means.'],
      ['Sí, ya tengo un plan.', 'Yes, I already have a plan.', 'Suicide plan; high risk, needs immediate safety measures.'],
      ['Me tomaría todas mis pastillas.', 'I would take all my medicines.', 'Overdose plan; restrict access to medication.'],
      ['Ya lo intenté antes.', 'I tried before.', 'Previous attempt; strongest predictor of a future attempt.'],
      ['Ya estoy cansado de vivir.', 'I\'m tired of life.', 'Passive ideation or hopelessness; ask directly about suicide.'],
      ['No lo haría por mis hijos.', 'I wouldn\'t do it because of my children.', 'Protective factor; does not exclude risk.'],
      ['Me corto para sentir alivio.', 'I hurt myself to feel relief.', 'Non-suicidal self-injury; assess frequency and escalation.'],
      ['Eso fue puro drama, no lo haría de verdad.', 'That was just drama, I wouldn\'t really do it.', 'Minimisation; still take it seriously and assess intent.']
    ],
    violence: [
      ['No, no pienso hacerle daño a nadie.', 'No, I don\'t plan to hurt anyone.'],
      ['Sí, estoy muy enojado con él.', 'Yes, I\'m very angry at him.', 'Anger toward a specific person; identify the target.'],
      ['Quiero hacerle daño.', 'I want to hurt him/her.', 'Homicidal ideation; assess plan, means, and your state\'s duty to warn.'],
      ['Pienso en matarlo.', 'I think about killing him.', 'Homicidal ideation with intent; urgent safety response.'],
      ['Ya le he pegado a alguien antes.', 'I have hit someone before.', 'Past violence; risk factor.'],
      ['Tenemos un machete en la casa.', 'We have a machete at home.', 'Access to a weapon; discuss securing it.'],
      ['Tengo una pistola.', 'I have a gun.', 'Firearm access; urgent means restriction.'],
      ['Las voces me dicen que le haga daño.', 'The voices tell me to hurt him/her.', 'Command hallucination with violence; high risk.'],
      ['Solo le pegué porque estaba borracho.', 'I only hit him/her because I was drunk.', 'Intoxication-related violence; also minimisation.']
    ],
    deescalation: [
      ['¡Ya me quiero ir a mi casa!', 'I want to go home now!'],
      ['¡No quiero estar aquí, déjenme en paz!', 'I don\'t want to be here, leave me alone!', 'Agitation; give space and reduce stimulation.'],
      ['¡No me toque!', 'Don\'t touch me!'], ['¡Estoy furioso!', 'I\'m furious!'],
      ['Estoy nervioso, tengo miedo.', 'I\'m nervous, I\'m scared.', 'Fear underlying agitation.'],
      ['Está bien, me voy a calmar.', 'Okay, I\'ll calm down.'], ['¿Me da un poco de agua?', 'Can I have some water?'], ['Quiero hablar con mi mamá.', 'I want to talk to my mother.'],
      ['No quiero inyección.', 'I don\'t want an injection.', 'Refusal of IM medication; offer the oral option.'],
      ['Me voy, usted no me puede detener.', 'I\'m leaving, you can\'t stop me.', 'Elopement risk; assess capacity and safety.']
    ],
    'shea-techniques': [
      ['Como diez cervezas de una sentada.', 'About ten beers in one sitting.', 'Large quantity; shows the value of normalising and specific numbers.'],
      ['No las cuento, nada más me emborracho.', 'I can\'t count, I just get drunk.', 'Heavy use; possible minimisation or blackouts.'],
      ['De verdad es muy poquito.', 'It\'s really just a little.', 'Likely minimisation; probe with specific amounts.'],
      ['Pensé en tomarme todas mis pastillas.', 'I thought of taking all my medicines.', 'Overdose ideation; assess plan and means.'],
      ['Pensé en ahorcarme.', 'I thought of hanging myself.', 'Specific method; high lethality, assess intent.'],
      ['Pensé en aventarme.', 'I thought of jumping.', 'Specific method; assess access and intent. "Aventarse" is Mexican; "tirarme" elsewhere.'],
      ['Me da vergüenza decirlo.', 'I\'m embarrassed to say it.', 'Shame; reassure and normalise before asking again.'],
      ['Yo también he tenido pensamientos así.', 'I\'ve also had thoughts like that.', 'Disclosure after a normalising question.'],
      ['Sí, la verdad es que hasta más.', 'Yes, actually even more than that.', 'Gentle assumption elicited the higher true amount.'],
      ['No, eso no lo he pensado.', 'No, I haven\'t thought of that.']
    ]
  }
};
