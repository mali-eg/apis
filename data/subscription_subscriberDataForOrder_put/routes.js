var Handlers = require('./handlers');

var routes = [
    {
        method: 'PUT',
        path: '/apis/subscriberDataCapture',
        config: {
            handler: Handlers.defaultHandler,
            description: 'checkOut API',
            notes: 'Agent completed customer data capture',
            tags: ['api', 'newCustomer', 'shoppingCartLeadsToCustomerDataCapture']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;