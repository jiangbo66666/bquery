// 函数的自调用防止外部访问内部的变量  闭包
(function (window) {

  function jquery(selector) {
    return new jquery.fn.init(selector);
  }

  jquery.fn = jquery.prototype = {
    constructor: jquery,
    init: function (selector) {
      if (!selector) {
        return this;
      }
      if (typeof(selector)==String) {
        var lists = document.querySelectorAll(selector);
        [].push.apply(this,lists)
      }
    }
  }
  window.jquery = jquery
})(window)