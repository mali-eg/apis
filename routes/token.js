//localhost:8080/api/oauth2/token
var Util = require('../Util');


module.exports = function(server) {
  var myRoute = Util.generateRouteBasicCall('token', '/api/oauth2/token', "null",'POST',false, true);
  server.route (myRoute);

}