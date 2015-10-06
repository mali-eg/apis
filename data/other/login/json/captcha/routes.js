/**
 * Created by USER on 8/31/2015.
 */
var Handlers = require('./handlers');

var routes = [
    {
        path: '/captchGeneration',
        method: 'POST',
        handler:Handlers.postCaptchaGeneration
    },
    {
        path: '/captchVerification',
        method: 'GET',
        handler:Handlers.getCaptchaVerification
    }
];

module.exports = routes;