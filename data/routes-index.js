var routes = [].concat(
    //require('./login/routes'),
    require('./captchaGeneration/routes'),
    require('./captchaVerification/routes'),
    require('./mTANGeneration/routes')
);

module.exports = routes;