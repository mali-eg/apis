var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/api/pos-sales-order-line/sales-orders/{ORDER_ID}/lineitems/{ORDER_LINE_ITEM_ID}/summary',
        config: {
            handler: Handlers.defaultHandler,
            description: 'shoppingCart API',
            notes: 'Agents has finished the subscriber data capture and turns next to the Summary Data page',
            tags: ['api', 'newCustomer', 'summaryData']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;