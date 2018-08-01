const express = require('express')

const path = require('path')

const app = express()

app.get('/index',(req,res)=>{
  res.sendFile(path.join(__dirname,'./view/index.html'))
})

app.get('/about',(req,res)=>{
  res.sendFile(path.join(__dirname,'./view/about.html'))
})

app.listen(3000,()=>{
  console.log('express波神一代,启动')
})