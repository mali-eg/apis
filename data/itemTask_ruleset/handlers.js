var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

    var entityList = request.query.entityList;
    var filePath = __dirname+"/6.json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;