var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/apis/salesOrder_product',
        config: {
            handler: Handlers.defaultHandler,
            description: 'View the saved product offer details in an existing shopping cart for a customer.',
            notes: 'used to newCustomer',
            tags: ['api', 'newCustomer', 'salesOrder']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;