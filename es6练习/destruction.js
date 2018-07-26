// 对象的解构
const obj = {
  name : '哈哈',
  age : 18 ,
  gender : '女'
}
const {name,age,gender} = obj
console.log(name ,age, gender)
//函数解构
const a = ({x,y}) => {
  console.log(x+y)
}
a({x:10,y:20});
// 扩展运算符 
const arr = [1,3,4,2];
const b = (a,b,c,d) => {
  console.log(a+b+c+d);
}
b(...arr);
//
const arr1 = [23,12,345];
const c = (...args) => {
  console.log(args)
}
c(...arr1)
//startsWith endsWith
const str2 = "aghskdkdjp";
console.log(str2.startsWith('a'))
console.log(str2.endsWith('p'))