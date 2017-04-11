module.exports = angular
  .module('school_area.presence.component', [])
  .component('presenceComponent', {
    templateUrl: './app/js/presence/components/presence.template.html',
    controller: PresenceController
  });

function PresenceController() {
  var ctrl = this;
};
