"use strict";
class Department {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    description() {
        console.log(`${this.name} works in ${this.department} department`);
    }
}
let Tony = new Department('Tony', 'Treasury');
let Ryan = new Department('Ryan', 'Accounting');
let Bill = new Department('Bill', 'Human Resources');
Tony.description();
Ryan.description();
Bill.description();
const TonyCopy = { name: 'Tony2', department: 'Boss', description: Tony.description };
TonyCopy.description();
