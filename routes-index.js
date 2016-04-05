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
    require('./routes/availabilityCheck_GET')(server);
    require('./routes/captchaGeneration')(server);
    require('./routes/captchaVerification')(server);
    require('./routes/customerAccount_customerDataForOrder_GET')(server);
    require('./routes/customerAccount_customerDataForOrder_PUT')(server);
    require('./routes/mTANVerification_POST')(server);
    require('./routes/salesOrder_orderCreation_POST')(server);
    require('./routes/itemTask_entityList_GET')(server);
    require('./routes/salesOrder_OrdersOverview_GET')(server);    
}