console.log("node js");

const fs=require('fs');

fs.writeFileSync('file.txt','Shivanand')

const http=require('http');
let server=http.createServer((req,res)=>{
    console.log(req);
})
server.listen(4000)
