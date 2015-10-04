var Boom = require("Boom");
var fs = require('fs');
var Util = {};

Util.getData = function(path){
    console.log('filePath:' + path);
    var file = fs.readFileSync(path);
    var respData = JSON.parse(file);
    var statusCode = respData.statusCode;
    delete respData.statusCode;
    if(statusCode !== 200) {
        console.log("error type detected, returning fault message");
        var error = Boom.badRequest('Unsupported parameter');
        error.reformat();
        error.output.statusCode = statusCode;

        error.output.payload = respData;
        return error;
    }else{
        console.log("statusCode 200 detected, returning VBO");
        return respData;
    }
};

module.exports = Util;