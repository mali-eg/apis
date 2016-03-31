/*
customerAccount_customerDataForOrder_GET

URI:
/api/pos-contract-customer-data/contracts/{ORDER_ID}/customer-account

TYPE: 
Account

DESCRIPTION:


INPUT PARAMETERS:
username - via headers

POSTMAN:
localhost:8080/api/pos-contract-customer-data/contracts/123/customer-account

TXT CONVERSION:
sh convert_single_file.sh data_src/account/default/customerAccount_customerDataForOrder_GET.txt
sh convert_single_file.sh data_src/account/robin/customerAccount_customerDataForOrder_GET.txt

NOTES:
ORDER ID PRAMETER MUST BE CALRIFIED !!!!!!!!!
*/
var Util = require('../Util');

module.exports = function(server) {
  var myRoute = Util.generateRouteBasicCall('customerAccount_customerDataForOrder_GET', 
  	'/api/pos-contract-customer-data/contracts/123/customer-account', 'username','GET',
  	Util.HEADER_PARAMETER );
  server.route (myRoute);

}