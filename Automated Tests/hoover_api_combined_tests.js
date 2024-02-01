const { urlPath, createJsonPayload } = require(`./hoover_commons`);

Feature('Hoover API Tests');

Scenario('The Hoover is sent to clean one patch of dirt on a 5x5 grid', ({ I }) => {

    // Given the dirt patches provided
    var expectedJson = { "coords": [1, 3], "patches": 1 }

    // When the following request is sent
    I.sendPostRequest(urlPath, createJsonPayload(coords = [1, 2], patches = [[1, 0], [2, 2], [2, 3]], instructions = "NNESEESWNWW"))

    // Then I should see that 1 patch was cleaned
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsJson(expectedJson)
});

Scenario('The Hoover is sent to clean two patches of dirt on a 5x5 grid', ({ I }) => {

    // Given the dirt patches provided
    var expectedJson = { "coords": [0, 0], "patches": 2 }

    // When the following network request is sent
    I.sendPostRequest(urlPath, createJsonPayload(coords = [0, 0], patches = [[1, 0], [2, 2], [2, 3]], instructions = "NNEESSWW"))

    // Then I should see that 2 patches were cleaned
    I.seeResponseCodeIsSuccessful();
    I.seeResponseContainsJson(expectedJson)
});

Scenario('The Hoover is sent to clean three patches of dirt on a 5x5 grid', ({ I }) => {

    // Given the dirt patches provided
    var expectedJson = { "coords": [1, 3], "patches": 3 }

    // When the following network request is sent
    I.sendPostRequest(urlPath, createJsonPayload(coords = [1, 2], patches = [[1, 0], [2, 2], [2, 3]], instructions = "SSENNNW"))

    // Then I should see that 3 patches were cleaned
    I.seeResponseCodeIsSuccessful();
    I.seeResponseContainsJson(expectedJson)
});

Scenario('The Hoover is sent to clean two patches of dirt on a 10x10 grid', ({ I }) => {

    // Given the dirt patches provided
    var expectedJson = { "coords": [6, 0], "patches": 2 }

    // When the following network request is sent
    I.sendPostRequest(urlPath, { "roomSize": [10, 10], "coords": [9, 0], "patches": [[5, 0], [6, 2], [8, 3]], "instructions": "WNNNWWSSS" })

    // Then I should see that 2 patches were cleaned
    I.seeResponseCodeIsSuccessful();
    I.seeResponseContainsJson(expectedJson)
});

Scenario('The Hoover runs into walls while cleaning dirt patches', ({ I }) => {

    // Given the navigation capabilities of the Hoover, I would like to navigate it into walls
    var expectedJson = { "coords": [0, 0], "patches": 3 }

    // When the following network request is sent
    I.sendPostRequest(urlPath, createJsonPayload(coords = [1, 2], patches = [[1, 0], [2, 2], [2, 3]], instructions = "NNNNNESSSSSWWWWW"))

    // Then I should see that the Hoover correctly navigated the room and cleaned 3 patches
    I.seeResponseCodeIsSuccessful();
    I.seeResponseContainsJson(expectedJson)
});

Scenario('The Hoover is navigated across the entirety of the grid', ({ I }) => {

    // Given the navigation capabilities of the Hoover, I would like to traverse the entirety of the grid
    var expectedJson = { "coords": [4, 4], "patches": 3 }

    // When the following network request is sent
    I.sendPostRequest(urlPath, createJsonPayload(coords = [0, 0], patches = [[1, 0], [2, 2], [2, 3]], instructions = "NNNNESSSSENNNNESSSSENNNN"))

    // Then I should see that the Hoover correctly navigated the room and cleaned 3 patches
    I.seeResponseCodeIsSuccessful();
    I.seeResponseContainsJson(expectedJson)
});

