var Handlers = require('./handlers');

var routes = [
    {
        method: 'POST',
        path: '/api/oauth2/token',
        config: {
            handler: Handlers.defaultHandler,
            description: 'oauth token API',
            notes: 'used for generate oauthtoken',
            tags: ['api', 'oauth', 'login']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;