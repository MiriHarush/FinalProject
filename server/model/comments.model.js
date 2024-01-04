const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    userName: {
        type: String,
        required: true
    },
    contentComment: {
        type: String,
        required: true
    },
    like: {
        type: Number,
        default: 0,
        required: false

    },
    disLike: {
        type: Number,
        default: 0,
        required: false
    },
    ownerUser: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    reply: [{
        userName: {
            type: String
        },
        comment: {
            type: String
        }
    }
    ]
})

const Comments = mongoose.model("Comments", commentsSchema);
module.exports.Comments = Comments;