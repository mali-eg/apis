var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){
    // vars
    var fs = require('fs');
	var username = request.payload.userAccountVBO[0].credential.username;
    // filename
    var filePath = __dirname + "/data/" + username + ".json";
    // if file not exists
    if (!fs.existsSync(filePath)) {
        //filePath = __dirname+"/data/username.json";
    }
	console.log(username)
    reply(Util.getData(filePath));
};

module.exports = Handlers;