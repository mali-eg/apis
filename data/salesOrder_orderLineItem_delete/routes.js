var Handlers = require('./handlers');

var routes = [
    {
        method: 'DELETE',
        /*/api/pos-sales-order-line/sales-orders/{ORDER_ID}/lineitems/{ORDER_LINE_ITEM_ID}*/
        /*salesOrder_orderLineItem_delete*/
        path: '/api/pos-sales-order-line/sales-orders/{ORDER_ID}/lineitems/{ORDER_LINE_ITEM_ID}',
        config: {
            handler: Handlers.defaultHandler,
            description: 'shoppingCart API',
            notes: 'Remove a given line item from the shopping cart',
            tags: ['api', 'newCustomer', 'shoppingCart']
        }
    }
];

module.exports = routes;