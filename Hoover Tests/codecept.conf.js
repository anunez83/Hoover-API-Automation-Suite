/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'http://localhost:8080/'
    },
    JSONResponse: {}
  },
  include: {
    I: './steps_file.js'
  },
  name: 'myFirstTest'
}