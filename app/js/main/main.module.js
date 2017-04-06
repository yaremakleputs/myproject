var mainRoute = require('./main.route'),
    mainComponent = require('./components/main.component.js');
module.exports = angular.module("school-area.main", [
  // components
  require('angular-ui-router'),
  mainComponent.name,
  mainRoute.name
]);