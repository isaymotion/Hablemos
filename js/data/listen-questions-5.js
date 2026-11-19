/* Listening questions for the dialogues of dialogues-3.js. Release 0.11.0.
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Shape: window.LISTEN_Q = Object.assign(window.LISTEN_Q || {}, { '<dialogue id>': [[question, [4 options], answerIndex, why], ...] })
   Questions, options and explanations are in English. The learner hears the whole dialogue first and cannot see the text.
   Ids are permanent: append only after release. */
window.LISTEN_Q = Object.assign(window.LISTEN_Q || {}, {
'ward-orientation': [
[`What should the patient do if she needs help?`, [`Call out in the hall`, `Press the button`, `Go to the office`, `Ask her daughter`], 1, `The nurse says to press this button and that the nurse comes right away.`],
[`What time is dinner?`, [`At eight`, `At twelve`, `At four`, `At six`], 3, `Breakfast is at eight, lunch at twelve and dinner at six.`],
[`When can the patient's daughter come?`, [`In the afternoon, at four`, `In the morning`, `Only on weekends`, `At night`], 0, `Visits are in the afternoon, and her daughter can come at four.`]
],
'pain-check': [
[`Where does the patient hurt?`, [`His head`, `His stomach`, `His back`, `His leg`], 2, `He says his back hurts, low down.`],
[`What number does the patient give his pain?`, [`Three`, `Seven`, `Ten`, `Five`], 1, `He says right now he feels a seven.`],
[`When does the pain get worse?`, [`When he eats`, `When he sleeps`, `Only at night`, `When he walks and when he sits`], 3, `It hurts more when he walks, and also when he sits down.`]
],
'medication-teachback': [
[`When does the patient take the pill?`, [`At night`, `At noon`, `In the morning`, `Every other day`], 2, `The nurse says one pill in the morning, with food.`],
[`What should she do if she forgets?`, [`Take it when she remembers, but not two together`, `Skip it for the whole week`, `Take two pills the next day`, `Stop the medicine`], 0, `She should take it when she remembers and not take two pills together.`],
[`Why does the nurse ask the patient to repeat the instructions?`, [`To test her memory for school`, `To practice Spanish`, `To be sure she explained well`, `To fill out a form`], 2, `The nurse wants to be sure she explained well, so she asks the patient to say it back.`]
],
'phone-family-update': [
[`Why can the doctor call Marta?`, [`Marta is a nurse`, `Tomás gave permission`, `Marta asked the clinic`, `It is an emergency`], 1, `The doctor says Tomás gave her permission to call.`],
[`How is Tomás doing?`, [`Better, and sleeping and eating well`, `The same as before`, `Worse than last week`, `He is going home today`], 0, `The doctor says he is better, sleeps well and eats well.`],
[`What can Marta do for Tomás?`, [`Take him home today`, `Bring him food only`, `Call him at night`, `Visit and bring clothes`], 3, `Visits are from four to six, and she can bring clothes in a bag to the nursing office.`]
],
'sleep-hygiene-plan': [
[`What hours does Esteban work?`, [`Six in the morning to two`, `Ten at night to six in the morning`, `Noon to eight`, `Eight to four`], 1, `He works from ten at night to six in the morning.`],
[`What does the doctor ask him to avoid?`, [`Coffee after midnight`, `Eating dinner`, `Seeing his wife`, `Walking before bed`], 0, `She says to avoid coffee after midnight.`],
[`Which two changes do they agree to start with this week?`, [`Earplugs and curtains`, `Exercise and a diary`, `Coffee and the phone`, `A nap and a new job`], 2, `They start with only two changes: the coffee and the phone.`]
],
'teen-first-visit': [
[`What problem does Valeria describe at school?`, [`A teacher is too strict`, `Her friends no longer talk to her`, `She failed a test`, `She is being teased online`], 1, `She says her friends do not talk to her anymore and it gives her a lot of anxiety.`],
[`What does the doctor say about what Valeria tells her?`, [`It goes straight to her parents`, `It goes to the school`, `It stays between them, with an exception`, `It is written on a poster`], 2, `What she says stays between them, except when the doctor thinks Valeria is in danger.`],
[`In which case would the doctor ask others for help?`, [`If Valeria is in danger or someone hurts her`, `If Valeria is late`, `If Valeria gets bad grades`, `If Valeria is nervous`], 0, `She would ask for help if she thought Valeria was in danger or that someone was hurting her, and she would tell Valeria first.`]
],
'delusion-without-arguing': [
[`What does Pablo believe?`, [`His family wants to leave him`, `His boss will fire him`, `His food is bad`, `The neighbors watch him`], 3, `He says the neighbors watch him and put devices in the wall to listen.`],
[`How does the doctor respond to his belief?`, [`She says it is not real`, `She says she sees it the same way`, `She says she cannot see it the same way but knows he is afraid`, `She changes the subject`], 2, `She neither argues nor agrees. She says it is very real for him and that it scares him.`],
[`What does Pablo say when asked about hurting anyone or himself?`, [`Yes, himself`, `No, no one`, `Yes, his neighbors`, `He does not answer`], 1, `He says no, no one, and that he only wants to be left in peace.`]
],
'discharge-family-meeting': [
[`Which warning sign does Silvia mention?`, [`He does not sleep`, `He talks too much`, `He sings`, `He goes out every night`], 0, `She names not sleeping, shutting himself in the room and stopping eating.`],
[`When is the next appointment?`, [`Monday at ten`, `Friday at ten`, `Thursday at two`, `Thursday at ten in the morning`], 3, `The appointment is Thursday at ten in the morning, at the clinic.`],
[`What does the doctor say to do at night if they need help?`, [`Wait until the clinic opens`, `Go to a neighbor`, `Call 988 and press 2 for Spanish`, `Send an email`], 2, `She says they can call 988 at any hour and press 2 to speak in Spanish.`]
]
});
