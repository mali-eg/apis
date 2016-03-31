/*
availabilityCheck_GET (GET)

URI:
/api/availability_check/

TYPE: 
Static

DESCRIPTION:
Returns a json that holds the avilibilty of the service

INPUT PARAMETERS:
street - query parameter

POSTMAN:
localhost:8080/api/availability_check/?street=street01

TXT CONVERSION:
sh convert_single_file.sh data_src/static/availability-check-streets/noStreetFound.txt
sh convert_single_file.sh data_src/static/availability-check-streets/street01.txt

NOTES:
avlibility check incomplete: Only fault case and "could not validate" cases are implemented
*/

var Util = require('../Util');
var path = require('path');

module.exports = function(server) {
  	var myRoute = {method:"GET", path:"/api/availability_check/", handler: function (request, reply){  
	
	var parameterValue = request.query["street"]; 
  
    var basicFilePath = "../data/static/availability-check-streets/"+ parameterValue + ".json";
    var basicFallbackPath = "../data/static/availability-check-streets/"+ "noStreetFound" + ".json";
                  
   	var filePath = path.join(__dirname, "/", basicFilePath);
    var fallbackPath = path.join(__dirname, "/", basicFallbackPath);            
        
    reply(Util.getData(filePath,fallbackPath));    
	
   }
   };
   server.route (myRoute);

}