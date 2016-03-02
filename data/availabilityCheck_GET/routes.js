var Handlers = require('./handlers');
var routes = [
    {
        method: 'GET',
        path: '/api/availability_check/',
        config: {
            handler: Handlers.defaultHandler,
            description: 'availability_check_API',
            notes: 'used to check the address availability',
            tags: ['api', 'captchaGeneration', 'login']
        }
    }
];
module.exports = routes;