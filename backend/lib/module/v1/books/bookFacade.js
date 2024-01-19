"use strict";

//========================== Load Modules Start =======================

//========================== Load external modules ====================
// Load user service
var _ = require("lodash");
var Promise = require("bluebird");

//========================== Load internal modules ====================

const bookService = require('./bookService');
const bookMapper = require('./bookMapper');
const customException = require("../../../customException");

//========================== Load Modules End ==============================================

function addBookToStore(params) {
    return bookService.isBookExist(params)
        .then(function (result) {
            if (result) {
                throw customException.bookAlreadyExistsWithThisName();
            }
            return bookService.addBookToStore(params)
        })
        .then(function (bookInfo) {
            return bookMapper.createMapping({ bookInfo: bookInfo });
        })
        .catch(function (err) {
            throw err
        })
}

function allBooksInStore(params) {
    return bookService.allBooksInStore(params)
        .then(function (bookList) {
            return bookMapper.allBooksInStore(bookList);
        })
        .catch(function (err) {
            throw err
        })
}

//========================== Export Module Start ==============================

module.exports = {
    addBookToStore,
    allBooksInStore
};

//========================== Export Module End ================================