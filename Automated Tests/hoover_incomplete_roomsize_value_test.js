Feature('hoover');

// This scenario tests how the API responds when a "roomSize" with only the x coordinate defined is sent

Scenario('incomplete patches array request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "roomSize" : [5], "coords" : [0,0], "patches" : [ [1, 0], [2, 2], [2, 3] ], "instructions" : "SSENNNW" })

I.seeResponseCodeIsServerError();
});