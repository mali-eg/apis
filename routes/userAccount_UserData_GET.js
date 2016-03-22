var Util = require('../Util');


module.exports = function(server) {
  var myRoute = Util.generateRouteBasicCall('userAccount_UserData_GET', '/get-user-account-user-data', 'username','GET', true);
  server.route (myRoute);

}