var angular = require('angular');
var mainModule = require('./main/main.module.js');
var constantsModule = require('./common/constants.js');
var vendorModule = require('./requirements.js');

angular
  .module('schoolArea', [
    vendorModule.name,
    constantsModule.name,
    mainModule.name
  ])
  .config(function($locationProvider, localStorageServiceProvider) {
    $locationProvider.html5Mode(true);
    localStorageServiceProvider.setPrefix('schoolArea');
  });
