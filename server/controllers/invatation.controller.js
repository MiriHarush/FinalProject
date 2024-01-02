
const nodemailer = require('nodemailer');

async function sendInvitation(receiverEmail, courseName) {
    // יצירת מובנה לשליחת הודעות אימייל
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your_email@gmail.com',
            pass: 'your_email_password'
        }
    });

    // יצירת גוף ההודעה
    let mailOptions = {
        from: 'your_email@gmail.com',
        to: receiverEmail,
        subject: 'הזמנה לקורס',
        text: `שלום,\nאת/ה מוזמן/ת להצטרף לקורס "${courseName}".\nבברכה,\nהצוות שלנו`
    };

    // שליחת ההודעה
    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending message:', error);
    }
}

// שליחת הזמנה למייל
sendInvitation('receiver_email@example.com', 'קורס פרטי פייתון');

















