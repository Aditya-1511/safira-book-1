// Importing mongoose
var mongoose = require("mongoose");
var constants = require('../../../constant');

var Schema = mongoose.Schema;
var Book;

var BookSchema = new Schema({
    bookName: {
        type: String,
    },
    rating: {
        type: Number,
    },
    bookPrice: {
        type: String,
    },
    brand: {
        type: String,
    },
    productCode: {
        type: String
    },
    availability: {
        type: String,
        default: 0  // 1 - Yes, 0 - No
    },
    exTax: {
        type: String
    },
    isWishlisted: {
        type: String,
        default: 0  // 1 - Yes, 0 - No
    },
    tags: [{
        type: String,
    }],
    isOnSale: {
        type: String,
        default: 0  // 1 - Yes, 0 - No
    },
    bookImage: {
        type: String,
    },
    status: {
        type: Number,
        default: 1
    },
    isDelete: {
        type: Number,
        default: 0
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
    }
},
);

//Export book module
Book = module.exports = mongoose.model(constants.DB_MODEL_REF.BOOK, BookSchema);


