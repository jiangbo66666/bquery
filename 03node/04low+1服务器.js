const http = require('http')

const server = http.createServer()

server.on('request',function(req,res){
  const url = req.url
  const method = req.method
  res.writeHeader(200,{'Content-Type':'text/html;charset=utf-8'})

  if(method=='GET' && url == '/index.html'){
    res.end('可接受的')
  }else{
    res.end('404')
  }


})

server.listen(3000,function(){
  console.log('波神，再次启动')
})