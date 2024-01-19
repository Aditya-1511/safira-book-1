const router = require("express").Router();
const requestIp = require('request-ip');

const resHndlr = require("../../../responseHandler");
const middleware = require("../../../middleware");
const constants = require("../../../constant");
const bookFacade = require("./bookFacade");
const bookValidators = require("./bookValidators");

const constant = require("../../../constant");
//==============================================================

router.route("/addBookToStore")
    .post([middleware.authenticate.autntctTkn], function (req, res) {
        let { bookName, brand, bookPrice, rating, productCode, exTax, availability, tags } = req.body;
        let { user } = req;
        bookFacade.addBookToStore({ user, bookName, brand, bookPrice, rating, productCode, exTax, availability, tags })
            .then(function (result) {
                resHndlr.sendSuccess(res, result, req);
            })
            .catch(function (err) {
                resHndlr.sendError(res, err, req);
            })
    });

router.route("/allBooksInStore")
    .get([middleware.authenticate.autntctTkn], function (req, res) {
        let { page, limit } = req.query;
        let { user } = req;
        bookFacade.allBooksInStore({ user, page, limit })
            .then(function (result) {
                resHndlr.sendSuccess(res, result, req);
            })
            .catch(function (err) {
                resHndlr.sendError(res, err, req);
            })
    });

module.exports = router;
