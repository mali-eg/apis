var Handlers = require('./handlers');

var routes = [
    {
        method: 'POST',
        path: '/api/pos-security-tokens/federation/authentication-mtan',
        config: {
            handler: Handlers.defaultHandler,
            description: 'mTANVerification Federation API',
            notes: 'used verify captcha',
            tags: ['api', 'mTANVerification', 'login', 'Federation']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;
