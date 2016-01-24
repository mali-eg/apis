var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function (request, reply) {


    var id = 'pdf'
    var filePath = __dirname + "/" + id;


    reply(new Readable().wrap(Util.getData(filePath)));


};

module.exports = Handlers;