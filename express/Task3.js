/*3. Create an application using Express.js where:
• Multiple middleware functions add student name, college, and marks
• Data is passed using req
• Final route displays all values*/

const express=require("express")
const app=express()
// Middleware 1: Add Student Name
const addName=(req,res,next)=>
    {
        req.name="Samarth"
        console.log("Name Added")
        next();

    } 
    //Middleware-2: Add College Name

    const addCollege=(req,res,next)=>{req.college="LJ University", console.log("College Added"); next();};

    //Middleware-3: Perform Calculation

    const addMarks=(req,res,next)=>
    {
        req.total=50+40;
        console.log("Marks Added");
        next();

    }
    app.get("/student",addName,addCollege,addMarks,(req,res)=>{
        res.send("Student Name:"+req.name+"<br>College:"+req.college+"<br> Total Marks :"+req.total);
    });
    app.listen(6001);
    