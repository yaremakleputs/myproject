var angular = require('angular'),
    mainModule = require('./main/main.module.js');
require('@angular/router/angular1/angular_1_router');

angular.module('neighbors',
    [
      mainModule.name
    ])
  .config(function($locationProvider) {
    $locationProvider.html5Mode(true);
  });