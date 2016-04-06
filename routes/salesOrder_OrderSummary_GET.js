/*
salesOrder_OrderSummary_GET

URI:
/api/pos-sales-orders/{ORDER_ID}/summary

TYPE: 
Static

DESCRIPTION:


INPUT PARAMETERS:
order id as URL parameter 

TXT CONVERSION:
sh convert_single_file.sh data_src/static/salesOrder_OrderSummary_GET/ops_5.txt


NOTES:
returns a static json in this implementation 
*/
var Util = require('../Util');
var path = require('path');

module.exports = function(server) {

  	var myRoute = {method:"GET", path:"/api/pos-sales-orders/{ORDER_ID}/summary", handler: function (request, reply){ 

  	var orderID = request.params.ORDER_ID; 

  	console.log("orderID " + orderID)
    var basicFilePath = "../data/static/salesOrder_OrderSummary_GET/"+ orderID + ".json";  
                  
   	var filePath = path.join(__dirname, "/", basicFilePath);               
        
    reply(Util.getData(filePath));    	
   }};
   server.route (myRoute);
} 