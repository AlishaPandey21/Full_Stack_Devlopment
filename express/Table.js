const express =require("express")
const app=express();
Student={u1:[{name:"LJU",id:2},{name:"LJU1",id:3},{name:"LJU1",id:4},{name:"LJU3",id:5},{name:"LJU4",id:6}]};

app.get("/",(req,res)=>{
    res.type("text/html");
   
    res.write("<center> <table cellspacing='5px' cellspadding='8px' border='1px solid'> <tr><th> Name </th> <th> id </th> </tr>")
    for(i of Student.u1){
        res.write("<tr><td>"+i.name+"</td>")
        res.write("<td>"+i.id+"</td></tr>")
    }
    res.write("</table></center>");
   
}) 

// app.get("/sort",(req,res)=>{res.type("text/html");
 //var temp=sort(a,b)=> {b.id-a.id}
//      res.write(`
//        
//         for (t of temp){
//              res.write(`<tr><td>${t.name}</td> <td>${t.id}</td></tr>`)
//         }`);
app.listen(3003)