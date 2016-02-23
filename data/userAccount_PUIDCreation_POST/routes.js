var Handlers = require('./handlers');

var routes = [
    {
        method: 'POST',
        path: '/api/identity/pos-user-accounts/users/',
        config: {
            handler: Handlers.defaultHandler,
            description: 'create user API',
            notes: 'create user',
            tags: ['api', 'login', 'dashboard']
        }
    }
];

module.exports = routes;