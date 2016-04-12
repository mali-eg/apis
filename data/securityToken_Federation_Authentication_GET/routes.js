var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/api/technical/security-tokens/federation',
        config: {
            handler: Handlers.defaultHandler,
            description: 'federation dashboard API',
            notes: 'authenticate notes',
            tags: ['api', 'dashboard' ,'federation']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;
