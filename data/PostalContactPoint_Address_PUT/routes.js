var Handlers = require('./handlers');

var routes = [
    {
        method: 'PUT',
        path: "/api/pos-customer-party-postal-contact-points/{type}/{accountId}/addresses",
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
        path: "/api/pos-subscriptions-postal-contact-points/{type}/{subscriptionId}/addresses",
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