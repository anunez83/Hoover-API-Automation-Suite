# Hoover API Automated Tests

## Overview
These tests were created to verify the functionality of the *v1/cleaning-sessions* API and will not function correctly if the Docker Service is not running on your local machine.


## Test Requirements
 * [Docker v.18+](https://www.docker.com/)
   * [Platform Science SDET assignment repo](https://bitbucket.org/platformscience/pltsci-sdet-assignment/src/main/)
* [Node.js](https://nodejs.org/en)
* [CodeceptJS](https://codecept.io/)


## Documentation 
* The API endpoint is defined in the `codecept.conf.js` file
* All of the test scenarios are contained within the `hoover_api_combined_tests.js` file
* A `hoover_commons.js` file is provided which contains the following:
	* `urlPath`: This constant provides the API path `v1/cleaning-sessions`
  * `roomSize`: This constant provides the default room size of `[5, 5]`
	  * To test a roomSize larger than `[5, 5]` one can be defined directly in the request like so:
		  * `I.sendPostRequest(url, { "roomSize": [10, 10], "coords": [9, 0], "patches": [[5, 0], [6, 2], [8, 3]], "instructions":  "WNNNWWSSS" })`
  * `createJsonPayload`: This is a utlity function to generate the payload with `roomSize`, `coords`, `patches`, and `instructions`


## Getting Started
1. Download the test suite via the [Initial-Tests](https://github.com/anunez83/Hoover-API-Automation-Suite/tree/Initial-Tests) repo
2. Unpack the zip file and open it in your code editor
3. Open a CLI window
4. Change directory to the `"Automated Tests"` folder
5. On first run the *npx codeceptjs init* command will need to be utilized to ensure that everything has been initialized properly
6. The command `npx codeceptjs run` or `npx codeceptjs run "hoover_api_combined_tests.js"` can be utilized to run the tests
	* Additionally the `--verbose` flag can be appended to the end of either command to provide more detailed results
7. Upon completion the CLI will print an output of passes and failures. Failures will include more detailed information to highlight what caused the test(s) to fail.

## Known Issues
1. The API **does not** appear to have a mechanism in place to remove patches from memory that have been cleaned. Because of this, any tests containing logic to validate the server response based on  `"patches"` will fail until the API is restarted.
	* This can be seen utilizing the last scenario `The Hoover is navigated across the entirety of a 5x5 grid with each sector being defined as a dirt patch` which is commented out by default, but can be run to see how this affects the subsequent tests.
2. If the Hoover starting `"coords"` begin on a dirt patch the current logic does not treat this as cleaned, until the Hoover traverses that sector again via the provided `"instructions"`
3. The API accepts float data in the array for `"patches"` which I'm not sure is intended or a bug.
4. A `java.lang.NullPointerException: null` error was seen in the API logs for the following scenarios:
	* Scenario('The network request payload is empty')
	* Scenario('The network request payload has an empty "roomSize" array')
	* Scenario('The network request payload has a lowercase "roomsize" key instead of being camel case')
5. A `java.lang.ArrayIndexOutOfBoundsException: 0` error was seen in the API logs for the following scenario:
	* Scenario('The network request payload has an empty "roomSize" array')
6. A `java.lang.ArrayIndexOutOfBoundsException: 1` error was seen in the API logs for the following scenario:
	* Scenario('The network request payload has only one value defined for the "roomSize" array')

## Recommended Improvements
* It would make things much more efficient to have the API Response updated to include the corresponding `[x, y]` coordinates of the `"patches"` that were cleaned.
* I also think a nice addition to the API Response would be to include a new `"patches_missed"` count along with the corresponding `[x, y]` coordinates. Something like this would greatly improve the usability and usefulness of the response data. 
* Any network requests that fail due to a Status Code of `400` currently have an empty message returned by the API. Implementing detailed response messages would help consumers of the API pinpoint the problems with these specific requests.
* Network requests that fail due to a status code of `500` are more detailed than the others, but aren't very informative to consumers as to what the exact issue is.
	* Through my testing I saw messages returned for these that included `null`, `"0"`, and `"1"`