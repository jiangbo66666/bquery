const express = require('express')

const path = require('path')

const app = express()

app.use(express.static('../04node'))

app.listen(3000,()=>{
  console.log('波神启动')
})