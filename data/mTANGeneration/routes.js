var Handlers = require('./handlers');

var routes = [
    {
        method: 'POST',
        path: '/api/pos-user-accounts/mtan',
        config: {
            handler: Handlers.defaultHandler,
            description: 'mTANGeneration API',
            notes: 'used generate mtan',
            tags: ['api', 'mTANGeneration', 'login']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;