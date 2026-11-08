/* Dictionary part 3: clinical (emotions, beliefs, idioms, health, mind, risk, substance, stigma, clinical).
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician once populated.
   Format per line: spanish | english | part of speech | category | root (optional: lemma/infinitive) | note (optional)
   pos: nm nf n v adj adv pron part conj prep interj num phr. Categories: see App.CATS in js/core.js. */
window.DICT_RAW = window.DICT_RAW || [];
window.DICT_RAW.push(`
# ---------- EMOTIONS ----------
triste | sad | adj | emotions | triste | Same form for men and women. "Estoy triste" is the usual first answer to a mood question.
decaído | down, low (in spirits and energy) | adj | emotions | decaído | Very common word for low mood with low energy. Feminine: decaída. Softer than deprimido.
deprimido | depressed | adj | emotions | deprimido | Patients use it casually. Ask if they mean a long period of low mood or just a bad day.
ansioso | anxious | adj | emotions | ansioso | Many patients say nervioso instead. Noun: la ansiedad.
nervioso | nervous, on edge | adj | emotions | nervioso | Often means anxious in general. See also nervios in the idioms.
preocupado | worried | adj | emotions | preocupado | Follow with "¿Por qué está preocupado?"
asustado | scared, frightened | adj | emotions | asustado | Also espantado. Linked to the folk idea of susto.
espantado | frightened, spooked | adj | emotions | espantado | Common in Mexico and Central America. Can point to susto.
enojado | angry | adj | emotions | enojado | Standard in Mexico and Latin America.
enfadado | angry | adj | emotions | enfadado | More common in Spain. Patients in the US usually say enojado.
molesto | upset, annoyed | adj | emotions | molesto | Milder than enojado. Also means bothersome.
coraje | anger, rage | nm | emotions | coraje | In Mexico and Puerto Rico coraje means anger, not courage. "Me dio coraje" = it made me furious. Courage is valor.
enojo | anger | nm | emotions | enojo | The noun. "Ataques de enojo" = angry outbursts.
rabia | rage, fury | nf | emotions | rabia | Stronger than enojo. Also means rabies.
odio | hatred | nm | emotions | odio | Ask who or what the hatred is aimed at.
pena | sorrow; embarrassment | nf | emotions | pena | In Mexico "me da pena" usually means I am embarrassed or shy. Elsewhere it means sadness. Clarify.
vergüenza | shame, embarrassment | nf | emotions | vergüenza | "Me da vergüenza" = I feel ashamed. Very common reason patients do not disclose.
culpa | guilt; blame | nf | emotions | culpa | "Es mi culpa" = it is my fault. Listen for excessive guilt.
culpable | guilty | adj | emotions | culpable | "Me siento culpable." Also means legally guilty.
solo | alone, lonely (feeling) | adj | emotions | solo | "Me siento solo/a" can mean lonely, not just alone. Feminine: sola.
soledad | loneliness | nf | emotions | soledad | Ask about it directly. It is a risk factor.
vacío | empty (feeling) | adj | emotions | vacío | "Me siento vacío/a" = I feel empty. Also see the idiom.
desesperado | desperate | adj | emotions | desesperado | Can also mean exasperated. Ask which one.
desesperanzado | hopeless | adj | emotions | desesperanzado | Clinical word. Patients more often say "sin esperanza" or "ya no hay nada".
sin esperanza | hopeless, without hope | phr | emotions | esperanza | "No tengo esperanza." Hopelessness is a key suicide risk marker.
aburrido | bored | adj | emotions | aburrido | With estar: bored. With ser: boring. "Estoy aburrido" vs "Es aburrido".
irritable | irritable | adj | emotions | irritable | Same word as English. Also "de mal humor" and "de malas".
tranquilo | calm, at ease | adj | emotions | tranquilo | "Estoy tranquilo" = I feel calm. Also used as "no se preocupe".
contento | glad, content | adj | emotions | contento | Less strong than feliz.
feliz | happy | adj | emotions | feliz | Same form for men and women. Ask "¿Cuándo fue la última vez que se sintió feliz?"
alegre | cheerful | adj | emotions | alegre | Also used for a slightly tipsy person in some regions.
orgulloso | proud | adj | emotions | orgulloso | Positive in most cases. Can also mean stubborn.
celoso | jealous | adj | emotions | celoso | Ask about jealousy of a partner. Intense jealousy can signal paranoia or violence risk.
agobiado | overwhelmed, weighed down | adj | emotions | agobiado | Often said about work, money or family problems.
abrumado | overwhelmed | adj | emotions | abrumado | Slightly more formal than agobiado.
estresado | stressed | adj | emotions | estresado | Noun: el estrés. Very common in the US and Mexico.
frustrado | frustrated | adj | emotions | frustrado | Same as English.
rencor | resentment, grudge | nm | emotions | rencor | "Le guardo rencor" = I hold a grudge against him or her.
llorar | to cry (feeling) | v | emotions | llorar | "¿Ha estado llorando mucho?" Noun: el llanto.
llanto | crying, weeping | nm | emotions | llanto | "Ataques de llanto" = crying spells.
extrañar | to miss (someone) | v | emotions | extrañar | In Spain "echar de menos". Also means to find strange.
angustia | distress, anguish | nf | emotions | angustia | Stronger than ansiedad. Often felt in the chest or throat.
angustiado | distressed, anguished | adj | emotions | angustiado | "Me siento angustiado." Common in grief and panic.
miedo | fear | nm | emotions | miedo | Use "tener miedo". "Tengo miedo de salir."
pánico | panic | nm | emotions | pánico | "Me da pánico" = it terrifies me. Also see ataque de pánico.
tristeza | sadness | nf | emotions | tristeza | "¿Siente mucha tristeza?"
alegría | joy | nf | emotions | alegría | Ask about loss of joy: "¿Ya no siente alegría?"
desánimo | discouragement, low motivation | nm | emotions | desánimo | Often used for loss of drive.
apatía | apathy | nf | emotions | apatía | Used by clinicians more than by patients.
indiferente | indifferent, numb | adj | emotions | indiferente | Patients may say "me da igual" for the same feeling.
harto | fed up | adj | emotions | harto | "Estoy harto/a." Can signal burnout or suicidal fatigue. Also means plenty in Mexico.
afligido | grieving, distressed | adj | emotions | afligido | Slightly formal. Used for grief.
inquieto | restless, uneasy | adj | emotions | inquieto | Can describe restlessness in the body or mind.
impotencia | helplessness, powerlessness | nf | emotions | impotencia | "Siento impotencia" = I feel helpless. Not only sexual impotence.
arrepentido | regretful, sorry | adj | emotions | arrepentido | Ask after a violent or risky act.
emocionado | excited; moved | adj | emotions | emocionado | Excited in a good way. Not the same as excitado.
desahogarse | to vent, to get things off one's chest | v | emotions | desahogarse | "Necesito desahogarme." A good opening for therapy.
sentirse | to feel | v | emotions | sentirse | Reflexive. "¿Cómo se siente?" "Me siento mal."
tener miedo | to be afraid | phr | emotions | miedo | Say "tengo miedo", not "estoy miedo".
dar coraje | to make (someone) angry | phr | emotions | coraje | "Me da mucho coraje cuando..." Mexican.
dar pena | to make (someone) sad or embarrassed | phr | emotions | pena | Check the meaning in context.
dar vergüenza | to embarrass, to make ashamed | phr | emotions | vergüenza | "Me da vergüenza hablar de eso."
echar de menos | to miss (someone) | phr | emotions | extrañar | Spain. In the US use extrañar.

# ---------- BELIEFS ----------
Dios | God | nm | beliefs | Dios | Ask neutrally about faith. "Gracias a Dios" and "si Dios quiere" are common phrases, not always religious talk.
fe | faith | nf | beliefs | fe | "¿La fe es importante para usted?"
rezar | to pray | v | beliefs | rezar | "¿Usted reza?" Also "orar".
oración | prayer | nf | beliefs | oración | Also means a grammatical sentence.
iglesia | church (spiritual) | nf | beliefs | iglesia | Ask if the patient wants a chaplain: "capellán".
misa | Mass | nf | beliefs | misa | Catholic service. "¿Va a misa?"
pastor | pastor (Protestant minister) | nm | beliefs | pastor | Many Latino patients belong to evangelical churches. Also means shepherd.
sacerdote | priest | nm | beliefs | sacerdote | Also "padre" or "el cura".
capellán | chaplain | nm | beliefs | capellán | Hospital spiritual care.
santo | saint | nm | beliefs | santo | Patients may pray to a particular santo for protection.
virgen | the Virgin Mary | nf | beliefs | virgen | La Virgen de Guadalupe is central for many Mexican patients.
milagro | miracle | nm | beliefs | milagro | "Pedí un milagro." May affect how a family sees treatment.
castigo | punishment | nm | beliefs | castigo | "Es un castigo de Dios." Ask what the person thinks they are being punished for.
pecado | sin | nm | beliefs | pecado | Guilt about sin can be cultural or part of delusional guilt. Ask carefully.
curandero | traditional healer (man) | nm | beliefs | curandero | Feminine: curandera. Ask if the patient has seen one. Do not judge.
curandera | traditional healer (woman) (spiritual) | nf | beliefs | curandera | Mexican folk healer. Ask respectfully about remedies and teas.
botánica | shop selling herbs, candles and religious items | nf | beliefs | botánica | Common in Caribbean and Mexican neighborhoods. Remedies from here may interact with medicines.
limpia | spiritual cleansing | nf | beliefs | limpia | Often done with an egg, herbs or smoke. "Me hicieron una limpia."
hierbas | herbs | nf | beliefs | hierba | Ask which herbs and teas the patient takes. Some interact with medications.
té de | tea of (a herb) | phr | beliefs | té | Examples: té de tila, té de manzanilla, té de toronjil. Ask for the name of every tea.
tila | linden-flower tea (for nerves) | nf | beliefs | tila | Often taken for nervios and sleep.
manzanilla | chamomile | nf | beliefs | manzanilla | Often taken for nerves, stomach and sleep.
remedio casero | home remedy | phr | beliefs | remedio | "¿Ha probado algún remedio casero?"
espíritu | spirit | nm | beliefs | espíritu | Patients may speak of spirits as real. Do not argue. Ask how it affects them.
espiritista | spiritist, spirit medium | nm | beliefs | espiritista | Common in Puerto Rican and Caribbean communities. Ask if the patient has seen one.
santería | Santería (Afro-Caribbean religion) | nf | beliefs | santería | Common in Cuban and Caribbean communities. Respect it as a religion.
brujería | witchcraft | nf | beliefs | brujería | "Creo que me hicieron brujería." Explore the belief and its fit with the patient's culture.
brujo | witch, sorcerer | nm | beliefs | brujo | Feminine: bruja. The patient may name a person who cast a spell.
un trabajo | a spell (hex) | phr | beliefs | trabajo | "Me hicieron un trabajo" = someone put a curse on me. Not a work matter.
mal de ojo | evil eye | phr | beliefs | ojo | Folk illness caused by a strong look. Often explained for babies. Ask what symptoms the patient links to it.
ojo | evil eye (short form) | nm | beliefs | ojo | "Le echaron ojo" = someone gave the evil eye.
susto | fright illness (folk) | nm | beliefs | susto | Folk belief that a shock causes loss of the soul, with sleeplessness, sadness and weakness. Overlaps with trauma and depression.
empacho | blocked digestion (folk) | nm | beliefs | empacho | Folk illness with stomach pain. Ask about treatments like massage or tea.
caída de mollera | fallen fontanelle (folk) | phr | beliefs | mollera | Folk illness in infants. Relevant for child welfare questions.
mala suerte | bad luck | phr | beliefs | suerte | "Tengo mala suerte." Sometimes tied to a spell.
envidia | envy | nf | beliefs | envidia | Often blamed for bad luck or mal de ojo.
el diablo | the devil | phr | beliefs | diablo | Patients may feel tormented by the devil. Assess for religious delusions without dismissing faith.
demonio | demon | nm | beliefs | demonio | "Tengo un demonio" is a common statement in spiritual distress.
posesión | possession | nf | beliefs | posesión | "Me siento poseído/a." Can be a cultural experience, dissociation or delusion. Ask for details.
poseído | possessed | adj | beliefs | poseído | Feminine: poseída.
exorcismo | exorcism | nm | beliefs | exorcismo | Ask if the family has arranged one.
ángel | angel | nm | beliefs | ángel | "Mi ángel de la guarda" = my guardian angel.
difunto | deceased person | nm | beliefs | difunto | Seeing or hearing a deceased relative can be a normal grief experience. Ask how the patient feels about it.
muerto | dead person; dead | nm | beliefs | muerto | "Veo a mis muertos" can be cultural. Ask if it distresses them.
alma | soul | nf | beliefs | alma | Feminine noun that takes el: el alma.
me hablan | they speak to me | phr | beliefs | hablar | Ask who, when and what they say. This can be a spiritual, cultural or psychotic experience.
Día de Muertos | Day of the Dead | phr | beliefs | muerto | Mexican tradition for remembering the dead. Contact with the dead at this time is normal.
Semana Santa | Holy Week | phr | beliefs | santo | Religious time that can affect appointments and mood.
bendición | blessing | nf | beliefs | bendición | "Écheme la bendición." Often said to elders.
promesa | religious vow | nf | beliefs | promesa | "Hice una promesa a la Virgen." Can affect treatment choices.
ayuno | fasting (spiritual) | nm | beliefs | ayuno | Ask if the patient fasts for religious reasons. Relevant for medicines taken with food.
ritual | ritual | nm | beliefs | ritual | Ask if the patient does rituals and what they mean to them.
amuleto | amulet | nm | beliefs | amuleto | Protective object such as a red string or a saint's medal.
agua bendita | holy water | phr | beliefs | agua | Often used for protection at home.

# ---------- IDIOMS ----------
nervios | nerves (anxiety, tension) | nm | idioms | nervios | Literal: nerves. Clinical: anxiety, tension, worry or low mood. Patients say "sufro de los nervios".
ataque de nervios | nervous attack | phr | idioms | ataque | Literal: attack of nerves. Clinical: sudden crying, shaking, shouting, feeling out of control, often after a stressor. Cultural syndrome. Not always panic.
ataque de pánico | panic attack | phr | idioms | ataque | Literal: panic attack. Clinical: panic attack with fear, racing heart and breathlessness.
estoy espantado | I am frightened (susto) | phr | idioms | espantar | Literal: I am scared off. Clinical: fright, possible trauma or susto. Ask what scared them.
me siento decaído | I feel down | phr | idioms | decaído | Literal: I feel fallen. Clinical: low mood and energy. Feminine: decaída.
no tengo ganas de nada | I do not feel like doing anything | phr | idioms | ganas | Literal: no wish for anything. Clinical: anhedonia, loss of interest, low motivation.
ya no aguanto | I cannot take it anymore | phr | idioms | aguantar | Literal: I do not endure anymore. Clinical: exhaustion, distress, possible suicidal ideation. Ask what they cannot bear.
ya me cansé | I am done, I am worn out | phr | idioms | cansar | Literal: I already got tired. Clinical: giving up, burnout or possible hopelessness. Ask what they are tired of.
me quiero ir con Dios | I want to go to God | phr | idioms | Dios | Literal: I want to go with God. Clinical: wish to die, passive suicidal ideation. Always follow up.
quisiera no despertar | I wish I would not wake up | phr | idioms | despertar | Literal: I wish I would not wake. Clinical: passive death wish. Ask about plan and intent.
se me va la onda | I lose my train of thought | phr | idioms | onda | Literal: the wave goes from me. Clinical: dizziness, derealization, spacing out or losing the thread of thought.
me va a dar algo | something is going to happen to me | phr | idioms | dar | Literal: something will give me. Clinical: fear of collapse, heart attack or loss of control during anxiety.
me siento como ido | I feel spaced out | phr | idioms | ido | Literal: I feel gone. Clinical: dissociation, depersonalization or poor attention. Feminine: ida.
ando bien malilla | I feel awful (withdrawal) | phr | idioms | malilla | Literal: I am very malilla. Clinical: withdrawal discomfort from alcohol or drugs. See malilla.
traigo la cruda | I have a hangover | phr | idioms | cruda | Literal: I carry the raw one. Clinical: hangover. Also guilt and shame after drinking.
se me sube la presión | my blood pressure rises | phr | idioms | presión | Literal: my pressure goes up. Clinical: anger or anxiety with body symptoms. Not always real hypertension.
me siento vacío | I feel empty | phr | idioms | vacío | Literal: I feel empty. Clinical: emotional numbness, depression, borderline traits. Feminine: vacía.
soy una carga | I am a burden | phr | idioms | carga | Literal: I am a load. Clinical: perceived burdensomeness, a key suicide risk factor.
se me cierra el mundo | the world is closing in on me | phr | idioms | mundo | Literal: the world closes for me. Clinical: panic, trapped feeling, hopelessness.
tengo el corazón apachurrado | my heart is squashed | phr | idioms | corazón | Literal: my heart is crushed. Clinical: grief, sadness, heartache. Mexican use of apachurrado.
estoy en las nubes | I am in the clouds | phr | idioms | nube | Literal: I am in the clouds. Clinical: distracted, spacing out, poor concentration.
se me fue el alma | my soul left me | phr | idioms | alma | Literal: the soul went from me. Clinical: severe fright or shock. Linked to susto.
me falta el aire | I am short of air | phr | idioms | aire | Literal: air is missing from me. Clinical: dyspnea, panic. Rule out medical causes.
me tiembla todo | everything shakes on me | phr | idioms | temblar | Literal: all of me trembles. Clinical: tremor, anxiety, withdrawal or medication effect.
hablo solo | I talk to myself | phr | idioms | hablar | Literal: I speak alone. Clinical: could be normal self talk or responding to voices. Ask if someone answers. Feminine: sola.
me siento ahogado | I feel suffocated | phr | idioms | ahogar | Literal: I feel drowned. Clinical: anxiety, tight chest, panic. Feminine: ahogada.
se me nubla la mente | my mind clouds over | phr | idioms | nublar | Literal: my mind goes cloudy. Clinical: poor concentration, confusion, brain fog.
no doy una | I cannot do anything right | phr | idioms | dar | Literal: I do not hit one. Clinical: low self-esteem, worthlessness or poor performance.
estoy que no puedo | I am at my limit | phr | idioms | poder | Literal: I am such that I cannot. Clinical: extreme stress, exhaustion or anger. Ask about the cause.
me duele el alma | my soul hurts | phr | idioms | alma | Literal: my soul hurts. Clinical: emotional pain, grief, depression.
no me da el cuerpo | my body cannot keep up | phr | idioms | cuerpo | Literal: my body does not give. Clinical: exhaustion, fatigue, low energy.
me cuesta trabajo | it is hard for me | phr | idioms | costar | Literal: it costs me work. Clinical: difficulty doing a task. "Me cuesta trabajo levantarme."
no sirvo para nada | I am good for nothing | phr | idioms | servir | Literal: I serve for nothing. Clinical: worthlessness, low self-esteem. Ask about suicidal thoughts.
me quiero morir | I want to die | phr | idioms | morir | Literal: I want to die. Clinical: suicidal ideation. Sometimes used loosely when upset. Always ask directly.
estoy hasta la madre | I am fed up (vulgar) | phr | idioms | madre | Literal: I am up to the mother. Clinical: extreme frustration. Mexican and vulgar. Do not use yourself.
me siento mal del estómago | my stomach feels bad | phr | idioms | estómago | Literal: I feel bad in the stomach. Clinical: nausea, anxiety symptoms or somatization.
me duele la cabeza de pensar | my head hurts from thinking | phr | idioms | cabeza | Literal: my head hurts from thinking. Clinical: rumination, worry, tension headache.
no puedo dormir de la preocupación | I cannot sleep from worry | phr | idioms | dormir | Literal as stated. Clinical: insomnia from anxiety or depression.
me siento sin fuerzas | I feel without strength | phr | idioms | fuerza | Literal as stated. Clinical: fatigue, low energy, weakness.
se me acelera el corazón | my heart races | phr | idioms | corazón | Literal: my heart speeds up. Clinical: palpitations, panic, anxiety.
tengo un nudo en la garganta | I have a knot in my throat | phr | idioms | nudo | Literal: knot in my throat. Clinical: globus sensation, held-back tears, anxiety.
tengo un peso encima | I feel a weight on me | phr | idioms | peso | Literal: I have a weight above. Clinical: depression, heaviness, burden.
me siento atrapado | I feel trapped | phr | idioms | atrapado | Literal as stated. Clinical: entrapment, an important suicide risk factor. Feminine: atrapada.
ya no le encuentro sentido | I no longer see the point | phr | idioms | sentido | Literal: I no longer find meaning. Clinical: hopelessness, anhedonia, passive suicidal thoughts.
todo me da igual | nothing matters to me | phr | idioms | igual | Literal: everything is the same to me. Clinical: flat affect, anhedonia, apathy.
me da por llorar | I feel like crying suddenly | phr | idioms | llorar | Literal: it gives me to cry. Clinical: tearfulness, mood lability.
ando bien bajoneado | I am feeling very low | phr | idioms | bajoneado | Literal: I am very pulled down. Clinical: low mood. Mexican and Caribbean casual speech.
me siento fuera de mí | I feel outside myself | phr | idioms | fuera | Literal as stated. Clinical: depersonalization.

# ---------- HEALTH ----------
dolor | pain | nm | health | dolor | "¿Dónde le duele?" Ask location, intensity (1 a 10) and duration.
doler | to hurt (medical) | v | health | doler | Works like gustar: "Me duele la cabeza."
fiebre | fever | nf | health | fiebre | "¿Ha tenido fiebre?" Also "calentura" in some regions.
tos | cough | nf | health | tos | "¿Tiene tos?"
vómito | vomiting | nm | health | vómito | Also "vomitar". Ask how many times.
vomitar | to vomit | v | health | vomitar | Also "devolver" or "arrojar" in some regions.
náusea | nausea | nf | health | náusea | Common word is "ganas de vomitar" or "asco".
diarrea | diarrhea | nf | health | diarrea | Ask about blood and frequency.
estreñimiento | constipation | nm | health | estreñimiento | Do not use "constipación". Estreñido = constipated.
mareo | dizziness | nm | health | mareo | Patients use it for light-headedness and sometimes vertigo. Ask them to describe it.
marearse | to feel dizzy | v | health | marear | "Me mareo cuando me levanto."
desmayo | fainting | nm | health | desmayo | "¿Se ha desmayado?"
desmayarse | to faint | v | health | desmayar | "Me desmayé" = I passed out.
convulsión | seizure | nf | health | convulsión | Also "ataque". Ask about tongue biting and incontinence.
ataque | seizure; attack | nm | health | ataque | In health context can mean seizure. "Ataque al corazón" = heart attack.
temblor | tremor, shaking | nm | health | temblor | Also earthquake in Mexico. Ask which part of the body shakes.
sudores | sweats | nm | health | sudor | "Sudores fríos" = cold sweats. Common in withdrawal and panic.
escalofríos | chills | nm | health | escalofrío | Often with fever or withdrawal.
sueño | sleep; sleepiness; dream | nm | health | sueño | "Tengo sueño" = I am sleepy. "No tengo sueño" = I am not sleepy. A dream is also un sueño.
insomnio | insomnia | nm | health | insomnio | Patients more often say "no puedo dormir".
pesadillas | nightmares | nf | health | pesadilla | Ask how often and what they dream of. Common in trauma.
apetito | appetite (medical) | nm | health | apetito | "¿Cómo está su apetito?" Also "hambre" for hunger.
peso | weight | nm | health | peso | "¿Ha subido o bajado de peso?" Also a unit of money.
cansancio | tiredness | nm | health | cansancio | "Tengo mucho cansancio."
fatiga | fatigue | nf | health | fatiga | Slightly more clinical than cansancio.
debilidad | weakness | nf | health | debilidad | "Siento debilidad en las piernas."
hormigueo | tingling | nm | health | hormigueo | Literal: ant-like feeling. Ask where.
adormecido | numb | adj | health | adormecido | Also "entumido" or "dormido". "Tengo la mano dormida."
presión alta | high blood pressure | phr | health | presión | Also "hipertensión". Low: presión baja.
azúcar | blood sugar; diabetes (casual) | nm | health | azúcar | Patients say "tengo azúcar" for diabetes.
diabetes | diabetes | nf | health | diabetes | Important for metabolic monitoring with antipsychotics.
colesterol | cholesterol | nm | health | colesterol | Ask about it when starting some medicines.
embarazo | pregnancy | nm | health | embarazo | "¿Hay posibilidad de que esté embarazada?" Always ask before prescribing.
regla | period (menstruation) | nf | health | regla | Also "periodo". "¿Cuándo fue su última regla?"
periodo | menstrual period | nm | health | periodo | Also means a period of time.
menopausia | menopause | nf | health | menopausia | Can affect mood and sleep.
lactancia | breastfeeding | nf | health | lactancia | "¿Está dando pecho?" Important for medication safety.
alergia | allergy | nf | health | alergia | "¿Tiene alguna alergia a medicamentos?"
medicina | medicine, medication | nf | health | medicina | In everyday speech means medication. The field of medicine is also la medicina.
medicamento | medication | nm | health | medicamento | More formal than medicina.
pastilla | pill | nf | health | pastilla | Also "tableta" or "píldora".
dosis | dose | nf | health | dosis | Feminine. "La dosis es de 10 miligramos."
receta | prescription | nf | health | receta | Also recipe.
farmacia | pharmacy (medical) | nf | health | farmacia | "¿En qué farmacia surte sus recetas?"
cita | appointment | nf | health | cita | "Su próxima cita es el lunes." Also a romantic date.
análisis | lab test | nm | health | análisis | In Mexico "análisis de sangre" = blood test.
muestra de orina | urine sample | phr | health | muestra | Ask for consent before a drug screen.
orina | urine | nf | health | orina | Verb: orinar.
sangre | blood (medical) | nf | health | sangre | "Análisis de sangre" = blood test.
vacuna | vaccine | nf | health | vacuna | Verb: vacunar.
cirugía | surgery | nf | health | cirugía | "¿Ha tenido alguna cirugía?"
herida | wound (medical) | nf | health | herida | Ask how it happened. Important for self-harm screening.
moretón | bruise (medical) | nm | health | moretón | Also "cardenal" in Spain. Ask about the cause.
cicatriz | scar (medical) | nf | health | cicatriz | Ask about old scars that may be from self-harm.
dolor de cabeza | headache | phr | health | dolor | Also "jaqueca" for migraine.
dolor de pecho | chest pain | phr | health | dolor | Ask about breathing and radiation to the arm.
falta de aire | shortness of breath | phr | health | aire | Also "me ahogo".
palpitaciones | palpitations | nf | health | palpitación | Common with anxiety, caffeine and stimulants.
sed | thirst (medical) | nf | health | sed | "Tengo mucha sed" is a diabetes question.
boca seca | dry mouth | phr | health | boca | Common medication side effect.
visión borrosa | blurred vision | phr | health | visión | Common with some medicines.
estómago | stomach (medical) | nm | health | estómago | Many emotional complaints appear as stomach pain.
comezón | itching | nf | health | comezón | Mexican. Also "picazón" or "picor".
sarpullido | rash | nm | health | sarpullido | Ask about new medicines.
hinchazón | swelling | nf | health | hinchazón | Verb: hincharse.
tensión | tension; blood pressure (Spain) | nf | health | tensión | In Spain "la tensión" means blood pressure.
convulsionar | to have a seizure | v | health | convulsionar | "Convulsionó" = he or she had a seizure.
orinar | to urinate | v | health | orinar | Ask about urinary problems with some medicines.
vista | eyesight | nf | health | vista | Also view. "Mi vista está borrosa."
oído | hearing; ear | nm | health | oído | Inner ear or hearing. Also see oreja for outer ear.
infección | infection | nf | health | infección | Same as English.
sangrado | bleeding | nm | health | sangrado | Ask about a heavy period or injury.
chequeo | checkup | nm | health | chequeo | Latin American. Spain: revisión.
examen físico | physical exam | phr | health | examen | Ask for consent before touching.
signos vitales | vital signs | phr | health | signo | Presión, pulso, temperatura, respiración.
analgésico | pain reliever | nm | health | analgésico | Ask about use. Includes ibuprofeno and acetaminofén.
suero | IV fluids; serum | nm | health | suero | "Le vamos a poner suero" = we will give you IV fluids.

# ---------- MIND ----------
memoria | memory | nf | mind | memoria | "¿Cómo está su memoria?"
atención | attention | nf | mind | atención | Ask "¿Puede mantener la atención?"
concentración | concentration | nf | mind | concentración | "Me cuesta concentrarme."
concentrarse | to concentrate | v | mind | concentrar | Reflexive.
confundido | confused | adj | mind | confundido | Feminine: confundida. Ask when confusion started.
olvidadizo | forgetful | adj | mind | olvidadizo | Feminine: olvidadiza.
despistado | absent-minded, distracted | adj | mind | despistado | Light word, not a clinical term.
desorientado | disoriented | adj | mind | desorientado | "¿Sabe dónde está?"
olvidar | to forget (mental health) | v | mind | olvidar | "Se me olvidó" = I forgot.
pensamiento | thought | nm | mind | pensamiento | "Pensamientos que no se van" = intrusive thoughts.
idea | idea, thought | nf | mind | idea | "Ideas de muerte" = thoughts of death.
voces | voices | nf | mind | voz | "¿Escucha voces que otras personas no oyen?"
visiones | visions | nf | mind | visión | "¿Ve cosas que otros no ven?"
sombras | shadows | nf | mind | sombra | Patients often say they see sombras. Ask what they look like.
alucinación | hallucination | nf | mind | alucinación | Clinical word. Patients rarely use it.
paranoia | paranoia | nf | mind | paranoia | Patients say "siento que me vigilan".
delirio | delusion | nm | mind | delirio | In everyday speech can mean raving or fever delirium. Clinical: delusion.
manía | mania | nf | mind | manía | Also means a quirk or habit.
acelerado | speeded up, revved | adj | mind | acelerado | "Me siento acelerado" = my mind or body is racing.
lento | slow (mental health) | adj | mind | lento | "Me siento lento" = psychomotor slowing.
bloqueado | blocked | adj | mind | bloqueado | "Me siento bloqueado" = mind blank, stuck.
trabado | stuck, blocked (speech or thought) | adj | mind | trabado | "Se me traba la lengua" = I get tongue-tied.
soñar | to dream | v | mind | soñar | "¿Qué sueña?" Stem-changing: sueño, sueñas.
despierto | awake (mental health) | adj | mind | despierto | "Me quedo despierto toda la noche."
conciencia | consciousness; conscience | nf | mind | conciencia | "Perdió la conciencia" = lost consciousness. Also moral conscience.
juicio | judgment | nm | mind | juicio | Also trial. "Perdió el juicio" = lost his mind.
ánimo | mood; spirit | nm | mind | ánimo | "¿Cómo está de ánimo?" "Sin ánimo" = no drive.
humor | mood; humor | nm | mind | humor | "De buen humor" = in a good mood. "De mal humor" = irritable.
carácter | character, temper | nm | mind | carácter | "Tiene mal carácter" = has a bad temper.
personalidad | personality | nf | mind | personalidad | Ask family about changes.
estado de ánimo | mood state | phr | mind | ánimo | Clinical phrase.
terapia | therapy | nf | mind | terapia | "¿Ha tenido terapia?"
consejería | counseling | nf | mind | consejería | Latin American. Also "consejo".
psicólogo | psychologist (mental health) | nm | mind | psicólogo | Feminine: psicóloga. Not a medical doctor.
psiquiatra | psychiatrist (mental health) | nm | mind | psiquiatra | Same form for men and women. "El/la psiquiatra".
trabajadora social | social worker (woman) (mental health) | nf | mind | trabajador | Masculine: trabajador social.
hospital psiquiátrico | psychiatric hospital | phr | mind | hospital | Avoid "manicomio".
internado | admitted (inpatient) | adj | mind | internar | "Estuvo internado" = was in the hospital. Feminine: internada.
ingresado | admitted | adj | mind | ingresar | Spain: ingresado. Latin America also internado.
dado de alta | discharged | phr | mind | alta | "Lo/la dieron de alta."
seguimiento | follow-up | nm | mind | seguimiento | "Cita de seguimiento."
ansiedad | anxiety (state) | nf | mind | ansiedad | Often a symptom, not a diagnosis.
recuerdos | memories | nm | mind | recuerdo | "Recuerdos que regresan" = flashbacks.
recuerdo | memory; souvenir | nm | mind | recuerdo | Also from the verb recordar.
flashback | flashback | nm | mind | flashback | English loan. Patients may say "recuerdos que regresan".
rumiar | to ruminate | v | mind | rumiar | Clinical. Patients say "le doy vueltas".
darle vueltas | to go over and over | phr | mind | vuelta | "Le doy vueltas a las cosas" = I overthink.
pensar demasiado | to overthink | phr | mind | pensar | Same as rumination for patients.
obsesión | obsession | nf | mind | obsesión | Ask about intrusive, repeated thoughts.
compulsión | compulsion | nf | mind | compulsión | Ask about repeated acts like washing or checking.
orientado | oriented | adj | mind | orientado | Mental status term. "Orientado en persona, lugar y tiempo."
insight | insight | nm | mind | insight | Used in clinical teams. Spanish: introspección or conciencia de enfermedad.
introspección | insight | nf | mind | introspección | "Buena introspección."
tristeza profunda | deep sadness | phr | mind | tristeza | Low mood intensity descriptor.
disociación | dissociation | nf | mind | disociación | Patients say "me voy" or "me desconecto".
desconectarse | to disconnect, to zone out | v | mind | desconectar | "Me desconecto" = I zone out.
irse la mente | mind drifting | phr | mind | mente | See "se me va la onda".
mente | mind | nf | mind | mente | "Mi mente no para."
cerebro | brain (mental health) | nm | mind | cerebro | Also used for the mind in casual speech.

# ---------- RISK ----------
suicidio | suicide | nm | risk | suicidio | Ask directly. Asking does not plant the idea.
quitarse la vida | to take one's own life | phr | risk | quitar | "¿Ha pensado en quitarse la vida?" Neutral and clear.
hacerse daño | to hurt oneself | phr | risk | daño | "¿Ha pensado en hacerse daño?"
lastimarse | to hurt oneself | v | risk | lastimar | Common in the US. "¿Se ha lastimado a propósito?"
cortarse | to cut oneself | v | risk | cortar | "¿Se ha cortado?" Ask where and how recently.
autolesión | self-harm | nf | risk | autolesión | Clinical term.
pistola | handgun | nf | risk | pistola | "¿Tiene una pistola en casa?"
arma | weapon, firearm | nf | risk | arma | Feminine but takes el: el arma. "Armas de fuego" = firearms.
arma de fuego | firearm | phr | risk | arma | "¿Hay armas de fuego en su casa?"
balas | bullets | nf | risk | bala | Ask where ammunition is stored.
cuchillo | knife (safety) | nm | risk | cuchillo | Ask about access to knives.
soga | rope | nf | risk | soga | Recognize only in context of hanging.
veneno | poison | nm | risk | veneno | "¿Ha tomado veneno?" Ask about cleaning products.
sobredosis | overdose | nf | risk | sobredosis | "¿Se tomó más pastillas de las que debía?"
tomarse todas las pastillas | to take all the pills | phr | risk | tomar | Ask exactly which and how many.
ahorcarse | to hang oneself | v | risk | ahorcar | Recognize only. Ask about method with neutral wording.
ideación suicida | suicidal ideation | phr | risk | ideación | Clinical term. Say "pensamientos de quitarse la vida" to the patient.
plan | plan | nm | risk | plan | "¿Tiene un plan?" Ask method, time and place.
intento | attempt | nm | risk | intento | "¿Ha intentado quitarse la vida antes?"
intento de suicidio | suicide attempt | phr | risk | intento | Preferred over "suicidio fallido".
pensamientos | thoughts | nm | risk | pensamiento | "¿Tiene pensamientos de hacerse daño?"
matar | to kill | v | risk | matar | "¿Ha pensado en matar a alguien?"
matarse | to kill oneself | v | risk | matar | "Quiero matarme." Take seriously.
golpear | to hit | v | risk | golpear | "¿Ha golpeado a alguien?"
pelear | to fight | v | risk | pelear | "¿Se ha metido en peleas?"
amenazar | to threaten | v | risk | amenazar | "¿Ha amenazado a alguien?"
amenaza | threat | nf | risk | amenaza | Duty to protect assessment.
agredir | to assault | v | risk | agredir | Clinical. "¿Ha agredido a alguien?"
agresión | aggression, assault | nf | risk | agresión | Also "agresión sexual" for sexual assault.
violencia doméstica | domestic violence | phr | risk | violencia | "¿Se siente seguro/a en su casa?"
violencia | violence | nf | risk | violencia | Ask about both past and present.
abuso | abuse | nm | risk | abuso | "¿Ha sufrido abuso?"
abuso sexual | sexual abuse | phr | risk | abuso | Ask with care and privacy.
maltrato | mistreatment | nm | risk | maltrato | "Maltrato infantil" = child abuse.
seguro | safe | adj | risk | seguro | "¿Se siente seguro/a?" Also means sure.
protegerse | to protect oneself | v | risk | proteger | "¿Cómo puede protegerse?"
plan de seguridad | safety plan | phr | risk | seguridad | Written steps for a crisis. Review it with the patient.
988 | 988 (crisis line) | phr | risk | 988 | Say "nueve ocho ocho". For Spanish, oprima 2.
línea de crisis | crisis line | phr | risk | línea | "Puede llamar al 988 y oprimir 2 para español."
emergencias | emergencies | nf | risk | emergencia | Also "urgencias" in Spain and Mexico.
urgencias | emergency room (safety) | nf | risk | urgencia | Mexico and Spain. In the US "sala de emergencias".
911 | 911 | phr | risk | 911 | Say "nueve uno uno".
policía | police | nf | risk | policía | The police officer is el policía.
ambulancia | ambulance (safety) | nf | risk | ambulancia | Same as English.
hospitalizar | to hospitalize | v | risk | hospitalizar | "Le recomiendo que lo/la hospitalicemos."
peligro | danger | nm | risk | peligro | "¿Está en peligro?"
peligroso | dangerous (safety) | adj | risk | peligroso | Feminine: peligrosa.
riesgo | risk | nm | risk | riesgo | "Evaluación de riesgo."
red de apoyo | support network | phr | risk | red | Family, friends and community.
contacto de emergencia | emergency contact | phr | risk | contacto | Ask for name and number.
orden de protección | protective order | phr | risk | orden | For domestic violence.
refugio | shelter | nm | risk | refugio | For domestic violence or homelessness.
bajo llave | locked up | phr | risk | llave | "Guarde las armas bajo llave."
quitar | to remove, to take away | v | risk | quitar | "Le vamos a quitar las cosas peligrosas." Used for room safety.
morir | to die (safety) | v | risk | morir | "¿Piensa en morir?"
muerte | death | nf | risk | muerte | "Pensamientos de muerte."
no querer vivir | not wanting to live | phr | risk | vivir | "Ya no quiero vivir." Always assess.
observación | observation | nf | risk | observación | "Observación constante" = one-to-one.
sujeción | physical restraint | nf | risk | sujeción | Last resort. Explain it to patient and family.
aislamiento | seclusion; isolation | nm | risk | aislamiento | Also social isolation.
herirse | to injure oneself | v | risk | herir | Neutral clinical wording.
saltar | to jump | v | risk | saltar | Ask about thoughts of jumping.
arma blanca | bladed weapon | phr | risk | arma | Knife or blade.
amenaza suicida | suicidal threat | phr | risk | amenaza | Clinical phrase.
medios letales | lethal means | phr | risk | medio | Safety counseling.
restricción de medios | means restriction | phr | risk | restricción | Part of safety planning.
razón para vivir | reason for living | phr | risk | razón | Protective factor. Ask "¿Qué lo mantiene con vida?"
violencia de pareja | intimate partner violence | phr | risk | violencia | Ask with privacy.

# ---------- SUBSTANCE ----------
alcohol | alcohol | nm | substance | alcohol | "¿Toma alcohol?"
cerveza | beer (substance use) | nf | substance | cerveza | Ask how many per day. Also "chela" in Mexico.
chela | beer (slang) | nf | substance | chela | Mexican slang.
caguama | large bottle of beer (about 32 oz) (substance use) | nf | substance | caguama | Mexican. Count caguamas, not just beers.
tequila | tequila (substance use) | nm | substance | tequila | Common in Mexican drinking.
trago | drink | nm | substance | trago | "¿Cuántos tragos?" Also "copa".
copa | drink; glass | nf | substance | copa | Spain and Mexico. "Unas copas" = a few drinks.
borracho | drunk | adj | substance | borracho | As an adjective ok. As a label, avoid. See stigma.
tomado | drunk | adj | substance | tomar | Mexican. "Estaba tomado" = was drunk. Feminine: tomada.
ebrio | intoxicated | adj | substance | ebrio | More formal than borracho.
emborracharse | to get drunk | v | substance | emborrachar | "¿Se emborracha seguido?"
tomar | to drink (alcohol) (substance use) | v | substance | tomar | "¿Toma?" often means do you drink alcohol. Also to take.
cruda | hangover | nf | substance | cruda | Mexican. "Tener cruda." Ask about shakes in the morning.
resaca | hangover | nf | substance | resaca | Spain and most of Latin America.
dejar de tomar | to stop drinking | phr | substance | dejar | "¿Ha intentado dejar de tomar?"
recaída | relapse | nf | substance | recaída | "¿Ha tenido recaídas?"
recaer | to relapse | v | substance | recaer | "Recayó la semana pasada."
drogas | drugs (illicit) | nf | substance | droga | In Spanish droga means illicit drug. A medicine is medicamento.
mota | marijuana (slang) | nf | substance | mota | Mexican slang.
marihuana | marijuana | nf | substance | marihuana | Also "mota", "hierba", "yerba".
hierba | marijuana (slang) | nf | substance | hierba | Also herbs. Ask for context.
porro | joint | nm | substance | porro | Spain and Southern Cone.
cristal | crystal meth | nm | substance | cristal | Mexican and US slang.
metanfetamina | methamphetamine | nf | substance | metanfetamina | Also "meta" or "cristal".
meta | meth (slang) | nf | substance | metanfetamina | Short form. Ask what the patient means.
perico | cocaine (slang) | nm | substance | perico | Mexican and Caribbean slang.
cocaína | cocaine | nf | substance | cocaína | Also "coca" or "perico".
coca | cocaine (short form) | nf | substance | cocaína | Do not confuse with Coca-Cola.
crack | crack cocaine | nm | substance | crack | Also "piedra".
piedra | crack (slang) | nf | substance | piedra | Literal: stone.
heroína | heroin | nf | substance | heroína | Also "chiva" in Mexico.
chiva | heroin (slang) | nf | substance | chiva | Mexican slang.
fentanilo | fentanyl | nm | substance | fentanilo | Ask about "pastillas azules" and pressed pills.
las azules | blue pills (fentanyl) | phr | substance | azul | Street name for fake pills with fentanyl.
M30 | M30 pill | phr | substance | M30 | Fentanyl-pressed pill. Say "eme treinta".
pastillas | pills (street) | nf | substance | pastilla | "Pastillas" can be prescribed or street. Ask what they are.
pills | pills (US loan) | nf | substance | pill | Spanish speakers in the US say "las pills".
benzos | benzodiazepines (slang) | nf | substance | benzo | Clinician slang. Patients say "Xanax" or "pastillas para los nervios".
Xanax | Xanax (alprazolam) | nm | substance | Xanax | Say "xánax". Also "barras" for 2 mg bars.
benzodiacepinas | benzodiazepines | nf | substance | benzodiacepina | Clinical word.
opioides | opioids | nm | substance | opioide | Clinical. Ask about painkillers and heroin.
inyectarse | to inject oneself | v | substance | inyectar | "¿Se inyecta?"
picarse | to inject (slang) | v | substance | picar | Slang. "Me pico" = I inject.
fumar | to smoke | v | substance | fumar | Tobacco, marijuana or other.
inhalar | to inhale | v | substance | inhalar | Also for solvents.
esnifar | to snort | v | substance | esnifar | Also "aspirar".
foil | foil | nm | substance | foil | Used for smoking fentanyl. Patients may say "papel aluminio".
jeringa | syringe | nf | substance | jeringa | Ask about sharing needles.
aguja | needle | nf | substance | aguja | Ask about sharing needles.
Narcan | Narcan (nasal naloxone) | nm | substance | Narcan | "¿Tiene Narcan en casa?"
naloxona | naloxone | nf | substance | naloxona | Reverses opioid overdose.
malilla | withdrawal sickness (Mexico) | nf | substance | malilla | Sweats, aches, nausea. Ask if they feel it now.
abstinencia | withdrawal; abstinence | nf | substance | abstinencia | "Síntomas de abstinencia." Also means not using.
mono | withdrawal (slang, Spain) | nm | substance | mono | Spanish slang. Rare in Mexico.
antojo | craving | nm | substance | antojo | In general means a craving, also in pregnancy.
ansias | craving, urge | nf | substance | ansia | "Tengo ansias de consumir."
ganas de consumir | urge to use | phr | substance | ganas | "¿Siente ganas de consumir?"
limpio | clean (sober) | adj | substance | limpio | "Llevo cinco meses limpio." Feminine: limpia.
sobrio | sober | adj | substance | sobrio | Feminine: sobria.
sobriedad | sobriety | nf | substance | sobriedad | Ask how long.
rehab | rehab | nm | substance | rehab | Short form. Also "centro de rehabilitación".
rehabilitación | rehabilitation | nf | substance | rehabilitación | Treatment program.
AA | AA (Alcoholics Anonymous) | phr | substance | AA | Say "a-a". Spanish groups: "Alcohólicos Anónimos".
Alcohólicos Anónimos | Alcoholics Anonymous | phr | substance | Alcohólicos Anónimos | Group meetings in Spanish available in many areas.
padrino | sponsor (AA) | nm | substance | padrino | Also godfather. Ask if patient has one.
apuestas | bets, gambling | nf | substance | apuesta | "Problemas con las apuestas."
apostar | to bet, to gamble | v | substance | apostar | "¿Apuesta?" Stem-change: apuesto.
casino | casino | nm | substance | casino | Same as English.
lotería | lottery | nf | substance | lotería | Also a Mexican board game.
raspaditos | scratch-off tickets | nm | substance | raspadito | US Spanish. Ask about spending.
tragamonedas | slot machines | nm | substance | tragamonedas | Invariable noun.
adicción | addiction | nf | substance | adicción | Do not confuse with adición.
consumo | use (of a substance) | nm | substance | consumo | "Consumo de alcohol."
consumir | to use (a substance) | v | substance | consumir | "¿Consume drogas?"
adicto | addicted | adj | substance | adicto | Avoid as a label for a person. Say "persona con adicción".
desintoxicación | detox | nf | substance | desintoxicación | Also "detox".
desintoxicarse | to detox | v | substance | desintoxicar | Reflexive.
lagunas | blackouts | nf | substance | laguna | "¿Tiene lagunas?" = do you black out?
delirium tremens | delirium tremens | phr | substance | delirium tremens | Severe alcohol withdrawal. Say "delirio por abstinencia" to families.
vapear | to vape | v | substance | vapear | Also "vapeo". Ask about nicotine and THC.
cigarro | cigarette | nm | substance | cigarro | Mexican. Spain: cigarrillo.
nicotina | nicotine | nf | substance | nicotina | Ask about tobacco use too.
tabaco | tobacco | nm | substance | tabaco | Spain: also "tabaco" for cigarettes.
éxtasis | ecstasy | nm | substance | éxtasis | Also MDMA, "tachas" in slang.
hongos | mushrooms (psilocybin) | nm | substance | hongo | "Hongos alucinógenos."
LSD | LSD | nm | substance | LSD | Say "ele ese de".
ketamina | ketamine | nf | substance | ketamina | Clinician and patient use.
solventes | solvents (inhalants) | nm | substance | solvente | Patients may say "activo" or "thinner" in Mexico.
pegamento | glue (inhalant) | nm | substance | pegamento | Ask about sniffing glue, especially in teens.
tusi | tusi (pink cocaine) | nm | substance | tusi | Street name for a ketamine and MDMA mixture. Often Latin American party drug.
lean | lean (codeine syrup) | nm | substance | lean | English slang. Patients may say "jarabe".

# ---------- STIGMA ----------
loco | crazy (insulting) | adj | stigma | loco | Avoid. Feminine: loca. Say "persona con una enfermedad mental".
demente | demented; insane | adj | stigma | demente | Avoid as a label. Use "persona con demencia" only for dementia.
retrasado | "retarded" (slur) | adj | stigma | retrasado | Avoid. Say "persona con discapacidad intelectual".
mongólico | slur for Down syndrome | adj | stigma | mongólico | Avoid. Say "persona con síndrome de Down".
drogadicto | druggie (label) | nm | stigma | drogadicto | Avoid. Say "persona con trastorno por uso de sustancias".
un borracho | a drunkard (as a label) | nm | stigma | borracho | Avoid as a label. Say "persona con un problema con el alcohol".
vicioso | addict, "junkie" | nm | stigma | vicioso | Avoid. Say "persona con adicción".
alcohólico | alcoholic (label) | nm | stigma | alcohólico | Use "persona con trastorno por consumo de alcohol" in notes.
maricón | slur for gay man | nm | stigma | maricón | Avoid. Say "hombre gay" or "persona homosexual".
puto | slur for gay man | nm | stigma | puto | Avoid. Very offensive. Say "hombre gay".
marimacha | slur for masculine woman or lesbian | nf | stigma | marimacha | Avoid. Say "mujer lesbiana".
débil mental | feeble-minded | phr | stigma | débil | Avoid. Say "discapacidad intelectual".
manicomio | madhouse | nm | stigma | manicomio | Avoid. Say "hospital psiquiátrico".
histérica | hysterical (woman) | adj | stigma | histérico | Avoid. Describe the behavior instead.
flojo | lazy | adj | stigma | flojo | Avoid. Depression and negative symptoms can look like laziness.
huevón | lazy; lazybones (vulgar) | adj | stigma | huevón | Vulgar. Avoid. Also güevón.
chiflado | nutty | adj | stigma | chiflado | Mexican, mocking. Avoid.
zafado | crazy, "off the rails" | adj | stigma | zafado | Mexican, mocking. Avoid.
enfermo mental | mentally ill person | phr | stigma | enfermo | Say "persona con una enfermedad mental".
loquero | shrink (derogatory) | nm | stigma | loquero | Avoid. Say "psiquiatra".
casa de locos | madhouse | phr | stigma | loco | Avoid. Say "hospital psiquiátrico".
suicida | suicidal person (label) | nm | stigma | suicida | Say "persona con pensamientos suicidas".
cometió suicidio | committed suicide | phr | stigma | cometer | Avoid. Say "murió por suicidio".
mal de la cabeza | not right in the head | phr | stigma | cabeza | Avoid.
tarado | idiot | adj | stigma | tarado | Mocking. Avoid.

# ---------- CLINICAL ----------
diagnóstico | diagnosis | nm | clinical | diagnóstico | "Su diagnóstico es depresión."
tratamiento | treatment | nm | clinical | tratamiento | "Su plan de tratamiento."
síntoma | symptom | nm | clinical | síntoma | Masculine despite the -a ending.
trastorno | disorder | nm | clinical | trastorno | Not "desorden". "Trastorno bipolar."
depresión | depression | nf | clinical | depresión | Say "depresión mayor" for MDD.
trastorno bipolar | bipolar disorder | phr | clinical | trastorno | Patients say "bipolar".
esquizofrenia | schizophrenia | nf | clinical | esquizofrenia | Explain clearly. Not "split personality".
psicosis | psychosis | nf | clinical | psicosis | Explain as "perder contacto con la realidad".
demencia | dementia | nf | clinical | demencia | Family may say "Alzheimer".
estado confusional agudo | delirium | phr | clinical | confusional | Medical delirium. Do not confuse with delirio (delusion).
estrés postraumático | PTSD | phr | clinical | estrés | Also TEPT: "trastorno de estrés postraumático".
TEPT | PTSD | phr | clinical | TEPT | Say "te-e-pe-te".
TDAH | ADHD | phr | clinical | TDAH | Say "te-de-a-hache-e".
autismo | autism | nm | clinical | autismo | Also "trastorno del espectro autista".
trastorno de pánico | panic disorder | phr | clinical | trastorno | Recurrent panic attacks.
TOC | OCD | phr | clinical | TOC | Say "toc". Trastorno obsesivo-compulsivo.
trastorno de la conducta alimentaria | eating disorder | phr | clinical | trastorno | Patients say "problemas de alimentación".
anorexia | anorexia | nf | clinical | anorexia | Also loss of appetite in medicine.
bulimia | bulimia | nf | clinical | bulimia | Binge and purge.
trastorno límite | borderline personality disorder | phr | clinical | trastorno | Short for trastorno límite de la personalidad.
dependencia | dependence | nf | clinical | dependencia | "Dependencia del alcohol."
tolerancia | tolerance | nf | clinical | tolerancia | "Necesita más para sentir el mismo efecto."
antidepresivo | antidepressant | nm | clinical | antidepresivo | Takes 2 to 4 weeks to work. Explain this.
antipsicótico | antipsychotic | nm | clinical | antipsicótico | Explain it helps voices and unusual beliefs.
estabilizador del ánimo | mood stabilizer | phr | clinical | estabilizador | For bipolar disorder.
ansiolítico | anxiolytic | nm | clinical | ansiolítico | Patients say "para los nervios".
inyección de depósito | long-acting injection | phr | clinical | inyección | Also "inyección de acción prolongada".
efecto secundario | side effect | phr | clinical | efecto | Also "efecto adverso". "¿Ha notado algún efecto secundario?"
rigidez | stiffness | nf | clinical | rigidez | Extrapyramidal sign.
acatisia | akathisia | nf | clinical | acatisia | Patients say "no puedo quedarme quieto".
temblor de los medicamentos | drug-induced tremor | phr | clinical | temblor | Ask if shaking started after a new medicine.
aumento de peso | weight gain | phr | clinical | aumento | Common antipsychotic effect.
consentimiento | consent | nm | clinical | consentimiento | "¿Nos da su consentimiento?"
consentimiento informado | informed consent | phr | clinical | consentimiento | Explain risks and benefits.
ingreso voluntario | voluntary admission | phr | clinical | ingreso | "Usted decide entrar."
ingreso involuntario | involuntary admission | phr | clinical | ingreso | Explain rights.
orden judicial | court order | phr | clinical | orden | Legal order for treatment or protection.
alta | discharge | nf | clinical | alta | "Alta médica." Also "dar de alta".
cita de seguimiento | follow-up appointment | phr | clinical | cita | "Cita de seguimiento en una semana."
hoja de alta | discharge paperwork | phr | clinical | hoja | Papers given at discharge.
examen del estado mental | mental status exam | phr | clinical | examen | Say "examen mental".
intérprete | interpreter (clinical) | nm | clinical | intérprete | Same form for men and women. Offer one when Spanish is limited.
confidencialidad | confidentiality | nf | clinical | confidencialidad | "Lo que me diga es confidencial."
HIPAA | HIPAA | nf | clinical | HIPAA | Say "jipa". Patients ask if the family will know.
trabajador social | social worker | nm | clinical | trabajador | Feminine: trabajadora social.
enfermero | nurse (man) (clinical) | nm | clinical | enfermero | Feminine: enfermera.
enfermera | nurse (woman) (clinical) | nf | clinical | enfermero | Masculine: enfermero.
residente | resident (physician in training) | nm | clinical | residente | Same form for men and women.
médico de cabecera | primary care doctor | phr | clinical | médico | Also "médico general". Spain: médico de familia.
médico | doctor | nm | clinical | médico | Feminine: la médica. Also "doctor".
doctor | doctor | nm | clinical | doctor | Feminine: doctora.
paciente | patient (clinical) | nm | clinical | paciente | Same form for men and women. Also an adjective: patient.
familiar | family member | nm | clinical | familiar | Also adjective: familiar.
historia clínica | medical record | phr | clinical | historia | Also "expediente" in Mexico.
expediente | chart, record | nm | clinical | expediente | Mexican.
diagnóstico diferencial | differential diagnosis | phr | clinical | diagnóstico | Team language.
pronóstico | prognosis | nm | clinical | pronóstico | "El pronóstico es bueno."
remisión | remission | nf | clinical | remisión | Symptoms have eased.
episodio | episode | nm | clinical | episodio | "Primer episodio" = first episode.
crisis | crisis | nf | clinical | crisis | Same as English.
psicoterapia | psychotherapy | nf | clinical | psicoterapia | Talk therapy.
terapia cognitivo-conductual | cognitive behavioral therapy | phr | clinical | terapia | Short: TCC.
medicación | medication | nf | clinical | medicación | Used by clinicians.
adherencia | adherence | nf | clinical | adherencia | Taking medicine as prescribed.
tomar la medicina | to take the medication | phr | clinical | tomar | "¿Toma la medicina todos los días?"
litio | lithium | nm | clinical | litio | Needs blood level checks.
estimulante | stimulant | nm | clinical | estimulante | Used for TDAH.
sedante | sedative | nm | clinical | sedante | Drowsiness effect.
terapia electroconvulsiva | electroconvulsive therapy | phr | clinical | terapia | Short: TEC.
trastorno de ansiedad | anxiety disorder | phr | clinical | trastorno | General term.
trastorno de personalidad | personality disorder | phr | clinical | trastorno | General term.
discapacidad intelectual | intellectual disability | phr | clinical | discapacidad | Respectful term.
autolesión no suicida | non-suicidal self-injury | phr | clinical | autolesión | Clinical phrase.
equipo | team | nm | clinical | equipo | "Nuestro equipo de tratamiento."
`);
