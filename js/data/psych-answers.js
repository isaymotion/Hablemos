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
    substance: [
      ['No tomo.', 'I don\'t drink.'], ['Tomo los fines de semana.', 'I drink on weekends.'],
      ['Tomo todos los días.', 'I drink every day.', 'Daily use; screen for dependence and withdrawal.'],
      ['Como cinco cervezas.', 'About five beers.'],
      ['Una botella de tequila cada noche.', 'A bottle of tequila every night.', 'Heavy use; risk of alcohol withdrawal.'],
      ['Me tiemblan las manos cuando no tomo.', 'My hands shake when I can\'t drink.', 'Withdrawal tremor; assess for severe withdrawal.'],
      ['Uso cristal.', 'I use meth.', 'Methamphetamine ("cristal"); assess psychosis and risk.'],
      ['Solo fumo mota de vez en cuando.', 'I only smoke weed once in a while.', '"Mota" = marijuana (Mexico).'],
      ['Tomo pastillas que compro en la calle.', 'I take pills I buy on the street.', 'Counterfeit pills often contain fentanyl; overdose risk, offer naloxone.'],
      ['Apuesto, y estoy lleno de deudas.', 'I gamble, and I\'m deep in debt.', 'Gambling disorder; assess financial stress and suicide risk.'],
      ['Es poquito, no es problema.', 'That\'s just a little, it\'s not a problem.', 'Minimisation; use Shea-style specific quantity questions.'],
      ['No puedo parar.', 'I can\'t stop.', 'Loss of control.']
    ],
    history: [
      ['Sí, ya me han atendido antes.', 'Yes, I\'ve had a check-up before.'], ['Nunca he visto a un psiquiatra.', 'I\'ve never seen a psychiatrist.'],
      ['Me internaron en un hospital psiquiátrico en mi país.', 'I was admitted to a psychiatric hospital in my country.', 'Prior psychiatric hospitalisation; ask for records or the diagnosis as told to the family.'],
      ['No me acuerdo del nombre del medicamento.', 'I can\'t remember the name of the medicine.'],
      ['Dejé de tomar el medicamento.', 'I stopped taking the medicine.', 'Non-adherence; ask why.'],
      ['Ya no teníamos dinero para comprarlos.', 'We had no more money to buy it.', 'Cost barrier; ask about insurance and assistance programs.'],
      ['Porque ya me sentía mejor.', 'Because I got better already.', 'Common reason for stopping meds; psychoeducation on relapse.'],
      ['Me daban mucho sueño.', 'It made me sleepy.', 'Side-effect-driven non-adherence.'],
      ['Tengo la presión alta.', 'I have high blood pressure.'], ['Tengo diabetes.', 'I have diabetes.'], ['Soy alérgico a un medicamento.', 'I\'m allergic to a medicine.']
    ],
    'family-hx': [
      ['Nadie en mi familia.', 'No one in our family.'],
      ['Sí, mi papá tenía lo mismo.', 'Yes, my father had the same illness.', 'Family history of mental illness.'],
      ['A mi tía la internaron en un psiquiátrico.', 'My aunt was admitted to a psychiatric hospital.'],
      ['Mi abuelo se quitó la vida.', 'My grandfather took his own life.', 'Family history of suicide; raises risk.'],
      ['Mi hermano mayor es adicto.', 'My older brother is addicted to drugs.', 'Family history of substance use (patient\'s own word).'],
      ['Mi papá siempre andaba borracho.', 'My father was always drunk.', 'Family history of alcohol use.'],
      ['No sé, de eso no se habla en mi familia.', 'I\'m not sure, they don\'t talk about it.', 'Stigma; collateral may be needed.'],
      ['Dicen que mi tío estaba loco.', 'They say my uncle was crazy.', 'Lay label for possible psychosis; clarify details.']
    ],
    social: [
      ['Crecí en un rancho.', 'I grew up in a village.', '"Rancho" / "pueblo" = rural home town.'],
      ['Me crió mi abuela.', 'My grandmother raised me.'], ['Solo terminé la primaria.', 'I only finished elementary school.', 'Schooling guides the cognitive exam.'],
      ['Ahora no tengo trabajo.', 'I have no job now.'],
      ['Llegué hace cinco años; mis hijos se quedaron allá.', 'I came five years ago; my children stayed back home.', 'Migration separation; common source of grief and guilt.'],
      ['Ahora vivo solo.', 'I live alone now.', 'Social isolation; risk factor.'],
      ['Mi esposa y yo estamos separados.', 'My wife and I are separated.'],
      ['Mi pareja me pega.', 'My partner hits me.', 'Intimate partner violence; ask privately about safety and children.'],
      ['La vida está dura, no nos alcanza el dinero.', 'Life is hard, we don\'t have enough money.'],
      ['Tuve una infancia feliz.', 'My childhood was happy.']
    ],
    collateral: [
      ['Soy su esposa.', 'I\'m his wife.'], ['Soy su hijo.', 'I\'m his/her son.'], ['Soy su mamá.', 'I\'m his/her mother.'],
      ['Ha cambiado mucho estos meses.', 'He/she has changed a lot these past months.'],
      ['Habla y se ríe solo.', 'He talks and laughs alone.', 'Observed responding to internal stimuli; possible psychosis.'],
      ['Ya no duerme y se la pasa en la calle.', 'He/she no longer sleeps and is always out.', 'Possible manic episode.'],
      ['No quiere comer y llora todo el tiempo.', 'He/she doesn\'t want to eat and cries all the time.'],
      ['Dijo que se quería morir.', 'He/she said he/she wanted to die.', 'Family-reported suicidal statement; take it seriously.'],
      ['Le pega a la gente y rompe cosas.', 'He/she hits people and breaks things.', 'Aggression; assess risk to family.'],
      ['Dicen que le hicieron un trabajo, por eso lo llevamos con un curandero.', 'They say someone put a hex on him, so we took him to a healer.', 'Explanatory model of sorcery; ask about prior healer consultation and remedies given.']
    ],
    'mse-cog': [
      ['Me llamo ______.', 'My name is ______.'], ['Tengo treinta y cinco años.', 'I\'m thirty-five years old.'],
      ['No sé qué fecha es hoy.', 'I don\'t know today\'s date.', 'Disorientation to time.'],
      ['Estoy en un hospital.', 'I\'m in a hospital.'],
      ['No sé dónde estoy.', 'I don\'t know where I am.', 'Disorientation to place; consider delirium or dementia.'],
      ['Noventa y tres, ochenta y seis, setenta y nueve…', 'Ninety-three, eighty-six, seventy-nine…'],
      ['Espere, ya se me olvidó.', 'Wait, I forgot already.', 'Impaired recall.'],
      ['No puedo, está muy difícil.', 'I can\'t do it, it\'s hard.', 'Effort refusal vs true deficit; assess attention and schooling.'],
      ['Me equivoqué, perdón.', 'I made a mistake, sorry.']
    ],
    'mse-abstract': [
      ['Los dos son frutas.', 'They are both fruits.', 'Abstract answer.'], ['Los dos sirven para transportarse.', 'They are both for transportation.', 'Abstract answer.'],
      ['Los dos son amarillos.', 'They are both yellow.', 'Concrete answer.'],
      ['Que es mejor lo seguro que lo que no se sabe.', 'That a sure thing beats an uncertain one.', 'Abstract interpretation of the proverb.'],
      ['Que es más fácil agarrar un pájaro que cien.', 'That it\'s easier to catch one bird than a hundred.', 'Concrete interpretation of the proverb.'],
      ['No sé qué quiere decir.', 'I don\'t know what it means.'],
      ['Lo echaría al buzón.', 'I would put it in the mailbox.', 'Reasonable judgment.'],
      ['Me lo quedaría.', 'I would keep it.', 'Poor judgment on the found-letter question.'],
      ['Yo no estoy enfermo, no necesito tratamiento.', 'I\'m not sick, I don\'t need treatment.', 'Absent insight.'],
      ['A lo mejor es solo estrés, pero sí necesito ayuda.', 'Maybe it\'s just stress, but I do need help.', 'Partial insight.']
    ],
    'mse-describe': [
      ['Estoy bien.', 'I\'m okay.'], ['No me he bañado estos días.', 'I haven\'t bathed these past days.', 'Poor self-care.'],
      ['No me puedo estar quieto.', 'I can\'t settle, I can\'t sit still.', 'Psychomotor agitation or akathisia.'],
      ['Ando muy lento.', 'I\'m moving slowly now.', 'Psychomotor retardation.'],
      ['Me da pena mirarlo a los ojos.', 'I\'m shy to look at you.', 'Poor eye contact may be respeto, not pathology. "Pena" = embarrassment (Latin America).'],
      ['No tengo nada que decir.', 'I have nothing I want to say.', 'Poverty of speech or guardedness.'],
      ['Me tiemblan las manos.', 'My hands are trembling.', 'Tremor; consider medication effect, anxiety, withdrawal.'],
      ['¿Usted también oye eso?', 'Can you hear that too?', 'Responding to internal stimuli.'],
      ['Solo estoy cansado, no dormí.', 'I\'m just tired, I didn\'t sleep.']
    ],
    explain: [
      ['Sí, entiendo.', 'Yes, I understand.'],
      ['¿Eso quiere decir que estoy loco?', 'Does that mean I\'m crazy?', 'Stigma concern; address directly.'],
      ['¿Me voy a curar?', 'Will I get better?'],
      ['Yo no creo que esté enfermo.', 'I don\'t believe I\'m sick.', 'Poor insight; explore the explanatory model.'],
      ['Yo creo que esto es un mal que me hicieron.', 'I think someone did this to me (a hex).', 'Cultural explanatory model; respect and incorporate, do not dismiss.'],
      ['Prefiero ir primero con un curandero.', 'I would rather see a traditional healer first.'],
      ['No quiero tomar medicinas toda la vida.', 'I don\'t want to take medicine forever.', 'Adherence concern; discuss duration and options.'],
      ['Me da vergüenza tener esto.', 'I\'m ashamed to have this.'],
      ['Gracias, me siento más tranquilo.', 'Thank you, I feel calmer.']
    ],
    meds: [
      ['Sí, lo tomo todos los días.', 'Yes, I take it every day.'], ['A veces se me olvida.', 'I forget sometimes.'], ['Se me olvidó dos veces esta semana.', 'I missed it twice this week.'],
      ['No tenemos dinero para la medicina.', 'We have no money to buy the medicine.', 'Cost barrier; ask about coverage and assistance.'],
      ['Tengo sueño todo el día.', 'I\'m sleepy all day.', 'Sedation side effect.'],
      ['Me tiemblan las manos desde que empecé esto.', 'My hands have trembled since I started this.', 'Possible extrapyramidal side effect.'],
      ['Siento el cuello y la quijada tiesos.', 'My neck and jaw feel stiff.', 'Possible acute dystonia; urgent.'],
      ['No me puedo quedar quieto, siempre quiero levantarme.', 'I can\'t stay still, I always want to get up.', 'Possible akathisia.'],
      ['Subí de peso y perdí el deseo sexual.', 'I gained weight and lost my sex drive.', 'Side effects causing non-adherence; ask sensitively.'],
      ['Lo dejé porque ya me sentía mejor.', 'I stopped because I got better.'],
      ['Me mareo cuando me levanto.', 'I get dizzy when I stand up.', 'Orthostatic hypotension; check blood pressure.']
    ],
    admission: [
      ['No quiero que me internen.', 'I don\'t want to be admitted.', 'Refusal; assess capacity and risk.'],
      ['Está bien, acepto.', 'Okay, I agree.'], ['¿Cuánto tiempo voy a estar aquí?', 'How long will I be here?'], ['¿Me puede visitar mi familia?', 'Can my family visit me?'],
      ['¿Quién va a cuidar a mis hijos?', 'Who will take care of my children?'], ['Voy a perder mi trabajo.', 'I will lose my job.'],
      ['No podemos pagar.', 'We can\'t afford to pay.', 'Cost fear; involve the social worker or financial counselor early.'],
      ['Tengo miedo aquí.', 'I\'m scared here.'], ['¿Cuándo me puedo ir a mi casa?', 'When can I go home?']
    ],
    child: [
      ['Me llamo ______ y tengo ocho años.', 'I\'m ______, I\'m eight years old.'], ['Voy en quinto.', 'I\'m in fifth grade.'],
      ['Me gusta jugar videojuegos en el celular.', 'I like playing mobile games.'],
      ['No tengo amigos.', 'I have no friends.', 'Social isolation; ask about bullying.'],
      ['Me hacen bullying en la escuela.', 'I get bullied at school.', 'Bullying; assess safety and mood.'],
      ['No quiero ir a la escuela.', 'I don\'t want to go to school.', 'School refusal; explore anxiety, bullying, mood.'],
      ['Mi mamá y mi papá se pelean.', 'Mom and Dad fight.'],
      ['Siempre me duele la panza.', 'My stomach always hurts.', 'Somatic complaint in children; consider anxiety.'],
      ['No me puedo quedar sentado mucho tiempo.', 'I can\'t sit for long.'],
      ['Alguien me hace daño.', 'Someone hurts me.', 'Possible abuse; follow mandatory reporting and child protection procedures.']
    ],
    elderly: [
      ['Buenos días, doctora.', 'Good morning to you too.'],
      ['¿Qué? No oigo bien.', 'What? I can\'t hear.', 'Hearing impairment; adjust approach before cognitive testing.'],
      ['Ya se me olvidan las cosas.', 'I forget things now.', 'Subjective memory decline.'],
      ['Me pierdo hasta en mi colonia.', 'I get lost even in our neighborhood.', 'Disorientation; dementia concern. "Colonia" (Mexico) / "barrio" = neighborhood.'],
      ['No sé qué día es.', 'I don\'t know what day it is.'],
      ['En las noches ando inquieta y confundida.', 'Every night I\'m restless and confused.', 'Sundowning or delirium.'],
      ['Veo gente que no está.', 'I see people who aren\'t there.', 'Visual hallucinations; consider delirium or Lewy body disease.'],
      ['Estoy sola, ya nadie me visita.', 'I\'m alone now, no one visits.', 'Isolation; screen for depression.'],
      ['No duermo y me duele todo el cuerpo.', 'I can\'t sleep and my body always hurts.']
    ],
    closing: [
      ['Gracias, doctora.', 'Thank you, Doctor.'], ['Sí, así es, lo resumió bien.', 'Yes, your summary is correct.'], ['No, le faltó algo.', 'No, you missed something.'],
      ['Hay algo más que quiero decirle.', 'There\'s something else I want to say.'], ['Quiero preguntarle si me voy a curar.', 'I want to ask if I will get better.'],
      ['¿Cuándo es mi próxima cita?', 'When is my next visit?'], ['No tengo más preguntas.', 'I have no more questions.'],
      ['Todavía estoy nervioso, pero me siento un poco más tranquilo.', 'I\'m still nervous but I feel a bit calmer.'], ['Espero que me pueda ayudar.', 'I hope you can help me.']
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
