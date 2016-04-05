/*
salesOrder_orderLineItemSummary_GET

URI:
/api/pos-sales-order-line/sales-orders/{ORDER_ID}/lineitems/{ORDER_LINE_ITEM_ID}/summary

TYPE: 
Static ??

DESCRIPTION:
return a paticular sales order summary


INPUT PARAMETERS:
ORDER_ID - as part of the uri 
ORDER_LINE_ITEM_ID - as part of the uri 

TXT CONVERSION:
sh convert_single_file.sh data_src/static/salesOrder_orderLineItemSummary_GET/01.txt

NOTES:
in this implementation of the stubs API only a single document is reurned 

*/
var Util = require('../Util');
var path = require('path');

module.exports = function(server) {

  	var myRoute = {method:"GET", path:"/api/pos-sales-order-line/sales-orders/{ORDER_ID}/lineitems/{ORDER_LINE_ITEM_ID}/summary", handler: function (request, reply){ 

  	
    var basicFilePath = "../data/static/salesOrder_orderLineItemSummary_GET/"+ "01" + ".json";  
                  
   	var filePath = path.join(__dirname, "/", basicFilePath);               
        
    reply(Util.getData(filePath));    	
   }};
   server.route (myRoute);
}