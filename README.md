# Hoover API Automated Tests

## Overview
These tests were created to verify the functionality of the *v1/cleaning-sessions* API and will not function correctly if the Docker Service is not running on your local machine.


## Test Requirements
 * [Docker v.18+](https://www.docker.com/)
   * [Platform Science SDET assignment repo](Platform%20Science%20Software%20Development%20Engineer%20in%20Test%20assignment)
* [Node.js](https://nodejs.org/en)
* [CodeceptJS](https://codecept.io/)


## Documentation 
* All of the test scenarios are contained within the `hoover_api_combined_tests.js` file
* A `hoover_commons.js` file is provided which contains the following:
	* `url`: This const provides the API endpoint `v1/cleaning-sessions`
  * `roomSize`: This const provides the default room size of `[5, 5]`
	  * To test a roomSize larger than `[5, 5]` one can be defined directly in the request like so:
		  * `I.sendPostRequest(url, { "roomSize": [10, 10], "coords": [9, 0], "patches": [[5, 0], [6, 2], [8, 3]], "instructions":  "WNNNWWSSS" })`
  * `createJsonPayload`: This function returns an object with `roomSize`, `coords`, `patches`, and `instructions`
 * When possible a var named `expectedJson` is being utilized to define the expected response coming from the API that will be validated against


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
1. The API **does not** appear to have a mechanism in place to remove patches from memory that have been cleaned. Because of this, any tests containing logic to validate the server response based on `"coords"` or `"patches"` will fail until the API is restarted.
2. If the Hoover starting `"coords"` begin on a dirt patch the current logic does not treat this as cleaned, until the Hoover traverses that sector again via the provided `"instructions"`

## Recommended Improvements
* I think it would make things much more efficient to have the API Response updated to include the corresponding `[x, y]` coordinates of the `"patches"` that were cleaned.
* I think it would be great if the API was updated to include a `"patches_missed"` count along with the corresponding `[x, y]` coordinates. Something like this would greatly improve the usability and usefulness of the response data. 
* Network requests that fail due to a status code of `400` currently have an empty message returned by the API. Implementing detailed response messages would help consumers of the API pinpoint the problems with these specific requests.
* Network requests that fail due to a status code of `500` are more detailed than the others, but aren't very informative to consumers as to what the exact issue is.
	* Through my testing I saw messages returned for these that included `null`, `"0"`, and `"1"`
