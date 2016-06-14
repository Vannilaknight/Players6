angular.module('app').controller('underConstructionCtrl', function ($scope, $rootScope, $interval, $location) {
  if($rootScope.dateLeft.total > 0){
    $location.path('/');
  }
});

