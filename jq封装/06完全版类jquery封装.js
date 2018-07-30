(function (window) {
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

  function bquery(selector) {
    return new bquery.fn.init(selector)
  }

  function init(selector) {
    list = document.querySelectorAll(selector);
    [].push.apply(this, list)
    console.log(this)
    return this
  }

  bquery.fn = bquery.prototype = {
    init: init,
    each:function(callback){
      each(this,callback)
    }
  }

  bquery.fn.init.prototype = bquery.fn

  window.b = window.bquery = bquery

})(window)