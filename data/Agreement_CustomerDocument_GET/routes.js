var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/api/pos-contract-customer-agreement/customer-agreements/{documentId}/{document}',
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