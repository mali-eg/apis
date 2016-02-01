var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function (request, reply) {


    var id = 'customModel'
    var filePath = __dirname + "/" + id + ".json";

    setTimeout(function () {
        reply(Util.getData(filePath));
    }, 2000)


};

module.exports = Handlers;