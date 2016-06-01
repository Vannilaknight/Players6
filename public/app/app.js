angular.module('app', ['ngResource', 'ngRoute', 'ngAnimate']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
    var routeRoleChecks = {
        admin: {
            auth: function (Auth) {
                return Auth.authorizeCurrentUserForRoute('admin')
            }
        },
        user: {
            auth: function (Auth) {
                return Auth.authorizeAuthenticatedUserForRoute()
            }
        }
    }

    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: '/partials/main/main',
            controller: 'mainCtrl'
        })
        .when('/admin/users', {
            templateUrl: '/partials/admin/user-list',
            controller: 'userListCtrl', resolve: routeRoleChecks.admin
        })
        .when('/aboutUs', {
            templateUrl: '/partials/main/aboutUs',
            controller: 'aboutUsCtrl'
        })
      .when('/home', {
        templateUrl: '/partials/main/home',
        controller: 'homeCtrl'
      })
        .when('/login', {
            templateUrl: '/partials/account/login',
            controller: 'loginCtrl'
        })
        .when('/signup', {
            templateUrl: '/partials/account/signup',
            controller: 'signupCtrl', resolve: routeRoleChecks.admin
        })
        .when('/profile', {
            templateUrl: '/partials/account/profile',
            controller: 'profileCtrl', resolve: routeRoleChecks.admin
        })
        .when('/players', {
            templateUrl: '/partials/players/players',
            controller: 'playersCtrl', resolve: routeRoleChecks.admin
        })

});

angular.module('app').run(function ($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function (evt, current, previous, rejection) {
        if (rejection === 'not authorized') {
            $location.path('/');
        }
    })
})
