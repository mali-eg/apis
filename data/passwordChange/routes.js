var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/passwordChange',
        config: {
            handler: Handlers.passwordChangeHandler,
            description: 'mTANGeneration API',
            notes: 'used verify captcha',
            tags: ['api', 'mTANGeneration', 'login']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;