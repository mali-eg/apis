/*
localhost:8080/api/pos-security-tokens/authentication-user

use this json in the payload body to test 

{"securityTokenVBO":{"credentials":{"username":"robin"}}} - set application type to json

convert data src files:
sh convert_single_file.sh data_src/account/robin/securityToken_Authentication.txt
sh convert_single_file.sh data_src/account/default/securityToken_Authentication.txt


*/



var Util = require('../Util');
var path = require('path');

module.exports = function(server) {

	var myRoute = {method:"POST", path:"/api/pos-security-tokens/authentication-user", handler: function (request, reply){  
	
  	var serviceName = "securityToken_Authentication";
   
    var parameterValue = request.payload.securityTokenVBO.credentials.username;  
  
    var basicFilePath = "../data/account/"+ parameterValue + "/" + serviceName + ".json";
    var basicFallbackPath = "../data/account/default/" + serviceName + ".json";
                  
   	var filePath = path.join(__dirname, "/", basicFilePath);
    var fallbackPath = path.join(__dirname, "/", basicFallbackPath);            
        
    reply(Util.getData(filePath,fallbackPath));    
	
   }
   };
   server.route (myRoute);
    

}