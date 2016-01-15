var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

    var orderId = request.query.username;
    var filePath = __dirname+"/"+orderId+".json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;