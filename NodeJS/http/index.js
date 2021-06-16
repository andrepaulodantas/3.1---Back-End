const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((request, response)=>{

    // console.log(url.parse(request.url));
    let path = url.parse(request.url).pathname;


    if(path == "" || path == "/"){
        path = "/index.html"
    }
    let fileName = "." + path;
    
    fs.readFile(fileName, (err, data)=>{
        if(err){
            response.writeHead(404, {"Content-Type": "text/html; charset=utf-8"});
            response.end("<h1>Page not founded</h1>");
        }else{
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(data);
            response.end("<h1>Ola! Felows</h1>");
        }
    })

    // response.writeHead(200, {'Content-Type': 'text/html' });
    // response.end("<h1>Ola! Felows</h1>");
}).listen(3000, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Servidor Rodando na Porta 3000")
    }
})