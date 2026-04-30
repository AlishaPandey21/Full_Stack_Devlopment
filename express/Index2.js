var express= require("express")
var app=express();
Student= {name:"LJ",age:20}
app.get('/',(req,res)=>
{
    /* res.write(JSON.stringify(Student))
    res.send()
    output:- {"name":"LJ","age":20}

*/
   /*
    res.send(Student)
     output:- 
     pretty-print
     {"name":"LJ","age":20}
     */
res.json(Student.age)
})
app.listen(6008)
