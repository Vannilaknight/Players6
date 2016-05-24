var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');


module.exports = {
  development: {
    db: 'mongodb://admin:pass@ds011810.mlab.com:11810/players6',
    rootPath: rootPath,
    port: process.env.PORT || 3030,
    jasperConfig: {
      thread: 100000127136305,
      user: 'players6bot@gmail.com',
      pass: 'Sonic365'
    }
  },
  production: {
    rootPath: rootPath,
    db: 'mongodb://admin:pass@ds011810.mlab.com:11810/players6',
    port: process.env.PORT || 80,
    jasperConfig: {
      thread: 457789894432164,
      user: 'players6bot@gmail.com',
      pass: 'Sonic365'
    }
  }
};

//457789894432164 - Players6Chat
//100000127136305 - Taylor