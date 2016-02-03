var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function (request, reply) {

    var username = request.payload.salesOrderVBO[0].roles.agent.voID;
    var filePath = __dirname + "/" + username + ".json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;

