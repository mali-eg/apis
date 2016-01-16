var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

    //var username = request.query.order-lineitem-id;
    var orderLineItemId = request.query.orderLineItemId;

    var filePath = __dirname+"/3.json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;