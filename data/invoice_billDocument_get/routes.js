var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/api/{type}/payment/invoices/{document_id}/invoice',
        config: {
            handler: Handlers.defaultHandler,
            description: 'customerDetails API',
            notes: 'get customerDetails with Authentication',
            tags: ['api', 'customerDetails', 'details']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;