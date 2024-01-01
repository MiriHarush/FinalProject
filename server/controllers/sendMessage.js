const nodemailer = require('nodemailer');
const { User } = require("../model/user.model");

const sendEmail = async (to, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'donotreplay08@gmail.com',
                pass: 'oucg sbpm eiqz hyrl'
            }
        });

        const mailOptions = {
            from: 'donotreplay08@gmail.com',
            to: to,
            subject: subject,
            html: text
        };

        const result = await transporter.sendMail(mailOptions);

        // console.log('Email sent:', result);

        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
};


const createUserMail = async (mail) => {
    
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


const sendInvitation = async (mail, courseName, inviteMail) => {
    
    const acceptMail = mail; 
    console.log(acceptMail)
    const subject = 'Course invitation';
    const message = `Hello, ${inviteMail}\n invited you to join the course "${courseName}".\nRegards,\nOur team`;
    
    const emailSent = await sendEmail(acceptMail, subject, message);
    
    if (emailSent) {
        console.log('Email sent successfully.');
    } else {
        console.log('Failed to send email.');
    }
    
}




const forgotPasswordEmail = async (recipientEmail, resetToken) => {
    try {
        const subject = 'Password Reset';
        const message = `
        You have requested a password reset. Click the following link to reset your password:
        <a href="http://localhost:5173/reset-password?token=${resetToken}">Reset Password</a>
        `;

        await sendEmail(recipientEmail, subject, message);

        console.log('Reset password email sent successfully');
    } catch (error) {
        console.error('Error sending reset password email:', error);
        throw new Error('Failed to send reset password email');
    }
};



module.exports = { createUserMail, sendInvitation, forgotPasswordEmail};


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


