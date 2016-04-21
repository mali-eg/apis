var Handlers = require('./handlers');

var routes = [
    {
        method: 'POST',
        path: '/api/pos-sales-orders/mobile/order/sim',
        config: {
            handler: Handlers.defaultHandler,
            description: 'SIM swap API',
            notes: 'SIM swap API',
            tags: ['api', 'customerSnapshot', 'customerDetails', 'SIM swap']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;