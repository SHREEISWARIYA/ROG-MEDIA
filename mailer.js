var nodemailer = require('nodemailer');
const dotenv = require('dotenv')
dotenv.config({ path: `${__dirname}/.env` });

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});
module.exports = (to, message, subject) => {
    var mailOptions = {
        from: to,
        to: process.env.MAIL_TO,
        subject: subject,
        text: message,
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });


}