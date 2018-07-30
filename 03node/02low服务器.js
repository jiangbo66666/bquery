const http = require('http')

const server = http.createServer()

server.on('request',function(req,res){
  console.log(req.url)
  console.log(req.method)
  res.writeHeader(200,{'Content-Type':'text/html;charset=utf-8'})
  res.end("我是你爹")
})

server.listen(3000,function(){
  console.log('服务器开启成功')
})