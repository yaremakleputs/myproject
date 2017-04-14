var authResource =  require('./../resources/auth.resource.js');

module.exports = angular
  .module('auth.service', [
    authResource.name
  ])
  .factory('auth', AuthFactory);

AuthFactory.$inject = [
  '$state',
  'localStorageService',
  'globalSettings',
  'authResource'
];

function AuthFactory($state, localStorageService, globalSettings, authResource) {
  var toState;
  var fromState;
  var savedState = globalSettings.MAIN_STATE;
  var authenticated = localStorageService.get('token') ? true : false;

  var service = {
    authorization: function(event, to, from) {
      toState = to.name ? to : globalSettings.MAIN_STATE;
      fromState = from.name ? from : globalSettings.MAIN_STATE;
      if (toState.skipAuth) {
        if (authenticated) {
          event.preventDefault();
          $state.go(fromState);
        }
      } else {
        if (authenticated) {
          savedState = toState;
          service.refreshToken();
        } else {
          event.preventDefault();
          $state.go(globalSettings.LOGIN_STATE);
        }
      }
    },

    authenticate: function(user) {
      authResource.authenticate(user).$promise.then(
        function(response) {
          service.saveToken(response);
          $state.go(savedState);
        });
    },

    refreshToken: function() {
      authResource.refreshToken().$promise.then(service.saveToken);
    },

    logout: function() {
      savedState = globalSettings.MAIN_STATE;
      service.removeToken();
    },

    saveToken: function(response) {
      authenticated = true;
      localStorageService.set('token', response.headers()['auth-token']);
    },

    removeToken: function() {
      authenticated = false;
      localStorageService.remove('token');
      $state.go(globalSettings.LOGIN_STATE);
    }
  };

  return service;
}
