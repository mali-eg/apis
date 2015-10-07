var Handlers = require('./handlers');

var routes = [
    {
        method: 'POST',
        path: '/passwordReset',
        config: {
            handler: Handlers.passwordResetHandler,
            description: 'passwordReset API',
            notes: 'used to passwordReset',
            tags: ['api', 'passwordReset', 'login']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;