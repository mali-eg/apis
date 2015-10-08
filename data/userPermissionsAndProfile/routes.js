var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/users',
        config: {
            handler: Handlers.defaultHandler,
            description: 'users API',
            notes: 'get user',
            tags: ['api', 'login']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;