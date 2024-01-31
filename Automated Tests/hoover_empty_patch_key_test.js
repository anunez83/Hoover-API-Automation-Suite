Feature('hoover');

// This scenario tests how the API responds when the "patches" key is empty

Scenario('empty patches key request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "roomSize" : [5, 5], "coords" : [1, 1], "" : [], "instructions" : "SSENNNW" })

I.seeResponseCodeIsClientError();
});