'use strict';
module.exports = angular
  .module('school-area.main.route', [])
  .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider.state({ 
        name: 'main',
        url: '/', 
        template: '<app-main></app-main>'
      });
  });