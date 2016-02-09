var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

    var groupItemID = request.query.groupItemId;
    //var filePath = __dirname+"/1.json";
    if (typeof groupItemID !== "undefined") {
        filePath = __dirname + "/data/" + groupItemID + ".json";
    } else {
        var pageID = request.query['page-id'];
        filePath = __dirname + "/data/" + pageID + ".json";
    }

    reply(Util.getData(filePath));
};

module.exports = Handlers;