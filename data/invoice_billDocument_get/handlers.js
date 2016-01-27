var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function (request, reply) {


    var file = 'bill.pdf'
    var filePath = __dirname + "/" + file;


    reply.file(filePath);


};

module.exports = Handlers;