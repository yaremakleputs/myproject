module.exports = angular
  .module('login.component', [])
  .component('loginComponent', {
    templateUrl: './app/js/login/components/login.template.html',
    controller: LoginController
  });

LoginController.$inject = ['auth'];

function LoginController(auth) {
  var ctrl = this;

  ctrl.user = {
    email: '',
    password: ''
  };

  ctrl.login = function() {
    auth.authenticate({user: ctrl.user});
  };
}
