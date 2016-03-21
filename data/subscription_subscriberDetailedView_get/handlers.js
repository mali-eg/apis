var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function (request, reply) {


    var id = '20048765'
    var filePath = __dirname + "/" + id + ".json";

    reply(Util.getData(filePath));



};

module.exports = Handlers;