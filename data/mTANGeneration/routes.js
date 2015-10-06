var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/mtan',
        config: {
            handler: Handlers.mTANGenerationHandler,
            description: 'mTANGeneration API',
            notes: 'used verify captcha',
            tags: ['api', 'mTANGeneration', 'login']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;