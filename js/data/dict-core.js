/* Dictionary part 1: core words (basics, grammar, pronouns, questions, numbers, time, people, family, adjectives, modals, verbs).
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician once populated.
   Format per line: spanish | english | part of speech | category | root (optional: lemma/infinitive) | note (optional)
   pos: nm nf n v adj adv pron part conj prep interj num phr. Categories: see App.CATS in js/core.js. */
window.DICT_RAW = window.DICT_RAW || [];
window.DICT_RAW.push(`
# basics
hola | hello | interj | basics | hola
buenos días | good morning | phr | basics | buenos días
buenas tardes | good afternoon | phr | basics | buenas tardes
buenas noches | good evening / good night | phr | basics | buenas noches | Used both as greeting and goodbye at night
buenas | hi (short greeting) | interj | basics | buenas | Informal, any time of day
¿cómo está? | how are you? (formal) | phr | basics | estar
¿cómo estás? | how are you? (informal) | phr | basics | estar
¿qué tal? | how's it going? | phr | basics | qué tal
¿cómo le va? | how is it going for you? | phr | basics | ir
mucho gusto | nice to meet you | phr | basics | gusto
encantado | pleased to meet you (man) | adj | basics | encantado
encantada | pleased to meet you (woman) | adj | basics | encantado
adiós | goodbye | interj | basics | adiós
hasta luego | see you later | phr | basics | hasta luego
hasta mañana | see you tomorrow | phr | basics | hasta mañana
hasta pronto | see you soon | phr | basics | hasta pronto
nos vemos | see you | phr | basics | ver | Informal
que le vaya bien | take care (go well) | phr | basics | ir | Polite goodbye
cuídese | take care of yourself | phr | basics | cuidarse
por favor | please | phr | basics | por favor
gracias | thank you | interj | basics | gracias
muchas gracias | thank you very much | phr | basics | gracias
de nada | you're welcome | phr | basics | de nada
con gusto | gladly, you're welcome | phr | basics | con gusto
no hay de qué | don't mention it | phr | basics | no hay de qué
perdón | sorry, excuse me | interj | basics | perdón
disculpe | excuse me, pardon me (formal) | interj | basics | disculpar
lo siento | I'm sorry | phr | basics | sentir | Also used for condolences
lo siento mucho | I'm very sorry | phr | basics | sentir
con permiso | excuse me (to pass or to enter) | phr | basics | con permiso | Say it before entering a room or passing someone
adelante | come in, go ahead | interj | basics | adelante
pase | come in (formal) | interj | basics | pasar
pásele | come in, go ahead | interj | basics | pasar | Mexico, friendly
siéntese | have a seat | phr | basics | sentarse
¿mande? | pardon? / what did you say? | interj | basics | mande | Mexico, polite way to say "what?"
¿cómo? | pardon? / what? | interj | basics | cómo
¿perdón? | pardon? | interj | basics | perdón
ándale | okay, that's right, hurry up | interj | basics | andar | Mexico, depends on tone
órale | okay, wow, come on | interj | basics | órale | Mexico, informal, many meanings
ahí está | there it is, that's it | phr | basics | estar
está bien | it's fine, okay | phr | basics | estar
bueno | okay, well | interj | basics | bueno | Also how Mexicans answer the phone
pues | well, so | interj | basics | pues | Filler word, very common
a ver | let's see | phr | basics | ver
vamos a ver | let's see | phr | basics | ir
claro | of course | interj | basics | claro
claro que sí | of course | phr | basics | claro
cómo no | of course, sure | phr | basics | cómo no
por supuesto | of course | phr | basics | por supuesto
sí | yes | adv | basics | sí
no | no, not | adv | basics | no
tal vez | maybe | adv | basics | tal vez
quizás | maybe | adv | basics | quizás
a lo mejor | maybe, probably | phr | basics | a lo mejor | Colloquial
no sé | I don't know | phr | basics | saber
no entiendo | I don't understand | phr | basics | entender
no hablo español | I don't speak Spanish | phr | basics | hablar
hablo un poco de español | I speak a little Spanish | phr | basics | hablar
más despacio, por favor | slower, please | phr | basics | despacio
repita, por favor | repeat, please | phr | basics | repetir
otra vez | again | adv | basics | otra vez
espere un momento | wait a moment | phr | basics | esperar
un momentito | just a moment | phr | basics | momento
¿entiende? | do you understand? | phr | basics | entender
¿me entiende? | do you understand me? | phr | basics | entender
bienvenido | welcome (to a man) | adj | basics | bienvenido
bienvenida | welcome (to a woman) | adj | basics | bienvenido
felicidades | congratulations | interj | basics | felicidad
salud | bless you / cheers | interj | basics | salud
buen provecho | enjoy your meal | phr | basics | provecho
que se mejore | get well soon | phr | basics | mejorarse
ni modo | oh well, nothing to be done | phr | basics | modo | Mexico
qué bueno | good, glad to hear it | phr | basics | bueno
qué pena | what a shame / I'm embarrassed | phr | basics | pena | Mexico, pena also means embarrassment
de acuerdo | agreed, okay | phr | basics | acuerdo
listo | ready, okay | adj | basics | listo
dígame | tell me, go ahead | phr | basics | decir
dime | tell me (informal) | phr | basics | decir
# grammar
el | the (masculine) | n | grammar | el
la | the (feminine) | n | grammar | el
los | the (masculine plural) | n | grammar | el
las | the (feminine plural) | n | grammar | el
un | a, an, one (masculine) | n | grammar | un
una | a, an, one (feminine) | n | grammar | un
unos | some (masculine) | n | grammar | un
unas | some (feminine) | n | grammar | un
de | of, from | prep | grammar | de
del | of the, from the | prep | grammar | de
a | to, at | prep | grammar | a
al | to the, at the | prep | grammar | a
en | in, on, at | prep | grammar | en
con | with | prep | grammar | con
sin | without | prep | grammar | sin
para | for, in order to | prep | grammar | para
por | for, because of, by, through | prep | grammar | por
sobre | about, over, on | prep | grammar | sobre
entre | between, among | prep | grammar | entre
hasta | until, up to | prep | grammar | hasta
desde | since, from | prep | grammar | desde
hacia | toward | prep | grammar | hacia
contra | against | prep | grammar | contra
durante | during | prep | grammar | durante
según | according to | prep | grammar | según
sobre | about (a topic) | prep | grammar | sobre
antes de | before | prep | grammar | antes de
después de | after | prep | grammar | después de
cerca de | near | prep | grammar | cerca de
lejos de | far from | prep | grammar | lejos de
dentro de | inside, within | prep | grammar | dentro de
fuera de | outside of | prep | grammar | fuera de
encima de | on top of | prep | grammar | encima de
debajo de | under | prep | grammar | debajo de
detrás de | behind | prep | grammar | detrás de
delante de | in front of | prep | grammar | delante de
al lado de | next to | prep | grammar | al lado de
y | and | conj | grammar | y
e | and (before i- sounds) | conj | grammar | y
o | or | conj | grammar | o
u | or (before o- sounds) | conj | grammar | o
pero | but | conj | grammar | pero
sino | but rather | conj | grammar | sino
porque | because | conj | grammar | porque
que | that, than | conj | grammar | que
si | if | conj | grammar | si
cuando | when | conj | grammar | cuando
mientras | while | conj | grammar | mientras
aunque | although, even if | conj | grammar | aunque
como | like, as | conj | grammar | como
ni | nor, not even | conj | grammar | ni
ni... ni | neither... nor | conj | grammar | ni
entonces | then, so | adv | grammar | entonces
también | also, too | adv | grammar | también
tampoco | neither, either (negative) | adv | grammar | tampoco
muy | very | adv | grammar | muy
mucho | a lot, much | adv | grammar | mucho
poco | little, not much | adv | grammar | poco
un poco | a little | phr | grammar | poco
demasiado | too much | adv | grammar | demasiado
bastante | quite, enough | adv | grammar | bastante
más | more | adv | grammar | más
menos | less | adv | grammar | menos
tan | so, as | adv | grammar | tan
tanto | so much | adv | grammar | tanto
casi | almost | adv | grammar | casi
solo | only | adv | grammar | solo | Also written sólo
nomás | only, just | adv | grammar | nomás | Mexico, also "no más"
ya | already, now | adv | grammar | ya
ya no | no longer, not anymore | phr | grammar | ya
todavía | still, yet | adv | grammar | todavía
aún | still, yet | adv | grammar | aún
todavía no | not yet | phr | grammar | todavía
siempre | always | adv | grammar | siempre
nunca | never | adv | grammar | nunca
jamás | never | adv | grammar | jamás
a veces | sometimes | phr | grammar | a veces
casi siempre | almost always | phr | grammar | siempre
casi nunca | almost never | phr | grammar | nunca
muchas veces | many times, often | phr | grammar | vez
de vez en cuando | once in a while | phr | grammar | vez
a menudo | often | phr | grammar | menudo
seguido | often | adv | grammar | seguido | Mexico
frecuentemente | frequently | adv | grammar | frecuentemente
rara vez | rarely | phr | grammar | vez
una vez | once | phr | grammar | vez
dos veces | twice | phr | grammar | vez
de repente | suddenly | adv | grammar | de repente
de pronto | suddenly | adv | grammar | de pronto
primero | first | adv | grammar | primero
luego | then, later | adv | grammar | luego
después | after, afterward | adv | grammar | después
antes | before, earlier | adv | grammar | antes
ahora | now | adv | grammar | ahora
ahorita | right now / in a little while | adv | grammar | ahora | Mexico, can mean now or soon. Clarify with the patient
pronto | soon | adv | grammar | pronto
tarde | late | adv | grammar | tarde
temprano | early | adv | grammar | temprano
aquí | here | adv | grammar | aquí
acá | here | adv | grammar | acá | More common in Mexico than "aquí" when moving toward the speaker
allí | there | adv | grammar | allí
ahí | there | adv | grammar | ahí
allá | over there | adv | grammar | allá
cerca | near | adv | grammar | cerca
lejos | far | adv | grammar | lejos
arriba | up, upstairs | adv | grammar | arriba
abajo | down, downstairs | adv | grammar | abajo
adentro | inside | adv | grammar | adentro
afuera | outside | adv | grammar | afuera
adelante | ahead, forward | adv | grammar | adelante
atrás | behind, back | adv | grammar | atrás
a la derecha | to the right | phr | grammar | derecha
a la izquierda | to the left | phr | grammar | izquierda
derecho | straight ahead | adv | grammar | derecho
bien | well, fine | adv | grammar | bien
mal | badly, bad | adv | grammar | mal
mejor | better | adv | grammar | mejor
peor | worse | adv | grammar | peor
así | like this, so | adv | grammar | así
juntos | together | adv | grammar | junto
solo | alone | adj | grammar | solo
hace | ago | adv | grammar | hacer | Hace dos días = two days ago
hace... que | it has been... since | phr | grammar | hacer | Hace tres meses que no duermo = I haven't slept in three months
hace rato | a while ago | phr | grammar | hacer | Mexico
desde hace | for (duration up to now) | phr | grammar | hacer | Desde hace una semana = for a week
algo | something | pron | grammar | algo
nada | nothing | pron | grammar | nada
alguien | someone | pron | grammar | alguien
nadie | no one | pron | grammar | nadie
alguno | some, any | adj | grammar | alguno
ninguno | none, no | adj | grammar | ninguno
todo | all, everything | pron | grammar | todo
todos | everyone, all | pron | grammar | todo
cada | each, every | adj | grammar | cada
otro | other, another | adj | grammar | otro
otra | other, another (feminine) | adj | grammar | otro
mismo | same | adj | grammar | mismo
varios | several | adj | grammar | vario
algunos | some | adj | grammar | alguno
muchos | many | adj | grammar | mucho
pocos | few | adj | grammar | poco
ambos | both | adj | grammar | ambos
este | this | adj | grammar | este
esta | this (feminine) | adj | grammar | este
ese | that | adj | grammar | ese
esa | that (feminine) | adj | grammar | ese
aquel | that (far away) | adj | grammar | aquel
esto | this (thing) | pron | grammar | esto
eso | that (thing) | pron | grammar | eso
mi | my | adj | grammar | mi
tu | your (informal) | adj | grammar | tu
su | his, her, your (formal), their | adj | grammar | su
nuestro | our | adj | grammar | nuestro
mis | my (plural) | adj | grammar | mi
sus | his, her, your, their (plural) | adj | grammar | su
# pronouns
yo | I | pron | pronouns | yo
tú | you (informal) | pron | pronouns | tú
usted | you (formal) | pron | pronouns | usted | Use with adults you do not know
él | he | pron | pronouns | él
ella | she | pron | pronouns | ella
nosotros | we | pron | pronouns | nosotros
nosotras | we (all women) | pron | pronouns | nosotros
ustedes | you all | pron | pronouns | ustedes | Used in Latin America for both formal and informal plural
ellos | they | pron | pronouns | ellos
ellas | they (all women) | pron | pronouns | ellos
vos | you (informal, Central and South America) | pron | pronouns | vos | Patients from Central America may say "vos" instead of "tú"
vosotros | you all (Spain) | pron | pronouns | vosotros | Not used in Latin America
me | me, to me, myself | pron | pronouns | me
te | you, to you, yourself | pron | pronouns | te
lo | him, it, you (formal) | pron | pronouns | lo
la | her, it, you (formal) | pron | pronouns | lo
le | to him, to her, to you (formal) | pron | pronouns | le
nos | us, ourselves | pron | pronouns | nos
los | them, you all | pron | pronouns | lo
las | them (feminine) | pron | pronouns | lo
les | to them, to you all | pron | pronouns | le
se | himself, herself, themselves, yourself (formal) | pron | pronouns | se
mí | me (after a preposition) | pron | pronouns | mí
conmigo | with me | pron | pronouns | conmigo
contigo | with you (informal) | pron | pronouns | contigo
consigo | with oneself | pron | pronouns | consigo
mío | mine | pron | pronouns | mío
mía | mine (feminine) | pron | pronouns | mío
suyo | yours (formal), his, hers, theirs | pron | pronouns | suyo
nuestro | ours | pron | pronouns | nuestro
quien | who, whom | pron | pronouns | quien
el que | the one who | pron | pronouns | que
lo que | what, that which | pron | pronouns | que
cual | which | pron | pronouns | cual
mismo | self (yo mismo = myself) | pron | pronouns | mismo
Don | Mr. (respectful, before first name) | nm | pronouns | don | Don Luis. Shows respect for older men
Doña | Mrs. (respectful, before first name) | nf | pronouns | doña | Doña Rosa. Shows respect for older women
señor | Mr., sir, man | nm | pronouns | señor
señora | Mrs., ma'am | nf | pronouns | señor | Also "woman" or "wife"
señorita | Miss | nf | pronouns | señorita
licenciado | Mr./Sir (title for a degree holder) | nm | pronouns | licenciado | Common courtesy title in Mexico, for lawyers and professionals
licenciada | Ms./Madam (title for a degree holder) | nf | pronouns | licenciado
doctor | doctor (title, man) | nm | pronouns | doctor
doctora | doctor (title, woman) | nf | pronouns | doctor
mijo | my son / dear (to a young person) | nm | pronouns | mijo | Contraction of "mi hijo". Affectionate. Older patients may use it with you
mija | my daughter / dear | nf | pronouns | mija | Contraction of "mi hija". Affectionate
joven | young man (as address) | nm | pronouns | joven | Polite way to call a young man or woman
# questions
¿qué? | what? | pron | questions | qué
¿quién? | who? | pron | questions | quién
¿quiénes? | who? (plural) | pron | questions | quién
¿cuál? | which? | pron | questions | cuál
¿cuáles? | which? (plural) | pron | questions | cuál
¿cuándo? | when? | adv | questions | cuándo
¿dónde? | where? | adv | questions | dónde
¿adónde? | where to? | adv | questions | adónde
¿de dónde? | where from? | phr | questions | dónde
¿cómo? | how? | adv | questions | cómo
¿por qué? | why? | phr | questions | por qué
¿para qué? | what for? | phr | questions | para qué
¿cuánto? | how much? | adv | questions | cuánto
¿cuánta? | how much? (feminine) | adv | questions | cuánto
¿cuántos? | how many? | adv | questions | cuánto
¿cuántas? | how many? (feminine) | adv | questions | cuánto
¿con quién? | with whom? | phr | questions | quién
¿con qué? | with what? | phr | questions | qué
¿en qué? | in what? | phr | questions | qué
¿a qué hora? | at what time? | phr | questions | hora
¿qué hora es? | what time is it? | phr | questions | hora
¿qué tan...? | how...? (to what degree) | phr | questions | tan | ¿Qué tan seguido? = how often? ¿Qué tan fuerte? = how strong?
¿qué tan seguido? | how often? | phr | questions | seguido | Mexico
¿qué tan fuerte? | how strong / how severe? | phr | questions | fuerte
¿cada cuánto? | how often? (every how long?) | phr | questions | cuánto
¿con qué frecuencia? | how often? | phr | questions | frecuencia
¿desde cuándo? | since when? | phr | questions | cuándo
¿hasta cuándo? | until when? | phr | questions | cuándo
¿cuánto tiempo? | how long? | phr | questions | tiempo
¿cuánto tiempo hace? | how long ago? | phr | questions | hacer
¿cuánto tiempo lleva...? | how long have you been...? | phr | questions | llevar
¿cuántas veces? | how many times? | phr | questions | vez
¿cuántos años tiene? | how old are you? (formal) | phr | questions | tener
¿cuántos años tienes? | how old are you? (informal) | phr | questions | tener
¿cómo se llama? | what is your name? (formal) | phr | questions | llamarse
¿cómo te llamas? | what is your name? (informal) | phr | questions | llamarse
¿de qué? | of what? about what? | phr | questions | qué
¿a quién? | to whom? | phr | questions | quién
¿de quién? | whose? | phr | questions | quién
¿qué pasó? | what happened? | phr | questions | pasar
¿qué le pasa? | what is wrong? (formal) | phr | questions | pasar
¿qué le duele? | what hurts you? | phr | questions | doler
¿qué tiene? | what's wrong? / what do you have? | phr | questions | tener
¿cómo se siente? | how do you feel? | phr | questions | sentir
¿verdad? | right? isn't it? | interj | questions | verdad
¿o no? | or not? | phr | questions | o
¿sí o no? | yes or no? | phr | questions | sí
# numbers
cero | zero | num | numbers | cero
uno | one | num | numbers | uno
dos | two | num | numbers | dos
tres | three | num | numbers | tres
cuatro | four | num | numbers | cuatro
cinco | five | num | numbers | cinco
seis | six | num | numbers | seis
siete | seven | num | numbers | siete
ocho | eight | num | numbers | ocho
nueve | nine | num | numbers | nueve
diez | ten | num | numbers | diez
once | eleven | num | numbers | once
doce | twelve | num | numbers | doce
trece | thirteen | num | numbers | trece
catorce | fourteen | num | numbers | catorce
quince | fifteen | num | numbers | quince
dieciséis | sixteen | num | numbers | dieciséis
diecisiete | seventeen | num | numbers | diecisiete
dieciocho | eighteen | num | numbers | dieciocho
diecinueve | nineteen | num | numbers | diecinueve
veinte | twenty | num | numbers | veinte
veintiuno | twenty-one | num | numbers | veintiuno
treinta | thirty | num | numbers | treinta
cuarenta | forty | num | numbers | cuarenta
cincuenta | fifty | num | numbers | cincuenta
sesenta | sixty | num | numbers | sesenta
setenta | seventy | num | numbers | setenta
ochenta | eighty | num | numbers | ochenta
noventa | ninety | num | numbers | noventa
cien | one hundred | num | numbers | cien
ciento | hundred (in 101 to 199) | num | numbers | cien
doscientos | two hundred | num | numbers | doscientos
quinientos | five hundred | num | numbers | quinientos
mil | one thousand | num | numbers | mil
un millón | one million | num | numbers | millón
segundo | second | adj | numbers | segundo
tercero | third | adj | numbers | tercero
cuarto | fourth | adj | numbers | cuarto
quinto | fifth | adj | numbers | quinto
sexto | sixth | adj | numbers | sexto
séptimo | seventh | adj | numbers | séptimo
octavo | eighth | adj | numbers | octavo
noveno | ninth | adj | numbers | noveno
décimo | tenth | adj | numbers | décimo
medio | half | adj | numbers | medio
mitad | half (noun) | nf | numbers | mitad
media | half (feminine), half past | adj | numbers | medio
tercio | third (fraction) | nm | numbers | tercio
cuarto | quarter | nm | numbers | cuarto | Las tres y cuarto = 3:15
un par de | a couple of | phr | numbers | par
un par | a pair, a couple | phr | numbers | par
una docena | a dozen | phr | numbers | docena
doble | double | adj | numbers | doble
primera vez | first time | phr | numbers | vez
última vez | last time | phr | numbers | vez
por ciento | percent | phr | numbers | ciento
# time
lunes | Monday | nm | time | lunes
martes | Tuesday | nm | time | martes
miércoles | Wednesday | nm | time | miércoles
jueves | Thursday | nm | time | jueves
viernes | Friday | nm | time | viernes
sábado | Saturday | nm | time | sábado
domingo | Sunday | nm | time | domingo
enero | January | nm | time | enero
febrero | February | nm | time | febrero
marzo | March | nm | time | marzo
abril | April | nm | time | abril
mayo | May | nm | time | mayo
junio | June | nm | time | junio
julio | July | nm | time | julio
agosto | August | nm | time | agosto
septiembre | September | nm | time | septiembre
octubre | October | nm | time | octubre
noviembre | November | nm | time | noviembre
diciembre | December | nm | time | diciembre
día | day | nm | time | día
semana | week | nf | time | semana
mes | month | nm | time | mes
año | year | nm | time | año
hora | hour, time | nf | time | hora
minuto | minute | nm | time | minuto
segundo | second (time) | nm | time | segundo
fecha | date | nf | time | fecha
tiempo | time | nm | time | tiempo | Also "weather" in some contexts
rato | a while | nm | time | rato | Un rato = a little while
momento | moment | nm | time | momento
fin de semana | weekend | nm | time | semana
mañana | morning | nf | time | mañana
mañana | tomorrow | adv | time | mañana
tarde | afternoon | nf | time | tarde
noche | night | nf | time | noche
madrugada | early morning (before dawn) | nf | time | madrugada
mediodía | noon | nm | time | mediodía
medianoche | midnight | nf | time | medianoche
por la mañana | in the morning | phr | time | mañana
por la tarde | in the afternoon | phr | time | tarde
por la noche | at night | phr | time | noche
de madrugada | before dawn | phr | time | madrugada
en la mañana | in the morning | phr | time | mañana | Latin American variant
en la noche | at night | phr | time | noche | Latin American variant
hoy | today | adv | time | hoy
ayer | yesterday | adv | time | ayer
anoche | last night | adv | time | anoche
anteayer | the day before yesterday | adv | time | anteayer | Also antier in Mexico
antier | the day before yesterday | adv | time | anteayer | Mexico, colloquial
pasado mañana | the day after tomorrow | phr | time | mañana
esta noche | tonight | phr | time | noche
esta mañana | this morning | phr | time | mañana
esta semana | this week | phr | time | semana
la semana pasada | last week | phr | time | semana
la semana que viene | next week | phr | time | semana
el mes pasado | last month | phr | time | mes
el año pasado | last year | phr | time | año
el año que viene | next year | phr | time | año
la próxima semana | next week | phr | time | semana
el próximo mes | next month | phr | time | mes
cada día | every day | phr | time | día
todos los días | every day | phr | time | día
todas las noches | every night | phr | time | noche
cada ocho días | once a week (every eight days) | phr | time | día | Mexico, means weekly
cada quince días | every two weeks | phr | time | día | Mexico
cada semana | every week | phr | time | semana
cada mes | every month | phr | time | mes
una vez a la semana | once a week | phr | time | semana
dos veces al día | twice a day | phr | time | día
tres veces al día | three times a day | phr | time | día
quincena | two weeks / payday period | nf | time | quincena | Mexico. Many workers are paid every 15 days
catorcena | two-week pay period | nf | time | catorcena | Mexico
ahorita | right now / in a moment | adv | time | ahora | Mexico. Can also mean "a while ago". Ask for the exact time
ahorita mismo | right now | phr | time | ahora
hace un rato | a little while ago | phr | time | rato
hace poco | recently | phr | time | poco
hace mucho | a long time ago | phr | time | mucho
hace mucho tiempo | a long time ago | phr | time | tiempo
hace años | years ago | phr | time | año
recientemente | recently | adv | time | recientemente
últimamente | lately | adv | time | últimamente
actualmente | currently | adv | time | actualmente
por ahora | for now | phr | time | ahora
de niño | as a child | phr | time | niño
de joven | when young | phr | time | joven
cuando era niño | when I was a child | phr | time | ser
la otra vez | the other time | phr | time | vez | Mexico
al día siguiente | the next day | phr | time | día
a la semana | per week, a week | phr | time | semana
al mes | per month, a month | phr | time | mes
al año | per year, a year | phr | time | año
la hora de dormir | bedtime | phr | time | hora
a las... | at (time) | phr | time | hora | A las ocho = at eight
en punto | on the dot (o'clock) | phr | time | punto
antes de comer | before eating | phr | time | comer
después de comer | after eating | phr | time | comer
fin de mes | end of the month | phr | time | mes
siglo | century | nm | time | siglo
década | decade | nf | time | década
temporada | season, period | nf | time | temporada
verano | summer | nm | time | verano
invierno | winter | nm | time | invierno
otoño | fall, autumn | nm | time | otoño
primavera | spring | nf | time | primavera
Navidad | Christmas | nf | time | navidad
cumpleaños | birthday | nm | time | cumpleaños
# people
hombre | man | nm | people | hombre
mujer | woman, wife | nf | people | mujer
señora | lady, woman | nf | people | señora
joven | young person | nm | people | joven
muchacho | boy, young man | nm | people | muchacho
muchacha | girl, young woman | nf | people | muchacho
chavo | guy, kid | nm | people | chavo | Mexico, colloquial
chava | girl | nf | people | chavo | Mexico, colloquial
niño | boy, child | nm | people | niño
niña | girl | nf | people | niño
chamaco | kid | nm | people | chamaco | Mexico, colloquial
bebé | baby | nm | people | bebé
adolescente | teenager | n | people | adolescente
adulto | adult | nm | people | adulto
anciano | elderly man | nm | people | anciano
anciana | elderly woman | nf | people | anciano
persona mayor | older person | nf | people | persona
gente | people | nf | people | gente
persona | person | nf | people | persona
vecino | neighbor (man) | nm | people | vecino
vecina | neighbor (woman) | nf | people | vecino
amigo | friend (man) | nm | people | amigo
amiga | friend (woman) | nf | people | amigo
compañero de trabajo | coworker | nm | people | compañero
compañera de trabajo | coworker (woman) | nf | people | compañero
compañero de cuarto | roommate | nm | people | compañero
compañero | companion, classmate, coworker | nm | people | compañero
jefe | boss | nm | people | jefe
jefa | boss (woman) | nf | people | jefe
patrón | boss, employer | nm | people | patrón | Mexico, common among laborers
maestro | teacher | nm | people | maestro
maestra | teacher (woman) | nf | people | maestro
estudiante | student | n | people | estudiante
novio | boyfriend, fiancé | nm | people | novio
novia | girlfriend, fiancée | nf | people | novio
pareja | partner, couple | nf | people | pareja
esposo | husband | nm | people | esposo
esposa | wife | nf | people | esposo
ex | ex (former partner) | n | people | ex
expareja | ex-partner | nf | people | pareja
amante | lover | n | people | amante
pastor | pastor | nm | people | pastor
padre | priest, father | nm | people | padre | Context decides priest or father
cura | priest | nm | people | cura | Colloquial
curandero | traditional healer | nm | people | curandero
curandera | traditional healer (woman) | nf | people | curandero
policía | police officer | n | people | policía
agente | officer, agent | n | people | agente
juez | judge | n | people | juez
abogado | lawyer | nm | people | abogado
abogada | lawyer (woman) | nf | people | abogado
enfermero | nurse (man) | nm | people | enfermero
enfermera | nurse (woman) | nf | people | enfermero
trabajador social | social worker (man) | nm | people | trabajador
trabajadora social | social worker (woman) | nf | people | trabajador
intérprete | interpreter | n | people | intérprete
traductor | translator | nm | people | traductor
doctor | doctor (man) | nm | people | doctor
doctora | doctor (woman) | nf | people | doctor
médico | physician | nm | people | médico
psiquiatra | psychiatrist | n | people | psiquiatra
psicólogo | psychologist | nm | people | psicólogo
psicóloga | psychologist (woman) | nf | people | psicólogo
consejero | counselor | nm | people | consejero
terapeuta | therapist | n | people | terapeuta
paciente | patient | n | people | paciente
farmacéutico | pharmacist | nm | people | farmacéutico
guardia | guard | n | people | guardia
extraño | stranger | nm | people | extraño
desconocido | stranger, unknown person | nm | people | desconocido
huésped | guest | n | people | huésped
dueño | owner | nm | people | dueño
cuidador | caregiver | nm | people | cuidador
cuidadora | caregiver (woman) | nf | people | cuidador
tutor | guardian | nm | people | tutor
representante | representative | n | people | representante
migrante | migrant | n | people | migrante
inmigrante | immigrant | n | people | inmigrante
paisano | fellow countryman | nm | people | paisano | Mexico and Central America
# family
familia | family | nf | family | familia
pariente | relative | n | family | pariente
madre | mother | nf | family | madre
mamá | mom | nf | family | madre
mami | mommy, mom | nf | family | madre
padre | father | nm | family | padre
papá | dad | nm | family | padre
papi | daddy, dad | nm | family | padre
padres | parents | nm | family | padre
hijo | son | nm | family | hijo
hija | daughter | nf | family | hijo
hijos | children, sons | nm | family | hijo
hermano | brother | nm | family | hermano
hermana | sister | nf | family | hermano
hermanos | siblings | nm | family | hermano
gemelo | twin | nm | family | gemelo
abuelo | grandfather | nm | family | abuelo
abuela | grandmother | nf | family | abuelo
abuelos | grandparents | nm | family | abuelo
abuelito | grandpa | nm | family | abuelo | Affectionate
abuelita | grandma | nf | family | abuelo | Affectionate
bisabuelo | great-grandfather | nm | family | bisabuelo
bisabuela | great-grandmother | nf | family | bisabuelo
nieto | grandson | nm | family | nieto
nieta | granddaughter | nf | family | nieto
bisnieto | great-grandson | nm | family | bisnieto
tío | uncle | nm | family | tío
tía | aunt | nf | family | tío
sobrino | nephew | nm | family | sobrino
sobrina | niece | nf | family | sobrino
primo | cousin (male) | nm | family | primo
prima | cousin (female) | nf | family | primo
marido | husband | nm | family | marido
mi vieja | my wife / my mom | nf | family | vieja | Colloquial, affectionate. Context decides
mi viejo | my husband / my dad | nm | family | viejo | Colloquial, affectionate. Context decides
mi señora | my wife | nf | family | señora | Colloquial
mi hombre | my husband | nm | family | hombre | Colloquial
suegro | father-in-law | nm | family | suegro
suegra | mother-in-law | nf | family | suegro
yerno | son-in-law | nm | family | yerno
nuera | daughter-in-law | nf | family | nuera
cuñado | brother-in-law | nm | family | cuñado
cuñada | sister-in-law | nf | family | cuñado
padrastro | stepfather | nm | family | padrastro
madrastra | stepmother | nf | family | madrastra
hijastro | stepson | nm | family | hijastro
hijastra | stepdaughter | nf | family | hijastro
hermanastro | stepbrother, half-brother | nm | family | hermanastro
hermanastra | stepsister, half-sister | nf | family | hermanastro
medio hermano | half-brother | nm | family | hermano
media hermana | half-sister | nf | family | hermano
padrino | godfather | nm | family | padrino
madrina | godmother | nf | family | padrino
ahijado | godson | nm | family | ahijado
ahijada | goddaughter | nf | family | ahijado
compadre | co-father (godparent link, close friend) | nm | family | compadre | Close bond between parents and godparents
comadre | co-mother (godparent link, close friend) | nf | family | compadre | Close bond, often a key support person
hijo adoptivo | adopted son | nm | family | hijo
hijo único | only child | nm | family | hijo
hija única | only child (daughter) | nf | family | hijo
mayor | older, oldest | adj | family | mayor
menor | younger, youngest | adj | family | menor
el mayor | the oldest (boy) | nm | family | mayor
el menor | the youngest (boy) | nm | family | menor
viudo | widower | nm | family | viudo
viuda | widow | nf | family | viudo
soltero | single (man) | adj | family | soltero
soltera | single (woman) | adj | family | soltero
casado | married (man) | adj | family | casado
casada | married (woman) | adj | family | casado
divorciado | divorced (man) | adj | family | divorciado
divorciada | divorced (woman) | adj | family | divorciado
separado | separated | adj | family | separado
unión libre | living together, not married | nf | family | unión libre | Common in Latin America
embarazada | pregnant | adj | family | embarazada | False friend: not "embarrassed"
huérfano | orphan | nm | family | huérfano
# adjectives
bueno | good | adj | adjectives | bueno
buena | good (feminine) | adj | adjectives | bueno
malo | bad | adj | adjectives | malo
mala | bad (feminine) | adj | adjectives | malo
grande | big, large | adj | adjectives | grande
chico | small | adj | adjectives | chico | Also "boy"
pequeño | small | adj | adjectives | pequeño
mucho | a lot of | adj | adjectives | mucho
poco | little, few | adj | adjectives | poco
nuevo | new | adj | adjectives | nuevo
viejo | old | adj | adjectives | viejo
joven | young | adj | adjectives | joven
antiguo | old, ancient | adj | adjectives | antiguo
alto | tall, high | adj | adjectives | alto
bajo | short, low | adj | adjectives | bajo
largo | long | adj | adjectives | largo
corto | short | adj | adjectives | corto
gordo | fat | adj | adjectives | gordo | Can be offensive. Used affectionately in Mexico
flaco | thin | adj | adjectives | flaco
delgado | thin, slim | adj | adjectives | delgado
fuerte | strong | adj | adjectives | fuerte
débil | weak | adj | adjectives | débil
pesado | heavy | adj | adjectives | pesado
ligero | light | adj | adjectives | ligero
rápido | fast | adj | adjectives | rápido
lento | slow | adj | adjectives | lento
tranquilo | calm, quiet | adj | adjectives | tranquilo
nervioso | nervous | adj | adjectives | nervioso
cansado | tired | adj | adjectives | cansado
cansada | tired (feminine) | adj | adjectives | cansado
despierto | awake | adj | adjectives | despierto
dormido | asleep | adj | adjectives | dormido
lleno | full | adj | adjectives | lleno
vacío | empty | adj | adjectives | vacío
limpio | clean | adj | adjectives | limpio
sucio | dirty | adj | adjectives | sucio
solo | alone, lonely | adj | adjectives | solo
sola | alone (feminine) | adj | adjectives | solo
igual | equal, the same | adj | adjectives | igual
diferente | different | adj | adjectives | diferente
raro | strange, odd | adj | adjectives | raro
extraño | strange | adj | adjectives | extraño
normal | normal | adj | adjectives | normal
común | common | adj | adjectives | común
difícil | difficult | adj | adjectives | difícil
fácil | easy | adj | adjectives | fácil
posible | possible | adj | adjectives | posible
imposible | impossible | adj | adjectives | imposible
importante | important | adj | adjectives | importante
necesario | necessary | adj | adjectives | necesario
seguro | safe, sure | adj | adjectives | seguro
peligroso | dangerous | adj | adjectives | peligroso
cierto | true, certain | adj | adjectives | cierto
verdadero | true | adj | adjectives | verdadero
falso | false | adj | adjectives | falso
correcto | correct | adj | adjectives | correcto
claro | clear | adj | adjectives | claro
oscuro | dark | adj | adjectives | oscuro
fuerte | loud, intense | adj | adjectives | fuerte
suave | soft, gentle, mild | adj | adjectives | suave
duro | hard | adj | adjectives | duro
caliente | hot | adj | adjectives | caliente
frío | cold | adj | adjectives | frío
tibio | warm, lukewarm | adj | adjectives | tibio
mojado | wet | adj | adjectives | mojado
seco | dry | adj | adjectives | seco
ocupado | busy | adj | adjectives | ocupado
libre | free | adj | adjectives | libre
listo | ready, smart | adj | adjectives | listo | Listo with estar = ready, with ser = clever
preparado | prepared | adj | adjectives | preparado
cómodo | comfortable | adj | adjectives | cómodo
incómodo | uncomfortable | adj | adjectives | incómodo
lindo | pretty, nice | adj | adjectives | lindo
bonito | pretty | adj | adjectives | bonito
feo | ugly | adj | adjectives | feo
amable | kind | adj | adjectives | amable
tímido | shy | adj | adjectives | tímido
callado | quiet | adj | adjectives | callado
hablador | talkative | adj | adjectives | hablador
tranquila | calm (feminine) | adj | adjectives | tranquilo
ciego | blind | adj | adjectives | ciego
sordo | deaf | adj | adjectives | sordo
mudo | mute | adj | adjectives | mudo
último | last | adj | adjectives | último
siguiente | next | adj | adjectives | siguiente
anterior | previous | adj | adjectives | anterior
próximo | next | adj | adjectives | próximo
pasado | past, last | adj | adjectives | pasado
presente | present | adj | adjectives | presente
cada | each | adj | adjectives | cada
todo | whole | adj | adjectives | todo
ocupada | busy (feminine) | adj | adjectives | ocupado
casero | homemade | adj | adjectives | casero
# modals
querer | to want, to love | v | modals | querer
quiero | I want | v | modals | querer
quieres | you want (informal) | v | modals | querer
quiere | he/she wants, you want (formal) | v | modals | querer
queremos | we want | v | modals | querer
quieren | they want, you all want | v | modals | querer
quisiera | I would like | v | modals | querer | Polite
necesitar | to need | v | modals | necesitar
necesito | I need | v | modals | necesitar
necesita | he/she needs, you need (formal) | v | modals | necesitar
necesitamos | we need | v | modals | necesitar
poder | to be able to, can | v | modals | poder
puedo | I can | v | modals | poder
puedes | you can (informal) | v | modals | poder
puede | he/she can, you can (formal) | v | modals | poder
podemos | we can | v | modals | poder
pueden | they can, you all can | v | modals | poder
podría | could, would be able to | v | modals | poder
no puedo | I can't | phr | modals | poder
deber | to have to, should, to owe | v | modals | deber
debo | I should, I owe | v | modals | deber
debe | he/she should, you should (formal) | v | modals | deber
debería | should (conditional) | v | modals | deber
tener que | to have to | phr | modals | tener
tengo que | I have to | phr | modals | tener
tiene que | he/she has to, you have to (formal) | phr | modals | tener
tenemos que | we have to | phr | modals | tener
hay que | one must, it's necessary to | phr | modals | haber
hace falta | is needed | phr | modals | hacer
saber | to know (a fact), to know how to | v | modals | saber
sé | I know | v | modals | saber
sabes | you know (informal) | v | modals | saber
sabe | he/she knows, you know (formal) | v | modals | saber
sabemos | we know | v | modals | saber
saben | they know, you all know | v | modals | saber
soler | to usually do | v | modals | soler
suelo | I usually | v | modals | soler | Suelo dormir mal = I usually sleep badly
suele | he/she usually, you usually (formal) | v | modals | soler
gustar | to be pleasing, to like | v | modals | gustar
me gusta | I like it | phr | modals | gustar
me gustan | I like them | phr | modals | gustar
le gusta | he/she likes, you like (formal) | phr | modals | gustar
no me gusta | I don't like it | phr | modals | gustar
me gustaría | I would like | phr | modals | gustar
preferir | to prefer | v | modals | preferir
prefiero | I prefer | v | modals | preferir
prefiere | he/she prefers, you prefer (formal) | v | modals | preferir
desear | to wish, to want | v | modals | desear
deseo | I wish | v | modals | desear
tratar de | to try to | phr | modals | tratar
trato de | I try to | phr | modals | tratar
intentar | to try, to attempt | v | modals | intentar
acabar de | to have just | phr | modals | acabar | Acabo de comer = I just ate
acabo de | I have just | phr | modals | acabar
ir a | to be going to | phr | modals | ir | Voy a dormir = I'm going to sleep
voy a | I am going to | phr | modals | ir
va a | he/she is going to, you are going to | phr | modals | ir
vamos a | we are going to / let's | phr | modals | ir
volver a | to do again | phr | modals | volver
seguir | to continue, to keep on | v | modals | seguir
sigo | I continue | v | modals | seguir
sigue | he/she continues, you continue (formal) | v | modals | seguir
empezar a | to begin to | phr | modals | empezar
dejar de | to stop doing | phr | modals | dejar | Dejé de comer = I stopped eating
deje de | stop (formal command) | phr | modals | dejar
# verbs (infinitives and present forms)
ser | to be (permanent) | v | verbs | ser
soy | I am | v | verbs | ser
eres | you are (informal) | v | verbs | ser
es | he/she is, you are (formal) | v | verbs | ser
somos | we are | v | verbs | ser
son | they are, you all are | v | verbs | ser
era | was | v | verbs | ser
fue | was, went | v | verbs | ser
estar | to be (state, place) | v | verbs | estar
estoy | I am | v | verbs | estar
estás | you are (informal) | v | verbs | estar
está | he/she is, you are (formal) | v | verbs | estar
estamos | we are | v | verbs | estar
están | they are, you all are | v | verbs | estar
estaba | was | v | verbs | estar
tener | to have | v | verbs | tener
tengo | I have | v | verbs | tener
tienes | you have (informal) | v | verbs | tener
tiene | he/she has, you have (formal) | v | verbs | tener
tenemos | we have | v | verbs | tener
tienen | they have, you all have | v | verbs | tener
tenía | had | v | verbs | tener
tuve | I had | v | verbs | tener
haber | to have (auxiliary), there is | v | verbs | haber
hay | there is, there are | v | verbs | haber
había | there was, there were | v | verbs | haber
he | I have (auxiliary) | v | verbs | haber
ha | he/she has (auxiliary) | v | verbs | haber
hemos | we have (auxiliary) | v | verbs | haber
hacer | to do, to make | v | verbs | hacer
hago | I do, I make | v | verbs | hacer
haces | you do (informal) | v | verbs | hacer
hace | he/she does, you do (formal) | v | verbs | hacer
hacemos | we do | v | verbs | hacer
hacen | they do, you all do | v | verbs | hacer
hice | I did | v | verbs | hacer
hizo | he/she did | v | verbs | hacer
decir | to say, to tell | v | verbs | decir
digo | I say | v | verbs | decir
dices | you say (informal) | v | verbs | decir
dice | he/she says, you say (formal) | v | verbs | decir
decimos | we say | v | verbs | decir
dicen | they say, you all say | v | verbs | decir
dijo | he/she said | v | verbs | decir
dije | I said | v | verbs | decir
ir | to go | v | verbs | ir
voy | I go | v | verbs | ir
vas | you go (informal) | v | verbs | ir
va | he/she goes, you go (formal) | v | verbs | ir
vamos | we go | v | verbs | ir
van | they go, you all go | v | verbs | ir
iba | was going | v | verbs | ir
irse | to leave, to go away | v | verbs | irse
me voy | I'm leaving | phr | verbs | irse
venir | to come | v | verbs | venir
vengo | I come | v | verbs | venir
vienes | you come (informal) | v | verbs | venir
viene | he/she comes, you come (formal) | v | verbs | venir
venimos | we come | v | verbs | venir
vienen | they come, you all come | v | verbs | venir
vino | he/she came | v | verbs | venir
venga | come (formal command) | v | verbs | venir
poner | to put | v | verbs | poner
pongo | I put | v | verbs | poner
pones | you put (informal) | v | verbs | poner
pone | he/she puts, you put (formal) | v | verbs | poner
ponerse | to put on, to become | v | verbs | ponerse
me pongo | I put on, I become | phr | verbs | ponerse
salir | to leave, to go out | v | verbs | salir
salgo | I leave | v | verbs | salir
sales | you leave (informal) | v | verbs | salir
sale | he/she leaves, you leave (formal) | v | verbs | salir
salimos | we leave | v | verbs | salir
salen | they leave, you all leave | v | verbs | salir
oír | to hear | v | verbs | oír
oigo | I hear | v | verbs | oír
oyes | you hear (informal) | v | verbs | oír
oye | he/she hears, you hear (formal) | v | verbs | oír | Also "hey, listen" (informal)
oímos | we hear | v | verbs | oír
oyen | they hear, you all hear | v | verbs | oír
ver | to see | v | verbs | ver
veo | I see | v | verbs | ver
ves | you see (informal) | v | verbs | ver
ve | he/she sees, you see (formal) | v | verbs | ver
vemos | we see | v | verbs | ver
ven | they see, you all see | v | verbs | ver
vi | I saw | v | verbs | ver
vio | he/she saw | v | verbs | ver
mirar | to look at, to watch | v | verbs | mirar
miro | I look | v | verbs | mirar
escuchar | to listen | v | verbs | escuchar
escucho | I listen, I hear | v | verbs | escuchar
sentir | to feel | v | verbs | sentir
siento | I feel | v | verbs | sentir
sientes | you feel (informal) | v | verbs | sentir
siente | he/she feels, you feel (formal) | v | verbs | sentir
sentimos | we feel | v | verbs | sentir
sienten | they feel, you all feel | v | verbs | sentir
sentirse | to feel (a state) | v | verbs | sentirse
me siento | I feel | phr | verbs | sentirse | Me siento mal = I feel bad
se siente | he/she feels, you feel (formal) | phr | verbs | sentirse
dormir | to sleep | v | verbs | dormir
duermo | I sleep | v | verbs | dormir
duermes | you sleep (informal) | v | verbs | dormir
duerme | he/she sleeps, you sleep (formal) | v | verbs | dormir
dormimos | we sleep | v | verbs | dormir
duermen | they sleep, you all sleep | v | verbs | dormir
dormí | I slept | v | verbs | dormir
durmió | he/she slept | v | verbs | dormir
dormirse | to fall asleep | v | verbs | dormirse
me duermo | I fall asleep | phr | verbs | dormirse
poder | can, to be able | v | verbs | poder
querer | to want | v | verbs | querer
saber | to know | v | verbs | saber
conocer | to know (a person or place) | v | verbs | conocer
conozco | I know (a person) | v | verbs | conocer
conoce | he/she knows, you know (formal) | v | verbs | conocer
creer | to believe, to think | v | verbs | creer
creo | I believe, I think | v | verbs | creer
cree | he/she believes, you believe (formal) | v | verbs | creer
pensar | to think | v | verbs | pensar
pienso | I think | v | verbs | pensar
piensa | he/she thinks, you think (formal) | v | verbs | pensar
recordar | to remember | v | verbs | recordar
recuerdo | I remember | v | verbs | recordar
recuerda | he/she remembers, you remember (formal) | v | verbs | recordar
olvidar | to forget | v | verbs | olvidar
olvido | I forget | v | verbs | olvidar
olvidarse | to forget (it slipped my mind) | v | verbs | olvidarse
se me olvidó | I forgot (it slipped my mind) | phr | verbs | olvidarse
entender | to understand | v | verbs | entender
entiendo | I understand | v | verbs | entender
entiende | he/she understands, you understand (formal) | v | verbs | entender
hablar | to speak, to talk | v | verbs | hablar
hablo | I speak | v | verbs | hablar
habla | he/she speaks, you speak (formal) | v | verbs | hablar
platicar | to chat, to talk | v | verbs | platicar | Mexico and Central America
plático | I chat, I talk | v | verbs | platicar
conversar | to converse | v | verbs | conversar
contar | to tell, to count | v | verbs | contar
cuento | I tell, I count | v | verbs | contar
cuenta | he/she tells, you tell (formal) | v | verbs | contar
preguntar | to ask (a question) | v | verbs | preguntar
pregunto | I ask | v | verbs | preguntar
pedir | to ask for, to request | v | verbs | pedir
pido | I ask for | v | verbs | pedir
pide | he/she asks for, you ask for (formal) | v | verbs | pedir
responder | to answer | v | verbs | responder
contestar | to answer | v | verbs | contestar
llamar | to call | v | verbs | llamar
llamo | I call | v | verbs | llamar
llamarse | to be named | v | verbs | llamarse
me llamo | my name is | phr | verbs | llamarse
se llama | his/her name is, your name is (formal) | phr | verbs | llamarse
dar | to give | v | verbs | dar
doy | I give | v | verbs | dar
da | he/she gives, you give (formal) | v | verbs | dar
dan | they give, you all give | v | verbs | dar
tomar | to take, to drink | v | verbs | tomar
tomo | I take, I drink | v | verbs | tomar
toma | he/she takes/drinks, you take/drink (formal) | v | verbs | tomar
traer | to bring | v | verbs | traer
traigo | I bring | v | verbs | traer
trae | he/she brings, you bring (formal) | v | verbs | traer
llevar | to take along, to carry, to wear | v | verbs | llevar
llevo | I carry, I wear | v | verbs | llevar
lleva | he/she carries/wears, you carry/wear (formal) | v | verbs | llevar
dejar | to leave (behind), to let, to quit | v | verbs | dejar
dejo | I leave, I let, I quit | v | verbs | dejar
deja | he/she leaves/lets/quits, you leave (formal) | v | verbs | dejar
buscar | to look for | v | verbs | buscar
busco | I look for | v | verbs | buscar
encontrar | to find | v | verbs | encontrar
encuentro | I find | v | verbs | encontrar
usar | to use | v | verbs | usar
uso | I use | v | verbs | usar
usa | he/she uses, you use (formal) | v | verbs | usar
trabajar | to work | v | verbs | trabajar
trabajo | I work | v | verbs | trabajar
trabaja | he/she works, you work (formal) | v | verbs | trabajar
vivir | to live | v | verbs | vivir
vivo | I live | v | verbs | vivir
vive | he/she lives, you live (formal) | v | verbs | vivir
viven | they live, you all live | v | verbs | vivir
morir | to die | v | verbs | morir
muero | I die | v | verbs | morir
muere | he/she dies | v | verbs | morir
murió | he/she died | v | verbs | morir
nacer | to be born | v | verbs | nacer
nací | I was born | v | verbs | nacer
comer | to eat | v | verbs | comer
como | I eat | v | verbs | comer
come | he/she eats, you eat (formal) | v | verbs | comer
comemos | we eat | v | verbs | comer
beber | to drink | v | verbs | beber
bebo | I drink | v | verbs | beber
bebe | he/she drinks, you drink (formal) | v | verbs | beber
tomar | to drink (alcohol) | v | verbs | tomar | Mexico: "tomar" alone often means drinking alcohol
cocinar | to cook | v | verbs | cocinar
lavar | to wash | v | verbs | lavar
lavarse | to wash oneself | v | verbs | lavarse
bañarse | to bathe | v | verbs | bañarse
me baño | I bathe | phr | verbs | bañarse
vestirse | to get dressed | v | verbs | vestirse
me visto | I get dressed | phr | verbs | vestirse
levantarse | to get up | v | verbs | levantarse
me levanto | I get up | phr | verbs | levantarse
acostarse | to lie down, to go to bed | v | verbs | acostarse
me acuesto | I go to bed | phr | verbs | acostarse
despertarse | to wake up | v | verbs | despertarse
me despierto | I wake up | phr | verbs | despertarse
despertar | to wake (someone) | v | verbs | despertar
sentarse | to sit down | v | verbs | sentarse
me siento | I sit down | phr | verbs | sentarse | Same form as "I feel". Context decides
siéntese | sit down (formal command) | phr | verbs | sentarse
pararse | to stand up | v | verbs | pararse | Mexico
párese | stand up (formal command) | phr | verbs | pararse
caminar | to walk | v | verbs | caminar
camino | I walk | v | verbs | caminar
correr | to run | v | verbs | correr
corro | I run | v | verbs | correr
subir | to go up, to get on | v | verbs | subir
bajar | to go down, to get off, to lose | v | verbs | bajar
entrar | to enter | v | verbs | entrar
llegar | to arrive | v | verbs | llegar
llego | I arrive | v | verbs | llegar
regresar | to return | v | verbs | regresar
regreso | I return | v | verbs | regresar
volver | to return, to come back | v | verbs | volver
vuelvo | I return | v | verbs | volver
quedarse | to stay | v | verbs | quedarse
me quedo | I stay | phr | verbs | quedarse
esperar | to wait, to hope | v | verbs | esperar
espero | I wait, I hope | v | verbs | esperar
empezar | to begin | v | verbs | empezar
empiezo | I begin | v | verbs | empezar
empieza | he/she begins, it begins | v | verbs | empezar
comenzar | to start | v | verbs | comenzar
terminar | to finish | v | verbs | terminar
parar | to stop | v | verbs | parar
cambiar | to change | v | verbs | cambiar
ayudar | to help | v | verbs | ayudar
ayudo | I help | v | verbs | ayudar
ayuda | he/she helps, you help (formal) | v | verbs | ayudar
cuidar | to take care of | v | verbs | cuidar
cuidarse | to take care of oneself | v | verbs | cuidarse
pasar | to happen, to pass, to spend (time) | v | verbs | pasar
pasa | it happens, he/she passes | v | verbs | pasar
ocurrir | to occur | v | verbs | ocurrir
parecer | to seem | v | verbs | parecer
parece | it seems | v | verbs | parecer
quedar | to remain, to be left | v | verbs | quedar
doler | to hurt | v | verbs | doler
me duele | it hurts me | phr | verbs | doler
me duelen | they hurt me | phr | verbs | doler
le duele | it hurts him/her/you (formal) | phr | verbs | doler
dolió | it hurt | v | verbs | doler
llorar | to cry | v | verbs | llorar
lloro | I cry | v | verbs | llorar
llora | he/she cries, you cry (formal) | v | verbs | llorar
reír | to laugh | v | verbs | reír
reírse | to laugh | v | verbs | reírse
gritar | to shout | v | verbs | gritar
grito | I shout | v | verbs | gritar
escribir | to write | v | verbs | escribir
leer | to read | v | verbs | leer
firmar | to sign | v | verbs | firmar
firme aquí | sign here | phr | verbs | firmar
abrir | to open | v | verbs | abrir
cerrar | to close | v | verbs | cerrar
cierro | I close | v | verbs | cerrar
mostrar | to show | v | verbs | mostrar
muestre | show (formal command) | v | verbs | mostrar
enseñar | to teach, to show | v | verbs | enseñar
aprender | to learn | v | verbs | aprender
estudiar | to study | v | verbs | estudiar
jugar | to play | v | verbs | jugar
juego | I play | v | verbs | jugar
cantar | to sing | v | verbs | cantar
bailar | to dance | v | verbs | bailar
manejar | to drive | v | verbs | manejar | Mexico and Latin America
conducir | to drive | v | verbs | conducir | Spain, formal elsewhere
comprar | to buy | v | verbs | comprar
vender | to sell | v | verbs | vender
pagar | to pay | v | verbs | pagar
pago | I pay | v | verbs | pagar
gastar | to spend | v | verbs | gastar
perder | to lose | v | verbs | perder
pierdo | I lose | v | verbs | perder
pierde | he/she loses, you lose (formal) | v | verbs | perder
ganar | to win, to earn | v | verbs | ganar
gano | I earn, I win | v | verbs | ganar
mejorar | to improve | v | verbs | mejorar
empeorar | to get worse | v | verbs | empeorar
sufrir | to suffer | v | verbs | sufrir
sufro | I suffer | v | verbs | sufrir
ayudarse | to help oneself | v | verbs | ayudarse
cuidarme | to take care of myself | v | verbs | cuidarse
visitar | to visit | v | verbs | visitar
invitar | to invite | v | verbs | invitar
casarse | to get married | v | verbs | casarse
separarse | to separate | v | verbs | separarse
pelear | to fight, to argue | v | verbs | pelear
peleo | I fight | v | verbs | pelear
discutir | to argue, to discuss | v | verbs | discutir
mandar | to send | v | verbs | mandar
mando | I send | v | verbs | mandar
recibir | to receive | v | verbs | recibir
guardar | to keep, to save, to put away | v | verbs | guardar
acordarse | to remember | v | verbs | acordarse | Me acuerdo = I remember
me acuerdo | I remember | phr | verbs | acordarse
`);
