// Importing mongoose
var mongoose = require("mongoose");
var constants = require('../../../constant');

var Schema = mongoose.Schema;
var User;

var UserSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        index: true,
    },
    phoneNum: {
        type: String,
    },
    password: {
        type: String
    },
    cPassword: {
        type: String
    },
    subscribeNewsletter: {
        type: Number,
        default: 0  // 1 - Yes, 0 - No
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

//Export user module
User = module.exports = mongoose.model(constants.DB_MODEL_REF.USER, UserSchema);


