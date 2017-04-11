var presenceComponent = require('./components/presence.component.js'),
    presenceRoute = require('./presence.route.js');
module.exports = angular
  .module('schoolArea.main.presence', [
    presenceComponent.name,
    presenceRoute.name
  ]);
