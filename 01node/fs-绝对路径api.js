//引入fs模块
const fs = require('fs')
const path = require('path')
//读取文件
const abspath = path.join(__dirname,'files/2.txt');
fs.readFile(abspath,'utf-8',(err,data)=>{
  console.log(data);
})
// 打印文件所在的地方绝对路径
// console.log(abspath)
//打印当前文件的绝对路径
// console.log(__filename)
//后端代码尽量转换为绝对路径
console.log(path.sep)
console.log(path.join(__dirname,'..','./files/2.txt'))