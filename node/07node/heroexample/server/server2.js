const express = require('express')

const mysql = require('mysql')

const cors = require('cors')

const querystring = require('querystring')

const bodyparser = require('body-parser')

const server = express()

//跨域中间件
server.use(cors())

server.use(bodyparser.urlencoded({extended:false}))
//支持传来的json格式数据
server.use(bodyparser.json())

const conn = mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'root',
  database:'heros'
})


server.get('/api/getalldata',(req,res)=>{
  const getallstr = 'select * from hero where isdel=?'
  conn.query(getallstr,0,(err,result)=>{
    if(err) return res.json({errcode:1,message:'读取出错',affectRows:0})
    res.json({errcode:0,message:result,affectRows:0})
  })
})

server.listen(3000,()=>{
  console.log('服务器开启')
})