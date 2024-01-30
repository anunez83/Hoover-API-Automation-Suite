Feature('hoover');

// This scenario is used to test how the API reponds when an empty payload is sent
Scenario('empty payload request',  ({ I }) => {
    I.sendPostRequest('v1/cleaning-sessions', {})

I.seeResponseCodeIsServerError();
});
