var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

    var payload = request.payload;

    var filePath = __dirname+"/"+payload.credentialVBO.username+".json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;