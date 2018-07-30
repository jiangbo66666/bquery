//判断是否伪数组
function isArraylike(array){
  var length = array && array.length
  return typeof(length=='number') && length>0
}
//封装each方法
function each(array,callback){
  if(isArraylike(array)){
    for (let i =0 ;i<array.length;i++){
      if (callback.call(array[i] , array[i] , i ) == false) break;
    }
  }
  return array
}
//将each方法封装进选择器中
function $(selector){
  var arr = {length:0};

  [].push.apply(arr,document.querySelectorAll(selector))

  arr.each = function (callback){
    each(arr,callback)
  }
  return arr;
}