Feature('hoover');

// This scenario tests how the API responds when a misspelled "roomSize" key is sent

Scenario('misspelled roomSize key request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "roomsize" : [5, 5], "coords" : [1, 1], "pathes" : [[1, 0], [2, 2], [2, 3]], "instructions" : "SSENNNW" })

I.seeResponseCodeIsServerError();
});