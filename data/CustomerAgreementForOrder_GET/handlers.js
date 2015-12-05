var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function (request, reply) {

    var orderId = request.params.order_id;

    var filePath = __dirname + "/data/" + orderId + ".json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;