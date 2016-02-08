var Handlers = require('./handlers');

var routes = [
    {
        method: 'POST',
        path: '/api/user-accounts/user-profile/{username}',
        config: {
            handler: Handlers.defaultHandler,
            description: 'User Deactivation API',
            notes: 'Deactivate user',
            tags: ['api', 'login', 'dashboard']
        }
    }
];

module.exports = routes;