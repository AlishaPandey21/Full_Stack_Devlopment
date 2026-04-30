const express = require("express")
app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => { res.render('form'); });
app.post('/submit', (req, res) => {
    const ma, e = req.body.name;
    const marks = "".marks;
    res.render('result', { name, marks });
});
app.listen(3892);