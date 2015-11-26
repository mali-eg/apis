var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/api/pos-user-accounts/captcha',
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