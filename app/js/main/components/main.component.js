'use strict';
module.exports = angular
  .module('school-area.main.component', [])
  .component('appMain', {
    templateUrl: '/app/js/main/components/main.template.html',
    controller: MainController,
    transclude: true
    });

function MainController(){
  var ctrl = this;
}