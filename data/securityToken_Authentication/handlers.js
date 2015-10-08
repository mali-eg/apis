var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

<<<<<<< HEAD
    //TODO to get the username from the payload
    //securityTokenVBO.credentials.username
=======
>>>>>>> 950cdc3b39d573c6969e4812dc7c862b5c4ca68f
    var username = request.payload.securityTokenVBO.credentials.username;
    var filePath = __dirname+"/"+username+".json";
    //var filePath = __dirname+"/1.json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;