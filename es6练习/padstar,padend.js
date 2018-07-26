const dt = new Date();
// console.log(dt);
const y = dt.getFullYear()
const mo = (dt.getMonth()+1).toString().padStart(2,'0')
const d = dt.getDate().toString().padStart(2,'0')
const h = dt.getHours().toString().padStart(2,'0')
const mi = dt.getMinutes().toString().padStart(2,'0')
const se = dt.getSeconds().toString().padStart(2,'0')
let str = `${ y }-${ mo }-${ d } ${ h }:${ mi }:${ se }`
console.log(str);
