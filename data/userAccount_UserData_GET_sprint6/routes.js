var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/api/identity/user-accounts/user-data',
        config: {
            handler: Handlers.defaultHandler,
            description: 'users API',
            notes: 'get user',
            tags: ['api', 'login', 'dashboard']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;