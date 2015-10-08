var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

    //var filePath = __dirname+"/"+request.query.username+".json";
    var filePath = __dirname+"/1.json";
    reply(Util.getData(filePath));
};

module.exports = Handlers;