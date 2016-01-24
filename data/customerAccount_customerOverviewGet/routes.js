var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/api/customer/customer-accounts/overview',
        config: {
            handler: Handlers.defaultHandler,
            description: 'This service is used to obtain the overview of existing customer information based on give search criteria',
            tags: ['api', 'login']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;