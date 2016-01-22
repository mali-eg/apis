var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/api/{type}/subscriptions/{subscription_id}/subscription',
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