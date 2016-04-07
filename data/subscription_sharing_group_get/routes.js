var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/api/subscription/sharing-group',
        config: {
            handler: Handlers.defaultHandler,
            description: 'This service is used to obtain the sharing group details',
            notes: 'get sharing group details',
            tags: ['api', 'login', 'redPlus']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;
