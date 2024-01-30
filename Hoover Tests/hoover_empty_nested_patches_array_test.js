Feature('hoover');

// This scenario includes an empty nested patches array, which still is successful but should be followed up on to clarify on the expected result
Scenario('empty nested patches array request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "roomSize" : [5, 5], "coords" : [1, 1], "patches" : [[]], "instructions" : "SSENNNW" })

I.seeResponseCodeIsClientError();
});