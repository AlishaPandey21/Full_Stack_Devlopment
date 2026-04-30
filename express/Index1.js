var express=require("express");
var app = express();
app.get('/',function(req,res){
    res.set("Content-type","text/plain");
          
    res.send("<h1>Hello World</h1>")

});
app.get("/about",(req,res)=>
{
    res.set("Content-Type","text/html");
    res.write("hello")
    res.send("<h1> Hello From Home</h1") //will not displayed
    // in express after res.write then res.send or res.end should compulsory blank
})
app.listen(3001);