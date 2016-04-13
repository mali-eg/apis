var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

	console.log("***SIM swap**");
	console.log(request.payload);
	console.log("*************");

    reply({});
};

module.exports = Handlers;

