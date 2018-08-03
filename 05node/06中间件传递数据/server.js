const express = require('express')

const querystring = require('querystring')

const bodyParser = require('body-parser')

const router = express.Router()

const fs = require('fs')

const server = express()

// 注册中间件
server.use(fileswrite)

// server.use(formpares)
server.use(bodyParser.urlencoded({extended : false}))

//引入改在router上的请求
const router = require('./router.js')

// 注册router中间件
server.use(router)

server.listen(3000,()=>{
  console.log('波神 ，启动')
})

//创建记录事件的中间件
function fileswrite(req,res,next){
  const str = `生成时间${ new Date() } 请求方式 ${ req.method } 请求地址 ${ req.url }\r\n`
  fs.appendFile('./date.txt',str,(err)=>{
    if(err) return console.log('文件写入失败')
    console.log('文件写入成功')
  })
  next()
}


//非插件方式实现 创建传输ajax数据中间件
// function formpares(req,res,next){
//   let datastr = ''
//   req.on('data',(chunk)=>{
//     datastr+=chunk;
//   })
//   req.on('end',()=>{
//     const result = querystring.parse(datastr)
//     req.body = result
//     next()
//   })
// }