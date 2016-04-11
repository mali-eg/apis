var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

    var username = request.query.username;
    var serviceProviderID = request.query.serviceProviderID;
    console.log('username' +  username);
    console.log('Service Provider'+ serviceProviderID);
    var filePath = __dirname+"/"+username+"_"+serviceProviderID+".html";

    reply(Util.getData(filePath));
};

module.exports = Handlers;
