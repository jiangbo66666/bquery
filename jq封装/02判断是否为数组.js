//判断数组函数
function isArraylike(array){
  var length = array && array.length
  return typeof(length=='number') && length>0
}
module.exports = isArraylike;