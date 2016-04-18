var Handlers = require('./handlers');

var routes = [
    {
        method: 'POST',
        path: '/api/order/sales-orders/contracts/{ORDER_ID}/lineitems/{ORDER_LINE_ITEM_ID}',
        config: {
            handler: Handlers.defaultHandler,
            description: 'shoppingCart API',
            notes: 'update order line items',
            tags: ['api', 'newCustomer', 'shoppingCart']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;