var formalitator = require('../utilities/formalitator/index');
var identifier = require('../utilities/identifier/index');
var responsinator = require('../utilities/responsinator/index');
var fs = require('fs');
var Player = require('mongoose').model('Player');

module.exports = function (api, config) {
  return api.listen(function (err, event) {
    var body = String(event.body).toLowerCase();
    if (err) return console.error(err);
    console.log(event);
    switch (event.type) {
      case "message":
        Player.find({}).exec(function (err, players) {
          var currentPlayer = identifier.getIdentity(event.senderID, players);
          var command = body.split(' ');
          if (command[0] == 'jasper') {
            if (command[1] == 'address') {
              if (command[2] == 'me') {
                if (command[3] == 'as' || command[3] == 'by') {
                  var newIdentity = body.split(" ").splice(-1)[0].capitalizeFirstLetter();
                  identifier.changeIdentity(event.senderID, newIdentity, players);
                  api.sendMessage(currentPlayer.identifier + " " + currentPlayer.firstName + ",\n" + formalitator.formalitate("I will now address you as " + newIdentity), event.threadID);
                }
              }
            } else if (command[1] == 'execute') {
              if (command[2] == 'order') {
                if (command[3] == '66') {
                  var message = {
                    body: 'But ' + currentPlayer.identifier + '...',
                    attachment: fs.createReadStream(config.rootPath + "/server/utilities/images/order66.png")
                  };
                  api.sendMessage(message, event.threadID);
                }
              } else if (command[2] == 'order66') {
                var message = {
                  body: 'But ' + currentPlayer.identifier + '...',
                  attachment: fs.createReadStream(config.rootPath + "/server/utilities/images/order66.png")
                };
                api.sendMessage(message, event.threadID);
              } else {
                api.sendMessage(currentPlayer.identifier + " " + currentPlayer.firstName + ",\nI am unfamiliar with that request.", event.threadID);
              }
            } else {
              api.sendMessage(currentPlayer.identifier + " " + currentPlayer.firstName + ",\nI am unfamiliar with that request.", event.threadID);
            }
          } else if (body == 'who am i' || body == 'who am i?') {
            api.sendMessage(responsinator.responsinate('player', currentPlayer), event.threadID);
          } else if (body.includes('who are we')) {
            api.sendMessage(responsinator.responsinate('we'), event.threadID);
          } else if (body.includes('who are you jasper')) {
            api.sendMessage(responsinator.responsinate('you'), event.threadID);
          }
          api.markAsRead(event.threadID, function (err) {
            if (err) console.log(err);
          });
        });
        break;
      case "event":
        console.log(event);
        break;
    }
  });
};


