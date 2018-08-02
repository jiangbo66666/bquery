({
  function (w) {
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

    //封装选择器函数
    function init(selector) {
      var lists = document.querySelectorAll(selector);
      [].push.apply(this, lists)
    }

    function bquery(selector) {
      return new bquery.fn.init(selector)
    }
    
    bquery.fn = bquery.prototype = {
      constructor: bquery,
      init: init,
      length: 0,
      each: function (callback) {
        each(this, callback)
      },
      
    }
    bquery.fn.init.prototype = bquery.prototype

    bquery.prototype.extent = bquery.extent = function(obj){
      for(var k in obj){
        this[k] = obj[k]
      }
    }

    window.bquery = window.b = bquery

    b.extent({

    })

    b.prototype.extent({
      
    })
  }
})(window)