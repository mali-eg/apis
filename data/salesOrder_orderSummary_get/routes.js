var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/api/order/sales-orders/contracts',
        config: {
            handler: Handlers.defaultHandler,
            description: 'shoppingCart API',
            notes: 'get new customer cart items',
            tags: ['api', 'newCustomer', 'shoppingCart']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;