const express=require("express")
const app=express();
// 1st Method 
app.use(express.static(__dirname));
// for 2nd method add these frontend line
app.use(express.static("frontend"))
app.listen(5200);
