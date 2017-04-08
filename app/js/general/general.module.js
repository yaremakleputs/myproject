var headerComponent = require('./components/header/header.component.js'),
    navbarComponent = require('./components/navbar/navbar.component.js');
module.exports = angular.module("school-area.general", [
  headerComponent.name,
  navbarComponent.name
]);
