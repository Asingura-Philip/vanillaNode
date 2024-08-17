//import http module
const http = require("http");
const fs = require('fs')
const path = require('path')

//create server
const server = http.createServer((req, res) => {
  const { url, method } = req;
  const filePath = path.join(__dirname,"trial.html")
  if (method === "GET") {
    switch (url) {
      case "/":
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>THIS IS A VANILLA NODE ROUTER</h1>");
        res.end();
        break;
      case "/contact":
        res.writeHead(200, { "content-type": "text/plain" });
        res.write("reach me at 256-003003");
        res.end();
        break;
      case '/pages':
        fs.readFile(filePath,(err,data)=>{
            if(err){
                res.writeHead(500,{"content-type":"text/plain"})
                res.end('500 server error')
            }else{
                res.writeHead(200,{'content-type':'text/html'})
                res.end(data)
            }
        })
        break;
      default:
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("sorry,page cant be found");
        break;
    }
  } else {
    res.writeHead(405, { "content-type": "text/plain" });
    res.end("NOT A VALID METHOD");
  }

  // res.statusCode = 200;
  // // res.setHeader('Content-Type', 'text/plain');
  // res.writeHead(200,{'Content-type':'text/html'})
  // res.write("<h2>hello mic check 1 2</h2>")
  // res.end('Hello, World!\n','utf-8');
});

//start server
server.listen(8000, () => {
  console.log("server running");
});
