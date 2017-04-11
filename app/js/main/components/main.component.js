module.exports = angular
  .module('schoolArea.main.component', [])
  .component('mainComponent', {
    templateUrl: './app/js/main/components/main.template.html',
    controller: [
        '$scope',
        MainController
    ],
    transclude: true
    });
    

function MainController($scope) {
  var ctrl = this;
  var date = $scope;
  var month = $scope;
  var day = $scope;

  date.selectedDate = new Date();
  month.monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  day.dayNames = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

  date.nextDate = () => {
  date.selectedDate.setDate(date.selectedDate.getDate() + 1);
  }

  date.pastDate = () => {
  date.selectedDate.setDate(date.selectedDate.getDate() - 1);
  }

  date.showMonth = () => {
  date.selectedDate.setDate(month.monthNames[date.selectedDate.getMonth()+1]);
  }

date.showDay = () => {
date.selectedDate.setDate(day.dayNames[date.selectedDate.getDay()+1]);
}
};

