var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

    var entityList = request.query.entityList;
    var filePath = __dirname+"/validation.json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;