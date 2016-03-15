var fs = require('fs');
var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){
 console.log('in token handler');

    var filePath = __dirname+"/"+"token.json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;