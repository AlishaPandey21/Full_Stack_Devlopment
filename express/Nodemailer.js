const express = require("express")
var nm = require("nodemailer")
const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.post('/response', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    var trans = nm.createTransport({ host: "smtp.gmail.com", port: 465, auth: { user: "Abc@gmail.com", pass: "App Paasword" } });
    // to get App password
    //  gmail account manage -> security ->2 step verification -> App Pass


    var mailoption = {
        from: "Abc@gmail.com",
        to: "Xyz@gmail.com",
        subject: "Hello",
        text: "Test Mail",
        html: "Test Nodemailer,<h1> Effect of H1 </h1>"
    };

    trans.sendMail(mailoption, (err, info) => {
        if (err) {
            console.log(err);
            return res.send("Error Sending Mail")
        }
        console.log(info);
        res.send("<h2> Thank You for Response</h2>");

    });
});
app.listen(3321)