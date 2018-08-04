(function (window){
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



  function init(selector){
    const list = document.querySelectorAll(selector);
    [].push.apply(this,list)
  }

  function bquery(selector){
    return new bquery.fn.init(selector);
  }

  bquery.fn = bquery.prototype = {
    init:init,
    constructor:bquery,
    length:0,
  }

  bquery.fn.extend = bquery.extend = function(obj){
    for (var key in obj){
      this[key] = obj[key]
    }
  }

  bquery.fn.init.prototype = bquery.fn

  window.b = window.bquery = bquery

  b.extend({
    each:function(callback){
      each(this,callback)
    }
  })

  b.prototype.extend({

  })
})(window)