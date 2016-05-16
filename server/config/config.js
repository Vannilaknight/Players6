var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://admin:pass@ds011810.mlab.com:11810/players6',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    rootPath: rootPath,
    db: 'mongodb://admin:pass@ds011810.mlab.com:11810/players6',
    port: process.env.PORT || 80
  }
}