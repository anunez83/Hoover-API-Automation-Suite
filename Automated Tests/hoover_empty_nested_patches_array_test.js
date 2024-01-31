Feature('hoover');

// This scenario tests how the API responds an empty nested patches array is sent
// This request still goes through successfully but should be followed up on to clarify on what the expected result should be

Scenario('empty nested patches array request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "roomSize" : [5, 5], "coords" : [1, 1], "patches" : [[]], "instructions" : "SSENNNW" })

I.seeResponseCodeIsClientError();
});