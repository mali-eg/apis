var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){
	//used for addrestype BILLING and CUSTOMER
	var type = request.params.type;
    var accountId = request.params.accountId;
    var payload = request.payload;

    reply(payload);//just send back for testing

    //var filePath = __dirname + "/" + type + "_" + accountId + ".json";
    //reply(Util.getData(filePath));
};

module.exports = Handlers;