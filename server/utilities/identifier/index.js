var fs = require('fs');

module.exports = {
  changeIdentity: function (playerFBID, newIdentity, players) {
    players.forEach(function (player) {
      if (playerFBID == player.facebookID) {
        player.identifier = newIdentity;
        player.save(function (err) {
          if (err) return new Error(err);
        })
      }
    });
  },
  getIdentity: function (playerFBID, players) {
    var ret;
    players.forEach(function (player) {
      if (playerFBID == player.facebookID) {
        ret = player;
      }
    });
    if (ret) {
      return ret;
    } else {
      return "No Player Found";
    }
  }
};
