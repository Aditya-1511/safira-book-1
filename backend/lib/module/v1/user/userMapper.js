/**
 * This file will have request and response object mappings.
 */
var _ = require("lodash");
const config = require('../../../config');

function loginMapping(params) {
    let userInfo = params.user;
    delete userInfo.password;
    var respObj = {
        "message": "Successfully Login",
        "accessToken": params.accessToken,
        "mediaPath": config.cfg.s3.mediaPath,
        "result": userInfo,
    }
    return respObj;
}

function createMapping(params) {
    let userInfo = params.user;
    if (userInfo.password) {
        delete userInfo.password;
    }
    if (userInfo.status) {
        delete userInfo.status;
    }
    if (userInfo.updated) {
        delete userInfo.updated;
    }
    var respObj = {
        "message": "User Created Successfully",
        "result": userInfo,
    }
    return respObj;
}

module.exports = {
    loginMapping,
    createMapping
}