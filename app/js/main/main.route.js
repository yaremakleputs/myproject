module.exports = angular
  .module('school_area.main.route', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state({
      url: '/',
      name: 'main',
      template: '<main-component></main-component>'
    })
  })
