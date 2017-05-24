var Resource = require('./../resources/my_day_report.resource.js');
var toggleMessage = require('./toggleMessage/toggleMessage.service.js');

module.exports = angular
  .module('myDayReport.service', [
    Resource.name,
    toggleMessage.name
    ])
  .factory('MyDayReport', MyDayReport);

MyDayReport.$inject = ['myDayReportResource',
                       'currentGroupDay',
                       'errorMessages',
                       'toggleMessage'];

function MyDayReport(myDayReportResource,
                     currentGroupDay,
                     errorMessages,
                     toggleMessage) {
  var service = {
    getReports: getReports,
    updateReports: updateReports
  };
  return service;

  function getReports() {
    var params = {group_id: currentGroupDay.group_id};
    return myDayReportResource.query(params)
    .$promise
    .then(responseSuccess, responseFailure);
  };

  function updateReports(note, id) {
    var params = {report: {note: note},
                  id: id,
                  group_id: currentGroupDay.group_id
                };
    return myDayReportResource.update(params)
    .$promise
    .then(responseSuccess, responseFailure);
  };

  function responseSuccess(data) {
    return data;
  };

  function responseFailure(response) {
    toggleMessage.returnDataErrors(response);
  };
};
