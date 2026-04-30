const express=require("express")
const app=express();
/*

// 1st Method 
app.use(express.static(__dirname));

*/


/*

// for 2nd method add these frontend line and move all the files like index.html ,1.css ,and 1.jfif in frontend folder
app.use(express.static("frontend"))
app.listen(5200);

*/



/*

//For 3rd Method make backend folder and move 1.js into it

path=require("Path")
const sp=path.join(__dirname,"../");
app.use(express.static(sp));
app.listen(5200)
*/

/*
//For 4th method

path=require("Path")
const sp=path.join(__dirname,"../frontend");
app.use(express.static(sp));
app.listen(5200)

*/

var css_path=path.join(__dirname,"../css")
var image_path=path.join(__dirname,"../image")
var html_path=path.join(__dirname,"../html")

app.use(express.static(css_path));
app.use(express.static(image_path));
app.use(express.static(html_path));
app.listen(5200)

