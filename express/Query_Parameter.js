const express=require("express")
const app= express()
app.get('/data',(req,res)=>
{
    const name=req.query.name;
    const age=req.query.age;
    res.send("Name"+name+" , Age:"+age);
});
app.listen(5000)