var mainComponent = require('./components/main.component.js');
var mainRoute = require('./main.route.js');
var loginModule = require('./../login/login.module.js');
var forgotPasswordModule = require('./../forgotPassword/forgotPassword.module.js');
var resetPasswordModule = require('./../resetPassword/resetPassword.module.js');
var presenceReportModule = require('./../presenceReport/presenceReport.module.js');
var studentModule = require('./../student/student.module.js');
var groupService = require('./../common/services/group.service.js');
var toggleMessage = require('./../common/services/toggleMessage/toggleMessage.service.js');
var bottleReportModule = require('.././bottleReport/bottleReport.module.js');
var sideBarModule = require('./../sidebar/sidebar.module.js');
var studentService = require('./../common/services/student.service.js');
var profileModule = require('./../profile/profile.module.js');
var healthReportModule = require('./../healthReport/healthReport.module.js');
var myDayReportModule = require('./../myDayReport/myDayReport.module.js');
var ourDayReportModule = require('./../ourDayReport/ourDayReport.module.js');

require('../../css/style.scss');

module.exports = angular
  .module('main', [
    mainComponent.name,
    mainRoute.name,
    loginModule.name,
    presenceReportModule.name,
    studentModule.name,
    bottleReportModule.name,
    groupService.name,
    toggleMessage.name,
    sideBarModule.name,
    studentService.name,
    profileModule.name,
    forgotPasswordModule.name,
    resetPasswordModule.name,
    healthReportModule.name,
    myDayReportModule.name,
    ourDayReportModule.name
  ])

  .config(['$translateProvider', function($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: 'app/js/i18n/locale-',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');
  }])
  .config(function($mdThemingProvider) {
    $mdThemingProvider
      .theme('default')
      .primaryPalette('light-green')
      .accentPalette('deep-purple')
      .warnPalette('red')
      .backgroundPalette('grey');
  });
