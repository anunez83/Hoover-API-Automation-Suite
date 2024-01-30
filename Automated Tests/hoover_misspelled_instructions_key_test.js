Feature('hoover');

// This scenario includes a misspelled "instructions" key
Scenario('misspelled patches object request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "roomSize" : [5, 5], "coords" : [1, 1], "patches" : [[1, 0], [2, 2], [2, 3]], "instuctions" : "SSENNNW" })

I.seeResponseCodeIsClientError();
});