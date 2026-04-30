/*5. Build an Express.js app with:
1. An HTML form with username, password, and submit button. Use
POST method.
2. On visiting /, show the form.
3. On submitting to /login:
a. If username is "admin", display: "Welcome admin"
b. Else, show: "Please login with admin name" and a link back to the
form.*/
var express=require("Express")
var app=express()
app.use(express.urlencoded())
app.use(express.static(__dirname,{index:"po2.html"}))
app.post("/login",(req,res)=>
{
    if(req.body.uname=="admin")
    {
        res.write("<h1>Welcome"+req.body.uname+"<h1>")

    }
    else
    {
        res.write(`<h1 style="color:red">Please Login with admin name</h1>  <a href="/">Try Again</a>`)
    }
    res.send();
})

app.listen(5222)
















