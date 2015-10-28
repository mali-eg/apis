var Handlers = require('./handlers');

var routes = [
    {
        method: 'PUT',
        path: '/apis/checkOut',
        config: {
            handler: Handlers.defaultHandler,
            description: 'checkOut API',
            notes: 'It is the sub-journey of an agents capturing customer data',
            tags: ['api', 'newCustomer', 'shoppingCartLeadsToCustomerDataCapture']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;