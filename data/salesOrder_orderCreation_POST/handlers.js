var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function (request, reply) {

    /*var username = request.payload.salesOrderVBO[0].roles.agent.voID;
    var filePath = __dirname + "/" + username + ".json";
    var fbPath = __dirname + "/ops_1.json";*/

    var username = request.headers.username;
    if(request.query.username){
        username = request.query.username;
    }
    var filePath = __dirname+"/"+username+".json";

    //reply(Util.getData(filePath, fbPath));
    reply(Util.getData(filePath));
};

module.exports = Handlers;

