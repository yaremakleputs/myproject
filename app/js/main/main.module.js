var mainComponent = require('./components/main.component.js');
var mainRoute = require('./main.route.js');
var loginModule = require('./../login/login.module.js');
var presenceReportModule = require('./../presenceReport/presenceReport.module.js');
<<<<<<< 59cca1a230440c322f249b81504bd7efa5aff60c
var groupListModule = require('./../groupList/groupList.module.js');
=======
var myDayReportModule = require('./../myDayReport/myDayReport.module.js');
var studentModule = require('./../student/student.module.js');
>>>>>>> LVRUBYM-330:created student component
require('../../css/style.scss');

module.exports = angular
  .module('main', [
    mainComponent.name,
    mainRoute.name,
    loginModule.name,
    presenceReportModule.name,
<<<<<<< 59cca1a230440c322f249b81504bd7efa5aff60c
    groupListModule.name
  ])
=======
    myDayReportModule.name,
    studentModule.name
  ]);
>>>>>>> LVRUBYM-330:created student component
  .config(function($mdThemingProvider) {
    $mdThemingProvider
      .theme('default')
      .primaryPalette('light-green')
      .accentPalette('deep-purple')
      .warnPalette('red')
      .backgroundPalette('grey');
  });
