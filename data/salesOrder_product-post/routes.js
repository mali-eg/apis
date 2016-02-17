var Handlers = require('./handlers');

var routes = [
    {
        method: 'POST',
        path: '/api/pos-sales-order-line/sales-orders/{ORDER_ID}/lineitems/{ORDER_LINE_ITEM_ID}/products',
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