var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

    var username = request.headers.username;
    console.log(username);
    var filePath = __dirname+"/ops_1.json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;