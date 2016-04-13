var Handlers = require('./handlers');

var routes = [
    {
        method: 'POST',
        path: '/api/order/sales-order/sim',
        config: {
            handler: Handlers.defaultHandler,
            description: 'SIM swap API',
            notes: 'SIM swap API',
            tags: []
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;