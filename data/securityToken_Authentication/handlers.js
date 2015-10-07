var Util = require('../../Util');
var Handlers = {};

Handlers.authenticateHandler = function(request, reply){

    //TODO to get the username from the payload
    //securityTokenVBO.credentials.username
    //var username = request.payload.securityTokenVBO.credentials.username;
    //var filePath = __dirname+"/"+username+".json";
    var filePath = __dirname+"/4.json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;