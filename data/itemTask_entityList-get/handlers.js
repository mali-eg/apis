var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

    var groupItemID = request.query.groupItemId;
    var pageID = request.query['page-id'];
    var filePath = __dirname + "/json/" + pageID + ".json";

   // var filePath = __dirname+"/json/7.json";
   /* if (typeof groupItemID !== "undefined") {
        filePath = __dirname + "/data/" + groupItemID + ".json";
    } else {
        var pageID = request.query['page-id'];
        filePath = __dirname + "/data/" + pageID + ".json";
    }*/

    reply(Util.getData(filePath));
};

module.exports = Handlers;
