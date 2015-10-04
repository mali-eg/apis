/**
 * Created by USER on 8/31/2015.
 */

var fs = require('fs');

var Handlers = {};

Handlers.getUsersHandler = function(request, reply){
    //reply.file('./modules/userManager/json/getUsers/all.json');


    var users = [];
    var files = fs.readdirSync('./modules/userManager/json/getUser');

    files.forEach(function(file){
        var content = JSON.parse(fs.readFileSync("./modules/userManager/json/getUser/"+file));
        users.push(content);
    });

    reply(users);
};

Handlers.getUserHandler = function(request, reply){
    reply.file('./modules/userManager/json/getUser/'+request.params.id+'.json');

};


Handlers.addUserHandler = function(request, reply){
    console.log("in add user handler");

   var user = modifyUser(request);
    reply(user);

};

Handlers.editUserHandler = function(request, reply) {

    var user = modifyUser(request);
    reply(user);

};

function modifyUser(request){
    var user ={
        "id":request.payload.id,
        "contactNum":request.payload.contactNum,
        "title":request.payload.title,
        "firstName":request.payload.firstName,
        "lastName":request.payload.lastName,
        "userName":request.payload.userName
    };
    console.log(user);
    fs.writeFileSync("./modules/userManager/json/getUser/"+request.params.id+'.json', JSON.stringify(user));
    return user;
}

module.exports = Handlers;