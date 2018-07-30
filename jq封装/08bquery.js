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

  //分装选择函数
  function init(selector) {
    [].push.apply(this, document.querySelectorAll(selector))
  }

  //给bquery上面挂载一个fn方法，使原型和fn指向同一片区域
  bquery.fn = bquery.prototype = {
    constructor: bquery,
    init: init,
    each:function(callback){
      each(this,callback)
      return this
    }
  }

  //让init继承bquery原型上面的属性，在以后每次的构造函数的过程中能够继承原型上面的属性
  bquery.fn.init.prototype = bquery.fn

  // 暴露b和bquery
  window.b = window.bquery = bquery

})()