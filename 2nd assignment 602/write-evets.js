

const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.on('request',(req,res)=>{
    const readableStream = fs.createReadStream(__dirname+'/README.md');
    const writeableStream = fs.createWriteStream(__dirname+'/assets/test.txt');
    readableStream
    .on('error',()=>{
        res.end("File not found")
    })
    .pipe(writeableStream)
    .on('error',(error)=>{
        console.log(error)
        res.end("Something went to wrong!")
    })
    .on('finish',()=>{
        res.end("Done!")
    })
})

server.listen(8000,()=>{
    console.log("Server is running in 8000 port")
})