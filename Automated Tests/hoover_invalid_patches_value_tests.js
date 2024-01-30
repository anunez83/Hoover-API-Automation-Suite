Feature('hoover');

// This scenario is used to test how the server responds when a float value is passed in with a patches object
Scenario('invalid patches value request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "roomSize": [5, 5], "coords": [1, 2], "patches" : [ [1, 2.2], [2, 2], [2, 3] ], "instructions": "SSENNNW" })

I.seeResponseCodeIsClientError();
});
