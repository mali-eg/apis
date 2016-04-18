var Util = require('../../Util');
var Handlers = {};

Handlers.accountHandler = function(request, reply){
	//used for addrestype BILLING and CUSTOMER
	var type = request.params.type;
    var accountId = request.params.accountId;
    var payload = request.payload;

    var contactPoint = payload.postalContactPointVBO[0].contactPoints.contactPoint[0];
    if(contactPoint.nameDetails && contactPoint.nameDetails.salutation == 'Frau'){
        var filePath = __dirname+"/technicalError.json";
        reply(Util.getData(filePath));
    }else{
        reply(payload);//just send back for testing
    }

    //var filePath = __dirname + "/" + type + "_" + accountId + ".json";
    //reply(Util.getData(filePath));
};

Handlers.subscriptionHandler = function(request, reply){
	//used for addresstype SUBSCRIBER and HOMEZONE

	var type = request.params.type;//must be 'mobile'!!!!
    var subscriptionId = request.params.subscriptionId;
    var payload = request.payload;

    var contactPoint = payload.postalContactPointVBO[0].contactPoints.contactPoint[0];
    if(contactPoint.nameDetails && contactPoint.nameDetails.salutation == 'Frau'){
        var filePath = __dirname+"/validationError.json";
        reply(Util.getData(filePath));
    }else{
        reply(payload);//just send back for testing
    }

    //var filePath = __dirname + "/" + type + "_" + subscriptionId + ".json";
    //reply(Util.getData(filePath));
};

module.exports = Handlers;