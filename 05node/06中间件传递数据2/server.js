const express = require('express')

const fs = require('fs')

const querystring = require('querystring')

const bodyparser = require('body-parser')

const server = express()

server.use(bodyparser.urlencoded({extended:false}))

server.use(writedata)

server.post('/',(req,res)=>{
  res.send(JSON.stringify(req.body))
})

server.get('/about',(req,res)=>{
  res.send('哈哈哈')
})

server.listen(3000,()=>{
  console.log('波神node启动')
})

function writedata(req,res,next){
  const str = `请求时间 ${ new Date() } 请求方式 ${ req.method } 亲求地址 ${ req.url }\r\n`
  fs.appendFile('./data.txt',str,(err)=>{
    if(err) return console.log('失败')
    console.log('成功')
  })
  next()
}