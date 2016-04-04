/*
itemTask_entityList_GET

URI:
/api/pos-item-task/entities

TYPE: 
Static

DESCRIPTION:
returns an array of eneties and one for containers 

INPUT PARAMETERS:
groupItemId - String found as query parameter (use tarrifSelectionPage)

TXT CONVERSION:
sh convert_single_file.sh data_src/static/itemTask_entityList_GET/tarrifSelectionPage.txt

NOTES:

*/

var Util = require('../Util');
var path = require('path');



module.exports = function(server) {
  	var myRoute = {method:"GET", path:"/api/pos-item-task/entities", handler: function (request, reply){ 
  	var  pageID = request.query['page-id'];
  

    var basicFilePath = "../data/static/itemTask_entityList_GET/"+ pageID + ".json";
    //var basicFallbackPath = "../data/static/availability-check-streets/"+ "noStreetFound" + ".json";
                  
   	var filePath = path.join(__dirname, "/", basicFilePath);
    //var fallbackPath = path.join(__dirname, "/", basicFallbackPath);            
        
    reply(Util.getData(filePath));    	
   }};
   server.route (myRoute);
}