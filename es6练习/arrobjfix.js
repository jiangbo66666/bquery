let arr1 = [32,345,13];
let arr2 = [87,123,46];
let arr3 = [...arr1,...arr2];
console.log(arr3);
//扩展运算符
let arr = [2,1,4,1];
let a = (...obj) => { //此处是rest,合并操作。
  console.log(obj)
}
a(...arr);//此处是解构运算