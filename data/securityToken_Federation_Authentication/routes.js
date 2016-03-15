var Handlers = require('./handlers');

var routes = [
    {
        method: 'POST',
        path: '/api/pos-security-tokens/federation/authentication-user',
        config: {
            handler: Handlers.defaultHandler,
            description: 'federation authenticate API',
            notes: 'authenticate notes',
            tags: ['api', 'login' ,'federation']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;
