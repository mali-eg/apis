var Handlers = require('./handlers');

var routes = [
    {
        method: 'PUT',
        path: '/api/{type}/postal-contact-points/customer-parties/{accountId}/addresses',
        config: {
            handler: Handlers.accountHandler,
            description: 'This service updates the address associated to the Consumer.',
            notes: 'Account level',
            tags: ['api', 'aftersales', 'changeAddress']
            //response: {schema: responseModel}
        }
    },
    {
        method: 'PUT',
        path: '/api/{type}/postal-contact-points/subscriptions/{subscriptionId}/addresses',
        config: {
            handler: Handlers.subscriptionHandler,
            description: 'This service updates the address associated to the Consumer.',
            notes: 'Subscription level',
            tags: ['api', 'aftersales', 'changeAddress']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;