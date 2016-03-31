/*
captchaVerification (GET)

URI:
/api/pos-user-accounts/captcha

TYPE: 
Account

DESCRIPTION:
__

INPUT PARAMETERS:
username - query parameter

POSTMAN:
localhost:8080/api/pos-user-accounts/captcha

TXT CONVERSION:
sh convert_single_file.sh data_src/static/captchaGeneration/01.txt
sh convert_single_file.sh data_src/static/captchaGeneration/02.txt
sh convert_single_file.sh data_src/static/captchaGeneration/03.txt
sh convert_single_file.sh data_src/static/captchaGeneration/04.txt


NOTES:
--
*/
var Util = require('../Util');


module.exports = function(server) {
  var myRoute = Util.generateRouteBasicCall('captchaVerification', '/api/pos-user-accounts/captcha', 'username','GET');
  server.route (myRoute);

}