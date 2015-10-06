/**
 * Created by USER on 8/31/2015.
 */

var fs = require('fs');

var Handlers = {};

Handlers.postCaptchaGeneration = function(request, reply){
    reply.file('./modules/captcha/json/postCaptchaGeneration/1.json');
};

Handlers.getCaptchaVerification = function(request, reply){
	if(request.query.username && request.query.username !== '' && request.query['captcha-text'] && request.query['captcha-text'] !== '') {		
		reply().code(200);
	} else {
		reply().code(400);
	}
};

module.exports = Handlers;