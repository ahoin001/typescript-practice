"use strict";
class Person {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    greet(phrase) {
        console.log(phrase + ` ${this.name} and I am ${this.age}`);
    }
}
let user1;
user1 = {
    name: 'Alex',
    greet(phrase) {
        console.log(phrase + '' + this.name);
    }
};
user1 = new Person('Alex', 24);
console.log(user1);
user1.greet('Hi there I am');
