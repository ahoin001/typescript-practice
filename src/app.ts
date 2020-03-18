// * Class is blueprint to create simalar objects with different information

class Department {

    name: string;
    department: string;

    constructor(name: string, department: string) {

        this.name = name;
        this.department = department;

    }

    // * This is used to refer to data of instance of the class
    // description() {
    //     console.log(`${this.name} works in ${this.department} department`);
    // }

    // *When excecuted, the this in method should ALWAYS refer to an instance of Department class
    description(this: Department) {
        console.log(`${this.name} works in ${this.department} department`);
    }

}

let Tony = new Department('Tony', 'Treasury');
let Ryan = new Department('Ryan', 'Accounting');
let Bill = new Department('Bill', 'Human Resources');

// * this.name will be unuiqe for each instance
Tony.description()
Ryan.description()
Bill.description()

// * If copy is missing expected properties with expected types, will be undefined because 'this' will not work on anything 
// * that is not same 'type' as our class
const TonyCopy = { name: 'Tony2', department: 'Boss', description: Tony.description }

TonyCopy.description()
