const express = require('express')

const compression = require('compression')

const server = express()

server.use(compression())

server.use('/abc',express.static('../vue-cms'))

server.listen(3000,()=>{
  console.log('波神启动')
})