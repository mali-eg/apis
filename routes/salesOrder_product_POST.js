/*
salesOrder_product_POST

URI:
/api/pos-sales-order-line/sales-orders/{ORDER_ID}/lineitems/{ORDER_LINE_ITEM_ID}/products

TYPE: 
Static

DESCRIPTION:


INPUT PARAMETERS:
none

TXT CONVERSION:
sh convert_single_file.sh data_src/static/salesOrder_product_POST/ops_1.txt


NOTES:
returns a static json in this implementation 

*/
var Util = require('../Util');
var path = require('path');

module.exports = function(server) {

  	var myRoute = {method:"POST", path:"/api/pos-sales-order-line/sales-orders/{ORDER_ID}/lineitems/{ORDER_LINE_ITEM_ID}/products", handler: function (request, reply){ 

  	
    var basicFilePath = "../data/static/salesOrder_orderLineItemSummary_GET/"+ "01" + ".json";  
                  
   	var filePath = path.join(__dirname, "/", basicFilePath);               
        
    reply(Util.getData(filePath));    	
   }};
   server.route (myRoute);
} 