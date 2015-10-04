/**
 * Created by USER on 8/31/2015.
 */
var Handlers = require('./handlers');

var routes = [
    {
        path: '/users',
        method: 'GET',
        handler:Handlers.getUsersHandler
    },
    {
        path: '/user/{id}',
        method: 'GET',
        handler:Handlers.getUserHandler
    },

    {
        path: '/addUser/{id}',
        method: 'POST',
        handler:Handlers.addUserHandler
    },

    {
        path: '/editUser/{id}',
        method: 'POST',
        handler:Handlers.editUserHandler
    }

 ];

module.exports = routes;