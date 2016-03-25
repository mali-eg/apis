//localhost:8080/api/pos-security-tokens/authentication-user
var Util = require('../Util');


module.exports = function(server) {
  var myRoute = Util.generateRouteBasicCall('securityToken_Authentication', '/api/pos-security-tokens/authentication-user', "null",'POST',false, true);
  server.route (myRoute);

}