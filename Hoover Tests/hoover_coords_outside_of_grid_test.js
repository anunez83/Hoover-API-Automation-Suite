Feature('hoover');

// This scenario is used to test what happens when a value for coords is sent that is outside of the defined grid size
Scenario('coords outside of grid request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "roomSize" : [5, 5], "coords" :[10,10], "patches" : [[2,0]], "instructions" : "SSENNNW" })

I.seeResponseCodeIsServerError();
});