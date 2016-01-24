var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function (request, reply) {


    var username = request.headers.username;
    var filePath = __dirname + "/" + username + ".json";

    setTimeout(function () {
        reply(Util.getData(filePath));
    }, 2000)


};

module.exports = Handlers;