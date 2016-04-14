var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function (request, reply) {

    var customer_username = request.headers.username;
    var id = "";
    if(customer_username == 'ops_1')
        id = '20048765';
    else if(customer_username == 'ops_6')
        id = '20048766';
    else if (customer_username == 'ops_8')
        id = '20048767';

    var filePath = __dirname + "/" + id + ".json";

    reply(Util.getData(filePath));



};

module.exports = Handlers;