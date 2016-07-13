var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

String.prototype.capitalizeFirstLetter = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

module.exports = {
  development: {
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    rootPath: rootPath,
    port: process.env.PORT || 80
  }
};
