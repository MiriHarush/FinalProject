// messageModel.js

const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    userMessage:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
