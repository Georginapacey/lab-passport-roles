const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
const constants = require('../constants')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'User needs a password']
    },
    social: {
        facebookId: String,
        googleId: String
    },
    role: {
        type: String,
        enum: [constants.ROLE_BOSS,constants.ROLE_TA,constants.ROLE_DEVELOPER],
        default: constants.ROLE_DEVELOPER
    }
}, { timestamps: true });