const fs = require('fs');
// first-err编程风格
const http = require('http');
let server = http.createServer();

server.on('request',(req,res)=>{
  // console.log(req);

    fs.readFile('./files/readme.md','utf-8',(err,data)=>{
      // console.log(err);
      // console.log(data.toString());
      if(err)return console.log(err)
      console.log(data.toString())
      res.end(data.toString())
    })
    
  // console.log(res);
})
server.listen(3000,()=>{
  console.log('服务器执行');
})