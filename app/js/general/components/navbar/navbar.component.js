'use strict';
module.exports = angular
  .module('school-area.general.navbar.component', [])
  .component('appNavbar', {
    templateUrl: '/app/js/general/components/navbar/navbar.template.html',
    controller: NavbarController,
    transclude: true
  });

function NavbarController() {
  var ctrl = this;
}
