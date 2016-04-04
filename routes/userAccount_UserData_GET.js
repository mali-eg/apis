/*
userAccount_UserData_GET

URI:
/get-user-account-user-data

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
  var myRoute = Util.generateRouteBasicCall('userAccount_UserData_GET', '/api/pos-user-accounts/user-data', 'username','GET', Util.HEADER_PARAMETER );
  server.route (myRoute);

}