module.exports = angular
  .module('schoolArea.presence.route', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('main.presence', {
      url: '/presence',
      template: '<presence-component></presence-component>'
    });
  });
