var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

    var puid = request.payload.credentialVBO.puid;
    console.log(puid);
    var filePath = __dirname+"/"+puid+".json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;