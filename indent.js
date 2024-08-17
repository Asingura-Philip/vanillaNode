import http from 'http'
import fs from 'fs'
import url from 'url'
import path from 'path'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(__filename)
console.log(__dirname)

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.writeHead(200,{"Content-Type":"txt.html"})
        res.
        res.end("welcome to the home page")
    }
})

server.listen(8000,()=>{
    console.log("server is running at port 8000")
})