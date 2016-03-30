/*
agreement_CustomerDocument_GET  (GET)

URI:
/api/pos-contract-customer-agreement/customer-agreements/{documentId}/{document}

TYPE: 
Account

DESCRIPTION:
Returns a binary document file 

INPUT PARAMETERS:
username - request header 
orderId - query parameter - not used 
fileName - query parameter 

POSTMAN:
localhost:8080/api/pos-contract-customer-agreement/customer-agreements/123/lala.pdf

TXT CONVERSION:
none

NOTES:

*/
var Util = require('../Util');
var path = require('path');
var fs = require('fs');

module.exports = function(server) {

	var myRoute = {
		method:"GET", 
		path:"/api/pos-contract-customer-agreement/customer-agreements/{orderId}/{document}", 
		handler: function (request, reply){  
			var username = request.headers.username;
			var orderId = request.params.order_id;
    		var fileName = request.params.document;
    		var fielPath = "data/account/"+ username + "/" + fileName;
    		var file;
    	
    		try{
    			file = fs.readFileSync(fielPath);
    		}
    		catch(e){
    			console.error(e);
    			reply("agreement_CustomerDocument_GET ERROR");
    			return;
    		}

    		// file exsits    		
		    var fileBuffer = new Buffer(file);
		    var fileType = fileName.match(/\.([0-9a-z]+)(?:[\?#]|$)/i)[1];
		    var contentType = 'application/' + fileType;

		    setTimeout(function () {
		        reply(fileBuffer)
		            .header('Content-Type', contentType)
		            .header('content-disposition', 'attachment;filename="' + fileName + '"')
		            .header('Content-Length', file.size);
		    }, 3000)
	  	  
	
   }
   };
   server.route (myRoute);
    

}


