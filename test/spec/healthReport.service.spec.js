var healthVendor = require('./../../app/js/requirements.js');
var HealthReport = require('./../../app/js/common/services/healthReport.service.js');
var constantsModule = require('./../../app/js/common/constants.js');
var valuesModule = require('./../../app/js/common/values.js');
var toggle = require('./../../app/js/common/services/toggleMessage/toggleMessage.service.js');

describe('Health Report Test', function() {
  var service;
  var $httpBackend;

  var student = {id: 1,
                first_name: 'Samm',
                last_name: 'Winchester'};

  var report = {health_note: 'All is ok',
                special_care: true,
                id: 1,
                group_id: 1,
                student: student};

  var reports = [report];

  var errors = {errors: ['Error message']};

  beforeEach(angular.mock.module(healthVendor.name,
                                 HealthReport.name,
                                 constantsModule.name,
                                 valuesModule.name,
                                 toggle.name
                                 ));

  beforeEach(inject(function($injector) {
    service = $injector.get('HealthReport');
    $httpBackend = $injector.get('$httpBackend');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('#getReports is defined', function() {
    expect(service.getReports).toBeDefined();
  });

  it('#updateReports is define', function() {
    expect(service.updateReports).toBeDefined();
  });

  it('is should return all reports', inject(function(toggleMessage,
                                                     globalSettings,
                                                     currentGroupDay) {

    $httpBackend.whenGET(globalSettings.SERVER_URL_V1 +
      '/health_reports.json?group_id=' + currentGroupDay.group_id).respond(200, reports);

    var response;
    spyOn(toggleMessage, 'showMessages');
    service.getReports().then(function(Reports) {
      response = Reports;
    });

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(reports));
  }));

  it('it can return error message when updated report', inject(function(toggleMessage,
                                                     globalSettings,
                                                     currentGroupDay) {

    $httpBackend.whenPUT(globalSettings.SERVER_URL_V1 + '/health_reports/' +
      report.id + '.json?group_id=' + currentGroupDay.group_id).respond(400, errors);

    var response;
    var health_note = report.health_note;
    var special_care = report.special_care;
    var id = report.id;

    spyOn(toggleMessage, 'returnDataErrors');
    service.updateReports(health_note, special_care, id).then(function(updatedReport) {
      response = updatedReport;
    });

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(errors));
  }));

  it('when updated report', inject(function(toggleMessage,
                                            globalSettings,
                                            currentGroupDay) {

    $httpBackend.whenPUT(globalSettings.SERVER_URL_V1 + '/health_reports/' +
      report.id + '.json?group_id=' + currentGroupDay.group_id).respond(200, report);

    var response;
    var health_note = report.health_note;
    var special_care = report.special_care;
    var id = report.id;

    spyOn(toggleMessage, 'returnDataErrors');
    service.updateReports(health_note, special_care, id).then(function(updatedReport) {
      response = updatedReport;
    });

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(report));
  }));
});
