/* Listening questions for the dialogues of dialogues-2.js. Release 0.9.0.
   Hablemos (Spanish). STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician.
   Shape: window.LISTEN_Q = Object.assign(window.LISTEN_Q || {}, { '<dialogue id>': [[question, [4 options], answerIndex, why], ...] })
   Questions, options and explanations are in English. The learner hears the whole dialogue first and cannot see the text.
   Ids are permanent: append only after release. */
window.LISTEN_Q = Object.assign(window.LISTEN_Q || {}, {
'appointment-call': [
[`Why can the caller not come on Tuesday?`, [`She works in the morning`, `She has no ride`, `The clinic is closed`, `She is sick that day`], 0, `She says she works in the morning and asks about Wednesday afternoon.`],
[`What day and time do they agree on?`, [`Tuesday at nine thirty`, `Wednesday at three`, `Wednesday at nine`, `Thursday at three`], 1, `They agree on Wednesday the twentieth at three in the afternoon.`],
[`What does the front desk ask her to bring?`, [`A list of her medicines`, `A family member`, `Her insurance card`, `A urine sample`], 2, `She is asked to bring her insurance card and to arrive ten minutes early.`]
],
'vitals-allergies': [
[`What is the patient's blood pressure?`, [`One twenty over eighty`, `One forty over ninety`, `One ten over seventy`, `One twenty over seventy`], 0, `The nurse says it is fine: one twenty over eighty.`],
[`What happens when the patient takes penicillin?`, [`He feels dizzy`, `He vomits`, `He cannot breathe`, `He gets hives`], 3, `He says he is allergic to penicillin and gets hives (ronchas).`],
[`When will the doctor come?`, [`In ten minutes`, `In five minutes`, `Tomorrow`, `In an hour`], 1, `The nurse says the doctor comes in five minutes.`]
],
'sleep-appetite': [
[`What time does the patient fall asleep?`, [`At ten`, `At midnight`, `At five`, `At one`], 3, `She goes to bed at ten but does not fall asleep until one.`],
[`What has changed about her eating?`, [`She now eats more`, `She only has a coffee in the morning`, `She skips dinner`, `She eats only fruit`], 1, `Before, she had breakfast every day. Now she only has a coffee.`],
[`How much weight has she lost?`, [`About one kilo`, `About five kilos`, `About three kilos`, `None`], 2, `She thinks she lost three kilos in a month.`]
],
'mother-intake': [
[`How long ago did the changes begin?`, [`Three months ago`, `Three weeks ago`, `One year ago`, `Last week`], 0, `The mother says it started three months ago.`],
[`What did Brayan do before the changes?`, [`He worked at night`, `He studied at the library`, `He went out with friends and played soccer`, `He cared for his little brother`], 2, `Before, he went out with his friends and played soccer.`],
[`What did Brayan say once about the neighbors?`, [`That they were loud`, `That they were angry at him`, `That they wanted to visit`, `That they were talking about him`], 3, `He said the neighbors talked about him, and his mother got scared.`]
],
'voluntary-admission': [
[`What kind of admission does the doctor describe?`, [`Voluntary`, `Emergency`, `Ordered by a court`, `For one night only`], 0, `The doctor says it is a voluntary admission and the patient decides whether to sign.`],
[`How can the patient ask to leave?`, [`By telling a guard`, `By writing a request`, `By calling a relative`, `By waiting until the weekend`], 1, `He can ask for discharge in writing, and the team then evaluates him and explains the steps.`],
[`When are visits allowed?`, [`In the morning`, `Only on weekends`, `In the afternoon, from four to six`, `At any hour`], 2, `Visits are in the afternoon, from four to six.`]
],
'safety-checkin': [
[`How did the patient sleep?`, [`Very well`, `Only a little`, `Through the whole night`, `He did not try to sleep`], 1, `He slept little and woke several times, thinking about his family.`],
[`What does the patient say about the thoughts of ending his life?`, [`He had never had them`, `He has them all the time`, `He had them last night, less today`, `He had them only last year`], 2, `He says last night, for a while, and today not so much.`],
[`What does the doctor tell him to do if the thoughts come back?`, [`Wait until the next visit`, `Write them in a notebook`, `Call his family`, `Tell the nurse or the doctor right away`], 3, `The doctor asks him to tell the nurse or the doctor right away.`]
],
'family-meeting': [
[`What does the grandmother believe at first?`, [`Someone did harm to her granddaughter`, `Her granddaughter is lying`, `The hospital made a mistake`, `The medicine is too strong`], 0, `She says Lety is not mentally ill and that someone did her harm (le hicieron un mal).`],
[`What does the doctor say about a healer?`, [`It is forbidden`, `It is fine if Lety keeps taking her medicine`, `It would replace the medicine`, `It must be hidden from the team`], 1, `The doctor says a healer is no problem as long as Lety keeps taking her medicine.`],
[`What has the grandmother noticed since the medicine started?`, [`Lety eats less`, `Lety talks less`, `Lety sleeps better`, `Lety is angrier`], 2, `She admits that Lety sleeps better since she takes the medicine.`]
],
'interpreter-session': [
[`What does the doctor ask of the interpreter at the start?`, [`To summarize the answers`, `To add explanations`, `To translate only the questions`, `To interpret everything, without summarizing`], 3, `She asks the interpreter to interpret everything said, without summarizing or adding.`],
[`Why does the interpreter give a note after the first answer?`, [`The patient answered in an indirect way, not yes or no`, `The patient refused to answer`, `The patient spoke too fast`, `The patient used a wrong word`], 0, `The patient talked about putting up with things, an indirect way to speak about something hard.`],
[`What weighs on the patient the most?`, [`His health`, `Work and trouble at home`, `Money owed to friends`, `His children's school`], 1, `He says work, and that things at home are not going well.`]
]
});
