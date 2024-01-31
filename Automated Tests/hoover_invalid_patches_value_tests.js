Feature('hoover');

// **PLEASE NOTE**
//Running this test will currently cause the API to respond with incorrect data for subsequent 2 patch tests. The API service has to be restarted to remedy the problem.

// This scenario tests how the API responds when a float value is passed in with a patches array

Scenario('invalid patches value request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "roomSize": [5, 5], "coords": [1, 2], "patches" : [ [1, 2.2], [2, 2], [2, 3] ], "instructions": "SSENNNW" })

I.seeResponseCodeIsClientError();
});
