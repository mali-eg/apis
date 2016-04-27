var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function (request, reply) {
	// vars
	var fs = require('fs');
	var subscription_id = request.params.subscription_id;
    var filePath = __dirname + "/" + subscription_id + ".json";
    var customer_username = request.headers.username;
	
	// cases
	if(fs.existsSync(filePath))
        id = subscription_id;
    else if(customer_username == 'ops_1')
        id = '20048765';
    else if(customer_username == 'ops_6')
        id = '20048766';
    else if (customer_username == 'ops_8')
        id = '20048767';

    var filePath = __dirname + "/" + id + ".json";

    reply(Util.getData(filePath));



};

module.exports = Handlers;