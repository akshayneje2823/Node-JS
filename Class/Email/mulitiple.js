

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'nejeakshay07@gmail.com',
        pass: 'Jindal@99'
    }
});
var mailOptions = {
    from: 'nejeakshay07',
    to: 'sagarjjha2018@gmail.com ,akshayneje2823@gmail.com',
    subject: 'Sending mail using Node.js',
    text:'That was easy!'
}
transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error)
    }else{
        console.log('Email sent: '+info.response)
    }
})