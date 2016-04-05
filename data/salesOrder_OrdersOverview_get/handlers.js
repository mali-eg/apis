var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

/*    var params = request.query;
    console.log("//////////////////////////");
    console.log(params);
    console.log("//////////////////");*/
    var filePath = __dirname+"/4.json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;