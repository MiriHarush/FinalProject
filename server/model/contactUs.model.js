const mongoose = require("mongoose");

const contactUsSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    contentMessage: {
        type: String,
        require: true
    }
})

const ContactUs = mongoose.model("ContactUs", contactUsSchema);
module.exports.ContactUs = ContactUs;