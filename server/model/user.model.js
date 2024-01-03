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
        
    }], 
    resetToken: String,
    profileImage: {
        type: String,
        url: String, 
        default: "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_1280.png",
        // default: "https://cdn.pixabay.com/photo/2018/11/13/22/01/avatar-3814081_1280.png",
    }
})

const User = mongoose.model("User", userSchema);
module.exports.User = User;