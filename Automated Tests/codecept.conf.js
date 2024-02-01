/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_tests.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'http://localhost:8080/',
      prettyPrintJson: true
    },
    JSONResponse: {}
  },
  include: {
    I: './steps_file.js'
  },
  name: 'hoooverApiAutomation'
}