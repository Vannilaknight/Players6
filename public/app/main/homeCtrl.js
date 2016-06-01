angular.module('app').controller('homeCtrl', function ($scope, $rootScope, $interval, $location) {
  if($rootScope.dateLeft.total > 0){
    $location.path('/');
  }
});

