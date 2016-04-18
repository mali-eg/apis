var Util = require('../../Util');
var Handlers = {};

Handlers.defaultHandler = function(request, reply){

    var payload = request.payload;
    payload.customerPartyVBO[0].paymentMethod.bank.bic = 'xyz4712';
	payload.customerPartyVBO[0].paymentMethod.bank.bankName = 'changed bank name';

    reply(payload); //send back completed data
};

module.exports = Handlers;