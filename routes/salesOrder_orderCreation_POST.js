/*
salesOrder_orderCreation_POST

URI:
/api/pos-sales-orders

TYPE: 
Account

DESCRIPTION:
get the user data json for a particular user 
is called when user clicks on "Neukunden" in dashboard
reurns an array of sales orde VBOs


INPUT PARAMETERS:
username - in request header  


POSTMAN:


TXT CONVERSION:
sh convert_single_file.sh data_src/account/robin/salesOrder_orderCreation_POST.txt

NOTES:

*/
var Util = require('../Util');

module.exports = function(server) {
  var myRoute = Util.generateRouteBasicCall('salesOrder_orderCreation_POST', 
  	'/api/pos-sales-orders', 'username','POST',Util.HEADER_PARAMETER );
  server.route (myRoute);

}