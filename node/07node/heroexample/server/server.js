const express = require('express')

const bodyParser = require('body-parser')

const querystring = require('querystring')

const compression = require('compression')

const cors = require('cors')

const moment = require('moment')

const mysql = require('mysql')

const conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'heros'
})

const server = express()

server.use(compression())

server.use(express.static('../../heroexample'))

server.use(cors())

server.use(bodyParser.urlencoded({
  extended: false
}))

server.use(bodyParser.json())

//查询所有英雄信息的api
server.get('/api/gethero', (req, res) => {
  const getherostr = `select * from hero where isdel=?`
  conn.query(getherostr, 0, (err, result) => {
    // res.json(result)
    if (err) return res.json({
      err_code: 1,
      message: '查询失败',
      effectRows: 0
    })
    res.json({
      err_code: 0,
      message: result,
      effectRows: 0
    })
  })
})

//更新英雄信息api
server.post('/api/updatehero', (req, res) => {
 
  const updatestr = 'update hero set ? where id=?';
  console.log(req.body)
  conn.query(updatestr,[req.body,req.body.id],(err,result)=>{
    // console.log(err)
    if(err) return res.json({
      err_code: 1,
      message: '更新失败',
      effectRows: 0
    })
    if(result.affectedRows!==1) return res.json({
      err_code: 1,
      message: '更新出错',
      effectRows: 0
    })
    res.json({
      err_code: 0,
      message: '更新成功',
      effectRows: 0
    })
  })
})
//删除英雄信息
server.get('/api/delhero', (req, res) => {
  const id = req.query.id
  const updatestr = 'update hero set isdel=1 where id=?';
  conn.query(updatestr,id,(err,result)=>{
    // console.log(err)
    if(err) return res.json({
      err_code: 1,
      message: '删除失败',
      effectRows: 0
    })
    if(result.affectedRows!==1) return res.json({
      err_code: 1,
      message: '删除出错',
      effectRows: 0
    })
    res.json({
      err_code: 0,
      message: '删除成功',
      effectRows: 0
    })
  })
})
//新增英雄
server.post('/api/addhero',(req,res)=>{
  const addstr = 'insert into hero set ?'
  req.body.ctime = moment().format('MMMM-MM-DD, HH:mm:ss')
  console.log(req.body)
  conn.query(addstr,req.body,(err,result)=>{
    if(err) return res.json({
      err_code: 1,
      message: '新增失败',
      effectRows: 0
    })
    if(result.affectedRows!==1) return res.json({
      err_code: 1,
      message: '新增出错',
      effectRows: 0
    })
    res.json({
      err_code: 0,
      message: '新增成功',
      effectRows: 0
    })
  })
})
//获取单个英雄信息
server.get('/api/getone',(req,res)=>{
  const id = req.query.id
  // console.log(id)
  const oneherostr = `select * from hero where id=${id}`
  // console.log(oneherostr)
  conn.query(oneherostr,(err,result)=>{
    if(err) return res.json({
      err_code: 1,
      message: '读取失败',
      effectRows: 0
    })
    res.json({
      err_code: 0,
      message: result,
      effectRows: 1
    })
  })

})

server.listen(3000, () => {
  console.log('波神启动')
})