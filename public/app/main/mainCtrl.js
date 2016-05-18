angular.module('app').controller('mainCtrl', function ($scope, $interval) {

    function getTimeRemaining(endtime){
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor( (t/1000) % 60 );
        var minutes = Math.floor( (t/1000/60) % 60 );
        var hours = Math.floor( (t/(1000*60*60)) % 24 );
        var days = Math.floor( t/(1000*60*60*24) );
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    var countTime;
    var endDate = new Date("June 1, 2016 11:00:00");

    countTime = $interval(function(){
        $scope.dateLeft = getTimeRemaining(endDate)
    },1000)
});
