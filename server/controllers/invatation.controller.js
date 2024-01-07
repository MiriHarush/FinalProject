
// const nodemailer = require('nodemailer');

const { Invite } = require("../model/invatations.model");

// async function sendInvitation(receiverEmail, courseName) {
//     // יצירת מובנה לשליחת הודעות אימייל
//     let transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'your_email@gmail.com',
//             pass: 'your_email_password'
//         }
//     });

//     // יצירת גוף ההודעה
//     let mailOptions = {
//         from: 'your_email@gmail.com',
//         to: receiverEmail,
//         subject: 'הזמנה לקורס',
//         text: `שלום,\nאת/ה מוזמן/ת להצטרף לקורס "${courseName}".\nבברכה,\nהצוות שלנו`
//     };

//     // שליחת ההודעה
//     try {
//         let info = await transporter.sendMail(mailOptions);
//         console.log('Message sent: %s', info.messageId);
//     } catch (error) {
//         console.error('Error sending message:', error);
//     }
// }

// // שליחת הזמנה למייל
// sendInvitation('receiver_email@example.com', 'קורס פרטי פייתון');
exports.updateInvite = async(req, res, next) => {
    const {idInvite} = req.params;
    const {newStatus} = req.body;
console.log({newStatus});
    try {
        const updatedInvite = await Invite.findByIdAndUpdate(
            idInvite,
            { $set: { statusInvite: newStatus } },
            { new: true }
        );

        if (!updatedInvite) {
            return res.status(404).json({ error: 'Invitation not found' });
        }

        return res.json(updatedInvite);
    } catch (error) {
        console.log(error)
       next(error)
    }
}

exports.getUserInvitationsByEmail = async (req, res, next) => {

    const { userEmail } = req.params
    // console.log(userEmail);
    try {
        // מצא את כל ההזמנות במסד הנתונים ששייכות למייל מסוים
        // const userInvitations = await Invite.find({ acceptMail: userEmail });
        const userInvitations = await Invite.find({ acceptMail: userEmail, statusInvite: 'waiting' });

        // console.log(userInvitations);

        // return userInvitations;
        res.send(userInvitations);
    } catch (error) {
        // throw new Error(s`Failed to get user invitations: ${error}`);
        next(error)
    }
}















