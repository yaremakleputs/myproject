module.exports = angular
  .module('school_area.main.route', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('main',{
      url: '/main',
      name: 'main',
      template: '<main-component></main-component>'
    })
    .state('main.presence', {
    url: '/presence',
    template: '<presence-component></presence-component>'
  });
  });
