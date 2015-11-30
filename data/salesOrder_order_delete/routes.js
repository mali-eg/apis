var Handlers = require('./handlers');

var routes = [
    {
        method: 'DELETE',
        path: '/api/deleteContracts',
        config: {
            handler: Handlers.defaultHandler,
            description: 'shoppingCart API',
            notes: 'Remove new customer cart items',
            tags: ['api', 'newCustomer', 'shoppingCart']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;