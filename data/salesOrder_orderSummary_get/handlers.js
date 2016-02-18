var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

    //var orderId = request.query.username;
    var username = request.headers.username;
    if(request.query.username){
        username = request.query.username;
    }
    var filePath = __dirname+"/"+username+".json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;