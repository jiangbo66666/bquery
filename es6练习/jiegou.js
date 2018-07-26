const person = {
  name :'jiangbo',
  age : 18,
  gender : '男'
}
const {name:name123,gender} = person
console.log(name123);
const student = {
  level : 3,
  name : '哈哈',
  age : 12 
}
let {level:denji , name ,age} = student
console.log(denji ,name, age )

const str = 'jjajajajajjajajajajjakkkk'
console.log(str.startsWith('j'));
console.log(str.endsWith('k'));