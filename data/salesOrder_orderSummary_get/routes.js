var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/apis/shoppingCart',
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