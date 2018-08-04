const mysql = require('mysql')

const conn = mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'root',
  database:'letao'
})

conn.connect()

//增加语句!!!!!
// let add = {
//   userId:1,
//   productId:0,
//   num:0,
//   size:'48'
// }

// const addstr = 'insert into cart set ?'

// conn.query(addstr,add,(err,res)=>{
//   console.log(res)
// })

// 删除语句
// const delstr = 'delete from cart where id =?'

// conn.query(delstr,22,(err,res)=>{
//   console.log(res)
// })

//改变语句
// let update = {
//   userId:1,
//   productId:0,
//   num:0,
//   size:'48'
// }

// const updatestr = 'update cart set ? where id =?'

// conn.query(updatestr,[update,20],(err,res)=>{
//   console.log(res)
// })

//查询语句
const searchstr = 'select * from cart'

conn.query(searchstr,(err,res)=>{
  console.log(res)
})
