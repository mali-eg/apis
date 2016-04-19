var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

    var type = request.params.type;
    var accountId = request.params.accountId;
    var payload = request.payload;

    var fakeErrorResponse = payload.customerPartyVBO[0].paymentMethod.bank.iban.endsWith('000');
    if(fakeErrorResponse){
		//var filePath = __dirname + "/" + type + "_" + accountId + ".json";
	    var filePath = __dirname + "/error.json";
	    reply(Util.getData(filePath));
    }else{
    	reply(payload);//just send back for testing
    }
};

module.exports = Handlers;