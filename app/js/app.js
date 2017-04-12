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
  })
  .run(['$rootScope', '$state', 'auth',
    function($rootScope, $state, auth) {
      $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState) {
          if (toState.name === 'login' && auth.authenticated) {
            event.preventDefault();
          }

          if (toState.name !== 'login') {
            auth.toState = toState.name;

            if (!auth.authenticated) {
              event.preventDefault();
              $state.transitionTo('login');
            } else {
              auth.refreshToken();
            }
          }
        });
    }]);
