var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/api/{type}/customer/customer-accounts/{accountId}/customer-account',
        config: {
            handler: Handlers.defaultHandler,
            description: 'customerDetails API',
            notes: 'get customerDetails with Authentication',
            tags: ['api', 'customerDetails', 'details']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;