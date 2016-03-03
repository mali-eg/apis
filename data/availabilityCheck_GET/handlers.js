var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){
	var street = request.query.street;
    var filePath = __dirname+"/data/"+ street +".json";
    reply(Util.getData(filePath));
};

module.exports = Handlers;