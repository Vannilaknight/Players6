angular.module('app').controller('aboutUsCtrl', function ($scope, $rootScope, $interval, $location) {
  if($rootScope.dateLeft.total > 0){
    $location.path('/');
  }
});

