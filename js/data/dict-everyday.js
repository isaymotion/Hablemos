/* Dictionary part 2: everyday life (body, food, home, money, places).
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician once populated.
   Format per line: spanish | english | part of speech | category | root (optional: lemma/infinitive) | note (optional)
   pos: nm nf n v adj adv pron part conj prep interj num phr. Categories: see App.CATS in js/core.js. */
window.DICT_RAW = window.DICT_RAW || [];
window.DICT_RAW.push(`
# body
cuerpo | body | nm | body | cuerpo
cabeza | head | nf | body | cabeza
cerebro | brain | nm | body | cerebro
cara | face | nf | body | cara
frente | forehead | nf | body | frente
pelo | hair | nm | body | pelo
cabello | hair | nm | body | cabello
ojo | eye | nm | body | ojo
ojos | eyes | nm | body | ojo
oreja | outer ear | nf | body | oreja
oído | ear (inner), hearing | nm | body | oído | Patients say "me duele el oído" for ear pain
nariz | nose | nf | body | nariz
boca | mouth | nf | body | boca
labio | lip | nm | body | labio
diente | tooth | nm | body | diente
muela | molar, back tooth | nf | body | muela
lengua | tongue | nf | body | lengua
garganta | throat | nf | body | garganta
cuello | neck | nm | body | cuello
nuca | back of the neck | nf | body | nuca
hombro | shoulder | nm | body | hombro
brazo | arm | nm | body | brazo
codo | elbow | nm | body | codo
muñeca | wrist | nf | body | muñeca
mano | hand | nf | body | mano
dedo | finger, toe | nm | body | dedo
dedo del pie | toe | nm | body | dedo
uña | nail | nf | body | uña
pulgar | thumb | nm | body | pulgar
pecho | chest | nm | body | pecho
seno | breast | nm | body | seno
corazón | heart | nm | body | corazón
pulmón | lung | nm | body | pulmón
pulmones | lungs | nm | body | pulmón
costilla | rib | nf | body | costilla
espalda | back | nf | body | espalda
columna | spine | nf | body | columna
estómago | stomach | nm | body | estómago
panza | belly, stomach | nf | body | panza | Colloquial, common in Mexico
barriga | belly | nf | body | barriga
vientre | abdomen, womb | nm | body | vientre
abdomen | abdomen | nm | body | abdomen
ombligo | navel | nm | body | ombligo
hígado | liver | nm | body | hígado
riñón | kidney | nm | body | riñón
riñones | kidneys | nm | body | riñón | Patients also say "riñones" for the lower back
intestino | intestine, bowel | nm | body | intestino
vejiga | bladder | nf | body | vejiga
vesícula | gallbladder | nf | body | vesícula
páncreas | pancreas | nm | body | páncreas
cintura | waist | nf | body | cintura
cadera | hip | nf | body | cadera
pierna | leg | nf | body | pierna
muslo | thigh | nm | body | muslo
rodilla | knee | nf | body | rodilla
espinilla | shin | nf | body | espinilla
pantorrilla | calf | nf | body | pantorrilla
tobillo | ankle | nm | body | tobillo
pie | foot | nm | body | pie
talón | heel | nm | body | talón
planta del pie | sole of the foot | nf | body | planta
piel | skin | nf | body | piel
sangre | blood | nf | body | sangre
hueso | bone | nm | body | hueso
músculo | muscle | nm | body | músculo
nervio | nerve | nm | body | nervio
vena | vein | nf | body | vena
articulación | joint | nf | body | articulación
cicatriz | scar | nf | body | cicatriz
herida | wound | nf | body | herida
moretón | bruise | nm | body | moretón
cardenal | bruise | nm | body | cardenal
mejilla | cheek | nf | body | mejilla
barbilla | chin | nf | body | barbilla
mentón | chin | nm | body | mentón
mandíbula | jaw | nf | body | mandíbula
sien | temple | nf | body | sien
ceja | eyebrow | nf | body | ceja
pestaña | eyelash | nf | body | pestaña
párpado | eyelid | nm | body | párpado
axila | armpit | nf | body | axila
trasero | buttocks | nm | body | trasero
nalga | buttock | nf | body | nalga
genitales | genitals | nm | body | genitales
rostro | face | nm | body | rostro | Formal
lado izquierdo | left side | nm | body | lado
lado derecho | right side | nm | body | lado
# food
comida | food, meal, lunch | nf | food | comida | In Mexico "la comida" is the main midday meal
desayuno | breakfast | nm | food | desayuno
almuerzo | lunch | nm | food | almuerzo | Mexico: a late-morning snack. Elsewhere: lunch
cena | dinner | nf | food | cena
merienda | snack | nf | food | merienda
botana | snack | nf | food | botana | Mexico
antojito | little snack | nm | food | antojito | Mexico
desayunar | to eat breakfast | v | food | desayunar
almorzar | to eat lunch | v | food | almorzar
cenar | to eat dinner | v | food | cenar
tomar | to drink | v | food | tomar
probar | to taste, to try | v | food | probar
tener hambre | to be hungry | phr | food | hambre
tengo hambre | I am hungry | phr | food | hambre
hambre | hunger | nf | food | hambre
tener sed | to be thirsty | phr | food | sed
tengo sed | I am thirsty | phr | food | sed
sed | thirst | nf | food | sed
apetito | appetite | nm | food | apetito
ganas de comer | desire to eat | phr | food | ganas
agua | water | nf | food | agua
leche | milk | nf | food | leche
café | coffee | nm | food | café
té | tea | nm | food | té
jugo | juice | nm | food | jugo
refresco | soda, soft drink | nm | food | refresco | Mexico
soda | soda | nf | food | soda
gaseosa | soda | nf | food | gaseosa | South America and Central America
cerveza | beer | nf | food | cerveza
chela | beer | nf | food | chela | Mexico, slang
caguama | large bottle of beer (about 32 oz) | nf | food | caguama | Mexico, slang. Ask how many caguamas per day
cartón | case of beer | nm | food | cartón | Mexico, a case of 12 or 24
six | six-pack | nm | food | six | Mexico, English loan
tequila | tequila | nm | food | tequila
mezcal | mezcal | nm | food | mezcal
vino | wine | nm | food | vino
ron | rum | nm | food | ron
vodka | vodka | nm | food | vodka
whisky | whiskey | nm | food | whisky
aguardiente | liquor (cane spirit) | nm | food | aguardiente
trago | drink, shot | nm | food | trago
copa | glass, drink | nf | food | copa
botella | bottle | nf | food | botella
vaso | glass | nm | food | vaso
taza | cup | nf | food | taza
pan | bread | nm | food | pan
pan dulce | sweet bread | nm | food | pan
tortilla | tortilla | nf | food | tortilla
frijoles | beans | nm | food | frijol
frijol | bean | nm | food | frijol
arroz | rice | nm | food | arroz
pasta | pasta | nf | food | pasta
sopa | soup | nf | food | sopa
caldo | broth | nm | food | caldo
pollo | chicken | nm | food | pollo
carne | meat, beef | nf | food | carne
res | beef | nf | food | res
puerco | pork | nm | food | puerco
cerdo | pork, pig | nm | food | cerdo
pescado | fish | nm | food | pescado
camarón | shrimp | nm | food | camarón
huevo | egg | nm | food | huevo
queso | cheese | nm | food | queso
mantequilla | butter | nf | food | mantequilla
crema | cream | nf | food | crema
verdura | vegetable | nf | food | verdura
verduras | vegetables | nf | food | verdura
fruta | fruit | nf | food | fruta
manzana | apple | nf | food | manzana
plátano | banana | nm | food | plátano
naranja | orange | nf | food | naranja
limón | lime, lemon | nm | food | limón | In Mexico "limón" is usually a lime
papa | potato | nf | food | papa
tomate | tomato | nm | food | tomate
cebolla | onion | nf | food | cebolla
chile | chili pepper | nm | food | chile
ensalada | salad | nf | food | ensalada
postre | dessert | nm | food | postre
dulce | candy, sweet | nm | food | dulce
chocolate | chocolate | nm | food | chocolate
galleta | cookie | nf | food | galleta
helado | ice cream | nm | food | helado
azúcar | sugar | nf | food | azúcar
sal | salt | nf | food | sal
aceite | oil | nm | food | aceite
pimienta | pepper | nf | food | pimienta
tamal | tamale | nm | food | tamal
taco | taco | nm | food | taco
atole | atole (warm corn drink) | nm | food | atole
pozole | pozole (hominy stew) | nm | food | pozole
comida chatarra | junk food | nf | food | comida
comida casera | home cooking | nf | food | comida
dieta | diet | nf | food | dieta
ayuno | fasting | nm | food | ayuno
lleno | full (after eating) | adj | food | lleno | Estoy lleno = I'm full
con hambre | hungry | phr | food | hambre
sin hambre | not hungry | phr | food | hambre
plato | plate, dish | nm | food | plato
cuchara | spoon | nf | food | cuchara
tenedor | fork | nm | food | tenedor
cuchillo | knife | nm | food | cuchillo | Ask about access to sharp objects in safety assessments
mesa | table | nf | food | mesa
# home
casa | house, home | nf | home | casa
hogar | home | nm | home | hogar
apartamento | apartment | nm | home | apartamento
departamento | apartment | nm | home | departamento | Mexico
cuarto | room, bedroom | nm | home | cuarto
habitación | room | nf | home | habitación
recámara | bedroom | nf | home | recámara | Mexico
dormitorio | bedroom | nm | home | dormitorio
sala | living room | nf | home | sala
comedor | dining room | nm | home | comedor
cocina | kitchen | nf | home | cocina
baño | bathroom | nm | home | baño
excusado | toilet | nm | home | excusado | Mexico
inodoro | toilet | nm | home | inodoro
regadera | shower | nf | home | regadera | Mexico
ducha | shower | nf | home | ducha
lavabo | sink | nm | home | lavabo
tina | bathtub | nf | home | tina
patio | yard, patio | nm | home | patio
jardín | garden, yard | nm | home | jardín
garaje | garage | nm | home | garaje
techo | roof, ceiling | nm | home | techo
piso | floor | nm | home | piso
pared | wall | nf | home | pared
escalera | stairs, ladder | nf | home | escalera
puerta | door | nf | home | puerta
ventana | window | nf | home | ventana
llave | key | nf | home | llave
cerradura | lock | nf | home | cerradura
candado | padlock | nm | home | candado
cama | bed | nf | home | cama
cobija | blanket | nf | home | cobija | Mexico
manta | blanket | nf | home | manta
almohada | pillow | nf | home | almohada
sábana | sheet | nf | home | sábana
colchón | mattress | nm | home | colchón
silla | chair | nf | home | silla
sillón | armchair, couch | nm | home | sillón
sofá | sofa | nm | home | sofá
mesita de noche | nightstand | nf | home | mesa
ropero | wardrobe, closet | nm | home | ropero
clóset | closet | nm | home | clóset
cajón | drawer | nm | home | cajón
estante | shelf | nm | home | estante
espejo | mirror | nm | home | espejo
lámpara | lamp | nf | home | lámpara
luz | light | nf | home | luz
foco | light bulb | nm | home | foco | Mexico
televisión | television | nf | home | televisión
tele | TV | nf | home | televisión | Colloquial
radio | radio | nf | home | radio
teléfono | telephone | nm | home | teléfono
celular | cell phone | nm | home | celular
computadora | computer | nf | home | computadora | Latin America. Spain: ordenador
refrigerador | refrigerator | nm | home | refrigerador
refri | fridge | nm | home | refrigerador | Colloquial
estufa | stove | nf | home | estufa
horno | oven | nm | home | horno
lavadora | washing machine | nf | home | lavadora
ropa | clothes | nf | home | ropa
zapatos | shoes | nm | home | zapato
tenis | sneakers | nm | home | tenis | Mexico
cinturón | belt | nm | home | cinturón
cuerda | rope | nf | home | cuerda
tráiler | trailer, mobile home | nm | home | tráiler | Also a semi truck
mobile home | mobile home | nm | home | mobile home | English loan
casa móvil | mobile home | nf | home | casa
vivienda | housing, dwelling | nf | home | vivienda
renta | rent | nf | home | renta
rentar | to rent | v | home | rentar | Latin America
alquiler | rent | nm | home | alquiler | Spain
alquilar | to rent | v | home | alquilar
casero | landlord | nm | home | casero | Also "homemade" as an adjective
casera | landlady | nf | home | casero
arrendador | landlord | nm | home | arrendador | Formal
inquilino | tenant | nm | home | inquilino
roomie | roommate | n | home | roomie | Spanglish
vecino | neighbor | nm | home | vecino
desalojo | eviction | nm | home | desalojo
desalojar | to evict | v | home | desalojar
mudarse | to move (to a new home) | v | home | mudarse
sin hogar | homeless | phr | home | hogar
sin casa | homeless | phr | home | casa
persona sin hogar | person experiencing homelessness | nf | home | persona
la calle | the street | nf | home | calle
vivir en la calle | to live on the street | phr | home | vivir
carro | car | nm | home | carro | Latin America
coche | car | nm | home | coche | Mexico and Spain
troca | truck | nf | home | troca | Mexican American Spanish
camioneta | pickup, van | nf | home | camioneta
basura | trash | nf | home | basura
limpiar | to clean | v | home | limpiar
barrer | to sweep | v | home | barrer
agua caliente | hot water | nf | home | agua
agua fría | cold water | nf | home | agua
electricidad | electricity | nf | home | electricidad
calefacción | heating | nf | home | calefacción
aire acondicionado | air conditioning | nm | home | aire
# money
dinero | money | nm | money | dinero
lana | money (slang) | nf | money | lana | Mexico, colloquial
feria | change, money (slang) | nf | money | feria | Mexico, colloquial
plata | money, silver | nf | money | plata | South America and Central America
billete | bill, banknote | nm | money | billete
moneda | coin | nf | money | moneda
efectivo | cash | nm | money | efectivo
en efectivo | in cash | phr | money | efectivo
cash | cash | nm | money | cash | Spanglish
cambio | change | nm | money | cambio
tarjeta | card | nf | money | tarjeta
tarjeta de crédito | credit card | nf | money | tarjeta
tarjeta de débito | debit card | nf | money | tarjeta
cheque | check | nm | money | cheque
cuenta | account, bill | nf | money | cuenta
cuenta de banco | bank account | nf | money | cuenta
banco | bank | nm | money | banco
pago | payment | nm | money | pago
cobrar | to charge, to collect | v | money | cobrar
costo | cost | nm | money | costo
precio | price | nm | money | precio
caro | expensive | adj | money | caro
barato | cheap | adj | money | barato
gratis | free | adj | money | gratis
gratuito | free of charge | adj | money | gratuito
deuda | debt | nf | money | deuda
deber | to owe | v | money | deber
debo | I owe | v | money | deber
préstamo | loan | nm | money | préstamo
prestar | to lend | v | money | prestar
pedir prestado | to borrow | phr | money | pedir
fiado | on credit | adj | money | fiado
usurero | loan shark | nm | money | usurero
cobrador | collector | nm | money | cobrador
ahorros | savings | nm | money | ahorro
ahorrar | to save (money) | v | money | ahorrar
gasto | expense | nm | money | gasto
seguro | insurance | nm | money | seguro
seguro médico | health insurance | nm | money | seguro
sin seguro | uninsured | phr | money | seguro
Medicaid | Medicaid | nm | money | Medicaid | Same word in Spanish
Medicare | Medicare | nm | money | Medicare | Same word in Spanish
copago | copay | nm | money | copago
deducible | deductible | nm | money | deducible
cobertura | coverage | nf | money | cobertura
beneficios | benefits | nm | money | beneficio
seguro social | Social Security | nm | money | seguro
estampillas de comida | food stamps | nf | money | estampilla | Common phrase for SNAP benefits
factura | bill, invoice | nf | money | factura | In the US many say "el bill" (Spanglish)
bill | bill | nm | money | bill | Spanglish
recibo | receipt, bill | nm | money | recibo
impuestos | taxes | nm | money | impuesto
trabajo | work, job | nm | money | trabajo
empleo | employment, job | nm | money | empleo
chamba | job, work (slang) | nf | money | chamba | Mexico, colloquial
jale | job, work (slang) | nm | money | jale | Mexico, colloquial
chambear | to work (slang) | v | money | chambear | Mexico
turno | shift | nm | money | turno
turno de noche | night shift | nm | money | turno
horas extra | overtime | nf | money | hora
sueldo | salary, pay | nm | money | sueldo
salario | wage | nm | money | salario
quincena | biweekly paycheck | nf | money | quincena | Mexico
paga | pay | nf | money | paga
nómina | payroll | nf | money | nómina
propina | tip | nf | money | propina
desempleado | unemployed | adj | money | desempleado
desempleo | unemployment | nm | money | desempleo
sin trabajo | out of work | phr | money | trabajo
despedido | fired, laid off | adj | money | despedido
despedir | to fire | v | money | despedir
renunciar | to quit (a job) | v | money | renunciar
contratar | to hire | v | money | contratar
incapacidad | disability (leave) | nf | money | incapacidad
pobre | poor | adj | money | pobre
pobreza | poverty | nf | money | pobreza
rico | rich | adj | money | rico
necesidad | need | nf | money | necesidad
remesas | remittances (money sent home) | nf | money | remesa
mandar dinero | to send money | phr | money | mandar
enviar dinero | to send money | phr | money | enviar
giro | money order, wire | nm | money | giro
mandar dinero a la familia | to send money to family | phr | money | mandar
dinero para comer | money for food | phr | money | dinero
me falta dinero | I'm short of money | phr | money | faltar
no me alcanza | I can't make ends meet | phr | money | alcanzar | Mexico, very common
no tengo dinero | I have no money | phr | money | tener
trabajo de campo | farm work | nm | money | trabajo
construcción | construction | nf | money | construcción
jornalero | day laborer | nm | money | jornalero
obrero | laborer | nm | money | obrero
campesino | farmworker, peasant | nm | money | campesino
empleada doméstica | domestic worker | nf | money | empleado
empleado | employee | nm | money | empleado
empleador | employer | nm | money | empleador
patrón | boss | nm | money | patrón
sindicato | union | nm | money | sindicato
# places
hospital | hospital | nm | places | hospital
clínica | clinic | nf | places | clínica
farmacia | pharmacy | nf | places | farmacia
botica | pharmacy | nf | places | botica | Older word, used in some regions
consultorio | doctor's office | nm | places | consultorio
oficina | office | nf | places | oficina
urgencias | emergency room | nf | places | urgencias
emergencias | emergency room | nf | places | emergencias
sala de emergencias | emergency room | nf | places | sala
piso | floor, unit (hospital) | nm | places | piso
unidad | unit | nf | places | unidad
unidad psiquiátrica | psychiatric unit | nf | places | unidad
cuarto | room | nm | places | cuarto
cuarto privado | private room | nm | places | cuarto
sala de espera | waiting room | nf | places | sala
recepción | front desk | nf | places | recepción
laboratorio | laboratory | nm | places | laboratorio
ambulancia | ambulance | nf | places | ambulancia
cama de hospital | hospital bed | nf | places | cama
sala de visitas | visiting room | nf | places | sala
iglesia | church | nf | places | iglesia
templo | temple, church | nm | places | templo
escuela | school | nf | places | escuela
colegio | school | nm | places | colegio
universidad | university | nf | places | universidad
guardería | daycare | nf | places | guardería
trabajo | workplace | nm | places | trabajo
fábrica | factory | nf | places | fábrica
rancho | ranch, farm | nm | places | rancho
campo | countryside, field | nm | places | campo
pueblo | town, village | nm | places | pueblo
ciudad | city | nf | places | ciudad
país | country | nm | places | país
casa | home | nf | places | casa
tienda | store | nf | places | tienda
mercado | market | nm | places | mercado
supermercado | supermarket | nm | places | supermercado
restaurante | restaurant | nm | places | restaurante
cantina | bar | nf | places | cantina | Mexico, men's bar
bar | bar | nm | places | bar
licorería | liquor store | nf | places | licorería
correo | post office | nm | places | correo
calle | street | nf | places | calle
esquina | corner | nf | places | esquina
cuadra | block | nf | places | cuadra
avenida | avenue | nf | places | avenida
carretera | highway, road | nf | places | carretera
autopista | highway | nf | places | autopista
freeway | freeway | nm | places | freeway | Spanglish
puente | bridge | nm | places | puente | Ask about access to heights in safety assessments
frontera | border | nf | places | frontera
la migra | immigration agents (slang) | nf | places | migra | Colloquial. Can raise fear. Ask sensitively
aduana | customs | nf | places | aduana
corte | court | nf | places | corte
juzgado | courthouse | nm | places | juzgado
comisaría | police station | nf | places | comisaría
estación de policía | police station | nf | places | estación
cárcel | jail, prison | nf | places | cárcel
prisión | prison | nf | places | prisión
albergue | shelter | nm | places | albergue
refugio | shelter, refuge | nm | places | refugio
shelter | shelter | nm | places | shelter | Spanglish
parque | park | nm | places | parque
plaza | plaza, square | nf | places | plaza
estación | station | nf | places | estación
estación de autobús | bus station | nf | places | estación
parada del autobús | bus stop | nf | places | parada
parada del bus | bus stop | nf | places | parada
parada | stop | nf | places | parada
autobús | bus | nm | places | autobús
camión | bus (Mexico), truck | nm | places | camión | Mexico: "camión" is the city bus
bus | bus | nm | places | bus
metro | subway | nm | places | metro
aeropuerto | airport | nm | places | aeropuerto
gasolinera | gas station | nf | places | gasolinera
hotel | hotel | nm | places | hotel
motel | motel | nm | places | motel
cementerio | cemetery | nm | places | cementerio
biblioteca | library | nf | places | biblioteca
gimnasio | gym | nm | places | gimnasio
río | river | nm | places | río
lago | lake | nm | places | lago
playa | beach | nf | places | playa
monte | hills, wilderness | nm | places | monte
en casa | at home | phr | places | casa
en el trabajo | at work | phr | places | trabajo
en la escuela | at school | phr | places | escuela
en el hospital | in the hospital | phr | places | hospital
en la calle | on the street | phr | places | calle
en la cárcel | in jail | phr | places | cárcel
el otro lado | the other side (the US, from Mexico) | nm | places | lado | Mexico, common euphemism for the US
`);
