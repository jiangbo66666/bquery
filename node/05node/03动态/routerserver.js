const express = require('express')

const ejs = require('ejs')

const server = express()

server.set('view engine','ejs')

server.set('views','../03动态')

const router = require('./router.js')

server.use(router)

server.listen(3000,()=>{
  console.log('服务器开启')
})