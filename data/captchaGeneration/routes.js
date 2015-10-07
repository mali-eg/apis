var Handlers = require('./handlers');

var routes = [
    {
        method: 'POST',
        path: '/captchaGeneration',
        config: {
            handler: Handlers.captchaGenerationHandler,
            description: 'captchaGeneration API',
            notes: 'used for generate captcha',
            tags: ['api', 'captchaGeneration', 'login']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;