var Handlers = require('./handlers');

var routes = [
    {
        method: 'PUT',
        path: "/api/pos-customer-party-postal-contact-points/{type}/{accountId}/contact-medium/phone-and-email",
        config: {
            handler: Handlers.defaultHandler,
            description: 'Edit customer contact Information',
            notes: 'Edit customer contact Information',
            tags: ['api', 'aftersales', 'changeAddress']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;