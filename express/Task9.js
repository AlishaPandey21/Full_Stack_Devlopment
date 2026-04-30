// 9. write a script to meet following requirements:
// 1. Create index.html file page which contains
// form(username,password,login button). and open it on localhost.
// 2. After clicking submit button, it should jump on “savesession” page. Store
// username and password in session.
// 3. After saving session, redirect to “fetchsession” page and read value. Put a
// LOGOUT link here.
// 4. Jump on delete session page after clicking LOGOUT link.
// 5. Destroy the session on this page and redirect to index.html page

var express = require('express')
var app = express();
var es = require("express-session");
app.use(es({ resave: false, saveUninitialized: false, secret: "lju1" }))
app.use(express.static(__dirname, { index: "Task9.html" }));
app.get("/savesession", (req, res) => {
    req.session.Uname = req.query.Uname;
    req.session.Password = req.query.Password;
    res.redirect("fetchsession")

});
app.get("/fetchsession", (req, res) => {
    res.write("<h1>Welcome" + req.session.Uname + "</h1>")
    res.write("<a href='/deletesession'>Logout </a>")
    res.send()

})
app.get("/deletesession", (req, res) => {
    req.session.destroy()
    res.redirect('/')
});
app.listen(6177)