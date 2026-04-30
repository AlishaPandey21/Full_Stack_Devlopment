var nm = require('nodemailer')
var trans = nm.createTransport({
    host: "smtp.gmail.com",
    post: 465,
    auth: { user: "jencyp479@gmail.com", pass: "Abc@1234" }
});
var mailoption = {
    from: "jencyp479@gmail.com",
    to: "abc@gmail.com",
    subject: "Hello",
    text: "Test Mail",
    html: "Test Nodemailer,<h1>Effect of H1</h1>",
};
trans.sendMail(mailoption, (err, info) => {
    if (err) {
        console.log(err);
    }
    console.log(info)

});