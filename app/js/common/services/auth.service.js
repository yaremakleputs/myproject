module.exports = angular
  .module('auth.service', [])
  .factory('auth', AuthFactory);

AuthFactory.$inject = [
  '$http',
  '$state',
  'localStorageService',
  'constants'
];

function AuthFactory($http, $state, localStorageService, constants) {
  var service = {
    authenticated: false,
    toState: 'main',

    authenticate: function(user) {
      $http.post(constants.serverUrl + '/signin', user)
      .then(function(response) {
        service.saveToken(response);
        $state.transitionTo(service.toState);
      });
    },

    refreshToken: function() {
      $http.get(constants.serverUrl + '/refresh_token')
      .then(service.saveToken);
    },

    saveToken: function(response) {
      service.authenticated = true;
      localStorageService.set('token', response.headers()['auth-token']);
    },

    removeToken: function() {
      service.authenticated = false;
      localStorageService.remove('token');
    }
  };

  return service;
}
