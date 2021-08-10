// Karma configuration
// Generated on Tue Aug 10 2021 03:55:22 GMT-0700 (Pacific Daylight Time)

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
          './node_modules/angular/angular.js',                             
          './node_modules/angular-ui-router/release/angular-ui-router.js', 
          './node_modules/angular-mocks/angular-mocks.js', 
          './public/services/posts/posts.js',                                 
          './public/js/app.js',     
          'public/services/posts/posts.spec.js'
    ],

    // list of files / patterns to exclude
    exclude: [
    ],


    preprocessors: {
    },

    reporters: ['progress'],

    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser instances should be started simultaneously
    concurrency: Infinity
  })
}
