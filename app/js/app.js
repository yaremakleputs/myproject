var angular = require('angular'),
    generalModule = require('./general/general.module.js'),
    mainModule = require('./main/main.module.js'),
    vendorModule = require('./requirements.js');

angular
  .module('school_area', [
    vendorModule.name,
    generalModule.name,
    mainModule.name

  ])
  .config(function($locationProvider) {
    $locationProvider.html5Mode(true);
  });
