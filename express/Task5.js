
/*
var express=require("express")
var app=express();
app.use(express.static(__dirname));
app.get("/process_get",(req,res)=>
    {
        var fn=req.query.first_name;
        var ln=req.query.last_name;
        console.log(req.query)
        res.send(`welcome ${fn} ${ln}`);
});
app.listen(8000);
*/

var express=require("express")
var app=express();
app.use(express.static(__dirname));
app.post("/process_get",(req,res)=>
    {
        var fn=req.body.first_name;
        var ln=req.body.last_name;
        console.log(req.body)
        res.send(`welcome ${fn} ${ln}`);
});
app.listen(8000)