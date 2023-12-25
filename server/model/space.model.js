const mongoose = require("mongoose");

const spaceSchema = new mongoose.Schema({

    nameSpace: {
        type: String,
        required: true
    },
    courses:[{
        type: mongoose.Types.ObjectId,
        ref: 'Course'
    }],
    ownerSpace:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

const Space = mongoose.model("Space", spaceSchema);
module.exports.Space = Space;