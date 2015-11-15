var Handlers = require('./handlers');

var routes = [
    {
        method: 'PUT',
        path: '/apis/order/sales-orders-put',
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