var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){
    // vars
    var fs = require('fs');
    // username
    var username = request.params.username;
    var customer_username_path = __dirname + "/data/" + username + ".json";
    // default path
    var filePath = customer_username_path;
    // if file not exists
    if (!fs.existsSync(filePath)) {
        //filePath = __dirname+"/data/not-found.json";
    }
    reply(Util.getData(filePath));
};

module.exports = Handlers;