# Hoover API Automated Tests

## Overview
These tests were created to verify the functionality of the *v1/cleaning-sessions* API and will not function correctly if the Docker Service is not running on your local machine.


## Build requirements
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


## Getting started
1. Download the test suite via the [Initial-Tests](https://github.com/anunez83/Hoover-API-Automation-Suite/tree/Initial-Tests) repo
2. Unpack the zip file and open it in your code editor
3. On first run the *npx codeceptjs init* command should be utilized to ensure that everything has been initialized properly
4. The command `npx codeceptjs run` or `npx codeceptjs run "hoover_api_combined_tests.js"` can be utilized to run the tests
	* Additionally the `--verbose` flag can be appended to the end of either command to provide more detailed results

## Known Issues
1. The API **does not** appear to have a mechanism in place to remove patches from memory that have been cleaned. Because of this, any tests containing logic to validate the server response based on `"coords"` or `"patches"` will fail until the API is restarted.

## Possible Improvements
* I think it would make things much more efficient to have the API Response updated to include the corresponding x/y coordinates of the `"patches"` that were cleaned.
* In addition if the API was updated to include a `"patches_missed"` count in along with the corresponding x/y coordinates it would greatly help