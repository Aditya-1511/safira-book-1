"use strict";

//========================== Load Modules Start =======================
const appUtils = require("../../../appUtils");
//========================== Load internal modules ====================
const userDao = require('./userDao');

//========================== Load Modules End ==============================================

function login(params) {
    let query = {};
    query.email = params.email;
    query.password = appUtils.createHashSHA256(params.password);
    return userDao.getByKey(query)
        .then(function (result) {
            if (result) {
                return result;
            } else {
                return false;
            }
        })
}

function createAdmin(params) {
    return userDao.getByKey({ email: params.email })
        .then(function (result) {
            if (!result) {
                return userDao.createUser(params);
            } else {
                return result;
            }
        })
}


function createUser(params) {
    return userDao.createUser(params)
}

function isEmailExist(params) {
    return userDao.isEmailExist(params)
}

function getByKey(param) {
    return userDao.getByKey(param)
}

//========================== Export Module Start ==============================

module.exports = {
    createAdmin,
    login,
    createUser,
    isEmailExist,
    getByKey
};

//========================== Export Module End ===============================
