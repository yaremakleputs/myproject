var authResource =  require('./../resources/auth.resource.js');

module.exports = angular
  .module('auth.service', [
    authResource.name
  ])
  .factory('auth', AuthFactory);

AuthFactory.$inject = [
  '$state',
  'localStorageService',
  'constants',
  'authResource'
];

function AuthFactory($state, localStorageService, constants, authResource) {
  var toState;
  var fromState;
  var savedState = constants.MAIN_STATE;
  var authenticated = localStorageService.get('token') ? true : false;

  var service = {
    authorization: function(event, to, from) {
      toState = to.name ? to : constants.MAIN_STATE;
      fromState = from.name ? from : constants.MAIN_STATE;

      if (!toState.skipAuth) {
        if (authenticated) {
          savedState = toState;
          service.refreshToken();
        } else {
          event.preventDefault();
          $state.go(constants.LOGIN_STATE);
        }
      }
      if (toState.skipAuth && authenticated) {
        event.preventDefault();
        $state.go(fromState);
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
      service.removeToken();
      $state.go(constants.LOGIN_STATE);
    },

    saveToken: function(response) {
      authenticated = true;
      localStorageService.set('token', response.headers()['auth-token']);
    },

    removeToken: function() {
      authenticated = false;
      savedState = constants.MAIN_STATE;
      localStorageService.remove('token');
    }
  };

  return service;
}
