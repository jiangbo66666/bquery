/*******
    author by 帕尼尼  
    set time: 2018/3/29 16:27
    copy @1.00

*******/
(function( w ) {

  // jQuery工厂
  function jQuery( selector ) {
      return new App( selector );
  };
  // 这是真正的构造函数，同时把构造函数放在了原型中
  function App( selector ) {

      // null、undefined、NaN、0、false、''
      if ( !selector ) {
          return this;
      }

      // function
      if ( $.isFunction( selector ) ) {

          // 打包给ready静态方法处理
          $.ready( selector );
      }

      // string ==> ( html || selector )
      else if( $.isString( selector ) ) {

          // 为了用户友好体验，先去掉首尾空白字符
          selector = $.trim( selector );

          // html
          if( $.isHTML( selector ) ) {

              // 利用一个临时的div来创建DOM，
              // 然后把创建好的DOM依次push给实例。
              var tempDiv = document.createElement( 'div' );
              tempDiv.innerHTML = selector;
              [].push.apply( this, tempDiv.childNodes );
          }

          // selector
          else {

              try {
                  [].push.apply( this, document.querySelectorAll( selector ) );
              }catch(e) {
                  // 如果报错了，那么手动补一个length属性，代表没有获取到任何元素
                  this.length = 0;
              }
          }
      }

      // array || likeArray
      else if( $.isLikeArray( selector ) ) {
          [].push.apply( this, [].slice.call( selector ) );
      }

      // 其它
      else {
          this[0] = selector;
          this.length = 1;
      }
  };

  // 替换原型 + 原型简称
  // 替换App的原型为工厂的原型，这样外界就可以通过工厂给实例扩展方法
  App.prototype = jQuery.prototype = {
      constructor: jQuery,

      // 获取版本号
      version: "1.0.0",

      // 代表所有实例默认的选择器，也代表实例是一个jQuery类型的对象
      selector: '',

      // 代表所有实例默认的长度
      length: 0
  };

  // 给jQuery和原型分别添加extend方法
  jQuery.extend = jQuery.prototype.extend = function( obj ) {
      for ( var key in obj ) {
          this[ key ] = obj[ key ];
      }
  };
 
  // 暴露工厂和工厂的简称
  
  w.jQuery = w.$ = jQuery;

  /**
          jQuery    
  ***/

  // 给jQuery添加一些静态方法(兼容ie8)
  $.extend({

      //获取样式
      getStyle: function(dom,style){
          if(window.getComputedStyle){
              return window.getComputedStyle(dom)[style];
          }else{//ie8
              return dom.currentStyle[style];
          }
      },

      // 去掉首尾空白字符
      trim: function( str ) {
          return str.trim ? str.trim() : str.replace( /^\s+|\s+$/g, '');
      },
  });

  // 给jQuery添加一些静态方法(is)
  $.extend({

      // 判断是不是html片段
      isHTML: function( html ) {

          // <.>
          if( html.charAt(0) === '<' &&
                  html.charAt( html.length - 1 ) === '>' &&
                  html.length >= 3 ) {
              return true;
          }

          return false;
      },

      // 判断是不是函数
      isFunction: function( fn ) {

          return typeof fn === 'function';
      },

      // 判断是不是window
      isWindow: function( w ) {

          return  w.window === w;
      },

      // 判断是不是对象
      isObject: function( obj ) {

          // 如果是object或function，那就是对象
          if ( typeof obj === 'object' || typeof obj === 'function' ) {
              return true;
          }

          return false;
      },

      // 判断是不是字符串
      isString: function( str ) {

          return typeof str === 'string';
      },


      // 判断是不是真数组或伪数组
      isLikeArray: function( arr ) {

          // Function、window、!Object
          if ( $.isFunction( arr ) || $.isWindow( arr ) || !$.isObject( arr ) ) {
              return false;
          }

          // 判断是不是真数组
          if ( ({}).toString.call( arr ) === '[object Array]' ) {
              return true;
          }

          // 判断是不是伪数组
          if ( 'length' in arr && ( arr.length === 0 || arr.length - 1 in arr ) ) {
              return true;
          }

          return false;
      }
  });

  // 给jQuery添加一些静态方法
  $.extend({

      ready: function( fn ) {

          // 先统一判断DOMContentloaded有没有触发，
          // 通过document.readyState === 'complete'判断
          // 如果为true，fn可以直接调用。

          // 如果为false，那么判断支不支持addEventListener，
          // 如果支持，绑定DOMContentLoaded事件

          // 如果不支持，使用attchEvent绑定onreadystatechang事件,
          // 注意，需要在里面判断document.readyState === 'complete'才执行fn。
          // 防止fn多次执行。

          // DOM已经构造完毕，fn可以直接执行
          if ( document.readyState === 'complete' ) {
              fn();
          }

          // 如果DOM没有构造完毕，那么判断addEventListener是否兼容
          else if( document.addEventListener ) {
              document.addEventListener( 'DOMContentLoaded', fn );
          }

          // 如果不兼容addEventListener，那么采取attachEvent的方式，
          // 同时事件变为了onreadystatechange，为了防止这个事件多次触发造成的fn多次执行，
          // 所以需要一个包装函数来进行过滤。
          else {
              document.attachEvent( 'onreadystatechange', function() {
                  if( document.readyState === 'complete' ) {
                      fn();
                  }
              } );
          }
      },

      //遍历每一个元素
      each: function(obj,fn){
          if($.isLikeArray(obj)){
              for(let i=0;i<obj.length;i++){
                  if(fn.call(obj[i],i,obj[i]) === false){
                      break;
                  }
              }
          }else{
              for(let key in obj){
                  if(fn.call(obj[key],key,obj[key]) === false){
                      break;
                  }
              }
          }
          return obj;
      },

      //遍历每一个元素,返回新数组
      map: function(obj,fn){
          let arr = [];
          if($.isLikeArray(obj)){
              for(let i=0;i<obj.length;i++){
                  arr.push(fn.call(obj[i],obj[i],i));
              }
          }else{
              for(let key in obj){
                  arr.push(fn.call(obj[key],obj[key],key));
              }
          }
          return arr;
      }
  });

  // 给jQuery添加事件方法
  $.extend({

      //添加一个事件
      addEvent: function(dom,type,fn){
          if(dom.addEventListener)
              dom.addEventListener(type,fn);
          else
              dom.attachEvent('on'+type,fn);
      },

      //删除一个事件
      removeEvent: function(dom,type,fn){
          if(dom.removeEventListener)
              dom.removeEventListener(type,fn);
          else
              dom.detachEvent('on'+type, fn);
      } 
  });

   // 给jQuery添加Ajax方法
   $.extend({
      ajax: function(data){
          //第一步：创建xhr对象
          var xhr = null;
          if(window.XMLHttpRequest)
              xhr = new XMLHttpRequest();
          else
              xhr = new ActiveXObject("Microsoft.XMLHTTP");
          //第二步：准备发送前的一些配置参数
          xhr.open(data.type,data.url,true);
          //第三步：执行发送的动作
          if(data.type == 'get'){
                  xhr.send(null);
          }else if(data.type == 'post'){
                  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                  xhr.send(data.data);
          }
          //第四步：指定回调函数
          xhr.onreadystatechange = function(){
              if(xhr.readyState == 4 ){
                  if(xhr.status == 200)//执行成功
                      data.success(xhr.responseText);
                  else
                      data.failure();
              }
          }
      }
   });


  /**
          jQuery实例    
  ***/

  // 给jQuery实例添加元素操作方法
  $.prototype.extend({
      // 把实例(伪数组)转换为数组返回 
      toArray: function() {
          return [].slice.call( this );
      },

      // 获取指定下标的元素，获取的是原生DOM
      get: function( i ) {
          /*
          * 1、如果传入null或undefined，那么转换为数组返回
          * 2、如果传入的是正数，按照指定的下标获取元素返回
          * 3、如果传入的是负数，按照下标倒着( this.length + 负数 )获取元素返回
          * */
          // null、undeinfed
          if ( i == null ) {
              return this.toArray();
          }

          // 其他
          if ( i >= 0 ) {
              return this[ i ];
          }else {
              return this[ this.length + i ];
          }
      },

      // 截取实例的部分元素，构成一个新的jQuery实例返回
      slice: function() {
          /*
          * 1、通过数组的slice截取部分元素(slice返回的是数组)，
          * 2、把截取到的元素转换为实例对象返回。
          * */

          // 因为slice的参数会有变化，所以需要是arguments，
          // 我们要把arguments中的每一项传给数组的slice，所以需要借用apply平铺传递过去，
          // 最后把slice返回数组，通过jQuery工厂保证成实例返回。
          return $( [].slice.apply( this, arguments ) );
      },

      // 获取指定下标的元素，获取的是jQuery类型的实例对象。
      eq: function( i ) {
          /*
           * 1、如果传入null或undefined，返回一个新实例，
           * 2、如果传入的是正数，按照指定的下标获取元素，再包装成新实例返回
           * 3、如果传入的是负数，按照下标倒着( this.length + 负数 )获取元素，再包装成新实例返回
           * */

          // null、undefined得到新实例
         return i == null? $() : $( this.get( i ) );
      },

      // 获取实例中的第一个元素，是jQuery类型的实例对象。
      first: function() {
          return this.eq( 0 );
      },

      // 获取实例中的最后一个元素，是jQuery类型的实例对象。
      last: function() {
          return this.eq( -1 );
      },

      //清空所有元素的内容
      empty: function(){
          this.each(function(){
              this.innerHTML = "";
          });
          return this;
      },

      //删除所有元素
      remove: function(){
          this.each(function(){
              this.parentNode.removeChild(this);
          });
          return this;
      },

      //获取第一个元素的内容；设置所有元素的内容
      html: function(ctx){
          //获取第一个元素的内容
          if(arguments.length === 0){
              return this[0].innerHTML;   
          }
          //设置所有元素的内容
          this.each(function(){
              this.innerHTML = ctx;
          });
          return this;
      },

      //获取所有元素的文本内容；设置所有元素的文本内容
      text: function(ctx){
          //获取所有元素的文本内容
          if(!ctx){
              return this[0].innerText;   
          }
          //设置所有元素的文本内容
          this.each(function(){
              this.innerText = ctx;
          });
          return this;
      },

      //遍历实例中的每一个元素
      each: function(fn){
          for(let i=0;i<this.length;i++){
              if(fn.call(this[i],i,this[i]) === false){
                  break;
              }
          }
          return this;
      },

      //遍历每一个元素,返回新数组
      map: function(fn) {
          let arr = [];
          for(let i=0;i<this.length;i++){
              arr.push(fn.call(this[i],this[i],i));
          }
          return arr;
      },  

      // 原型上的方法供实例调用，
      // 即实例.push，在调用过程中，push内的this就指向了实例，
      // 所以这里不需要通过call和apply改变this指向即可借用数组的方法
      push: [].push,
      sort: [].sort,
      splice: [].splice
  });

  // 给jQuery实例添加Dom方法
  $.prototype.extend({

      __operDom: function(selector,fn){
          let self = this;
          selector.each(function(){
              let dom = this;
              self.each(function(key){
                  if(key !== 0)
                      dom = dom.cloneNode(true);
                  fn.call(this,dom);
              });
          });
      },

      //把B加到A内的最后
      append: function(selector){
          this.__operDom($(selector),function(dom){
              this.appendChild(dom);
          });
          return this;
      },

      //把B加到A内的最前
      prepend: function(selector){
          this.__operDom($(selector),function(dom){
              this.insertBefore(dom,this.firstChild);
          });
          return this;
      },

      //把A加到B内的最后
      appendTo: function(selector){
          this.__operDom.call($(selector),this,function(dom){
              this.appendChild(dom);
          });
          return this;
      },

      //把A加到B内的最前
      prependTo: function(selector){
          this.__operDom.call($(selector),this,function(dom){
              this.insertBefore(dom,this.firstChild);
          });
          return this;
      },

      //把B加到A外的前面
      before: function(selector){
          this.__operDom($(selector),function(dom){
              this.parentNode.insertBefore(dom,this);
          });
          return this;
      },

      //把B加到A外的后面
      after: function(selector){
          this.__operDom($(selector),function(dom){
              this.parentNode.insertBefore(dom,this.nextSibling);
          });
          return this;
      },

      __append: function(selector){
          selector = $(selector);
          let self = this;
          selector.each(function(){
              let dom = this;
              self.each(function(key){
                  if(key !== 0)
                      dom = dom.cloneNode(true);
                  this.appendChild(dom);
              });
          });

      },

      __prepend: function(selector){
          selector = $(selector);
          let self = this;
          selector.each(function(){
              let dom = this;
              self.each(function(key){
                  if(key !== 0)
                      dom = dom.cloneNode(true);
                  this.insertBefore(dom,this.firstChild);
              });
          });
      },

      __appendTo: function(selector){
         selector = $(selector);
         let self = this;
         this.each(function(){
              let dom = this;
              selector.each(function(key){
                  if(key !== 0)
                      dom = dom.cloneNode(true);
                  this.appendChild(dom);
              });
         });
      },

      __prependTo: function(selector){
          selector = $(selector);
          this.each(function(){
               let dom = this;
               selector.each(function(key){
                   if(key !== 0)
                       dom = dom.cloneNode(true);
                   this.insertBefore(dom,this.firstChild);
               });
          });
      },

      __before: function(selector){
          selector = $(selector); //要插入的内容
          let self = this;
          selector.each(function(){
              let dom = this;
              self.each(function(key){
                  if(key !== 0)
                      dom = dom.cloneNode(true);
                  this.parentNode.insertBefore(dom,this);
              });
          });
      },

      __after: function(selector){
          selector = $(selector); //要插入的内容
          let self = this;
          selector.each(function(){
              let dom = this;
              self.each(function(key){
                  if(key !== 0)
                      dom = dom.cloneNode(true);
                  this.parentNode.insertBefore(dom,this.nextSibling);
              });
          });
      }
  });

  // 给jQuery实例添加Class方法
  $.prototype.extend({

      __add: function(className){
          this.each(function(){
              this.className += ' ' + className; 
          });
      },

      __remove: function(className){
          this.each(function(){
              this.className = (' ' + this.className + ' ')
              .replace(' ' + className + ' ',' ');
          });
      },

      //操作class
      __operClass: function(className,action){
          if($.isString(className))
              className = $.trim(className).split(" ");
          let self;
          this.each(function(){
              self = this;
              $.each(className,function(){
                  self.classList[action](this);
              });
          });
          return this;
      },

      //给所有元素添加新的class
      addClass: function(className){
          if(arguments.length === 0)
              return this;
          return this.__operClass(className,"add");
      },

      //删除所有元素指定的class
      removeClass: function(className){
          if(arguments.length === 0){
              this.each(function(){
                  this.className = "";
              });
              return this;
          }
          return this.__operClass(className,"remove");
      },

      //有则删除，没有则添加
      toggleClass: function(className){
          if(arguments.length === 0)
              return this;
          return this.__operClass(className,"toggle");
      }, 

      //判断元素有没有指定的class(只要有一个)
      hasClass: function(className){
          let flag = false;
          if(arguments.length === 0)
              return flag;
          this.each(function(){
              if(this.classList.contains(className)){
                  flag = true;
                  return;
              }
          });
          return flag;
      }
  });

  // 给jQuery实例添加属性方法
  $.prototype.extend({
      //获取或者设置属性节点
      attr: function(attrName,attrVal){
          if(!$.isString(attrName) && !$.isObject(attrName))
              return this;
          if($.isString(attrName)){
              if(arguments.length === 1)
                  return this[0].getAttribute(attrName);
              else{
                  this.each(function(){
                      this.setAttribute(attrName, attrVal);
                  });
                  return this;
              }
          }else{
              for(attr in attrName){
                  this.each(function(){
                      this.setAttribute(attr, attrName[attr]);
                  });
              }
              return this;
          }
      },

      //获取或者设置属性
      prop: function(propName,propVal){
          if(!$.isString(propName) && !$.isObject(propName))
              return this;
          if($.isString(propName)){
              if(arguments.length === 1)
                  return this[0][propName];
              else{
                  this.each(function(){
                      this[propName] = propVal;
                  });
                  return this;
              }
          }else{
              for(prop in propName){
                  this.each(function(){
                      this[prop] = propName[prop];
                  });
              }
              return this;
          }
      },

      //获取或者设置value
      val: function(val){
          if(arguments.length === 0)
              return this[0].value;
          else {
              this.each(function(){
                  this.value = val;
              });
              return this;
          }
      },

      //获取或者设置样式
      css: function(cssName,cssVal){
          if(!$.isString(cssName) && !$.isObject(cssName))
              return this;
          if($.isString(cssName)){
              if(arguments.length === 1){
                  return $.getStyle(this[0],cssName);
              }
              else{
                  this.each(function(){
                      this.style[cssName] = cssVal;
                  });
                  return this;
              }
          }else{
              for(css in cssName){
                  this.each(function(){
                      this.style[css] = attrName[css];
                  });
              }
              return this;
          }
      },

      //获取或者设置自定义属性
      data: function(dataName,dataVal){
          if(arguments.length === 0)
              return this[0].dataset;
          else if(arguments.length === 1){
              return this[0].dataset[dataName];
          }else{
              this[0].dataset[dataName] = dataVal;
              return this;
          }
      }
  });

  // 给jQuery实例添加事件方法
  $.prototype.extend({

      //添加一个事件
      on: function(type,fn){
          this.each(function(){
              $.addEvent(this,type,fn);
          });
          return this;
      },

      //删除一个事件
      off: function(type,fn){
          this.each(function(){
              $.removeEvent(this,type,fn);
          });
          return this;
      }
  });

}( window ));