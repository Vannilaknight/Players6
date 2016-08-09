angular.module('app').controller('nmsCtrl', function ($scope, $interval) {
  var lastHour;

  function ringBell() {
    var ding = new Audio("../../assets/sounds/ding.wav");
    ding.play();
  }

  function cheer() {
    var cheer = new Audio("../../assets/sounds/cheer.mp3");
    cheer.play();
  }

  function countdown(num) {
    var number = new Audio("../../assets/sounds/" + num + ".wav");
    number.play();
  }

  function ringBellAmount(amount) {
    var count = 0;
    var bell = setInterval(function () {
      ringBell();
      count++;
      if (count == amount) {
        clearInterval(bell)
      }
    }, 1500);
  }

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var time = {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
    return time;
  }

  function initializeClock(endtime) {
    function updateClock() {
      $scope.t = getTimeRemaining(endtime);
      var currentTime = $scope.t;

      if (!lastHour) {
        lastHour = currentTime.hours;
      } else {
        if (lastHour > currentTime.hours) {
          ringBellAmount(lastHour);
          lastHour = currentTime.hours;
        }
      }

      if (currentTime.total == 10 * 1000) {
        countdown(10);
      }

      if (currentTime.total == 9 * 1000) {
        countdown(9);
      }

      if (currentTime.total == 8 * 1000) {
        countdown(8);
      }

      if (currentTime.total == 7 * 1000) {
        countdown(7);
      }

      if (currentTime.total == 6 * 1000) {
        countdown(6);
      }

      if (currentTime.total == 5 * 1000) {
        countdown(5);
      }

      if (currentTime.total == 4 * 1000) {
        countdown(4);
      }

      if (currentTime.total == 3 * 1000) {
        countdown(3);
      }

      if (currentTime.total == 2 * 1000) {
        countdown(2);
      }

      if (currentTime.total == 1 * 1000) {
        countdown(1);
      }

      if (currentTime.total == 0) {
        cheer();
      }

      $scope.days = currentTime.days;
      $scope.hours = ('0' + currentTime.hours).slice(-2);
      $scope.minutes = ('0' + currentTime.minutes).slice(-2);
      $scope.seconds = ('0' + currentTime.seconds).slice(-2);

      if (currentTime.total <= 0) {
        $interval.cancel(timeinterval);
      }
    }

    updateClock();
    var timeinterval = $interval(updateClock, 1000);
  }

  var deadline = new Date("August 8, 2016 22:00:00");
  initializeClock(deadline);
});
