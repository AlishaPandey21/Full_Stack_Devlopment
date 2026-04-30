// 2. Create a web server that:
// • Accepts a GET request with a dynamic user ID in the URL
// • Also accepts additional data (name, age) using query parameters
// • Extracts:
// o id from route parameters
// o name and age from query string
// • Returns a JSON response containing all received data

const express=require("express")
const app=express();
app.get("/user/:id",(req,res)=>
{
    const userid=req.params.id;
    const name=req.query.name;
    const age=req.query.age;

    res.json({
        message:"Data Received",
        params:{id:userid},
        query:{name,age}
           });
});
app.listen(3006);
