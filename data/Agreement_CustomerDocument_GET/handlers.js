var Util = require('../../Util');
var fs = require('fs');

var Handlers = {};

Handlers.defaultHandler = function (request, reply) {
    // get the username
    var username = request.headers.username;

    //var accountPath = __dirname+"/../../accounts/"+username+"/userData.json";




    
    
    //my new feature branch
    var orderId = request.params.order_id;
        
    var fileName = request.params.document;

    //var filePath = __dirname + "/json/" + fileName;
    var filePath = __dirname+"/../../accounts/"+username+"/"+fileName;
    console.log ("filePath is:: " + filePath);





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
