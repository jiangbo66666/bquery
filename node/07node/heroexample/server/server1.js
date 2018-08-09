const express = require('express')

const mysql = require('mysql')

const querystring = require('querystring')

const bodyparser = require('body-parser')
//跨域中间价
const cors = require('cors')

const server = express()

// server.use(bodyparser())
//注册获取表单数据中间件
server.use(bodyparser.urlencoded({extended:false}))
//识别json数据形式
server.use(bodyparser.json())

server.use(cors())

const conn = mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'root',
  database:'heros'
})



server.get('/api/getall',(req,res)=>{
  const getallstr = 'select * from hero where isdel = ?'
  conn.query(getallstr,0,(err,results)=>{
    // console.log(results)
    if(err) return res.json({err_code:1,message:'查询失败',affectRows:0})
    res.json({err_code:0,message:results,affectRows:0})
  })
})

server.listen(3000,()=>{
  console.log('服务器启动')
})