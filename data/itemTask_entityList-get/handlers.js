var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

    var groupItemID = request.payload.groupItemID;
    var filePath = __dirname+"/"+groupItemID+".json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;