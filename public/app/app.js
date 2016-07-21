angular.module('app', ['ngResource', 'ngRoute', 'ngAnimate']);

angular.module('app').config(function ($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl: '/partials/main/main',
      controller: 'mainCtrl',
      activetab: 'home'
    })
    .when('/players', {
      templateUrl: '/partials/main/players',
      controller: 'playersCtrl',
      activetab: 'players'
    })
    .when('/contact', {
      templateUrl: '/partials/main/contact',
      controller: 'contactCtrl',
      activetab: 'contact'
    })
    .when('/login', {
      templateUrl: '/partials/account/login',
      controller: 'loginCtrl'
    })
    .when('/signup', {
      templateUrl: '/partials/account/signup',
      controller: 'signupCtrl'
    })
});

angular.module('app').run(function ($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function (evt, current, previous, rejection) {
    if (rejection === 'not authorized') {
      $location.path('/login');
    }
  })
});
