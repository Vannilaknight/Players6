var auth = require('./auth'),
  users = require('../controllers/users'),
  players = require('../controllers/players'),
  mongoose = require('mongoose'),
  Youtube = require('youtube-node');

module.exports = function (app, jasper) {

  app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
  app.post('/api/users', users.createUser);
  app.put('/api/users', users.updateUser);

  app.get('/api/players', players.getPlayers);
  app.post('/api/createPlayer', players.createPlayer);
  app.post('/api/updatePlayer', players.updatePlayer);

  app.get('/jasper/off', function (req, res) {
    jasper();
    res.send();
  });

  app.get('/youtube/videos', function(req, res){
    var youtube = new Youtube();
    youtube.setKey("AIzaSyCgPzEOYKHojKJBeKhom0whM_DGghfH-XM");

    youtube.getPlayListsItemsById('PLC4oNb3kGg2cneTofKKRoPh9IxT180oYC', function(error, result) {
      if (error) {
        console.log(error);
      }
      else {
        res.json(result);
      }
    });
  });

  app.get('/partials/*', function (req, res) {
    res.render('../../public/app/' + req.params[0]);
  });


  app.post('/login', auth.authenticate);

  app.post('/logout', function (req, res) {
    req.logout();
    res.end();
  });

  app.all('/api/*', function (req, res) {
    res.send(404);
  });

  app.get('*', function (req, res) {
    res.render('index', {
      bootstrappedUser: req.user
    });
  });
}
