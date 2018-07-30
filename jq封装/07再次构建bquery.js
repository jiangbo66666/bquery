(function(window){
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

  // 整体架构s
  function init(selector){
    const list = document.querySelectorAll(selector);

    [].push.apply(this,list)
  }

  function bquery(selector){
    return new bquery.fn.init(selector)
  }

  bquery.fn = bquery.prototype = {
    constructor:bquery,
    init:init,
    each:function(callback){
      each(this,callback)
    }
  }
  //为了能让函数选择器选择只够还能保持有bquery的方法
  bquery.fn.init.prototype = bquery.fn

  window.bquery = window.b = bquery



})(window)