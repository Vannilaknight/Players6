var whoAreWeResponse = ["You are Players: 6.", "A collection of misfits and gaming consoles.", "If I understand correctly, My Creators.", "Not intelligent if the best you could create was me.", "Aspiring, young, intelligent, and debt ridden gamers.", "One day you wont need to ask such a question; Players: 6."];
var whoAreYouResponse = ["Why, I am Jasper Boyd; AI built by Taylor Boyd.", "Possibly the worst AI around.", "A simple Facebook Butler; My Gratitude, Obama.", "Is that not the question? Who am I. You should be more concerned with who you are.", "Programmed for perfection as you can tell.", "Jasper Boyd the Butler"];

var taylor = ["", "My Creator.", "A Web Developer.", "Taylor Boyd.", "Someone with too much time on their hands.", "One wishes to acquaint your facial features with the finger in between my index and ring finger."];
var ambrose = ["", "A God", "Ambrose Piambo"];
var eric = ["", "Eric Low.", "Seriously? Sir you know who you are.", "As a man I know once said, You are a badass.", "Im fairly certain my creator would love more than to deny you this pleasure."];
var braydon = ["", "Braydon Devries.", "Queen B.", "Mother."];
var mark = ["", "Sassy.", "Mark Journigan.", "I advise making toast in a bathtub.", "Marky Mark.", "Markus.", "Fabulous ~ If only my simple AI programming allowed a musical number.", "A Beautiful Person."];

function getPlayerResponse(playerList, player) {
  var randNum = Math.floor(Math.random() * playerList.length);
  if (randNum == 0) {
    return player.identifier + " " + player.firstName;
  } else {
    return playerList[randNum];
  }
}

module.exports = {
  responsinate: function (word, player) {
    console.log('responsinating');
    if (word == 'we') {
      var randNum = Math.floor(Math.random() * whoAreWeResponse.length);
      return whoAreWeResponse[randNum];
    } else if (word == 'you') {
      var randNum = Math.floor(Math.random() * whoAreYouResponse.length);
      return whoAreYouResponse[randNum];
    } else if (word == 'player') {
      switch (player.firstName) {
        case "Taylor":
          return getPlayerResponse(taylor, player);
          break;
        case "Mark":
          return getPlayerResponse(mark, player);
          break;
        case "Ambrose":
          return getPlayerResponse(ambrose, player);
          break;
        case "Eric":
          return getPlayerResponse(eric, player);
          break;
        case "Braydon":
          return getPlayerResponse(braydon, player);
          break;
      }
    } else {
      return "I have no response."
    }
  }
};
