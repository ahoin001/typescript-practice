"use strict";
class Department {
    constructor(department) {
        this.employees = [];
        this.department = department;
    }
    describe() {
        console.log(`${this.department} department`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
let treasury = new Department('Treasury');
let accounting = new Department('Accounting');
treasury.describe();
accounting.describe();
treasury.addEmployee('Ryan');
treasury.addEmployee('Ray');
treasury.printEmployeeInformation();
