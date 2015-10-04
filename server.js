var Hapi = require("hapi");

var server = new Hapi.Server();

server.connection({port:8080});

server.register(require('inert'), function (err) {

    var routes = require('./modules/routes-index');

    //var routes = [routes];
    if (err) {
        throw err;
    }

    server.route(routes);

    server.start(function (err) {

        if (err) {
            throw err;
        }

        console.log('Server running at:', server.info.uri);
    });

    server.ext("onRequest", function(request, reply){
        console.log('request received second ' + request.path);
        reply.continue();
    });
});


