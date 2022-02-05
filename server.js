const Person = require('./person');
const Students = require('./student');
const Teacher = require('./teacher');

let person = new Person();
let student = new Students('Ruslan', 27, 'Male', 'Front-end');
let teacher = new Teacher('Oleg', 34, 'Male', 'IT/Front-end dev');
console.log(student);
console.log(teacher);

teacher.hello(teacher.name, teacher.age, teacher.subject);
student.hello(student.name, student.age, student.interests);