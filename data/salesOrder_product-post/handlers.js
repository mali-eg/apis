var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

    //var username = request.payload.securityTokenVBO.credentials.username;
    var username = request.headers.username;
    if(request.query.username){
        username = request.query.username;
    }

    var filePath = __dirname+"/"+"ops_1"+".json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;