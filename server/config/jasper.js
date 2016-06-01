var formalitator = require('../utilities/formalitator/index');
var identifier = require('../utilities/identifier/index');
var responsinator = require('../utilities/responsinator/index');

module.exports = function (api, config) {
  return api.listen(function (err, event) {
    var body = String(event.body).toLowerCase();
    if (err) return console.error(err);
    console.log(event);
    switch (event.type) {
      case "message":
        var command = body.split(' ');
        if (command[0] == 'jasper') {
          if (command[1] == 'address') {
            if (command[2] == 'me') {
              if (command[3] == 'as' || command[3] == 'by') {
                var newIdentity = body.split(" ").splice(-1)[0];
                identifier.changeIdentity(event.senderID, newIdentity);
                api.sendMessage(identifier.getIdentity(event.senderID) + ",\n" + formalitator.formalitate("I will now address you as " + newIdentity), config.jasperConfig.thread);
              }
            }
          }
        } else if (body == 'who am i' || body == 'who am i?') {
          api.sendMessage(responsinator.responsinate('player', event.senderID), config.jasperConfig.thread);
        } else if (body.includes('who are we')) {
          api.sendMessage(responsinator.responsinate('we'), config.jasperConfig.thread);
        } else if (body.includes('who are you jasper')) {
          api.sendMessage(responsinator.responsinate('you'), config.jasperConfig.thread);
        }
        api.markAsRead(event.threadID, function (err) {
          if (err) console.log(err);
        });
        break;
      case "event":
        console.log(event);
        break;
    }
  });
};


