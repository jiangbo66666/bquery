const express = require('express')

const router = express.Router()

router.get('/',(req,res)=>{
  res.render('temp.ejs',{
    a:10,
    b:100
  })
})

module.exports = router