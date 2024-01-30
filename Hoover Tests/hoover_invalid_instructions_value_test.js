Feature('hoover');

// This scenario is used to test how the server responds when an invalid value is passed in with the instructions key
Scenario('invalid instructions value request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "roomSize": [5, 5], "coords": [1, 2], "patches" : [ [1, 0], [2, 2], [2, 3] ], "instructions": "SSENZZZNNW" })

I.seeResponseCodeIsClientError();
});
