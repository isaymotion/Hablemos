/* Likely patient replies for the section `eot` (end-of-treatment review), for the point board and the listening drill.
   Merges into window.PSYCH_ANSWERS.sections. item = [es, en, clinicalNote?].
   STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician. */
window.PSYCH_ANSWERS = window.PSYCH_ANSWERS || { common: [], sections: {} };
(function (S, add) { Object.keys(add).forEach((k) => (S[k] = (S[k] || []).concat(add[k]))); })(window.PSYCH_ANSWERS.sections, {
  'eot': [
    [`Vine a casi todas las sesiones.`, `I came to almost all the sessions.`],
    [`Hice la práctica casi todas las semanas.`, `I did the practice almost every week.`],
    [`Antes era un 9 y ahora es como un 2.`, `It used to be a 9 and now it is about a 2.`, `Record both numbers (then and now) as the patient's self-rating.`],
    [`Ya puedo manejar otra vez sin tanto miedo.`, `I can drive again without so much fear.`, `A concrete gain. Ask for an example.`],
    [`Todavía me da un poco de nervios cuando estoy muy cansado.`, `I still get a bit nervous when I am very tired.`, `Residual symptom: record in the patient's words.`],
    [`Sí, a veces pienso que mejor no despertara, pero no haría nada.`, `Yes, sometimes I think it would be better not to wake up, but I would not do anything.`, `New passive death wish. Ask about plan and intent, do not end treatment, reassess, and update the safety plan. Use a qualified interpreter if needed.`],
    [`No, ya no me ha pasado eso.`, `No, that has not happened again.`, `Past passive death wish, none now. Document it in the patient's words.`],
    [`Yo creo que todavía no estoy listo para dejar las sesiones.`, `I do not think I am ready to stop the sessions yet.`, `Not ready to end. Explore the worry, review unmet goals, and consider continuing the sessions. Say plainly that this is not a failure.`],
    [`Si me empiezo a encerrar y a no dormir, es que ya viene otra vez.`, `If I start shutting myself in and not sleeping, it is coming back.`, `The patient names their own early warning signs.`],
    [`Mi esposa se da cuenta antes que yo.`, `My wife notices before I do.`, `Ask permission to share the warning signs with her.`],
    [`Sigo tomando la pastilla que me recetó mi doctora de cabecera.`, `I am still taking the pill my primary care doctor prescribed.`, `Record who prescribes it and who will review it.`],
    [`Está bien, voy a guardar el 988 en mi teléfono.`, `All right, I will save 988 in my phone.`, `Check that the patient knows to press 2 for Spanish and to call 911 in an emergency.`]
  ]
});
