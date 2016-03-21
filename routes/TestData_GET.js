/* 
TestData_GET
test module - used for defining the api
*/
var path = require('path');
var Util = require('../Util');


module.exports = function(server) {
	

	
	var myRoute = {method:'GET', path:'/'+'get-test-data', handler: function (request, reply){
	 		
    	var serviceName = "TestData_GET";     
        var accountName;
        var basicFilePath;
        var basicFallbackPath;


        if (request.query.name){
           	accountName = request.query.name;

           	basicFilePath = "/data/account/"+ accountName + "/" + serviceName + ".json";
           	basicFallbackPath = "/data/account/default/" + serviceName + ".json";
        } 
              
			
        var filePath = path.join(__dirname, "../", basicFilePath);
 		var fallbackPath = path.join(__dirname, "../", basicFallbackPath);
            
        reply(Util.getData(filePath,fallbackPath));

             
        }
    };
    server.route (myRoute);

}