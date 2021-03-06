var bottleCon = require('./../constants.js');
module.exports = angular
.module('bottle.resource', [])
.factory('bottleResource', bottleResource);

bottleResource.$inject = ['$resource', 'globalSettings'];

function bottleResource($resource, globalSettings) {
  return $resource(globalSettings
    .SERVER_URL_V1 + '/bottle_reports/:bottle_report_id/bottles/:id.json',
    {id: '@id',
    bottle_report_id: '@bottle_report_id'},
    {
      'update': {method: 'PUT'}
    });
}
