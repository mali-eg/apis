var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/api/customer/customer-accounts/overview',
        config: {
            handler: Handlers.defaultHandler,
            description: 'customerOverview API',
            notes: 'get customerOverview with Authentication',
            tags: ['api', 'customerOverview', 'overview']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;