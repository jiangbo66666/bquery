const http = require('http')

const fs = require('fs')

const path = require('path')

const server = http.createServer()

server.on('request',function(req,res){
  res.writeHeader(200,{"Content-Type":'text/html;charset=utf-8'})
  const url =  req.url
  const method = req.method
  if(method=='GET'){
    fs.readFile(path.join(__dirname,url),function(err,data){
      if(err) res.end('失败')
      res.end(data)
    })
  }
})

server.listen(3000,function(){
  console.log('服务器启动')
})