Feature('hoover');

// This scenario includes an empty value for the instructions key
Scenario('empty instructions value request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', { "roomSize" : [5, 5], "coords" : [1, 1], "patches" : [[1, 0], [2, 2], [2, 3]], "instructions" : "" })

I.dontSeeResponseCodeIs(200);
});