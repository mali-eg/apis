var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/captchaVerification',
        config: {
            handler: Handlers.defaultHandler,
            description: 'captchaVerification API',
            notes: 'used verify captcha',
            tags: ['api', 'captchaVerification', 'login']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;