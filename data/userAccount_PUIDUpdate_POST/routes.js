var Handlers = require('./handlers');

var routes = [
    {
        method: 'POST',
	path: '/api/identity/pos-user-accounts/users/{username}',
        config: {
            handler: Handlers.defaultHandler,
            description: 'update user API',
            notes: 'update user',
            tags: ['api', 'login', 'dashboard']
        }
    }
];

module.exports = routes;