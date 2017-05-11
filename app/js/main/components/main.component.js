var authService = require('./../../common/services/auth.service.js');

module.exports = angular
  .module('main.component', [
    authService.name
  ])
  .component('mainComponent', {
    templateUrl: './app/js/main/components/main.template.html',
    controller: MainController,
    bindings: {
      groups: '<'
    }
  });

MainController.$inject = [
  '$scope',
  '$state',
  'auth',
  'currentGroupDay',
  'currentUser',
  'globalSettings'
];

function MainController($scope, $state, auth, currentGroupDay, currentUser, globalSettings) {
  var ctrl = this;

  ctrl.currentGroupDay = currentGroupDay;
  ctrl.currentUserValues = currentUserValues;
  ctrl.currentUser = currentUser;
  ctrl.fullname = ctrl.currentUser.first_name + ' ' + ctrl.currentUser.last_name;
  ctrl.avatar = ctrl.currentUser.url || globalSettings.STUDENT_IMG;

  ctrl.logout = function() {
    auth.logout();
    localStorage.removeItem('activeMenu');
    localStorage.removeItem('activeSubmenu');
  };

  $scope.$watch(
    function() { return currentGroupDay.group_id; },
    function() { $state.reload($state.current); }
  );
};
