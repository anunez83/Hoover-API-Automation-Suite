Feature('hoover');

// This scenario tests how the API responds when a misspelled "instructions" key is sent

Scenario('misspelled instructions key request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "roomSize" : [5, 5], "coords" : [1, 1], "patches" : [[1, 0], [2, 2], [2, 3]], "instuctions" : "SSENNNW" })

I.seeResponseCodeIsClientError();
});