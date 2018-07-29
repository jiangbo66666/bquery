const fs = require('fs');
const path = require('path')
console.log(__dirname);
const abspath = path.join(__dirname,'./files/成绩.txt')
fs.stat(abspath,(err,stats)=>{
  //查询是否为文件类型
  console.log(stats.isFile());
  //查询文件字节大小
  console.log(stats.size);
})