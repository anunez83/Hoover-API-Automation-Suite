Feature('hoover');

// This scenario is used to path through the full grid 
Scenario('three patch request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "roomSize" : [5, 5], "coords" : [0,0], "patches" : [[1, 0], [2, 2], [2, 3]], "instructions" : "NNNNESSSSENNNESSSSENNNN" })

I.seeResponseCodeIsSuccessful();
I.seeResponseContainsJson({"coords" : [4, 4], "patches" : 3})
});
