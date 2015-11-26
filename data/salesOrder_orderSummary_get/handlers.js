var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

    //var username = request.query.username;
    var filePath = __dirname+"/"+1+".json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;