var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/user-accounts/captcha',
        config: {
            handler: Handlers.captchaVerificationHandler,
            description: 'captchaVerification API',
            notes: 'used verify captcha',
            tags: ['api', 'captchaVerification', 'login']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;