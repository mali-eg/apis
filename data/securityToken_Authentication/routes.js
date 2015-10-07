var Handlers = require('./handlers');

var routes = [
    {
        method: 'POST',
        path: '/authenticate',
        config: {
            handler: Handlers.defaultHandler,
            description: 'authenticate API',
            notes: 'authenticate notes',
            tags: ['api', 'login']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;