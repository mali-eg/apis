var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){
    reply({});
};

module.exports = Handlers;

