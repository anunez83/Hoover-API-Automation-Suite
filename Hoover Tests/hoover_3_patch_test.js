Feature('hoover');

// This scenario is used to verify three dirt patches were successfully cleaned
Scenario('three patch request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "roomSize": [5, 5], "coords": [1, 2], "patches" : [ [1, 0], [2, 2], [2, 3] ], "instructions": "SSENNNW" })

I.seeResponseCodeIsSuccessful();
I.seeResponseContainsJson({"coords" : [1, 3], "patches" : 3})
});
