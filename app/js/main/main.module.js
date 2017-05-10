var mainComponent = require('./components/main.component.js');
var mainRoute = require('./main.route.js');
var loginModule = require('./../login/login.module.js');
var presenceReportModule = require('./../presenceReport/presenceReport.module.js');
var studentModule = require('./../student/student.module.js');
var groupService = require('./../common/services/group.service.js');
var staticModule = require('./../static/static.module.js');
<<<<<<< HEAD
<<<<<<< HEAD
var toggleMessage = require('./../common/services/toggleMessage/toggleMessage.service.js');
<<<<<<< HEAD
var bottleReportModule = require('.././bottleReport/bottleReport.module.js');
=======
=======
>>>>>>> LVRUBYM-344: Create main template style
<<<<<<< HEAD
>>>>>>> LVRUBYM-344: Create main template style
=======
=======
var sideBarModule = require('./../sidebar/sidebar.module.js');
>>>>>>> LVRUBYM-349:Create sidebar component
>>>>>>> LVRUBYM-349:Create sidebar component

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
<<<<<<< HEAD
<<<<<<< HEAD
    staticModule.name,
    toggleMessage.name
=======
    staticModule.name
>>>>>>> LVRUBYM-344: Create main template style
=======
    staticModule.name,
    sideBarModule.name
>>>>>>> LVRUBYM-349:Create sidebar component
  ])
  .config(['$mdThemingProvider',
    function($mdThemingProvider) {
      $mdThemingProvider
        .theme('default')
        .primaryPalette('light-green')
        .accentPalette('deep-purple')
        .warnPalette('red')
        .backgroundPalette('grey');
    }]);
