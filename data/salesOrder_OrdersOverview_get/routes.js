var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/api/orders',
        config: {
            handler: Handlers.defaultHandler,
            description: 'orders API',
            notes: 'orders API',
            tags: ['api', 'orders']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;