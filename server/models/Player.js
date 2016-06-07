var mongoose = require('mongoose');

var playerSchema = mongoose.Schema({
  firstName: {type: String, required: '{PATH} is required!'},
  lastName: {type: String, required: '{PATH} is required!'},
  identifier: {type: String, required: '{PATH} is required!'},
  facebookID: {
    type: Number,
    required: '{PATH} is required!'
  }
});

var Player = mongoose.model('Player', playerSchema);

function createDefaultPlayers() {
  Player.find({}).exec(function (err, collection) {
    if (collection.length === 0) {
      Player.create({firstName: 'Taylor', lastName: 'Boyd', identifier: 'Master', facebookID: 100000127136305});
      Player.create({firstName: 'Mark', lastName: 'Journigan', identifier: 'Master', facebookID: 1137788625});
      Player.create({firstName: 'Eric', lastName: 'Lowe', identifier: 'Master', facebookID: 100000387873118});
      Player.create({firstName: 'Braydon', lastName: 'Devries', identifier: 'Master', facebookID: 100000439693569});
      Player.create({firstName: 'Ambrose', lastName: 'Piambo', identifier: 'Master', facebookID: 100000927173690});
      console.log('Players Created')
    }
  })
}

exports.createDefaultPlayers = createDefaultPlayers;
