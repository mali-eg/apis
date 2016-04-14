var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function (request, reply) {
    // vars
    var fs = require('fs');
    // username
    var customer_username = request.headers.username;
    if (customer_username == 'ops_6') {
        request.headers.username = 'ops_1'
    }
    var customer_username_path = __dirname + "/data/" + request.headers.username + ".json";
    // id
    var customer_id = request.query.id;
    var customer_id_path = filePath = __dirname + "/data/" + customer_id + ".json";
    // pass
    var customer_password = request.query.password;
    // birth date
    var customer_birthdate = request.query['birth-date'];
    // id card
    var customer_idCard = request.query['id-card'];
    // default path
    var filePath = customer_username_path;

    // cases
    if (fs.existsSync(customer_id_path)) {
        filePath = customer_id_path;
        // check for the pass
        if (customer_password == '123') {
            filePath = __dirname + "/data/pass-wrong.json";
        } else if (customer_birthdate == '08.11.1985' || customer_birthdate == '8.11.1985') {
            filePath = __dirname + "/data/date-wrong.json";
        } else if (customer_password || customer_birthdate) {
            filePath = customer_username_path;
        }
    }
    // if file not exists
    if (!fs.existsSync(filePath)) {
        //filePath = __dirname+"/data/not-found.json";
    }

    reply(Util.getData(filePath));
};

module.exports = Handlers;