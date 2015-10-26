var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

	function randomIntFromInterval(min,max)
	{
	    return Math.floor(Math.random()*(max-min+1)+min);
	}

    var filePath = __dirname+"/"+ randomIntFromInterval(1, 4) +".json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;