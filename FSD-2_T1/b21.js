//pb-112
var http=require("http");
var fs=require("fs");
var url=require("url")
const url1="https://" // give url of your choice
const parsedUrl=url.parse(url1,true);
console.log(parsedUrl.pathname)
const c1=parsedUrl.query.c1
const c2=parsedUrl.query.c2
const c3=parsedUrl.query.c3
const hash=parsedUrl.hash
const filename="."+parsedUrl.pathname
      filecontent=c1+"!\n"+c3+" "+c2+"/n"+hash;
fs.writeFileSync(filename,filecontent)
const server=http.createServer((req,res)=>
{
    if(req.url=="/")
    {
        data=fs.readFileSync(filename,"utf-8")
        res.writeHead(500,{"content-type":"text/html"});
        res.end("<h1 style='color:red '<pre>"+data+"</pre><h1>");

    }
    else
    {
        res.writeHead(404,{'content-type':'text/plain'});
        res.end("Page Not Found")
    }
});
server.listen(3001);

