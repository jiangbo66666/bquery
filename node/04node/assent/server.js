const express = require('express')

const compression = require('compression')

const server = express()

server.use(compression())

server.use('/abcd',express.static('../assent'))

server.listen(3000,()=>{
  console.log('哈哈哈哈')
})