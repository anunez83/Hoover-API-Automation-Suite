Feature('hoover');

// This scenario includes a patches object with only the x coordinate defined
Scenario('empty patches value request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "roomSize" : [5, 5], "coords" : [0,0], "patches" : [ [2] ], "instructions" : "SSENNNW" })

I.seeResponseCodeIsClientError();
});