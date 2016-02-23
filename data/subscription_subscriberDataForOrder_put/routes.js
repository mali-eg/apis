var Handlers = require('./handlers');

var routes = [
    {
        method: 'POST',
        path: '/api/pos-contract-subscriber/contracts/{ORDER_ID}/lineitems/{ORDER_LINE_ITEM_ID}/subscription',
        config: {
            handler: Handlers.defaultHandler,
            description: 'checkOut API',
            notes: 'Agent completed customer data capture',
            tags: ['api', 'newCustomer', 'subscriberData']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;