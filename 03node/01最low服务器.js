const http = require('http')
const server = http.createServer()
server.on('request',function(req,res){
  console.log('ok')
  res.writeHeader(200,{"Content-Type": 'text/html; charset=utf-8'})
  res.end('你哈哈')
})

server.listen(3000,function(){
  console.log('服务器启动')
})