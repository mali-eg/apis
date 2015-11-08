var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

    var orderId = request.query.orderId;
    var orderLineItemId = request.query.orderLineItemId;

    var filePath = __dirname+"/"+1+".json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;