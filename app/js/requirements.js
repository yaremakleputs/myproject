require('../css/style.scss');
require('angular-material');
require('angular-material/angular-material.css');

module.exports = angular
  .module('school_area.vendor', [
    'ngMaterial',
    require('angular-ui-router')
    ]);
