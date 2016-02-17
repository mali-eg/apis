var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/api/pos-user-accounts/user-data',
        config: {
            handler: Handlers.defaultHandler,
            description: 'users API',
            notes: 'get user',
            tags: ['api', 'login', 'dashboard']
        }
    }
];

module.exports = routes;
