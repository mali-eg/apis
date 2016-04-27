var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function (request, reply) {
	// vars
    var id = "";
    var fs = require('fs');
	var accountId = request.params.accountId;
	var filePath = __dirname + "/" + accountId + ".json";
    var customer_username = request.headers.username;
	
    if (customer_username == 'ops_1'){
		filePath = __dirname + "/20048765.json";
    }else if (customer_username == 'ops_2'){
		filePath = __dirname + "/1800000000.json";
    }else{
		filePath = __dirname + "/20048766.json";
	}
    reply(Util.getData(filePath));
};
module.exports = Handlers;