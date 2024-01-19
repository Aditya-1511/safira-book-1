/**
 * This file will have request and response object mappings.
 */
var _ = require("lodash");
const config = require('../../../config');

function createMapping(params) {
    let bookInfo = params.bookInfo;
    var respObj = {
        "message": "Book added Successfully",
        "mediaPath": config.cfg.s3.mediaPath,
        "result": bookInfo,
    }
    return respObj;
}

function allBooksInStore(params) {
    var respObj = {
        "message": "Book list fetched Successfully",
        "result": params,
    }
    return respObj;
}

module.exports = {
    createMapping,
    allBooksInStore
}