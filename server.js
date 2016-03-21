'use strict';

// include node modules
var Hapi        = require("hapi"),
Inert           = require('inert'),
Vision          = require('vision'),
HapiSwagger     = require('hapi-swagger'),
Pack            = require('./package');

// create new Hapi server
var server = new Hapi.Server();

server.connection({port:8080});

var swaggerOptions = {
    apiVersion: Pack.version
};






server.register([
    Inert,
    Vision,
    {
        register: HapiSwagger,
        options: swaggerOptions
    }
], function (err) {

    if (err) {
        throw err;
    }

   

    //
   

   

    require('./routes-index')(server);
    //server.route(routes);

    // load an external route module
    // pass the server instace to the module
    //require('./routes/test_route.js')(server);




    // start the server 
    server.start(function (err) {
        if (err) {
            throw err;
        }
        console.log('Server running at:', server.info.uri);
    });

    // event handler
    server.ext("onRequest", function(request, reply){
        console.log('request received :: ' + request.path);
        reply.continue();
    });
});