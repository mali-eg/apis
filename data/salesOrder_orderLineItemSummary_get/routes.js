var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/apis/summaryData',
        config: {
            handler: Handlers.defaultHandler,
            description: 'shoppingCart API',
            notes: 'Agents has finished the subscriber data capture and turns next to the Summary Data page',
            tags: ['api', 'newCustomer', 'summaryData']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;