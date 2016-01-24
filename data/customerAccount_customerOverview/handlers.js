var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){
	var filePath = __dirname+"/data/1.json";
    var customer_id = request.query.id;
    var customer_password = request.query.password;
    var customer_birthdate = request.query['birth-date'];
    var customer_idCard = request.query['id-card'];
    // cases
    if(customer_password == '123'){
    	filePath = __dirname+"/data/pass-wrong.json";
    }else if(customer_birthdate == '8.11.1985'){
    	filePath = __dirname+"/data/date-wrong.json";
    }else if(customer_id && (customer_password || (customer_birthdate && customer_idCard))){
    	filePath = __dirname+"/data/success.json";
    }else{
    	filePath = __dirname+"/data/"+customer_id+".json";
    }
    

    /*var fs = require('fs');

	if (!fs.existsSync(filePath)) {
	    filePath = __dirname+"/data/not-found.json";
	}*/


    reply(Util.getData(filePath));
};

module.exports = Handlers;