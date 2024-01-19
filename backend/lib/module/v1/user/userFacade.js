"use strict";

//========================== Load Modules Start =======================

//========================== Load external modules ====================
// Load user service
var _ = require("lodash");
var Promise = require("bluebird");
var ip = require('ip');
var vCardsJS = require('vcards-js');
//========================== Load internal modules ====================

const usrService = require('./userService');
const userMapper = require('./userMapper');

const appUtils = require('../../../appUtils');
const redisSession = require("../../../redisClient/session");
const customException = require("../../../customException");
const emailService = require("../../../service/sendgrid_email");
const constant = require("../../../constant");
const config = require("../../../config");

//========================== Load Modules End ==============================================

function userLogin(params) {
    let user;
    return usrService.isEmailExist(params)
        .then(function (isExist) {
            if (isExist) {
                return usrService.login(params);
            } else {
                throw customException.userNotFound();
            }
        })
        .then(function (response) {
            if (response) {
                user = response;
                let tokenObj = _buildUserTokenGenObj(response);
                let userObj = {
                    userId: response._id.toString(),
                    userObj: tokenObj,
                    ip: params.clientIp ? params.clientIp : ip.address()
                }
                return redisSession.create(userObj)
            } else {
                throw customException.incorrectPass();
            }

        })
        .then(function (response) {
            return userMapper.loginMapping({ user: user, accessToken: response.token });
        });

}


function signup(params) {
    return usrService.isEmailExist(params)
        .then(function (result) {
            if (result) {
                throw customException.alreadyRegistered();
            }
            params.password = appUtils.createHashSHA256(params.password)
            return usrService.createUser(params)
        })
        .then(function (user) {
            return userMapper.createMapping({ user: user });
        })
        .catch(function (err) {
            throw err
        })
}

function _buildUserTokenGenObj(user) {
    var userObj = {};
    userObj.userId = user._id.toString();
    userObj.status = user.status;
    return userObj;
}

//========================== Export Module Start ==============================

module.exports = {
    userLogin,
    signup
};

//========================== Export Module End ================================