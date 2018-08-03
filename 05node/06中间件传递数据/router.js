const express = require('express')

const router = express.Router()

//将请求挂载在router上
router.post('/',(req,res)=>{
  res.send(JSON.stringify(req.body))
})

//暴露router
module.exports = router