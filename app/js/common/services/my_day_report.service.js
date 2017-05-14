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
    return myDayReportResource.query({group_id: currentGroupDay.group_id,
                                      day: currentGroupDay.day})
    .$promise
    .then(responseSuccess, responseFailure);
  };

  function updateReports(note, id) {
    return myDayReportResource.update({report: {note: note},
                                      id: id,
                                      group_id: currentGroupDay.group_id,
                                      day: currentGroupDay.day})
    .$promise
    .then(responseSuccess, responseFailure);
  };

  function responseSuccess(data) {
    return data;
  };

  function responseFailure(errorInfo) {
    if (!errorInfo.data || errorInfo.data.length === 0) {
      toggleMessage.showMessages([errorMessages.FAIL_RESPONSE]);
    }else {
      toggleMessage.showMessages([errorInfo.data.error]);
    }
  };
};
