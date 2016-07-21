angular.module('app').controller('mainCtrl', function ($scope, $rootScope, $interval, $http) {
  $http({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&maxResults=4&playlistId=UUjug0bQtWqtKERXudtdAPNA&key=AIzaSyCgPzEOYKHojKJBeKhom0whM_DGghfH-XM'
  }).then(function successCallback(response) {
    $scope.recentVids = response.data.items;
    console.log($scope.recentVids)
  }, function errorCallback(response) {
  });
});
