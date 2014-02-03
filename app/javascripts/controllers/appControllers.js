var App = angular.module('app', [
  'ngRoute',
  'tictactoe'
]);
 
App.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl   : 'tictac-partials/home',
        controller    : 'HomeController',
        controllerAs  : 'home'
      }).
      when('/lobby', {
        templateUrl   : 'tictac-partials/lobby',
        controller    : 'LobbyController',
        controllerAs  : 'lobby'
      }).
      when('/waitingroom', {
        templateUrl   : 'tictac-partials/waitingroom',
        controller    : 'WRController',
        controllerAs  : 'waitingroom'
      }).
      when('/singleplayer', {
        templateUrl   : 'tictac-partials/singleplayer',
        controller    : 'SPController',
        controllerAs  : 'spControl'
      }).
      when('/register', {
        templateUrl   : 'tictac-partials/register',
        controller    : 'RegisterController',
        controllerAs  : 'register'
      }).
      when('/mainmenu', {
        templateUrl   : 'tictac-partials/mainmenu',
        controller    : 'MainMenuController',
        controllerAs  : 'main'
      }).
      when('/creategame', {
        templateUrl   : 'tictac-partials/creategame',
        controller    : 'CreateGameController',
        controllerAs  : 'createGame'
      }).
      otherwise({
        redirectTo: '/home'
     });
}]);

var Tic = angular.module('tictactoe', []);
var timeout;

Tic.controller('HomeController', ['$http', '$q', '$location', function ($http, $q, $location) {
  var controller = this;

  this.user = {
    username : "",
    password : "",
    confirmedPassword : ""
  }

  this.login = function () {
    var deferred = $q.defer();

    $http.post('/api/v1/login/', controller.user).success(function () {

      // Redirect user to main menu
      $location.path('/mainmenu');

    }).error(function () {

      // Not able to login
      alert('error in login');
    });
  }

  this.register = function () {
    $location.path('/register');
  }

}]);

Tic.controller('LobbyController', ['$scope', function ($scope) {

}]);

Tic.controller('SPController', ['$scope', function ($scope) {

}]);

Tic.controller('WRController', ['$scope', '$timeout', function ($scope, $timeout) {
  
  $scope.gameStarted = false;

  this.gameStarted = function () {
    return $scope.gameStarted;
  }

  this.startGame = function () {
    $scope.gameStarted = true;
    $scope.counter = 5;

    /* This is probably not the best way to do it but it works.
       Feel free to change it if you want! */
    $timeout(function() { $scope.counter--; }, 1000);
    $timeout(function() { $scope.counter--; }, 2000);
    $timeout(function() { $scope.counter--; }, 3000);
    $timeout(function() { $scope.counter--; }, 4000);
    $timeout(function() { $scope.counter--; }, 5000);
  }
  
}]);

Tic.controller('RegisterController', ['$scope', function ($scope) {

}]);

Tic.controller('MainMenuController', ['$scope', function ($scope) {

}]);

Tic.controller('CreateGameController', ['$scope', function ($scope) {

}]);
