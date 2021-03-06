var Handlers = require('./handlers');

var routes = [
    {
        method: 'POST',
        path: '/api/mtanAuth',
        config: {
            handler: Handlers.defaultHandler,
            description: 'mTAN Authentication API',
            notes: 'authenticate mTAN',
            tags: ['api', 'login']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;