var routes = [].concat(
    //require('./login/routes'),
    require('./captchaGeneration/routes'),
    require('./captchaVerification/routes'),
    require('./mTANGeneration/routes'),
    require('./securityToken_Authentication/routes')
);

module.exports = routes;