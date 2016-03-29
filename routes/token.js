/*
Static token service

data src file can be compiled with: sh convert_single_file.sh data_src/static/token.txt



*/
var Util = require('../Util');


module.exports = function(server) {
  var myRoute = Util.generateRouteBasicCall('token', '/api/oauth2/token', "null",'POST',false, true);
  server.route (myRoute);

}