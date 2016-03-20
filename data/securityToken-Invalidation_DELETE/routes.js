var Handlers = require('./handlers');

var routes = [
    {
        method: 'DELETE',
        path: '/api/technical/security-tokens/token',
        config: {
            handler: Handlers.defaultHandler,
            description: 'invalidate the token present in NIL during a user log out',
            notes: 'used to log out',
            tags: ['api', 'login', 'logout']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;