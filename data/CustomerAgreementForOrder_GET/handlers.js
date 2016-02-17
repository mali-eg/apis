var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function (request, reply) {

    /*var orderId = request.params.order_id;

    var filePath = __dirname + "/data/" + orderId + ".json";*/

    var username = request.headers.username;
    if(request.query.username){
        username = request.query.username;
    }
    var filePath = __dirname + "/data/" + username+".json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;