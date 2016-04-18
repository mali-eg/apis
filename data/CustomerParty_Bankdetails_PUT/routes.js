var Handlers = require('./handlers');

var routes = [
    {
        method: 'PUT',
        path: '/api/{type}/customer/customer-parties/{accountId}/bank/details',
        config: {
            handler: Handlers.defaultHandler,
            description: 'Save the changed bank data',
            notes: 'Save the changed bank data',
            tags: ['api', 'aftersales', 'bankdata']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;