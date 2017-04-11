module.exports = angular
  .module('schoolArea.main.route', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/presence');
    $stateProvider.state('main',{
      name: 'main',
      template: '<main-component></main-component>'
    })
    ;
  });
