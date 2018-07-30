const http = require('http')

const path = require('path')

const template = require('art-template')

const fs = require('fs')

const server = http.createServer()

const ha= {
  a:1,
  b:2
}
server.on('request',function(req,res){
  const url = req.url
  const method = req.method
  if(method =='GET'){
    // fs.readFile(path.join(__dirname,url),function(err,data){
    //   if(err) res.end('失败')
    //   res.end(data)
    // })
    const html = template(path.join(__dirname,'./index/index.html'),ha)
    res.end(html)
  }
})


server.listen(3000,function(){
  console.log('波神，启动')
})