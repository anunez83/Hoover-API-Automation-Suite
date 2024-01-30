Feature('hoover');

// This scenario includes a missing "instructions" key
Scenario('missing instructions key request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "roomSize" : [5, 5], "coords" : [1, 1], "patches" : [ [1, 0], [2, 2], [2, 3] ], "" : "SSENNNW" })

I.seeResponseCodeIsClientError();
});