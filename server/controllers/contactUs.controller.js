const { ContactUs } = require("../model/contactUs.model");
const { sendContactRequest, sendContactRequestToAdmin } = require("./sendMessage");


exports.addContactRequest = async (req, res, next) => {

    const { email, contentMessage } = req.body;

    try {
        const newContact = new ContactUs({
            email,
            contentMessage
        });

        try {
            await sendContactRequest(email);
            await sendContactRequestToAdmin(email, contentMessage );
        } catch (err) {
            return next(err);
        }

        await newContact.save();

        res.status(200).send("request has been sent successfully");
    } catch (error) {
        next(error)
    }
}


exports.getContactRequests = async (req, res, next) => {
    try {
        const contactRequests = await ContactUs.find({});
        res.send(contactRequests);
    } catch (error) {
        next(error)
    }
}
