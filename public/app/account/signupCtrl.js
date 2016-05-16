angular.module('app').controller('signupCtrl', function ($scope, User, Notifier, $location, Auth) {

    $scope.signup = function () {
        var newUserData = {
            username: $scope.email,
            password: $scope.password,
            firstName: $scope.fname,
            lastName: $scope.lname
        };

        Auth.createUser(newUserData).then(function () {
            Notifier.notify('User account created!');
            $location.path('/');
        }, function (reason) {
            Notifier.error(reason);
        })
    }
})