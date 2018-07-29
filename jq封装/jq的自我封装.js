// 函数的自调用防止外部访问内部的变量  闭包
(function(window){
  
  function jquery(selector){
    return new App(selector);
  }

  function App(selector){
    if(!selector){
      return this;
    }
    if(selector instanceof String){
      console.log(selector)
    }
  }
  window.jquery=jquery
})(window)