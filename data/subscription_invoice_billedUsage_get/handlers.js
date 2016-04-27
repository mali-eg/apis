var Util = require('../../Util');
var Handlers = {};
Handlers.defaultHandler = function (request, reply) {
	// vars
    var fs = require('fs');
	var id = request.params.account_id;
	var filePath = __dirname + "/" + id + ".json";
	// cases
    if (!fs.existsSync(filePath)) {
        filePath = __dirname + "/20048765.json";
    }
    reply(Util.getData(filePath));
};
module.exports = Handlers;