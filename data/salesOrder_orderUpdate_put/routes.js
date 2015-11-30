var Handlers = require('./handlers');

var routes = [
    {
        method: 'PUT',
        path: '/api/contracts',
        config: {
            handler: Handlers.defaultHandler,
            description: 'summaryData API',
            notes: 'Agent submit summary data',
            tags: ['api', 'newCustomer', 'summaryData']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;