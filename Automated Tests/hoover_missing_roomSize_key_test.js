Feature('hoover');

// This scenario tests a missing "roomSize" key
Scenario('missing roomSize key request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "" : [5, 5], "coords" : [1, 1], "patches" : [[1, 0], [2, 2], [2, 3]], "instructions" : "SSENNNW" })

I.seeResponseCodeIsServerError();
});