var myDayReportService = require('./../../app/js/common/services/my_day_report.service.js');
var requirements = require('./../../app/js/requirements.js');
var constantsModule = require('./../../app/js/common/constants.js');
var values = require('./../../app/js/common/values.js');
var message = require('./../../app/js/common/services/toggleMessage/toggleMessage.service.js');

describe('MyDayReport Test', function() {
  var service;
  var $httpBackend;

  var student = {id: 1,
                first_name: 'Samm',
                last_name: 'Winchester'};

  var report = {note: 'All is ok',
                id: 1,
                student: student};

  var reports = [report];

  var errors = {errors: ['Error message']};

  beforeEach(angular.mock.module(requirements.name,
                                 constantsModule.name,
                                 values.name,
                                 myDayReportService.name,
                                 message.name));

  beforeEach(inject(function($injector) {
    service = $injector.get('MyDayReport');
    $httpBackend = $injector.get('$httpBackend');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('GetReports is define', function() {
    expect(service.getReports).toBeDefined();
  });

  it('UpdateReports is define', function() {
    expect(service.updateReports).toBeDefined();
  });

  it('is should return all reports', inject(function(toggleMessage,
                                                     globalSettings,
                                                     currentGroupDay) {

    $httpBackend.whenGET(globalSettings.SERVER_URL_V1 +
      '/my_day_reports.json?group_id=' + currentGroupDay.group_id).respond(200, reports);

    var response;
    spyOn(toggleMessage, 'showMessages');
    service.getReports().then(function(myDayReports) {
      response = myDayReports;
    });

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(reports));
  }));

  it('when updated report', inject(function(toggleMessage,
                                            globalSettings,
                                            currentGroupDay) {

    $httpBackend.whenPUT(globalSettings.SERVER_URL_V1 + '/my_day_reports/' +
      report.id + '.json').respond(200, report);

    var response;
    var note = report.note;
    var id = report.id;

    spyOn(toggleMessage, 'showMessages');
    service.updateReports(note, id).then(function(updatedReport) {
      response = updatedReport;
    });

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(report));
  }));

});
