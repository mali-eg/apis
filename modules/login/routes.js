/**
 * Created by USER on 8/31/2015.
 */
var Handlers = require('./handlers');

var responseModel = {
    "successMessage": {
        "code": null,
        "text": "The password has been changed",
        "detailedText": null,
        "severity": null,
        "type": "Success"
    }
};

var LoginRoutes = [
    {
        method: 'GET',
        path: '/',

        handler: function(request, reply){
            console.log("in / GET");
            reply.file('index.html');
        }
    },
    {
        method: 'GET',
        path: '/resetPassword',
        config: {
            handler: Handlers.sendTANHandler,
            description: 'resetPassword API',
            notes: 'used for first TAN step',
            tags: ['api', 'login'],
            response: {schema: responseModel}
        }
    }
];

module.exports = LoginRoutes;