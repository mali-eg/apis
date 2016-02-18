var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){
    // asaber
    var username = request.headers.username + '_list';
    if(request.query.username){
        username = request.query.username;
    }
    var filePath = __dirname+"/data/"+username+".json";
    reply(Util.getData(filePath));
};

module.exports = Handlers;