"use strict";

var fs = require('fs');
var path = require('path');

/*var routes = [];
fs.readdirSync(__dirname+"/").forEach(function (item) {

    var filePath = path.join(__dirname, item);

    var stat = fs.statSync(filePath);
    if (stat.isDirectory() && fs.exists(filePath+'/routes.js')) {
        console.log('adding route file:' + filePath+'/routes');
        //routes.push(require(filePath+'/routes'));
        routes = routes.concat(require(filePath+'/routes'));
    }
});*/


var routes = [].concat(
    //require('./login/routes'),
    require('./captchaGeneration/routes'),
    require('./captchaVerification/routes'),
    require('./mTANGeneration/routes'),
    require('./securityToken_Authentication/routes'),
    require('./passwordReset/routes'),
    require('./securityToken_mTANAuthentication/routes'),
    require('./userPermissionsAndProfile/routes')

);
console.log("routes:"+routes);
module.exports = routes;
