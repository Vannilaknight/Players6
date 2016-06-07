var Player = require('mongoose').model('Player');

exports.getPlayers = function (req, res) {
  Player.find({}).exec(function (err, collection) {
    res.send(collection);
  })
};

exports.createPlayer = function (req, res, next) {
  var playerData = req.body;
  Player.create(playerData, function (err, player) {
    if (err) {
      if (err.toString().indexOf('E11000') > -1) {
        err = new Error('Duplicate Player');
      }
      res.status(400);
      return res.send({reason: err.toString()});
    }
    res.send('Player Added');
  })
};

exports.updatePlayer = function (req, res) {
  var playerUpdates = req.body;

  Player.update({facebookID: playerUpdates.facebookID}, playerUpdates, null, function (err, raw) {
    if (err) return res.send({reason: err.toString()});
    res.send('Player Updated');
  });

};
