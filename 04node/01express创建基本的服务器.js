const express = require('express')

const app = express()

app.get('/',(req,res)=>{
  res.send('就爱看十大')
})

app.get('/index.html',(req,res)=>{
  res.send('这里是首页')
})

app.get('/about.html',(req,res)=>{
  res.send('这里是about页面')
})

app.post('/postinfo',(req,res)=>{
  res.send('这是post请求')
})

app.listen(4000,()=>{
  console.log('垃圾服务器启动。')
})