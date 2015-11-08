var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/apis/getSubscription',
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