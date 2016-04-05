/*
salesOrder_OrdersOverview_GET

URI:
/api/pos-sales-orders/overview

TYPE: 
Static

DESCRIPTION:
returns the sales overview for a paticular agent 


INPUT PARAMETERS:
order-id - query string - String that holds the orderID 
in the current stubs implementation the orderID is set to ops_5

TXT CONVERSION:
sh convert_single_file.sh data_src/static/salesOrder_OrdersOverview_GET/ops_5.txt

NOTES:

*/
var Util = require('../Util');
var path = require('path');



module.exports = function(server) {

  	var myRoute = {method:"GET", path:"/api/pos-sales-orders/overview", handler: function (request, reply){ 

  	var orderID = request.query['order-id'];
    var basicFilePath = "../data/static/salesOrder_OrdersOverview_GET/"+ orderID + ".json";  
                  
   	var filePath = path.join(__dirname, "/", basicFilePath);               
        
    reply(Util.getData(filePath));    	
   }};
   server.route (myRoute);
}