/* 
TestData_GET
test module - used for defining the api
*/

var Util = require('../Util');


module.exports = function(server) {
  var myRoute = Util.generateRouteBasicCall('testData_GET', '/get-test-data', 'name','GET');
  server.route (myRoute);

}