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
  'currentGroupDay'
];

function MainController($scope, $state, auth, currentGroupDay) {
  var ctrl = this;

  ctrl.currentGroupDay = currentGroupDay;
  ctrl.selectedDate = new Date();
  ctrl.monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  ctrl.dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  ctrl.nextDate = function() {
    ctrl.selectedDate.setDate(ctrl.selectedDate.getDate() + 1);
  };

  ctrl.pastDate = function() {
    ctrl.selectedDate.setDate(ctrl.selectedDate.getDate() - 1);
  };

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
