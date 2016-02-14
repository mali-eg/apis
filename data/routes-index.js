"use strict";

var fs = require('fs');
var path = require('path');

/*var routes = [];
 fs.readdirSync(__dirname+"/").forEach(function (item) {

 var filePath = path.join(__dirname, item);

 var stat = fs.statSync(filePath);
 if (stat.isDirectory() && fs.exists(filePath+'/routes.js')) {
 console.log('adding route file:' + filePath+'/routes');
 //routes.push(require(filePath+'/routes'));
 routes = routes.concat(require(filePath+'/routes'));
 }
 });*/


var routes = [].concat(
    //require('./login/routes'),
    require('./captchaGeneration/routes'),
    require('./captchaVerification/routes'),
    require('./mTANGeneration/routes'),
    require('./mTANVerification/routes'),
    require('./securityToken_Authentication/routes'),
    require('./passwordReset/routes'),
    require('./passwordChange/routes'),
    require('./securityToken_mTANAuthentication/routes'),
    require('./itemTask_entityList-get/routes'),
    require('./itemTask_ruleset/routes'),
    require('./salesOrder_product-get/routes'),
    require('./salesOrder_product-post/routes'),
    require('./salesOrder_product-postSprint3/routes'),
    require('./salesOrder_orderCreation_POST/routes'),
    require('./salesOrder-OrderLineItemCreation_POST/routes'),
    require('./salesOrder_orderLineItemSummary_get/routes'),
    require('./customerAccount_customerDataForOrder_put/routes'),
    require('./salesOrder_orderSummary_get/routes'),
    require('./salesOrder_orderLineItemUpdate_put/routes'),
    require('./SalesOrder_OrderUpdate_POST/routes'),
    require('./subscription_subscriberDataForOrder_put/routes'),
    require('./salesOrder_order_delete/routes'),
    require('./customerAccount_customerDataForOrder_get/routes'),
    require('./subscription_subscriberDataForOrder_get/routes'),
    require('./salesOrder_OrdersOverview_get/routes'),
    require('./salesOrder_orderLineItem_delete/routes'),
    require('./token/routes'),
	// user account
	require('./userAccount_PUIDDeactivation_POST/routes'),
    require('./userAccount_PUIDUpdate_POST/routes'),
    require('./userAccount_PUIDCreation_POST/routes'),
    require('./userAccount_UserData_GET/routes'),
	require('./userAccount_UserData_GET_sprint6/routes'),
    //PDF Download APIs
    require('./CustomerAgreementForOrder_GET/routes'),
    require('./Agreement_CustomerDocument_GET/routes'),
    //customer Overview
    require('./customerAccount_customerOverview_get/routes'),
    //customer details
    require('./customerAccount_customerDetailedView_get/routes'),
    require('./subscription_subscriberDetailedView_get/routes'),
    require('./customerAccount_invoice_billedUsage_get/routes'),
    require('./subscription_invoice_billedUsage_get/routes'),
    require('./invoice_billDocument_get/routes')
);
//console.log("routes:"+routes);
module.exports = routes;