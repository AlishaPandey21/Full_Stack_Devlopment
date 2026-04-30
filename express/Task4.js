const express=require("express")
const app=express()
const Entrylog=(req,res,next)=>
{
    console.log("Student Entered Campus");
    next();

}
const CheckId=(req,res,next)=>
{
    const hasId=true;
    if(hasId)
    {
        req.student="Aryan";
        console.log("Id Verified");
        next();

    }
    else
    {
        res.send("Access Denied: NO Id Card");
    }};
    app.use("/class",Entrylog,CheckId);
    app.get("/class",(req,res)=>
    {
        res.send(`Welcome ${req.student} to the class`);
    });
    app.listen(3012)
