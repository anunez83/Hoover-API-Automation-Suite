Feature('hoover');

// This scenario tests an empty roomSize array
Scenario('empty roomSize array request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "roomSize" : [], "coords" : [1, 1], "patches" : [[1, 0], [2, 2], [2, 3]], "instructions" : "SSENNNW" })

I.seeResponseCodeIsServerError();
});