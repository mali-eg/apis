var Handlers = require('./handlers');

var routes = [
    {
        method: 'GET',
        path: '/api/pos-item-task/entities/ruleset',
        config: {
            handler: Handlers.defaultHandler,
            description: 'Retrieve the validation rules for each entity element for the frontend',
            notes: 'Used to newCustomer',
            tags: ['api', 'newCustomer', 'entityList']
            //response: {schema: responseModel}
        }
    }
];

module.exports = routes;