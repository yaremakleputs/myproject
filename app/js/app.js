var angular = require('angular'),
    mainModule = require('./main/main.module.js');
    require('../css/style.scss');
angular.module('school-area',
    [
      mainModule.name
    ])
  .config(function($locationProvider) {
    $locationProvider.html5Mode(true);
  });