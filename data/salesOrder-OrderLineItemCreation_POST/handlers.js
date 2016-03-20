var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function (request, reply) {

    var username = request.headers.username /*lineItems[0].orderLineItemId*/
    if(request.query.username){
        username = request.query.username;
    }
    /*salesOrderVBO[0].parts.lineItems.orderLineItemId*/
    console.log("*************");
    console.log(username);
    console.log("*********");
    var filePath = __dirname + "/" + username + ".json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;

