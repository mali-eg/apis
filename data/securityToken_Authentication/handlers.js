var Util = require('../../Util');
var fs = require('fs');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

    var username = request.payload.securityTokenVBO.credentials.username;

    var accountPath = __dirname+"/../../accounts/"+username+"/securityTokenAuthentication.json";

    var templatePath = __dirname+"/json/"+username+".json";
    var filePath = '';
    if (fs.existsSync(accountPath)) {
        filePath = accountPath;
    }else{
        filePath = templatePath;
    }

    reply(Util.getData(filePath));
};

module.exports = Handlers;