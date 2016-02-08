var Handlers = require('./handlers');

var routes = [
    {
        method: 'POST',
        path: '/api/salesOrder_OrderLineItemCreation_POST',
        config: {
            handler: Handlers.defaultHandler,
            description: 'orderCreation API',
            notes: 'Agent gets order ID',
            tags: ['api', 'newCustomer', 'orderCreation']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;