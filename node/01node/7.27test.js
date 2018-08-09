//fs常用方法
const fs = require('fs')
fs.readFile(path,'utf-8',(err,datastr)=>{}) //读取文件
fs.writeFile(path,str,'utf8',(err)=>{}) //写入文件
fs.appendFile(path,str,'utf8',(err,data)=>{}) //添加文件
fs.readdir(path,(err,filesname)=>{}) //读取文件列表
fs.stat(path,(err,stats)=>{}) //读取文件详情
//path常用方法
const path = require('path')
path.join(__dirname,'./files/成绩.txt')//拼接路径
path.basename(path,'html') //返回文件名，
console.log(path.extname(path.join((__dirname,'./files/成绩.txt'))))//返回扩展名
path.dirname(path) //返回目录名