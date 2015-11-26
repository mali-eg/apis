var Handlers = require('./handlers');

var routes = [
    {
        method: 'POST',
        path: '/api/pos-user-accounts/password',
        config: {
            handler: Handlers.defaultHandler,
            description: 'passwordReset API',
            notes: 'used to passwordReset',
            tags: ['api', 'passwordReset', 'login']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;