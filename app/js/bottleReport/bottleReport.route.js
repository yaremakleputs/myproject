module.exports = angular
.module('bottleReport.route', [])
.config(['$stateProvider',
function($stateProvider) {
    $stateProvider.state('main.bottleReport', {
      url: '/bottle_report',
      template: '<bottle-report></bottle-report>'
    });
  }]);
