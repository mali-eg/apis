var fs = require('fs');
var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

    var username = request.headers.username;

    if(!request.query.username){
        username = request.headers.username + '_list';
    }

    var accountPath = __dirname+"/../../accounts/"+username+"/userData.json";

    var filePath = __dirname+"/json/"+username+".json";

    if (fs.existsSync(accountPath)) {
        filePath = accountPath;
    }

    reply(Util.getData(filePath));
};

module.exports = Handlers;