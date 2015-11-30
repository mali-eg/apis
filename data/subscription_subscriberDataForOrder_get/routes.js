var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/api/getSubscription',
        config: {
            handler: Handlers.defaultHandler,
            description: 'checkOut API',
            notes: 'Agent completed customer data capture',
            tags: ['api', 'newCustomer', 'subscriberData']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;