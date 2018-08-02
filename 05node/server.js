const express = require('express')

const path = require('path')

const ejs = require('ejs')

const server = express()

server.set('view engine','ejs')

server.set('views','01动态')

server.get('/',(req,res)=>{
  res.render('index.ejs',{
    a:1,
    b:2
  })
})

server.listen(3000,()=>{
  console.log('1212')
})
