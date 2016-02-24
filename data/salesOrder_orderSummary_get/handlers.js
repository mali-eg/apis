var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function (request, reply) {

    //var orderId = request.query.username;
    //var username = request.headers.username;
    //if(request.query.username){
    var oderId = request.params.ORDER_ID;
    //}
    var filePath = __dirname + "/" + oderId + ".json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;