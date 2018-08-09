const express = require('express')

const router = express.Router()


router.get('/',(req,res)=>{
  res.render("temp.ejs",{
    name:'蒋波',
    age:12
  })
})
module.exports = router