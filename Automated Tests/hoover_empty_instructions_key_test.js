Feature('hoover');

// This scenario tests how the API responds when the "instructions" key is empty

Scenario('empty instructions key request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "roomSize" : [5, 5], "coords" : [1, 1], "patches" : [ [1, 0], [2, 2], [2, 3] ], "" : "SSENNNW" })

I.seeResponseCodeIsClientError();
});