var Handlers = require('./handlers');

var routes = [
    {
        method: 'DELETE',
        path: '/apis/lineItems',
        config: {
            handler: Handlers.defaultHandler,
            description: 'shoppingCart API',
            notes: 'Remove a given line item from the shopping cart',
            tags: ['api', 'newCustomer', 'shoppingCart']
        }
    }
];

module.exports = routes;