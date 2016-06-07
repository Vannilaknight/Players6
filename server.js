var login = require("facebook-chat-api");

var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];

var jasper;

login({email: config.jasperConfig.user, password: config.jasperConfig.pass}, function callback(err, api) {
  if (err) return console.error(err);

  //api.sendMessage("Players,\nWebsite added minor bios to the players. Just in case.\n\nhttp://players6.com\n\n-Until Then", config.jasperConfig.thread);

  require('./server/config/express')(app, config);

  require('./server/config/mongoose')(config);

  require('./server/config/passport')();

  require('./server/config/routes')(app, jasper);

  jasper = require('./server/config/jasper')(api, config);

  app.listen(config.port);
  console.log('Listening on port ' + config.port + '...');
});
