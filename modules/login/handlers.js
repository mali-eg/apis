var Util = require('../../Util');
var Handlers = {};

Handlers.sendTANHandler = function(request, reply){

    console.log("in sendTANHandler");
    var filePath = "modules/login/json/resetPassword/"+ request.query.username + ".json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;