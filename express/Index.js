
var express=require("express");
var app = express();
app.get('/',function(req,res){
    res.set("Content-type","text/plain");
    res.send("<h1>Hello World</h1>")
});
app.listen(3000);