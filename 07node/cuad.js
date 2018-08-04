const mysql = require('mysql')

const con = mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'root',
  database:'letao'
})

con.connect()

// const str1 = 'select * from cart'

//增加数据库
// const p1={
//   userId : 2,
//   productId : 2,
//   num:2,
//   size:'46'
// }
// const str2 = 'insert into cart set?'

// con.query(str2,p1,(err,res)=>{
//   console.log(res)
// })

//删除数据库
// const str = 'delete from cart where id = ?'

// con.query(str,21,(err,res)=>{
//   console.log(res)
// })

//改变数据库
const p2 = {
  userId : 1,
  productId : 1,
  num:1,
  size:'46'
}

const str = 'update cart set ? where id = ?'

con.query(str,[p2,20],(err,res)=>{
  console.log(res)
})

