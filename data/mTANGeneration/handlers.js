var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

    var filePath = __dirname+"/mtan.json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;