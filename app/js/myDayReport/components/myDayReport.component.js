var myDayReportservice = require('./../../common/services/my_day_report.service');

module.exports = angular
  .module('myDayReport.component', [
    myDayReportservice.name
  ])
  .component('myDayReport', {
    templateUrl: './app/js/myDayReport/components/myDayReport.template.html',
    controller: MyDayReportController
  });

MyDayReportController.$inject = ['MyDayReport'];
function MyDayReportController(MyDayReport) {
  var ctrl = this;
  ctrl.reports = [];
  MyDayReport.getReports().then(
    function(data) {
      ctrl.reports = data;
    });

  ctrl.myDayReportUpdate = function(student) {
    MyDayReport.updateReports(student.note, student.id)
      .then(function(note) {
      return note;
    });
  };
}
