Feature('hoover');

// This scenario tests how the API responds when an empty payload is sent

Scenario('empty payload request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', {})

I.seeResponseCodeIsServerError();
});
