// Karma configuration
// Generated on Thu Apr 20 2017 22:09:07 GMT+0300 (EEST)

module.exports = function(config) {
  config.set({
    basePath: 'app/js/',
    frameworks: ['angular', 'jasmine'],
    files: [
      './specs.webpack.js'
    ],
    exclude: [
    ],
    reporters: ['progress', 'coverage'],
    preprocessors: {
      './specs.webpack.js': ['webpack', 'coverage']
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}
