var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){
	var username = request.query.username;
    var filePath = __dirname+"/data/"+username+".json";
    reply(Util.getData(filePath));
};

module.exports = Handlers;