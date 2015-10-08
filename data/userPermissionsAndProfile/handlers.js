var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

    var username = request.query.username;
    var voidName = request.query.void;
    var filePath = __dirname+"/"+username+".json";
    //var filePath = __dirname+"/4.json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;