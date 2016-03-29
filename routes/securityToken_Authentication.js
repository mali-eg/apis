/*
localhost:8080/api/pos-security-tokens/authentication-user

use this json in the payload body to test 

"securityTokenVBO":{
	"credentials":{
			"username":"robin"
	}
}


{securityTokenVBO:{credentials:{username:"robin"}}}



convert data src files:
sh convert_single_file.sh data_src/account/robin/securityToken_Authentication.txt
sh convert_single_file.sh data_src/account/default/securityToken_Authentication.txt

parameters are send in the payload as an object
*/



var Util = require('../Util');


module.exports = function(server) {

/*	
  var myRoute = Util.generateRouteBasicCall('securityToken_Authentication', 
  	'/api/pos-security-tokens/authentication-user', "null",'POST',false, true);
  server.route (myRoute);
  */

 
	var myRoute = {method:"POST", path:"/api/pos-security-tokens/authentication-user", handler: function (request, reply){  
	
  	var serviceName = "securityToken_Authentication";
   console.log ("got here");
    console.log (request.payload);
   	


   	// the parameter is nested in payload
    var parameterValue = request.payload.securityTokenVBO.credentials.username;  
    console.log ("parameterValue" + parameterValue);
    var serviceName = "securityToken_Authentication";

     
    var basicFilePath = "/data/account/"+ parameterValue + "/" + serviceName + ".json";
    var basicFallbackPath = "/data/account/default/" + serviceName + ".json";
                  
   	var filePath = path.join(__dirname, "/", basicFilePath);
    var fallbackPath = path.join(__dirname, "/", basicFallbackPath);            
        
    reply(Util.getData(filePath,fallbackPath));  
	
   }
   };
   server.route (myRoute);
    

}