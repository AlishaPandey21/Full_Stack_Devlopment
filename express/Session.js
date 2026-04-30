const express = require('express')
const app = express()
const sess = require("express-session")
app.use(sess({
    resave: true,
    saveUninitialized: true,
    secret: "LJU123"
}));

app.get("/", (req, res) => {
    if (req.session.page_views) {
        req.session.page_views++;
        res.send(`<h1 style="color:blue">You Have Visited Page ${req.session.page_views}times</h1>`);
    } else {
        req.session.page_views = 1
        res.send(`<h1 style ="color:green"> WElcome! Thank you For Visit our Website! </h1>`)
    }
});
app.listen(8003)