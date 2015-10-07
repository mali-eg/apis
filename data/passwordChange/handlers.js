var Util = require('../../Util');
var Handlers = {};

Handlers.passwordChangeHandler = function(request, reply){

    var filePath = __dirname+"/2.json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;