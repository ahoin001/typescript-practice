"use strict";
class Department {
    constructor(id, department) {
        this.id = id;
        this.department = department;
        this.employees = [];
    }
    describe() {
        console.log(`${this.id} : The ${this.department} department`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(`${this.employees.length} employees in ${this.department} department`);
        console.log(this.employees);
    }
}
let treasury = new Department('D1', 'Treasury');
let accounting = new Department('D2', 'Accounting');
treasury.describe();
accounting.describe();
treasury.addEmployee('Ryan');
treasury.addEmployee('Ray');
treasury.printEmployeeInformation();
