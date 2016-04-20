var Handlers = require('./handlers');

var routes = [
    {
        method: 'POST',
        path: '/api/pos-customer-party/bank/iban',
        config: {
            handler: Handlers.defaultHandler,
            description: 'validate given IBAN and add the valid BIC',
            notes: 'needed to save changed bankdata',
            tags: ['api', 'aftersales', 'bankdata', 'iban']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;