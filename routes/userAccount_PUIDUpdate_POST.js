/*
* userAccount_PUIDUpdate_POST
* testing url: localhost:8080/update-user-account-puid
* notes: gives back an empty object
*/

var Util = require('../Util');

module.exports = function(server) {
  var myRoute = Util.generateRouteBasicCall('userAccount_PUIDUpdate_POST', '/update-user-account-puid', 'username','POST', Util.HEADER_PARAMETER);
  server.route (myRoute);

}