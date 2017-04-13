module.exports = angular
  .module('auth.resource', [])
  .factory('authResource', AuthResource);

AuthResource.$inject = ['$resource', 'constants'];

function AuthResource($resource, constants) {
  var resource = $resource(constants.SERVER_URL + '/:action', {},
    {
      'authenticate': {
        params: {action: 'signin'},
        method: 'POST',
        interceptor: {
          response: function(response) {
            return response;
          }
        }
      },
      'refreshToken': {
        params: {action: 'refresh_token'},
        method: 'GET',
        interceptor: {
          response: function(response) {
            return response;
          }
        }
      }
    });
  return resource;
}
