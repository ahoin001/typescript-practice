// ! Interface Only exists in typescript
// ? Describes the object of a class to be it's own type
// ? Interfaces can be impleted into a class , but custom types can not 

interface Greetable {

    name: string;
    greet(phrase: string): void

}
// ? Difference between Abstract and Interface , interface 

// * Implementing greetable forces class to have it's structure (properties and methods) defined
class Person implements Greetable {

    // * Must be implemented because of interface
    name: string;

    constructor(name: string, private age: number) {

        this.name = name;

    }

    // * Must be implemented because of interface
    greet(phrase: string) {
        console.log(phrase + ` ${this.name} and I am ${this.age}`)
    }

}

let user1: Greetable;
// Will be error unless it gets the expected properties from interface
user1 = {

    name: 'Alex',
    greet(phrase: string) {
        console.log(phrase + '' + this.name)
    }

}


user1 = new Person('Alex',24);
console.log(user1)
user1.greet('Hi there I am')