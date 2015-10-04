/**
 * Created by USER on 8/31/2015.
 */
var Handlers = require('./handlers');

var LoginRoutes = [
    {
        method: 'GET',
        path: '/',

        handler: function(request, reply){
            console.log("in / GET");
            reply.file('index.html');
        }
    },
    {
        path: '/resetPassword',
        method: 'GET',
        handler:Handlers.sendTANHandler
    }
];

module.exports = LoginRoutes;