var Handlers = require('./handlers');

var routes = [
    {
        method: 'POST',
        path: '/api/pos-security-tokens/authentication-user',
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