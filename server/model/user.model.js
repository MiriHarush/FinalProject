const { ref } = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'the name is required']
    },
    userName: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        enum: ['Email', 'SMS', 'Phone'],
        required: true,
        default: 'Email'
    },
    spaces: [{
        type: mongoose.Types.ObjectId,
        ref: 'Space'
        
    }]
})

const User = mongoose.model("User", userSchema);
module.exports.User = User;