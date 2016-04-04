/*
mTANVerification_POST

URI:
/api/pos-security-tokens/authentication-mtan

TYPE: 
Account

DESCRIPTION:
receives a four digit tan and return an empty object 


INPUT PARAMETERS:
username - as query string 

POSTMAN:


TXT CONVERSION:


NOTES:
Order ID not used 
*/

var Util = require('../Util');


module.exports = function(server) {
  var myRoute = Util.generateRouteBasicCall('mTANVerification_POST', '/api/pos-security-tokens/authentication-mtan', 'username','POST');
  server.route (myRoute);

}