var Boom = require("boom");
var fs = require('fs');
var Util = {};

Util.getData = function (path, fallbackPath) {
    console.log('filePath:' + path);
    try {
        var file = fs.readFileSync(path);
    } catch (e) {
        console.error('No such a file: ' + path);
        if (fallbackPath) {
            console.warn('trying the default path: ' + fallbackPath);
            try {
                var file = fs.readFileSync(fallbackPath);
            }catch (err){
                console.error("default file not found!");
            }
        }
    }
    var respData = JSON.parse(file);
    var statusCode = respData.statusCode;
    if (statusCode) {
        delete respData.statusCode;
    } else {
        console.warn('No status code, defaults to 200');
        statusCode = 200;
    }

    if (statusCode !== 200) {
        console.log("error type detected, returning fault message");
        var error = Boom.badRequest('Unsupported parameter');
        error.reformat();
        error.output.statusCode = statusCode;

        error.output.payload = respData;
        return error;
    } else {
        console.log("statusCode 200 detected, returning VBO");
        return respData;
    }
};

Util.getUserName = function (request){
    return request.headers.username;
};


Util.getParameter = function (){
    
};


module.exports = Util;
