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
    content: {
        images: [{
            type: String,
            url: String
        }],
        pdf: [{
            type: String,
            url: String
        }],
        youTube: [{
            type: String,
            url: String
        }],
        zip: [{
            type: String,
            url: String
        }],
        links: [{
            type: String,
            url: String
        }],

    }

})

const Lesson = mongoose.model("Lesson", lessonSchema);
module.exports.Lesson = Lesson;