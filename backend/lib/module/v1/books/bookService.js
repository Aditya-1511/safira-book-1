"use strict";

//========================== Load Modules Start =======================
const appUtils = require("../../../appUtils");
//========================== Load internal modules ====================
const bookDao = require('./bookDao');

//========================== Load Modules End ==============================================

function addBookToStore(params) {
    return bookDao.addBookToStore(params)
}

function isBookExist(params) {
    return bookDao.isBookExist(params)
}

function getByKey(param) {
    return bookDao.getByKey(param)
}

function allBooksInStore(param) {
    return bookDao.allBooksInStore(param)
}

//========================== Export Module Start ==============================

module.exports = {
    addBookToStore,
    isBookExist,
    getByKey,
    allBooksInStore
};

//========================== Export Module End ===============================
