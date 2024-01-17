const mongoose = require("mongoose");

const inviteSchema = new mongoose.Schema({
    inviteMail: {
        type: String
    },
    acceptMail: {
        type: String
    },
    statusInvite: {
        type: String,
        enum: ['accept', 'reject', 'waiting'],
        default: "waiting"
    },
    courseId: {
        type: mongoose.Types.ObjectId,
        ref: 'Course'
    },
    courseName: {
        type: String
    }
})

const Invite = mongoose.model("Invite", inviteSchema);
module.exports.Invite = Invite;