module.exports = angular
  .module('tokenInjector.service', [])
  .factory('tokenInjector', TokenInjector);

TokenInjector.$inject = ['$q', '$injector', 'localStorageService', 'constants'];

function TokenInjector($q, $injector, localStorageService, constants) {
  return {
    request: function(config) {
      if (config.url.startsWith(constants.SERVER_URL)) {
        var token = localStorageService.get('token');
        config.headers.Authorization = 'Bearer ' + token;
      }
      return config;
    },
    responseError: function(response) {
      if (response.status === 401) {
        var auth = $injector.get('auth');
        auth.logout();
      }
      return $q.reject(response);
    }
  };
}
