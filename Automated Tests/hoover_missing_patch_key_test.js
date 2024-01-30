Feature('hoover');

// This scenario includes a missing "patches" key
Scenario('missing patches key request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "roomSize" : [5, 5], "coords" : [1, 1], "" : [], "instructions" : "SSENNNW" })

I.seeResponseCodeIsClientError();
});