'use strict';
module.exports = angular
  .module('school-area.general.header.component', [])
  .component('appHeader', {
    templateUrl: '/app/js/general/components/header/header.template.html',
    controller: HeaderController,
    transclude: true
  });

function HeaderController() {
  var ctrl = this;
}
