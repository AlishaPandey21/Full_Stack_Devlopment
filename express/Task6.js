var express=require("express")
var app=express();
app.use(express.static(__dirname,{index:"index1.html"}));
app.get("/process_get",(req,res)=>
    {
       res.set("content-type","tex/html");
       t1=(req.query.message).split(".");
       for(i in t1)
       {
        res.write(t1[i]+"<br>")
       }
       res.send()
});
app.listen(8001);