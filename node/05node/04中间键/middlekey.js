const express = require('express')

const fs = require('fs')

const path = require('path')

const server = express()

server.use(mymiddlestory)

server.get('/',(req,res)=>{
  res.send('首页')
})

server.get('/about',(req,res)=>{
  res.send('关于')
})

server.get('/gaga',(req,res)=>{
  res.send('嘎嘎')
})

server.listen(3000,()=>{
  console.log('服务器启动')
})


function mymiddlestory(req,res,next){
  const str = `${new Date().toLocaleString()} ${req.method} ${req.url}\r\n`
  console.log(str)
  fs.appendFile(path.join(__dirname,'./info.txt'),str,(err)=>{
    if(err)return console.log('记录失败')
    console.log('记录成功')
    next()
  })
}