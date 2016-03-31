/*
customerAccount_customerDataForOrder_PUT

URI:
/api/pos-contract-customer-data/contracts/{ORDER_ID}/customer-account

TYPE: 
Account

DESCRIPTION:


INPUT PARAMETERS:
username - as query string 

POSTMAN:
localhost:8080/api/pos-contract-customer-data/contracts/123/customer-account?username=robin

TXT CONVERSION:
sh convert_single_file.sh data_src/account/default/customerAccount_customerDataForOrder_PUT.txt
sh convert_single_file.sh data_src/account/robin/customerAccount_customerDataForOrder_PUT.txt

NOTES:
Order ID not used 
*/
var Util = require('../Util');

module.exports = function(server) {
  var myRoute = Util.generateRouteBasicCall('customerAccount_customerDataForOrder_PUT', 
  	'/api/pos-contract-customer-data/contracts/123/customer-account', 'username','PUT');
  server.route (myRoute);

}