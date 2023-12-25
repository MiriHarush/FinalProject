const mongoose = require("mongoose");

const inviteSchema = new mongoose.Schema({
    inviteMail: [{
        type: String
    }],
    acceptMail: [{
        type: String
    }],
    courseId: {
        type: mongoose.Types.ObjectId,
        ref: 'Course'
    }
    
})

const Invite = mongoose.model("Invite", inviteSchema);
module.exports.Invite = Invite;