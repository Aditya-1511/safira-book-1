"use strict";
//========================== Load Modules Start =======================

//========================== Load internal modules ====================
var mongoose = require("mongoose");
var promise = require("bluebird");

var _ = require("lodash");
//========================== Load internal modules ====================
const bookModel = require('./bookModel');


// init book dao
let BaseDao = require('../../../dao/baseDao');
const bookDao = new BaseDao(bookModel);


//========================== Load Modules End ==============================================

function addBookToStore(params) {
    var user = new bookModel(params);
    return bookDao.save(user);
}


function getByKey(query) {
    return bookDao.findOne(query)
}

function isBookExist(params) {
    let query = {};
    if (params.userId) {
        query._id = { $ne: params.userId };
    }
    if (params.bookName) {
        query.bookName = params.bookName;

        return bookDao.findOne(query)
    }
}

function allBooksInStore(query) {
    query.isDelete = 0
    return bookDao.find(query)
}

//========================== Export Module Start ==============================

module.exports = {
    addBookToStore,
    getByKey,
    isBookExist,
    allBooksInStore
};

//========================== Export Module End ===============================
