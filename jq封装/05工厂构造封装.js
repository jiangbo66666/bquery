(function (w) {
  //判断是否伪数组
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
  // 运用工厂函数方式来创建函数
  function $(selector) {
    return new $.fn.App(selector)
  }

  // 创建一个构造函数
  function App(selector) {
    [].push.apply(this, document.querySelectorAll(selector))
    return this
  }

  $.fn = $.prototype = {
    App:App,
    each: function (callback) {
      each(this, callback)
    }
  }
  $.fn.App.prototype = $.fn 
  console.log($.fn.App.prototype === $.prototype )

  window.$ = $ 
})(window)