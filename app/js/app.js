var angular = require('angular'),
    mainModule = require('./main/main.module.js'),
    presenceModule = require('./presence/presence.module.js'),
    vendorModule = require('./requirements.js');

angular
  .module('school_area', [
    vendorModule.name,
    mainModule.name,
    presenceModule.name
  ])
  .config(function($locationProvider) {
    $locationProvider.html5Mode(true);
  });
