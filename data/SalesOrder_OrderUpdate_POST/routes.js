var Handlers = require('./handlers');

var routes = [
    {
        method: 'POST',
        path: '/api/SalesOrder_OrderUpdate_post/contracts/{order_id}',
        config: {
            handler: Handlers.defaultHandler,
            description: 'summaryData API',
            notes: 'Agent submit summary data',
            tags: ['api', 'newCustomer', 'summaryData']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;