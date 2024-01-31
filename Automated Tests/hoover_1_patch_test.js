Feature('one patch test');

// This scenario is used to verify one dirt patch was successfully cleaned

Scenario('one patch request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', {"roomSize" : [5, 5], "coords" : [1, 2], "patches" : [ [1, 0], [2, 2], [2, 3] ], "instructions" : "NNESEESWNWW"})

I.seeResponseCodeIsSuccessful();
I.seeResponseContainsJson({"coords" : [1, 3], "patches" : 1})
});
