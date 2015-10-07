var Util = require('../../Util');
var Handlers = {};

Handlers.passwordResetHandler = function(request, reply){

    var payload = request.payload;

    var filePath = __dirname+"/"+payload.credentialVBO.username+".json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;