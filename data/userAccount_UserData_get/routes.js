var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/api/identity/user-accounts/user-data',
        config: {
            handler: Handlers.defaultHandler,
            description: 'subscriptionsDetails API',
            notes: 'get subscriptionsDetails with Authentication',
            tags: ['api', 'subscriptionsDetails', 'details']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;