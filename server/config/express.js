var express = require('express'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  session = require('express-session'),
  sassMiddleware = require('node-sass-middleware');


module.exports = function (app, config) {

  console.log("ExPRESS");

  app.set('views', config.rootPath + '/server/views');
  app.set('view engine', 'jade');
  app.use(
    sassMiddleware({
      src: config.rootPath + '/public/sass', //where the sass files are
      dest:  config.rootPath + '/public/', //where css should go
      debug: true // obvious
    })
  );
  app.use(logger('dev'));
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(session({secret: 'Kevin is a dumbhead', resave: false, saveUninitialized: false}));
  app.use(express.static(config.rootPath + '/public'));
}
