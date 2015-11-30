var Handlers = require('./handlers');

var routes = [
    {
        method: 'POST',
        path: '/api/salesOrder_product-post',
        config: {
            handler: Handlers.defaultHandler,
            description: 'Save the selected product offering in the current shopping cart',
            notes: 'used to newCustomer',
            tags: ['api', 'newCustomer', 'SalesOrder']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;