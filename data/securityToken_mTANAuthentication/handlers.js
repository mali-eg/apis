var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

    var accountPath = __dirname+"/accounts/"+Util.getUserName(request)+"/securityTokenAuthentication.json";
    console.log("accountPath:"+accountPath);
    var templatePath = __dirname+"/"+username+".json";
    console.log("templatePath:"+templatePath);
    var filePath = '';
    if (fs.existsSync(accountPath)) {
        filePath = accountPath;
    }else{
        filePath = templatePath;
    }

    reply(Util.getData(filePath));

    var username = request.query.username;
    var filePath = __dirname+"/"+username+".json";

    reply(Util.getData(filePath));
};

module.exports = Handlers;