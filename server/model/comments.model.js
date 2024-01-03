const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    contentComment: {
        type: String
    }
})

const Comments = mongoose.model("Comments", commentsSchema);
module.exports.Comments = Comments;