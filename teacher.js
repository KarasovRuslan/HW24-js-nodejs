let Person = require('./person');

class Teacher extends Person {
    constructor(name, age, gender, interests) {     
        super(name, age, gender, interests);
        this.subject = 'Front-end Pro';
    }
    hello() {
        console.log(`Hello my name is ${this.name} I'm ${this.age} years old, and I interest ${this.interests}. I teach a ${this.subject} subject`);  
    }
}

module.exports = Teacher;