//引入模块
const http = require('http')

const fs = require('fs')

const path = require('path')


const server = http.createServer()


//设置服务器响应
server.on('request',function(req,res){
  const url = req.url
  const meth =  req.method.toLowerCase()
  //设置读取编码
  res.writeHeader(200,{"Content-Type":"text/html;charset=utf-8"})


  if(meth=='get' && url == '/index.html'){
    fs.readFile(path.join(__dirname,'index.html'),(err,data)=>{
      if(err)return res.end('失败')
      res.end(data)
    })

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