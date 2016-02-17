var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',

        path: '/api/pos-sales-orders/{ORDER_ID}/summary/',
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