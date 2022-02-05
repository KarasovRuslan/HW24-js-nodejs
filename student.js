let Person = require('./person');

class Students extends Person {
    constructor(name, age, gender, interests) {
        super(name, age, gender, interests);
    }
    hello() {
        super.hello(this.name, this.age, this.interests);          
    }
}

module.exports = Students;