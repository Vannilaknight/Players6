angular.module('app', ['ngResource', 'ngRoute']);

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
        .when('/signup', {
            templateUrl: '/partials/account/signup',
            controller: 'signupCtrl'
        })
        .when('/profile', {
            templateUrl: '/partials/account/profile',
            controller: 'profileCtrl', resolve: routeRoleChecks.user
        })
        .when('/players', {
            templateUrl: '/partials/players/players',
            controller: 'playersCtrl'
        })

});

angular.module('app').run(function ($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function (evt, current, previous, rejection) {
        if (rejection === 'not authorized') {
            $location.path('/');
        }
    })
})
