Feature('hoover');

// **PLEASE NOTE**
//Running this test will currently cause the API to respond with incorrect data for subsequent 2 patch or 3 patch tests. The API service has to be restarted to remedy the problem.

// This scenario tests how the API responds when a value for coords is sent that is outside of the defined grid size

Scenario('coords outside of grid request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "roomSize" : [5, 5], "coords" :[10,10], "patches" : [[2,0]], "instructions" : "SSENNNW" })

I.seeResponseCodeIsServerError();
});