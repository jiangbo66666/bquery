const express = require('express')

const ejs = require('ejs')

const server = express()

server.set('view engine','ejs')

server.set('views','./02动态')

// console.log(1111)

const router = require('./router')

server.use(router)

server.listen(3000,()=>{
  console.log('服务器开启成功')
})
