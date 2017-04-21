var groupResource = require('./../resources/group.resource.js');

module.exports = angular
  .module('group.service', [
    groupResource.name
  ])
  .factory('groupService', groupService);

groupService.$inject = ['groupResource'];

function groupService(groupResource) {
  var service = {
    getGroups: getGroups
  };
  return service;

  function getGroups() {
    return groupResource.query().$promise.then(function(data) {
        return data;
      });
  };
}
