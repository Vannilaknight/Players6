var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];

var login = require("facebook-chat-api");

login({email: "players6bot@gmail.com", password: "Sonic365"}, function callback(err, api) {
    if (err) return console.error(err);

    if(process.env.NODE_ENV == 'production'){
        api.sendMessage('Website has been updated', 457789894432164);
    }

    api.listen(function callback(err, message) {
        if(message.body.includes('Jasper?')){
            api.sendMessage('Yes?', message.threadID);
        } else if (message.body.includes('God?') || message.body.includes('god?')){
            api.sendMessage('You mean Ambrose?', message.threadID);
        }
    });
});

require('./server/config/express')(app, config);

require('./server/config/mongoose')(config);

require('./server/config/passport')();

require('./server/config/routes')(app);

app.listen(config.port);
console.log('Listening on port ' + config.port + '...');