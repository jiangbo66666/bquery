const fs = require('fs')
const path = require('path')
// console.log(__filename)
let str = ''
//读取未修改的数据
const abspath = path.join(__dirname,'./files/成绩.txt')
fs.readFile(abspath,'utf-8',(err,datastr)=>{
  // console.log(datastr);
  //通过空格分割字符串
  let arr =  datastr.split(' ');
  // console.log(arr);
  arr.forEach((item,i)=>{
    if(item.length>0){
      //判断是否有长度，继续分割字符串，再用：进行拼接
      str +=item.split('=').join(':')+'\n'
    }
  })
  // console.log(str)
  //写入数据
  fs.writeFile('./files/成绩-ok.txt',str.trim(),(err)=>{
    if(err)return console.log('失败')
    console.log('成功')
  })
})