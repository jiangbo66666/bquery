(function () {
  //封装判断是否为数组的函数
  function isArraylike(array) {
    var length = array && array.length
    return typeof (length == 'number') && length > 0
  }
  
  //封装each方法
  function each(array, callback) {
    if (isArraylike(array)) {
      for (let i = 0; i < array.length; i++) {
        if (callback.call(array[i], array[i], i) == false) break;
      }
    }
    return array
  }

  //消除new符号  借用工厂函数来构造
  function bquery(selector) {
    return new bquery.fn.init(selector)
  }
  var arr = []
  //分装选择函数
  function init(selector) {

    arr.push.apply(this, document.querySelectorAll(selector))
  }

  //给bquery上面挂载一个fn方法，使原型和fn指向同一片区域
  bquery.fn = bquery.prototype = {
    constructor: bquery,
    length:0,
    init: init,
    each:function(callback){
      each(this,callback)
      return this
    },
    toArray:function(){
      //巧用slice  slice 可以返回数组，我们通过一个空数组来调用slice的方法，然后将指向改成this，即调用这个的方法者，return出这个数组
      return arr.slice.call( this )
    },
    get:function( index ){
      if(!index){
        return this.toArray()
      }else{
        if( index>=0 ){
          return this[index]
        }else if(index<0){
          return this[this.length+index]
        }
        return this
      }
    }
  }

  //让init继承bquery原型上面的属性，在以后每次的构造函数的过程中能够继承原型上面的属性
  bquery.fn.init.prototype = bquery.fn


  bquery.extend = bquery.prototype.extend = function(obj){
    for(var key in obj){
      this[key] = obj[key]
    }
  }
  // 暴露b和bquery
  window.b = window.bquery = bquery

  b.extend({
    //此处添加想要的方法到原型上面
  })

})()