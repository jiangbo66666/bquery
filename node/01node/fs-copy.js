// 复制文件内部的文字
const fs = require('fs');
var str = ''
fs.readFile('./files/2.txt','utf-8',(err,data)=>{
  if(err)return console.log("失败")
  str += data;
  fs.writeFile('./files/2copy.txt',str,'utf8',(err)=>{
    if(err)return console.log(err)
    console.log("复制成功")
  })
})
