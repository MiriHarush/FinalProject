const nodemailer = require('nodemailer');
const { User } = require("../model/user.model");

const sendEmail = (to, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'donotreplay08@gmail.com',
                pass: 'oucg sbpm eiqz hyrl'
            }
        });

        const mailOptions = {
            from: 'donotrplay08@gmail.com',
            to: to,
            subject: subject,
            text: text
        };

        const result = transporter.sendMail(mailOptions);

        console.log('Email sent:', result);

        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
};


const mail = async (mail) => {
    
    const userEmail = mail; 
    console.log(userEmail)
    const subject = 'הודעת התחברות לאתר';
    const message = 'ברוך הבא! התחברת בהצלחה לאתר שלנו.';
    
    const emailSent = await sendEmail(userEmail, subject, message);
    
    if (emailSent) {
        console.log('Email sent successfully.');
    } else {
        console.log('Failed to send email.');
    }
    
}


// const sendSMS = (phone) => {
    
    
//     const accountSid = 'ACe8140aebd71cbdbf9e4d22abb60d1c28';
//     const authToken = '3c197a53c6ab62c534dd0f0d5878e9c2';
//     const twilio = require('twilio');
    
//     const client = twilio(accountSid, authToken);
    
//     const userPhoneToSMS = phone; 
//     console.log(userPhoneToSMS)
//     const messageBody = 'ברוך הבא! התחברת בהצלחה לאתר שלנו.';
    
//     client.messages
//     .create({
//         body: messageBody,
//         from: '+18039489821',
//         to: userPhoneToSMS
//     })
//     // .then(message => console.log('SMS sent:', message.sid))
//     .catch(error => console.error('Error sending SMS:', error));
// }



module.exports = { mail};