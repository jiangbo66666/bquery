const express = require('express')

const path = require('path')

const fs = require('fs')

const server = express()

server.use(middlekeystory)

server.get('/',(req,res)=>{

  res.send('这是首页')
})

server.listen(3000,()=>{
  console.log('服务器开启成功')
})

function middlekeystory(req,res,next){
  const str = `${new Date()} ${req.method} ${req.url}\r\n`
  fs.appendFile(path.join(__dirname,'./info.txt'),str,(err)=>{
    if(err) return console.log('失败')
    console.log('成功')
    next()
  })
}