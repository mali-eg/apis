var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/api/pos-contract-customer-agreement/contracts/{order_id}/customer-agreements',
        config: {
            handler: Handlers.defaultHandler,
            description: 'authenticate API',
            notes: 'authenticate notes',
            tags: ['api', 'login']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;