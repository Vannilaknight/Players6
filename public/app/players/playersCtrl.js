angular.module('app').controller('playersCtrl', function ($scope) {
    $scope.playerList = [];

    var Player = function(img, name, description){
        this.img = img;
        this.name = name;
        this.description = description
    };

    $scope.playerList.push(new Player("/images/john.jpg", "Ambrose Piambo", "Is a god and plays some videogames"));
    $scope.playerList.push(new Player("/images/john.jpg", "Eric Lowe", "Plays Call of Duty professionally"));
    $scope.playerList.push(new Player("/images/john.jpg", "Taylor Boyd", "Bruh im like the best ever"));
    $scope.playerList.push(new Player("/images/john.jpg", "Braydon Devries", "Loves GTA cause of murder and stuff"));
    $scope.playerList.push(new Player("/images/john.jpg", "Mark Journigan", "Dont challenge me to Starcraft. Im good at Starcraft"));
    $scope.playerList.push(new Player("/images/john.jpg", "John Belak", "Likes to lift and play Call of Duty"));
});