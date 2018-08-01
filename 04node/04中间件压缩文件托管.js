const express = require('express')

const compression = require('compression')

const server = express()

server.use(compression())

server.use(express.static('../04node'))

server.listen(3000,function(){
  console.log('哈哈哈')
})