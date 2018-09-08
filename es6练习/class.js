class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  say() {
    return this.name
  }
  static info(){
    return 'bobboboob'
  }
}

class Student extends Person{
  constructor(name,age,nianji){
    super(name,age)
    this.nianji = nianji
  }
}



const student = new Student('bobo', 18,3)

console.log(student)
console.log(student.say())
console.log(Student.info())