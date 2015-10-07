var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

    var filePath = __dirname+"/"+request.query.username+".json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;