var Handlers = require('./handlers');

var routes = [
    {
        method: 'POST',
        path: '/api/pos-user-accounts/captcha',
        config: {
            handler: Handlers.defaultHandler,
            description: 'captchaGeneration API',
            notes: 'used for generate captcha',
            tags: ['api', 'captchaGeneration', 'login']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;