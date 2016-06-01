var fs = require('fs');

module.exports = {
  identify: function (string) {
    var titleMatch = require('./identities');
    titleMatch.identities.forEach(function (identity) {
      var key = Object.keys(identity)[0];
      var value = identity[key];
      string = string.replace(key, value);
    });
    return string;
  },
  changeIdentity: function (playerFBID, newIdentity) {
    var titleMatch = require('./identities');
    var player;
    titleMatch.identities.forEach(function (identity) {
      var key = Object.keys(identity)[0];
      var value = identity[key];
      if (playerFBID == key) {
        value.identity = newIdentity;
        player = value;
      }
    });
    fs.writeFileSync("./identities.json", JSON.stringify(titleMatch));
  },
  getIdentity: function (playerFBID, nameOnly) {
    var titleMatch = require('./identities');
    var player;
    titleMatch.identities.forEach(function (identity) {
      var key = Object.keys(identity)[0];
      var value = identity[key];
      console.log(playerFBID + " - " + key);
      if (playerFBID == key) {
        player = value;
      }
    });
    if (player) {
      if (nameOnly) {
        return player.name;
      }
      return player.identity + " " + player.name;
    } else {
      return "No Player Found";
    }

  }
};
