var Boom = require("boom");
var fs = require('fs');
var Util = {};
var path = require('path');

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

/**
* create a basic route for a service call with one parameter 
* @param {string} serviceName
* @param {string} subURI
* @param {string} parameterName
* @param {string} serviceMethod - either GET or POST
* @param {bool} useRequestHeaders - if set to true headers is used of query parameter. Default value is false
* @return {object} route
*/
Util.generateRouteBasicCall = function (serviceName, subURI, parameterName, serviceMethod, useRequestHeaders){

  
    if (typeof useRequestHeaders === 'undefined') useRequestHeaders = false; 
   
    var myRoute = {method:serviceMethod, path:subURI, handler: function (request, reply){    
      var parameterValue;
      if (!useRequestHeaders){
        parameterValue = request.query[parameterName];
      }  
      else{
        parameterValue = request.headers[parameterName];
      }
     
       console.log("parameterValue " + parameterValue);
      var basicFilePath;
      var basicFallbackPath;

      if (parameterValue){
        basicFilePath = "/data/account/"+ parameterValue + "/" + serviceName + ".json";
        basicFallbackPath = "/data/account/default/" + serviceName + ".json";
      }               
            
      var filePath = path.join(__dirname, "/", basicFilePath);
      var fallbackPath = path.join(__dirname, "/", basicFallbackPath);            
      reply(Util.getData(filePath,fallbackPath));             
      }
    };
    return myRoute;
};







module.exports = Util;
