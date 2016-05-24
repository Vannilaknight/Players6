var jasper = require('jasperboyd');

module.exports = function(config){
    jasper.listenToChat(config.jasperConfig.thread);
};


