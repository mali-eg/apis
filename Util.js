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
* @param {string} parameterFoundIn - either QUERY_PARAMETER, HEADER_PARAMETER or PAYLOAD_PARAMETER. Default is QUERY_PARAMETER
* @param {bool} isStatic - indicates wether the request is account related or static
* @return {object} route
*/
Util.QUERY_PARAMETER = 0;
Util.HEADER_PARAMETER = 1;
Util.PAYLOAD_PARAMETER = 2;

Util.generateRouteBasicCall = function (serviceName, subURI, parameterName, serviceMethod, parameterFoundIn, isStatic){

    
    if (typeof parameterFoundIn === 'undefined') parameterFoundIn = Util.QUERY_PARAMETER; 
    if (typeof isStatic === 'undefined') isStatic = false; 
    var myRoute = {method:serviceMethod, path:subURI, handler: function (request, reply){    

      var parameterValue;

      switch(parameterFoundIn){
        case 0: 
        parameterValue = request.query[parameterName];
        break;

        case 1: 
        parameterValue = request.headers[parameterName];
        break;

        case 2: 

        break;


      }

  
     
          
      var basicFilePath;
      var basicFallbackPath;

      if (!isStatic){

        if (parameterValue){
          basicFilePath = "/data/account/"+ parameterValue + "/" + serviceName + ".json";
          basicFallbackPath = "/data/account/default/" + serviceName + ".json";
        }               
              
        var filePath = path.join(__dirname, "/", basicFilePath);
        var fallbackPath = path.join(__dirname, "/", basicFallbackPath);            
        reply(Util.getData(filePath,fallbackPath)); 
      }            
      else{
          
        basicFilePath = "/data/static/" + serviceName + ".json";
        var staticFilePath = path.join(__dirname, "/", basicFilePath); 
    
        reply(Util.getData(staticFilePath)); 
      }
      }

    };
    return myRoute;
};







module.exports = Util;
