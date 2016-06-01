var login = require("facebook-chat-api");

var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];

var jasper;

login({email: config.jasperConfig.user, password: config.jasperConfig.pass}, function callback(err, api) {
  if (err) return console.error(err);

  api.sendMessage("Players,\nMy Creator is a smart fellow and cannot for the life of him submit working code. Please bare with me while he tries to, as the teenagers say, \"Get his shit together.\"\n-Until Then", config.jasperConfig.thread);

  jasper = require('./server/config/jasper')(api, config);

  console.log(jasper);

  require('./server/config/express')(app, config);

  require('./server/config/mongoose')(config);

  require('./server/config/passport')();

  require('./server/config/routes')(app, jasper);

  app.listen(config.port);
  console.log('Listening on port ' + config.port + '...');
});
