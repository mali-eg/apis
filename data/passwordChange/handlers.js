var Util = require('../../Util');
var Handlers = {};

Handlers.passwordChangeHandler = function(request, reply){

    var filePath = __dirname+"/"+request.query.username+".json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;