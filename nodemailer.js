var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

// api key https://sendgrid.com/docs/Classroom/Send/api_keys.html 
var options = {
    auth: {
        api_key: process.env.SENDGRID_API_KEY
    }
}

var mailer = nodemailer.createTransport(sgTransport(options));

var email = {
    to: ['tacos@foo.com', 'sayer@bar.com'],
    from: 'roger@tester.com',
    subject: 'Hi there',
    text: 'Awesome sauce',
    html: '<b>Awesome sauce</b>'
};
 
mailer.sendMail(email, function(err, res) {
    if (err) { 
            console.log(err) 
        }
    console.log(res);
});
