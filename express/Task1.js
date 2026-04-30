// 1. Create a basic web application that:
// • Displays a form on the homepage to enter a user's name
// • Sends the form data to the server using a POST request
// • The server should read the submitted name from the request body
// • Finally, display a message confirming:

const express=require("express")
const app=express()
//middleware
app.use(express.urlencoded({extended:true}))
//home page
app.get("/",(req,res)=>
{
    res.send(`<h1> User Form </h1> <h3> Create User</h3>
        <form action="/user" method="POST">
            <input type="text" name="name" placeholder="Enter Name"/>
            <button type="submit">Create</button></form>`);
        } );
//Post Request
app.post("/user",(req,res)=>
{
    const name=req.body.name;
    res.send("User Created With Name"+name);

});
app.listen(5504);
