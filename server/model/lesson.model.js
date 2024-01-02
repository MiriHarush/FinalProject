const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
    ownerLesson: {
        type: mongoose.Types.ObjectId,
        ref: 'Course'

    },
    lessonName: {
        type: String,
        required: true
    },
    descerption: {
        type: String,
        required: false
    },
    content: [{
            type: String,
            url: String
    }],
    ownerUser: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

const Lesson = mongoose.model("Lesson", lessonSchema);
module.exports.Lesson = Lesson;