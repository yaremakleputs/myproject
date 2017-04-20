var groupService = require('./../../common/services/group.service');
module.exports = angular
  .module('groupList.component', [
    groupService.name
    ])
  .component('groupList', {
    templateUrl: './app/js/groupList/components/groupList.template.html',
    controller: groupListController
  });

groupListController.$inject = [
  'groupService',
  'currentGroupDay'
];

function groupListController(groupService, currentGroupDay) {
  var ctrl = this;
  ctrl.groups = [];
  ctrl.currentGroupDay = currentGroupDay;

  groupService.getGroups().then(
    function(data) {
      ctrl.groups = data;
      ctrl.currentGroupDay.group_id = ctrl.groups[0].id;
    }
  );
};
