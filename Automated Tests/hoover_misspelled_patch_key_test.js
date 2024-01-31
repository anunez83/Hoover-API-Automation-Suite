Feature('hoover');

// This scenario tests how the API responds when a misspelled "patches" key is sent

Scenario('misspelled patches key request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "roomSize" : [5, 5], "coords" : [1, 1], "pathes" : [[1, 0], [2, 2], [2, 3]], "instructions" : "SSENNNW" })

I.seeResponseCodeIsClientError();
});