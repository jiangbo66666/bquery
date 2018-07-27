const fs = require('fs')
//读取文件夹的名字
fs.readdir(__dirname,(err,filesname)=>{
  console.log(filesname)
})