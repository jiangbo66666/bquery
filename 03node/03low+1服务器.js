const http = require('http')

const server = http.createServer()

server.on('request',function(req,res){
  const url = req.url
  const meth =  req.method.toLowerCase()
  res.writeHeader(200,{"Content-Type":"text/html;charset=utf-8"})
  if(meth=='get' && url == '/index.html'){
    res.end('<h1> 我是h1 </h1>')
  }else if(meth=='get' && url == '/movie.html'){
    res.end('我是电影')
  }else if(meth=='get' && url == '/about.html'){
    res.end('关于')
  }else if(meth=='post' && url == '/post.html'){
    res.end('post请求')
  }else{
    res.end('404')
  }
})

server.listen(3000,function(){
  console.log('波神，启动')
})