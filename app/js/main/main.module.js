var mainComponent = require('./components/main.component.js'),
    mainRoute = require('./main.route.js'),
    presenceModule = require('./../presence/presence.module.js');
require('../../css/style.scss');

module.exports = angular
  .module('schoolArea.main', [
    mainComponent.name,
    mainRoute.name,
    presenceModule.name
  ]);
