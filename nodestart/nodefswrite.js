const fs = require('fs');
fs.writeFile('./files/2.txt','哈哈哈哈',(err)=>{
  if(err)return console.log(err)
  console.log("写入成功");
})