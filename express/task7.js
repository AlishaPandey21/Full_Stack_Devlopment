/*
6. Write an express js script to set cookies of submitted values of form.
Perform following tasks.
1. Create a HTML file which contains a form with fields first name, last
name, password and a submit button.
2. Once form submitted, store all these entered values to the respective
cookies on ‘/next’ page.
3. Then redirect user to “/admin” page and clear the cookie set for the
last name. Display remaining set cookie values on this page. (Using
post method)
*/

var express=require('express')
var app=express();
var cp=require("cookie-parser");
app.use(cp())
app.use(express.static(__dirname,{index:'task7.html'}));
app.use(express.urlencoded())
app.post("/next",(req,res,next)=>
{
    res.cookie("fname",req.body.fname);
    res.cookie("lname",req.body.lname);
    res.cookie("password",req.body.password);
    res.redirect("/admin");
});

app.get("/admin",(req,res)=>
{
    res.clearCookie('lname');
    res.write("Welcome: "+req.cookies.fname);
    res.write("Lname: "+req.cookies.lname);
    res.write("Password "+req.cookies.password);
    res.send()
    
    

});
app.listen(3012)