Scenario('The Hoover is navigated across the entirety of the grid with each sector being defined as a dirt patch', ({ I }) => {

    // PLEASE NOTE // Running this scenario will invalidate the results of subsequent tests that are referencing the returned value for "patches" in the respnonse, because of how the API is storing patch data. In order to resolve this issue the API service will need to be restarted.

    // Given the dirt patches provided
    var expectedJson = { "coords": [4, 4], "patches": 24 }

    // When the following network request is sent
    I.sendPostRequest(urlPath, createJsonPayload(coords = [0, 0], patches = [[0, 0], [0, 1], [0, 1.2], [0, 2], [0, 3], [0, 4], [1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [4, 0], [4, 1], [4, 2], [4, 3], [4, 4]], instructions = "NNNNESSSSENNNNESSSSENNNN"))

    // Then I should see that the Hoover correctly navigated the room and cleaned 24 patches
    I.seeResponseCodeIsSuccessful();
    I.seeResponseContainsJson(expectedJson)
});

Scenario('The starting coordinates of the Hoover are outside of the defined grid size', ({ I }) => {

    // When the following network request is sent
    I.sendPostRequest(urlPath, createJsonPayload(coords = [5, 5], patches = [[1, 0], [2, 2], [2, 3]], instructions = "SSENNNW"))

    // Then I expect to see a client error based on the coordinates being outside of the defined grid
    I.seeResponseCodeIsClientError();
});

Scenario('The network request payload has an empty "instructions" key', ({ I }) => {

    // When the following network request is sent
    I.sendPostRequest(urlPath, { "roomSize": [5, 5], "coords": [1, 0], "patches": [[1, 0], [2, 2], [2, 3]], "": "SSENNNW" })

    // Then I expect to see a client error based on the empty "instructions" key
    I.seeResponseCodeIsClientError();
});

Scenario('The network request payload has an empty value for the "instructions" string', ({ I }) => {

    // When the following network request is sent
    I.sendPostRequest(urlPath, { "roomSize": [5, 5], "coords": [1, 0], "patches": [[1, 0], [2, 2], [2, 3]], "instructions": "" })

    // Then I expect to see a client error based on the empty value for "instructions"
    I.seeResponseCodeIsClientError();
});

Scenario('The network request payload has an empty nested "patches" array ', ({ I }) => {

    // When the following network request is sent
    I.sendPostRequest(urlPath, { "roomSize": [5, 5], "coords": [1, 0], "patches": [[]], "instructions": "SSENNNW" })

    // Then I expect to see a client error based on the nested "patches" array being empty
    I.seeResponseCodeIsClientError();
});

Scenario('The network request payload has an empty "patches" key', ({ I }) => {

    // When the following network request is sent
    I.sendPostRequest(urlPath, { "roomSize": [5, 5], "coords": [1, 0], "": [[1, 0], [2, 2], [2, 3]], "instructions": "SSENNNW" })

    // Then I expect to see a client error based on the "patches" key being empty
    I.seeResponseCodeIsClientError();
});

Scenario('The network request payload is empty', ({ I }) => {

    // When the following network request is sent
    I.sendPostRequest(urlPath, {})

    // Then I expect to see a client error based on the payload being empty
    I.seeResponseCodeIsServerError();
});

Scenario('The network request payload has an empty "roomSize" array', ({ I }) => {

    // When the following network request is sent
    I.sendPostRequest(urlPath, { "roomSize": [], "coords": [1, 0], "": [[1, 0], [2, 2], [2, 3]], "instructions": "SSENNNW" })

    // Then I expect to see a server error based on the "roomSize" array being empty
    I.seeResponseCodeIsServerError();
});

Scenario('The network request payload has an empty "roomSize" key', ({ I }) => {

    // When the following network request is sent
    I.sendPostRequest(urlPath, { "": [5, 5], "coords": [1, 0], "patches": [[1, 0], [2, 2], [2, 3]], "instructions": "SSENNNW" })

    // Then I expect to see a server error based on the "roomSize" key being empty
    I.seeResponseCodeIsServerError();
});

Scenario('The network request payload has only one coordinate defined in the "coords" array', ({ I }) => {

    // When the following network request is sent
    I.sendPostRequest(urlPath, { "roomSize": [5, 5], "coords": [1], "patches": [[1, 0], [2, 2], [2, 3]], "instructions": "SSENNNW" })

    // Then I expect to see a client error based on the incomplete "coords" array data
    I.seeResponseCodeIsClientError();
});

Scenario('The network request payload has only one coordinate defined in the nested "patches" array', ({ I }) => {

    // When the following network request is sent
    I.sendPostRequest(urlPath, { "roomSize": [5, 5], "coords": [1, 0], "patches": [[1, 0], [2, 2], [2, 3]], "instructions": "SSENNNW" })

    // Then I expect to see a client error based on the incomplete "patches" array data
    I.seeResponseCodeIsClientError();
});

Scenario('The network request payload has only one value defined for the "roomSize" array', ({ I }) => {

    // When the following network request is sent
    I.sendPostRequest(urlPath, { "roomSize": [5], "coords": [1, 0], "patches": [[1, 0], [2, 2], [2, 3]], "instructions": "SSENNNW" })

    // Then I expect to see a server error based on the incomplete "roomSize" array
    I.seeResponseCodeIsServerError();
});

Scenario('The network request payload has an invalid value for the "instructions" string ', ({ I }) => {

    // When the following network request is sent
    I.sendPostRequest(urlPath, { "roomSize": [5, 5], "coords": [1, 0], "patches": [[1, 0], [2, 2], [2, 3]], "instructions": "SSENZNNW" })

    // Then I expect to see a client error based on the invalid value for "instructions"
    I.seeResponseCodeIsClientError();
});

Scenario('The network request payload has a float value instead of an integer in a "patches" array', ({ I }) => {

    // When the following network request is sent
    I.sendPostRequest(urlPath, { "roomSize": [5, 5], "coords": [1, 0], "patches": [[1, 0], [2, 2.2], [2, 3]], "instuctions": "SSENNNW" })

    // Then I expect to see a client error based on the float value being present in the "patches" array
    I.seeResponseCodeIsClientError();
});

Scenario('The network request payload has a misspelled "instructions" key', ({ I }) => {

    // When the following network request is sent
    I.sendPostRequest(urlPath, { "roomSize": [5, 5], "coords": [1, 0], "patches": [[1, 0], [2, 2], [2, 3]], "instuctions": "SSENNNW" })

    // Then I expect to see a client error based on the "instructions" key being misspelled
    I.seeResponseCodeIsClientError();
});

Scenario('The network request payload has a misspelled "patches" key', ({ I }) => {

    // When the following network request is sent
    I.sendPostRequest(urlPath, { "roomSize": [5, 5], "coords": [1, 0], "pathes": [[1, 0], [2, 2], [2, 3]], "instructions": "SSENNNW" })

    // Then I expect to see a client error based on the "patches" key being misspelled
    I.seeResponseCodeIsClientError();
});

Scenario('The network request payload has a lowercase "roomsize" key instead of being camel case', ({ I }) => {

    // When the following network request is sent
    I.sendPostRequest(urlPath, { "roomsize": [5, 5], "coords": [1, 0], "patches": [[1, 0], [2, 2], [2, 3]], "instructions": "SSENNNW" })

    // Then I expect to see a server error based on the "roomSize" key being lowercase
    I.seeResponseCodeIsServerError();
});

