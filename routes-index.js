/*
routes index is used to map all toutes in the server.js
*/
module.exports = function(server) {

    require('./routes/testData_GET')(server);
    require('./routes/userAccount_UserData_GET')(server);
    require('./routes/userAccount_PUIDUpdate_POST')(server);
    require('./routes/token')(server);
    require('./routes/securityToken_Authentication')(server);
    require('./routes/agreement_CustomerDocument_GET')(server);
    
}