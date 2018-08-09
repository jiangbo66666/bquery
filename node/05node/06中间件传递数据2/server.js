const express = require('express')

const fs = require('fs')

const bodyparser = require('body-parser')

const querystring = require('querystring')

const server = express()

server.use(writedate)

// server.use(forminformetion)
//替换为第三方插件
server.use(bodyparser.urlencoded({extended:false}))

server.get('/index',(req,res)=>{
  res.send('这是首页')
})

server.post('/',(req,res)=>{
  res.send(req.body)
})

server.listen(3000,()=>{
  console.log("波神启动")
})

//生成日志的中间件
function writedate(req,res,next){
  const str = `${ new Date() } ${ req.method } ${ req.url }\r\n`
  fs.appendFile('./date2.txt',str,(err)=>{
    console.log('写入日志成功')
  })
  next()
}

//接受form表单中ajax的中间件
// function forminformetion(req,res,next){
//   let str2 = ''
//   req.on('data',(chunk)=>{
//     str2+=chunk
//   })
//   req.on('end',()=>{
//     console.log(str2)
//     req.body = querystring.parse(str2)
//     console.log(req.body)
//     next()
//   })
// }