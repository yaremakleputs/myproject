var authResource =  require('./../resources/auth.resource.js');

module.exports = angular
  .module('auth.service', [
    authResource.name
  ])
  .factory('auth', AuthFactory);

AuthFactory.$inject = [
  '$q',
  '$state',
  '$mdToast',
  'localStorageService',
  'globalSettings',
  'errorMessages',
  'authResource'
];

function AuthFactory(
  $q,
  $state,
  $mdToast,
  localStorageService,
  globalSettings,
  errorMessages,
  authResource) {
  var toState;
  var fromState;
  var savedState = globalSettings.MAIN_STATE;
  var authenticated = !!localStorageService.get('token');

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
        },
        function(response) {
          service.toggleErrorMsg(response);
        });
    },

    refreshToken: function() {
      authResource.refreshToken().$promise.then(
        service.saveToken,
        function(response) {
          service.toggleErrorMsg(response);
          service.removeToken();
        });
    },

    saveToken: function(response) {
      authenticated = true;
      localStorageService.set('token', response.headers()['auth-token']);
    },

    logout: function() {
      savedState = globalSettings.MAIN_STATE;
      service.removeToken();
    },

    removeToken: function() {
      authenticated = false;
      localStorageService.remove('token');
      $state.go(globalSettings.LOGIN_STATE);
    },

    getErrorMsg: function(status) {
      switch (status) {
        case 401:
          return errorMessages.NO_AUTH;
        case 419:
          return errorMessages.AUTH_TIMEOUT;
      }
    },

    toggleErrorMsg: function(response) {
      var msg = service.getErrorMsg(response.status);

      $mdToast.show({
        template: '<md-toast><div class="md-toast-content">' +
                    msg +
                  '</div></md-toast>',
        position: 'top right'
      });
    }
  };

  return service;
}
