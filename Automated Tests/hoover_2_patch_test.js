Feature('hoover');

// This scenario is used to verify two dirt patches were successfully cleaned

Scenario('two patch request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "roomSize" : [5, 5], "coords" : [0, 0], "patches" : [ [1, 0], [2, 2], [2, 3] ], "instructions" : "NNEESSWW" })

I.seeResponseCodeIsSuccessful();
I.seeResponseContainsJson({"coords" : [0, 0], "patches" : 2})
});
