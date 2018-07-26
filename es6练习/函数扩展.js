const arr = [1,32,234,345,67];
add = (a,b,c,d,e) => console.log(a+b+c+d+e);
add(...arr);
const arr1 = [1,3,4];
add1 = (...args) => {
  console.log(args)
}
add1({a:1,b:2,c:3});