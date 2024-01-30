Feature('hoover');

// This scenario includes a misspelled "patches" key
Scenario('misspelled patches object request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "roomSize" : [5, 5], "coords" : [1, 1], "pathes" : [], "instructions" : "SSENNNW" })

I.seeResponseCodeIsClientError();
});