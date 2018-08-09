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

  //判断路径地址，路由
  if(meth=='get'){
    // readhtml(res,url)
    html(res,url)
  }else{
    res.end('404')
  }
})

// function readhtml(res,url){
//   fs.readFile(path.join(__dirname,url),(err,data)=>{
//     if(err)return res.end('失败')
//     res.end(data)
//   })
// }

const html = (res,url)=>{
  fs.readFile(path.join(__dirname,url),(err,data)=>{
    if(err) return res.end('404.。。。。')
    res.end(data)
  })
}

server.listen(3000,function(){
  console.log('波神，启动')
})