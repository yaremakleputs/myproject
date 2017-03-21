'use strict';
module.exports = angular
  .module('neighbors.main.component', [])
  .component('appMain', {
    templateUrl: '/app/js/main/components/main.template.html',
    controller: MainController,
    transclude: true
    });

function MainController(){
  var ctrl = this;
}