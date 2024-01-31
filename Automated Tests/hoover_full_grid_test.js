Feature('hoover');

// This scenario is used to verify that the hoover can path through the full 5x5 grid

Scenario('full grid path request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "roomSize" : [5, 5], "coords" : [0,0], "patches" : [[1, 0], [2, 2], [2, 3]], "instructions" : "NNNNESSSSENNNESSSSENNNN" })

I.seeResponseCodeIsSuccessful();
I.seeResponseContainsJson({"coords" : [4, 4], "patches" : 3})
});
