module.exports = angular
  .module('values', [])
  .value('currentGroupDay', {
    group_id: 0,
    day: new Date()
  });
