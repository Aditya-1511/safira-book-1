const router = require("express").Router();
const requestIp = require('request-ip');

const resHndlr = require("../../../responseHandler");
const middleware = require("../../../middleware");
const constants = require("../../../constant");
const userFacade = require("./userFacade");
const validators = require("./userValidators");

const constant = require("../../../constant");
//==============================================================

router.route("/signup")
    .post(function (req, res) {
        let { firstName, lastName, email, phoneNum, password, cpassword, subscribeNewsletter } = req.body;
        let clientIp = requestIp.getClientIp(req);
        userFacade.signup({ firstName, lastName, email, phoneNum, password, cpassword, subscribeNewsletter })
            .then(function (result) {
                resHndlr.sendSuccess(res, result, req);
            })
            .catch(function (err) {
                resHndlr.sendError(res, err, req);
            })
    });

router.route("/login")
    .post([validators.validateLogin], function (req, res) {
        let { email, password } = req.body;
        let clientIp = requestIp.getClientIp(req);
        userFacade.userLogin({ email, password, clientIp })
            .then(function (result) {
                resHndlr.sendSuccess(res, result, req);
            })
            .catch(function (err) {
                resHndlr.sendError(res, err, req);
            })
    });

module.exports = router;
