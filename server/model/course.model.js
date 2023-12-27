const { string } = require("joi");
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({

    courseName: {
        type: String,
        required: true
    },
    typeCourse: {
        type: String,
        required: true,
        enum: ['experiential', 'studies', 'enrichment']
    },
    permission: {
        type: String, 
        enum: ['public', 'private'],
        default:'private',
        required: true
    },
    lessons: [{
        type: mongoose.Types.ObjectId,
        ref: 'Lesson'
    }],
    description:{
        type: String,
        required: false
    },
    //הרשאות כמו מחיקה עדכון אז קשרנו לבעלים של הספייס
    ownerCourse: {
        type: mongoose.Types.ObjectId,
        ref: 'Space'
    },
    ownerUser: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }

})

const Course = mongoose.model("Course", courseSchema);
module.exports.Course = Course;