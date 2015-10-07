var Handlers = require('./handlers');

var routes = [
    {
        method: 'POST',
        path: '/authenticate',
        config: {
            handler: Handlers.authenticateHandler,
            description: 'authenticate API',
            notes: 'authenticate notes',
            tags: ['api', 'authenticate', 'login']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;