var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/api/summary',
        config: {
            handler: Handlers.defaultHandler,
            description: 'checkOut API',
            notes: 'It is the sub-journey of an agents capturing customer data',
            tags: ['api', 'newCustomer', 'summaryData']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;