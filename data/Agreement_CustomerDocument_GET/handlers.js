var Util = require('../../Util');
var fs = require('fs');

var Handlers = {};

Handlers.defaultHandler = function (request, reply) {

    var orderId = request.params.order_id,
        fileName = request.params.document;

    var filePath = __dirname + "/json/" + fileName;
    var file = fs.readFileSync(filePath);
    var fileBuffer = new Buffer(file);
    //.toString('base64');

    var fileType = fileName.match(/\.([0-9a-z]+)(?:[\?#]|$)/i)[1];

    var contentType = 'application/' + fileType;

    setTimeout(function () {
        reply(fileBuffer)
            .header('Content-Type', contentType)
            .header('content-disposition', 'attachment;filename="' + fileName + '"')
            .header('Content-Length', file.size);
    }, 3000)

};

module.exports = Handlers;
