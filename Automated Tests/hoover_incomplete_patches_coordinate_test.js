Feature('hoover');

// This scenario tests how the API responds when a patches array with only the x coordinate defined is sent

Scenario('incomplete patches array request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "roomSize" : [5, 5], "coords" : [0,0], "patches" : [ [2] ], "instructions" : "SSENNNW" })

I.seeResponseCodeIsClientError();
});