var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "rog.media0@gmail.com",
        pass: "niaowunzrgkrxlsz"
    }
});
module.exports = (to, message, subject) => {
    var mailOptions = {
        from: to,
        to: 'rog.media0@gmail.com',
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