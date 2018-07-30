// 数组的封装
const isArraylike = require('./02判断是否为数组')
function myeach(array,callback){
  if(isArraylike(array)){
    for (let i =0 ;i<array.length;i++){
      if (callback.call(array[i] , array[i] , i ) == false) break;
    }
  }
  return array
}

module.exports = myeach
myeach([2,14,4],(item , i)=>{
  console.log(item)
  console.log(i)
  return false;
})