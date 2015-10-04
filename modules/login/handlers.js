/**
 * Created by USER on 8/31/2015.
 */
var Boom = require("Boom");
var Handlers = {};

Handlers.sendTANHandler = function(request, reply){

    console.log("in sendTANHandler");
    var file = 'modules/login/json/resetPassword/'+ request.query.username + '.json';
    var respData = file.toJSON();
    if(respData.statusCode !== 200){
        var error = Boom.badRequest('Unsupported parameter')
        error.reformat();
        error.output.statusCode = respData.statusCode;
        delete respData.statusCode;
        error.output.payload = respData;
        return reply(error);
    }


    console.log('retrieving file: ' + file);
    reply.file(file);
};


module.exports = Handlers;