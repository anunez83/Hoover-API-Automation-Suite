Feature('hoover');

// This scenario includes a misspelled "roomSize" key
Scenario('misspelled roomSize key request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "roomsize" : [5, 5], "coords" : [1, 1], "pathes" : [], "instructions" : "SSENNNW" })

I.seeResponseCodeIsServerError();
});