// 2. Write an express js script that accepts multiple files max
// number 5 to be uploaded using the multer middleware
// and saves the files to the specific directory called
// “multiple”.
const express = require("express")
const multer = require("multer")
const app = express();
app.use(express.static(__dirname, { index: 'm1.html' }));
var store = multer.diskStorage({ destination: "multiple", filename: function(req, file, cb) { cb(null, file.fieldname + "-" + Date.now() + ".doc") } })
var upload = multer({ storage: store, limits: { fileSize: 10 * 1024 } })
app.post('/uploadfile', upload.array('mypic', 10), (req, res) => {
    const files = req.files
    if (files) {
        res.set("content-type", "text/html")
        for (i of files) {
            res.write("<h1>File" + i.originalname + "has been uploaded</h1>")
        }
        res.send()
    }
})
app.listen(6788);