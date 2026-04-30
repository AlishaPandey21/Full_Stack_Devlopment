var express=require("express");
var app=express();
var cp=require("cookie-parser")
app.use(cp())
app.get('/cookie',(req,res)=>
{
    res.cookie("name","express js")
    res.cookie('fname','express')
    res.cookie('lname','js')
    // 1st method to expire the cookie
  //  res.cookie('Id','2',{maxAge:2000}) 
  
   // res.clearCookie('fname')
   //2nd Method to Expire the Cookie
   res.cookie('ID1','10',{expires:new Date(Date.now()+10000)})

    res.send(req.cookies)
});
app.listen(3002)