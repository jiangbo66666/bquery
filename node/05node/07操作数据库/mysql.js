const mysql = require('mysql')

const con = mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'root',
  database:'letao'
})

con.connect()

const str = 'select * from cart'

con.query(str,(err,res)=>{
  console.log(res)
})

con.end()