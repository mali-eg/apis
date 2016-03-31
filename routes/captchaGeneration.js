/*
captchaGeneration (POST)

URI:
/api/pos-user-accounts/captcha

TYPE: 
Static

DESCRIPTION:
Returns a json that holds a captha

INPUT PARAMETERS:
none

POSTMAN:
localhost:8080/api/pos-user-accounts/captcha

TXT CONVERSION:
sh convert_single_file.sh data_src/static/captchaGeneration/01.txt
sh convert_single_file.sh data_src/static/captchaGeneration/02.txt
sh convert_single_file.sh data_src/static/captchaGeneration/03.txt
sh convert_single_file.sh data_src/static/captchaGeneration/04.txt


NOTES:
--
*/

var Util = require('../Util');
var path = require('path');

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

module.exports = function(server) {
  	var myRoute = {method:"POST", path:"/api/pos-user-accounts/captcha", handler: function (request, reply){  	
  
    var randomNumber = getRandomInt(1, 5);  
    var basicFilePath = "../data/static/captchaGeneration/0"+ randomNumber + ".json";
    var basicFallbackPath = "../data/static/availability-check-streets/"+ "noStreetFound" + ".json";
                  
   	var filePath = path.join(__dirname, "/", basicFilePath);
    var fallbackPath = path.join(__dirname, "/", basicFallbackPath);            
        
    reply(Util.getData(filePath));    	
   }};
   server.route (myRoute);
}