var Util = require('../../Util');
var Handlers = {};

Handlers.captchaGenerationHandler = function(request, reply){

    var filePath = __dirname+"/8.json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;